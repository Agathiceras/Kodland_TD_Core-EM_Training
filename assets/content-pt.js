/* ============================================================
   Novo Modelo Educacional — Treinamento para tutores · conteúdo em PORTUGUÊS (Brasil)
   ------------------------------------------------------------
   COMO TRADUZIR ESTE ARQUIVO
   - Copie-o como content-xx.js (es, pt, ...) e altere lang abaixo.
   - Traduza APENAS o texto dentro de aspas '…' e crases `…`.
   - Mantenha sem alterações: tags HTML (<b>, <span class="…">…), código ${…},
     {placeholders} entre chaves, chaves/ids antes dos dois-pontos,
     emojis, nomes de arquivos (images/…) e os valores de "a:" / "check:".
   - Apóstrofos tipográficos (’) são seguros dentro de '…'. Um apóstrofo
     simples (') dentro de '…' quebraria o arquivo: use ’ no lugar.
   ============================================================ */
window.CONTENT = { lang: 'pt' };

/* ---------------- Interface strings ---------------- */
CONTENT.ui = {
  pageTitle: 'Treinamento do Novo Modelo Educacional',
  footer: 'kodland · Novo Modelo Educacional · Treinamento para tutores',
  devLink: '🛠 Desenvolvedor',

  // Navigation
  logoSub: 'Novo Modelo Educacional',
  navCore: 'Essenciais {done}/{total}',
  navHome: '← Início',
  navModules: '← Todos os módulos',
  navBackModule: '← Voltar ao módulo',

  // Home
  heroKicker: '🚀 Treinamento para tutores',
  heroTitle: 'O <span class="hl">novo</span> modelo educacional',
  heroLead: 'A Kodland está mudando a forma como alguns de seus cursos são ensinados. Este treinamento prepara você para ensinar com o novo modelo: {n} módulos, em ordem. Cada um termina com uma verificação rápida que libera o próximo.',
  fact1: '<b>No seu ritmo.</b> Seu progresso fica salvo neste navegador.',
  fact2: '<b>Prática incluída.</b> Três simulações — Backoffice, Classroom e Kodland Sparks — que você pode repetir quantas vezes quiser.',
  progAllDone: 'Módulos concluídos 🎉',
  progLabel: 'módulos concluídos',
  moduleN: 'Módulo {n}',
  badgeDone: '✓ Concluído · {score}%',
  badgeLocked: '🔒 Conclua o Módulo {n}',
  badgeStart: 'Começar →',
  homeDoneTitle: 'Módulos concluídos!',
  homeDoneText: 'Falta só um passo: o teste DST na página de treinamento do LMS.',
  homeDoneBtn: 'Veja o que fazer a seguir →',

  // Module page and its check
  eyebrow: 'Módulo {n} de {total}',
  ctaQuizTitle: 'Verificação do módulo',
  ctaQuizText: '{n} perguntas rápidas. Acerte 70% ou mais para ser aprovado.',
  ctaRiskTitle: 'Verificação do módulo: identifique a estratégia de risco',
  ctaRiskText: '{n} situações reais. <b style="color:#E5484D">Diferente das outras verificações: em cada caso você escolhe a estratégia que PREJUDICARIA a aula</b> — não a boa. Acerte 70% ou mais para ser aprovado.',
  lockOne: '🔒 Conclua {what} e digite o código acima para liberar a verificação.',
  lockMany: '🔒 Conclua {what} e digite os códigos acima para liberar a verificação.',
  listAnd: ' e ',
  startCheck: 'Iniciar a verificação →',
  retake: '🔁 Refazer a verificação',

  // Simulations and completion codes
  launchSteps: ['Abra em uma nova aba.', 'Siga todas as etapas até ver a tela de conclusão e o seu código.', 'Volte a esta aba e digite o código abaixo.'],
  codeOk: '✅ <b>Concluído: {sim}.</b> Código aceito.',
  codeLabel: '<b>🔑 Código de conclusão</b> — você o encontra na última tela de: {sim}.',
  codePlaceholder: 'ex.: XX-0000-00',
  codeUnlock: 'Liberar',
  codeWrong: 'Esse código não está correto. Confira na última tela da atividade.',

  // Small interactive pieces
  tapFlip: 'Toque para virar',
  mythReality: 'Realidade ✓',
  loopAgain: '<b>E de novo!</b> A reflexão vira o próximo objetivo — uma volta mais profunda.',
  ages: 'Idades {age}',
  aiBar: 'Quanto de IA faz parte do projeto',
  stageWas: 'Era: <s>{was}</s> → agora:',
  stageOf: '{i} de {n}',
  stageWatch: 'Veja “{t}” em uma aula real',
  stageFirst: 'Voltar ao primeiro',
  next: 'Próximo →',
  sortWrong: '✗ Não é bem isso.',

  // Follow Mode demo (Module 2)
  fmNotes: '📒 Teacher Notes — só você vê isto',
  fmFollowing: '🔗 Seguindo o tutor',
  fmStart: '👆 A Sofia está na mesma aula, mas o Lead the group está desativado. Ative o botão.',
  fmOn: '✅ <b>Lead the group ATIVADO.</b> A Sofia foi para o seu card — mas repare: ela vê o card <b>sem</b> as suas Teacher Notes. Agora experimente <b>Próximo card</b>.',
  fmOff: '⏸️ <b>Lead the group DESATIVADO.</b> A Sofia fica onde está, não importa o que você abra.',
  fmMoved: '➡️ Você foi para o card {t} — <b>a Sofia foi com você</b>.',
  fmMovedAlone: '➡️ Você foi para o card {t}, mas <b>a Sofia continua no card {s}</b>. Ela pode estar olhando outra coisa. Ative o Lead the group.',

  // Closing timeline (Module 3)
  tlOpening: '<b>Abertura.</b> Aquecimento e cumprimento, ligação com a aula anterior, conferência da lição de casa, objetivo da aula.',
  tlCards: '<b>Os cards.</b> Os alunos constroem, exploram, corrigem e mostram. Fique de olho no relógio — faltam {left} minutos…',
  tlClose: '<b>Faltam {left} minutos para o fim: hora de encerrar.</b> Em qualquer ponto dos cards em que você esteja, comece agora a rotina de encerramento.',
  tlRoutine: '<b>Rotina de encerramento.</b> Recapitulação feita pelos alunos → gancho para a próxima aula → próxima lição de casa.',
  tlBye: '<b>Até a próxima!</b> Todos saem sabendo o que aprenderam, o que vem a seguir e o que fazer em casa.',

  // Videos
  watchExample: 'Veja um exemplo real',
  comingSoon: 'em breve',
  close: 'Fechar',
  videoDefault: 'Aula real',
  soonTitle: 'Vídeo em breve',
  soonText: 'Aqui você verá esta parte da aula em uma turma real. O vídeo está sendo preparado e aparecerá aqui em breve.',
  zoomBadge: '🔍 Clique para ampliar',
  zoomAria: 'Abrir o vídeo em tamanho maior',
  zoomDefault: 'Vídeo',
  zoomIn: 'Aumentar',
  zoomOut: 'Diminuir',
  zoomReset: 'Redefinir',
  zoomHint: 'Use o zoom com + / −, a roda do mouse ou um clique duplo · arraste para se mover · Esc ou ✕ para fechar',

  // Checks (quiz engine)
  qmeta: '{e} Verificação do Módulo {n} · {kind} {i} de {total}',
  qCase: 'Caso',
  qQuestion: 'Pergunta',
  riskQuestion: 'Qual delas <span class="hurt">PREJUDICARIA</span> esta parte da aula?',
  riskBanner: '⚠️ Atenção: nesta verificação você escolhe a estratégia <b>ERRADA</b> — a que <b>PREJUDICARIA</b> a aula. Não a boa!',
  tfTrue: '✅ Verdadeiro',
  tfFalse: '❌ Falso',
  openHint: '✍️ Escreva a sua própria resposta — com pelo menos {min} caracteres. Não existe uma única redação certa: você verá uma resposta-modelo para comparar com a sua.',
  openPlaceholder: 'Digite sua resposta aqui…',
  openSubmit: 'Enviar minha resposta',
  openRecorded: '✅ <b>Resposta registrada.</b> Resposta-modelo — compare com a sua:',
  fbRight: '✅ <b>Correto!</b> ',
  fbWrong: '❌ <b>Não é bem isso.</b> ',
  fbRiskRight: '✅ <b>Correto — essa é a estratégia que prejudicaria a aula.</b> ',
  fbRiskWrong: '❌ <b>Essa, na verdade, ajuda a aula.</b> A estratégia de risco está destacada em verde. ',
  nextQuestion: 'Próxima pergunta →',
  seeResult: 'Ver meu resultado →',

  // Result of a check
  passedTitle: 'Você passou!',
  failTitle: 'Quase lá',
  scoreLine: 'Você acertou <b>{score} de {n}</b>.',
  failText: 'É preciso acertar 70% ou mais. Revise o módulo e tente de novo — você pode refazer a verificação quantas vezes precisar.',
  nextUnlocked: '<b>Módulo {n} · {title}</b> foi liberado.',
  goModule: 'Ir para o Módulo {n} →',
  allDoneText: 'Você concluiu todo o treinamento.',
  seeNext: 'Veja o que vem a seguir →',
  reviewModule: '📖 Revisar o módulo',

  // Final page
  doneTitle: 'Módulos concluídos!',
  doneText: `<p>Você está quase lá! Volte à página de treinamento do LMS pela qual acessou este treinamento. O teste DST está disponível logo abaixo do treinamento.</p>
    <p>👉 <b>Você precisa fazer e ser aprovado no teste DST para que o treinamento seja considerado concluído com sucesso.</b> Se você não fizer o teste DST, o treinamento continuará incompleto e poderá expirar.</p>
    <p>A nota mínima para aprovação é <b>80%</b>.</p>
    <p>Boa sorte! ❤️</p>`,
  doneBadge: '✓ Concluído',
  doneNexts: [
    ['📒', '<b>Antes de cada aula:</b> leia as Teacher Notes no Backoffice — e veja se há atualizações.'],
    ['🔑', '<b>Kodland Sparks:</b> suas credenciais vêm do departamento de Operações ou de Ensino.'],
    ['🏁', '<b>Em toda aula:</b> uma abertura adequada, perguntas de raciocínio e um encerramento de 5 a 7 minutos.'],
    ['🤖', '<b>Quando os alunos usarem IA:</b> a IA propõe, o autor decide.']
  ],
  doneBack: 'Voltar aos módulos',

  // Locked messages
  lockedTitle: 'Ainda bloqueado',
  lockedModule: 'Conclua primeiro o Módulo {n}.',
  lockedStep: 'Conclua a etapa anterior para liberar esta.',
  ok: 'OK'
};

/* ============================================================
   MODULES — títulos, descrições, objetivos e nomes das seções (mantenha as chaves id, n, e, color, check, needs)
   ============================================================ */
CONTENT.modules = [
  { id:'m1', n:1, e:'🧩', color:'#C4F046', title:'A metodologia do novo modelo', check:'quiz',
    desc:'O que é o novo modelo, a pedagogia por trás dele, como funciona o feedback e como orientar os alunos no uso da IA.',
    obj:'Entender o que o novo modelo educacional é e o que não é, os quatro pilares em que ele se apoia, como funciona o feedback e como ajudar os alunos a usar bem a IA.',
    offer:[['🌱','Entender o novo modelo de ensino'],['🏛️','Conhecer os quatro pilares que moldam cada aula.'],['💬','Ver como o feedback funciona em quatro direções.'],['🧭','Entender como o seu papel de tutor muda.']],
    sections:[ ['what','🔍','O que é o novo modelo'], ['pillars','🏛️','Os quatro pilares do modelo'], ['people','💬','Feedback em quatro direções'] ] },
  { id:'m2', n:2, e:'🛠️', color:'#3E7BFA', title:'Preparação técnica', check:'quiz',
    needs:[['boCode','a simulação do BO'],['classCode','o guia do Classroom'],['sparksCode','o guia do Kodland Sparks']],
    desc:'Backoffice e Teacher Notes, Classroom com o Follow Mode e Kodland Sparks — com três simulações práticas.',
    obj:'Encontrar um curso e as suas Teacher Notes no Backoffice, conduzir uma aula no Classroom com o Follow Mode e saber o que os alunos fazem no Kodland Sparks. Cada parte termina com uma simulação que fornece um código de conclusão.',
    offer:[['🗂️','Encontrar todo o material do curso no Backoffice — a wiki não é mais usada.'],['📒','Ler as Teacher Notes e as atualizações antes de cada aula.'],['🎥','Entender o Follow Mode, os cards de atividade e as demonstrações de tela.'],['⚡','Conhecer o Kodland Sparks, onde os alunos criam e publicam.']],
    sections:[ ['bo','🗂️','Backoffice: onde o curso vive'], ['classroom','🎥','Na aula: cards, Follow Mode e demonstrações'], ['sparks','⚡','Kodland Sparks: o estúdio dos alunos'] ] },
  { id:'m3', n:3, e:'⭐', color:'#F03D9E', title:'Qualidade da aula', check:'risk',
    desc:'Como uma aula é estruturada — e três hábitos que mantêm a estrutura: uma abertura adequada, perguntas de raciocínio e um encerramento fixo.',
    obj:'Entender como uma aula é estruturada no novo modelo, o que as revisões de qualidade observam e construir três hábitos que mantêm a estrutura em toda aula: uma abertura adequada, perguntas que levam os alunos a explicar o próprio raciocínio e uma rotina fixa de encerramento.',
    offer:[['🧱','Entender como uma aula é estruturada no novo modelo.'],['🎬','Abrir toda aula do jeito certo: aquecimento, ligação com a aula anterior, lição de casa, objetivo da aula.'],['🧠','Fazer perguntas que levem alunos específicos a explicar.'],['🏁','Encerrar toda aula com uma rotina fixa de 5 a 7 minutos.']],
    sections:[ ['structure','🧱','Como uma aula é estruturada'], ['seeing','🔎','O que as revisões de qualidade observam'], ['opening','🎬','Uma abertura adequada'], ['reasoning','🧠','Perguntas que fazem os alunos pensar em voz alta'], ['closing','🏁','Uma rotina fixa de encerramento'], ['metrics','📊','O que continua sendo seu: as métricas'], ['qcheck','✅','Seu checklist de qualidade da aula'] ] },
  { id:'m4', n:4, e:'🤖', color:'#8B5CF6', title:'Introdução a prompts para tutores', check:'quiz',
    desc:'A única habilidade realmente nova nestes cursos. Não é o lado técnico da IA — é como escrever um prompt e como ajudar um aluno a escrever o dele.',
    obj:'Saber o suficiente sobre prompts para orientar os alunos enquanto escrevem os seus durante a aula. O foco é a habilidade prática, não a teoria técnica.',
    offer:[['✍️','Entender o que é um prompt e o que um bom prompt inclui.'],['💻','Escrever prompts que geram e depuram código.'],['🎨','Escrever prompts para imagens e vídeos.'],['⚠️','Evitar os erros mais comuns.']],
    sections:[ ['why4','💡','Por que este módulo existe'], ['whatp','❓','Aprendendo sobre IA: o que é um prompt?'], ['goodp','🧩','O que um bom prompt deve incluir?'], ['codep','💻','Dicas para prompts que geram código'], ['imgp','🎨','Dicas para prompts que geram imagens e vídeos'], ['mistp','⚠️','Erros comuns'] ] }
];

/* ============================================================
   Nomes das três simulações
   ============================================================ */
CONTENT.sims = { boCode:'Simulação do BO', classCode:'Guia do Classroom', sparksCode:'Guia do Kodland Sparks' };

/* ============================================================
   VERIFICAÇÕES DOS MÓDULOS — "a" é o número da opção correta (0 = primeira). Mantenha como está.
   ============================================================ */
CONTENT.quiz = {
  m1:[
    { ctx:'Um colega ouviu falar do novo modelo educacional e está preocupado: “Então todos os nossos cursos vão mudar agora?”',
      q:'Qual é a resposta certa?',
      o:['Sim: a partir de agora todos os cursos da Kodland seguem o novo modelo.',
         'Só vão mudar os cursos que têm menos alunos.',
         'Não, apenas os grupos que você tem com o novo modelo. Os grupos que você já tem com os cursos antigos continuam iguais, a menos que você seja avisado do contrário.'],
      a:2, e:'O novo modelo está sendo introduzido de forma gradual. Os grupos que já estudam em outro formato continuam nele — você será avisado se algum dos seus grupos mudar.' },
    { ctx:'Você planeja os primeiros minutos de uma aula: explicar o novo conceito, mostrar a ferramenta e depois entregar o template para os alunos construírem o projeto.',
      q:'O que há de errado com esse plano no novo modelo?',
      o:['Nada — os conceitos precisam ser explicados antes de os alunos poderem usá-los.',
         'Ele é indutivo. Abra a aula com o resultado final já funcionando, explorem juntos e deixe que a sua explicação responda ao que os alunos já perceberam.',
         'Você deveria deixar a IA explicar o conceito no seu lugar.'],
      a:1, e:'A aprendizagem dedutiva inverte a ordem antiga: mostre primeiro o resultado funcionando, desmontem-no juntos e explique quando os alunos já precisarem da resposta.' },
    { ctx:'Um aluno está há dez minutos tentando corrigir o mesmo problema. Continua sem funcionar e ele diz: “Eu sou péssimo nisso.”',
      q:'Qual resposta combina com a mentalidade de crescimento do modelo?',
      o:['“Fique tranquilo, deixa que eu resolvo para a gente seguir em frente.”',
         '“Esse é fácil — você já deveria saber.”',
         '“Ainda não funcionou — esse é um problema típico. Mostre o que você tentou e vamos procurar a próxima estratégia.”'],
      a:2, e:'O erro é uma etapa normal do desenvolvimento. Trate-o como normal e devolva o próximo passo ao aluno — resolver por ele tira o aprendizado.' },
    { ctx:'Um aluno pede à IA que escreva toda a lógica do jogo dele e cola o resultado no projeto sem mudar nada.',
      q:'Qual regra do modelo isso quebra?',
      o:['“A IA propõe, o autor decide” — a IA pode ajudar, mas nunca deve construir o núcleo do projeto no lugar do aluno.',
         'Nenhuma: a IA pode fazer qualquer coisa, desde que o projeto funcione.',
         'A regra de que a IA só pode ser usada para imagens.'],
      a:0, e:'Em todas as idades a regra é a mesma: a IA propõe, o autor decide. Quanto de IA se usa depende da idade, mas o aluno sempre é dono do núcleo do projeto.' }
  ],
  m2:[
    { q:'No Backoffice, como você chega às atividades e às Teacher Notes de uma aula nestes cursos?',
      o:['Groups → seu grupo → o link da wiki.',
         'Courses → o curso → Assignments → escolher a aula → abrir uma atividade.',
         'Profile → Schedule → a aula.'],
      a:1, e:'O conteúdo do curso é acessado por Courses, não por Groups. Em Assignments você vê os cards de atividade da aula — e as Teacher Notes ficam dentro de cada card. A tabela Study guides está vazia de propósito.' },
    { ctx:'Você deu a Aula 3 no mês passado com outro grupo, e foi muito bem.',
      q:'O que você faz antes de dá-la de novo?',
      o:['Nada: você já conhece a aula, então pode pular as notas desta vez.',
         'Lê as Teacher Notes outra vez e vê se há atualizações — os cursos continuam sendo aprimorados, e atividades, tempos ou notas podem mudar.',
         'Procura a apresentação na wiki.'],
      a:1, e:'Ler as Teacher Notes faz parte de preparar toda aula, todas as vezes. A versão que você deu pode não ser a versão que vai dar.' },
    { ctx:'Você está com o Lead the group ativado. No meio da aula, um aluno clica em “Work independently” e volta para um card anterior.',
      q:'O que acontece a partir desse momento?',
      o:['O aluno é removido da aula e precisa entrar de novo.',
         'O aluno mantém um banner mostrando onde você está, com um botão Return; você vê, ao lado do nome dele, que ele está trabalhando de forma independente.',
         'As respostas dele no seu card chegam a você ao vivo.'],
      a:1, e:'O Follow Mode nunca prende o aluno. Ele pode trabalhar por conta própria, ver onde você está e voltar com um clique.' },
    { q:'Você quer demonstrar um passo em uma ferramenta, como o editor do Scratch. Qual é a forma certa de mostrar?',
      o:['Compartilhar a tela com o card da aula aberto, para que vejam as instruções e as suas notas.',
         'Compartilhar apenas a aba ou a janela da ferramenta — nunca o card da aula, onde as suas Teacher Notes ficam visíveis.',
         'Não demonstrar nada: os cards explicam tudo.'],
      a:1, e:'O Follow Mode é para os cards: cada aluno tem a sua própria cópia e nunca vê as suas notas. O compartilhamento de tela mostra exatamente o que está na sua tela — então compartilhe a ferramenta, não o card da aula.' },
    { ctx:'Seus alunos terminaram uma pergunta de múltipla escolha e, depois, uma atividade em que precisavam colar o link do projeto.',
      q:'Qual afirmação está certa?',
      o:['As duas são salvas automaticamente: os alunos nunca precisam clicar em nada.',
         'A pergunta de múltipla escolha registra a nota automaticamente; na atividade do link, os alunos precisam clicar em “Send”.',
         'As duas precisam do botão Submit, senão nada é registrado.'],
      a:1, e:'Perguntas de múltipla escolha, campos de texto e de fórmula e arrastar e soltar registram a nota automaticamente. Atividades em que os alunos enviam texto, links ou arquivos precisam do botão “Send”.' },
    { q:'Como alunos e tutores entram no Kodland Sparks?',
      o:['Todos usam o login do Backoffice.',
         'Os alunos entram com um botão da plataforma principal; os tutores usam credenciais separadas, fornecidas pelo departamento de Operações ou de Ensino.',
         'Alunos e tutores se cadastram sozinhos pelo site.'],
      a:1, e:'Os alunos usam login único a partir da plataforma. Os tutores recebem credenciais separadas de Operações ou de Ensino — até lá, o tour guiado é a forma de explorar a plataforma.' }
  ],
  // Módulo 3: em cada caso, o tutor deve identificar a estratégia que PREJUDICARIA aquela parte da aula
  m3:[
    { part:'👋 Aquecimento', ctx:'Os alunos entram em silêncio, com as câmeras desligadas. Ninguém diz uma palavra.',
      o:['Cumprimentar cada aluno pelo nome e fazer uma pergunta rápida sobre a semana dele.',
         'Pular o aquecimento e ir direto para o projeto para ganhar tempo.',
         'Registrar a presença enquanto eles se acomodam e convidá-los a reagir com um emoji.'],
      a:1, e:'Pular o aquecimento economiza dois minutos e custa a conexão. Uma abertura curta e acolhedora é o que faz os alunos mais quietos falarem — e se manterem engajados no resto da aula.' },
    { part:'📓 Conferência da lição de casa', ctx:'Metade do grupo não fez a lição de casa.',
      o:['Perguntar quem travou e o que aconteceu — pode ter sido um problema técnico.',
         'Pedir a um aluno que mostre a lição de casa e citar uma coisa específica que deu certo.',
         'Dizer “Tudo bem, zero para você” e seguir em frente sem perguntar o motivo.'],
      a:2, e:'Uma lição de casa não feita é um sinal, não apenas um zero. Descobrir se o aluno travou é como você o ajuda — e como evita que ele fique para trás.' },
    { part:'🧠 Compreensão', ctx:'Você explicou uma ideia nova. Quando pergunta “Ficou claro?”, todos dizem que sim — mas você desconfia de que não entenderam de verdade.',
      o:['Pedir a um aluno específico, pelo nome, que explique por que aquilo funciona.',
         'Aceitar o sim e seguir em frente: se dizem que está claro, está claro.',
         'Pedir que prevejam o que acontece se você mudar algo e depois testar juntos.'],
      a:1, e:'“Ficou claro?” quase sempre recebe um sim. Seguir em frente sem verificar faz os alunos travarem mais adiante — peça a alguém que explique o próprio raciocínio.' },
    { part:'📋 Recapitulação', ctx:'Faltam 7 minutos e o grupo ainda não terminou o último card.',
      o:['Continuar trabalhando até o último segundo para que terminem o card e pular a recapitulação.',
         'Começar agora a rotina de encerramento: o card inacabado pode continuar na próxima aula ou em casa.',
         'Pedir a dois ou três alunos que digam o que aprenderam hoje.'],
      a:0, e:'Trabalhar até o último segundo é exatamente como a recapitulação, o gancho e a lição de casa se perdem. Comece o encerramento na hora certa — o card pode esperar, o encerramento não.' },
    { part:'🔮 Gancho e lição de casa', ctx:'É o último minuto da aula e os alunos estão prestes a sair.',
      o:['Ligar o gancho ao projeto deles: uma frase que desperte a curiosidade para a próxima vez.',
         'Explicar a lição de casa em uma ou duas frases e lembrar como entregá-la.',
         'Ler rapidamente a frase do gancho enquanto saem e dizer “a lição de casa está na plataforma”.'],
      a:2, e:'Um gancho apressado e uma lição de casa sem explicação fazem os alunos saírem sem saber o que vem a seguir. Uma frase motivadora e uma explicação clara levam menos de dois minutos.' }
  ],
  m4:[
    { ctx:'Você está ajudando um aluno a transformar a ideia de um jogo de Scratch em um prompt.',
      q:'Qual prompt tem mais chance de gerar um resultado utilizável na primeira tentativa?',
      o:['“Crie um jogo de gato com obstáculos, parecido com os jogos de corrida infinita, usando bons princípios de game design.”',
         '“Crie um jogo no Scratch: um sprite de gato se move para a esquerda/direita com as setas, obstáculos caem do topo com velocidade crescente, a pontuação aumenta a cada segundo sobrevivido, o jogo termina após 3 colisões.”',
         '“Faça um jogo divertido e envolvente para uma criança de 8 anos que ensine sobre obstáculos e sobrevivência, parecido com Flappy Bird, mas original.”',
         '“Crie um jogo 2D no Scratch com regras claras, um sistema de pontuação e dificuldade crescente ao longo do tempo.”'],
      a:1, e:'Só esse tem mecânicas concretas e sem ambiguidade: movimento, comportamento de surgimento, gatilho de pontuação, condição de fim. Os outros <i>parecem</i> específicos, mas se apoiam em termos subjetivos — “bons princípios de game design”, “divertido e envolvente”, “regras claras” — que a IA precisa interpretar sozinha.' },
    { ctx:'O primeiro prompt de imagem de um aluno gerou um personagem com a paleta de cores errada. Todo o resto — pose, estilo, fundo — saiu certo.',
      q:'Qual é o melhor próximo passo?',
      o:['Reescrever o prompt inteiro do zero, com mais detalhes em geral, para não repetir o mesmo erro.',
         'Executar exatamente o mesmo prompt de novo, já que a saída da IA tem aleatoriedade e uma segunda tentativa muitas vezes resolve.',
         'Enviar um prompt de acompanhamento que muda apenas a paleta de cores, mantendo o resto da descrição igual.',
         'Acrescentar vários adjetivos extras descrevendo o clima desejado, para que a IA tenha mais contexto.'],
      a:2, e:'Isolar a única variável que estava errada é mais rápido e mais confiável do que recomeçar, contar com a aleatoriedade ou acrescentar detalhes sem relação com o problema real.' },
    { ctx:'Você está ajudando um aluno de 13+ a depurar uma função em Python com a ajuda da IA.',
      q:'Qual prompt reflete a abordagem mais eficaz de resolução de problemas?',
      o:['“Esse código não funciona, por favor corrija: [código]”',
         '“Esta função deveria retornar a média de uma lista, mas retorna None quando a lista tem um item. Aqui está o código: [código]. O que está fazendo esse caso específico falhar?”',
         '“Reescreva este código usando melhores práticas e garanta que funcione: [código]”',
         '“Explique o que há de errado com este código e me dê uma versão corrigida: [código]”'],
      a:1, e:'Ele indica o comportamento esperado exato, a falha observada exata e o caso extremo específico — assim a IA pode mirar o erro real em vez de adivinhar o escopo ou reescrever mais do que o necessário.' },
    { ctx:'Dois tutores escrevem prompts para a mesma tarefa de geração de vídeo. O Tutor A escreve um único prompt longo e detalhado, cobrindo estilo, assunto e fundo de uma só vez. O Tutor B escreve primeiro um prompt mais curto, confere o resultado e depois ajusta.',
      q:'Qual afirmação é a mais precisa?',
      o:['A abordagem do Tutor A é sempre melhor, porque mais detalhes logo no início reduzem o número de iterações necessárias.',
         'A abordagem do Tutor B é sempre melhor, porque prompts mais curtos são inerentemente mais fáceis para a IA processar.',
         'Ambas podem funcionar, mas a abordagem iterativa do Tutor B facilita identificar qual detalhe específico causou um resultado indesejado.',
         'Nenhuma das abordagens importa, já que a qualidade final depende apenas do modelo de IA usado, não do prompt.'],
      a:2, e:'O princípio central deste módulo é a iteração e o isolamento de variáveis. Detalhe, por si só, não garante sucesso, e iterar deixa a causa e o efeito muito mais claros do que fazer tudo em um único prompt grande.' },
    { open:true, min:180,
      ctx:'Um aluno do seu grupo quer adicionar um pulo duplo ao jogo de plataforma dele. Ele digita para a IA: <i>“melhore o pulo”</i>.',
      q:'Reescreva isso em um prompt com boas chances de funcionar na primeira tentativa. Escreva o texto real do prompt que você ajudaria o aluno a produzir e depois acrescente uma linha dizendo por que o seu funcionará melhor.',
      model:'Um prompt forte faz a maioria destas coisas: <ul><li><b>Nomeia a plataforma</b> — “No Scratch…” — para que a IA não precise adivinhar o ambiente.</li><li><b>Indica o comportamento exato e o seu gatilho:</b> “quando a tecla de espaço for pressionada com o gato já no ar, ele pula uma segunda vez”.</li><li><b>Define um limite:</b> “apenas uma vez por queda” e “não altere os blocos de movimento existentes”.</li><li><b>Pede uma explicação:</b> “diga quais blocos você acrescentou e onde”.</li></ul><p style="margin-top:8px">E o motivo: ele isola <b>uma</b> mecânica, indica com precisão o comportamento esperado e restringe o que pode mudar — então não sobra nada para a IA inventar. “Melhore o pulo” deixa todas essas decisões nas mãos da IA.</p>' }
  ]
};

/* ============================================================
   CARROSSÉIS DE ETAPAS (Módulo 3) — mantenha e, c e v
   ============================================================ */
CONTENT.stagesets = {
  blocks:[
    { e:'👋', t:'Aquecimento — 2 a 4 minutos', was:'Aquecimento', ph:'Abertura', c:'#BDE7FF', goal:'Ele continua existindo, mas é curto: cumprimento, câmera e microfone, uma reação. Em algumas aulas há uma checagem de humor.',
      d:['Use-o para criar conexão: uma conversa rápida ou uma pergunta sobre os interesses e como eles estão se sentindo.','Registre a presença agora, enquanto os alunos se acomodam — não no final.'] },
    { e:'🔧', t:'Um ponto de checagem técnico', was:'Revisão da aula anterior', ph:'Abertura', c:'#BDE7FF', goal:'A revisão vira um ponto de checagem: o projeto da aula anterior abre e funciona? Os conceitos não são explicados de novo — você só confirma que o ponto de partida está pronto.',
      d:['Em algumas aulas, a revisão e a conferência da lição de casa são uma única tarefa na plataforma.','Se um projeto não abrir, use o template de reserva — ninguém fica para trás.'] },
    { e:'🎬', t:'O objetivo é mostrado, não explicado', was:'Objetivo da aula', ph:'Abertura', c:'#FFF1B8', goal:'O objetivo é mostrado com o resultado final — um vídeo, um GIF ou um projeto funcionando — como o primeiro gatilho da aula.',
      d:['Mostre primeiro o resultado e depois pergunte o que eles percebem.','Deixe a explicação para depois, como resposta.'] },
    { e:'🔀', t:'Teoria e prática se fundem', was:'Teoria e prática', ph:'Parte principal', c:'#E4FFC2', goal:'Os alunos exploram e enfrentam o desafio primeiro; a explicação chega exatamente quando eles precisam dela.',
      d:['Dê uma dica de cada vez — não a solução.','Os erros são material de aprendizagem, não fracassos.'] },
    { e:'📋', t:'Resumo — interativo e compartilhado', was:'Resumo da aula', ph:'Encerramento', c:'#FFD9EC', goal:'Mais interativo e feito em grupo: pequenos quizzes que cada aluno responde na plataforma, além de uma lista curta do que foi aprendido para você percorrer com a turma.',
      d:['Os alunos dizem o que aprenderam — você não faz a recapitulação por eles.','É o primeiro passo da sua rotina de encerramento (abaixo).'] },
    { e:'🏠', t:'Lição de casa — a próxima versão', was:'Atividade de lição de casa', ph:'Encerramento', c:'#FFD9EC', goal:'A lição de casa é a próxima versão do mesmo projeto publicado — ou uma missão que se apoia no que acabaram de aprender. Não é um exercício separado.',
      d:['Explique com clareza antes de eles saírem.','Lembre-os de publicar a nova versão e enviar o link.'] },
    { e:'🔮', t:'Prévia — uma frase motivadora', was:'Prévia da próxima aula', ph:'Encerramento', c:'#FFD9EC', goal:'É uma frase, não um segmento — mas não se limite a ler a linha. Use-a para motivar.',
      d:['Leia a próxima aula antes de dar a atual, para criar expectativa de verdade.','Conecte-a com o que eles acabaram de construir.'] }
  ],
  open:[
    { e:'👋', t:'Aquecimento e cumprimento', ph:'Abertura · 1', c:'#BDE7FF', v:'warmup', goal:'Crie conexão antes de ensinar: cumprimente cada aluno pelo nome, confira câmera e som e dê a eles um motivo para sorrir.',
      d:['Cumprimente cada aluno pelo nome assim que ele chegar.','Uma pergunta de 1 minuto sobre a semana ou os interesses deles.','Registre a presença enquanto eles se acomodam.'],
      say:['“Oi, Leo! Que bom te ver. Uma rapidinha antes de começar: que jogo você jogou esta semana?”'] },
    { e:'🔗', t:'Ligação com a aula anterior', ph:'Abertura · 2', c:'#C9F2D6', v:'link', goal:'Lembre os alunos de em que ponto está o projeto deles e por que a aula de hoje decorre dele — a história continua.',
      d:['Peça a um aluno que conte ao grupo o que construiu da última vez.','Conecte isso à missão de hoje em uma frase.','Mantenha viva a história do curso: “Hoje, a nossa missão é…”.'],
      say:['“Ana, relembre para a gente: o que o seu projeto conseguia fazer no fim da última aula?”','“Da última vez, o seu jogo ganhou um herói. Hoje, o herói ganha um objetivo.”'] },
    { e:'📓', t:'Conferência da lição de casa', ph:'Abertura · 3', c:'#FFF1B8', v:'homework', goal:'Confira a próxima versão em que trabalharam em casa — e perceba quem travou.',
      d:['Peça a um ou dois alunos que mostrem a lição de casa.','Cite uma coisa específica que deu certo.','Sem lição de casa? Descubra se o aluno travou por um motivo técnico — não registre apenas um zero.'],
      say:['“Mia, mostre para nós a sua nova versão. O que fez você escolher essas cores?”'] },
    { e:'🎯', t:'Objetivo da aula', ph:'Abertura · 4', c:'#E4FFC2', v:'goal', goal:'Defina aonde a aula de hoje quer chegar. Esta é a última etapa antes de o trabalho independente começar.',
      d:['Explique o objetivo do projeto de hoje em uma ou duas frases.','Peça ao aluno que repita o plano com as próprias palavras.'] }
  ],
  close:[
    { e:'📋', t:'Resumo (recapitulação)', ph:'Últimos 5–7 min · 1', c:'#FFD9EC', v:'recap', goal:'Os alunos dizem o que aprenderam — não você. Use o quiz ou a lista de resumo do card e deixe que eles respondam.',
      d:['Pergunte a 2 ou 3 alunos o que aprenderam hoje.','Pergunte por quê ou como — não “Ficou claro?”.','Celebre uma conquista específica do grupo.'],
      say:['“Tom, o que acontece quando o jogo começa — e por quê?”'] },
    { e:'🔮', t:'Gancho para a próxima aula', ph:'Últimos 5–7 min · 2', c:'#E9DDFF', v:'teaser', goal:'Uma frase que faça os alunos quererem voltar. Só funciona se você leu a próxima aula.',
      d:['Leia a próxima aula enquanto se prepara.','Conecte o gancho ao projeto deles.','Seja breve e empolgante — uma promessa, não um resumo.'],
      say:['“Na próxima vez, algo perigoso aparece no caminho do seu herói… será que ele consegue?”'] },
    { e:'🏠', t:'Próxima lição de casa', ph:'Últimos 5–7 min · 3', c:'#C9F2D6', v:'nexthw', goal:'Explique a próxima versão do projeto, para que todos saibam exatamente o que fazer — e entregar.',
      d:['Explique a lição de casa em uma ou duas frases.','Lembre-os de clicar em “Send” ao entregar o link.','Despeça-se em um tom positivo.'],
      say:['“Para a próxima vez: acrescente um detalhe novo ao seu jogo, publique e me envie o link.”'] }
  ]
};

/* ============================================================
   LISTAS DE DADOS — Learning Loop, IA por idade, exemplos de prompts e de perguntas
   ============================================================ */
CONTENT.loop = [
  ['🎯','Objetivo','A aula parte do que precisa funcionar ao fim de hoje — mostrado, não explicado.'],
  ['⚡','Protótipo rápido','Os alunos obtêm algo funcionando logo: um template, uma primeira versão, um primeiro resultado.'],
  ['🐞','Dificuldade','Algo ainda não funciona. Isso é esperado — é aí que a aprendizagem acontece.'],
  ['🧭','Estratégia / dica','Você dá uma dica de cada vez, ou uma pergunta — não a solução.'],
  ['📈','Melhoria','O aluno corrige e melhora: a própria versão, as próprias decisões.'],
  ['🎤','Apresentação','Eles mostram o resultado: para você, para o grupo, no Kodland Sparks.'],
  ['💭','Reflexão','Que problema eu tive? Que estratégia usei? Qual é o meu próximo passo?']
];
CONTENT.ages = {
  a:{ e:'🧒', age:'8–9', who:'Cursos para os alunos menores', model:'Aprendizagem guiada baseada em projetos, com apoio de IA.',
      p:'Ferramentas próximas das que os alunos já conhecem, com a IA mediada pelo tutor e pelo AI Buddy. <b>A sensação de “eu fiz isto” é o patrimônio a proteger.</b> A IA pode aparecer mais adiante no curso, como um elemento lúdico e delimitado.',
      test:'Teste inverso', tt:'O projeto precisa continuar 100% viável e significativo <b>sem</b> IA. A IA apenas remove atritos de rotina — nunca o ato criativo.', ai:20 },
  b:{ e:'🧑', age:'10–12', who:'Cursos para pré-adolescentes', model:'Aprendizagem dirigida baseada em projetos, com a IA como material.',
      p:'O aluno é dono e executor do núcleo criativo; a IA gera matéria-prima — sprites, sons, textos — que o aluno seleciona, edita e monta. A IA é um “parceiro de treino”.',
      test:'Teste de alavancagem', tt:'Sem a IA o projeto ainda seria possível, mas visivelmente mais pobre ou menor dentro do tempo de aula. A IA eleva o teto da ideia do aluno.', ai:55 },
  c:{ e:'🧑‍💻', age:'12–17', who:'Cursos para adolescentes', model:'Aprendizagem baseada em projetos integrada à IA — o aluno como diretor criativo.',
      p:'Os alunos orquestram a IA ao longo de todo o processo (conceito → recursos → lógica → construção), inclusive a IA como componente dentro do próprio programa, com letramento explícito sobre mídia sintética.',
      test:'Teste de ambição', tt:'O escopo e a qualidade pretendidos não são alcançáveis sem IA no tempo disponível. Retire a IA e a forma planejada do projeto desmorona.', ai:85 }
};
CONTENT.prompts = {
  v:['“Faça um jogo para mim.”','“Deixe mais bonito.”','“Corrija o meu código.”'],
  s:['“Em Python: escreva um jogo de adivinhar o número. O computador escolhe um número de 1 a 100, o jogador tem 7 tentativas, a cada palpite o programa mostra ‘muito alto’ ou ‘muito baixo’ e, no final, informa quantas tentativas foram necessárias.”',
     '“Mude apenas a paleta de cores para azul neon e rosa. Mantenha a pose, o estilo e o fundo.”',
     '“O meu programa em Python deveria parar quando o jogador acerta o número, mas continua perguntando. Aqui está o meu código. O que está causando isso e o que devo verificar?”']
};
CONTENT.qcmp = {
  v:['“Ficou claro?”','“Todo mundo terminou?”','“Alguma dúvida?”'],
  s:['“Mia, por que o personagem só se move quando você aperta a seta?”','“Leo, o que aconteceria se movêssemos esta linha para o início? Teste e conte para a gente.”','“Ana, como você soube que a pontuação estava funcionando?”']
};

/* ============================================================
   Notas sob os seletores vago / específico
   ============================================================ */
CONTENT.cmpnote = { prompts:{ v:'A IA precisa adivinhar tudo: a plataforma, as regras, o que significa “mais bonito”.', s:'Cada um indica a plataforma, o comportamento exato e o que pode mudar — não sobra nada para adivinhar.' },
                  questions:{ v:'É fácil responder com um “sim” — e você não descobre nada sobre o que eles entenderam.', s:'Um nome mais um “por quê” ou “como”: o aluno precisa explicar o próprio raciocínio em voz alta.' } };

/* Cards da demonstração do Follow Mode (Módulo 2) */
CONTENT.fmCards = [['Card 1 · Prepare-se para a missão de hoje! 🚀','Hoje você vai construir o seu primeiro projeto…'],['Card 2 · Boas-vindas! 👋','Vamos conferir se vocês conseguem se ver e se ouvir…'],['Card 3 · Vamos nos conhecer! 🎤','Todo criador tem o seu próprio estilo…']];

/* ============================================================
   CORPO DAS SEÇÕES — o texto de cada seção, por módulo. Dentro de ${…} traduza apenas o texto entre aspas; mantenha os nomes das funções (callout, flip, launch, codeBox, zclip, stc, videoBtn), CONFIG.… e os nomes de arquivos.
   ============================================================ */
CONTENT.body = {
/* ---------------- Module 1 ---------------- */
what:() => `
  <p class="p">A Kodland criou um <b>novo modelo educacional (EM)</b> que será implementado gradualmente em cursos novos e já existentes. Não se trata apenas de conteúdo técnico novo — é uma <b>metodologia</b> diferente: como uma aula flui, qual é o seu papel como tutor e como a inteligência artificial passa a fazer parte da aprendizagem em vez de ser um atalho.</p>
  <div class="defn"><span class="de">🌱</span><p>Neste <b>novo modelo educacional</b>, os alunos partem de um resultado funcionando, aprendem construindo e corrigindo, publicam seus projetos no <b>Kodland Sparks</b> e usam a IA com discernimento.</p></div>
  ${callout('good', '🧭', '<b>Importante:</b> este é um novo modelo educacional que será introduzido gradualmente. Os cursos novos seguirão essa abordagem de ensino, enquanto os cursos existentes serão adaptados ao novo modelo. No entanto, os grupos que já estudam em outro formato de ensino continuarão com o formato atual. Por enquanto, apenas alguns cursos seguem este novo modelo.')}
  <p class="p" style="margin-top:18px">Por que um novo modelo? Porque os alunos de hoje aprendem de um jeito diferente do de alguns anos atrás. As ferramentas mudaram, a relação de crianças e adolescentes com a tecnologia mudou, e a IA já faz parte do dia a dia deles. A nova metodologia se apoia em três ideias:</p>
  <div class="trio">
    <div class="ti"><span class="tie">🛠️</span><h3>Ferramentas que eles reconhecem</h3><p>Os alunos trabalham com as ferramentas que realmente veem e usam hoje — e com projetos de efeito “uau” de verdade desde o primeiro minuto.</p></div>
    <div class="ti"><span class="tie">🧠</span><h3>IA com discernimento</h3><p>Ensinamos os alunos a usar a IA com sabedoria: sem ter medo dela e sem depender dela às cegas.</p></div>
    <div class="ti"><span class="tie">✨</span><h3>Aulas que valem a pena</h3><p>A experiência de aprendizagem continua relevante, para que cada aula valha a pena.</p></div>
  </div>
  <p class="p" style="margin-top:18px">Antes de continuar, vamos esclarecer três crenças comuns. Toque em cada uma:</p>
  <div class="myths">
    <button class="myth" data-myth><span class="mtag">Mito</span><span class="mq">“Todos os cursos da Kodland vão mudar para o novo modelo.”</span><span class="ma"><b>Nem todos.</b> O novo modelo é usado em cursos novos criados para ele e em alguns cursos existentes que estão sendo adaptados.</span><span class="mh">Toque para ver a realidade →</span></button>
    <button class="myth" data-myth><span class="mtag">Mito</span><span class="mq">“Todos os meus grupos vão mudar.”</span><span class="ma"><b>Não.</b> Você ensina com o novo modelo apenas nos grupos de um curso que o segue. Em todos os seus outros grupos, nada muda. Você será informado quando um dos seus cursos passar para o novo modelo.</span><span class="mh">Toque para ver a realidade →</span></button>
    <button class="myth" data-myth><span class="mtag">Mito</span><span class="mq">“É só conteúdo novo para aprender.”</span><span class="ma"><b>É uma nova forma de pensar a aula.</b> O conteúdo exige pouco conhecimento novo de você — a mudança real está em como a aula flui e no que você faz nela.</span><span class="mh">Toque para ver a realidade →</span></button>
  </div>`,

pillars:() => `
  <p class="p">Este é o coração do modelo. Não se trata de aprender botões novos — trata-se de <b>mudar a forma como você pensa a aula</b>. Tudo se apoia em quatro pilares. Vire cada card e depois leia como cada um muda o que você faz.</p>
  <div class="grid4">
    ${flip('Pilar 1', '🔄', 'Aprendizagem dedutiva', '<b>Primeiro o resultado.</b><br>A aula abre com o resultado final já funcionando. Os alunos o desmontam com você e só depois o constroem, peça por peça.')}
    ${flip('Pilar 2', '🌱', 'Mentalidade de crescimento', '<b>Erros são uma etapa, não um fracasso.</b><br>Um bug ou uma mecânica quebrada é normal. Os alunos aprendem a dizer “ainda <i>não</i> funciona — vamos encontrar uma estratégia”.')}
    ${flip('Pilar 3', '🔁', 'O Learning Loop', '<b>Um ciclo, não uma linha.</b><br>Objetivo → protótipo → dificuldade → dica → melhoria → apresentação → reflexão. A cada volta, um pouco mais fundo.')}
    ${flip('Pilar 4', '🤖', 'Aprendizagem assistida por IA', '<b>A IA propõe, o autor decide.</b><br>Quanto de IA se usa depende da idade dos alunos — e a IA nunca constrói o núcleo do projeto no lugar deles.')}
  </div>

  <h3 class="subh">🔄 Pilar 1 · Mostre primeiro, explique depois</h3>
  <div class="ba"><div class="bef"><h4>Antes</h4><p>A aula começava com a teoria, depois a ferramenta, e só então os alunos construíam do zero.</p></div><div class="arr">➜</div>
    <div class="aft"><h4>Agora</h4><p>A aula começa com o <b>resultado final já funcionando</b> — “que jogo ou mecânica precisa funcionar ao fim de hoje?”. Os alunos veem o projeto inteiro, desmontam-no com você e depois o constroem.</p></div></div>
  ${callout('tip', '💡', 'Isso muda o seu primeiro instinto como tutor: em vez de explicar antes de mostrar, <b>mostre primeiro e explique como resposta</b> ao que os alunos já perceberam.')}

  <h3 class="subh">🌱 Pilar 2 · Suas palavras moldam a mentalidade deles</h3>
  <p class="p">O jeito como você fala sobre um erro ensina os alunos a pensar sobre ele. O modelo pede que você trate todo erro como um passo normal e devolva o próximo movimento ao aluno.</p>
  <div class="twocol">
    <div class="yes"><h4>✅ Diga isto</h4><ul><li>“Perfeito — encontramos um problema típico. Vamos resolvê-lo.”</li><li>“Ainda não funciona. Qual é a nossa próxima estratégia?”</li><li>“Mostre o que você tentou antes disso.”</li></ul></div>
    <div class="no"><h4>🚫 Evite isto</h4><ul><li>“Não deu certo para você de novo.”</li><li>“Isso está errado — deixa que eu corrijo.”</li><li>“Isso é fácil, você deveria saber.”</li></ul></div>
  </div>

  <h3 class="subh">🔁 Pilar 3 · O Kodland Learning Loop</h3>
  <p class="p">A sequência antiga era uma linha reta: <i>eu explico → eles praticam → eu reviso</i>. O Learning Loop a substitui por um ciclo que se repete dentro de cada aula e entre as aulas. Clique em play ou toque em qualquer etapa:</p>
  <div class="loop" id="loop">
    <div class="loop-row"><span class="lf"></span>${LOOP.map((s, i) => `<button class="lst" data-ls="${i}"><span class="lsi">${s[0]}</span><b>${s[1]}</b></button>`).join('')}</div>
    <div class="loop-out" id="loopOut"><span class="lo-e">▶️</span><span>Clique em <b>Reproduzir o loop</b> para ver uma volta completa.</span></div>
    <div class="btn-row" style="margin-top:12px;justify-content:center"><button class="btn-y" id="loopPlay">▶ Reproduzir o loop</button></div>
    <p class="spiral">🌀 A aula avança em espiral: a cada volta do loop, um pouco mais fundo.</p>
  </div>

  <h3 class="subh">🤖 Pilar 4 · A IA depende da idade</h3>
  <p class="p">Aqui é onde você precisa de mais cuidado, porque o papel da IA <b>não é o mesmo em todos os cursos</b> — ele depende da idade dos alunos. Alterne entre as faixas etárias:</p>
  <div class="agebox">
    <div class="seg" id="ageSeg"><button data-age="a" aria-pressed="true">🧒 Idades 8–9</button><button data-age="b" aria-pressed="false">🧑 Idades 10–12</button><button data-age="c" aria-pressed="false">🧑‍💻 Idades 12–17</button></div>
    <div class="agebody" id="ageOut"></div>
  </div>
  <div class="quote"><b>“A IA propõe, o autor decide.”</b><small>A regra a repetir em todos os cursos, em todas as idades.</small></div>
  <div class="grid2">
    <div class="card"><div class="wh"><b>⚙️ IA convencional (generativa)</b></div><p class="p" style="margin:0;font-size:15px">Cria código, imagens ou ideias quando você pede.</p></div>
    <div class="card"><div class="wh"><b>🧭 Mentor de IA / AI Buddy</b></div><p class="p" style="margin:0;font-size:15px">Não gera a solução: faz perguntas que orientam e explica.</p>
      <p class="p" style="margin:10px 0 0;font-size:13.5px;color:var(--pink-d)"><b>👀 Mais adiante neste treinamento</b> você verá onde os alunos o encontram na plataforma.</p></div>
  </div>
  ${callout('bad', '🛑', '<b>Nunca deixe a IA construir a lógica central do projeto no lugar do aluno.</b>')}`,

people:() => `
  <p class="p">O feedback não é mais apenas <i>tutor → aluno</i>. No novo modelo, os alunos ouvem quatro fontes — e cada uma tem um papel:</p>
  <div class="q3">
    <div><span>🧑‍🏫</span><b>O tutor</b><small>Específico, sobre o projeto e o próximo passo.</small></div>
    <div><span>👥</span><b>Um colega</b><small>Simples e específico durante a apresentação — nunca comparando projetos.</small></div>
    <div><span>🪞</span><b>O próprio aluno</b><small>Que problema eu tive, que estratégia usei, qual é o meu próximo passo?</small></div>
    <div><span>🤖</span><b>A IA</b><small>O AI Buddy ou mentor de IA: um ponto forte e uma ideia para melhorar.</small></div>
  </div>
  ${callout('tip', '🪞', 'A autoavaliação não é “você gostou?”. É nomear o problema, a estratégia e o próximo passo. O feedback entre colegas segue uma fórmula simples: <b>“Eu gostei de… Eu acrescentaria…”</b>.')}
  <div class="defn" style="margin-top:18px"><span class="de">🧭</span><p><b>Resumindo, o seu papel mudou.</b> Você não é mais quem explica tudo antes de começar. Você é um <b>navegador</b>: mostra o destino, acompanha o percurso com perguntas e dicas na hora certa e deixa os alunos encontrarem a dificuldade antes de resolvê-la. Todo curso tem templates de reserva, então você nunca precisa “resgatar” um projeto em pânico — há sempre uma rota alternativa com resultado garantido.</p></div>`,

/* ---------------- Module 4 ---------------- */
why4:() => `
  <div class="defn"><span class="de">💡</span><p>Estes cursos não exigem muito de você em termos de conhecimento novo da matéria. A única área realmente nova é a <b>IA</b> — e, enquanto alguns tutores já se sentem à vontade com ela, outros a usam muito pouco ou a usam de formas que não ajudam o aluno. Este módulo é a base comum.</p></div>`,

whatp:() => `
  <p class="p">A inteligência artificial que usamos nas nossas aulas — o AI Buddy e as ferramentas dentro do Kodland Sparks — funciona a partir de instruções escritas em linguagem comum, chamadas de <b>prompts</b>. Quanto melhor o prompt, melhor o resultado que o aluno obtém.</p>
  <p class="p">Como tutor, você não precisa ser um especialista técnico em IA. Mas precisa entender o básico, para orientar os alunos enquanto escrevem os próprios prompts durante a aula.</p>
  <div class="defn"><span class="de">❓</span><p>Um <b>prompt</b> é a instrução que damos a uma IA para que ela gere um resultado — texto, código, uma imagem, um vídeo. É como dar instruções a alguém que não sabe nada sobre o contexto do seu projeto: <b>quanto mais claras e específicas as instruções, mais perto o resultado ficará do que você realmente queria.</b></p></div>
  <div class="ba"><div class="bef"><h4>Um prompt ruim</h4><p>Gera resultados genéricos ou incorretos. O aluno acaba aceitando algo que não queria ou recomeçando do zero.</p></div><div class="arr">➜</div>
    <div class="aft"><h4>Um bom prompt</h4><p>Gera resultados úteis e precisos que são <b>fáceis de ajustar</b>. Esta última parte é a mais importante — um resultado que dá para ajustar vale mais do que um que precisa ser substituído.</p></div></div>`,

goodp:() => `
  <p class="p">Um prompt sólido geralmente responde a estas quatro perguntas:</p>
  <div class="q3">${[['🎬','Contexto','Para que serve? Quem vai usar?'],['🎯','Objetivo','O que exatamente você quer alcançar?'],['📐','Detalhes específicos','Estilo, formato, tom, restrições: “em 3 frases”, “usando Python”, “estilo cartoon”.'],['🖼','Exemplos','Quando se aplicam — um exemplo ajuda a IA a entender o que se espera.']].map(q => `<div><span>${q[0]}</span><b>${q[1]}</b><small>${q[2]}</small></div>`).join('')}</div>
  <div class="twocol" style="margin-top:14px">
    <div class="yes"><h4>✅ Específico o bastante</h4><ul><li>“Crie um jogo simples no Scratch em que um gato desvia de obstáculos que caem, com pontuação visível e 3 vidas.”</li></ul></div>
    <div class="no"><h4>❌ Vago demais</h4><ul><li>“Faça um jogo para mim.”</li></ul></div>
  </div>
  <div class="card" style="margin-top:14px">
    <div class="wh"><b>Vago ou específico? Alterne e compare</b><span class="tag">Experimente</span></div>
    <div class="seg" data-cmp="prompts"><button data-k="v" aria-pressed="true">😐 Vago</button><button data-k="s" aria-pressed="false">🎯 Específico</button></div>
    <div class="fbx" data-cmpout="prompts"></div>
  </div>`,

codep:() => `
  <div class="grid2">${[
    ['🏷','Nomeie a linguagem ou a plataforma','Python, HTML, Scratch, Roblox e assim por diante.'],
    ['👣','Descreva o comportamento esperado passo a passo','Não apenas o resultado final.'],
    ['💬','Peça que o código seja comentado','Assim fica mais fácil de ler e de explicar em aula.'],
    ['🔧','Não reescreva o prompt inteiro','Se algo não funcionar, peça à IA que corrija o erro específico e diga o que aconteceu.'],
    ['🧪','Teste e entenda o código','Incentive os alunos a testar e entender o código, não apenas copiá-lo.']
  ].map(x => `<div class="card" style="padding:16px"><div class="wh" style="margin-bottom:6px"><span style="font-size:26px">${x[0]}</span><b>${x[1]}</b></div><p class="p" style="margin:0;font-size:14.5px">${x[2]}</p></div>`).join('')}</div>`,

imgp:() => `
  <div class="grid2">${[
    ['🖌','Assunto, estilo e cenário','Descreva o assunto principal, o estilo visual (realista, cartoon, pixel art…) e o cenário ou o fundo.'],
    ['🌈','Cores, iluminação ou clima','Mencione-os quando forem importantes para o projeto.'],
    ['📏','Seja específico quanto ao formato','Vertical, horizontal ou quadrado — se o projeto exigir.'],
    ['🔁','Ajuste uma variável por vez','Se o primeiro resultado não for o esperado, mude apenas a cor, ou apenas o estilo, para ver o que realmente alterou o resultado.']
  ].map(x => `<div class="card" style="padding:16px"><div class="wh" style="margin-bottom:6px"><span style="font-size:26px">${x[0]}</span><b>${x[1]}</b></div><p class="p" style="margin:0;font-size:14.5px">${x[2]}</p></div>`).join('')}</div>`,

mistp:() => `
  <div class="myths">${[
    ['🌫','Ser vago demais.','“Deixe mais bonito” não dá à IA nada com que trabalhar.'],
    ['📚','Pedir demais de uma vez.','Divida um projeto complexo em vários prompts menores.'],
    ['🔍','Não revisar o resultado.','A IA comete erros e pode gerar conteúdo incorreto — sempre revise antes de usar.'],
    ['🔂','Não iterar.','O primeiro resultado quase nunca é o final. Ajustar e pedir de novo é parte normal do processo.'],
    ['🧭','Esquecer o contexto do projeto.','Um prompt sem contexto gera resultados genéricos que não combinam com o que o aluno está construindo.']
  ].map(x => `<button class="myth" data-myth><span class="mtag">Erro</span><span class="mq">${x[0]} ${x[1]}</span><span class="ma">${x[2]}</span><span class="mh">Toque para ver por quê →</span></button>`).join('')}</div>
  ${callout('good', '🔁', 'Repare como muita coisa aqui coincide com o que você já faz como tutor: uma mudança de cada vez, descrever o comportamento esperado, testar antes de confiar e iterar em vez de recomeçar. Escrever prompts não é uma habilidade à parte — é o mesmo hábito de depuração, apontado para outra ferramenta.')}`,

/* ---------------- Module 2 ---------------- */
bo:() => `
  <p class="p">Os cursos com o novo modelo <b>não têm manuais na wiki nem apresentações</b>. O guia de cada aula fica <b>dentro da própria aula</b>, no Backoffice: cada card de atividade traz as suas próprias <b>Teacher Notes</b> — para que serve o card, quanto tempo leva, o que fazer e a que prestar atenção. Só você consegue vê-las.</p>
  ${callout('warn', '📒', '<b>Leia as Teacher Notes antes de cada aula</b> — e veja se há atualizações. Os cursos continuam sendo aprimorados, então uma aula pode mudar de um grupo para o outro. O primeiro card de cada aula tem as notas mais completas e, em geral, um vídeo curto.')}
  <p class="p" style="margin-top:16px">O caminho é o mesmo para todos os cursos: você não chega ao conteúdo de um curso pelos seus Groups, mas por <b>Courses</b>.</p>
  <div class="grid3">
    <div class="ti"><span class="tie">📚</span><h3>Courses</h3><p>Abra a ficha do curso: ramo de negócio, idioma, número de aulas e de módulos.</p></div>
    <div class="ti"><span class="tie">🃏</span><h3>Assignments</h3><p>Escolha a aula e você verá os cards de atividade dela. Esses cards <b>são</b> o conteúdo da aula.</p></div>
    <div class="ti"><span class="tie">📒</span><h3>Teacher Notes</h3><p>Abra um card: a caixa laranja tracejada é a sua nota. Logo abaixo, o que o aluno vê.</p></div>
  </div>
  ${callout('tip', '🧭', 'Agora veja você mesmo. A simulação é uma réplica do Backoffice com um dos cursos que seguem o novo modelo: você vai abrir o curso, ir até a primeira aula, ver por que o guia de estudo está vazio e ler as Teacher Notes do primeiro card.')}
  ${launch('🗂️', 'Simulação 1 de 3', 'Simulação do Backoffice', 'Uma réplica navegável do Backoffice: abra o curso, encontre as atividades da aula, veja por que não há link para a wiki e leia uma Teacher Note por dentro.', CONFIG.BO_SIM, '🗂️ Abrir a simulação do BO')}
  ${codeBox('boCode')}`,

classroom:() => `
  <p class="p">Quando você já conhece a aula, é hora de ensiná-la. No Classroom você não apresenta mais slides: abre os <b>mesmos cards de atividade</b> que leu no Backoffice e avança por eles junto com os alunos. Três coisas fazem isso funcionar.</p>
  <h3 class="subh">👁️ 1. Follow Mode: os alunos vão aonde você vai</h3>
  <p class="p">Com o <b>Follow Mode</b>, os alunos veem automaticamente o mesmo card que você tem aberto. <b>Não é compartilhamento de tela</b>: cada aluno recebe a sua própria cópia do card, na qual consegue trabalhar de verdade — e as Teacher Notes continuam visíveis só para você. Você o ativa com o botão <b>Lead the group</b>, que aparece ao lado de um card aberto. Experimente:</p>
  <div class="card" id="fmDemo">
    <div class="fm-ctrl"><button class="lead-sw" id="fmSw"><i></i> Lead the group</button><button class="btn-g" id="fmNext">Próximo card →</button><span style="font-size:13px;color:var(--muted);font-weight:700" id="fmHint">Ative o botão e depois vá para o próximo card.</span></div>
    <div class="fm">
      <div class="screen"><div class="sc-h"><span>👩‍🏫 Sua tela</span><span>Tutor</span></div><div class="sc-card" id="fmT"></div></div>
      <div class="screen"><div class="sc-h"><span>👧 Tela da Sofia</span><span>Aluno</span></div><div class="sc-card" id="fmS"></div></div>
    </div>
    <div class="fm-out" id="fmOut"></div>
  </div>
  <div class="grid3" style="margin-top:14px">${[
    ['➡️','Você muda de card','Ele muda para todos que estão seguindo você.'],
    ['🖱️','Você rola a página','Dentro dos cards interativos, a posição deles alcança a sua.'],
    ['🕐','Alguém entra atrasado','Cai direto no card que você tem aberto.'],
    ['🚪','Você se ausenta','Os alunos veem um aviso de “tutor ausente”; o acompanhamento retoma quando você voltar.'],
    ['👥','Quem está seguindo?','Um marcador ao lado de cada nome mostra quem segue você e quem trabalha sozinho.'],
    ['🔓','Sem prender ninguém','O aluno pode clicar em “Work independently” e voltar com “Return”.']
  ].map(x => `<div class="card" style="padding:16px"><div class="wh" style="margin-bottom:6px"><span style="font-size:26px">${x[0]}</span><b>${x[1]}</b></div><p class="p" style="margin:0;font-size:14.5px">${x[2]}</p></div>`).join('')}</div>

  <h3 class="subh">🖥️ 2. Follow Mode ou compartilhamento de tela?</h3>
  <p class="p">Você ainda vai compartilhar a sua tela às vezes — para <b>demonstrar</b> um passo em uma ferramenta, como o editor do Scratch, ou para mostrar um resultado final. A regra é simples:</p>
  <div class="okbad">
    <div class="ok"><h3>👁️ Use o Follow Mode para os cards</h3><ul><li>Para conduzir o grupo pela aula.</li><li>Cada aluno trabalha na sua própria cópia.</li><li>Suas Teacher Notes continuam privadas.</li></ul></div>
    <div class="bad"><h3>🖥️ Compartilhe a tela nas demonstrações</h3><ul><li>Para mostrar um passo na ferramenta (Scratch, Sparks…).</li><li>Compartilhe <b>apenas a aba ou a janela da ferramenta</b>.</li><li>Nunca compartilhe o card da aula: as suas notas ficariam visíveis.</li></ul></div>
  </div>

  <h3 class="subh">🧩 3. Atividades interativas</h3>
  <p class="p">Muitos cards são interativos. Alguns deles salvam o progresso e a nota sem exigir que você clique no botão “Submit”, enquanto outros exigem.</p>
  <p class="p">Nas atividades — <b>perguntas de múltipla escolha</b>, <b>campos de texto e de fórmula</b> e <b>arrastar e soltar</b> — você verá que a nota é registrada automaticamente assim que o aluno termina.</p>
  <div class="zoomtip"><span>🔍</span><div><b>Dica:</b> clique em qualquer um dos 3 vídeos abaixo para abri-lo em uma janela maior. Lá você pode <b>dar zoom</b> (botões + / −, roda do mouse ou clique duplo) e arrastar para ver cada detalhe.</div></div>
  <div class="vidpair">
    <figure class="card gifcard"><span class="gtag ok">✅ Salvo automaticamente</span>${zclip('images/result_good_EM.mp4', 'Salvo automaticamente')}<figcaption>O resultado aparece automaticamente no canto superior direito.</figcaption></figure>
    <figure class="card gifcard"><span class="gtag ko">🔁 Uma resposta errada</span>${zclip('images/result_bad_EM.mp4', 'Uma resposta errada')}<figcaption>Se houver um erro, você pode clicar no ícone ‘Redo’ no canto superior direito e tentar de novo.</figcaption></figure>
  </div>
  <p class="p" style="margin-top:18px">Já nas atividades que envolvem enviar texto, links ou arquivos, certifique-se de que os alunos cliquem no botão <b>“Send”</b>:</p>
  <figure class="card gifcard wide">${zclip('images/send_bottom.mp4', 'O botão “Send”')}</figure>
  ${launch('🎥', 'Simulação 2 de 3', 'Guia do Classroom', 'Um tour guiado por uma aula real do novo modelo no Classroom: os cards, as Teacher Notes que só você vê, as notas completas do primeiro card e o Lead the group.', CONFIG.CLASS_SIM, '🎥 Abrir o guia do Classroom')}
  ${codeBox('classCode')}`,

sparks:() => `
  <p class="p">A última peça do quebra-cabeça é onde vivem os projetos dos alunos: o <b>Kodland Sparks</b>. É a nova plataforma em que os alunos <b>criam</b> os seus projetos, <b>publicam</b>, continuam aprendendo entre as aulas e recebem feedback dos colegas e de um mentor de IA. É também onde fica o portfólio que eles constroem ao longo do curso.</p>
  <div class="grid2">
    <div class="card"><div class="wh"><b>🔐 Como os alunos entram</b></div><p class="p" style="margin:0;font-size:15px">Os alunos entram com <b>um botão da plataforma principal</b> (login único) — eles não se cadastram separadamente.</p></div>
    <div class="card"><div class="wh"><b>🔑 Como você entra</b></div><p class="p" style="margin:0;font-size:15px">Os tutores usam <b>credenciais separadas</b>, diferentes das do Backoffice. Elas são fornecidas pelo <b>departamento de Operações ou de Ensino</b>.</p></div>
  </div>
  ${callout('warn', '⏳', '<b>Você ainda não pode testar por conta própria.</b> Até receber as suas credenciais, não será possível entrar no Kodland Sparks. Por isso há um tour guiado abaixo: ele mostra o que há lá dentro e o que os alunos podem fazer.')}
  <h3 class="subh">🧭 O que os alunos fazem no Sparks</h3>
  <div class="grid3">${[
    ['📰','Feed','Eles veem e reagem aos projetos dos colegas e leem o feedback do mentor de IA.'],
    ['📁','My projects','Tudo o que salvaram ou publicaram, em um só lugar.'],
    ['🚀','Publish project','Compartilham um projeto finalizado, escolhem quem pode vê-lo e podem ganhar recompensas.'],
    ['🎨','Studio · Creative mode','Onde constroem em aula: jogos e aplicativos web, Python, Scratch, pixel art, animação, música, skins.'],
    ['🏆','Studio · Challenges mode','Tarefas estruturadas com correção automática — e cristais como recompensa.'],
    ['🤖','Assistente de IA e tutor de IA','É aqui que vive o AI Buddy / mentor de IA: dicas, ideias e explicações — a IA propõe, o autor decide.']
  ].map(x => `<div class="ti" style="padding:18px"><span class="tie" style="font-size:46px">${x[0]}</span><h3>${x[1]}</h3><p>${x[2]}</p></div>`).join('')}</div>
  <h3 class="subh">💬 Feedback no Sparks</h3>
  <p class="p">Não há curtidas nem comentários clássicos. Em vez disso, os alunos deixam <b>reações</b> (emojis), escrevem <b>avaliações</b> em três campos — impressão geral, pontos fortes e o que melhorar — e podem seguir uns aos outros. A gamificação funciona com <b>cristais → baús → recompensas</b>. As avaliações de um tutor ficam em destaque, para que os alunos reconheçam o feedback oficial.</p>
  ${callout('tip', '🔗', '<b>Publicar no Sparks e enviar o link na plataforma da Kodland são dois passos diferentes.</b> Em muitas aulas, os alunos publicam o projeto e depois colam o link em um card — lembre-os de fazer os dois.')}
  ${callout('tip', '🧭', 'Agora faça o tour. É uma réplica do Kodland Sparks: você vai visitar o Feed, publicar um projeto, abrir o Studio e ver um projeto em Python, um projeto em Scratch e um desenho, e terminar com o assistente de IA e os cristais.')}
  ${launch('⚡', 'Simulação 3 de 3', 'Guia do Kodland Sparks', 'Um tour guiado pela plataforma que os seus alunos usam: Feed, My projects, Publish project, Studio com todos os tipos de projeto, assistente de IA e recompensas.', CONFIG.SPARKS_SIM, '⚡ Abrir o guia do Kodland Sparks')}
  ${codeBox('sparksCode')}`,

/* ---------------- Module 3 ---------------- */
structure:() => `
  <p class="p">Nos cursos com o novo modelo, uma aula não é mais uma apresentação com grandes blocos e um slide que avisa quando “resumir” ou “encerrar”. Uma aula é uma sequência de <b>cards de atividade</b> na plataforma, e cada card traz o seu próprio conteúdo para o aluno e as suas próprias notas para você. Isso significa uma grande coisa: <b>você gerencia o ritmo da aula — não um slide.</b></p>
  <h3 class="subh">🏷️ Os rótulos dizem que tipo de momento é</h3>
  <p class="p">Muitos cards trazem um rótulo nas Teacher Notes, como <b>(CORE)</b> ou <b>(SUBMIT)</b>. Eles mostram, num relance, que tipo de momento de ensino é o card — e quanto espaço dar à autonomia do aluno. Toque em cada um:</p>
  <div class="grid4">${[['CORE','🧱','A construção central da aula.'],['SELF-CHECK','🪞','O aluno verifica a própria compreensão.'],['AI-CREATE','🤖','O único momento em que a IA é usada — com um limite claro.'],['CHOICE/INTEREST','🎨','Uma escolha pessoal: o estilo e a ideia do aluno.'],['SUBMIT','📤','Algo precisa ser entregue ou publicado.'],['PEER-FEEDBACK','👥','Os colegas comentam o trabalho uns dos outros.'],['REFLECT','💭','Um momento para pensar no que aprenderam.'],['CHALLENGE','🏆','Um desafio extra, opcional.'],['DEBUG','🐞','Encontrar e corrigir um bug de propósito.'],['SYSTEM-TEST','🧪','Testar o projeto inteiro do começo ao fim.']].map(t => `<button class="oq" data-oq><b>${t[1]} ${t[0]}</b><span>${t[2]}</span></button>`).join('')}</div>`,

seeing:() => `
  <p class="p">Como não há um slide para lembrar você, manter a estrutura da aula agora está nas suas mãos. As revisões de qualidade olham cada aula como um todo: o <b>aquecimento</b>, o <b>objetivo da aula</b>, a <b>prática</b>, as <b>perguntas</b> que você faz, a <b>recapitulação</b>, a <b>lição de casa</b> e a <b>prévia</b> da próxima aula.</p>
  <p class="p">As aulas com o novo modelo costumam ser animadas e envolventes. O desafio é não perder a estrutura pelo caminho — principalmente no começo e no fim da aula:</p>
  <div class="okbad">
    <div class="ok"><h3>💚 Continue fazendo</h3><ul><li>Envolver vários alunos.</li><li>Chamar os alunos pelo nome.</li><li>Dar tempo real de prática.</li></ul></div>
    <div class="bad"><h3>💗 O que reforçar</h3><ul><li>O aquecimento e o cumprimento.</li><li>A conferência da lição de casa.</li><li>Perguntas que levam os alunos a explicar o raciocínio.</li><li>A recapitulação no final.</li><li>O gancho para a próxima aula.</li></ul></div>
  </div>
  <p class="p" style="margin-top:16px">Esses são hábitos, e hábitos podem ser construídos. O restante deste módulo traz três: uma abertura adequada, perguntas de raciocínio dirigidas a alunos específicos e uma rotina fixa de encerramento.</p>`,

opening:() => `
  <p class="p">Uma abertura adequada leva apenas alguns minutos e prepara tudo o que vem depois: os alunos se sentem acolhidos, lembram em que ponto está o projeto, mostram o que fizeram em casa e sabem aonde a aula de hoje quer chegar. Ela tem quatro partes. Percorra cada uma — com frases reais que você pode usar e um vídeo de uma aula real:</p>
  ${stc('open')}
  ${callout('tip', '⏱️', 'Seja breve: <b>cerca de 5 a 7 minutos</b> para as quatro partes juntas. Uma aula que começa com conexão rende melhor — não mais devagar.')}`,

reasoning:() => `
  <p class="p">“Ficou claro?” quase sempre recebe um “sim” — e não diz nada a você. As perguntas que funcionam são as que levam o aluno a <b>explicar o próprio raciocínio</b>: por que algo acontece, como ele sabe, o que mudaria se… E funcionam melhor quando você as <b>dirige a um aluno específico, pelo nome</b>.</p>
  <div class="card">
    <div class="wh"><b>Fechada ou de raciocínio? Alterne e compare</b><span class="tag">Experimente</span></div>
    <div class="seg" data-cmp="questions"><button data-k="v" aria-pressed="true">😐 Fechada</button><button data-k="s" aria-pressed="false">🧠 De raciocínio</button></div>
    <div class="fbx" data-cmpout="questions"></div>
  </div>
  <h3 class="subh">🎯 Quais perguntas fazem os alunos pensar? Decida em cada uma</h3>
  <div class="sorter" id="sorter">${[
    ['🙋','“Leo, como você fez a moeda sumir quando o jogador encosta nela?”','yes','<b>Sim.</b> Um nome mais um “como”: o Leo precisa explicar a lógica com as próprias palavras.'],
    ['🙂','“Todo mundo bem? Vamos continuar?”','no','<b>Não.</b> Uma pergunta de sim ou não para o grupo — ninguém precisa pensar para responder.'],
    ['🔍','“Ana, o que você acha que vai acontecer se tirarmos esta linha? Teste e conte para a gente.”','yes','<b>Sim.</b> Ela prevê, testa e explica — o Learning Loop em uma pergunta.'],
    ['✅','“Ficou claro como funciona a pontuação?”','no','<b>Não.</b> Você vai ouvir um “sim”, esteja claro ou não. Peça a alguém que explique.']
  ].map(r => `<div class="srow" data-ans="${r[2]}"><span class="sei">${r[0]}</span><span class="stx">${r[1]}</span><span class="sbtns"><button data-pick="yes">🧠 Faz pensar</button><button data-pick="no">😐 Não faz</button></span><span class="sfb">${r[3]}</span></div>`).join('')}</div>
  ${callout('good', '💡', 'Distribua as perguntas: alunos diferentes, momentos diferentes — durante o ponto de checagem, enquanto constroem e na recapitulação.')}`,

closing:() => `
  <p class="p">O fim da aula costuma ficar de lado — porque o tempo acaba ou porque parece menos importante do que terminar a atividade. Mas é o momento em que os alunos colocam em palavras o que aprenderam, ficam curiosos pela próxima aula e saem sabendo o que fazer em casa. Com uma boa gestão do tempo, você pode fazer isso acontecer em toda aula: reserve os <b>últimos 5 a 7 minutos</b> para uma <b>rotina fixa de encerramento</b> e comece-a na hora certa, mesmo que a atividade não tenha terminado. Funciona igual qualquer que seja a duração das suas aulas: escolha uma e arraste pela linha do tempo:</p>
  <div class="tline" id="tline">
    <div class="seg" id="tlLen" style="margin-bottom:12px"><button data-len="60" aria-pressed="true">⏱️ Aula de 60 minutos</button><button data-len="90" aria-pressed="false">⏱️ Aula de 90 minutos</button></div>
    <div style="display:flex;align-items:center;gap:14px;flex-wrap:wrap"><span class="clock" id="tlClock">0′</span><input type="range" min="0" max="60" value="0" id="tlRange" style="flex:1;min-width:220px" aria-label="Minute of the lesson"></div>
    <div class="tl-bar"><div class="tl-open" id="tlOpen">Abertura</div><div class="tl-main" id="tlMain">Cards: construir, explorar, corrigir, mostrar</div><div class="tl-close" id="tlClose">Encerramento</div><span class="tl-head" id="tlHead" style="left:0"></span></div>
    <div class="tl-scale" id="tlScale"></div>
    <div class="tl-out" id="tlOut"></div>
  </div>
  <p class="p" style="margin-top:18px">A rotina tem três passos. Percorra cada um — com um vídeo de uma aula real:</p>
  ${stc('close')}
  ${callout('warn', '⏰', '<b>Um truque que funciona:</b> programe um timer para <b>5 a 8 minutos antes do fim</b> da aula. Quando ele tocar, você encerra — onde quer que esteja. Um card inacabado pode continuar na próxima aula ou fazer parte da lição de casa.')}`,

metrics:() => `
  <div class="defn"><span class="de">📈</span><p><b>Os slides acabaram — a estrutura não.</b> Lembre-se de que a estrutura da aula está intimamente ligada a métricas importantes como <b>frequência</b>, <b>retenção</b> e <b>entrega da lição de casa</b>. Lembrar os alunos da lição de casa, explicá-la e revisá-la, fazer um aquecimento e um fechamento, explicar os objetivos da aula e dar uma prévia da próxima aula contribuem para o engajamento, a retenção e a frequência dos alunos.</p></div>
  <h3 class="subh">Três métricas, três hábitos concretos</h3>
  <div class="trio">
    <div class="ti"><span class="tie">🗓</span><h3>Frequência</h3><p>Registre-a no início, durante o aquecimento, enquanto os alunos se acomodam. Não deixe para o fim da aula, quando você está encerrando e provavelmente vai esquecer.</p></div>
    <div class="ti"><span class="tie">📚</span><h3>Lição de casa</h3><p>Como a lição de casa agora é “a próxima iteração do mesmo projeto”, confira-a dentro do ponto de checagem da aula anterior. Se um aluno não tiver nada, esse é o seu sinal para verificar se ele travou por um motivo técnico, e não apenas para registrar um zero.</p></div>
    <div class="ti"><span class="tie">💚</span><h3>Retenção</h3><p>Um aluno que para de publicar no Sparks, ou de entregar os trabalhos, geralmente perde o engajamento antes de deixar de comparecer. Esses dois sinais são o seu alerta mais precoce.</p></div>
  </div>
  ${callout('warn', '⚠️', '<b>Lembre-se:</b> nas atividades em que os alunos enviam texto, links ou arquivos, o trabalho só é registrado quando eles clicam em <b>“Send”</b>. Uma aula que pareceu ótima ainda pode aparecer com zero de conclusão das atividades em aula. Faça desse lembrete parte da sua rotina de encerramento.')}`,

qcheck:() => `
  <p class="p">Aqui está tudo deste módulo em um só checklist. Mantenha-o por perto nas suas primeiras aulas, até virar hábito:</p>
  <div class="card"><div class="wh"><b>✅ Meu checklist de qualidade da aula</b><span class="tag">Marque um a um</span></div>
    <div class="ckgroup">☑️ Antes da aula</div>
    <div class="cklist">${['Li as Teacher Notes desta aula no Backoffice.','Li também a <b>próxima</b> aula, para criar expectativa no encerramento.','Abri o resultado final que vou mostrar no início (vídeo, GIF ou projeto funcionando).','Sei qual é a única etapa com IA que esta aula permite e o seu limite de escopo.','Sei onde está o template de reserva, caso um projeto quebre.','Tenho um plano para registrar a presença durante o aquecimento.','Vou lembrar os alunos de clicar em <b>“Send”</b> nas atividades que exigem isso antes de encerrarmos.'].map((t, i) => `<button class="ck" data-ck="b${i}"><span class="ckb"></span><span>${t}</span></button>`).join('')}</div>
    <div class="ckgroup">🎬 Abertura</div>
    <div class="cklist">${['Cumprimento cada aluno pelo nome e faço um aquecimento curto.','Ligo a aula de hoje à anterior.','Confiro a lição de casa e cito uma coisa específica que deu certo.'].map((t, i) => `<button class="ck" data-ck="o${i}"><span class="ckb"></span><span>${t}</span></button>`).join('')}</div>
    <div class="ckgroup">🧠 Durante a aula</div>
    <div class="cklist">${['Faço perguntas de raciocínio a alunos específicos, pelo nome.','Continuo envolvendo vários alunos e dou tempo real de prática.','Fico de olho no tempo para que o encerramento comece na hora certa.'].map((t, i) => `<button class="ck" data-ck="d${i}"><span class="ckb"></span><span>${t}</span></button>`).join('')}</div>
    <div class="ckgroup">🏁 Encerramento — últimos 5 a 7 minutos</div>
    <div class="cklist">${['Os alunos fazem a recapitulação: dizem o que aprenderam.','Dou um gancho motivador para a próxima aula.','Explico a próxima lição de casa e como entregá-la.'].map((t, i) => `<button class="ck" data-ck="c${i}"><span class="ckb"></span><span>${t}</span></button>`).join('')}</div>
  </div>`
};
