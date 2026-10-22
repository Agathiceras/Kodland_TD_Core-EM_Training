/* ============================================================
   Kodland Sparks guide · INDONESIAN content
   Translate only the text inside quotes / backticks. Keep HTML tags, ${...} placeholders, keys, ids, file names and URLs unchanged.
   ============================================================ */
window.CONTENT = { lang: 'id' };

/* ============================================================
   INTERFACE: the replicated Kodland Sparks platform + guide layer
   ============================================================ */
CONTENT.ui = {
  title: 'Panduan Kodland Sparks',

  /* ---------- top bar ---------- */
  logo: 'Kodland Sparks',
  nav: { feed:'Feed', my:'My projects', publish:'Publish project', studio:'Studio', ai:'AI helper' },

  /* ---------- Feed ---------- */
  feed: {
    bannerTitle: 'Buat profilmu jadi khas dirimu',
    bannerText: 'Pasang avatar dan pilih julukan — semua orang bisa melihatnya di profilmu.',
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
    desc: 'Creeper bertopi Natal hilang!! Bantu aku menemukannya!!',
    showTr: 'Show translation',
    fbTitle: 'Published feedback',
    fbUpdated: 'Updated Oct 16, 2026',
    fbBody: '<p>Mia, kamu membuat karakter yang sangat mudah dikenali hanya dengan beberapa piksel, dan topi Natalnya memberi Creeper-mu sentuhan yang seru dan orisinal.</p><p>Creeper bernuansa Natal buatanmu penuh kepribadian dan kreativitas — kelihatan sekali kamu senang menciptakan karakter-karakter yang unik!</p>'
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
    sub: 'Pilih jenis proyek, isi detailnya, dan tentukan siapa yang bisa melihatnya.',
    typeLabel: 'Project type',
    // [icon, name, description] — keep the first item (icon name) unchanged
    types: [
      ['image', 'Image', 'Unggah gambar buatanmu, foto, GIF, atau WebP.'],
      ['python', 'Python', 'Tempel kode Python-mu — pengunjung bisa menjalankannya di browser.'],
      ['game', 'Game or Web App', 'File .sb3 dari Scratch atau .zip berisi Unity/Godot/HTML/Python.'],
      ['creeper', 'Minecraft skin', 'Unggah skin 64×64 dan tampilkan di model 3D.'],
      ['book', 'Story', 'Halaman berisi teks, gambar, dan konten sematan'],
      ['globe', 'Embed', 'Tempel link YouTube, Vimeo, Sketchfab, Tinkercad, atau Canva.'],
      ['github', 'GitHub', 'Tautkan repositori GitHub yang publik.'],
      ['box', 'Other', 'Kalau tidak ada jenis di atas yang cocok — misalnya game Roblox atau aplikasi Play Market.']
    ],
    titleLabel: 'Title',
    titleHint: '30 karakter tersisa',
    descLabel: 'Description',
    descHint: '240 karakter tersisa',
    fileLabel: 'Drawing',
    chooseFile: 'Choose file',
    fileHint: 'PNG, JPG, WebP, atau GIF hingga 5 MB',
    section: '📁 Section',
    noSection: 'No section',
    sectionHint: 'Section membantu mengelompokkan proyek-proyekmu di halaman profil.',
    reactions: 'Reactions',
    reactionsHint: 'Pilih reaksi apa saja yang bisa diberikan penonton pada proyek ini.',
    heartAlways: '💖 Hati selalu tersedia',
    appearance: 'Appearance',
    appearanceHint: 'Pilih warna bingkai untuk menonjolkan kartu proyekmu di feed.',
    frameSlots: '5 dari 5 slot bingkai tersedia',
    frameDefault: '⚫ Default',
    common: 'Common',
    commonFrames: ['🔵 Sky', '🟢 Emerald', '🟣 Violet', '🔴 Red'],
    rare: 'Rare',
    rareFrames: ['Lavender', 'Pink', 'Gray'],
    visibility: 'Visibility',
    // [name, description] — Public · Friends only · Only me
    vis: [
      ['Public', 'Muncul di feed dan di portofolio publikmu.'],
      ['Friends only', 'Terlihat oleh teman-temanmu, guru-gurumu, dan kamu.'],
      ['Only me', 'Hanya terlihat olehmu di portofoliomu.']
    ],
    // [label, description] — the three switches
    toggles: [
      ['Request feedback', 'Kreator lain bisa memberikan umpan balik terstruktur pada proyekmu. Hanya untuk proyek publik.'],
      ['I’m OK with Kodland Sparks using this project in promotions', 'Misalnya, proyekmu bisa muncul di media sosial kami, di iklan, atau di halaman utama untuk menunjukkan kepada anak-anak lain apa saja yang bisa dibuat di sini. Kamu bisa mengubahnya kapan saja.'],
      ['Take part in the Discord selection', 'Setiap hari kami memposting proyek-proyek terbaik hari itu ke server Discord kami. Biarkan sakelar ini tetap aktif, maka proyekmu juga bisa terpilih. Hanya untuk proyek publik.']
    ],
    publish: 'Publish'
  },

  /* ---------- Studio: modes and slots ---------- */
  studio: {
    modesTitle: 'Kamu mau membuat apa?',
    modesSub: 'Pilih mode untuk memulai.',
    creative: 'Creative mode',
    creativeText: 'Buat apa saja yang kamu suka — game, situs web, karya seni.',
    challenges: 'Challenges mode',
    challengesText: 'Selesaikan tugas dan kumpulkan kristal.',
    slotsTitle: 'Creative Studio',
    slotsSub: 'Pilih proyek untuk dilanjutkan, atau mulai sesuatu yang baru.',
    slot: n => `Slot ${n}`,
    startHere: 'Start here',
    comingSoon: 'Coming soon',
    crumbBack: 'My projects'
  },

  /* ---------- Studio: "What will you build?" menu ---------- */
  build: {
    title: 'Apa yang akan kamu buat?',
    sub: 'Pilih dari mana kamu mau mulai.',
    back: '‹ Back',
    recommended: 'recommended',
    progGroup: 'Programming &amp; development',
    mediaGroup: 'Media &amp; content',
    // [name, description] of each starting card
    cards: {
      web: ['Game or web app', 'HTML, CSS, JavaScript, atau Python'],
      terminal: ['Terminal Python', 'Program di terminal'],
      scratch: ['Scratch', 'Membuat dengan blok-blok Scratch'],
      pixel: ['Pixel Art', 'Menggambar piksel demi piksel'],
      anim: ['Animation', 'Menggambar frame demi frame'],
      music: ['Music', 'Lagu di atas grid'],
      skin: ['Skin Editor', 'Skin untuk model 3D']
    },
    // [heading, description] of each group of templates
    groups: {
      webjs: ['Web App JS', 'Halaman web yang dibuat dengan HTML, CSS, dan JavaScript. Berjalan di live preview — perubahan langsung terlihat.'],
      webpy: ['Web App Python', 'Halaman web yang dibuat dengan HTML dan CSS, dengan logika dalam Python. Berjalan di live preview — perubahan langsung terlihat.'],
      terminal: ['Terminal Python', 'Program dalam satu file Python. Berjalan di terminal dengan tombol Play — berinteraksi dengannya lewat print() dan input().'],
      pixel: ['Pixel Art', 'Gambar sprite dan animasi piksel demi piksel. Pilih ukuran kanvas untuk memulai, lalu publikasikan sebagai gambar atau animasi.'],
      anim: ['Animation', 'Gambar kartun pendek frame demi frame: gambar setiap frame, lihat frame sebelumnya lewat onion skin, lalu tekan play. Pilih ukuran kanvas untuk memulai.'],
      music: ['Music', 'Buat lagu pendek di atas grid: lukis melodi, tambahkan drum, lalu tekan play.'],
      skin: ['Skin Editor', 'Lukis skin Minecraft di peta 2D dan lihat skin itu membungkus model 3D. Simetri mencerminkan goresanmu di kedua sisi.']
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
    sizeHint: 'Ukuran dalam piksel. Kamu bisa mengubahnya nanti.'
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
    greeting: 'Hai! Aku teman coding-mu. Kamu sedang membuat apa hari ini? Tanyakan apa yang sebaiknya ditambahkan berikutnya atau cara membuat kodemu makin keren — ayo kita buat sesuatu yang seru bersama! 🚀',
    memory: 'Aku hanya ingat 10 pesan terakhirmu — kalau kita pernah membahas sesuatu agak lama, ingatkan aku sebentar, ya.',
    askTip: 'Ask for a tip...',
    // web app editor
    preview: 'Preview',
    htmlComment: '<!-- Tulis HTML-mu di sini -->',
    // terminal Python editor
    terminal: 'Terminal',
    stop: '▢ Stop',
    termOut: 'Aku sudah memilih angka dari 1 sampai 100. Coba tebak!<br>Tebakanmu:',
    answer: 'Your answer',
    send: '➤ Send',
    // Python code shown in the editor: translate only the comment and the text inside "double quotes"
    py: ['import random', '', '# Komputer memilih angka dari 1 sampai 100', 'secret = random.randint(1, 100)', 'attempts = 0', '', 'print("Aku sudah memilih angka dari 1 sampai 100. Coba tebak!")', '', 'while True:', '    guess = int(input("Tebakanmu: "))', '    attempts += 1', '', '    if guess < secret:', '        print("Terlalu kecil! Coba lagi.")', '    elif guess > secret:', '        print("Terlalu besar! Coba lagi.")', '    else:', '        print("Kamu berhasil dalam", attempts, "percobaan!")', '        break'],
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
      speed: 'Speed', firstFrame: 'Gambar frame pertama, lalu tekan +'
    },
    // music editor
    music: { track:'Retro ˅', addTrack:'+ Track', tempo:'Tempo', bpm:'180 BPM', drums:'Drums', electronic:'Electronic', acoustic:'Acoustic' }
  },

  /* ---------- AI helper ---------- */
  ai: {
    newChat: '+ New chat',
    keep: 'Aku menyimpan 5 obrolan terakhirmu, dan aku mengingat fakta-fakta penting dari obrolan itu.',
    memory: 'What I remember about you',
    credits: '1000 of 1000 credits left',
    pictures: '0 of 6 pictures today',
    resets: 'Resets at 00:00 UTC',
    name: 'Spark Aiko',
    role: 'AI helper',
    hello: 'Hai! Aku Aiko, AI helper-mu. Tanyakan apa saja tentang proyek,<br>kode, atau idemu — atau pilih salah satu di bawah ini.',
    chips: ['Help me come up with a game idea', 'Explain the error in my code', 'I am stuck, what do I do next?', 'Draw me a character'],
    ask: 'Ask anything...'
  },

  /* ---------- Rewards drawer (crystals) ---------- */
  rewards: { title:'REWARDS', rarity:'COMMON', hint:'Klik peti untuk membukanya' },

  /* ---------- Coach card (guide layer) ---------- */
  coach: {
    step: (n, total) => `Panduan Sparks · ${n}/${total}`,
    hint: '👆 Klik elemen yang disorot',
    next: 'Berikutnya →',
    backToMenu: '<br><br>Tekan <b>Berikutnya</b> untuk kembali ke menu proyek.'
  },

  /* ---------- Finish modal ---------- */
  finish: {
    kicker: 'Panduan selesai',
    title: '🎓 Anda sudah mengenal Kodland Sparks',
    intro: 'Anda sudah menjelajahi platform yang dipakai siswa Anda:',
    items: [
      '<b>Feed</b>: proyek teman sekelas, dengan reaksi dan umpan balik dari AI.',
      '<b>My projects</b>: semua yang sudah disimpan atau dipublikasikan, oleh tutor maupun siswa.',
      '<b>Publish project</b>: membagikan proyek yang sudah jadi, memilih siapa yang bisa melihatnya, dan mendapatkan hadiah.',
      '<b>Studio</b>: Creative mode untuk membuat kode (web app, Python, Scratch), gambar, animasi, musik, dan skin, serta Challenges mode untuk mengumpulkan kristal.',
      '<b>AI helper</b> dan <b>AI tutor</b>: keduanya membimbing dan memberi tips, tetapi <b>AI mengusulkan, kreator yang memutuskan</b>.'
    ],
    codeLabel: '🔑 Kode penyelesaian Anda',
    codeHint: 'Salin kode ini ke pelatihan untuk mengonfirmasi bahwa Anda sudah menyelesaikan panduan.',
    back: '← Kembali ke pelatihan',
    closeMsg: 'Tutup tab ini untuk kembali ke pelatihan, lalu masukkan kode penyelesaian Anda di sana.'
  },

  /* ---------- Welcome screen ---------- */
  welcome: {
    kicker: 'Model Pendidikan Baru · Pelatihan tutor',
    title: '<span>Panduan</span> Kodland Sparks',
    lead: 'Panduan ini mengajak Anda menjelajahi <b>Kodland Sparks</b>, platform tempat siswa Anda memublikasikan dan membuat proyek mereka. Anda akan menjelajahi platform ini sendiri dan mengeklik di tempat yang ditunjukkan panduan.',
    seeTitle: 'Yang akan Anda lihat',
    see: [
      '<b>Feed</b>: bagaimana siswa melihat dan memberi reaksi pada proyek satu sama lain, serta umpan balik AI yang mereka terima.',
      '<b>My projects</b> dan <b>Publish project</b>: tempat karya yang tersimpan berada dan cara memublikasikan proyek yang sudah jadi.',
      '<b>Studio</b>: apa yang dibuat siswa di kelas — kode (web app, Python, Scratch), gambar, animasi, musik, dan skin — serta Challenges mode.',
      '<b>AI helper</b> dan <b>kristal</b> yang dikumpulkan siswa.'
    ],
    howTitle: 'Cara menggunakannya',
    howText: 'Ini adalah panduan, bukan simulasi latihan: tidak ada keputusan yang harus diambil dan tidak ada yang bisa salah. Klik elemen yang disorot di setiap layar, atau tekan <b>Berikutnya</b> saat langkahnya meminta Anda membaca.',
    start: 'MULAI PANDUAN →'
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
  /* 1 */ { title:'Kenali Kodland Sparks',
    text:'<b>Kodland Sparks</b> adalah platform tempat siswa <b>memublikasikan proyek mereka</b>, terus belajar di antara pelajaran, dan mendapatkan umpan balik dari teman sekelas serta dari mentor AI.<br><br>Semuanya ada di bar atas: <b>Feed</b>, <b>My projects</b>, <b>Publish project</b>, <b>Studio</b>, <b>AI helper</b>, dan <b>kristal</b>. Kita akan mengunjunginya satu per satu.' },
  /* 2 */ { title:'Feed',
    text:'<b>Feed</b> adalah halaman utama: di sini tampil proyek-proyek yang dipublikasikan siswa. Setiap kartu menunjukkan <b>jenis proyek</b> (Web App, Scratch, PNG, Python…), reaksi yang diterimanya, dan pembuatnya.<br><br><b>Feedback wanted</b> berarti pembuatnya meminta umpan balik. Di bawah proyek-proyek unggulan, Feed menampilkan semua proyek.' },
  /* 3 */ { title:'Buka proyek teman sekelas',
    text:'Siswa bisa berinteraksi dengan proyek yang sudah dipublikasikan teman-teman sekelasnya. Klik proyek <b>Creeper</b> untuk membukanya.' },
  /* 4 */ { title:'Proyek yang sudah dipublikasikan',
    text:'Proyek ini adalah sebuah <b>gambar</b> (PNG). Jenis lain dibuka dengan cara yang sama: proyek Scratch dan web bisa dimainkan langsung di sini, dan kode Python berjalan di browser.' },
  /* 5 */ { title:'Detail dan reaksi',
    text:'Di bawah proyek, Anda bisa mengunduhnya lewat <b>Download</b> dan melihat <b>pembuatnya</b>, tanggal unggah, jumlah tayangan, serta <b>reaksi</b> yang diterimanya: 💖 👍 😁 🔥 🦄.<br><br>Reaksi adalah cara tercepat bagi teman sekelas untuk merayakan karya satu sama lain.' },
  /* 6 */ { title:'Umpan balik dari AI',
    text:'Proyek yang dipublikasikan juga bisa mendapat <b>umpan balik tertulis dari mentor AI</b> (di sini, <b>Inimitable Robby</b>). Mentor AI menyebutkan apa yang sudah dilakukan siswa dengan baik dan menyemangatinya untuk terus berkarya.<br><br>Jika sebuah teks ditulis dalam bahasa lain, <b>Show translation</b> akan menerjemahkannya.' },
  /* 7 */ { title:'My projects',
    text:'Sekarang klik <b>My projects</b> di bar atas.' },
  /* 8 */ { title:'Semua yang sudah dibuat',
    text:'<b>My projects</b> menampilkan setiap proyek yang sudah disimpan atau dipublikasikan oleh <b>Anda sebagai tutor, atau oleh siswa</b>.<br><br>Setiap kartu menunjukkan jenisnya (di sini, <b>PNG</b>) dan apakah proyek itu privat. Di sinilah siswa kembali untuk menemukan karya mereka.' },
  /* 9 */ { title:'Publish project',
    text:'Klik <b>Publish project</b> di bar atas.' },
  /* 10 */ { title:'Publikasikan proyek yang sudah jadi',
    text:'<b>Publish project</b> digunakan untuk proyek yang <b>sudah dibuat dan disimpan siswa di komputer mereka</b>. Pertama, siswa memilih jenisnya: Image, Python, Game or Web App (file Scratch .sb3 atau .zip), Minecraft skin, Story, Embed, GitHub, atau Other.' },
  /* 11 */ { title:'Isi detailnya',
    text:'Siswa menambahkan <b>judul</b> (Title, 30 karakter), <b>deskripsi</b> (Description, 240 karakter), dan <b>file</b> (PNG, JPG, WebP, atau GIF hingga 5 MB).<br><br>Siswa juga bisa mengelompokkan proyek dalam sebuah <b>section</b> dan memilih <b>reaksi</b> apa saja yang bisa diberikan penonton.' },
  /* 12 */ { title:'Tentukan siapa yang bisa melihatnya',
    text:'<b>Appearance</b> mengatur warna bingkai kartu proyek di Feed; warna lain akan terbuka nanti.<br><br><b>Visibility</b>: <b>Public</b> (publik), <b>Friends only</b> (hanya teman), atau <b>Only me</b> (hanya saya).<br><br>Sakelar opsional: <b>Request feedback</b> (minta umpan balik), izin bagi Kodland Sparks untuk memakai proyek dalam promosi, dan <b>Discord selection</b> harian.' },
  /* 13 */ { title:'Publish',
    text:'Menekan <b>Publish</b> akan membagikan proyek. Memublikasikan proyek bisa <b>memberi hadiah</b> — tombolnya menampilkan ikon kristal. Kita akan melihat kristal di bagian akhir.' },
  /* 14 */ { title:'Studio',
    text:'Sekarang, bagian yang paling sering dipakai siswa di kelas. Klik <b>Studio</b>.' },
  /* 15 */ { title:'Dua mode',
    text:'<b>Studio</b> punya dua mode:<br><br>• <b>Creative mode</b>: membuat apa saja — game, situs web, karya seni — dari nol atau dari sebuah dasar.<br>• <b>Challenges mode</b>: menyelesaikan tugas dan <b>mengumpulkan kristal</b>.' },
  /* 16 */ { title:'Creative mode',
    text:'Klik <b>Creative mode</b>.' },
  /* 17 */ { title:'Slot proyek',
    text:'<b>Creative Studio</b> menyimpan proyek yang sedang dikerjakan siswa di dalam <b>slot</b>. Slot 1 sampai 3 sudah terbuka; slot 4 sampai 6 akan segera hadir.<br><br>Klik <b>Slot 1</b> untuk memulai proyek baru.' },
  /* 18 */ { title:'Apa yang akan kamu buat?',
    text:'Siswa memilih dari mana mereka mulai:<br>• <b>Programming &amp; development</b> (pemrograman): Game or web app, Terminal Python, Scratch.<br>• <b>Media &amp; content</b> (media dan konten): Pixel Art, Animation, Music, Skin Editor.<br><br>Pilihan yang dipakai bergantung pada kursus mereka. Klik <b>Game or web app</b>.' },
  /* 19 */ { title:'Web app: pilih titik awal',
    text:'Web app dibuat dengan <b>HTML, CSS, dan JavaScript</b> (Web App JS), atau dengan HTML dan CSS dengan logika dalam <b>Python</b> (Web App Python).<br><br>Siswa memulai dari <b>Empty project</b> (proyek kosong) atau dari sebuah dasar, seperti Alien Invaders atau Snake game. Klik <b>Empty project</b> di bawah Web App JS.' },
  /* 20 */ { title:'Editor: pratinjau dan kode',
    text:'Di bagian atas, <b>Preview</b> menampilkan hasilnya secara langsung: setiap perubahan langsung terlihat. Di bawahnya ada tab kode: <b>HTML</b>, <b>CSS</b>, dan <b>JS</b>.' },
  /* 21 */ { title:'AI tutor',
    text:'Di sebelah kanan, <b>AI tutor</b> (Inimitable Robby) adalah teman coding dengan tab <b>Chat</b> dan <b>Tasks</b>. Siswa bisa meminta tips atau menanyakan cara meningkatkan kode mereka.<br><br>Ingat: <b>AI mengusulkan, kreator yang memutuskan</b>. AI membantu, tetapi tidak membuatkan proyeknya untuk siswa.' },
  /* 22 */ { title:'Simpan, beri nama, dan publikasikan',
    text:'Bar atas menampilkan <b>slot</b>, tombol simpan, dan <b>judul proyek</b>. Di sebelah kanan ada <b>New project</b>, tombol untuk membuka, mengunggah, dan mengunduh proyek, serta <b>Publish</b>, yang membagikan proyek di Feed.' },
  /* 23 */ { title:'Mulai proyek lain',
    text:'Ayo lihat jenis proyek lainnya. Klik <b>New project</b>.' },
  /* 24 */ { title:'Terminal Python',
    text:'<b>Terminal Python</b> adalah program yang berjalan di terminal. Klik pilihan ini.' },
  /* 25 */ { title:'Mulai dari sebuah dasar',
    text:'Program Python ada di dalam satu file, dijalankan dengan tombol <b>Play</b>, dan berinteraksi dengan pengguna lewat <code>print()</code> dan <code>input()</code>.<br><br>Klik <b>Guess the number</b>.' },
  /* 26 */ { title:'Proyek Python',
    text:'Program berjalan di <b>terminal</b> hitam: program menampilkan pesan dan menunggu jawaban pemain di kotak <b>Your answer</b>. <b>Run</b> / <b>Stop</b> menjalankan dan menghentikan program, dan <b>kode Python</b> ada tepat di bawahnya. AI tutor ada di sebelah kanan, seperti di setiap editor kode.' + CONTENT.ui.coach.backToMenu },
  /* 27 */ { title:'Scratch',
    text:'Dengan <b>Scratch</b>, siswa membuat proyek dengan blok-blok Scratch. Klik pilihan ini.' },
  /* 28 */ { title:'Proyek Scratch',
    text:'Inilah <b>editor Scratch</b> di dalam Kodland Sparks: <b>kategori dan palet blok</b> di kiri, <b>area kode</b> di tengah, dan <b>stage</b> dengan sprite di kanan. Ada juga tab <b>Costumes</b> dan <b>Sounds</b>. AI tutor menunggu di tombol bulat di sebelah kanan.' + CONTENT.ui.coach.backToMenu },
  /* 29 */ { title:'Pixel Art',
    text:'Untuk menggambar, siswa bisa memakai <b>Pixel Art</b>: mereka menggambar piksel demi piksel. Klik pilihan ini.' },
  /* 30 */ { title:'Pilih ukuran kanvas',
    text:'Siswa memilih <b>ukuran kanvas</b>; <b>32 × 32</b> adalah ukuran yang disarankan. Hasilnya bisa dipublikasikan sebagai gambar atau animasi.<br><br>Klik <b>32 × 32</b>.' },
  /* 31 */ { title:'Proyek gambar',
    text:'Inilah <b>editor pixel art</b>: alat gambar, ukuran kuas, bayangan, warna, dan undo di kiri, <b>kanvas</b> di tengah, dan <b>frame</b> di bawah untuk mengubah gambar menjadi animasi.' + CONTENT.ui.coach.backToMenu },
  /* 32 */ { title:'Animation',
    text:'Dengan <b>Animation</b>, siswa menggambar kartun pendek frame demi frame. Klik pilihan ini.' },
  /* 33 */ { title:'Pilih ukuran kanvas',
    text:'Kanvas animasi tersedia dalam tiga ukuran; <b>960 × 720</b> adalah ukuran yang disarankan. Klik ukuran itu.' },
  /* 34 */ { title:'Proyek animasi',
    text:'Siswa menggambar setiap <b>frame</b>, melihat frame sebelumnya lewat <b>onion skin</b>, lalu menekan play untuk menonton animasinya. Mereka bisa mengubah kecepatannya dan memutarnya berulang-ulang.' + CONTENT.ui.coach.backToMenu },
  /* 35 */ { title:'Music',
    text:'Dengan <b>Music</b>, siswa membuat lagu pendek di atas grid. Klik pilihan ini.' },
  /* 36 */ { title:'Mulai sebuah lagu',
    text:'Siswa bisa memulai dari <b>New track</b> (lagu baru) atau dari sebuah dasar: Retro, Tetris, atau K-pop. Klik <b>Retro</b>.' },
  /* 37 */ { title:'Proyek musik',
    text:'Siswa <b>melukis melodi</b> di grid, menambahkan <b>track</b> dan <b>drum</b>, mengubah <b>tempo</b>, lalu menekan play.' + CONTENT.ui.coach.backToMenu },
  /* 38 */ { title:'Skin Editor',
    text:'<b>Skin Editor</b> untuk Minecraft: siswa melukis skin untuk model 3D. Klik pilihan ini.' },
  /* 39 */ { title:'Pilih karakter',
    text:'Siswa memulai dari <b>Steve</b> atau <b>Alex</b>. Klik <b>Steve</b>.' },
  /* 40 */ { title:'Proyek skin',
    text:'Skin dilukis di <b>model 3D</b> atau di <b>2D map</b>, dan simetri mencerminkan goresan di kedua sisi. Kalau sudah siap, skin bisa <b>diekspor</b> sebagai PNG atau MCPACK.' },
  /* 41 */ { title:'AI helper',
    text:'Tombol hijau <b>AI helper</b> di bar atas membuka obrolan. Klik tombol itu.' },
  /* 42 */ { title:'Tanya Aiko',
    text:'<b>Aiko</b> adalah AI helper para siswa: mereka bisa bertanya tentang proyek, kode, atau ide mereka, atau memilih saran seperti <i>Explain the error in my code</i> (jelaskan error di kodeku) atau <i>I am stuck, what do I do next?</i> (aku buntu, apa yang harus kulakukan sekarang?).<br><br>Aiko mengingat fakta-fakta penting dari obrolan terakhir, dan siswa bisa melihat serta menghapus catatan itu.' },
  /* 43 */ { title:'Kristal',
    text:'Penghitung ungu menunjukkan jumlah <b>kristal</b> yang sudah dikumpulkan siswa. Klik penghitung itu.' },
  /* 44 */ { btn:'Selesai ✓', title:'Hadiah',
    text:'Ini adalah panel <b>Rewards</b> (hadiah). Siswa mengumpulkan kristal dengan menyelesaikan tugas di <b>Challenges mode</b> dan dengan memublikasikan proyek, lalu mereka membuka <b>peti</b> untuk melihat apa yang mereka dapatkan.<br><br>Belum ada kristal, jadi penghitungnya menunjukkan 0.' }
];
