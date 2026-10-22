/* ============================================================
   EM lesson guide (Classroom) · Minecraft course (Craftforge, ages 8–9) · BASE FILE (Brazil)
   - Guide texts (CONTENT.ui, welcome, guide, finish): in ENGLISH, to be translated.
   - Lesson cards (CONTENT.activities): in PORTUGUESE, copied from the lesson file.
   Other languages: copy this file as content-xx.js, set lang / media / dir, translate the guide
   texts and replace the cards with the lesson of that language.
   Keep HTML tags, ${...} code, keys, ids and file names unchanged.
   ============================================================ */
window.CONTENT = { lang: 'it' };
CONTENT.media = 'Media_Minecraft_ITA/';   // this language's screenshots (the shared illustrations are in Media_Minecraft_COMMON/)
CONTENT.video = '';                       // Google Drive /preview link of the first card's video ('' = placeholder)
CONTENT.dir = 'ltr';                      // 'rtl' for Arabic

/* =========================================================
   INTERFACE STRINGS (page title, replicated Classroom, guide card)
   ========================================================= */
CONTENT.ui = {
  title: `Guida alla lezione EM · Minecraft`,
  // Classroom header
  headerTitle: `Craftforge · Lezione`,
  online: `2 online`,
  guideChip: `Guida alla lezione EM`,
  leave: `Esci`,
  // Classroom toolbar (tooltips included)
  classroom: `Classroom`,
  assignments: `Assignments`,
  prevTask: `Attività precedente`,
  nextTask: `Attività successiva`,
  leadGroup: 'Lead the group',
  endSession: `Termina la sessione`,
  // Video tiles
  student: `Sofia`,
  tutorInitial: `T`,
  tutorYou: `Tutor (tu)`,
  following: `Segue il tutor`,
  // Lesson platform header shown inside Assignments
  platformLang: `IT ˅`,
  platformUser: `Tutor`,
  // Shared pieces of the lesson cards
  teacherNotes: `Note per il tutor`,
  submit: `✔ Send`,
  choose: `Scegli…`,
  uploadFile: `Allega un file`,
  videoSoon: `Video della lezione`,
  // Guide card (coach)
  coachStep: (n, total) => `Guida alla lezione EM · ${n}/${total}`,
  next: `Avanti →`,
  clickHint: `👆 Fai clic sull’elemento evidenziato`,
  openSections: (opened, total) => `Apri tutte le sezioni (${opened}/${total})`,
  scrollEndNotes: `Scorri fino alla fine delle note`,
  scrollEndCard: `Scorri fino alla fine della scheda`
};

/* =========================================================
   WELCOME PAGE
   ========================================================= */
CONTENT.welcome = {
  kicker: `Nuovo modello educativo · Formazione tutor`,
  title: `La <span>guida</span> alla lezione EM`,
  lead: `Questa guida ti mostra come si svolge una lezione del <b>nuovo modello educativo (EM)</b> in Classroom. Utilizza le prime schede di una vera lezione EM del corso Minecraft — <b>Craftforge, Lezione 1: La prima scintilla</b> — con Sofia, una studentessa già presente in Classroom.`,
  seeTitle: `Cosa vedrai`,
  see: [
    `Come è organizzata una <b>lezione EM</b>: una serie di schede, con tutte le indicazioni all’interno della lezione.`,
    `Cosa vede il <b>tutor</b> e cosa vede <b>Sofia</b>: le <b>Note per il tutor</b> si trovano in ogni scheda e sono visibili solo al tutor.`,
    `Le <b>prime Note per il tutor</b>, le più dettagliate della lezione: la storia, l’obiettivo, il tuo ruolo, i tempi e, nella prima lezione di un corso, un video esplicativo.`,
    `Come usare <b>Lead the group</b> per far sì che gli studenti seguano la scheda che apri.`
  ],
  howTitle: `Come usare la guida`,
  howText: `Questa è una guida: segui i passaggi evidenziati e fai clic dove indicato. Non ci sono decisioni da prendere né penalità. Puoi ripeterla tutte le volte che vuoi.`,
  start: `INIZIA LA GUIDA →`
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
  { title:`Panoramica della lezione: Il primo fuoco`, html:
    tnotes(`
  <h1>Preparati alla lezione: La prima scintilla</h1>
  <h2>Panoramica della lezione</h2>
  <p>Prima lezione del corso per bambini di 8–9 anni. Il mondo si è spento dopo il <strong>Guasto</strong>: i colori sono spariti, agli abitanti sono stati rubati i volti e tutto è rimasto immobile e grigio. Lo studente è un nuovo <strong>crafter</strong>, chiamato in questo mondo. In 60 minuti riporta in vita il primo pezzetto di mondo: <strong>forgia il proprio volto</strong> (skin) e <strong>si sistema sull&apos;isola segreta</strong> (costruisce un rifugio), dove lo guida Scintilla, l&apos;ultima scintilla vivente della Forgia.</p>
  <p>Percorso: la chiave del mondo (installazione del launcher) → forgiare il volto nello Studio skin → indossarlo → entrare nel mondo con il proprio aspetto: foresta innevata ai confini del mondo → sotterraneo → rovine del caos → ponte degli ingegneri → villaggio dei sopravvissuti → isola segreta → costruire il proprio rifugio sull&apos;isola → parata di ciò che è tornato in vita.</p>
  ` +
    spoiler(`Missione narrativa della lezione`, `
      <p>Il Guasto ha spento il mondo e rubato i volti degli abitanti. Scintilla, l&apos;ultima scintilla vivente della Grande Forgia, è sopravvissuta al Guasto, ha trovato un nuovo crafter e condivide con lui la sua luce. Il compito del crafter è forgiare il proprio volto, percorrere il sentiero verso il mondo vivo e costruire un rifugio sull&apos;isola deserta: una base per le sfide future. Ogni colore e ogni blocco fanno arretrare il Guasto di un passo.</p>
    `) +
    spoiler(`Obiettivo principale della lezione`, `
      <p>Guidare ogni studente attraverso il ciclo completo del suo primo risultato: inventare un crafter, disegnare una skin direttamente nel launcher, indossarla, percorrere il sentiero fino all&apos;isola, costruire il proprio rifugio e mostrare il risultato al gruppo.</p>
    `) +
    spoiler(`Risultato fondamentale`, ul([`
          <p>La skin è diversa da Steve/Alex grigio e <strong>indossata</strong> con il pulsante Wear: lo studente entra nel mondo con il proprio crafter.</p>
        `, `
          <p>Sull&apos;isola c&apos;è un rifugio nel punto scelto dallo studente: pareti, tetto, ingresso, un dettaglio e un cartello con il nickname.</p>
        `, `
          <p>Lo studente ha mostrato il risultato e ha detto che cosa è «tornato in vita».</p>
        `])) +
    video() +
    `
  <h2>Ruolo dell&apos;insegnante</h2>
  <p>Siete i narratori e le guide della storia, non dei personaggi. Create un&apos;atmosfera calda e avventurosa e raccontate la storia con parole vostre: il mondo si è spento, il crafter è atteso, ogni passo riporta il mondo in vita. Scintilla, una piccola luce vivente che accompagna lo studente, è l&apos;eroina della storia: vive nei testi delle schede e parla allo studente da lì. Non serve interpretarne la voce; se volete, leggete le sue battute sulle schede con un tono caldo e gioioso. Iniziate con le presentazioni, l&apos;accordo dei crafter, il controllo della connessione e l&apos;installazione del launcher. Avviate subito il download del gioco, che proseguirà in background. Forgiate il volto nello Studio skin e fate clic su <strong>Wear</strong>: entrate nel mondo già con il vostro aspetto. Mostrate alla classe l&apos;immagine finale: un personaggio grigio e un&apos;isola vuota, poi come prendono vita. Guidate la classe lungo il percorso (sotterraneo → rovine del caos → ponte → villaggio → isola) condividendo il vostro schermo: il percorso è uguale per tutti. Mantenete il ritmo con checkpoint come: «Siete arrivati? Scrivete un + in chat».</p>
  ` +
    spoiler(`Tempi della lezione`, `
      <table responsive="scroll" striped="true">
        <colgroup>
          <col>
          <col>
          <col>
        </colgroup>
        <tbody>
          <tr>
            <th colspan="1" rowspan="1">
              <p>Parte</p>
            </th>
            <th colspan="1" rowspan="1">
              <p>Scheda</p>
            </th>
            <th colspan="1" rowspan="1">
              <p>Tempo</p>
            </th>
          </tr>
          <tr>
            <td colspan="1" rowspan="1">
              <p>Introduzione</p>
            </td>
            <td colspan="1" rowspan="1">
              <p>Il mondo ti chiama 🔥</p>
            </td>
            <td colspan="1" rowspan="1">
              <p>2 min</p>
            </td>
          </tr>
          <tr>
            <td colspan="1" rowspan="1">
              <p></p>
            </td>
            <td colspan="1" rowspan="1">
              <p>Il Bug ama chi si arrende 🤝</p>
            </td>
            <td colspan="1" rowspan="1">
              <p>2 min</p>
            </td>
          </tr>
          <tr>
            <td colspan="1" rowspan="1">
              <p></p>
            </td>
            <td colspan="1" rowspan="1">
              <p>Prima di partire 🎧</p>
            </td>
            <td colspan="1" rowspan="1">
              <p>2 min</p>
            </td>
          </tr>
          <tr>
            <td colspan="1" rowspan="1">
              <p></p>
            </td>
            <td colspan="1" rowspan="1">
              <p>La chiave che ti aspettava 🗝️</p>
            </td>
            <td colspan="1" rowspan="1">
              <p>6 min</p>
            </td>
          </tr>
          <tr>
            <td colspan="1" rowspan="1">
              <p></p>
            </td>
            <td colspan="1" rowspan="1">
              <p>Raduna la squadra 🛠️</p>
            </td>
            <td colspan="1" rowspan="1">
              <p>3 min</p>
            </td>
          </tr>
          <tr>
            <td colspan="1" rowspan="1">
              <p>Parte centrale</p>
            </td>
            <td colspan="1" rowspan="1">
              <p>Qui prendono forma i volti 🎨</p>
            </td>
            <td colspan="1" rowspan="1">
              <p>3 min</p>
            </td>
          </tr>
          <tr>
            <td colspan="1" rowspan="1">
              <p></p>
            </td>
            <td colspan="1" rowspan="1">
              <p>Non sei più grigio 🧑‍🎨</p>
            </td>
            <td colspan="1" rowspan="1">
              <p>7 min</p>
            </td>
          </tr>
          <tr>
            <td colspan="1" rowspan="1">
              <p></p>
            </td>
            <td colspan="1" rowspan="1">
              <p>Il mondo ti riconoscerà ✨</p>
            </td>
            <td colspan="1" rowspan="1">
              <p>4 min</p>
            </td>
          </tr>
          <tr>
            <td colspan="1" rowspan="1">
              <p></p>
            </td>
            <td colspan="1" rowspan="1">
              <p>Ai confini del mondo 🧭</p>
            </td>
            <td colspan="1" rowspan="1">
              <p>8 min</p>
            </td>
          </tr>
          <tr>
            <td colspan="1" rowspan="1">
              <p></p>
            </td>
            <td colspan="1" rowspan="1">
              <p>Tre indovinelli per una pausa 🎲</p>
            </td>
            <td colspan="1" rowspan="1">
              <p>4 min</p>
            </td>
          </tr>
          <tr>
            <td colspan="1" rowspan="1">
              <p></p>
            </td>
            <td colspan="1" rowspan="1">
              <p>Se è senza padrone, è tua 🏠</p>
            </td>
            <td colspan="1" rowspan="1">
              <p>10 min</p>
            </td>
          </tr>
          <tr>
            <td colspan="1" rowspan="1">
              <p>Finale</p>
            </td>
            <td colspan="1" rowspan="1">
              <p>Quante luci si sono accese 🎉</p>
            </td>
            <td colspan="1" rowspan="1">
              <p>5 min</p>
            </td>
          </tr>
          <tr>
            <td colspan="1" rowspan="1">
              <p></p>
            </td>
            <td colspan="1" rowspan="1">
              <p>Il mondo respira di nuovo ✨</p>
            </td>
            <td colspan="1" rowspan="1">
              <p>2 min</p>
            </td>
          </tr>
          <tr>
            <td colspan="1" rowspan="1">
              <p></p>
            </td>
            <td colspan="1" rowspan="1">
              <p>Porta con te una scintilla ✨</p>
            </td>
            <td colspan="1" rowspan="1">
              <p>2 min</p>
            </td>
          </tr>
        </tbody>
      </table>
    `) +
    spoiler(`Tempi: punti chiave e rischi`, ul([`
          <p><strong>Dove si perde tempo:</strong> «Crea il tuo volto» (7), «Il sentiero nel dungeon» (8) e «Dai vita all&apos;isola» (10). Regola: lo skin deve essere personale, non perfetto; nel sentiero seguite i checkpoint, senza esplorare liberamente; per il rifugio bastano 4 caratteristiche.</p>
        `, `
          <p><strong>Caricamento del gioco in sottofondo:</strong> nella scheda «La chiave del mondo» è importante che per tutti <em>sia iniziato</em> il caricamento, non che sia terminato. Poi continuerà da solo mentre fate conoscenza; recuperate chi è rimasto indietro nella scheda del sentiero.</p>
        `, `
          <p><strong>La trappola principale:</strong> uno studente disegna lo skin e pensa di aver finito. L&apos;ordine della lezione è: disegna → pulsante verde <strong>Wear</strong> («Done!») → solo dopo entra nel mondo. Chi entra senza aver premuto Wear deve uscire e rientrare.</p>
        `, `
          <p><strong>Mostra obbligatoria:</strong> sul tuo schermo mostra il «prima/dopo»: l&apos;avatar grigio è diventato personale e l&apos;isola vuota ha preso vita.</p>
        `, `
          <p><strong>Differenziazione:</strong> per chi procede più lentamente: il minimo indispensabile (cambiare colore ai vestiti + una casetta con pareti, porta e torcia); per chi procede più velocemente: il mestiere del crafter nello skin e un dettaglio in più nel rifugio.</p>
        `])) +
    `
  <h2>Finale della lezione</h2>
  <p>Parata del mondo che riprende vita: a turno, ogni studente condivide lo schermo e mostra il proprio crafter e il rifugio sull&apos;isola; uno studente risponde: «Mi è piaciuto che…». Alla fine, sottolinea che il mondo ha iniziato a rinascere grazie agli studenti. Poi fai un breve briefing sui compiti a casa: spiegali a voce mentre tutti sono ancora collegati e solo dopo congeda il gruppo.</p>
  <h3>Come passo successivo, consulta le note per l&apos;insegnante in ogni scheda della lezione.</h3>
`, 'tn-first') +
    `
<h1>La prima fiamma 🔥</h1>
<blockquote>
  <p>Il mondo si è spento. Il Guasto gli ha rubato i colori e i volti: tutti sono diventati figure grigie e uguali. Ma finché brilla anche una sola scintilla, il mondo si può forgiare di nuovo. Oggi sei un crafter e comincerai da te.</p>
</blockquote>
<h2>Controlla la tua attrezzatura</h2>
` +
    ul([`
    <p>La videocamera e il microfono funzionano.</p>
  `, `
    <p>Puoi condividere lo schermo.</p>
  `]) +
    `
<h2>Prepara il tuo spazio di lavoro</h2>
` +
    ul([`
    <p>Chiudi le schede che non ti servono.</p>
  `, `
    <p>Tieni pronta la link al launcher dell&apos;insegnante: lo installeremo insieme.</p>
  `, `
    <p>Immagina come sarà il tuo crafter: il colore, il carattere e un dettaglio speciale.</p>
  `])
  },
  { title:`Il mondo ti chiama 🔥`, html:
    banner(C(`e3e62541-c6c6-49a6-b354-6aee1cc44cd4.png`)) +
    `
<h1>Ti hanno chiamato 🔥</h1>
<blockquote>
  <p>Lontano da qui, un intero mondo si è spento e ha bisogno aiuto. Ha chiamato proprio te. Oggi entrerai in quel mondo e accenderai lì la prima fiamma. Al tuo fianco, lungo tutto il cammino, ci sarà Scintilla, la tua fedele lucina.</p>
</blockquote>
<h3>Cosa farai oggi</h3>
` +
    ul([`
    <p>Forge&shy;rai la tua skin, portata via dal Bug.</p>
  `, `
    <p>Con il tuo nuovo look attraverserai un dungeon fino a giungere ad mondo ancora vivo, ai confini del mondo.</p>
  `, `
    <p>Troverai un&apos;isola segreta, costruirai il tuo rifugio e lo mostrerai alla squadra.</p>
  `]) +
    test(`Cosa avrai alla fine della lezione?`, [`Il tuo aspetto e il tuo rifugio sull&apos;isola`, `Solamente un nuovo gioco sul computer`, `Niente: oggi ci limitiamo ad ascoltare la spiegazione e basta`]) +
    tnotes(`
  <p><strong>⏱ Durata:</strong> 2 minuti.</p>
  <p><strong>🎯 Obiettivo:</strong> creare un&apos;atmosfera di avventura e spiegare brevemente l&apos;obiettivo dell&apos;attività di oggi.</p>
  <p><strong>🗣 Dì alla classe:</strong> ​<em>«Oggi siete crafter e il mondo vi aspetta. Si è quasi spento, ma insieme lo riporteremo in vita. Alla fine della lezione, ognuno avrà il proprio volto e il proprio rifugio sull&apos;isola».</em></p>
  <p><strong>✅ Passaggi:</strong> leggi i tre punti sullo schermo, dai 20 secondi per il breve test «cosa avrai alla fine della lezione?», conferma a voce la risposta corretta e passa subito alla presentazione.</p>
  <p><strong>👀 È tutto pronto se:</strong> -</p>
  <p><strong>🐛 Problemi:</strong> -</p>
  <p><strong>➡️ Passaggio:</strong> «Prima ci conosciamo, poi entreremo nel mondo».</p>
`)
  },
  { title:`Il Bug ama chi si arrende 🤝`, html:
    banner(C(`d598a2bc-fd9d-42dc-9171-0673ead262a4.png`)) +
    `
<h1>Il patto dei crafter 🤝</h1>
<blockquote>
  <p>Il Bug ama quando ti arrendi. Una skin non dettagliata o una casetta che prende fuoco: è lui che prova a intimidirti, ma ciò non significa che «non sei in grado» di sconfiggerlo. Decidiamo insieme come i crafter si sosterranno a vicenda.</p>
</blockquote>
<h3>Il nostro patto</h3>
` +
    ul([`
    <p>Se non riesci a portare a termine una sfida, prova in un altro modo. Non mollare.</p>
  `, `
    <p>Aiutiamoci a vicenda, non prendiamoci in giro: ognuno ha i suoi tempi.</p>
  `, `
    <p>Ascoltiamo in silezio quando parla un altro crafter.</p>
  `]) +
    tnotes(`
  <p><strong>⏱ Durata:</strong> 2 minuti.</p>
  <p><strong>🎯 Obiettivo:</strong> creare un&apos;atmosfera serena; informa subito che gli errori sono solamente dei «dispetti del Bug», non come un fallimento.</p>
  <p><strong>🗣 Dì alla classe:</strong> ​<em>«Nella fucina nessuno nasce maestro. Un errore è solo un attacco del Bug. Te ne accorgi, lo sistemi: questo è il segreto per il successo».</em></p>
  <p><strong>✅ Passaggi:</strong> presenta le regole e chiedi a tutti di scrivere un &quot;+&quot; nella chat se sono d&apos;accordo.</p>
  <p><strong>👀 È tutto pronto se:</strong> -</p>
  <p><strong>🐛 Problemi:</strong> -</p>
  <p><strong>➡️ Passaggio successivo:</strong> «D&apos;accordo: controlliamo l&apos;attrezzatura e partiamo».</p>
`)
  },
  { title:`Prima di partire 🎧`, html:
    banner(C(`e39cfe9e-1b0d-4037-b159-fce82f7a3fbb.png`)) +
    `
<h1>Test prima di entrare 🎧</h1>
<blockquote>
  <p>Prima di entrare nel mondo, fai un rapido controllo dell&apos;attrezzatura: così niente ti distrarrà durante il viaggio.</p>
</blockquote>
<h3>🎯 Controlla tutto in un minuto</h3>
` +
    ol([`
    <p>Di&apos; «ciao» nel microfono: i tuoi compagni ti sentono?</p>
  `, `
    <p>Sai accendere la videocamera? Mostra il tuo eroico volto, così il mondo saprà chi sei!</p>
  `, `
    <p>Sai condividere lo schermo?</p>
  `]) +
    spoiler(`Qualcosa non funziona?`, ol([`
        <p>Scrivi nella chat che cosa non funziona.</p>
      `, `
        <p>Mentre ti aiutiamo, inventa il tuo crafter.</p>
      `])) +
    tnotes(`
  <p><strong>⏱ Durata:</strong> 2 minuti.</p>
  <p><strong>🎯 Obiettivo:</strong> risolvere i problemi tecnici prima della pratica, così non perderanno tempo nella fase di realizzazione delle skin.</p>
  <p><strong>🗣 Dì alla classe:</strong> -</p>
  <p><strong>✅ Passaggi:</strong> controlla rapidamente il gruppo e risolvi i problemi di audio, video e condivisione dello schermo.</p>
  <p><strong>👀 È pronto se:</strong> tutti hanno audio, video e la possibilità di condividere lo schermo.</p>
  <p><strong>🐛 Problemi:</strong> -</p>
  <p><strong>➡️ Passaggio successivo:</strong> «La connessione c&apos;è: ora dobbiamo ottenere la chiave per entrare nel mondo».</p>
`)
  },
  { title:`La chiave che ti aspettava 🗝️`, html:
    banner(C(`f0c256d5-6df0-458f-bcb0-80f17a403c7b.png`)) +
    `
<h1>La chiave per il mondo 🗝️</h1>
<blockquote>
  <p>Non puoi entrare nel mondo senza una chiave. Scintilla ha conservato a lungo questa chiave per te: il <strong>Launcher Kodland di Minecraft</strong>. Costruiamolo insieme e si aprirà la strada per Craftforge.</p>
</blockquote>
<h3>🎯 Passaggio 1. Scarica 📥</h3>
<p>Apri il link e scarica il file del launcher.</p>
` +
    spoiler(`🍎 MacOS — file .dmg`, `
    <p>Se il tuo computer ha un processore Intel:</p>
    ` +
    linkBtn(`[Intel] MacOS Kodland Craftforge`) +
    `
    <p>Se hai un processore M:</p>
    ` +
    linkBtn(`[M] MacOS Kodland Craftforge`)) +
    spoiler(`🪟 Windows — file .exe`, linkBtn(`Windows Kodland Craftforge`)) +
    `
<h3>🎯 Passaggio 2. Installa 🧩</h3>
<p>🍎 <strong>Mac:</strong> apri il file scaricato e trascina l&apos;icona del launcher nella cartella «Applicazioni».</p>
` +
    note(`💡 Non aprire subito il file su MacOS. Segui questi passaggi:`, `
  <p>Apri il Terminale (Cmd+Space, digita «Terminale») e incolla questa riga:</p>
  <blockquote>
    <p>xattr -dr com.apple.quarantine &quot;/Applications/Kodland Launcher.app&quot;</p>
  </blockquote>
  <p>Premi Return. <br>Non comparirà nessun messaggio: è normale e significa che ha funzionato.<br>Apri l&apos;app dalla cartella «Applicazioni» facendo doppio clic.</p>
`) +
    `
<p>🪟 <strong>Windows:</strong> avvia il file scaricato e fai clic su «Avanti».</p>
` +
    note(`💡 Se Windows non apre il file:`, `
  <p>Il computer potrebbe chiederti se vuoi davvero aprire questo file. Non è un errore: è una normale precauzione. Puoi aprire e installare il file.</p>
`) +
    `
<h3>🎯 Passaggio 3. Accedi 🔑</h3>
` +
    ol([`
    <p>Apri il launcher e fai clic su <strong>«Accedi»</strong>.</p>
  `, `
    <p>Si aprirà una finestra nel browser: fai clic su &quot;Accedi con Kodland&quot;.</p>
  `]) +
    gallery([`f092408a-3034-412f-bee7-82ae37feb12a.png`, `77384271-2bdd-412e-8a18-e81b82af7ae7.png`]) +
    `
<h3>🎯 Passaggio 4. Attendi durante il caricamento ⏳</h3>
` +
    ol([`
    <p>Il launcher scaricherà il gioco automaticamente. Controlla la barra verde.</p>
  `, `
    <p>La prima volta ci vorrà un po&apos;. Mentre la barra si riempie, ci conosceremo e formeremo la squadra.</p>
  `]) +
    `
<h3>✅ Hai finito quando</h3>
` +
    ul([`
    <p>Il launcher è installato e aperto.</p>
  `, `
    <p>Hai effettuato l&apos;accesso con le credenziali scolastiche.</p>
  `, `
    <p>La barra verde avanza: il gioco si sta scaricando.</p>
  `]) +
    spoiler(`C&apos;è un problema: la chiave non funziona`, ol([`
        <p>Il file non è stato scaricato: apri di nuovo il link nella chat.</p>
      `, `
        <p>Il computer non permette l&apos;installazione: chiedi aiuto a un adulto o all&apos;insegnante.</p>
      `, `
        <p>Non riesci ad accedere: usa le credenziali scolastiche di Kodland. Non devi creare un nuovo account.</p>
      `, `
        <p>La barra avanza lentamente: la prima volta è normale. Il download continuerà da solo.</p>
      `])) +
    tnotes(`
  <p><strong>⏱ Durata:</strong> 6 minuti.</p>
  <p><strong>🎯 Obiettivo:</strong> ogni studente ha installato e aperto il launcher, ha effettuato l&apos;accesso con le credenziali scolastiche ed è iniziato il caricamento del gioco.</p>
  <p><strong>🗣 Dì alla classe:</strong> ​<em>«Per entrare nel mondo serve una chiave: il nostro launcher. Scaricatelo, installatelo e accedete con le credenziali scolastiche. Il gioco si caricherà da solo e intanto faremo conoscenza.»</em></p>
  <p><strong>✅ Passaggi:</strong> ripubblica il link del launcher nella chat; mostra sul tuo schermo i quattro passaggi (scaricare → installare → accedere → attendi); chiarisci che la password va inserita solo nella finestra di accesso di Kodland; verifica che per tutti sia comparsa la barra verde.</p>
  <p><strong>👀 È tutto pronto se:</strong> tutti hanno aperto il launcher, effettuato l&apos;accesso e vedono il caricamento in corso.</p>
  <p><strong>🐛 Problemi:</strong> se non riesci ad accedere, usa solo l&apos;accesso scolastico Kodland, senza creare un nuovo account; se il caricamento non è finito alla fine della scheda, va bene: continua in background. Torna dagli studenti più indietro nella scheda «Ai confini del mondo 🧭».</p>
  <p><strong>➡️ Passaggio:</strong> «La chiave è stata ottenuta e il gioco si sta caricando: raduniamo la squadra.»</p>
`)
  },
  { title:`Raduna la squadra 🛠️`, html:
    banner(C(`e3e62541-c6c6-49a6-b354-6aee1cc44cd4.png`)) +
    `
<h1>Che tipo di crafter sei? 🛠️</h1>
<blockquote>
  <p>Ogni crafter ha il suo stile. Dicci quale ti rappresenta meglio: così formeremo la squadra per il Mondo Oscuro.</p>
</blockquote>
<h3>🎯 Presentati</h3>
` +
    ol([`
    <p>Quando tocca a te, accendi il microfono.</p>
  `, `
    <p>Di&apos; il tuo nickname da crafter.</p>
  `, `
    <p>Racconta che tipo di crafter sei e cosa ti piace fare in Minecraft.</p>
  `, `
    <p>Spegni il microfono e ascolta gli altri.</p>
  `]) +
    choice(`Che tipo di crafter sei?`, [[`🏗️ Costruttore`, `
      <p>Mi piace costruire case, torri e intere strade.</p>
    `], [`🧭 Esploratore`, `
      <p>Mi piace esplorare il mondo e scoprire cose nuove.</p>
    `], [`🎨 Decoratore`, `
      <p>Mi piace decorare: colori, dettagli e luoghi belli.</p>
    `], [`Altro`, `
      <p>Raccontalo a voce quando tocca a te.</p>
    `]]) +
    tnotes(`
  <p><strong>⏱ Durata:</strong> 3 minuti.</p>
  <p><strong>🎯 Obiettivo:</strong> dare a ciascuno un breve momento sicuro per presentarsi e collegare il proprio stile alla futura skin e costruzione. Intanto il gioco continua a caricarsi per tutti.</p>
  <p><strong>🗣 Dì alla classe:</strong> ​<em>«Il Mondo Oscuro aspetta crafter di ogni tipo. Chi sei: costruttore, esploratore o decoratore? Ti servirà presto, quando creerai il tuo look.»</em></p>
  <p><strong>✅ Passaggi:</strong> rispondi per primo seguendo la formula «nickname + che tipo di crafter sono + cosa mi piace»; passa la parola a turno; fai notare gli interessi in comune.</p>
  <p><strong>👀 È tutto pronto se:</strong> tutti hanno partecipato, a voce, con il nickname o nella chat.</p>
  <p><strong>🐛 Problemi:</strong> -</p>
  <p><strong>➡️ Passaggio:</strong> «La squadra è pronta: creiamo i volti mentre il gioco ha finito di caricarsi».</p>
`)
  },
  { title:`Qui prendono forma i volti 🎨`, html:
    banner(C(`5d9beb36-ad2a-4660-b818-fd69cee7a2db.png`)) +
    `
<h1>Apri Skin Studio 🎨</h1>
<blockquote>
  <p>Un crafter si riconosce da due cose: il suo volto e il luogo in cui vive. Cominciamo dal volto: puoi crearlo direttamente nel launcher, nello Skin Studio. Aprila quando il gioco ha finito di caricarsi.</p>
</blockquote>
<h3>🎯 Apri Skin Studio</h3>
` +
    ol([`
    <p>Nel launcher, apri la scheda <strong>Create</strong> (&quot;Crea&quot;) e poi il riquadro <strong>Skins</strong> (&quot;Skin&quot;).</p>
  `]) +
    gallery([`1d751520-b959-4e61-b377-2dbb9a127bd2.png`, `e3feec19-76e9-48a9-ac8e-b56f6600256e.png`]) +
    ul([`
    <p>In alto a destra, clicca sul pulsante verde <strong>Create a skin</strong> (&quot;Crea una skin&quot;).</p>
  `]) +
    banner(M(`781ff4fa-5207-4adf-b12a-803edb5e9c2d.png`)) +
    ul([`
    <p>Si aprirà <strong>Skin Studio</strong>: qui disegnerai il tuo personaggio.</p>
  `]) +
    banner(M(`ed7625c4-6537-44f7-9c36-eff87c0048d7.png`)) +
    note(`💡 Cosa trovi dentro`, `
  <p>Pennello, gomma, riempimento e contagocce, tavolozza dei colori e vista <strong>3D</strong> / <strong>2D map</strong>.</p>
`) +
    tnotes(`
  <p><strong>⏱ Durata:</strong> 3 minuti.</p>
  <p><strong>🎯 Obiettivo:</strong> tutti hanno aperto Skin Studio e sono pronti a disegnare.</p>
  <p><strong>🗣 Dì alla classe:</strong> ​<em>«La skin si disegna direttamente nel launcher: Create → Skins → Create a skin.</em></p>
  <p><strong>✅ Passaggi:</strong> mostra sul tuo schermo il percorso Create → Skins → Create a skin → Skin Studio; leggi a voce alta le etichette in inglese dei pulsanti.</p>
  <p><strong>👀 È tutto pronto se:</strong> -</p>
  <p><strong>🐛 Problemi:</strong> accedi tramite Kodland, senza creare un account autonomamente; se non si apre, aiuta lo studente ad accedere di nuovo.</p>
  <p><strong>➡️ Passaggio:</strong> «Ora creiamo il volto: disegna chi vuoi!».</p>
`)
  },
  { title:`Non sei più grigio 🧑‍🎨`, html:
    banner(C(`a452569f-1736-4d58-8912-48420f2e7fc9.png`)) +
    `
<h1>Crea il tuo volto 🧑‍🎨</h1>
<blockquote>
  <p>Il Bug ti ha reso tutto grigio. Torna a essere te stesso: disegna il crafter che vuoi, con i colori, i vestiti, il volto e tutti i dettagli che preferisci. Scintilla ti gira intorno: «Usa la mia luce e disegna con coraggio!»</p>
</blockquote>
` +
    media(M(`a47108ac-c3c8-4c4b-8112-ca9a12c61d23.png`), `
    <h3>🎯 Disegna il tuo crafter</h3>
    ` +
    ol([`
        <p>Scegli un colore dalla tavolozza (oppure aggiungine uno tuo).</p>
      `, `
        <p>Disegna con il <strong>pennello</strong> sulla figura. Se sbagli, usa la <strong>gomma</strong> oppure &quot;Undo&quot; (Annulla).</p>
      `, `
        <p>Ruota il personaggio in <strong>3D</strong> oppure attiva <strong>2D Map</strong> per colorarlo tutto.</p>
      `, `
        <p>Rendilo TUO: acconciatura, vestiti, volto e ogni altro dettaglio, come preferisci.</p>
      `])) +
    `
<h3>✅ Controlla il tuo lavoro</h3>
` +
    ul([`
    <p>La skin non è più grigia come quella predefinita?</p>
  `, `
    <p>Hai realizzato bene la tua idea?</p>
  `]) +
    spoiler(`💡 Idee se non sai cosa disegnare`, ul([`
        <p>Un eroe del tuo colore preferito con un mantello brillante.</p>
      `, `
        <p>Un crafter fabbro: grembiule e fascia per la testa.</p>
      `, `
        <p>Un crafter esploratore: cappuccio e zaino.</p>
      `])) +
    tnotes(`
  <p><strong>⏱ Durata:</strong> 7 minuti.</p>
  <p><strong>🎯 Obiettivo:</strong> ogni studente disegna liberamente il proprio crafter; il criterio è che non sia grigio e che l&apos;idea sia riconoscibile, non che sia bello.</p>
  <p><strong>🗣 Dì alla classe:</strong> ​<em>«Disegnate chi volete: è il vostro crafter. Usate pennello, colori e gomma; ruotate in 3D e usate 2D Map per colorare tutto. L&apos;importante è che sia vostro».</em></p>
  <p><strong>✅ Passaggi:</strong> mostra il pennello, la tavolozza e il selettore 3D / 2D Map; lascia libertà di scelta e aiuta chi è in difficoltà; a 1–2 minuti dalla fine, segnala di concludere.</p>
  <p><strong>👀 È tutto pronto se:</strong> la skin non è quella predefinita e ciascuno ha creato la propria.</p>
  <p><strong>🛟 Differenziazione:</strong> per chi è in difficoltà, proponi un&apos;idea tra quelle suggerite nello spoiler o suggerisci di disegnare i vestiti del personaggio copiando quelli che si sta indossando; chi finisce in fretta può aggiungere dettagli, motivi o perfezionare il volto.</p>
  <p><strong>🐛 Problemi:</strong> se continua a ridisegnare, ricorda: «Deve essere tuo, non perfetto»; se colora la parte sbagliata, 2D map mostra dove si trova ogni parte. Per dettagli e nome, niente dati personali.</p>
  <p><strong>➡️ Passaggio:</strong> «Pronto? Indossa il tuo volto».</p>
`)
  },
  { title:`Il mondo ti riconoscerà ✨`, html:
    banner(C(`ebf26035-3f2a-4858-ba30-54c8b41fe49c.png`)) +
    `
<h1>Indossa la tua skin ✨</h1>
<blockquote>
  <p>La skin è pronta, ma nel mondo hai ancora l&apos;aspetto di prima. Indossala e il mondo ti riconoscerà come eroe.</p>
</blockquote>
<h3>🎯 Riprendi il tuo aspetto</h3>
` +
    ol([`
    <p>In Skin Studio, clicca sul pulsante verde <strong>Wear</strong> («Indossa»).</p>
  `, `
    <p>Comparirà il messaggio «Done! This skin is on your character now.»: ora ci sei.</p>
  `, `
    <p>Guarda il personaggio nel launcher: indossa subito la tua skin.</p>
  `]) +
    gallery([`2a3951ce-f1ad-4867-b26a-6f6425ad7aad.png`, `e1d880bb-57f9-424e-8d59-2c92769ad60f.png`]) +
    note(`💡 Importante`, `
  <p>Indossa il volto <strong>prima</strong> di entrare nel mondo: così inizierai il percorso con il tuo aspetto. Se entri senza premere <strong>Wear</strong>, nel mondo sarai uno Steve grigio.</p>
`) +
    spoiler(`Qualcosa non va: sono ancora grigio`, ol([`
        <p>Hai cliccato sul pulsante verde <strong>Wear</strong>? Dovresti vedere il messaggio «Done!».</p>
      `, `
        <p>Sei già entrato nel mondo? Esci e rientra: l&apos;aspetto si aggiornerà quando entrerai di nuovo.</p>
      `])) +
    test(`Che cosa devi fare per avere il tuo volto nel mondo?`, [`Premere il pulsante verde «Wear» prima di entrare nel mondo`, `Disegnare lo skin e chiudere Skin Studio`, `Niente: il volto comparirà da solo`]) +
    tnotes(`
  <p><strong>⏱ Durata:</strong> 4 minuti.</p>
  <p><strong>🎯 Obiettivo:</strong> tutti premono Wear <strong>prima</strong> di entrare nel mondo: il gruppo inizia il percorso già con i propri skin.</p>
  <p><strong>🗣 Dì alla classe:</strong> ​<em>«Se sei soddisfatto del tuo skin, premi il pulsante verde “Wear”. Quando vedi “Done!”, il volto è tuo. Indossiamolo ora, così entreremo nel mondo con il nostro aspetto».</em></p>
  <p><strong>✅ Passaggi:</strong> mostra il pulsante Wear; verifica che per tutti compaia «Done!» e che il personaggio nel launcher sia cambiato. È un passaggio fondamentale: non saltarlo. Alla fine, proponi un breve test per fissare la regola: «prima Wear, poi il mondo».</p>
  <p><strong>👀 È pronto se:</strong> per tutti compare «Done!» e nel launcher c&apos;è il proprio personaggio, non Steve grigio.</p>
  <p><strong>🐛 Problemi:</strong> ha creato il volto e lo vede, ma non ha cliccato su Wear: succede molto spesso. Controlla personalmente ogni studente. Chi è già entrato nel mondo deve uscire e rientrare.</p>
  <p><strong>➡️ Passaggio:</strong> «Il volto è pronto: ora entriamo nel mondo».</p>
`)
  },
  { title:`Ai confini del mondo 🧭`, html:
    banner(C(`94f930d3-530e-401f-8fbb-d47d09c6294e.png`)) +
    `
<h1>Il sentiero nel sotterraneo 🧭</h1>
<blockquote>
  <p>Il volto del tuo eroe è pronto: è il momento di entrare nel mondo. Apri gli occhi: c&apos;è una foresta innevata, silenzio e aria gelida. Proprio davanti a te c&apos;è l&apos;ingresso nero di un dungeon. Non c&apos;è altra strada: il mondo che ancora vive è dall&apos;altra parte. Scintilla ti precede: «Non avere paura, ti illumino io la strada!»</p>
</blockquote>
<h3>🎯 Percorri tutto il sentiero</h3>
` +
    ol([`<p>Nella scheda «Gioca», inserisci il codice della lezione che ti darà l&apos;insegnante e apri il mondo: ti troverai in una foresta innevata.</p>` +
    banner(M(`47b3c4f8-24f4-4dee-a24e-44e724699edb.png`)), `
    <p>Osservati: nel mondo hai già il tuo nuovo aspetto</p>
  `, `<p>Entra nel sotterraneo e attraversalo fino in fondo.</p>` +
    banner(C(`59db903b-558c-40ef-b4e1-a70613787aa1.png`)), `
    <p>All&apos;interno arriverai alle <strong>rovine del caos</strong>. Le ha lasciate il Bug: guarda cosa succede a un mondo senza crafter.</p>
  `, `
    <p>Oltre le rovine, trova il <strong>Ponte Ingegneristico</strong>: lo hanno costruito i sopravvissuti. Attraversalo.</p>
  `, `
    <p>Dal ponte puoi vedere il <strong>villaggio</strong>, e oltre, proprio ai confini del mondo, c&apos;è l&apos;<strong>Isola Segreta</strong>. Raggiungila: quest&apos;isola non appartiene a nessuno, quindi è tua.</p>
  `]) +
    `
<h3>Che cosa hai notato?</h3>
<p>Dillo o scrivilo: in che cosa l&apos;isola è diversa dal villaggio? Esatto: nel villaggio vivono delle persone, mentre sull&apos;isola per ora non c&apos;è nulla: né case né fuochi. Però non appartiene a nessuno. Quindi è tua.</p>
` +
    essay(`In che cosa l'isola è diversa dal villaggio? Cos'altro hai notato?`, `Per esempio: nel villaggio ci sono case e abitanti, mentre l'isola è vuota`) +
    spoiler(`Mi sono perso lungo il percorso`, ol([`
        <p>Fermati e scrivi nella chat che cosa vedi vicino a te: ghiaccio, rovine o un ponte.</p>
      `, `
        <p>L&apos;insegnante ti dirà dove andare e ti mostrerà il punto sul suo schermo. Scintilla illuminerà il percorso.</p>
      `])) +
    tnotes(`
  <h3>Codice del mondo per gli studenti:</h3>
  <blockquote>
    <p>Welcome to CraftForge</p>
  </blockquote>
  <p><strong>⏱ Durata:</strong> 8 minuti.</p>
  <p><strong>🎯 Obiettivo:</strong> guidare tutti lungo il percorso foresta innevata → sotterraneo → rovine del caos → ponte ingegneristico → villaggio → isola segreta, così che ogni studente senta di aver completato il viaggio e capisca che l&apos;isola è il suo posto.</p>
  <p><strong>🗣 Dì alla classe:</strong> ​<em>«I volti sono pronti: entriamo. Siete ai confini del mondo, in una foresta innevata, e davanti a voi c&apos;è un sotterraneo. Seguitemi sullo schermo. Oltre il sotterraneo ci sono le rovine del caos, poi il ponte dei sopravvissuti e, ai confini del mondo, un&apos;isola. Non appartiene a nessuno e diventerà il vostro rifugio».</em></p>
  <p><strong>✅ Passaggi: </strong>comunica il codice della lezione. Controlla che ogni studente abbia la proprio skin. Condividi lo schermo e percorri tu il sentiero, commentando le svolte. Fai due checkpoint: alle rovine del caos e sul ponte. Dì: «Quando arrivate, scrivete un + in chat». Aspetta chi è rimasto indietro per 20–30 secondi. Mostra il percorso dal villaggio all&apos;isola. Sull&apos;isola, lascia un minuto per esplorare. Raccogli 2–3 risposte alla domanda: «In cosa l&apos;isola è diversa dal villaggio?». Chi non vuole parlare può scrivere la risposta nel campo della scheda.</p>
  <p><strong>👀 È tutto pronto se:</strong> tutti hanno segnato entrambi i checkpoint in chat, si trovano sulla propria isola e sanno che costruiranno qui.</p>
  <p><strong>🐛 Problemi:</strong> il dungeon sembra spaventoso: ricorda che siete in modalità creativa e nessuno può farsi male; uno studente si è perso: chiedigli di descrivere ciò che ha intorno (ghiaccio / rovine / ponte) e mostra quel punto sul tuo schermo; chi arriva per primo: chiedigli di esplorare l&apos;isola e di non costruire fino all&apos;attività; uno studente entra come Steve grigio: Skin Studio → Wear → accedi di nuovo; se il gioco di qualcuno si sta ancora caricando, guidalo lungo il sentiero a parte mentre gli altri esplorano l&apos;isola.</p>
  <p><strong>➡️ Passaggio:</strong> «Abbiamo trovato l&apos;isola: facciamo una breve pausa e poi costruiamo la nostra casa».</p>
`)
  },
  { title:`Tre indovinelli per una pausa 🎲`, html:
    banner(C(`9eecc25b-0273-414e-bced-7f1c71320741.png`)) +
    `
<h1>La pausa del crafter 🎲</h1>
<blockquote>
  <p>Hai percorso il sentiero e trovato l&apos;isola: ora fai una breve pausa prima di costruire. Non devi costruire nulla: indovina i giochi dagli emoji e invia la risposta in chat quando te lo viene chiesto.</p>
</blockquote>
` +
    media(C(`65d4af1a-bc18-4ee1-91ba-6903d3a04432.png`), `
    <h3>Sfida: indovina il gioco dagli emoji</h3>
    ` +
    ol([`
        <p>L&apos;insegnante mostrerà tre emoji che nascondono il nome di un gioco famoso.</p>
      `, `
        <p>Scrivi la tua idea in chat, ma non inviarla ancora fino al segnale del Tutor.</p>
      `, `
        <p>Quando senti «Inviamo!», pubblicate tutti la risposta nello stesso momento.</p>
      `]), `narrow`) +
    tnotes(`
  <p><strong>⏱ Durata:</strong> 4 minuti.</p>
  <p><strong>🎯 Obiettivo:</strong> una pausa breve e chiara dall&apos;attività didattica prima di costruire.</p>
  <p><strong>🗣 Dì alla classe:</strong> -</p>
  <p><strong>✅ Passaggi:</strong> invia in chat un rebus alla volta: «⛏️ + 🧱 + 🟩» — Minecraft; «🏎️ + 🍌 + 🏁» — Mario Kart; «🟡 + ⚪ + 👻» — Pac-Man; «🚀 + 👨‍🚀 + 🔴» — Among Us. Lascia 10–15 secondi per ciascuno, poi dì: «Inviamo!» e comunica la risposta.</p>
  <p><strong>👀 È tutto pronto se:</strong> -</p>
  <p><strong>🐛 Problemi:</strong> è una pausa: niente esercizi fisici, videocamera obbligatoria, risposte una alla volta o verifica delle conoscenze. Si partecipa tramite chat e reazioni.</p>
  <p><strong>➡️ Passaggio:</strong> «Ci siamo riposati: ora rendiamo l&apos;isola la nostra casa».</p>
`)
  },
  { title:`Se è senza padrone, è tua 🏠`, html:
    banner(C(`25146cd8-d3f2-49f1-a710-d8d26ba344b1.png`)) +
    `
<h1>Rendi tua l&apos;isola 🏠</h1>
<blockquote>
  <p>L&apos;isola è vuota e grigia: non ci sono case né fuochi. Da qui aiuterai il mondo, quindi ti serve un rifugio. Costruiscilo dove preferisci: vicino all&apos;acqua, su una collina o tra gli alberi. Basta guardarlo per capire che qui vive un crafter. Scintilla volteggia sopra l&apos;isola: «Scegli un posto e iniziamo!».</p>
</blockquote>
` +
    media(C(`a88a74b8-f3a3-497b-a263-6fa3f1f1acdd.png`), `
    <h3>🎯 Costruisci il tuo rifugio</h3>
    ` +
    ol([`
        <p>Esplora l&apos;isola e scegli un posto che ti piace. Tutta l&apos;isola è tua.</p>
      `, `
        <p>Costruisci le <strong>pareti</strong>.</p>
      `, `
        <p>Aggiungi un <strong>tetto</strong>.</p>
      `, `
        <p>Lascia un <strong>ingresso</strong>: una porta o un&apos;apertura.</p>
      `, `
        <p>Aggiungi un <strong>dettaglio</strong> unico: un blocco colorato, una torcia, una bandiera o una finestra.</p>
      `, `
        <p>Metti un <strong>cartello</strong> con il tuo nickname: così gli abitanti sapranno chi la abita.</p>
      `])) +
    `
<h3>✅ Hai finito quando</h3>
` +
    ul([`
    <p>Il rifugio è sull&apos;isola, nel punto che hai scelto tu.</p>
  `, `
    <p>Si vedono 4 elementi: pareti, tetto, ingresso e un dettaglio caratteristico.</p>
  `, `
    <p>Nei paraggi c&apos;è un cartello con il tuo nickname.</p>
  `]) +
    spoiler(`Ti servono idee su cosa costruire?`, ul([`
        <p>Una casetta vicino all&apos;acqua, con una finestra sul mare.</p>
      `, `
        <p>La tenda di un esploratore sulla collina, con una torcia all&apos;ingresso.</p>
      `, `
        <p>Il laboratorio di un decoratore, costruito con blocchi vivaci.</p>
      `])) +
    tnotes(`
  <p><strong>⏱ Durata:</strong> 10 minuti.</p>
  <p><strong>🎯 Obiettivo:</strong> ogni studente rende sua l&apos;isola costruendo un rifugio con 4 elementi e un cartello; sceglie in autonomia il punto in cui costruirlo.</p>
  <p><strong>🗣 Dì alla classe:</strong> ​<em>«Scegliete voi il posto: l&apos;isola è vostra. Ogni parete fa arretrare il Guasto di un passo. Il rifugio non deve essere grande: deve essere vostro, con pareti, tetto, ingresso e un dettaglio riconoscibile».</em></p>
  <p><strong>✅ Passaggi:</strong> presenta i 4 elementi e il cartello; lascia 30 secondi per scegliere il posto («hai scelto? Metti la prima parete»); aiuta chi è in difficoltà a iniziare con un quadrato di pareti; a 2 minuti dalla fine, chiedi di aggiungere il cartello e un dettaglio.</p>
  <p><strong>👀 È tutto pronto se:</strong> ogni studente ha sull&apos;isola un rifugio con 4 elementi e un cartello.</p>
  <p><strong>🛟 Differenziazione:</strong> per chi è in difficoltà: una struttura a scatola con pareti, porta e torcia; per chi finisce presto: un sentiero verso l&apos;acqua, un secondo piano o un rifugio ispirato al mestiere del crafter.</p>
  <p><strong>🐛 Problemi:</strong> impiega troppo tempo a scegliere il posto: «va bene qualunque punto, l&apos;isola è tutta tua, metti la prima parete»; va a costruire nel villaggio: riportalo sull&apos;isola, è il suo spazio; il nickname è quello di gioco.</p>
  <p><strong>➡️ Passaggio:</strong> «L&apos;isola ha ripreso vita: mostriamo cosa abbiamo riportato dal grigiore».</p>
`)
  },
  { title:`Quante luci si sono accese 🎉`, html:
    banner(C(`5b25f081-c7c5-48b1-9882-4244236f18ff.png`)) +
    `
<h1>La presentazione 🎉</h1>
<blockquote>
  <p>Un&apos;ora fa l&apos;isola era vuota e tu eri uno Steve grigio. Ora hai il tuo volto e il tuo rifugio. Mostriamoci a vicenda cosa abbiamo riportato dal Guasto. Scintilla gira in tondo: «Wow, quante luci si sono già accese!»</p>
</blockquote>
<h3>Quando ti presenti</h3>
` +
    ol([`
    <p>Condividi lo schermo e mettiti vicino al tuo rifugio.</p>
  `, `
    <p>Di&apos; una frase: chi è il tuo crafter e che tipo di rifugio hai costruito.</p>
  `, `
    <p>Fai uno screenshot: 🪟 Windows — <strong>Win + Print Screen</strong> (il file comparirà in «Immagini → Screenshot»); 🍎 Mac — <strong>Cmd + Shift + 4</strong> e seleziona il crafter (il file comparirà sulla Scrivania).</p>
  `, `
    <p>Allega la schermata all&apos;attività qui sotto: così la tua prima fiamma resterà nella storia.</p>
  `]) +
    `
<blockquote>
  <p><strong>Sono un crafter...</strong></p>
  <p><strong>Il mio rifugio è...</strong></p>
</blockquote>
` +
    essay(`Sono un crafter… Il mio rifugio è…`, `Sono un crafter costruttore. Il mio rifugio è una casetta sull'acqua con una finestra sul mare.`) +
    fileAnswer() +
    spoiler(`Qualcosa non va: non trovo la schermata`, ol([`
        <p>Avvisa l&apos;insegnante: ti mostrerà dove si trovano le schermate del gioco.</p>
      `, `
        <p>Non ci riesci ora? Allega la schermata da casa: il tuo rifugio resterà lì ad aspettarti.</p>
      `])) +
    `
<h3>Quando presenta un compagno</h3>
` +
    media(C(`13b9f804-e225-4cbe-9c0d-de93f0a00cdb.png`), ol([`
        <p>Nota un dettaglio scelto dall&apos;autore.</p>
      `, `
        <p>Dillo ad alta voce o scrivilo in chat: «Mi è piaciuto che...» e a descrivere quel dettaglio.</p>
      `])) +
    tnotes(`
  <p><strong>⏱ Durata:</strong> 5 minuti.</p>
  <p><strong>🎯 Obiettivo:</strong> breve presentazione, momento di orgoglio e feedback utile e specifico.</p>
  <p><strong>🗣 Dì alla classe:</strong> ​<em>«Guardate quanti fuochi si sono accesi! Ognuno ha riportato in vita un pezzetto di mondo. A turno, mostrate il vostro rifugio e cerchiamo insieme ciò che ci piace.»</em></p>
  <p><strong>✅ Passaggi:</strong> chiedi a tutti di posizionarsi davanti al proprio rifugio e di premere F2: sarà la schermata della lezione; prima delle presentazioni, fai compilare il campo «Sono un crafter… Il mio rifugio è…»: aiuta a parlare più facilmente; poi ciascuno mostra il proprio mondo condividendo lo schermo, per 20–30 secondi e con una frase; dopo ogni presentazione, uno studente dice «Mi è piaciuto che…» e cita un dettaglio preciso. Mentre uno presenta, gli altri allegano la schermata all&apos;attività.</p>
  <p><strong>👀 È tutto pronto se:</strong> ogni studente ha allegato una schermata del proprio rifugio e ha compilato il campo sul proprio crafter.</p>
  <p><strong>Da chiarire:</strong> il percorso preciso della cartella delle schermate del gioco nel launcher Kodland: inseriscilo qui, così l&apos;insegnante potrà mostrarlo subito.</p>
  <p><strong>🐛 Problemi</strong> evita i confronti tra «meglio» e «peggio» e valorizza il fatto che ogni rifugio sia personale; se c&apos;è poco tempo, fai presentare alcuni volontari e incoraggia gli altri in chat; se non trovano la schermata, permetti di allegarla da casa: la presentazione è più importante del file.</p>
  <p><strong>➡️ Passaggio:</strong> «Il mondo ha ripreso vita: tiriamo le somme.»</p>
`)
  },
  { title:`Il mondo respira di nuovo ✨`, html:
    banner(C(`94f930d3-530e-401f-8fbb-d47d09c6294e.png`)) +
    `
<h1>Ora sei un crafter ✨</h1>
<blockquote>
  <p>Hai un aspetto tutto tuo e un&apos;isola con il tuo rifugio. Il mondo non è più vuoto, perché ci sei tu. Il Bug si è ritirato: e questo è solo l&apos;inizio.</p>
</blockquote>
<h3>Ora sai</h3>
` +
    ul([`
    <p>creare il tuo aspetto nell&apos;editor delle skin;</p>
  `, `
    <p>indossarlo con il pulsante «Wear» prima di entrare nel mondo;</p>
  `, `
    <p>scegliere una location e costruirci un rifugio con un cartello;</p>
  `, `
    <p>mostrare a tutti chi sei e apprezzare le cose belle create dagli altri.</p>
  `]) +
    `
<h3>💬 Rifletti un momento</h3>
` +
    choice(`Qual è stata la cosa più importante di oggi?`, [[`🎨 Il mio avatar`, `
      <p>Quale dettaglio del tuo avatar ti piace di più?</p>
    `], [`🏠 Il mio rifugio`, `
      <p>Che cosa ti piace di più del tuo rifugio?</p>
    `], [`🧭 Il viaggio verso l&apos;isola`, `
      <p>Che cosa ti è sembrato &quot;più wow&quot; lungo il sentiero: il dungeon, le rovine del caos o il ponte?</p>
    `]]) +
    tnotes(`
  <p><strong>⏱ Durata:</strong> 2 minuti.</p>
  <p><strong>🎯 Obiettivo:</strong> ripercorrere il viaggio della lezione e ascoltare un momento speciale.</p>
  <p><strong>🗣 Dì alla classe:</strong> ​<em>«Oggi avete ritrovato il vostro volto e dato vita all&apos;isola: grazie a voi il mondo respira di nuovo. E davanti a voi c&apos;è un intero mondo che aspetta un crafter».</em></p>
  <p><strong>✅ Passaggi:</strong> dì «Adesso sai fare...» (30 secondi), raccogli 3–4 risposte su ciò che è stato più significativo. Poi passa ai compiti a casa.</p>
  <p><strong>👀 È tutto pronto se:</strong> -</p>
  <p><strong>🐛 Problemi:</strong> -</p>
  <p><strong>➡️ Passaggio:</strong> «E ora, i compiti a casa».</p>
`)
  },
  { title:`Porta con te una scintilla ✨`, html:
    banner(C(`ac19e14b-3950-40c7-aef0-6c95f72d183c.png`)) +
    `
<h1>Un&apos;altra scintilla ✨</h1>
<blockquote>
  <p>Il rifugio è pronto e il tuo avatar è stato creato, ma un crafter non finisce mai la sua missione in un solo giorno. A casa, aggiungi un altro dettaglio scintillante al tuo avatar. La prossima volta entrerai nel mondo ancor di più &quot;te stesso&quot;. Scintilla ha con sé la fiamma ispiratrice: «Prendila e continuiamo a creare insieme!»</p>
</blockquote>
<h3>🎯 Cosa fare a casa</h3>
` +
    ol([`
    <p>Apri Skin Studio seguendo lo stesso percorso: <strong>Create</strong> → <strong>Skins</strong>.</p>
  `, `
    <p>Aggiungi un nuovo dettaglio al tuo crafter.</p>
  `, `
    <p>Clicca sul pulsante verde &quot;<strong>Wear</strong>&quot; per aggiornare il tuo avatar.</p>
  `, `
    <p>Fai uno screenshot della tua skin aggiornata e allegalo all&apos;attività.</p>
  `]) +
    note(`⏱ Ci vuole poco`, `
  <p>Bastano 10–15 minuti. Non devi disegnare tutto da capo: aggiungi un dettaglio all&apos;avatar che hai già creato.</p>
`) +
    `
<p>Trovi i passaggi dettagliati e alcune idee nella scheda successiva. Puoi aprirla a casa quando vuoi.</p>
` +
    tnotes(`
  <p><strong>⏱ Durata:</strong> 2 minuti.</p>
  <p><strong>🎯 Obiettivo:</strong> spiegare a voce i compiti a casa mentre tutti sono collegati, così a casa gli studenti non dovranno aprire la scheda senza sapere da dove iniziare e capiranno che serve un solo nuovo dettaglio, non una nuova skin.</p>
  <p><strong>🗣 Dì alla classe:</strong> ​<em>«A casa aggiungete un&apos;altra scintilla al vostro crafter: un solo nuovo dettaglio, come un cappello, il colore delle scarpe o un distintivo. Non ridisegnate tutto da capo: aggiungete un dettaglio. E cliccate sul pulsante verde “Wear”, altrimenti l&apos;avatar non si aggiornerà».</em></p>
  <p><strong>✅ Passaggi:</strong> Mostra sullo schermo il percorso Create → Skins e ricorda il pulsante Wear. Indica un tempo di 10–15 minuti. Mostra nella scheda dell&apos;attività dove allegare lo screenshot dello skin e dove scrivere che cosa ha aggiunto. Chiedi a tutti di scrivere in chat che cosa aggiungeranno al proprio skin.</p>
  <p><strong>👀 È tutto pronto se:</strong> ognuno ha detto o scritto in chat quale dettaglio aggiungerà. Così, a casa, non si troverà davanti a uno schermo vuoto.</p>
  <p><strong>🐛 Problemi:</strong> «Non so cosa aggiungere» — le idee sono nello spoiler della scheda dell&apos;attività; puoi suggerire un mestiere per il crafter: fabbro, giardiniere o esploratore. «Ho già disegnato tutto» — chiedi di aggiungere un dettaglio legato al mestiere. Se ai genitori serve accedere, possono usare lo stesso accesso scolastico di Kodland, senza creare un nuovo account.</p>
  <p><strong>➡️ Passaggio:</strong> «L&apos;attività è chiara: portate a casa la scheda con i passaggi dettagliati».</p>
`)
  },
  { title:`Completa il tuo crafter a casa ⚡`, html:
    banner(C(`196595d3-94ac-4707-9519-78775d33a943.png`)) +
    `
<h1>Compiti per casa ⚡</h1>
<blockquote>
  <p>Aggiungi un altro dettaglio al tuo crafter: sarà ancora &quot;più te&quot;. Con questo aspetto entrerai nella Foresta delle Lucciole nella prossima lezione.</p>
</blockquote>
<h3>Compito più semplice</h3>
` +
    ol([`
    <p>Apri Skin Studio: <strong>Create</strong> → <strong>Skins</strong> → <strong>Create a skin</strong>.</p>
  `, `
    <p>Aggiungi un dettaglio allo skin: un cappello, un colore diverso per le scarpe oppure un simbolo sulla maglietta.</p>
  `, `
    <p>Clicca di nuovo su &quot;<strong>Wear</strong>&quot;.</p>
  `]) +
    `
<h3>Compito più difficile</h3>
` +
    ol([`
    <p>Scegli «mestiere» per il tuo crafter: fabbro, giardiniere o esploratore.</p>
  `, `
    <p>Rappresentalo attraverso la skin: un grembiule, un mantello o uno strumento che porta nella cintura.</p>
  `, `
    <p>Rispondi alla domanda in fondo alla pagina.</p>
  `]) +
    `
<h3>Come consegnare l&apos;attività</h3>
` +
    ol([`
    <p>Apri Skin Studio: qui puoi vedere il tuo crafter per intero.</p>
  `, `
    <p>Fai uno screenshot: 🪟 Windows — <strong>Win + Print Screen</strong> (il file comparirà in «Immagini → Screenshot»); 🍎 Mac — <strong>Cmd + Shift + 4</strong> e seleziona il crafter (il file comparirà sulla Scrivania).</p>
  `, `
    <p>Allega lo screenshot a questo esercizio.</p>
    ` +
    fileAnswer(), `
    <p>Scrivi che cosa hai aggiunto al tuo crafter qui in basso.</p>
  `]) +
    essay(`Che cosa hai aggiunto al tuo crafter?`, `Per esempio: ho aggiunto un grembiule da fabbro e un cappello verde lime.`) +
    spoiler(`Problemi con lo screenshot?`, ol([`
        <p>Chiedi a un adulto di aiutarti a fare uno screenshot.</p>
      `, `
        <p>Se non riesci proprio, fotografa lo schermo con il telefono e allega la foto.</p>
      `])) +
    spoiler(`Problemi tecnici: non riesci ad accedere a Skin Studio da casa`, ol([`
        <p>Accedi a Kodland con lo stesso account che usi durante la lezione.</p>
      `, `
        <p>Se non riesci, chiedi ai tuoi genitori di aiutarti ad accedere.</p>
      `]))
  }
];
/* =========================================================
   GUIDED TOUR STEPS
   Translate title, text and btn. Keep target / accept / read / side / wide / next / last as they are.
   ========================================================= */
CONTENT.guide = [
  { title:`Benvenuto in Classroom`, next:true,
    text:`Nel <b>nuovo modello educativo (EM)</b>, tutto ciò che ti serve per svolgere una lezione si trova <b>nella lezione stessa</b>, in Classroom. Non c’è una wiki né un documento separato: le indicazioni di ogni lezione accompagnano le sue schede.<br><br>Apriamole insieme.` },
  { title:`Apri i materiali della lezione`, target:'.tb-group', accept:['openTasks','toggleDropdown'],
    text:`I materiali della lezione sono in <b>Assignments</b>. Fai clic su <b>Assignments</b>: diventa blu quando ci passi sopra con il mouse.` },
  { title:`Scegli la prima scheda`, target:'#dd-0', accept:['pickActivity:0'],
    text:`Questo è l’elenco delle <b>attività</b> della lezione, in ordine. È la prima lezione del corso Minecraft.<br><br>Fai clic sulla prima.` },
  { title:`Due viste della stessa scheda`, next:true, wide:true,
    text:`Prima di proseguire, è importante capire <b>cosa vedi tu</b> e <b>cosa vede Sofia</b>. Siete sulla stessa scheda, ma vedete schermate diverse:<div class="views">
        <div class="view"><div class="vh">👩‍🏫 Cosa vedi <b>tu</b></div>
          <div class="mock"><div class="m-tn">Note per il tutor<small>solo per te</small></div><div class="mk-c">Contenuto della scheda</div></div></div>
        <div class="view"><div class="vh">👧 Cosa vede <b>Sofia</b></div>
          <div class="mock"><div class="mk-c">Contenuto della scheda</div></div></div>
      </div><ul class="c-list"><li>Il riquadro con il <b>bordo arancione tratteggiato</b> contiene le <b>Note per il tutor</b>. Sono scritte <b>all’interno della scheda</b>, insieme al contenuto.</li><li>Le vede solo il tutor. Sofia <b>non vede mai</b> le Note per il tutor: vede solo il contenuto della scheda. Non leggergliele ad alta voce.</li><li>Ogni scheda ha le proprie note: sono la prima cosa da consultare prima di affrontarla e durante il suo svolgimento.</li></ul>` },
  { title:`Le prime Note per il tutor`, target:'#taskScroll', side:true, read:{ scope:'#tn-first' },
    text:`Le note della <b>prima scheda</b> sono le più dettagliate della lezione: la panoramica e la storia, l’obiettivo e i risultati principali, il tuo <b>ruolo</b>, i <b>tempi</b> di ogni scheda, le <b>possibili difficoltà</b> e come <b>concludere</b> la lezione.<br><br>Nella prima lezione di un corso di solito c’è anche un <b>video esplicativo</b>: guardalo durante la preparazione.<br><br><b>Apri tutte le sezioni</b> e <b>scorri fino alla fine delle note</b> per continuare.` },
  { title:`Cosa vede Sofia`, target:'#taskScroll', side:true, read:{},
    text:`Sotto le note trovi la scheda come la vedrà <b>Sofia</b>: la storia e le indicazioni per prepararsi alla lezione.<br><br>Scorri <b>tutta la scheda</b>. Il pulsante Avanti si sblocca quando arrivi alla fine.` },
  { title:`Lead the group`, target:'#leadToggle', accept:['toggleLead'],
    text:`Ora attiva <b>Lead the group</b>. Solo tu hai questo interruttore: gli studenti non lo vedono.<div class="lead-demo">
        <div><span class="ld-sw"></span><b>OFF</b> — se passi a un’altra scheda o scorri, Sofia resta dov’era. Potrebbe guardare un altro contenuto.</div>
        <div><span class="ld-sw on"></span><b>ON</b> — Sofia vede nello stesso momento ogni scheda che apri e ogni scorrimento che fai.</div>
      </div>Fai clic sull’interruttore: diventa blu quando è attivo.` },
  { title:`Sofia ti segue`, target:'.vt.student', next:true,
    text:`<b>Lead the group</b> è attivo ✅ Guarda il riquadro video di Sofia: ora compare <b>Segue il tutor</b>.<br><br>Da questo momento:<ul class="c-list"><li>Sofia ha aperta la <b>stessa scheda</b> e vede lo stesso punto della pagina, senza le Note per il tutor.</li><li>Può fare clic su <b>Work independently</b> per esplorare in autonomia. Vedrà quindi un banner che indica dove ti trovi, con il pulsante <b>Return</b>.</li></ul>` },
  { title:`La scheda successiva`, target:'#btnNext', accept:['nextTask'],
    text:`La freccia verso destra ti porta alla <b>scheda successiva</b>. Dato che Lead the group è attivo, Sofia ti segue. Fai clic sulla freccia.` },
  { title:`Le note in ogni scheda`, target:'#taskScroll', side:true, read:{},
    text:`Questa scheda dà il benvenuto al gruppo e contiene una breve <b>domanda</b> a cui Sofia risponde sulla propria copia. Oltre al contenuto per lei, in fondo ha le sue <b>Note per il tutor</b>: sono più brevi delle prime.<br><br>Di solito indicano la <b>durata</b> della scheda, il suo <b>obiettivo</b>, <b>cosa dire</b> al gruppo, i <b>passaggi</b> e la <b>transizione</b> alla scheda successiva.<br><br>Leggi la scheda fino alla fine, comprese le Note per il tutor.` },
  { title:`Prosegui`, target:'#btnNext', accept:['nextTask'],
    text:`Fai clic su <b>Attività successiva</b> per passare alla prossima scheda.` },
  { title:`Frasi da usare con il gruppo`, side:true, target:'#taskScroll', read:{}, last:true, btn:`Termina ✓`,
    text:`Questa scheda presenta gli accordi del gruppo. Guarda le Note per il tutor: oltre alla durata e all’obiettivo, propongono una <b>frase da dire al gruppo</b> e il <b>passaggio successivo</b>, per dare continuità alla lezione da una scheda all’altra.<br><br>Scorri fino alla fine della scheda e leggi le Note per il tutor.<br><br>Ora sai tutto ciò che ti serve sul formato delle lezioni EM!` }
];
/* =========================================================
   FINISH SCREEN (the completion code is added by the page)
   ========================================================= */
CONTENT.finish = {
  kicker: `Guida completata`,
  title: `🎓 Ecco una lezione EM in Classroom`,
  intro: `Hai visto come sono organizzate le lezioni del nuovo modello educativo in Classroom e come guidare il gruppo:`,
  steps: [
    `La lezione è una serie di <b>schede</b> in <b>Assignments</b>: tutte le indicazioni si trovano all’interno della lezione.`,
    `Le <b>Note per il tutor</b> sono in ogni scheda e le vedi solo <b>tu</b>. Gli studenti non le vedono mai.`,
    `La <b>prima scheda</b> contiene le note più dettagliate: la storia, l’obiettivo, il tuo ruolo, i tempi, le possibili difficoltà e la conclusione; nella prima lezione di un corso, di solito c’è anche un video esplicativo.`,
    `Le schede successive hanno note più brevi: durata, obiettivo, cosa dire, passaggi e transizione alla scheda successiva.`,
    `<b>Lead the group</b> permette agli studenti di seguire la scheda che apri e il punto fino a cui scorri.`
  ],
  tip: `<b>Consiglio:</b> leggi le Note per il tutor di tutta la lezione <b>prima</b> di svolgerla.`,
  codeLabel: `🔑 Il tuo codice di completamento`,
  codeHint: `Copialo nella formazione per confermare che hai completato la guida.`,
  back: `← Torna alla formazione`,
  closeTab: `Chiudi questa scheda del browser per tornare alla formazione, poi inserisci lì il tuo codice di completamento.`
};
