import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  TranslateClient,
  TranslateTextCommand,
} from '@aws-sdk/client-translate';

/**
 * Traducción automática.
 * - Con credenciales AWS (AWS_REGION + AWS_ACCESS_KEY_ID + AWS_SECRET_ACCESS_KEY)
 *   usa Amazon Translate (2M caracteres/mes gratis el primer año, luego $15/millón).
 * - Sin credenciales, usa el endpoint gratuito de Google (client=gtx) —
 *   suficiente para desarrollo.
 * Si la traducción falla, devuelve el texto original (nunca bloquea el guardado).
 */
@Injectable()
export class TraduccionService {
  private readonly logger = new Logger(TraduccionService.name);
  private readonly clienteAws?: TranslateClient;

  constructor(configuracion: ConfigService) {
    const region = configuracion.get<string>('AWS_REGION');
    const acceso = configuracion.get<string>('AWS_ACCESS_KEY_ID');
    const secreto = configuracion.get<string>('AWS_SECRET_ACCESS_KEY');
    if (region && acceso && secreto) {
      this.clienteAws = new TranslateClient({
        region,
        credentials: { accessKeyId: acceso, secretAccessKey: secreto },
      });
    }
  }

  async traducir(texto: string, de: string, a: string): Promise<string> {
    if (!texto.trim() || de === a) return texto;
    try {
      return this.clienteAws
        ? await this.traducirAws(texto, de, a)
        : await this.traducirGratuito(texto, de, a);
    } catch (error) {
      this.logger.warn(
        `No se pudo traducir de ${de} a ${a}: ${error instanceof Error ? error.message : error}`,
      );
      return texto;
    }
  }

  async traducirCampos<T extends Record<string, string>>(
    campos: T,
    de: string,
    a: string,
  ): Promise<T> {
    const entradas = await Promise.all(
      Object.entries(campos).map(async ([clave, valor]) => [
        clave,
        await this.traducir(valor, de, a),
      ]),
    );
    return Object.fromEntries(entradas) as T;
  }

  private async traducirAws(texto: string, de: string, a: string) {
    const respuesta = await this.clienteAws!.send(
      new TranslateTextCommand({
        Text: texto,
        SourceLanguageCode: de,
        TargetLanguageCode: a,
      }),
    );
    return respuesta.TranslatedText ?? texto;
  }

  private async traducirGratuito(texto: string, de: string, a: string) {
    const url =
      `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${de}&tl=${a}` +
      `&dt=t&q=${encodeURIComponent(texto)}`;
    const respuesta = await fetch(url);
    if (!respuesta.ok) throw new Error(`Endpoint gratuito HTTP ${respuesta.status}`);
    const datos = (await respuesta.json()) as [[string][]];
    return datos[0].map((segmento) => segmento[0]).join('');
  }
}
