/* ============================================================
   EM lesson guide (Classroom) · Minecraft course (Craftforge, ages 8–9) · BASE FILE (Brazil)
   - Guide texts (CONTENT.ui, welcome, guide, finish): in ENGLISH, to be translated.
   - Lesson cards (CONTENT.activities): in PORTUGUESE, copied from the lesson file.
   Other languages: copy this file as content-xx.js, set lang / media / dir, translate the guide
   texts and replace the cards with the lesson of that language.
   Keep HTML tags, ${...} code, keys, ids and file names unchanged.
   ============================================================ */
window.CONTENT = { lang: 'pt' };
CONTENT.media = 'Media_Minecraft_BRA/';   // this language's screenshots (the shared illustrations are in Media_Minecraft_COMMON/)
CONTENT.video = '';                       // Google Drive /preview link of the first card's video ('' = placeholder)
CONTENT.dir = 'ltr';                      // 'rtl' for Arabic

/* =========================================================
   INTERFACE STRINGS (page title, replicated Classroom, guide card)
   ========================================================= */
CONTENT.ui = {
  title: 'Guia da aula EM · Minecraft',

  // Classroom header
  headerTitle: 'Craftforge · Aula',
  online: '2 online',
  guideChip: 'Guia da aula EM',
  leave: 'Leave',

  // Classroom toolbar (tooltips included)
  classroom: 'Classroom',
  assignments: 'Assignments',
  prevTask: 'Previous task',
  nextTask: 'Next task',
  leadGroup: 'Lead the group',
  endSession: 'End session',

  // Video tiles
  student: 'Sofia',                 // the student's name (also used in the guide texts below)
  tutorInitial: 'T',                // letter in the tutor's avatar
  tutorYou: 'Tutor (você)',
  following: 'Seguindo o tutor',

  // Lesson platform header shown inside Assignments
  platformLang: 'PT ˅',
  platformUser: 'Tutor',

  // Shared pieces of the lesson cards (in the lesson's language)
  teacherNotes: 'Notas para o tutor',
  submit: '✔ Enviar',
  choose: 'Escolher…',
  uploadFile: 'Anexar arquivo',
  videoSoon: 'Vídeo da aula',

  // Guide card (coach)
  coachStep: (n, total) => `Guia da aula EM · ${n}/${total}`,
  next: 'Próximo →',
  clickHint: '👆 Clique no elemento destacado',
  openSections: (opened, total) => `Abra todas as seções (${opened}/${total})`,
  scrollEndNotes: 'Role até o fim das notas',
  scrollEndCard: 'Role até o fim do cartão'
};

/* =========================================================
   WELCOME PAGE
   ========================================================= */
CONTENT.welcome = {
  kicker: 'Novo Modelo Educacional · Treinamento para tutores',
  title: 'Guia da aula <span>EM</span>',
  lead: 'Este guia mostra como é uma aula do <b>novo modelo educacional (EM)</b> no Classroom. Ele usa os primeiros cartões de uma aula real do EM do curso de Minecraft — <b>Craftforge, Aula 1: A primeira chama</b> — e uma aluna, a Sofia, que já está na sala de aula.',
  seeTitle: 'O que você vai ver',
  see: [
    'Como uma <b>aula do EM</b> é organizada: uma série de cartões, com toda a orientação dentro da própria aula.',
    'O que o <b>tutor vê</b> e o que a <b>Sofia vê</b>: as <b>notas para o tutor</b> ficam dentro de cada cartão, e só o tutor consegue vê-las.',
    'As <b>primeiras notas para o tutor</b>, as mais detalhadas da aula: a história, o objetivo, o seu papel, o plano de tempo e, na primeira aula de um curso, um vídeo explicativo.',
    'Como usar o <b>Lead the group</b>, para que os alunos acompanhem o cartão que você abrir.'
  ],
  howTitle: 'Como usar',
  howText: 'Este é um guia, não uma simulação de prática: não há decisões a tomar nem nada a perder. Basta seguir os passos destacados e clicar onde o guia indicar. Você pode repetir quantas vezes quiser.',
  start: 'INICIAR O GUIA →'
};

/* =========================================================
   LESSON CONTENT (Craftforge, ages 8–9 — Lesson 1 "A primeira chama")
   Each card: title (shown in the Assignments list and above the card) + html, built with
   the page's helpers: tnotes = Teacher notes box, spoiler = collapsible section,
   media = picture + text, test = quiz, choice = choice cards, essay = answer box,
   fileAnswer = file upload, gallery = pictures side by side, note = titled example box,
   linkBtn = button, video = the first card's video.
   C('file.png') = an illustration shared by every language (Media_Minecraft_COMMON/): keep these as they are.
   M('file.png') and gallery([...]) = screenshots of this language's folder (CONTENT.media): use your lesson's file names.
   ========================================================= */
CONTENT.activities = ({ M, C, tnotes, spoiler, media, banner, ul, ol, test, essay, note, linkBtn, gallery, choice, fileAnswer, video }) => [
  { title:`A primeira chama: confira suas ferramentas`, html:
    tnotes(`
      <h1>Preparação para a aula: A primeira chama</h1>
      <h2>Visão geral da aula</h2>
      <p>Esta é a primeira aula do curso, destinado a crianças de 8 a 9 anos. Segundo a narrativa do curso, o mundo ficou escuro após o desastre conhecido como <strong>A Grande Falha</strong>: as cores desapareceram, os rostos das pessoas foram roubados e tudo ficou congelado em tons de cinza. O aluno é um novo <strong>Artesão</strong>, chamado para este mundo por uma voz misteriosa. Em 60 minutos, ele traz a primeira parte desse mundo de volta à vida ao <strong>criar seu próprio rosto</strong> (criando uma skin) e <strong>construir uma casa em uma ilha secreta</strong> (construindo um abrigo). Isso é feito sob a supervisão do Spark, o último que restou da Forja.</p>
      <p>Missão: obter a chave para o mundo (instalar o launcher) → Criar um rosto no Estúdio de Skins → Aplicá-lo → Entrar no novo local: uma floresta nevada no limite do mundo → Entrar na masmorra → Descobrir as Ruínas do Caos → Atravessar a Ponte dos Engenheiros → Entrar na vila dos sobreviventes → Chegar à ilha secreta → Construir um abrigo na ilha → Assistir ao Desfile dos Revividos.</p>
      ${spoiler(`História da missão da aula`, `<p>A Grande Falha mergulhou o mundo na escuridão e roubou os rostos das pessoas. Spark — a última faísca viva da Grande Forja — sobreviveu à Grande Falha, encontrou um novo Artesão e compartilha sua luz com ele. A tarefa do Artesão é criar seu próprio rosto, seguir a trilha em direção ao mundo sobrevivente e construir um abrigo em uma ilha vazia, que servirá como uma base de operações para os próximos desafios. Cada cor e cada bloco fazem A Grande Falha recuar um pouco mais.</p>`)}
      ${spoiler(`Objetivo principal da aula`, `<p>Guie as crianças por todo o processo criativo: elas devem inventar um Artesão, desenhar uma skin no launcher, aplicá-la, seguir a trilha até a ilha, construir um abrigo lá e mostrar o resultado ao grupo.</p>`)}
      ${spoiler(`Principais resultados de aprendizagem`, ul([`A skin é diferente da skin cinza do Steve ou da Alex e foi <strong>aplicada</strong> com o botão “Wear”. A criança entrará no mundo como seu próprio Artesão ou Artesã.`, `Há um abrigo na ilha, em um local escolhido pela criança. O abrigo tem paredes, teto, entrada, algumas decorações e uma placa com seu apelido.`, `A criança mostrou seu resultado e disse o que “ganhou vida”.`]))}
      ${video()}
      <h2>O papel do tutor</h2>
      <p>Você é o narrador e guia da história, não um personagem dela. Mantenha uma atmosfera acolhedora e aventureira e explique a história com suas próprias palavras: o mundo ficou escuro, o Artesão é necessário para fazer as coisas voltarem ao normal, e cada passo do Artesão traz o mundo de volta à vida. O Spark é um companheiro vivo e flamejante, além de ser o herói desta história. O Spark vive no texto dos cartões (as tarefas) e fala com o aluno por eles, então você não precisa interpretar sua voz. Se quiser, leia as falas do personagem nos cartões com um tom acolhedor e alegre. Comece com as apresentações, os Acordos dos Artesãos, a verificação da conexão e a instalação do launcher. Inicie o download do jogo imediatamente para que ele continue em segundo plano. Quando o download terminar, peça aos alunos para criarem um rosto no Estúdio de Skins e confira se os alunos clicaram em <strong>Vestir</strong>. Eles devem entrar no mundo com sua nova skin. Certifique-se de que a turma veja os elementos visuais principais da aula: primeiro, um personagem cinza e uma ilha vazia; depois, eles ganhando vida. Guie a turma pela trilha (masmorra → ruínas do caos → ponte → vila → ilha) compartilhando sua tela. Todos devem seguir o mesmo caminho. Mantenha o ritmo anunciando pontos de verificação: “Já chegaram? Enviem um + no chat.”</p>
      ${spoiler(`Duração das etapas da aula`, `<table>
        <tr><th>Etapa</th><th>Cartão</th><th>Duração da etapa</th></tr>
        <tr><td>Introdução</td><td>Boas-vindas</td><td>2 min</td></tr>
        <tr><td></td><td>Acordos dos Artesãos</td><td>2 min</td></tr>
        <tr><td></td><td>Verificação da conexão</td><td>2 min</td></tr>
        <tr><td></td><td>Chave para o mundo: instalando o launcher</td><td>6 min</td></tr>
        <tr><td></td><td>Que tipo de artesão você é?</td><td>3 min</td></tr>
        <tr><td>Seção principal</td><td>Abrindo o Estúdio de Skins</td><td>3 min</td></tr>
        <tr><td></td><td>Criando seu rosto</td><td>7 min</td></tr>
        <tr><td></td><td>Aplicando seu novo rosto</td><td>4 min</td></tr>
        <tr><td></td><td>Um caminho pela masmorra</td><td>8 min</td></tr>
        <tr><td></td><td>Pausa para jogar</td><td>4 min</td></tr>
        <tr><td></td><td>Transformando a ilha em seu lar</td><td>10 min</td></tr>
        <tr><td>Conclusão</td><td>O desfile dos que voltaram à vida</td><td>5 min</td></tr>
        <tr><td></td><td>Agora você é um artesão</td><td>2 min</td></tr>
        <tr><td></td><td>Mais uma faísca: orientações sobre a lição de casa</td><td>2 min</td></tr>
      </table>`)}
      ${spoiler(`Controle de tempo e possíveis dificuldades`, ul([`<strong>Etapas em que você pode perder tempo:</strong> “Criando seu rosto” (7 min), “Um caminho pela masmorra” (8 min) e “Transformando a ilha em seu lar” (10 min). Lembre os alunos de que a skin deve ser pessoal, não perfeita. Peça que sigam os pontos de referência do caminho, sem explorar livremente. Quatro elementos são suficientes para o abrigo.`, `<strong>Deixe o jogo carregar em segundo plano:</strong> no cartão “Chave para o mundo”, verifique se o download de todos foi <em>iniciado</em> e não concluído. Ele continuará sozinho enquanto os alunos se conhecem. Ajude quem estiver atrasado no caminho até a ilha.`, `<strong>Principal dificuldade:</strong> um aluno desenha uma skin e acha que terminou. A regra principal é: desenhe a skin → clique no botão verde <strong>Vestir</strong> (“Pronto”) → depois entre no mundo. Quem entrar sem clicar em “Vestir” deve sair e entrar novamente.`, `<strong>Demonstração essencial:</strong> mostre na sua tela um exemplo de antes e depois: o personagem cinza se torna único, e a ilha vazia ganha vida.`, `<strong>Adaptações:</strong> para os alunos que precisam de mais tempo, defina o mínimo: recolorir as roupas e construir uma casa com paredes, uma porta e uma tocha. Para os alunos mais rápidos, peça que adicionem uma especialidade, como uma profissão, ao Artesão na skin e um detalhe extra ao abrigo.`]))}
      <h2>Encerramento da aula</h2>
      <p>No “desfile dos que voltaram à vida”, cada aluno compartilha a tela para mostrar seu artesão e o abrigo na ilha. Um colega oferece feedback, dizendo: “Eu gostei de...”. No final, destaque que o mundo começou a ganhar vida novamente graças ao esforço dos alunos. Depois, dê orientações breves sobre a lição de casa. Explique em voz alta enquanto todos ainda estiverem conectados e só então encerre a aula.</p>
      <h3>Leia as notas para o tutor em cada cartão da aula.</h3>`, 'tn-first') +
    `<h1>A primeira chama</h1>
     <blockquote><p>O mundo ficou escuro. A Grande Falha roubou as cores e os rostos de todo mundo, transformando todos em formas cinzentas iguais. Mas, enquanto pelo menos uma faísca estiver acesa, o mundo poderá ser recriado. Hoje, você será um Artesão. Sua primeira missão? Refazer a si mesmo.</p></blockquote>
     <h2>Confira seu equipamento</h2>` +
    ul([`Confira se sua câmera e seu microfone estão funcionando.`, `Confira se você consegue compartilhar sua tela.`]) +
    `<h2>Prepare seu espaço de trabalho</h2>` +
    ul([`Feche as guias que não estiver usando.`, `Deixe pronto o link do instalador enviado pelo seu tutor. Vamos instalar o jogo juntos.`, `Por enquanto, pense em como será seu Artesão ou sua Artesã: a cor principal, a personalidade e pelo menos um detalhe chamativo para completar o visual.`])
  },
  { title:`O mundo está chamando você`, html:
    banner(C('e3e62541-c6c6-49a6-b354-6aee1cc44cd4.png')) +
    `<h1>Você foi chamado</h1>
     <blockquote><p>Em algum lugar bem distante, um mundo inteiro ficou escuro e está pedindo ajuda. Ele chama por você. Hoje, você entrará nesse mundo e acenderá sua primeira chama. Seu companheiro fiel, o Spark, estará ao seu lado durante toda essa jornada.</p></blockquote>
     <h3>Veja o que você vai fazer hoje</h3>` +
    ul([`Refazer o rosto que a Grande Falha roubou de você`, `Com sua nova skin, seguir um caminho por uma masmorra até um mundo sobrevivente no limite do mapa`, `Encontrar uma ilha secreta, construir seu próprio abrigo lá e mostrá-lo ao time`]) +
    test(`O que você terá ao final da aula?`, [`Seu próprio rosto e seu próprio abrigo na ilha`, `Nada além de um jogo novo no seu computador`, `Nada, hoje vamos apenas assistir à história`]) +
    tnotes(`<p><strong>⏱ Duração da etapa:</strong> 2 minutos.</p><p><strong>Objetivo:</strong> criar um clima de aventura e mostrar brevemente o que os alunos vão conquistar.</p><p><strong>🗣 Diga à turma:</strong> <em>“Hoje, vocês se tornarão Artesãos. O mundo está esperando por vocês. Ele está quase todo tomado pela escuridão... mas, juntos, vamos trazê-lo de volta à vida! Ao final da aula, cada pessoa terá seu próprio rosto e seu próprio abrigo na ilha!”</em></p><p><strong>Etapas:</strong></p><p>1. Leia os três tópicos na tela e dê aos alunos 20 segundos para escolher uma resposta para a pergunta curta “O que você terá ao final da aula?”.</p><p>2. Confirme a resposta correta em voz alta e prossiga para as apresentações.</p><p><strong>Transição:</strong> “Primeiro, vamos nos conhecer. Depois, entraremos no mundo!”</p>`)
  },
  { title:`A Grande Falha gosta de quem desiste`, html:
    banner(C('d598a2bc-fd9d-42dc-9171-0673ead262a4.png')) +
    `<h1>O Acordo dos Artesãos</h1>
     <blockquote><p>A Grande Falha gosta quando as pessoas desistem. Uma skin mal acabada ou uma casinha torta fazem parte do plano maligno da Grande Falha, não são um fracasso seu. Pensando nisso, vamos aprender como os outros Artesãos se apoiam.</p></blockquote>
     <h3>Nosso acordo</h3>` +
    ul([`Se não funcionar, tente de outro jeito em vez de desistir.`, `Ajudem uns aos outros em vez de rir dos erros dos colegas. Lembrem-se: cada pessoa trabalha no seu próprio ritmo.`, `Escute quando outro Artesão ou Artesã estiver falando.`]) +
    tnotes(`<p><strong>⏱ Duração da etapa:</strong> 2 minutos.</p><p><strong>Objetivo:</strong> criar um ambiente de aprendizagem seguro. Descreva os erros como “truques da Grande Falha”, e não como fracassos.</p><p><strong>🗣 Diga à turma:</strong> <em>“Ninguém se torna mestre da Forja de um dia para o outro. Um erro só quer dizer que a Grande Falha está tentando nos atrapalhar. Se você perceber que algo está errado, corrija. É assim que os Artesãos trabalham!”</em></p><p><strong>Etapas:</strong></p><p>1. Apresente de 2 a 3 regras de convivência.</p><p>2. Peça a todos que digitem um sinal de mais no chat para mostrar que concordam.</p><p><strong>Próximo:</strong> “Certo, parece que chegamos a um acordo! Agora vamos conferir a parte técnica e começar!”</p>`)
  },
  { title:`Antes de começar`, html:
    banner(C('e39cfe9e-1b0d-4037-b159-fce82f7a3fbb.png')) +
    `<h1>Confira antes de entrar</h1>
     <blockquote><p>Antes de entrar no mundo, vamos fazer uma rápida checagem dos equipamentos para que nada distraia você pelo caminho.</p></blockquote>
     <h3>Checagem de um minuto</h3>` +
    ol([`Diga “olá” no microfone. Conseguimos ouvir você?`, `Você consegue compartilhar sua tela?`, `Você consegue ligar a câmera? Mostre seu rosto de herói para que o mundo possa conhecer você!`]) +
    spoiler(`Algo não está funcionando`, ol([`Escreva no chat o que não está funcionando.`, `Enquanto ajudamos você, pense na skin do seu personagem Artesão!`])) +
    tnotes(`<p><strong>⏱ Duração da etapa:</strong> 2 minutos.</p><p><strong>Objetivo:</strong> resolver qualquer problema técnico antes da atividade prática, para que isso não reduza o tempo no Skin Studio.</p><p><strong>Etapas:</strong> verifique rapidamente se está tudo bem com o grupo e resolva problemas de som, compartilhamento de tela ou câmera.</p><p><strong>Estará tudo pronto quando:</strong> todos estiverem com o som, o compartilhamento de tela e as câmeras funcionando.</p><p><strong>Próximo:</strong> “A conexão está segura, vamos forjar a chave para o mundo!”</p>`)
  },
  { title:`A chave que estava esperando por você`, html:
    banner(C('f0c256d5-6df0-458f-bcb0-80f17a403c7b.png')) +
    `<h1>A chave para o mundo</h1>
     <blockquote><p>Você não pode entrar neste mundo sombrio sem uma chave. Por sorte, o Spark guardou esta chave para você: <strong>o launcher da Kodland para o Minecraft</strong>. Vamos configurá-lo juntos, e o caminho para Craftforge se abrirá!</p></blockquote>
     <h3>Passo 1: Baixar o programa</h3>
     <p>Abra o link e baixe o arquivo do launcher</p>` +
    spoiler(`macOS — arquivo .dmg`, `<p>Se o seu computador tiver um processador Intel:</p>${linkBtn('[Intel] macOS Kodland Craftforge')}<p>Se o seu computador tiver um processador da série M:</p>${linkBtn('[M] macOS Kodland Craftforge')}`) +
    spoiler(`Windows — arquivo .exe`, linkBtn('Windows Kodland Craftforge')) +
    `<h3>Passo 2: Instalar o programa</h3>
     <p><strong>Mac:</strong> Abra o arquivo baixado e arraste o ícone do launcher para a pasta Applications.</p>` +
    note(`Não abra o arquivo no macOS imediatamente. Siga esses passos:`, `<p>Abra o Terminal (Cmd+Space e digite “Terminal”) e cole esta linha:</p><blockquote><p>xattr -dr com.apple.quarantine "/Applications/Kodland Launcher.app"</p></blockquote><p>Pressione “Return”.<br>Nenhuma mensagem aparecerá, isso é normal. Significa que deu certo.<br>Abra o aplicativo pela pasta Applications com um clique duplo.</p>`) +
    `<p><strong>Windows:</strong> Execute o arquivo baixado e clique em “Next” (Próximo).</p>` +
    note(`Se o seu computador com Windows não abrir o arquivo:`, `<p>Seu computador pode perguntar se você realmente quer abrir este arquivo. Isso não é um erro, é uma verificação de segurança normal. Você pode abrir e instalar o arquivo.</p>`) +
    `<h3>Passo 3: Fazer login</h3>` +
    ol([`Abra o programa, selecione o idioma Português e clique em <strong>“Entrar”</strong>.`, `Uma janela do navegador será aberta. Clique em “Entrar com o Kodland”.`]) +
    gallery(['5e653fe0-3ac8-4271-a40f-426b24928abf.png', '070afcfb-6f32-4994-83d3-cc58347dc118.png']) +
    `<h3>Passo 4: Esperar o download terminar</h3>` +
    ol([`O launcher vai baixar o jogo automaticamente. Confira se a barra de progresso verde começou a ser preenchida.`, `O primeiro download demora um pouco. Enquanto a barra é preenchida, vamos nos conhecer e formar nosso time.`]) +
    `<h3>Você está pronto quando</h3>` +
    ul([`O launcher está instalado e aberto`, `Você fez login usando o login da escola`, `A barra verde começou a se mover, o que significa que o jogo está sendo baixado`]) +
    spoiler(`Precisa de ajuda? Vamos resolver`, ol([`O arquivo não foi baixado — abra novamente o link do chat`, `Seu computador não permite a instalação — peça ajuda a um adulto ou ao seu tutor`, `Você não consegue fazer login — use seus dados de login da Kodland. Não é preciso criar uma nova conta`, `A barra pode avançar devagar na primeira instalação — isso é normal. Não se preocupe, o download está acontecendo como esperado!`])) +
    tnotes(`<p><strong>⏱ Tempo:</strong> 6 minutos.</p><p><strong>Objetivo:</strong> garantir que todos instalem e abram o launcher, façam login com as credenciais escolares e cliquem em <strong>iniciar</strong> o download do jogo.</p><p><strong>🗣 Diga para a turma:</strong> <em>“O mundo que está perdendo as cores precisa de uma chave, e essa chave é o nosso launcher. Baixem, instalem e façam login com a conta escolar. Depois, o jogo será baixado automaticamente enquanto nos conhecemos melhor!”</em></p><p><strong>Etapas:</strong></p><p>1. Envie novamente os links do launcher no chat.</p><p>2. Mostre as quatro etapas na sua tela (baixar o launcher → instalá-lo → fazer login → baixar o jogo).</p><p>3. Explique claramente que os alunos devem digitar a senha somente na janela de login da Kodland.</p><p>4. Verifique se todos conseguem ver a barra verde de progresso.</p><p><strong>Estará tudo pronto quando:</strong> todos tiverem o launcher aberto, estiverem com login feito e conseguirem ver o download em andamento.</p><p><strong>Problemas comuns:</strong> 1. Se o login não funcionar, verifique se o aluno está usando as credenciais escolares da Kodland. Não é preciso criar uma conta de novo.</p><p>2. Se o download não terminar até o fim deste cartão, tudo bem, ele continuará em segundo plano. Você poderá voltar aos alunos que estiverem mais atrasados durante o cartão “Caminho pela masmorra”.</p><p><strong>Transição:</strong> “A chave está sendo forjada e o jogo está sendo baixado. Enquanto isso, vamos reunir nosso time!”</p>`)
  },
  { title:`Reúna seu time`, html:
    banner(C('e3e62541-c6c6-49a6-b354-6aee1cc44cd4.png')) +
    `<h1>Que tipo de Artesão você é?</h1>
     <blockquote><p>Cada Artesão tem seu próprio estilo. Conte qual combina mais com você. Depois, vamos usá-lo para formar um time pronto para salvar este mundo que está perdendo as cores!</p></blockquote>
     <h3>Apresente-se</h3>` +
    ol([`Quando chegar sua vez, abra o microfone.`, `Conte qual é seu apelido de Artesão.`, `Conte que tipo de Artesão você é e o que gosta de fazer no Minecraft.`, `Feche o microfone e escute os colegas.`]) +
    choice(`Que tipo de Artesão você é?`, [[`Construtor`, `Gosto de construir casas, torres e ruas inteiras.`], [`Explorador`, `Gosto de viajar pelo mundo e descobrir coisas novas.`], [`Decorador`, `Gosto de decorar com cores, enfeites e blocos exóticos.`], [`Minha própria ideia`, `Esses três tipos não combinam com você? Então conte qual é sua opção quando chegar sua vez!`]]) +
    tnotes(`<p><strong>⏱ Duração da etapa:</strong> 3 minutos.</p><p><strong>Objetivo:</strong> dar a cada aluno um momento curto e seguro para se apresentar e relacionar seu estilo de Artesão à sua futura skin e construção. Enquanto você realiza esta atividade, o jogo continua sendo baixado em segundo plano.</p><p><strong>🗣 Diga à turma:</strong> <em>“O mundo sem cor precisa de diferentes tipos de Artesãos. Você é Construtor, Explorador ou Decorador? Saber isso vai facilitar muito a criação da sua skin no jogo!”</em></p><p><strong>Etapas:</strong> 1. Dê o exemplo respondendo primeiro. O modelo da resposta é: “apelido + que tipo de Artesão eu sou + o que gosto de fazer no Minecraft”.</p><p>2. Depois, convide os alunos a falar um de cada vez. Destaque os interesses em comum.</p><p><strong>Estará tudo pronto quando:</strong> todos tiverem compartilhado algo, por voz ou pelo chat.</p>`)
  },
  { title:`Crie sua skin`, html:
    banner(C('5d9beb36-ad2a-4660-b818-fd69cee7a2db.png')) +
    `<h1>Abrindo o Estúdio de Skins</h1>
     <blockquote><p>Você pode reconhecer um Artesão por duas coisas: sua aparência e onde mora. Vamos começar pela aparência do seu Artesão. Você pode criá-la no Estúdio de Skin do launcher.</p></blockquote>
     <h3>Abra o Estúdio de Skins</h3>` +
    ol([`No launcher, abra a aba <strong>Criar</strong> e escolha a opção <strong>Skins</strong>.`]) +
    gallery(['1fceb4ae-a02c-4048-a1b4-7f26487ceb3a.png', '58939fc6-c41b-49ad-b4ee-4be125d05cad.png']) +
    ul([`No canto superior direito, clique no botão verde <strong>Criar uma skin</strong>.`]) +
    `<img class="center-img half" src="${M('fafd109c-6567-47a8-a293-73cf201aef22.png')}" alt="Botão do Skin Studio">` +
    ul([`O <strong>Estúdio de Skins</strong> será aberto. É aqui que você pode desenhar a si mesmo!`]) +
    `<img class="center-img half" src="${M('6cc91dca-9c1f-40ec-ad42-9dd1ca113158.png')}" alt="Editor do Skin Studio">` +
    note(`O que tem aqui`, `<p>Um lápis, uma borracha, a ferramenta de preenchimento, o conta-gotas, a paleta de cores e o mapa <strong>3D</strong> / <strong>2D</strong>.</p>`) +
    tnotes(`<p><strong>⏱ Duração da etapa:</strong> 3 minutos.</p><p><strong>Objetivo:</strong> fazer com que todos abram o Estúdio de Skins e estejam prontos para desenhar.</p><p><strong>🗣 Diga à turma:</strong> <em>“Vocês podem desenhar sua skin direto no launcher: selecionem Criar → Skins → e depois cliquem no botão verde ‘Criar uma skin’.”</em></p><p><strong>Passos:</strong> compartilhe sua tela e mostre o caminho: Criar → Skins → Criar uma skin → Estúdio de Skins.</p><p><strong>Problemas comuns:</strong></p><p>1. Os alunos devem entrar com suas contas Kodland, sem criar contas novas.</p><p>2. Se não conseguirem entrar, ajude-os a tentar novamente.</p><p><strong>Transição:</strong> “Agora vamos recriar nossos rostos, desenhem qualquer tipo de Artesão que quiserem!”</p>`)
  },
  { title:`Chega de cinza para você`, html:
    banner(C('a452569f-1736-4d58-8912-48420f2e7fc9.png')) +
    `<h1>Crie sua skin</h1>
     <blockquote><p>A Grande Falha deixou você cinza. Volte a ter cor desenhando o Artesão ou a Artesã que quiser: escolha a cor, as roupas, o rosto e todos os outros detalhes que imaginar! O Pequeno Spark gira ao seu lado: “Use minha luz e desenhe sem medo!”</p></blockquote>` +
    media(M('48889089-c16b-46d5-a720-8e2d6dc6fcd0.png'), `<h3>Desenhe seu Artesão</h3>` + ol([`Escolha uma cor na paleta (ou clique em <strong>+</strong> para adicionar outra cor)`, `Desenhe com o <strong>pincel</strong>. Errou? Use a <strong>borracha</strong> ou a função de desfazer`, `Gire seu personagem em <strong>3D</strong> ou ative o <strong>mapa 2D</strong> para colorir o personagem inteiro de uma vez`, `Crie como quiser: escolha o penteado, as roupas, o rosto e todos os outros detalhes!`])) +
    `<h3>Confira seu trabalho</h3>` +
    ul([`Sua skin deixou de ser cinza?`, `Você consegue ver sua ideia nessa nova skin?`]) +
    spoiler(`Veja algumas ideias se não souber o que desenhar`, ul([`Um personagem na sua cor favorita, com uma capa brilhante`, `Um Artesão ferreiro com avental e faixa na cabeça`, `Um explorador com capuz e mochila`])) +
    tnotes(`<p><strong>⏱ Duração da etapa:</strong> 7 minutos.</p><p><strong>Objetivo:</strong> fazer com que cada aluno desenhe livremente seu próprio Artesão. Os únicos objetivos concretos são que o personagem deixe de ser cinza e que a ideia fique clara; não peça perfeição aos alunos.</p><p><strong>🗣 Diga para a turma:</strong> <em>“Desenhe quem você quiser, este é o seu Artesão. Use o Pincel, a Paleta de Cores e a Borracha. Você pode girar o personagem no modo 3D ou usar o mapa 2D para colorir áreas inteiras. O importante é que o Artesão fique do jeito que você quiser!”</em></p><p><strong>Etapas:</strong> 1. Mostre o pincel, a paleta e a alternância entre o mapa 3D e o 2D.</p><p>2. Dê liberdade criativa aos alunos e ajude quem precisar de uma dica.</p><p>3. Quando faltarem 1 ou 2 minutos para o fim da etapa, peça aos alunos que finalizem o trabalho.</p><p><strong>Estará tudo pronto quando:</strong> a skin não for mais a cinza padrão e a skin de cada aluno for diferente.</p><p><strong>Diferenciação:</strong> se alguns alunos precisarem de ajuda, sugira uma ideia do bloco de spoiler ou peça que “mudem a cor das roupas para a sua cor favorita”. Os alunos que terminarem mais rápido podem adicionar detalhes, uma estampa ou um rosto.</p><p><strong>Problemas comuns:</strong> 1. Se os alunos continuarem redesenhando, lembre-os: “O objetivo é criar um personagem que tenha a sua essência, não um personagem perfeito.”</p><p>2. Se eles colorirem a área errada, compartilhe na tela o mapa 2D e mostre qual parte corresponde a cada área.</p><p>3. Os detalhes dos personagens não podem incluir informações pessoais.</p><p><strong>Transição:</strong> “Certo, estamos prontos. Agora vamos vestir nossas novas skins!”</p>`)
  },
  { title:`O mundo vai reconhecer você`, html:
    banner(C('ebf26035-3f2a-4858-ba30-54c8b41fe49c.png')) +
    `<h1>Use sua skin</h1>
     <blockquote><p>Sua skin está pronta, mas você ainda aparece igual no mundo. Vamos vesti-la para que o mundo reconheça você de novo.</p></blockquote>
     <h3>Recupere sua skin</h3>` +
    ol([`No Estúdio de Skins, clique no botão verde <strong>Vestir</strong>.`, `Você verá a mensagem “Pronto! Esta skin já está no seu personagem”. Isso significa que essa skin agora é sua.`, `Olhe o personagem Artesão no programa. Agora ele deve estar usando a sua skin.`]) +
    gallery(['19c8233c-190d-4757-a221-61c0712239ca.png', '30b5b068-0164-4ed0-9345-08f3e86231f1.png']) +
    note(`Importante`, `<p>Coloque sua skin <strong>antes</strong> de entrar no mundo. Assim, você começará o caminho com o visual que criou. Se entrar sem clicar em <strong>Vestir</strong>, você aparecerá no mundo como um Steve cinza.</p>`) +
    spoiler(`Algo deu errado: ainda estou cinza`, ol([`Você clicou no botão verde <strong>Vestir</strong>? Você deve ver a mensagem “Pronto!”.`, `Você já entrou no mundo? Saia e entre de novo. Sua skin é atualizada quando você entra.`])) +
    test(`O que você precisa fazer para usar a skin que criou no mundo?`, [`Clicar no botão verde “Vestir” antes de entrar no mundo`, `Apenas desenhar sua skin e fechar o Estúdio de Skins`, `Nada, sua skin vai mudar automaticamente`]) +
    tnotes(`<p><strong>⏱ Duração da etapa:</strong> 4 minutos.</p><p><strong>Objetivo:</strong> fazer com que todos cliquem em “Vestir” <strong>antes</strong> de entrar no mundo, para que o grupo comece o caminho usando as próprias skins.</p><p><strong>🗣 Diga à turma:</strong> <em>“Gostaram das suas skins? Cliquem no botão verde ‘Vestir’. Quando aparecer ‘Pronto!’, seu rosto estará equipado! Vamos colocá-lo agora para entrar no mundo com a nossa cara!”</em></p><p><strong>Etapas:</strong> 1. Mostre o botão “Vestir”.</p><p>2. Verifique se o aviso “Pronto!” aparece para todos e se os personagens no launcher dos alunos mudaram. Esta é uma etapa importante, então não a pule.</p><p>3. Finalize a etapa com o teste curto para reforçar a regra: “Clique em ‘Vestir’ primeiro e depois entre no mundo.”</p><p><strong>Estará tudo pronto quando:</strong> todos virem “Pronto!” e o launcher mostrar seu próprio personagem Artesão em vez do Steve cinza.</p><p><strong>Problemas comuns:</strong> um aluno criou sua skin e está admirando o resultado, mas não clicou em “Vestir”, esse é o problema mais comum. Verifique com cada aluno. Quem já entrou no mundo deve sair e entrar novamente.</p><p><strong>Transição:</strong> “Nosso novo visual está pronto, agora vamos entrar no mundo!”</p>`)
  },
  { title:`No limite do mundo`, html:
    banner(C('94f930d3-530e-401f-8fbb-d47d09c6294e.png')) +
    `<h1>Um caminho pela masmorra</h1>
     <blockquote><p>Seu novo visual está pronto, agora é hora de entrar no mundo! Você abre os olhos bem no limite do mundo: uma floresta nevada e o silêncio no ar gelado. Bem à sua frente, há uma entrada escura para uma masmorra. Não existe outro caminho: o mundo vivo fica do outro lado. O Spark voa na frente. “Não tenha medo, vou iluminar o caminho!”</p></blockquote>
     <h3>Siga o caminho até o fim</h3>` +
    ol([`Na aba “Jogar”, digite o código da aula que seu tutor passar e abra o mundo. Você vai se encontrar em uma floresta nevada.<img class="center-img" src="${M('6a21c0fc-732b-4190-9d91-d1f824fd84e3.png')}" alt="">`, `Olhe para você: já está usando a skin que criou!`, `Entre na masmorra e atravesse-a até o fim.<img class="center-img" src="${C('59db903b-558c-40ef-b4e1-a70613787aa1.png')}" alt="">`, `Lá dentro, você encontrará as <strong>Ruínas do Caos</strong>. Essa é a obra da Grande Falha, é um lembrete sombrio do que acontece com um mundo sem Artesãos.`, `Depois das ruínas, você encontrará a <strong>Ponte dos Engenheiros</strong>. Os sobreviventes a construíram. Atravesse a ponte.`, `Da ponte, você verá uma <strong>vila</strong>. Depois dela, bem no fim do mundo, há uma <strong>ilha secreta</strong>. Chegue até ela. Essa ilha não pertence a ninguém, o que significa que agora ela é sua.`]) +
    `<h3>O que você percebeu?</h3>
     <p>Fale ou escreva: como a ilha é diferente da aldeia? Isso mesmo: as pessoas moram na vila, mas ainda não há nada na ilha, nem casas nem fogo. Mas agora ela é sua, então você pode transformá-la no que quiser!</p>` +
    essay(`Como a ilha é diferente da vila?`, `Por exemplo: a vila tem casas e pessoas, mas a ilha está vazia`) +
    spoiler(`Me perdi no caminho!`, ol([`Pare um momento e escreva no chat o que você vê por perto: gelo, ruínas ou uma ponte.`, `Seu tutor vai dizer para onde você deve ir e mostrar o caminho na tela. O Spark vai iluminar o trajeto.`])) +
    tnotes(`<h3>Código do mundo para enviar aos alunos:</h3><blockquote><p>Welcome to CraftForge</p></blockquote><p><strong>⏱ Tempo:</strong> 8 minutos.</p><p><strong>Objetivo:</strong> Guiar todos pelo percurso: Floresta Nevada → Masmorra → Ruínas do Caos → Ponte dos Engenheiros → Vila → Ilha Secreta. É importante que cada aluno sinta: “Concluí a jornada” e entenda que a ilha é o seu lugar.</p><p><strong>🗣 Diga para a turma:</strong> <em>“As skins estão prontas, agora vamos entrar no mundo. Vocês estão no fim do mundo, em uma floresta nevada, com uma masmorra à frente. Sigam-me pela tela. Depois da masmorra ficam as Ruínas do Caos e, em seguida, a ponte dos Sobreviventes. Bem no fim do mundo, há uma ilha. Ela não pertence a ninguém e, por isso, será o abrigo de vocês.”</em></p><p><strong>Etapas:</strong> 1. Compartilhe o código da aula.</p><p>2. Verifique se o personagem de cada aluno está usando sua própria skin.</p><p>3. Compartilhe sua tela e siga o caminho, descrevendo as mudanças de direção.</p><p>4. Destaque dois pontos de controle: nas Ruínas do Caos e na ponte. Diga: “Se você chegou, envie um + no chat.” Depois, espere 20–30 segundos por quem ainda estiver chegando.</p><p>5. Mostre o caminho da vila até a ilha. Dê um minuto para os alunos explorarem a ilha.</p><p>6. Colete 2–3 respostas para “Como a ilha é diferente da vila?”. Os alunos que não quiserem falar podem escrever a resposta no campo deste cartão.</p><p><strong>Está tudo pronto quando:</strong> Todos tiverem marcado os dois pontos de controle no chat, estiverem em sua própria ilha e entenderem que vão construir ali.</p><p><strong>Problemas comuns:</strong> 1. A masmorra parece assustadora — lembre aos alunos que este é o modo Criativo, então ninguém pode se machucar.</p><p>2. Um aluno se perdeu — peça que descreva o que há ao redor (gelo / ruínas / ponte) e mostre esse lugar na sua tela.</p><p>3. Alguém chega primeiro — peça que explore a ilha, mas ainda não construa nada.</p><p>4. Um aluno entra como Steve cinza — peça que feche o jogo → volte ao Estúdio de Skins → clique em “Vestir” → entre novamente.</p><p>5. Se o jogo de alguém ainda estiver carregando, guie essa pessoa pelo caminho separadamente enquanto os demais exploram a ilha.</p><p><strong>Transição:</strong> “Encontramos a ilha, agora é hora de uma pausa rápida. Depois, vamos transformá-la em nosso lar!”</p>`)
  },
  { title:`Três enigmas para uma pausa rápida`, html:
    banner(C('9eecc25b-0273-414e-bced-7f1c71320741.png')) +
    `<h1>Pausa de um construtor</h1>
     <blockquote><p>Você seguiu a trilha e encontrou a ilha. Agora, vamos fazer uma pausa rápida antes de começar a construir. Você ainda não precisa construir nada. Adivinhe os jogos pelos emojis e envie sua resposta no chat quando seu tutor pedir!</p></blockquote>` +
    media(C('65d4af1a-bc18-4ee1-91ba-6903d3a04432.png'), `<h3>Hora do jogo: adivinhe o jogo pelos emojis</h3>` + ol([`Seu tutor vai mostrar três emojis que escondem os nomes de jogos conhecidos.`, `Digite seu palpite no chat, mas ainda não envie.`, `Quando seu tutor disser “Enviar!”, todos devem postar as respostas ao mesmo tempo!`]), 'narrow') +
    tnotes(`<p><strong>⏱ Duração da etapa:</strong> 4 minutos.</p><p><strong>Objetivo:</strong> fazer uma pausa curta antes de construir o abrigo.</p><p><strong>Etapas:</strong> envie os enigmas com emojis no chat, um de cada vez:</p><p>“… + … + …” — Minecraft;</p><p>“… + … + …” — Mario Kart;</p><p>“… + … + …” — Pac-Man;</p><p>“… + … + …” — Among Us.</p><p>Dê aos alunos 10–15 segundos para cada conjunto de emojis. Depois, diga “Enviar!” e revele a resposta.</p><p><strong>Lembre-se:</strong> esta é uma pausa, não um exercício. Não é necessário pedir que os alunos liguem as câmeras, respondam um por um ou testem seus conhecimentos de qualquer forma. Eles podem participar pelo chat ou pelas reações do Classroom.</p><p><strong>Transição:</strong> “Descansaram? Vamos fazer da ilha a nossa casa.”</p>`)
  },
  { title:`Se não tem ninguém morando, pode ser sua casa`, html:
    banner(C('25146cd8-d3f2-49f1-a710-d8d26ba344b1.png')) +
    `<h1>Faça da ilha a sua casa</h1>
     <blockquote><p>A ilha está vazia e cinzenta, não há casa nem fogueira. Para ajudar o mundo a partir daqui, você vai precisar de um abrigo. Construa onde quiser: perto da água, no alto de uma colina ou entre as árvores. Lembre-se: seu abrigo deve representar o tipo de Construtor que vive nele. O Spark está voando sobre a ilha: “Escolha um lugar e vamos começar!”</p></blockquote>` +
    media(C('a88a74b8-f3a3-497b-a263-6fa3f1f1acdd.png'), `<h3>Construa seu abrigo</h3>` + ol([`Caminhe pela ilha e escolha um lugar de que você goste. A ilha inteira é sua!`, `Construa <strong>paredes</strong>`, `Adicione um <strong>telhado</strong> em cima`, `Deixe uma <strong>entrada</strong>: uma porta ou abertura`, `Adicione um <strong>detalhe</strong>: um bloco colorido, uma tocha, uma bandeira ou uma janela`, `Coloque uma <strong>placa</strong> com seu apelido. Deixe a ilha saber quem é o dono dela!`])) +
    `<h3>Você estará pronto quando</h3>` +
    ul([`Você tiver colocado um abrigo na ilha, em um lugar que escolheu.`, `O abrigo tiver 4 elementos: paredes, teto, entrada e um detalhe que represente seu jeito de construir!`, `O abrigo tiver uma placa com seu apelido do lado dele!`]) +
    spoiler(`Precisa de ideias para construir?`, ul([`Uma casinha perto da água, com uma janela voltada para o mar`, `A barraca de um explorador no alto de uma colina, com uma lanterna na entrada`, `A oficina de um decorador feita com blocos coloridos`])) +
    tnotes(`<p><strong>⏱ Duração da etapa:</strong> 10 minutos</p><p><strong>Objetivo:</strong> fazer com que cada aluno marque sua ilha como sua, construindo um abrigo com 4 elementos e uma placa. Os alunos devem escolher o local por conta própria.</p><p><strong>🗣 Diga à turma:</strong> <em>“Vocês escolhem o lugar, a ilha é de vocês. Cada parede faz a Grande Falha recuar um passo. Um abrigo não precisa ser grande. Ele precisa ser seu: basta ter paredes, teto, entrada e um detalhe reconhecível!”</em></p><p><strong>Etapas:</strong> 1. Apresente os 4 elementos de um abrigo e a placa;</p><p>2. Dê 30 segundos para os alunos escolherem um local (“Quando escolherem, coloquem a primeira parede”);</p><p>3. Ajude quem estiver com dificuldade sugerindo que comece com paredes quadradas;</p><p>4. Dois minutos antes do fim, lembre os alunos de adicionar uma placa e um detalhe.</p><p><strong>Estará tudo pronto quando:</strong> todos tiverem um abrigo com 4 elementos e uma placa em sua ilha</p><p><strong>Diferenciação:</strong> para alunos com dificuldade: sugira que construam uma caixa simples com paredes, uma porta e uma tocha; alunos mais rápidos podem adicionar um caminho até a água, um segundo andar ou uma oficina que combine com seu estilo de Criador.</p><p><strong>Problemas comuns:</strong> 1. O aluno demora muito para escolher um lugar — “Qualquer lugar serve. A ilha toda é sua, então coloque a primeira parede”;</p><p>2. O aluno começa a construir na vila — leve-o de volta para a ilha dele, pois esse é o lugar dele;</p><p>3. Se houver dúvida, os alunos devem colocar na placa seus apelidos usados no jogo.</p><p><strong>Transição:</strong> “A ilha ganhou vida, agora vamos mostrar o que trouxemos de volta do cinza!”</p>`)
  },
  { title:`Quantas luzes se acenderam`, html:
    banner(C('5b25f081-c7c5-48b1-9882-4244236f18ff.png')) +
    `<h1>Desfile dos que Voltaram à Vida</h1>
     <blockquote><p>Há uma hora, a ilha estava vazia e você era cinza. Agora você tem um rosto e seu próprio abrigo. Vamos mostrar uns aos outros o que trouxemos de volta da Grande Falha. O Spark está correndo em círculos:</p><p>“Uau, vejam quantas luzes se acenderam!”</p></blockquote>
     <h3>Quando Chegar Sua Vez de Compartilhar</h3>` +
    ol([`Compartilhe sua tela e fique perto do seu abrigo usando sua skin.`, `Explique em uma frase qual é o estilo do seu Artesão e que tipo de abrigo você construiu.`, `Faça uma captura de tela: Windows — pressione <strong>Win + Print Screen</strong> (o arquivo aparecerá em Imagens → Capturas de Tela); Mac — pressione <strong>Cmd + Shift + 4</strong> e selecione seu crafter com o mouse (o arquivo aparecerá na área de trabalho).`, `Anexe a captura de tela no campo abaixo para registrar a sua primeira chama!`]) +
    `<blockquote><p><strong>Sou um Artesão...</strong></p><p><strong>Meu abrigo é...</strong></p></blockquote>` +
    essay(`Sou um Artesão... Meu abrigo é...`, `Sou um Artesão Construtor. Meu abrigo é uma casinha à beira da água, com vista para o mar.`) +
    fileAnswer() +
    spoiler(`Ops! Não encontro minha captura de tela`, ol([`Avise seu tutor. Ele mostrará onde as capturas de tela do jogo são salvas.`, `Não consegue anexar a captura de tela agora? Tudo bem, você pode fazer isso em casa. Seu abrigo não vai sair daí!`])) +
    `<h3>Enquanto outra pessoa compartilha</h3>` +
    media(C('13b9f804-e225-4cbe-9c0d-de93f0a00cdb.png'), ol([`Encontre um detalhe escolhido por quem criou o abrigo.`, `Diga ou escreva: “Gostei de...” e fale qual é esse detalhe.`])) +
    tnotes(`<p><strong>⏱ Duração da etapa:</strong> 5 minutos.</p><p><strong>Objetivo:</strong> fazer uma breve sessão de compartilhamento, para que os alunos mostrem um momento de orgulho e recebam feedback útil e específico.</p><p><strong>🗣 Diga à turma:</strong> <em>“Olhem quantas fogueiras estão brilhando! Cada um de vocês trouxe uma parte do mundo de volta. Vamos deixar que todos mostrem seus abrigos e encontrar algo de que gostamos em cada um!”</em></p><p><strong>Etapas:</strong> 1. Peça a todos que fiquem perto de seus abrigos e pressionem F2 para fazer uma captura de tela da aula.</p><p>2. Antes do compartilhamento, dê tempo para os alunos completarem o campo “Sou um Artesão... Meu abrigo é...”, para que seja mais fácil falar sobre ele.</p><p>3. Depois, cada aluno deve mostrar seu mundo compartilhando a tela por 20–30 segundos e dizendo a frase preparada.</p><p>4. Após cada compartilhamento, outro aluno deve dizer “Gostei de...” e mencionar um detalhe específico.</p><p>Enquanto um aluno compartilha, os outros anexam suas capturas de tela à atividade.</p><p><strong>Estará tudo pronto quando:</strong> todos tiverem anexado uma captura de tela de seu abrigo e completado o campo sobre seu Crafter.</p><p><strong>Problemas comuns:</strong> 1. Interrompa comparações de “melhor/pior” e elogie os alunos por deixarem o abrigo com a cara deles.</p><p>2. Se o tempo for curto, peça que alguns voluntários compartilhem e incentive os outros a usar o chat enquanto isso.</p><p>3. Se não encontrarem uma captura de tela, permita que os alunos a anexem em casa; compartilhar é mais importante do que o arquivo.</p><p><strong>Precisa de esclarecimento:</strong> o caminho exato até a pasta de capturas de tela do jogo no iniciador da Kodland. Adicione essa informação aqui para que o tutor possa mostrá-la imediatamente.</p><p><strong>Transição:</strong> “O mundo está respirando de novo, vamos encerrar a aventura de hoje!”</p>`)
  },
  { title:`O mundo volta a respirar`, html:
    banner(C('94f930d3-530e-401f-8fbb-d47d09c6294e.png')) +
    `<h1>Agora você é um Artesão</h1>
     <blockquote><p>Você tem seu próprio rosto e sua própria ilha com um abrigo. O mundo não está mais vazio, porque você faz parte dele. A Grande Falha recuou, e isso é só o começo.</p></blockquote>
     <h3>Agora você pode</h3>` +
    ul([`Criar seu próprio rosto no Estúdio de Skins`, `Vesti-la usando o botão “Vestir” antes de entrar no mundo`, `Escolher seu próprio lugar e construir nele um abrigo com uma placa`, `Mostrar quem você é e perceber as coisas boas no trabalho de outras pessoas`]) +
    `<h3>Pense sobre isso</h3>` +
    choice(`Qual foi a melhor parte da aventura de hoje?`, [[`Minha skin`, `Qual parte da sua skin você mais gosta?`], [`Meu abrigo`, `Do que você mais gosta no seu abrigo?`], [`O caminho pela masmorra`, `Qual foi o momento mais surpreendente do caminho: a masmorra, as Ruínas do Caos ou a ponte?`]]) +
    tnotes(`<p><strong>⏱ Duração da etapa:</strong> 2 minutos.</p><p><strong>Objetivo:</strong> retomar a jornada da aula e pedir que os alunos compartilhem um momento marcante.</p><p><strong>🗣 Diga à turma:</strong> <em>“Hoje, vocês recuperaram seus rostos e transformaram a ilha em seu lar. O mundo voltou a respirar graças a vocês. E há um mundo inteiro pela frente, esperando que um Artesão o restaure!”</em></p><p><strong>Etapas:</strong></p><p>1. Apresente o resumo “Agora você pode...” (30 segundos)</p><p>2. Depois, peça a resposta de 3 ou 4 alunos sobre o que mais chamou a atenção deles.</p><p>3. Em seguida, apresente a tarefa de casa.</p><p><strong>Transição:</strong> “Agora, vamos descobrir o que vocês vão fazer em casa!”</p>`)
  },
  { title:`Leve uma faísca para casa`, html:
    banner(C('ac19e14b-3950-40c7-aef0-6c95f72d183c.png')) +
    `<h1>Mais uma faísca</h1>
     <blockquote><p>Seu abrigo está construído, e sua skin está criada, mas um Artesão não consegue se transformar completamente em apenas um dia. Em casa, acrescente mais uma faísca ao seu novo rosto. Na próxima vez que entrar no mundo, ele vai parecer ainda mais com você. O Spark já preparou uma pequena chama para você:</p><p>“Pegue, vamos continuar criando juntos!”</p></blockquote>
     <h3>O que Fazer em Casa</h3>` +
    ol([`Abra o Estúdio de Skins do mesmo jeito que fez hoje: <strong>Criar</strong> → <strong>Skins</strong>`, `Adicione um novo detalhe ao seu Artesão`, `Clique no botão verde <strong>Vestir</strong> para atualizar seu personagem`, `Faça uma captura de tela do seu Artesão atualizado e anexe-a à tarefa`]) +
    note(`⏱ É rapidinho`, `<p>Isso deve levar de 10 a 15 minutos. Você não precisa criar uma nova skin do zero: apenas continue adicionando detalhes ao rosto que já fez!</p>`) +
    `<p>Você encontrará os passos detalhados e algumas ideias no próximo cartão. Você pode abri-lo em casa sempre que precisar.</p>` +
    tnotes(`<p><strong>⏱ Duração da etapa:</strong> 2 minutos.</p><p><strong>Objetivo:</strong> explicar a lição de casa em voz alta enquanto todos ainda estão conectados, para que os alunos entendam que devem adicionar um novo detalhe, e não criar uma nova aparência.</p><p><strong>🗣 Diga à turma:</strong> <em>“Em casa, adicione mais um toque ao seu Artesão: um novo detalhe, como um chapéu, uma cor diferente para os sapatos ou um emblema. Não crie tudo de novo, apenas continue personalizando. Não se esqueça de clicar no botão verde ‘Vestir’, ou seu rosto não será atualizado!”</em></p><p><strong>Passos:</strong> Compartilhe sua tela e mostre o caminho Criar → Skins. Lembre os alunos do botão Wear. Dê a eles de 10 a 15 minutos. Mostre onde anexar uma captura de tela da aparência no cartão da atividade e onde escrever o que adicionaram. Peça que cada aluno escreva no chat o que vai adicionar à aparência.</p><p><strong>Estará tudo pronto quando:</strong> cada aluno tiver falado ou escrito seu detalhe no chat. Assim, eles não ficarão olhando para uma tela em branco em casa.</p><p><strong>Problemas comuns:</strong> 1. “Não sei o que adicionar” — há algumas ideias no bloco de spoiler do cartão da tarefa. Você pode sugerir uma profissão para o Artesão: ferreiro, jardineiro ou explorador.</p><p>2. “Já desenhei tudo o que queria” — peça aos alunos que adicionem um detalhe que combine com a profissão escolhida.</p><p>3. Se os responsáveis precisarem fazer login, podem usar o mesmo acesso escolar da Kodland. Não é necessário criar outro cadastro.</p><p><strong>Transição:</strong> “Certo, agora já sabemos o que fazer em casa. Vocês podem encontrar o cartão com os passos detalhados na lição de casa!”</p>`)
  },
  { title:`Finalize sua aparência em casa`, html:
    banner(C('196595d3-94ac-4707-9519-78775d33a943.png')) +
    `<h1>Lição de casa</h1>
     <blockquote><p>Em casa, adicione mais um toque ao seu Artesão para que ele fique ainda mais parecido com você. Na próxima aula, você entrará na Floresta dos Vagalumes com esse personagem atualizado!</p></blockquote>
     <h3>Mais fácil</h3>` +
    ol([`Abra o Skin Studio: <strong>Criar</strong> → <strong>Skins</strong> → <strong>Criar uma skin</strong>.`, `Adicione um detalhe extra à sua aparência: um chapéu, sapatos de outra cor ou um emblema.`, `Clique em <strong>Vestir</strong> de novo.`]) +
    `<h3>Que tal um desafio?</h3>` +
    ol([`Dê uma “profissão” ao seu Artesão, como ferreiro, jardineiro ou explorador!`, `Mostre isso na skin: desenhe um avental, uma capa ou uma ferramenta no cinto!`, `Escreva uma frase sobre quem é seu Artesão!`]) +
    `<h3>Como enviar a tarefa</h3>` +
    ol([`Abra o Estúdio de Skins para ver seu personagem inteiro.`, `Faça uma captura de tela: Windows — pressione <strong>Win + Print Screen</strong> (o arquivo aparecerá em Imagens → Capturas de Tela); Mac — pressione <strong>Cmd + Shift + 4</strong> e selecione seu crafter com o mouse (o arquivo aparecerá na área de trabalho).`, `Envie a captura de tela no campo abaixo.` + fileAnswer(), `Conte o que você adicionou ao seu artesão.`]) +
    essay(`O que você adicionou ao seu artesão?`, `Por exemplo: adicionei um avental de ferreiro e um chapéu verde-limão, depois pressionei ‘Vestir’.`) +
    spoiler(`Não consegue fazer uma captura de tela?`, ol([`Peça ajuda a um adulto para tirar uma captura de tela.`, `Se ainda não conseguir, tire uma foto da tela com o celular e envie-a.`])) +
    spoiler(`Não consegue abrir o Estúdio de Skins em casa?`, ol([`Entre com a mesma conta da Kodland que você usa nas aulas.`, `Se não funcionar, peça ajuda aos seus responsáveis para entrar.`]))
  }
];

/* =========================================================
   GUIDED TOUR STEPS
   Translate title, text and btn. Keep target / accept / read / side / wide / next / last as they are.
   ========================================================= */
CONTENT.guide = [
  { title:'Boas-vindas à sala de aula', next:true,
    text:'No <b>Novo Modelo Educacional (EM)</b>, tudo o que você precisa para dar uma aula fica <b>dentro da própria aula</b>, no Classroom. Não há wiki nem documento separado: a orientação de cada aula acompanha os cartões da aula.<br><br>Vamos abri-los.' },
  { title:'Abra os materiais da aula', target:'.tb-group', accept:['openTasks','toggleDropdown'],
    text:'Os materiais da aula ficam em <b>Assignments</b>. Clique em <b>Assignments</b> — o botão fica azul quando o mouse passa por cima.' },
  { title:'Escolha o primeiro cartão', target:'#dd-0', accept:['pickActivity:0'],
    text:'Esta é a lista de <b>atividades</b> da aula, em ordem. Esta é a primeira aula do curso de Minecraft.<br><br>Clique na primeira.' },
  { title:'Duas visões do mesmo cartão', next:true, wide:true,
    text:'Antes de continuar, é importante entender <b>o que você vê</b> e <b>o que a Sofia vê</b>. Vocês dois estão no mesmo cartão, mas não na mesma tela:' +
      `<div class="views">
        <div class="view"><div class="vh">👩‍🏫 O que <b>você</b> vê</div>
          <div class="mock"><div class="m-tn">Notas para o tutor<small>só para você</small></div><div class="mk-c">Conteúdo do cartão</div></div></div>
        <div class="view"><div class="vh">👧 O que a <b>Sofia</b> vê</div>
          <div class="mock"><div class="mk-c">Conteúdo do cartão</div></div></div>
      </div>` +
      '<ul class="c-list"><li>A caixa com a <b>borda laranja tracejada</b> são as <b>notas para o tutor</b>. Elas estão escritas <b>dentro do cartão</b>, junto com o conteúdo.</li><li>Só o tutor as vê. A Sofia <b>nunca</b> vê as notas para o tutor — apenas o conteúdo do cartão. Não as leia em voz alta para ela.</li><li>Cada cartão tem as suas próprias notas, então elas são a primeira coisa a conferir antes e durante cada cartão.</li></ul>' },
  { title:'As primeiras notas para o tutor', target:'#taskScroll', side:true, read:{ scope:'#tn-first' },
    text:'As notas do <b>primeiro cartão</b> são as mais detalhadas da aula: a visão geral e a história, o objetivo e os resultados esperados, o seu <b>papel</b>, o <b>plano de tempo</b> de cada cartão, as <b>possíveis dificuldades</b> e como <b>encerrar</b> a aula.<br><br>Na primeira aula de um curso costuma haver também um <b>vídeo explicativo</b>: assista a ele quando se preparar.<br><br><b>Abra todas as seções</b> e <b>role até o fim das notas</b> para continuar.' },
  { title:'O que a Sofia vê', target:'#taskScroll', side:true, read:{},
    text:'Abaixo das notas está o cartão como a <b>Sofia</b> o verá: a história e como se preparar para a aula.<br><br>Role pelo <b>cartão inteiro</b>. O botão Próximo é liberado quando você chegar ao fim.' },
  { title:'Lead the group', target:'#leadToggle', accept:['toggleLead'],
    text:'Agora ative o <b>Lead the group</b>. Só você tem este botão — os alunos não.' +
      `<div class="lead-demo">
        <div><span class="ld-sw"></span><b>OFF</b> — você passa para outro cartão ou rola a página, e a Sofia continua onde estava. Ela pode estar olhando outra coisa.</div>
        <div><span class="ld-sw on"></span><b>ON</b> — cada cartão que você abre e cada rolagem que você faz, a Sofia vê ao mesmo tempo.</div>
      </div>` +
      'Clique no botão — ele fica azul quando está ativado.' },
  { title:'A Sofia está seguindo você', target:'.vt.student', next:true,
    text:'O <b>Lead the group</b> está ativado ✅ Olhe a imagem da Sofia: agora ela mostra <b>Seguindo o tutor</b>.<br><br>A partir de agora:<ul class="c-list"><li>A Sofia está com o <b>mesmo cartão</b> aberto que você e vê a mesma posição de rolagem — sem as notas para o tutor.</li><li>Ela pode clicar em <b>Work independently</b> para explorar por conta própria. Nesse caso, ela vê um banner indicando onde você está, com um botão <b>Return</b>.</li></ul>' },
  { title:'Próximo cartão', target:'#btnNext', accept:['nextTask'],
    text:'A seta para a direita leva você ao <b>próximo cartão</b>. Como o Lead the group está ativado, a Sofia vai junto com você. Clique nela.' },
  { title:'Notas em todos os cartões', target:'#taskScroll', side:true, read:{},
    text:'Este cartão dá as boas-vindas ao grupo e tem uma <b>pergunta</b> curta que a Sofia responde na própria cópia dela. Além do conteúdo para ela, ele traz as suas próprias <b>notas para o tutor</b> no final: elas são mais curtas que as primeiras.<br><br>Em geral, elas informam o <b>tempo</b> do cartão, o seu <b>objetivo</b>, <b>o que dizer</b> ao grupo, os <b>passos</b> e a <b>transição</b> para o próximo cartão.<br><br>Leia o cartão até o fim, incluindo as notas para o tutor.' },
  { title:'Continue', target:'#btnNext', accept:['nextTask'],
    text:'Clique em <b>Next task</b> para ir ao próximo cartão.' },
  { title:'Frases que você pode usar', side:true, target:'#taskScroll', read:{}, last:true, btn:'Concluir ✓',
    text:'Este cartão define o acordo do grupo. Veja as notas para o tutor dele: além do tempo e do objetivo, elas dão uma <b>frase para dizer ao grupo</b> e o <b>próximo passo</b>, para que a aula flua de um cartão para o outro.<br><br>Role até o fim do cartão e leia as notas para o tutor.<br><br>É tudo o que você precisa saber sobre o formato da aula do EM!' }
];

/* =========================================================
   FINISH SCREEN (the completion code is added by the page)
   ========================================================= */
CONTENT.finish = {
  kicker: 'Guia concluído',
  title: '🎓 Esta é uma aula do EM no Classroom',
  intro: 'Você viu como são as aulas do novo modelo educacional no Classroom e como liderar o grupo:',
  steps: [
    'A aula é uma série de <b>cartões</b> em <b>Assignments</b>: toda a orientação fica dentro da própria aula.',
    'As <b>notas para o tutor</b> ficam dentro de cada cartão e só <b>você</b> as vê. Os alunos nunca as veem.',
    'O <b>primeiro cartão</b> tem as notas mais detalhadas: a história, o objetivo, o seu papel, o plano de tempo, as possíveis dificuldades e o encerramento — e, na primeira aula de um curso, em geral um vídeo explicativo.',
    'Cada cartão seguinte tem notas mais curtas: tempo, objetivo, o que dizer, os passos e a transição.',
    'O <b>Lead the group</b> faz os alunos acompanharem o cartão que você abre e o ponto até onde você rola.'
  ],
  tip: '<b>Dica:</b> leia as notas para o tutor da aula inteira <b>antes</b> de dá-la.',
  codeLabel: '🔑 Seu código de conclusão',
  codeHint: 'Copie-o no treinamento para confirmar que você concluiu o guia.',
  back: '← Voltar ao treinamento',
  closeTab: 'Feche esta aba para voltar ao treinamento e digite lá o seu código de conclusão.'
};
