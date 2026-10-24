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
      { nombre: 'Imata', latitud: -15.83806, longitud: -71.09124, minutos: 125, descripcion: 'Referencia geográfica en el tramo altoandino entre Arequipa y el altiplano de Puno. El paisaje y la altitud cambian a lo largo de este corredor; el tiempo mostrado es acumulado y aproximado, y no confirma escala comercial, descenso ni embarque.' },
      { nombre: 'Santa Lucía', latitud: -15.69778, longitud: -70.60611, minutos: 225, descripcion: 'Localidad situada en el corredor ferroviario y vial hacia Juliaca, útil como referencia para entender el avance del trayecto. La ruta y cualquier detención dependen de la salida y del operador; consulta los servicios a bordo y las paradas autorizadas antes de viajar.' },
    ],
  },
  {
    slug: 'arequipa-corire-valle-de-majes',
    puntos: [
      { nombre: 'El Pedregal, Majes', latitud: -16.36261, longitud: -72.19126, minutos: 95, descripcion: 'Referencia urbana del distrito de Majes en la ruta hacia el valle. Este marcador sirve para ubicar el recorrido, no garantiza que el vehículo ingrese a la localidad o recoja pasajeros; confirma el punto de llegada de tu salida.' },
      { nombre: 'Aplao', latitud: -16.07583, longitud: -72.49389, minutos: 145, descripcion: 'Capital de la provincia de Castilla y localidad del corredor antes de Corire. El tiempo acumulado es orientativo y puede variar por tránsito y carretera; una visita al centro o una parada solo están incluidas si el operador las confirma expresamente.' },
    ],
  },
  {
    slug: 'arequipa-pillones-e-imata',
    puntos: [
      { nombre: 'Imata', latitud: -15.83806, longitud: -71.09124, minutos: 160, descripcion: 'Localidad de referencia en el corredor altoandino hacia Imata y los sectores de Pillones. La ubicación del atractivo puede quedar fuera de la vía principal; confirma si tu servicio llega hasta el acceso, si requiere caminata y si incluye una detención.' },
    ],
  },
  {
    slug: 'arequipa-cotahuasi',
    puntos: [
      { nombre: 'Corire', latitud: -16.227, longitud: -72.472, minutos: 180, descripcion: 'Referencia del valle de Majes en el corredor regional que continúa hacia Chuquibamba y Cotahuasi. No representa una visita turística ni una escala garantizada; verifica con el operador si la unidad permite descenso o recoge pasajeros en este punto.' },
      { nombre: 'Aplao', latitud: -16.07583, longitud: -72.49389, minutos: 240, descripcion: 'Localidad del valle de Majes incorporada como referencia geográfica de la ruta hacia La Unión. El tiempo acumulado puede cambiar por las condiciones de carretera; no se ofrece tiempo libre, alimentación ni parada comercial a menos que conste en la confirmación.' },
      { nombre: 'Chuquibamba', latitud: -15.83806, longitud: -72.65361, minutos: 390, descripcion: 'Localidad de la provincia de Condesuyos en el trayecto regional antes de continuar hacia Cotahuasi. El tramo de montaña puede alargar el recorrido y el dato horario es aproximado; confirma descansos, condiciones del vehículo y llegada con el transportista.' },
    ],
  },
  {
    slug: 'arequipa-yura',
    puntos: [],
  },
  {
    slug: 'chivay-cruz-del-condor',
    puntos: [
      { nombre: 'Maca', latitud: -15.6425, longitud: -71.76991, minutos: 45, descripcion: 'Localidad del valle del Colca ubicada en el corredor que continúa hacia Pinchollo y la Cruz del Cóndor. El tiempo es orientativo desde Chivay y este punto geográfico no significa que haya una visita guiada o descenso; revisa las condiciones de tu salida.' },
      { nombre: 'Pinchollo', latitud: -15.61576, longitud: -71.84097, minutos: 70, descripcion: 'Referencia de la ruta desde Chivay hacia el sector de la Cruz del Cóndor. El acceso a miradores y la observación de fauna dependen de la operación y las condiciones del día; cualquier escala y entrada debe confirmarse al reservar.' },
    ],
  },
  {
    slug: 'arequipa-mollendo',
    puntos: [
      { nombre: 'La Joya', latitud: -16.4238, longitud: -71.81834, minutos: 70, descripcion: 'Distrito de referencia al salir de Arequipa en dirección a la provincia costera de Islay. El marcador describe el corredor por carretera, no una parada comercial; el tiempo puede cambiar por tráfico y la ruta elegida por el transportista.' },
    ],
  },
  {
    slug: 'arequipa-cusco',
    puntos: [
      { nombre: 'Juliaca', latitud: -15.4997, longitud: -70.1333, minutos: 330, descripcion: 'Referencia de conexión en el altiplano antes de continuar hacia Cusco, según el itinerario de carretera de cada servicio. La ruta puede cambiar y este punto no asegura transbordo ni detención; confirma si el viaje es directo y dónde se realiza el embarque.' },
      { nombre: 'Sicuani', latitud: -14.272, longitud: -71.229, minutos: 485, descripcion: 'Localidad de la provincia de Canchis incorporada como referencia del corredor hacia Cusco. El tiempo acumulado es aproximado y depende de la ruta, el tránsito y las condiciones viales; consulta si existe una pausa autorizada y cuál es la terminal de llegada.' },
    ],
  },
  {
    slug: 'arequipa-puno',
    puntos: [
      { nombre: 'Imata', latitud: -15.83806, longitud: -71.09124, minutos: 145, descripcion: 'Referencia del tramo altoandino entre Arequipa y Puno, con variaciones de altura y clima a lo largo del trayecto. El dato de tiempo es estimado y no confirma parada, embarque ni descenso; lleva abrigo y verifica los servicios disponibles en tu unidad.' },
      { nombre: 'Santa Lucía', latitud: -15.69778, longitud: -70.60611, minutos: 285, descripcion: 'Localidad del corredor altiplánico hacia Puno que ayuda a situar el avance del viaje. La salida puede operar sin escalas en este lugar; confirma con la empresa el itinerario, la hora de llegada y cualquier descanso previsto.' },
    ],
  },
  {
    slug: 'arequipa-chivay',
    puntos: [
      { nombre: 'Patahuasi', latitud: -15.7605, longitud: -71.40471, minutos: 95, descripcion: 'Punto de referencia en la ruta de altura entre Arequipa y Chivay, antes de continuar hacia la provincia de Caylloma. El tiempo es acumulado y aproximado; este marcador no confirma visita, descenso ni parada comercial. El frío, la altitud y el estado de la carretera pueden afectar la duración.' },
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
        include: { paradas: { select: { id: true }, orderBy: { orden: 'asc' } } },
      });
      if (!transporte) throw new Error(`No existe el transporte ${ruta.slug}`);
      if (transporte.paradas.length) {
        for (const [indice, punto] of ruta.puntos.entries()) {
          const parada = transporte.paradas[indice];
          if (parada) await catalogo.actualizarDescripcionParada(parada.id, punto.descripcion ?? '');
        }
        process.stdout.write(`Se ampliaron ${Math.min(transporte.paradas.length, ruta.puntos.length)} descripciones de corredor en ${ruta.slug}; se conservaron horarios, coordenadas y medios.\\n`);
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
