/* ============================================================
   Simulação do Backoffice · conteúdo em PORTUGUÊS (Brasil)
   Traduza apenas o texto dentro de aspas / crases. Mantenha tags HTML, placeholders ${...}, chaves, ids, nomes de arquivos e URLs sem alterações.
   ============================================================ */
window.CONTENT = { lang: 'pt' };

/* ---------- PAGE CHROME, BO SCREENS, TOASTS ---------- */
CONTENT.ui = {
  pageTitle:'Novo Modelo Educacional — Simulação do BO — Treinamento Kodland',
  simBadge:'🧪 SIMULAÇÃO — Treinamento Kodland (dados fictícios)',
  tourBtn:'🚀 Iniciar o tour guiado',
  tourMinimize:'Minimizar ▾', tourResume:'📍 Retomar o tour guiado',
  stepOf:'Passo {n} de {total}', nextArrow:'Próximo →', finish:'Concluir ✓',
  groupsTitle:'Groups', tabExtra:'Extra Lessons', tabParallel:'Parallel Groups', tabRegular:'Regular Groups',
  emptyRegular:'Nenhum grupo para mostrar nesta simulação — abra <b>Courses</b> no menu lateral.',
  colID:'ID', colTitle:'Title', colTutor:'Tutor', colType:'Type', colCurrentCourse:'Current course', colStart:'Start',
  colStudentsPaid:'Students/Paid', colPreviousLesson:'Previous lesson', colNextLesson:'Next lesson', colPremium:'Premium',
  containerType:'Group', no:'No', yes:'Yes',
  itemsPage100_1:'Items per page: 100 &nbsp;|&nbsp; 1-1 of 1', itemsPage10_4:'Items per page: 10 &nbsp;|&nbsp; 1-4 of 4',
  itemsPage100_19:'Items per page: 100 &nbsp;|&nbsp; 1-9 of 9',
  backToGroups:'Back to Groups', backToCourses:'Back to Courses', backToAssignments:'Back to Assignments',
  tutorLabel:'Tutor:', openConsoleTip:'Open console', colLessonTime:'Lesson time', colCourse:'Course', colNextTopic:'Next lesson topic',
  simOpenCourseFromDetail:'Abra a ficha do curso também por aqui',
  teacherName:'Demo Teacher', teacherCountry:'🌎 LatAm',
  profileTitle:'Profile', teacherCoursesH:'Teacher courses', availabilityH:'Availability hours', notAssigned:'Not assigned',
  groupsTabLbl:'Groups', scheduleTabLbl:'Schedule', regularGroupsNote:'Lista dos seus grupos.',
  currentWeek:'Current Week', available:'Available',
  days:['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
  coursesTitle:'Courses', colBusinessBranch:'Business branch', colActive:'Active', colNumberOfLessons:'Number of lessons',
  badgeActive:'Active', fieldBranch:'Business branch: ENG', fieldLanguage:'Language: English 🇬🇧', fieldCourseType:'Course type: Paid courses',
  fieldCourseGroup:'Course group: Code & Game lvl 1', fieldLessons:'Number of lessons: 40', fieldModules:'Number of modules: 10',
  fieldExcluded:'Excluded from overbooking: No', fieldCertificate:'Certificate: —',
  lessonsTab:'Lessons', assignmentsTab:'Assignments', moduleFirstSteps:'M1. Creator Lab: primeiras missões', viewAssignments:'View assignments →',
  colNo:'Nº', colActions:'Actions',
  lessonSelectLbl:'Lesson', lessonOption:'L1. Dance Party: dando vida ao palco',
  inClassH:'In-class assignments', homeworkH:'Homework assignments', studyGuidesH:'Study guides',
  colNumber:'Number', colAssignmentTitle:'Assignment title', colTheory:'Theory', colProject:'Project', colMaxScore:'Max score',
  interactive:'INTERACTIVE', noData:'No data available',
  noWikiNote:'Não há links para a wiki aqui — e isso é de propósito. Nos cursos do novo modelo educacional, o guia do tutor fica dentro das próprias atividades, como Teacher Notes, e não em um documento separado na wiki.',
  modalGroups:'GROUPS', modalExit:'Exit', modalOpenConsole:'Open Console',
  toastConsoleDetail:'🔗 Isto abre o link do Classroom deste grupo.',
  toastConsoleModal:'🔗 Este é o mesmo link do Classroom, acessado pela sua Schedule.',
  toastSimClick:'🧪 Isto é uma simulação — no BO real, esta ação faria: «{label}».',
  toastBlocked:'👉 Siga o passo destacado para continuar — o tour guiado é obrigatório na primeira vez.',
  reflect:'🎉 <strong>Tour guiado concluído!</strong> Agora você sabe como abrir um curso do novo modelo em Courses, onde ficam as aulas e as atividades dele, por que não há link para a wiki e onde encontrar as Teacher Notes dentro de cada atividade. Fique à vontade para continuar explorando esta réplica por conta própria.',
  /* Assignment titles in the "In-class assignments" table (same order as the rows) */
  inClass:['Comece a primeira missão do Creator Lab! 💃','Boas-vindas ao Creator Lab! 👋','Vamos nos conhecer! 🎤','Acordo da equipe criativa 🤝','Confira se você está conectado 📡','O que é o Creator Lab? ✨','Baixe e abra o projeto 📥','Veja o que já funciona 🔎','Descubra como os blocos funcionam 🧩'],
  homework:[]
};

/* ---------- LESSON VIEWER (Teacher Note + student card) ---------- */
CONTENT.lesson = {
  lessonCrumb:'Meus cursos &gt; Comece a primeira missão do Cr...', teacherNoteBadge:'👁 Teacher Note — só os tutores veem este bloco',
  lessonTitle:'Preparação para a aula · Dance Party: dando vida ao palco',
  hOverview:'Visão geral da aula',
  pOverview:'Esta é a primeira aula do programa Code & Game lvl 1 (Creator Lab: Jogos e IA, de 8 a 9 anos). Os alunos conhecem o Creator Lab, exploram um protótipo pronto no Scratch e criam o próprio show interativo de Dance Party na plataforma Kodland Sparks. O objetivo principal é entender a relação «evento → ação → resultado», ter um projeto funcionando rapidamente e usar a IA com segurança como assistente criativo.',
  hMission:'Missão da história da aula',
  pMission:'Os alunos entram no laboratório criativo secreto, o Creator Lab. A primeira missão deles é «Dar vida ao palco digital»: usar código e IA para criar um show de dança em que as teclas disparam movimentos, sons, trocas de fantasia e efeitos visuais.',
  hGoal:'Objetivo principal da aula',
  pGoal:'Ajudar cada aluno a criar um show interativo personalizado e a explicar, com palavras simples, como um evento — apertar uma tecla — dispara uma ação do personagem e produz um resultado visível.',
  hResult:'Resultado esperado',
  resultItems:['O projeto Dance Party roda e funciona no Scratch, dentro do Kodland Sparks.','O show inclui um personagem e uma música escolhidos pelo aluno, além de um fundo criado com a ajuda da IA.','O personagem reage ao apertar de uma tecla com um movimento, uma troca de fantasia, um som ou um efeito.','O aluno apresenta o projeto e explica pelo menos uma relação «evento → ação → resultado».'],
  calloutLbl:'Antes de dar a aula', callout:'Assista ao vídeo da aula abaixo e leia as notas de cada card — o guia de toda a aula fica aqui, e não em uma wiki.',
  videoTag:'AULA 1', videoTitle:'Creator Lab: Dance Party — em que se concentrar',
  videoDesc:'A primeira aula explicada para o tutor: o objetivo, o fluxo dedutivo e os momentos que pedem a sua atenção. ▶',
  hRole:'O papel do tutor',
  pRole1:'Apresente aos alunos a história do Creator Lab e mostre o show de dança finalizado como referência do resultado final. Conduza-os da exploração do protótipo até a escolha do personagem, da música e do fundo feito com IA, e à criação de pelo menos duas reações a teclas diferentes.',
  pRole2:'Apoie com perguntas de esclarecimento, dicas curtas e reconhecimento pela criatividade, pelas decisões independentes e pelos erros corrigidos. Supervisione o uso seguro do Sandbox Spark e do AI Buddy, <b>sem deixar que a IA construa a mecânica no lugar do aluno.</b>',
  hFocus:'Abordagem metodológica',
  pFocus1:'Comece mostrando o resultado final e explorando o protótipo pronto. Apresente a teoria por meio da observação: o aluno aperta uma tecla, vê a reação do personagem e formula a relação «evento → ação → resultado».',
  pFocus2:'Mantenha o Learning Loop: <b>objetivo → tentativa → dificuldade → apoio → melhoria → apresentação → reflexão.</b> Apresente os erros como parte normal do processo criativo.',
  pFocus3:'Deixe o aluno escolher o personagem, a música, os movimentos, os efeitos, a redação do pedido à IA e o fundo feito com IA. As decisões finais sobre o projeto devem ser dele.',
  hImportant:'Pontos importantes',
  importantItems:['Use instruções curtas, bastante apoio visual e uma única atividade por card.','Confira se o aluno acrescentou pelo menos duas reações diferentes a teclas e se testou cada uma delas.','Não acrescente pontuação, condições de vitória ou derrota, variáveis, condições complexas, listas, clones ou mensagens entre sprites.','Confira se os pedidos à IA não contêm dados pessoais e se são feitos apenas dentro do ambiente seguro do Kodland Sparks.'],
  hEnding:'Encerramento da aula',
  pEnding:'Faça uma breve apresentação dos projetos. Peça aos alunos que expliquem qual tecla dispara a ação que escolheram e que deem feedback usando esta fórmula: «Eu gostei de… Eu acrescentaria…». Termine com uma autoavaliação do projeto.',
  hNext:'Próxima aula',
  pNext:'Na aula M01L02, «Portal Guardian: o herói e os cristais», os alunos começarão a primeira mecânica de jogo: mover o personagem e coletar objetos.',
  studentTitle:'Comece a primeira missão do Creator Lab! 💃',
  studentLead:'Você vai dar vida a um palco digital e criar o seu próprio show de dança, que reage quando você aperta teclas diferentes.',
  hEquip:'⌨️ Confira o seu equipamento', equipItems:['Confira o seu teclado: você vai usá-lo para controlar o show de dança.'],
  hSpace:'✨ Prepare o seu espaço de trabalho', spaceItems:['Sente-se de modo que consiga trabalhar com conforto no projeto e usar o teclado.','Prepare-se para escolher o seu personagem, a sua música, os seus movimentos e o fundo do seu palco.'],
  tipLbl:'💡 Missão de hoje', tipBody:'Explore um show de dança que já funciona e depois transforme-o no seu: o seu personagem, a sua música, o seu fundo e os seus movimentos.'
};

/* ---------- GUIDED TOUR STEPS (same order as STEPS in the page) ---------- */
CONTENT.steps = [
  {title:'1 · Abra o curso',body:'Para ver o conteúdo de um curso, você passa por <b>Courses</b>, e não por Groups. Clique em <b>[2063] Code &amp; Game. Level 1</b>.'},
  {title:'2 · A ficha do curso',body:'Business branch, idioma, número de aulas e de módulos — os mesmos campos de qualquer curso. O novo modelo não muda a forma como um curso é cadastrado no BO.'},
  {title:'3 · Abra Assignments',body:'Clique na aba <b>Assignments</b>.'},
  {title:'4 · As atividades da aula',body:'Estes cards interativos SÃO o conteúdo da aula — instruções, dicas, imagens e vídeos, tudo dentro de cada card. Não existe uma apresentação separada para você ensinar.'},
  {title:'5 · Sem link para a wiki — de propósito',body:'A tabela <b>Study guides</b> está vazia. Isso não é um erro: no novo modelo, o guia do tutor fica dentro das próprias atividades, como Teacher Notes — e não em um documento separado na wiki.'},
  {title:'6 · Abra a primeira atividade',body:'Clique em <b>Comece a primeira missão do Creator Lab!</b> para ver como é uma Teacher Note por dentro.'},
  {title:'7 · A nota do tutor, dentro do próprio card',body:'Não existe uma aba «tutor» separada — é o mesmo card, com rolagem. Este bloco tracejado, com borda laranja, é uma <b>Teacher Note</b>. O primeiro card de uma aula traz a mais completa: visão geral, missão da história, objetivo, o seu papel, o método, pontos importantes, o encerramento e a próxima aula. Só os tutores veem este bloco.'},
  {title:'8 · Role para baixo: o que o aluno vê',body:'Logo abaixo, no mesmo card, está o que o aluno realmente vê: a missão e o checklist de preparação. Sem Teacher Note, sem botão para alternar — a plataforma simplesmente nunca mostra esse bloco em uma conta de aluno.'}
];

/* ---------- FINISH SCREEN (completion code overlay) ---------- */
CONTENT.done = {
  title:'Simulação concluída!',
  body:'Você terminou o tour pelo BO: abrir um curso do novo modelo, as suas Assignments, por que não há wiki e as Teacher Notes dentro de cada atividade.',
  codeLabel:'🔑 Seu código de conclusão',
  codeHint:'Digite-o no treinamento para concluir esta simulação.',
  nextStep:'<b>Próximo passo:</b> copie o código, feche esta aba e volte ao treinamento.',
  stay:'Continuar explorando',
  close:'Fechar e voltar ao treinamento',
  closedMsg:'<b>Você já pode fechar esta aba</b> e continuar na aba do treinamento.'
};
