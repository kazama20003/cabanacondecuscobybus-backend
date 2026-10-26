import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
  ServiceUnavailableException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  EstadoPago,
  EstadoReserva,
  EstadoSalida,
  MetodoPago,
  Moneda,
  Prisma,
} from '@prisma/client';
import { randomBytes } from 'node:crypto';
import { PrismaService } from '../../../compartido/prisma/prisma.service';
import { NotificacionesService } from '../../../compartido/notificaciones/notificaciones.service';
import { IzipayService } from '../../pagos/aplicacion/izipay.service';
import { PromocionesService } from '../../promociones/aplicacion/promociones.service';

type Pasajero = {
  nombres: string;
  apellidos: string;
  nacionalidad: string;
  tipoDocumento: string;
  numeroDocumento: string;
};

@Injectable()
export class ReservasService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly izipay: IzipayService,
    private readonly promociones: PromocionesService,
    private readonly notificaciones: NotificacionesService,
    private readonly configuracion: ConfigService,
  ) {}

  private get minutosRetencionReserva() {
    const valor = Number(this.configuracion.get('RESERVA_HOLD_MINUTOS', 20));
    return Number.isFinite(valor) && valor >= 5 && valor <= 120 ? valor : 20;
  }

  async crear(datos: {
    tipoServicio: 'TRANSPORTE' | 'TOUR';
    salidaId: string;
    correoContacto: string;
    telefonoWhatsApp: string;
    paisResidencia?: string;
    moneda: Moneda;
    pasajeros: Pasajero[];
    usuarioId?: string;
    codigoPromocion?: string;
    aceptaPoliticas: boolean;
    versionPoliticas: string;
  }) {
    if (!datos.aceptaPoliticas)
      throw new BadRequestException('Debes aceptar las políticas antes de reservar.');
    const monedasHabilitadas = (this.configuracion.get('MONEDAS_HABILITADAS', 'PEN,USD') as string)
      .split(',').map((moneda) => moneda.trim().toUpperCase());
    if (!monedasHabilitadas.includes(datos.moneda))
      throw new BadRequestException('La moneda elegida no está habilitada para reservas.');
    const versionActual = this.configuracion.get('VERSION_POLITICAS', 'dev-sin-version');
    if (datos.versionPoliticas !== versionActual)
      throw new ConflictException('Las políticas cambiaron. Recarga la página y vuelve a aceptarlas.');
    if (this.configuracion.get('ENTORNO') === 'produccion') {
      const requeridas = ['URL_TERMINOS', 'URL_PRIVACIDAD', 'URL_CANCELACIONES', 'VERSION_POLITICAS'];
      const faltantes = requeridas.filter((key) => !this.configuracion.get(key));
      if (faltantes.length)
        throw new ServiceUnavailableException(`Falta configurar: ${faltantes.join(', ')}`);
    }
    if (!datos.pasajeros.length)
      throw new BadRequestException('Debe registrar al menos un pasajero');

    const reserva = await this.prisma.$transaction(
      async (tx) => {
        const ahora = new Date();
        const salida =
          datos.tipoServicio === 'TRANSPORTE'
            ? await tx.salidaTransporte.findUnique({
                where: { id: datos.salidaId },
              })
            : await tx.salidaTour.findUnique({ where: { id: datos.salidaId } });
        const estadosDisponibles: EstadoSalida[] = [
          EstadoSalida.A_LA_VENTA,
          EstadoSalida.PENDIENTE_DE_MINIMO,
          EstadoSalida.CONFIRMADA,
        ];
        if (!salida || !estadosDisponibles.includes(salida.estado))
          throw new NotFoundException('Salida no disponible');
        const esEvento = datos.tipoServicio === 'TOUR' && !!(await tx.tour.findUnique({
          where: { id: (salida as { tourId: string }).tourId },
          select: { esEvento: true },
        }))?.esEvento;
        const claveCanales = esEvento ? 'CANALES_RESERVA_EVENTOS' : datos.tipoServicio === 'TOUR' ? 'CANALES_RESERVA_TOURS' : 'CANALES_RESERVA_TRANSPORTES';
        const canalesHabilitados = (this.configuracion.get(claveCanales, this.configuracion.get('CANALES_RESERVA', 'ONLINE,WHATSAPP')) as string)
          .split(',').map((canal) => canal.trim().toUpperCase());
        if (!canalesHabilitados.includes('ONLINE'))
          throw new ServiceUnavailableException('La reserva en línea no está habilitada para este servicio. Contacta a la agencia por WhatsApp.');
        if (this.configuracion.get('IZIPAY_HABILITADO', 'true') !== 'true')
          throw new ServiceUnavailableException('El pago en línea no está habilitado. Contacta a la agencia por WhatsApp.');
        // Valida el cupón contra la categoría y la entidad concreta de la salida.
        const promocion = datos.codigoPromocion
          ? await this.promociones.validarCupon(
              datos.codigoPromocion,
              datos.tipoServicio === 'TRANSPORTE' ? 'TRANSPORTES' : 'TOURS',
              'transporteId' in salida ? salida.transporteId : salida.tourId,
            )
          : null;
        const ocupacion = await tx.reserva.aggregate({
          where: {
            ...(datos.tipoServicio === 'TRANSPORTE'
              ? { salidaTransporteId: datos.salidaId }
              : { salidaTourId: datos.salidaId }),
            estado: { notIn: [EstadoReserva.CANCELADA, EstadoReserva.VENCIDA] },
            OR: [
              { estado: { not: EstadoReserva.PENDIENTE_PAGO } },
              {
                estado: EstadoReserva.PENDIENTE_PAGO,
                expiraEn: { gt: ahora },
              },
            ],
          },
          _sum: { cantidadPasajeros: true },
        });
        if (
          (ocupacion._sum.cantidadPasajeros ?? 0) + datos.pasajeros.length >
          salida.capacidad
        )
          throw new BadRequestException('No hay cupos suficientes');
        const montoBruto =
          datos.moneda === Moneda.PEN
            ? salida.precioPen.mul(datos.pasajeros.length)
            : salida.precioUsd.mul(datos.pasajeros.length);
        const montoDescuento = promocion
          ? this.promociones.calcularDescuento(promocion, montoBruto)
          : new Prisma.Decimal(0);
        const montoTotal = montoBruto.sub(montoDescuento);
        const montoAdelanto = salida.permiteAdelanto
          ? montoTotal.mul(salida.porcentajeAdelanto).div(100)
          : montoTotal;
        if (promocion) {
          await tx.promocion.update({
            where: { id: promocion.id },
            data: { usos: { increment: 1 } },
          });
        }
        const reserva = await tx.reserva.create({
          data: {
            codigo: this.codigo(),
            usuarioId: datos.usuarioId,
            salidaTransporteId:
              datos.tipoServicio === 'TRANSPORTE' ? datos.salidaId : undefined,
            salidaTourId:
              datos.tipoServicio === 'TOUR' ? datos.salidaId : undefined,
            correoContacto: datos.correoContacto.toLowerCase(),
            telefonoWhatsApp: datos.telefonoWhatsApp,
            paisResidencia: datos.paisResidencia,
            cantidadPasajeros: datos.pasajeros.length,
            moneda: datos.moneda,
            montoTotal,
            montoAdelanto,
            montoSaldo: montoTotal.sub(montoAdelanto),
            promocionId: promocion?.id,
            montoDescuento,
            expiraEn: new Date(ahora.getTime() + this.minutosRetencionReserva * 60_000),
            aceptoPoliticasEn: ahora,
            versionPoliticas: datos.versionPoliticas,
            tokenGestionInvitado: randomBytes(24).toString('hex'),
            pasajeros: { create: datos.pasajeros },
            historial: {
              create: {
                estado: EstadoReserva.PENDIENTE_PAGO,
                detalle: 'Reserva creada',
              },
            },
          },
          include: { pasajeros: true },
        });
        return reserva;
      },
      { isolationLevel: Prisma.TransactionIsolationLevel.Serializable },
    );
    void this.notificaciones.reservaCreada(reserva);
    return reserva;
  }

  /** Reservas del usuario logueado (perfil del turista). */
  misReservas(usuarioId: string) {
    return this.prisma.reserva.findMany({
      where: { usuarioId },
      include: {
        pasajeros: true,
        pagos: true,
        promocion: { select: { titulo: true, codigo: true } },
        salidaTransporte: {
          include: {
            transporte: {
              select: { origenNombre: true, destinoNombre: true, slug: true },
            },
          },
        },
        salidaTour: {
          include: { tour: { select: { destinoNombre: true, slug: true } } },
        },
      },
      orderBy: { creadoEn: 'desc' },
    });
  }

  async verInvitado(codigo: string, token: string) {
    const reserva = await this.prisma.reserva.findFirst({
      where: { codigo, tokenGestionInvitado: token },
      include: {
        pasajeros: true,
        pagos: true,
        salidaTransporte: { include: { transporte: true } },
        salidaTour: { include: { tour: true } },
      },
    });
    if (!reserva) throw new NotFoundException('Reserva no encontrada');
    return reserva;
  }

  async iniciarPagoAdelanto(codigo: string) {
    if (this.configuracion.get('IZIPAY_HABILITADO', 'true') !== 'true')
      throw new ServiceUnavailableException('El pago en línea no está habilitado. Contacta a la agencia para coordinar el pago.');
    const reserva = await this.prisma.reserva.findUnique({ where: { codigo } });
    if (!reserva) throw new NotFoundException('Reserva no encontrada');
    if (reserva.estado !== EstadoReserva.PENDIENTE_PAGO)
      throw new BadRequestException('La reserva ya no está pendiente de pago');
    if (reserva.expiraEn && reserva.expiraEn <= new Date()) {
      await this.marcarReservaVencida(reserva.id);
      throw new ConflictException('El plazo para pagar esta reserva venció. Elige otra salida.');
    }

    // Reutiliza el pago pendiente si el cliente reintenta (no duplica).
    let pago = await this.prisma.pago.findFirst({
      where: {
        reservaId: reserva.id,
        metodo: MetodoPago.IZIPAY,
        estado: EstadoPago.PENDIENTE,
        esAdelanto: true,
      },
    });
    if (!pago) {
      pago = await this.prisma.pago.create({
        data: {
          reservaId: reserva.id,
          monto: reserva.montoAdelanto,
          moneda: reserva.moneda,
          metodo: MetodoPago.IZIPAY,
          esAdelanto: true,
        },
      });
    }

    const izipay = await this.izipay.crearFormToken({
      pagoId: pago.id,
      // Izipay trabaja en céntimos
      montoCentimos: Math.round(pago.monto.toNumber() * 100),
      moneda: pago.moneda,
      correoCliente: reserva.correoContacto,
      codigoReserva: reserva.codigo,
    });

    return {
      pagoId: pago.id,
      monto: pago.monto,
      moneda: pago.moneda,
      estado: pago.estado,
      formToken: izipay.formToken,
      llavePublica: izipay.llavePublica,
    };
  }

  async registrarComprobanteSaldo(
    codigo: string,
    token: string,
    datos: {
      codigoOperacion: string;
      urlComprobante: string;
      metodo: MetodoPago;
    },
  ) {
    const reserva = await this.prisma.reserva.findFirst({
      where: { codigo, tokenGestionInvitado: token },
    });
    if (!reserva) throw new NotFoundException('Reserva no encontrada');
    if (datos.metodo === MetodoPago.IZIPAY)
      throw new BadRequestException('Los pagos Izipay se confirman únicamente mediante IPN firmado.');
    if (reserva.estado === EstadoReserva.PENDIENTE_PAGO && reserva.expiraEn && reserva.expiraEn <= new Date()) {
      await this.marcarReservaVencida(reserva.id);
      throw new ConflictException('El plazo de reserva venció. No se puede registrar un pago para esta salida.');
    }
    const estadosConSaldo: EstadoReserva[] = [
      EstadoReserva.SALDO_PENDIENTE,
      EstadoReserva.ADELANTO_PAGADO,
    ];
    if (!estadosConSaldo.includes(reserva.estado))
      throw new BadRequestException('La reserva no tiene saldo pendiente');
    const pago = await this.prisma.pago.create({
      data: {
        reservaId: reserva.id,
        monto: reserva.montoSaldo,
        moneda: reserva.moneda,
        metodo: datos.metodo,
        codigoOperacion: datos.codigoOperacion,
        urlComprobante: datos.urlComprobante,
      },
    });
    void this.notificaciones.comprobanteRegistrado(reserva);
    return pago;
  }

  async confirmarPago(pagoId: string, administradorId: string) {
    let pagoFueConfirmado = false;
    const pago = await this.prisma.$transaction(async (tx) => {
      const pago = await tx.pago.findUnique({
        where: { id: pagoId },
        include: { reserva: true },
      });
      if (!pago) throw new NotFoundException('Pago no encontrado');
      if (pago.metodo === MetodoPago.IZIPAY)
        throw new BadRequestException('Izipay solo puede confirmarse con su notificación IPN firmada.');
      if (pago.estado === EstadoPago.APROBADO) return pago;
      if (pago.reserva.estado === EstadoReserva.CANCELADA || pago.reserva.estado === EstadoReserva.VENCIDA)
        throw new ConflictException('No se puede confirmar un pago de una reserva vencida o cancelada.');
      if (pago.estado !== EstadoPago.PENDIENTE)
        throw new ConflictException('El comprobante ya no está pendiente de revisión.');
      await tx.pago.update({
        where: { id: pagoId },
        data: {
          estado: EstadoPago.APROBADO,
          confirmadoPorId: administradorId,
          confirmadoEn: new Date(),
        },
      });
      pagoFueConfirmado = true;
      const estado =
        pago.esAdelanto && pago.reserva.montoSaldo.gt(0)
          ? EstadoReserva.SALDO_PENDIENTE
          : EstadoReserva.PAGO_TOTAL_PAGADO;
      await tx.reserva.update({
        where: { id: pago.reservaId },
        data: {
          estado,
          historial: {
            create: { estado, detalle: 'Pago confirmado por administración' },
          },
        },
      });
      await tx.auditoria.create({
        data: {
          usuarioId: administradorId,
          accion: 'CONFIRMAR_PAGO_MANUAL',
          entidad: 'PAGO',
          entidadId: pagoId,
          descripcion: `Comprobante ${pago.metodo} revisado y confirmado para la reserva ${pago.reserva.codigo}`,
          detalle: { monto: pago.monto.toString(), moneda: pago.moneda, codigoOperacion: pago.codigoOperacion },
        },
      });
      return { ...pago, estado: EstadoPago.APROBADO };
    });
    if (pagoFueConfirmado) {
      const reserva = await this.prisma.reserva.findUnique({
        where: { id: pago.reservaId },
      });
      if (reserva) void this.notificaciones.pagoAprobado(reserva);
    }
    return pago;
  }

  async marcarReservaVencida(reservaId: string) {
    return this.prisma.$transaction(async (tx) => {
      const resultado = await tx.reserva.updateMany({
        where: {
          id: reservaId,
          estado: EstadoReserva.PENDIENTE_PAGO,
          expiraEn: { lte: new Date() },
        },
        data: { estado: EstadoReserva.VENCIDA },
      });
      if (resultado.count) {
        await tx.historialReserva.create({
          data: {
            reservaId,
            estado: EstadoReserva.VENCIDA,
            detalle: 'Reserva vencida por falta de pago dentro del plazo',
          },
        });
      }
      return resultado.count > 0;
    });
  }

  async solicitarGestionReserva(
    codigo: string,
    token: string | undefined,
    usuarioId: string | undefined,
    solicitud: { tipo: 'CANCELACION' | 'REPROGRAMACION'; motivo: string; fechaPreferida?: string },
  ) {
    const credenciales: Prisma.ReservaWhereInput[] = [];
    if (token) credenciales.push({ tokenGestionInvitado: token });
    if (usuarioId) credenciales.push({ usuarioId });
    if (!credenciales.length) throw new BadRequestException('Debes iniciar sesión o usar el enlace seguro de tu reserva.');
    const reserva = await this.prisma.reserva.findFirst({
      where: { codigo, OR: credenciales },
    });
    if (!reserva) throw new NotFoundException('Reserva no encontrada');
    if (reserva.estado === EstadoReserva.CANCELADA || reserva.estado === EstadoReserva.COMPLETADA || reserva.estado === EstadoReserva.VENCIDA)
      throw new ConflictException('Esta reserva ya no admite solicitudes de cambio. Contacta con la agencia.');
    const motivo = solicitud.motivo.trim();
    if (!motivo) throw new BadRequestException('Indica el motivo de la solicitud.');
    if (solicitud.fechaPreferida && (!Number.isFinite(Date.parse(solicitud.fechaPreferida)) || new Date(solicitud.fechaPreferida) <= new Date()))
      throw new BadRequestException('La fecha preferida debe ser futura.');
    const accion = solicitud.tipo === 'CANCELACION' ? 'SOLICITUD_CANCELACION' : 'SOLICITUD_REPROGRAMACION';
    await this.prisma.auditoria.create({
      data: {
        usuarioId,
        accion,
        entidad: 'RESERVA',
        entidadId: reserva.id,
        descripcion: `${solicitud.tipo === 'CANCELACION' ? 'Cancelación' : 'Reprogramación'} solicitada para la reserva ${codigo}; pendiente de revisión administrativa`,
        detalle: {
          motivo,
          fechaPreferida: solicitud.fechaPreferida ?? null,
          estadoReservaAlSolicitar: reserva.estado,
        },
      },
    });
    void this.notificaciones.solicitudGestionReserva(reserva, solicitud.tipo, motivo, solicitud.fechaPreferida);
    return { recibida: true, mensaje: 'Solicitud recibida y enviada a administración. La reserva conserva su estado hasta la revisión.' };
  }

  async listarPagosAdministracion(filtros: {
    pagina?: number;
    porPagina?: number;
    estado?: EstadoPago;
    metodo?: MetodoPago;
    codigoReserva?: string;
  }) {
    const pagina = Math.max(1, Math.trunc(filtros.pagina ?? 1));
    const porPagina = Math.min(
      100,
      Math.max(1, Math.trunc(filtros.porPagina ?? 20)),
    );
    const where: Prisma.PagoWhereInput = {
      ...(filtros.estado ? { estado: filtros.estado } : {}),
      ...(filtros.metodo ? { metodo: filtros.metodo } : {}),
      ...(filtros.codigoReserva
        ? {
            reserva: {
              codigo: {
                contains: filtros.codigoReserva,
                mode: 'insensitive',
              },
            },
          }
        : {}),
    };

    const [datos, total] = await Promise.all([
      this.prisma.pago.findMany({
        where,
        orderBy: { creadoEn: 'desc' },
        skip: (pagina - 1) * porPagina,
        take: porPagina,
        include: {
          reserva: {
            select: { codigo: true, correoContacto: true, estado: true },
          },
        },
      }),
      this.prisma.pago.count({ where }),
    ]);

    return {
      datos,
      total,
      pagina,
      porPagina,
      totalPaginas: Math.ceil(total / porPagina),
    };
  }

  private codigo() {
    return `ITP-${new Date().getFullYear()}-${randomBytes(4).toString('hex').toUpperCase()}`;
  }
}
