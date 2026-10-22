/* ============================================================
   New Educational Model — Tutor training · ENGLISH content
   ------------------------------------------------------------
   HOW TO TRANSLATE THIS FILE
   - Copy it as content-xx.js (es, pt, ...) and change lang below.
   - Translate ONLY the text inside quotes '…' and backticks `…`.
   - Keep unchanged: HTML tags (<b>, <span class="…">…), ${…} code,
     {placeholders} in curly braces, keys/ids before the colon,
     emoji, file names (images/…), and the "a:" / "check:" values.
   - Typographic apostrophes (’) are safe inside '…'. A plain
     apostrophe (') inside '…' would break the file: use ’ instead.
   ============================================================ */
window.CONTENT = { lang: 'es' };

/* ---------------- Interface strings ---------------- */
CONTENT.ui = {
  pageTitle: 'Capacitación sobre el Nuevo Modelo Educativo',
  footer: 'kodland · Nuevo Modelo Educativo · Capacitación para tutores',
  devLink: '🛠 Desarrollador',

  // Navigation
  logoSub: 'Nuevo Modelo Educativo',
  navCore: 'Básico {done}/{total}',
  navHome: '← Inicio',
  navModules: '← Todos los módulos',
  navBackModule: '← Volver al módulo',

  // Home
  heroKicker: '🚀 Capacitación para tutores',
  heroTitle: 'El <span class="hl">nuevo</span> modelo educativo',
  heroLead: 'Kodland está cambiando la forma de enseñar algunos de sus cursos. Esta capacitación te prepara para enseñar con el nuevo modelo: {n} módulos, en orden. Cada uno termina con una breve evaluación que desbloquea el siguiente.',
  fact1: '<b>A tu ritmo.</b> Tu progreso se guarda en este navegador.',
  fact2: '<b>Con práctica incluida.</b> Tres simulaciones — Backoffice, Classroom y Kodland Sparks — que puedes repetir todas las veces que quieras.',
  progAllDone: 'Módulos completados 🎉',
  progLabel: 'módulos completados',
  moduleN: 'Módulo {n}',
  badgeDone: '✓ Completado · {score}%',
  badgeLocked: '🔒 Completa el Módulo {n}',
  badgeStart: 'Empezar →',
  homeDoneTitle: '¡Módulos completados!',
  homeDoneText: 'Un último paso: el test DST en la página de la capacitación en el LMS.',
  homeDoneBtn: 'Ver qué sigue →',

  // Module page and its check
  eyebrow: 'Módulo {n} de {total}',
  ctaQuizTitle: 'Evaluación del módulo',
  ctaQuizText: '{n} preguntas cortas. Necesitas un 70% o más para aprobar.',
  ctaRiskTitle: 'Evaluación del módulo: detecta la estrategia de riesgo',
  ctaRiskText: '{n} situaciones reales. <b style="color:#E5484D">Esta evaluación es distinta de las demás: en cada caso eliges la estrategia que PERJUDICARÍA la clase</b>, no la buena. Necesitas un 70% o más para aprobar.',
  lockOne: '🔒 Completa {what} e ingresa su código arriba para desbloquear la evaluación.',
  lockMany: '🔒 Completa {what} e ingresa sus códigos arriba para desbloquear la evaluación.',
  listAnd: ' y ',
  startCheck: 'Empezar la evaluación →',
  retake: '🔁 Repetir la evaluación',

  // Simulations and completion codes
  launchSteps: ['Ábrela en una pestaña nueva.', 'Sigue todos los pasos hasta ver la pantalla final con tu código.', 'Vuelve a esta pestaña e ingresa el código abajo.'],
  codeOk: '✅ <b>{sim} completada.</b> Código aceptado.',
  codeLabel: '<b>🔑 Código de finalización</b> — lo encontrarás en la última pantalla de la {sim}.',
  codePlaceholder: 'p. ej., XX-0000-00',
  codeUnlock: 'Desbloquear',
  codeWrong: 'Ese código no es correcto. Revísalo en la última pantalla de la simulación.',

  // Small interactive pieces
  tapFlip: 'Toca para girar',
  mythReality: 'Realidad ✓',
  loopAgain: '<b>¡Y otra vez!</b> La reflexión se convierte en el próximo objetivo, una vuelta más a fondo.',
  ages: '{age} años',
  aiBar: 'Cuánta IA forma parte del proyecto',
  stageWas: 'Antes: <s>{was}</s> → ahora:',
  stageOf: '{i} de {n}',
  stageWatch: 'Mira «{t}» en una clase real',
  stageFirst: 'Volver a la primera',
  next: 'Siguiente →',
  sortWrong: '✗ No exactamente.',

  // Follow Mode demo (Module 2)
  fmNotes: '📒 Notas del tutor — solo las ves tú',
  fmFollowing: '🔗 Siguiendo al profesor',
  fmStart: '👆 Sofía está en la misma clase, pero Lead the group está desactivado. Activa el interruptor.',
  fmOn: '✅ <b>Lead the group está ACTIVADO.</b> Sofía saltó a tu tarjeta, pero fíjate: ve la tarjeta <b>sin</b> tus notas del tutor. Ahora prueba <b>Siguiente tarjeta</b>.',
  fmOff: '⏸️ <b>Lead the group está DESACTIVADO.</b> Sofía se queda donde está, abras lo que abras.',
  fmMoved: '➡️ Pasaste a la tarjeta {t} y <b>Sofía pasó contigo</b>.',
  fmMovedAlone: '➡️ Pasaste a la tarjeta {t}, pero <b>Sofía sigue en la tarjeta {s}</b>. Puede que esté mirando otra cosa. Activa Lead the group.',

  // Closing timeline (Module 3)
  tlOpening: '<b>Apertura.</b> Calentamiento y saludo, conexión con la clase anterior, revisión de la tarea y objetivo de la clase.',
  tlCards: '<b>Las tarjetas.</b> Los estudiantes construyen, exploran, corrigen y muestran. Vigila el reloj: quedan {left} minutos…',
  tlClose: '<b>Faltan {left} minutos: es hora de cerrar.</b> Estés donde estés en las tarjetas, empieza ya la rutina de cierre.',
  tlRoutine: '<b>Rutina de cierre.</b> Resumen hecho por los estudiantes → adelanto de la próxima clase → próxima tarea.',
  tlBye: '<b>¡Hasta pronto!</b> Todos se van sabiendo qué aprendieron, qué viene después y qué hacer en casa.',

  // Videos
  watchExample: 'Mira un ejemplo real',
  comingSoon: 'próximamente',
  close: 'Cerrar',
  videoDefault: 'Clase real',
  soonTitle: 'Video próximamente',
  soonText: 'Aquí verás esta parte de la clase en una sesión real. El video se está preparando y aparecerá aquí pronto.',
  zoomBadge: '🔍 Haz clic para ampliar',
  zoomAria: 'Abrir el video más grande',
  zoomDefault: 'Video',
  zoomIn: 'Acercar',
  zoomOut: 'Alejar',
  zoomReset: 'Restablecer',
  zoomHint: 'Haz zoom con + / −, la rueda del mouse o un doble clic · arrastra para moverte · Esc o ✕ para cerrar',

  // Checks (quiz engine)
  qmeta: '{e} Evaluación del módulo {n} · {kind} {i} de {total}',
  qCase: 'Caso',
  qQuestion: 'Pregunta',
  riskQuestion: '¿Cuál <span class="hurt">PERJUDICARÍA</span> esta parte de la clase?',
  riskBanner: '⚠️ Atención: en esta evaluación eliges la estrategia <b>EQUIVOCADA</b>, la que <b>PERJUDICARÍA</b> la clase. ¡No la buena!',
  tfTrue: '✅ Verdadero',
  tfFalse: '❌ Falso',
  openHint: '✍️ Escribe tu propia respuesta, de al menos {min} caracteres. No hay una única redacción correcta: verás una respuesta modelo para compararla con la tuya.',
  openPlaceholder: 'Escribe tu respuesta aquí…',
  openSubmit: 'Enviar mi respuesta',
  openRecorded: '✅ <b>Respuesta registrada.</b> Respuesta modelo — compárala con la tuya:',
  fbRight: '✅ <b>¡Correcto!</b> ',
  fbWrong: '❌ <b>No exactamente.</b> ',
  fbRiskRight: '✅ <b>Correcto: esa es la estrategia que perjudicaría la clase.</b> ',
  fbRiskWrong: '❌ <b>Esa opción en realidad ayuda a la clase.</b> La de riesgo está resaltada en verde. ',
  nextQuestion: 'Siguiente pregunta →',
  seeResult: 'Ver mi resultado →',

  // Result of a check
  passedTitle: '¡Aprobaste!',
  failTitle: 'Casi lo logras',
  scoreLine: 'Respondiste correctamente <b>{score} de {n}</b>.',
  failText: 'Necesitas un 70% o más. Repasa el módulo e inténtalo de nuevo: puedes repetir la evaluación todas las veces que lo necesites.',
  nextUnlocked: 'El <b>Módulo {n} · {title}</b> ya está desbloqueado.',
  goModule: 'Ir al Módulo {n} →',
  allDoneText: 'Completaste toda la capacitación.',
  seeNext: 'Ver qué sigue →',
  reviewModule: '📖 Repasar el módulo',

  // Final page
  doneTitle: '¡Módulos completados!',
  doneText: `<p>¡Ya casi terminas! Vuelve a la página de la capacitación en el LMS desde la que accediste a esta capacitación. El test DST está disponible justo debajo de la capacitación.</p>
    <p>👉 <b>Debes completar y aprobar el test DST para que la capacitación se considere completada con éxito.</b> Si no completas el test DST, la capacitación quedará incompleta y podría vencer.</p>
    <p>La nota mínima para aprobar es <b>80%</b>.</p>
    <p>¡Mucha suerte! ❤️</p>`,
  doneBadge: '✓ Listo',
  doneNexts: [
    ['📒', '<b>Antes de cada clase:</b> lee las notas del tutor en Backoffice y revisa si hay actualizaciones.'],
    ['🔑', '<b>Kodland Sparks:</b> tus credenciales te las da el departamento de Operaciones o el de Enseñanza.'],
    ['🏁', '<b>En cada clase:</b> una buena apertura, preguntas de razonamiento y un cierre de 5–7 minutos.'],
    ['🤖', '<b>Cuando los estudiantes usan IA:</b> la IA propone, el autor decide.']
  ],
  doneBack: 'Volver a los módulos',

  // Locked messages
  lockedTitle: 'Todavía bloqueado',
  lockedModule: 'Primero completa el Módulo {n}.',
  lockedStep: 'Completa el paso anterior para desbloquear este.',
  ok: 'Entendido'
};

/* ============================================================
   MODULES — titles, descriptions, objectives and section names (keep id, n, e, color, check, needs keys)
   ============================================================ */
CONTENT.modules = [
  { id:'m1', n:1, e:'🧩', color:'#C4F046', title:'La metodología del nuevo modelo', check:'quiz',
    desc:'Qué es el nuevo modelo, la pedagogía que lo sustenta, cómo funciona la retroalimentación y cómo guiar a los estudiantes en el uso de la IA.',
    obj:'Entender qué es y qué no es el nuevo modelo educativo, los cuatro pilares sobre los que se construye, cómo funciona la retroalimentación y cómo ayudar a los estudiantes a usar bien la IA.',
    offer:[['🌱','Entiende el nuevo modelo de enseñanza.'],['🏛️','Conoce los cuatro pilares que dan forma a cada clase.'],['💬','Descubre cómo funciona la retroalimentación en cuatro direcciones.'],['🧭','Entiende cómo cambia tu rol como tutor.']],
    sections:[ ['what','🔍','Qué es el nuevo modelo'], ['pillars','🏛️','Los cuatro pilares del modelo'], ['people','💬','Retroalimentación desde cuatro direcciones'] ] },
  { id:'m2', n:2, e:'🛠️', color:'#3E7BFA', title:'Preparación técnica', check:'quiz',
    needs:[['boCode','la simulación del BO'],['classCode','la guía de Classroom'],['sparksCode','la guía de Kodland Sparks']],
    desc:'Backoffice y las notas del tutor, Classroom con Follow Mode y Kodland Sparks, con tres simulaciones para practicar.',
    obj:'Encontrar un curso y sus notas del tutor en Backoffice, dar una clase en Classroom con Follow Mode y saber qué hacen los estudiantes en Kodland Sparks. Cada parte termina con una simulación que te da un código de finalización.',
    offer:[['🗂️','Encuentra todo el material del curso en Backoffice: ya no se usa la wiki.'],['📒','Lee las notas del tutor y las actualizaciones antes de cada clase.'],['🎥','Entiende Follow Mode, las tarjetas de actividades y las demostraciones en pantalla.'],['⚡','Conoce Kodland Sparks, donde los estudiantes crean y publican.']],
    sections:[ ['bo','🗂️','Backoffice: donde vive el curso'], ['classroom','🎥','En la clase: tarjetas, Follow Mode y demostraciones'], ['sparks','⚡','Kodland Sparks: el estudio de los estudiantes'] ] },
  { id:'m3', n:3, e:'⭐', color:'#F03D9E', title:'Calidad de la clase', check:'risk',
    desc:'Cómo se estructura una clase y tres hábitos que mantienen esa estructura: una buena apertura, preguntas de razonamiento y un cierre fijo.',
    obj:'Entender cómo se estructura una clase en el nuevo modelo, qué observan las revisiones de calidad, y desarrollar tres hábitos que mantienen la estructura en cada clase: una buena apertura, preguntas que hagan que los estudiantes expliquen su razonamiento y una rutina de cierre fija.',
    offer:[['🧱','Entiende cómo se estructura una clase en el nuevo modelo.'],['🎬','Abre bien cada clase: calentamiento, conexión con la clase anterior, tarea y objetivo de la clase.'],['🧠','Haz preguntas que lleven a estudiantes concretos a explicar.'],['🏁','Cierra cada clase con una rutina fija de 5–7 minutos.']],
    sections:[ ['structure','🧱','Cómo se estructura una clase'], ['seeing','🔎','Qué observan las revisiones de calidad'], ['opening','🎬','Una buena apertura'], ['reasoning','🧠','Preguntas que hacen pensar en voz alta'], ['closing','🏁','Una rutina de cierre fija'], ['metrics','📊','Lo que sigue dependiendo de ti: las métricas'], ['qcheck','✅','Tu lista de control de calidad de la clase'] ] },
  { id:'m4', n:4, e:'🤖', color:'#8B5CF6', title:'Introducción a los prompts para tutores', check:'quiz',
    desc:'La única habilidad realmente nueva de estos cursos. No la parte técnica de la IA, sino cómo escribir un prompt y cómo ayudar a un estudiante a escribir el suyo.',
    obj:'Saber lo suficiente sobre prompts para guiar a tus estudiantes mientras escriben los suyos en clase. Se trata de una habilidad práctica, no de teoría técnica.',
    offer:[['✍️','Entiende qué es un prompt y qué incluye uno bueno.'],['💻','Escribe prompts para generar y depurar código.'],['🎨','Escribe prompts para imágenes y video.'],['⚠️','Evita los errores más comunes.']],
    sections:[ ['why4','💡','Por qué existe este módulo'], ['whatp','❓','Aprender sobre IA: ¿qué es un prompt?'], ['goodp','🧩','¿Qué debe incluir un buen prompt?'], ['codep','💻','Consejos para prompts que generan código'], ['imgp','🎨','Consejos para prompts que generan imágenes y video'], ['mistp','⚠️','Errores comunes'] ] }
];

/* ============================================================
   Names of the three simulations
   ============================================================ */
CONTENT.sims = { boCode:'simulación del BO', classCode:'guía de Classroom', sparksCode:'guía de Kodland Sparks' };

/* ============================================================
   MODULE CHECKS — "a" is the number of the correct option (0 = first). Keep it as it is.
   ============================================================ */
CONTENT.quiz = {
  m1:[
    { ctx:'Un colega oyó hablar del nuevo modelo educativo y está preocupado: «Entonces, ¿ahora cambian todos nuestros cursos?»',
      q:'¿Cuál es la respuesta correcta?',
      o:['Sí: a partir de ahora todos los cursos de Kodland siguen el nuevo modelo.',
         'Solo cambiarán los cursos que tienen menos estudiantes.',
         'No, solo los grupos que tienes con el nuevo modelo. Los grupos que ya tienes con los cursos anteriores seguirán igual, salvo que te indiquen lo contrario.'],
      a:2, e:'El nuevo modelo se introduce de forma gradual. Los grupos que ya estudian con otro formato lo mantienen: te avisarán si alguno de tus grupos cambia.' },
    { ctx:'Planificas los primeros minutos de una clase: explicas el nuevo concepto, muestras la herramienta y luego entregas la plantilla para que los estudiantes construyan el proyecto.',
      q:'¿Qué falla en este plan dentro del nuevo modelo?',
      o:['Nada: los conceptos deben explicarse antes de que los estudiantes puedan usarlos.',
         'Es inductivo. Empieza con el resultado final ya funcionando, explóralo con el grupo y deja que tu explicación responda a lo que los estudiantes ya notaron.',
         'Deberías dejar que la IA explique el concepto en tu lugar.'],
      a:1, e:'El aprendizaje deductivo invierte el orden anterior: muestra primero el resultado funcionando, desármalo con el grupo y explica cuando los estudiantes ya necesitan la respuesta.' },
    { ctx:'Un estudiante lleva diez minutos intentando resolver el mismo problema. Sigue sin funcionar y dice: «Es que soy malo para esto».',
      q:'¿Qué respuesta encaja con la mentalidad de crecimiento del modelo?',
      o:['«No te preocupes, déjame arreglarlo para que podamos seguir».',
         '«Esto es fácil, ya deberías saberlo».',
         '«Todavía no funciona, y es un problema típico. Muéstrame qué intentaste y busquemos la siguiente estrategia».'],
      a:2, e:'Un error es una etapa normal del desarrollo. Preséntalo como algo normal y devuélvele el siguiente paso al estudiante: si lo arreglas por él, eliminas el aprendizaje.' },
    { ctx:'Un estudiante le pide a la IA que escriba toda la lógica de su juego y la pega en su proyecto sin cambiar nada.',
      q:'¿Qué regla del modelo rompe esto?',
      o:['«La IA propone, el autor decide»: la IA puede ayudar, pero nunca debe construir el núcleo del proyecto en lugar del estudiante.',
         'Ninguna: la IA puede hacer cualquier cosa mientras el proyecto funcione.',
         'La regla de que la IA solo puede usarse para imágenes.'],
      a:0, e:'En todas las edades la regla es la misma: la IA propone, el autor decide. Cuánta IA se usa depende de la edad, pero el estudiante siempre es dueño del núcleo del proyecto.' }
  ],
  m2:[
    { q:'En Backoffice, ¿cómo llegas a las actividades y a las notas del tutor de una clase en estos cursos?',
      o:['Groups → tu grupo → el enlace de la wiki.',
         'Courses → el curso → Assignments → elige la clase → abre una actividad.',
         'Profile → Schedule → la clase.'],
      a:1, e:'Al contenido del curso se llega por Courses, no por Groups. En Assignments ves las tarjetas de actividades de la clase, y las notas del tutor están dentro de cada tarjeta. La tabla Study guides está vacía a propósito.' },
    { ctx:'El mes pasado diste la Clase 3 con otro grupo y salió muy bien.',
      q:'¿Qué haces antes de volver a darla?',
      o:['Nada: ya conoces la clase, así que esta vez puedes saltarte las notas.',
         'Vuelves a leer las notas del tutor y revisas si hay actualizaciones: los cursos se mejoran constantemente, y las actividades, los tiempos o las notas pueden cambiar.',
         'Buscas la presentación en la wiki.'],
      a:1, e:'Leer las notas del tutor forma parte de la preparación de cada clase, cada vez. La versión que diste puede no ser la que vas a dar.' },
    { ctx:'Tienes Lead the group activado. A mitad de la clase, un estudiante hace clic en «Work independently» y vuelve a una tarjeta anterior.',
      q:'¿Qué pasa a partir de ese momento?',
      o:['El estudiante sale de la clase y tiene que volver a entrar.',
         'El estudiante ve un aviso que indica dónde estás tú, con un botón Return; tú ves junto a su nombre que está trabajando por su cuenta.',
         'Sus respuestas en tu tarjeta te llegan en tiempo real.'],
      a:1, e:'Follow Mode nunca deja encerrado a un estudiante. Puede trabajar por su cuenta, ver dónde estás y volver con un clic.' },
    { q:'Quieres demostrar un paso en una herramienta, como el editor de Scratch. ¿Cuál es la forma correcta de mostrarlo?',
      o:['Compartir tu pantalla con la tarjeta de la clase abierta, para que vean las instrucciones y tus notas.',
         'Compartir solo la pestaña o la ventana de la herramienta, nunca la tarjeta de la clase, donde se ven tus notas del tutor.',
         'No demostrar nada: las tarjetas lo explican todo.'],
      a:1, e:'Follow Mode es para las tarjetas: cada estudiante tiene su propia copia y nunca ve tus notas. Compartir pantalla muestra exactamente lo que hay en tu pantalla, así que comparte la herramienta, no la tarjeta de la clase.' },
    { ctx:'Tus estudiantes terminaron una pregunta de opción múltiple y, más tarde, una actividad en la que debían pegar el enlace de su proyecto.',
      q:'¿Qué afirmación es correcta?',
      o:['Las dos se guardan automáticamente: los estudiantes nunca necesitan hacer clic en nada.',
         'La pregunta de opción múltiple registra la puntuación automáticamente; en la actividad del enlace, los estudiantes deben hacer clic en «Send».',
         'Las dos necesitan el botón Submit; si no, no se registra nada.'],
      a:1, e:'Las preguntas de opción múltiple, los campos de texto y de fórmula y las actividades de arrastrar y soltar registran la puntuación automáticamente. Las actividades en las que los estudiantes envían texto, enlaces o archivos necesitan el botón «Send».' },
    { q:'¿Cómo entran los estudiantes y los tutores a Kodland Sparks?',
      o:['Todos usan su usuario de Backoffice.',
         'Los estudiantes entran con un botón desde la plataforma principal; los tutores usan credenciales aparte que les da el departamento de Operaciones o el de Enseñanza.',
         'Estudiantes y tutores se registran por su cuenta en el sitio web.'],
      a:1, e:'Los estudiantes usan el inicio de sesión único desde la plataforma. Los tutores reciben credenciales aparte de Operaciones o Enseñanza; mientras tanto, el recorrido guiado es la forma de explorarla.' }
  ],
  // Module 3: in every case, the tutor must spot the strategy that would HARM that part of the lesson
  m3:[
    { part:'👋 Calentamiento', ctx:'Los estudiantes entran en silencio, con la cámara apagada. Nadie dice nada.',
      o:['Saludar a cada estudiante por su nombre y hacer una pregunta rápida sobre su semana.',
         'Saltarse el calentamiento y pasar directo al proyecto para ganar tiempo.',
         'Tomar asistencia mientras se acomodan e invitarlos a reaccionar con un emoji.'],
      a:1, e:'Saltarse el calentamiento ahorra dos minutos y cuesta la conexión. Una apertura breve y cálida es lo que hace hablar a los estudiantes callados y los mantiene participando el resto de la clase.' },
    { part:'📓 Revisión de la tarea', ctx:'La mitad del grupo no hizo la tarea.',
      o:['Preguntar quién se trabó y qué pasó: quizá fue un problema técnico.',
         'Pedirle a un estudiante que muestre su tarea y mencionar algo concreto que salió bien.',
         'Decir «OK, cero para ti» y seguir sin preguntar por qué.'],
      a:2, e:'Una tarea sin hacer es una señal, no solo un cero. Averiguar si se trabaron es la forma de ayudarlos y de evitar que se queden atrás.' },
    { part:'🧠 Comprensión', ctx:'Explicaste una idea nueva. Cuando preguntas «¿Está claro?», todos dicen que sí, pero sospechas que no entendieron de verdad.',
      o:['Pedirle a un estudiante concreto, por su nombre, que explique por qué funciona.',
         'Aceptar el sí y seguir: si dicen que está claro, está claro.',
         'Pedirles que predigan qué pasará si cambias algo y luego probarlo juntos.'],
      a:1, e:'«¿Está claro?» casi siempre recibe un sí. Seguir sin comprobarlo hace que los estudiantes se traben más adelante: mejor pide a alguien que explique su razonamiento.' },
    { part:'📋 Resumen', ctx:'Quedan 7 minutos y el grupo no terminó la última tarjeta.',
      o:['Seguir trabajando hasta el final para que terminen la tarjeta, y saltarse el resumen.',
         'Empezar ya la rutina de cierre: la tarjeta sin terminar puede continuar en la próxima clase o en casa.',
         'Pedir a dos o tres estudiantes que digan qué aprendieron hoy.'],
      a:0, e:'Trabajar hasta el último segundo es justo lo que hace que se pierdan el resumen, el adelanto y la tarea. Empieza el cierre a tiempo: la tarjeta puede esperar, el cierre no.' },
    { part:'🔮 Adelanto y tarea', ctx:'Es el último minuto de la clase y los estudiantes están por irse.',
      o:['Conectar el adelanto con su proyecto: una frase que les dé curiosidad por la próxima clase.',
         'Explicar la tarea en una o dos frases y recordarles cómo entregarla.',
         'Leer rápido la frase del adelanto mientras se van y decir «la tarea está en la plataforma».'],
      a:2, e:'Un adelanto apurado y una tarea sin explicar hacen que los estudiantes se vayan sin saber qué viene. Una frase motivadora y una explicación clara llevan menos de dos minutos.' }
  ],
  m4:[
    { ctx:'Estás ayudando a un estudiante a convertir la idea de su juego de Scratch en un prompt.',
      q:'¿Qué prompt tiene más probabilidades de dar un resultado útil al primer intento?',
      o:['«Crea un juego de un gato con obstáculos, parecido a los juegos de carrera infinita, usando buenos principios de diseño de juegos».',
         '«Crea un juego en Scratch: un sprite de gato se mueve a izquierda y derecha con las flechas, caen obstáculos desde arriba a velocidad creciente, el puntaje sube cada segundo que sobrevive y el juego termina tras 3 choques».',
         '«Haz un juego divertido y atractivo para un niño de 8 años que le enseñe sobre obstáculos y supervivencia, parecido a Flappy Bird pero original».',
         '«Crea un juego 2D en Scratch con reglas claras, un sistema de puntaje y una dificultad que aumente con el tiempo».'],
      a:1, e:'Solo ese tiene mecánicas concretas y sin ambigüedad: movimiento, aparición de obstáculos, cuándo suma puntos y condición de fin. Los demás <i>parecen</i> específicos, pero se apoyan en términos subjetivos —«buenos principios de diseño de juegos», «divertido y atractivo», «reglas claras»— que la IA tiene que interpretar por su cuenta.' },
    { ctx:'El primer prompt de imagen de un estudiante generó un personaje con la paleta de colores equivocada. Todo lo demás —pose, estilo, fondo— salió bien.',
      q:'¿Cuál es el mejor siguiente paso?',
      o:['Reescribir todo el prompt desde cero con más detalle en general, para no repetir el mismo error.',
         'Volver a ejecutar exactamente el mismo prompt, ya que los resultados de la IA tienen algo de azar y un segundo intento a menudo lo arregla.',
         'Enviar un prompt de seguimiento que cambie solo la paleta de colores y mantenga igual el resto de la descripción.',
         'Agregar varios adjetivos sobre el ambiente deseado, para que la IA tenga más contexto.'],
      a:2, e:'Aislar la única variable que estaba mal es más rápido y confiable que empezar de nuevo, depender del azar o agregar detalles que no atacan el problema real.' },
    { ctx:'Estás ayudando a un estudiante de 13 años o más a depurar una función de Python con IA.',
      q:'¿Qué prompt refleja la forma más eficaz de resolver el problema?',
      o:['«Este código no funciona, arréglalo por favor: [código]»',
         '«Esta función debería devolver el promedio de una lista, pero devuelve None cuando la lista tiene un solo elemento. Este es el código: [código]. ¿Qué hace que falle este caso concreto?»',
         '«Reescribe este código con mejores prácticas y asegúrate de que funcione: [código]»',
         '«Explica qué está mal en este código y dame una versión corregida: [código]»'],
      a:1, e:'Indica exactamente el comportamiento esperado, el fallo observado y el caso límite concreto, así la IA puede ir al error real en vez de adivinar el alcance o reescribir más de lo necesario.' },
    { ctx:'Dos tutores escriben prompts para la misma tarea de generar un video. El tutor A escribe un único prompt largo y detallado que cubre estilo, tema y fondo a la vez. El tutor B escribe primero un prompt más corto, revisa el resultado y luego ajusta.',
      q:'¿Qué afirmación es más precisa?',
      o:['El enfoque del tutor A siempre es mejor, porque más detalle desde el principio reduce la cantidad de intentos necesarios.',
         'El enfoque del tutor B siempre es mejor, porque los prompts cortos son, por naturaleza, más fáciles de procesar para la IA.',
         'Cualquiera puede funcionar, pero el enfoque iterativo del tutor B facilita identificar qué detalle concreto causó un resultado no deseado.',
         'Ningún enfoque importa, porque la calidad final depende solo del modelo de IA que se use, no del prompt.'],
      a:2, e:'El principio central de este módulo es iterar y aislar variables. El detalle por sí solo no garantiza el éxito, e iterar deja mucho más clara la relación causa-efecto que hacerlo todo en un único prompt grande.' },
    { open:true, min:180,
      ctx:'Un estudiante de tu grupo quiere agregar un doble salto a su juego de plataformas. Le escribe a la IA: <i>«mejora el salto»</i>.',
      q:'Reescríbelo como un prompt que probablemente funcione al primer intento. Escribe el texto del prompt que lo ayudarías a crear y luego agrega una línea explicando por qué el tuyo funcionará mejor.',
      model:'Un buen prompt cumple la mayoría de estos puntos: <ul><li><b>Nombra la plataforma</b> —«En Scratch…»— para que la IA no tenga que adivinar el entorno.</li><li><b>Indica el comportamiento exacto y lo que lo activa:</b> «cuando se presiona la barra espaciadora y el gato ya está en el aire, salta una segunda vez».</li><li><b>Pone un límite:</b> «solo una vez por caída» y «no cambies los bloques de movimiento que ya existen».</li><li><b>Pide una explicación:</b> «dime qué bloques agregaste y dónde».</li></ul><p style="margin-top:8px">Y el motivo: aísla <b>una sola</b> mecánica, describe con precisión el comportamiento esperado y limita lo que se puede cambiar, así que la IA no tiene nada que inventar. «Mejora el salto» deja todas esas decisiones en manos de la IA.</p>' }
  ]
};

/* ============================================================
   STAGE CAROUSELS (Module 3) — keep e, c and v
   ============================================================ */
CONTENT.stagesets = {
  blocks:[
    { e:'👋', t:'Calentamiento: de 2 a 4 minutos', was:'Calentamiento', ph:'Apertura', c:'#BDE7FF', goal:'Sigue existiendo, pero es breve: saludo, cámara y micrófono, una reacción. En algunas clases hay una consulta sobre el estado de ánimo.',
      d:['Úsalo para conectar: una charla corta o una pregunta sobre sus intereses y cómo se sienten.','Toma asistencia ahora, mientras los estudiantes se acomodan, no al final.'] },
    { e:'🔧', t:'Un punto de control técnico', was:'Repaso de la clase anterior', ph:'Apertura', c:'#BDE7FF', goal:'El repaso se convierte en un punto de control: ¿el proyecto anterior abre y funciona? No se vuelven a explicar conceptos: solo compruebas que el punto de partida esté listo.',
      d:['En algunas clases, el repaso y la revisión de la tarea son una sola actividad en la plataforma.','Si un proyecto no abre, usa la plantilla de respaldo: nadie se queda sin avanzar.'] },
    { e:'🎬', t:'El objetivo se muestra, no se explica', was:'Objetivo de la clase', ph:'Apertura', c:'#FFF1B8', goal:'El objetivo se muestra con el resultado final —un video, un GIF o un proyecto que funciona— como primer disparador de la clase.',
      d:['Muestra primero el resultado y luego pregunta qué notan.','Deja que la explicación llegue después, como respuesta.'] },
    { e:'🔀', t:'Teoría y práctica van juntas', was:'Teoría y práctica', ph:'Parte principal', c:'#E4FFC2', goal:'Los estudiantes exploran y enfrentan primero el desafío; la explicación llega justo cuando la necesitan.',
      d:['Da una pista a la vez, no la solución.','Los errores son material de aprendizaje, no fracasos.'] },
    { e:'📋', t:'Resumen: interactivo y compartido', was:'Resumen de la clase', ph:'Cierre', c:'#FFD9EC', goal:'Más interactivo y grupal: pequeños cuestionarios que cada estudiante responde en la plataforma, más una lista corta de lo aprendido para que la repases con ellos.',
      d:['Los estudiantes dicen qué aprendieron: no hagas tú el resumen por ellos.','Es el primer paso de tu rutina de cierre (más abajo).'] },
    { e:'🏠', t:'Tarea: la siguiente versión', was:'Tarea para la casa', ph:'Cierre', c:'#FFD9EC', goal:'La tarea es la siguiente versión del mismo proyecto publicado, o una misión que se basa en lo que acaban de aprender. No es un ejercicio aparte.',
      d:['Explícala con claridad antes de que se vayan.','Recuérdales publicar la nueva versión y enviar el enlace.'] },
    { e:'🔮', t:'Adelanto: una frase motivadora', was:'Adelanto de la próxima clase', ph:'Cierre', c:'#FFD9EC', goal:'Es una frase, no un bloque de la clase, pero no te limites a leerla. Úsala para motivar.',
      d:['Lee la próxima clase antes de dar esta, para generar verdadera expectativa.','Conéctala con lo que acaban de construir.'] }
  ],
  open:[
    { e:'👋', t:'Calentamiento y saludo', ph:'Apertura · 1', c:'#BDE7FF', v:'warmup', goal:'Conecta antes de enseñar: saluda a cada estudiante por su nombre, revisa cámara y sonido, y dales un motivo para sonreír.',
      d:['Saluda a cada estudiante por su nombre cuando llega.','Una pregunta de 1 minuto sobre su semana o sus intereses.','Toma asistencia mientras se acomodan.'],
      say:['«¡Hola, Leo! Qué bueno verte. Una pregunta rápida antes de empezar: ¿a qué juego jugaste esta semana?»'] },
    { e:'🔗', t:'Conexión con la clase anterior', ph:'Apertura · 2', c:'#C9F2D6', v:'link', goal:'Recuerda a los estudiantes en qué punto está su proyecto y por qué la clase de hoy continúa a partir de ahí: la historia sigue.',
      d:['Pide a un estudiante que cuente al grupo qué construyó la vez pasada.','Conéctalo con la misión de hoy en una frase.','Mantén viva la historia del curso: «Hoy, nuestra misión es…».'],
      say:['«Ana, recuérdanos: ¿qué podía hacer tu proyecto al final de la clase pasada?»','«La vez pasada tu juego consiguió un héroe. Hoy, el héroe consigue un objetivo».'] },
    { e:'📓', t:'Revisión de la tarea', ph:'Apertura · 3', c:'#FFF1B8', v:'homework', goal:'Revisa la siguiente versión en la que trabajaron en casa y fíjate en quién se trabó.',
      d:['Pide a uno o dos estudiantes que muestren su tarea.','Menciona algo concreto que salió bien.','¿No hay tarea? Averigua si se trabó por algo técnico, no te limites a poner un cero.'],
      say:['«Mia, muéstranos tu nueva versión. ¿Por qué elegiste esos colores?»'] },
    { e:'🎯', t:'Objetivo de la clase', ph:'Apertura · 4', c:'#E4FFC2', v:'goal', goal:'Define qué busca lograr la clase de hoy. Es la última etapa antes de que empiece el trabajo independiente.',
      d:['Explica el objetivo del proyecto de hoy en una o dos frases.','Pide al estudiante que repita el plan con sus propias palabras.'] }
  ],
  close:[
    { e:'📋', t:'Resumen', ph:'Últimos 5–7 min · 1', c:'#FFD9EC', v:'recap', goal:'Los estudiantes dicen qué aprendieron, no tú. Usa el cuestionario o la lista de resumen de la tarjeta y deja que respondan.',
      d:['Pregunta a 2–3 estudiantes qué aprendieron hoy.','Pregunta por qué o cómo, no «¿Está claro?».','Celebra algo concreto que logró el grupo.'],
      say:['«Tom, ¿qué pasa cuando empieza el juego, y por qué?»'] },
    { e:'🔮', t:'Adelanto de la próxima clase', ph:'Últimos 5–7 min · 2', c:'#E9DDFF', v:'teaser', goal:'Una frase que les dé ganas de volver. Solo funciona si leíste la próxima clase.',
      d:['Lee la próxima clase mientras preparas esta.','Conecta el adelanto con su proyecto.','Que sea breve y emocionante: una promesa, no un resumen.'],
      say:['«La próxima vez, algo peligroso aparece en el camino de tu héroe… ¿lo logrará?»'] },
    { e:'🏠', t:'Próxima tarea', ph:'Últimos 5–7 min · 3', c:'#C9F2D6', v:'nexthw', goal:'Explica la siguiente versión del proyecto, para que todos sepan exactamente qué hacer y que deben entregarla.',
      d:['Explica la tarea en una o dos frases.','Recuérdales hacer clic en «Send» cuando entreguen el enlace.','Despídete con un tono positivo.'],
      say:['«Para la próxima: agrega un detalle nuevo a tu juego, publícalo y envíame el enlace».'] }
  ]
};

/* ============================================================
   SMALL DATA LISTS — Learning Loop, AI per age, prompt and question examples
   ============================================================ */
CONTENT.loop = [
  ['🎯','Objetivo','La clase parte de lo que debe funcionar al final del día: se muestra, no se explica.'],
  ['⚡','Prototipo rápido','Los estudiantes consiguen rápido algo que funciona: una plantilla, una primera versión, un primer resultado.'],
  ['🐞','Dificultad','Algo todavía no funciona. Es lo esperado: ahí es donde ocurre el aprendizaje.'],
  ['🧭','Estrategia / pista','Das una pista a la vez, o una pregunta, no la solución.'],
  ['📈','Mejora','El estudiante lo arregla y lo mejora: su propia versión, sus propias decisiones.'],
  ['🎤','Presentación','Lo muestran: a ti, al grupo, en Kodland Sparks.'],
  ['💭','Reflexión','¿Qué problema tuve? ¿Qué estrategia usé? ¿Cuál es mi siguiente paso?']
];
CONTENT.ages = {
  a:{ e:'🧒', age:'8–9', who:'Cursos para los más pequeños', model:'Aprendizaje guiado basado en proyectos, con apoyo de IA.',
      p:'Herramientas parecidas a las que los estudiantes ya conocen, con una IA mediada por el tutor y el AI Buddy. <b>La sensación de «esto lo hice yo» es lo que hay que proteger.</b> La IA puede aparecer más adelante en el curso, como un elemento lúdico y acotado.',
      test:'Prueba inversa', tt:'El proyecto debe seguir siendo 100% realizable y significativo <b>sin</b> IA. La IA solo elimina fricciones rutinarias, nunca el acto creativo.', ai:20 },
  b:{ e:'🧑', age:'10–12', who:'Cursos para preadolescentes', model:'Aprendizaje dirigido basado en proyectos, con la IA como material.',
      p:'El estudiante es dueño del núcleo creativo y lo ejecuta; la IA genera materia prima —sprites, sonidos, textos— que el estudiante selecciona, edita y arma. La IA es un «compañero de entrenamiento».',
      test:'Prueba de palanca', tt:'Sin IA el proyecto seguiría siendo posible, pero claramente más pobre o más pequeño dentro del tiempo de clase. La IA eleva el techo de la idea del estudiante.', ai:55 },
  c:{ e:'🧑‍💻', age:'12–17', who:'Cursos para adolescentes', model:'Aprendizaje basado en proyectos integrado con IA: el estudiante como director creativo.',
      p:'Los estudiantes orquestan la IA en todo el proceso (concepto → recursos → lógica → construcción), incluso como un componente dentro de su propio programa, con una alfabetización explícita sobre los medios sintéticos.',
      test:'Prueba de ambición', tt:'El alcance y la calidad previstos no se pueden lograr sin IA en el tiempo disponible. Si quitas la IA, la forma planificada del proyecto se desmorona.', ai:85 }
};
CONTENT.prompts = {
  v:['«Hazme un juego».','«Hazlo más bonito».','«Arregla mi código».'],
  s:['«En Python: escribe un juego de adivinar el número. La computadora elige un número del 1 al 100, el jugador tiene 7 intentos, después de cada intento el programa muestra ‹muy alto› o ‹muy bajo›, y al final dice cuántos intentos necesitó».',
     '«Cambia solo la paleta de colores a azul y rosa neón. Mantén la pose, el estilo y el fondo».',
     '«Mi programa en Python debería detenerse cuando el jugador adivina el número, pero sigue preguntando. Este es mi código. ¿Qué lo causa y qué debería revisar?»']
};
CONTENT.qcmp = {
  v:['«¿Está claro?»','«¿Todos terminaron?»','«¿Alguna pregunta?»'],
  s:['«Mia, ¿por qué el personaje se mueve solo cuando presionas la flecha?»','«Leo, ¿qué pasaría si moviéramos esta línea arriba? Pruébalo y cuéntanos».','«Ana, ¿cómo supiste que el puntaje funcionaba?»']
};

/* ============================================================
   Notes under the vague / specific switches
   ============================================================ */
CONTENT.cmpnote = { prompts:{ v:'La IA tiene que adivinarlo todo: la plataforma, las reglas, qué significa «más bonito».', s:'Cada uno nombra la plataforma, el comportamiento exacto y lo que se puede cambiar: no queda nada por adivinar.' },
                  questions:{ v:'Es fácil responder con un «sí», y no te enteras de nada sobre lo que entendieron.', s:'Un nombre más un «por qué» o un «cómo»: el estudiante tiene que explicar su razonamiento en voz alta.' } };

/* Follow Mode demo cards (Module 2) */
CONTENT.fmCards = [['Tarjeta 1 · ¡Prepárate para la misión de hoy! 🚀','Hoy vas a construir tu primer proyecto…'],['Tarjeta 2 · ¡Bienvenido! 👋','Comprobemos que se ven y se escuchan…'],['Tarjeta 3 · ¡Vamos a conocernos! 🎤','Cada creador tiene su propio estilo…']];

/* ============================================================
   SECTION BODIES — the text of every section, by module. Inside ${…} translate only the quoted text; keep function names (callout, flip, launch, codeBox, zclip, stc, videoBtn), CONFIG.… and file names.
   ============================================================ */
CONTENT.body = {
/* ---------------- Module 1 ---------------- */
what:() => `
  <p class="p">Kodland creó un <b>nuevo modelo educativo (EM)</b> que se implementará de forma gradual tanto en cursos nuevos como en cursos existentes. No es solo contenido técnico nuevo: es una <b>metodología</b> distinta. Cambia cómo avanza una clase, qué papel cumples como tutor y cómo la inteligencia artificial pasa a formar parte del aprendizaje en lugar de ser un atajo.</p>
  <div class="defn"><span class="de">🌱</span><p>En este <b>nuevo modelo educativo</b>, los estudiantes parten de un resultado que funciona, aprenden construyendo y corrigiendo, publican sus proyectos en <b>Kodland Sparks</b> y usan la IA con criterio.</p></div>
  ${callout('good', '🧭', '<b>Importante:</b> este es un nuevo modelo educativo que se introducirá de forma gradual. Los cursos nuevos seguirán este enfoque de enseñanza, y los cursos existentes se irán adaptando al nuevo modelo. Sin embargo, los grupos que ya cursan con otro formato de enseñanza continuarán con su formato actual. Por ahora, solo algunos cursos siguen este nuevo modelo.')}
  <p class="p" style="margin-top:18px">¿Por qué un nuevo modelo? Porque los estudiantes de hoy aprenden de otra manera que hace unos años. Las herramientas cambiaron, la relación de niños y adolescentes con la tecnología cambió, y la IA ya es parte de su vida diaria. La nueva metodología se basa en tres ideas:</p>
  <div class="trio">
    <div class="ti"><span class="tie">🛠️</span><h3>Herramientas que reconocen</h3><p>Los estudiantes trabajan con las herramientas que realmente ven y usan hoy, y con proyectos que generan un verdadero efecto «wow» desde el primer minuto.</p></div>
    <div class="ti"><span class="tie">🧠</span><h3>IA con criterio</h3><p>Enseñamos a los estudiantes a usar la IA con inteligencia: sin temerle ni depender de ella a ciegas.</p></div>
    <div class="ti"><span class="tie">✨</span><h3>Clases que valen la pena</h3><p>La experiencia de aprendizaje se mantiene actual, para que cada clase valga la pena.</p></div>
  </div>
  <p class="p" style="margin-top:18px">Antes de seguir, aclaremos tres creencias comunes. Toca cada una:</p>
  <div class="myths">
    <button class="myth" data-myth><span class="mtag">Mito</span><span class="mq">«Todos los cursos de Kodland van a pasar al nuevo modelo».</span><span class="ma"><b>No todos.</b> El nuevo modelo se usa en los cursos nuevos diseñados para él y en algunos cursos existentes que se están adaptando.</span><span class="mh">Toca para ver la realidad →</span></button>
    <button class="myth" data-myth><span class="mtag">Mito</span><span class="mq">«Todos mis grupos van a cambiar».</span><span class="ma"><b>No.</b> Enseñas con el nuevo modelo solo en los grupos de un curso que lo sigue. En todos tus otros grupos no cambia nada. Te avisarán cuando alguno de tus cursos pase al nuevo modelo.</span><span class="mh">Toca para ver la realidad →</span></button>
    <button class="myth" data-myth><span class="mtag">Mito</span><span class="mq">«Es solo contenido nuevo que hay que aprender».</span><span class="ma"><b>Es una nueva forma de pensar la clase.</b> El contenido te pide pocos conocimientos nuevos: el verdadero cambio está en cómo avanza la clase y en lo que haces en ella.</span><span class="mh">Toca para ver la realidad →</span></button>
  </div>`,

pillars:() => `
  <p class="p">Este es el corazón del modelo. No se trata de aprender botones nuevos, sino de <b>cambiar tu forma de pensar la clase</b>. Todo se apoya en cuatro pilares. Gira cada tarjeta y luego lee cómo cada uno cambia lo que haces.</p>
  <div class="grid4">
    ${flip('Pilar 1', '🔄', 'Aprendizaje deductivo', '<b>Primero el resultado.</b><br>La clase empieza con el resultado final ya funcionando. Los estudiantes lo desarman contigo y solo después lo construyen pieza por pieza.')}
    ${flip('Pilar 2', '🌱', 'Mentalidad de crecimiento', '<b>Los errores son una etapa, no un fracaso.</b><br>Un bug o una mecánica rota es algo normal. Los estudiantes aprenden a decir «<i>todavía</i> no funciona: busquemos una estrategia».')}
    ${flip('Pilar 3', '🔁', 'El Learning Loop', '<b>Un ciclo, no una línea.</b><br>Objetivo → prototipo → dificultad → pista → mejora → presentación → reflexión. Cada vuelta va un poco más a fondo.')}
    ${flip('Pilar 4', '🤖', 'Aprendizaje con apoyo de IA', '<b>La IA propone, el autor decide.</b><br>Cuánta IA se usa depende de la edad de los estudiantes, y la IA nunca construye el núcleo del proyecto por ellos.')}
  </div>

  <h3 class="subh">🔄 Pilar 1 · Primero muestra, después explica</h3>
  <div class="ba"><div class="bef"><h4>Antes</h4><p>La clase empezaba con la teoría, luego la herramienta, y después los estudiantes construían desde cero.</p></div><div class="arr">➜</div>
    <div class="aft"><h4>Ahora</h4><p>La clase empieza con el <b>resultado final ya funcionando</b>: «¿qué juego o mecánica tiene que funcionar al final de hoy?». Los estudiantes ven el proyecto completo, lo desarman contigo y luego lo construyen.</p></div></div>
  ${callout('tip', '💡', 'Esto cambia tu primer instinto como tutor: en lugar de explicar antes de mostrar, <b>muestra primero y explica como respuesta</b> a lo que los estudiantes ya notaron.')}

  <h3 class="subh">🌱 Pilar 2 · Tus palabras moldean su mentalidad</h3>
  <p class="p">La forma en que hablas de un error les enseña a los estudiantes cómo pensar sobre él. El modelo te pide tratar cada error como un paso normal y devolverle al estudiante el siguiente movimiento.</p>
  <div class="twocol">
    <div class="yes"><h4>✅ Di esto</h4><ul><li>«Perfecto, encontramos un problema típico. Vamos a resolverlo».</li><li>«Todavía no funciona. ¿Cuál es nuestra siguiente estrategia?»</li><li>«Muéstrame qué intentaste antes de esto».</li></ul></div>
    <div class="no"><h4>🚫 Evita esto</h4><ul><li>«Otra vez no te salió».</li><li>«Eso está mal, déjame arreglarlo».</li><li>«Esto es fácil, ya deberías saberlo».</li></ul></div>
  </div>

  <h3 class="subh">🔁 Pilar 3 · El Learning Loop de Kodland</h3>
  <p class="p">La secuencia anterior era una línea recta: <i>yo explico → ellos practican → yo reviso</i>. El Learning Loop la reemplaza por un ciclo que se repite dentro de cada clase y entre una clase y otra. Presiona reproducir o toca cualquier paso:</p>
  <div class="loop" id="loop">
    <div class="loop-row"><span class="lf"></span>${LOOP.map((s, i) => `<button class="lst" data-ls="${i}"><span class="lsi">${s[0]}</span><b>${s[1]}</b></button>`).join('')}</div>
    <div class="loop-out" id="loopOut"><span class="lo-e">▶️</span><span>Presiona <b>Reproducir el ciclo</b> para ver una vuelta completa.</span></div>
    <div class="btn-row" style="margin-top:12px;justify-content:center"><button class="btn-y" id="loopPlay">▶ Reproducir el ciclo</button></div>
    <p class="spiral">🌀 La clase avanza en espiral: cada vuelta del ciclo va un poco más a fondo.</p>
  </div>

  <h3 class="subh">🤖 Pilar 4 · La IA depende de la edad</h3>
  <p class="p">Aquí es donde necesitas más cuidado, porque el papel de la IA <b>no es el mismo en todos los cursos</b>: depende de la edad de los estudiantes. Cambia entre los grupos de edad:</p>
  <div class="agebox">
    <div class="seg" id="ageSeg"><button data-age="a" aria-pressed="true">🧒 8–9 años</button><button data-age="b" aria-pressed="false">🧑 10–12 años</button><button data-age="c" aria-pressed="false">🧑‍💻 12–17 años</button></div>
    <div class="agebody" id="ageOut"></div>
  </div>
  <div class="quote"><b>«La IA propone, el autor decide».</b><small>La regla que hay que repetir en cada curso, a cualquier edad.</small></div>
  <div class="grid2">
    <div class="card"><div class="wh"><b>⚙️ IA convencional (generativa)</b></div><p class="p" style="margin:0;font-size:15px">Crea código, imágenes o ideas cuando se lo pides.</p></div>
    <div class="card"><div class="wh"><b>🧭 AI Mentor / AI Buddy</b></div><p class="p" style="margin:0;font-size:15px">No genera la solución: hace preguntas que orientan y explica.</p>
      <p class="p" style="margin:10px 0 0;font-size:13.5px;color:var(--pink-d)"><b>👀 Más adelante en esta capacitación</b> verás dónde lo encuentran los estudiantes en la plataforma.</p></div>
  </div>
  ${callout('bad', '🛑', '<b>Nunca dejes que la IA construya la lógica central del proyecto en lugar del estudiante.</b>')}`,

people:() => `
  <p class="p">La retroalimentación ya no es solo <i>tutor → estudiante</i>. En el nuevo modelo, los estudiantes la reciben de cuatro fuentes, y cada una tiene su función:</p>
  <div class="q3">
    <div><span>🧑‍🏫</span><b>El tutor</b><small>Concreta, sobre el proyecto y el siguiente paso.</small></div>
    <div><span>👥</span><b>Un compañero</b><small>Simple y concreta durante la presentación, sin comparar proyectos.</small></div>
    <div><span>🪞</span><b>Ellos mismos</b><small>¿Qué problema tuve, qué estrategia usé, cuál es mi siguiente paso?</small></div>
    <div><span>🤖</span><b>La IA</b><small>El AI Buddy o el mentor de IA: una fortaleza y una idea para mejorar.</small></div>
  </div>
  ${callout('tip', '🪞', 'La autoevaluación no es «¿te gustó?». Es nombrar el problema, la estrategia y el siguiente paso. La retroalimentación entre pares sigue una fórmula simple: <b>«Me gustó… Yo agregaría…»</b>.')}
  <div class="defn" style="margin-top:18px"><span class="de">🧭</span><p><b>En resumen, tu rol cambió.</b> Ya no eres quien lo explica todo antes de empezar. Eres un <b>navegador</b>: muestras el destino, acompañas el recorrido con preguntas y pistas en el momento justo, y dejas que los estudiantes enfrenten la dificultad antes de resolverla tú. En todos los cursos hay plantillas de respaldo, así que nunca tendrás que «rescatar» un proyecto con pánico: siempre hay una ruta alternativa con un resultado garantizado.</p></div>`,

/* ---------------- Module 4 ---------------- */
why4:() => `
  <div class="defn"><span class="de">💡</span><p>Estos cursos no te exigen muchos conocimientos nuevos sobre la materia. El único campo realmente nuevo es la <b>IA</b>: algunos tutores ya se sienten cómodos con ella, mientras que otros la usan muy poco, o de maneras que no ayudarán a un estudiante. Este módulo es la base común para todos.</p></div>`,

whatp:() => `
  <p class="p">La inteligencia artificial que usamos en nuestras clases —AI Buddy y las herramientas dentro de Kodland Sparks— funciona a partir de instrucciones escritas en lenguaje cotidiano, llamadas <b>prompts</b>. Cuanto mejor es el prompt, mejor es el resultado que obtiene el estudiante.</p>
  <p class="p">Como tutor no necesitas ser un experto técnico en IA. Lo que sí necesitas es entender lo básico, para poder guiar a tus estudiantes mientras escriben sus propios prompts en clase.</p>
  <div class="defn"><span class="de">❓</span><p>Un <b>prompt</b> es la instrucción que le damos a una IA para que genere un resultado: un texto, código, una imagen, un video. Es como dar instrucciones a alguien que no sabe nada del contexto de tu proyecto: <b>cuanto más claras y específicas sean las instrucciones, más se acercará el resultado a lo que realmente querías.</b></p></div>
  <div class="ba"><div class="bef"><h4>Un mal prompt</h4><p>Produce resultados genéricos o incorrectos. El estudiante termina aceptando algo que no quería o empezando de cero.</p></div><div class="arr">➜</div>
    <div class="aft"><h4>Un buen prompt</h4><p>Produce resultados útiles, precisos y <b>fáciles de ajustar</b>. Esto último es lo más importante: un resultado que puedes retocar vale más que uno que tienes que reemplazar.</p></div></div>`,

goodp:() => `
  <p class="p">Un buen prompt suele responder estas cuatro preguntas:</p>
  <div class="q3">${[['🎬','Contexto','¿Para qué es? ¿Quién lo va a usar?'],['🎯','Objetivo','¿Qué quieres lograr exactamente?'],['📐','Detalles específicos','Estilo, formato, tono, restricciones: «en 3 frases», «usando Python», «estilo caricatura».'],['🖼','Ejemplos','Cuando corresponda: un ejemplo ayuda a la IA a entender qué se espera.']].map(q => `<div><span>${q[0]}</span><b>${q[1]}</b><small>${q[2]}</small></div>`).join('')}</div>
  <div class="twocol" style="margin-top:14px">
    <div class="yes"><h4>✅ Suficientemente específico</h4><ul><li>«Crea un juego simple en Scratch en el que un gato esquiva obstáculos que caen, con un puntaje visible y 3 vidas».</li></ul></div>
    <div class="no"><h4>❌ Demasiado vago</h4><ul><li>«Hazme un juego».</li></ul></div>
  </div>
  <div class="card" style="margin-top:14px">
    <div class="wh"><b>¿Vago o específico? Cambia y compara</b><span class="tag">Pruébalo</span></div>
    <div class="seg" data-cmp="prompts"><button data-k="v" aria-pressed="true">😐 Vago</button><button data-k="s" aria-pressed="false">🎯 Específico</button></div>
    <div class="fbx" data-cmpout="prompts"></div>
  </div>`,

codep:() => `
  <div class="grid2">${[
    ['🏷','Nombra el lenguaje o la plataforma','Python, HTML, Scratch, Roblox, etc.'],
    ['👣','Describe paso a paso el comportamiento esperado','No solo el resultado final.'],
    ['💬','Pide que el código venga comentado','Así es más fácil de leer y de explicar en clase.'],
    ['🔧','No reescribas todo el prompt','Si algo no funciona, pídele a la IA que corrija el error concreto y explica qué pasó.'],
    ['🧪','Prueba y entiende el código','Anima a los estudiantes a probar y entender el código, no solo a copiarlo.']
  ].map(x => `<div class="card" style="padding:16px"><div class="wh" style="margin-bottom:6px"><span style="font-size:26px">${x[0]}</span><b>${x[1]}</b></div><p class="p" style="margin:0;font-size:14.5px">${x[2]}</p></div>`).join('')}</div>`,

imgp:() => `
  <div class="grid2">${[
    ['🖌','Tema, estilo y escenario','Describe el tema principal, el estilo visual (realista, caricatura, pixel art…) y el escenario o fondo.'],
    ['🌈','Colores, iluminación o ambiente','Menciónalos cuando importen para el proyecto.'],
    ['📏','Sé específico con el formato','Vertical, horizontal o cuadrado, si el proyecto lo requiere.'],
    ['🔁','Ajusta una variable a la vez','Si el primer resultado no es lo que esperabas, cambia solo el color, o solo el estilo, para ver qué cambió realmente el resultado.']
  ].map(x => `<div class="card" style="padding:16px"><div class="wh" style="margin-bottom:6px"><span style="font-size:26px">${x[0]}</span><b>${x[1]}</b></div><p class="p" style="margin:0;font-size:14.5px">${x[2]}</p></div>`).join('')}</div>`,

mistp:() => `
  <div class="myths">${[
    ['🌫','Ser demasiado vago.','«Hazlo más bonito» no le da a la IA nada con qué trabajar.'],
    ['📚','Pedir demasiado a la vez.','Divide un proyecto complejo en varios prompts más pequeños.'],
    ['🔍','No revisar el resultado.','La IA se equivoca y puede generar contenido incorrecto: revisa siempre antes de usarlo.'],
    ['🔂','No iterar.','El primer resultado casi nunca es el definitivo. Ajustar y volver a pedir es parte normal del proceso.'],
    ['🧭','Olvidar el contexto del proyecto.','Un prompt sin contexto produce resultados genéricos que no encajan con lo que está construyendo el estudiante.']
  ].map(x => `<button class="myth" data-myth><span class="mtag">Error</span><span class="mq">${x[0]} ${x[1]}</span><span class="ma">${x[2]}</span><span class="mh">Toca para ver por qué →</span></button>`).join('')}</div>
  ${callout('good', '🔁', 'Fíjate cuánto de esto coincide con lo que ya haces como tutor: un cambio a la vez, describir el comportamiento que esperas, probar antes de confiar e iterar en lugar de empezar de nuevo. Escribir prompts no es una habilidad aparte: es el mismo hábito de depuración, aplicado a otra herramienta.')}`,

/* ---------------- Module 2 ---------------- */
bo:() => `
  <p class="p">Los cursos con el nuevo modelo <b>no tienen manuales en la wiki ni presentaciones</b>. La guía de cada clase está <b>dentro de la propia clase</b>, en Backoffice: cada tarjeta de actividad trae sus propias <b>notas del tutor</b> (Teacher Notes): para qué sirve la tarjeta, cuánto dura, qué hacer y a qué prestar atención. Solo tú puedes verlas.</p>
  ${callout('warn', '📒', '<b>Lee las notas del tutor antes de cada clase</b> y revisa si hay actualizaciones. Los cursos se mejoran constantemente, así que una clase puede cambiar de un grupo a otro. La primera tarjeta de cada clase tiene las notas más completas y, por lo general, un video corto.')}
  <p class="p" style="margin-top:16px">El camino es el mismo en todos los cursos: al contenido de un curso no se llega desde tus grupos (Groups), sino desde <b>Courses</b>.</p>
  <div class="grid3">
    <div class="ti"><span class="tie">📚</span><h3>Courses</h3><p>Abre la ficha del curso: unidad de negocio, idioma, número de clases y de módulos.</p></div>
    <div class="ti"><span class="tie">🃏</span><h3>Assignments</h3><p>Elige la clase y verás sus tarjetas de actividades. Estas tarjetas <b>son</b> el contenido de la clase.</p></div>
    <div class="ti"><span class="tie">📒</span><h3>Notas del tutor</h3><p>Abre una tarjeta: el recuadro naranja con borde punteado es tu nota. Justo debajo, lo que ve el estudiante.</p></div>
  </div>
  ${callout('tip', '🧭', 'Ahora compruébalo tú mismo. La simulación es una réplica de Backoffice con uno de los cursos que siguen el nuevo modelo: abrirás el curso, irás a su primera clase, verás por qué la guía de estudio está vacía y leerás las notas del tutor de la primera tarjeta.')}
  ${launch('🗂️', 'Simulación 1 de 3', 'Simulación de Backoffice', 'Una réplica interactiva de Backoffice: abre el curso, encuentra las actividades de la clase, descubre por qué no hay enlace a la wiki y lee una nota del tutor desde adentro.', CONFIG.BO_SIM, '🗂️ Abrir la simulación del BO')}
  ${codeBox('boCode')}`,

classroom:() => `
  <p class="p">Una vez que conoces la clase, llega el momento de darla. En Classroom ya no presentas diapositivas: abres <b>las mismas tarjetas de actividades</b> que leíste en Backoffice y las recorres junto con tus estudiantes. Tres cosas hacen que esto funcione.</p>
  <h3 class="subh">👁️ 1. Follow Mode: tus estudiantes van adonde vas tú</h3>
  <p class="p">Con <b>Follow Mode</b>, los estudiantes ven automáticamente la misma tarjeta que tienes abierta. <b>No es compartir pantalla</b>: cada estudiante recibe su propia copia de la tarjeta, en la que puede trabajar de verdad, y las notas del tutor siguen siendo visibles solo para ti. Se activa con el interruptor <b>Lead the group</b>, que aparece junto a una tarjeta abierta. Pruébalo:</p>
  <div class="card" id="fmDemo">
    <div class="fm-ctrl"><button class="lead-sw" id="fmSw"><i></i> Lead the group</button><button class="btn-g" id="fmNext">Siguiente tarjeta →</button><span style="font-size:13px;color:var(--muted);font-weight:700" id="fmHint">Activa el interruptor y luego pasa a la siguiente tarjeta.</span></div>
    <div class="fm">
      <div class="screen"><div class="sc-h"><span>👩‍🏫 Tu pantalla</span><span>Tutor</span></div><div class="sc-card" id="fmT"></div></div>
      <div class="screen"><div class="sc-h"><span>👧 La pantalla de Sofía</span><span>Estudiante</span></div><div class="sc-card" id="fmS"></div></div>
    </div>
    <div class="fm-out" id="fmOut"></div>
  </div>
  <div class="grid3" style="margin-top:14px">${[
    ['➡️','Cambias de tarjeta','Cambia para todos los que te siguen.'],
    ['🖱️','Te desplazas','Dentro de las tarjetas interactivas, su posición se pone al día con la tuya.'],
    ['🕐','Alguien llega tarde','Entra directamente en la tarjeta que tienes abierta.'],
    ['🚪','Te ausentas un momento','Los estudiantes ven un aviso de que el tutor se ausentó; el seguimiento se reanuda cuando vuelves.'],
    ['👥','¿Quién te sigue?','Un indicador junto a cada nombre muestra quién te sigue y quién trabaja solo.'],
    ['🔓','Sin encerrar a nadie','Un estudiante puede hacer clic en «Work independently» y volver con «Return».']
  ].map(x => `<div class="card" style="padding:16px"><div class="wh" style="margin-bottom:6px"><span style="font-size:26px">${x[0]}</span><b>${x[1]}</b></div><p class="p" style="margin:0;font-size:14.5px">${x[2]}</p></div>`).join('')}</div>

  <h3 class="subh">🖥️ 2. ¿Follow Mode o compartir pantalla?</h3>
  <p class="p">A veces seguirás compartiendo tu pantalla: para <b>demostrar</b> un paso en una herramienta, como el editor de Scratch, o para mostrar un resultado terminado. La regla es simple:</p>
  <div class="okbad">
    <div class="ok"><h3>👁️ Usa Follow Mode para las tarjetas</h3><ul><li>Para llevar al grupo a lo largo de la clase.</li><li>Cada estudiante trabaja en su propia copia.</li><li>Tus notas del tutor siguen siendo privadas.</li></ul></div>
    <div class="bad"><h3>🖥️ Comparte pantalla para las demostraciones</h3><ul><li>Para mostrar un paso en la herramienta (Scratch, Sparks…).</li><li>Comparte <b>solo la pestaña o la ventana de la herramienta</b>.</li><li>Nunca compartas la tarjeta de la clase: tus notas quedarían visibles.</li></ul></div>
  </div>

  <h3 class="subh">🧩 3. Actividades interactivas</h3>
  <p class="p">Muchas tarjetas son interactivas. Algunas guardan tu progreso y tu puntuación sin necesidad de hacer clic en el botón «Submit», y otras sí lo necesitan.</p>
  <p class="p">En las actividades de <b>opción múltiple</b>, <b>campos de texto y de fórmula</b> y <b>arrastrar y soltar</b>, verás que tu puntuación se registra automáticamente en cuanto terminas.</p>
  <div class="zoomtip"><span>🔍</span><div><b>Consejo:</b> haz clic en cualquiera de los 3 videos de abajo para abrirlo en una ventana más grande. Allí puedes <b>acercar</b> (botones + / −, rueda del mouse o doble clic) y arrastrar para ver cada detalle.</div></div>
  <div class="vidpair">
    <figure class="card gifcard"><span class="gtag ok">✅ Se guarda automáticamente</span>${zclip('images/result_good_EM.mp4', 'Se guarda automáticamente')}<figcaption>El resultado aparece automáticamente en la esquina superior derecha.</figcaption></figure>
    <figure class="card gifcard"><span class="gtag ko">🔁 Una respuesta incorrecta</span>${zclip('images/result_bad_EM.mp4', 'Una respuesta incorrecta')}<figcaption>Si hay un error, puedes hacer clic en el ícono ‘Redo’ de la esquina superior derecha e intentarlo de nuevo.</figcaption></figure>
  </div>
  <p class="p" style="margin-top:18px">En cambio, en las actividades en las que hay que enviar texto, enlaces o archivos, asegúrate de que tus estudiantes hagan clic en el botón <b>«Send»</b>:</p>
  <figure class="card gifcard wide">${zclip('images/send_bottom.mp4', 'El botón «Send»')}</figure>
  ${launch('🎥', 'Simulación 2 de 3', 'Guía de Classroom', 'Un recorrido guiado por una clase real del nuevo modelo en Classroom: las tarjetas, las notas del tutor que solo ves tú, las notas completas de la primera tarjeta y Lead the group.', CONFIG.CLASS_SIM, '🎥 Abrir la guía de Classroom')}
  ${codeBox('classCode')}`,

sparks:() => `
  <p class="p">La última pieza del rompecabezas es el lugar donde viven los proyectos de los estudiantes: <b>Kodland Sparks</b>. Es la nueva plataforma donde los estudiantes <b>construyen</b> sus proyectos, los <b>publican</b>, siguen aprendiendo entre clases y reciben retroalimentación de sus compañeros y de un mentor de IA. También es donde vive el portafolio que construyen a lo largo del curso.</p>
  <div class="grid2">
    <div class="card"><div class="wh"><b>🔐 Cómo entran los estudiantes</b></div><p class="p" style="margin:0;font-size:15px">Los estudiantes entran con <b>un botón desde la plataforma principal</b> (inicio de sesión único): no se registran por separado.</p></div>
    <div class="card"><div class="wh"><b>🔑 Cómo entras tú</b></div><p class="p" style="margin:0;font-size:15px">Los tutores usan <b>credenciales aparte</b>, distintas de las de Backoffice. Te las da el <b>departamento de Operaciones o el de Enseñanza</b>.</p></div>
  </div>
  ${callout('warn', '⏳', '<b>Todavía no puedes probarla por tu cuenta.</b> Hasta que recibas tus credenciales, no podrás iniciar sesión en Kodland Sparks. Por eso hay un recorrido guiado más abajo: te muestra qué hay dentro y qué pueden hacer allí los estudiantes.')}
  <h3 class="subh">🧭 Qué hacen los estudiantes en Sparks</h3>
  <div class="grid3">${[
    ['📰','Feed','Ven los proyectos de sus compañeros, reaccionan a ellos y leen la retroalimentación del mentor de IA.'],
    ['📁','My projects','Todo lo que guardaron o publicaron, en un solo lugar.'],
    ['🚀','Publish project','Comparten un proyecto terminado, eligen quién puede verlo y pueden ganar recompensas.'],
    ['🎨','Studio · Creative mode','Donde construyen en clase: juegos y aplicaciones web, Python, Scratch, pixel art, animación, música, skins.'],
    ['🏆','Studio · Challenges mode','Tareas estructuradas con corrección automática, y cristales como recompensa.'],
    ['🤖','AI helper y AI tutor','Aquí vive el AI Buddy / mentor de IA: consejos, ideas y explicaciones. La IA propone, el autor decide.']
  ].map(x => `<div class="ti" style="padding:18px"><span class="tie" style="font-size:46px">${x[0]}</span><h3>${x[1]}</h3><p>${x[2]}</p></div>`).join('')}</div>
  <h3 class="subh">💬 La retroalimentación en Sparks</h3>
  <p class="p">No hay los clásicos «me gusta» ni comentarios. En su lugar, los estudiantes dejan <b>reacciones</b> (emojis), escriben <b>reseñas</b> en tres campos —impresión general, puntos fuertes y qué mejorar— y pueden seguirse entre sí. La gamificación funciona con <b>cristales → cofres → recompensas</b>. Las reseñas de un tutor aparecen destacadas, para que los estudiantes reconozcan la retroalimentación oficial.</p>
  ${callout('tip', '🔗', '<b>Publicar en Sparks y enviar el enlace en la plataforma de Kodland son dos pasos distintos.</b> En muchas clases, los estudiantes publican su proyecto y después pegan el enlace en una tarjeta: recuérdales hacer las dos cosas.')}
  ${callout('tip', '🧭', 'Ahora haz el recorrido. Es una réplica de Kodland Sparks: visitarás el Feed, publicarás un proyecto, abrirás el Studio y verás un proyecto de Python, uno de Scratch y un dibujo, y terminarás con el AI helper y los cristales.')}
  ${launch('⚡', 'Simulación 3 de 3', 'Guía de Kodland Sparks', 'Un recorrido guiado por la plataforma que usan tus estudiantes: Feed, My projects, Publish project, Studio con todos los tipos de proyecto, AI helper y recompensas.', CONFIG.SPARKS_SIM, '⚡ Abrir la guía de Kodland Sparks')}
  ${codeBox('sparksCode')}`,

/* ---------------- Module 3 ---------------- */
structure:() => `
  <p class="p">En los cursos con el nuevo modelo, una clase ya no es una presentación con grandes bloques y una diapositiva que te dice cuándo «resumir» o «cerrar». Una clase es una secuencia de <b>tarjetas de actividades</b> en la plataforma, y cada tarjeta trae su propio contenido para el estudiante y sus propias notas para ti. Eso significa algo muy importante: <b>el ritmo de la clase lo marcas tú, no una diapositiva.</b></p>
  <h3 class="subh">🏷️ Las etiquetas te dicen qué tipo de momento es</h3>
  <p class="p">Muchas tarjetas llevan una etiqueta en sus notas del tutor, como <b>(CORE)</b> o <b>(SUBMIT)</b>. Te indican de un vistazo qué tipo de momento de enseñanza es la tarjeta y cuánto espacio dar a la autonomía del estudiante. Toca cada una:</p>
  <div class="grid4">${[['CORE','🧱','La construcción central de la clase.'],['SELF-CHECK','🪞','El estudiante comprueba su propia comprensión.'],['AI-CREATE','🤖','El único momento en que se usa la IA, con un límite claro.'],['CHOICE/INTEREST','🎨','Una elección personal: su estilo, su idea.'],['SUBMIT','📤','Hay que entregar o publicar algo.'],['PEER-FEEDBACK','👥','Los compañeros comentan el trabajo de los demás.'],['REFLECT','💭','Un momento para pensar en lo aprendido.'],['CHALLENGE','🏆','Un desafío extra y opcional.'],['DEBUG','🐞','Encontrar y corregir un error puesto a propósito.'],['SYSTEM-TEST','🧪','Probar el proyecto completo de principio a fin.']].map(t => `<button class="oq" data-oq><b>${t[1]} ${t[0]}</b><span>${t[2]}</span></button>`).join('')}</div>`,

seeing:() => `
  <p class="p">Como no hay una diapositiva que te lo recuerde, mantener la estructura de la clase ahora depende de ti. Las revisiones de calidad miran cada clase en su conjunto: el <b>calentamiento</b>, el <b>objetivo de la clase</b>, la <b>práctica</b>, las <b>preguntas</b> que haces, el <b>resumen</b>, la <b>tarea</b> y el <b>adelanto</b> de la próxima clase.</p>
  <p class="p">Las clases con el nuevo modelo suelen ser dinámicas y atractivas. El desafío es no perder la estructura en el camino, sobre todo al principio y al final de la clase:</p>
  <div class="okbad">
    <div class="ok"><h3>💚 Sigue haciendo</h3><ul><li>Hacer participar a varios estudiantes.</li><li>Llamar a los estudiantes por su nombre.</li><li>Dar tiempo real de práctica.</li></ul></div>
    <div class="bad"><h3>💗 Qué reforzar</h3><ul><li>El calentamiento y el saludo.</li><li>La revisión de la tarea.</li><li>Las preguntas que hacen que los estudiantes expliquen su razonamiento.</li><li>El resumen al final.</li><li>El adelanto de la próxima clase.</li></ul></div>
  </div>
  <p class="p" style="margin-top:16px">Son hábitos, y los hábitos se pueden construir. El resto de este módulo te da tres: una buena apertura, preguntas de razonamiento dirigidas a estudiantes concretos y una rutina de cierre fija.</p>`,

opening:() => `
  <p class="p">Una buena apertura lleva solo unos minutos y prepara todo lo que viene después: los estudiantes se sienten bienvenidos, recuerdan en qué punto está su proyecto, muestran lo que hicieron en casa y saben qué busca lograr la clase de hoy. Tiene cuatro partes. Recorre cada una, con frases reales que puedes usar y un video de una clase real:</p>
  ${stc('open')}
  ${callout('tip', '⏱️', 'Que sea breve: <b>unos 5–7 minutos</b> para las cuatro partes juntas. Una clase que empieza con conexión funciona mejor, no más lento.')}`,

reasoning:() => `
  <p class="p">«¿Está claro?» casi siempre recibe un «sí», y no te dice nada. Las preguntas que funcionan son las que hacen que un estudiante <b>explique su razonamiento</b>: por qué pasa algo, cómo lo sabe, qué cambiaría si… Y funcionan mejor cuando las <b>diriges a un estudiante concreto, por su nombre</b>.</p>
  <div class="card">
    <div class="wh"><b>¿Cerrada o de razonamiento? Cambia y compara</b><span class="tag">Pruébalo</span></div>
    <div class="seg" data-cmp="questions"><button data-k="v" aria-pressed="true">😐 Cerrada</button><button data-k="s" aria-pressed="false">🧠 De razonamiento</button></div>
    <div class="fbx" data-cmpout="questions"></div>
  </div>
  <h3 class="subh">🎯 ¿Qué preguntas hacen pensar a los estudiantes? Decide en cada caso</h3>
  <div class="sorter" id="sorter">${[
    ['🙋','«Leo, ¿cómo hiciste que la moneda desapareciera cuando el jugador la toca?»','yes','<b>Sí.</b> Un nombre más un «cómo»: Leo tiene que explicar la lógica con sus propias palabras.'],
    ['🙂','«¿Todos bien? ¿Seguimos?»','no','<b>No.</b> Una pregunta grupal de sí o no: nadie necesita pensar para responder.'],
    ['🔍','«Ana, ¿qué crees que pasará si quitamos esta línea? Pruébalo y cuéntanos».','yes','<b>Sí.</b> Predice, prueba y explica: el Learning Loop en una sola pregunta.'],
    ['✅','«¿Está claro cómo funciona el puntaje?»','no','<b>No.</b> Vas a recibir un «sí» esté claro o no. Mejor pide a alguien que lo explique.']
  ].map(r => `<div class="srow" data-ans="${r[2]}"><span class="sei">${r[0]}</span><span class="stx">${r[1]}</span><span class="sbtns"><button data-pick="yes">🧠 Hace pensar</button><button data-pick="no">😐 No hace pensar</button></span><span class="sfb">${r[3]}</span></div>`).join('')}</div>
  ${callout('good', '💡', 'Reparte las preguntas: distintos estudiantes, distintos momentos. Durante el punto de control, mientras construyen y en el resumen.')}`,

closing:() => `
  <p class="p">El final de la clase suele quedar de lado, porque se acaba el tiempo o porque no parece tan importante como terminar la actividad. Pero es el momento en que los estudiantes ponen en palabras lo que aprendieron, sienten curiosidad por la próxima clase y se van sabiendo qué hacer en casa. Con una buena gestión del tiempo, puedes lograrlo en cada clase: reserva los <b>últimos 5–7 minutos</b> para una <b>rutina de cierre fija</b> y empiézala a tiempo aunque la actividad no esté terminada. Funciona igual sea cual sea la duración de tus clases: elige una y arrastra a lo largo de ella:</p>
  <div class="tline" id="tline">
    <div class="seg" id="tlLen" style="margin-bottom:12px"><button data-len="60" aria-pressed="true">⏱️ Clase de 60 minutos</button><button data-len="90" aria-pressed="false">⏱️ Clase de 90 minutos</button></div>
    <div style="display:flex;align-items:center;gap:14px;flex-wrap:wrap"><span class="clock" id="tlClock">0′</span><input type="range" min="0" max="60" value="0" id="tlRange" style="flex:1;min-width:220px" aria-label="Minuto de la clase"></div>
    <div class="tl-bar"><div class="tl-open" id="tlOpen">Apertura</div><div class="tl-main" id="tlMain">Tarjetas: construir, explorar, corregir, mostrar</div><div class="tl-close" id="tlClose">Cierre</div><span class="tl-head" id="tlHead" style="left:0"></span></div>
    <div class="tl-scale" id="tlScale"></div>
    <div class="tl-out" id="tlOut"></div>
  </div>
  <p class="p" style="margin-top:18px">La rutina tiene tres pasos. Recórrelos, cada uno con un video de una clase real:</p>
  ${stc('close')}
  ${callout('warn', '⏰', '<b>Un truco que funciona:</b> pon un temporizador <b>5–8 minutos antes del final</b> de la clase. Cuando suene, cierras, estés donde estés. Una tarjeta sin terminar puede continuar en la próxima clase o como parte de la tarea.')}`,

metrics:() => `
  <div class="defn"><span class="de">📈</span><p><b>Las diapositivas ya no están, pero la estructura sí.</b> Recuerda que la estructura de la clase está muy ligada a métricas importantes como la <b>asistencia</b>, la <b>retención</b> y la <b>entrega de tareas</b>. Recordar la tarea a los estudiantes, explicarla y revisarla, hacer un calentamiento y un cierre, explicar los objetivos de la clase y adelantar la próxima: todo eso contribuye a la participación, la retención y la asistencia de los estudiantes.</p></div>
  <h3 class="subh">Tres métricas, tres hábitos concretos</h3>
  <div class="trio">
    <div class="ti"><span class="tie">🗓</span><h3>Asistencia</h3><p>Tómala al principio, durante el calentamiento, mientras los estudiantes se acomodan. No la dejes para el final de la clase, cuando estás cerrando y es fácil olvidarla.</p></div>
    <div class="ti"><span class="tie">📚</span><h3>Tarea</h3><p>Como la tarea ahora es «la siguiente versión del mismo proyecto», revísala dentro del punto de control de la clase anterior. Si un estudiante no tiene nada, esa es tu señal para ver si se trabó por algo técnico, no solo para registrar un cero.</p></div>
    <div class="ti"><span class="tie">💚</span><h3>Retención</h3><p>Un estudiante que deja de publicar en Sparks, o deja de entregar sus trabajos, suele estar desconectándose antes de dejar de asistir. Esas dos señales son tu primera alerta.</p></div>
  </div>
  ${callout('warn', '⚠️', '<b>Recuerda:</b> en las actividades en las que los estudiantes envían texto, enlaces o archivos, su trabajo solo se registra cuando hacen clic en <b>«Send»</b>. Una clase que salió muy bien puede figurar igualmente con cero trabajo de clase completado. Incluye este recordatorio en tu rutina de cierre.')}`,

qcheck:() => `
  <p class="p">Aquí tienes todo este módulo en una sola lista de control. Tenla a mano durante tus primeras clases, hasta que se vuelva un hábito:</p>
  <div class="card"><div class="wh"><b>✅ Mi lista de control de calidad de la clase</b><span class="tag">Márcalas</span></div>
    <div class="ckgroup">☑️ Antes de la clase</div>
    <div class="cklist">${['Leí las notas del tutor de esta clase en Backoffice.','También leí la clase <b>siguiente</b>, para generar expectativa en el cierre.','Abrí el resultado final que voy a mostrar al inicio (video, GIF o proyecto funcionando).','Sé cuál es el único paso con IA que permite esta clase y su límite de alcance.','Sé dónde está la plantilla de respaldo, por si un proyecto se rompe.','Tengo un plan para tomar asistencia durante el calentamiento.','Antes de cerrar, recordaré a los estudiantes hacer clic en <b>«Send»</b> en las actividades que lo necesitan.'].map((t, i) => `<button class="ck" data-ck="b${i}"><span class="ckb"></span><span>${t}</span></button>`).join('')}</div>
    <div class="ckgroup">🎬 Apertura</div>
    <div class="cklist">${['Saludo a cada estudiante por su nombre y hago un calentamiento breve.','Conecto la clase de hoy con la anterior.','Reviso la tarea y menciono algo concreto que salió bien.'].map((t, i) => `<button class="ck" data-ck="o${i}"><span class="ckb"></span><span>${t}</span></button>`).join('')}</div>
    <div class="ckgroup">🧠 Durante la clase</div>
    <div class="cklist">${['Hago preguntas de razonamiento a estudiantes concretos, por su nombre.','Sigo haciendo participar a varios estudiantes y doy tiempo real de práctica.','Vigilo el tiempo para que el cierre empiece a tiempo.'].map((t, i) => `<button class="ck" data-ck="d${i}"><span class="ckb"></span><span>${t}</span></button>`).join('')}</div>
    <div class="ckgroup">🏁 Cierre: últimos 5–7 minutos</div>
    <div class="cklist">${['Los estudiantes hacen el resumen: dicen qué aprendieron.','Doy un adelanto motivador de la próxima clase.','Explico la próxima tarea y cómo entregarla.'].map((t, i) => `<button class="ck" data-ck="c${i}"><span class="ckb"></span><span>${t}</span></button>`).join('')}</div>
  </div>`
};

/* >>> MODULE 0 START (generated block: edit texts here) */
CONTENT.zero = {
  "welcome_lead": "<b>¡Bienvenido!</b> Eres parte de este lanzamiento porque ya sabes enseñar y conectar con los niños. Esta capacitación se apoya en lo que ya haces bien. No empieza desde cero, y tú tampoco.",
  "how_h": "Cómo tomar esta capacitación",
  "how_p": "Avanza a tu ritmo, con curiosidad y sin presión. No necesitas memorizar nada ni ser perfecto: el objetivo es sentirte cómodo con el método y saber dónde encontrar lo que necesitas. Una mezcla de entusiasmo y algo de incertidumbre es totalmente natural ante algo nuevo. Simplemente significa que te importa hacerlo bien.",
  "prep_h": "Para qué te prepara esta capacitación",
  "prep_intro": "Después de este módulo de mentalidad, la capacitación te acompaña en todo lo que necesitas para tus primeras clases:",
  "prep": [
    "<b>El nuevo modelo:</b> cómo se construyen las clases, cómo funciona la retroalimentación y cómo guiar a los estudiantes cuando usan IA.",
    "<b>Preparación técnica:</b> Backoffice y notas del tutor, Classroom con Follow Mode y Kodland Sparks, con tres simulaciones de práctica que puedes repetir cuantas veces quieras.",
    "<b>Calidad de la clase:</b> cómo se estructura una clase y los hábitos que la mantienen en camino: una apertura adecuada, preguntas de razonamiento y un cierre claro.",
    "<b>Prompts para tutores:</b> cómo escribir un buen prompt y ayudar a los estudiantes a escribir los suyos.",
    "<b>Tu curso:</b> una capacitación breve e informativa sobre el curso específico que vas a enseñar.",
    "<b>Una prueba final</b> que se desbloquea cuando completas el material."
  ],
  "sim": "<b>No te saltes los simuladores: ahí se construye tu confianza.</b> Leer sobre una clase nueva es útil, pero hacerla es lo que la vuelve familiar. Los simuladores te permiten practicar cada paso real de una clase, desde abrirla en Backoffice hasta dictarla en Classroom, en un espacio seguro donde nada puede salir mal. Repítelos las veces que necesites y vuelve a ellos antes de tu primera clase en vivo: para entonces, cada clic te saldrá con naturalidad.",
  "why_h": "Por qué estamos cambiando",
  "why": "Los niños de hoy aprenden de otra manera: quieren construir cosas reales rápido, probar, equivocarse, corregir y mostrar lo que hicieron. Nuestro nuevo Modelo Educativo está construido en torno a eso. Cada clase parte de un resultado terminado, los errores son parte del proceso y la IA se usa de una forma adecuada para cada edad. Algunos cursos son totalmente nuevos; otros son cursos que ya conoces, renovados con el nuevo método.",
  "means": "<b>Qué significa esto para ti.</b> Las habilidades que hoy te hacen un buen tutor (explicar con claridad, mantener a los niños motivados, notar quién necesita ayuda) son justo las que necesitan los nuevos cursos. Lo nuevo es el método y la estructura, y eso es lo que te da esta capacitación.",
  "ready_p1": "Durante tu capacitación puede que todavía no veas las clases del curso: el contenido se finaliza cerca del lanzamiento. <b>Todas las clases estarán en Backoffice antes de que empiece tu curso.</b> La capacitación te prepara para todo lo demás, así estarás listo en el momento en que lleguen las clases.",
  "ready_p2": "Estar listo no depende de haber visto todas las clases durante la capacitación. Significa:",
  "ready_items": [
    "<b>Entiendo el método:</b> cómo fluye una clase y por qué.",
    "<b>Conozco la estructura:</b> módulos, formato de la clase, dónde vive cada pieza en Backoffice.",
    "<b>Me siento seguro con lo técnico:</b> Backoffice, Classroom y las herramientas que uso en clase, practicadas en los simuladores hasta que me salen con naturalidad.",
    "<b>Conozco mi rutina:</b> el contenido de la clase ahora se muestra directamente en Backoffice, todo en un solo lugar, sin necesidad de la Wiki. Leer las notas del tutor ahí antes de cada clase es mi responsabilidad.",
    "<b>Sé a quién preguntar:</b> primero, mi mentor regional y, para grupos y horarios, mi TL."
  ],
  "ready_perm": "<b>Date permiso de volver a ser principiante.</b> Incluso el tutor más experimentado enseña un curso nuevo por primera vez solo una vez. A los niños les pedimos que digan «todavía no funciona, busquemos una estrategia», y lo mismo aplica para nosotros: tus primeras clases son tu prototipo. Cada una te resultará más fácil que la anterior, y te acompañaremos en cada paso.",
  "ready_two": "<b>Dos cosas que la capacitación explica en detalle.</b> Primero, y lo más importante: dónde encontrarás el contenido de tus clases de ahora en adelante, las <b>notas del tutor (Teacher Notes) en Backoffice, tu nueva estrella polar</b>. Segundo, cómo prepararte para tu primera clase. Ambas se explican con claridad, paso a paso, más adelante en la capacitación.",
  "never_p": "Tu mentor regional conoce los nuevos cursos y está para apoyarte en cada lanzamiento. <b>Pedir ayuda es lo que hacen los profesionales:</b> así es como los buenos tutores se vuelven excelentes. No necesitas un problema ni un flag para escribirle.",
  "mentor_h": "Tu mentor",
  "mentor_region": "Región",
  "mentors": [
    [
      "LATAM (incluida España)",
      "Priscila Aabye, Laura Orozco, Camilo Bermudez"
    ]
  ],
  "coaching": "<b>¿Prefieres una sesión más larga?</b> Inicia sesión en el LMS con tu cuenta de Backoffice → <b>Coaching</b> → elige un horario y escribe en una línea con qué te gustaría recibir ayuda (por ejemplo, «Primera clase de [curso]»).",
  "first_h": "Tu mentor es siempre tu primer contacto. Acude a él para:",
  "first_items": [
    "Problemas de gestión de la clase",
    "Dudas sobre un curso o formato nuevo",
    "Apoyo para llevar tus clases con fluidez",
    "Preparar una clase en conjunto, o una revisión rápida de confianza antes de tu primera clase"
  ],
  "tl": "Para grupos y horarios, contacta a tu <b>TL</b>.",
  "notconf": "<b>¿No te sientes seguro, sea cual sea el motivo?</b> Envíale un DM a tu mentor. Con eso basta: sin formularios, sin flags, sin explicaciones.",
  "voices_p": "Los nuevos cursos no salen de la nada: responden a lo que nos dijeron tutores, estudiantes y familias. Aquí tienes parte de lo que escuchamos y lo que cambió gracias a eso.",
  "tell_you": "Nos dijeron",
  "tell_so": "Por eso los nuevos cursos…",
  "rows": [
    [
      "Preparar una clase toma demasiado tiempo, saltando entre las diapositivas y una guía aparte en la Wiki.",
      "Reúnen todo en un solo lugar: notas del tutor en cada diapositiva, un plan de clase con tiempos y un video breve de orientación en la diapositiva 1."
    ],
    [
      "Es difícil mantener a todo el grupo en la misma diapositiva.",
      "Usan Follow Mode: los estudiantes ven exactamente tu diapositiva y tus notas permanecen ocultas."
    ],
    [
      "La dificultad no siempre coincide con la edad del grupo.",
      "Se construyen por rango de edad (8–9, 10–12, 13+) y, en Matemáticas, las tareas van de lo simple a lo complejo en niveles claramente señalados."
    ],
    [
      "Los niños pierden la motivación cuando no ven lo que están construyendo.",
      "Empiezan cada clase desde el resultado terminado y los estudiantes publican su proyecto en Kodland Sparks, donde otros pueden verlo y reaccionar."
    ],
    [
      "Es difícil saber quién realmente entendió la clase.",
      "Cierran cada clase con una verificación del resultado y cada tarea entregada queda registrada, para que veas quién necesita ayuda."
    ]
  ],
  "new_courses": "<b>Algunos cursos son totalmente nuevos y tú estás entre los primeros en enseñarlos.</b> Eso hace que tu voz sea aún más importante: después de tus primeras clases, cuéntale a tu mentor qué funcionó y qué no. Tu retroalimentación dará forma a la próxima versión.",
  "students_h": "Lo que dicen los estudiantes",
  "tutors_h": "De tutores que ya lo enseñaron",
  "voices": [ /* REAL student/parent messages go here: { text: "…", who: "Parent · 3D Modeling · LATAM", img: "images/xxx.png" (optional) } */ ],
  "tutors": [ /* OPTIONAL tutor quotes: { text: "…", who: "Tutor name" } */ ],
  "closing_h": "Ya sabes por qué estamos cambiando, qué significa «estar listo» y quién te acompaña.",
  "closing_p": "Ahora entra a la capacitación con curiosidad: practica en los simuladores las veces que quieras y disfruta de ser de los primeros en llevar algo nuevo a nuestros estudiantes.",
  "closing_dm": "Si en algún momento no te sientes seguro, basta con un DM a tu mentor.",
  "why_cards": [
    "Cada clase parte de un resultado terminado",
    "Los errores son parte del proceso",
    "La IA se usa de forma adecuada a cada edad"
  ]
};
CONTENT.quiz.m0 = [
  {
    "q": "Estás haciendo tu capacitación y las clases del curso aún no están disponibles. ¿Qué haces?",
    "o": [
      "Espero a tener las clases antes de empezar la capacitación.",
      "Completo la capacitación sobre método y estructura; las clases estarán en Backoffice antes de que empiece el curso.",
      "Busco material parecido en la Wiki."
    ],
    "a": 1,
    "e": "Estar listo no depende de haber visto todas las clases. La capacitación cubre el método y la estructura, y todas las clases estarán en Backoffice antes de que empiece tu curso."
  },
  {
    "q": "Unos días antes de tu primera clase no te sientes seguro. ¿Qué haces?",
    "o": [
      "Me lo guardo y espero que salga bien.",
      "Le envío un DM a mi mentor.",
      "Pido que me retiren del curso."
    ],
    "a": 1,
    "e": "Un DM a tu mentor es suficiente: sin formularios, sin flags y sin explicaciones. Pedir ayuda es lo que hacen los profesionales."
  },
  {
    "q": "Quieres ayuda para preparar tu primera clase. ¿Cuál es la forma más rápida?",
    "o": [
      "Enviarle un DM a mi mentor regional o reservar una sesión en el LMS.",
      "Esperar a recibir un flag.",
      "Pedirle opinión al padre o madre de un estudiante."
    ],
    "a": 0,
    "e": "Tu mentor es siempre tu primer contacto. No necesitas un problema ni un flag: escríbele un DM o reserva un horario de Coaching en el LMS."
  },
  {
    "q": "Un paso de la capacitación todavía no te queda claro. ¿Cuál es la mejor decisión?",
    "o": [
      "Detener la capacitación hasta que alguien me contacte.",
      "Repetir el simulador y, si sigue sin quedar claro, escribirle a mi mentor.",
      "Saltármelo: ya lo resolveré en clase."
    ],
    "a": 1,
    "e": "Los simuladores son un espacio seguro que puedes repetir las veces que necesites. Si después sigue sin quedar claro, tu mentor está para ayudarte."
  },
  {
    "q": "Tu primera clase no salió como planeabas. ¿Qué mentalidad es la más adecuada?",
    "o": [
      "«Este curso no es para mí.»",
      "«Todavía no funciona: anotaré una mejora y hablaré con mi mentor.»",
      "«Esperaré a que alguien más lo arregle.»"
    ],
    "a": 1,
    "e": "Tus primeras clases son tu prototipo. Haz lo que les pedimos a los niños: «todavía no funciona», anota una mejora y habla con tu mentor."
  }
];
CONTENT.modules.unshift({
  "id": "m0",
  "n": 0,
  "e": "💛",
  "color": "#F59E0B",
  "title": "Empieza aquí: prepárate para el lanzamiento",
  "check": "quiz",
  "desc": "Por qué estamos cambiando, qué significa «estar listo» cuando aún no están las clases, quién te acompaña y qué nos dijeron tutores y estudiantes. Unos 20 minutos.",
  "obj": "Empieza este lanzamiento con confianza y tranquilidad: sabrás por qué cambia el formato, qué significa realmente estar listo y a quién acudir cada vez que necesites ayuda.",
  "eyebrow": "Módulo 0 · Empieza aquí · unos 20 minutos",
  "offer": [
    [
      "💛",
      "Parte de lo que ya haces bien."
    ],
    [
      "✅",
      "Entiende qué significa «estar listo» antes de que lleguen las clases."
    ],
    [
      "🤝",
      "Sabe exactamente a quién preguntar: primero, tu mentor."
    ],
    [
      "🗣️",
      "Mira cómo la voz de tutores y estudiantes dio forma a los nuevos cursos."
    ]
  ],
  "sections": [
    [
      "welcome",
      "👋",
      "Te damos la bienvenida y por qué cambiamos"
    ],
    [
      "ready",
      "✅",
      "Qué significa «estar listo» ahora"
    ],
    [
      "never",
      "🤝",
      "Nunca estás solo"
    ],
    [
      "voices",
      "🗣️",
      "Creado con tu voz, querido por los estudiantes"
    ],
    [
      "closing",
      "🚀",
      "Estás listo para empezar"
    ]
  ]
});
/* <<< MODULE 0 END */
