/* ============================================================
   Kodland Sparks guide · SPANISH content
   Translate only the text inside quotes / backticks. Keep HTML tags, ${...} placeholders, keys, ids, file names and URLs unchanged.
   ============================================================ */
window.CONTENT = { lang: 'es' };

/* ============================================================
   INTERFACE: the replicated Kodland Sparks platform + guide layer
   ============================================================ */
CONTENT.ui = {
  title: 'Guía de Kodland Sparks',

  /* ---------- top bar ---------- */
  logo: 'Kodland Sparks',
  nav: { feed:'Feed', my:'My projects', publish:'Publish project', studio:'Studio', ai:'AI helper' },

  /* ---------- Feed ---------- */
  feed: {
    bannerTitle: 'Haz que tu perfil sea tuyo',
    bannerText: 'Elige un avatar y un apodo: todos lo verán en tu perfil.',
    bannerBtn: 'Customize profile',
    featured: 'Últimos proyectos destacados',
    feed: 'Feed',
    filter: 'All projects ˅',
    results: '(11.6K resultados)',
    search: '🔍 Apodo o título del proyecto',
    feedbackWanted: 'Feedback wanted'
  },
  // text drawn inside some project thumbnails (fake game screens)
  thumbs: { coins:'🪙 79 coins', play:'▶ PLAY', heroes:'HEROES', armory:'ARMORY', shop:'SHOP', magicLab:'MAGIC LAB', neonRacer:'NEON RACER' },

  /* ---------- a published project (Creeper) ---------- */
  project: {
    title: 'Creeper',
    download: 'Download',
    authorName: 'Mia Torres',
    uploaded: 'Subido el 16 de oct. de 2026',
    desc: '¡¡Se perdió un Creeper con gorro navideño!! ¡¡Ayúdame a encontrarlo!!',
    showTr: 'Show translation',
    fbTitle: 'Retroalimentación publicada',
    fbUpdated: 'Actualizado el 16 de oct. de 2026',
    fbBody: '<p>Mia, creaste un personaje muy reconocible con solo unos pocos píxeles, y el gorro navideño le da a tu Creeper un toque divertido y original.</p><p>Tu Creeper festivo está lleno de personalidad y creatividad: ¡se nota que disfrutas inventando personajes únicos!</p>'
  },

  /* ---------- My projects ---------- */
  my: {
    name: 'Alex Tutor',
    friends: 'Amigos',
    friendsTab: 'Amigos (0)',
    subsTab: 'Seguidores (0)',
    noFriends: 'Todavía no tienes amigos',
    privateTag: 'Proyecto privado',
    cardTitle: 'Dibujo'
  },

  /* ---------- Publish project ---------- */
  publish: {
    title: 'Nuevo <span>proyecto</span>',
    sub: 'Elige un tipo de proyecto, completa los datos y decide quién puede verlo.',
    typeLabel: 'Tipo de proyecto',
    // [icon, name, description] — keep the first item (icon name) unchanged
    types: [
      ['image', 'Image', 'Sube un dibujo, una imagen, un GIF o un WebP.'],
      ['python', 'Python', 'Pega tu código de Python: los visitantes pueden ejecutarlo en el navegador.'],
      ['game', 'Game or Web App', 'Un .sb3 de Scratch o un .zip con Unity/Godot/HTML/Python.'],
      ['creeper', 'Minecraft skin', 'Sube una skin de 64×64 y muéstrala en un modelo 3D.'],
      ['book', 'Story', 'Una página con texto, imágenes y contenido incrustado'],
      ['globe', 'Embed', 'Pega un enlace de YouTube, Vimeo, Sketchfab, Tinkercad o Canva.'],
      ['github', 'GitHub', 'Vincula un repositorio público de GitHub.'],
      ['box', 'Other', 'Si no encaja ninguno de los tipos anteriores, como un juego de Roblox o una app de Play Market.']
    ],
    titleLabel: 'Título',
    titleHint: 'Quedan 30 caracteres',
    descLabel: 'Descripción',
    descHint: 'Quedan 240 caracteres',
    fileLabel: 'Dibujo',
    chooseFile: 'Choose file',
    fileHint: 'PNG, JPG, WebP o GIF de hasta 5 MB',
    section: '📁 Sección',
    noSection: 'Sin sección',
    sectionHint: 'Las secciones ayudan a agrupar tus proyectos en tu página de perfil.',
    reactions: 'Reacciones',
    reactionsHint: 'Elige qué reacciones pueden dejar los visitantes en este proyecto.',
    heartAlways: '💖 El corazón siempre está disponible',
    appearance: 'Apariencia',
    appearanceHint: 'Elige un color de marco para destacar la tarjeta de tu proyecto en el Feed.',
    frameSlots: '5 de 5 espacios de marco disponibles',
    frameDefault: '⚫ Predeterminado',
    common: 'Común',
    commonFrames: ['🔵 Cielo', '🟢 Esmeralda', '🟣 Violeta', '🔴 Rojo'],
    rare: 'Raro',
    rareFrames: ['Lavanda', 'Rosa', 'Gris'],
    visibility: 'Visibilidad',
    // [name, description] — Public · Friends only · Only me
    vis: [
      ['Public', 'Aparece en el Feed y en tu portafolio público.'],
      ['Friends only', 'Lo ven tus amigos, tus profesores y tú.'],
      ['Only me', 'Solo lo ves tú en tu portafolio.']
    ],
    // [label, description] — the three switches
    toggles: [
      ['Request feedback', 'Otros autores podrán dejar retroalimentación estructurada en tu proyecto. Solo para proyectos públicos.'],
      ['Acepto que Kodland Sparks use este proyecto en promociones', 'Por ejemplo, podría aparecer en nuestras redes sociales, en anuncios o en la página principal para mostrar a otros niños lo que se puede hacer aquí. Puedes cambiarlo cuando quieras.'],
      ['Participar en la selección de Discord', 'Una vez al día publicamos los mejores proyectos del día en nuestro servidor de Discord. Deja esta opción activada y el tuyo también podrá ser elegido. Solo para proyectos públicos.']
    ],
    publish: 'Publicar'
  },

  /* ---------- Studio: modes and slots ---------- */
  studio: {
    modesTitle: '¿Qué quieres crear?',
    modesSub: 'Elige un modo para empezar.',
    creative: 'Modo Creativo',
    creativeText: 'Crea lo que quieras: juegos, sitios web, arte.',
    challenges: 'Challenges mode',
    challengesText: 'Completa tareas y gana cristales.',
    slotsTitle: 'Creative Studio',
    slotsSub: 'Elige un proyecto para continuar o empieza algo nuevo.',
    slot: n => `Slot ${n}`,
    startHere: 'Empieza aquí',
    comingSoon: 'Próximamente',
    crumbBack: 'My projects'
  },

  /* ---------- Studio: "What will you build?" menu ---------- */
  build: {
    title: '¿Qué vas a construir?',
    sub: 'Elige por dónde empezar.',
    back: '‹ Volver',
    recommended: 'recomendado',
    progGroup: 'Programación y desarrollo',
    mediaGroup: 'Medios y contenido',
    // [name, description] of each starting card
    cards: {
      web: ['Game or web app', 'HTML, CSS, JavaScript o Python'],
      terminal: ['Terminal Python', 'Un programa en la terminal'],
      scratch: ['Scratch', 'Construye con bloques de Scratch'],
      pixel: ['Pixel Art', 'Dibuja píxel por píxel'],
      anim: ['Animation', 'Dibuja fotograma por fotograma'],
      music: ['Music', 'Una pista en una cuadrícula'],
      skin: ['Skin Editor', 'Una skin para un modelo 3D']
    },
    // [heading, description] of each group of templates
    groups: {
      webjs: ['Web App JS', 'Una página web hecha con HTML, CSS y JavaScript. Se ejecuta en la vista previa en vivo: los cambios se ven al instante.'],
      webpy: ['Web App Python', 'Una página web hecha con HTML y CSS, con la lógica en Python. Se ejecuta en la vista previa en vivo: los cambios se ven al instante.'],
      terminal: ['Terminal Python', 'Un programa en un solo archivo de Python. Se ejecuta en la terminal con el botón Play: te comunicas con él usando print() e input().'],
      pixel: ['Pixel Art', 'Dibuja sprites y animaciones píxel por píxel. Elige un tamaño de lienzo para empezar y luego publícalo como imagen o animación.'],
      anim: ['Animation', 'Dibuja una caricatura corta fotograma por fotograma: dibuja cada fotograma, ve el anterior a través de la capa de cebolla (onion skin) y presiona reproducir. Elige un tamaño de lienzo para empezar.'],
      music: ['Music', 'Crea una pista corta en una cuadrícula: pinta una melodía, agrega batería y presiona reproducir.'],
      skin: ['Skin Editor', 'Pinta una skin de Minecraft en un mapa 2D y mira cómo se ajusta a un modelo 3D. La simetría refleja tus trazos en ambos lados.']
    },
    // template buttons (keys are ids — do not change them)
    tpl: {
      webjs:'Empty project', webjsb:'Basic project', alien:'Alien Invaders', calcjs:'Calculator',
      webpy:'Empty project', webpyb:'Basic project', snake:'Snake game', calcpy:'Calculator',
      termempty:'Empty project', guess:'Guess the number',
      px16:'16 × 16', px32:'32 × 32', px64:'64 × 64', px128:'128 × 128',
      an640:'640 × 480', an960:'960 × 720', an1280:'1280 × 960',
      track:'New track', retro:'Retro', tetris:'Tetris', kpop:'K-pop',
      steve:'Steve', alex:'Alex'
    },
    sizeHint: 'Tamaño en píxeles. Puedes cambiarlo más tarde.'
  },

  /* ---------- Studio: editors ---------- */
  editor: {
    // project title shown in the editor bar ('' = empty placeholder)
    titles: { web:'', terminal:'Guess the number', scratch:'', pixel:'', anim:'', music:'Retro', skin:'' },
    myProjects: 'My projects',
    projectTitle: 'Título del proyecto',
    newProject: 'New project',
    publish: 'Publicar',
    // AI tutor panel
    robby: 'Inimitable Robby',
    aiTutor: 'AI tutor',
    chat: 'Chat',
    tasks: 'Tasks',
    greeting: '¡Hola! Soy tu compañero de programación. ¿Qué vas a construir hoy? Pregúntame qué agregar después o cómo mejorar tu código. ¡Hagamos juntos algo genial! 🚀',
    memory: 'Solo recuerdo tus últimos 10 mensajes: si hablamos de algo hace un rato, recuérdamelo brevemente.',
    askTip: 'Pide un consejo...',
    // web app editor
    preview: 'Preview',
    htmlComment: '<!-- Tu HTML va aquí -->',
    // terminal Python editor
    terminal: 'Terminal',
    stop: '▢ Stop',
    termOut: 'Elegí un número del 1 al 100. ¡Intenta adivinarlo!<br>Tu intento:',
    answer: 'Your answer',
    send: '➤ Enviar',
    // Python code shown in the editor: translate only the comment and the text inside "double quotes"
    py: ['import random', '', '# La computadora elige un número del 1 al 100', 'secret = random.randint(1, 100)', 'attempts = 0', '', 'print("Elegí un número del 1 al 100. ¡Intenta adivinarlo!")', '', 'while True:', '    guess = int(input("Tu intento: "))', '    attempts += 1', '', '    if guess < secret:', '        print("¡Muy bajo! Inténtalo de nuevo.")', '    elif guess > secret:', '        print("¡Muy alto! Inténtalo de nuevo.")', '    else:', '        print("¡Lo lograste en", attempts, "intentos!")', '        break'],
    // Scratch editor
    scratch: {
      cats: ['Motion', 'Looks', 'Sound', 'Events', 'Control', 'Sensing', 'Operators', 'Variables', 'My Blocks'],
      code: '▤ Code', costumes: '🖌 Costumes', sounds: '🔊 Sounds', find: 'Find (Ctrl+F)',
      palette: 'Motion',
      blocks: ['move <em>10</em> steps', 'turn ↻ <em>15</em> degrees', 'turn ↺ <em>15</em> degrees', 'go to <em class="ddv">random position ▾</em>', 'go to x: <em>0</em> y: <em>0</em>', 'glide <em>1</em> secs to <em class="ddv">random position ▾</em>', 'glide <em>1</em> secs to x: <em>0</em> y: <em>0</em>', 'point in direction <em>90</em>'],
      sprite: 'Sprite', spriteName: 'Sprite1', size: 'Size', direction: 'Direction', stage: 'Stage'
    },
    // drawing editors (pixel art, animation, skin)
    draw: {
      draw: 'DRAW', brush: 'BRUSH SIZE', shade: 'SHADE &amp; DITHER', canvas: 'CANVAS', history: 'HISTORY',
      dither: 'DITHER', view: 'VIEW', exportL: 'Export', map2d: '2D map',
      speed: 'Speed', firstFrame: 'Dibuja el primer fotograma y luego presiona +'
    },
    // music editor
    music: { track:'Retro ˅', addTrack:'+ Track', tempo:'Tempo', bpm:'180 BPM', drums:'Drums', electronic:'Electronic', acoustic:'Acoustic' }
  },

  /* ---------- AI helper ---------- */
  ai: {
    newChat: '+ New chat',
    keep: 'Guardo tus últimos 5 chats, pero recuerdo los datos importantes de ellos.',
    memory: 'Lo que recuerdo de ti',
    credits: 'Quedan 1000 de 1000 créditos',
    pictures: '0 de 6 imágenes hoy',
    resets: 'Se reinicia a las 00:00 UTC',
    name: 'Spark Aiko',
    role: 'AI helper',
    hello: '¡Hola! Soy Aiko, tu asistente de IA. Pregúntame lo que quieras sobre tus proyectos,<br>tu código o tus ideas, o elige una opción de abajo.',
    chips: ['Ayúdame a pensar una idea para un juego', 'Explícame el error de mi código', 'Me trabé, ¿qué hago ahora?', 'Dibújame un personaje'],
    ask: 'Pregúntame lo que quieras...'
  },

  /* ---------- Rewards drawer (crystals) ---------- */
  rewards: { title:'REWARDS', rarity:'COMMON', hint:'Haz clic en el cofre para abrirlo' },

  /* ---------- Coach card (guide layer) ---------- */
  coach: {
    step: (n, total) => `Guía de Sparks · ${n}/${total}`,
    hint: '👆 Haz clic en el elemento resaltado',
    next: 'Siguiente →',
    backToMenu: '<br><br>Presiona <b>Siguiente</b> para volver al menú de proyectos.'
  },

  /* ---------- Finish modal ---------- */
  finish: {
    kicker: 'Guía completada',
    title: '🎓 Ya conoces Kodland Sparks',
    intro: 'Recorriste la plataforma que usan tus estudiantes:',
    items: [
      '<b>Feed</b>: los proyectos de los compañeros, con reacciones y retroalimentación de la IA.',
      '<b>My projects</b>: todo lo que guardaron o publicaron tutores y estudiantes.',
      '<b>Publish project</b>: compartir un proyecto terminado, elegir quién lo ve y ganar recompensas.',
      '<b>Studio</b>: el Modo Creativo para crear código (aplicaciones web, Python, Scratch), dibujos, animaciones, música y skins, y el Challenges mode para ganar cristales.',
      '<b>AI helper</b> y <b>AI tutor</b>: orientan y dan consejos, pero <b>la IA propone, el autor decide</b>.'
    ],
    codeLabel: '🔑 Tu código de finalización',
    codeHint: 'Cópialo en la capacitación para confirmar que completaste la guía.',
    back: '← Volver a la capacitación',
    closeMsg: 'Cierra esta pestaña para volver a la capacitación y luego ingresa allí tu código de finalización.'
  },

  /* ---------- Welcome screen ---------- */
  welcome: {
    kicker: 'Nuevo Modelo Educativo · Capacitación para tutores',
    title: 'Guía de <span>Kodland Sparks</span>',
    lead: 'Esta guía te lleva de recorrido por <b>Kodland Sparks</b>, la plataforma donde tus estudiantes publican y construyen sus proyectos. Vas a moverte por la plataforma tú mismo y a hacer clic donde te indique la guía.',
    seeTitle: 'Qué vas a ver',
    see: [
      'El <b>Feed</b>: cómo los estudiantes ven los proyectos de los demás y reaccionan a ellos, y la retroalimentación de la IA que reciben.',
      '<b>My projects</b> y <b>Publish project</b>: dónde se guardan los trabajos y cómo se publica un proyecto terminado.',
      '<b>Studio</b>: lo que los estudiantes construyen en clase —código (aplicaciones web, Python, Scratch), dibujos, animaciones, música y skins— y el Challenges mode.',
      'El <b>AI helper</b> y los <b>cristales</b> que ganan los estudiantes.'
    ],
    howTitle: 'Cómo usarla',
    howText: 'Esto es una guía, no una simulación de práctica: no hay decisiones que tomar ni nada que perder. Haz clic en el elemento resaltado en cada pantalla, o presiona <b>Siguiente</b> cuando el paso te pida leer.',
    start: 'EMPEZAR LA GUÍA →'
  }
};

/* ============================================================
   FEED CARDS: title and project type of each card, in order
   ============================================================ */
CONTENT.cards = {
  featured: [
    { t:'Creeper', type:'PNG' },
    { t:'Galaxy Gem Hunter', type:'Web App' },
    { t:'Survivor Island', type:'Web App' },
    { t:'Magic Lab', type:'Scratch' },
    { t:'Neon Racer', type:'Web App' },
    { t:'Mini Snake', type:'Python' }
  ],
  feed: [
    { t:'Crystal Catcher', type:'Scratch' },
    { t:'My Pet Shop', type:'Web App' },
    { t:'Pixel Garden', type:'PNG' },
    { t:'Space Quiz', type:'Python' },
    { t:'Chill Beats', type:'Music' },
    { t:'Dragon Flight', type:'GIF' }
  ]
};

/* ============================================================
   GUIDED TOUR: title and text of the 44 steps, in order
   ============================================================ */
CONTENT.steps = [
  /* 1 */ { title:'Conoce Kodland Sparks',
    text:'<b>Kodland Sparks</b> es la plataforma donde los estudiantes <b>publican sus proyectos</b>, siguen aprendiendo entre clases y reciben retroalimentación de sus compañeros y de un mentor de IA.<br><br>La barra superior lo tiene todo: <b>Feed</b>, <b>My projects</b>, <b>Publish project</b>, <b>Studio</b>, el <b>AI helper</b> y los <b>cristales</b>. Vamos a visitar cada uno.' },
  /* 2 */ { title:'El Feed',
    text:'El <b>Feed</b> es la página de inicio: muestra los proyectos que publicaron los estudiantes. Cada tarjeta muestra el <b>tipo de proyecto</b> (Web App, Scratch, PNG, Python…), las reacciones que recibió y su autor.<br><br><b>Feedback wanted</b> significa que el autor pidió retroalimentación. Debajo de los proyectos destacados, el Feed muestra todos los proyectos.' },
  /* 3 */ { title:'Abre el proyecto de un compañero',
    text:'Los estudiantes pueden interactuar con los proyectos que publicaron sus compañeros. Haz clic en el proyecto <b>Creeper</b> para abrirlo.' },
  /* 4 */ { title:'Un proyecto publicado',
    text:'Este proyecto es un <b>dibujo</b> (PNG). Los otros tipos se abren de la misma forma: los proyectos de Scratch y web se pueden jugar aquí mismo, y el código de Python se ejecuta en el navegador.' },
  /* 5 */ { title:'Detalles y reacciones',
    text:'Debajo del proyecto puedes <b>descargarlo</b> (Download) y ver su <b>autor</b>, la fecha de subida, las visualizaciones y las <b>reacciones</b> que recibió: 💖 👍 😁 🔥 🦄.<br><br>Las reacciones son la forma más rápida de que los compañeros celebren el trabajo de los demás.' },
  /* 6 */ { title:'Retroalimentación de la IA',
    text:'Los proyectos publicados también pueden recibir <b>retroalimentación escrita de un mentor de IA</b> (aquí, <b>Inimitable Robby</b>). Señala lo que el estudiante hizo bien y lo anima a seguir creando.<br><br>Si un texto está escrito en otro idioma, <b>Show translation</b> lo traduce.' },
  /* 7 */ { title:'My projects',
    text:'Ahora haz clic en <b>My projects</b> en la barra superior.' },
  /* 8 */ { title:'Todo lo que creaste',
    text:'<b>My projects</b> muestra todos los proyectos que se guardaron o publicaron, <b>tuyos como tutor o de un estudiante</b>.<br><br>Cada tarjeta muestra el tipo (aquí, <b>PNG</b>) y si el proyecto es privado. Es donde los estudiantes vuelven para encontrar sus trabajos.' },
  /* 9 */ { title:'Publish project',
    text:'Haz clic en <b>Publish project</b> en la barra superior.' },
  /* 10 */ { title:'Publica un proyecto terminado',
    text:'<b>Publish project</b> sirve para los proyectos que los estudiantes <b>ya hicieron y guardaron en su computadora</b>. Primero eligen el tipo: Image, Python, Game or Web App (un .sb3 de Scratch o un .zip), Minecraft skin, Story, Embed, GitHub u Other.' },
  /* 11 */ { title:'Completa los datos',
    text:'El estudiante agrega un <b>título</b> (30 caracteres), una <b>descripción</b> (240 caracteres) y el <b>archivo</b> (PNG, JPG, WebP o GIF de hasta 5 MB).<br><br>También puede agrupar proyectos en una <b>sección</b> y elegir qué <b>reacciones</b> pueden dejar los visitantes.' },
  /* 12 */ { title:'Elige quién lo ve',
    text:'<b>Apariencia</b> define un color de marco para la tarjeta en el Feed; más adelante se desbloquean otros colores.<br><br><b>Visibilidad</b>: <b>Public</b>, <b>Friends only</b> u <b>Only me</b>.<br><br>Interruptores opcionales: <b>Request feedback</b>, permitir que Kodland Sparks use el proyecto en promociones y la <b>selección de Discord</b> diaria.' },
  /* 13 */ { title:'Publicar',
    text:'Al presionar <b>Publicar</b> se comparte el proyecto. Publicar puede <b>dar recompensas</b>: el botón muestra el ícono del cristal. Veremos los cristales al final.' },
  /* 14 */ { title:'Studio',
    text:'Ahora, la parte que más usan los estudiantes en clase. Haz clic en <b>Studio</b>.' },
  /* 15 */ { title:'Dos modos',
    text:'<b>Studio</b> tiene dos modos:<br><br>• <b>Modo Creativo</b>: crea lo que quieras —juegos, sitios web, arte— desde cero o a partir de una base.<br>• <b>Challenges mode</b>: completa tareas y <b>gana cristales</b>.' },
  /* 16 */ { title:'Modo Creativo',
    text:'Haz clic en <b>Modo Creativo</b>.' },
  /* 17 */ { title:'Espacios de proyecto',
    text:'El <b>Creative Studio</b> guarda los proyectos en los que trabajan los estudiantes en <b>espacios</b> (Slots). Los espacios 1 a 3 están abiertos; los espacios 4 a 6 llegarán pronto.<br><br>Haz clic en <b>Slot 1</b> para empezar un proyecto nuevo.' },
  /* 18 */ { title:'¿Qué vas a construir?',
    text:'Los estudiantes eligen por dónde empezar:<br>• <b>Programación y desarrollo</b>: Game or web app, Terminal Python, Scratch.<br>• <b>Medios y contenido</b>: Pixel Art, Animation, Music, Skin Editor.<br><br>Lo que usan depende de su curso. Haz clic en <b>Game or web app</b>.' },
  /* 19 */ { title:'Aplicación web: elige un punto de partida',
    text:'Una aplicación web se construye con <b>HTML, CSS y JavaScript</b> (Web App JS), o con HTML y CSS y la lógica en <b>Python</b> (Web App Python).<br><br>Los estudiantes empiezan desde un <b>Empty project</b> o desde una base, como Alien Invaders o Snake game. Haz clic en <b>Empty project</b> en Web App JS.' },
  /* 20 */ { title:'El editor: vista previa y código',
    text:'Arriba, la <b>Preview</b> muestra el resultado en vivo: los cambios aparecen al instante. Debajo están las pestañas de código: <b>HTML</b>, <b>CSS</b> y <b>JS</b>.' },
  /* 21 */ { title:'El AI tutor',
    text:'A la derecha, el <b>AI tutor</b> (Inimitable Robby) es un compañero de programación con una pestaña de <b>Chat</b> y otra de <b>Tasks</b>. Los estudiantes le piden un consejo o cómo mejorar su código.<br><br>Recuerda: <b>la IA propone, el autor decide</b>. Ayuda, pero no construye el proyecto por ellos.' },
  /* 22 */ { title:'Guardar, poner nombre y publicar',
    text:'La barra superior muestra el <b>espacio</b>, un botón para guardar y el <b>título del proyecto</b>. A la derecha: <b>New project</b>, botones para abrir, subir y descargar un proyecto, y <b>Publicar</b>, que lo comparte en el Feed.' },
  /* 23 */ { title:'Empieza otro proyecto',
    text:'Veamos otros tipos de proyectos. Haz clic en <b>New project</b>.' },
  /* 24 */ { title:'Terminal Python',
    text:'<b>Terminal Python</b> es un programa que se ejecuta en una terminal. Haz clic en él.' },
  /* 25 */ { title:'Empieza desde una base',
    text:'Un programa de Python está en un solo archivo, se ejecuta con el botón <b>Play</b> y se comunica con el usuario con <code>print()</code> e <code>input()</code>.<br><br>Haz clic en <b>Guess the number</b>.' },
  /* 26 */ { title:'Un proyecto de Python',
    text:'El programa se ejecuta en la <b>terminal</b> negra: muestra mensajes y espera la respuesta del jugador en el cuadro <b>Your answer</b>. <b>Run</b> / <b>Stop</b> lo inicia y lo detiene, y el <b>código de Python</b> está justo debajo. El AI tutor está a la derecha, como en todos los editores de código.' + CONTENT.ui.coach.backToMenu },
  /* 27 */ { title:'Scratch',
    text:'<b>Scratch</b> permite a los estudiantes construir con bloques de Scratch. Haz clic en él.' },
  /* 28 */ { title:'Un proyecto de Scratch',
    text:'El <b>editor de Scratch</b> dentro de Kodland Sparks: las <b>categorías y la paleta de bloques</b> a la izquierda, el <b>área de código</b> en el centro y el <b>escenario</b> (Stage) con el sprite a la derecha. También están las pestañas <b>Costumes</b> y <b>Sounds</b>. El AI tutor espera en el botón redondo de la derecha.' + CONTENT.ui.coach.backToMenu },
  /* 29 */ { title:'Pixel Art',
    text:'Para dibujar, los estudiantes pueden usar <b>Pixel Art</b>: dibujan píxel por píxel. Haz clic en él.' },
  /* 30 */ { title:'Elige un tamaño de lienzo',
    text:'Eligen un <b>tamaño de lienzo</b>; el recomendado es <b>32 × 32</b>. El resultado se puede publicar como imagen o como animación.<br><br>Haz clic en <b>32 × 32</b>.' },
  /* 31 */ { title:'Un proyecto de dibujo',
    text:'El <b>editor de pixel art</b>: herramientas de dibujo, tamaños de pincel, sombreado, colores y deshacer a la izquierda, el <b>lienzo</b> en el centro y los <b>fotogramas</b> abajo para convertir el dibujo en una animación.' + CONTENT.ui.coach.backToMenu },
  /* 32 */ { title:'Animation',
    text:'<b>Animation</b> permite a los estudiantes dibujar una caricatura corta fotograma por fotograma. Haz clic en él.' },
  /* 33 */ { title:'Elige un tamaño de lienzo',
    text:'Los lienzos de animación vienen en tres tamaños; el recomendado es <b>960 × 720</b>. Haz clic en él.' },
  /* 34 */ { title:'Un proyecto de animación',
    text:'Los estudiantes dibujan cada <b>fotograma</b>, ven el anterior a través de la <b>capa de cebolla</b> (onion skin) y presionan reproducir para ver la animación. Pueden cambiar la velocidad y repetirla en bucle.' + CONTENT.ui.coach.backToMenu },
  /* 35 */ { title:'Music',
    text:'<b>Music</b> permite a los estudiantes crear una pista corta en una cuadrícula. Haz clic en él.' },
  /* 36 */ { title:'Empieza una pista',
    text:'Pueden empezar un <b>New track</b> o partir de una base: Retro, Tetris o K-pop. Haz clic en <b>Retro</b>.' },
  /* 37 */ { title:'Un proyecto de música',
    text:'Los estudiantes <b>pintan una melodía</b> en la cuadrícula, agregan <b>pistas</b> y <b>batería</b>, cambian el <b>tempo</b> y presionan reproducir.' + CONTENT.ui.coach.backToMenu },
  /* 38 */ { title:'Skin Editor',
    text:'<b>Skin Editor</b> es para Minecraft: los estudiantes pintan una skin para un modelo 3D. Haz clic en él.' },
  /* 39 */ { title:'Elige un personaje',
    text:'Empiezan desde <b>Steve</b> o <b>Alex</b>. Haz clic en <b>Steve</b>.' },
  /* 40 */ { title:'Un proyecto de skin',
    text:'La skin se pinta sobre un <b>modelo 3D</b> o sobre el <b>mapa 2D</b> (2D map), y la simetría refleja los trazos en ambos lados. Cuando está lista, se puede <b>exportar</b> (Export) como PNG o MCPACK.' },
  /* 41 */ { title:'AI helper',
    text:'El botón verde <b>AI helper</b> de la barra superior abre un chat. Haz clic en él.' },
  /* 42 */ { title:'Pregúntale a Aiko',
    text:'<b>Aiko</b> es el asistente de IA de los estudiantes: pueden preguntarle sobre sus proyectos, su código o sus ideas, o elegir una sugerencia como <i>Explícame el error de mi código</i> o <i>Me trabé, ¿qué hago ahora?</i><br><br>Recuerda los datos importantes de los últimos chats, y los estudiantes pueden ver y borrar esas notas.' },
  /* 43 */ { title:'Cristales',
    text:'El contador morado muestra los <b>cristales</b> que ganó el estudiante. Haz clic en él.' },
  /* 44 */ { btn:'Finalizar ✓', title:'Recompensas',
    text:'Este es el panel de <b>recompensas</b> (Rewards). Los estudiantes ganan cristales al completar tareas en el <b>Challenges mode</b> y al publicar proyectos, y abren un <b>cofre</b> para ver qué ganaron.<br><br>Todavía no hay ninguno, así que el contador muestra 0.' }
];
