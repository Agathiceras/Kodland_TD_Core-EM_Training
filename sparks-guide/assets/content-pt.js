/* ============================================================
   Guia do Kodland Sparks · conteúdo em PORTUGUÊS (Brasil)
   Traduza apenas o texto dentro de aspas / crases. Mantenha tags HTML, placeholders ${...}, chaves, ids, nomes de arquivos e URLs sem alterações.
   ============================================================ */
window.CONTENT = { lang: 'pt' };

/* ============================================================
   INTERFACE: the replicated Kodland Sparks platform + guide layer
   ============================================================ */
CONTENT.ui = {
  title: 'Guia do Kodland Sparks',

  /* ---------- top bar ---------- */
  logo: 'Kodland Sparks',
  nav: { feed:'Feed', my:'My projects', publish:'Publish project', studio:'Studio', ai:'AI helper' },

  /* ---------- Feed ---------- */
  feed: {
    bannerTitle: 'Deixe o perfil com a sua cara',
    bannerText: 'Escolha um avatar e um apelido — todos veem no seu perfil.',
    bannerBtn: 'Customize profile',
    featured: 'Latest Featured Projects',
    feed: 'Feed',
    filter: 'All projects ˅',
    results: '(11.6K results)',
    search: '🔍 Apelido ou título do projeto',
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
    desc: 'Um Creeper com gorro de Natal se perdeu!! Me ajudem a encontrá-lo!!',
    showTr: 'Show translation',
    fbTitle: 'Published feedback',
    fbUpdated: 'Updated Oct 16, 2026',
    fbBody: '<p>Mia, você criou um personagem super reconhecível com apenas alguns pixels, e o gorro de Natal dá ao seu Creeper um toque divertido e original.</p><p>O seu Creeper natalino está cheio de personalidade e criatividade — dá para ver que você gosta de inventar personagens únicos!</p>'
  },

  /* ---------- My projects ---------- */
  my: {
    name: 'Alex Tutor',
    friends: 'Friends',
    friendsTab: 'Friends (0)',
    subsTab: 'Subscribers (0)',
    noFriends: 'Nenhum amigo ainda',
    privateTag: 'Projeto privado',
    cardTitle: 'Desenho'
  },

  /* ---------- Publish project ---------- */
  publish: {
    title: 'New <span>project</span>',
    sub: 'Escolha o tipo de projeto, preencha os detalhes e defina quem pode vê-lo.',
    typeLabel: 'Project type',
    // [icon, name, description] — keep the first item (icon name) unchanged
    types: [
      ['image', 'Image', 'Envie um desenho, uma imagem, um GIF ou um WebP.'],
      ['python', 'Python', 'Cole o seu código Python — os visitantes podem executá-lo no navegador.'],
      ['game', 'Game or Web App', '.sb3 do Scratch ou .zip com Unity/Godot/HTML/Python.'],
      ['creeper', 'Minecraft skin', 'Envie uma skin de 64×64 e veja-a em um modelo 3D.'],
      ['book', 'Story', 'Uma página com texto, imagens e conteúdo incorporado'],
      ['globe', 'Embed', 'Cole um link do YouTube, Vimeo, Sketchfab, Tinkercad ou Canva.'],
      ['github', 'GitHub', 'Vincule um repositório público do GitHub.'],
      ['box', 'Other', 'Se nenhum dos tipos acima servir — como um jogo do Roblox ou um app da Play Store.']
    ],
    titleLabel: 'Title',
    titleHint: '30 caracteres restantes',
    descLabel: 'Description',
    descHint: '240 caracteres restantes',
    fileLabel: 'Drawing',
    chooseFile: 'Choose file',
    fileHint: 'PNG, JPG, WebP ou GIF de até 5 MB',
    section: '📁 Section',
    noSection: 'No section',
    sectionHint: 'As seções ajudam a agrupar os seus projetos na página do seu perfil.',
    reactions: 'Reactions',
    reactionsHint: 'Escolha quais reações os visitantes podem deixar neste projeto.',
    heartAlways: '💖 O coração está sempre disponível',
    appearance: 'Appearance',
    appearanceHint: 'Escolha a cor da moldura para destacar o cartão do seu projeto no Feed.',
    frameSlots: '5 de 5 espaços de moldura disponíveis',
    frameDefault: '⚫ Default',
    common: 'Common',
    commonFrames: ['🔵 Sky', '🟢 Emerald', '🟣 Violet', '🔴 Red'],
    rare: 'Rare',
    rareFrames: ['Lavender', 'Pink', 'Gray'],
    visibility: 'Visibility',
    // [name, description] — Public · Friends only · Only me
    vis: [
      ['Public', 'Aparece no Feed e no seu portfólio público.'],
      ['Friends only', 'Visível para os seus amigos, os seus professores e você.'],
      ['Only me', 'Visível apenas para você no seu portfólio.']
    ],
    // [label, description] — the three switches
    toggles: [
      ['Request feedback', 'Outros autores poderão deixar feedback estruturado no seu projeto. Disponível apenas para projetos públicos.'],
      ['Aceito que o Kodland Sparks use este projeto em divulgações', 'Por exemplo, ele pode aparecer nas nossas redes sociais, em anúncios ou na página principal para mostrar a outras crianças o que é possível fazer aqui. Você pode mudar isso a qualquer momento.'],
      ['Take part in the Discord selection', 'Uma vez por dia, publicamos os melhores projetos do dia no nosso servidor do Discord. Mantenha esta opção ativada e o seu também pode ser escolhido. Apenas para projetos públicos.']
    ],
    publish: 'Publish'
  },

  /* ---------- Studio: modes and slots ---------- */
  studio: {
    modesTitle: 'O que você quer criar?',
    modesSub: 'Escolha um modo para começar.',
    creative: 'Creative mode',
    creativeText: 'Crie o que quiser — jogos, sites, arte.',
    challenges: 'Challenges mode',
    challengesText: 'Conclua tarefas e ganhe cristais.',
    slotsTitle: 'Creative Studio',
    slotsSub: 'Escolha um projeto para continuar ou comece algo novo.',
    slot: n => `Slot ${n}`,
    startHere: 'Comece aqui',
    comingSoon: 'Em breve',
    crumbBack: 'My projects'
  },

  /* ---------- Studio: "What will you build?" menu ---------- */
  build: {
    title: 'O que você vai criar?',
    sub: 'Escolha por onde começar.',
    back: '‹ Back',
    recommended: 'recomendado',
    progGroup: 'Programming &amp; development',
    mediaGroup: 'Media &amp; content',
    // [name, description] of each starting card
    cards: {
      web: ['Game or web app', 'HTML, CSS, JavaScript ou Python'],
      terminal: ['Terminal Python', 'Um programa no terminal'],
      scratch: ['Scratch', 'Construa com blocos do Scratch'],
      pixel: ['Pixel Art', 'Desenhe pixel por pixel'],
      anim: ['Animation', 'Desenhe quadro a quadro'],
      music: ['Music', 'Uma faixa em uma grade'],
      skin: ['Skin Editor', 'Uma skin para um modelo 3D']
    },
    // [heading, description] of each group of templates
    groups: {
      webjs: ['Web App JS', 'Uma página web criada com HTML, CSS e JavaScript. Roda na prévia ao vivo — as mudanças aparecem na hora.'],
      webpy: ['Web App Python', 'Uma página web criada com HTML e CSS, com a lógica em Python. Roda na prévia ao vivo — as mudanças aparecem na hora.'],
      terminal: ['Terminal Python', 'Um programa em um único arquivo Python. Roda no terminal com o botão Play — converse com ele usando print() e input().'],
      pixel: ['Pixel Art', 'Desenhe sprites e animações pixel por pixel. Escolha o tamanho da tela de desenho para começar e depois publique como imagem ou animação.'],
      anim: ['Animation', 'Desenhe um desenho animado curto quadro a quadro: desenhe cada quadro, veja o anterior pela onion skin e clique em play. Escolha o tamanho da tela de desenho para começar.'],
      music: ['Music', 'Monte uma faixa curta em uma grade: pinte uma melodia, adicione bateria e clique em play.'],
      skin: ['Skin Editor', 'Pinte uma skin do Minecraft em um mapa 2D e veja-a envolver o modelo 3D. A simetria espelha os seus traços nos dois lados.']
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
    sizeHint: 'Tamanho em pixels. Você pode mudar depois.'
  },

  /* ---------- Studio: editors ---------- */
  editor: {
    // project title shown in the editor bar ('' = empty placeholder)
    titles: { web:'', terminal:'Guess the number', scratch:'', pixel:'', anim:'', music:'Retro', skin:'' },
    myProjects: 'My projects',
    projectTitle: 'Título do projeto',
    newProject: 'New project',
    publish: 'Publish',
    // AI tutor panel
    robby: 'Inimitable Robby',
    aiTutor: 'AI tutor',
    chat: 'Chat',
    tasks: 'Tasks',
    greeting: 'Oi! Eu sou o seu parceiro de programação. O que você vai criar hoje? Pergunte o que adicionar a seguir ou como subir o nível do seu código — vamos fazer algo legal juntos! 🚀',
    memory: 'Eu só lembro das suas últimas 10 mensagens — se falamos de algo há um tempo, me dê um lembrete rápido.',
    askTip: 'Peça uma dica...',
    // web app editor
    preview: 'Preview',
    htmlComment: '<!-- Seu HTML vem aqui -->',
    // terminal Python editor
    terminal: 'Terminal',
    stop: '▢ Stop',
    termOut: 'Escolhi um número de 1 a 100. Tente adivinhar!<br>Seu palpite:',
    answer: 'Sua resposta',
    send: '➤ Send',
    // Python code shown in the editor: translate only the comment and the text inside "double quotes"
    py: ['import random', '', '# O computador escolhe um número de 1 a 100', 'secret = random.randint(1, 100)', 'attempts = 0', '', 'print("Escolhi um número de 1 a 100. Tente adivinhar!")', '', 'while True:', '    guess = int(input("Seu palpite: "))', '    attempts += 1', '', '    if guess < secret:', '        print("Muito baixo! Tente de novo.")', '    elif guess > secret:', '        print("Muito alto! Tente de novo.")', '    else:', '        print("Você acertou em", attempts, "tentativas!")', '        break'],
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
      speed: 'Speed', firstFrame: 'Desenhe o primeiro quadro e depois clique em +'
    },
    // music editor
    music: { track:'Retro ˅', addTrack:'+ Track', tempo:'Tempo', bpm:'180 BPM', drums:'Drums', electronic:'Electronic', acoustic:'Acoustic' }
  },

  /* ---------- AI helper ---------- */
  ai: {
    newChat: '+ New chat',
    keep: 'Eu guardo as suas últimas 5 conversas, mas lembro dos fatos importantes delas.',
    memory: 'O que eu lembro sobre você',
    credits: '1000 de 1000 créditos restantes',
    pictures: '0 de 6 imagens hoje',
    resets: 'Reinicia às 00:00 UTC',
    name: 'Spark Aiko',
    role: 'AI helper',
    hello: 'Oi! Eu sou a Aiko, sua assistente de IA. Pergunte qualquer coisa sobre os seus projetos,<br>código ou ideias — ou escolha uma opção abaixo.',
    chips: ['Me ajude a ter uma ideia de jogo', 'Explique o erro no meu código', 'Não sei como continuar, o que faço agora?', 'Desenhe um personagem para mim'],
    ask: 'Pergunte qualquer coisa...'
  },

  /* ---------- Rewards drawer (crystals) ---------- */
  rewards: { title:'REWARDS', rarity:'COMMON', hint:'Clique no baú para abri-lo' },

  /* ---------- Coach card (guide layer) ---------- */
  coach: {
    step: (n, total) => `Guia do Sparks · ${n}/${total}`,
    hint: '👆 Clique no elemento destacado',
    next: 'Próximo →',
    backToMenu: '<br><br>Clique em <b>Próximo</b> para voltar ao menu de projetos.'
  },

  /* ---------- Finish modal ---------- */
  finish: {
    kicker: 'Guia concluído',
    title: '🎓 Você conhece o Kodland Sparks',
    intro: 'Você fez um tour pela plataforma que os seus alunos usam:',
    items: [
      '<b>Feed</b>: os projetos dos colegas, com reações e feedback da IA.',
      '<b>My projects</b>: tudo o que foi salvo ou publicado, por tutores e alunos.',
      '<b>Publish project</b>: compartilhe um projeto finalizado, escolha quem o vê e ganhe recompensas.',
      '<b>Studio</b>: o Creative mode para criar código (web apps, Python, Scratch), desenhos, animações, músicas e skins, e o Challenges mode para ganhar cristais.',
      '<b>AI helper</b> e <b>AI tutor</b>: eles orientam e dão dicas, mas <b>a IA propõe, o autor decide</b>.'
    ],
    codeLabel: '🔑 Seu código de conclusão',
    codeHint: 'Copie-o no treinamento para confirmar que você concluiu o guia.',
    back: '← Voltar ao treinamento',
    closeMsg: 'Feche esta aba para voltar ao treinamento e digite lá o seu código de conclusão.'
  },

  /* ---------- Welcome screen ---------- */
  welcome: {
    kicker: 'Novo Modelo Educacional · Treinamento para tutores',
    title: 'Kodland Sparks: <span>o guia</span>',
    lead: 'Este guia leva você por <b>Kodland Sparks</b>, a plataforma em que os seus alunos criam e publicam os projetos deles. Você vai se movimentar pela plataforma por conta própria e clicar onde o guia indicar.',
    seeTitle: 'O que você vai ver',
    see: [
      'O <b>Feed</b>: como os alunos veem e reagem aos projetos uns dos outros e o feedback da IA que recebem.',
      '<b>My projects</b> e <b>Publish project</b>: onde ficam os trabalhos salvos e como um projeto finalizado é publicado.',
      '<b>Studio</b>: o que os alunos criam em aula — código (web apps, Python, Scratch), desenhos, animações, músicas e skins — e o Challenges mode.',
      'O <b>AI helper</b> e os <b>cristais</b> que os alunos ganham.'
    ],
    howTitle: 'Como usar',
    howText: 'Este é um guia, não uma simulação de prática: não há decisões a tomar nem nada a perder. Clique no elemento destacado em cada tela ou clique em <b>Próximo</b> quando o passo pedir que você leia.',
    start: 'INICIAR O GUIA →'
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
  /* 1 */ { title:'Conheça o Kodland Sparks',
    text:'<b>Kodland Sparks</b> é a plataforma em que os alunos <b>publicam os seus projetos</b>, continuam aprendendo entre as aulas e recebem feedback dos colegas e de um mentor de IA.<br><br>A barra superior tem tudo: <b>Feed</b>, <b>My projects</b>, <b>Publish project</b>, <b>Studio</b>, o <b>AI helper</b> e os <b>cristais</b>. Vamos visitar cada um.' },
  /* 2 */ { title:'O Feed',
    text:'O <b>Feed</b> é a página inicial: ele mostra os projetos publicados pelos alunos. Cada cartão mostra o <b>tipo de projeto</b> (Web App, Scratch, PNG, Python…), as reações que recebeu e o seu autor.<br><br><b>Feedback wanted</b> significa que o autor pediu feedback. Abaixo dos projetos em destaque, o Feed lista todos os projetos.' },
  /* 3 */ { title:'Abra o projeto de um colega',
    text:'Os alunos podem interagir com os projetos que os colegas publicaram. Clique no projeto <b>Creeper</b> para abri-lo.' },
  /* 4 */ { title:'Um projeto publicado',
    text:'Este projeto é um <b>desenho</b> (PNG). Os outros tipos abrem do mesmo jeito: projetos em Scratch e web podem ser jogados aqui mesmo, e o código Python roda no navegador.' },
  /* 5 */ { title:'Detalhes e reações',
    text:'Abaixo do projeto, você pode <b>baixá-lo</b> e ver o <b>autor</b>, a data de envio, as visualizações e as <b>reações</b> recebidas: 💖 👍 😁 🔥 🦄.<br><br>As reações são o jeito mais rápido de os colegas celebrarem o trabalho uns dos outros.' },
  /* 6 */ { title:'Feedback da IA',
    text:'Os projetos publicados também podem receber um <b>feedback escrito por um mentor de IA</b> (aqui, o <b>Inimitable Robby</b>). Ele destaca o que o aluno fez bem e o incentiva a continuar criando.<br><br>Se um texto estiver escrito em outro idioma, <b>Show translation</b> o traduz.' },
  /* 7 */ { title:'My projects',
    text:'Agora clique em <b>My projects</b> na barra superior.' },
  /* 8 */ { title:'Tudo o que você já criou',
    text:'<b>My projects</b> lista todos os projetos salvos ou publicados por <b>você, como tutor, ou por um aluno</b>.<br><br>Cada cartão mostra o tipo (aqui, <b>PNG</b>) e se o projeto é privado. É para lá que os alunos voltam para encontrar o trabalho deles.' },
  /* 9 */ { title:'Publish project',
    text:'Clique em <b>Publish project</b> na barra superior.' },
  /* 10 */ { title:'Publique um projeto finalizado',
    text:'<b>Publish project</b> serve para projetos que os alunos <b>já fizeram e salvaram no computador</b>. Primeiro eles escolhem o tipo: Image, Python, Game or Web App (um .sb3 do Scratch ou um .zip), Minecraft skin, Story, Embed, GitHub ou Other.' },
  /* 11 */ { title:'Preencha os detalhes',
    text:'O aluno adiciona um <b>Title</b> (30 caracteres), uma <b>Description</b> (240 caracteres) e o <b>arquivo</b> (PNG, JPG, WebP ou GIF de até 5 MB).<br><br>Também pode agrupar projetos em uma <b>Section</b> e escolher quais <b>Reactions</b> os visitantes podem deixar.' },
  /* 12 */ { title:'Escolha quem pode ver',
    text:'<b>Appearance</b> define a cor da moldura do cartão no Feed; mais cores são liberadas depois.<br><br><b>Visibility</b>: <b>Public</b>, <b>Friends only</b> ou <b>Only me</b>.<br><br>Opções extras: <b>Request feedback</b>, permitir que o Kodland Sparks use o projeto em divulgações e a <b>Discord selection</b> diária.' },
  /* 13 */ { title:'Publish',
    text:'Ao clicar em <b>Publish</b>, o projeto é compartilhado. Publicar pode <b>render recompensas</b> — o botão mostra o ícone de cristal. Vamos ver os cristais no final.' },
  /* 14 */ { title:'Studio',
    text:'Agora, a parte que os alunos mais usam em aula. Clique em <b>Studio</b>.' },
  /* 15 */ { title:'Dois modos',
    text:'O <b>Studio</b> tem dois modos:<br><br>• <b>Creative mode</b>: crie o que quiser — jogos, sites, arte — do zero ou a partir de uma base.<br>• <b>Challenges mode</b>: conclua tarefas e <b>ganhe cristais</b>.' },
  /* 16 */ { title:'Creative mode',
    text:'Clique em <b>Creative mode</b>.' },
  /* 17 */ { title:'Espaços de projeto',
    text:'O <b>Creative Studio</b> guarda os projetos em que os alunos estão trabalhando em <b>slots</b>. Os slots 1 a 3 estão abertos; os slots 4 a 6 chegam em breve.<br><br>Clique em <b>Slot 1</b> para começar um novo projeto.' },
  /* 18 */ { title:'O que você vai criar?',
    text:'Os alunos escolhem por onde começar:<br>• <b>Programming &amp; development</b>: Game or web app, Terminal Python, Scratch.<br>• <b>Media &amp; content</b>: Pixel Art, Animation, Music, Skin Editor.<br><br>O que eles usam depende do curso. Clique em <b>Game or web app</b>.' },
  /* 19 */ { title:'Web app: escolha um ponto de partida',
    text:'Um web app é criado com <b>HTML, CSS e JavaScript</b> (Web App JS) ou com HTML e CSS e a lógica em <b>Python</b> (Web App Python).<br><br>Os alunos começam de um <b>Empty project</b> ou de uma base, como Alien Invaders ou Snake game. Clique em <b>Empty project</b>, em Web App JS.' },
  /* 20 */ { title:'O editor: prévia e código',
    text:'Na parte de cima, o <b>Preview</b> mostra o resultado ao vivo: as mudanças aparecem na hora. Abaixo ficam as abas de código: <b>HTML</b>, <b>CSS</b> e <b>JS</b>.' },
  /* 21 */ { title:'O AI tutor',
    text:'À direita, o <b>AI tutor</b> (Inimitable Robby) é um parceiro de programação com as abas <b>Chat</b> e <b>Tasks</b>. Os alunos pedem uma dica ou como evoluir o código.<br><br>Lembre-se: <b>a IA propõe, o autor decide</b>. Ela ajuda; não constrói o projeto no lugar deles.' },
  /* 22 */ { title:'Salvar, nomear e publicar',
    text:'A barra superior mostra o <b>slot</b>, um botão de salvar e o <b>título do projeto</b>. À direita: <b>New project</b>, botões para abrir, enviar e baixar um projeto e <b>Publish</b>, que o compartilha no Feed.' },
  /* 23 */ { title:'Comece outro projeto',
    text:'Vamos ver outros tipos de projeto. Clique em <b>New project</b>.' },
  /* 24 */ { title:'Terminal Python',
    text:'<b>Terminal Python</b> é um programa que roda em um terminal. Clique nele.' },
  /* 25 */ { title:'Comece a partir de uma base',
    text:'Um programa em Python fica em um único arquivo, roda com o botão <b>Play</b> e conversa com o usuário por meio de <code>print()</code> e <code>input()</code>.<br><br>Clique em <b>Guess the number</b>.' },
  /* 26 */ { title:'Um projeto em Python',
    text:'O programa roda no <b>terminal</b> preto: ele mostra mensagens e espera a resposta do jogador na caixa <b>Sua resposta</b>. <b>Run</b> / <b>Stop</b> inicia e para o programa, e o <b>código Python</b> fica logo abaixo. O AI tutor está à direita, como em todo editor de código.' + CONTENT.ui.coach.backToMenu },
  /* 27 */ { title:'Scratch',
    text:'O <b>Scratch</b> permite criar com blocos do Scratch. Clique nele.' },
  /* 28 */ { title:'Um projeto em Scratch',
    text:'O <b>editor do Scratch</b> dentro do Kodland Sparks: as <b>categorias de blocos e a paleta</b> à esquerda, a <b>área de código</b> no meio e o <b>palco</b> com o sprite à direita. Há também as abas <b>Costumes</b> e <b>Sounds</b>. O AI tutor fica esperando no botão redondo à direita.' + CONTENT.ui.coach.backToMenu },
  /* 29 */ { title:'Pixel Art',
    text:'Para desenhar, os alunos podem usar o <b>Pixel Art</b>: eles desenham pixel por pixel. Clique nele.' },
  /* 30 */ { title:'Escolha o tamanho da tela de desenho',
    text:'Eles escolhem o <b>tamanho da tela de desenho</b>; o <b>32 × 32</b> é o recomendado. O resultado pode ser publicado como imagem ou animação.<br><br>Clique em <b>32 × 32</b>.' },
  /* 31 */ { title:'Um projeto de desenho',
    text:'O <b>editor de pixel art</b>: ferramentas de desenho, tamanhos de pincel, sombreamento, cores e desfazer à esquerda, a <b>tela de desenho</b> no meio e os <b>quadros</b> embaixo para transformar o desenho em animação.' + CONTENT.ui.coach.backToMenu },
  /* 32 */ { title:'Animation',
    text:'O <b>Animation</b> permite aos alunos desenhar um desenho animado curto quadro a quadro. Clique nele.' },
  /* 33 */ { title:'Escolha o tamanho da tela de desenho',
    text:'As telas de desenho de animação vêm em três tamanhos; o <b>960 × 720</b> é o recomendado. Clique nele.' },
  /* 34 */ { title:'Um projeto de animação',
    text:'Os alunos desenham cada <b>quadro</b>, veem o anterior pela <b>onion skin</b> (a transparência do quadro anterior) e clicam em play para assistir à animação. Eles podem mudar a velocidade e repetir em loop.' + CONTENT.ui.coach.backToMenu },
  /* 35 */ { title:'Music',
    text:'O <b>Music</b> permite aos alunos montar uma faixa curta em uma grade. Clique nele.' },
  /* 36 */ { title:'Comece uma faixa',
    text:'Eles podem começar com uma <b>New track</b> ou a partir de uma base: Retro, Tetris ou K-pop. Clique em <b>Retro</b>.' },
  /* 37 */ { title:'Um projeto de música',
    text:'Os alunos <b>pintam uma melodia</b> na grade, adicionam <b>tracks</b> e <b>drums</b>, mudam o <b>tempo</b> e clicam em play.' + CONTENT.ui.coach.backToMenu },
  /* 38 */ { title:'Skin Editor',
    text:'O <b>Skin Editor</b> é para Minecraft: os alunos pintam uma skin para um modelo 3D. Clique nele.' },
  /* 39 */ { title:'Escolha um personagem',
    text:'Eles começam com o <b>Steve</b> ou a <b>Alex</b>. Clique em <b>Steve</b>.' },
  /* 40 */ { title:'Um projeto de skin',
    text:'A skin é pintada em um <b>modelo 3D</b> ou no <b>2D map</b>, e a simetria espelha os traços dos dois lados. Quando fica pronta, pode ser <b>exportada</b> como PNG ou MCPACK.' },
  /* 41 */ { title:'AI helper',
    text:'O botão verde <b>AI helper</b> na barra superior abre um chat. Clique nele.' },
  /* 42 */ { title:'Pergunte à Aiko',
    text:'A <b>Aiko</b> é a assistente de IA dos alunos: eles podem perguntar sobre os projetos, o código ou ideias, ou escolher uma sugestão como <i>Explique o erro no meu código</i> ou <i>Não sei como continuar, o que faço agora?</i><br><br>Ela lembra dos fatos importantes das últimas conversas, e os alunos podem ver e apagar essas anotações.' },
  /* 43 */ { title:'Cristais',
    text:'O contador roxo mostra os <b>cristais</b> que o aluno ganhou. Clique nele.' },
  /* 44 */ { btn:'Concluir ✓', title:'Recompensas',
    text:'Este é o painel <b>Rewards</b>. Os alunos ganham cristais ao concluir tarefas no <b>Challenges mode</b> e ao publicar projetos, e abrem um <b>baú</b> para ver o que ganharam.<br><br>Ainda não há nenhum, por isso o contador mostra 0.' }
];
