import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { CatalogoService } from '../modulos/catalogo/aplicacion/catalogo.service';
import { PrismaService } from '../compartido/prisma/prisma.service';

const imagenes = {
  colca: 'https://res.cloudinary.com/ddbzpbrje/image/upload/v1792781458/imagenes/tours/b0eb674d-3c6b-4ac3-bed3-464eb80b3faf.jpg',
  arequipa: 'https://res.cloudinary.com/ddbzpbrje/image/upload/v1792781214/imagenes/tours/13adf9e4-78b8-46d2-bf46-bd60598b13f4.jpg',
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
      { titulo: 'Plaza principal de Chivay', descripcion: 'Punto de referencia para orientarse en el centro de Chivay y conocer el ambiente de la fiesta patronal. Desde aquí se accede a pie a los espacios públicos del pueblo; la presencia de comparsas, música y actividades depende del programa que publique la organización para 2027. Llega con tiempo, respeta las zonas reservadas para las ceremonias y confirma el punto de encuentro antes de viajar.', latitud: -15.638, longitud: -71.601 },
      { titulo: 'Iglesia de Nuestra Señora de la Asunción', descripcion: 'Templo principal de Chivay y referencia para las celebraciones religiosas vinculadas a la festividad. El ingreso, las misas y cualquier actividad dentro del templo dependen de los horarios litúrgicos y de las indicaciones de la parroquia. Se recomienda vestir con respeto y mantener libres los accesos durante las ceremonias.', latitud: -15.638, longitud: -71.602 },
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
      { titulo: 'Plaza e iglesia de Cabanaconde', descripcion: 'Recorrido de orientación por el centro del pueblo y sus espacios religiosos, donde se concentran parte de los encuentros comunitarios de Semana Santa. La participación en ceremonias está sujeta al programa parroquial; mantén silencio durante los oficios y consulta antes de tomar fotografías. El orden y la duración de las actividades de 2027 aún deben confirmarse localmente.', latitud: -15.62208, longitud: -71.98087 },
      { titulo: 'Calles tradicionales y entorno de Cabanaconde', descripcion: 'Paseo por las calles del pueblo para apreciar su arquitectura y el paisaje de la provincia de Caylloma. La visita a miradores solo se realiza si está incluida en la salida y las condiciones permiten el acceso; no se trata de una procesión ni de una parada garantizada. Considera el clima y la altura, y sigue las indicaciones del guía y de la comunidad.', latitud: -15.618, longitud: -71.977 },
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
      { titulo: 'Arequipa: punto de encuentro', descripcion: 'Reunión en el lugar de embarque que se indicará en la confirmación de la salida. Antes de partir, verifica hora, transporte, duración estimada y política de equipaje: el viaje a Polobaya es por carretera y la operación puede variar según el tránsito y las condiciones de la ruta. Lleva agua, abrigo ligero y cualquier medicamento personal.', latitud: -16.3988, longitud: -71.5369 },
      { titulo: 'Santuario de Chapi, Polobaya', descripcion: 'Tiempo para llegar al santuario y participar de manera respetuosa en las actividades religiosas que estén programadas. El acceso a los espacios de culto, los horarios, los servicios disponibles y el tiempo de permanencia dependen de la organización y de la afluencia de peregrinos. Usa calzado cómodo y sigue las indicaciones del personal; las celebraciones concretas de 2027 se anunciarán más adelante.', latitud: -16.71993, longitud: -71.31579 },
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
      { titulo: 'Plaza principal de Chivay', descripcion: 'Paseo por el espacio cívico del distrito y punto práctico para ubicarse en el centro. Los actos oficiales, desfiles, música y horarios se incluirán únicamente cuando se publique la agenda municipal de 2027. Durante las actividades, respeta los cierres de calles y las zonas destinadas a participantes.', latitud: -15.638, longitud: -71.601 },
      { titulo: 'Mercado y centro tradicional', descripcion: 'Tiempo libre para recorrer los comercios y conocer productos de la zona por cuenta propia. La disponibilidad de puestos y alimentos depende del horario de atención; las compras y consumos no están incluidos salvo que la reserva lo indique. Pregunta antes de fotografiar a vendedores o residentes.', latitud: -15.639, longitud: -71.600 },
      { titulo: 'Entorno panorámico de Chivay', descripcion: 'Visita a un punto de observación cercano al pueblo si está incorporado en la ruta confirmada y el clima permite la vista. La visibilidad del valle y de las montañas cambia con la nubosidad; el transporte hasta el mirador no se presume incluido. Usa abrigo y permanece en los espacios habilitados.', latitud: -15.634, longitud: -71.595 },
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
      { titulo: 'Qorikancha', descripcion: 'Inicio tradicional de la escenificación en el entorno del antiguo templo del Sol. La representación y el acceso al recinto dependen del programa oficial de EMUFEC y de las entradas disponibles; no se debe asumir que la reserva de esta experiencia incluye boleto. Llega con anticipación y atiende las indicaciones del personal.', latitud: -13.519, longitud: -71.975 },
      { titulo: 'Plaza Mayor del Cusco', descripcion: 'Tramo urbano de la jornada y espacio público donde suele desarrollarse una parte de la representación. La circulación peatonal puede estar restringida por el evento, por lo que los traslados entre escenarios pueden hacerse a pie y tomar más tiempo. El itinerario definitivo y las zonas de observación se confirmarán con el programa de 2027.', latitud: -13.516, longitud: -71.978 },
      { titulo: 'Complejo de Saqsaywaman', descripcion: 'Escenario principal al que se dirige la ceremonia, situado en una zona arqueológica sobre la ciudad. El ingreso, la ubicación del público y los horarios requieren las disposiciones oficiales y el boleto correspondiente. Usa calzado firme, lleva protección solar y agua, y no abandones los circuitos autorizados.', latitud: -13.509, longitud: -71.982 },
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
      { titulo: 'Templo y plaza de Cabanaconde', descripcion: 'Recorrido de orientación por el centro del distrito, donde se reúnen residentes y visitantes durante la fiesta patronal. Las celebraciones religiosas y el acceso al templo siguen el programa de la parroquia; los actos de 2027 todavía deben confirmarse. Se recomienda mantener una actitud respetuosa y consultar antes de ingresar durante un oficio.', latitud: -15.62208, longitud: -71.98087 },
      { titulo: 'Calles tradicionales de Cabanaconde', descripcion: 'Paseo por los espacios públicos del pueblo para conocer el ambiente de la festividad y las expresiones culturales que la comunidad decida presentar. Las danzas, comparsas y recorridos no tienen hora ni ruta garantizadas hasta la publicación del programa local. Mantente en las zonas habilitadas y evita bloquear el paso de los participantes.', latitud: -15.621, longitud: -71.979 },
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
      { titulo: 'Plaza de Armas de Arequipa', descripcion: 'Inicio del recorrido en el centro histórico, rodeado de portales y arquitectura de sillar. Es un punto de referencia para las actividades cívicas y culturales del aniversario, pero el programa de 2027 y los cierres de acceso se confirmarán con las autoridades. El paseo se realiza por espacios públicos; los ingresos a monumentos no están incluidos salvo indicación expresa.', latitud: -16.3988, longitud: -71.5369 },
      { titulo: 'Barrio tradicional de San Lázaro', descripcion: 'Caminata por calles estrechas y espacios tradicionales de uno de los barrios históricos de Arequipa. El tramo se realiza a pie y puede ajustarse por el tránsito o por actividades municipales. Usa calzado cómodo, respeta la tranquilidad de los residentes y confirma si el guía acompaña esta visita en la salida elegida.', latitud: -16.393, longitud: -71.532 },
      { titulo: 'Mirador de Yanahuara', descripcion: 'Punto panorámico para observar la ciudad y, si el cielo está despejado, los volcanes del entorno. La visibilidad depende del clima y el traslado hasta Yanahuara se realiza solo si figura en la ruta confirmada. El tiempo de permanencia y el regreso se coordinan según el tráfico y las actividades del aniversario.', latitud: -16.389, longitud: -71.537 },
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
      { titulo: 'Centro histórico de Arequipa', descripcion: 'Paseo de orientación por el área central para conocer el contexto local de las celebraciones de octubre. Las procesiones pueden cambiar de fecha, punto de partida y recorrido cada año; este tramo no confirma que una procesión vaya a realizarse durante tu visita. La agenda de la hermandad para 2027 se añadirá cuando sea oficial.', latitud: -16.3988, longitud: -71.5369 },
      { titulo: 'Templo y actividades por confirmar', descripcion: 'El templo, las ceremonias y cualquier recorrido procesional se definirán con el programa publicado por la hermandad local. Hasta esa confirmación, esta etapa es informativa y no promete acceso a un oficio ni participación en una procesión. Consulta la fecha exacta antes de comprar transporte o entradas adicionales.', latitud: -16.4, longitud: -71.535 },
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
      { titulo: 'Iglesia y plaza de Chivay', descripcion: 'Recorrido por los espacios centrales del pueblo y contexto de la celebración de la Inmaculada Concepción. Los oficios religiosos siguen el calendario parroquial y el acceso al templo puede limitarse durante las ceremonias. La fecha del 8 de diciembre es anual; los horarios y actividades de 2027 se confirmarán localmente.', latitud: -15.638, longitud: -71.602 },
      { titulo: 'Encuentro cultural del valle', descripcion: 'Tiempo para conocer la música y las expresiones culturales de Caylloma si están incluidas en la programación comunitaria de ese año. El Wititi es una tradición del valle, pero la realización, el lugar y la hora de cada presentación deben confirmarse con el organizador. Esta experiencia no garantiza un espectáculo ni acceso a zonas reservadas.', latitud: -15.638, longitud: -71.601 },
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
      { titulo: 'Plaza Mayor del Cusco', descripcion: 'Punto de inicio para orientarse en la feria navideña, que tradicionalmente ocupa la plaza el 24 de diciembre. La distribución de puestos, horarios, accesos y medidas de seguridad para 2027 dependerán del anuncio de EMUFEC. Considera la afluencia de público y acuerda un punto de encuentro antes de separarte del grupo.', latitud: -13.516, longitud: -71.978 },
      { titulo: 'Puestos de artesanía y portales', descripcion: 'Recorrido libre por los sectores de artesanos y vendedores que estén habilitados ese año. La oferta, ubicación y horario pueden cambiar según la organización de la feria; las compras son personales y no están incluidas en la reserva. Pide permiso antes de fotografiar a artesanos y cuida tus pertenencias entre la multitud.', latitud: -13.516, longitud: -71.977 },
    ],
  },
];

async function main() {
  const aplicacion = await NestFactory.createApplicationContext(AppModule, { logger: false });
  const catalogo = aplicacion.get(CatalogoService);
  const prisma = aplicacion.get(PrismaService);
  let creados = 0;
  let existentes = 0;
  let portadasCorregidas = 0;
  try {
    for (const evento of eventos) {
      const existente = await prisma.tour.findUnique({
        where: { slug: evento.slug },
        include: {
          imagenes: { orderBy: { orden: 'asc' } },
          itinerarios: { orderBy: { orden: 'asc' } },
        },
      });
      if (existente) {
        for (const [indice, punto] of evento.puntos.entries()) {
          const etapa = existente.itinerarios[indice];
          if (etapa) await catalogo.actualizarDescripcionItinerario(etapa.id, punto.descripcion);
        }
        const portada = existente.imagenes[0];
        const urlRota = 'https://res.cloudinary.com/ddbzpbrje/image/upload/v1792781214/imagenes/tours/13adf9e4-78b8-46d2-bf46-4b18a286bd88.jpg';
        if (portada && portada.url === urlRota) {
          await prisma.imagen.update({
            where: { id: portada.id },
            data: { url: evento.foto, textoAlterno: evento.titulo },
          });
          portadasCorregidas++;
          process.stdout.write(`Portada corregida: ${evento.slug}\n`);
        }
        existentes++;
        process.stdout.write(`Detalle de itinerario actualizado: ${evento.slug}\n`);
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
    process.stdout.write(`Resultado: ${creados} creados, ${existentes} ya existían, ${portadasCorregidas} portadas corregidas.\n`);
  } finally {
    await aplicacion.close();
  }
}

void main();
