import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { IzipayService } from '../aplicacion/izipay.service';
import { PagosService } from '../aplicacion/pagos.service';

/**
 * Webhook IPN de Izipay. Configurar en el Back Office de Izipay la URL:
 *   {URL_PUBLICA}/api/pagos/izipay/webhook
 * Llega como application/x-www-form-urlencoded con kr-answer y kr-hash.
 */
@Controller('pagos')
export class PagosController {
  constructor(
    private readonly pagos: PagosService,
    private readonly izipay: IzipayService,
  ) {}

  @Post('izipay/webhook')
  async webhookIzipay(
    @Body('kr-answer') krAnswer?: string,
    @Body('kr-hash') krHash?: string,
  ) {
    if (!krAnswer || !krHash) {
      throw new BadRequestException('Faltan kr-answer o kr-hash');
    }
    const answer = this.izipay.validarIpn(krAnswer, krHash);
    return this.pagos.procesarIpn(answer);
  }
}
