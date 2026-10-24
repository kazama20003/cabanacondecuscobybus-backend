import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { CatalogoService } from '../modulos/catalogo/aplicacion/catalogo.service';
import { PrismaService } from '../compartido/prisma/prisma.service';

/**
 * Carga puntos de paso geográficos del corredor, no paradas comerciales.
 * Minutos son tiempos referenciales desde el inicio, calculados para ordenar
 * el recorrido. No indican detención, embarque ni descenso de pasajeros.
 */
const puntosPorRuta = [
  {
    slug: 'arequipa-juliaca',
    puntos: [
      { nombre: 'Imata', latitud: -15.83806, longitud: -71.09124, minutos: 125, descripcion: 'Punto geográfico del corredor altoandino Arequipa–Juliaca. Tiempo acumulado referencial; no confirma escala comercial ni descenso.' },
      { nombre: 'Santa Lucía', latitud: -15.69778, longitud: -70.60611, minutos: 225, descripcion: 'Localidad de paso del corredor hacia Juliaca. El servicio y las condiciones de la salida determinan si existe alguna detención.' },
    ],
  },
  {
    slug: 'arequipa-corire-valle-de-majes',
    puntos: [
      { nombre: 'El Pedregal, Majes', latitud: -16.36261, longitud: -72.19126, minutos: 95, descripcion: 'Localidad en el corredor hacia el valle de Majes. Punto de referencia; no implica parada comercial confirmada.' },
      { nombre: 'Aplao', latitud: -16.07583, longitud: -72.49389, minutos: 145, descripcion: 'Capital de la provincia de Castilla, antes de Corire en el valle. Tiempo acumulado aproximado, sujeto a la salida y a la carretera.' },
    ],
  },
  {
    slug: 'arequipa-pillones-e-imata',
    puntos: [
      { nombre: 'Imata', latitud: -15.83806, longitud: -71.09124, minutos: 160, descripcion: 'Localidad de referencia del corredor hacia Pillones e Imata. El acceso final a los atractivos y cualquier detención deben confirmarse para cada salida.' },
    ],
  },
  {
    slug: 'arequipa-cotahuasi',
    puntos: [
      { nombre: 'Corire', latitud: -16.227, longitud: -72.472, minutos: 180, descripcion: 'Punto del corredor Arequipa–Aplao–Chuquibamba–Cotahuasi. El itinerario vial publicado para esta ruta indica que no hay escala comercial; confirma las condiciones del operador.' },
      { nombre: 'Aplao', latitud: -16.07583, longitud: -72.49389, minutos: 240, descripcion: 'Localidad del valle de Majes dentro del corredor a Cotahuasi. Punto de paso referencial, no una parada comercial ofrecida.' },
      { nombre: 'Chuquibamba', latitud: -15.83806, longitud: -72.65361, minutos: 390, descripcion: 'Localidad de paso antes de continuar hacia Cotahuasi por la ruta regional. Tiempo acumulado orientativo; el estado de la vía puede alterarlo.' },
    ],
  },
  {
    slug: 'arequipa-yura',
    puntos: [],
  },
  {
    slug: 'chivay-cruz-del-condor',
    puntos: [
      { nombre: 'Maca', latitud: -15.6425, longitud: -71.76991, minutos: 45, descripcion: 'Localidad del corredor del valle del Colca hacia Pinchollo y la Cruz del Cóndor. Punto de paso; el servicio puede no detenerse.' },
      { nombre: 'Pinchollo', latitud: -15.61576, longitud: -71.84097, minutos: 70, descripcion: 'Localidad del corredor hacia la Cruz del Cóndor. El acceso, el horario y cualquier detención se confirman con la salida.' },
    ],
  },
  {
    slug: 'arequipa-mollendo',
    puntos: [
      { nombre: 'La Joya', latitud: -16.4238, longitud: -71.81834, minutos: 70, descripcion: 'Localidad de referencia en el corredor hacia la costa de Islay. Punto geográfico, no confirma parada comercial.' },
    ],
  },
  {
    slug: 'arequipa-cusco',
    puntos: [
      { nombre: 'Juliaca', latitud: -15.4997, longitud: -70.1333, minutos: 330, descripcion: 'Punto de referencia del corredor altiplánico. La ruta exacta puede variar según el servicio contratado; no se garantiza una escala.' },
      { nombre: 'Sicuani', latitud: -14.272, longitud: -71.229, minutos: 485, descripcion: 'Localidad cusqueña del corredor hacia Cusco. Tiempo acumulado aproximado; confirma ruta, terminal y escalas con el operador.' },
    ],
  },
  {
    slug: 'arequipa-puno',
    puntos: [
      { nombre: 'Imata', latitud: -15.83806, longitud: -71.09124, minutos: 145, descripcion: 'Localidad de referencia del corredor interandino hacia Puno. No confirma detención, embarque ni descenso.' },
      { nombre: 'Santa Lucía', latitud: -15.69778, longitud: -70.60611, minutos: 285, descripcion: 'Localidad del corredor altiplánico hacia Puno. Tiempo acumulado orientativo; la salida puede operar sin escala.' },
    ],
  },
  {
    slug: 'arequipa-chivay',
    puntos: [
      { nombre: 'Patahuasi', latitud: -15.7605, longitud: -71.40471, minutos: 95, descripcion: 'Localidad de referencia en el corredor altoandino hacia Chivay. Punto de paso, no confirma parada comercial.' },
    ],
  },
];

async function main() {
  const app = await NestFactory.createApplicationContext(AppModule, { logger: false });
  const prisma = app.get(PrismaService);
  const catalogo = app.get(CatalogoService);
  try {
    for (const ruta of puntosPorRuta) {
      const transporte = await prisma.transporte.findUnique({
        where: { slug: ruta.slug },
        include: { paradas: { select: { id: true } } },
      });
      if (!transporte) throw new Error(`No existe el transporte ${ruta.slug}`);
      if (transporte.paradas.length) {
        process.stdout.write(`Se conserva ${ruta.slug}: ya tiene ${transporte.paradas.length} paradas.\\n`);
        continue;
      }
      if (ruta.puntos.length) {
        await catalogo.definirParadas(transporte.id, ruta.puntos);
      }
      process.stdout.write(`${ruta.slug}: ${ruta.puntos.length} puntos de paso referenciales\\n`);
    }
  } finally {
    await app.close();
  }
}

main().catch((error: unknown) => {
  process.stderr.write(`${error instanceof Error ? error.stack : String(error)}\\n`);
  process.exitCode = 1;
});
