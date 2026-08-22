/**
 * Backfill de traducciones inline (nombreI18n / descripcionI18n / tituloI18n) para
 * paradas de transporte e itinerarios de tour creados antes de la migración i18n.
 *
 * Uso:
 *   npx ts-node -r tsconfig-paths/register src/scripts/backfill-i18n.ts
 *   npx ts-node -r tsconfig-paths/register src/scripts/backfill-i18n.ts --forzar
 *
 * `--forzar` vuelve a traducir TODAS las filas (no solo las que están sin i18n).
 * Requiere las mismas variables de entorno que la app (DATABASE_URL y,
 * opcionalmente, GOOGLE_TRANSLATE_API_KEY).
 */
import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { AppModule } from '../app.module';
import { CatalogoService } from '../modulos/catalogo/aplicacion/catalogo.service';

async function main() {
  const forzar = process.argv.includes('--forzar');
  const logger = new Logger('BackfillI18n');
  const app = await NestFactory.createApplicationContext(AppModule, {
    logger: ['error', 'warn', 'log'],
  });
  try {
    const catalogo = app.get(CatalogoService);
    logger.log(`Iniciando backfill i18n${forzar ? ' (forzado)' : ''}…`);
    const resultado = await catalogo.rellenarI18nFaltante(forzar);
    logger.log(
      `Listo. Paradas actualizadas: ${resultado.paradas}, itinerarios actualizados: ${resultado.itinerarios}.`,
    );
  } finally {
    await app.close();
  }
}

main().catch((error) => {
  // eslint-disable-next-line no-console
  console.error('Backfill i18n falló:', error);
  process.exit(1);
});
