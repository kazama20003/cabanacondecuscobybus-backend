import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { CatalogoService } from '../modulos/catalogo/aplicacion/catalogo.service';
import { PrismaService } from '../compartido/prisma/prisma.service';

const tours = [
  {
    slug: 'tour-historico-del-centro-de-arequipa',
    resumen: 'Camina por el centro histórico de Arequipa y descubre la arquitectura de sillar, los portales y la vida alrededor de su Plaza de Armas.',
    descripcion: 'Una visita cultural para conocer el corazón de Arequipa con tiempo para observar sus fachadas de sillar, los portales y las calles tradicionales. El recorrido se realiza a pie por espacios públicos; el ingreso a iglesias, museos o monumentos depende de la operación, sus horarios y las entradas disponibles. El orden de las paradas y el punto de encuentro se confirman antes de la salida.',
    queLlevar: 'Calzado cómodo para caminar, sombrero o gorra, protector solar y agua. Lleva algo de efectivo si deseas comprar entradas o consumir en el centro.',
    incluye: 'Recorrido turístico guiado por los espacios indicados en el programa confirmado.',
    noIncluye: 'Entradas a recintos, alimentación, compras personales y servicios no detallados como incluidos.',
    itinerario: [
      ['Encuentro en el centro histórico', 'El guía confirma el punto y la hora de reunión antes de la salida.'],
      ['Plaza de Armas y portales', 'Recorrido a pie por la plaza y su entorno para apreciar la arquitectura de sillar y la historia urbana.'],
      ['Calles y barrios tradicionales', 'Paseo por los espacios que figuren en el programa del día; el ingreso a recintos se coordina según horario y disponibilidad.'],
    ],
  },
  {
    slug: 'tour-a-la-laguna-de-salinas-y-reserva-nacional',
    resumen: 'Explora los paisajes altoandinos de Salinas y Aguada Blanca, entre volcanes, bofedales y la laguna de Salinas.',
    descripcion: 'La ruta sale de Arequipa hacia la Reserva Nacional de Salinas y Aguada Blanca. En el camino aparecen paisajes volcánicos y zonas altoandinas; la laguna cambia de aspecto según la época y el nivel del agua. La presencia de flamencos, vicuñas u otras aves depende de la temporada y no se puede garantizar. Por la altitud y el clima, el orden de las paradas y el acceso se confirman según las condiciones del día.',
    queLlevar: 'Ropa abrigadora por capas, gorro, protector solar, lentes de sol, agua y calzado cerrado. Si tienes sensibilidad a la altura, consulta con un profesional antes del viaje.',
    incluye: 'Visita turística al entorno de Salinas y Aguada Blanca según el itinerario confirmado.',
    noIncluye: 'Alimentación, entradas o tasas locales y servicios que no aparezcan expresamente en la confirmación.',
    itinerario: [
      ['Salida desde Arequipa', 'El punto de recojo y la hora se confirman para la fecha elegida.'],
      ['Ruta altoandina y miradores', 'Paradas panorámicas sujetas al clima, al estado de la carretera y a las indicaciones de conservación.'],
      ['Entorno de la laguna de Salinas', 'Tiempo para observar el paisaje y la fauna que pudiera encontrarse a distancia, sin garantía de avistamientos.'],
      ['Regreso a Arequipa', 'Retorno por carretera; la duración total puede variar por clima y condiciones de la vía.'],
    ],
  },
  {
    slug: 'tour-al-canon-del-colca-y-cruz-del-condor',
    resumen: 'Conoce el valle del Colca y sus miradores en una excursión de día completo desde Arequipa.',
    descripcion: 'Viaja desde Arequipa hacia la provincia de Caylloma para conocer paisajes del valle del Colca y acercarte al mirador de la Cruz del Cóndor cuando el programa y las condiciones lo permitan. El avistamiento de cóndores depende del clima y del comportamiento de la fauna, por lo que no se garantiza. Los horarios, paradas, entradas y punto de recojo deben verificarse al reservar.',
    queLlevar: 'Ropa por capas, calzado cómodo, sombrero, protector solar, agua y efectivo para entradas o consumos no incluidos.',
    incluye: 'Visita turística a los puntos señalados en el programa confirmado.',
    noIncluye: 'Boleto turístico, alimentación y servicios no descritos expresamente como incluidos.',
    itinerario: [
      ['Recojo en Arequipa', 'Hora y zona de recojo sujetas a confirmación para la salida seleccionada.'],
      ['Ruta hacia el valle del Colca', 'Traslado por carretera con paradas panorámicas únicamente donde el programa y la operación lo permitan.'],
      ['Miradores del Colca', 'Visita al sector de la Cruz del Cóndor si el acceso y el itinerario del día están habilitados. La fauna se observa a distancia y sin garantía de avistamiento.'],
      ['Retorno a Arequipa', 'El regreso depende del tráfico, el clima y el estado de la ruta.'],
    ],
  },
  {
    slug: 'ruta-del-sillar-y-quebrada-de-culebrillas',
    resumen: 'Descubre las canteras de sillar y las formaciones volcánicas de Culebrillas, parte del paisaje que dio forma a Arequipa.',
    descripcion: 'Una salida desde Arequipa para conocer el trabajo de extracción del sillar y el paisaje de la Quebrada de Culebrillas. El recorrido combina traslado y caminata corta por terreno irregular cuando el acceso está permitido. La visita se realiza con respeto por el trabajo local y el entorno; los accesos, horarios y servicios incluidos se confirman para cada salida.',
    queLlevar: 'Calzado cerrado con buena suela, sombrero, protector solar y agua. Sigue las indicaciones del guía y evita subir a zonas restringidas de las canteras.',
    incluye: 'Visita a los puntos de la Ruta del Sillar señalados en el programa confirmado.',
    noIncluye: 'Entradas o aportes locales, alimentación y servicios no indicados como incluidos.',
    itinerario: [
      ['Punto de encuentro en Arequipa', 'El lugar y el horario de salida se confirman antes del tour.'],
      ['Canteras de sillar', 'Conoce el paisaje de extracción y el trabajo tradicional de los canteros en las zonas autorizadas.'],
      ['Quebrada de Culebrillas', 'Caminata por el tramo habilitado, de acuerdo con el estado del acceso y las indicaciones locales.'],
      ['Regreso a la ciudad', 'Retorno a Arequipa al terminar las visitas programadas.'],
    ],
  },
  {
    slug: 'miradores-de-yanahuara-y-campina-arequipena',
    resumen: 'Combina miradores tradicionales y paisajes de la campiña arequipeña en una salida cercana a la ciudad.',
    descripcion: 'Un recorrido breve para mirar Arequipa desde Yanahuara y acercarse a la campiña que rodea la ciudad. Las vistas del Misti y otros volcanes dependen de la nubosidad. Las paradas exactas, el transporte y el punto de encuentro se ajustan al programa confirmado; el ingreso a establecimientos o recintos puede tener un costo adicional.',
    queLlevar: 'Calzado cómodo, sombrero, protector solar, agua y cámara. Lleva una casaca ligera si la visita termina por la tarde.',
    incluye: 'Visita a los miradores y espacios que figuren en el itinerario confirmado.',
    noIncluye: 'Consumos, entradas y servicios opcionales que no estén detallados en la reserva.',
    itinerario: [
      ['Encuentro en Arequipa', 'Confirma el punto y la hora indicados para tu salida.'],
      ['Mirador de Yanahuara', 'Paseo por el mirador y sus portales; la visibilidad de los volcanes cambia según el clima.'],
      ['Campiña arequipeña', 'Recorrido panorámico por los sectores incluidos en el programa, sujeto al tráfico y al tiempo disponible.'],
      ['Retorno al punto de inicio', 'Fin de la visita y regreso según la coordinación del servicio.'],
    ],
  },
  {
    slug: 'pillones-y-bosque-de-piedras-de-imata',
    resumen: 'Una excursión de altura desde Arequipa para conocer la catarata de Pillones y las formaciones rocosas de Imata.',
    descripcion: 'La salida se dirige hacia la zona altoandina de Pillones e Imata, donde el paisaje y las condiciones cambian con la altura y el clima. El acceso a la catarata y al bosque de piedras depende del estado de la carretera y de las condiciones locales. El tiempo de caminata, el orden de las visitas y la operación se confirman antes de viajar.',
    queLlevar: 'Abrigo por capas, calzado de trekking con suela firme, gorro, guantes, protector solar y agua. Avanza a tu ritmo y considera la altura antes de reservar.',
    incluye: 'Visita turística a los parajes accesibles que indique el programa confirmado.',
    noIncluye: 'Alimentación, entradas o aportes locales y servicios no mencionados como incluidos.',
    itinerario: [
      ['Salida desde Arequipa', 'Hora y punto de recojo se confirman antes de la excursión.'],
      ['Ruta hacia Pillones e Imata', 'Traslado por carretera altoandina; el recorrido puede cambiar por clima o estado de la vía.'],
      ['Catarata de Pillones y entorno de Imata', 'Visitas sujetas al acceso, al caudal, al tiempo disponible y a las indicaciones locales.'],
      ['Regreso a Arequipa', 'Retorno por carretera con duración variable según las condiciones del día.'],
    ],
  },
  {
    slug: 'costa-de-mollendo-y-santuario-de-mejia',
    resumen: 'Sal de Arequipa hacia la costa de Mollendo y los paisajes protegidos de los Humedales de Mejía.',
    descripcion: 'Una jornada entre la costa de Mollendo y el entorno natural de los Humedales de Mejía. La visita a zonas protegidas debe respetar las rutas habilitadas y las indicaciones de conservación. La observación de aves depende de la temporada y no se garantiza. El tiempo libre, los accesos y las paradas se coordinan según el programa y la operación confirmados.',
    queLlevar: 'Sombrero, protector solar, agua, calzado cómodo y una casaca ligera para la brisa marina. Lleva binoculares si deseas observar aves sin acercarte a ellas.',
    incluye: 'Traslado y visitas señaladas en el programa confirmado.',
    noIncluye: 'Alimentación, entradas, consumos en la costa y servicios no especificados en la reserva.',
    itinerario: [
      ['Salida desde Arequipa', 'Punto de recojo y hora sujetos a confirmación.'],
      ['Mollendo', 'Tiempo para conocer el sector de la costa incluido en el programa del día.'],
      ['Humedales de Mejía', 'Visita por las zonas habilitadas; la observación de fauna depende de la temporada.'],
      ['Retorno a Arequipa', 'Regreso por carretera según el horario y las condiciones de operación.'],
    ],
  },
  {
    slug: 'petroglifos-de-toro-muerto-y-valle-de-majes',
    resumen: 'Un día entre el arte rupestre de Toro Muerto y los paisajes del valle de Majes, en la provincia arequipeña de Castilla.',
    descripcion: 'Sal de Arequipa hacia el distrito de Uraca, en la provincia de Castilla, para visitar el conjunto arqueológico de Toro Muerto. El recorrido a pie permite observar grabados sobre bloques de roca en un paisaje árido; respeta las áreas señalizadas y no toques las superficies. La jornada continúa por el valle de Majes, con tiempo para apreciar el paisaje agrícola y el entorno del río desde los puntos autorizados. La duración aproximada es de 10 horas; el acceso, las entradas y el orden de las visitas se confirman según la operación y las condiciones de la carretera.',
    queLlevar: 'Calzado cerrado con suela firme, sombrero, protector solar, agua y algo de abrigo para el trayecto. Lleva efectivo para entradas y consumos no incluidos.',
    incluye: 'Visita al complejo arqueológico y a los puntos del valle que figuren en el itinerario confirmado.',
    noIncluye: 'Entrada al complejo, alimentación y servicios no detallados expresamente como incluidos.',
    itinerario: [
      ['Salida desde Arequipa', 'El punto de encuentro y la hora de salida se confirman para la fecha reservada.'],
      ['Complejo arqueológico de Toro Muerto', 'Recorrido a pie para conocer los petroglifos y el paisaje del sitio. No toques ni mojes los grabados; sigue los senderos e indicaciones del personal.'],
      ['Valle de Majes', 'Parada panorámica en los sectores autorizados que permita el programa y el tiempo disponible.'],
      ['Retorno a Arequipa', 'Regreso por carretera. La duración total, estimada en unas 10 horas, puede variar por tráfico, clima y estado de la vía.'],
    ],
  },
  {
    slug: 'cotahuasi-miradores-y-pueblos-del-canon',
    resumen: 'Una experiencia de larga distancia hacia la provincia de La Unión, con paisajes andinos y pueblos del entorno de Cotahuasi.',
    descripcion: 'Cotahuasi se encuentra en una zona remota de Arequipa y el viaje por carretera es largo. Esta experiencia se organiza según la ruta, el tiempo disponible y las condiciones de acceso confirmadas para cada fecha. Los miradores y pueblos que se visiten deben figurar en el programa final; no se garantizan paradas que no aparezcan en la confirmación. Verifica la duración, el alojamiento si corresponde y los servicios incluidos antes de reservar.',
    queLlevar: 'Ropa por capas, calzado cómodo, agua, protector solar y tus medicamentos personales. Confirma si la salida requiere pernocte y consulta las recomendaciones de altura.',
    incluye: 'Traslado y visitas únicamente a los puntos incluidos en el programa confirmado.',
    noIncluye: 'Alojamiento, alimentación, entradas y cualquier servicio no descrito expresamente en la reserva.',
    itinerario: [
      ['Salida desde Arequipa', 'La hora, el punto de embarque y la duración del viaje se confirman antes de reservar.'],
      ['Llegada a la provincia de La Unión', 'El recorrido de llegada depende de las condiciones de la carretera y del servicio contratado.'],
      ['Miradores y pueblos acordados', 'Se visitan solo los puntos incluidos en el programa final y accesibles ese día.'],
      ['Retorno o continuación del viaje', 'La modalidad y el horario de regreso deben quedar confirmados en la reserva; consulta si el servicio contempla pernocte.'],
    ],
  },
  {
    slug: 'banos-termales-de-yura-y-paisaje-volcanico',
    resumen: 'Escápate desde Arequipa hacia Yura para conocer sus paisajes volcánicos y, si está habilitado, disfrutar de sus baños termales.',
    descripcion: 'Una salida cercana a Arequipa que combina el paisaje volcánico de Yura con la posibilidad de visitar un establecimiento termal. El ingreso, la disponibilidad de piscinas, las tarifas y los horarios dependen del operador local y no están garantizados por esta ficha. Confirma qué servicios incluye la salida, lleva ropa de baño si el acceso está previsto y respeta las indicaciones del establecimiento.',
    queLlevar: 'Ropa de baño y toalla solo si el establecimiento confirma el acceso termal, además de sandalias, muda de ropa, agua y protector solar.',
    incluye: 'Traslado y visitas detallados en el programa confirmado.',
    noIncluye: 'Entrada a los baños, alimentación y servicios no señalados como incluidos.',
    itinerario: [
      ['Encuentro en Arequipa', 'Confirma el punto de salida y la hora para tu fecha.'],
      ['Ruta hacia Yura', 'Traslado por carretera para conocer el paisaje del distrito y sus alrededores.'],
      ['Visita termal, si está habilitada', 'El acceso y la tarifa dependen del establecimiento; confirma su disponibilidad antes de viajar.'],
      ['Regreso a Arequipa', 'Retorno según el horario coordinado y las condiciones de la ruta.'],
    ],
  },
];

const transportes = [
  { slug: 'arequipa-juliaca', resumen: 'Traslado terrestre entre Arequipa y Juliaca para conectar con el altiplano de Puno.', descripcion: 'Conecta Arequipa con Juliaca mediante un servicio terrestre interprovincial. La duración, el punto de embarque y el tipo de unidad dependen de la salida disponible. Antes de reservar, verifica la hora exacta, la política de equipaje, las paradas previstas y las condiciones del servicio; el tránsito y el clima pueden modificar el tiempo de viaje.' },
  { slug: 'arequipa-corire-valle-de-majes', resumen: 'Viaja desde Arequipa a Corire y al valle de Majes con salida programada y reserva previa.', descripcion: 'Servicio terrestre hacia Corire, en el valle de Majes. La duración y el recorrido exacto dependen de la salida seleccionada y de las condiciones de la carretera. Confirma el punto de recojo, la hora, el equipaje permitido y si el traslado contempla paradas antes de completar la reserva.' },
  { slug: 'arequipa-pillones-e-imata', resumen: 'Traslado desde Arequipa hacia Pillones e Imata, en una zona altoandina de clima variable.', descripcion: 'Acceso por carretera a los sectores de Pillones e Imata. El estado de la ruta, el clima y la altitud pueden afectar la operación y el tiempo de viaje. Confirma si la salida llega a los atractivos o solo al sector acordado, además del punto de embarque, el equipaje y las paradas autorizadas.' },
  { slug: 'arequipa-yura', resumen: 'Conexión terrestre entre Arequipa y el distrito de Yura para visitar sus alrededores.', descripcion: 'Traslado por carretera desde Arequipa hacia Yura. El punto exacto de llegada, la hora y el tipo de unidad dependen del servicio confirmado. Si planeas visitar establecimientos termales, consulta por separado sus horarios, tarifas y condiciones de acceso; no están incluidos salvo que la reserva lo indique.' },
  { slug: 'chivay-cruz-del-condor', resumen: 'Conecta Chivay con el sector de la Cruz del Cóndor y los miradores del valle del Colca.', descripcion: 'Traslado turístico desde Chivay hacia el sector de la Cruz del Cóndor. El acceso puede variar por clima, tránsito y disposiciones locales. La observación de cóndores depende de las condiciones naturales y no se garantiza. Confirma horario, punto de recojo, entradas y paradas incluidas antes de reservar.' },
  { slug: 'arequipa-mollendo', resumen: 'Traslado terrestre de Arequipa a Mollendo para llegar a la costa de la región.', descripcion: 'Servicio por carretera entre Arequipa y Mollendo. La disponibilidad, el horario y el punto de embarque corresponden a la salida elegida. Antes de viajar, confirma la política de equipaje, el lugar exacto de llegada y las paradas previstas; la duración puede variar por tráfico y condiciones de la vía.' },
  { slug: 'arequipa-cusco', resumen: 'Conexión interprovincial por carretera entre Arequipa y Cusco, sujeta a las salidas disponibles.', descripcion: 'Traslado terrestre de larga distancia entre Arequipa y Cusco. El tiempo de viaje depende del servicio, la ruta y las condiciones de carretera. Verifica si la salida es directa, el punto de embarque, la franquicia de equipaje, las paradas y la hora estimada de llegada antes de confirmar.' },
  { slug: 'arequipa-puno', resumen: 'Viaja por carretera desde Arequipa a Puno y conecta con el altiplano y el lago Titicaca.', descripcion: 'Servicio terrestre interprovincial entre Arequipa y Puno. La duración es referencial y puede cambiar por tránsito, clima y condiciones de la ruta. Confirma el horario, la terminal o el punto de embarque, el equipaje permitido, las paradas y las condiciones de llegada para la salida elegida.' },
  { slug: 'arequipa-chivay', resumen: 'Traslado turístico de Arequipa a Chivay, punto de partida para conocer el valle del Colca.', descripcion: 'La ruta conecta Arequipa con Chivay, en la provincia de Caylloma. La duración es estimada y puede variar por el tránsito y el estado de la vía. Antes de reservar, confirma el punto de recojo, el horario, el equipaje y si el servicio incluye paradas panorámicas; las entradas a atractivos se pagan aparte salvo indicación expresa.' },
];

const fotosPortada: Record<string, string> = {
  'petroglifos-de-toro-muerto-y-valle-de-majes':
    'https://upload.wikimedia.org/wikipedia/commons/3/35/Toro_Muerto_Archaeological_site_-_petroglyph.jpg',
};

async function main() {
  const aplicacion = await NestFactory.createApplicationContext(AppModule, { logger: false });
  const prisma = aplicacion.get(PrismaService);
  const catalogo = aplicacion.get(CatalogoService);
  try {
    for (const tourContenido of tours) {
      const tour = await prisma.tour.findUnique({ where: { slug: tourContenido.slug } });
      if (!tour) throw new Error(`No existe el tour ${tourContenido.slug}`);
      const { itinerario, slug: tourSlug, ...contenido } = tourContenido;
      const foto = fotosPortada[tourSlug];
      await catalogo.actualizarTour(tour.id, { contenido: { titulo: (await prisma.traduccionTour.findUnique({ where: { tourId_idioma: { tourId: tour.id, idioma: 'es' } } }))?.titulo ?? tour.destinoNombre, ...contenido } });
      await catalogo.definirItinerario(tour.id, itinerario.map(([titulo, descripcion]) => ({ titulo, descripcion })));
      if (foto) {
        const portada = await prisma.imagen.findFirst({
          where: { tourId: tour.id, itinerarioTourId: null },
          orderBy: { orden: 'asc' },
        });
        if (portada) {
          await prisma.imagen.update({
            where: { id: portada.id },
            data: {
              url: foto,
              clave: null,
              textoAlterno: 'Petroglifo de llama en el complejo arqueológico de Toro Muerto. Fotografía: AgainErick, CC BY-SA 3.0.',
            },
          });
        }
      }
      process.stdout.write(`Tour actualizado: ${tourSlug} (${itinerario.length} etapas)\n`);
    }

    for (const transporteContenido of transportes) {
      const transporte = await prisma.transporte.findUnique({ where: { slug: transporteContenido.slug } });
      if (!transporte) throw new Error(`No existe el transporte ${transporteContenido.slug}`);
      const traduccion = await prisma.traduccionTransporte.findUnique({ where: { transporteId_idioma: { transporteId: transporte.id, idioma: 'es' } } });
      if (!traduccion) throw new Error(`No existe la traducción española de ${transporteContenido.slug}`);
      await catalogo.actualizarTransporte(transporte.id, {
        contenido: {
          titulo: traduccion.titulo,
          resumen: transporteContenido.resumen,
          descripcion: transporteContenido.descripcion,
          incluye: traduccion.incluye ?? 'Traslado terrestre según las condiciones confirmadas de la reserva.',
          noIncluye: traduccion.noIncluye ?? 'Servicios no descritos expresamente en la reserva.',
        },
      });
      process.stdout.write(`Transporte actualizado: ${transporteContenido.slug}\n`);
    }
    process.stdout.write(`Catálogo mejorado: ${tours.length} tours, ${transportes.length} transportes.\n`);
  } finally {
    await aplicacion.close();
  }
}

main().catch((error: unknown) => {
  process.stderr.write(`${error instanceof Error ? error.stack : String(error)}\n`);
  process.exitCode = 1;
});
