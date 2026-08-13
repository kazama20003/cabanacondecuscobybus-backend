import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

/**
 * Traducción automática con Google Translate.
 * - Si GOOGLE_TRANSLATE_API_KEY está configurada usa la API oficial v2.
 * - Si no, usa el endpoint gratuito (client=gtx) — sin configuración,
 *   suficiente para desarrollo y volúmenes bajos.
 * Si la traducción falla, devuelve el texto original (nunca bloquea el guardado).
 */
@Injectable()
export class TraduccionService {
  private readonly logger = new Logger(TraduccionService.name);
  private readonly apiKey?: string;

  constructor(configuracion: ConfigService) {
    this.apiKey = configuracion.get<string>('GOOGLE_TRANSLATE_API_KEY');
  }

  async traducir(texto: string, de: string, a: string): Promise<string> {
    if (!texto.trim() || de === a) return texto;
    try {
      return this.apiKey
        ? await this.traducirOficial(texto, de, a)
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

  private async traducirOficial(texto: string, de: string, a: string) {
    const respuesta = await fetch(
      `https://translation.googleapis.com/language/translate/v2?key=${this.apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ q: texto, source: de, target: a, format: 'text' }),
      },
    );
    if (!respuesta.ok) throw new Error(`API oficial HTTP ${respuesta.status}`);
    const datos = (await respuesta.json()) as {
      data: { translations: { translatedText: string }[] };
    };
    return datos.data.translations[0].translatedText;
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
