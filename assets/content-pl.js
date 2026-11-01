/* ============================================================
   New Educational Model — Tutor training · POLISH content
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
window.CONTENT = { lang: 'pl' };

/* ---------------- Interface strings ---------------- */
CONTENT.ui = {
  pageTitle: 'Szkolenie: nowy model edukacyjny',
  footer: 'kodland · Nowy model edukacyjny · Szkolenie dla tutorów',
  devLink: '🛠 Deweloper',

  // Navigation
  logoSub: 'Nowy model edukacyjny',
  navCore: 'Podstawa {done}/{total}',
  navHome: '← Strona główna',
  navModules: '← Wszystkie moduły',
  navBackModule: '← Wróć do modułu',

  // Home
  heroKicker: '🚀 Szkolenie dla tutorów',
  heroTitle: '<span class="hl">Nowy</span> model edukacyjny',
  heroLead: 'Kodland zmienia sposób prowadzenia części swoich kursów. To szkolenie przygotuje Cię do pracy w nowym modelu. Liczba modułów: {n}, do przejścia po kolei. Każdy kończy się krótkim sprawdzianem, który odblokowuje następny.',
  fact1: '<b>We własnym tempie.</b> Twoje postępy zapisują się w tej przeglądarce.',
  fact2: '<b>Praktyka w komplecie.</b> Trzy symulacje — Backoffice, Classroom i Kodland Sparks — które możesz powtarzać do woli.',
  progAllDone: 'Moduły ukończone 🎉',
  progLabel: 'ukończonych modułów',
  moduleN: 'Moduł {n}',
  badgeDone: '✓ Ukończono · {score}%',
  badgeLocked: '🔒 Ukończ moduł {n}',
  badgeStart: 'Zaczynamy →',
  homeDoneTitle: 'Moduły ukończone!',
  homeDoneText: 'Ostatni krok: test DST na stronie szkoleń w LMS.',
  homeDoneBtn: 'Zobacz, co dalej →',

  // Module page and its check
  eyebrow: 'Moduł {n} z {total}',
  ctaQuizTitle: 'Sprawdzian modułu',
  ctaQuizText: 'Liczba krótkich pytań: {n}. Zdobądź co najmniej 70%, aby zaliczyć.',
  ctaRiskTitle: 'Sprawdzian modułu: wskaż ryzykowną strategię',
  ctaRiskText: 'Liczba prawdziwych sytuacji: {n}. <b style="color:#E5484D">Inaczej niż w pozostałych sprawdzianach: w każdym przypadku wybierasz strategię, która ZASZKODZI lekcji</b> — a nie tę dobrą. Zdobądź co najmniej 70%, aby zaliczyć.',
  lockOne: '🔒 Ukończ: {what} i wpisz jego kod powyżej, aby odblokować sprawdzian.',
  lockMany: '🔒 Ukończ: {what} i wpisz ich kody powyżej, aby odblokować sprawdzian.',
  listAnd: ' i ',
  startCheck: 'Zacznij sprawdzian →',
  retake: '🔁 Powtórz sprawdzian',

  // Simulations and completion codes
  launchSteps: ['Otwórz ją w nowej karcie.', 'Wykonaj wszystkie kroki, aż zobaczysz ekran końcowy z Twoim kodem.', 'Wróć do tej karty i wpisz kod poniżej.'],
  codeOk: '✅ <b>Ukończono: {sim}.</b> Kod zaakceptowany.',
  codeLabel: '<b>🔑 Kod ukończenia</b> — znajdziesz go na ostatnim ekranie: {sim}.',
  codePlaceholder: 'np. XX-0000-00',
  codeUnlock: 'Odblokuj',
  codeWrong: 'Ten kod jest nieprawidłowy. Sprawdź go na ostatnim ekranie symulacji.',

  // Small interactive pieces
  tapFlip: 'Dotknij, aby obrócić',
  mythReality: 'Rzeczywistość ✓',
  loopAgain: '<b>I jeszcze raz!</b> Refleksja staje się kolejnym celem — o jeden obrót głębiej.',
  ages: 'Wiek {age}',
  aiBar: 'Jak duży udział ma AI w projekcie',
  stageWas: 'Było: <s>{was}</s> → teraz:',
  stageOf: '{i} z {n}',
  stageWatch: 'Zobacz „{t}” na prawdziwej lekcji',
  stageFirst: 'Wróć do pierwszego',
  next: 'Dalej →',
  sortWrong: '✗ Nie do końca.',

  // Follow Mode demo (Module 2)
  fmNotes: '📒 Notatki dla tutora — widzisz je tylko Ty',
  fmFollowing: '🔗 Podąża za tutorem',
  fmStart: '👆 Sofia jest na tej samej lekcji, ale Lead the group jest wyłączone. Włącz przełącznik.',
  fmOn: '✅ <b>Lead the group jest WŁĄCZONE.</b> Sofia przeskoczyła do Twojej karty — ale zauważ: widzi ją <b>bez</b> Twoich notatek dla tutora. Teraz spróbuj kliknąć <b>Następna karta</b>.',
  fmOff: '⏸️ <b>Lead the group jest WYŁĄCZONE.</b> Sofia zostaje tam, gdzie jest, cokolwiek otworzysz.',
  fmMoved: '➡️ Przechodzisz do karty {t} — <b>Sofia idzie z Tobą</b>.',
  fmMovedAlone: '➡️ Przechodzisz do karty {t}, ale <b>Sofia nadal jest na karcie {s}</b>. Może patrzeć na coś innego. Włącz Lead the group.',

  // Closing timeline (Module 3)
  tlOpening: '<b>Początek.</b> Rozgrzewka i powitanie, nawiązanie do poprzedniej lekcji, sprawdzenie pracy domowej, cel lekcji.',
  tlCards: '<b>Karty.</b> Uczniowie budują, eksplorują, poprawiają i prezentują. Pilnuj zegara — zostało {left} min…',
  tlClose: '<b>Na {left} min przed końcem: czas na zakończenie.</b> Niezależnie od tego, w którym miejscu kart jesteś, zacznij rutynę zamykającą teraz.',
  tlRoutine: '<b>Rutyna zamykająca.</b> Podsumowanie przez uczniów → zapowiedź kolejnej lekcji → następna praca domowa.',
  tlBye: '<b>Do widzenia!</b> Wszyscy wychodzą, wiedząc, czego się nauczyli, co będzie dalej i co zrobić w domu.',

  // Videos
  watchExample: 'Zobacz prawdziwy przykład',
  comingSoon: 'wkrótce',
  close: 'Zamknij',
  videoDefault: 'Prawdziwa lekcja',
  soonTitle: 'Wideo już wkrótce',
  soonText: 'Tutaj zobaczysz ten fragment lekcji w prawdziwej klasie. Wideo jest w przygotowaniu i wkrótce się pojawi.',
  zoomBadge: '🔍 Kliknij, aby powiększyć',
  zoomAria: 'Otwórz wideo w większym oknie',
  zoomDefault: 'Wideo',
  zoomIn: 'Przybliż',
  zoomOut: 'Oddal',
  zoomReset: 'Resetuj',
  zoomHint: 'Powiększaj przyciskami + / −, kółkiem myszy lub dwukrotnym kliknięciem · przeciągaj, aby się przesuwać · Esc lub ✕ zamyka okno',

  // Checks (quiz engine)
  qmeta: '{e} Sprawdzian modułu {n} · {kind} {i} z {total}',
  qCase: 'Przypadek',
  qQuestion: 'Pytanie',
  riskQuestion: 'Która z tych strategii <span class="hurt">ZASZKODZI</span> tej części lekcji?',
  riskBanner: '⚠️ Uwaga: w tym sprawdzianie wybierasz <b>ZŁĄ</b> strategię — tę, która <b>ZASZKODZI</b> lekcji. Nie tę dobrą!',
  tfTrue: '✅ Prawda',
  tfFalse: '❌ Fałsz',
  openHint: '✍️ Napisz własną odpowiedź — co najmniej {min} znaków. Nie ma jednego właściwego sformułowania: zobaczysz wzorcową odpowiedź, z którą możesz ją porównać.',
  openPlaceholder: 'Wpisz tutaj swoją odpowiedź…',
  openSubmit: 'Wyślij odpowiedź',
  openRecorded: '✅ <b>Odpowiedź zapisana.</b> Odpowiedź wzorcowa — porównaj ją ze swoją:',
  fbRight: '✅ <b>Dobrze!</b> ',
  fbWrong: '❌ <b>Nie do końca.</b> ',
  fbRiskRight: '✅ <b>Zgadza się — to strategia, która zaszkodziłaby lekcji.</b> ',
  fbRiskWrong: '❌ <b>Ta strategia akurat pomaga lekcji.</b> Ryzykowna jest zaznaczona na zielono. ',
  nextQuestion: 'Następne pytanie →',
  seeResult: 'Zobacz mój wynik →',

  // Result of a check
  passedTitle: 'Zaliczone!',
  failTitle: 'Niewiele zabrakło',
  scoreLine: 'Poprawnych odpowiedzi: <b>{score} z {n}</b>.',
  failText: 'Potrzebujesz co najmniej 70%. Powtórz materiał modułu i spróbuj ponownie — możesz podchodzić do sprawdzianu tyle razy, ile potrzebujesz.',
  nextUnlocked: '<b>Moduł {n} · {title}</b> został odblokowany.',
  goModule: 'Przejdź do modułu {n} →',
  allDoneText: 'Ukończyłeś całe szkolenie.',
  seeNext: 'Zobacz, co dalej →',
  reviewModule: '📖 Powtórz moduł',

  // Final page
  doneTitle: 'Moduły ukończone!',
  doneText: `<p>Już prawie koniec! Wróć na stronę szkoleń w LMS, z której otworzyłeś to szkolenie. Test DST znajduje się tuż pod szkoleniem.</p>
    <p>👉 <b>Aby szkolenie zostało uznane za ukończone, musisz wykonać i zaliczyć test DST.</b> Jeśli nie wykonasz testu DST, szkolenie pozostanie nieukończone i może wygasnąć.</p>
    <p>Minimalny wynik zaliczający to <b>80%</b>.</p>
    <p>Powodzenia! ❤️</p>`,
  doneBadge: '✓ Gotowe',
  doneNexts: [
    ['📒', '<b>Przed każdą lekcją:</b> przeczytaj Teacher Notes w Backoffice — i sprawdź, czy nie ma aktualizacji.'],
    ['🔑', '<b>Kodland Sparks:</b> dane logowania otrzymasz od działu Operations lub Teaching.'],
    ['🏁', '<b>Na każdej lekcji:</b> porządny początek, pytania wymagające uzasadnienia i 5–7 minut na zakończenie.'],
    ['🤖', '<b>Gdy uczniowie korzystają z AI:</b> AI proponuje, autor decyduje.']
  ],
  doneBack: 'Wróć do modułów',

  // Locked messages
  lockedTitle: 'Nadal zablokowane',
  lockedModule: 'Najpierw ukończ moduł {n}.',
  lockedStep: 'Ukończ poprzedni krok, aby odblokować ten.',
  ok: 'OK'
};

/* ============================================================
   MODULES — titles, descriptions, objectives and section names (keep id, n, e, color, check, needs keys)
   ============================================================ */
CONTENT.modules = [
  { id:'m1', n:1, e:'🧩', color:'#C4F046', title:'Metodyka nowego modelu', check:'quiz',
    desc:'Czym jest nowy model, jaka pedagogika za nim stoi, jak działa feedback i jak prowadzić uczniów w pracy z AI.',
    obj:'Zrozum, czym nowy model edukacyjny jest, a czym nie jest, na jakich czterech filarach się opiera, jak działa feedback i jak pomagać uczniom mądrze korzystać z AI.',
    offer:[['🌱','Zrozumiesz nowy model nauczania.'],['🏛️','Poznasz cztery filary, które kształtują każdą lekcję.'],['💬','Zobaczysz, jak działa feedback w czterech kierunkach.'],['🧭','Zrozumiesz, jak zmienia się Twoja rola jako tutora.']],
    sections:[ ['what','🔍','Czym jest nowy model'], ['pillars','🏛️','Cztery filary modelu'], ['people','💬','Feedback z czterech stron'] ] },
  { id:'m2', n:2, e:'🛠️', color:'#3E7BFA', title:'Przygotowanie techniczne', check:'quiz',
    needs:[['boCode','symulację BO'],['classCode','przewodnik po Classroom'],['sparksCode','przewodnik po Kodland Sparks']],
    desc:'Backoffice i Teacher Notes, Classroom z Follow Mode oraz Kodland Sparks — z trzema symulacjami do przećwiczenia.',
    obj:'Znajdź kurs i jego Teacher Notes w Backoffice, poprowadź lekcję w Classroom z Follow Mode i dowiedz się, co uczniowie robią w Kodland Sparks. Każda część kończy się symulacją, która daje kod ukończenia.',
    offer:[['🗂️','Znajdziesz wszystkie materiały kursu w Backoffice — wiki nie jest już używane.'],['📒','Będziesz czytać Teacher Notes i aktualizacje przed każdą lekcją.'],['🎥','Zrozumiesz Follow Mode, karty aktywności i pokazy ekranu.'],['⚡','Poznasz Kodland Sparks, gdzie uczniowie tworzą i publikują.']],
    sections:[ ['bo','🗂️','Backoffice: tu mieszka kurs'], ['classroom','🎥','Na lekcji: karty, Follow Mode i pokazy'], ['sparks','⚡','Kodland Sparks: studio uczniów'] ] },
  { id:'m3', n:3, e:'⭐', color:'#F03D9E', title:'Jakość lekcji', check:'risk',
    desc:'Jak zbudowana jest lekcja — i trzy nawyki, które tę strukturę utrzymują: porządny początek, pytania wymagające uzasadnienia i stałe zakończenie.',
    obj:'Zrozum, jak zbudowana jest lekcja w nowym modelu, na co patrzą oceny jakości, i wypracuj trzy nawyki, które chronią strukturę każdej lekcji: porządny początek, pytania, które zmuszają uczniów do tłumaczenia swojego rozumowania, oraz stałą rutynę zamykającą.',
    offer:[['🧱','Zrozumiesz, jak zbudowana jest lekcja w nowym modelu.'],['🎬','Będziesz zaczynać każdą lekcję porządnie: rozgrzewka, nawiązanie do poprzedniej lekcji, praca domowa, cel lekcji.'],['🧠','Będziesz zadawać pytania, które zmuszają konkretnych uczniów do wyjaśniania.'],['🏁','Będziesz kończyć każdą lekcję stałą, 5–7-minutową rutyną.']],
    sections:[ ['structure','🧱','Jak zbudowana jest lekcja'], ['seeing','🔎','Na co patrzą oceny jakości'], ['opening','🎬','Porządny początek'], ['reasoning','🧠','Pytania, które skłaniają do myślenia na głos'], ['closing','🏁','Stała rutyna zamykająca'], ['metrics','📊','Za co nadal odpowiadasz: wskaźniki'], ['qcheck','✅','Twoja lista kontrolna jakości lekcji'] ] },
  { id:'m4', n:4, e:'🤖', color:'#8B5CF6', title:'Wprowadzenie do promptów dla tutorów', check:'quiz',
    desc:'Jedyna naprawdę nowa umiejętność w tych kursach. Nie chodzi o techniczną stronę AI — tylko o to, jak napisać prompt i jak pomóc uczniowi napisać własny.',
    obj:'Poznaj prompty na tyle, by prowadzić uczniów, gdy piszą własne na lekcji. Chodzi o praktyczną umiejętność, nie o teorię techniczną.',
    offer:[['✍️','Zrozumiesz, czym jest prompt i co zawiera dobry prompt.'],['💻','Napiszesz prompty, które generują i debugują kod.'],['🎨','Napiszesz prompty do obrazów i wideo.'],['⚠️','Unikniesz najczęstszych błędów.']],
    sections:[ ['why4','💡','Dlaczego powstał ten moduł'], ['whatp','❓','Poznajemy AI: czym jest prompt?'], ['goodp','🧩','Co powinien zawierać dobry prompt?'], ['codep','💻','Wskazówki do promptów generujących kod'], ['imgp','🎨','Wskazówki do promptów generujących obrazy i wideo'], ['mistp','⚠️','Typowe błędy'] ] }
];

/* ============================================================
   Names of the three simulations
   ============================================================ */
CONTENT.sims = { boCode:'Symulacja BO', classCode:'Przewodnik po Classroom', sparksCode:'Przewodnik po Kodland Sparks' };

/* ============================================================
   MODULE CHECKS — "a" is the number of the correct option (0 = first). Keep it as it is.
   ============================================================ */
CONTENT.quiz = {
  m1:[
    { ctx:'Koleżanka usłyszała o nowym modelu edukacyjnym i się martwi: „Czyli teraz zmieniają się wszystkie nasze kursy?”',
      q:'Jaka jest właściwa odpowiedź?',
      o:['Tak: od teraz każdy kurs Kodland działa według nowego modelu.',
         'Zmienią się tylko kursy, które mają mniej uczniów.',
         'Nie, tylko grupy, które prowadzisz w nowym modelu. Grupy, które już masz na starych kursach, pozostaną bez zmian, chyba że dostaniesz inną informację.'],
      a:2, e:'Nowy model jest wprowadzany stopniowo. Grupy, które już uczą się w innym formacie, zostają przy nim — dowiesz się, jeśli któraś z Twoich grup się zmieni.' },
    { ctx:'Planujesz pierwsze minuty lekcji: wyjaśnić nowe pojęcie, pokazać narzędzie, a potem rozdać szablon, żeby uczniowie zbudowali projekt.',
      q:'Co jest nie tak z tym planem w nowym modelu?',
      o:['Nic — pojęcia trzeba wyjaśnić, zanim uczniowie będą mogli z nich korzystać.',
         'Jest indukcyjny. Zacznij od gotowego, działającego wyniku, zbadajcie go razem, a Twoje wyjaśnienie niech odpowie na to, co uczniowie już zauważyli.',
         'Wyjaśnienie pojęcia powinna zrobić AI zamiast Ciebie.'],
      a:1, e:'Uczenie dedukcyjne odwraca dawną kolejność: najpierw pokaż działający wynik, rozbierzcie go razem, a wyjaśniaj wtedy, gdy uczniowie sami potrzebują odpowiedzi.' },
    { ctx:'Uczeń od dziesięciu minut próbuje naprawić ten sam problem. Nadal nie działa i mówi: „Po prostu jestem w tym słaby.”',
      q:'Która odpowiedź pasuje do growth mindset w tym modelu?',
      o:['„Nie martw się, naprawię to za Ciebie, żebyśmy mogli iść dalej.”',
         '„To proste — powinieneś to już umieć.”',
         '„To jeszcze nie działa — to typowy problem. Pokaż mi, co próbowałeś, i poszukajmy kolejnej strategii.”'],
      a:2, e:'Błąd to normalny etap rozwoju. Nazwij go normalnym i oddaj uczniowi kolejny krok — naprawienie za niego odbiera mu naukę.' },
    { ctx:'Uczeń prosi AI o napisanie całej logiki swojej gry i wkleja ją do projektu bez żadnych zmian.',
      q:'Którą zasadę modelu to łamie?',
      o:['„AI proponuje, autor decyduje” — AI może pomagać, ale nigdy nie powinna budować rdzenia projektu zamiast ucznia.',
         'Żadnej: AI może robić wszystko, o ile projekt działa.',
         'Zasadę, że AI można używać tylko do obrazów.'],
      a:0, e:'W każdym wieku zasada jest ta sama: AI proponuje, autor decyduje. To, ile AI jest używane, zależy od wieku, ale uczeń zawsze jest właścicielem rdzenia projektu.' }
  ],
  m2:[
    { q:'Jak w Backoffice dotrzeć do aktywności i Teacher Notes lekcji w tych kursach?',
      o:['Groups → Twoja grupa → link do wiki.',
         'Courses → kurs → Assignments → wybierasz lekcję → otwierasz aktywność.',
         'Profil → Harmonogram → lekcja.'],
      a:1, e:'Do treści kursu wchodzi się przez Courses, nie przez Groups. W Assignments widzisz karty aktywności lekcji — a Teacher Notes są wewnątrz każdej karty. Tabela Study guides jest pusta celowo.' },
    { ctx:'W zeszłym miesiącu prowadziłeś Lekcję 3 z inną grupą i poszła naprawdę dobrze.',
      q:'Co robisz, zanim poprowadzisz ją ponownie?',
      o:['Nic: znasz tę lekcję, więc tym razem możesz pominąć notatki.',
         'Czytasz Teacher Notes jeszcze raz i sprawdzasz aktualizacje — kursy są stale ulepszane, a aktywności, czasy czy notatki mogą się zmienić.',
         'Szukasz prezentacji w wiki.'],
      a:1, e:'Czytanie Teacher Notes to część przygotowania do każdej lekcji, za każdym razem. Wersja, którą prowadziłeś, może nie być wersją, którą będziesz prowadzić.' },
    { ctx:'Masz włączone Lead the group. W połowie lekcji uczeń klika „Work independently” i wraca do wcześniejszej karty.',
      q:'Co dzieje się od tego momentu?',
      o:['Uczeń zostaje usunięty z lekcji i musi dołączyć ponownie.',
         'Uczeń widzi baner pokazujący, gdzie jesteś, z przyciskiem Return; Ty widzisz przy jego imieniu, że pracuje samodzielnie.',
         'Jego odpowiedzi na Twojej karcie są wysyłane do Ciebie na żywo.'],
      a:1, e:'Follow Mode nigdy nie zamyka ucznia w klatce. Może pracować na własną rękę, widzieć, gdzie jesteś, i wrócić jednym kliknięciem.' },
    { q:'Chcesz zademonstrować krok w narzędziu, na przykład w edytorze Scratch. Jaki jest właściwy sposób?',
      o:['Udostępnić ekran z otwartą kartą lekcji, żeby uczniowie widzieli instrukcje i Twoje notatki.',
         'Udostępnić tylko kartę lub okno narzędzia — nigdy karty lekcji, na której widać Twoje Teacher Notes.',
         'Niczego nie demonstrować: karty wszystko wyjaśniają.'],
      a:1, e:'Follow Mode służy do kart: każdy uczeń ma własną kopię i nigdy nie widzi Twoich notatek. Udostępnianie ekranu pokazuje dokładnie to, co masz na ekranie — więc udostępniaj narzędzie, nie kartę lekcji.' },
    { ctx:'Uczniowie rozwiązali pytanie wyboru, a później aktywność, w której mieli wkleić link do swojego projektu.',
      q:'Które stwierdzenie jest prawdziwe?',
      o:['Oba zapisują się automatycznie: uczniowie nigdy nie muszą niczego klikać.',
         'Pytanie wyboru zapisuje wynik automatycznie; w aktywności z linkiem uczniowie muszą kliknąć „Send”.',
         'Oba wymagają przycisku Submit, inaczej nic się nie zapisze.'],
      a:1, e:'Pytania wyboru, pola tekstowe i formuły oraz przeciąganie i upuszczanie zapisują wynik automatycznie. Aktywności, w których uczniowie wysyłają tekst, linki lub pliki, wymagają przycisku „Send”.' },
    { q:'Jak uczniowie i tutorzy wchodzą do Kodland Sparks?',
      o:['Wszyscy używają loginu do Backoffice.',
         'Uczniowie wchodzą jednym przyciskiem z głównej platformy; tutorzy używają osobnych danych logowania od działu Operations lub Teaching.',
         'Uczniowie i tutorzy rejestrują się sami na stronie.'],
      a:1, e:'Uczniowie korzystają z jednokrotnego logowania (SSO) z platformy. Tutorzy dostają osobne dane logowania od Operations lub Teaching — do tego czasu poznajesz platformę dzięki przewodnikowi.' }
  ],
  // Module 3: in every case, the tutor must spot the strategy that would HARM that part of the lesson
  m3:[
    { part:'👋 Rozgrzewka', ctx:'Uczniowie dołączają po cichu, z wyłączonymi kamerami. Nikt się nie odzywa.',
      o:['Witasz każdego ucznia po imieniu i zadajesz krótkie pytanie o jego tydzień.',
         'Pomijasz rozgrzewkę i od razu przechodzisz do projektu, żeby oszczędzić czas.',
         'Sprawdzasz obecność, gdy uczniowie się rozkręcają, i zachęcasz ich, by zareagowali emotikoną.'],
      a:1, e:'Pominięcie rozgrzewki oszczędza dwie minuty, ale kosztuje relację. Krótki, ciepły początek to to, co rozgaduje cichych uczniów — i angażuje ich przez resztę lekcji.' },
    { part:'📓 Sprawdzenie pracy domowej', ctx:'Połowa grupy nie odrobiła pracy domowej.',
      o:['Pytasz, kto utknął i co się stało — może to był problem techniczny.',
         'Prosisz jednego ucznia o pokazanie pracy domowej i nazwanie jednej konkretnej rzeczy, która się udała.',
         'Mówisz „No dobrze, zero dla Ciebie” i idziesz dalej, nie pytając dlaczego.'],
      a:2, e:'Brak pracy domowej to sygnał, a nie tylko zero. Dowiedzenie się, czy uczeń utknął, to sposób, by mu pomóc — i by nie został w tyle.' },
    { part:'🧠 Rozumienie', ctx:'Wyjaśniasz nowy pomysł. Gdy pytasz „Czy jest jasne?”, wszyscy mówią tak — ale podejrzewasz, że naprawdę nie zrozumieli.',
      o:['Prosisz konkretnego ucznia, po imieniu, by wyjaśnił, dlaczego to działa.',
         'Przyjmujesz „tak” i idziesz dalej: skoro mówią, że jest jasne, to jest jasne.',
         'Prosisz, by przewidzieli, co się stanie, jeśli coś zmienicie, a potem sprawdzacie to razem.'],
      a:1, e:'Na „Czy jest jasne?” prawie zawsze pada „tak”. Pójście dalej bez sprawdzenia oznacza, że uczniowie utkną później — poproś kogoś, by wyjaśnił swoje rozumowanie.' },
    { part:'📋 Podsumowanie', ctx:'Zostało 7 minut, a grupa nie skończyła ostatniej karty.',
      o:['Pracujecie do samego końca, żeby dokończyć kartę, i pomijasz podsumowanie.',
         'Zaczynasz rutynę zamykającą od razu: niedokończona karta może być kontynuowana na następnej lekcji lub w domu.',
         'Prosisz dwóch lub trzech uczniów, by powiedzieli, czego dziś się nauczyli.'],
      a:0, e:'Praca do ostatniej sekundy to dokładnie ten sposób, w jaki giną podsumowanie, zapowiedź i praca domowa. Zacznij zamknięcie na czas — karta może poczekać, zamknięcie nie.' },
    { part:'🔮 Zapowiedź i praca domowa', ctx:'To ostatnia minuta lekcji, a uczniowie zaraz wyjdą.',
      o:['Łączysz zapowiedź z ich projektem: jedno zdanie, które wzbudza ciekawość na następny raz.',
         'Wyjaśniasz pracę domową w jednym lub dwóch zdaniach i przypominasz, jak ją oddać.',
         'Odczytujesz szybko linijkę zapowiedzi, gdy wychodzą, i mówisz „praca domowa jest na platformie”.'],
      a:2, e:'Pospieszna zapowiedź i niewyjaśniona praca domowa oznaczają, że uczniowie wychodzą, nie wiedząc, co będzie dalej. Jedno motywujące zdanie i jasne wyjaśnienie zajmują mniej niż dwie minuty.' }
  ],
  m4:[
    { ctx:'Pomagasz uczniowi zamienić pomysł na grę w Scratch w prompt.',
      q:'Który prompt najprawdopodobniej da użyteczny wynik za pierwszym razem?',
      o:['„Zbuduj grę z kotem i przeszkodami, podobną do gier typu endless runner, z zachowaniem dobrych zasad projektowania gier.”',
         '„Stwórz grę w Scratch: sprite kota porusza się w lewo i w prawo strzałkami, przeszkody spadają z góry z rosnącą prędkością, wynik rośnie co sekundę przetrwania, gra kończy się po 3 kolizjach.”',
         '„Zrób fajną i wciągającą grę dla 8-latka, która uczy go o przeszkodach i przetrwaniu, podobną do Flappy Bird, ale oryginalną.”',
         '„Stwórz grę 2D w Scratch z jasnymi zasadami, systemem punktacji i rosnącym z czasem poziomem trudności.”'],
      a:1, e:'Tylko ten ma konkretne, jednoznaczne mechaniki: ruch, sposób pojawiania się przeszkód, wyzwalacz punktacji, warunek końca. Pozostałe <i>brzmią</i> konkretnie, ale opierają się na subiektywnych określeniach — „dobre zasady projektowania gier”, „fajna i wciągająca”, „jasne zasady” — które AI musi interpretować samodzielnie.' },
    { ctx:'Pierwszy prompt ucznia do obrazu dał postać z niewłaściwą paletą kolorów. Wszystko inne — poza, styl, tło — wyszło dobrze.',
      q:'Jaki jest najlepszy następny krok?',
      o:['Napisać cały prompt od nowa, z większą liczbą szczegółów w każdym miejscu, żeby nie powtórzyć tego samego błędu.',
         'Uruchomić dokładnie ten sam prompt jeszcze raz, bo wynik AI jest w pewnym stopniu losowy i druga próba często to naprawia.',
         'Wysłać kolejny prompt, który zmienia tylko paletę kolorów, a resztę opisu zostawia bez zmian.',
         'Dodać kilka dodatkowych przymiotników opisujących pożądany nastrój, żeby AI miała więcej kontekstu.'],
      a:2, e:'Wyodrębnienie jednej zmiennej, która była błędna, jest szybsze i pewniejsze niż zaczynanie od nowa, liczenie na losowość czy dodawanie niezwiązanych szczegółów, które nie rozwiązują faktycznego problemu.' },
    { ctx:'Pomagasz uczniowi w wieku 13+ zdebugować funkcję w Pythonie za pomocą AI.',
      q:'Który prompt odzwierciedla najskuteczniejsze podejście do rozwiązywania problemów?',
      o:['„Ten kod nie działa, napraw go: [kod]”',
         '„Ta funkcja powinna zwracać średnią z listy, ale zwraca None, gdy lista ma jeden element. Oto kod: [kod]. Co powoduje, że ten konkretny przypadek zawodzi?”',
         '„Przepisz ten kod z użyciem lepszych praktyk i upewnij się, że działa: [kod]”',
         '„Wyjaśnij, co jest nie tak z tym kodem, i daj mi poprawioną wersję: [kod]”'],
      a:1, e:'Wskazuje dokładnie oczekiwane zachowanie, dokładnie zaobserwowany błąd i konkretny przypadek brzegowy — dzięki temu AI może wycelować w prawdziwy bug zamiast zgadywać zakres albo przepisywać więcej, niż trzeba.' },
    { ctx:'Dwóch tutorów pisze prompty do tego samego zadania generowania wideo. Tutor A pisze jeden długi, szczegółowy prompt, obejmujący od razu styl, temat i tło. Tutor B pisze najpierw krótszy prompt, sprawdza wynik, a potem poprawia.',
      q:'Które stwierdzenie jest najtrafniejsze?',
      o:['Podejście Tutora A jest zawsze lepsze, bo więcej szczegółów na początku zmniejsza liczbę potrzebnych iteracji.',
         'Podejście Tutora B jest zawsze lepsze, bo krótsze prompty są z natury łatwiejsze do przetworzenia dla AI.',
         'Oba mogą działać, ale iteracyjne podejście Tutora B ułatwia wskazanie, który konkretny szczegół spowodował niepożądany wynik.',
         'Żadne podejście nie ma znaczenia, bo jakość wyniku zależy tylko od używanego modelu AI, a nie od promptu.'],
      a:2, e:'Podstawową zasadą tego modułu jest iteracja i wyodrębnianie zmiennych. Same szczegóły nie gwarantują sukcesu, a iterowanie sprawia, że przyczyna i skutek są znacznie czytelniejsze niż przy robieniu wszystkiego w jednym dużym prompcie.' },
    { open:true, min:180,
      ctx:'Uczeń z Twojej grupy chce dodać podwójny skok do swojej gry platformowej. Wpisuje do AI: <i>„zrób lepszy skok”</i>.',
      q:'Przepisz to na prompt, który najpewniej zadziała za pierwszym razem. Napisz rzeczywisty tekst promptu, który pomógłbyś uczniowi stworzyć, a potem dodaj jedną linijkę o tym, dlaczego Twój będzie lepszy.',
      model:'Mocny prompt spełnia większość z poniższych: <ul><li><b>Nazywa platformę</b> — „W Scratch…” — żeby AI nie zgadywała środowiska.</li><li><b>Określa dokładne zachowanie i jego wyzwalacz:</b> „gdy klawisz spacji zostanie naciśnięty, a kot jest już w powietrzu, skacze drugi raz”.</li><li><b>Wyznacza ograniczenie:</b> „tylko raz na jeden upadek” oraz „nie zmieniaj istniejących bloków ruchu”.</li><li><b>Prosi o wyjaśnienie:</b> „powiedz mi, które bloki dodałeś i gdzie”.</li></ul><p style="margin-top:8px">A uzasadnienie: wyodrębnia <b>jedną</b> mechanikę, precyzyjnie opisuje oczekiwane zachowanie i ogranicza to, co może się zmienić — więc AI nie ma niczego do wymyślania. „Zrób lepszy skok” zostawia każdą z tych decyzji AI.</p>' }
  ]
};

/* ============================================================
   STAGE CAROUSELS (Module 3) — keep e, c and v
   ============================================================ */
CONTENT.stagesets = {
  blocks:[
    { e:'👋', t:'Rozgrzewka — 2 do 4 minut', was:'Warm-Up', ph:'Początek', c:'#BDE7FF', goal:'Nadal istnieje, ale jest krótka: powitanie, kamera i mikrofon, reakcja. W niektórych lekcjach jest sprawdzenie nastroju.',
      d:['Wykorzystaj ją do nawiązania relacji: krótka rozmowa albo pytanie o zainteresowania i samopoczucie.','Sprawdź obecność teraz, gdy uczniowie się rozkręcają — nie na końcu.'] },
    { e:'🔧', t:'Punkt kontrolny techniczny', was:'Powtórzenie poprzedniej lekcji', ph:'Początek', c:'#BDE7FF', goal:'Powtórzenie staje się punktem kontrolnym: czy poprzedni projekt się otwiera i działa? Pojęć nie tłumaczy się ponownie — sprawdzasz tylko, czy punkt wyjścia jest gotowy.',
      d:['W niektórych lekcjach powtórzenie i sprawdzenie pracy domowej to jedno zadanie na platformie.','Jeśli projekt się nie otwiera, użyj szablonu zapasowego — nikt nie zostaje na lodzie.'] },
    { e:'🎬', t:'Cel jest pokazywany, a nie tłumaczony', was:'Cel lekcji', ph:'Początek', c:'#FFF1B8', goal:'Cel pokazujesz na gotowym wyniku — wideo, GIF-ie albo działającym projekcie — jako pierwszym bodźcu lekcji.',
      d:['Najpierw pokaż wynik, potem zapytaj, co zauważają.','Wyjaśnienie niech przyjdzie później, jako odpowiedź.'] },
    { e:'🔀', t:'Teoria i praktyka są połączone', was:'Teoria i praktyka', ph:'Część główna', c:'#E4FFC2', goal:'Uczniowie najpierw eksplorują i mierzą się z wyzwaniem; wyjaśnienie pojawia się dokładnie wtedy, gdy go potrzebują.',
      d:['Dawaj jedną podpowiedź naraz — nie rozwiązanie.','Błędy są materiałem do nauki, a nie porażkami.'] },
    { e:'📋', t:'Podsumowanie — interaktywne i wspólne', was:'Podsumowanie lekcji', ph:'Zakończenie', c:'#FFD9EC', goal:'Bardziej interaktywne i grupowe: małe quizy, na które każdy uczeń odpowiada na platformie, oraz krótka lista tego, czego się nauczyli, którą razem omawiacie.',
      d:['Uczniowie mówią, czego się nauczyli — Ty nie podsumowujesz za nich.','To pierwszy krok Twojej rutyny zamykającej (poniżej).'] },
    { e:'🏠', t:'Praca domowa — następna wersja', was:'Zadanie domowe', ph:'Zakończenie', c:'#FFD9EC', goal:'Praca domowa to następna wersja tego samego opublikowanego projektu — albo misja, która rozwija to, czego właśnie się nauczyli. Nie osobne ćwiczenie.',
      d:['Wyjaśnij ją jasno, zanim wyjdą.','Przypomnij, żeby opublikowali nową wersję i wysłali link.'] },
    { e:'🔮', t:'Zapowiedź — jedno motywujące zdanie', was:'Zapowiedź następnej lekcji', ph:'Zakończenie', c:'#FFD9EC', goal:'To jedno zdanie, a nie osobny segment — ale nie odczytuj tylko linijki. Wykorzystaj ją do motywowania.',
      d:['Przeczytaj następną lekcję przed prowadzeniem, żeby móc zbudować prawdziwe oczekiwanie.','Połącz ją z tym, co właśnie zbudowali.'] }
  ],
  open:[
    { e:'👋', t:'Rozgrzewka i powitanie', ph:'Początek · 1', c:'#BDE7FF', v:'warmup', goal:'Nawiąż relację, zanim zaczniesz uczyć: wita każdego ucznia po imieniu, sprawdź kamerę i dźwięk i daj im powód do uśmiechu.',
      d:['Witaj każdego ucznia po imieniu, gdy się pojawia.','Jednominutowe pytanie o ich tydzień lub zainteresowania.','Sprawdź obecność, gdy się rozkręcają.'],
      say:['„Cześć Leo! Miło Cię widzieć. Krótko, zanim zaczniemy: w jaką grę grałeś w tym tygodniu?”'] },
    { e:'🔗', t:'Nawiązanie do poprzedniej lekcji', ph:'Początek · 2', c:'#C9F2D6', v:'link', goal:'Przypomnij uczniom, na jakim etapie jest ich projekt i dlaczego dzisiejsza lekcja z niego wynika — historia trwa dalej.',
      d:['Poproś ucznia, by opowiedział grupie, co zbudował ostatnio.','Połącz to z dzisiejszą misją jednym zdaniem.','Podtrzymuj historię kursu: „Dzisiaj naszą misją jest…”.'],
      say:['„Ana, przypomnij nam: co potrafił Twój projekt na koniec ostatniej lekcji?”','„Ostatnio Twoja gra dostała bohatera. Dziś bohater dostaje cel.”'] },
    { e:'📓', t:'Sprawdzenie pracy domowej', ph:'Początek · 3', c:'#FFF1B8', v:'homework', goal:'Sprawdź następną wersję, nad którą pracowali w domu — i zauważ, kto utknął.',
      d:['Poproś jednego lub dwóch uczniów o pokazanie pracy domowej.','Nazwij jedną konkretną rzecz, która się udała.','Brak pracy domowej? Sprawdź, czy uczeń utknął technicznie — a nie tylko wpisz zero.'],
      say:['„Mia, pokaż nam swoją nową wersję. Dlaczego wybrałaś te kolory?”'] },
    { e:'🎯', t:'Cel lekcji', ph:'Początek · 4', c:'#E4FFC2', v:'goal', goal:'Ustal, do czego zmierza dzisiejsza lekcja. To ostatni etap przed rozpoczęciem pracy samodzielnej.',
      d:['Wyjaśnij cel dzisiejszego projektu w jednym lub dwóch zdaniach.','Poproś ucznia, by powtórzył plan własnymi słowami.'] }
  ],
  close:[
    { e:'📋', t:'Podsumowanie (recap)', ph:'Ostatnie 5–7 min · 1', c:'#FFD9EC', v:'recap', goal:'To uczniowie mówią, czego się nauczyli — nie Ty. Skorzystaj z quizu lub listy podsumowującej na karcie i pozwól im odpowiadać.',
      d:['Zapytaj 2–3 uczniów, czego dziś się nauczyli.','Pytaj dlaczego lub jak — nie „Czy jest jasne?”.','Doceń jedną konkretną rzecz, którą osiągnęła grupa.'],
      say:['„Tom, co się dzieje, gdy gra się rozpoczyna — i dlaczego?”'] },
    { e:'🔮', t:'Zapowiedź następnej lekcji', ph:'Ostatnie 5–7 min · 2', c:'#E9DDFF', v:'teaser', goal:'Jedno zdanie, które sprawia, że chcą wrócić. Działa tylko wtedy, gdy przeczytałeś następną lekcję.',
      d:['Przeczytaj następną lekcję podczas przygotowań.','Połącz zapowiedź z ich projektem.','Niech będzie krótka i ekscytująca — obietnica, a nie streszczenie.'],
      say:['„Następnym razem na drodze Twojego bohatera pojawi się coś niebezpiecznego… czy mu się uda?”'] },
    { e:'🏠', t:'Następna praca domowa', ph:'Ostatnie 5–7 min · 3', c:'#C9F2D6', v:'nexthw', goal:'Wyjaśnij następną wersję projektu, żeby każdy dokładnie wiedział, co zrobić — i żeby ją oddał.',
      d:['Wyjaśnij pracę domową w jednym lub dwóch zdaniach.','Przypomnij, by kliknęli „Send”, gdy oddają link.','Pożegnaj się w pozytywnym tonie.'],
      say:['„Na następny raz: dodaj do swojej gry jeden nowy szczegół, opublikuj ją i wyślij mi link.”'] }
  ]
};

/* ============================================================
   SMALL DATA LISTS — Learning Loop, AI per age, prompt and question examples
   ============================================================ */
CONTENT.loop = [
  ['🎯','Cel','Lekcja zaczyna się od tego, co ma działać na koniec dzisiejszych zajęć — pokazane, a nie wyjaśnione.'],
  ['⚡','Szybki prototyp','Uczniowie szybko dostają coś działającego: szablon, pierwszą wersję, pierwszy wynik.'],
  ['🐞','Trudność','Coś jeszcze nie działa. To oczekiwane — tu dzieje się nauka.'],
  ['🧭','Strategia / podpowiedź','Dajesz jedną podpowiedź naraz albo pytanie — nie rozwiązanie.'],
  ['📈','Ulepszenie','Uczeń to naprawia i poprawia: własna wersja, własne decyzje.'],
  ['🎤','Prezentacja','Pokazują efekt: Tobie, grupie, w Kodland Sparks.'],
  ['💭','Refleksja','Jaki miałem problem? Jakiej strategii użyłem? Jaki jest mój następny krok?']
];
CONTENT.ages = {
  a:{ e:'🧒', age:'8–9', who:'Kursy dla najmłodszych uczniów', model:'Prowadzona nauka projektowa wspierana przez AI.',
      p:'Narzędzia bliskie tym, które uczniowie już znają, a AI pośredniczona przez tutora i AI Buddy. <b>Poczucie „to ja to zrobiłem” to wartość, którą trzeba chronić.</b> AI może pojawić się później w kursie, jako zabawny, ograniczony element.',
      test:'Test odwrotny', tt:'Projekt musi pozostać w 100% wykonalny i sensowny <b>bez</b> AI. AI usuwa tylko rutynowe utrudnienia — nigdy akt twórczy.', ai:20 },
  b:{ e:'🧑', age:'10–12', who:'Kursy dla preteenów', model:'Kierowana nauka projektowa, AI jako materiał.',
      p:'Uczeń jest właścicielem i wykonawcą twórczego rdzenia; AI generuje surowy materiał — sprite’y, dźwięki, teksty — który uczeń dobiera, edytuje i składa. AI jest „partnerem do sparingu”.',
      test:'Test dźwigni', tt:'Bez AI projekt nadal byłby możliwy, ale wyraźnie uboższy lub mniejszy w czasie zajęć. AI podnosi pułap pomysłu ucznia.', ai:55 },
  c:{ e:'🧑‍💻', age:'12–17', who:'Kursy dla nastolatków', model:'Nauka projektowa zintegrowana z AI — uczeń jako dyrektor kreatywny.',
      p:'Uczniowie orkiestrują AI w całym procesie (koncepcja → zasoby → logika → budowa), w tym AI jako komponent wewnątrz własnego programu, z wyraźną świadomością dotyczącą mediów syntetycznych.',
      test:'Test ambicji', tt:'Zamierzony zakres i jakość nie są osiągalne bez AI w danym czasie. Usuń AI, a planowany kształt projektu się rozpada.', ai:85 }
};
CONTENT.prompts = {
  v:['„Zrób mi grę.”','„Zrób to ładniejsze.”','„Napraw mój kod.”'],
  s:['„W Pythonie: napisz grę w zgadywanie liczby. Komputer wybiera liczbę od 1 do 100, gracz ma 7 prób, po każdym strzale program wypisuje ‘za dużo’ lub ‘za mało’, a na końcu podaje, ile prób to zajęło.”',
     '„Zmień tylko paletę kolorów na neonowy niebieski i różowy. Zachowaj pozę, styl i tło.”',
     '„Mój program w Pythonie powinien się zatrzymać, gdy gracz zgadnie liczbę, ale dalej o nią pyta. Oto mój kod. Co to powoduje i co powinienem sprawdzić?”']
};
CONTENT.qcmp = {
  v:['„Czy jest jasne?”','„Czy wszyscy skończyli?”','„Jakieś pytania?”'],
  s:['„Mia, dlaczego postać porusza się tylko wtedy, gdy naciśniesz strzałkę?”','„Leo, co by się stało, gdybyśmy przenieśli tę linijkę na górę? Spróbuj i powiedz nam.”','„Ana, skąd wiedziałaś, że punktacja działa?”']
};

/* ============================================================
   Notes under the vague / specific switches
   ============================================================ */
CONTENT.cmpnote = { prompts:{ v:'AI musi zgadywać wszystko: platformę, zasady, co znaczy „ładniejsze”.', s:'Każdy z nich wskazuje platformę, dokładne zachowanie i to, co może się zmienić — nic nie zostaje do zgadywania.' },
                  questions:{ v:'Łatwo odpowiedzieć „tak” — i nie dowiadujesz się nic o tym, co uczniowie zrozumieli.', s:'Imię plus „dlaczego” lub „jak”: uczeń musi wyjaśnić swoje myślenie na głos.' } };

/* Follow Mode demo cards (Module 2) */
CONTENT.fmCards = [['Karta 1 · Przygotuj się na dzisiejszą misję! 🚀','Dziś zbudujesz swój pierwszy projekt…'],['Karta 2 · Witaj! 👋','Sprawdźmy, czy się widzicie i słyszycie…'],['Karta 3 · Poznajmy się! 🎤','Każdy twórca ma swój własny styl…']];

/* ============================================================
   SECTION BODIES — the text of every section, by module. Inside ${…} translate only the quoted text; keep function names (callout, flip, launch, codeBox, zclip, stc, videoBtn), CONFIG.… and file names.
   ============================================================ */
CONTENT.body = {
/* ---------------- Module 1 ---------------- */
what:() => `
  <p class="p">Kodland stworzył <b>nowy model edukacyjny (EM)</b>, który będzie stopniowo wdrażany zarówno w nowych, jak i w istniejących kursach. To nie tylko nowa treść techniczna — to inna <b>metodyka</b>: jak przebiega lekcja, jaką rolę pełnisz jako tutor i jak sztuczna inteligencja staje się częścią nauki, a nie drogą na skróty.</p>
  <div class="defn"><span class="de">🌱</span><p>W tym <b>nowym modelu edukacyjnym</b> uczniowie zaczynają od działającego wyniku, uczą się, budując i poprawiając, publikują swoje projekty w <b>Kodland Sparks</b> i korzystają z AI z rozsądkiem.</p></div>
  ${callout('good', '🧭', '<b>Ważne:</b> To nowy model edukacyjny, który będzie wprowadzany stopniowo. Nowe kursy będą działać według tego podejścia, a istniejące kursy zostaną dostosowane do nowego modelu. Grupy, które już uczą się na kursach w innym formacie nauczania, będą jednak kontynuować w swoim obecnym formacie. Na razie tylko niektóre kursy działają według nowego modelu.')}
  <p class="p" style="margin-top:18px">Dlaczego nowy model? Bo dzisiejsi uczniowie uczą się inaczej niż uczniowie kilka lat temu. Zmieniły się narzędzia, zmienił się sposób, w jaki dzieci i nastolatki odnoszą się do technologii, a AI jest już częścią ich codziennego życia. Nowa metodyka opiera się na trzech ideach:</p>
  <div class="trio">
    <div class="ti"><span class="tie">🛠️</span><h3>Narzędzia, które znają</h3><p>Uczniowie pracują z narzędziami, które naprawdę widzą i używają dziś — i z projektami, które robią prawdziwe „wow” od pierwszej minuty.</p></div>
    <div class="ti"><span class="tie">🧠</span><h3>AI z rozsądkiem</h3><p>Uczymy uczniów mądrze korzystać z AI: bez obaw przed nią i bez ślepego uzależnienia od niej.</p></div>
    <div class="ti"><span class="tie">✨</span><h3>Lekcje, na które warto przyjść</h3><p>Doświadczenie nauki pozostaje aktualne, więc każde zajęcia mają sens.</p></div>
  </div>
  <p class="p" style="margin-top:18px">Zanim pójdziemy dalej, rozwiejmy trzy częste przekonania. Dotknij każdego z nich:</p>
  <div class="myths">
    <button class="myth" data-myth><span class="mtag">Mit</span><span class="mq">„Wszystkie kursy Kodland przechodzą na nowy model.”</span><span class="ma"><b>Nie wszystkie.</b> Nowy model stosuje się w nowych kursach zaprojektowanych z myślą o nim oraz w wybranych istniejących kursach, które są do niego dostosowywane.</span><span class="mh">Dotknij, aby poznać rzeczywistość →</span></button>
    <button class="myth" data-myth><span class="mtag">Mit</span><span class="mq">„Wszystkie moje grupy się zmienią.”</span><span class="ma"><b>Nie.</b> W nowym modelu uczysz tylko w grupach kursu, który go stosuje. We wszystkich pozostałych grupach nic się nie zmienia. Dostaniesz informację, gdy któryś z Twoich kursów przejdzie na nowy model.</span><span class="mh">Dotknij, aby poznać rzeczywistość →</span></button>
    <button class="myth" data-myth><span class="mtag">Mit</span><span class="mq">„To tylko nowa treść do opanowania.”</span><span class="ma"><b>To nowy sposób myślenia o lekcji.</b> Treść wymaga od Ciebie niewiele nowej wiedzy — prawdziwa zmiana dotyczy tego, jak przebiega lekcja i co w niej robisz.</span><span class="mh">Dotknij, aby poznać rzeczywistość →</span></button>
  </div>`,

pillars:() => `
  <p class="p">To serce modelu. Nie chodzi o naukę nowych przycisków — chodzi o <b>zmianę sposobu, w jaki myślisz o lekcji</b>. Wszystko opiera się na czterech filarach. Obróć każdą kartę, a potem przeczytaj, jak każdy z nich zmienia to, co robisz.</p>
  <div class="grid4">
    ${flip('Filar 1', '🔄', 'Uczenie dedukcyjne', '<b>Najpierw wynik.</b><br>Lekcja zaczyna się od gotowego, działającego wyniku. Uczniowie rozbierają go razem z Tobą i dopiero potem budują go element po elemencie.')}
    ${flip('Filar 2', '🌱', 'Growth mindset', '<b>Błędy to etap, a nie porażka.</b><br>Bug czy zepsuta mechanika to normalna rzecz. Uczniowie uczą się mówić: „to jeszcze <i>nie</i> działa — poszukajmy strategii”.')}
    ${flip('Filar 3', '🔁', 'Learning Loop', '<b>Cykl, a nie linia.</b><br>Cel → prototyp → trudność → podpowiedź → ulepszenie → prezentacja → refleksja. Każdy obrót idzie nieco głębiej.')}
    ${flip('Filar 4', '🤖', 'Nauka wspierana przez AI', '<b>AI proponuje, autor decyduje.</b><br>To, ile AI jest używane, zależy od wieku uczniów — a AI nigdy nie buduje za nich rdzenia projektu.')}
  </div>

  <h3 class="subh">🔄 Filar 1 · Najpierw pokaż, potem wyjaśnij</h3>
  <div class="ba"><div class="bef"><h4>Dawniej</h4><p>Lekcja zaczynała się od teorii, potem narzędzie, a następnie uczniowie budowali od zera.</p></div><div class="arr">➜</div>
    <div class="aft"><h4>Teraz</h4><p>Lekcja zaczyna się od <b>gotowego, działającego wyniku</b> — „jaka gra lub mechanika ma działać na koniec dzisiejszych zajęć?”. Uczniowie widzą cały projekt, rozbierają go razem z Tobą, a potem go budują.</p></div></div>
  ${callout('tip', '💡', 'To zmienia Twój pierwszy odruch jako tutora: zamiast wyjaśniać przed pokazaniem, <b>najpierw pokaż, a wyjaśniaj jako odpowiedź</b> na to, co uczniowie już zauważyli.')}

  <h3 class="subh">🌱 Filar 2 · Twoje słowa kształtują ich nastawienie</h3>
  <p class="p">To, jak mówisz o błędzie, uczy uczniów, jak o nim myśleć. Model prosi, byś traktował każdy błąd jako normalny krok i oddawał kolejny ruch uczniowi.</p>
  <div class="twocol">
    <div class="yes"><h4>✅ Mów tak</h4><ul><li>„Świetnie — znaleźliśmy typowy problem. Rozwiążmy go.”</li><li>„To jeszcze nie działa. Jaka jest nasza następna strategia?”</li><li>„Pokaż mi, co próbowałeś wcześniej.”</li></ul></div>
    <div class="no"><h4>🚫 Unikaj tego</h4><ul><li>„Znowu Ci nie wyszło.”</li><li>„To źle — naprawię to.”</li><li>„To proste, powinieneś to wiedzieć.”</li></ul></div>
  </div>

  <h3 class="subh">🔁 Filar 3 · Kodland Learning Loop</h3>
  <p class="p">Dawna sekwencja była linią prostą: <i>wyjaśniam → ćwiczą → sprawdzam</i>. Learning Loop zastępuje ją cyklem, który powtarza się wewnątrz każdej lekcji i między lekcjami. Naciśnij play albo dotknij dowolnego kroku:</p>
  <div class="loop" id="loop">
    <div class="loop-row"><span class="lf"></span>${LOOP.map((s, i) => `<button class="lst" data-ls="${i}"><span class="lsi">${s[0]}</span><b>${s[1]}</b></button>`).join('')}</div>
    <div class="loop-out" id="loopOut"><span class="lo-e">▶️</span><span>Naciśnij <b>Odtwórz pętlę</b>, aby zobaczyć jeden pełny obrót.</span></div>
    <div class="btn-row" style="margin-top:12px;justify-content:center"><button class="btn-y" id="loopPlay">▶ Odtwórz pętlę</button></div>
    <p class="spiral">🌀 Lekcja porusza się po spirali: każdy obrót pętli idzie nieco głębiej.</p>
  </div>

  <h3 class="subh">🤖 Filar 4 · AI zależy od wieku</h3>
  <p class="p">Tu potrzeba najwięcej uwagi, bo rola AI <b>nie jest taka sama w każdym kursie</b> — zależy od wieku uczniów. Przełączaj się między grupami wiekowymi:</p>
  <div class="agebox">
    <div class="seg" id="ageSeg"><button data-age="a" aria-pressed="true">🧒 Wiek 8–9</button><button data-age="b" aria-pressed="false">🧑 Wiek 10–12</button><button data-age="c" aria-pressed="false">🧑‍💻 Wiek 12–17</button></div>
    <div class="agebody" id="ageOut"></div>
  </div>
  <div class="quote"><b>„AI proponuje, autor decyduje.”</b><small>Zasada do powtarzania w każdym kursie, w każdym wieku.</small></div>
  <div class="grid2">
    <div class="card"><div class="wh"><b>⚙️ Konwencjonalna (generatywna) AI</b></div><p class="p" style="margin:0;font-size:15px">Tworzy kod, obrazy lub pomysły, gdy ją o to poprosisz.</p></div>
    <div class="card"><div class="wh"><b>🧭 AI Mentor / AI Buddy</b></div><p class="p" style="margin:0;font-size:15px">Nie generuje rozwiązania: zadaje pytania naprowadzające i wyjaśnia.</p>
      <p class="p" style="margin:10px 0 0;font-size:13.5px;color:var(--pink-d)"><b>👀 Dalej w tym szkoleniu</b> zobaczysz, gdzie uczniowie znajdują go na platformie.</p></div>
  </div>
  ${callout('bad', '🛑', '<b>Nigdy nie pozwalaj, by AI budowała centralną logikę projektu zamiast ucznia.</b>')}`,

people:() => `
  <p class="p">Feedback to już nie tylko <i>tutor → uczeń</i>. W nowym modelu uczniowie słyszą opinie z czterech źródeł — i każde ma swoją rolę:</p>
  <div class="q3">
    <div><span>🧑‍🏫</span><b>Tutor</b><small>Konkretny, o projekcie i o następnym kroku.</small></div>
    <div><span>👥</span><b>Kolega z grupy</b><small>Prosty i konkretny podczas prezentacji — nigdy porównujący projekty.</small></div>
    <div><span>🪞</span><b>Oni sami</b><small>Jaki miałem problem, jakiej strategii użyłem, jaki jest mój następny krok?</small></div>
    <div><span>🤖</span><b>AI</b><small>AI Buddy lub AI mentor: mocna strona i pomysł na ulepszenie.</small></div>
  </div>
  ${callout('tip', '🪞', 'Samoocena to nie „czy Ci się podobało?”. To nazwanie problemu, strategii i następnego kroku. Feedback od kolegów opiera się na prostej formule: <b>„Podobało mi się… Dodałbym…”</b>.')}
  <div class="defn" style="margin-top:18px"><span class="de">🧭</span><p><b>Krótko mówiąc, Twoja rola się zmieniła.</b> Nie jesteś już tym, kto wyjaśnia wszystko przed rozpoczęciem pracy. Jesteś <b>nawigatorem</b>: pokazujesz cel podróży, towarzyszysz w drodze pytaniami i podpowiedziami w odpowiednim momencie, i pozwalasz uczniom zmierzyć się z trudnością, zanim ją rozwiążesz. W każdym kursie są szablony zapasowe, więc nigdy nie musisz „ratować” projektu w panice — zawsze jest alternatywna droga z gwarantowanym wynikiem.</p></div>`,

/* ---------------- Module 4 ---------------- */
why4:() => `
  <div class="defn"><span class="de">💡</span><p>Te kursy nie wymagają od Ciebie wiele nowej wiedzy z przedmiotu. Jedyną naprawdę nową dziedziną jest <b>AI</b> — i choć niektórzy tutorzy czują się z nią swobodnie, inni używają jej bardzo mało albo w sposób, który uczniowi nie pomoże. Ten moduł to wspólna baza.</p></div>`,

whatp:() => `
  <p class="p">Sztuczna inteligencja, z której korzystamy na zajęciach — AI Buddy i narzędzia w Kodland Sparks — działa na podstawie instrukcji pisanych zwykłym językiem, zwanych <b>promptami</b>. Im lepszy prompt, tym lepszy wynik dostaje uczeń.</p>
  <p class="p">Jako tutor nie musisz być technicznym ekspertem od AI. Musisz jednak rozumieć podstawy, żeby móc prowadzić uczniów, gdy piszą własne prompty na lekcji.</p>
  <div class="defn"><span class="de">❓</span><p><b>Prompt</b> to instrukcja, którą dajemy AI, żeby wygenerowała wynik — tekst, kod, obraz, wideo. To jak dawanie instrukcji komuś, kto nic nie wie o kontekście Twojego projektu: <b>im jaśniejsze i bardziej konkretne instrukcje, tym bliżej wynik będzie temu, czego naprawdę chciałeś.</b></p></div>
  <div class="ba"><div class="bef"><h4>Zły prompt</h4><p>Daje ogólnikowe lub błędne wyniki. Uczeń kończy albo z czymś, czego nie chciał, albo zaczyna od zera.</p></div><div class="arr">➜</div>
    <div class="aft"><h4>Dobry prompt</h4><p>Daje użyteczne, precyzyjne wyniki, które są <b>łatwe do poprawienia</b>. To ostatnie jest najważniejsze — wynik, który można lekko poprawić, jest wart więcej niż taki, który trzeba wymienić.</p></div></div>`,

goodp:() => `
  <p class="p">Solidny prompt zazwyczaj odpowiada na te cztery pytania:</p>
  <div class="q3">${[['🎬','Kontekst','Do czego to służy? Kto będzie z tego korzystał?'],['🎯','Cel','Co dokładnie chcesz osiągnąć?'],['📐','Konkretne szczegóły','Styl, format, ton, ograniczenia: „w 3 zdaniach”, „w Pythonie”, „w stylu kreskówki”.'],['🖼','Przykłady','Tam, gdzie mają zastosowanie — jeden przykład pomaga AI zrozumieć, czego się oczekuje.']].map(q => `<div><span>${q[0]}</span><b>${q[1]}</b><small>${q[2]}</small></div>`).join('')}</div>
  <div class="twocol" style="margin-top:14px">
    <div class="yes"><h4>✅ Wystarczająco konkretny</h4><ul><li>„Stwórz prostą grę w Scratch, w której kot unika spadających przeszkód, z widocznym wynikiem i 3 życiami.”</li></ul></div>
    <div class="no"><h4>❌ Zbyt ogólny</h4><ul><li>„Zrób mi grę.”</li></ul></div>
  </div>
  <div class="card" style="margin-top:14px">
    <div class="wh"><b>Ogólny czy konkretny? Przełącz i porównaj</b><span class="tag">Wypróbuj</span></div>
    <div class="seg" data-cmp="prompts"><button data-k="v" aria-pressed="true">😐 Ogólny</button><button data-k="s" aria-pressed="false">🎯 Konkretny</button></div>
    <div class="fbx" data-cmpout="prompts"></div>
  </div>`,

codep:() => `
  <div class="grid2">${[
    ['🏷','Nazwij język lub platformę','Python, HTML, Scratch, Roblox i tak dalej.'],
    ['👣','Opisz oczekiwane zachowanie krok po kroku','Nie tylko końcowy wynik.'],
    ['💬','Poproś o komentarze w kodzie','Żeby łatwiej było go czytać i wyjaśniać na lekcji.'],
    ['🔧','Nie przepisuj całego promptu','Jeśli coś nie działa, poproś AI o naprawę konkretnego błędu i powiedz, co się stało.'],
    ['🧪','Testuj i rozumiej kod','Zachęcaj uczniów, by testowali i rozumieli kod, a nie tylko go kopiowali.']
  ].map(x => `<div class="card" style="padding:16px"><div class="wh" style="margin-bottom:6px"><span style="font-size:26px">${x[0]}</span><b>${x[1]}</b></div><p class="p" style="margin:0;font-size:14.5px">${x[2]}</p></div>`).join('')}</div>`,

imgp:() => `
  <div class="grid2">${[
    ['🖌','Temat, styl i otoczenie','Opisz główny temat, styl wizualny (realistyczny, kreskówkowy, pixel art…) oraz otoczenie lub tło.'],
    ['🌈','Kolory, oświetlenie lub nastrój','Wspomnij o nich, gdy mają znaczenie dla projektu.'],
    ['📏','Określ format','Pionowy, poziomy lub kwadratowy — jeśli wymaga tego projekt.'],
    ['🔁','Zmieniaj jedną zmienną naraz','Jeśli pierwszy wynik nie jest taki, jak oczekiwano, zmień tylko kolor albo tylko styl, żeby zobaczyć, co faktycznie zmieniło rezultat.']
  ].map(x => `<div class="card" style="padding:16px"><div class="wh" style="margin-bottom:6px"><span style="font-size:26px">${x[0]}</span><b>${x[1]}</b></div><p class="p" style="margin:0;font-size:14.5px">${x[2]}</p></div>`).join('')}</div>`,

mistp:() => `
  <div class="myths">${[
    ['🌫','Zbytnia ogólnikowość.','„Zrób to ładniejsze” nie daje AI niczego, z czym mogłaby pracować.'],
    ['📚','Proszenie o zbyt dużo naraz.','Podziel złożony projekt na kilka mniejszych promptów.'],
    ['🔍','Brak sprawdzenia wyniku.','AI popełnia błędy i może generować nieprawdziwe treści — zawsze sprawdzaj, zanim z nich skorzystasz.'],
    ['🔂','Brak iteracji.','Pierwszy wynik prawie nigdy nie jest ostateczny. Poprawianie i ponowne pytanie to normalna część procesu.'],
    ['🧭','Zapominanie o kontekście projektu.','Prompt bez kontekstu daje ogólnikowe wyniki, które nie pasują do tego, co uczeń buduje.']
  ].map(x => `<button class="myth" data-myth><span class="mtag">Błąd</span><span class="mq">${x[0]} ${x[1]}</span><span class="ma">${x[2]}</span><span class="mh">Dotknij, aby zobaczyć dlaczego →</span></button>`).join('')}</div>
  ${callout('good', '🔁', 'Zauważ, jak wiele z tego pokrywa się z tym, co już robisz jako tutor: jedna zmiana naraz, opisanie oczekiwanego zachowania, testowanie, zanim zaufasz, i iterowanie zamiast zaczynania od nowa. Pisanie promptów to nie osobna umiejętność — to ten sam nawyk debugowania, skierowany na inne narzędzie.')}`,

/* ---------------- Module 2 ---------------- */
bo:() => `
  <p class="p">Kursy w nowym modelu <b>nie mają podręczników w wiki ani prezentacji</b>. Przewodnik do każdej lekcji znajduje się <b>wewnątrz samej lekcji</b>, w Backoffice: każda karta aktywności ma własne <b>Teacher Notes</b> — do czego służy karta, ile trwa, co zrobić i na co uważać. Widzisz je tylko Ty.</p>
  ${callout('warn', '📒', '<b>Czytaj Teacher Notes przed każdą lekcją</b> — i sprawdzaj aktualizacje. Kursy są stale ulepszane, więc lekcja może się zmienić między jedną grupą a następną. Pierwsza karta każdej lekcji ma najpełniejsze notatki i zwykle krótkie wideo.')}
  <p class="p" style="margin-top:16px">Droga jest taka sama dla każdego kursu: do treści kursu nie wchodzisz przez swoje Groups, tylko przez <b>Courses</b>.</p>
  <div class="grid3">
    <div class="ti"><span class="tie">📚</span><h3>Courses</h3><p>Otwórz kartę kursu: oddział biznesowy, język, liczba lekcji i modułów.</p></div>
    <div class="ti"><span class="tie">🃏</span><h3>Assignments</h3><p>Wybierz lekcję, a zobaczysz jej karty aktywności. Te karty <b>są</b> treścią lekcji.</p></div>
    <div class="ti"><span class="tie">📒</span><h3>Teacher Notes</h3><p>Otwórz kartę: przerywane pomarańczowe pole to Twoja notatka. Tuż pod nim jest to, co widzi uczeń.</p></div>
  </div>
  ${callout('tip', '🧭', 'Zobacz to teraz na własne oczy. Symulacja to replika Backoffice z jednym z kursów w nowym modelu: otworzysz kurs, przejdziesz do jego pierwszej lekcji, zobaczysz, dlaczego przewodnik do nauki jest pusty, i przeczytasz Teacher Notes pierwszej karty.')}
  ${launch('🗂️', 'Symulacja 1 z 3', 'Symulacja Backoffice', 'Klikana replika Backoffice: otwórz kurs, znajdź aktywności lekcji, zobacz, dlaczego nie ma linku do wiki, i przeczytaj Teacher Notes od środka.', CONFIG.BO_SIM, '🗂️ Otwórz symulację BO')}
  ${codeBox('boCode')}`,

classroom:() => `
  <p class="p">Gdy już znasz lekcję, czas ją poprowadzić. W Classroom nie prezentujesz już slajdów: otwierasz te same <b>karty aktywności</b>, które czytałeś w Backoffice, i przechodzisz przez nie razem z uczniami. Działają tu trzy rzeczy.</p>
  <h3 class="subh">👁️ 1. Follow Mode: uczniowie idą tam, gdzie Ty</h3>
  <p class="p">Dzięki <b>Follow Mode</b> uczniowie automatycznie widzą tę samą kartę, którą masz otwartą. To <b>nie jest udostępnianie ekranu</b>: każdy uczeń dostaje własną kopię karty, w której może faktycznie pracować — a Teacher Notes pozostają widoczne tylko dla Ciebie. Włączasz go przełącznikiem <b>Lead the group</b>, który pojawia się obok otwartej karty. Wypróbuj:</p>
  <div class="card" id="fmDemo">
    <div class="fm-ctrl"><button class="lead-sw" id="fmSw"><i></i> Lead the group</button><button class="btn-g" id="fmNext">Następna karta →</button><span style="font-size:13px;color:var(--muted);font-weight:700" id="fmHint">Włącz przełącznik, a potem przejdź do następnej karty.</span></div>
    <div class="fm">
      <div class="screen"><div class="sc-h"><span>👩‍🏫 Twój ekran</span><span>Tutor</span></div><div class="sc-card" id="fmT"></div></div>
      <div class="screen"><div class="sc-h"><span>👧 Ekran Sofii</span><span>Uczennica</span></div><div class="sc-card" id="fmS"></div></div>
    </div>
    <div class="fm-out" id="fmOut"></div>
  </div>
  <div class="grid3" style="margin-top:14px">${[
    ['➡️','Zmieniasz kartę','Zmienia się dla wszystkich, którzy za Tobą podążają.'],
    ['🖱️','Przewijasz','W kartach interaktywnych ich pozycja dogania Twoją.'],
    ['🕐','Ktoś dołącza później','Trafia od razu na kartę, którą masz otwartą.'],
    ['🚪','Odchodzisz od komputera','Uczniowie widzą komunikat „tutor na chwilę odszedł”; podążanie wznawia się, gdy wrócisz.'],
    ['👥','Kto podąża?','Znacznik obok każdego imienia pokazuje, kto idzie za Tobą, a kto pracuje sam.'],
    ['🔓','Nie są uwięzieni','Uczeń może kliknąć „Work independently” i wrócić przyciskiem „Return”.']
  ].map(x => `<div class="card" style="padding:16px"><div class="wh" style="margin-bottom:6px"><span style="font-size:26px">${x[0]}</span><b>${x[1]}</b></div><p class="p" style="margin:0;font-size:14.5px">${x[2]}</p></div>`).join('')}</div>

  <h3 class="subh">🖥️ 2. Follow Mode czy udostępnianie ekranu?</h3>
  <p class="p">Czasem nadal będziesz udostępniać ekran — żeby <b>zademonstrować</b> krok w narzędziu, na przykład w edytorze Scratch, albo pokazać gotowy wynik. Zasada jest prosta:</p>
  <div class="okbad">
    <div class="ok"><h3>👁️ Follow Mode używaj do kart</h3><ul><li>Do przeprowadzania grupy przez lekcję.</li><li>Każdy uczeń pracuje we własnej kopii.</li><li>Twoje Teacher Notes pozostają prywatne.</li></ul></div>
    <div class="bad"><h3>🖥️ Ekran udostępniaj do pokazów</h3><ul><li>Żeby pokazać krok w narzędziu (Scratch, Sparks…).</li><li>Udostępniaj <b>tylko kartę lub okno narzędzia</b>.</li><li>Nigdy nie udostępniaj karty lekcji: Twoje notatki byłyby widoczne.</li></ul></div>
  </div>

  <h3 class="subh">🧩 3. Aktywności interaktywne</h3>
  <p class="p">Wiele kart jest interaktywnych. Niektóre z nich zapisują postęp i wynik bez konieczności klikania przycisku „Submit”, inne tego wymagają.</p>
  <p class="p">W aktywnościach — <b>pytaniach wyboru</b>, <b>polach tekstowych i formułach</b> oraz <b>przeciąganiu i upuszczaniu</b> — zobaczysz, że wynik zapisuje się automatycznie po ich ukończeniu.</p>
  <div class="zoomtip"><span>🔍</span><div><b>Wskazówka:</b> kliknij dowolne z 3 poniższych wideo, aby otworzyć je w większym oknie. Możesz tam <b>przybliżać</b> (przyciski + / −, kółko myszy lub dwukrotne kliknięcie) i przeciągać, aby zobaczyć każdy szczegół.</div></div>
  <div class="vidpair">
    <figure class="card gifcard"><span class="gtag ok">✅ Zapisane automatycznie</span>${zclip('images/result_good_EM.mp4', 'Zapisane automatycznie')}<figcaption>Wynik pojawia się automatycznie w prawym górnym rogu.</figcaption></figure>
    <figure class="card gifcard"><span class="gtag ko">🔁 Błędna odpowiedź</span>${zclip('images/result_bad_EM.mp4', 'Błędna odpowiedź')}<figcaption>Jeśli jest błąd, możesz kliknąć ikonę „Redo” w prawym górnym rogu i spróbować ponownie.</figcaption></figure>
  </div>
  <p class="p" style="margin-top:18px">Natomiast w aktywnościach polegających na wysyłaniu tekstu, linków lub plików upewnij się, że uczniowie klikają przycisk <b>„Send”</b>:</p>
  <figure class="card gifcard wide">${zclip('images/send_bottom.mp4', 'Przycisk „Send”')}</figure>
  ${launch('🎥', 'Symulacja 2 z 3', 'Przewodnik po Classroom', 'Przewodnik po prawdziwej lekcji w nowym modelu w Classroom: karty, Teacher Notes widoczne tylko dla Ciebie, pełne notatki pierwszej karty i Lead the group.', CONFIG.CLASS_SIM, '🎥 Otwórz przewodnik po Classroom')}
  ${codeBox('classCode')}`,

sparks:() => `
  <p class="p">Ostatni element układanki to miejsce, w którym żyją projekty uczniów: <b>Kodland Sparks</b>. To nowa platforma, na której uczniowie <b>tworzą</b> swoje projekty, <b>publikują</b> je, uczą się dalej między lekcjami i dostają feedback od kolegów oraz od mentora AI. To także miejsce, w którym żyje portfolio budowane przez cały kurs.</p>
  <div class="grid2">
    <div class="card"><div class="wh"><b>🔐 Jak wchodzą uczniowie</b></div><p class="p" style="margin:0;font-size:15px">Uczniowie wchodzą <b>jednym przyciskiem z głównej platformy</b> (jednokrotne logowanie) — nie rejestrują się osobno.</p></div>
    <div class="card"><div class="wh"><b>🔑 Jak wchodzisz Ty</b></div><p class="p" style="margin:0;font-size:15px">Tutorzy używają <b>osobnych danych logowania</b>, innych niż do Backoffice. Przekazuje je <b>dział Operations lub Teaching</b>.</p></div>
  </div>
  ${callout('warn', '⏳', '<b>Na razie nie możesz tego wypróbować samodzielnie.</b> Dopóki nie dostaniesz danych logowania, nie zalogujesz się do Kodland Sparks. Dlatego poniżej jest przewodnik: pokazuje, co jest w środku i co mogą tam robić uczniowie.')}
  <h3 class="subh">🧭 Co uczniowie robią w Sparks</h3>
  <div class="grid3">${[
    ['📰','Feed','Widzą projekty kolegów i reagują na nie oraz czytają feedback od mentora AI.'],
    ['📁','My projects','Wszystko, co zapisali lub opublikowali, w jednym miejscu.'],
    ['🚀','Publish project','Udostępniają gotowy projekt, wybierają, kto może go zobaczyć, i mogą zdobywać nagrody.'],
    ['🎨','Studio · tryb Creative','Tu tworzą na lekcji: gry i aplikacje webowe, Python, Scratch, pixel art, animacje, muzyka, skiny.'],
    ['🏆','Studio · tryb Challenges','Ustrukturyzowane zadania z automatycznym sprawdzaniem — i kryształy jako nagroda.'],
    ['🤖','AI helper i AI tutor','Tu mieszka AI Buddy / mentor AI: wskazówki, pomysły i wyjaśnienia — AI proponuje, autor decyduje.']
  ].map(x => `<div class="ti" style="padding:18px"><span class="tie" style="font-size:46px">${x[0]}</span><h3>${x[1]}</h3><p>${x[2]}</p></div>`).join('')}</div>
  <h3 class="subh">💬 Feedback w Sparks</h3>
  <p class="p">Nie ma klasycznych polubień ani komentarzy. Zamiast tego uczniowie zostawiają <b>reakcje</b> (emoji), piszą <b>recenzje</b> w trzech polach — ogólne wrażenie, mocne strony i co poprawić — i mogą się nawzajem obserwować. Grywalizacja opiera się na <b>kryształach → skrzyniach → nagrodach</b>. Recenzje od tutora są wyróżnione, żeby uczniowie rozpoznawali oficjalny feedback.</p>
  ${callout('tip', '🔗', '<b>Publikowanie w Sparks i wysłanie linku na platformie Kodland to dwa różne kroki.</b> W wielu lekcjach uczniowie publikują projekt, a potem wklejają link na karcie — przypomnij im, żeby zrobili jedno i drugie.')}
  ${callout('tip', '🧭', 'Teraz wybierz się na wycieczkę. To replika Kodland Sparks: odwiedzisz Feed, opublikujesz projekt, otworzysz Studio i zobaczysz projekt w Pythonie, projekt w Scratch i rysunek, a na koniec AI helper i kryształy.')}
  ${launch('⚡', 'Symulacja 3 z 3', 'Przewodnik po Kodland Sparks', 'Przewodnik po platformie, z której korzystają Twoi uczniowie: Feed, My projects, Publish project, Studio z każdym typem projektu, AI helper i nagrody.', CONFIG.SPARKS_SIM, '⚡ Otwórz przewodnik po Kodland Sparks')}
  ${codeBox('sparksCode')}`,

/* ---------------- Module 3 ---------------- */
structure:() => `
  <p class="p">W kursach w nowym modelu lekcja nie jest już prezentacją z dużymi blokami i slajdem, który mówi, kiedy „podsumować” lub „zakończyć”. Lekcja to sekwencja <b>kart aktywności</b> na platformie, a każda karta ma własną treść dla ucznia i własne notatki dla Ciebie. Oznacza to jedno ważne: <b>to Ty zarządzasz rytmem lekcji — nie slajd.</b></p>
  <h3 class="subh">🏷️ Etykiety mówią, jaki to rodzaj momentu</h3>
  <p class="p">Wiele kart ma w Teacher Notes etykietę, na przykład <b>(CORE)</b> lub <b>(SUBMIT)</b>. Mówią one na pierwszy rzut oka, jakim momentem nauczania jest dana karta — i ile przestrzeni dać samodzielności ucznia. Dotknij każdej z nich:</p>
  <div class="grid4">${[['CORE','🧱','Centralna część budowania w lekcji.'],['SELF-CHECK','🪞','Uczeń sprawdza własne zrozumienie.'],['AI-CREATE','🤖','Jedyny moment użycia AI — z wyraźnym ograniczeniem.'],['CHOICE/INTEREST','🎨','Osobisty wybór: ich styl, ich pomysł.'],['SUBMIT','📤','Coś trzeba oddać lub opublikować.'],['PEER-FEEDBACK','👥','Koledzy komentują nawzajem swoje prace.'],['REFLECT','💭','Moment na zastanowienie się nad tym, czego się nauczyli.'],['CHALLENGE','🏆','Dodatkowe, opcjonalne wyzwanie.'],['DEBUG','🐞','Znajdź i napraw celowo wprowadzony błąd.'],['SYSTEM-TEST','🧪','Przetestuj cały projekt od początku do końca.']].map(t => `<button class="oq" data-oq><b>${t[1]} ${t[0]}</b><span>${t[2]}</span></button>`).join('')}</div>`,

seeing:() => `
  <p class="p">Ponieważ nie ma slajdu, który by Ci przypominał, pilnowanie struktury lekcji jest teraz w Twoich rękach. Oceny jakości patrzą na każdą lekcję jako całość: na <b>rozgrzewkę</b>, <b>cel lekcji</b>, <b>praktykę</b>, <b>pytania</b>, które zadajesz, <b>podsumowanie</b>, <b>pracę domową</b> i <b>zapowiedź</b> następnej lekcji.</p>
  <p class="p">Lekcje w nowym modelu są zwykle żywe i angażujące. Wyzwanie polega na tym, by nie zgubić po drodze struktury — zwłaszcza na początku i na końcu lekcji:</p>
  <div class="okbad">
    <div class="ok"><h3>💚 Rób dalej</h3><ul><li>Angażowanie wielu uczniów.</li><li>Zwracanie się do uczniów po imieniu.</li><li>Dawanie prawdziwego czasu na praktykę.</li></ul></div>
    <div class="bad"><h3>💗 Co wzmocnić</h3><ul><li>Rozgrzewkę i powitanie.</li><li>Sprawdzenie pracy domowej.</li><li>Pytania, które zmuszają uczniów do tłumaczenia swojego rozumowania.</li><li>Podsumowanie na końcu.</li><li>Zapowiedź następnej lekcji.</li></ul></div>
  </div>
  <p class="p" style="margin-top:16px">To są nawyki, a nawyki można wypracować. Reszta tego modułu daje Ci trzy: porządny początek, pytania o rozumowanie kierowane do konkretnych uczniów i stałą rutynę zamykającą.</p>`,

opening:() => `
  <p class="p">Porządny początek zajmuje tylko kilka minut, a ustawia wszystko, co potem następuje: uczniowie czują się mile widziani, pamiętają, na jakim etapie jest ich projekt, pokazują, co zrobili w domu, i wiedzą, do czego zmierza dzisiejsza lekcja. Składa się z czterech części. Przejdź przez każdą z nich — z prawdziwymi frazami, których możesz użyć, i z wideo z prawdziwej lekcji:</p>
  ${stc('open')}
  ${callout('tip', '⏱️', 'Niech będzie krótko: <b>około 5–7 minut</b> na wszystkie cztery części razem. Lekcja, która zaczyna się od nawiązania relacji, przebiega lepiej — nie wolniej.')}`,

reasoning:() => `
  <p class="p">Na „Czy jest jasne?” prawie zawsze pada „tak” — i nic Ci to nie mówi. Działają pytania, które zmuszają ucznia do <b>wyjaśnienia swojego rozumowania</b>: dlaczego coś się dzieje, skąd wie, co by się zmieniło, gdyby… I działają najlepiej, gdy <b>kierujesz je do konkretnego ucznia, po imieniu</b>.</p>
  <div class="card">
    <div class="wh"><b>Zamknięte czy o rozumowanie? Przełącz i porównaj</b><span class="tag">Wypróbuj</span></div>
    <div class="seg" data-cmp="questions"><button data-k="v" aria-pressed="true">😐 Zamknięte</button><button data-k="s" aria-pressed="false">🧠 O rozumowanie</button></div>
    <div class="fbx" data-cmpout="questions"></div>
  </div>
  <h3 class="subh">🎯 Które pytania skłaniają do myślenia? Zdecyduj w każdym przypadku</h3>
  <div class="sorter" id="sorter">${[
    ['🙋','„Leo, jak sprawiłeś, że moneta znika, gdy gracz jej dotknie?”','yes','<b>Tak.</b> Imię plus „jak”: Leo musi wyjaśnić logikę własnymi słowami.'],
    ['🙂','„Wszyscy w porządku? Idziemy dalej?”','no','<b>Nie.</b> Grupowe pytanie tak/nie — nikt nie musi myśleć, żeby odpowiedzieć.'],
    ['🔍','„Ana, jak myślisz, co się stanie, jeśli usuniemy tę linijkę? Spróbuj i powiedz nam.”','yes','<b>Tak.</b> Przewiduje, testuje i wyjaśnia — Learning Loop w jednym pytaniu.'],
    ['✅','„Czy jest jasne, jak działa punktacja?”','no','<b>Nie.</b> Dostaniesz „tak”, czy jest jasne, czy nie. Poproś zamiast tego kogoś, by to wyjaśnił.']
  ].map(r => `<div class="srow" data-ans="${r[2]}"><span class="sei">${r[0]}</span><span class="stx">${r[1]}</span><span class="sbtns"><button data-pick="yes">🧠 Skłania do myślenia</button><button data-pick="no">😐 Nie skłania</button></span><span class="sfb">${r[3]}</span></div>`).join('')}</div>
  ${callout('good', '💡', 'Rozkładaj pytania: różni uczniowie, różne momenty — podczas punktu kontrolnego, w trakcie budowania i w podsumowaniu.')}`,

closing:() => `
  <p class="p">Koniec lekcji bywa odsuwany na bok — bo brakuje czasu albo wydaje się mniej ważny niż skończenie aktywności. Ale to moment, w którym uczniowie ujmują w słowa to, czego się nauczyli, nabierają ciekawości następnej lekcji i wychodzą, wiedząc, co zrobić w domu. Przy dobrym zarządzaniu czasem możesz to zapewnić w każdej lekcji: zarezerwuj <b>ostatnie 5–7 minut</b> na <b>stałą rutynę zamykającą</b> i zacznij ją na czas, nawet jeśli aktywność nie jest skończona. Działa tak samo niezależnie od długości lekcji: wybierz jedną i przesuń suwak:</p>
  <div class="tline" id="tline">
    <div class="seg" id="tlLen" style="margin-bottom:12px"><button data-len="60" aria-pressed="true">⏱️ Lekcja 60-minutowa</button><button data-len="90" aria-pressed="false">⏱️ Lekcja 90-minutowa</button></div>
    <div style="display:flex;align-items:center;gap:14px;flex-wrap:wrap"><span class="clock" id="tlClock">0′</span><input type="range" min="0" max="60" value="0" id="tlRange" style="flex:1;min-width:220px" aria-label="Minuta lekcji"></div>
    <div class="tl-bar"><div class="tl-open" id="tlOpen">Początek</div><div class="tl-main" id="tlMain">Karty: budować, eksplorować, poprawiać, pokazywać</div><div class="tl-close" id="tlClose">Zakończenie</div><span class="tl-head" id="tlHead" style="left:0"></span></div>
    <div class="tl-scale" id="tlScale"></div>
    <div class="tl-out" id="tlOut"></div>
  </div>
  <p class="p" style="margin-top:18px">Rutyna ma trzy kroki. Przejdź przez nie — każdy z wideo z prawdziwej lekcji:</p>
  ${stc('close')}
  ${callout('warn', '⏰', '<b>Sprawdzony trik:</b> ustaw minutnik na <b>5–8 minut przed końcem</b> lekcji. Gdy zadzwoni, zamykasz — niezależnie od tego, gdzie jesteś. Niedokończona karta może być kontynuowana na następnej lekcji lub jako część pracy domowej.')}`,

metrics:() => `
  <div class="defn"><span class="de">📈</span><p><b>Slajdów już nie ma — struktura została.</b> Pamiętaj, że struktura lekcji jest ściśle związana z ważnymi wskaźnikami, takimi jak <b>frekwencja</b>, <b>retencja</b> i <b>oddawanie prac domowych</b>. Przypominanie uczniom o pracy domowej, jej wyjaśnianie i omawianie, rozgrzewka i podsumowanie, wyjaśnianie celów lekcji oraz zapowiadanie następnej lekcji — wszystko to przyczynia się do zaangażowania uczniów, retencji i frekwencji.</p></div>
  <h3 class="subh">Trzy wskaźniki, trzy konkretne nawyki</h3>
  <div class="trio">
    <div class="ti"><span class="tie">🗓</span><h3>Frekwencja</h3><p>Sprawdzaj ją na początku, podczas rozgrzewki, gdy uczniowie się rozkręcają. Nie zostawiaj jej na koniec zajęć, gdy się spieszysz i łatwo o niej zapomnieć.</p></div>
    <div class="ti"><span class="tie">📚</span><h3>Praca domowa</h3><p>Ponieważ praca domowa to teraz „następna iteracja tego samego projektu”, sprawdzaj ją w punkcie kontrolnym poprzedniej lekcji. Jeśli uczeń nic nie ma, to Twój sygnał, by sprawdzić, czy nie utknął technicznie, a nie tylko wpisać zero.</p></div>
    <div class="ti"><span class="tie">💚</span><h3>Retencja</h3><p>Uczeń, który przestaje publikować w Sparks albo przestaje oddawać prace, zwykle wycofuje się, zanim przestanie przychodzić. Te dwa sygnały to Twoje najwcześniejsze ostrzeżenie.</p></div>
  </div>
  ${callout('warn', '⚠️', '<b>Pamiętaj:</b> w aktywnościach, w których uczniowie wysyłają tekst, linki lub pliki, ich praca zapisuje się dopiero po kliknięciu <b>„Send”</b>. Lekcja, która wydawała się świetna, nadal może wyglądać w systemie jak zerowe ukończenie zadań. Uczyń to przypomnienie częścią swojej rutyny zamykającej.')}`,

qcheck:() => `
  <p class="p">Oto wszystko z tego modułu w jednej liście kontrolnej. Trzymaj ją przy sobie podczas pierwszych lekcji, aż stanie się nawykiem:</p>
  <div class="card"><div class="wh"><b>✅ Moja lista kontrolna jakości lekcji</b><span class="tag">Odhaczaj</span></div>
    <div class="ckgroup">☑️ Przed lekcją</div>
    <div class="cklist">${['Przeczytałem Teacher Notes do tej lekcji w Backoffice.','Przeczytałem też <b>następną</b> lekcję, żeby móc zbudować oczekiwanie na zakończenie.','Otworzyłem gotowy wynik, który pokażę na początku (wideo, GIF lub działający projekt).','Wiem, jaki jeden krok z AI dopuszcza ta lekcja, i jakie jest jego ograniczenie.','Wiem, gdzie jest szablon zapasowy na wypadek, gdyby projekt się zepsuł.','Mam plan sprawdzenia obecności podczas rozgrzewki.','Przypomnę uczniom, by kliknęli <b>„Send”</b> w aktywnościach, które tego wymagają, zanim zakończymy.'].map((t, i) => `<button class="ck" data-ck="b${i}"><span class="ckb"></span><span>${t}</span></button>`).join('')}</div>
    <div class="ckgroup">🎬 Początek</div>
    <div class="cklist">${['Witam każdego ucznia po imieniu i robię krótką rozgrzewkę.','Łączę dzisiejszą lekcję z poprzednią.','Sprawdzam pracę domową i nazywam jedną konkretną rzecz, która się udała.'].map((t, i) => `<button class="ck" data-ck="o${i}"><span class="ckb"></span><span>${t}</span></button>`).join('')}</div>
    <div class="ckgroup">🧠 W trakcie lekcji</div>
    <div class="cklist">${['Zadaję pytania o rozumowanie konkretnym uczniom, po imieniu.','Angażuję wielu uczniów i daję prawdziwy czas na praktykę.','Pilnuję czasu, żeby zakończenie zaczęło się na czas.'].map((t, i) => `<button class="ck" data-ck="d${i}"><span class="ckb"></span><span>${t}</span></button>`).join('')}</div>
    <div class="ckgroup">🏁 Zakończenie — ostatnie 5–7 minut</div>
    <div class="cklist">${['Uczniowie robią podsumowanie: mówią, czego się nauczyli.','Daję motywującą zapowiedź następnej lekcji.','Wyjaśniam następną pracę domową i jak ją oddać.'].map((t, i) => `<button class="ck" data-ck="c${i}"><span class="ckb"></span><span>${t}</span></button>`).join('')}</div>
  </div>`
};
