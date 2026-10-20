/* ============================================================
   EM lesson guide (Classroom) · SPANISH content
   Translate only the text inside quotes / backticks. Keep HTML tags, ${...} placeholders, keys, ids, file names and URLs unchanged.
   ============================================================ */
window.CONTENT = { lang: 'es' };

/* =========================================================
   INTERFACE STRINGS (page title, replicated Classroom, guide card)
   ========================================================= */
CONTENT.ui = {
  title: 'Guía de una clase del EM',

  // Classroom header
  headerTitle: 'Creator Lab · Clase',
  online: '2 en línea',
  guideChip: 'Guía de una clase del EM',
  leave: 'Leave',

  // Classroom toolbar (tooltips included)
  classroom: 'Classroom',
  assignments: 'Assignments',
  prevTask: 'Previous task',
  nextTask: 'Next task',
  leadGroup: 'Lead the group',
  endSession: 'End session',

  // Video tiles
  student: 'Sofía',                 // the student's name (also used in the guide texts below)
  tutorInitial: 'T',                // letter in the tutor's avatar
  tutorYou: 'Tutor (tú)',
  following: 'Following the teacher',

  // Lesson platform header shown inside Assignments
  platformLang: 'ES ˅',
  platformUser: 'Tutor',

  // Shared pieces of the lesson cards
  teacherNotes: 'Notas para el tutor',
  submit: '✔ Enviar',
  choose: 'Elegir…',

  // Guide card (coach)
  coachStep: (n, total) => `Guía de una clase del EM · ${n}/${total}`,
  next: 'Siguiente →',
  clickHint: '👆 Haz clic en el elemento resaltado',
  openSections: (opened, total) => `Abre todas las secciones (${opened}/${total})`,
  scrollEndNotes: 'Desplázate hasta el final de las notas',
  scrollEndCard: 'Desplázate hasta el final de la tarjeta'
};

/* =========================================================
   WELCOME PAGE
   ========================================================= */
CONTENT.welcome = {
  kicker: 'Nuevo Modelo Educativo · Capacitación para tutores',
  title: 'Guía de una clase del <span>EM</span>',
  lead: 'Esta guía te muestra cómo se ve en Classroom una clase del <b>nuevo modelo educativo (EM)</b>. Usa las primeras tarjetas de una clase real del EM —<b>Creator Lab: Dance Party</b>— y a una estudiante, Sofía, que ya está en el aula.',
  seeTitle: 'Qué vas a ver',
  see: [
    'Cómo se organiza una <b>clase del EM</b>: una serie de tarjetas, con todas las indicaciones dentro de la propia clase.',
    'Qué <b>ve el tutor</b> y qué <b>ve Sofía</b>: las <b>notas para el tutor</b> están dentro de cada tarjeta y solo el tutor puede verlas.',
    'Las <b>primeras notas para el tutor</b>, las más detalladas de la clase: los objetivos, tu rol y, en la primera clase de un curso, un video explicativo.',
    'Cómo usar <b>Lead the group</b> para que los estudiantes sigan la tarjeta que abres.'
  ],
  howTitle: 'Cómo usarla',
  howText: 'Esto es una guía, no una simulación de práctica: no hay decisiones que tomar ni nada que perder. Solo sigue los pasos resaltados y haz clic donde te indique la guía. Puedes repetirla todas las veces que quieras.',
  start: 'EMPEZAR LA GUÍA →'
};

/* =========================================================
   LESSON CONTENT (Creator Lab: Games and AI, ages 8-9 — M01L01 "Dance Party")
   The lesson cards, as they appear in Classroom. Each card: title (shown in the
   Assignments list and above the card) + html (built with the page's helpers:
   tnotes = Teacher notes box, spoiler = collapsible section, test = quiz,
   group = matching pairs, sblock = Scratch block, example, essay = answer box,
   linkBtn = button). P.xxx are image paths: keep them as they are.
   Cards 10–16 come from the Spanish lesson file; their images are full links.
   ========================================================= */
CONTENT.activities = ({ P, tnotes, spoiler, media, banner, ul, ol, test, group, sblock, example, essay, linkBtn, fileAnswer = () => '' }) => [
  { title:`¡Comienza la primera misión de Creator Lab! 💃`, html:
    tnotes(`
      <h1>Preparación para la clase</h1>
      <h1>Dance Party: damos vida al escenario</h1>
      <h2>Descripción general de la clase</h2>
      <p>Esta es la primera clase del programa «Creator Lab: juegos e IA, de 8 a 9 años». Los estudiantes conocerán Creator Lab, explorarán un prototipo listo en Scratch y crearán su propio espectáculo de baile interactivo Dance Party en la plataforma Kodland Spark.</p>
      <p>El objetivo principal de la clase es comprender la relación «evento → acción → resultado», obtener rápidamente un proyecto funcional y utilizar la IA de forma segura como asistente creativo.</p>
      ${spoiler(`Misión narrativa de la clase`, `<p>Los estudiantes entran en el laboratorio creativo secreto Creator Lab. Su primera misión es «Dar vida al escenario digital»: crear con código e IA un espectáculo de baile en el que las teclas activen movimientos, sonidos, cambios de disfraz y efectos visuales.</p>`)}
      ${spoiler(`Objetivo principal de la clase`, `<p>Ayudar a cada estudiante a crear un espectáculo interactivo personalizado y explicar con palabras sencillas cómo un evento —presionar una tecla— activa una acción del personaje y produce un resultado visible.</p>`)}
      ${spoiler(`Resultado clave`, ul([`El proyecto Dance Party se ejecuta y funciona en Scratch dentro de Kodland Spark.`, `El espectáculo incluye un personaje y música elegidos por el estudiante, además de un fondo creado con ayuda de la IA.`, `El personaje responde al presionar una tecla mediante un movimiento, un cambio de disfraz, un sonido o un efecto.`, `El estudiante presenta su proyecto y explica al menos una relación «evento → acción → resultado».`]))}
      <div class="tn-video"><iframe src="${P.video}" allow="autoplay; fullscreen" allowfullscreen loading="lazy" title="Lesson video"></iframe></div>
      <h2>Rol del tutor</h2>
      ${ul([`Introduce a los estudiantes en la historia de Creator Lab y muestra el espectáculo de baile terminado como referencia del resultado final.`, `Guía a los estudiantes desde la exploración del prototipo hasta la elección del personaje, la música y el fondo creado con IA, y la creación de al menos dos reacciones a diferentes teclas.`, `Apoya a los estudiantes con preguntas aclaratorias, pistas breves y reconocimiento por su creatividad, sus decisiones independientes y los errores que logren corregir.`, `Supervisa el uso seguro de Sandbox Spark y AI Buddy, sin permitir que la IA construya la mecánica en lugar del estudiante.`])}
      ${spoiler(`Enfoque metodológico`, `<p>Comienza mostrando el resultado final y explorando el prototipo listo. Introduce la teoría mediante la observación: el estudiante presiona una tecla, ve la reacción del personaje y formula la relación «evento → acción → resultado».</p><p>Mantén el Learning Loop: objetivo → intento → dificultad → apoyo → mejora → presentación → reflexión. Presenta los errores como una parte normal del proceso creativo.</p><p>Permite que el estudiante elija el personaje, la música, los movimientos, los efectos, la forma de redactar la solicitud y el fondo creado con IA. Las decisiones finales del proyecto deben ser suyas.</p>`)}
      ${spoiler(`Aspectos importantes`, ul([`Utiliza instrucciones breves, muchos apoyos visuales y una sola actividad por tarjeta.`, `Comprueba que el estudiante haya añadido al menos dos reacciones diferentes al presionar teclas y que haya probado cada una.`, `No añadas puntajes, condiciones de victoria o derrota, variables, condiciones complejas, listas, clones ni mensajes entre sprites.`, `Verifica que las solicitudes a la IA no incluyan datos personales y que se creen únicamente dentro del entorno seguro de Kodland Spark.`, `Si el estudiante no logra avanzar después de dos o tres intentos, muestra el bloque necesario o propón una plantilla sencilla: «Cuando presiono una tecla, mi personaje…».`]))}
      <h2>Cierre de la clase</h2>
      <p>Organiza una presentación breve de los proyectos. Pide a los estudiantes que expliquen qué tecla activa la acción elegida y que den retroalimentación con esta fórmula: «Me gustó… Yo añadiría…».</p>
      <p>Termina la clase con una autoverificación del proyecto y refuerza la idea principal: la interactividad aparece cuando un evento activa una acción y produce un resultado visible.</p>
      <h2>Próxima clase</h2>
      <p>En la clase M01L02 «Guardián del portal: el héroe y los cristales», los estudiantes comenzarán a crear su primera mecánica de juego: mover al personaje y recoger objetos. Conocerán los conceptos de «objetivo», «reglas» y «progreso visible» dentro de un juego.</p>
      <h3>Como siguiente paso, revisa las notas para el tutor que aparecen en cada actividad de la clase.</h3>`, 'tn-first') +
    banner(P.startBanner) +
    `<h1>¡Comienza la primera misión de Creator Lab! 💃</h1>
     <blockquote><p>Darás vida a un escenario digital y crearás tu propio espectáculo de baile, que reaccionará cuando presiones diferentes teclas.</p></blockquote>
     <h3>Revisa tu equipo</h3>` +
    ul([`Comprueba el teclado: lo usarás para controlar el espectáculo de baile.`]) +
    `<h3>Prepara tu espacio de trabajo</h3>` +
    ul([`Siéntate de manera que puedas trabajar cómodamente en el proyecto y usar el teclado.`, `Prepárate para elegir el personaje, la música, los movimientos y el fondo de tu escenario.`])
  },
  { title:`¡Bienvenido a Creator Lab! 👋`, html:
    banner(P.welcomeBanner) +
    `<h1>¡Bienvenido a Creator Lab! 👋</h1>
     <blockquote><p>Creator Lab es el lugar donde las ideas se convierten en proyectos reales. Hoy crearás tu primer espectáculo interactivo <strong>Dance Party</strong>: darás vida a un personaje, agregarás música y elegirás el estilo del escenario.</p></blockquote>
     <hr>` +
    media(P.welcomeImg, `<h3>¿Qué haremos hoy?</h3><p>Nos conoceremos, abriremos la base del proyecto y la convertiremos en tu propio espectáculo de baile con movimientos, música y un fondo creado con ayuda de IA.</p>`) +
    `<hr>
     <h3>Haz una revisión rápida</h3>` +
    ul([`veo y escucho al tutor;`, `estoy listo para participar con mi voz o en el chat;`, `la pestaña de la clase está abierta y lista para usar.`]) +
    tnotes(`<p><strong>Tiempo:</strong> 3 minutos.</p><p><strong>Objetivo de la tarjeta:</strong> dar una bienvenida cálida al grupo y preparar a los estudiantes para la clase y el tema Dance Party.</p><p><strong>Qué debe hacer el tutor:</strong> presentarse brevemente y explicar la misión de Dance Party.</p><p><strong>Presta atención a lo siguiente:</strong> evita dedicar tiempo a configurar Classroom o a explicar las reglas en detalle. Eso se abordará en las siguientes tarjetas.</p>`)
  },
  { title:`¡Vamos a conocernos! 🎤`, html:
    banner(P.meetBanner) +
    `<h1>¡Vamos a conocernos! 🎤</h1>
     <blockquote><p>Cada creador tiene su propio estilo: a algunos les encantan los bailes llenos de energía, a otros el espacio, la música o los efectos mágicos. ¡Descubramos qué ideas tiene nuestro equipo!</p></blockquote>` +
    media(P.meetMission, `<h3>Tu misión</h3>` + ol([`Cuando el tutor diga tu nombre, activa el micrófono.`, `Preséntate.`, `Cuéntanos qué te gusta más: la música, el baile, los videojuegos, el dibujo o las historias.`, `Elige qué tipo de espectáculo te gustaría crear hoy.`, `Cuando termines, silencia el micrófono y escucha las ideas de los demás.`])) +
    `<h3>¿Qué tipo de espectáculo te gustaría crear?</h3>
     <p><select class="pick"><option>Elige una respuesta</option><option>Una divertida fiesta de baile con música llena de energía</option><option>Un concierto espacial con luces de neón</option><option>Un espectáculo mágico con efectos sorprendentes</option><option>Tengo mi propia idea</option></select></p>` +
    media(P.meetListen, `<h3>Mientras habla otra persona</h3><p>Escucha con atención y deja una reacción si te gusta la idea o si elegiste un estilo parecido.</p>`, 'right narrow') +
    `<hr>` +
    tnotes(`<p><strong>Tiempo:</strong> 3 minutos.</p><p><strong>Objetivo de la tarjeta:</strong> ayudar a que los estudiantes se conozcan, crear un ambiente de confianza y relacionar la primera respuesta de cada estudiante con el proyecto Dance Party.</p><p><strong>Qué debe hacer el tutor:</strong> responder primero con una presentación breve: nombre, actividad creativa favorita y estilo de espectáculo. Da la palabra siguiendo un orden claro y destaca las coincidencias entre las respuestas de los estudiantes.</p><p><strong>Presta atención a lo siguiente:</strong> no pidas respuestas largas. El estudiante puede decir solo su nombre y elegir una opción en el selector. Si el grupo es grande, limita la respuesta a una sola frase breve.</p>`)
  },

  /* ---------- Rest of the lesson cards (Spanish lesson file, in order) ---------- */
  { title:`Acuerdo del equipo creativo 🤝`, html:
    banner(P.rulesBanner) +
    `<h1>Las reglas de nuestro equipo creativo 🤝</h1>
     <blockquote><p>Para que todos podamos trabajar y participar cómodamente, seguiremos cuatro reglas muy sencillas.</p></blockquote>` +
    media(P.rulesGif, `<h3>Nuestras reglas</h3>` + ol([`No interrumpimos a los demás.`, `No hacemos spam en el chat.`, `No llegamos tarde a la clase.`, `Levantamos la mano si queremos responder o necesitamos ayuda.`])) +
    `<img class="center-img" src="${P.rulesPoster}" alt="Póster con las reglas del equipo de Creator Lab"><hr>
     <h3>Ponte a prueba</h3>` +
    test(`¿Qué reglas seguimos durante la clase?`, [`No interrumpir a los demás`, `No hacer spam en el chat`, `No llegar tarde`, `Levantar la mano`, `Escribir la mayor cantidad posible de mensajes en el chat`], true) +
    tnotes(`<p><strong>Tiempo:</strong> 2 minutos.</p><p><strong>Objetivo de la tarjeta:</strong> reforzar rápidamente las reglas básicas de convivencia durante la clase.</p><p><strong>Qué debe hacer el tutor:</strong> leer brevemente las cuatro reglas y pedir a los estudiantes que confirmen que están listos para cumplirlas con una reacción o levantando la mano.</p><p><strong>Presta atención a lo siguiente:</strong> no dediques demasiado tiempo a explicar las reglas ni agregues otras nuevas. Basta con comprobar que los estudiantes entienden cuándo levantar la mano y cómo usar el chat.</p><p><strong>Criterio de preparación:</strong> los estudiantes conocen las cuatro reglas y están listos para pasar a la siguiente parte de la clase.</p>`)
  },
  { title:`Comprueba que estás conectado 📡`, html:
    banner(P.signalsBanner) +
    `<h1>Las señales del equipo 📡</h1>
     <blockquote><p>Durante la clase es importante avisarle rápidamente al tutor si estás listo para responder, quieres hacer una pregunta o necesitas ayuda. Vamos a practicar las tres señales principales de Classroom.</p></blockquote>
     <h3>Completa esta mini actividad</h3>` +
    group([[`Cámara`, `muestra que estás presente en la clase`], [`Mano levantada`, `te permite pedir la palabra o solicitar ayuda`], [`Chat`, `te permite responder incluso si el micrófono no funciona`]]) +
    media(P.camIcon, `<h3>Paso 1. Revisa tu cámara</h3>` + ol([`Busca el ícono de la cámara en la barra de Classroom.`, `Cuando el tutor lo indique, enciéndela.`, `Después, apágala nuevamente.`]), 'narrow') +
    `<div class="media right narrow"><div class="media-img ui-mock"><div class="mock-tip">Levantar la mano</div><div class="mock-btns"><span class="on">✋</span><span>☺</span><span>💻</span></div></div><div class="media-c"><h3>Paso 2. Levanta la mano</h3>${ol([`Abre el menú de reacciones.`, `Selecciona el ícono de la mano levantada.`, `Quita la reacción cuando el tutor te lo indique.`])}</div></div>` +
    media(P.chatIcon, `<h3>Paso 3. Envía un mensaje</h3>` + ol([`Abre el chat de la clase.`, `Escribe: <strong>¡Listo para la misión!</strong>`, `Comprueba que el mensaje aparezca en el chat.`]), 'narrow') +
    spoiler(`No encuentro el botón que necesito`, ol([`Mueve el cursor hacia la parte inferior de la ventana de la clase.`, `Verifica si el botón está dentro de un menú adicional.`, `Mira la pantalla del tutor y compara la ubicación de los íconos.`, `Si aún no encuentras el botón, escríbelo en el chat o pide ayuda a un adulto.`])) +
    `<h3>Mis señales funcionan</h3>` + ul([`sé cómo encender y apagar la cámara;`, `puedo levantar la mano si quiero responder o pedir ayuda;`, `ya envié el mensaje «¡Listo para la misión!» en el chat.`]) +
    tnotes(`<p><strong>Tiempo:</strong> 2 minutos.</p><p><strong>Objetivo de la tarjeta:</strong> comprobar que los estudiantes conocen las herramientas principales de Classroom y saben utilizarlas como señales durante la clase.</p><p><strong>Qué debe hacer el tutor:</strong> primero muestra las tres acciones en tu pantalla y luego realiza una comprobación rápida con todo el grupo: cámara → mano levantada → mensaje en el chat.</p><p><strong>Presta atención a lo siguiente:</strong> no detengas toda la clase por un problema técnico de un solo estudiante. Permite que use temporalmente otro medio de comunicación, como el chat en lugar del micrófono o la cámara.</p>`)
  },
  { title:`¿Qué es Creator Lab? ✨`, html:
    banner(P.labBanner) +
    `<h1>¿Qué es Creator Lab? ✨</h1>
     <blockquote><p>Creator Lab es un laboratorio creativo donde crearás juegos, animaciones y proyectos interactivos. Aquí no empezamos con una teoría larga, sino con una idea interesante y una base de proyecto que ya funciona.</p></blockquote>` +
    media(P.labCat, `<h3>Así trabajaremos</h3>` + ol([`Recibimos la base del proyecto y exploramos lo que ya funciona.`, `Descubrimos el personaje, el escenario, los sonidos y las instrucciones.`, `Agregamos nuestras propias ideas y personalizamos el proyecto.`, `Lo ejecutamos, comprobamos el resultado y seguimos mejorándolo.`])) +
    `<h3>Lo que experimentarás durante el curso</h3>` +
    group([[`Código`, `da vida a los personajes y pone en marcha las acciones`], [`Diseño`, `te ayuda a crear el estilo de tu proyecto`], [`IA`, `propone ideas y ayuda a crear recursos`], [`Pruebas`, `muestran qué funciona y qué se puede mejorar`]]) +
    `<h3>La regla principal de Creator Lab</h3>
     <blockquote><p>Primero creamos un proyecto que funcione. Después descubrimos cómo está hecho y lo transformamos en una versión única.</p></blockquote>` +
    test(`¿Con qué comienza el trabajo en Creator Lab?`, [`Con un proyecto interesante y una base ya preparada`, `Con una larga lista de reglas de Scratch`, `Memorizando todos los bloques de Scratch`]) +
    tnotes(`<p><strong>Tiempo:</strong> 4 minutos.</p><p><strong>Objetivo de la tarjeta:</strong> explicar de forma sencilla la metodología de trabajo de Creator Lab: base preparada → carga en el laboratorio → exploración → cambios propios → comprobación.</p><p><strong>Qué debe hacer el tutor:</strong> explica brevemente el recorrido del proyecto: primero los estudiantes descargarán la plantilla preparada de Dance Party, luego la subirán a Creator Lab y observarán qué elementos ya funcionan. Después darán vida a la escena, personalizarán el proyecto y comprobarán el resultado.</p><p>Puedes dar este ejemplo: «Hoy no vamos a aprender todos los bloques de Scratch de una sola vez. Primero descargaremos una base lista para usar, la abriremos en Creator Lab, haremos que la escena cobre vida y luego descubriremos qué bloques hacen bailar al personaje».</p><p><strong>Presta atención a lo siguiente:</strong> evita explicar con demasiado detalle el modelo educativo. Lo importante es que los estudiantes comprendan este recorrido: descargar la plantilla → abrirla en Creator Lab → modificarla → probarla → obtener su propia versión del proyecto.</p>`)
  },
  { title:`Descarga y abre el proyecto 📥`, html:
    banner(P.dlBanner) +
    `<h1>Descarga y abre el proyecto 📥</h1>
     <blockquote><p>No empezaremos desde una pantalla vacía. La plantilla ya incluye un personaje, música y varios bloques preparados. Descarga el proyecto y ábrelo en Creator Lab.</p></blockquote>` +
    media(P.dlFile, `<h3>Paso 1. Descarga la plantilla</h3>` + ol([`Haz clic en el botón de descarga.`, `Espera hasta que el archivo aparezca en la carpeta <strong>Descargas</strong>.`, `Recuerda su nombre: <strong>Dance Party Starter.sb3</strong>.`, `No abras el archivo con doble clic.`])) +
    linkBtn('Descargar Dance Party Starter') +
    `<div class="media right"><div class="media-img"><img src="${P.uploadImg}" alt=""></div><div class="media-c"><h3>Paso 2. Abre Creator Lab</h3>${ol([`Haz clic en el botón para abrir Creator Lab - Kodland Spark.`, `Espera a que Creator Lab se abra en una nueva pestaña.`, `No cierres la pestaña con las actividades de la clase.`])}</div></div>` +
    linkBtn('Abrir Creator Lab') +
    `<h2>Paso 3. Sube el proyecto</h2>` +
    ol([`Haz clic en el botón <strong>Studio</strong>.`, `Selecciona el <strong>Modo Creativo</strong>.`, `Abre <strong>Slot 1</strong>.`, `Selecciona el tipo de proyecto <strong>Scratch</strong>.`, `Espera a que se abra el editor de Scratch.`, `Haz clic en el botón <strong>Upload .sb3</strong>.`, `Selecciona el archivo descargado <strong>Dance Party Starter.sb3</strong>.`, `Espera a que el proyecto aparezca en el editor.`]) +
    `<div class="flow"><span>Studio</span><i>→</i><span>Modo Creativo</span><i>→</i><span>Slot 1</span><i>→</i><span>Scratch</span><i>→</i><span class="hi">Upload .sb3</span></div>
     <h2>Cómo trabajar con dos pestañas</h2>
     <img class="center-img" src="${P.twoTabs}" alt="Dos pestañas del navegador: la plataforma de aprendizaje y Kodland Sparks">
     <p>Relaciona cada pestaña con lo que encontrarás en ella.</p>` +
    group([[`1. Clase`, `aquí están las actividades y las instrucciones`], [`2. Kodland Spark - Creator Lab`, `aquí está tu proyecto`]]) +
    spoiler(`No encuentro el archivo descargado`, ol([`Abre la carpeta <strong>Descargas</strong>.`, `Revisa los archivos descargados más recientemente.`, `Comprueba que el nombre del archivo termine en <strong>.sb3</strong>.`, `Si no está, descarga la plantilla nuevamente.`, `Si aún tienes problemas, levanta la mano.`])) +
    spoiler(`Creator Lab no se abrió`, ol([`Comprueba si se abrió una nueva pestaña.`, `Permite que el navegador abra una nueva pestaña.`, `Haz clic nuevamente en el botón para abrir Creator Lab.`, `Si la página no aparece, pide ayuda al tutor.`])) +
    `<h3>Haz una revisión rápida</h3>` + ul([`la plantilla de Dance Party está descargada;`, `Creator Lab está abierto en una pestaña independiente;`, `el proyecto está cargado y se ve en el editor;`, `la pestaña de la clase sigue abierta.`]) +
    tnotes(`<p><strong>Tiempo:</strong> 8 minutos.</p><p><strong>Objetivo de la tarjeta:</strong> guiar a los estudiantes por el proceso técnico completo: descargar la plantilla preparada, abrir Creator Lab y cargar el archivo del proyecto.</p><p><strong>Qué debe hacer el tutor:</strong> primero muestra todo el proceso en tu pantalla. Después, acompaña al grupo paso a paso: descargar el archivo, abrir Creator Lab, seleccionar «Upload .sb3» y buscar el archivo en la carpeta «Descargas».</p><p><strong>Presta atención a lo siguiente:</strong> no pidas a los estudiantes que abran el archivo con doble clic. El proyecto debe cargarse desde la interfaz de Creator Lab. No pases a la siguiente actividad hasta que la mayoría del grupo vea el proyecto en el editor.</p><p><strong>Si un estudiante se retrasa:</strong> permite que levante la mano y ayúdalo mientras el resto del grupo continúa, sin detener la clase durante demasiado tiempo.</p>`)
  },
  { title:`Revisa lo que ya funciona 🔎`, html:
    banner(P.chkBanner) +
    `<h1>Comprueba lo que ya funciona 🔎</h1>
     <blockquote><p>No te apresures a modificar el proyecto. Primero haz una pequeña investigación: ejecuta Dance Party, comprueba la música y la tecla Espacio, y después explora el personaje por dentro.</p></blockquote>
     <h3>Ejecuta la escena</h3>` +
    ol([`Busca la <strong>bandera verde</strong> sobre el escenario.`, `Haz clic en ella una vez.`, `Escucha si la música comienza a sonar.`, `Observa qué sucede en el escenario.`]) +
    `<div class="scr-mock"><span class="tab on">Código</span><span class="tab">Disfraces</span><span class="tab">Sonidos</span><span class="flag">⚑</span><span class="pause">❚❚</span><span class="stop">⬣</span></div>
     <h3>Prueba la tecla Espacio</h3>` +
    ol([`Haz clic sobre el escenario.`, `Presiona la tecla <strong>Espacio</strong>.`, `Observa si el personaje comienza a bailar.`, `Por ahora no cambies nada; solo recuerda el resultado.`]) +
    `<h3>¿Qué observaste?</h3>
     <p><select class="pick"><option>Elige una respuesta</option><option>La música funciona, pero el baile todavía no se activa al presionar Espacio</option><option>El proyecto está vacío y no tiene ningún elemento</option><option>El personaje ya realiza un baile completo</option></select></p>
     <h3>Explora el personaje</h3>` +
    ol([`Busca el personaje debajo del escenario y haz clic sobre él.`, `Abre la pestaña <strong>Código</strong>.`, `Observa los bloques de colores que ya están en el área de trabajo.`, `Fíjate en que los bloques ya existen, pero todavía están separados.`, `No los unas todavía; primero descubriremos qué hace cada bloque.`]) +
    example(`Resultado de la investigación`, `La base del proyecto ya funciona: el personaje está en el escenario y la música se reproduce. Sin embargo, los bloques del baile todavía no están conectados en un solo script, por eso la tecla Espacio aún no inicia el movimiento.`) +
    spoiler(`No veo los bloques del personaje`, ol([`Comprueba que hayas seleccionado el personaje y no el escenario.`, `Abre la pestaña <strong>Código</strong>.`, `Observa el área de trabajo, a la derecha de la lista de bloques.`, `Si los bloques siguen sin aparecer, levanta la mano y comparte tu pantalla con el tutor.`])) +
    `<h3>Haz una revisión rápida</h3>` + ul([`ejecuté el proyecto con la bandera verde;`, `comprobé la música y la tecla Espacio;`, `seleccioné el personaje y abrí la pestaña «Código»;`, `encontré los bloques preparados y todavía no los he movido.`]) +
    tnotes(`<p><strong>Tiempo:</strong> 5 minutos.</p><p><strong>Objetivo de la tarjeta:</strong> explorar la base del proyecto y ayudar a los estudiantes a descubrir el problema que resolverán más adelante: la música funciona, pero el baile no comienza porque los bloques preparados aún no están conectados.</p><p><strong>Qué debe hacer el tutor:</strong> guía la exploración junto con el grupo: bandera verde → música → tecla Espacio → personaje → pestaña «Código». Después de probar la tecla Espacio, pregunta a los estudiantes qué observaron, pero no muestres la solución todavía.</p><p><strong>Presta atención a lo siguiente:</strong> en esta etapa los estudiantes solo están explorando el proyecto. No permitas que busquen bloques nuevos por categorías ni que armen el script antes de tiempo. Todos los bloques necesarios ya están preparados dentro del sprite.</p>`)
  },
  { title:`Descubre cómo funcionan los bloques 🧩`, html:
    banner(P.blocksBanner) +
    `<h1>Descubre los secretos de los bloques 🧩</h1>
     <blockquote><p>Frente a ti están las instrucciones preparadas para el primer baile. Todavía no las conectes. Primero descubre qué hace cada bloque.</p></blockquote>
     <h3>1. ¿Cómo comienza el baile?</h3>` +
    sblock('al presionar tecla <em class="sdd">espacio ▾</em>', 'ev', true) +
    `<p>Este bloque amarillo espera a que presiones la tecla <strong>Espacio</strong>. Todas las instrucciones conectadas debajo de él se ejecutarán cuando la presiones.</p>` +
    test(`¿Dónde debe colocarse el bloque de la tecla Espacio?`, [`Al inicio del script`, `En la mitad del baile`, `Al final del script`]) +
    `<h3>2. ¿Cómo cambia de pose el personaje?</h3>` + sblock('siguiente disfraz', 'lk') +
    `<p>El bloque <strong>siguiente disfraz</strong> cambia la apariencia del personaje. Si el sprite tiene varios disfraces, el personaje adoptará una nueva pose.</p>
     <p><select class="pick"><option>Elige una respuesta</option><option>El personaje cambia de pose</option><option>El personaje reproduce música</option><option>El personaje desaparece del escenario</option></select></p>
     <h3>3. ¿Cómo agregar movimiento?</h3>` + sblock('girar ↻ <em>15</em> grados', 'mo') +
    `<p>Este bloque hace que el personaje gire <strong>a la derecha</strong>.</p>` + sblock('girar ↺ <em>15</em> grados', 'mo') +
    `<p>Este bloque hace que el personaje gire <strong>a la izquierda</strong>.</p>
     <p>Si usas ambos bloques, el personaje podrá girar hacia un lado y luego regresar a su posición.</p>
     <h3>4. ¿Para qué sirve una pausa en el baile?</h3>` + sblock('esperar <em>0.5</em> segundos', 'ct') +
    `<p>El bloque <strong>esperar</strong> hace una breve pausa entre los movimientos. Sin esa pausa, las instrucciones pueden ejecutarse tan rápido que el baile casi no se note.</p>` +
    test(`¿Qué ocurre si agregas una pausa entre los movimientos?`, [`Será más fácil ver los movimientos del personaje`, `El proyecto se detendrá de inmediato`, `El personaje desaparecerá del escenario`]) +
    `<h3>5. ¿Cómo hacer que el baile destaque más?</h3>` + sblock('cambiar tamaño por <em>10</em>', 'lk') +
    `<p>El bloque <strong>cambiar tamaño</strong> puede hacer que el personaje sea más grande o más pequeño. Más adelante agregaremos una instrucción para devolverlo a su tamaño normal y evitar que siga creciendo después de cada baile.</p>
     <h3>Encuentra los bloques en el proyecto 🔎</h3>` +
    ol([`Observa los bloques separados en el área de trabajo del personaje.`, `Encuentra el bloque amarillo que inicia el baile.`, `Encuentra el bloque para cambiar de disfraz.`, `Encuentra los bloques de giro, pausa y cambio de tamaño.`, `Por ahora no los muevas ni los conectes.`]) +
    `<h3>Haz una revisión rápida</h3>` + ul([`encontré el bloque que inicia el baile;`, `entendí qué bloque cambia la pose del personaje;`, `sé para qué sirve una pausa breve;`, `encontré los bloques de movimiento y cambio de tamaño;`, `todavía no he conectado los bloques.`]) +
    tnotes(`<p><strong>Tiempo:</strong> 4 minutos.</p><p><strong>Objetivo de la tarjeta:</strong> presentar la función de los bloques ya preparados antes de construir el primer baile.</p><p><strong>Qué debe hacer el tutor:</strong> pide a los estudiantes que encuentren cada bloque en su proyecto al mismo tiempo que aparece en la tarjeta. Para comprobar rápidamente su función, puedes hacer clic en un bloque por separado y observar junto al grupo cómo cambia el personaje.</p><p><strong>Presta atención a lo siguiente:</strong> no conviertas esta tarjeta en una explicación de todas las categorías de Scratch. Basta con que los estudiantes comprendan una idea sencilla: el bloque amarillo inicia el script y las instrucciones conectadas debajo se ejecutan de arriba hacia abajo.</p><p>En esta tarjeta los estudiantes no deben mover ni conectar los bloques. La construcción del código, el orden correcto de los bloques y las diferentes formas de ejecución se verán en la siguiente actividad.</p>`)
  },
  { title:`Crea tu primera coreografía`, html:
    banner('https://mp.kodland.org/task_description_materials/ed99f0b3-e08c-42f0-9d74-0feb6912e40f.png') +
    `<h1>¡Crea tu propio baile!</h1>
     <blockquote><p>Conecta los bloques preparados para formar un script que funcione y luego modifica los movimientos para que el baile tenga tu propio estilo.</p></blockquote>
     <h3>Paso 1. Encuentra el inicio</h3>` +
    ol([`Selecciona el sprite del personaje.`, `Abre la pestaña <strong>Código</strong>.`, `Busca el bloque amarillo <strong>al presionar la tecla Espacio</strong>.`, `Arrástralo a un espacio libre del área de trabajo.`]) +
    `<img class="center-img" src="https://mp.kodland.org/task_description_materials/5f377597-7cb4-4e18-ba4a-2799a89d9d24.png" alt="Bloque amarillo al presionar la tecla Espacio">
     <h3>Paso 2. Arma la base del baile</h3>
     <p>Conecta los bloques debajo del bloque amarillo. Scratch los ejecuta <strong>de arriba hacia abajo</strong>.</p>` +
    ol([`Agrega el bloque <strong>siguiente disfraz</strong>.`, `Agrega un giro hacia la derecha.`, `Agrega una pausa breve.`, `Agrega un giro hacia la izquierda.`, `Agrega un movimiento hacia la derecha y luego el movimiento de regreso.`, `Agrega un cambio de tamaño.`, `Al final, devuelve el tamaño del personaje a 100% y la dirección a 90.`]) +
    `<hr>
     <h3>Paso 3. Dale tu estilo al baile</h3>
     <p>Modifica los movimientos del personaje en al menos dos lugares.</p>
     <h4>1. Cambia los giros</h4>` +
    ul([`Haz clic sobre el número de uno de los bloques de giro.`, `Elige tu propio valor, por ejemplo: <strong>20</strong>, <strong>40</strong> o <strong>50 grados</strong>.`, `Puedes hacer que ambos giros sean iguales o diferentes.`]) +
    `<h4>2. Cambia los pasos</h4>` +
    ul([`Modifica el número del bloque <strong>cambiar x por 20</strong>.`, `En el segundo bloque usa el mismo número con signo negativo para que el personaje regrese al mismo lugar.`]) +
    example(`Ejemplos`, `<p>Paso a la derecha: <strong>30</strong> — paso de regreso: <strong>−30</strong>.</p><p>Paso a la derecha: <strong>50</strong> — paso de regreso: <strong>−50</strong>.</p>`) +
    `<blockquote><p>Si los valores de los bloques de movimiento son diferentes, el personaje podría no regresar a su posición inicial.</p></blockquote>
     <img class="center-img" src="https://mp.kodland.org/task_description_materials/d2e123b3-42bc-4526-9658-3bee796d37fa.png" alt="Bloques de Scratch preparados para elegir movimientos y cambiar los valores del baile">
     <hr>
     <h3>Paso 4. Agrega un detalle propio</h3>
     <p>Elige al menos uno de estos bloques:</p>` +
    ul([`<strong>siguiente disfraz</strong>: el personaje cambiará de pose;`, `<strong>decir «Let’s dance!»</strong>: el personaje dirá una frase;`, `<strong>iniciar sonido</strong>: se reproducirá un efecto de sonido;`, `<strong>esperar 0.15 o 0.2 segundos</strong>: cambiará el ritmo;`, `<strong>cambiar tamaño</strong>: el personaje se hará más grande;`, `<strong>siguiente disfraz</strong> otra vez: aparecerá una nueva pose.`]) +
    `<blockquote><p>No necesitas usar todos los bloques. Elige solo los que mejor se adapten a tu baile.</p></blockquote>
     <hr>
     <h3>Paso 5. Comprueba el resultado</h3>` +
    ol([`Haz clic sobre el escenario.`, `Presiona la tecla <strong>Espacio</strong>.`, `Observa cómo cambiaron los giros y los pasos.`, `Comprueba si el personaje regresa a su posición inicial.`, `Presiona Espacio otra vez y verifica que el baile se repita correctamente.`]) +
    `<img class="center-img" src="https://mp.kodland.org/task_description_materials/ef167fb0-c68a-417f-8f84-9e7bf8b99add.gif" alt="El personaje realiza un baile personalizado al presionar la tecla Espacio">
     <hr>
     <h3>Elige tu desafío</h3>
     <h4>Ruta con ayuda</h4>` +
    ol([`Arma la base del baile.`, `Cambia el valor de uno de los giros.`, `Modifica el paso y el paso de regreso.`, `Agrega un bloque preparado.`, `Ejecuta el baile y revisa el resultado.`]) +
    `<h4>Ruta desafío</h4>` +
    ol([`Arma el baile sin usar la pista.`, `Haz dos giros con valores diferentes.`, `Elige tu propia longitud de paso.`, `Agrega dos bloques preparados.`, `Cambia el orden de las instrucciones y elige la versión que más te guste.`]) +
    spoiler(`Pista: así puede verse el código`, `<p>Abre esta pista si no sabes en qué orden conectar los bloques.</p><img src="https://mp.kodland.org/task_description_materials/8328ca4f-3173-43e5-a62c-f26aa178b403.gif" alt="Ejemplo de un baile armado con giros, pausa y cambio de tamaño"><p>El bloque amarillo debe estar arriba y todos los demás bloques conectados debajo, sin espacios. Después de armar el script, modifica los valores de los giros y de los pasos.</p>`) +
    spoiler(`Presioné Espacio, pero no pasa nada`, ol([`Haz clic sobre el escenario.`, `Comprueba que todos los bloques estén conectados al bloque amarillo.`, `Asegúrate de que el bloque amarillo tenga seleccionada la tecla <strong>Espacio</strong>.`, `Presiona la tecla Espacio nuevamente.`])) +
    spoiler(`El personaje no regresa a su lugar`, `<p>Revisa los valores de los bloques de movimiento. Si el personaje avanza <strong>30</strong>, el movimiento de regreso debe ser <strong>−30</strong>.</p><p>Al final del script también deben estar los bloques <strong>fijar tamaño a 100%</strong> y <strong>apuntar en dirección 90</strong>.</p>`) +
    `<hr>
     <h3>Haz una revisión rápida</h3>` +
    ul([`el bloque amarillo está al inicio del script;`, `todos los bloques están conectados sin interrupciones;`, `el baile se inicia al presionar la tecla Espacio;`, `cambié el valor de al menos uno de los giros;`, `modifiqué los valores del paso y del paso de regreso;`, `agregué al menos un bloque de mi elección;`, `al terminar el baile, el personaje vuelve a su lugar y recupera su estado normal.`]) +
    tnotes(`<p><strong>Tiempo:</strong> 8 minutos.</p><p><strong>Objetivo de la tarjeta:</strong> construir un baile funcional y personalizarlo modificando los valores de los giros y los movimientos, además de elegir una acción adicional.</p><p><strong>Por qué es importante:</strong> en esta clase no se crea un segundo baile. La personalización ocurre dentro del mismo script, ya que cada estudiante modifica los parámetros de movimiento y elige acciones adicionales para el personaje.</p><p><strong>Qué debe hacer el tutor:</strong> primero ayuda al grupo a construir la base del baile. Después de la primera prueba, muestra dos ejemplos breves: cómo cambiar el número de un giro modifica el movimiento y por qué los valores del paso y del paso de regreso deben tener el mismo valor absoluto.</p><p><strong>Resultado mínimo esperado:</strong> el estudiante modifica al menos un valor de giro, elige sus propios valores para el paso y el paso de regreso y agrega uno de los bloques preparados.</p><p><strong>Presta atención a lo siguiente:</strong> los estudiantes deben trabajar únicamente con los bloques que ya están preparados en el área de trabajo. No es necesario buscar bloques adicionales en las categorías. Tampoco es necesario usar todos los bloques.</p><p><strong>Si surge un problema:</strong> si el personaje se desplaza poco a poco hacia un lado, compara los valores de los bloques que cambian la posición en x. Si termina agrandado o girado, comprueba que al final del script estén los bloques <strong>fijar tamaño a 100%</strong> y <strong>apuntar en dirección 90</strong>.</p><p><strong>Criterio de preparación:</strong> el baile se inicia con la tecla Espacio, el estudiante modificó los valores de los giros y los pasos, agregó al menos un bloque de su elección y el personaje vuelve a su posición y estado normal al terminar.</p>`) +
    banner('https://mp.kodland.org/task_description_materials/72e35aa5-0c08-4643-8d9f-ec7502296810.png')
  },
  { title:`Crea el estilo de tu show`, html:
    banner('https://mp.kodland.org/task_description_materials/32e9807a-f25d-4991-b176-d79474d6fe9e.png') +
    `<h1>¡Crea un fondo para tu espectáculo!</h1>
     <blockquote><p>Tu primer baile ya funciona. Ahora imagina dónde se llevará a cabo tu espectáculo y pídele a la IA que cree un nuevo fondo para él.</p></blockquote>
     <h3>Tu misión</h3>` +
    ol([`Abre Spark: <a href="https://portfolio.kodland.org/sandbox" target="_blank" rel="noopener noreferrer">abrir Sandbox</a>.`, `Decide dónde se desarrollará tu espectáculo.`, `Crea tu prompt con esta fórmula: lugar + escenario caricaturesco + espacio libre en el centro + sin personajes + fondo panorámico.`]) +
    `<h4>Ejemplos de prompts</h4>
     <pre><code>fiesta espacial, escenario caricaturesco y colorido, espacio libre en el centro, sin personajes, fondo panorámico</code></pre>
     <pre><code>concierto neón, escenario caricaturesco y colorido, reflectores a los lados, espacio libre en el centro, sin personajes, fondo panorámico</code></pre>
     <pre><code>bosque mágico, escenario caricaturesco y colorido, plantas brillantes a los lados, espacio libre en el centro, sin personajes, fondo panorámico</code></pre>
     <pre><code>fiesta submarina, escenario caricaturesco y colorido, corales a los lados, espacio libre en el centro, sin personajes, fondo panorámico</code></pre>
     <pre><code>país de los dulces, escenario caricaturesco y colorido, caramelos y paletas a los lados, espacio libre en el centro, sin personajes, fondo panorámico</code></pre>
     <hr>
     <h3>Cómo crear el fondo</h3>` +
    ol([`En Spark, busca en la parte inferior el cuadro de texto con el mensaje <strong>Pregúntame lo que quieras o describe una imagen para dibujar...</strong>`, `Pega allí tu prompt completo.`, `Haz clic en el botón <strong>Enviar</strong>.`, `Espera a que la IA genere las opciones de fondo.`]) +
    `<img class="center-img" src="https://mp.kodland.org/task_description_materials/140aae46-f3e6-486f-ba10-8ff8b4a48cee.gif" alt="Campo para escribir el prompt y botón Enviar en Spark">
     <hr>
     <h3>Descarga el fondo</h3>` +
    ol([`Elige la opción que más te guste.`, `Descarga la imagen en formato PNG.`]) +
    `<img class="center-img" src="https://mp.kodland.org/task_description_materials/22a67f31-0eeb-468a-8c33-bd46df9013dd.png" alt="Botón para descargar la imagen en formato PNG en Spark">
     <hr>
     <h3>Agrega el fondo a tu proyecto</h3>` +
    ol([`Regresa al editor de Scratch.`, `Selecciona el escenario.`, `Haz clic en el botón <strong>Carga un fondo</strong>.`, `Selecciona la imagen que descargaste.`, `Ejecuta el proyecto y verifica que el personaje se vea claramente.`]) +
    `<img class="center-img" src="https://mp.kodland.org/task_description_materials/435c915a-ba69-486c-91b3-b65c2c8c77ad.png" alt="Escenario de Scratch con un fondo personalizado">` +
    spoiler(`Cómo crear un prompt`, `<pre><code>[lugar] + escenario caricaturesco + espacio libre en el centro + sin personajes + fondo panorámico</code></pre><p>Ejemplo: bosque mágico, escenario caricaturesco y colorido, espacio libre en el centro, sin personajes, fondo panorámico.</p>`) +
    `<hr>
     <h3>Compruébalo</h3>` +
    ul([`ya elegí el lugar para mi espectáculo;`, `ya creé un fondo con ayuda de la IA;`, `ya descargué la imagen;`, `ya subí el fondo a Scratch;`, `el personaje se ve claramente en el escenario.`]) +
    tnotes(`<p><strong>Tiempo:</strong> 8 minutos.</p><p><strong>Objetivo de la tarjeta:</strong> crear un fondo original con ayuda de la IA y agregarlo al proyecto Dance Party.</p><p><strong>Qué debe hacer el tutor:</strong> mostrar el proceso completo: abrir Sandbox → pegar el prompt → presionar <strong>Enviar</strong> → descargar el archivo PNG → subir el fondo a Scratch.</p><p><strong>En qué fijarse:</strong> basta con obtener una opción adecuada. El fondo debe estar libre de personajes y tener espacio en el centro para que el personaje permanezca claramente visible.</p>`)
  },
  { title:`Revisa y publica Dance Party`, html:
    banner('https://mp.kodland.org/task_description_materials/6331cf5a-7998-4352-819b-6bbd9e7cf4de.png') +
    `<h1>¡Revisa y publica tu Dance Party!</h1>
     <blockquote><p>¡Tu espectáculo está listo! Haz una última revisión, publica tu proyecto en Spark y envía el enlace en la plataforma de Kodland.</p></blockquote>
     <h3>Paso 1. Revisa la versión final</h3>` +
    ol([`Haz clic en la bandera verde y comprueba que la música se reproduzca.`, `Presiona la tecla <strong>Espacio</strong> y verifica que el baile funcione.`, `Asegúrate de que el personaje se vea bien sobre el nuevo fondo.`, `Comprueba que, al terminar el baile, el personaje vuelva a su posición y no quede girado ni con un tamaño diferente.`]) +
    `<img class="center-img" src="https://mp.kodland.org/task_description_materials/4fd8edc6-8f0d-4ab7-ab54-89493a6727fc.gif" alt="Revisión de la música y el baile en el proyecto Dance Party">
     <hr>
     <h3>Paso 2. Publica tu proyecto en Spark</h3>` +
    ol([`Busca el botón para publicar el proyecto.`, `Haz clic en <strong>Publicar</strong> o <strong>Compartir</strong>.`, `En la ventana que aparezca, desplázate hasta el final y haz clic en <strong>Publicar</strong>.`]) +
    `<img class="center-img" src="https://mp.kodland.org/task_description_materials/037d9186-50e6-4581-abbd-6a47bba6431f.png" alt="Publicación del proyecto en Spark">
     <h3>Copia el enlace de tu Dance Party</h3>
     <img class="center-img" src="https://mp.kodland.org/task_description_materials/45a94711-e039-4f0b-8781-ccec92e90d20.png" alt="Copiar el enlace del proyecto publicado">
     <blockquote><p>No cierres la pestaña de Spark hasta haber copiado el enlace de tu proyecto publicado.</p></blockquote>
     <hr>
     <h3>Paso 3. Envía el enlace en la plataforma de Kodland</h3>` +
    ol([`Vuelve a la pestaña de la lección en la plataforma de Kodland.`, `Pega el enlace que copiaste en el campo de abajo.`, `Comprueba que el enlace se haya pegado completo.`, `Envía tu respuesta.`]) +
    essay(`Envía el enlace de tu proyecto para revisarlo`, `Pega aquí tu enlace...`) +
    spoiler(`No puedo obtener el enlace`, ol([`Comprueba que la publicación del proyecto haya finalizado.`, `Haz clic de nuevo en <strong>Publicar</strong> o <strong>Compartir</strong>.`, `Copia el enlace desde la barra de direcciones.`, `Si no lo consigues, comparte tu pantalla con el profesor.`])) +
    `<hr>
     <h3>Comprueba tu trabajo</h3>` +
    ul([`la música se reproduce con la bandera verde;`, `el baile funciona al presionar la tecla Espacio;`, `el personaje se ve bien sobre el nuevo fondo;`, `el proyecto está publicado en Spark;`, `el enlace fue enviado en la plataforma de Kodland.`]) +
    tnotes(`<p><strong>Tiempo:</strong> 4 minutos.</p><p><strong>Objetivo de la tarjeta:</strong> realizar una revisión final, publicar Dance Party en Spark y enviar el enlace a través de la plataforma de Kodland.</p><p><strong>Qué debe hacer el profesor:</strong> revisar rápidamente el proyecto con todo el grupo siguiendo este orden: bandera verde → tecla Espacio → fondo. Después, mostrar dónde está el botón de publicación, cómo completar la publicación y de dónde copiar el enlace.</p><p><strong>Tiempo recomendado:</strong> 1 minuto para revisar el proyecto, 2 minutos para publicarlo y copiar el enlace, y 1 minuto para enviarlo en la plataforma de Kodland.</p><p><strong>En qué fijarse:</strong> la publicación se realiza en Spark. En la plataforma de Kodland, el estudiante solo debe enviar el enlace. Antes de continuar, asegúrate de que todos hayan enviado su enlace.</p><p><strong>Criterio de éxito:</strong> la música se reproduce, el baile funciona con la tecla Espacio, el personaje se ve claramente sobre el nuevo fondo, el proyecto publicado se abre desde el enlace y el enlace fue enviado correctamente en la plataforma de Kodland.</p>`)
  },
  { title:`AI Buddy te da consejos para tu proyecto`, html:
    banner('https://mp.kodland.org/task_description_materials/34b0674c-531a-4598-a27b-3b4be3f72f1f.png') +
    `<h1>Recibe retroalimentación de Buddy de IA (AI Buddy)</h1>
     <blockquote><p>Tu proyecto ya está publicado. Ahora pídele a Buddy de IA (AI Buddy) que revise la versión final, destaque un punto fuerte y te dé una idea para mejorarlo en la próxima versión.</p></blockquote>
     <h3>Paso 1. Abre tu proyecto publicado</h3>` +
    ol([`Vuelve a la pestaña de Spark.`, `Abre la versión publicada de Dance Party.`, `Comprueba que el proyecto se abre correctamente desde el enlace.`]) +
    `<hr>
     <h3>Paso 2. Pídele retroalimentación a Buddy de IA (AI Buddy)</h3>` +
    ol([`Busca Buddy de IA (AI Buddy) junto al proyecto publicado.`, `Abre el cuadro para escribir un mensaje.`, `Envía este mensaje:`]) +
    `<pre><code>Mira mi Dance Party publicado. ¿Qué quedó bien en mi proyecto? ¿Qué podría mejorar en la próxima versión?</code></pre>
     <ol start="4"><li>Lee la respuesta de Buddy de IA (AI Buddy).</li><li>Identifica un punto fuerte de tu proyecto.</li><li>Elige una idea para la siguiente versión.</li></ol>
     <img class="center-img" src="https://mp.kodland.org/task_description_materials/1add2f4f-ec9a-4358-a723-34361c76a54c.png" alt="Cuadro de mensaje de Buddy de IA (AI Buddy) y ejemplo de retroalimentación del proyecto">
     <blockquote><p>No hace falta volver a modificar el proyecto ahora. Guarda la idea de Buddy de IA (AI Buddy) para la próxima versión.</p></blockquote>
     <hr>
     <h3>¿Qué dijo Buddy de IA (AI Buddy)?</h3>
     <p><select class="pick"><option>Elige una respuesta</option><option>Destacó un punto fuerte y propuso una idea para mejorar</option><option>Pidió borrar todo el proyecto</option><option>Propuso empezar la lección desde el principio</option></select></p>` +
    spoiler(`La respuesta de Buddy de IA (AI Buddy) es muy larga`, `<p>Busca solo dos cosas en la respuesta: qué quedó bien en tu proyecto y qué podrías intentar mejorar más adelante. Por ahora puedes dejar el resto de las sugerencias para después.</p>`) +
    `<hr>
     <h3>Prepárate para presentar tu proyecto</h3>
     <p>Completa estas dos frases:</p>
     <blockquote><p><strong>Lo que más me gustó de mi Dance Party fue...</strong></p><p><strong>En la próxima versión quiero intentar...</strong></p></blockquote>
     <h3>Comprueba tu progreso</h3>` +
    ul([`abrí mi proyecto publicado;`, `le pedí retroalimentación a Buddy de IA (AI Buddy);`, `identifiqué un punto fuerte de mi proyecto;`, `elegí una idea para la siguiente versión;`, `estoy listo para contar brevemente cómo quedó mi proyecto.`]) +
    tnotes(`<p><strong>Tiempo:</strong> 3 minutos.</p><p><strong>Objetivo de la tarjeta:</strong> recibir la retroalimentación final sobre el proyecto publicado y preparar al estudiante para una breve presentación de su resultado.</p><p><strong>Qué debe hacer el tutor:</strong> mostrar cómo abrir Buddy de IA (AI Buddy) junto al proyecto publicado y enviar el mensaje sugerido. Ayudar a los estudiantes a identificar solo dos partes de la respuesta: un punto fuerte y una idea para mejorar en la siguiente versión.</p><p><strong>En qué fijarse:</strong> en esta tarjeta los estudiantes no necesitan modificar ni volver a publicar el proyecto. La retroalimentación sirve para reflexionar y pensar en el siguiente paso, no para hacer otra mejora grande al final de la clase.</p><p><strong>Si surge algún problema:</strong> si Buddy de IA (AI Buddy) no se abre o no responde, pide al estudiante que mencione por su cuenta un aspecto positivo de su proyecto y una idea para mejorarlo en el futuro.</p><p><strong>Criterio de finalización:</strong> el estudiante puede mencionar un punto fuerte de su Dance Party y una idea que le gustaría probar en la siguiente versión.</p>`) +
    fileAnswer()
  },
  { title:`Festival Dance Party`, html:
    banner('https://mp.kodland.org/task_description_materials/ed218de1-8861-4735-a444-569c16d1a7d6.png') +
    `<h1>El desfile de Dance Party</h1>
     <blockquote><p>Al inicio de la clase todos tenían la misma plantilla. Ahora cada persona tiene su propio fondo y un baile que funciona. ¡Veamos qué tan diferentes quedaron sus shows!</p></blockquote>
     <h3>Antes y después</h3>` +
    media('https://mp.kodland.org/task_description_materials/bc32e936-0ca8-4c18-94d0-3d041b667db8.gif', `<h4>Antes</h4>` + ul([`un fondo común;`, `el mismo personaje;`, `bloques separados;`, `el baile con la tecla Espacio todavía no funcionaba.`])) +
    media('https://mp.kodland.org/task_description_materials/013c7f0a-6aec-4517-8596-44288acbb742.gif', `<h4>Después</h4>` + ul([`un fondo propio creado con IA;`, `un baile que funciona con la tecla Espacio;`, `un diseño propio para el show;`, `un proyecto publicado.`]), 'right') +
    `<hr>
     <h3>Cuando muestres tu proyecto</h3>` +
    ol([`Activa la pantalla compartida.`, `Abre tu Dance Party publicado.`, `Muestra el baile con la tecla Espacio.`, `Cuenta brevemente sobre tu show.`]) +
    `<blockquote><p><strong>Mi show se llama...</strong></p><p><strong>Se realiza en...</strong></p><p><strong>En mi baile el personaje...</strong></p></blockquote>
     <hr>
     <h3>Cuando otra persona muestre su proyecto</h3>` +
    media('https://mp.kodland.org/task_description_materials/b0893f65-734e-4d92-94d1-90a558d62785.png', ol([`Observa con atención el baile.`, `Encuentra un detalle interesante del proyecto.`, `Di o escribe: <strong>«Me gustó que...»</strong>`, `Menciona un detalle concreto: el fondo, el movimiento, el efecto o el diálogo.`])) +
    example(`Ejemplos de buenos comentarios`, `<p>Me gustó cómo el personaje se mueve con la música.</p><p>Me gustó el fondo mágico: el personaje se ve muy bien en él.</p><p>Me gustó que los movimientos del personaje están unidos en un solo baile.</p>`) +
    `<blockquote><p>No elegimos el mejor proyecto. Observamos las ideas interesantes de diferentes creadores.</p></blockquote>
     <hr>
     <h3>¿Qué cambió en tu proyecto?</h3>` +
    test(`¿Qué apareció en Dance Party durante la clase?`, [`Un baile que funciona con la tecla Espacio`, `Un fondo propio creado con IA`, `Una versión publicada del proyecto`, `Un proyecto nuevo vacío sin personaje`], true) +
    tnotes(`<p><strong>Tiempo:</strong> 4 minutos.</p><p><strong>Objetivo de la tarjeta:</strong> mostrar el cambio de una plantilla común a diferentes versiones creadas por los estudiantes, darles experiencia en una presentación breve y practicar comentarios positivos y específicos.</p><p><strong>Qué debe hacer el tutor:</strong> primero comparar brevemente las imágenes de «antes» y «después». Luego elegir 2 o 3 voluntarios para mostrar sus proyectos. Cada demostración debe durar aproximadamente un minuto: abrir el proyecto, iniciar el baile con Espacio y decir tres frases cortas siguiendo el ejemplo.</p><p>Después de cada presentación, pedir al grupo un comentario concreto usando la fórmula <strong>«Me gustó que...»</strong>. Antes de la primera presentación, dar un ejemplo de comentario mencionando un detalle visible del proyecto.</p><p><strong>En qué fijarse:</strong> no comparar los proyectos diciendo cuál es «mejor» o «peor». Dirigir la atención del grupo hacia las decisiones del creador: el fondo, los movimientos, los efectos, los diálogos y la combinación de elementos. No comentar errores técnicos delante de todo el grupo.</p><p><strong>Participación sin presión:</strong> el estudiante puede mostrar el proyecto y hablar por sí mismo, compartir solo la pantalla o pedir al tutor que lea las frases preparadas. Si falta tiempo, hacer una demostración en vivo de dos proyectos y pedir al resto que escriba un comentario en el chat.</p><p><strong>Relación con Buddy de IA (AI Buddy):</strong> si quiere, el estudiante puede mencionar el punto fuerte que identificó Buddy de IA (AI Buddy), pero no es necesario leer toda la respuesta.</p><p><strong>Criterio de finalización:</strong> el grupo vio varias versiones diferentes de Dance Party, quienes presentaron mostraron un baile funcional y los compañeros dieron comentarios positivos y concretos.</p>`)
  },
  { title:`¡Tu primera versión está lista!`, html:
    banner('https://mp.kodland.org/task_description_materials/52c8f5af-e602-434f-8ede-614ef9ccdcfd.png') +
    `<h1>¡Tu primera versión está lista!</h1>
     <blockquote><p>Hoy creaste tu primer Dance Party: uniste bloques para crear un baile funcional, diseñaste un fondo con IA y publicaste tu proyecto.</p></blockquote>
     <h3>Ahora sabes cómo</h3>` +
    ul([`abrir un proyecto preparado y comprobar qué funciona en él;`, `entender qué hacen los bloques principales de Scratch;`, `unir comandos en un script que funciona;`, `iniciar un baile al presionar una tecla;`, `crear un fondo usando IA;`, `revisar un proyecto y corregir errores sencillos;`, `publicar un proyecto y compartir el enlace;`, `mostrar tu trabajo y apoyar a otros creadores.`]) +
    `<img class="center-img" src="https://mp.kodland.org/task_description_materials/f562bf0a-8703-4812-9784-4d9f65150b49.png" alt="Habilidades después de crear el proyecto Dance Party">
     <hr>
     <h3>Hablemos juntos</h3>` +
    ol([`¿Qué fue lo más interesante de crear Dance Party?`, `¿Qué parte del proyecto quedó exactamente como la imaginabas?`, `¿Qué te gustaría probar en una próxima versión?`]) +
    `<blockquote><p><strong>Lo que más me gustó fue...</strong></p><p><strong>Estoy especialmente orgulloso de...</strong></p><p><strong>La próxima vez quiero...</strong></p></blockquote>
     <hr>
     <h3>Tu resultado</h3>
     <p><select class="pick"><option>Elige una respuesta</option><option>Creé mi proyecto y entendí cómo funcionan sus partes principales</option><option>Necesité ayuda, pero mi proyecto funciona</option><option>Quiero seguir experimentando con movimientos y efectos</option></select></p>` +
    banner('https://mp.kodland.org/task_description_materials/f336a01d-591d-4d84-b3f5-d6880724fc00.png') +
    tnotes(`<p><strong>Tiempo:</strong> 2 minutos.</p><p><strong>Objetivo de la tarjeta:</strong> reforzar el resultado de aprendizaje de la clase y realizar una breve reflexión oral.</p><p><strong>Qué debe hacer el tutor:</strong> mencionar brevemente los principales logros de la clase, sin leer toda la lista de forma detallada. Después, hacer las preguntas de la pantalla y recoger algunas respuestas de forma oral o por chat.</p><p><strong>En qué fijarse:</strong> no es necesario pedir una respuesta a cada estudiante. Son suficientes entre 3 y 5 comentarios breves. Algunos aspectos interesantes pueden ser unir bloques, iniciar el baile, crear el fondo con IA, publicar o mostrar el proyecto.</p><p><strong>Si al estudiante le cuesta responder:</strong> invitarlo a completar una de estas frases: «Lo que más me gustó fue...», «Estoy especialmente orgulloso de...» o «La próxima vez quiero...».</p><p><strong>Importante:</strong> no comenzar una nueva mejora del proyecto en esta tarjeta. Las ideas de los estudiantes pueden guardarse para una próxima versión de Dance Party o para la tarea.</p><p><strong>Criterio de finalización:</strong> los estudiantes entienden qué proyecto crearon, pueden mencionar una parte exitosa de su trabajo y una idea para el siguiente paso.</p>`)
  },
  { title:`Actividad para casa`, html:
    banner('https://mp.kodland.org/task_description_materials/3f6fdee4-a935-4178-a73d-e85ac0ab0f13.png') +
    `<h1>Tarea en casa</h1>
     <blockquote><p>Crea una nueva versión de tu Dance Party: cambia un detalle del segundo baile y envía el enlace al proyecto actualizado.</p></blockquote>
     <h3>Paso 1. Cambia un detalle</h3>
     <p>Abre tu proyecto y elige solo una modificación:</p>` +
    ul([`cambia la distancia del movimiento del personaje;`, `cambia el tiempo de espera;`, `cambia el ángulo de giro;`, `inventa una nueva frase para el personaje;`, `agrega un cambio de disfraz o un efecto gráfico.`]) +
    `<blockquote><p>Un solo cambio es suficiente. Lo importante es entender cómo modificó el baile.</p></blockquote>
     <hr>
     <h3>Paso 2. Revisa el proyecto</h3>` +
    ol([`Presiona la bandera verde.`, `Prueba el primer baile con la tecla Espacio.`, `Prueba el baile modificado con la flecha derecha.`, `Asegúrate de que el personaje no salga del escenario y vuelva a su estado normal.`]) +
    `<hr>
     <h3>Paso 3. Publica la nueva versión</h3>` +
    ol([`Publica el proyecto actualizado en Spark.`, `Copia el enlace del proyecto.`, `Pégalo en el campo de abajo.`, `Envía la tarea.`]) +
    essay(`Envíame tu enlace para revisarlo`, `Pega tu enlace aquí…`) +
    spoiler(`¿No sabes qué cambiar?`, `<p>Elige la opción más sencilla: cambia las palabras del bloque <strong>decir</strong> o modifica el número de uno de los bloques de movimiento.</p>`) +
    `<hr>
     <h3>Comprueba tu progreso</h3>` +
    ul([`cambié un detalle del segundo baile;`, `probé las dos teclas;`, `el proyecto actualizado funciona;`, `publiqué la nueva versión;`, `envié el enlace del proyecto.`]) +
    tnotes(`<p><strong>Objetivo de la tarea:</strong> reforzar la idea de que cambiar un comando o un valor modifica el comportamiento del proyecto.</p><p><strong>Qué explicar en clase:</strong> el estudiante continúa trabajando en su Dance Party ya creado, no empieza un proyecto nuevo. Debe realizar solo un pequeño cambio en el segundo baile, comprobar el resultado y enviar el enlace de la versión actualizada.</p><p><strong>Resultado mínimo:</strong> se modifica una frase, un número o un comando, el segundo baile se inicia con la flecha derecha, el proyecto está publicado y el enlace fue enviado.</p><p><strong>En qué fijarse al revisar:</strong> el cambio debe notarse al ejecutar el segundo baile. Al mismo tiempo, el primer baile y la música deben seguir funcionando correctamente.</p><p><strong>No exigir:</strong> un fondo nuevo, un tercer baile, nuevos personajes o código complejo. El estudiante puede agregar estos elementos solo si quiere experimentar más.</p><p><strong>Si el enlace no funciona:</strong> pedir al estudiante que compruebe si el proyecto está publicado y que copie nuevamente el enlace de la versión publicada.</p><p><strong>Criterio de finalización:</strong> el enlace abre un Dance Party actualizado en el que se nota un cambio creado por el estudiante en el segundo baile.</p>`)
  }
];

/* =========================================================
   GUIDED TOUR STEPS
   Translate title, text and btn. Keep target / accept / read / side / wide / next / last as they are.
   ========================================================= */
CONTENT.guide = [
  { title:'Bienvenido al aula', next:true,
    text:'En el <b>Nuevo Modelo Educativo (EM)</b>, todo lo que necesitas para dar una clase está <b>dentro de la propia clase</b>, en Classroom. No hay wiki ni documentos aparte: las indicaciones de cada clase acompañan a las tarjetas de la clase.<br><br>Vamos a abrirlas.' },
  { title:'Abre los materiales de la clase', target:'.tb-group', accept:['openTasks','toggleDropdown'],
    text:'Los materiales de la clase están en <b>Assignments</b>. Haz clic en <b>Assignments</b>: se vuelve azul cuando pasas el mouse por encima.' },
  { title:'Elige la primera tarjeta', target:'#dd-0', accept:['pickActivity:0'],
    text:'Esta es la lista de <b>actividades</b> de la clase, en orden. Es la primera clase de un curso de Creator Lab.<br><br>Haz clic en la primera: <b>«¡Comienza la primera misión de Creator Lab!»</b>' },
  { title:'Dos vistas de la misma tarjeta', next:true, wide:true,
    text:'Antes de seguir, es importante entender <b>qué ves tú</b> y <b>qué ve Sofía</b>. Las dos están en la misma tarjeta, pero no en la misma pantalla:' +
      `<div class="views">
        <div class="view"><div class="vh">👩‍🏫 Lo que ves <b>tú</b></div>
          <div class="mock"><div class="m-tn">Notas para el tutor<small>solo para ti</small></div><div class="mk-c">Contenido de la tarjeta</div></div></div>
        <div class="view"><div class="vh">👧 Lo que ve <b>Sofía</b></div>
          <div class="mock"><div class="mk-c">Contenido de la tarjeta</div></div></div>
      </div>` +
      '<ul class="c-list"><li>El recuadro con <b>borde naranja punteado</b> son las <b>notas para el tutor</b>. Están escritas <b>dentro de la tarjeta</b>, junto con el contenido.</li><li>Solo las ve el tutor. Sofía <b>nunca</b> ve las notas para el tutor, solo el contenido de la tarjeta. No se las leas en voz alta.</li><li>Cada tarjeta tiene sus propias notas, así que son lo primero que debes revisar antes de cada tarjeta y durante ella.</li></ul>' },
  { title:'Las primeras notas para el tutor', target:'#taskScroll', side:true, read:{ scope:'#tn-first' },
    text:'Las notas de la <b>primera tarjeta</b> son las más detalladas de la clase: la descripción general, el objetivo y el resultado clave, tu <b>rol</b>, los <b>aspectos importantes</b>, cómo <b>cerrar</b> la clase y qué viene después.<br><br>En la primera clase de un curso suele haber también un <b>video explicativo</b>: míralo cuando prepares la clase.<br><br><b>Abre todas las secciones</b> y <b>desplázate hasta el final de las notas</b> para continuar.' },
  { title:'Lo que ve Sofía', target:'#taskScroll', side:true, read:{},
    text:'Debajo de las notas está la tarjeta tal como la verá <b>Sofía</b>: la imagen de portada, el título, la historia y las instrucciones para ella.<br><br>Desplázate por <b>toda la tarjeta</b>. El botón Siguiente se desbloquea cuando llegas al final.' },
  { title:'Lead the group', target:'#leadToggle', accept:['toggleLead'],
    text:'Ahora activa <b>Lead the group</b>. Solo tú tienes este interruptor; los estudiantes no.' +
      `<div class="lead-demo">
        <div><span class="ld-sw"></span><b>OFF</b> — pasas a otra tarjeta o te desplazas, y Sofía se queda donde estaba. Puede que esté mirando otra cosa.</div>
        <div><span class="ld-sw on"></span><b>ON</b> — cada tarjeta que abres y cada desplazamiento que haces, Sofía lo ve al mismo tiempo.</div>
      </div>` +
      'Haz clic en el interruptor: se vuelve azul cuando está activado.' },
  { title:'Sofía te está siguiendo', target:'.vt.student', next:true,
    text:'<b>Lead the group</b> está activado ✅ Mira la imagen de Sofía: ahora dice <b>Following the teacher</b>.<br><br>A partir de ahora:<ul class="c-list"><li>Sofía tiene abierta la <b>misma tarjeta</b> que tú y ve la misma posición de desplazamiento, sin las notas para el tutor.</li><li>Puede hacer clic en <b>Work independently</b> para explorar por su cuenta. Entonces ve un aviso que indica dónde estás tú, con un botón <b>Return</b>.</li></ul>' },
  { title:'Siguiente tarjeta', target:'#btnNext', accept:['nextTask'],
    text:'La flecha que apunta a la derecha te lleva a la <b>siguiente tarjeta</b>. Como Lead the group está activado, Sofía pasa contigo. Haz clic en ella.' },
  { title:'Notas en cada tarjeta', target:'#taskScroll', side:true, read:{},
    text:'Esta tarjeta da la bienvenida al grupo. Además del contenido para Sofía, tiene sus propias <b>notas para el tutor</b> al final: son más cortas que las primeras.<br><br>Normalmente te indican el <b>tiempo</b> de la tarjeta, su <b>objetivo</b>, <b>qué debes hacer</b> y <b>a qué prestar atención</b>.<br><br>Lee la tarjeta hasta el final, incluidas las notas para el tutor.' },
  { title:'Sigue avanzando', target:'#btnNext', accept:['nextTask'],
    text:'Haz clic en <b>Next task</b> para pasar a la siguiente tarjeta.' },
  { title:'Elementos interactivos', side:true, target:'#taskScroll', read:{}, last:true, btn:'Finalizar ✓',
    text:'Las tarjetas también pueden incluir elementos interactivos para el estudiante, como el <b>selector</b> de esta tarjeta. Sofía lo responde en su propia copia de la tarjeta, mientras tú conservas las notas para el tutor.<br><br>Desplázate hasta el final de la tarjeta y lee las notas para el tutor: siguen la misma estructura que en la tarjeta anterior.<br><br>¡Eso es todo lo que necesitas saber sobre el formato de las clases del EM!' }
];

/* =========================================================
   FINISH SCREEN (the completion code is added by the page)
   ========================================================= */
CONTENT.finish = {
  kicker: 'Guía completada',
  title: '🎓 Así es una clase del EM en Classroom',
  intro: 'Ya viste cómo se ven las clases del nuevo modelo educativo en Classroom y cómo guiar al grupo:',
  steps: [
    'La clase es una serie de <b>tarjetas</b> en <b>Assignments</b>: todas las indicaciones están dentro de la clase.',
    'Las <b>notas para el tutor</b> están dentro de cada tarjeta y solo las ves <b>tú</b>. Los estudiantes nunca las ven.',
    'La <b>primera tarjeta</b> tiene las notas más detalladas: objetivos, tu rol, aspectos clave, cierre y próxima clase y, en la primera clase de un curso, normalmente un video explicativo.',
    'Cada tarjeta siguiente tiene notas más cortas: tiempo, objetivo, qué hacer y a qué prestar atención.',
    '<b>Lead the group</b> hace que los estudiantes sigan la tarjeta que abres y el lugar hasta donde te desplazas.'
  ],
  tip: '<b>Consejo:</b> lee las notas para el tutor de toda la clase <b>antes</b> de darla.',
  codeLabel: '🔑 Tu código de finalización',
  codeHint: 'Cópialo en la capacitación para confirmar que completaste la guía.',
  back: '← Volver a la capacitación',
  closeTab: 'Cierra esta pestaña para volver a la capacitación y luego ingresa allí tu código de finalización.'
};
