window.CONTENT = { lang: 'it' };
/* ============================================================
   Kodland Sparks guide · ENGLISH content
   Translate only the text inside quotes / backticks. Keep HTML tags, ${...} placeholders, keys, ids, file names and URLs unchanged.
   ============================================================ */

/* ============================================================
   INTERFACE: the replicated Kodland Sparks platform + guide layer
   ============================================================ */
CONTENT.ui = {
  title: 'Guida a Kodland Sparks',

  /* ---------- top bar ---------- */
  logo: 'Kodland Sparks',
  nav: { feed:'Feed', my:'My projects', publish:'Publish project', studio:'Studio', ai:'AI helper' },

  /* ---------- Feed ---------- */
  feed: {
    bannerTitle: 'Rendi unico il tuo profilo',
    bannerText: 'Scegli un avatar e un nickname: saranno visibili a tutti sul tuo profilo.',
    bannerBtn: 'Personalizza il profilo',
    featured: 'Ultimi progetti in evidenza',
    feed: 'Feed',
    filter: 'Tutti i progetti ˅',
    results: '(11.600 risultati)',
    search: '🔍 Nickname o titolo del progetto',
    feedbackWanted: 'Feedback richiesto'
  },
  // text drawn inside some project thumbnails (fake game screens)
  thumbs: { coins:'🪙 79 monete', play:'▶ GIOCA', heroes:'EROI', armory:'ARMERIA', shop:'NEGOZIO', magicLab:'LABORATORIO MAGICO', neonRacer:'CORSE AL NEON' },

  /* ---------- a published project (Creeper) ---------- */
  project: {
    title: 'Creeper',
    download: 'Scarica',
    authorName: 'Mia Torres',
    uploaded: 'Caricato il 16 ottobre 2026',
    desc: 'Un Creeper con un cappello natalizio si è perso!! Aiutami a ritrovarlo!!',
    showTr: 'Mostra traduzione',
    fbTitle: 'Feedback pubblicato',
    fbUpdated: 'Aggiornato il 16 ottobre 2026',
    fbBody: '<p>Mia, hai creato un personaggio subito riconoscibile con pochissimi pixel e il cappello natalizio dà al tuo Creeper un tocco divertente e originale.</p><p>Il tuo Creeper in versione natalizia è pieno di personalità e creatività: si vede che ti piace inventare personaggi unici!</p>'
  },

  /* ---------- My projects ---------- */
  my: {
    name: 'Alex Tutor',
    friends: 'Amici',
    friendsTab: 'Amici (0)',
    subsTab: 'Iscritti (0)',
    noFriends: 'Ancora nessun amico',
    privateTag: 'Progetto privato',
    cardTitle: 'Disegno'
  },

  /* ---------- Publish project ---------- */
  publish: {
    title: 'Nuovo <span>progetto</span>',
    sub: 'Scegli il tipo di progetto, inserisci i dettagli e decidi chi può vederlo.',
    typeLabel: 'Tipo di progetto',
    // [icon, name, description] — keep the first item (icon name) unchanged
    types: [
      ['image', 'Immagine', 'Carica un disegno, una foto, una GIF o un file WebP.'],
      ['python', 'Python', 'Incolla il tuo codice Python: chi visita il progetto potrà eseguirlo nel browser.'],
      ['game', 'Game or Web App', 'Un file .sb3 di Scratch o un file .zip con Unity/Godot/HTML/Python.'],
      ['creeper', 'Minecraft skin', 'Carica una skin 64×64 e visualizzala su un modello 3D.'],
      ['book', 'Storia', 'Una pagina con testi, immagini e contenuti incorporati'],
      ['globe', 'Embed', 'Incolla un link di YouTube, Vimeo, Sketchfab, Tinkercad o Canva.'],
      ['github', 'GitHub', 'Collega un repository pubblico di GitHub.'],
      ['box', 'Altro', 'Se nessuno dei tipi precedenti è adatto, ad esempio per un gioco Roblox o un’app del Play Market.']
    ],
    titleLabel: 'Titolo',
    titleHint: '30 caratteri disponibili',
    descLabel: 'Descrizione',
    descHint: '240 caratteri disponibili',
    fileLabel: 'Disegno',
    chooseFile: 'Scegli file',
    fileHint: 'PNG, JPG, WebP o GIF fino a 5 MB',
    section: '📁 Sezione',
    noSection: 'Nessuna sezione',
    sectionHint: 'Le sezioni ti aiutano a raggruppare i progetti nella pagina del tuo profilo.',
    reactions: 'Reazioni',
    reactionsHint: 'Scegli quali reazioni può lasciare chi guarda questo progetto.',
    heartAlways: '💖 Il cuore è sempre disponibile',
    appearance: 'Aspetto',
    appearanceHint: 'Scegli il colore della cornice per mettere in risalto la scheda del progetto nel Feed.',
    frameSlots: '5 spazi per cornici disponibili su 5',
    frameDefault: '⚫ Predefinita',
    common: 'Comune',
    commonFrames: ['🔵 Azzurro', '🟢 Smeraldo', '🟣 Viola', '🔴 Rosso'],
    rare: 'Rara',
    rareFrames: ['Lavanda', 'Rosa', 'Grigio'],
    visibility: 'Visibilità',
    // [name, description] — Public · Friends only · Only me
    vis: [
      ['Pubblico', 'Compare nel Feed e nel tuo portfolio pubblico.'],
      ['Solo amici', 'Visibile a te, ai tuoi amici e ai tuoi insegnanti.'],
      ['Solo io', 'Visibile solo a te nel tuo portfolio.']
    ],
    // [label, description] — the three switches
    toggles: [
      ['Richiedi feedback', 'Gli altri autori potranno lasciare un feedback strutturato sul tuo progetto. Disponibile solo per i progetti pubblici.'],
      ['Acconsento a far usare questo progetto a Kodland Sparks per attività promozionali', 'Ad esempio, potrebbe comparire sui nostri social, nelle pubblicità o nella pagina principale per mostrare agli altri ragazzi cosa si può creare qui. Puoi cambiare questa scelta in qualsiasi momento.'],
      ['Partecipa alla selezione su Discord', 'Ogni giorno pubblichiamo i migliori progetti della giornata sul nostro server Discord. Lascia attiva questa opzione e anche il tuo potrà essere scelto. Solo per progetti pubblici.']
    ],
    publish: 'Pubblica'
  },

  /* ---------- Studio: modes and slots ---------- */
  studio: {
    modesTitle: 'Che cosa vuoi creare?',
    modesSub: 'Scegli una modalità per iniziare.',
    creative: 'Creative mode',
    creativeText: 'Crea quello che vuoi: giochi, siti, opere artistiche.',
    challenges: 'Challenges mode',
    challengesText: 'Completa le attività e guadagna cristalli.',
    slotsTitle: 'Creative Studio',
    slotsSub: 'Scegli un progetto da continuare o inizia qualcosa di nuovo.',
    slot: n => `Slot ${n}`,
    startHere: 'Inizia qui',
    comingSoon: 'In arrivo',
    crumbBack: 'My projects'
  },

  /* ---------- Studio: "What will you build?" menu ---------- */
  build: {
    title: 'Che cosa creerai?',
    sub: 'Scegli da dove iniziare.',
    back: '‹ Indietro',
    recommended: 'consigliato',
    progGroup: 'Programmazione &amp; sviluppo',
    mediaGroup: 'Media &amp; contenuti',
    // [name, description] of each starting card
    cards: {
      web: ['Game or web app', 'HTML, CSS, JavaScript o Python'],
      terminal: ['Terminal Python', 'Un programma nel terminale'],
      scratch: ['Scratch', 'Crea con i blocchi di Scratch'],
      pixel: ['Pixel Art', 'Disegna pixel per pixel'],
      anim: ['Animation', 'Disegna fotogramma per fotogramma'],
      music: ['Music', 'Un brano su una griglia'],
      skin: ['Skin Editor', 'Una skin per un modello 3D']
    },
    // [heading, description] of each group of templates
    groups: {
      webjs: ['Web App JS', 'Una pagina web creata con HTML, CSS e JavaScript. Funziona nell’anteprima in tempo reale: le modifiche sono subito visibili.'],
      webpy: ['Web App Python', 'Una pagina web creata con HTML e CSS, con la logica in Python. Funziona nell’anteprima in tempo reale: le modifiche sono subito visibili.'],
      terminal: ['Terminal Python', 'Un programma in un unico file Python. Si avvia nel terminale con il pulsante Play e comunica con chi lo usa tramite print() e input().'],
      pixel: ['Pixel Art', 'Disegna sprite e animazioni pixel per pixel. Per iniziare, scegli le dimensioni della tela; poi pubblica il risultato come immagine o animazione.'],
      anim: ['Animation', 'Crea un breve cartone animato fotogramma per fotogramma: disegna ogni fotogramma, usa la funzione onion skin per vedere il precedente in trasparenza e premi Play. Per iniziare, scegli le dimensioni della tela.'],
      music: ['Music', 'Crea un breve brano su una griglia: disegna una melodia, aggiungi la batteria e premi Play.'],
      skin: ['Skin Editor', 'Dipingi una skin di Minecraft su una mappa 2D e osserva come riveste il modello 3D. La simmetria riproduce le pennellate su entrambi i lati.']
    },
    // template buttons (keys are ids — do not change them)
    tpl: {
      webjs:'Progetto vuoto', webjsb:'Progetto di base', alien:'Alien Invaders', calcjs:'Calcolatrice',
      webpy:'Progetto vuoto', webpyb:'Progetto di base', snake:'Gioco del serpente', calcpy:'Calcolatrice',
      termempty:'Progetto vuoto', guess:'Indovina il numero',
      px16:'16 × 16', px32:'32 × 32', px64:'64 × 64', px128:'128 × 128',
      an640:'640 × 480', an960:'960 × 720', an1280:'1280 × 960',
      track:'Nuovo brano', retro:'Retro', tetris:'Tetris', kpop:'K-pop',
      steve:'Steve', alex:'Alex'
    },
    sizeHint: 'Dimensioni in pixel. Puoi modificarle in seguito.'
  },

  /* ---------- Studio: editors ---------- */
  editor: {
    // project title shown in the editor bar ('' = empty placeholder)
    titles: { web:'', terminal:'Indovina il numero', scratch:'', pixel:'', anim:'', music:'Retro', skin:'' },
    myProjects: 'My projects',
    projectTitle: 'Titolo del progetto',
    newProject: 'Nuovo progetto',
    publish: 'Pubblica',
    // AI tutor panel
    robby: 'Inimitable Robby',
    aiTutor: 'AI tutor',
    chat: 'Chat',
    tasks: 'Attività',
    greeting: 'Ciao! Ti aiuto a programmare. Che cosa stai creando oggi? Chiedimi cosa aggiungere o come migliorare il tuo codice: creiamo qualcosa di fantastico insieme! 🚀',
    memory: 'Ricordo solo i tuoi ultimi 10 messaggi: se vuoi riprendere un argomento di cui abbiamo parlato tempo fa, ricordami brevemente di cosa si trattava.',
    askTip: 'Chiedi un consiglio...',
    // web app editor
    preview: 'Anteprima',
    htmlComment: '<!-- Your HTML goes here -->',
    // terminal Python editor
    terminal: 'Terminal',
    stop: '▢ Stop',
    termOut: 'Ho scelto un numero da 1 a 100. Prova a indovinarlo!<br>Il tuo tentativo:',
    answer: 'La tua risposta',
    send: '➤ Invia',
    // Python code shown in the editor: translate only the comment and the text inside "double quotes"
    py: ['import random', '', '# Il computer sceglie un numero da 1 a 100', 'secret = random.randint(1, 100)', 'attempts = 0', '', 'print("Ho scelto un numero da 1 a 100. Prova a indovinarlo!")', '', 'while True:', '    guess = int(input("Il tuo tentativo: "))', '    attempts += 1', '', '    if guess < secret:', '        print("Troppo basso! Riprova.")', '    elif guess > secret:', '        print("Troppo alto! Riprova.")', '    else:', '        print("Hai indovinato in", attempts, "tentativi!")', '        break'],
    // Scratch editor
    scratch: {
      cats: ['Movimento', 'Aspetto', 'Suono', 'Situazioni', 'Controllo', 'Sensori', 'Operatori', 'Variabili', 'I Miei Blocchi'],
      code: '▤ Codice', costumes: '🖌 Costumi', sounds: '🔊 Suoni', find: 'Trova (Ctrl+F)',
      palette: 'Movimento',
      blocks: ['fai <em>10</em> passi', 'ruota ↻ di <em>15</em> gradi', 'ruota ↺ di <em>15</em> gradi', 'vai a <em class="ddv">posizione a caso ▾</em>', 'vai a x: <em>0</em> y: <em>0</em>', 'scivola in <em>1</em> secondi a <em class="ddv">posizione a caso ▾</em>', 'scivola in <em>1</em> secondi a x: <em>0</em> y: <em>0</em>', 'punta in direzione <em>90</em>'],
      sprite: 'Sprite', spriteName: 'Sprite1', size: 'Dimensione', direction: 'Direzione', stage: 'Stage'
    },
    // drawing editors (pixel art, animation, skin)
    draw: {
      draw: 'DISEGNO', brush: 'DIMENSIONE PENNELLO', shade: 'SFUMATURA &amp; DITHERING', canvas: 'TELA', history: 'CRONOLOGIA',
      dither: 'DITHERING', view: 'VISTA', exportL: 'Esporta', map2d: 'Mappa 2D',
      speed: 'Velocità', firstFrame: 'Disegna il primo fotogramma, poi premi +'
    },
    // music editor
    music: { track:'Retro ˅', addTrack:'+ Traccia', tempo:'Tempo', bpm:'180 BPM', drums:'Batteria', electronic:'Elettronica', acoustic:'Acustica' }
  },

  /* ---------- AI helper ---------- */
  ai: {
    newChat: '+ Nuova chat',
    keep: 'Conservo le tue ultime 5 chat e ricordo le informazioni importanti emerse nelle conversazioni.',
    memory: 'Cosa ricordo di te',
    credits: '1000 crediti disponibili su 1000',
    pictures: '0 immagini su 6 oggi',
    resets: 'Si azzera alle 00:00 UTC',
    name: 'Spark Aiko',
    role: 'AI helper',
    hello: 'Ciao! Sono Aiko, il tuo assistente AI. Fammi una domanda sui tuoi progetti,<br>sul codice o sulle tue idee, oppure scegli una proposta qui sotto.',
    chips: ['Aiutami a trovare un’idea per un gioco', 'Spiegami questo errore nel mio codice', 'Mi sono bloccato, come posso proseguire?', 'Disegnami un personaggio'],
    ask: 'Fammi una domanda...'
  },

  /* ---------- Rewards drawer (crystals) ---------- */
  rewards: { title:'RICOMPENSE', rarity:'COMUNE', hint:'Fai clic sul forziere per aprirlo' },

  /* ---------- Coach card (guide layer) ---------- */
  coach: {
    step: (n, total) => `Guida a Sparks · ${n}/${total}`,
    hint: '👆 Fai clic sulla parte evidenziata',
    next: 'Avanti →',
    backToMenu: '<br><br>Premi <b>Avanti</b> per tornare al menu dei progetti.'
  },

  /* ---------- Finish modal ---------- */
  finish: {
    kicker: 'Guida completata',
    title: '🎓 Ora conosci Kodland Sparks',
    intro: 'Hai esplorato la piattaforma usata dai tuoi studenti:',
    items: [
      '<b>Feed</b>: i progetti dei compagni, con reazioni e feedback dell’AI.',
      '<b>My projects</b>: tutti i progetti salvati o pubblicati da tutor e studenti.',
      '<b>Publish project</b>: condividi un progetto finito, scegli chi può vederlo e ottieni ricompense.',
      '<b>Studio</b>: Creative mode per creare programmi (web app, Python, Scratch), disegni, animazioni, musica e skin; Challenges mode per guadagnare cristalli.',
      '<b>AI helper</b> e <b>AI tutor</b>: offrono indicazioni e consigli, ma <b>l’AI propone, chi crea decide</b>.'
    ],
    codeLabel: '🔑 Il tuo codice di completamento',
    codeHint: 'Copia il codice nella formazione per confermare di aver completato la guida.',
    back: '← Torna alla formazione',
    closeMsg: 'Chiudi questa scheda per tornare alla formazione, poi inserisci il codice di completamento.'
  },

  /* ---------- Welcome screen ---------- */
  welcome: {
    kicker: 'Nuovo modello educativo · Formazione tutor',
    title: '<span>Guida a</span> Kodland Sparks',
    lead: 'Questa guida ti accompagna alla scoperta di <b>Kodland Sparks</b>, la piattaforma dove i tuoi studenti pubblicano e creano i loro progetti. Esplorerai la piattaforma in prima persona, facendo clic nei punti indicati dalla guida.',
    seeTitle: 'Che cosa scoprirai',
    see: [
      'Il <b>Feed</b>: come gli studenti visualizzano i progetti dei compagni, lasciano reazioni e ricevono feedback dall’AI.',
      '<b>My projects</b> e <b>Publish project</b>: dove si trovano i lavori salvati e come si pubblica un progetto finito.',
      '<b>Studio</b>: ciò che gli studenti creano a lezione, dai programmi (web app, Python, Scratch) a disegni, animazioni, musica e skin, e la modalità Challenges mode.',
      'La funzione <b>AI helper</b> e i <b>cristalli</b> che gli studenti guadagnano.'
    ],
    howTitle: 'Come usare la guida',
    howText: 'Questo è un percorso guidato, non una simulazione in cui esercitarsi: non devi fare scelte e non rischi di perdere nulla. In ogni schermata fai clic sulla parte evidenziata oppure premi <b>Avanti</b> quando il passaggio richiede solo di leggere.',
    start: 'INIZIA LA GUIDA →'
  }
};

/* ============================================================
   FEED CARDS: title and project type of each card, in order
   ============================================================ */
CONTENT.cards = {
  featured: [
    { t:'Creeper', type:'PNG' },
    { t:'A caccia di gemme nella galassia', type:'Web App' },
    { t:'Isola della sopravvivenza', type:'Web App' },
    { t:'Laboratorio magico', type:'Scratch' },
    { t:'Corse al neon', type:'Web App' },
    { t:'Mini serpente', type:'Python' }
  ],
  feed: [
    { t:'Acchiappa cristalli', type:'Scratch' },
    { t:'Il mio negozio di animali', type:'Web App' },
    { t:'Giardino di pixel', type:'PNG' },
    { t:'Quiz spaziale', type:'Python' },
    { t:'Ritmi rilassanti', type:'Music' },
    { t:'Volo del drago', type:'GIF' }
  ]
};

/* ============================================================
   GUIDED TOUR: title and text of the 44 steps, in order
   ============================================================ */
CONTENT.steps = [
  /* 1 */ { title:'Scopri Kodland Sparks',
    text:'<b>Kodland Sparks</b> è la piattaforma dove gli studenti <b>pubblicano i loro progetti</b>, continuano a imparare tra una lezione e la successiva e ricevono feedback dai compagni e da un mentore AI.<br><br>Nella barra in alto trovi tutto: <b>Feed</b>, <b>My projects</b>, <b>Publish project</b>, <b>Studio</b>, <b>AI helper</b> e i <b>cristalli</b>. Esploreremo ogni sezione.' },
  /* 2 */ { title:'Il Feed',
    text:'Il <b>Feed</b> è la pagina iniziale: mostra i progetti pubblicati dagli studenti. Ogni scheda indica il <b>tipo di progetto</b> (Web App, Scratch, PNG, Python…), le reazioni ricevute e il nome di chi lo ha creato.<br><br><b>Feedback richiesto</b> indica che la persona ha chiesto un feedback. Sotto i progetti in evidenza, il Feed elenca tutti i progetti.' },
  /* 3 */ { title:'Apri il progetto di un compagno',
    text:'Gli studenti possono interagire con i progetti pubblicati dai compagni. Fai clic sul progetto <b>Creeper</b> per aprirlo.' },
  /* 4 */ { title:'Un progetto pubblicato',
    text:'Questo progetto è un <b>disegno</b> (PNG). Anche gli altri tipi si aprono allo stesso modo: i progetti Scratch e web si possono provare direttamente qui e il codice Python viene eseguito nel browser.' },
  /* 5 */ { title:'Dettagli e reazioni',
    text:'Sotto il progetto puoi <b>scaricarlo</b> e vedere <b>chi lo ha creato</b>, la data di caricamento, le visualizzazioni e le <b>reazioni</b> ricevute: 💖 👍 😁 🔥 🦄.<br><br>Le reazioni sono il modo più immediato per i compagni di apprezzare il lavoro degli altri.' },
  /* 6 */ { title:'Il feedback dell’AI',
    text:'I progetti pubblicati possono ricevere anche un <b>feedback scritto da un mentore AI</b> (qui è <b>Inimitable Robby</b>). Il mentore mette in evidenza ciò che lo studente ha fatto bene e lo incoraggia a continuare a creare.<br><br>Se un testo è in una lingua diversa, <b>Mostra traduzione</b> permette di tradurlo.' },
  /* 7 */ { title:'My projects',
    text:'Ora fai clic su <b>My projects</b> nella barra in alto.' },
  /* 8 */ { title:'Tutto ciò che hai creato',
    text:'<b>My projects</b> elenca tutti i progetti salvati o pubblicati <b>da te, come tutor, o da uno studente</b>.<br><br>Ogni scheda mostra il tipo di progetto (qui <b>PNG</b>) e indica se è privato. È qui che gli studenti ritrovano i propri lavori.' },
  /* 9 */ { title:'Publish project',
    text:'Fai clic su <b>Publish project</b> nella barra in alto.' },
  /* 10 */ { title:'Pubblica un progetto finito',
    text:'<b>Publish project</b> serve a pubblicare i progetti che gli studenti <b>hanno già creato e salvato sul computer</b>. Per prima cosa scelgono il tipo: Immagine, Python, Game or Web App (un file .sb3 di Scratch o un file .zip), Minecraft skin, Storia, Embed, GitHub o Altro.' },
  /* 11 */ { title:'Inserisci i dettagli',
    text:'Lo studente aggiunge un <b>titolo</b> (30 caratteri), una <b>descrizione</b> (240 caratteri) e il <b>file</b> (PNG, JPG, WebP o GIF fino a 5 MB).<br><br>Può anche raggruppare i progetti in una <b>sezione</b> e scegliere quali <b>reazioni</b> possono lasciare le altre persone.' },
  /* 12 */ { title:'Scegli chi può vederlo',
    text:'La sezione <b>Aspetto</b> permette di scegliere il colore della cornice della scheda nel Feed; altri colori si sbloccano in seguito.<br><br><b>Visibilità</b>: <b>Pubblico</b>, <b>Solo amici</b> o <b>Solo io</b>.<br><br>Le opzioni facoltative permettono di attivare <b>Richiedi feedback</b>, autorizzare Kodland Sparks a usare il progetto per attività promozionali e partecipare alla <b>selezione giornaliera su Discord</b>.' },
  /* 13 */ { title:'Pubblica',
    text:'Premendo <b>Pubblica</b> si condivide il progetto. Pubblicare può far <b>ottenere ricompense</b>: sul pulsante compare il simbolo del cristallo. Vedremo i cristalli alla fine.' },
  /* 14 */ { title:'Studio',
    text:'Passiamo alla sezione che gli studenti usano di più a lezione. Fai clic su <b>Studio</b>.' },
  /* 15 */ { title:'Due modalità',
    text:'<b>Studio</b> offre due modalità:<br><br>• <b>Creative mode</b>: per creare liberamente giochi, siti e opere artistiche, partendo da zero o da un modello.<br>• <b>Challenges mode</b>: per completare attività e <b>guadagnare cristalli</b>.' },
  /* 16 */ { title:'Creative mode',
    text:'Fai clic su <b>Creative mode</b>.' },
  /* 17 */ { title:'Gli spazi per i progetti',
    text:'Il <b>Creative Studio</b> conserva i progetti in corso degli studenti in appositi <b>slot</b>. Gli slot da 1 a 3 sono disponibili; quelli da 4 a 6 arriveranno prossimamente.<br><br>Fai clic su <b>Slot 1</b> per iniziare un nuovo progetto.' },
  /* 18 */ { title:'Che cosa creerai?',
    text:'Gli studenti scelgono da dove iniziare:<br>• <b>Programmazione &amp; sviluppo</b>: Game or web app, Terminal Python, Scratch.<br>• <b>Media &amp; contenuti</b>: Pixel Art, Animation, Music, Skin Editor.<br><br>Gli strumenti utilizzati dipendono dal corso. Fai clic su <b>Game or web app</b>.' },
  /* 19 */ { title:'Web app: scegli da dove iniziare',
    text:'Una web app si crea con <b>HTML, CSS e JavaScript</b> (Web App JS), oppure con HTML e CSS e la logica in <b>Python</b> (Web App Python).<br><br>Gli studenti possono partire da un <b>Progetto vuoto</b> o da un modello, come Alien Invaders o Gioco del serpente. Fai clic su <b>Progetto vuoto</b> nella sezione Web App JS.' },
  /* 20 */ { title:'Editor: anteprima e codice',
    text:'In alto, la <b>Anteprima</b> mostra il risultato in tempo reale: le modifiche sono subito visibili. Sotto trovi le schede del codice: <b>HTML</b>, <b>CSS</b> e <b>JS</b>.' },
  /* 21 */ { title:'Il tutor AI',
    text:'A destra, <b>AI tutor</b> (Inimitable Robby) aiuta a programmare e offre due schede: <b>Chat</b> e <b>Attività</b>. Gli studenti possono chiedergli un consiglio o come migliorare il proprio codice.<br><br>Ricorda: <b>l’AI propone, chi crea decide</b>. Offre un aiuto, senza realizzare il progetto al posto degli studenti.' },
  /* 22 */ { title:'Salva, assegna un titolo e pubblica',
    text:'La barra in alto mostra lo <b>slot</b>, un pulsante per salvare e il <b>titolo del progetto</b>. A destra trovi <b>Nuovo progetto</b>, i pulsanti per aprire, caricare e scaricare un progetto e <b>Pubblica</b>, che permette di condividerlo nel Feed.' },
  /* 23 */ { title:'Inizia un altro progetto',
    text:'Esploriamo altri tipi di progetto. Fai clic su <b>Nuovo progetto</b>.' },
  /* 24 */ { title:'Terminal Python',
    text:'<b>Terminal Python</b> permette di creare un programma che si esegue in un terminale. Fai clic su questa voce.' },
  /* 25 */ { title:'Parti da un modello',
    text:'Un programma Python è contenuto in un unico file, si avvia con il pulsante <b>Play</b> e comunica con chi lo usa tramite <code>print()</code> e <code>input()</code>.<br><br>Fai clic su <b>Indovina il numero</b>.' },
  /* 26 */ { title:'Un progetto Python',
    text:'Il programma si esegue nel <b>terminale</b> nero: mostra messaggi e attende la risposta del giocatore nel campo <b>La tua risposta</b>. <b>Run</b> / <b>Stop</b> permettono di avviarlo e fermarlo; subito sotto trovi il <b>codice Python</b>. Il tutor AI è a destra, come in tutti gli editor di codice.' + CONTENT.ui.coach.backToMenu },
  /* 27 */ { title:'Scratch',
    text:'<b>Scratch</b> permette agli studenti di creare usando i blocchi di Scratch. Fai clic su questa voce.' },
  /* 28 */ { title:'Un progetto Scratch',
    text:'Ecco lo <b>editor Scratch</b> integrato in Kodland Sparks: le <b>categorie e la tavolozza dei blocchi</b> a sinistra, la <b>area del codice</b> al centro e lo <b>Stage</b> con lo sprite a destra. Ci sono anche le schede <b>Costumi</b> e <b>Suoni</b>. Il tutor AI si apre dal pulsante rotondo a destra.' + CONTENT.ui.coach.backToMenu },
  /* 29 */ { title:'Pixel Art',
    text:'Per disegnare, gli studenti possono usare <b>Pixel Art</b> e creare immagini pixel per pixel. Fai clic su questa voce.' },
  /* 30 */ { title:'Scegli le dimensioni della tela',
    text:'Gli studenti scelgono le <b>dimensioni della tela</b>; quelle consigliate sono <b>32 × 32</b>. Il risultato può essere pubblicato come immagine o animazione.<br><br>Fai clic su <b>32 × 32</b>.' },
  /* 31 */ { title:'Un progetto di disegno',
    text:'Ecco lo <b>editor di pixel art</b>: a sinistra trovi gli strumenti di disegno, le dimensioni del pennello, le sfumature, i colori e il comando per annullare; al centro c’è la <b>tela</b> e in basso i <b>fotogrammi</b> per trasformare il disegno in un’animazione.' + CONTENT.ui.coach.backToMenu },
  /* 32 */ { title:'Animation',
    text:'<b>Animation</b> permette agli studenti di disegnare un breve cartone animato fotogramma per fotogramma. Fai clic su questa voce.' },
  /* 33 */ { title:'Scegli le dimensioni della tela',
    text:'Le tele per le animazioni sono disponibili in tre dimensioni; quelle consigliate sono <b>960 × 720</b>. Fai clic su questa opzione.' },
  /* 34 */ { title:'Un progetto di animazione',
    text:'Gli studenti disegnano ogni <b>fotogramma</b>, vedono il precedente in trasparenza grazie alla funzione <b>onion skin</b> e premono Play per guardare l’animazione. Possono modificare la velocità e attivare la ripetizione continua.' + CONTENT.ui.coach.backToMenu },
  /* 35 */ { title:'Music',
    text:'<b>Music</b> permette agli studenti di creare un breve brano su una griglia. Fai clic su questa voce.' },
  /* 36 */ { title:'Inizia un brano',
    text:'Possono iniziare un <b>Nuovo brano</b> oppure partire da un modello: Retro, Tetris o K-pop. Fai clic su <b>Retro</b>.' },
  /* 37 */ { title:'Un progetto musicale',
    text:'Gli studenti <b>disegnano una melodia</b> sulla griglia, aggiungono <b>tracce</b> e <b>batteria</b>, modificano il <b>tempo</b> e premono Play.' + CONTENT.ui.coach.backToMenu },
  /* 38 */ { title:'Skin Editor',
    text:'<b>Skin Editor</b> è dedicato a Minecraft: gli studenti dipingono una skin per un modello 3D. Fai clic su questa voce.' },
  /* 39 */ { title:'Scegli un personaggio',
    text:'Si parte da <b>Steve</b> o <b>Alex</b>. Fai clic su <b>Steve</b>.' },
  /* 40 */ { title:'Un progetto skin',
    text:'La skin si dipinge su un <b>modello 3D</b> o sulla <b>mappa 2D</b>; la simmetria riproduce le pennellate su entrambi i lati. Quando è pronta, si può <b>esportare</b> in formato PNG o MCPACK.' },
  /* 41 */ { title:'AI helper',
    text:'Il pulsante verde <b>AI helper</b> nella barra in alto apre una chat. Fai clic su questo pulsante.' },
  /* 42 */ { title:'Chiedi ad Aiko',
    text:'<b>Aiko</b> è il supporto AI degli studenti: possono fare domande sui progetti, sul codice o sulle idee, oppure scegliere un suggerimento come <i>Spiegami questo errore nel mio codice</i> o <i>Mi sono bloccato, come posso proseguire?</i><br><br>Ricorda le informazioni importanti delle ultime chat e gli studenti possono visualizzare ed eliminare questi appunti.' },
  /* 43 */ { title:'Cristalli',
    text:'Il contatore viola mostra i <b>cristalli</b> guadagnati dallo studente. Fai clic sul contatore.' },
  /* 44 */ { btn:'Termina ✓', title:'Ricompense',
    text:'Questo è il pannello delle <b>Ricompense</b>. Gli studenti guadagnano cristalli completando le attività nella modalità <b>Challenges mode</b> e pubblicando progetti, poi aprono un <b>forziere</b> per scoprire cosa hanno vinto.<br><br>Per ora non ci sono cristalli, quindi il contatore indica 0.' }
];
