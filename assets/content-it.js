window.CONTENT = { lang: 'it' };
/* ============================================================
   New Educational Model — Tutor training · ENGLISH content
   ------------------------------------------------------------
   HOW TO TRANSLATE THIS FILE
   - Copy it as content-xx.js (es, pt, ...) and change lang below.
   - Translate ONLY the text inside quotes '…' and backticks `…`.
   - Keep unchanged: HTML tags (<b>, <span class="…">…), ${…} code,
     {placeholders} in curly braces, keys/ids before the colon,
     emoji, file names (images/…), and the "a:" / "check:" values.
   - Typographic apostrophes (’) are safe inside '…'. A plain
     apostrophe (') inside '…' would break the file: use ’ instead.
   ============================================================ */

/* ---------------- Interface strings ---------------- */
CONTENT.ui = {
  pageTitle: 'Formazione sul nuovo modello educativo',
  footer: 'kodland · Nuovo modello educativo · Formazione per tutor',
  devLink: '🛠 Sviluppatore',

  // Navigation
  logoSub: 'Nuovo modello educativo',
  navCore: 'Core {done}/{total}',
  navHome: '← Home',
  navModules: '← Tutti i moduli',
  navBackModule: '← Torna al modulo',

  // Home
  heroKicker: '🚀 Formazione per tutor',
  heroTitle: 'Il <span class="hl">nuovo</span> modello educativo',
  heroLead: 'Kodland sta cambiando il modo di insegnare in alcuni corsi. Questa formazione ti prepara a insegnare con il nuovo modello: {n} moduli da seguire in ordine. Ogni modulo termina con una breve verifica che sblocca il successivo.',
  fact1: '<b>Segui il tuo ritmo.</b> I tuoi progressi vengono salvati in questo browser.',
  fact2: '<b>Con attività pratiche.</b> Tre simulazioni — Backoffice, Classroom e Kodland Sparks — da ripetere tutte le volte che vuoi.',
  progAllDone: 'Moduli completati 🎉',
  progLabel: 'moduli completati',
  moduleN: 'Modulo {n}',
  badgeDone: '✓ Completato · {score}%',
  badgeLocked: '🔒 Completa il modulo {n}',
  badgeStart: 'Inizia →',
  homeDoneTitle: 'Moduli completati!',
  homeDoneText: 'Un ultimo passaggio: il test DST nella pagina della formazione su LMS.',
  homeDoneBtn: 'Scopri come proseguire →',

  // Module page and its check
  eyebrow: 'Modulo {n} di {total}',
  ctaQuizTitle: 'Verifica del modulo',
  ctaQuizText: '{n} brevi domande. Per superare la verifica serve almeno il 70%.',
  ctaRiskTitle: 'Verifica del modulo: individua la strategia rischiosa',
  ctaRiskText: '{n} situazioni reali. <b style="color:#E5484D">A differenza delle altre verifiche, qui devi scegliere ogni volta la strategia che DANNEGGEREBBE la lezione</b> — non quella corretta. Per superare la verifica serve almeno il 70%.',
  lockOne: '🔒 Completa {what} e inserisci il relativo codice qui sopra per sbloccare la verifica.',
  lockMany: '🔒 Completa {what} e inserisci i relativi codici qui sopra per sbloccare la verifica.',
  listAnd: ' e ',
  startCheck: 'Inizia la verifica →',
  retake: '🔁 Ripeti la verifica',

  // Simulations and completion codes
  launchSteps: ['Apri in una nuova scheda.', 'Segui tutti i passaggi fino alla schermata di completamento con il tuo codice.', 'Torna a questa scheda e inserisci il codice qui sotto.'],
  codeOk: '✅ <b>{sim}: completamento confermato.</b> Codice accettato.',
  codeLabel: '<b>🔑 Codice di completamento</b> — lo trovi nella schermata finale di {sim}.',
  codePlaceholder: 'es. XX-0000-00',
  codeUnlock: 'Sblocca',
  codeWrong: 'Il codice non è corretto. Controllalo nella schermata finale della simulazione.',

  // Small interactive pieces
  tapFlip: 'Tocca per girare',
  mythReality: 'Realtà ✓',
  loopAgain: '<b>E si ricomincia!</b> La riflessione diventa il prossimo obiettivo — approfondendo a ogni giro.',
  ages: 'Età: {age} anni',
  aiBar: 'Quanto interviene l’IA nel progetto',
  stageWas: 'Prima: <s>{was}</s> → ora:',
  stageOf: '{i} di {n}',
  stageWatch: 'Guarda «{t}» in una lezione reale',
  stageFirst: 'Torna alla prima',
  next: 'Avanti →',
  sortWrong: '✗ Non proprio.',

  // Follow Mode demo (Module 2)
  fmNotes: '📒 Note per il tutor — le vedi solo tu',
  fmFollowing: '🔗 Segue il tutor',
  fmStart: '👆 Sofia è nella stessa lezione, ma Lead the group è disattivato. Attiva l’interruttore.',
  fmOn: '✅ <b>Lead the group è ATTIVO.</b> Sofia è passata alla tua scheda — ma attenzione: vede la scheda <b>senza</b> le tue note per il tutor. Ora prova <b>Scheda successiva</b>.',
  fmOff: '⏸️ <b>Lead the group è DISATTIVATO.</b> Sofia resta dove si trova, qualunque scheda tu apra.',
  fmMoved: '➡️ Sei sulla scheda {t} — <b>Sofia ti ha seguito</b>.',
  fmMovedAlone: '➡️ Sei sulla scheda {t}, ma <b>Sofia è ancora sulla scheda {s}</b>. Potrebbe guardare altro. Attiva Lead the group.',

  // Closing timeline (Module 3)
  tlOpening: '<b>Apertura.</b> Attività iniziale e saluti, collegamento alla lezione precedente, controllo dei compiti, obiettivo della lezione.',
  tlCards: '<b>Le schede.</b> Gli studenti creano, esplorano, correggono e mostrano. Tieni d’occhio il tempo — mancano {left} minuti…',
  tlClose: '<b>Mancano {left} minuti alla fine: è il momento di concludere.</b> A qualunque punto delle schede ti trovi, avvia subito la routine di chiusura.',
  tlRoutine: '<b>Routine di chiusura.</b> Riepilogo degli studenti → anticipazione della prossima lezione → nuovi compiti.',
  tlBye: '<b>Alla prossima!</b> Tutti vanno via sapendo che cosa hanno imparato, che cosa li aspetta e che cosa fare a casa.',

  // Videos
  watchExample: 'Guarda un esempio reale',
  comingSoon: 'in arrivo',
  close: 'Chiudi',
  videoDefault: 'Lezione reale',
  soonTitle: 'Video in arrivo',
  soonText: 'Qui potrai vedere questa fase durante una lezione reale. Il video è in preparazione e sarà disponibile a breve.',
  zoomBadge: '🔍 Clicca per ingrandire',
  zoomAria: 'Apri il video in una finestra più grande',
  zoomDefault: 'Video',
  zoomIn: 'Ingrandisci',
  zoomOut: 'Riduci',
  zoomReset: 'Ripristina',
  zoomHint: 'Ingrandisci con + / −, la rotellina del mouse o un doppio clic · trascina per spostarti · Esc o ✕ per chiudere',

  // Checks (quiz engine)
  qmeta: '{e} Verifica del modulo {n} · {kind} {i} di {total}',
  qCase: 'Caso',
  qQuestion: 'Domanda',
  riskQuestion: 'Quale strategia <span class="hurt">DANNEGGEREBBE</span> questa fase della lezione?',
  riskBanner: '⚠️ Attenzione: in questa verifica devi scegliere la strategia <b>SBAGLIATA</b> — quella che <b>DANNEGGEREBBE</b> la lezione. Non quella corretta!',
  tfTrue: '✅ Vero',
  tfFalse: '❌ Falso',
  openHint: '✍️ Scrivi la tua risposta — almeno {min} caratteri. Non esiste un’unica formulazione corretta: vedrai una risposta di esempio da confrontare con la tua.',
  openPlaceholder: 'Scrivi qui la tua risposta…',
  openSubmit: 'Invia la mia risposta',
  openRecorded: '✅ <b>Risposta registrata.</b> Ecco una risposta di esempio: confrontala con la tua.',
  fbRight: '✅ <b>Corretto!</b> ',
  fbWrong: '❌ <b>Non proprio.</b> ',
  fbRiskRight: '✅ <b>Corretto — questa è la strategia che danneggerebbe la lezione.</b> ',
  fbRiskWrong: '❌ <b>Questa strategia, in realtà, aiuta la lezione.</b> Quella rischiosa è evidenziata in verde. ',
  nextQuestion: 'Domanda successiva →',
  seeResult: 'Vedi il mio risultato →',

  // Result of a check
  passedTitle: 'Verifica superata!',
  failTitle: 'Ci sei quasi',
  scoreLine: 'Hai risposto correttamente a <b>{score} domande su {n}</b>.',
  failText: 'Serve almeno il 70%. Ripassa il modulo e riprova — puoi ripetere la verifica tutte le volte che vuoi.',
  nextUnlocked: '<b>Modulo {n} · {title}</b> è ora sbloccato.',
  goModule: 'Vai al modulo {n} →',
  allDoneText: 'Hai completato tutta la formazione.',
  seeNext: 'Scopri il prossimo passaggio →',
  reviewModule: '📖 Ripassa il modulo',

  // Final page
  doneTitle: 'Moduli completati!',
  doneText: `<p>Ci sei quasi! Torna alla pagina della formazione su LMS da cui hai aperto questo percorso. Il test DST si trova subito sotto la formazione.</p><p>👉 <b>Per completare con successo la formazione devi svolgere e superare il test DST.</b> Se non svolgi il test DST, la formazione resterà incompleta e potrebbe scadere.</p><p>Il punteggio minimo per superarlo è <b>80%</b>.</p><p>Buona fortuna! ❤️</p>`,
  doneBadge: '✓ Fatto',
  doneNexts: [
    ['📒', '<b>Prima di ogni lezione:</b> leggi le note per il tutor in Backoffice — e controlla gli aggiornamenti.'],
    ['🔑', '<b>Kodland Sparks:</b> riceverai le credenziali dal reparto Operations o Teaching.'],
    ['🏁', '<b>In ogni lezione:</b> un’apertura curata, domande sul ragionamento e una chiusura di 5–7 minuti.'],
    ['🤖', '<b>Quando gli studenti usano l’IA:</b> l’IA propone, l’autore decide.']
  ],
  doneBack: 'Torna ai moduli',

  // Locked messages
  lockedTitle: 'Ancora bloccato',
  lockedModule: 'Completa prima il modulo {n}.',
  lockedStep: 'Completa il passaggio precedente per sbloccare questo.',
  ok: 'OK'
};

/* ============================================================
   MODULES — titles, descriptions, objectives and section names (keep id, n, e, color, check, needs keys)
   ============================================================ */
CONTENT.modules = [
  { id:'m1', n:1, e:'🧩', color:'#C4F046', title:'La metodologia del nuovo modello', check:'quiz',
    desc:'Che cos’è il nuovo modello, su quali principi pedagogici si basa, come funziona il feedback e come guidare gli studenti nell’uso dell’IA.',
    obj:'Comprendere che cosa è e che cosa non è il nuovo modello educativo, i suoi quattro pilastri, come funziona il feedback e come aiutare gli studenti a usare bene l’IA.',
    offer:[['🌱','Comprendere il nuovo modello didattico'],['🏛️','Conoscere i quattro pilastri su cui si basa ogni lezione.'],['💬','Scoprire come funziona il feedback da quattro fonti.'],['🧭','Capire come cambia il tuo ruolo di tutor.']],
    sections:[ ['what','🔍','Che cos’è il nuovo modello'], ['pillars','🏛️','I quattro pilastri del modello'], ['people','💬','Il feedback da quattro fonti'] ] },
  { id:'m2', n:2, e:'🛠️', color:'#3E7BFA', title:'Preparazione tecnica', check:'quiz',
    needs:[['boCode','la simulazione BO'],['classCode','la guida a Classroom'],['sparksCode','la guida a Kodland Sparks']],
    desc:'Backoffice e note per il tutor, Classroom con Follow Mode e Kodland Sparks — con tre simulazioni pratiche.',
    obj:'Trovare un corso e le relative note per il tutor in Backoffice, condurre una lezione in Classroom con Follow Mode e conoscere le attività degli studenti in Kodland Sparks. Ogni parte termina con una simulazione che fornisce un codice di completamento.',
    offer:[['🗂️','Trovare tutti i materiali del corso in Backoffice — la wiki non si usa più.'],['📒','Leggere le note per il tutor e gli aggiornamenti prima di ogni lezione.'],['🎥','Capire come funzionano Follow Mode, le schede attività e le dimostrazioni a schermo.'],['⚡','Conoscere Kodland Sparks, dove gli studenti creano e pubblicano.']],
    sections:[ ['bo','🗂️','Backoffice: dove trovare il corso'], ['classroom','🎥','Durante la lezione: schede, Follow Mode e dimostrazioni'], ['sparks','⚡','Kodland Sparks: lo studio creativo degli studenti'] ] },
  { id:'m3', n:3, e:'⭐', color:'#F03D9E', title:'Qualità delle lezioni', check:'risk',
    desc:'La struttura della lezione e tre abitudini per mantenerla: un’apertura curata, domande sul ragionamento e una chiusura fissa.',
    obj:'Comprendere la struttura delle lezioni nel nuovo modello e i criteri delle valutazioni di qualità. Sviluppare tre abitudini per mantenere la struttura in ogni lezione: un’apertura curata, domande che portano gli studenti a spiegare il proprio ragionamento e una routine di chiusura fissa.',
    offer:[['🧱','Comprendere la struttura della lezione nel nuovo modello.'],['🎬','Aprire ogni lezione con cura: attività iniziale, collegamento alla lezione precedente, compiti e obiettivo.'],['🧠','Rivolgere domande a singoli studenti per farli spiegare.'],['🏁','Concludere ogni lezione con una routine fissa di 5–7 minuti.']],
    sections:[ ['structure','🧱','La struttura della lezione'], ['seeing','🔎','Che cosa osservano le valutazioni di qualità'], ['opening','🎬','Un’apertura curata'], ['reasoning','🧠','Domande che fanno ragionare gli studenti ad alta voce'], ['closing','🏁','Una routine di chiusura fissa'], ['metrics','📊','La tua responsabilità resta: gli indicatori'], ['qcheck','✅','La tua checklist per la qualità della lezione'] ] },
  { id:'m4', n:4, e:'🤖', color:'#8B5CF6', title:'Introduzione ai prompt per tutor', check:'quiz',
    desc:'La vera nuova competenza di questi corsi. Non la teoria tecnica dell’IA, ma come scrivere un prompt e aiutare gli studenti a scrivere i propri.',
    obj:'Acquisire le basi sui prompt per guidare gli studenti mentre scrivono i propri in classe. Si tratta di una competenza pratica, non di teoria tecnica.',
    offer:[['✍️','Capire che cos’è un prompt e quali elementi lo rendono efficace.'],['💻','Scrivere prompt per generare codice e correggerne gli errori.'],['🎨','Scrivere prompt per immagini e video.'],['⚠️','Evitare gli errori più comuni.']],
    sections:[ ['why4','💡','Perché questo modulo'], ['whatp','❓','Conoscere l’IA: che cos’è un prompt?'], ['goodp','🧩','Che cosa deve includere un buon prompt?'], ['codep','💻','Consigli per i prompt che generano codice'], ['imgp','🎨','Consigli per i prompt che generano immagini e video'], ['mistp','⚠️','Errori comuni'] ] }
];

/* ============================================================
   Names of the three simulations
   ============================================================ */
CONTENT.sims = { boCode:'Simulazione BO', classCode:'Guida a Classroom', sparksCode:'Guida a Kodland Sparks' };

/* ============================================================
   MODULE CHECKS — "a" is the number of the correct option (0 = first). Keep it as it is.
   ============================================================ */
CONTENT.quiz = {
  m1:[
    { ctx:'Un collega ha sentito parlare del nuovo modello educativo ed è preoccupato: «Quindi ora cambiano tutti i nostri corsi?»',
      q:'Qual è la risposta corretta?',
      o:['Sì: da ora tutti i corsi Kodland seguono il nuovo modello.',
         'Cambieranno solo i corsi con meno studenti.',
         'No, solo i tuoi gruppi che seguono il nuovo modello. I gruppi che seguono già i corsi precedenti continueranno come prima, salvo diversa comunicazione.'],
      a:2, e:'Il nuovo modello viene introdotto gradualmente. I gruppi che seguono già un altro formato lo mantengono — riceverai una comunicazione se uno dei tuoi gruppi cambia.' },
    { ctx:'Stai pianificando i primi minuti di una lezione: spiegare il nuovo concetto, mostrare lo strumento e poi distribuire il modello di partenza perché gli studenti realizzino il progetto.',
      q:'Che cosa non va in questo piano secondo il nuovo modello?',
      o:['Nulla — i concetti vanno spiegati prima che gli studenti possano usarli.',
         'È induttivo. Inizia dal risultato completo e funzionante, esploratelo insieme e usa la spiegazione per rispondere a ciò che gli studenti hanno già notato.',
         'Dovresti lasciare che sia l’IA a spiegare il concetto al posto tuo.'],
      a:1, e:'L’apprendimento deduttivo ribalta l’ordine precedente: mostra prima il risultato funzionante, analizzatelo insieme e spiega quando gli studenti hanno già bisogno della risposta.' },
    { ctx:'Uno studente prova a risolvere lo stesso problema da dieci minuti. Non funziona ancora e dice: «Non sono proprio portato».',
      q:'Quale risposta rispecchia la mentalità di crescita del modello?',
      o:['«Non preoccuparti, lo sistemo io così andiamo avanti».',
         '«È facile — a questo punto dovresti esserci riuscito».',
         '«Non funziona ancora — è un problema comune. Fammi vedere che cosa hai provato e cerchiamo la prossima strategia».'],
      a:2, e:'L’errore è una normale fase di sviluppo. Presentalo come tale e affida allo studente il passo successivo — risolvere al posto suo gli toglie la possibilità di imparare.' },
    { ctx:'Uno studente chiede all’IA di scrivere tutta la logica del suo gioco e la incolla nel progetto senza modificare nulla.',
      q:'Quale regola del modello viola?',
      o:['«L’IA propone, l’autore decide» — l’IA può aiutare, ma non deve mai costruire il nucleo del progetto al posto dello studente.',
         'Nessuna: l’IA può fare qualsiasi cosa, purché il progetto funzioni.',
         'La regola secondo cui l’IA si può usare solo per le immagini.'],
      a:0, e:'La regola è la stessa a ogni età: l’IA propone, l’autore decide. Il suo impiego dipende dall’età, ma il nucleo del progetto resta sempre nelle mani dello studente.' }
  ],
  m2:[
    { q:'In Backoffice, come accedi alle attività e alle note per il tutor di una lezione di questi corsi?',
      o:['Groups → il tuo gruppo → il link alla wiki.',
         'Courses → il corso → Assignments → scegli la lezione → apri un’attività.',
         'Profile → Schedule → la lezione.'],
      a:1, e:'Ai contenuti del corso si accede da Courses, non da Groups. In Assignments trovi le schede attività della lezione, con le note per il tutor al loro interno. La tabella Study guides è volutamente vuota.' },
    { ctx:'Il mese scorso hai tenuto la lezione 3 con un altro gruppo ed è andata molto bene.',
      q:'Che cosa fai prima di tenerla di nuovo?',
      o:['Nulla: conosci la lezione, quindi questa volta puoi saltare le note.',
         'Rileggi le note per il tutor e controlla gli aggiornamenti — i corsi vengono migliorati continuamente e attività, tempi o note possono cambiare.',
         'Cerchi la presentazione nella wiki.'],
      a:1, e:'Leggere le note per il tutor fa parte della preparazione di ogni lezione, ogni volta. La versione che hai già insegnato potrebbe essere diversa da quella attuale.' },
    { ctx:'Hai attivato Lead the group. A metà lezione, uno studente clicca su «Work independently» e torna a una scheda precedente.',
      q:'Che cosa succede da quel momento?',
      o:['Lo studente viene rimosso dalla lezione e deve rientrare.',
         'Lo studente continua a vedere un banner che indica dove ti trovi, con il pulsante Return; tu vedi accanto al suo nome che sta lavorando in autonomia.',
         'Le risposte che inserisce nella tua scheda ti vengono inviate in tempo reale.'],
      a:1, e:'Follow Mode non blocca mai lo studente. Può lavorare in autonomia, vedere dove ti trovi e tornare con un clic.' },
    { q:'Vuoi mostrare un passaggio in uno strumento, per esempio nell’editor di Scratch. Qual è il modo corretto?',
      o:['Condividere lo schermo con la scheda della lezione aperta, così vedono le istruzioni e le tue note.',
         'Condividere solo la scheda o la finestra dello strumento — mai la scheda della lezione, dove sono visibili le tue note per il tutor.',
         'Non mostrare nulla: le schede spiegano già tutto.'],
      a:1, e:'Follow Mode serve per le schede: ogni studente ha la propria copia e non vede mai le tue note. La condivisione mostra esattamente ciò che hai sullo schermo — quindi condividi lo strumento, non la scheda della lezione.' },
    { ctx:'I tuoi studenti hanno completato una domanda a scelta e, in seguito, un’attività in cui dovevano incollare il link al proprio progetto.',
      q:'Quale affermazione è corretta?',
      o:['Entrambe vengono salvate automaticamente: gli studenti non devono mai cliccare nulla.',
         'La domanda a scelta registra automaticamente il punteggio; per l’attività con il link, gli studenti devono cliccare su «Send».',
         'Per entrambe serve il pulsante Submit, altrimenti non viene registrato nulla.'],
      a:1, e:'Domande a scelta, campi di testo e formule e attività di trascinamento registrano automaticamente il punteggio. Le attività che prevedono l’invio di testi, link o file richiedono il pulsante «Send».' },
    { q:'Come accedono studenti e tutor a Kodland Sparks?',
      o:['Tutti usano le credenziali di Backoffice.',
         'Gli studenti accedono con un pulsante dalla piattaforma principale; i tutor usano credenziali separate fornite dal reparto Operations o Teaching.',
         'Studenti e tutor si registrano autonomamente sul sito.'],
      a:1, e:'Gli studenti accedono direttamente dalla piattaforma tramite accesso unico. I tutor ricevono credenziali separate da Operations o Teaching — nel frattempo possono esplorarla attraverso la visita guidata.' }
  ],
  // Module 3: in every case, the tutor must spot the strategy that would HARM that part of the lesson
  m3:[
    { part:'👋 Attività iniziale', ctx:'Gli studenti entrano in silenzio, con le videocamere spente. Nessuno dice una parola.',
      o:['Saluta ogni studente per nome e fai una breve domanda sulla sua settimana.',
         'Salta l’attività iniziale e passa subito al progetto per risparmiare tempo.',
         'Registra le presenze mentre si sistemano e invitali a reagire con un’emoji.'],
      a:1, e:'Saltare l’attività iniziale fa risparmiare due minuti, ma impedisce di creare un legame. Un’apertura breve e accogliente aiuta gli studenti più silenziosi a parlare e a partecipare per il resto della lezione.' },
    { part:'📓 Controllo dei compiti', ctx:'Metà del gruppo non ha fatto i compiti.',
      o:['Chiedi chi si è bloccato e che cosa è successo — potrebbe essere stato un problema tecnico.',
         'Chiedi a uno studente di mostrare i compiti e cita un aspetto preciso riuscito bene.',
         'Di’ «Va bene, zero» e vai avanti senza chiedere perché.'],
      a:2, e:'Un compito non svolto è un segnale, non solo uno zero. Capire se lo studente si è bloccato ti permette di aiutarlo e di evitare che resti indietro.' },
    { part:'🧠 Comprensione', ctx:'Hai spiegato un concetto nuovo. Quando chiedi «È chiaro?», tutti rispondono di sì — ma sospetti che non abbiano davvero capito.',
      o:['Chiedi a uno studente specifico, chiamandolo per nome, di spiegare perché funziona.',
         'Accetta il sì e vai avanti: se dicono che è chiaro, è chiaro.',
         'Chiedi di prevedere che cosa succederebbe modificando qualcosa, poi provate insieme.'],
      a:1, e:'A «È chiaro?» si risponde quasi sempre di sì. Proseguire senza verificare significa rischiare che gli studenti si blocchino dopo — chiedi invece a qualcuno di spiegare il proprio ragionamento.' },
    { part:'📋 Riepilogo', ctx:'Mancano 7 minuti alla fine e il gruppo non ha completato l’ultima scheda.',
      o:['Continuate fino all’ultimo per finire la scheda e saltate il riepilogo.',
         'Avvia subito la routine di chiusura: la scheda incompleta si potrà riprendere nella prossima lezione o a casa.',
         'Chiedi a due o tre studenti di dire che cosa hanno imparato oggi.'],
      a:0, e:'Lavorare fino all’ultimo secondo fa saltare proprio il riepilogo, l’anticipazione e i compiti. Inizia la chiusura in tempo — la scheda può aspettare, la chiusura no.' },
    { part:'🔮 Anticipazione e compiti', ctx:'È l’ultimo minuto della lezione e gli studenti stanno per andare via.',
      o:['Collega l’anticipazione al loro progetto: una frase che li incuriosisca sulla prossima lezione.',
         'Spiega i compiti in una o due frasi e ricorda come consegnarli.',
         'Leggi in fretta l’anticipazione mentre vanno via e di’ «I compiti sono sulla piattaforma».'],
      a:2, e:'Un’anticipazione frettolosa e compiti non spiegati fanno andare via gli studenti senza sapere che cosa li aspetta. Bastano meno di due minuti per una frase motivante e una spiegazione chiara.' }
  ],
  m4:[
    { ctx:'Stai aiutando uno studente a trasformare la sua idea di gioco Scratch in un prompt.',
      q:'Quale prompt ha più probabilità di produrre un risultato utilizzabile al primo tentativo?',
      o:['«Crea un gioco con un gatto e degli ostacoli, simile ai giochi endless runner, usando buoni principi di game design».',
         '«Crea un gioco in Scratch: uno sprite gatto si muove a destra e a sinistra con le frecce, gli ostacoli cadono dall’alto a velocità crescente, il punteggio aumenta ogni secondo di sopravvivenza e il gioco termina dopo 3 collisioni».',
         '«Crea un gioco divertente e coinvolgente per un bambino di 8 anni, che gli insegni ad affrontare ostacoli e a sopravvivere, simile a Flappy Bird ma originale».',
         '«Crea un gioco 2D in Scratch con regole chiare, un sistema di punteggio e difficoltà crescente nel tempo».'],
      a:1, e:'Solo questo prompt descrive meccaniche concrete e inequivocabili: movimento, comparsa degli ostacoli, incremento del punteggio e condizione di fine partita. Gli altri <i>sembrano</i> specifici, ma usano espressioni soggettive — «buoni principi di game design», «divertente e coinvolgente», «regole chiare» — che l’IA deve interpretare da sola.' },
    { ctx:'Il primo prompt di uno studente per un’immagine ha prodotto un personaggio con la palette sbagliata. Tutto il resto — posa, stile e sfondo — è corretto.',
      q:'Qual è il passo successivo migliore?',
      o:['Riscrivere tutto il prompt da zero aggiungendo più dettagli in generale, per non ripetere lo stesso errore.',
         'Ripetere esattamente lo stesso prompt: i risultati dell’IA hanno una componente casuale e un secondo tentativo spesso risolve il problema.',
         'Inviare un prompt successivo che modifichi solo la palette, lasciando invariato il resto della descrizione.',
         'Aggiungere diversi aggettivi per descrivere l’atmosfera desiderata, così l’IA ha più contesto.'],
      a:2, e:'Isolare l’unica variabile sbagliata è più rapido e affidabile che ricominciare, affidarsi al caso o aggiungere dettagli non pertinenti che non risolvono il problema reale.' },
    { ctx:'Stai aiutando uno studente dai 13 anni in su a correggere una funzione Python con l’IA.',
      q:'Quale prompt segue l’approccio più efficace alla risoluzione dei problemi?',
      o:['«Questo codice non funziona, correggilo: [codice]»',
         '«Questa funzione dovrebbe restituire la media di una lista, ma restituisce None quando la lista ha un solo elemento. Ecco il codice: [codice]. Che cosa causa l’errore in questo caso specifico?»',
         '«Riscrivi questo codice seguendo pratiche migliori e assicurati che funzioni: [codice]»',
         '«Spiega che cosa non va in questo codice e dammi una versione corretta: [codice]»'],
      a:1, e:'Indica con precisione il comportamento atteso, l’errore osservato e il caso limite specifico — così l’IA può concentrarsi sul vero bug senza dover indovinare l’ambito o riscrivere più del necessario.' },
    { ctx:'Due tutor scrivono prompt per generare lo stesso video. Il tutor A scrive un unico prompt lungo e dettagliato che descrive insieme stile, soggetto e sfondo. Il tutor B parte da un prompt più breve, controlla il risultato e poi lo modifica.',
      q:'Quale affermazione è più precisa?',
      o:['L’approccio del tutor A è sempre migliore: più dettagli iniziali riducono il numero di tentativi necessari.',
         'L’approccio del tutor B è sempre migliore: per l’IA i prompt più brevi sono per natura più facili da elaborare.',
         'Entrambi possono funzionare, ma l’approccio per iterazioni del tutor B rende più facile individuare quale dettaglio ha prodotto un risultato indesiderato.',
         'Nessuno dei due approcci conta: la qualità finale dipende solo dal modello di IA utilizzato, non dal prompt.'],
      a:2, e:'Il principio centrale di questo modulo è procedere per iterazioni e isolare le variabili. I dettagli da soli non garantiscono il successo; procedere per tentativi successivi chiarisce il rapporto tra causa ed effetto molto più di un unico grande prompt.' },
    { open:true, min:180,
      ctx:'Uno studente del tuo gruppo vuole aggiungere un doppio salto al suo gioco platform. Scrive all’IA: <i>«migliora il salto»</i>.',
      q:'Trasforma questa richiesta in un prompt che abbia buone probabilità di funzionare al primo tentativo. Scrivi il testo che aiuteresti lo studente a formulare, poi aggiungi una riga per spiegare perché funzionerà meglio.',
      model:'Un prompt efficace include gran parte di questi elementi: <ul><li><b>Indica la piattaforma</b> — «In Scratch…» — così l’IA non deve indovinare l’ambiente.</li><li><b>Descrive il comportamento preciso e ciò che lo attiva:</b> «quando si preme la barra spaziatrice mentre il gatto è già in aria, salta una seconda volta».</li><li><b>Stabilisce un limite:</b> «una sola volta per caduta» e «non modificare i blocchi di movimento esistenti».</li><li><b>Chiede una spiegazione:</b> «dimmi quali blocchi hai aggiunto e dove».</li></ul><p style="margin-top:8px">Il motivo: isola <b>una</b> meccanica, descrive con precisione il comportamento atteso e limita le modifiche possibili — così l’IA non deve inventare nulla. «Migliora il salto» lascia invece tutte queste decisioni all’IA.</p>' }
  ]
};

/* ============================================================
   STAGE CAROUSELS (Module 3) — keep e, c and v
   ============================================================ */
CONTENT.stagesets = {
  blocks:[
    { e:'👋', t:'Attività iniziale — da 2 a 4 minuti', was:'Attività iniziale', ph:'Apertura', c:'#BDE7FF', goal:'È ancora presente, ma è breve: saluti, videocamera e microfono, una reazione. In alcune lezioni si chiede agli studenti come si sentono.',
      d:['Usala per creare un legame: una breve chiacchierata o una domanda sui loro interessi e su come si sentono.','Registra le presenze ora, mentre gli studenti si sistemano — non alla fine.'] },
    { e:'🔧', t:'Un controllo tecnico', was:'Ripasso della lezione precedente', ph:'Apertura', c:'#BDE7FF', goal:'Il ripasso diventa un controllo: il progetto precedente si apre e funziona? Non si rispiegano i concetti — si verifica solo che la base di partenza sia pronta.',
      d:['In alcune lezioni, il ripasso e il controllo dei compiti sono un’unica attività sulla piattaforma.','Se un progetto non si apre, usa il modello di riserva — nessuno resta bloccato.'] },
    { e:'🎬', t:'L’obiettivo si mostra, non si spiega', was:'Obiettivo della lezione', ph:'Apertura', c:'#FFF1B8', goal:'L’obiettivo viene mostrato attraverso il risultato finale — un video, una GIF o un progetto funzionante — come primo stimolo della lezione.',
      d:['Mostra prima il risultato, poi chiedi che cosa notano.','Lascia che la spiegazione arrivi dopo, come risposta.'] },
    { e:'🔀', t:'Teoria e pratica si integrano', was:'Teoria e pratica', ph:'Parte centrale', c:'#E4FFC2', goal:'Gli studenti prima esplorano e affrontano la sfida; la spiegazione arriva proprio quando ne hanno bisogno.',
      d:['Dai un suggerimento alla volta — non la soluzione.','Gli errori sono occasioni di apprendimento, non fallimenti.'] },
    { e:'📋', t:'Riepilogo — interattivo e condiviso', was:'Riepilogo della lezione', ph:'Chiusura', c:'#FFD9EC', goal:'Più interattivo e partecipato: brevi quiz a cui ogni studente risponde sulla piattaforma, più un breve elenco degli apprendimenti da ripercorrere insieme.',
      d:['Sono gli studenti a dire che cosa hanno imparato — non riepilogare al posto loro.','È il primo passo della routine di chiusura descritta qui sotto.'] },
    { e:'🏠', t:'Compiti — la versione successiva', was:'Assegnazione dei compiti', ph:'Chiusura', c:'#FFD9EC', goal:'I compiti sono la versione successiva dello stesso progetto pubblicato — oppure una missione basata su ciò che hanno appena imparato. Non un esercizio separato.',
      d:['Spiegali chiaramente prima che vadano via.','Ricorda di pubblicare la nuova versione e inviare il link.'] },
    { e:'🔮', t:'Anticipazione — una frase motivante', was:'Anticipazione della prossima lezione', ph:'Chiusura', c:'#FFD9EC', goal:'È una frase, non una sezione — ma non limitarti a leggerla. Usala per motivare.',
      d:['Leggi la prossima lezione prima di insegnare, così potrai creare una vera aspettativa.','Collegala a ciò che hanno appena realizzato.'] }
  ],
  open:[
    { e:'👋', t:'Attività iniziale e saluti', ph:'Apertura · 1', c:'#BDE7FF', v:'warmup', goal:'Crea un legame prima di insegnare: saluta ogni studente per nome, controlla videocamera e audio e offri un motivo per sorridere.',
      d:['Saluta ogni studente per nome quando arriva.','Dedica 1 minuto a una domanda sulla loro settimana o sui loro interessi.','Registra le presenze mentre si sistemano.'],
      say:['«Ciao Leo! Che bello vederti. Una domanda veloce prima di iniziare: a che gioco hai giocato questa settimana?»'] },
    { e:'🔗', t:'Collegamento alla lezione precedente', ph:'Apertura · 2', c:'#C9F2D6', v:'link', goal:'Ricorda agli studenti a che punto è il progetto e come si collega alla lezione di oggi — la storia continua.',
      d:['Chiedi a uno studente di raccontare al gruppo che cosa ha realizzato la volta scorsa.','Collegalo alla missione di oggi in una frase.','Mantieni vivo il filo narrativo del corso: «Oggi la nostra missione è…».'],
      say:['«Ana, ci ricordi che cosa sapeva fare il tuo progetto alla fine della scorsa lezione?»','«La volta scorsa il vostro gioco ha avuto un eroe. Oggi l’eroe avrà un obiettivo».'] },
    { e:'📓', t:'Controllo dei compiti', ph:'Apertura · 3', c:'#FFF1B8', v:'homework', goal:'Controlla la nuova versione su cui hanno lavorato a casa — e nota chi si è bloccato.',
      d:['Chiedi a uno o due studenti di mostrare i compiti.','Cita un aspetto preciso riuscito bene.','Niente compiti? Scopri se c’è stato un problema tecnico — non limitarti a uno zero.'],
      say:['«Mia, mostraci la tua nuova versione. Perché hai scelto questi colori?»'] },
    { e:'🎯', t:'Obiettivo della lezione', ph:'Apertura · 4', c:'#E4FFC2', v:'goal', goal:'Definisci il traguardo della lezione di oggi. È l’ultima fase prima del lavoro autonomo.',
      d:['Spiega l’obiettivo del progetto di oggi in una o due frasi.','Chiedi allo studente di ripetere il piano con parole proprie.'] }
  ],
  close:[
    { e:'📋', t:'Riepilogo', ph:'Ultimi 5–7 min · 1', c:'#FFD9EC', v:'recap', goal:'Sono gli studenti a dire che cosa hanno imparato — non tu. Usa il quiz o l’elenco di riepilogo della scheda e lascia che rispondano loro.',
      d:['Chiedi a 2–3 studenti che cosa hanno imparato oggi.','Chiedi perché o come — non «È chiaro?».','Valorizza un risultato preciso raggiunto dal gruppo.'],
      say:['«Tom, che cosa succede quando inizia il gioco — e perché?»'] },
    { e:'🔮', t:'Anticipazione della prossima lezione', ph:'Ultimi 5–7 min · 2', c:'#E9DDFF', v:'teaser', goal:'Una frase che faccia venire voglia di tornare. Funziona solo se hai letto la prossima lezione.',
      d:['Leggi la prossima lezione durante la preparazione.','Collega l’anticipazione al loro progetto.','Sii breve e coinvolgente — una promessa, non un riassunto.'],
      say:['«La prossima volta comparirà qualcosa di pericoloso sul cammino del vostro eroe… riuscirà a farcela?»'] },
    { e:'🏠', t:'Nuovi compiti', ph:'Ultimi 5–7 min · 3', c:'#C9F2D6', v:'nexthw', goal:'Spiega la prossima versione del progetto, così tutti sanno esattamente che cosa fare — e che devono consegnarla.',
      d:['Spiega i compiti in una o due frasi.','Ricorda di cliccare su «Send» quando consegnano il link.','Saluta con una nota positiva.'],
      say:['«Per la prossima volta: aggiungete un dettaglio nuovo al gioco, pubblicatelo e inviatemi il link».'] }
  ]
};

/* ============================================================
   SMALL DATA LISTS — Learning Loop, AI per age, prompt and question examples
   ============================================================ */
CONTENT.loop = [
  ['🎯','Obiettivo','La lezione parte da ciò che dovrà funzionare entro la fine — mostrandolo, non spiegandolo.'],
  ['⚡','Prototipo rapido','Gli studenti ottengono rapidamente qualcosa di funzionante: un modello di partenza, una prima versione, un primo risultato.'],
  ['🐞','Difficoltà','Qualcosa non funziona ancora. È previsto — è qui che si impara.'],
  ['🧭','Strategia / suggerimento','Dai un suggerimento o fai una domanda alla volta — non offri la soluzione.'],
  ['📈','Miglioramento','Lo studente corregge e migliora: la sua versione, le sue decisioni.'],
  ['🎤','Presentazione','Mostra il risultato a te, al gruppo, su Kodland Sparks.'],
  ['💭','Riflessione','Quale problema ho incontrato? Quale strategia ho usato? Qual è il mio prossimo passo?']
];
CONTENT.ages = {
  a:{ e:'🧒', age:'8–9', who:'Corsi per gli studenti più piccoli', model:'Apprendimento per progetti guidato e assistito dall’IA.',
      p:'Strumenti vicini a quelli che gli studenti conoscono già, con l’uso dell’IA mediato dal tutor e da AI Buddy. <b>La sensazione «L’ho fatto io» è ciò che va protetto.</b> L’IA può comparire più avanti nel corso come elemento ludico, con limiti precisi.',
      test:'Test inverso', tt:'Il progetto deve restare realizzabile al 100% e significativo <b>senza</b> IA. L’IA semplifica solo le operazioni ripetitive — non sostituisce mai l’atto creativo.', ai:20 },
  b:{ e:'🧑', age:'10–12', who:'Corsi per preadolescenti', model:'Apprendimento per progetti con una guida, usando l’IA per generare materiali.',
      p:'Lo studente concepisce e realizza il nucleo creativo; l’IA genera materiali grezzi — sprite, suoni, testi — che lo studente seleziona, modifica e assembla. L’IA è un partner con cui confrontarsi.',
      test:'Test del potenziamento', tt:'Senza IA il progetto sarebbe comunque possibile, ma nel tempo della lezione sarebbe visibilmente più povero o ridotto. L’IA amplia le possibilità dell’idea dello studente.', ai:55 },
  c:{ e:'🧑‍💻', age:'12–17', who:'Corsi per adolescenti', model:'Apprendimento per progetti integrato con l’IA — lo studente come direttore creativo.',
      p:'Gli studenti coordinano l’IA lungo l’intero processo (idea → risorse → logica → realizzazione), anche integrandola come componente del proprio programma, con una formazione esplicita sui contenuti generati artificialmente.',
      test:'Test dell’ambizione', tt:'L’ampiezza e la qualità previste non sono raggiungibili senza IA nel tempo disponibile. Togliendo l’IA, il progetto non può più assumere la forma pianificata.', ai:85 }
};
CONTENT.prompts = {
  v:['«Creami un gioco».','«Rendilo più bello».','«Correggi il mio codice».'],
  s:['«In Python: scrivi un gioco in cui indovinare un numero. Il computer sceglie un numero da 1 a 100, il giocatore ha 7 tentativi, dopo ogni tentativo il programma stampa “troppo alto” o “troppo basso” e alla fine indica quanti tentativi sono serviti».',
     '«Modifica solo la palette usando blu e rosa neon. Mantieni posa, stile e sfondo».',
     '«Il mio programma Python dovrebbe fermarsi quando il giocatore indovina il numero, ma continua a chiederlo. Ecco il codice. Qual è la causa e che cosa devo controllare?»']
};
CONTENT.qcmp = {
  v:['«È chiaro?»','«Avete finito tutti?»','«Ci sono domande?»'],
  s:['«Mia, perché il personaggio si muove solo quando premi il tasto freccia?»','«Leo, che cosa succederebbe se spostassimo questa riga all’inizio? Prova e raccontacelo».','«Ana, come hai capito che il punteggio funzionava?»']
};

/* ============================================================
   Notes under the vague / specific switches
   ============================================================ */
CONTENT.cmpnote = { prompts:{ v:'L’IA deve indovinare tutto: la piattaforma, le regole, che cosa significa «più bello».', s:'Ogni prompt indica la piattaforma, il comportamento preciso e che cosa può cambiare — nulla è lasciato al caso.' },
                  questions:{ v:'È facile rispondere con un «sì» — e non scopri nulla su ciò che hanno capito.', s:'Un nome più un «perché» o un «come»: lo studente deve spiegare ad alta voce il proprio ragionamento.' } };

/* Follow Mode demo cards (Module 2) */
CONTENT.fmCards = [['Scheda 1 · Preparati alla missione di oggi! 🚀','Oggi realizzerai il tuo primo progetto…'],['Scheda 2 · Benvenuti! 👋','Controlliamo che riusciate a vedervi e sentirvi…'],['Scheda 3 · Conosciamoci! 🎤','Ogni creatore ha il proprio stile…']];

/* ============================================================
   SECTION BODIES — the text of every section, by module. Inside ${…} translate only the quoted text; keep function names (callout, flip, launch, codeBox, zclip, stc, videoBtn), CONFIG.… and file names.
   ============================================================ */
CONTENT.body = {
/* ---------------- Module 1 ---------------- */
what:() => `
  <p class="p">Kodland ha creato un <b>nuovo modello educativo (EM)</b> che verrà introdotto gradualmente nei corsi nuovi e in quelli esistenti. Non si tratta solo di nuovi contenuti tecnici, ma di una diversa <b>metodologia</b>: come si svolge una lezione, quale ruolo assumi come tutor e come l’intelligenza artificiale entra nell’apprendimento senza diventare una scorciatoia.</p>
  <div class="defn"><span class="de">🌱</span><p>In questo <b>nuovo modello educativo</b> gli studenti partono da un risultato funzionante, imparano costruendo e correggendo, pubblicano i propri progetti su <b>Kodland Sparks</b> e usano l’IA con consapevolezza.</p></div>
  ${callout('good', '🧭', '<b>Importante:</b> questo nuovo modello educativo verrà introdotto gradualmente. I nuovi corsi seguiranno questo approccio didattico, mentre quelli esistenti verranno adattati. Tuttavia, i gruppi che seguono già corsi con un formato didattico diverso manterranno quello attuale. Per ora solo alcuni corsi seguono il nuovo modello.')}
  <p class="p" style="margin-top:18px">Perché un nuovo modello? Perché gli studenti di oggi imparano in modo diverso rispetto a qualche anno fa. Sono cambiati gli strumenti e il rapporto di bambini e ragazzi con la tecnologia, e l’IA fa già parte della loro vita quotidiana. La nuova metodologia si basa su tre idee:</p>
  <div class="trio">
    <div class="ti"><span class="tie">🛠️</span><h3>Strumenti familiari</h3><p>Gli studenti lavorano con gli strumenti che vedono e usano davvero oggi — e con progetti capaci di stupire fin dal primo minuto.</p></div>
    <div class="ti"><span class="tie">🧠</span><h3>IA con consapevolezza</h3><p>Insegniamo a usare l’IA con criterio: senza temerla e senza dipenderne ciecamente.</p></div>
    <div class="ti"><span class="tie">✨</span><h3>Lezioni a cui vale la pena partecipare</h3><p>L’esperienza di apprendimento resta attuale e significativa, dando valore a ogni lezione.</p></div>
  </div>
  <p class="p" style="margin-top:18px">Prima di proseguire, chiariamo tre convinzioni diffuse. Toccale una alla volta:</p>
  <div class="myths">
    <button class="myth" data-myth><span class="mtag">Falso mito</span><span class="mq">«Tutti i corsi Kodland stanno passando al nuovo modello».</span><span class="ma"><b>Non tutti.</b> Il nuovo modello viene usato nei nuovi corsi progettati per seguirlo e in alcuni corsi esistenti che vengono adattati.</span><span class="mh">Tocca per scoprire la realtà →</span></button>
    <button class="myth" data-myth><span class="mtag">Falso mito</span><span class="mq">«Cambieranno tutti i miei gruppi».</span><span class="ma"><b>No.</b> Insegni con il nuovo modello solo nei gruppi di un corso che lo segue. Negli altri gruppi non cambia nulla. Riceverai una comunicazione quando uno dei tuoi corsi passerà al nuovo modello.</span><span class="mh">Tocca per scoprire la realtà →</span></button>
    <button class="myth" data-myth><span class="mtag">Falso mito</span><span class="mq">«Sono solo nuovi contenuti da imparare».</span><span class="ma"><b>È un nuovo modo di concepire la lezione.</b> I contenuti richiedono poche conoscenze nuove — il vero cambiamento riguarda lo svolgimento della lezione e il tuo ruolo al suo interno.</span><span class="mh">Tocca per scoprire la realtà →</span></button>
  </div>`,

pillars:() => `
  <p class="p">Questo è il cuore del modello. Non si tratta di imparare a usare nuovi pulsanti, ma di <b>cambiare il modo di concepire la lezione</b>. Tutto si basa su quattro pilastri. Gira ogni scheda, poi scopri come ciascuno cambia il tuo modo di insegnare.</p>
  <div class="grid4">
    ${flip('Pilastro 1', '🔄', 'Apprendimento deduttivo', '<b>Prima il risultato.</b><br>La lezione si apre con il risultato completo e già funzionante. Gli studenti lo analizzano insieme a te e solo dopo lo costruiscono pezzo per pezzo.')}
    ${flip('Pilastro 2', '🌱', 'Mentalità di crescita', '<b>Gli errori sono una tappa, non un fallimento.</b><br>Un bug o una meccanica che non funziona sono normali. Gli studenti imparano a dire «non funziona <i>ancora</i> — cerchiamo una strategia».')}
    ${flip('Pilastro 3', '🔁', 'Il ciclo di apprendimento', '<b>Un ciclo, non una linea.</b><br>Obiettivo → prototipo → difficoltà → suggerimento → miglioramento → presentazione → riflessione. A ogni giro si approfondisce un po’ di più.')}
    ${flip('Pilastro 4', '🤖', 'Apprendimento assistito dall’IA', '<b>L’IA propone, l’autore decide.</b><br>L’impiego dell’IA dipende dall’età degli studenti — e l’IA non costruisce mai il nucleo del progetto al posto loro.')}
  </div>

  <h3 class="subh">🔄 Pilastro 1 · Prima mostra, poi spiega</h3>
  <div class="ba"><div class="bef"><h4>Prima</h4><p>La lezione iniziava con la teoria, poi si passava allo strumento e infine gli studenti costruivano da zero.</p></div><div class="arr">➜</div>
    <div class="aft"><h4>Ora</h4><p>La lezione inizia dal <b>risultato completo e già funzionante</b> — «Quale gioco o meccanica dovrà funzionare entro la fine di oggi?». Gli studenti vedono il progetto nel suo insieme, lo analizzano con te e poi lo costruiscono.</p></div></div>
  ${callout('tip', '💡', 'Questo cambia il tuo primo impulso come tutor: invece di spiegare prima di mostrare, <b>mostra prima e usa la spiegazione come risposta</b> a ciò che gli studenti hanno già notato.')}

  <h3 class="subh">🌱 Pilastro 2 · Le tue parole plasmano il loro atteggiamento</h3>
  <p class="p">Il modo in cui parli di un errore insegna agli studenti come interpretarlo. Il modello ti chiede di trattare ogni errore come un passaggio normale e di affidare allo studente la mossa successiva.</p>
  <div class="twocol">
    <div class="yes"><h4>✅ Usa queste frasi</h4><ul><li>«Perfetto — abbiamo trovato un problema comune. Risolviamolo».</li><li>«Non funziona ancora. Qual è la prossima strategia?»</li><li>«Fammi vedere che cosa hai provato prima».</li></ul></div>
    <div class="no"><h4>🚫 Evita queste frasi</h4><ul><li>«Non ci sei riuscito neanche questa volta».</li><li>«È sbagliato — lascia che lo corregga io».</li><li>«È facile, dovresti saperlo».</li></ul></div>
  </div>

  <h3 class="subh">🔁 Pilastro 3 · Il ciclo di apprendimento Kodland</h3>
  <p class="p">La sequenza precedente era lineare: <i>io spiego → loro si esercitano → io verifico</i>. Il ciclo di apprendimento la sostituisce con un percorso che si ripete durante ogni lezione e tra una lezione e l’altra. Avvia la riproduzione o tocca una fase:</p>
  <div class="loop" id="loop">
    <div class="loop-row"><span class="lf"></span>${LOOP.map((s, i) => `<button class="lst" data-ls="${i}"><span class="lsi">${s[0]}</span><b>${s[1]}</b></button>`).join('')}</div>
    <div class="loop-out" id="loopOut"><span class="lo-e">▶️</span><span>Premi <b>Avvia il ciclo</b> per vedere un giro completo.</span></div>
    <div class="btn-row" style="margin-top:12px;justify-content:center"><button class="btn-y" id="loopPlay">▶ Avvia il ciclo</button></div>
    <p class="spiral">🌀 La lezione procede a spirale: a ogni giro del ciclo si approfondisce un po’ di più.</p>
  </div>

  <h3 class="subh">🤖 Pilastro 4 · L’IA dipende dall’età</h3>
  <p class="p">Qui serve particolare attenzione, perché il ruolo dell’IA <b>non è uguale in tutti i corsi</b> — dipende dall’età degli studenti. Passa da una fascia d’età all’altra:</p>
  <div class="agebox">
    <div class="seg" id="ageSeg"><button data-age="a" aria-pressed="true">🧒 8–9 anni</button><button data-age="b" aria-pressed="false">🧑 10–12 anni</button><button data-age="c" aria-pressed="false">🧑‍💻 12–17 anni</button></div>
    <div class="agebody" id="ageOut"></div>
  </div>
  <div class="quote"><b>«L’IA propone, l’autore decide».</b><small>La regola da ripetere in ogni corso, a ogni età.</small></div>
  <div class="grid2">
    <div class="card"><div class="wh"><b>⚙️ IA convenzionale (generativa)</b></div><p class="p" style="margin:0;font-size:15px">Crea codice, immagini o idee quando glielo chiedi.</p></div>
    <div class="card"><div class="wh"><b>🧭 Mentore IA / AI Buddy</b></div><p class="p" style="margin:0;font-size:15px">Non genera la soluzione: pone domande guida e fornisce spiegazioni.</p>
      <p class="p" style="margin:10px 0 0;font-size:13.5px;color:var(--pink-d)"><b>👀 Più avanti in questa formazione</b> vedrai dove gli studenti lo trovano sulla piattaforma.</p></div>
  </div>
  ${callout('bad', '🛑', '<b>Non lasciare mai che l’IA costruisca la logica centrale del progetto al posto dello studente.</b>')}`,

people:() => `
  <p class="p">Il feedback non segue più soltanto la direzione <i>tutor → studente</i>. Nel nuovo modello gli studenti ricevono feedback da quattro fonti, ciascuna con un proprio ruolo:</p>
  <div class="q3">
    <div><span>🧑‍🏫</span><b>Il tutor</b><small>Specifico, relativo al progetto e al passo successivo.</small></div>
    <div><span>👥</span><b>Un compagno</b><small>Semplice e specifico durante la presentazione — senza confrontare i progetti.</small></div>
    <div><span>🪞</span><b>Lo studente stesso</b><small>Quale problema ho incontrato, quale strategia ho usato, qual è il mio prossimo passo?</small></div>
    <div><span>🤖</span><b>L’IA</b><small>AI Buddy o il mentore IA: un punto di forza e un’idea per migliorare.</small></div>
  </div>
  ${callout('tip', '🪞', 'L’autovalutazione non è «Ti è piaciuto?». Significa individuare il problema, la strategia e il passo successivo. Il feedback tra pari segue una formula semplice: <b>«Mi è piaciuto… Aggiungerei…»</b>.')}
  <div class="defn" style="margin-top:18px"><span class="de">🧭</span><p><b>Il tuo ruolo è cambiato.</b> Non sei più la persona che spiega tutto prima di iniziare. Sei una <b>guida</b>: mostri la meta, accompagni il percorso con domande e suggerimenti al momento giusto e lasci che gli studenti affrontino la difficoltà prima di risolverla. In ogni corso ci sono modelli di riserva: non devi mai «salvare» un progetto in preda al panico — esiste sempre un percorso alternativo che garantisce un risultato.</p></div>`,

/* ---------------- Module 4 ---------------- */
why4:() => `
  <div class="defn"><span class="de">💡</span><p>Questi corsi richiedono poche nuove conoscenze disciplinari. L’unico ambito davvero nuovo è <b>l’IA</b>: alcuni tutor la usano già con sicurezza, altri la usano poco o in modi che non aiuterebbero uno studente. Questo modulo offre a tutti una base comune.</p></div>`,

whatp:() => `
  <p class="p">L’intelligenza artificiale che usiamo in classe — AI Buddy e gli strumenti di Kodland Sparks — funziona tramite istruzioni scritte nel linguaggio comune, chiamate <b>prompt</b>. Più efficace è il prompt, migliore sarà il risultato ottenuto dallo studente.</p>
  <p class="p">Come tutor non devi essere un esperto tecnico di IA. Devi però conoscerne le basi per guidare gli studenti mentre scrivono i propri prompt durante la lezione.</p>
  <div class="defn"><span class="de">❓</span><p>Un <b>prompt</b> è l’istruzione che diamo a un’IA per generare un risultato: testo, codice, un’immagine o un video. È come dare indicazioni a qualcuno che non conosce affatto il contesto del tuo progetto: <b>più le istruzioni sono chiare e specifiche, più il risultato si avvicinerà a ciò che volevi davvero.</b></p></div>
  <div class="ba"><div class="bef"><h4>Un prompt poco efficace</h4><p>Produce risultati generici o scorretti. Lo studente finisce per accettare qualcosa che non voleva oppure per ricominciare da zero.</p></div><div class="arr">➜</div>
    <div class="aft"><h4>Un buon prompt</h4><p>Produce risultati utili, precisi e <b>facili da modificare</b>. Quest’ultimo aspetto è fondamentale: un risultato da ritoccare vale più di uno da sostituire.</p></div></div>`,

goodp:() => `
  <p class="p">Un prompt solido risponde in genere a queste quattro domande:</p>
  <div class="q3">${[['🎬','Contesto','A che cosa serve? Chi lo userà?'],['🎯','Obiettivo','Che cosa vuoi ottenere esattamente?'],['📐','Dettagli specifici','Stile, formato, tono, vincoli: «in 3 frasi», «usando Python», «in stile cartone animato».'],['🖼','Esempi','Quando sono pertinenti, un esempio aiuta l’IA a capire il risultato atteso.']].map(q => `<div><span>${q[0]}</span><b>${q[1]}</b><small>${q[2]}</small></div>`).join('')}</div>
  <div class="twocol" style="margin-top:14px">
    <div class="yes"><h4>✅ Abbastanza specifico</h4><ul><li>«Crea un gioco semplice in Scratch in cui un gatto schiva ostacoli che cadono, con un punteggio visibile e 3 vite».</li></ul></div>
    <div class="no"><h4>❌ Troppo vago</h4><ul><li>«Creami un gioco».</li></ul></div>
  </div>
  <div class="card" style="margin-top:14px">
    <div class="wh"><b>Vago o specifico? Cambia e confronta</b><span class="tag">Prova</span></div>
    <div class="seg" data-cmp="prompts"><button data-k="v" aria-pressed="true">😐 Vago</button><button data-k="s" aria-pressed="false">🎯 Specifico</button></div>
    <div class="fbx" data-cmpout="prompts"></div>
  </div>`,

codep:() => `
  <div class="grid2">${[
    ['🏷','Indica il linguaggio o la piattaforma','Python, HTML, Scratch, Roblox e così via.'],
    ['👣','Descrivi passo per passo il comportamento atteso','Non solo il risultato finale.'],
    ['💬','Chiedi di aggiungere commenti al codice','Così sarà più facile leggerlo e spiegarlo in classe.'],
    ['🔧','Non riscrivere tutto il prompt','Se qualcosa non funziona, chiedi all’IA di correggere l’errore specifico e descrivi che cosa è successo.'],
    ['🧪','Prova e comprendi il codice','Invita gli studenti a provare e capire il codice, non solo a copiarlo.']
  ].map(x => `<div class="card" style="padding:16px"><div class="wh" style="margin-bottom:6px"><span style="font-size:26px">${x[0]}</span><b>${x[1]}</b></div><p class="p" style="margin:0;font-size:14.5px">${x[2]}</p></div>`).join('')}</div>`,

imgp:() => `
  <div class="grid2">${[
    ['🖌','Soggetto, stile e ambientazione','Descrivi il soggetto principale, lo stile visivo (realistico, cartone animato, pixel art…) e l’ambientazione o lo sfondo.'],
    ['🌈','Colori, illuminazione o atmosfera','Specificali quando sono rilevanti per il progetto.'],
    ['📏','Specifica il formato','Verticale, orizzontale o quadrato — se il progetto lo richiede.'],
    ['🔁','Modifica una variabile alla volta','Se il primo risultato non è quello atteso, cambia solo il colore o solo lo stile, così puoi capire che cosa ha davvero influito sul risultato.']
  ].map(x => `<div class="card" style="padding:16px"><div class="wh" style="margin-bottom:6px"><span style="font-size:26px">${x[0]}</span><b>${x[1]}</b></div><p class="p" style="margin:0;font-size:14.5px">${x[2]}</p></div>`).join('')}</div>`,

mistp:() => `
  <div class="myths">${[
    ['🌫','Essere troppo vaghi.','«Rendilo più bello» non dà all’IA indicazioni utili.'],
    ['📚','Chiedere troppe cose insieme.','Suddividi un progetto complesso in più prompt piccoli.'],
    ['🔍','Non controllare il risultato.','L’IA commette errori e può generare contenuti scorretti — controllali sempre prima di usarli.'],
    ['🔂','Non procedere per iterazioni.','Il primo risultato non è quasi mai quello finale. Modificare e chiedere di nuovo è una parte normale del processo.'],
    ['🧭','Dimenticare il contesto del progetto.','Un prompt senza contesto produce risultati generici che non si adattano a ciò che lo studente sta realizzando.']
  ].map(x => `<button class="myth" data-myth><span class="mtag">Errore</span><span class="mq">${x[0]} ${x[1]}</span><span class="ma">${x[2]}</span><span class="mh">Tocca per scoprire perché →</span></button>`).join('')}</div>
  ${callout('good', '🔁', 'Nota quanti di questi principi fanno già parte del tuo lavoro di tutor: una modifica alla volta, descrivere il comportamento atteso, verificare prima di fidarsi e procedere per miglioramenti successivi anziché ricominciare. Scrivere prompt non è una competenza separata: è la stessa abitudine a individuare e correggere gli errori, applicata a uno strumento diverso.')}`,

/* ---------------- Module 2 ---------------- */
bo:() => `
  <p class="p">I corsi con il nuovo modello <b>non hanno manuali nella wiki né presentazioni</b>. La guida di ogni lezione si trova <b>all’interno della lezione stessa</b>, in Backoffice: ogni scheda attività contiene le proprie <b>note per il tutor</b> — lo scopo della scheda, la durata, che cosa fare e a che cosa prestare attenzione. Le vedi solo tu.</p>
  ${callout('warn', '📒', '<b>Leggi le note per il tutor prima di ogni lezione</b> — e controlla gli aggiornamenti. I corsi vengono migliorati continuamente, quindi una lezione può cambiare tra un gruppo e l’altro. La prima scheda di ogni lezione contiene le note più complete e di solito un breve video.')}
  <p class="p" style="margin-top:16px">Il percorso è uguale per tutti i corsi: non accedi ai contenuti del corso da Groups, ma da <b>Courses</b>.</p>
  <div class="grid3">
    <div class="ti"><span class="tie">📚</span><h3>Courses</h3><p>Apri la scheda del corso: area di attività, lingua, numero di lezioni e moduli.</p></div>
    <div class="ti"><span class="tie">🃏</span><h3>Assignments</h3><p>Scegli la lezione e vedrai le sue schede attività. Queste schede <b>sono</b> i contenuti della lezione.</p></div>
    <div class="ti"><span class="tie">📒</span><h3>Note per il tutor</h3><p>Apri una scheda: il riquadro arancione tratteggiato contiene le tue note. Subito sotto trovi ciò che vede lo studente.</p></div>
  </div>
  ${callout('tip', '🧭', 'Ora esploralo in prima persona. La simulazione riproduce Backoffice con uno dei corsi che seguono il nuovo modello: aprirai il corso, accederai alla prima lezione, scoprirai perché la guida allo studio è vuota e leggerai le note per il tutor della prima scheda.')}
  ${launch('🗂️', 'Simulazione 1 di 3', 'Simulazione Backoffice', 'Una riproduzione interattiva di Backoffice: apri il corso, trova le attività della lezione, scopri perché non c’è il link alla wiki e leggi le note per il tutor dentro una scheda.', CONFIG.BO_SIM, '🗂️ Apri la simulazione BO')}
  ${codeBox('boCode')}`,

classroom:() => `
  <p class="p">Una volta preparata la lezione, è il momento di tenerla. In Classroom non presenti più diapositive: apri le <b>stesse schede attività</b> che hai letto in Backoffice e le percorri insieme agli studenti. Questo funziona grazie a tre elementi.</p>
  <h3 class="subh">👁️ 1. Follow Mode: gli studenti ti seguono</h3>
  <p class="p">Con <b>Follow Mode</b> gli studenti vedono automaticamente la stessa scheda che hai aperto tu. <b>Non è una condivisione dello schermo</b>: ogni studente ha una copia della scheda su cui può lavorare — e le note per il tutor restano visibili solo a te. La attivi con l’interruttore <b>Lead the group</b>, che compare accanto a una scheda aperta. Prova:</p>
  <div class="card" id="fmDemo">
    <div class="fm-ctrl"><button class="lead-sw" id="fmSw"><i></i> Lead the group</button><button class="btn-g" id="fmNext">Scheda successiva →</button><span style="font-size:13px;color:var(--muted);font-weight:700" id="fmHint">Attiva l’interruttore, poi passa alla scheda successiva.</span></div>
    <div class="fm">
      <div class="screen"><div class="sc-h"><span>👩‍🏫 Il tuo schermo</span><span>Tutor</span></div><div class="sc-card" id="fmT"></div></div>
      <div class="screen"><div class="sc-h"><span>👧 Lo schermo di Sofia</span><span>Studente</span></div><div class="sc-card" id="fmS"></div></div>
    </div>
    <div class="fm-out" id="fmOut"></div>
  </div>
  <div class="grid3" style="margin-top:14px">${[
    ['➡️','Cambi scheda','Cambia anche per tutti gli studenti che ti seguono.'],
    ['🖱️','Scorri la pagina','Nelle schede interattive, la loro posizione si allinea alla tua.'],
    ['🕐','Qualcuno entra in ritardo','Arriva direttamente sulla scheda che hai aperto.'],
    ['🚪','Ti allontani','Gli studenti vedono un avviso che segnala la tua assenza; tornano a seguirti quando rientri.'],
    ['👥','Chi ti segue?','Un indicatore accanto a ogni nome mostra chi ti segue e chi lavora in autonomia.'],
    ['🔓','Nessun blocco','Uno studente può cliccare su «Work independently» e tornare con «Return».']
  ].map(x => `<div class="card" style="padding:16px"><div class="wh" style="margin-bottom:6px"><span style="font-size:26px">${x[0]}</span><b>${x[1]}</b></div><p class="p" style="margin:0;font-size:14.5px">${x[2]}</p></div>`).join('')}</div>

  <h3 class="subh">🖥️ 2. Follow Mode o condivisione dello schermo?</h3>
  <p class="p">In alcuni momenti continuerai a condividere lo schermo — per <b>mostrare</b> un passaggio in uno strumento, come l’editor di Scratch, o un risultato completo. La regola è semplice:</p>
  <div class="okbad">
    <div class="ok"><h3>👁️ Usa Follow Mode per le schede</h3><ul><li>Per guidare il gruppo lungo la lezione.</li><li>Ogni studente lavora nella propria copia.</li><li>Le tue note per il tutor restano private.</li></ul></div>
    <div class="bad"><h3>🖥️ Condividi lo schermo per le dimostrazioni</h3><ul><li>Per mostrare un passaggio nello strumento (Scratch, Sparks…).</li><li>Condividi <b>solo la scheda o la finestra dello strumento</b>.</li><li>Non condividere mai la scheda della lezione: le tue note sarebbero visibili.</li></ul></div>
  </div>

  <h3 class="subh">🧩 3. Attività interattive</h3>
  <p class="p">Molte schede sono interattive. Alcune salvano i progressi e il punteggio senza richiedere un clic sul pulsante «Submit», altre invece lo richiedono.</p>
  <p class="p">Nelle attività — <b>domande a scelta</b>, <b>campi di testo e formule</b> e <b>trascinamento</b> — il punteggio viene registrato automaticamente al completamento.</p>
  <div class="zoomtip"><span>🔍</span><div><b>Consiglio:</b> clicca su uno dei 3 video qui sotto per aprirlo in una finestra più grande. Potrai <b>ingrandire</b> (con i pulsanti + / −, la rotellina del mouse o un doppio clic) e trascinare per vedere ogni dettaglio.</div></div>
  <div class="vidpair">
    <figure class="card gifcard"><span class="gtag ok">✅ Salvato automaticamente</span>${zclip('images/result_good_EM.mp4', 'Salvato automaticamente')}<figcaption>Il risultato compare automaticamente nell’angolo in alto a destra.</figcaption></figure>
    <figure class="card gifcard"><span class="gtag ko">🔁 Una risposta sbagliata</span>${zclip('images/result_bad_EM.mp4', 'Una risposta sbagliata')}<figcaption>In caso di errore, puoi cliccare sull’icona «Redo» in alto a destra e riprovare.</figcaption></figure>
  </div>
  <p class="p" style="margin-top:18px">Per le attività che prevedono l’invio di testi, link o file, assicurati invece che gli studenti clicchino sul pulsante <b>«Send»</b>:</p>
  <figure class="card gifcard wide">${zclip('images/send_bottom.mp4', 'Il pulsante «Send»')}</figure>
  ${launch('🎥', 'Simulazione 2 di 3', 'Guida a Classroom', 'Una visita guidata a una lezione reale del nuovo modello in Classroom: le schede, le note per il tutor visibili solo a te, le note complete della prima scheda e Lead the group.', CONFIG.CLASS_SIM, '🎥 Apri la guida a Classroom')}
  ${codeBox('classCode')}`,

sparks:() => `
  <p class="p">L’ultimo tassello è lo spazio che ospita i progetti degli studenti: <b>Kodland Sparks</b>. È la nuova piattaforma dove gli studenti <b>realizzano</b> i propri progetti, li <b>pubblicano</b>, continuano a imparare tra una lezione e l’altra e ricevono feedback dai compagni e da un mentore IA. Qui si trova anche il portfolio che costruiscono durante il corso.</p>
  <div class="grid2">
    <div class="card"><div class="wh"><b>🔐 Come accedono gli studenti</b></div><p class="p" style="margin:0;font-size:15px">Gli studenti accedono con <b>un pulsante dalla piattaforma principale</b> (accesso unico) — non devono registrarsi separatamente.</p></div>
    <div class="card"><div class="wh"><b>🔑 Come accedi tu</b></div><p class="p" style="margin:0;font-size:15px">I tutor usano <b>credenziali separate</b>, diverse da quelle di Backoffice. Le fornisce il <b>reparto Operations o Teaching</b>.</p></div>
  </div>
  ${callout('warn', '⏳', '<b>Non puoi ancora provarlo in autonomia.</b> Finché non ricevi le credenziali, non puoi accedere a Kodland Sparks. Per questo trovi qui sotto una visita guidata: ti mostra che cosa contiene la piattaforma e che cosa possono farci gli studenti.')}
  <h3 class="subh">🧭 Che cosa fanno gli studenti in Sparks</h3>
  <div class="grid3">${[
    ['📰','Feed','Vedono i progetti dei compagni, reagiscono e leggono il feedback del mentore IA.'],
    ['📁','My projects','Tutto ciò che hanno salvato o pubblicato, in un unico posto.'],
    ['🚀','Publish project','Condividono un progetto completo, scelgono chi può vederlo e possono ottenere ricompense.'],
    ['🎨','Studio · Creative mode','Lo spazio in cui creano durante la lezione: giochi e app web, Python, Scratch, pixel art, animazioni, musica e skin.'],
    ['🏆','Studio · Challenges mode','Attività strutturate con verifica automatica — e cristalli come ricompensa.'],
    ['🤖','AI helper & AI tutor','Qui si trovano AI Buddy e il mentore IA: suggerimenti, idee e spiegazioni — l’IA propone, l’autore decide.']
  ].map(x => `<div class="ti" style="padding:18px"><span class="tie" style="font-size:46px">${x[0]}</span><h3>${x[1]}</h3><p>${x[2]}</p></div>`).join('')}</div>
  <h3 class="subh">💬 Il feedback in Sparks</h3>
  <p class="p">Non ci sono i classici Mi piace o commenti. Gli studenti lasciano invece <b>reazioni</b> (emoji), scrivono <b>recensioni</b> in tre campi — impressione generale, punti di forza e aspetti da migliorare — e possono seguirsi a vicenda. La gamification si basa su <b>cristalli → forzieri → ricompense</b>. Le recensioni dei tutor sono evidenziate, così gli studenti riconoscono il feedback ufficiale.</p>
  ${callout('tip', '🔗', '<b>Pubblicare su Sparks e inviare il link sulla piattaforma Kodland sono due passaggi distinti.</b> In molte lezioni gli studenti pubblicano il progetto e poi incollano il link in una scheda — ricorda loro di fare entrambe le cose.')}
  ${callout('tip', '🧭', 'Ora segui la visita guidata. È una riproduzione di Kodland Sparks: visiterai il Feed, pubblicherai un progetto, aprirai lo Studio e vedrai un progetto Python, uno Scratch e un disegno; concluderai con l’assistente IA e i cristalli.')}
  ${launch('⚡', 'Simulazione 3 di 3', 'Guida a Kodland Sparks', 'Una visita guidata alla piattaforma degli studenti: Feed, My projects, Publish project, Studio con tutti i tipi di progetto, assistente IA e ricompense.', CONFIG.SPARKS_SIM, '⚡ Apri la guida a Kodland Sparks')}
  ${codeBox('sparksCode')}`,

/* ---------------- Module 3 ---------------- */
structure:() => `
  <p class="p">Nei corsi con il nuovo modello, la lezione non è più una presentazione a grandi blocchi con una diapositiva che indica quando «riepilogare» o «concludere». È una sequenza di <b>schede attività</b> sulla piattaforma, ciascuna con i propri contenuti per lo studente e le proprie note per te. Questo comporta un cambiamento importante: <b>sei tu a gestire il ritmo della lezione, non una diapositiva.</b></p>
  <h3 class="subh">🏷️ Le etichette indicano il tipo di fase didattica</h3>
  <p class="p">Molte schede riportano un’etichetta nelle note per il tutor, come <b>(CORE)</b> o <b>(SUBMIT)</b>. Ti fanno capire a colpo d’occhio il tipo di momento didattico e quanto spazio lasciare all’autonomia dello studente. Toccale una alla volta:</p>
  <div class="grid4">${[['CORE','🧱','La parte centrale di costruzione del progetto.'],['SELF-CHECK','🪞','Lo studente verifica la propria comprensione.'],['AI-CREATE','🤖','L’unico momento in cui si usa l’IA — con un limite chiaro.'],['CHOICE/INTEREST','🎨','Una scelta personale: il proprio stile, la propria idea.'],['SUBMIT','📤','Qualcosa deve essere consegnato o pubblicato.'],['PEER-FEEDBACK','👥','I compagni commentano i lavori degli altri.'],['REFLECT','💭','Un momento per riflettere su ciò che si è imparato.'],['CHALLENGE','🏆','Una sfida aggiuntiva e facoltativa.'],['DEBUG','🐞','Un’attività mirata per trovare e correggere un bug.'],['SYSTEM-TEST','🧪','Verificare l’intero progetto dall’inizio alla fine.']].map(t => `<button class="oq" data-oq><b>${t[1]} ${t[0]}</b><span>${t[2]}</span></button>`).join('')}</div>`,

seeing:() => `
  <p class="p">Senza una diapositiva che te lo ricordi, mantenere la struttura della lezione dipende da te. Le valutazioni di qualità considerano la lezione nel suo insieme: <b>l’attività iniziale</b>, <b>l’obiettivo della lezione</b>, <b>la pratica</b>, <b>le domande</b> che poni, <b>il riepilogo</b>, <b>i compiti</b> e <b>l’anticipazione</b> della prossima lezione.</p>
  <p class="p">Le lezioni con il nuovo modello sono di solito vivaci e coinvolgenti. La sfida è mantenerne la struttura lungo il percorso, soprattutto all’inizio e alla fine:</p>
  <div class="okbad">
    <div class="ok"><h3>💚 Continua così</h3><ul><li>Coinvolgi più studenti.</li><li>Chiama gli studenti per nome.</li><li>Dedica tempo concreto alla pratica.</li></ul></div>
    <div class="bad"><h3>💗 Che cosa rafforzare</h3><ul><li>L’attività iniziale e i saluti.</li><li>Il controllo dei compiti.</li><li>Le domande che fanno spiegare il ragionamento agli studenti.</li><li>Il riepilogo finale.</li><li>L’anticipazione della prossima lezione.</li></ul></div>
  </div>
  <p class="p" style="margin-top:16px">Sono abitudini, e si possono sviluppare. Il resto del modulo te ne propone tre: un’apertura curata, domande sul ragionamento rivolte a singoli studenti e una routine di chiusura fissa.</p>`,

opening:() => `
  <p class="p">Un’apertura curata richiede solo pochi minuti e prepara tutto ciò che segue: gli studenti si sentono accolti, ricordano a che punto è il progetto, mostrano ciò che hanno fatto a casa e conoscono l’obiettivo di oggi. Si articola in quattro parti. Esplorale una alla volta, con frasi concrete da usare e un video di una lezione reale:</p>
  ${stc('open')}
  ${callout('tip', '⏱️', 'Sii breve: <b>circa 5–7 minuti</b> per tutte e quattro le parti. Creare un legame all’inizio rende la lezione più fluida, non più lenta.')}`,

reasoning:() => `
  <p class="p">A «È chiaro?» si risponde quasi sempre con un «sì» — e tu non scopri nulla. Le domande efficaci sono quelle che portano lo studente a <b>spiegare il proprio ragionamento</b>: perché succede qualcosa, come lo sa, che cosa cambierebbe se… Funzionano meglio quando le <b>rivolgi a uno studente specifico, chiamandolo per nome</b>.</p>
  <div class="card">
    <div class="wh"><b>Domanda chiusa o di ragionamento? Cambia e confronta</b><span class="tag">Prova</span></div>
    <div class="seg" data-cmp="questions"><button data-k="v" aria-pressed="true">😐 Chiusa</button><button data-k="s" aria-pressed="false">🧠 Di ragionamento</button></div>
    <div class="fbx" data-cmpout="questions"></div>
  </div>
  <h3 class="subh">🎯 Quali domande fanno ragionare? Decidi per ciascuna</h3>
  <div class="sorter" id="sorter">${[
    ['🙋','«Leo, come hai fatto a far sparire la moneta quando il giocatore la tocca?»','yes','<b>Sì.</b> Un nome più un «come»: Leo deve spiegare la logica con parole proprie.'],
    ['🙂','«Tutto bene? Possiamo continuare?»','no','<b>No.</b> Una domanda sì/no rivolta al gruppo — nessuno deve ragionare per rispondere.'],
    ['🔍','«Ana, secondo te che cosa succederà se togliamo questa riga? Prova e raccontacelo».','yes','<b>Sì.</b> Prevede, prova e spiega — il ciclo di apprendimento in una sola domanda.'],
    ['✅','«È chiaro come funziona il punteggio?»','no','<b>No.</b> Riceverai un «sì» che sia chiaro o meno. Chiedi invece a qualcuno di spiegarlo.']
  ].map(r => `<div class="srow" data-ans="${r[2]}"><span class="sei">${r[0]}</span><span class="stx">${r[1]}</span><span class="sbtns"><button data-pick="yes">🧠 Fa ragionare</button><button data-pick="no">😐 Non fa ragionare</button></span><span class="sfb">${r[3]}</span></div>`).join('')}</div>
  ${callout('good', '💡', 'Distribuisci le domande: studenti diversi, momenti diversi — durante il controllo iniziale, mentre costruiscono e nel riepilogo.')}`,

closing:() => `
  <p class="p">La fine della lezione viene spesso trascurata perché il tempo scade o perché sembra meno importante che terminare l’attività. Eppure è il momento in cui gli studenti esprimono ciò che hanno imparato, si incuriosiscono sulla prossima lezione e vanno via sapendo che cosa fare a casa. Con una buona gestione del tempo puoi garantirlo in ogni lezione: riserva gli <b>ultimi 5–7 minuti</b> a una <b>routine di chiusura fissa</b> e avviala in orario anche se l’attività non è finita. Vale per lezioni di qualunque durata: scegline una e trascina il cursore lungo la linea del tempo:</p>
  <div class="tline" id="tline">
    <div class="seg" id="tlLen" style="margin-bottom:12px"><button data-len="60" aria-pressed="true">⏱️ Lezione di 60 minuti</button><button data-len="90" aria-pressed="false">⏱️ Lezione di 90 minuti</button></div>
    <div style="display:flex;align-items:center;gap:14px;flex-wrap:wrap"><span class="clock" id="tlClock">0′</span><input type="range" min="0" max="60" value="0" id="tlRange" style="flex:1;min-width:220px" aria-label="Minute of the lesson"></div>
    <div class="tl-bar"><div class="tl-open" id="tlOpen">Apertura</div><div class="tl-main" id="tlMain">Schede: creare, esplorare, correggere, mostrare</div><div class="tl-close" id="tlClose">Chiusura</div><span class="tl-head" id="tlHead" style="left:0"></span></div>
    <div class="tl-scale" id="tlScale"></div>
    <div class="tl-out" id="tlOut"></div>
  </div>
  <p class="p" style="margin-top:18px">La routine ha tre passaggi. Esplorali uno alla volta, ciascuno con un video di una lezione reale:</p>
  ${stc('close')}
  ${callout('warn', '⏰', '<b>Un trucco che funziona:</b> imposta un timer che suoni <b>5–8 minuti prima della fine</b> della lezione. Quando suona, inizi a concludere, a qualunque punto tu sia. Una scheda incompleta si può riprendere nella prossima lezione o nei compiti.')}`,

metrics:() => `
  <div class="defn"><span class="de">📈</span><p><b>Le diapositive scompaiono, la struttura resta.</b> Ricorda che la struttura della lezione è strettamente legata a indicatori importanti come <b>la frequenza</b>, <b>la permanenza nel corso</b> e <b>la consegna dei compiti</b>. Ricordare i compiti, spiegarli e controllarli, svolgere un’attività iniziale e una chiusura, chiarire gli obiettivi e anticipare la prossima lezione contribuisce al coinvolgimento, alla continuità e alla frequenza degli studenti.</p></div>
  <h3 class="subh">Tre indicatori, tre abitudini concrete</h3>
  <div class="trio">
    <div class="ti"><span class="tie">🗓</span><h3>Presenze</h3><p>Registrale all’inizio, durante l’attività iniziale, mentre gli studenti si sistemano. Non rimandare alla fine, quando stai concludendo ed è facile dimenticarsene.</p></div>
    <div class="ti"><span class="tie">📚</span><h3>Compiti</h3><p>Ora che i compiti sono «la prossima versione dello stesso progetto», controllali durante la verifica della lezione precedente. Se uno studente non ha nulla, cogli il segnale per capire se si è bloccato su un problema tecnico, senza limitarti a registrare uno zero.</p></div>
    <div class="ti"><span class="tie">💚</span><h3>Permanenza nel corso</h3><p>Uno studente che smette di pubblicare su Sparks o di consegnare il lavoro di solito sta perdendo interesse prima ancora di smettere di frequentare. Questi due segnali sono il tuo primo campanello d’allarme.</p></div>
  </div>
  ${callout('warn', '⚠️', '<b>Ricorda:</b> nelle attività che prevedono l’invio di testi, link o file, il lavoro viene registrato solo quando gli studenti cliccano su <b>«Send»</b>. Anche una lezione apparentemente riuscita può risultare con zero attività completate. Inserisci questo promemoria nella routine di chiusura.')}`,

qcheck:() => `
  <p class="p">Ecco tutti i contenuti del modulo in un’unica checklist. Tienila accanto durante le prime lezioni, finché questi gesti diventano un’abitudine:</p>
  <div class="card"><div class="wh"><b>✅ La mia checklist per la qualità della lezione</b><span class="tag">Spunta le voci</span></div>
    <div class="ckgroup">☑️ Prima della lezione</div>
    <div class="cklist">${['Ho letto le note per il tutor di questa lezione in Backoffice.','Ho letto anche la lezione <b>successiva</b>, per creare aspettativa durante la chiusura.','Ho aperto il risultato completo che mostrerò all’inizio (video, GIF o progetto funzionante).','So qual è l’unico passaggio della lezione in cui è consentita l’IA e quali sono i limiti del suo utilizzo.','So dove trovare il modello di riserva se un progetto smette di funzionare.','Ho pianificato come registrare le presenze durante l’attività iniziale.','Prima di concludere ricorderò agli studenti di cliccare su <b>«Send»</b> nelle attività che lo richiedono.'].map((t, i) => `<button class="ck" data-ck="b${i}"><span class="ckb"></span><span>${t}</span></button>`).join('')}</div>
    <div class="ckgroup">🎬 Apertura</div>
    <div class="cklist">${['Saluto ogni studente per nome e propongo una breve attività iniziale.','Collego la lezione di oggi a quella precedente.','Controllo i compiti e cito un aspetto preciso riuscito bene.'].map((t, i) => `<button class="ck" data-ck="o${i}"><span class="ckb"></span><span>${t}</span></button>`).join('')}</div>
    <div class="ckgroup">🧠 Durante la lezione</div>
    <div class="cklist">${['Rivolgo domande sul ragionamento a singoli studenti, chiamandoli per nome.','Coinvolgo più studenti e dedico tempo concreto alla pratica.','Tengo d’occhio il tempo per iniziare la chiusura in orario.'].map((t, i) => `<button class="ck" data-ck="d${i}"><span class="ckb"></span><span>${t}</span></button>`).join('')}</div>
    <div class="ckgroup">🏁 Chiusura — ultimi 5–7 minuti</div>
    <div class="cklist">${['Sono gli studenti a riepilogare: dicono che cosa hanno imparato.','Propongo un’anticipazione motivante della prossima lezione.','Spiego i nuovi compiti e come consegnarli.'].map((t, i) => `<button class="ck" data-ck="c${i}"><span class="ckb"></span><span>${t}</span></button>`).join('')}</div>
  </div>`
};

/* >>> MODULE 0 START (generated block: edit texts here) */
CONTENT.zero = {
  "welcome_lead": "<b>Benvenuto/a!</b> Fai parte di questo lancio perché sai già insegnare e creare un legame con i ragazzi. Questa formazione parte da ciò che già fai bene. Non parte da zero, e nemmeno tu.",
  "how_h": "Come seguire questa formazione",
  "how_p": "Vai al tuo ritmo, con curiosità e non sotto pressione. Non devi memorizzare nulla né essere perfetto/a: l’obiettivo è sentirti a tuo agio con il metodo e sapere dove trovare ciò che ti serve. Un misto di entusiasmo e un pizzico di incertezza è del tutto naturale davanti a qualcosa di nuovo. Significa semplicemente che ci tieni a farlo bene.",
  "prep_h": "Per che cosa ti prepara questa formazione",
  "prep_intro": "Dopo questo modulo sulla mentalità, la formazione ti accompagna in tutto ciò che serve per le tue prime lezioni:",
  "prep": [
    "<b>Il nuovo modello:</b> come sono costruite le lezioni, come funziona il feedback e come guidare gli studenti quando usano l’AI.",
    "<b>Preparazione tecnica:</b> Backoffice e note per il tutor, Classroom con Follow Mode e Kodland Sparks, con tre simulazioni pratiche che puoi ripetere quante volte vuoi.",
    "<b>Qualità della lezione:</b> come è strutturata una lezione e le abitudini che la mantengono sui binari: un’apertura curata, domande che stimolano il ragionamento e una chiusura chiara.",
    "<b>Prompt per i tutor:</b> come scrivere un buon prompt e aiutare gli studenti a scrivere i propri.",
    "<b>Il tuo corso:</b> una breve formazione informativa sullo specifico corso che insegnerai.",
    "<b>Un test finale</b> che si sblocca quando completi il materiale."
  ],
  "sim": "<b>Non saltare i simulatori: è lì che costruisci la tua sicurezza.</b> Leggere di una nuova lezione è utile, ma è farla che te la rende familiare. I simulatori ti permettono di esercitare ogni passaggio reale di una lezione, dall’apertura nel Backoffice allo svolgimento in Classroom, in uno spazio sicuro dove nulla può andare storto. Ripetili quante volte ti serve e torna a rivederli prima della tua prima lezione dal vivo: a quel punto ogni clic ti verrà naturale.",
  "why_h": "Perché stiamo cambiando",
  "why": "Oggi i ragazzi imparano in modo diverso: vogliono costruire cose vere in fretta, provare, sbagliare, correggere e mostrare ciò che hanno creato. Il nostro nuovo Modello Educativo è costruito attorno a questo. Ogni lezione parte da un risultato finito, gli errori fanno parte del processo e l’AI viene usata in modo adatto a ogni età. Alcuni corsi sono completamente nuovi; altri sono corsi che già conosci, rinnovati con il nuovo metodo.",
  "means": "<b>Che cosa significa per te.</b> Le competenze che oggi fanno di te un buon tutor (spiegare con chiarezza, tenere i ragazzi coinvolti, accorgerti di chi ha bisogno di aiuto) sono esattamente quelle che servono ai nuovi corsi. Ciò che cambia è il metodo e la struttura, ed è ciò che ti dà questa formazione.",
  "ready_p1": "Durante la formazione potresti non vedere ancora le lezioni del corso: i contenuti vengono finalizzati a ridosso del lancio. <b>Ogni lezione sarà nel Backoffice prima dell’inizio del tuo corso.</b> La formazione ti prepara a tutto il resto, così sarai pronto/a nel momento in cui le lezioni arrivano.",
  "ready_p2": "Essere pronti non dipende dall’aver visto ogni lezione durante la formazione. Significa:",
  "ready_items": [
    "<b>Capisco il metodo:</b> come scorre una lezione e perché.",
    "<b>Conosco la struttura:</b> moduli, formato della lezione, dove si trova ogni elemento nel Backoffice.",
    "<b>Sono sicuro/a sull’aspetto tecnico:</b> Backoffice, Classroom e gli strumenti che uso in aula, esercitati nei simulatori finché risultano naturali.",
    "<b>Conosco la mia routine:</b> il contenuto della lezione ora si vede direttamente nel Backoffice, tutto in un unico posto, senza bisogno della Wiki. Leggere le note per il tutor prima di ogni lezione è una mia responsabilità.",
    "<b>So a chi chiedere:</b> prima il mio mentor regionale e il mio TL per gruppi e orari."
  ],
  "ready_perm": "<b>Concediti il permesso di essere di nuovo un/una principiante.</b> Anche il tutor più esperto insegna un corso nuovo per la prima volta una sola volta. Ai ragazzi chiediamo di dire «non funziona ancora, troviamo una strategia», e lo stesso vale per noi: le tue prime lezioni sono il tuo prototipo. Ognuna ti sembrerà più facile della precedente e ti sosterremo a ogni passo.",
  "ready_two": "<b>Due cose che la formazione spiega nel dettaglio.</b> Prima, e più importante: dove troverai da ora in poi i contenuti delle lezioni, le <b>Teacher Notes nel Backoffice, la tua nuova stella polare</b>. Seconda: come prepararti alla tua prima lezione. Entrambe sono spiegate chiaramente, passo dopo passo, più avanti nella formazione.",
  "never_p": "Il tuo mentor regionale conosce i nuovi corsi ed è lì per supportarti a ogni lancio. <b>Chiedere aiuto è ciò che fanno i professionisti:</b> è così che i bravi tutor diventano ottimi tutor. Non serve un problema né una segnalazione per scrivergli.",
  "mentor_h": "Il tuo mentor",
  "mentor_region": "Regione",
  "mentors": [
    [
      "Italia",
      "Gianfranco Barba"
    ]
  ],
  "coaching": "<b>Preferisci una sessione più lunga?</b> Accedi all’LMS con il tuo account Backoffice → <b>Coaching</b> → scegli uno slot e scrivi in una riga di cosa vorresti essere aiutato/a (per esempio: «Prima lezione di [corso]»).",
  "first_h": "Il tuo mentor è sempre il tuo primo contatto. Rivolgiti a lui per:",
  "first_items": [
    "Problemi di gestione della classe",
    "Domande su un nuovo corso o formato",
    "Supporto per condurre le lezioni con serenità",
    "Preparare insieme una lezione o un rapido controllo di sicurezza prima della tua prima classe"
  ],
  "tl": "Per gruppi e orari, contatta il tuo <b>TL</b>.",
  "notconf": "<b>Non ti senti sicuro/a, per qualsiasi motivo?</b> Scrivi un DM al tuo mentor. Basta così: nessun modulo, nessuna segnalazione, nessuna spiegazione.",
  "voices_p": "I nuovi corsi non nascono dal nulla: rispondono a ciò che tutor, studenti e famiglie ci hanno detto. Ecco una parte di ciò che abbiamo ascoltato e di ciò che è cambiato di conseguenza.",
  "tell_you": "Ci avete detto",
  "tell_so": "Quindi i nuovi corsi…",
  "rows": [
    [
      "Preparare una lezione richiede troppo tempo, tra le slide e una guida separata sulla Wiki.",
      "Mettono tutto in un unico posto: note per il tutor su ogni slide, un piano della lezione con i tempi e un breve video di presentazione sulla slide 1."
    ],
    [
      "Tenere tutto il gruppo sulla stessa slide è difficile.",
      "Usano il Follow Mode: gli studenti vedono esattamente la tua slide e le tue note restano nascoste."
    ],
    [
      "La difficoltà non sempre corrisponde all’età del gruppo.",
      "Sono costruiti per fasce d’età (8–9, 10–12, 13+) e in Matematica gli esercizi vanno dal semplice al complesso su livelli chiaramente indicati."
    ],
    [
      "I ragazzi perdono motivazione quando non vedono che cosa stanno costruendo.",
      "Partono ogni lezione dal risultato finito e gli studenti pubblicano il proprio progetto su Kodland Sparks, dove gli altri possono vederlo e reagire."
    ],
    [
      "È difficile capire chi ha davvero capito la lezione.",
      "Chiudono ogni lezione con una verifica dell’obiettivo e ogni compito consegnato viene tracciato, così vedi chi ha bisogno di aiuto."
    ]
  ],
  "new_courses": "<b>Alcuni corsi sono completamente nuovi e sei tra i primi a insegnarli.</b> Per questo la tua voce conta ancora di più: dopo le tue prime lezioni, racconta al tuo mentor che cosa ha funzionato e che cosa no. Il tuo feedback darà forma alla prossima versione.",
  "students_h": "Che cosa dicono gli studenti",
  "tutors_h": "Da tutor che l’hanno già insegnato",
  "voices": [ /* REAL student/parent messages go here: { text: "…", who: "Parent · 3D Modeling · LATAM", img: "images/xxx.png" (optional) } */ ],
  "tutors": [ /* OPTIONAL tutor quotes: { text: "…", who: "Tutor name" } */ ],
  "closing_h": "Sai perché stiamo cambiando, che cosa significa «essere pronti» e chi c’è per te.",
  "closing_p": "Ora tuffati nella formazione con curiosità: esercitati nei simulatori quante volte vuoi e goditi il fatto di essere tra i primi a portare qualcosa di nuovo ai nostri studenti.",
  "closing_dm": "Se in qualsiasi momento non ti senti sicuro/a, basta un DM al tuo mentor."
};
CONTENT.quiz.m0 = [
  {
    "q": "Stai seguendo la formazione e le lezioni del corso non sono ancora disponibili. Che cosa fai?",
    "o": [
      "Aspetto le lezioni prima di iniziare la formazione.",
      "Completo la formazione su metodo e struttura; le lezioni saranno nel Backoffice prima dell’inizio del corso.",
      "Cerco materiale simile sulla Wiki."
    ],
    "a": 1,
    "e": "Essere pronti non dipende dall’aver visto ogni lezione. La formazione copre metodo e struttura, e ogni lezione sarà nel Backoffice prima dell’inizio del corso."
  },
  {
    "q": "Pochi giorni prima della tua prima lezione non ti senti sicuro/a. Che cosa fai?",
    "o": [
      "Lo tengo per me e spero che vada bene.",
      "Scrivo un DM al mio mentor.",
      "Chiedo di essere tolto/a dal corso."
    ],
    "a": 1,
    "e": "Basta un DM al mentor: nessun modulo, nessuna segnalazione, nessuna spiegazione. Chiedere aiuto è ciò che fanno i professionisti."
  },
  {
    "q": "Vorresti aiuto per preparare la tua prima lezione. Qual è il modo più rapido?",
    "o": [
      "Scrivo un DM al mio mentor regionale o prenoto una sessione nell’LMS.",
      "Aspetto di ricevere una segnalazione.",
      "Chiedo un feedback al genitore di uno studente."
    ],
    "a": 0,
    "e": "Il mentor è sempre il tuo primo contatto. Non serve un problema né una segnalazione: scrivigli un DM o prenota uno slot di Coaching nell’LMS."
  },
  {
    "q": "Un passaggio della formazione non ti è ancora chiaro. Qual è la mossa migliore?",
    "o": [
      "Interrompo la formazione finché qualcuno non mi contatta.",
      "Ripeto il simulatore e, se resta poco chiaro, scrivo al mio mentor.",
      "Lo salto: lo capirò in classe."
    ],
    "a": 1,
    "e": "I simulatori sono uno spazio sicuro da ripetere quante volte serve. Se dopo non è ancora chiaro, il mentor è lì per aiutarti."
  },
  {
    "q": "La tua prima lezione non è andata come previsto. Quale mentalità è la più adatta?",
    "o": [
      "«Questo corso non fa per me.»",
      "«Non funziona ancora: annoto un miglioramento e ne parlo con il mio mentor.»",
      "«Aspetto che qualcun altro risolva.»"
    ],
    "a": 1,
    "e": "Le tue prime lezioni sono il tuo prototipo. Fai come chiediamo ai ragazzi: «non funziona ancora», annota un miglioramento e parlane con il mentor."
  }
];
CONTENT.modules.unshift({
  "id": "m0",
  "n": 0,
  "e": "💛",
  "color": "#F59E0B",
  "title": "Inizia da qui: preparati al lancio",
  "check": "quiz",
  "desc": "Perché stiamo cambiando, cosa significa «essere pronti» quando le lezioni non ci sono ancora, chi ti supporta e che cosa ci hanno detto tutor e studenti. Circa 20 minuti.",
  "obj": "Affronta questo lancio con sicurezza e serenità: saprai perché il formato cambia, che cosa significa davvero essere pronti e a chi rivolgerti ogni volta che ti serve aiuto.",
  "eyebrow": "Modulo 0 · Inizia da qui · circa 20 minuti",
  "offer": [
    [
      "💛",
      "Parti da ciò che già fai bene."
    ],
    [
      "✅",
      "Scopri cosa significa «essere pronti» prima che arrivino le lezioni."
    ],
    [
      "🤝",
      "Sappi esattamente a chi chiedere: prima il tuo mentor."
    ],
    [
      "🗣️",
      "Scopri come la voce di tutor e studenti ha plasmato i nuovi corsi."
    ]
  ],
  "sections": [
    [
      "welcome",
      "👋",
      "Benvenuto/a e perché cambiamo"
    ],
    [
      "ready",
      "✅",
      "Che cosa significa «essere pronti» adesso"
    ],
    [
      "never",
      "🤝",
      "Non sei mai solo/a"
    ],
    [
      "voices",
      "🗣️",
      "Costruito con la tua voce, amato dagli studenti"
    ],
    [
      "closing",
      "🚀",
      "Sei pronto/a per iniziare"
    ]
  ]
});
/* <<< MODULE 0 END */
