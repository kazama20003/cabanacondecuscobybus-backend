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
      ['Encuentro en el centro histórico', 'El guía confirma el punto exacto y la hora antes de la salida. Se revisa el recorrido del día y se aclaran los ingresos incluidos; llega con calzado cómodo porque la visita se desarrolla principalmente a pie.'],
      ['Plaza de Armas y portales', 'Recorrido por la plaza y sus portales para reconocer la traza del centro histórico y observar la arquitectura de sillar. El guía explica los elementos visibles desde el espacio público y deja tiempo para fotografías; el ingreso a la Catedral u otros recintos requiere confirmación y puede tener condiciones aparte.'],
      ['Calles y barrios tradicionales', 'Paseo por las calles incluidas en el programa para observar fachadas, patios y la vida cotidiana del centro. El orden puede variar según afluencia y horarios; iglesias, museos y otros recintos solo se visitan si están abiertos y el acceso está indicado en la reserva.'],
      ['Cierre del recorrido', 'La visita termina en el punto indicado por el guía, normalmente dentro del área central. Antes de separarte, confirma cómo regresar al alojamiento y qué lugares puedes continuar visitando por cuenta propia.'],
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
      ['Salida desde Arequipa', 'El punto de recojo y la hora se confirman para la fecha elegida. Antes de partir, verifica la duración prevista, el equipo recomendado para altura y si el servicio incluye entradas o alimentación.'],
      ['Corredor altoandino y miradores', 'Traslado hacia el área de Salinas y Aguada Blanca con vistas de volcanes y planicies de altura. Las paradas para observar el paisaje se hacen únicamente en lugares autorizados y dependen del clima, la carretera y el tiempo disponible.'],
      ['Entorno de la laguna de Salinas', 'Tiempo para contemplar la laguna y su paisaje, que cambia según la estación y el nivel del agua. La fauna se observa a distancia cuando está presente; ningún avistamiento está garantizado y se deben respetar las restricciones de conservación.'],
      ['Regreso a Arequipa', 'Retorno por carretera al punto acordado. El frío, el viento, el estado de la ruta y las condiciones de altura pueden modificar el horario de llegada; mantén a mano agua, abrigo y tus medicamentos personales.'],
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
      ['Recojo en Arequipa', 'La hora y la zona de recojo se confirman para la salida seleccionada. La jornada comienza temprano y el trayecto es largo; consulta con anticipación el desayuno, las entradas y los servicios que cubre tu reserva.'],
      ['Ruta hacia el valle del Colca', 'Traslado por carretera desde Arequipa hacia Caylloma, con cambios de paisaje y altitud. Solo se realizan paradas panorámicas incluidas en el programa y permitidas por la operación; los tiempos de carretera son referenciales.'],
      ['Miradores del valle y Cruz del Cóndor', 'Visita a los miradores habilitados que figuren en el itinerario. El acceso a la Cruz del Cóndor depende de las condiciones del día y la observación de fauna nunca se puede garantizar; permanece en senderos señalizados y respeta los espacios de observación.'],
      ['Regreso a Arequipa', 'Retorno por carretera al punto de recojo o a la zona indicada por el operador. La llegada depende del tráfico, el clima, las paradas confirmadas y el estado de la ruta; organiza conexiones posteriores con margen suficiente.'],
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
      ['Punto de encuentro en Arequipa', 'El lugar y el horario se confirman antes del tour. El guía revisa el orden de visita y las condiciones del acceso; lleva calzado cerrado, agua y protección solar.'],
      ['Canteras de sillar', 'Visita a los sectores autorizados para comprender cómo se extrae y trabaja la piedra volcánica característica de la ciudad. La actividad de los canteros puede variar, por lo que las demostraciones dependen de la jornada; no ingreses a zonas de trabajo sin autorización.'],
      ['Quebrada de Culebrillas', 'Caminata por el tramo habilitado para observar las formaciones de roca y el paisaje de la quebrada. El suelo puede ser irregular y el acceso puede cambiar por seguridad o clima; sigue el ritmo del grupo y no dejes residuos.'],
      ['Regreso a la ciudad', 'Retorno a Arequipa al terminar las visitas incluidas. El punto de descenso y la duración se coordinan con el operador según el tráfico y el programa confirmado.'],
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
      ['Encuentro en Arequipa', 'Confirma el punto y la hora indicados para tu salida y revisa si el recorrido se hará a pie, en vehículo o combinando ambos. Las paradas exactas quedan en el programa confirmado.'],
      ['Mirador de Yanahuara', 'Paseo por el mirador y sus arcos de sillar para contemplar la ciudad; la vista de los volcanes depende de la nubosidad. El tiempo para fotografías se adapta a la afluencia y a las condiciones del día.'],
      ['Campiña y entorno de la ciudad', 'Recorrido panorámico por los sectores incluidos en la salida para observar el paisaje agrícola que rodea Arequipa. No se presupone el ingreso a molinos, restaurantes u otros establecimientos: esos accesos deben aparecer expresamente en la confirmación.'],
      ['Retorno al punto de inicio', 'Fin de la visita en el lugar coordinado con el operador. El orden y la hora de llegada pueden variar por tráfico y por el tiempo que tome cada parada.'],
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
      ['Salida desde Arequipa', 'La hora y el punto de recojo se confirman antes de la excursión. La ruta alcanza zonas de gran altitud: avisa al operador sobre necesidades de movilidad o salud y lleva abrigo por capas.'],
      ['Ruta altoandina hacia Pillones e Imata', 'Traslado por carretera a través de paisajes abiertos de altura. El estado de la vía, el clima y la aclimatación pueden afectar el recorrido; las paradas se realizan solo en sitios seguros y autorizados.'],
      ['Catarata de Pillones', 'Si el acceso está habilitado, se camina hasta el sector de la catarata por terreno natural, que puede ser irregular o resbaladizo. El caudal cambia con la temporada; permanece en senderos permitidos y no te acerques a bordes húmedos.'],
      ['Formaciones rocosas de Imata', 'Visita al área de formaciones naturales si está incluida y el tiempo permite realizarla. La caminata y la exposición al viento requieren calzado firme y ropa abrigadora; no escales ni alteres las rocas.'],
      ['Regreso a Arequipa', 'Retorno por carretera. La duración puede variar por las condiciones del día y la altura; la hora estimada se confirma con el operador y no debe usarse como conexión garantizada.'],
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
      ['Salida desde Arequipa', 'El punto de recojo y la hora se confirman para la fecha. Verifica si el itinerario incluye tiempo libre en la costa y qué gastos corren por cuenta propia.'],
      ['Mollendo y litoral', 'Tiempo para recorrer el sector costero que figure en el programa. El acceso a la playa, el baño de mar y el uso de servicios no forman parte del servicio salvo que se indiquen expresamente; considera la brisa y el estado del mar.'],
      ['Santuario Nacional Lagunas de Mejía', 'Visita por senderos y áreas habilitadas, respetando las normas del espacio protegido. La presencia de aves depende de la temporada y no se garantiza; observa desde la distancia y evita ruidos o alimentar fauna.'],
      ['Retorno a Arequipa', 'Regreso por carretera según el horario confirmado y las condiciones de operación. La llegada puede cambiar por tráfico; conserva un margen si tienes una conexión posterior.'],
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
      ['Salida desde Arequipa', 'El punto de encuentro y la hora se confirman para la fecha reservada. Es una jornada larga por carretera; revisa si la salida contempla alimentación, entradas y paradas de descanso antes de partir.'],
      ['Complejo arqueológico de Toro Muerto', 'Recorrido a pie para observar los bloques grabados y el paisaje árido del sitio. El tiempo de visita depende del acceso y del programa; no toques, mojes ni frotes los petroglifos, y mantente en los senderos y áreas señalizadas.'],
      ['Valle de Majes', 'Parada panorámica en los sectores autorizados que permita el programa y el tiempo disponible. El valle combina paisaje agrícola y entorno fluvial; cualquier visita a establecimientos, degustación o compra es opcional y debe confirmarse por separado.'],
      ['Retorno a Arequipa', 'Regreso por carretera al punto acordado. La duración total estimada, de unas 10 horas, es referencial y puede variar por tráfico, clima, accesos y estado de la vía.'],
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
      ['Salida desde Arequipa', 'La hora, el punto de embarque, la unidad y la duración estimada se confirman antes de reservar. Es un trayecto largo por vías de montaña; consulta si el plan contempla una noche fuera, alimentación o cambios de vehículo.'],
      ['Tramo hacia la provincia de La Unión', 'Viaje por carretera hacia Cotahuasi, con cambios de altura y condiciones de ruta. Los tiempos de paso son aproximados y no implican paradas comerciales; confirma con el transportista los descansos, el equipaje y el punto exacto de llegada.'],
      ['Cotahuasi y visitas acordadas', 'Tiempo para recorrer únicamente los miradores y localidades detallados en el programa final. No se presume una excursión dentro de la reserva paisajística ni traslados a atractivos alejados; estos requieren vehículo, tiempo y servicios confirmados aparte.'],
      ['Retorno o continuación del viaje', 'La modalidad, el horario y el lugar de embarque deben quedar confirmados en la reserva. Verifica si el regreso es el mismo día o si incluye pernocte; no planifiques conexiones ajustadas por la duración variable de la carretera.'],
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
      ['Encuentro en Arequipa', 'Confirma el punto de salida, la hora y si el servicio incluye recojo. Consulta qué visitas están contempladas y si se requiere llevar ropa de baño.'],
      ['Ruta y paisaje de Yura', 'Traslado hacia el distrito para conocer los sectores que figuren en el programa confirmado. Las paradas panorámicas dependen de la disponibilidad del vehículo y del tiempo; el acceso a propiedades o establecimientos no se presume incluido.'],
      ['Establecimiento termal, solo si está confirmado', 'El ingreso, las piscinas habilitadas, las tarifas y el tiempo de permanencia dependen del operador local. Confirma la disponibilidad antes de viajar; lleva ropa de baño y toalla únicamente si la visita está prevista.'],
      ['Regreso a Arequipa', 'Retorno al punto acordado según el horario coordinado. El tráfico y las condiciones de la ruta pueden modificar la llegada; alimentación y entradas se consideran aparte salvo detalle expreso en la reserva.'],
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
      const etapasPrevias = await prisma.itinerarioTour.findMany({
        where: { tourId: tour.id },
        include: { imagenes: { orderBy: { orden: 'asc' } } },
        orderBy: { orden: 'asc' },
      });
      await catalogo.definirItinerario(tour.id, itinerario.map(([titulo, descripcion], indice) => {
        const anterior = etapasPrevias[indice];
        const minutosDesdeSalida = Math.round((tour.duracionMinutos * indice) / itinerario.length);
        const finEtapa = Math.round((tour.duracionMinutos * (indice + 1)) / itinerario.length);
        return {
          titulo,
          descripcion,
          minutosDesdeSalida,
          duracionEstimadaMinutos: finEtapa - minutosDesdeSalida,
          ...(anterior?.latitud != null ? { latitud: Number(anterior.latitud) } : {}),
          ...(anterior?.longitud != null ? { longitud: Number(anterior.longitud) } : {}),
          medios: anterior?.imagenes.map(({ url, clave, textoAlterno, tipo }) => ({ url, clave: clave ?? undefined, textoAlterno: textoAlterno ?? undefined, tipo })) ?? [],
        };
      }));
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
