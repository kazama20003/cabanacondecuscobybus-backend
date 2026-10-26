import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { CatalogoService } from '../modulos/catalogo/aplicacion/catalogo.service';
import { PrismaService } from '../compartido/prisma/prisma.service';

type Tarifa = { hora: string; capacidad: number; precioPen: number; precioUsd: number };

/** Tarifas de referencia tomadas de salidas ya publicadas en el catálogo. */
const tarifasEventos: Record<string, Tarifa> = {
  'virgen-de-la-candelaria-chivay-2027': { hora: '08:00', capacidad: 12, precioPen: 210, precioUsd: 59 },
  'semana-santa-cabanaconde-2027': { hora: '08:00', capacidad: 12, precioPen: 250, precioUsd: 70 },
  'peregrinacion-virgen-chapi-2027': { hora: '08:00', capacidad: 12, precioPen: 210, precioUsd: 59 },
  'aniversario-provincia-caylloma-chivay-2027': { hora: '08:00', capacidad: 12, precioPen: 210, precioUsd: 59 },
  'inti-raymi-cusco-2027': { hora: '08:00', capacidad: 12, precioPen: 250, precioUsd: 70 },
  'virgen-del-carmen-cabanaconde-2027': { hora: '08:00', capacidad: 12, precioPen: 210, precioUsd: 59 },
  'aniversario-arequipa-2027': { hora: '08:00', capacidad: 12, precioPen: 150, precioUsd: 42 },
  'senor-de-los-milagros-arequipa-2027': { hora: '08:00', capacidad: 12, precioPen: 120, precioUsd: 33 },
  'inmaculada-concepcion-wititi-chivay-2027': { hora: '08:00', capacidad: 12, precioPen: 210, precioUsd: 59 },
  'santurantikuy-cusco-2027': { hora: '08:00', capacidad: 12, precioPen: 120, precioUsd: 33 },
};

/** Próximas fechas de referencia para tours cuya única salida ya venció. */
const tarifasTours: Record<string, Tarifa & { fecha: string }> = {
  'tour-al-canon-del-colca-y-cruz-del-condor': {
    fecha: '2026-11-14', hora: '03:00', capacidad: 12, precioPen: 210, precioUsd: 59,
  },
  'banos-termales-de-yura-y-paisaje-volcanico': {
    fecha: '2026-11-15', hora: '09:00', capacidad: 12, precioPen: 120, precioUsd: 33,
  },
  'cotahuasi-miradores-y-pueblos-del-canon': {
    fecha: '2026-11-16', hora: '04:00', capacidad: 10, precioPen: 320, precioUsd: 89,
  },
};

const estadosReservables = ['A_LA_VENTA', 'PENDIENTE_DE_MINIMO', 'CONFIRMADA'] as const;

function fechaLocal(fecha: string, hora: string): Date {
  return new Date(`${fecha}T${hora}:00-05:00`);
}

async function main() {
  const app = await NestFactory.createApplicationContext(AppModule, { logger: false });
  const prisma = app.get(PrismaService);
  const catalogo = app.get(CatalogoService);
  const ahora = new Date();
  let creadas = 0;
  let conservadas = 0;

  try {
    const eventos = await prisma.tour.findMany({
      where: { esEvento: true, activo: true },
      select: { id: true, slug: true, temporadaInicio: true },
    });
    for (const evento of eventos) {
      const tarifa = tarifasEventos[evento.slug];
      if (!tarifa) throw new Error(`Falta tarifa de referencia para el evento ${evento.slug}`);
      if (!evento.temporadaInicio) throw new Error(`El evento ${evento.slug} no tiene fecha de temporada`);
      const fecha = evento.temporadaInicio.toISOString().slice(0, 10);
      const fechaHoraSalida = fechaLocal(fecha, tarifa.hora);
      if (fechaHoraSalida <= ahora) {
        process.stdout.write(`Evento omitido porque su fecha ya pasó: ${evento.slug}\n`);
        continue;
      }
      const existente = await prisma.salidaTour.findFirst({
        where: { tourId: evento.id, fechaHoraSalida: { gt: ahora }, estado: { in: [...estadosReservables] } },
        select: { id: true },
      });
      if (existente) {
        conservadas++;
        continue;
      }
      await catalogo.crearSalidaTour({
        tourId: evento.id,
        fechaHoraSalida,
        capacidad: tarifa.capacidad,
        minimoPasajeros: 2,
        precioPen: tarifa.precioPen,
        precioUsd: tarifa.precioUsd,
      });
      creadas++;
      process.stdout.write(`Salida de evento publicada: ${evento.slug} (${fecha} ${tarifa.hora})\n`);
    }

    for (const [slug, tarifa] of Object.entries(tarifasTours)) {
      const tour = await prisma.tour.findUnique({ where: { slug }, select: { id: true } });
      if (!tour) throw new Error(`No existe el tour ${slug}`);
      const fechaHoraSalida = fechaLocal(tarifa.fecha, tarifa.hora);
      if (fechaHoraSalida <= ahora) throw new Error(`La fecha configurada para ${slug} ya pasó`);
      const existente = await prisma.salidaTour.findFirst({
        where: { tourId: tour.id, fechaHoraSalida: { gt: ahora }, estado: { in: [...estadosReservables] } },
        select: { id: true },
      });
      if (existente) {
        conservadas++;
        continue;
      }
      await catalogo.crearSalidaTour({
        tourId: tour.id,
        fechaHoraSalida,
        capacidad: tarifa.capacidad,
        minimoPasajeros: 2,
        precioPen: tarifa.precioPen,
        precioUsd: tarifa.precioUsd,
      });
      creadas++;
      process.stdout.write(`Nueva salida de tour publicada: ${slug} (${tarifa.fecha} ${tarifa.hora})\n`);
    }

    process.stdout.write(`Listo: ${creadas} salidas creadas; ${conservadas} servicios ya tenían una salida futura reservable.\n`);
  } finally {
    await app.close();
  }
}

void main().catch((error: unknown) => {
  process.stderr.write(`${error instanceof Error ? error.stack : String(error)}\n`);
  process.exitCode = 1;
});
