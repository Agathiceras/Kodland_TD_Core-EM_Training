window.CONTENT = { lang: 'it' };
/* ============================================================
   Backoffice simulation · ENGLISH content
   Translate only the text inside quotes / backticks. Keep HTML tags, ${...} placeholders, keys, ids, file names and URLs unchanged.
   ============================================================ */

/* ---------- PAGE CHROME, BO SCREENS, TOASTS ---------- */
CONTENT.ui = {
  pageTitle:'Nuovo modello didattico — Simulazione BO — Formazione Kodland',
  simBadge:'🧪 SIMULAZIONE — Formazione Kodland (dati fittizi)',
  tourBtn:'🚀 Avvia il percorso guidato',
  tourMinimize:'Riduci ▾', tourResume:'📍 Riprendi il percorso guidato',
  stepOf:'Passaggio {n} di {total}', nextArrow:'Avanti →', finish:'Termina ✓',
  groupsTitle:'Groups', tabExtra:'Extra Lessons', tabParallel:'Parallel Groups', tabRegular:'Regular Groups',
  emptyRegular:'Non ci sono gruppi da mostrare in questa simulazione — apri <b>Courses</b> nella barra laterale.',
  colID:'ID', colTitle:'Titolo', colTutor:'Tutor', colType:'Tipo', colCurrentCourse:'Corso attuale', colStart:'Inizio',
  colStudentsPaid:'Studenti/Paganti', colPreviousLesson:'Lezione precedente', colNextLesson:'Prossima lezione', colPremium:'Premium',
  containerType:'Gruppo', no:'No', yes:'Sì',
  itemsPage100_1:'Elementi per pagina: 100 &nbsp;|&nbsp; 1-1 di 1', itemsPage10_4:'Elementi per pagina: 10 &nbsp;|&nbsp; 1-4 di 4',
  itemsPage100_19:'Elementi per pagina: 100 &nbsp;|&nbsp; 1-9 di 9',
  backToGroups:'Torna a Groups', backToCourses:'Torna a Courses', backToAssignments:'Torna a Assignments',
  tutorLabel:'Tutor:', openConsoleTip:'Open console', colLessonTime:'Orario della lezione', colCourse:'Corso', colNextTopic:'Argomento della prossima lezione',
  simOpenCourseFromDetail:'Puoi aprire la scheda del corso anche da qui',
  teacherName:'Demo Teacher', teacherCountry:'🌎 LatAm',
  profileTitle:'Profile', teacherCoursesH:'Teacher courses', availabilityH:'Availability hours', notAssigned:'Non assegnato',
  groupsTabLbl:'Groups', scheduleTabLbl:'Schedule', regularGroupsNote:'La lista dei tuoi gruppi.',
  currentWeek:'Current Week', available:'Disponibile',
  days:['Lunedì','Martedì','Mercoledì','Giovedì','Venerdì','Sabato','Domenica'],
  coursesTitle:'Courses', colBusinessBranch:'Settore', colActive:'Attivo', colNumberOfLessons:'Numero di lezioni',
  badgeActive:'Attivo', fieldBranch:'Settore: ENG', fieldLanguage:'Lingua: inglese 🇬🇧', fieldCourseType:'Tipo di corso: corsi a pagamento',
  fieldCourseGroup:'Gruppo di corsi: Code & Game lvl 1', fieldLessons:'Numero di lezioni: 40', fieldModules:'Numero di moduli: 10',
  fieldExcluded:'Escluso dalla sovraprenotazione: No', fieldCertificate:'Certificato: —',
  lessonsTab:'Lessons', assignmentsTab:'Assignments', moduleFirstSteps:'M1. Creator Lab: first missions', viewAssignments:'View assignments →',
  colNo:'Nº', colActions:'Azioni',
  lessonSelectLbl:'Lezione', lessonOption:'L1. Dance Party: bringing the stage to life',
  inClassH:'In-class assignments', homeworkH:'Homework assignments', studyGuidesH:'Study guides',
  colNumber:'Numero', colAssignmentTitle:'Titolo dell’attività', colTheory:'Teoria', colProject:'Progetto', colMaxScore:'Punteggio massimo',
  interactive:'INTERATTIVO', noData:'Nessun dato disponibile',
  noWikiNote:'Qui non ci sono link alla wiki, ed è una scelta voluta. Nei corsi del nuovo modello didattico, la guida per il tutor si trova nelle attività stesse, sotto forma di Teacher Notes, anziché in un documento wiki separato.',
  modalGroups:'GROUPS', modalExit:'Exit', modalOpenConsole:'Open Console',
  toastConsoleDetail:'🔗 Questo pulsante apre il link alla Classroom del gruppo.',
  toastConsoleModal:'🔗 È lo stesso link alla Classroom, accessibile da Schedule.',
  toastSimClick:'🧪 Questa è una simulazione — nel BO reale, questa azione servirebbe a: «{label}».',
  toastBlocked:'👉 Segui il passaggio evidenziato per continuare — al primo accesso è necessario completare il percorso guidato.',
  reflect:'🎉 <strong>Percorso guidato completato!</strong> Ora sai come aprire un corso del nuovo modello da Courses, dove trovare lezioni e attività, perché non c’è un link alla wiki e dove trovare le Teacher Notes in ogni attività. Puoi continuare a esplorare liberamente questa replica.',
  /* Assignment titles in the "In-class assignments" table (same order as the rows) */
  inClass:['Inizia la prima missione di Creator Lab! 💃','Benvenuti a Creator Lab! 👋','Conosciamoci! 🎤','Il patto del team creativo 🤝','Verifica la connessione 📡','Che cos’è Creator Lab? ✨','Scarica e apri il progetto 📥','Controlla cosa funziona già 🔎','Scopri come funzionano i blocchi 🧩'],
  homework:[]
};

/* ---------- LESSON VIEWER (Teacher Note + student card) ---------- */
CONTENT.lesson = {
  lessonCrumb:'My courses &gt; Inizia la prima missione di Creator Lab...', teacherNoteBadge:'👁 Teacher Note — questo riquadro è visibile solo ai tutor',
  lessonTitle:'Preparazione alla lezione · Dance Party: bringing the stage to life',
  hOverview:'Panoramica della lezione',
  pOverview:'Questa è la prima lezione del programma Code & Game lvl 1 (Creator Lab: Games and AI, 8–9 anni). Gli studenti scoprono Creator Lab, esplorano un prototipo già pronto in Scratch e creano il proprio spettacolo interattivo Dance Party sulla piattaforma Kodland Sparks. L’obiettivo principale è comprendere la relazione «evento → azione → risultato», ottenere rapidamente un progetto funzionante e usare l’IA in modo sicuro come assistente creativo.',
  hMission:'La missione nella storia della lezione',
  pMission:'Gli studenti entrano nel laboratorio creativo segreto Creator Lab. La loro prima missione è «Dare vita al palco digitale»: usare il codice e l’IA per creare uno spettacolo di danza in cui i tasti attivano movimenti, suoni, cambi di costume ed effetti visivi.',
  hGoal:'Obiettivo principale della lezione',
  pGoal:'Aiutare ogni studente a creare uno spettacolo interattivo personalizzato e a spiegare con parole semplici come un evento — la pressione di un tasto — attivi un’azione del personaggio e produca un risultato visibile.',
  hResult:'Risultato atteso',
  resultItems:['Il progetto Dance Party si avvia e funziona in Scratch all’interno di Kodland Sparks.','Lo spettacolo include un personaggio e una musica scelti dallo studente, oltre a uno sfondo creato con l’aiuto dell’IA.','Il personaggio reagisce alla pressione di un tasto con un movimento, un cambio di costume, un suono o un effetto.','Lo studente presenta il proprio progetto e spiega almeno una relazione «evento → azione → risultato».'],
  calloutLbl:'Prima della lezione', callout:'Guarda il video qui sotto e leggi le note di ogni scheda: la guida per tutta la lezione si trova qui, anziché in una wiki.',
  videoTag:'LEZIONE 1', videoTitle:'Creator Lab: Dance Party — su cosa concentrarsi',
  videoDesc:'La prima lezione spiegata al tutor: l’obiettivo, il percorso deduttivo e i momenti a cui prestare attenzione. ▶',
  hRole:'Il ruolo del tutor',
  pRole1:'Introduci la storia di Creator Lab e mostra lo spettacolo di danza completo come esempio del risultato finale. Guida gli studenti nell’esplorazione del prototipo, nella scelta del personaggio, della musica e dello sfondo generato con l’IA, fino alla creazione di almeno due reazioni a tasti diversi.',
  pRole2:'Aiuta gli studenti con domande di chiarimento e brevi suggerimenti. Valorizza la creatività, le scelte autonome e la capacità di correggere gli errori. Supervisiona l’uso sicuro di Sandbox Spark e AI Buddy, <b>senza lasciare che l’IA crei le meccaniche al posto dello studente.</b>',
  hFocus:'Approccio metodologico',
  pFocus1:'Inizia mostrando il risultato finale ed esplorando il prototipo già pronto. Introduci la teoria attraverso l’osservazione: lo studente preme un tasto, osserva la reazione del personaggio e ricava la relazione «evento → azione → risultato».',
  pFocus2:'Segui il ciclo di apprendimento: <b>obiettivo → tentativo → difficoltà → supporto → miglioramento → presentazione → riflessione.</b> Presenta gli errori come una parte normale del processo creativo.',
  pFocus3:'Lascia che lo studente scelga il personaggio, la musica, i movimenti, gli effetti, come formulare la richiesta all’IA e lo sfondo generato. Le decisioni finali sul progetto devono essere sue.',
  hImportant:'Punti importanti',
  importantItems:['Usa istruzioni brevi, molti supporti visivi e una sola attività per scheda.','Verifica che lo studente abbia aggiunto almeno due reazioni diverse alla pressione dei tasti e le abbia provate entrambe.','Non aggiungere punteggi, condizioni di vittoria o sconfitta, variabili, condizioni complesse, liste, cloni o messaggi tra sprite.','Verifica che le richieste all’IA non contengano dati personali e vengano create solo nell’ambiente sicuro di Kodland Spark.'],
  hEnding:'Conclusione della lezione',
  pEnding:'Dedica qualche minuto alla presentazione dei progetti. Chiedi agli studenti di spiegare quale tasto attiva l’azione scelta e di dare un riscontro usando questa formula: «Mi è piaciuto… Aggiungerei…». Concludi con un’autoverifica del progetto.',
  hNext:'Prossima lezione',
  pNext:'Nella lezione M01L02, «Portal Guardian: the hero and the crystals», gli studenti inizieranno a creare la loro prima meccanica di gioco: muovere il personaggio e raccogliere oggetti.',
  studentTitle:'Inizia la prima missione di Creator Lab! 💃',
  studentLead:'Darai vita a un palco digitale e creerai il tuo spettacolo di danza, che reagirà quando premi tasti diversi.',
  hEquip:'⌨️ Controlla l’attrezzatura', equipItems:['Controlla la tastiera: la userai per controllare lo spettacolo di danza.'],
  hSpace:'✨ Prepara il tuo spazio di lavoro', spaceItems:['Siediti in modo da poter lavorare comodamente al progetto e usare la tastiera.','Preparati a scegliere il personaggio, la musica, i movimenti e lo sfondo del tuo palco.'],
  tipLbl:'💡 La missione di oggi', tipBody:'Esplora uno spettacolo di danza già funzionante, poi personalizzalo con il tuo personaggio, la tua musica, il tuo sfondo e i tuoi movimenti.'
};

/* ---------- GUIDED TOUR STEPS (same order as STEPS in the page) ---------- */
CONTENT.steps = [
  {title:'1 · Apri il corso',body:'Per vedere i contenuti di un corso, apri <b>Courses</b> anziché Groups. Fai clic su <b>[2063] Code &amp; Game. Level 1</b>.'},
  {title:'2 · La scheda del corso',body:'Settore, lingua, numero di lezioni e moduli: sono gli stessi campi presenti in tutti i corsi. Il nuovo modello non cambia il modo in cui un corso viene registrato in BO.'},
  {title:'3 · Apri Assignments',body:'Fai clic sulla scheda <b>Assignments</b>.'},
  {title:'4 · Le attività della lezione',body:'Queste schede interattive costituiscono il contenuto della lezione: istruzioni, suggerimenti, immagini e video sono tutti all’interno delle schede. Non c’è una presentazione separata da usare durante la lezione.'},
  {title:'5 · Il link alla wiki manca per scelta',body:'La tabella <b>Study guides</b> è vuota. Non è un errore: nel nuovo modello, la guida per il tutor si trova nelle attività stesse, sotto forma di Teacher Notes, anziché in un documento wiki separato.'},
  {title:'6 · Apri la prima attività',body:'Fai clic su <b>Inizia la prima missione di Creator Lab!</b> per vedere come si presenta una Teacher Note all’interno di un’attività.'},
  {title:'7 · La nota per il tutor è dentro la scheda',body:'Non c’è una scheda separata per il tutor: tutti i contenuti si trovano nella stessa scheda da scorrere. Questo riquadro con il bordo arancione tratteggiato è una <b>Teacher Note</b>. La prima scheda di una lezione contiene la nota più completa: panoramica, missione nella storia, obiettivo, ruolo del tutor, metodo, punti importanti, conclusione e prossima lezione. Questo riquadro è visibile solo ai tutor.'},
  {title:'8 · Scorri verso il basso: cosa vede lo studente',body:'Subito sotto, nella stessa scheda, trovi ciò che vede lo studente: la missione e la lista dei preparativi. Non ci sono Teacher Notes né pulsanti per mostrarle o nasconderle: la piattaforma non mostra mai quel riquadro agli account degli studenti.'}
];

/* ---------- FINISH SCREEN (completion code overlay) ---------- */
CONTENT.done = {
  title:'Simulazione completata!',
  body:'Hai completato il percorso guidato del BO: hai imparato ad aprire un corso del nuovo modello e le sue attività, hai scoperto perché non c’è una wiki e dove trovare le Teacher Notes in ogni attività.',
  codeLabel:'🔑 Il tuo codice di completamento',
  codeHint:'Inseriscilo nella formazione per completare questa simulazione.',
  nextStep:'<b>Prossimo passo:</b> copia il codice, chiudi questa scheda e torna alla formazione.',
  stay:'Continua a esplorare',
  close:'Chiudi e torna alla formazione',
  closedMsg:'<b>Ora puoi chiudere questa scheda</b> e continuare nella scheda della formazione.'
};
