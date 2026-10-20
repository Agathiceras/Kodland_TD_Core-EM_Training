/* ============================================================
   Backoffice simulation · SPANISH content
   Translate only the text inside quotes / backticks. Keep HTML tags, ${...} placeholders, keys, ids, file names and URLs unchanged.
   ============================================================ */
window.CONTENT = { lang: 'es' };

/* ---------- PAGE CHROME, BO SCREENS, TOASTS ---------- */
CONTENT.ui = {
  pageTitle:'Nuevo Modelo Educativo — Simulación del BO — Capacitación Kodland',
  simBadge:'🧪 SIMULACIÓN — Capacitación Kodland (datos ficticios)',
  tourBtn:'🚀 Iniciar el recorrido guiado',
  tourMinimize:'Minimizar ▾', tourResume:'📍 Retomar el recorrido guiado',
  stepOf:'Paso {n} de {total}', nextArrow:'Siguiente →', finish:'Finalizar ✓',
  groupsTitle:'Groups', tabExtra:'Extra Lessons', tabParallel:'Parallel Groups', tabRegular:'Regular Groups',
  emptyRegular:'No hay grupos para mostrar en esta simulación: abre <b>Courses</b> en la barra lateral.',
  colID:'ID', colTitle:'Título', colTutor:'Tutor', colType:'Tipo', colCurrentCourse:'Curso actual', colStart:'Inicio',
  colStudentsPaid:'Estudiantes/Pagados', colPreviousLesson:'Clase anterior', colNextLesson:'Próxima clase', colPremium:'Premium',
  containerType:'Grupo', no:'No', yes:'Sí',
  itemsPage100_1:'Elementos por página: 100 &nbsp;|&nbsp; 1-1 de 1', itemsPage10_4:'Elementos por página: 10 &nbsp;|&nbsp; 1-4 de 4',
  itemsPage100_19:'Elementos por página: 100 &nbsp;|&nbsp; 1-9 de 9',
  backToGroups:'Volver a Groups', backToCourses:'Volver a Courses', backToAssignments:'Volver a Assignments',
  tutorLabel:'Tutor:', openConsoleTip:'Open console', colLessonTime:'Horario de la clase', colCourse:'Curso', colNextTopic:'Tema de la próxima clase',
  simOpenCourseFromDetail:'También puedes abrir la ficha del curso desde aquí',
  teacherName:'Profesor de demostración', teacherCountry:'🌎 LatAm',
  profileTitle:'Profile', teacherCoursesH:'Cursos del profesor', availabilityH:'Horario de disponibilidad', notAssigned:'Sin asignar',
  groupsTabLbl:'Groups', scheduleTabLbl:'Schedule', regularGroupsNote:'Tu lista de grupos.',
  currentWeek:'Semana actual', available:'Disponible',
  days:['Lunes','Martes','Miércoles','Jueves','Viernes','Sábado','Domingo'],
  coursesTitle:'Courses', colBusinessBranch:'Unidad de negocio', colActive:'Activo', colNumberOfLessons:'Número de clases',
  badgeActive:'Activo', fieldBranch:'Unidad de negocio: ENG', fieldLanguage:'Idioma: inglés 🇬🇧', fieldCourseType:'Tipo de curso: cursos pagos',
  fieldCourseGroup:'Grupo de cursos: Code & Game lvl 1', fieldLessons:'Número de clases: 40', fieldModules:'Número de módulos: 10',
  fieldExcluded:'Excluido del overbooking: No', fieldCertificate:'Certificado: —',
  lessonsTab:'Lessons', assignmentsTab:'Assignments', moduleFirstSteps:'M1. Creator Lab: primeras misiones', viewAssignments:'Ver las actividades →',
  colNo:'Nº', colActions:'Acciones',
  lessonSelectLbl:'Clase', lessonOption:'L1. Dance Party: dale vida al escenario',
  inClassH:'Actividades en clase', homeworkH:'Actividades de tarea', studyGuidesH:'Study guides',
  colNumber:'Número', colAssignmentTitle:'Título de la actividad', colTheory:'Teoría', colProject:'Proyecto', colMaxScore:'Puntuación máxima',
  interactive:'INTERACTIVE', noData:'No hay datos disponibles',
  noWikiNote:'Aquí no hay enlaces a la wiki, y es a propósito. En los cursos del nuevo modelo educativo, la guía del tutor está dentro de las propias actividades, como notas del tutor (Teacher Notes), y no en un documento aparte de la wiki.',
  modalGroups:'GROUPS', modalExit:'Salir', modalOpenConsole:'Open Console',
  toastConsoleDetail:'🔗 Esto abre el enlace de Classroom de este grupo.',
  toastConsoleModal:'🔗 Es el mismo enlace de Classroom, al que llegas desde Schedule.',
  toastSimClick:'🧪 Esto es una simulación: en el BO real, esto haría lo siguiente: «{label}».',
  toastBlocked:'👉 Sigue el paso resaltado para continuar: la primera vez, el recorrido guiado es obligatorio.',
  reflect:'🎉 <strong>¡Recorrido completado!</strong> Ya sabes cómo abrir un curso del nuevo modelo desde Courses, dónde están sus clases y actividades, por qué no hay enlace a la wiki y dónde encontrar las notas del tutor dentro de cada actividad. Si quieres, sigue explorando esta réplica por tu cuenta.',
  /* Assignment titles in the "In-class assignments" table (same order as the rows) */
  inClass:['¡Empieza la primera misión de Creator Lab! 💃','¡Bienvenido a Creator Lab! 👋','¡Vamos a conocernos! 🎤','Acuerdo del equipo creativo 🤝','Comprueba que estás conectado 📡','¿Qué es Creator Lab? ✨','Descarga y abre el proyecto 📥','Comprueba lo que ya funciona 🔎','Descubre cómo funcionan los bloques 🧩'],
  homework:[]
};

/* ---------- LESSON VIEWER (Teacher Note + student card) ---------- */
CONTENT.lesson = {
  lessonCrumb:'Mis cursos &gt; ¡Empieza la primera misión de Creator...', teacherNoteBadge:'👁 Nota del tutor — solo los tutores ven este bloque',
  lessonTitle:'Preparación de la clase · Dance Party: dale vida al escenario',
  hOverview:'Resumen de la clase',
  pOverview:'Esta es la primera clase del programa Code & Game lvl 1 (Creator Lab: juegos e IA, 8–9 años). Los estudiantes conocen Creator Lab, exploran un prototipo ya hecho en Scratch y crean su propio show interactivo Dance Party en la plataforma Kodland Sparks. El objetivo principal es entender la relación «evento → acción → resultado», tener rápido un proyecto que funcione y usar la IA de forma segura como asistente creativo.',
  hMission:'Misión de la historia de la clase',
  pMission:'Los estudiantes entran al laboratorio creativo secreto, Creator Lab. Su primera misión es «Darle vida al escenario digital»: usar código e IA para crear un show de baile en el que las teclas activan movimientos, sonidos, cambios de disfraz y efectos visuales.',
  hGoal:'Objetivo principal de la clase',
  pGoal:'Ayudar a cada estudiante a crear un show interactivo personalizado y a explicar con palabras simples cómo un evento —presionar una tecla— activa una acción del personaje y produce un resultado visible.',
  hResult:'Resultado clave',
  resultItems:['El proyecto Dance Party se ejecuta y funciona en Scratch dentro de Kodland Sparks.','El show incluye un personaje y una música elegidos por el estudiante, además de un fondo creado con ayuda de la IA.','El personaje responde al presionar una tecla con un movimiento, un cambio de disfraz, un sonido o un efecto.','El estudiante presenta su proyecto y explica al menos una relación «evento → acción → resultado».'],
  calloutLbl:'Antes de dar la clase', callout:'Mira el video de la clase que está más abajo y lee las notas de cada tarjeta: la guía de toda la clase está aquí, no en una wiki.',
  videoTag:'CLASE 1', videoTitle:'Creator Lab: Dance Party — en qué enfocarse',
  videoDesc:'La primera clase explicada para el tutor: el objetivo, el flujo deductivo y los momentos que requieren tu atención. ▶',
  hRole:'El rol del tutor',
  pRole1:'Presenta a los estudiantes la historia de Creator Lab y muestra el show de baile terminado como referencia del resultado final. Guíalos desde la exploración del prototipo hasta la elección del personaje, la música y el fondo creado con IA, y la creación de al menos dos reacciones a teclas distintas.',
  pRole2:'Acompaña con preguntas aclaratorias, pistas breves y reconocimiento de la creatividad, las decisiones propias y los errores corregidos. Supervisa el uso seguro de Sandbox Spark y AI Buddy, <b>sin dejar que la IA construya las mecánicas en lugar del estudiante.</b>',
  hFocus:'Enfoque metodológico',
  pFocus1:'Empieza mostrando el resultado final y explorando el prototipo ya hecho. Introduce la teoría a través de la observación: el estudiante presiona una tecla, ve la reacción del personaje y formula la relación «evento → acción → resultado».',
  pFocus2:'Mantén el Learning Loop: <b>objetivo → intento → dificultad → apoyo → mejora → presentación → reflexión.</b> Presenta los errores como una parte normal del proceso creativo.',
  pFocus3:'Deja que el estudiante elija el personaje, la música, los movimientos, los efectos, la redacción del pedido a la IA y el fondo creado con IA. Las decisiones finales sobre el proyecto deben ser suyas.',
  hImportant:'Puntos importantes',
  importantItems:['Usa instrucciones cortas, mucho apoyo visual y una sola actividad por tarjeta.','Comprueba que el estudiante agregó al menos dos reacciones distintas a teclas y que probó cada una.','No agregues puntajes, condiciones de victoria o derrota, variables, condiciones complejas, listas, clones ni mensajes entre sprites.','Comprueba que los pedidos a la IA no contengan datos personales y que se hagan solo dentro del entorno seguro de Kodland Spark.'],
  hEnding:'Cierre de la clase',
  pEnding:'Haz una breve presentación de los proyectos. Pide a los estudiantes que expliquen qué tecla activa la acción que eligieron y que den retroalimentación con esta fórmula: «Me gustó… Yo agregaría…». Termina con una autoevaluación del proyecto.',
  hNext:'Próxima clase',
  pNext:'En la clase M01L02, «Portal Guardian: el héroe y los cristales», los estudiantes empezarán su primera mecánica de juego: mover al personaje y recolectar objetos.',
  studentTitle:'¡Empieza la primera misión de Creator Lab! 💃',
  studentLead:'Vas a darle vida a un escenario digital y a crear tu propio show de baile, que reacciona cuando presionas distintas teclas.',
  hEquip:'⌨️ Revisa tu equipo', equipItems:['Revisa tu teclado: lo vas a usar para controlar el show de baile.'],
  hSpace:'✨ Prepara tu espacio de trabajo', spaceItems:['Siéntate de forma que puedas trabajar cómodamente en el proyecto y usar el teclado.','Prepárate para elegir tu personaje, tu música, tus movimientos y el fondo de tu escenario.'],
  tipLbl:'💡 La misión de hoy', tipBody:'Explora un show de baile que ya funciona y luego conviértelo en el tuyo: tu personaje, tu música, tu fondo y tus movimientos.'
};

/* ---------- GUIDED TOUR STEPS (same order as STEPS in the page) ---------- */
CONTENT.steps = [
  {title:'1 · Abre el curso',body:'Para ver el contenido de un curso se entra por <b>Courses</b>, no por Groups. Haz clic en <b>[2063] Code &amp; Game. Level 1</b>.'},
  {title:'2 · La ficha del curso',body:'Unidad de negocio, idioma, número de clases y de módulos: los mismos campos que en cualquier curso. El nuevo modelo no cambia la forma en que se registra un curso en el BO.'},
  {title:'3 · Abre Assignments',body:'Haz clic en la pestaña <b>Assignments</b>.'},
  {title:'4 · Las actividades de la clase',body:'Estas tarjetas interactivas SON el contenido de la clase: instrucciones, consejos, imágenes y videos, todo dentro de cada tarjeta. No hay una presentación aparte para dar la clase.'},
  {title:'5 · Sin enlace a la wiki, a propósito',body:'La tabla <b>Study guides</b> está vacía. No es un error: en el nuevo modelo, la guía para el tutor está dentro de las propias actividades, como notas del tutor, y no en un documento aparte de la wiki.'},
  {title:'6 · Abre la primera actividad',body:'Haz clic en <b>¡Empieza la primera misión de Creator Lab!</b> para ver por dentro cómo es una nota del tutor.'},
  {title:'7 · La nota del tutor, dentro de la tarjeta',body:'No hay una pestaña «del tutor» aparte: es la misma tarjeta, que se puede desplazar. Este bloque con borde naranja punteado es una <b>nota del tutor</b> (Teacher Note). La primera tarjeta de una clase tiene la más completa: resumen, misión de la historia, objetivo, tu rol, el método, los puntos importantes, el cierre y la próxima clase. Solo los tutores ven este bloque.'},
  {title:'8 · Desplázate hacia abajo: lo que ve el estudiante',body:'Justo debajo, en la misma tarjeta, está lo que realmente ve el estudiante: la misión y la lista para prepararse. Sin nota del tutor y sin interruptor: la plataforma simplemente nunca muestra ese bloque a una cuenta de estudiante.'}
];

/* ---------- FINISH SCREEN (completion code overlay) ---------- */
CONTENT.done = {
  title:'¡Simulación completada!',
  body:'Terminaste el recorrido por el BO: cómo abrir un curso del nuevo modelo, sus actividades, por qué no hay wiki y las notas del tutor dentro de cada actividad.',
  codeLabel:'🔑 Tu código de finalización',
  codeHint:'Ingrésalo en la capacitación para completar esta simulación.',
  nextStep:'<b>Siguiente paso:</b> copia el código, cierra esta pestaña y vuelve a la capacitación.',
  stay:'Seguir explorando',
  close:'Cerrar y volver a la capacitación',
  closedMsg:'<b>Ya puedes cerrar esta pestaña</b> y continuar en la pestaña de la capacitación.'
};
