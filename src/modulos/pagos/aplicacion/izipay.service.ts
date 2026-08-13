import {
  Injectable,
  Logger,
  ServiceUnavailableException,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createHmac } from 'node:crypto';

/**
 * Integración con Izipay (plataforma Lyra / micuentaweb.pe).
 *
 * Flujo:
 * 1. Backend pide un formToken a /V4/Charge/CreatePayment (Basic auth
 *    usuario:contraseña). El frontend renderiza el formulario embebido con
 *    ese formToken + la llave pública.
 * 2. Izipay notifica el resultado al webhook (IPN). La firma kr-hash se
 *    valida con HMAC-SHA256 usando la contraseña (kr-hash-key = "password").
 */
export interface RespuestaFormToken {
  formToken: string;
  llavePublica: string;
  pagoId: string;
}

interface TransaccionIpn {
  uuid?: string;
  status?: string;
}

export interface AnswerIpn {
  orderStatus?: string;
  orderDetails?: { orderId?: string };
  transactions?: TransaccionIpn[];
}

@Injectable()
export class IzipayService {
  private readonly logger = new Logger(IzipayService.name);

  constructor(private readonly configuracion: ConfigService) {}

  private credenciales() {
    const usuario = this.configuracion.get<string>('IZIPAY_USUARIO');
    const contrasena = this.configuracion.get<string>('IZIPAY_CONTRASENA');
    const llavePublica = this.configuracion.get<string>('IZIPAY_LLAVE_PUBLICA');
    if (!usuario || !contrasena || !llavePublica) {
      throw new ServiceUnavailableException(
        'Izipay no está configurado (IZIPAY_USUARIO, IZIPAY_CONTRASENA, IZIPAY_LLAVE_PUBLICA)',
      );
    }
    return { usuario, contrasena, llavePublica };
  }

  get configurado(): boolean {
    return Boolean(
      this.configuracion.get('IZIPAY_USUARIO') &&
        this.configuracion.get('IZIPAY_CONTRASENA') &&
        this.configuracion.get('IZIPAY_LLAVE_PUBLICA'),
    );
  }

  /** Crea el pago en Izipay y devuelve el formToken para el formulario embebido. */
  async crearFormToken(datos: {
    pagoId: string;
    montoCentimos: number;
    moneda: 'PEN' | 'USD';
    correoCliente: string;
    codigoReserva: string;
  }): Promise<RespuestaFormToken> {
    const { usuario, contrasena, llavePublica } = this.credenciales();
    const autorizacion = Buffer.from(`${usuario}:${contrasena}`).toString(
      'base64',
    );

    const respuesta = await fetch(
      'https://api.micuentaweb.pe/api-payment/V4/Charge/CreatePayment',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Basic ${autorizacion}`,
        },
        body: JSON.stringify({
          amount: datos.montoCentimos,
          currency: datos.moneda,
          orderId: datos.pagoId,
          customer: { email: datos.correoCliente },
          metadata: { codigoReserva: datos.codigoReserva },
        }),
      },
    );

    const cuerpo = (await respuesta.json()) as {
      status: string;
      answer?: { formToken?: string; errorMessage?: string };
    };
    if (cuerpo.status !== 'SUCCESS' || !cuerpo.answer?.formToken) {
      this.logger.error(`Izipay CreatePayment falló: ${JSON.stringify(cuerpo)}`);
      throw new ServiceUnavailableException(
        cuerpo.answer?.errorMessage ??
          'Izipay rechazó la creación del pago; revisa las credenciales',
      );
    }
    return {
      formToken: cuerpo.answer.formToken,
      llavePublica,
      pagoId: datos.pagoId,
    };
  }

  /**
   * Valida la firma del IPN (kr-hash) y devuelve el answer parseado.
   * kr-answer llega como JSON string; la firma es HMAC-SHA256(kr-answer, contraseña).
   */
  validarIpn(krAnswer: string, krHash: string): AnswerIpn {
    const { contrasena } = this.credenciales();
    const esperado = createHmac('sha256', contrasena)
      .update(krAnswer)
      .digest('hex');
    if (esperado !== krHash) {
      this.logger.warn('Webhook Izipay con firma inválida rechazado');
      throw new UnauthorizedException('Firma del webhook inválida');
    }
    return JSON.parse(krAnswer) as AnswerIpn;
  }
}
