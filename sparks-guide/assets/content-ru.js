/* ============================================================
   Kodland Sparks guide · RUSSIAN content
   Translate only the text inside quotes / backticks. Keep HTML tags, ${...} placeholders, keys, ids, file names and URLs unchanged.
   ============================================================ */
window.CONTENT = { lang: 'ru' };

/* ============================================================
   INTERFACE: the replicated Kodland Sparks platform + guide layer
   ============================================================ */
CONTENT.ui = {
  title: 'Гид по Kodland Sparks',

  /* ---------- top bar ---------- */
  logo: 'Kodland Sparks',
  nav: { feed:'Feed', my:'My projects', publish:'Publish project', studio:'Studio', ai:'AI helper' },

  /* ---------- Feed ---------- */
  feed: {
    bannerTitle: 'Сделай профиль своим',
    bannerText: 'Поставь аватар и выбери позывной — его будут видеть все в твоём профиле.',
    bannerBtn: 'Customize profile',
    featured: 'Последние избранные проекты',
    feed: 'Feed',
    filter: 'All projects ˅',
    results: '(11,6 тыс. результатов)',
    search: '🔍 Ник или название проекта',
    feedbackWanted: 'Нужен отзыв'
  },
  // text drawn inside some project thumbnails (fake game screens)
  thumbs: { coins:'🪙 79 монет', play:'▶ ИГРАТЬ', heroes:'ГЕРОИ', armory:'АРСЕНАЛ', shop:'МАГАЗИН', magicLab:'MAGIC LAB', neonRacer:'NEON RACER' },

  /* ---------- a published project (Creeper) ---------- */
  project: {
    title: 'Creeper',
    download: 'Download',
    authorName: 'Mia Torres',
    uploaded: 'Загружено 16 октября 2026',
    desc: 'Creeper в новогодней шапке потерялся!! Помогите его найти!!',
    showTr: 'Show translation',
    fbTitle: 'Опубликованный отзыв',
    fbUpdated: 'Обновлено 16 октября 2026',
    fbBody: '<p>Mia, ты создала очень узнаваемого персонажа всего из нескольких пикселей, а новогодняя шапка делает твоего Creeper весёлым и оригинальным.</p><p>Твой праздничный Creeper полон характера и фантазии — видно, что тебе нравится придумывать необычных персонажей!</p>'
  },

  /* ---------- My projects ---------- */
  my: {
    name: 'Alex Tutor',
    friends: 'Друзья',
    friendsTab: 'Friends (0)',
    subsTab: 'Subscribers (0)',
    noFriends: 'Пока нет друзей',
    privateTag: 'Приватный проект',
    cardTitle: 'Drawing'
  },

  /* ---------- Publish project ---------- */
  publish: {
    title: 'Новый <span>проект</span>',
    sub: 'Выбери тип проекта, заполни данные и реши, кто сможет его увидеть.',
    typeLabel: 'Тип проекта',
    // [icon, name, description] — keep the first item (icon name) unchanged
    types: [
      ['image', 'Image', 'Загрузи рисунок, картинку, GIF или WebP.'],
      ['python', 'Python', 'Вставь свой код на Python — посетители смогут запустить его в браузере.'],
      ['game', 'Game or Web App', '.sb3 из Scratch или .zip с Unity/Godot/HTML/Python.'],
      ['creeper', 'Minecraft skin', 'Загрузи скин 64×64 и покажи его на 3D-модели.'],
      ['book', 'Story', 'Страница с текстом, изображениями и встроенным контентом'],
      ['globe', 'Embed', 'Вставь ссылку на YouTube, Vimeo, Sketchfab, Tinkercad или Canva.'],
      ['github', 'GitHub', 'Добавь ссылку на открытый репозиторий GitHub.'],
      ['box', 'Other', 'Если ни один из типов выше не подходит — например, для игры в Roblox или приложения из Play Market.']
    ],
    titleLabel: 'Название',
    titleHint: 'Осталось 30 символов',
    descLabel: 'Описание',
    descHint: 'Осталось 240 символов',
    fileLabel: 'Рисунок',
    chooseFile: 'Choose file',
    fileHint: 'PNG, JPG, WebP или GIF до 5 МБ',
    section: '📁 Раздел',
    noSection: 'Без раздела',
    sectionHint: 'Разделы помогают группировать проекты на странице профиля.',
    reactions: 'Реакции',
    reactionsHint: 'Выбери, какие реакции зрители смогут оставлять под этим проектом.',
    heartAlways: '💖 Сердечко доступно всегда',
    appearance: 'Оформление',
    appearanceHint: 'Выбери цвет рамки, чтобы выделить карточку проекта в ленте.',
    frameSlots: 'Доступно 5 из 5 слотов для рамок',
    frameDefault: '⚫ Default',
    common: 'Обычные',
    commonFrames: ['🔵 Sky', '🟢 Emerald', '🟣 Violet', '🔴 Red'],
    rare: 'Редкие',
    rareFrames: ['Lavender', 'Pink', 'Gray'],
    visibility: 'Видимость',
    // [name, description] — Public · Friends only · Only me
    vis: [
      ['Public', 'Появляется в ленте и в твоём открытом портфолио.'],
      ['Friends only', 'Видят твои друзья, твои преподаватели и ты.'],
      ['Only me', 'Видишь только ты в своём портфолио.']
    ],
    // [label, description] — the three switches
    toggles: [
      ['Request feedback', 'Другие авторы смогут оставить структурированный отзыв о твоём проекте. Доступно только для публичных проектов.'],
      ['I’m OK with Kodland Sparks using this project in promotions', 'Например, проект может появиться в наших соцсетях, рекламе или на главной странице, чтобы показать другим детям, что здесь можно создать. Это можно изменить в любой момент.'],
      ['Take part in the Discord selection', 'Раз в день мы публикуем лучшие проекты дня на нашем сервере в Discord. Оставь этот переключатель включённым — и твой проект тоже могут выбрать. Только для публичных проектов.']
    ],
    publish: 'Publish'
  },

  /* ---------- Studio: modes and slots ---------- */
  studio: {
    modesTitle: 'Что ты хочешь создать?',
    modesSub: 'Выбери режим, чтобы начать.',
    creative: 'Creative mode',
    creativeText: 'Создавай что угодно — игры, сайты, рисунки.',
    challenges: 'Challenges mode',
    challengesText: 'Выполняй задания и получай кристаллы.',
    slotsTitle: 'Creative Studio',
    slotsSub: 'Выбери проект, чтобы продолжить, или начни новый.',
    slot: n => `Slot ${n}`,
    startHere: 'Начни здесь',
    comingSoon: 'Скоро',
    crumbBack: 'My projects'
  },

  /* ---------- Studio: "What will you build?" menu ---------- */
  build: {
    title: 'Что ты будешь создавать?',
    sub: 'Выбери, с чего начать.',
    back: '‹ Back',
    recommended: 'рекомендуем',
    progGroup: 'Программирование и разработка',
    mediaGroup: 'Медиа и контент',
    // [name, description] of each starting card
    cards: {
      web: ['Game or web app', 'HTML, CSS, JavaScript или Python'],
      terminal: ['Terminal Python', 'Программа в терминале'],
      scratch: ['Scratch', 'Собирай из блоков Scratch'],
      pixel: ['Pixel Art', 'Рисуй пиксель за пикселем'],
      anim: ['Animation', 'Рисуй кадр за кадром'],
      music: ['Music', 'Трек на сетке'],
      skin: ['Skin Editor', 'Скин для 3D-модели']
    },
    // [heading, description] of each group of templates
    groups: {
      webjs: ['Web App JS', 'Веб-страница на HTML, CSS и JavaScript. Работает в окне живого просмотра — изменения видны сразу.'],
      webpy: ['Web App Python', 'Веб-страница на HTML и CSS с логикой на Python. Работает в окне живого просмотра — изменения видны сразу.'],
      terminal: ['Terminal Python', 'Программа в одном файле на Python. Запускается в терминале кнопкой Play — общайся с ней через print() и input().'],
      pixel: ['Pixel Art', 'Рисуй спрайты и анимации пиксель за пикселем. Для начала выбери размер холста, а потом опубликуй результат как изображение или анимацию.'],
      anim: ['Animation', 'Нарисуй короткий мультфильм кадр за кадром: рисуй каждый кадр, смотри на предыдущий сквозь кальку и нажимай Play. Для начала выбери размер холста.'],
      music: ['Music', 'Собери короткий трек на сетке: нарисуй мелодию, добавь ударные и нажми Play.'],
      skin: ['Skin Editor', 'Рисуй скин для Minecraft на 2D-развёртке и смотри, как он ложится на 3D-модель. Симметрия зеркально повторяет штрихи на обеих сторонах.']
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
    sizeHint: 'Размер в пикселях. Его можно изменить позже.'
  },

  /* ---------- Studio: editors ---------- */
  editor: {
    // project title shown in the editor bar ('' = empty placeholder)
    titles: { web:'', terminal:'Guess the number', scratch:'', pixel:'', anim:'', music:'Retro', skin:'' },
    myProjects: 'My projects',
    projectTitle: 'Название проекта',
    newProject: 'New project',
    publish: 'Publish',
    // AI tutor panel
    robby: 'Inimitable Robby',
    aiTutor: 'AI tutor',
    chat: 'Chat',
    tasks: 'Tasks',
    greeting: 'Привет! Я твой помощник по программированию. Что ты сегодня создаёшь? Спроси меня, что добавить дальше или как прокачать код, — давай сделаем что-нибудь крутое вместе! 🚀',
    memory: 'Я помню только твои последние 10 сообщений — если мы говорили о чём-то давно, коротко напомни мне.',
    askTip: 'Попроси подсказку...',
    // web app editor
    preview: 'Preview',
    htmlComment: '<!-- Здесь будет твой HTML -->',
    // terminal Python editor
    terminal: 'Терминал',
    stop: '▢ Stop',
    termOut: 'Я загадал число от 1 до 100. Попробуй угадать!<br>Твой вариант:',
    answer: 'Твой ответ',
    send: '➤ Send',
    // Python code shown in the editor: translate only the comment and the text inside "double quotes"
    py: ['import random', '', '# Компьютер загадывает число от 1 до 100', 'secret = random.randint(1, 100)', 'attempts = 0', '', 'print("Я загадал число от 1 до 100. Попробуй угадать!")', '', 'while True:', '    guess = int(input("Твой вариант: "))', '    attempts += 1', '', '    if guess < secret:', '        print("Слишком мало! Попробуй ещё раз.")', '    elif guess > secret:', '        print("Слишком много! Попробуй ещё раз.")', '    else:', '        print("Угадал! Попыток:", attempts, "— отлично!")', '        break'],
    // Scratch editor
    scratch: {
      cats: ['Движение', 'Внешний вид', 'Звук', 'События', 'Управление', 'Сенсоры', 'Операторы', 'Переменные', 'Другие блоки'],
      code: '▤ Код', costumes: '🖌 Костюмы', sounds: '🔊 Звуки', find: 'Найти (Ctrl+F)',
      palette: 'Движение',
      blocks: ['идти <em>10</em> шагов', 'повернуть ↻ на <em>15</em> градусов', 'повернуть ↺ на <em>15</em> градусов', 'перейти на <em class="ddv">случайное положение ▾</em>', 'перейти в x: <em>0</em> y: <em>0</em>', 'плыть <em>1</em> секунд к <em class="ddv">случайное положение ▾</em>', 'плыть <em>1</em> секунд в точку x: <em>0</em> y: <em>0</em>', 'повернуться в направлении <em>90</em>'],
      sprite: 'Спрайт', spriteName: 'Спрайт1', size: 'Размер', direction: 'Направление', stage: 'Сцена'
    },
    // drawing editors (pixel art, animation, skin)
    draw: {
      draw: 'РИСОВАНИЕ', brush: 'РАЗМЕР КИСТИ', shade: 'ТЕНИ И ДИЗЕРИНГ', canvas: 'ХОЛСТ', history: 'ИСТОРИЯ',
      dither: 'ДИЗЕРИНГ', view: 'ВИД', exportL: 'Export', map2d: '2D map',
      speed: 'Скорость', firstFrame: 'Нарисуй первый кадр, затем нажми +'
    },
    // music editor
    music: { track:'Retro ˅', addTrack:'+ Track', tempo:'Темп', bpm:'180 BPM', drums:'Ударные', electronic:'Electronic', acoustic:'Acoustic' }
  },

  /* ---------- AI helper ---------- */
  ai: {
    newChat: '+ New chat',
    keep: 'Я храню твои последние 5 чатов, но помню из них важные факты.',
    memory: 'What I remember about you',
    credits: 'Осталось 1000 из 1000 кредитов',
    pictures: 'Сегодня 0 из 6 картинок',
    resets: 'Обновляется в 00:00 UTC',
    name: 'Spark Aiko',
    role: 'AI helper',
    hello: 'Привет! Я Aiko, твой ИИ-помощник. Спрашивай что угодно о своих проектах,<br>коде или идеях — или выбери что-нибудь ниже.',
    chips: ['Помоги придумать идею для игры', 'Объясни ошибку в моём коде', 'Я застрял, что делать дальше?', 'Нарисуй мне персонажа'],
    ask: 'Спроси что угодно...'
  },

  /* ---------- Rewards drawer (crystals) ---------- */
  rewards: { title:'НАГРАДЫ', rarity:'ОБЫЧНЫЙ', hint:'Нажми на сундук, чтобы открыть его' },

  /* ---------- Coach card (guide layer) ---------- */
  coach: {
    step: (n, total) => `Гид по Sparks · ${n}/${total}`,
    hint: '👆 Нажмите на выделенный элемент',
    next: 'Далее →',
    backToMenu: '<br><br>Нажмите <b>Далее</b>, чтобы вернуться в меню проектов.'
  },

  /* ---------- Finish modal ---------- */
  finish: {
    kicker: 'Гид пройден',
    title: '🎓 Теперь вы знаете Kodland Sparks',
    intro: 'Вы познакомились с платформой, которой пользуются ваши ученики:',
    items: [
      '<b>Feed</b>: проекты одногруппников с реакциями и отзывами от ИИ.',
      '<b>My projects</b>: всё, что сохранили или опубликовали преподаватели и ученики.',
      '<b>Publish project</b>: публикация готового проекта — можно выбрать, кто его увидит, и получить награды.',
      '<b>Studio</b>: Creative mode — для кода (веб-приложения, Python, Scratch), рисунков, анимаций, музыки и скинов, а Challenges mode — чтобы зарабатывать кристаллы.',
      '<b>AI helper</b> и <b>AI tutor</b>: они направляют и подсказывают, но <b>ИИ предлагает, автор решает</b>.'
    ],
    codeLabel: '🔑 Ваш код завершения',
    codeHint: 'Скопируйте его в обучение, чтобы подтвердить, что вы прошли гид.',
    back: '← Назад к обучению',
    closeMsg: 'Закройте эту вкладку, чтобы вернуться к обучению, и введите там код завершения.'
  },

  /* ---------- Welcome screen ---------- */
  welcome: {
    kicker: 'Новая образовательная модель · Обучение преподавателей',
    title: '<span>Гид</span> по Kodland Sparks',
    lead: 'Этот гид познакомит вас с <b>Kodland Sparks</b> — платформой, на которой ваши ученики создают и публикуют свои проекты. Вы сами будете перемещаться по платформе и нажимать туда, куда указывает гид.',
    seeTitle: 'Что вы увидите',
    see: [
      '<b>Feed</b>: как ученики смотрят проекты друг друга и реагируют на них и какие отзывы получают от ИИ.',
      '<b>My projects</b> и <b>Publish project</b>: где хранятся сохранённые работы и как публикуется готовый проект.',
      '<b>Studio</b>: что ученики создают на уроке — код (веб-приложения, Python, Scratch), рисунки, анимации, музыку и скины, — а также режим Challenges mode.',
      '<b>AI helper</b> и <b>кристаллы</b>, которые зарабатывают ученики.'
    ],
    howTitle: 'Как пользоваться гидом',
    howText: 'Это гид, а не тренировочная симуляция: здесь не нужно принимать решения и ничего нельзя испортить. На каждом экране нажимайте на выделенный элемент или на кнопку <b>Далее</b>, если на шаге нужно просто прочитать текст.',
    start: 'НАЧАТЬ →'
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
  /* 1 */ { title:'Знакомьтесь: Kodland Sparks',
    text:'<b>Kodland Sparks</b> — это платформа, на которой ученики <b>публикуют свои проекты</b>, продолжают учиться между уроками и получают обратную связь от одногруппников и ИИ-наставника.<br><br>В верхней панели есть всё: <b>Feed</b>, <b>My projects</b>, <b>Publish project</b>, <b>Studio</b>, <b>AI helper</b> и <b>кристаллы</b>. Мы заглянем в каждый раздел.' },
  /* 2 */ { title:'Feed',
    text:'<b>Feed</b> — это главная страница: здесь показаны проекты, опубликованные учениками. На каждой карточке указаны <b>тип проекта</b> (Web App, Scratch, PNG, Python…), полученные реакции и автор.<br><br>Метка <b>Нужен отзыв</b> означает, что автор попросил оставить отзыв. Под избранными проектами в Feed показаны все остальные проекты.' },
  /* 3 */ { title:'Откройте проект одногруппника',
    text:'Ученики могут взаимодействовать с проектами, которые опубликовали их одногруппники. Нажмите на проект <b>Creeper</b>, чтобы открыть его.' },
  /* 4 */ { title:'Опубликованный проект',
    text:'Этот проект — <b>рисунок</b> (PNG). Проекты других типов открываются так же: в проекты Scratch и веб-проекты можно играть прямо здесь, а код на Python запускается в браузере.' },
  /* 5 */ { title:'Подробности и реакции',
    text:'Под проектом можно его <b>скачать</b> и увидеть <b>автора</b>, дату загрузки, количество просмотров и полученные <b>реакции</b>: 💖 👍 😁 🔥 🦄.<br><br>Реакции — самый быстрый способ для одногруппников порадоваться работе друг друга.' },
  /* 6 */ { title:'Отзыв от ИИ',
    text:'Опубликованные проекты также могут получить <b>письменный отзыв от ИИ-наставника</b> (здесь это <b>Inimitable Robby</b>). Он отмечает, что у ученика получилось хорошо, и вдохновляет творить дальше.<br><br>Если текст написан на другом языке, кнопка <b>Show translation</b> переведёт его.' },
  /* 7 */ { title:'My projects',
    text:'Теперь нажмите <b>My projects</b> в верхней панели.' },
  /* 8 */ { title:'Всё, что вы создали',
    text:'В <b>My projects</b> собраны все проекты, которые сохранили или опубликовали <b>вы как преподаватель или ученик</b>.<br><br>На каждой карточке видно тип проекта (здесь — <b>PNG</b>) и то, приватный ли он. Сюда ученики возвращаются, чтобы найти свои работы.' },
  /* 9 */ { title:'Publish project',
    text:'Нажмите <b>Publish project</b> в верхней панели.' },
  /* 10 */ { title:'Публикация готового проекта',
    text:'<b>Publish project</b> — для проектов, которые ученики <b>уже сделали и сохранили на своём компьютере</b>. Сначала нужно выбрать тип: Image, Python, Game or Web App (файл Scratch .sb3 или .zip), Minecraft skin, Story, Embed, GitHub или Other.' },
  /* 11 */ { title:'Заполните данные',
    text:'Ученик добавляет <b>название</b> (30 символов), <b>описание</b> (240 символов) и <b>файл</b> (PNG, JPG, WebP или GIF до 5 МБ).<br><br>Ещё можно объединить проекты в <b>раздел</b> и выбрать, какие <b>реакции</b> смогут оставлять зрители.' },
  /* 12 */ { title:'Выберите, кто увидит проект',
    text:'<b>Оформление</b> задаёт цвет рамки карточки в Feed; со временем открываются новые цвета.<br><br><b>Видимость</b>: <b>Public</b> (все), <b>Friends only</b> (только друзья) или <b>Only me</b> (только я).<br><br>Дополнительные переключатели: <b>Request feedback</b> (запросить отзыв), разрешение Kodland Sparks использовать проект в рекламе и ежедневный отбор лучших проектов для Discord (<b>Discord selection</b>).' },
  /* 13 */ { title:'Публикация',
    text:'Кнопка <b>Publish</b> публикует проект. За публикацию можно <b>получить награды</b> — на кнопке есть значок кристалла. Кристаллы мы посмотрим в конце.' },
  /* 14 */ { title:'Studio',
    text:'Теперь — то, чем ученики больше всего пользуются на уроке. Нажмите <b>Studio</b>.' },
  /* 15 */ { title:'Два режима',
    text:'В <b>Studio</b> два режима:<br><br>• <b>Creative mode</b>: можно создавать что угодно — игры, сайты, рисунки — с нуля или на основе шаблона.<br>• <b>Challenges mode</b>: нужно выполнять задания и <b>зарабатывать кристаллы</b>.' },
  /* 16 */ { title:'Creative mode',
    text:'Нажмите <b>Creative mode</b>.' },
  /* 17 */ { title:'Слоты для проектов',
    text:'В <b>Creative Studio</b> проекты, над которыми работают ученики, хранятся в <b>слотах</b>. Слоты с 1 по 3 открыты, слоты с 4 по 6 появятся позже.<br><br>Нажмите <b>Slot 1</b>, чтобы начать новый проект.' },
  /* 18 */ { title:'Что ты будешь создавать?',
    text:'Ученики выбирают, с чего начать:<br>• <b>Программирование и разработка</b>: Game or web app, Terminal Python, Scratch.<br>• <b>Медиа и контент</b>: Pixel Art, Animation, Music, Skin Editor.<br><br>Что именно они используют, зависит от курса. Нажмите <b>Game or web app</b>.' },
  /* 19 */ { title:'Веб-приложение: выберите основу',
    text:'Веб-приложение создаётся на <b>HTML, CSS и JavaScript</b> (Web App JS) или на HTML и CSS с логикой на <b>Python</b> (Web App Python).<br><br>Ученики начинают с пустого проекта (<b>Empty project</b>) или с готовой основы, например Alien Invaders или Snake game. Нажмите <b>Empty project</b> в разделе Web App JS.' },
  /* 20 */ { title:'Редактор: просмотр и код',
    text:'Вверху окно <b>Preview</b> показывает результат вживую: изменения появляются сразу. Ниже — вкладки с кодом: <b>HTML</b>, <b>CSS</b> и <b>JS</b>.' },
  /* 21 */ { title:'AI tutor',
    text:'Справа находится <b>AI tutor</b> (Inimitable Robby) — помощник по программированию с вкладками <b>Chat</b> и <b>Tasks</b>. Ученики просят у него подсказку или совет, как улучшить код.<br><br>Помните: <b>ИИ предлагает, автор решает</b>. AI tutor помогает, но не делает проект за ученика.' },
  /* 22 */ { title:'Сохранение, название и публикация',
    text:'В верхней панели — <b>слот</b>, кнопка сохранения и <b>название проекта</b>. Справа: <b>New project</b>, кнопки, чтобы открыть, загрузить и скачать проект, и <b>Publish</b> — эта кнопка публикует проект в Feed.' },
  /* 23 */ { title:'Начните другой проект',
    text:'Посмотрим на другие виды проектов. Нажмите <b>New project</b>.' },
  /* 24 */ { title:'Terminal Python',
    text:'<b>Terminal Python</b> — это программа, которая работает в терминале. Нажмите на эту карточку.' },
  /* 25 */ { title:'Начните с готовой основы',
    text:'Программа на Python хранится в одном файле, запускается кнопкой <b>Play</b> и общается с пользователем через <code>print()</code> и <code>input()</code>.<br><br>Нажмите <b>Guess the number</b>.' },
  /* 26 */ { title:'Проект на Python',
    text:'Программа работает в чёрном <b>терминале</b>: выводит сообщения и ждёт ответа игрока в поле <b>Твой ответ</b>. Кнопки <b>Run</b> / <b>Stop</b> запускают и останавливают её, а <b>код на Python</b> находится прямо под терминалом. Справа, как и в любом редакторе кода, — AI tutor.' + CONTENT.ui.coach.backToMenu },
  /* 27 */ { title:'Scratch',
    text:'В <b>Scratch</b> ученики собирают программы из блоков Scratch. Нажмите на эту карточку.' },
  /* 28 */ { title:'Проект в Scratch',
    text:'<b>Редактор Scratch</b> внутри Kodland Sparks: слева — <b>категории и палитра блоков</b>, в центре — <b>область кода</b>, справа — <b>сцена</b> со спрайтом. Также есть вкладки <b>Костюмы</b> и <b>Звуки</b>. AI tutor ждёт в круглой кнопке справа.' + CONTENT.ui.coach.backToMenu },
  /* 29 */ { title:'Pixel Art',
    text:'Для рисования ученики могут использовать <b>Pixel Art</b> и рисовать пиксель за пикселем. Нажмите на эту карточку.' },
  /* 30 */ { title:'Выберите размер холста',
    text:'Ученики выбирают <b>размер холста</b>; рекомендуемый — <b>32 × 32</b>. Результат можно опубликовать как изображение или анимацию.<br><br>Нажмите <b>32 × 32</b>.' },
  /* 31 */ { title:'Проект-рисунок',
    text:'<b>Редактор пиксель-арта</b>: слева — инструменты рисования, размеры кисти, тени, цвета и отмена действий, в центре — <b>холст</b>, а внизу — <b>кадры</b>, чтобы превратить рисунок в анимацию.' + CONTENT.ui.coach.backToMenu },
  /* 32 */ { title:'Animation',
    text:'В <b>Animation</b> ученики рисуют короткий мультфильм кадр за кадром. Нажмите на эту карточку.' },
  /* 33 */ { title:'Выберите размер холста',
    text:'Холсты для анимации бывают трёх размеров; рекомендуемый — <b>960 × 720</b>. Нажмите на него.' },
  /* 34 */ { title:'Проект-анимация',
    text:'Ученики рисуют каждый <b>кадр</b>, видят предыдущий сквозь <b>кальку</b> (onion skin) и нажимают Play, чтобы посмотреть анимацию. Можно менять скорость и зацикливать её.' + CONTENT.ui.coach.backToMenu },
  /* 35 */ { title:'Music',
    text:'В <b>Music</b> ученики собирают короткий трек на сетке. Нажмите на эту карточку.' },
  /* 36 */ { title:'Начните трек',
    text:'Можно начать с нового трека (<b>New track</b>) или с готовой основы: Retro, Tetris или K-pop. Нажмите <b>Retro</b>.' },
  /* 37 */ { title:'Музыкальный проект',
    text:'Ученики <b>рисуют мелодию</b> на сетке, добавляют <b>дорожки</b> и <b>ударные</b>, меняют <b>темп</b> и нажимают Play.' + CONTENT.ui.coach.backToMenu },
  /* 38 */ { title:'Skin Editor',
    text:'<b>Skin Editor</b> — для Minecraft: ученики рисуют скин для 3D-модели. Нажмите на эту карточку.' },
  /* 39 */ { title:'Выберите персонажа',
    text:'Работа начинается со <b>Steve</b> или <b>Alex</b>. Нажмите <b>Steve</b>.' },
  /* 40 */ { title:'Проект-скин',
    text:'Скин рисуется на <b>3D-модели</b> или на развёртке <b>2D map</b>, а симметрия зеркально повторяет штрихи на обеих сторонах. Готовый скин можно <b>экспортировать</b> в формате PNG или MCPACK.' },
  /* 41 */ { title:'AI helper',
    text:'Зелёная кнопка <b>AI helper</b> в верхней панели открывает чат. Нажмите на неё.' },
  /* 42 */ { title:'Спросите Aiko',
    text:'<b>Aiko</b> — ИИ-помощник учеников: можно спросить о своих проектах, коде или идеях или выбрать подсказку, например <i>Объясни ошибку в моём коде</i> или <i>Я застрял, что делать дальше?</i><br><br>Aiko запоминает важные факты из последних чатов, а ученики могут посмотреть и удалить эти заметки.' },
  /* 43 */ { title:'Кристаллы',
    text:'Фиолетовый счётчик показывает, сколько <b>кристаллов</b> заработал ученик. Нажмите на него.' },
  /* 44 */ { btn:'Готово ✓', title:'Награды',
    text:'Это панель <b>наград</b>. Ученики зарабатывают кристаллы, выполняя задания в <b>Challenges mode</b> и публикуя проекты, а затем открывают <b>сундук</b>, чтобы узнать, что выиграли.<br><br>Кристаллов пока нет, поэтому счётчик показывает 0.' }
];
