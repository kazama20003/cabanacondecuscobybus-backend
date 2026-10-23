import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { CatalogoService } from '../modulos/catalogo/aplicacion/catalogo.service';
import { PrismaService } from '../compartido/prisma/prisma.service';

const imagenes = {
  colca: 'https://res.cloudinary.com/ddbzpbrje/image/upload/v1792781458/imagenes/tours/b0eb674d-3c6b-4ac3-bed3-464eb80b3faf.jpg',
  arequipa: 'https://res.cloudinary.com/ddbzpbrje/image/upload/v1792781214/imagenes/tours/13adf9e4-78b8-46d2-bf46-4b18a286bd88.jpg',
  yura: 'https://res.cloudinary.com/ddbzpbrje/image/upload/v1792781555/imagenes/tours/463b9cda-9ed9-4056-b427-afaa5ff63138.jpg',
  cusco: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Plaza_de_Armas_de_Cuzco.jpg',
};

const eventos = [
  {
    slug: 'virgen-de-la-candelaria-chivay-2027',
    destinoNombre: 'Chivay, Caylloma, Arequipa', destinoLatitud: -15.638, destinoLongitud: -71.601, duracionMinutos: 480,
    temporadaInicio: '2027-02-02', temporadaFin: '2027-02-02', foto: imagenes.colca,
    titulo: 'Fiesta de la Virgen de la Candelaria en Chivay',
    resumen: 'Acompaña la celebración patronal de Chivay en el corazón del valle del Colca.',
    descripcion: 'Una jornada para conocer la devoción local, la música y las tradiciones de Caylloma. El programa y los horarios de cada actividad se confirmarán con la organización local para la temporada 2027.',
    puntos: [
      { titulo: 'Plaza principal de Chivay', descripcion: 'Encuentro en el centro del pueblo para conocer la celebración y sus comparsas.', latitud: -15.638, longitud: -71.601 },
      { titulo: 'Iglesia de Nuestra Señora de la Asunción', descripcion: 'Visita al templo histórico, sujeto a los horarios y actividades religiosas del programa local.', latitud: -15.638, longitud: -71.602 },
    ],
  },
  {
    slug: 'semana-santa-cabanaconde-2027',
    destinoNombre: 'Cabanaconde, Caylloma, Arequipa', destinoLatitud: -15.62208, destinoLongitud: -71.98087, duracionMinutos: 720,
    temporadaInicio: '2027-03-21', temporadaFin: '2027-03-28', foto: imagenes.colca,
    titulo: 'Semana Santa tradicional de Cabanaconde',
    resumen: 'Vive las ceremonias y expresiones culturales de una tradición reconocida como patrimonio cultural del Perú.',
    descripcion: 'La Semana Santa de Cabanaconde reúne ceremonias religiosas, música y costumbres transmitidas por la comunidad. La fecha corresponde a la Semana Santa de 2027; el detalle de recorridos y horarios se confirmará con el programa local.',
    puntos: [
      { titulo: 'Plaza e iglesia de Cabanaconde', descripcion: 'Centro de las celebraciones religiosas y encuentros comunitarios.', latitud: -15.62208, longitud: -71.98087 },
      { titulo: 'Cabanaconde y sus miradores', descripcion: 'Tiempo para conocer el pueblo y el paisaje del cañón, coordinado con las actividades del día.', latitud: -15.618, longitud: -71.977 },
    ],
  },
  {
    slug: 'peregrinacion-virgen-chapi-2027',
    destinoNombre: 'Santuario de Chapi, Polobaya, Arequipa', destinoLatitud: -16.71993, destinoLongitud: -71.31579, duracionMinutos: 720,
    temporadaInicio: '2027-05-01', temporadaFin: '2027-05-01', foto: imagenes.yura,
    titulo: 'Peregrinación a la Virgen de Chapi',
    resumen: 'Acompaña la peregrinación del 1 de mayo al santuario de Chapi, en Polobaya.',
    descripcion: 'Cada 1 de mayo miles de devotos llegan al Santuario de Nuestra Señora de Chapi. La experiencia contempla el traslado desde Arequipa y tiempo para participar con respeto en las actividades del santuario; los horarios de transporte se programan por separado.',
    puntos: [
      { titulo: 'Arequipa: punto de encuentro', descripcion: 'Salida desde un punto céntrico que será confirmado al programar la fecha.', latitud: -16.3988, longitud: -71.5369 },
      { titulo: 'Santuario de Chapi, Polobaya', descripcion: 'Destino de la peregrinación y sede de las celebraciones del 1 de mayo.', latitud: -16.71993, longitud: -71.31579 },
    ],
  },
  {
    slug: 'aniversario-provincia-caylloma-chivay-2027',
    destinoNombre: 'Chivay, Caylloma, Arequipa', destinoLatitud: -15.638, destinoLongitud: -71.601, duracionMinutos: 600,
    temporadaInicio: '2027-06-21', temporadaFin: '2027-06-21', foto: imagenes.colca,
    titulo: 'Aniversario de Chivay y la provincia de Caylloma',
    resumen: 'Celebra la identidad cayllomina con actividades cívicas, música y cultura del Colca.',
    descripcion: 'El aniversario provincial de Caylloma se conmemora el 21 de junio. La programación de 2027 se confirmará con las autoridades locales; esta ficha presenta la fecha anual y los lugares de referencia, sin fijar horarios ni recorridos oficiales.',
    puntos: [
      { titulo: 'Plaza principal de Chivay', descripcion: 'Lugar de referencia para las actividades centrales del aniversario.', latitud: -15.638, longitud: -71.601 },
      { titulo: 'Mercado y centro tradicional', descripcion: 'Espacio para acercarse a la gastronomía y la producción local del valle.', latitud: -15.639, longitud: -71.600 },
      { titulo: 'Mirador de Chivay', descripcion: 'Parada panorámica en el entorno del pueblo, según disponibilidad del recorrido.', latitud: -15.634, longitud: -71.595 },
    ],
  },
  {
    slug: 'inti-raymi-cusco-2027',
    destinoNombre: 'Cusco, Perú', destinoLatitud: -13.53188, destinoLongitud: -71.96701, duracionMinutos: 600,
    temporadaInicio: '2027-06-24', temporadaFin: '2027-06-24', foto: imagenes.cusco,
    titulo: 'Inti Raymi: Fiesta del Sol en Cusco',
    resumen: 'Conoce la escenificación del Inti Raymi en los escenarios históricos de Cusco.',
    descripcion: 'El Inti Raymi se celebra cada 24 de junio con representaciones en Qorikancha, la Plaza Mayor y Saqsaywaman. La fecha de 2027 es fija; entradas, horarios y traslados se publicarán cuando EMUFEC confirme el programa correspondiente.',
    puntos: [
      { titulo: 'Qorikancha', descripcion: 'Primer escenario de la escenificación, sujeto al programa oficial.', latitud: -13.519, longitud: -71.975 },
      { titulo: 'Plaza Mayor del Cusco', descripcion: 'Escenario central de la ceremonia y punto de transición del recorrido.', latitud: -13.516, longitud: -71.978 },
      { titulo: 'Saqsaywaman', descripcion: 'Escenario principal de la ceremonia del Inti Raymi.', latitud: -13.509, longitud: -71.982 },
    ],
  },
  {
    slug: 'virgen-del-carmen-cabanaconde-2027',
    destinoNombre: 'Cabanaconde, Caylloma, Arequipa', destinoLatitud: -15.62208, destinoLongitud: -71.98087, duracionMinutos: 600,
    temporadaInicio: '2027-07-15', temporadaFin: '2027-07-18', foto: imagenes.colca,
    titulo: 'Fiesta de la Virgen del Carmen en Cabanaconde',
    resumen: 'Comparte la fiesta patronal de Cabanaconde y su danza tradicional de los Turcos.',
    descripcion: 'La festividad en honor a la Virgen del Carmen tiene como día central el 16 de julio y se celebra en Cabanaconde con expresiones religiosas y culturales. El calendario de actividades de 2027 se confirmará localmente.',
    puntos: [
      { titulo: 'Templo y plaza de Cabanaconde', descripcion: 'Centro de la fiesta patronal y de las actividades comunitarias.', latitud: -15.62208, longitud: -71.98087 },
      { titulo: 'Calles tradicionales de Cabanaconde', descripcion: 'Espacio de danzas y comparsas según el recorrido anunciado por la comunidad.', latitud: -15.621, longitud: -71.979 },
    ],
  },
  {
    slug: 'aniversario-arequipa-2027',
    destinoNombre: 'Centro Histórico de Arequipa, Perú', destinoLatitud: -16.3988, destinoLongitud: -71.5369, duracionMinutos: 600,
    temporadaInicio: '2027-08-15', temporadaFin: '2027-08-15', foto: imagenes.arequipa,
    titulo: 'Aniversario de Arequipa: cultura y tradición',
    resumen: 'Celebra el aniversario de la Ciudad Blanca conociendo su centro histórico y sus tradiciones.',
    descripcion: 'El aniversario de Arequipa se celebra cada 15 de agosto. La ciudad organiza actividades culturales y cívicas durante el mes; este recorrido reúne espacios representativos y se ajustará al programa oficial de 2027.',
    puntos: [
      { titulo: 'Plaza de Armas de Arequipa', descripcion: 'Punto de referencia del centro histórico y de las actividades cívicas.', latitud: -16.3988, longitud: -71.5369 },
      { titulo: 'Barrio de San Lázaro', descripcion: 'Recorrido por uno de los barrios tradicionales de la ciudad.', latitud: -16.393, longitud: -71.532 },
      { titulo: 'Mirador de Yanahuara', descripcion: 'Vista de la ciudad y sus volcanes desde el distrito de Yanahuara.', latitud: -16.389, longitud: -71.537 },
    ],
  },
  {
    slug: 'senor-de-los-milagros-arequipa-2027',
    destinoNombre: 'Arequipa, Perú', destinoLatitud: -16.3988, destinoLongitud: -71.5369, duracionMinutos: 360,
    temporadaInicio: '2027-10-01', temporadaFin: '2027-10-31', foto: imagenes.arequipa,
    titulo: 'Temporada del Señor de los Milagros en Arequipa',
    resumen: 'Conoce las tradiciones de octubre y acompaña las actividades de fe en Arequipa.',
    descripcion: 'Octubre es el mes de las celebraciones del Señor de los Milagros. Las fechas y rutas de las procesiones en Arequipa dependen del programa anual de las hermandades; se anunciarán antes de abrir salidas para reserva.',
    puntos: [
      { titulo: 'Centro histórico de Arequipa', descripcion: 'Zona de referencia para las actividades religiosas y culturales de octubre.', latitud: -16.3988, longitud: -71.5369 },
      { titulo: 'Templo de referencia', descripcion: 'El templo y el recorrido exacto se actualizarán con el programa de la hermandad para 2027.', latitud: -16.4, longitud: -71.535 },
    ],
  },
  {
    slug: 'inmaculada-concepcion-wititi-chivay-2027',
    destinoNombre: 'Chivay, Caylloma, Arequipa', destinoLatitud: -15.638, destinoLongitud: -71.601, duracionMinutos: 480,
    temporadaInicio: '2027-12-08', temporadaFin: '2027-12-08', foto: imagenes.colca,
    titulo: 'Inmaculada Concepción y danza del Wititi en Chivay',
    resumen: 'Descubre la fiesta de diciembre y la tradición viva del Wititi en el valle del Colca.',
    descripcion: 'El 8 de diciembre se celebra la Inmaculada Concepción en Chivay. La festividad es una ocasión para conocer la música y las danzas del valle; la presentación del Wititi y sus horarios se confirmarán con el programa local de 2027.',
    puntos: [
      { titulo: 'Iglesia y plaza de Chivay', descripcion: 'Espacios centrales de las celebraciones religiosas del 8 de diciembre.', latitud: -15.638, longitud: -71.602 },
      { titulo: 'Encuentro cultural del valle', descripcion: 'Presentaciones de música y danza sujetas al programa anual de Caylloma.', latitud: -15.638, longitud: -71.601 },
    ],
  },
  {
    slug: 'santurantikuy-cusco-2027',
    destinoNombre: 'Plaza Mayor del Cusco, Perú', destinoLatitud: -13.516, destinoLongitud: -71.978, duracionMinutos: 360,
    temporadaInicio: '2027-12-24', temporadaFin: '2027-12-24', foto: imagenes.cusco,
    titulo: 'Santurantikuy: feria navideña del Cusco',
    resumen: 'Recorre la feria tradicional de artesanía que cada Navidad reúne a artistas de todo el Perú.',
    descripcion: 'El Santurantikuy se realiza cada 24 de diciembre en la Plaza Mayor del Cusco. La feria reúne a artesanos y familias alrededor de la tradición navideña; los detalles operativos para 2027 se confirmarán con EMUFEC.',
    puntos: [
      { titulo: 'Plaza Mayor del Cusco', descripcion: 'Sede tradicional de la feria navideña y sus puestos de artesanía.', latitud: -13.516, longitud: -71.978 },
      { titulo: 'Portal de panes y artesanos', descripcion: 'Zona de encuentro para recorrer los puestos según la distribución que publique EMUFEC.', latitud: -13.516, longitud: -71.977 },
    ],
  },
];

async function main() {
  const aplicacion = await NestFactory.createApplicationContext(AppModule, { logger: false });
  const catalogo = aplicacion.get(CatalogoService);
  const prisma = aplicacion.get(PrismaService);
  let creados = 0;
  let existentes = 0;
  try {
    for (const evento of eventos) {
      if (await prisma.tour.findUnique({ where: { slug: evento.slug }, select: { id: true } })) {
        existentes++;
        continue;
      }
      const { foto, puntos, titulo, resumen, descripcion, ...datos } = evento;
      await catalogo.crearEventoEspecial({
        ...datos,
        medios: [{ url: foto, textoAlterno: titulo }],
        contenido: { titulo, resumen, descripcion, queLlevar: 'Ropa cómoda, agua y protección solar. Respeta las indicaciones de la comunidad y de las autoridades locales.' },
        puntos,
      });
      creados++;
      process.stdout.write(`Creado: ${datos.slug}\n`);
    }
    process.stdout.write(`Resultado: ${creados} creados, ${existentes} ya existían.\n`);
  } finally {
    await aplicacion.close();
  }
}

void main();
