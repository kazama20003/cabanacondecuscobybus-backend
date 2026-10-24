import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { PrismaService } from '../compartido/prisma/prisma.service';

const slug = 'arequipa-cotahuasi';
const medios = [
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Panorama_Cotahuasi.jpg',
    clave: null,
    textoAlterno: 'Paisaje panorámico del cañón de Cotahuasi, fotografía de Manouel, dominio público',
    orden: 1,
    tipo: 'IMAGEN' as const,
  },
  {
    url: 'https://www.youtube.com/watch?v=AR7RBVbi66A',
    clave: null,
    textoAlterno: 'Video de atractivos turísticos del Cañón de Cotahuasi, Arequipa',
    orden: 2,
    tipo: 'VIDEO' as const,
  },
];

async function main() {
  const aplicacion = await NestFactory.createApplicationContext(AppModule, { logger: false });
  const prisma = aplicacion.get(PrismaService);
  try {
    const transporte = await prisma.transporte.findUnique({ where: { slug } });
    if (!transporte) throw new Error(`No existe el transporte ${slug}`);

    for (const medio of medios) {
      const existente = await prisma.imagen.findFirst({
        where: { transporteId: transporte.id, url: medio.url },
      });
      if (existente) {
        await prisma.imagen.update({ where: { id: existente.id }, data: medio });
      } else {
        await prisma.imagen.create({ data: { transporteId: transporte.id, ...medio } });
      }
    }

    await prisma.traduccionTransporte.upsert({
      where: { transporteId_idioma: { transporteId: transporte.id, idioma: 'es' } },
      create: {
        transporteId: transporte.id,
        idioma: 'es',
        titulo: 'Transporte de Arequipa a Cotahuasi',
        resumen: 'Traslado de larga distancia hacia Cotahuasi, en la provincia de La Unión y puerta de entrada a la Reserva Paisajística Subcuenca del Cotahuasi.',
        descripcion: 'Viaja desde Arequipa hasta Cotahuasi, en la provincia de La Unión. El trayecto por carretera tiene una duración estimada de 10 horas y atraviesa paisajes andinos. El tiempo puede variar por el clima, el tránsito y el estado de la vía. Antes de reservar, confirma la hora y el punto de embarque, el tipo de vehículo, la política de equipaje y la disponibilidad. Las paradas en ruta se coordinan según el servicio confirmado.',
        incluye: 'Traslado terrestre entre Arequipa y Cotahuasi según las condiciones confirmadas de la reserva.',
        noIncluye: 'Alojamiento, alimentación, entradas y servicios no descritos expresamente en la reserva.',
        estado: 'PUBLICADA',
      },
      update: {
        titulo: 'Transporte de Arequipa a Cotahuasi',
        resumen: 'Traslado de larga distancia hacia Cotahuasi, en la provincia de La Unión y puerta de entrada a la Reserva Paisajística Subcuenca del Cotahuasi.',
        descripcion: 'Viaja desde Arequipa hasta Cotahuasi, en la provincia de La Unión. El trayecto por carretera tiene una duración estimada de 10 horas y atraviesa paisajes andinos. El tiempo puede variar por el clima, el tránsito y el estado de la vía. Antes de reservar, confirma la hora y el punto de embarque, el tipo de vehículo, la política de equipaje y la disponibilidad. Las paradas en ruta se coordinan según el servicio confirmado.',
        incluye: 'Traslado terrestre entre Arequipa y Cotahuasi según las condiciones confirmadas de la reserva.',
        noIncluye: 'Alojamiento, alimentación, entradas y servicios no descritos expresamente en la reserva.',
        estado: 'PUBLICADA',
      },
    });

    process.stdout.write(`Actualizado ${slug}: 2 imágenes, 1 video y descripción en español.\n`);
  } finally {
    await aplicacion.close();
  }
}

main().catch((error: unknown) => {
  process.stderr.write(`${error instanceof Error ? error.stack : String(error)}\n`);
  process.exitCode = 1;
});
