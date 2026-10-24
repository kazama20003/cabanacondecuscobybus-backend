import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { PrismaService } from '../compartido/prisma/prisma.service';

async function main() {
  const app = await NestFactory.createApplicationContext(AppModule, { logger: false });
  const prisma = app.get(PrismaService);
  try {
    const tours = await prisma.tour.findMany({
      where: { activo: true },
      select: { slug: true, duracionMinutos: true, itinerarios: { orderBy: { orden: 'asc' } } },
    });
    let etapasActualizadas = 0;
    for (const tour of tours) {
      const etapas = tour.itinerarios;
      if (!etapas.length) continue;
      const duracionTotal = Math.max(0, tour.duracionMinutos);
      for (let indice = 0; indice < etapas.length; indice += 1) {
        const etapa = etapas[indice];
        const inicio = Math.round((duracionTotal * indice) / etapas.length);
        const fin = Math.round((duracionTotal * (indice + 1)) / etapas.length);
        await prisma.itinerarioTour.update({
          where: { id: etapa.id },
          data: {
            minutosDesdeSalida: etapa.minutosDesdeSalida ?? inicio,
            duracionEstimadaMinutos: etapa.duracionEstimadaMinutos ?? fin - inicio,
          },
        });
        etapasActualizadas += 1;
      }
      process.stdout.write(`${tour.slug}: ${etapas.length} etapas / ${duracionTotal} min de duración total\n`);
    }
    process.stdout.write(`Listo: ${etapasActualizadas} etapas con horario relativo y duración estimada.\n`);
  } finally {
    await app.close();
  }
}

main().catch((error: unknown) => {
  process.stderr.write(`${error instanceof Error ? error.stack : String(error)}\n`);
  process.exitCode = 1;
});
