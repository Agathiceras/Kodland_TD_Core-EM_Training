/* ============================================================
   Kodland Sparks guide · ENGLISH content
   Translate only the text inside quotes / backticks. Keep HTML tags, ${...} placeholders, keys, ids, file names and URLs unchanged.
   ============================================================ */
window.CONTENT = { lang: 'en' };

/* ============================================================
   INTERFACE: the replicated Kodland Sparks platform + guide layer
   ============================================================ */
CONTENT.ui = {
  title: 'Kodland Sparks Guide',

  /* ---------- top bar ---------- */
  logo: 'Kodland Sparks',
  nav: { feed:'Feed', my:'My projects', publish:'Publish project', studio:'Studio', ai:'AI helper' },

  /* ---------- Feed ---------- */
  feed: {
    bannerTitle: 'Make your profile yours',
    bannerText: 'Set an avatar and pick a call sign — everyone sees it on your profile.',
    bannerBtn: 'Customize profile',
    featured: 'Latest Featured Projects',
    feed: 'Feed',
    filter: 'All projects ˅',
    results: '(11.6K results)',
    search: '🔍 Nickname or project title',
    feedbackWanted: 'Feedback wanted'
  },
  // text drawn inside some project thumbnails (fake game screens)
  thumbs: { coins:'🪙 79 coins', play:'▶ PLAY', heroes:'HEROES', armory:'ARMORY', shop:'SHOP', magicLab:'MAGIC LAB', neonRacer:'NEON RACER' },

  /* ---------- a published project (Creeper) ---------- */
  project: {
    title: 'Creeper',
    download: 'Download',
    authorName: 'Mia Torres',
    uploaded: 'Uploaded Oct 16, 2026',
    desc: 'A Creeper with a Christmas hat got lost!! Help me find it!!',
    showTr: 'Show translation',
    fbTitle: 'Published feedback',
    fbUpdated: 'Updated Oct 16, 2026',
    fbBody: '<p>Mia, you made a super recognisable character with just a few pixels, and the Christmas hat gives your Creeper a fun and original touch.</p><p>Your festive Creeper is full of personality and creativity — it’s clear you enjoy inventing unique characters!</p>'
  },

  /* ---------- My projects ---------- */
  my: {
    name: 'Alex Tutor',
    friends: 'Friends',
    friendsTab: 'Friends (0)',
    subsTab: 'Subscribers (0)',
    noFriends: 'No friends yet',
    privateTag: 'Private project',
    cardTitle: 'Drawing'
  },

  /* ---------- Publish project ---------- */
  publish: {
    title: 'New <span>project</span>',
    sub: 'Pick a project type, fill in the details, and choose who can see it.',
    typeLabel: 'Project type',
    // [icon, name, description] — keep the first item (icon name) unchanged
    types: [
      ['image', 'Image', 'Upload a drawing, picture, GIF or WebP.'],
      ['python', 'Python', 'Paste your Python code — visitors can run it in the browser.'],
      ['game', 'Game or Web App', '.sb3 from Scratch or .zip with Unity/Godot/HTML/Python.'],
      ['creeper', 'Minecraft skin', 'Upload a 64×64 skin and show it on a 3D model.'],
      ['book', 'Story', 'A page with text, images and embeds'],
      ['globe', 'Embed', 'Paste a YouTube, Vimeo, Sketchfab, Tinkercad or Canva link.'],
      ['github', 'GitHub', 'Link a public GitHub repository.'],
      ['box', 'Other', 'If none of the types above fit — like a Roblox game or a Play Market app.']
    ],
    titleLabel: 'Title',
    titleHint: '30 characters left',
    descLabel: 'Description',
    descHint: '240 characters left',
    fileLabel: 'Drawing',
    chooseFile: 'Choose file',
    fileHint: 'PNG, JPG, WebP or GIF up to 5 MB',
    section: '📁 Section',
    noSection: 'No section',
    sectionHint: 'Sections help group your projects on your profile page.',
    reactions: 'Reactions',
    reactionsHint: 'Pick which reactions viewers can leave on this project.',
    heartAlways: '💖 Heart is always available',
    appearance: 'Appearance',
    appearanceHint: 'Choose a frame color to highlight your project card in the feed.',
    frameSlots: '5 of 5 frame slots available',
    frameDefault: '⚫ Default',
    common: 'Common',
    commonFrames: ['🔵 Sky', '🟢 Emerald', '🟣 Violet', '🔴 Red'],
    rare: 'Rare',
    rareFrames: ['Lavender', 'Pink', 'Gray'],
    visibility: 'Visibility',
    // [name, description] — Public · Friends only · Only me
    vis: [
      ['Public', 'Appears in the feed and on your public portfolio.'],
      ['Friends only', 'Visible to your friends, your teachers, and you.'],
      ['Only me', 'Visible only to you on your portfolio.']
    ],
    // [label, description] — the three switches
    toggles: [
      ['Request feedback', 'Other authors will be able to leave structured feedback on your project. Available for public projects only.'],
      ['I’m OK with Kodland Sparks using this project in promotions', 'For example, it might appear in our social media, ads, or on the main page to show other kids what’s possible here. You can change this anytime.'],
      ['Take part in the Discord selection', 'Once a day we post the day’s best projects to our Discord server. Keep this on and yours can be picked too. Public projects only.']
    ],
    publish: 'Publish'
  },

  /* ---------- Studio: modes and slots ---------- */
  studio: {
    modesTitle: 'What do you want to make?',
    modesSub: 'Pick a mode to get started.',
    creative: 'Creative mode',
    creativeText: 'Build anything you like — games, sites, art.',
    challenges: 'Challenges mode',
    challengesText: 'Complete tasks and earn crystals.',
    slotsTitle: 'Creative Studio',
    slotsSub: 'Pick a project to continue, or start something new.',
    slot: n => `Slot ${n}`,
    startHere: 'Start here',
    comingSoon: 'Coming soon',
    crumbBack: 'My projects'
  },

  /* ---------- Studio: "What will you build?" menu ---------- */
  build: {
    title: 'What will you build?',
    sub: 'Pick where to start.',
    back: '‹ Back',
    recommended: 'recommended',
    progGroup: 'Programming &amp; development',
    mediaGroup: 'Media &amp; content',
    // [name, description] of each starting card
    cards: {
      web: ['Game or web app', 'HTML, CSS, JavaScript or Python'],
      terminal: ['Terminal Python', 'A program in the terminal'],
      scratch: ['Scratch', 'Build from Scratch blocks'],
      pixel: ['Pixel Art', 'Draw pixel by pixel'],
      anim: ['Animation', 'Draw frame by frame'],
      music: ['Music', 'A track on a grid'],
      skin: ['Skin Editor', 'A skin for a 3D model']
    },
    // [heading, description] of each group of templates
    groups: {
      webjs: ['Web App JS', 'A web page built with HTML, CSS and JavaScript. Runs in the live preview — changes show up instantly.'],
      webpy: ['Web App Python', 'A web page built with HTML and CSS, with the logic in Python. Runs in the live preview — changes show up instantly.'],
      terminal: ['Terminal Python', 'A program in a single Python file. Runs in the terminal with the Play button — talk to it with print() and input().'],
      pixel: ['Pixel Art', 'Draw sprites and animations pixel by pixel. Pick a canvas size to start, then publish it as an image or animation.'],
      anim: ['Animation', 'Draw a short cartoon frame by frame: draw each frame, see the previous one through the onion skin and press play. Pick a canvas size to start.'],
      music: ['Music', 'Build a short track on a grid: paint a melody, add drums and press play.'],
      skin: ['Skin Editor', 'Paint a Minecraft skin on a 2D map and watch it wrap onto a 3D model. Symmetry mirrors your strokes across both sides.']
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
    sizeHint: 'Size in pixels. You can change it later.'
  },

  /* ---------- Studio: editors ---------- */
  editor: {
    // project title shown in the editor bar ('' = empty placeholder)
    titles: { web:'', terminal:'Guess the number', scratch:'', pixel:'', anim:'', music:'Retro', skin:'' },
    myProjects: 'My projects',
    projectTitle: 'Project title',
    newProject: 'New project',
    publish: 'Publish',
    // AI tutor panel
    robby: 'Inimitable Robby',
    aiTutor: 'AI tutor',
    chat: 'Chat',
    tasks: 'Tasks',
    greeting: 'Hey! I’m your coding buddy. What are you building today? Ask me what to add next or how to level up your code — let’s make something cool together! 🚀',
    memory: 'I only remember your last 10 messages — if we talked about something a while ago, give me a quick reminder.',
    askTip: 'Ask for a tip...',
    // web app editor
    preview: 'Preview',
    htmlComment: '<!-- Your HTML goes here -->',
    // terminal Python editor
    terminal: 'Terminal',
    stop: '▢ Stop',
    termOut: 'I picked a number from 1 to 100. Try to guess it!<br>Your guess:',
    answer: 'Your answer',
    send: '➤ Send',
    // Python code shown in the editor: translate only the comment and the text inside "double quotes"
    py: ['import random', '', '# The computer picks a number from 1 to 100', 'secret = random.randint(1, 100)', 'attempts = 0', '', 'print("I picked a number from 1 to 100. Try to guess it!")', '', 'while True:', '    guess = int(input("Your guess: "))', '    attempts += 1', '', '    if guess < secret:', '        print("Too low! Try again.")', '    elif guess > secret:', '        print("Too high! Try again.")', '    else:', '        print("You got it in", attempts, "attempts!")', '        break'],
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
      speed: 'Speed', firstFrame: 'Draw the first frame, then press +'
    },
    // music editor
    music: { track:'Retro ˅', addTrack:'+ Track', tempo:'Tempo', bpm:'180 BPM', drums:'Drums', electronic:'Electronic', acoustic:'Acoustic' }
  },

  /* ---------- AI helper ---------- */
  ai: {
    newChat: '+ New chat',
    keep: 'I keep your last 5 chats, but I remember the important facts from them.',
    memory: 'What I remember about you',
    credits: '1000 of 1000 credits left',
    pictures: '0 of 6 pictures today',
    resets: 'Resets at 00:00 UTC',
    name: 'Spark Aiko',
    role: 'AI helper',
    hello: 'Hi! I am Aiko, your AI helper. Ask me anything about your projects,<br>code or ideas — or pick something below.',
    chips: ['Help me come up with a game idea', 'Explain the error in my code', 'I am stuck, what do I do next?', 'Draw me a character'],
    ask: 'Ask anything...'
  },

  /* ---------- Rewards drawer (crystals) ---------- */
  rewards: { title:'REWARDS', rarity:'COMMON', hint:'Click the chest to open it' },

  /* ---------- Coach card (guide layer) ---------- */
  coach: {
    step: (n, total) => `Sparks guide · ${n}/${total}`,
    hint: '👆 Click the highlighted element',
    next: 'Next →',
    backToMenu: '<br><br>Press <b>Next</b> to go back to the project menu.'
  },

  /* ---------- Finish modal ---------- */
  finish: {
    kicker: 'Guide complete',
    title: '🎓 You know Kodland Sparks',
    intro: 'You’ve toured the platform your students use:',
    items: [
      '<b>Feed</b>: classmates’ projects, with reactions and AI feedback.',
      '<b>My projects</b>: everything saved or published, by tutors and students.',
      '<b>Publish project</b>: share a finished project, choose who sees it and earn rewards.',
      '<b>Studio</b>: Creative mode to build code (web apps, Python, Scratch), drawings, animations, music and skins, and Challenges mode to earn crystals.',
      '<b>AI helper</b> and <b>AI tutor</b>: they guide and give tips, but <b>the AI proposes, the author decides</b>.'
    ],
    codeLabel: '🔑 Your completion code',
    codeHint: 'Copy it into the training to confirm that you completed the guide.',
    back: '← Back to the training',
    closeMsg: 'Close this tab to go back to the training, then enter your completion code there.'
  },

  /* ---------- Welcome screen ---------- */
  welcome: {
    kicker: 'New Educational Model · Tutor training',
    title: 'Kodland Sparks <span>guide</span>',
    lead: 'This guide walks you through <b>Kodland Sparks</b>, the platform where your students publish and build their projects. You’ll move around the platform yourself and click where the guide tells you to.',
    seeTitle: 'What you’ll see',
    see: [
      'The <b>Feed</b>: how students see and react to each other’s projects, and the AI feedback they receive.',
      '<b>My projects</b> and <b>Publish project</b>: where saved work lives and how a finished project is published.',
      '<b>Studio</b>: what students build in class — code (web apps, Python, Scratch), drawings, animations, music and skins — and the Challenges mode.',
      'The <b>AI helper</b> and the <b>crystals</b> students earn.'
    ],
    howTitle: 'How to use it',
    howText: 'This is a guide, not a practice simulation: there are no decisions to make and nothing to lose. Click the highlighted element on each screen, or press <b>Next</b> when the step asks you to read.',
    start: 'START THE GUIDE →'
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
  /* 1 */ { title:'Meet Kodland Sparks',
    text:'<b>Kodland Sparks</b> is the platform where students <b>publish their projects</b>, keep learning between lessons and get feedback from classmates and from an AI mentor.<br><br>The top bar has everything: <b>Feed</b>, <b>My projects</b>, <b>Publish project</b>, <b>Studio</b>, the <b>AI helper</b> and the <b>crystals</b>. We’ll visit each one.' },
  /* 2 */ { title:'The Feed',
    text:'The <b>Feed</b> is the home page: it shows the projects published by students. Each card shows the <b>type of project</b> (Web App, Scratch, PNG, Python…), the reactions it received and its author.<br><br><b>Feedback wanted</b> means the author asked for feedback. Below the featured projects, the Feed lists all projects.' },
  /* 3 */ { title:'Open a classmate’s project',
    text:'Students can interact with the projects their classmates have published. Click the <b>Creeper</b> project to open it.' },
  /* 4 */ { title:'A published project',
    text:'This project is a <b>drawing</b> (PNG). Other types open the same way: Scratch and web projects can be played right here, and Python code runs in the browser.' },
  /* 5 */ { title:'Details and reactions',
    text:'Under the project you can <b>download</b> it and see its <b>author</b>, the upload date, the views and the <b>reactions</b> it received: 💖 👍 😁 🔥 🦄.<br><br>Reactions are the quickest way for classmates to celebrate each other’s work.' },
  /* 6 */ { title:'Feedback from the AI',
    text:'Published projects can also receive <b>written feedback from an AI mentor</b> (here, <b>Inimitable Robby</b>). It points out what the student did well and encourages them to keep creating.<br><br>If a text is written in another language, <b>Show translation</b> translates it.' },
  /* 7 */ { title:'My projects',
    text:'Now click <b>My projects</b> in the top bar.' },
  /* 8 */ { title:'Everything you’ve made',
    text:'<b>My projects</b> lists every project that has been saved or published by <b>you, as a tutor, or by a student</b>.<br><br>Each card shows the type (here, <b>PNG</b>) and whether the project is private. It’s where students come back to find their work.' },
  /* 9 */ { title:'Publish project',
    text:'Click <b>Publish project</b> in the top bar.' },
  /* 10 */ { title:'Publish a finished project',
    text:'<b>Publish project</b> is for projects that students <b>already made and saved on their computer</b>. First they choose the type: Image, Python, Game or Web App (a Scratch .sb3 or a .zip), Minecraft skin, Story, Embed, GitHub or Other.' },
  /* 11 */ { title:'Fill in the details',
    text:'The student adds a <b>title</b> (30 characters), a <b>description</b> (240 characters) and the <b>file</b> (PNG, JPG, WebP or GIF up to 5 MB).<br><br>They can also group projects in a <b>section</b> and choose which <b>reactions</b> viewers can leave.' },
  /* 12 */ { title:'Choose who sees it',
    text:'<b>Appearance</b> sets a frame colour for the card in the Feed; more colours unlock later.<br><br><b>Visibility</b>: <b>Public</b>, <b>Friends only</b> or <b>Only me</b>.<br><br>Optional switches: <b>Request feedback</b>, letting Kodland Sparks use the project in promotions, and the daily <b>Discord selection</b>.' },
  /* 13 */ { title:'Publish',
    text:'Pressing <b>Publish</b> shares the project. Publishing can <b>earn rewards</b> — the button shows the crystal icon. We’ll see crystals at the end.' },
  /* 14 */ { title:'Studio',
    text:'Now the part students use most in class. Click <b>Studio</b>.' },
  /* 15 */ { title:'Two modes',
    text:'<b>Studio</b> has two modes:<br><br>• <b>Creative mode</b>: build anything you like — games, sites, art — from scratch or from a base.<br>• <b>Challenges mode</b>: complete tasks and <b>earn crystals</b>.' },
  /* 16 */ { title:'Creative mode',
    text:'Click <b>Creative mode</b>.' },
  /* 17 */ { title:'Project slots',
    text:'The <b>Creative Studio</b> keeps the projects students are working on in <b>slots</b>. Slots 1 to 3 are open; slots 4 to 6 are coming soon.<br><br>Click <b>Slot 1</b> to start a new project.' },
  /* 18 */ { title:'What will you build?',
    text:'Students pick where to start:<br>• <b>Programming &amp; development</b>: Game or web app, Terminal Python, Scratch.<br>• <b>Media &amp; content</b>: Pixel Art, Animation, Music, Skin Editor.<br><br>What they use depends on their course. Click <b>Game or web app</b>.' },
  /* 19 */ { title:'Web app: choose a starting point',
    text:'A web app is built with <b>HTML, CSS and JavaScript</b> (Web App JS), or with HTML and CSS and the logic in <b>Python</b> (Web App Python).<br><br>Students start from an <b>Empty project</b> or from a base, like Alien Invaders or Snake game. Click <b>Empty project</b> under Web App JS.' },
  /* 20 */ { title:'The editor: preview and code',
    text:'At the top, the <b>Preview</b> shows the result live: changes appear instantly. Below it, the code tabs: <b>HTML</b>, <b>CSS</b> and <b>JS</b>.' },
  /* 21 */ { title:'The AI tutor',
    text:'On the right, the <b>AI tutor</b> (Inimitable Robby) is a coding buddy with a <b>Chat</b> and a <b>Tasks</b> tab. Students ask it for a tip or how to level up their code.<br><br>Remember: <b>the AI proposes, the author decides</b>. It helps; it doesn’t build the project for them.' },
  /* 22 */ { title:'Save, name and publish',
    text:'The top bar shows the <b>slot</b>, a save button and the <b>project title</b>. On the right: <b>New project</b>, buttons to open, upload and download a project, and <b>Publish</b>, which shares it in the Feed.' },
  /* 23 */ { title:'Start another project',
    text:'Let’s look at other kinds of projects. Click <b>New project</b>.' },
  /* 24 */ { title:'Terminal Python',
    text:'<b>Terminal Python</b> is a program that runs in a terminal. Click it.' },
  /* 25 */ { title:'Start from a base',
    text:'A Python program lives in a single file, runs with the <b>Play</b> button and talks to the user with <code>print()</code> and <code>input()</code>.<br><br>Click <b>Guess the number</b>.' },
  /* 26 */ { title:'A Python project',
    text:'The program runs in the black <b>terminal</b>: it prints messages and waits for the player’s answer in the <b>Your answer</b> box. <b>Run</b> / <b>Stop</b> starts and stops it, and the <b>Python code</b> is right below. The AI tutor is on the right, as in every code editor.' + CONTENT.ui.coach.backToMenu },
  /* 27 */ { title:'Scratch',
    text:'<b>Scratch</b> lets students build with Scratch blocks. Click it.' },
  /* 28 */ { title:'A Scratch project',
    text:'The <b>Scratch editor</b> inside Kodland Sparks: the <b>block categories and palette</b> on the left, the <b>code area</b> in the middle, and the <b>stage</b> with the sprite on the right. There are also <b>Costumes</b> and <b>Sounds</b> tabs. The AI tutor waits in the round button on the right.' + CONTENT.ui.coach.backToMenu },
  /* 29 */ { title:'Pixel Art',
    text:'For drawing, students can use <b>Pixel Art</b>: they draw pixel by pixel. Click it.' },
  /* 30 */ { title:'Pick a canvas size',
    text:'They pick a <b>canvas size</b>; <b>32 × 32</b> is the recommended one. The result can be published as an image or an animation.<br><br>Click <b>32 × 32</b>.' },
  /* 31 */ { title:'A drawing project',
    text:'The <b>pixel art editor</b>: drawing tools, brush sizes, shading, colours and undo on the left, the <b>canvas</b> in the middle, and the <b>frames</b> at the bottom to turn the drawing into an animation.' + CONTENT.ui.coach.backToMenu },
  /* 32 */ { title:'Animation',
    text:'<b>Animation</b> lets students draw a short cartoon frame by frame. Click it.' },
  /* 33 */ { title:'Pick a canvas size',
    text:'Animation canvases come in three sizes; <b>960 × 720</b> is the recommended one. Click it.' },
  /* 34 */ { title:'An animation project',
    text:'Students draw each <b>frame</b>, see the previous one through the <b>onion skin</b>, and press play to watch the animation. They can change the speed and loop it.' + CONTENT.ui.coach.backToMenu },
  /* 35 */ { title:'Music',
    text:'<b>Music</b> lets students build a short track on a grid. Click it.' },
  /* 36 */ { title:'Start a track',
    text:'They can start a <b>New track</b> or from a base: Retro, Tetris or K-pop. Click <b>Retro</b>.' },
  /* 37 */ { title:'A music project',
    text:'Students <b>paint a melody</b> on the grid, add <b>tracks</b> and <b>drums</b>, change the <b>tempo</b> and press play.' + CONTENT.ui.coach.backToMenu },
  /* 38 */ { title:'Skin Editor',
    text:'<b>Skin Editor</b> is for Minecraft: students paint a skin for a 3D model. Click it.' },
  /* 39 */ { title:'Choose a character',
    text:'They start from <b>Steve</b> or <b>Alex</b>. Click <b>Steve</b>.' },
  /* 40 */ { title:'A skin project',
    text:'The skin is painted on a <b>3D model</b>, or on the <b>2D map</b>, and symmetry mirrors the strokes on both sides. When it’s ready, it can be <b>exported</b> as PNG or MCPACK.' },
  /* 41 */ { title:'AI helper',
    text:'The green <b>AI helper</b> button in the top bar opens a chat. Click it.' },
  /* 42 */ { title:'Ask Aiko',
    text:'<b>Aiko</b> is the students’ AI helper: they can ask about their projects, code or ideas, or pick a suggestion like <i>Explain the error in my code</i> or <i>I am stuck, what do I do next?</i><br><br>It remembers the important facts from the last chats, and students can see and delete those notes.' },
  /* 43 */ { title:'Crystals',
    text:'The purple counter shows the <b>crystals</b> the student has earned. Click it.' },
  /* 44 */ { btn:'Finish ✓', title:'Rewards',
    text:'This is the <b>Rewards</b> panel. Students earn crystals by completing tasks in <b>Challenges mode</b> and by publishing projects, and they open a <b>chest</b> to see what they won.<br><br>There are none yet, so the counter shows 0.' }
];
