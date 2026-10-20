/* ============================================================
   Kodland Sparks guide · ARABIC content
   Translate only the text inside quotes / backticks. Keep HTML tags, ${...} placeholders, keys, ids, file names and URLs unchanged.
   ============================================================ */
window.CONTENT = { lang: 'ar' };

/* ============================================================
   INTERFACE: the replicated Kodland Sparks platform + guide layer
   ============================================================ */
CONTENT.ui = {
  title: 'دليل Kodland Sparks',

  /* ---------- top bar ---------- */
  logo: 'Kodland Sparks',
  nav: { feed:'Feed', my:'My projects', publish:'Publish project', studio:'Studio', ai:'AI helper' },

  /* ---------- Feed ---------- */
  feed: {
    bannerTitle: 'اجعل ملفك الشخصي يعبّر عنك',
    bannerText: 'اختر صورة رمزية ولقبًا — سيراهما الجميع في ملفك الشخصي.',
    bannerBtn: 'Customize profile',
    featured: 'أحدث المشاريع المميّزة',
    feed: 'Feed',
    filter: 'All projects ˅',
    results: '(11.6K نتيجة)',
    search: '🔍 الاسم المستعار أو عنوان المشروع',
    feedbackWanted: 'Feedback wanted'
  },
  // text drawn inside some project thumbnails (fake game screens)
  thumbs: { coins:'🪙 79 coins', play:'▶ PLAY', heroes:'HEROES', armory:'ARMORY', shop:'SHOP', magicLab:'MAGIC LAB', neonRacer:'NEON RACER' },

  /* ---------- a published project (Creeper) ---------- */
  project: {
    title: 'Creeper',
    download: 'Download',
    authorName: 'Mia Torres',
    uploaded: 'تم الرفع في 16 أكتوبر 2026',
    desc: 'ضاع Creeper يرتدي قبعة عيد الميلاد!! ساعدوني في العثور عليه!!',
    showTr: 'Show translation',
    fbTitle: 'التغذية الراجعة المنشورة',
    fbUpdated: 'تم التحديث في 16 أكتوبر 2026',
    fbBody: '<p>يا ميا، صنعتِ شخصية يسهل التعرّف عليها ببضع وحدات بكسل فقط، وقبعة عيد الميلاد تمنح الـ Creeper لمسة مرحة ومبتكرة.</p><p>الـ Creeper الاحتفالي الذي صنعتِه مليء بالشخصية والإبداع — من الواضح أنكِ تستمتعين بابتكار شخصيات فريدة!</p>'
  },

  /* ---------- My projects ---------- */
  my: {
    name: 'Alex Tutor',
    friends: 'الأصدقاء',
    friendsTab: 'الأصدقاء (0)',
    subsTab: 'المتابِعون (0)',
    noFriends: 'لا يوجد أصدقاء بعد',
    privateTag: 'مشروع خاص',
    cardTitle: 'رسمة'
  },

  /* ---------- Publish project ---------- */
  publish: {
    title: 'مشروع <span>جديد</span>',
    sub: 'اختر نوع المشروع، واملأ التفاصيل، وحدّد من يمكنه رؤيته.',
    typeLabel: 'نوع المشروع',
    // [icon, name, description] — keep the first item (icon name) unchanged
    types: [
      ['image', 'Image', 'ارفع رسمة أو صورة أو GIF أو WebP.'],
      ['python', 'Python', 'الصق كود Python — يستطيع الزوار تشغيله في المتصفح.'],
      ['game', 'Game or Web App', 'ملف .sb3 من Scratch أو ملف .zip فيه مشروع Unity/Godot/HTML/Python.'],
      ['creeper', 'Minecraft skin', 'ارفع سكين بحجم 64×64 واعرضه على نموذج ثلاثي الأبعاد.'],
      ['book', 'Story', 'صفحة فيها نصوص وصور ومحتوى مُضمَّن'],
      ['globe', 'Embed', 'الصق رابطًا من YouTube أو Vimeo أو Sketchfab أو Tinkercad أو Canva.'],
      ['github', 'GitHub', 'اربط مستودع GitHub عامًا.'],
      ['box', 'Other', 'إذا لم يناسبك أيّ من الأنواع السابقة — مثل لعبة Roblox أو تطبيق على Play Market.']
    ],
    titleLabel: 'العنوان',
    titleHint: 'متبقٍّ 30 حرفًا',
    descLabel: 'الوصف',
    descHint: 'متبقٍّ 240 حرفًا',
    fileLabel: 'الرسمة',
    chooseFile: 'Choose file',
    fileHint: 'PNG أو JPG أو WebP أو GIF بحجم يصل إلى 5 MB',
    section: '📁 القسم',
    noSection: 'بلا قسم',
    sectionHint: 'تساعد الأقسام على تجميع مشاريعك في صفحة ملفك الشخصي.',
    reactions: 'التفاعلات',
    reactionsHint: 'اختر التفاعلات التي يمكن للزوار تركها على هذا المشروع.',
    heartAlways: '💖 القلب متاح دائمًا',
    appearance: 'المظهر',
    appearanceHint: 'اختر لون إطار لإبراز بطاقة مشروعك في الـ Feed.',
    frameSlots: '5 من 5 خانات إطارات متاحة',
    frameDefault: '⚫ افتراضي',
    common: 'عادي',
    commonFrames: ['🔵 سماوي', '🟢 زمردي', '🟣 بنفسجي', '🔴 أحمر'],
    rare: 'نادر',
    rareFrames: ['خزامي', 'وردي', 'رمادي'],
    visibility: 'الظهور',
    // [name, description] — Public · Friends only · Only me
    vis: [
      ['Public', 'يظهر في الـ Feed وفي ملف أعمالك العام.'],
      ['Friends only', 'يراه أصدقاؤك ومعلّموك وأنت.'],
      ['Only me', 'تراه أنت فقط في ملف أعمالك.']
    ],
    // [label, description] — the three switches
    toggles: [
      ['Request feedback', 'سيتمكّن المؤلفون الآخرون من ترك تغذية راجعة منظَّمة على مشروعك. متاح للمشاريع العامة فقط.'],
      ['أوافق على أن تستخدم Kodland Sparks هذا المشروع في الترويج', 'مثلًا، قد يظهر في وسائل التواصل الاجتماعي أو الإعلانات أو الصفحة الرئيسية، ليرى الأطفال الآخرون ما يمكن صنعه هنا. يمكنك تغيير ذلك في أي وقت.'],
      ['المشاركة في اختيارات Discord', 'ننشر مرة يوميًا أفضل مشاريع اليوم على خادم Discord الخاص بنا. أبقِ هذا الخيار مفعّلًا، وقد يُختار مشروعك أيضًا. للمشاريع العامة فقط.']
    ],
    publish: 'Publish'
  },

  /* ---------- Studio: modes and slots ---------- */
  studio: {
    modesTitle: 'ماذا تريد أن تصنع؟',
    modesSub: 'اختر وضعًا لتبدأ.',
    creative: 'Creative mode',
    creativeText: 'اصنع أي شيء تحبه — ألعابًا ومواقع وفنًّا.',
    challenges: 'Challenges mode',
    challengesText: 'أكمل المهام واكسب البلّورات.',
    slotsTitle: 'Creative Studio',
    slotsSub: 'اختر مشروعًا لتكمله، أو ابدأ شيئًا جديدًا.',
    slot: n => `Slot ${n}`,
    startHere: 'ابدأ من هنا',
    comingSoon: 'قريبًا',
    crumbBack: 'My projects'
  },

  /* ---------- Studio: "What will you build?" menu ---------- */
  build: {
    title: 'ماذا ستبني؟',
    sub: 'اختر من أين تبدأ.',
    back: '› رجوع',
    recommended: 'مُوصى به',
    progGroup: 'البرمجة والتطوير',
    mediaGroup: 'الوسائط والمحتوى',
    // [name, description] of each starting card
    cards: {
      web: ['Game or web app', 'HTML أو CSS أو JavaScript أو Python'],
      terminal: ['Terminal Python', 'برنامج يعمل في الطرفية'],
      scratch: ['Scratch', 'ابنِ باستخدام كتل Scratch'],
      pixel: ['Pixel Art', 'ارسم بكسلًا بكسلًا'],
      anim: ['Animation', 'ارسم إطارًا إطارًا'],
      music: ['Music', 'مقطع موسيقي على شبكة'],
      skin: ['Skin Editor', 'سكين لنموذج ثلاثي الأبعاد']
    },
    // [heading, description] of each group of templates
    groups: {
      webjs: ['Web App JS', 'صفحة ويب مبنية بـ HTML وCSS وJavaScript. تعمل في المعاينة المباشرة — تظهر التغييرات فورًا.'],
      webpy: ['Web App Python', 'صفحة ويب مبنية بـ HTML وCSS، والمنطق فيها بلغة Python. تعمل في المعاينة المباشرة — تظهر التغييرات فورًا.'],
      terminal: ['Terminal Python', 'برنامج في ملف Python واحد. يعمل في الطرفية بزر التشغيل — تتواصل معه باستخدام print() وinput().'],
      pixel: ['Pixel Art', 'ارسم كائنات ورسومًا متحركة بكسلًا بكسلًا. اختر حجم اللوحة لتبدأ، ثم انشرها كصورة أو رسم متحرك.'],
      anim: ['Animation', 'ارسم رسمًا كرتونيًا قصيرًا إطارًا إطارًا: ارسم كل إطار، وشاهد الإطار السابق من خلال طبقة الشفافية (onion skin)، ثم اضغط تشغيل. اختر حجم اللوحة لتبدأ.'],
      music: ['Music', 'ابنِ مقطعًا موسيقيًا قصيرًا على شبكة: لوّن لحنًا، وأضف الطبول، ثم اضغط تشغيل.'],
      skin: ['Skin Editor', 'لوّن سكين Minecraft على خريطة ثنائية الأبعاد وشاهده يلتفّ حول نموذج ثلاثي الأبعاد. خاصية التماثل تعكس ضرباتك على الجانبين.']
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
    sizeHint: 'الحجم بالبكسل. يمكنك تغييره لاحقًا.'
  },

  /* ---------- Studio: editors ---------- */
  editor: {
    // project title shown in the editor bar ('' = empty placeholder)
    titles: { web:'', terminal:'Guess the number', scratch:'', pixel:'', anim:'', music:'Retro', skin:'' },
    myProjects: 'My projects',
    projectTitle: 'عنوان المشروع',
    newProject: 'New project',
    publish: 'Publish',
    // AI tutor panel
    robby: 'Inimitable Robby',
    aiTutor: 'AI tutor',
    chat: 'Chat',
    tasks: 'Tasks',
    greeting: 'أهلًا! أنا رفيقك في البرمجة. ماذا ستبني اليوم؟ اسألني عمّا تضيفه بعد ذلك أو كيف تطوّر الكود الخاص بك — لنصنع معًا شيئًا رائعًا! 🚀',
    memory: 'أتذكّر آخر 10 رسائل فقط — إذا تحدّثنا عن شيء منذ مدة، ذكّرني به باختصار.',
    askTip: 'اطلب نصيحة...',
    // web app editor
    preview: 'Preview',
    htmlComment: '<!-- اكتب كود HTML هنا -->',
    // terminal Python editor
    terminal: 'Terminal',
    stop: '▢ Stop',
    termOut: 'اخترت رقمًا من 1 إلى 100. حاول أن تخمّنه!<br>تخمينك:',
    answer: 'Your answer',
    send: '➤ Send',
    // Python code shown in the editor: translate only the comment and the text inside "double quotes"
    py: ['import random', '', '# يختار الكمبيوتر رقمًا من 1 إلى 100', 'secret = random.randint(1, 100)', 'attempts = 0', '', 'print("اخترت رقمًا من 1 إلى 100. حاول أن تخمّنه!")', '', 'while True:', '    guess = int(input("تخمينك: "))', '    attempts += 1', '', '    if guess < secret:', '        print("أصغر من اللازم! حاول مرة أخرى.")', '    elif guess > secret:', '        print("أكبر من اللازم! حاول مرة أخرى.")', '    else:', '        print("عرفته في", attempts, "محاولة!")', '        break'],
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
      speed: 'Speed', firstFrame: 'ارسم الإطار الأول، ثم اضغط +'
    },
    // music editor
    music: { track:'Retro ˅', addTrack:'+ Track', tempo:'Tempo', bpm:'180 BPM', drums:'Drums', electronic:'Electronic', acoustic:'Acoustic' }
  },

  /* ---------- AI helper ---------- */
  ai: {
    newChat: '+ New chat',
    keep: 'أحتفظ بآخر 5 محادثات، لكنني أتذكّر المعلومات المهمة منها.',
    memory: 'ما أتذكّره عنك',
    credits: 'متبقٍّ 1000 من 1000 رصيد',
    pictures: '0 من 6 صور اليوم',
    resets: 'يُعاد الضبط عند 00:00 UTC',
    name: 'Spark Aiko',
    role: 'AI helper',
    hello: 'أهلًا! أنا آيكو، مساعدك الذكي. اسألني أي شيء عن مشاريعك،<br>أو الكود، أو أفكارك — أو اختر أحد الاقتراحات أدناه.',
    chips: ['ساعدني في ابتكار فكرة للعبة', 'اشرح الخطأ في الكود الخاص بي', 'علقت، ماذا أفعل بعد ذلك؟', 'ارسم لي شخصية'],
    ask: 'اسأل أي شيء...'
  },

  /* ---------- Rewards drawer (crystals) ---------- */
  rewards: { title:'REWARDS', rarity:'COMMON', hint:'اضغط على الصندوق لفتحه' },

  /* ---------- Coach card (guide layer) ---------- */
  coach: {
    step: (n, total) => `دليل Sparks · ${n}/${total}`,
    hint: '👆 اضغط على العنصر المميَّز',
    next: 'التالي ←',
    backToMenu: '<br><br>اضغط <b>التالي</b> للعودة إلى قائمة المشاريع.'
  },

  /* ---------- Finish modal ---------- */
  finish: {
    kicker: 'اكتمل الدليل',
    title: '🎓 أنت تعرف Kodland Sparks الآن',
    intro: 'لقد تجوّلت في المنصة التي يستخدمها طلابك:',
    items: [
      '<b>Feed</b>: مشاريع الزملاء، مع التفاعلات والتغذية الراجعة من الذكاء الاصطناعي.',
      '<b>My projects</b>: كل ما حفظه أو نشره المعلمون والطلاب.',
      '<b>Publish project</b>: مشاركة مشروع مكتمل، واختيار من يراه، وكسب المكافآت.',
      '<b>Studio</b>: وضع Creative mode لبناء الكود (تطبيقات الويب وPython وScratch) والرسومات والرسوم المتحركة والموسيقى والسكينات، ووضع Challenges mode لكسب البلّورات.',
      '<b>AI helper</b> و<b>AI tutor</b>: يوجّهان ويقدّمان النصائح، لكن <b>الذكاء الاصطناعي يقترح، وصاحب المشروع يقرّر</b>.'
    ],
    codeLabel: '🔑 رمز الإتمام الخاص بك',
    codeHint: 'انسخه في التدريب لتأكيد أنك أكملت الدليل.',
    back: '→ العودة إلى التدريب',
    closeMsg: 'أغلق علامة التبويب هذه للعودة إلى التدريب، ثم أدخل رمز الإتمام هناك.'
  },

  /* ---------- Welcome screen ---------- */
  welcome: {
    kicker: 'النموذج التعليمي الجديد · تدريب المعلمين',
    title: 'دليل <span>Kodland Sparks</span>',
    lead: 'يأخذك هذا الدليل في جولة داخل <b>Kodland Sparks</b>، المنصة التي ينشر فيها طلابك مشاريعهم ويبنونها. ستتنقّل في المنصة بنفسك وتضغط حيث يطلب منك الدليل.',
    seeTitle: 'ما الذي ستراه',
    see: [
      '<b>Feed</b>: كيف يرى الطلاب مشاريع بعضهم ويتفاعلون معها، والتغذية الراجعة التي يتلقّونها من الذكاء الاصطناعي.',
      '<b>My projects</b> و<b>Publish project</b>: أين تُحفظ الأعمال وكيف يُنشر المشروع المكتمل.',
      '<b>Studio</b>: ما يبنيه الطلاب في الحصة — الكود (تطبيقات الويب وPython وScratch)، والرسومات، والرسوم المتحركة، والموسيقى، والسكينات — ووضع Challenges mode.',
      '<b>AI helper</b> و<b>البلّورات</b> التي يكسبها الطلاب.'
    ],
    howTitle: 'كيف تستخدمه',
    howText: 'هذا دليل، وليس محاكاة للتدريب: لا توجد قرارات تتخذها ولا شيء تخسره. اضغط على العنصر المميَّز في كل شاشة، أو اضغط <b>التالي</b> عندما تطلب منك الخطوة القراءة.',
    start: 'ابدأ الدليل ←'
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
  /* 1 */ { title:'تعرّف على Kodland Sparks',
    text:'<b>Kodland Sparks</b> هي المنصة التي <b>ينشر فيها الطلاب مشاريعهم</b>، ويواصلون التعلّم بين الدروس، ويتلقّون التغذية الراجعة من زملائهم ومن مرشد ذكي.<br><br>الشريط العلوي فيه كل شيء: <b>Feed</b> و<b>My projects</b> و<b>Publish project</b> و<b>Studio</b> و<b>AI helper</b> و<b>البلّورات</b>. سنزور كل واحد منها.' },
  /* 2 */ { title:'الـ Feed',
    text:'<b>Feed</b> هو الصفحة الرئيسية: يعرض المشاريع التي نشرها الطلاب. تُظهر كل بطاقة <b>نوع المشروع</b> (Web App أو Scratch أو PNG أو Python…)، والتفاعلات التي حصل عليها، وصاحبه.<br><br>عبارة <b>Feedback wanted</b> تعني أن صاحب المشروع طلب تغذية راجعة. وتحت المشاريع المميّزة، يعرض الـ Feed جميع المشاريع.' },
  /* 3 */ { title:'افتح مشروع أحد الزملاء',
    text:'يمكن للطلاب التفاعل مع المشاريع التي نشرها زملاؤهم. اضغط على مشروع <b>Creeper</b> لفتحه.' },
  /* 4 */ { title:'مشروع منشور',
    text:'هذا المشروع <b>رسمة</b> (PNG). الأنواع الأخرى تُفتح بالطريقة نفسها: يمكن تشغيل مشاريع Scratch والويب هنا مباشرةً، ويعمل كود Python في المتصفح.' },
  /* 5 */ { title:'التفاصيل والتفاعلات',
    text:'تحت المشروع يمكنك <b>تنزيله</b> (Download) ورؤية <b>صاحبه</b>، وتاريخ الرفع، وعدد المشاهدات، و<b>التفاعلات</b> التي حصل عليها: 💖 👍 😁 🔥 🦄.<br><br>التفاعلات هي أسرع طريقة ليحتفي الزملاء بأعمال بعضهم.' },
  /* 6 */ { title:'تغذية راجعة من الذكاء الاصطناعي',
    text:'يمكن أن تتلقّى المشاريع المنشورة أيضًا <b>تغذية راجعة مكتوبة من مرشد ذكي</b> (هنا <b>Inimitable Robby</b>). يشير إلى ما أحسن فيه الطالب ويشجّعه على مواصلة الإبداع.<br><br>إذا كان النص مكتوبًا بلغة أخرى، فإن <b>Show translation</b> يترجمه.' },
  /* 7 */ { title:'My projects',
    text:'اضغط الآن على <b>My projects</b> في الشريط العلوي.' },
  /* 8 */ { title:'كل ما صنعته',
    text:'تعرض <b>My projects</b> كل مشروع حُفظ أو نُشر، سواء <b>أنت كمعلّم أو أحد الطلاب</b>.<br><br>تُظهر كل بطاقة النوع (هنا <b>PNG</b>) وما إذا كان المشروع خاصًا. وهنا يعود الطلاب ليجدوا أعمالهم.' },
  /* 9 */ { title:'Publish project',
    text:'اضغط على <b>Publish project</b> في الشريط العلوي.' },
  /* 10 */ { title:'انشر مشروعًا مكتملًا',
    text:'<b>Publish project</b> مخصّص للمشاريع التي <b>صنعها الطلاب بالفعل وحفظوها على أجهزتهم</b>. أولًا يختارون النوع: Image أو Python أو Game or Web App (ملف Scratch بصيغة .sb3 أو ملف .zip) أو Minecraft skin أو Story أو Embed أو GitHub أو Other.' },
  /* 11 */ { title:'املأ التفاصيل',
    text:'يضيف الطالب <b>عنوانًا</b> (30 حرفًا)، و<b>وصفًا</b> (240 حرفًا)، و<b>الملف</b> (PNG أو JPG أو WebP أو GIF بحجم يصل إلى 5 MB).<br><br>ويمكنه أيضًا تجميع المشاريع في <b>قسم</b>، واختيار <b>التفاعلات</b> التي يمكن للزوار تركها.' },
  /* 12 */ { title:'اختر من يراه',
    text:'<b>المظهر</b> يحدّد لون إطار البطاقة في الـ Feed؛ وتُفتح ألوان أخرى لاحقًا.<br><br><b>الظهور</b>: <b>Public</b> أو <b>Friends only</b> أو <b>Only me</b>.<br><br>مفاتيح اختيارية: <b>Request feedback</b>، والسماح لـ Kodland Sparks باستخدام المشروع في الترويج، و<b>اختيارات Discord</b> اليومية.' },
  /* 13 */ { title:'Publish',
    text:'الضغط على <b>Publish</b> يشارك المشروع. ويمكن أن يمنح النشر <b>مكافآت</b> — يظهر على الزر رمز البلّورة. سنتعرّف على البلّورات في النهاية.' },
  /* 14 */ { title:'Studio',
    text:'والآن الجزء الذي يستخدمه الطلاب أكثر من غيره في الحصة. اضغط على <b>Studio</b>.' },
  /* 15 */ { title:'وضعان',
    text:'في <b>Studio</b> وضعان:<br><br>• <b>Creative mode</b>: اصنع أي شيء تحبه — ألعابًا ومواقع وفنًّا — من الصفر أو انطلاقًا من قالب.<br>• <b>Challenges mode</b>: أكمل المهام و<b>اكسب البلّورات</b>.' },
  /* 16 */ { title:'Creative mode',
    text:'اضغط على <b>Creative mode</b>.' },
  /* 17 */ { title:'خانات المشاريع',
    text:'يحتفظ <b>Creative Studio</b> بالمشاريع التي يعمل عليها الطلاب في <b>خانات</b> (Slots). الخانات من 1 إلى 3 مفتوحة؛ والخانات من 4 إلى 6 قريبًا.<br><br>اضغط على <b>Slot 1</b> لبدء مشروع جديد.' },
  /* 18 */ { title:'ماذا ستبني؟',
    text:'يختار الطلاب من أين يبدؤون:<br>• <b>البرمجة والتطوير</b>: Game or web app وTerminal Python وScratch.<br>• <b>الوسائط والمحتوى</b>: Pixel Art وAnimation وMusic وSkin Editor.<br><br>ما يستخدمونه يعتمد على دورتهم. اضغط على <b>Game or web app</b>.' },
  /* 19 */ { title:'تطبيق ويب: اختر نقطة البداية',
    text:'يُبنى تطبيق الويب بـ <b>HTML وCSS وJavaScript</b> ‏(Web App JS)، أو بـ HTML وCSS مع المنطق بلغة <b>Python</b> ‏(Web App Python).<br><br>يبدأ الطلاب من <b>Empty project</b> أو من قالب، مثل Alien Invaders أو Snake game. اضغط على <b>Empty project</b> تحت Web App JS.' },
  /* 20 */ { title:'المحرّر: المعاينة والكود',
    text:'في الأعلى، تعرض <b>Preview</b> النتيجة مباشرةً: تظهر التغييرات فورًا. وتحتها تبويبات الكود: <b>HTML</b> و<b>CSS</b> و<b>JS</b>.' },
  /* 21 */ { title:'AI tutor',
    text:'على اليمين، <b>AI tutor</b> ‏(Inimitable Robby) هو رفيق في البرمجة، فيه تبويبا <b>Chat</b> و<b>Tasks</b>. يطلب منه الطلاب نصيحة أو طريقة لتطوير الكود.<br><br>تذكّر: <b>الذكاء الاصطناعي يقترح، وصاحب المشروع يقرّر</b>. إنه يساعد، لكنه لا يبني المشروع بدلًا منهم.' },
  /* 22 */ { title:'الحفظ والتسمية والنشر',
    text:'يعرض الشريط العلوي <b>الخانة</b>، وزر الحفظ، و<b>عنوان المشروع</b>. وعلى اليمين: <b>New project</b>، وأزرار لفتح مشروع ورفعه وتنزيله، و<b>Publish</b> الذي يشاركه في الـ Feed.' },
  /* 23 */ { title:'ابدأ مشروعًا آخر',
    text:'لنلقِ نظرة على أنواع أخرى من المشاريع. اضغط على <b>New project</b>.' },
  /* 24 */ { title:'Terminal Python',
    text:'<b>Terminal Python</b> برنامج يعمل في الطرفية. اضغط عليه.' },
  /* 25 */ { title:'ابدأ من قالب',
    text:'يكون برنامج Python في ملف واحد، ويعمل بزر <b>التشغيل</b> (Play)، ويتواصل مع المستخدم باستخدام <code>print()</code> و<code>input()</code>.<br><br>اضغط على <b>Guess the number</b>.' },
  /* 26 */ { title:'مشروع Python',
    text:'يعمل البرنامج في <b>الطرفية</b> السوداء: يطبع الرسائل وينتظر إجابة اللاعب في مربّع <b>Your answer</b>. يبدأ زر <b>Run</b> / <b>Stop</b> التشغيل ويوقفه، و<b>كود Python</b> موجود تحته مباشرةً. ويوجد AI tutor على اليمين، كما في كل محرّر كود.' + CONTENT.ui.coach.backToMenu },
  /* 27 */ { title:'Scratch',
    text:'يتيح <b>Scratch</b> للطلاب البناء باستخدام كتل Scratch. اضغط عليه.' },
  /* 28 */ { title:'مشروع Scratch',
    text:'<b>محرّر Scratch</b> داخل Kodland Sparks: <b>فئات الكتل ولوحتها</b> على اليسار، و<b>منطقة الكود</b> في الوسط، و<b>المنصّة</b> (Stage) مع الكائن على اليمين. وهناك أيضًا تبويبا <b>Costumes</b> و<b>Sounds</b>. وينتظر AI tutor في الزر الدائري على اليمين.' + CONTENT.ui.coach.backToMenu },
  /* 29 */ { title:'Pixel Art',
    text:'للرسم، يمكن للطلاب استخدام <b>Pixel Art</b>: يرسمون بكسلًا بكسلًا. اضغط عليه.' },
  /* 30 */ { title:'اختر حجم اللوحة',
    text:'يختارون <b>حجم اللوحة</b>؛ والحجم المُوصى به هو <b>32 × 32</b>. يمكن نشر النتيجة كصورة أو كرسم متحرك.<br><br>اضغط على <b>32 × 32</b>.' },
  /* 31 */ { title:'مشروع رسم',
    text:'<b>محرّر فن البكسل</b>: أدوات الرسم، وأحجام الفرشاة، والتظليل، والألوان، والتراجع على اليسار، و<b>اللوحة</b> في الوسط، و<b>الإطارات</b> في الأسفل لتحويل الرسمة إلى رسم متحرك.' + CONTENT.ui.coach.backToMenu },
  /* 32 */ { title:'Animation',
    text:'يتيح <b>Animation</b> للطلاب رسم كرتون قصير إطارًا إطارًا. اضغط عليه.' },
  /* 33 */ { title:'اختر حجم اللوحة',
    text:'تتوفّر لوحات الرسوم المتحركة بثلاثة أحجام؛ والحجم المُوصى به هو <b>960 × 720</b>. اضغط عليه.' },
  /* 34 */ { title:'مشروع رسوم متحركة',
    text:'يرسم الطلاب كل <b>إطار</b>، ويرون الإطار السابق من خلال <b>طبقة الشفافية</b> (onion skin)، ثم يضغطون تشغيل لمشاهدة الرسم المتحرك. ويمكنهم تغيير السرعة وتكراره.' + CONTENT.ui.coach.backToMenu },
  /* 35 */ { title:'Music',
    text:'يتيح <b>Music</b> للطلاب بناء مقطع موسيقي قصير على شبكة. اضغط عليه.' },
  /* 36 */ { title:'ابدأ مقطعًا موسيقيًا',
    text:'يمكنهم البدء بـ <b>New track</b> أو من قالب: Retro أو Tetris أو K-pop. اضغط على <b>Retro</b>.' },
  /* 37 */ { title:'مشروع موسيقي',
    text:'<b>يلوّن الطلاب لحنًا</b> على الشبكة، ويضيفون <b>مسارات</b> و<b>طبولًا</b>، ويغيّرون <b>الإيقاع</b> (Tempo)، ثم يضغطون تشغيل.' + CONTENT.ui.coach.backToMenu },
  /* 38 */ { title:'Skin Editor',
    text:'<b>Skin Editor</b> مخصّص لـ Minecraft: يلوّن الطلاب سكين لنموذج ثلاثي الأبعاد. اضغط عليه.' },
  /* 39 */ { title:'اختر شخصية',
    text:'يبدؤون من <b>Steve</b> أو <b>Alex</b>. اضغط على <b>Steve</b>.' },
  /* 40 */ { title:'مشروع سكين',
    text:'يُلوَّن السكين على <b>نموذج ثلاثي الأبعاد</b> أو على <b>الخريطة ثنائية الأبعاد</b> (2D map)، وتعكس خاصية التماثل الضربات على الجانبين. وعندما يصبح جاهزًا، يمكن <b>تصديره</b> (Export) بصيغة PNG أو MCPACK.' },
  /* 41 */ { title:'AI helper',
    text:'زر <b>AI helper</b> الأخضر في الشريط العلوي يفتح محادثة. اضغط عليه.' },
  /* 42 */ { title:'اسأل آيكو',
    text:'<b>آيكو</b> هي المساعدة الذكية للطلاب: يمكنهم سؤالها عن مشاريعهم أو الكود أو أفكارهم، أو اختيار اقتراح مثل <i>اشرح الخطأ في الكود الخاص بي</i> أو <i>علقت، ماذا أفعل بعد ذلك؟</i><br><br>تتذكّر المعلومات المهمة من المحادثات الأخيرة، ويمكن للطلاب رؤية هذه الملاحظات وحذفها.' },
  /* 43 */ { title:'البلّورات',
    text:'يعرض العدّاد البنفسجي <b>البلّورات</b> التي كسبها الطالب. اضغط عليه.' },
  /* 44 */ { btn:'إنهاء ✓', title:'المكافآت',
    text:'هذه هي لوحة <b>المكافآت</b> (Rewards). يكسب الطلاب البلّورات بإكمال المهام في <b>Challenges mode</b> وبنشر المشاريع، ويفتحون <b>صندوقًا</b> ليروا ما ربحوه.<br><br>لا توجد بلّورات بعد، لذلك يعرض العدّاد 0.' }
];
