import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Resend } from 'resend';

type ReservaCorreo = {
  codigo: string;
  correoContacto: string;
  cantidadPasajeros: number;
  moneda: string;
  montoTotal: { toString(): string };
  montoAdelanto: { toString(): string };
};

@Injectable()
export class NotificacionesService {
  private readonly logger = new Logger(NotificacionesService.name);

  constructor(private readonly configuracion: ConfigService) {}

  async reservaCreada(reserva: ReservaCorreo) {
    const monto = `${reserva.moneda} ${reserva.montoTotal.toString()}`;
    await Promise.all([
      this.enviar({
        para: reserva.correoContacto,
        asunto: `Recibimos tu reserva ${reserva.codigo}`,
        texto: `Tu reserva ${reserva.codigo} fue recibida para ${reserva.cantidadPasajeros} pasajero(s). Total: ${monto}. Adelanto a pagar: ${reserva.moneda} ${reserva.montoAdelanto.toString()}.`,
      }),
      this.enviar({
        para: this.configuracion.get<string>('CORREO_ADMINISTRADOR'),
        asunto: `Nueva reserva ${reserva.codigo}`,
        texto: `Nueva reserva ${reserva.codigo}: ${reserva.cantidadPasajeros} pasajero(s), total ${monto}. Contacto: ${reserva.correoContacto}.`,
      }),
    ]);
  }

  async pagoAprobado(reserva: ReservaCorreo) {
    await this.enviar({
      para: reserva.correoContacto,
      asunto: `Pago confirmado para tu reserva ${reserva.codigo}`,
      texto: `Confirmamos tu pago para la reserva ${reserva.codigo}. Conserva este código para cualquier consulta.`,
    });
  }

  async comprobanteRegistrado(reserva: ReservaCorreo) {
    await this.enviar({
      para: this.configuracion.get<string>('CORREO_ADMINISTRADOR'),
      asunto: `Comprobante pendiente de revisión: ${reserva.codigo}`,
      texto: `La reserva ${reserva.codigo} registró un comprobante de saldo. Revísalo desde el panel administrativo.`,
    });
  }

  private async enviar(datos: { para?: string; asunto: string; texto: string }) {
    const apiKey = this.configuracion.get<string>('RESEND_API_KEY');
    const remitente = this.configuracion.get<string>('CORREO_REMITENTE');
    if (!apiKey || !remitente || !datos.para) {
      this.logger.warn(`Correo omitido (${datos.asunto}): falta configuración de Resend`);
      return;
    }
    try {
      const respuesta = await new Resend(apiKey).emails.send({
        from: remitente,
        to: datos.para,
        subject: datos.asunto,
        text: datos.texto,
      });
      if (respuesta.error) throw new Error(respuesta.error.message);
    } catch (error) {
      this.logger.error(`No se pudo enviar el correo "${datos.asunto}"`, error);
    }
  }
}
