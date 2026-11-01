/* ============================================================
   EM lesson guide (Classroom) · Minecraft course (Craftforge, ages 8–9) · POLISH file
   - Guide texts (CONTENT.ui, welcome, guide, finish): translated into Polish.
   - Lesson cards (CONTENT.activities): copied from the Polish lesson file (First_lesson_POL_Minecraft_8-9.txt).
   Keep HTML tags, ${...} code, keys, ids and file names unchanged.
   ============================================================ */
window.CONTENT = { lang: 'pl' };
CONTENT.media = 'Media_Minecraft_POL/';   // this language's screenshots (the shared illustrations are in Media_Minecraft_COMMON/)
CONTENT.video = '';                       // Google Drive /preview link of the first card's video ('' = placeholder)
CONTENT.dir = 'ltr';                      // 'rtl' for Arabic

/* =========================================================
   INTERFACE STRINGS (page title, replicated Classroom, guide card)
   ========================================================= */
CONTENT.ui = {
  title: 'Przewodnik po lekcji EM · Minecraft',

  // Classroom header
  headerTitle: 'Craftforge · Lekcja',
  online: '2 online',
  guideChip: 'Przewodnik po lekcji EM',
  leave: 'Wyjdź',

  // Classroom toolbar (tooltips included)
  classroom: 'Classroom',
  assignments: 'Assignments',
  prevTask: 'Poprzednie zadanie',
  nextTask: 'Następne zadanie',
  leadGroup: 'Lead the group',
  endSession: 'Zakończ sesję',

  // Video tiles
  student: 'Sofia',                 // the student's name (also used in the guide texts below)
  tutorInitial: 'T',                // letter in the tutor's avatar
  tutorYou: 'Tutor (Ty)',
  following: 'Podąża za tutorem',

  // Lesson platform header shown inside Assignments
  platformLang: 'PL ˅',
  platformUser: 'Tutor',

  // Shared pieces of the lesson cards (in the lesson's language)
  teacherNotes: 'Teacher notes',
  submit: '✔ Wyślij',
  choose: 'Wybierz…',
  uploadFile: 'Dołącz plik',
  videoSoon: 'Wideo do lekcji',

  // Guide card (coach)
  coachStep: (n, total) => `Przewodnik po lekcji EM · ${n}/${total}`,
  next: 'Dalej →',
  clickHint: '👆 Kliknij podświetlony element',
  openSections: (opened, total) => `Otwórz każdą sekcję (${opened}/${total})`,
  scrollEndNotes: 'Przewiń do końca notatek',
  scrollEndCard: 'Przewiń do końca karty'
};

/* =========================================================
   WELCOME PAGE
   ========================================================= */
CONTENT.welcome = {
  kicker: 'Nowy model edukacyjny · Szkolenie dla tutorów',
  title: 'Przewodnik po <span>lekcji EM</span>',
  lead: 'Ten przewodnik pokazuje, jak wygląda lekcja <b>nowego modelu edukacyjnego (EM)</b> w Classroom. Korzysta z pierwszych kart prawdziwej lekcji EM z kursu Minecraft — <b>Craftforge, Lekcja 1: Pierwszy ogień</b> — oraz z uczennicy, Sofii, która jest już w wirtualnej klasie.',
  seeTitle: 'Co zobaczysz',
  see: [
    'Jak zorganizowana jest <b>lekcja EM</b>: seria kart, z całym przewodnikiem umieszczonym wewnątrz lekcji.',
    'Co widzi <b>tutor</b>, a co widzi <b>Sofia</b>: <b>Teacher notes</b> znajdują się wewnątrz każdej karty i może je zobaczyć tylko tutor.',
    '<b>Pierwsze Teacher notes</b>, najbardziej szczegółowe w całej lekcji: historia, cel, Twoja rola, plan czasowy i — w pierwszej lekcji kursu — wideo z wyjaśnieniem.',
    'Jak <b>Lead the group</b>, żeby uczniowie podążali za kartą, którą otwierasz.'
  ],
  howTitle: 'Jak z tego korzystać',
  howText: 'To przewodnik, a nie symulacja do ćwiczeń: nie ma tu decyzji do podjęcia ani niczego do stracenia. Po prostu wykonuj podświetlone kroki i klikaj tam, gdzie wskaże Ci przewodnik. Możesz go odtwarzać ponownie, ile razy chcesz.',
  start: 'ROZPOCZNIJ PRZEWODNIK →'
};

/* =========================================================
   LESSON CONTENT (Craftforge, ages 8–9 — Lesson 1 "Pierwszy ogień")
   Each card: title (shown in the Assignments list and above the card) + html, built with
   the page's helpers: tnotes = Teacher notes box, spoiler = collapsible section,
   media = picture + text, test = quiz, choice = choice cards, essay = answer box,
   fileAnswer = file upload, gallery = pictures side by side, note = titled example box,
   linkBtn = button, video = the first card's video.
   C('file.png') = an illustration shared by every language (Media_Minecraft_COMMON/): keep these as they are.
   M('file.png') and gallery([...]) = screenshots of this language's folder (CONTENT.media): use your lesson's file names.
   ========================================================= */
CONTENT.activities = ({ M, C, tnotes, spoiler, media, banner, ul, ol, test, essay, note, linkBtn, gallery, choice, fileAnswer, video }) => [
  { title:`Pierwszy ogień — sprawdź narzędzia`, html:
    tnotes(`
      <h1>Przygotowanie do lekcji: Pierwszy ogień</h1>
      <h2>Przegląd lekcji</h2>
      <p>Pierwsza lekcja kursu dla dzieci w wieku 8–9 lat. Świat zgasł po <strong>Awarii</strong>: zniknęły kolory, mieszkańcom skradziono twarze, a wszystko zastygło w szarości. Uczeń jest nowym <strong>krawcem</strong>, którego wezwanie sprowadziło do tego świata. W ciągu 60 minut przywraca do życia pierwszy fragment: <strong>tworzy własną twarz</strong> (skórkę) i <strong>urządza się na tajemniczej wyspie</strong> (buduje schronienie), na którą prowadzi go Iskierka — ostatnia żywa iskra Kuźni.</p>
      <p>Trasa: klucz do świata (instalacja launchera) → wykuj twarz w <strong>Studio skórek</strong> („Skin Studio”) → załóż ją → wejdź do świata we własnej postaci: śnieżny las na krańcu świata → podziemia → ruiny chaosu → most inżynierów → wioska ocalałych → tajemnicza wyspa → zbuduj na wyspie własne schronienie → parada ożywionych.</p>
      ${spoiler(`Fabularna misja lekcji`, `<p>Awaria zgasiła świat i ukradła mieszkańcom twarze. Iskierka — ostatnia żywa iskra Wielkiej Kuźni — przetrwała Awarię, odnalazła nowego krafcera i dzieli się swoim światłem. Zadanie krafcera: wykuć własną twarz, przejść ścieżkę do żywego świata i zbudować schronienie na pustej wyspie — bazę do przyszłych wyzwań. Każdy kolor i każdy blok odpychają Awarię o krok dalej.</p>`)}
      ${spoiler(`Główny cel lekcji`, `<p>Przeprowadź dziecko przez cały proces tworzenia pierwszego efektu: wymyślenie krafcera, narysowanie skórki bezpośrednio w launcherze, założenie jej, przejście ścieżki na wyspę, zbudowanie tam własnego schronienia i pokazanie efektu grupie.</p>`)}
      ${spoiler(`Kluczowy efekt`, ul([`Skórka różni się od szarego Steve/Alex i <strong>została założona</strong> przyciskiem <strong>Załóż</strong> („Wear”) — dziecko wchodzi do świata własnym krafcerem.`, `Na wyspie stoi schronienie w miejscu wybranym przez dziecko: ściany, dach, wejście, detal i tabliczka z nickiem.`, `Dziecko pokazało efekt i powiedziało, co „ożyło”.`]))}
      ${video()}
      <h2>Rola nauczyciela</h2>
      <p>Prowadzisz historię i jesteś jej przewodnikiem, a nie postacią. Utrzymuj ciepłą, przygodową atmosferę i opowiadaj fabułę własnymi słowami: świat zgasł, krafcer jest wyczekiwany, a każdy krok przywraca świat do życia. Iskierka — żywy ognik i towarzyszka — jest bohaterką tej historii: pojawia się w tekstach kart i stamtąd zwraca się do ucznia. Nie musisz odgrywać jej głosu. Jeśli chcesz, przeczytaj wypowiedź bohaterki z karty ciepłym, radosnym tonem. Zacznij od poznania się, umowy krafcerów, sprawdzenia połączenia i instalacji launchera. Po skończonym pobieraniu stwórz z uczniami twarz w <strong>Studio skórek</strong> („Skin Studio”) i koniecznie dopilnuj kliknięcia <strong>Załóż</strong> („Wear”) — uczniowie wejdą do świata już we własnej postaci. Pokaż klasie efekt końcowy: szarą postać i pustą wyspę oraz to, jak ożywają. Prowadź klasę po ścieżce (podziemia → ruiny chaosu → most → wioska → wyspa), udostępniając swój ekran. Trasa jest wspólna dla wszystkich, a tempo wyznaczaj punktami kontrolnymi: „dotarliśmy — dodaj plus na czacie”.</p>
      ${spoiler(`Harmonogram lekcji`, `<table>
        <tr><th>Część</th><th>Karta</th><th>Czas</th></tr>
        <tr><td>Wprowadzenie</td><td>Witaj</td><td>2 min</td></tr>
        <tr><td></td><td>Umowa krafcerów</td><td>2 min</td></tr>
        <tr><td></td><td>Sprawdzenie połączenia</td><td>2 min</td></tr>
        <tr><td></td><td>Klucz do świata: instalacja launchera</td><td>6 min</td></tr>
        <tr><td></td><td>Jakim jesteś krafcerem?</td><td>3 min</td></tr>
        <tr><td>Główna</td><td>Otwórz Studio skórek („Skin Studio”)</td><td>3 min</td></tr>
        <tr><td></td><td>Wykuj twarz</td><td>7 min</td></tr>
        <tr><td></td><td>Załóż swoją twarz</td><td>4 min</td></tr>
        <tr><td></td><td>Ścieżka przez podziemia</td><td>8 min</td></tr>
        <tr><td></td><td>Przerwa na grę</td><td>4 min</td></tr>
        <tr><td></td><td>Zamieszkaj na wyspie</td><td>10 min</td></tr>
        <tr><td>Końcowa</td><td>Parada ożywionego świata</td><td>5 min</td></tr>
        <tr><td></td><td>Teraz jesteś krafcerem</td><td>2 min</td></tr>
        <tr><td></td><td>Jeszcze jedna iskra: omówienie zadania domowego</td><td>2 min</td></tr>
      </table>`)}
      ${spoiler(`Punkty wsparcia i ryzyko przekroczenia czasu`, ul([`<strong>Gdzie ucieka czas:</strong> „Wykuj twarz” (7), „Ścieżka przez podziemia” (8) i „Zamieszkaj na wyspie” (10). Zasada: skórka ma być własna, a nie idealna; ścieżką poruszacie się od punktu kontrolnego do punktu kontrolnego, bez swobodnego rozbiegania się; schronienie ma mieć 4 cechy — to wystarczy.`, `<strong>Ładowanie gry w tle:</strong> na karcie „Klucz do świata” ważne, aby u każdego <em>rozpoczęło się</em> ładowanie, a nie zakończyło. Niech pobieranie się kontynuuje, gdy uczniowie będą się poznawać. Uczniów, którzy zostali w tyle, wprowadź na karcie ze ścieżką.`, `<strong>Główna pułapka:</strong> uczeń narysował skórkę i uważa, że to już koniec. Kolejność na lekcji: narysował → zielony przycisk <strong>Załóż</strong> („Wear”) → dopiero potem wejście do świata. Uczeń, który wszedł bez kliknięcia <strong>Załóż</strong> („Wear”), powinien wyjść i wejść ponownie.`, `<strong>Obowiązkowy pokaz:</strong> na swoim ekranie pokaż „przed i po” — szara postać stała się własna, a pusta wyspa ożyła.`, `<strong>Dostosowanie poziomu:</strong> dla wolniejszych uczniów — minimum (zmienić kolor ubrania oraz zbudować domek ze ścianami, drzwiami i pochodnią); dla szybszych — zawód krafcera widoczny na skórce i dodatkowy element schronienia.`]))}
      <h2>Zakończenie lekcji</h2>
      <p>Parada ożywionego świata: każdy uczeń podczas udostępniania ekranu pokazuje swojego krafcera i swoje schronienie na wyspie, a jedna osoba odpowiada: „Podobało mi się, że…”. Na koniec podkreśl, że świat zaczął wracać do życia dzięki uczniom. Następnie krótko omów zadanie domowe — wyjaśnij je głosowo, gdy wszyscy są jeszcze na spotkaniu, i dopiero potem zakończ zajęcia.</p>
      <h3>Następnie zapoznaj się z notatkami dla nauczyciela na każdej karcie lekcji.</h3>`, 'tn-first') +
    `<h1>Pierwszy ogień 🔥</h1>
     <blockquote><p>Świat zgasł. Błąd ukradł mu kolory i twarze — wszyscy stali się takimi samymi szarymi postaciami. Ale dopóki płonie choć jedna iskra, możesz wykuć świat na nowo. Dziś jesteś twórcą i zaczniesz od siebie.</p></blockquote>
     <h2>Sprawdź sprzęt</h2>` +
    ul([`Sprawdź, czy kamera i mikrofon działają.`, `Sprawdź, czy możesz udostępnić ekran.`]) +
    `<h2>Przygotuj miejsce do pracy</h2>` +
    ul([`Zamknij niepotrzebne karty.`, `Przygotuj link do launchera od nauczyciela — zainstalujemy go razem.`, `Pomyśl, jaki będzie twój twórca: wybierz kolor, charakter i jeden wyrazisty szczegół.`])
  },
  { title:`Świat cię wzywa 🔥`, html:
    banner(C('e3e62541-c6c6-49a6-b354-6aee1cc44cd4.png')) +
    `<h1>Wezwanie czeka na ciebie 🔥</h1>
     <blockquote><p>Gdzieś daleko zgasł cały świat i wezwał pomoc. Wezwał właśnie ciebie. Dziś wejdziesz do niego i rozpalisz pierwszy ogień. Przez całą drogę będzie ti towarzyszyć wierna Iskierka.</p></blockquote>
     <h3>Co czeka cię dzisiaj</h3>` +
    ul([`Wykujesz sobie twarz, którą ukradł Błąd.`, `W nowym wyglądzie przejdziesz ścieżką przez podziemia do żywego świata na krańcu świata.`, `Znajdziesz tajemniczą wyspę, zbudujesz na niej swoją kryjówkę i pokażesz ją zespołowi.`]) +
    test(`Co będziesz mieć pod koniec lekcji?`, [`Własną twarz i własną kryjówkę na wyspie`, `Tylko nową grę na komputerze`, `Nic, dziś tylko oglądamy`]) +
    tnotes(`<p><strong>⏱ Czas:</strong> 2 minuty.</p><p><strong>🎯 Cel:</strong> wprowadzić nastrój przygody i krótko pokazać, do czego dążymy.</p><p><strong>🗣 Powiedz klasie:</strong> <em>„Dziś jesteście twórcami, a świat na was czeka. Prawie zgasł, ale razem przywrócimy go do życia. Pod koniec lekcji każdy będzie mieć własną twarz i własną kryjówkę na wyspie”.</em></p><p><strong>✅ Kroki:</strong> przeczytaj trzy punkty z ekranu, daj 20 sekund na krótki test „co będziesz mieć pod koniec lekcji?”, potwierdź poprawną odpowiedź na głos i od razu przejdź do poznawania się.</p><p><strong>➡️ Przejście:</strong> „Najpierw się poznamy, a potem ruszymy do świata”.</p>`)
  },
  { title:`Przed skokiem 🎧`, html:
    banner(C('e39cfe9e-1b0d-4037-b159-fce82f7a3fbb.png')) +
    `<h1>Sprawdzenie przed wejściem 🎧</h1>
     <blockquote><p>Przed skokiem do świata szybko sprawdź sprzęt, aby nic nie rozpraszało cię po drodze.</p></blockquote>
     <h3>🎯 Sprawdź w minutę</h3>` +
    ol([`Powiedz „cześć” do mikrofonu. Czy cię słychać?`, `Potrafisz udostępnić ekran?`, `Potrafisz włączyć kamerę? Pokaż twarz bohatera, aby świat cię poznał!`]) +
    spoiler(`Coś nie działa`, ol([`Napisz na czacie, co dokładnie nie działa.`, `Gdy pomagamy, wymyśl swojego twórcę.`])) +
    tnotes(`<p><strong>⏱ Czas:</strong> 2 minuty.</p><p><strong>🎯 Cel:</strong> usuń problemy techniczne przed ćwiczeniem, aby nie zabrały czasu przeznaczonego na <strong>Studio skórek</strong> („Skin Studio”).</p><p><strong>✅ Kroki:</strong> szybko sprawdź całą grupę i rozwiąż problemy z dźwiękiem, ekranem oraz kamerą.</p><p><strong>👀 Gotowe, gdy:</strong> wszyscy mają dźwięk, ekran i kamerę.</p><p><strong>➡️ Przejście:</strong> „Łączność działa — teraz wykujemy klucz do świata”.</p>`)
  },
  { title:`Klucz, który na ciebie czekał 🗝️`, html:
    banner(C('f0c256d5-6df0-458f-bcb0-80f17a403c7b.png')) +
    `<h1>Klucz do świata 🗝️</h1>
     <blockquote><p>Do zgaszonego świata nie wejdziesz tak po prostu — potrzebujesz klucza. Iskierka zachowała dla ciebie ten klucz: <strong>launcher Kodland do Minecraft</strong>. Złożymy go razem, a droga do Craftforge stanie otworem.</p></blockquote>
     <h3>🎯 Krok 1. Pobierz 📥</h3>
     <p>Otwórz link i pobierz plik launchera.</p>` +
    spoiler(`🍎 MacOS — plik .dmg`, `<p>Jeśli masz procesor Intel:</p>${linkBtn('[Intel] MacOS Kodland Craftforge')}<p>Jeśli masz procesor M:</p>${linkBtn('[M] MacOS Kodland Craftforge')}`) +
    spoiler(`🪟 Windows — plik .exe`, linkBtn('Windows Kodland Craftforge')) +
    `<h3>🎯 Krok 2. Zainstaluj 🧩</h3>
     <p>🍎 <strong>Mac:</strong> otwórz pobrany plik i przeciągnij ikonę launchera do folderu „Aplikacje”.</p>` +
    note(`💡 Nie otwieraj od razu pliku na MacOS. Wykonaj te kroki:`, `<p>Otwórz Terminal (Cmd+Space, wpisz „Terminal”) i wklej jedną linię:</p><blockquote><p>xattr -dr com.apple.quarantine &quot;/Applications/Kodland Launcher.app&quot;</p></blockquote><p>Naciśnij Return. <br>Nie pojawi się żadna odpowiedź — to normalne. Oznacza, że wszystko zadziałało.<br>Otwórz aplikację z folderu „Aplikacje”, klikając ją dwukrotnie.</p>`) +
    `<p>🪟 <strong>Windows:</strong> uruchom pobrany plik i klikaj „Dalej”.</p>` +
    note(`💡 Jeśli komputer nie otwiera pliku w systemie Windows:`, `<p>Komputer może zapytać, czy na pewno chcesz otworzyć ten plik. To nie błąd, tylko zwykłe zabezpieczenie. Możesz otworzyć plik i go zainstalować.</p>`) +
    `<h3>🎯 Krok 3. Zaloguj się 🔑</h3>` +
    ol([`Otwórz launcher i kliknij <strong>Zaloguj </strong>.`, `W przeglądarce otworzy się okno — kliknij <strong>Zaloguj się przez Kodland</strong> („Log in with Kodland”).`]) +
    gallery(['81b8ed2d-2987-4064-8275-5a1b5c5582f3.png', '02bb97c1-e688-480a-a136-c84e9a44eb7e.png']) +
    `<h3>🎯 Krok 4. Poczekaj na pobieranie ⏳</h3>` +
    ol([`Launcher sam pobierze grę — obserwuj zielony pasek.`, `Pierwsze pobieranie trwa dłużej. Gdy pasek się zapełnia, poznamy się i utworzymy drużynę.`]) +
    `<h3>✅ Gotowe, gdy</h3>` +
    ul([`Launcher jest zainstalowany i otwarty.`, `Zalogowałeś się na szkolne konto.`, `Zielony pasek się przesuwa — gra się pobiera.`]) +
    spoiler(`Błąd przeszkadza: nie możesz zdobyć klucza`, ol([`Plik się nie pobrał — otwórz ponownie link z czatu.`, `Komputer nie pozwala na instalację — poproś o pomoc dorosłego lub nauczyciela.`, `Nie możesz się zalogować — użyj szkolnego konta Kodland. Nie musisz tworzyć nowego konta.`, `Pasek przesuwa się powoli — przy pierwszym uruchomieniu to normalne. Pobieranie trwa samo.`])) +
    tnotes(`<p><strong>⏱ Czas:</strong> 6 minut.</p><p><strong>🎯 Cel:</strong> u każdego zainstalowany i otwarty jest launcher, wszyscy są zalogowani szkolnymi danymi i <strong>rozpoczęło się</strong> pobieranie gry.</p><p><strong>🗣 Powiedz klasie:</strong> <em>„Do pogrążonego w ciemności świata potrzebujemy klucza — to nasz launcher. Pobieramy go, instalujemy i logujemy się szkolnymi danymi. Gra pobierze się sama, a my w tym czasie się poznamy”.</em></p><p><strong>✅ Kroki:</strong> ponownie wyślij link do launchera na czacie; pokaż na swoim ekranie cztery kroki (pobierz → zainstaluj → zaloguj się → pobieranie); wyraźnie zaznacz, że hasło wpisuje się tylko w oknie logowania Kodland; sprawdź, czy u każdego pojawił się zielony pasek postępu.</p><p><strong>👀 Gotowe, gdy:</strong> u wszystkich launcher jest otwarty, wszyscy są zalogowani i widać postęp pobierania.</p><p><strong>🐛 Trudności:</strong> nie można się zalogować — użyj tylko szkolnego konta Kodland, bez samodzielnej rejestracji; pobieranie nie skończyło się przed końcem karty — to normalne, trwa w tle, wróć do uczniów, którzy zostali w tyle, na karcie „Ścieżka przez podziemia”.</p><p><strong>➡️ Przejście:</strong> „Klucz się wykuwa, gra się pobiera — a my w tym czasie zbieramy drużynę”.</p>`)
  },
  { title:`Zbierz drużynę 🛠️`, html:
    banner(C('e3e62541-c6c6-49a6-b354-6aee1cc44cd4.png')) +
    `<h1>Jakim jesteś twórcą? 🛠️</h1>
     <blockquote><p>Każdy twórca ma własny styl. Powiedz, który styl pasuje do ciebie najbardziej — dzięki temu zbierzemy drużynę dla pogrążonego w ciemności świata.</p></blockquote>
     <h3>🎯 Przedstaw się</h3>` +
    ol([`Gdy przyjdzie twoja kolej, włącz mikrofon.`, `Powiedz swój nick w Minecraft.`, `Powiedz, jakim jesteś twórcą i co lubisz robić w Minecraft.`, `Wyłącz mikrofon i posłuchaj innych.`]) +
    choice(`Jakim jesteś twórcą?`, [[`🏗️ Budowniczy`, `Lubię budować domy, wieże i całe ulice.`], [`🧭 Odkrywca`, `Lubię wędrować po świecie i odkrywać nowe miejsca.`], [`🎨 Dekorator`, `Lubię ozdabiać: dobierać kolory i dodawać szczegóły do pięknych miejsc.`], [`Inny wariant`, `Opowiedz o nim, gdy przyjdzie twoja kolej.`]]) +
    tnotes(`<p><strong>⏱ Czas:</strong> 3 minuty.</p><p><strong>🎯 Cel:</strong> dać każdemu krótką, bezpieczną chwilę na wypowiedź i połączyć jego styl z przyszłą skórką oraz budowlą. W tym czasie wszystkim pobiera się gra.</p><p><strong>🗣 Powiedz klasie:</strong> <em>„Pogrążony w ciemności świat czeka na różnych mistrzów. Kim jesteś — budowniczym, odkrywcą czy dekoratorem? Wkrótce przyda ci się to, gdy będziesz tworzyć swój wizerunek”.</em></p><p><strong>✅ Kroki:</strong> odpowiedz jako pierwszy według schematu „nick + jakim jestem twórcą + co lubię”; oddawaj głos po kolei; zwracaj uwagę na wspólne zainteresowania.</p><p><strong>👀 Gotowe, gdy:</strong> wszyscy się wypowiedzieli — głosowo, podając nick lub na czacie.</p><p><strong>➡️ Przejście:</strong> „Drużyna jest gotowa — pora na tworzenie naszych twarzy!”.</p>`)
  },
  { title:`Tu powstają twarze 🎨`, html:
    banner(C('5d9beb36-ad2a-4660-b818-fd69cee7a2db.png')) +
    `<h1>Otwórz Studio skórek 🎨</h1>
     <blockquote><p>Każdego gracza poznasz po dwóch rzeczach: po jego twarzy i po miejscu, w którym mieszka. Zacznijmy od twarzy. Stworzysz ją w launcherze, w <strong>Studio skórek</strong> („Skin Studio”).</p></blockquote>
     <h3>🎯 Otwórz Studio skórek</h3>` +
    ol([`W launcherze otwórz kartę <strong>Twórz</strong> („Create”), a potem kafelek <strong>Skiny</strong> („Skins”).`]) +
    gallery(['13bf37b3-b265-4c28-9de6-a6b5270e9a81.png', '0f495117-d2f6-46d6-a3e2-114d11e7fc5f.png']) +
    ul([`W prawym górnym rogu kliknij zielony przycisk <strong>Utwórz skin</strong> („Create a skin”).`]) +
    `<img class="center-img half" src="${M('f04ab327-a41a-4615-9665-177240421850.png')}" alt="Opis">` +
    ul([`Otworzy się <strong>Studio skórek</strong> („Skin Studio”) — tutaj narysujesz swoją postać.`]) +
    `<img class="center-img half" src="${M('caf6b9b1-b9d4-442b-9a8c-9326bc02fc0f.png')}" alt="Opis">` +
    note(`💡 Co znajdziesz w środku`, `<p>Pędzel, gumka, wypełnienie i pipeta, paleta kolorów oraz widok <strong>3D</strong> / <strong>2D map</strong>.</p>`) +
    tnotes(`<p><strong>⏱ Czas:</strong> 3 minuty.</p><p><strong>🎯 Cel:</strong> wszyscy otworzyli <strong>Studio skórek</strong> („Skin Studio”) i są gotowi do rysowania.</p><p><strong>🗣 Powiedz klasie:</strong> <em>„Skórkę narysujemy w launcherze: </em><strong><em>Twórz</em></strong><em> („Create”) → </em><strong><em>Skiny</em></strong><em> („Skins”) → zielony przycisk </em><strong><em>Utwórz skin</em></strong><em> („Create a skin”). Przyciski są po angielsku — pokażę wam, gdzie kliknąć”.</em></p><p><strong>✅ Kroki:</strong> pokaż na swoim ekranie ścieżkę <strong>Twórz</strong> („Create”) → <strong>Skiny</strong> („Skins”) → <strong>Utwórz skin</strong> („Create a skin”) → <strong>Studio skórek</strong> („Skin Studio”); przeczytaj angielskie nazwy przycisków.</p><p><strong>🐛 Trudności:</strong></p><p>1. Logowanie przez Kodland, bez samodzielnej rejestracji</p><p>2. Jeśli <strong>Studio skórek</strong> się nie otworzy, pomóż uczniowi zalogować się ponownie.</p><p><strong>➡️ Przejście:</strong> „A teraz tworzymy twarz — narysuj, kogo tylko chcesz!”.</p>`)
  },
  { title:`Nie jesteś już szary 🧑‍🎨`, html:
    banner(C('a452569f-1736-4d58-8912-48420f2e7fc9.png')) +
    `<h1>Stwórz twarz 🧑‍🎨</h1>
     <blockquote><p>Błąd sprawił, że stałeś się szary. Odzyskaj swój wygląd — narysuj craftera, jakiego chcesz: wybierz kolor, ubranie, twarz i dowolne detale. Iskierka krąży obok: „Weź moje światło — rysuj odważniej!”</p></blockquote>` +
    media(M('a05f3d1a-31b7-4dc1-8582-7a60ecd1bf70.png'), `<h3>🎯 Narysuj swojego craftera</h3>` + ol([`Wybierz kolor z palety (albo <strong>+</strong> dodaj własny).`, `Rysuj <strong>pędzlem</strong> po postaci; jeśli się pomylisz, użyj <strong>gumki</strong> albo cofnij zmianę (<strong>Cofnij</strong> / „Undo”).`, `Obracaj postać w widoku <strong>3D</strong> albo włącz <strong>Mapę 2D</strong> („2D map”), aby pokolorować ją w całości.`, `Nadaj mu własny styl: fryzura, ubranie, twarz i dowolne detale — wymyśl je samodzielnie.`])) +
    `<h3>✅ Sprawdź swój projekt</h3>` +
    ul([`Czy skórka nie jest już domyślnie szara?`, `Czy widać na niej Twój pomysł?`]) +
    spoiler(`💡 Pomysły, jeśli nie wiesz, kogo narysować`, ul([`Bohater w ulubionym kolorze i z jaskrawą peleryną.`, `Crafter-kowal: fartuch i opaska na głowę.`, `Odkrywca: kaptur i plecak.`])) +
    tnotes(`<p><strong>⏱ Czas:</strong> 7 minut.</p><p><strong>🎯 Cel:</strong> Każdy uczeń swobodnie rysuje swojego craftera. Najważniejsze, by nie był szary i było widać pomysł, a nie by projekt był idealny.</p><p><strong>🗣 Powiedz klasie:</strong> <em>„Narysujcie, kogo chcecie — to wasz crafter. Użyjcie pędzla, kolorów i gumki; w 3D możecie obracać postać, a w Mapie 2D pokolorować ją w całości. Najważniejsze, żeby była wasza.”</em></p><p><strong>✅ Kroki:</strong> Pokaż pędzel, paletę i przełącznik 3D / Mapę 2D. Daj uczniom swobodę, pomagaj tym, którzy utknęli. Na 1–2 minuty przed końcem przypomnij o kończeniu pracy.</p><p><strong>👀 Gotowe, gdy:</strong> Skórka nie jest domyślna, a każdy uczeń ma własną.</p><p><strong>🛟 Różnicowanie:</strong> Uczniowi, który utknął, podpowiedz pomysł ze spoilera albo: „Pokoloruj ubranie na swój ulubiony kolor”. Szybsi uczniowie mogą dodać detale, wzór lub twarz.</p><p><strong>🐛 Trudności:</strong> Przy ciągłym poprawianiu przypomnij: „Ma być własny, nie idealny”. Jeśli uczeń koloruje niewłaściwe miejsce, Mapa 2D pokazuje położenie każdej części. Detale i imię nie mogą zawierać danych osobowych.</p><p><strong>➡️ Przejście:</strong> „Gotowe — zakładamy twarz.”</p>`)
  },
  { title:`Świat cię rozpozna ✨`, html:
    banner(C('ebf26035-3f2a-4858-ba30-54c8b41fe49c.png')) +
    `<h1>Załóż swoją twarz ✨</h1>
     <blockquote><p>Twarz jest już gotowa, ale w świecie wciąż wyglądasz tak jak wcześniej. Załóż ją, a świat znów cię rozpozna.</p></blockquote>
     <h3>🎯 Odzyskaj swój wygląd</h3>` +
    ol([`W <strong>Studio skórek</strong> („Skin Studio”) kliknij zielony przycisk <strong>Załóż</strong> („Wear”).`, `Pojawi się komunikat: „Gotowe! Ta skórka jest teraz na twojej postaci.” — wygląd został przyjęty.`, `Spójrz na postać w launcherze: ma już Twoją skórkę.`]) +
    gallery(['ec0db0e7-9f04-4645-8023-fef777b9d6a6.png', '7b320366-79f9-442a-a7f6-f42e98181041.png']) +
    note(`💡 Ważne`, `<p>Załóż twarz <strong>przed</strong> wejściem do świata — wtedy wyruszysz na ścieżkę już jako Ty. Jeśli wejdziesz bez kliknięcia <strong>Załóż</strong> („Wear”) — w świecie zobaczysz szarego Steve’a.</p>`) +
    spoiler(`Coś nie działa: nadal jestem szary`, ol([`Czy kliknąłeś zielony przycisk <strong>Załóż</strong> („Wear”)? Powinien pojawić się napis „Gotowe!” („Done!”).`, `Czy zdążyłeś już wejść do świata? Wyjdź i wejdź ponownie — wygląd odświeży się przy kolejnym wejściu.`])) +
    test(`Co zrobić, aby w świecie mieć swoją twarz?`, [`Kliknąć zielony przycisk Załóż („Wear”) przed wejściem do świata.`, `Tylko narysować skórkę i zamknąć Studio skórek.`, `Nic — twarz pojawi się sama.`]) +
    tnotes(`<p><strong>⏱ Czas:</strong> 4 minuty.</p><p><strong>🎯 Cel:</strong> Wszyscy klikają <strong>Załóż</strong> („Wear”) <strong>przed</strong> wejściem do świata — grupa wyrusza na ścieżkę już w swoich skórkach.</p><p><strong>🗣 Powiedz klasie:</strong> <em>„Podoba ci się skórka? Kliknij zielony przycisk </em><strong><em>Załóż</em></strong><em> („Wear”). Gdy zobaczysz „Gotowe!”, twarz będzie twoja. Załóżmy ją teraz, aby wejść do świata już jako my.”</em></p><p><strong>✅ Kroki:</strong> Pokaż przycisk <strong>Załóż</strong> („Wear”). Sprawdź, czy u każdego pojawił się komunikat „Gotowe!” („Done!”) i czy postać w launcherze się zmieniła. To kluczowy moment — nie pomijaj go. Na koniec przeprowadź krótki test, który utrwali zasadę: „najpierw Załóż, potem świat”.</p><p><strong>👀 Gotowe, gdy:</strong> U każdego pojawił się komunikat „Gotowe!”, a w launcherze jest własna postać zamiast szarego Steve’a.</p><p><strong>🐛 Trudności:</strong> Uczeń narysował skórkę i podziwia ją, ale nie kliknął <strong>Załóż</strong> („Wear”) — to najczęstsza sytuacja. Sprawdź to u każdego ucznia. Jeśli ktoś zdążył już wejść do świata, niech wyjdzie i wejdzie ponownie.</p><p><strong>➡️ Przejście:</strong> „Twarz jest gotowa — teraz wchodzimy do świata.”</p>`)
  },
  { title:`Na krańcu świata 🧭`, html:
    banner(C('94f930d3-530e-401f-8fbb-d47d09c6294e.png')) +
    `<h1>Ścieżka przez podziemia 🧭</h1>
     <blockquote><p>Twoja twarz jest gotowa — pora wejść do świata. Otwierasz oczy na samym krańcu świata: śnieżny las, cisza i mroźne powietrze. A tuż przed tobą czarne wejście do podziemi. Nie ma innej drogi: żywy świat jest tam, po drugiej stronie. Iskierka wylatuje naprzód: „Nie bój się, poświecę ci!”</p></blockquote>
     <h3>🎯 Przejdź ścieżkę do końca</h3>` +
    ol([`Na karcie <strong>Graj</strong> („Play”) wpisz kod lekcji, który poda ci nauczyciel, i otwórz świat. Znajdziesz się w śnieżnym lesie.<img class="center-img" src="${M('ff90635f-7ddb-409a-bf49-45b7e10ad46c.png')}" alt="Opis">`, `Spójrz na siebie: w świecie masz już swoją nową twarz.`, `Wejdź do podziemi i przejdź przez nie na drugą stronę.<img class="center-img" src="${C('59db903b-558c-40ef-b4e1-a70613787aa1.png')}" alt="Opis">`, `W środku dotrzesz do <strong>ruin chaosu</strong>. Zostawił je Błąd. Zobacz, co dzieje się ze światem bez twórców.`, `Za ruinami znajdź <strong>most inżynieryjny</strong>: zbudowali go ocaleni. Przejdź po nim.`, `Z mostu zobaczysz <strong>wioskę</strong>, a za nią, na samym krańcu świata — <strong>tajemniczą wyspę</strong>. Dotrzyj do niej: ta wyspa do nikogo nie należy, więc jest twoja.`]) +
    `<h3>Co zauważyłeś?</h3>
     <p>Powiedz lub napisz: czym wyspa różni się od wioski? Zgadza się — w wiosce mieszkają ludzie, a na wyspie nie ma jeszcze niczego: ani domu, ani ognia. Za to wyspa do nikogo nie należy. To znaczy, że jest twoja.</p>` +
    essay(`Czym wyspa różni się od wioski?`, `Na przykład: w wiosce są domy i mieszkańcy, a na wyspie jest pusto.`) +
    spoiler(`Zgubiłem się po drodze`, ol([`Zatrzymaj się i napisz na czacie, co widzisz w pobliżu: lód, ruiny czy most.`, `Nauczyciel podpowie ci, dokąd iść dalej, i pokaże to miejsce na swoim ekranie. Iskierka oświetli drogę.`])) +
    tnotes(`<h3>Kod świata dla uczniów:</h3><blockquote><p>Welcome to CraftForge</p></blockquote><p><strong>⏱ Czas:</strong> 8 minut.</p><p><strong>🎯 Cel:</strong> Przeprowadź wszystkich trasą: śnieżny las → podziemia → ruiny chaosu → most inżynieryjny → wioska → tajemnicza wyspa, aby każdy poczuł, że przeszedł całą drogę, i zrozumiał, że wyspa jest jego miejscem.</p><p><strong>🗣 Powiedz klasie:</strong> <em>„Twarze są gotowe — wchodzimy. Jesteście na krańcu świata, w śnieżnym lesie, a przed wami są podziemia. Idźcie za mną, patrząc na ekran. Za podziemiami znajdują się ruiny chaosu, za nimi most ocalałych, a na samym krańcu świata — wyspa. Nie należy do nikogo i stanie się waszym schronieniem.”</em></p><p><strong>✅ Kroki:</strong> Podaj kod lekcji. Sprawdź, czy każda postać ma własną skórkę. Włącz udostępnianie ekranu. Przejdź ścieżką, komentując zakręty. Zrób dwa punkty kontrolne: przy Ruinach Chaosu i na moście. Powiedz: „Dotarliście — dodajcie plus na czacie”. Poczekaj na spóźnionych 20–30 sekund. Pokaż drogę od wioski do wyspy. Na wyspie daj uczniom minutę na rozejrzenie się. Zbierz 2–3 odpowiedzi na pytanie: „Czym wyspa różni się od wioski?”. Uczniowie, którzy nie chcą mówić, wpisują odpowiedź w polu na karcie.</p><p><strong>👀 Gotowe, gdy:</strong> Każdy zaznaczył na czacie oba punkty kontrolne, stoi na swojej wyspie i wie, że będzie budować właśnie tutaj.</p><p><strong>🐛 Trudności:</strong> Podziemia wydają się straszne — przypomnij, że to tryb kreatywny i nikt nie może nikomu zrobić krzywdy. Uczeń się zgubił — poproś go, aby opisał otoczenie (lód / ruiny / most), i pokaż to miejsce na swoim ekranie. Uczeń, który dotarł pierwszy — poproś go, aby obejrzał wyspę i nie budował przed zadaniem. Postać wygląda jak szary Steve — <strong>Studio skórek</strong> („Skin Studio”) → <strong>Załóż</strong> („Wear”) → dołącz ponownie do gry. Gra jeszcze się wczytuje — przeprowadź ucznia ścieżką osobno, gdy pozostali oglądają wyspę.</p><p><strong>➡️ Przejście:</strong> „Znaleźliśmy wyspę — krótki odpoczynek, a potem ją urządzimy.”</p>`)
  },
  { title:`Trzy zagadki na odpoczynek 🎲`, html:
    banner(C('9eecc25b-0273-414e-bced-7f1c71320741.png')) +
    `<h1>Przerwa dla budowniczego 🎲</h1>
     <blockquote><p>Ścieżka za tobą, wyspa znaleziona — czas na krótki odpoczynek przed budowaniem. Niczego nie buduj: odgadnij gry na podstawie emoji i wyślij odpowiedź na czat na znak nauczyciela.</p></blockquote>` +
    media(C('65d4af1a-bc18-4ee1-91ba-6903d3a04432.png'), `<h3>Runda: odgadnij grę po emoji</h3>` + ol([`Nauczyciel pokaże trzy emoji, w których ukryła się znana gra.`, `Napisz swoją odpowiedź na czacie, ale jeszcze jej nie wysyłaj.`, `Po komendzie „Wysyłamy!” wszyscy wyślą odpowiedzi jednocześnie.`]), 'narrow') +
    tnotes(`<p><strong>⏱ Czas:</strong> 4 minuty.</p><p><strong>🎯 Cel:</strong> Krótka, zrozumiała przerwa od zadania edukacyjnego przed budowaniem.</p><p><strong>✅ Kroki:</strong> Wysyłaj na czat rebusy po jednym: „⛏️ + 🧱 + 🟩” — Minecraft; „🏎️ + 🍌 + 🏁” — Mario Kart; „🟡 + ⚪ + 👻” — Pac-Man; „🚀 + 👨‍🚀 + 🔴” — Among Us. Na każdy przeznacz 10–15 sekund, a potem powiedz: „Wysyłamy!” i podaj odpowiedź.</p><p><strong>🐛 Trudności:</strong> To przerwa — bez ćwiczeń ruchowych, obowiązkowego włączania kamery, odpowiedzi pojedynczo i sprawdzania wiedzy. Uczniowie uczestniczą przez czat i reakcje.</p><p><strong>➡️ Przejście:</strong> „Odpoczęliśmy — urządzamy wyspę.”</p>`)
  },
  { title:`Niczyja? To już twoja 🏠`, html:
    banner(C('25146cd8-d3f2-49f1-a710-d8d26ba344b1.png')) +
    `<h1>Urządź wyspę 🏠</h1>
     <blockquote><p>Wyspa jest pusta i szara: nie ma tu ani domu, ani ogniska. Stąd będziesz pomagać światu, więc potrzebujesz tu schronienia. Buduj, gdzie chcesz: nad wodą, na wzgórzu lub wśród drzew. Po schronieniu od razu będzie widać, że mieszka tu budowniczy. Iskierka krąży nad wyspą: „Wybierz miejsce — i zaczynamy!”</p></blockquote>` +
    media(C('a88a74b8-f3a3-497b-a263-6fa3f1f1acdd.png'), `<h3>🎯 Zbuduj swoje schronienie</h3>` + ol([`Przejdź się po wyspie i wybierz miejsce, które ci się podoba. Cała wyspa należy do ciebie.`, `Postaw <strong>ściany</strong>.`, `Zrób <strong>dach</strong> na górze.`, `Zostaw <strong>wejście</strong>: drzwi lub otwór.`, `Dodaj jeden <strong>szczegół</strong>: kolorowy blok, pochodnię, flagę lub okno.`, `Postaw <strong>tabliczkę</strong> ze swoim nickiem — niech wyspa wie, kto jest jej właścicielem.`])) +
    `<h3>✅ Gotowe, gdy:</h3>` +
    ul([`Schronienie stoi na wyspie, w miejscu, które wybrałeś sam.`, `Widać 4 elementy: ściany, dach, wejście i szczegół.`, `Obok stoi tabliczka z nickiem.`]) +
    spoiler(`Potrzebujesz pomysłów na budowlę?`, ul([`Domek tuż przy wodzie — z oknem na morze.`, `Namiot odkrywcy na wzgórzu — z pochodnią przy wejściu.`, `Pracownia dekoratora — z jasnych bloków.`])) +
    tnotes(`<p><strong>⏱ Czas:</strong> 10 minut.</p><p><strong>🎯 Cel:</strong> Każdy uczeń zagospodarowuje wyspę, budując schronienie z 4 elementami i tabliczką. Miejsce wybiera sam.</p><p><strong>🗣 Powiedz klasie:</strong> <em>„Sami wybieracie miejsce — wyspa należy do was. Każda ściana odsuwa Zakłócenie o krok. Schronienie nie musi być duże. Ważne, że jest wasze: ma ściany, dach, wejście i jeden rozpoznawalny szczegół.”</em></p><p><strong>✅ Kroki:</strong> Wymień 4 elementy i tabliczkę; daj 30 sekund na wybór miejsca („wybrałeś — postaw pierwszą ścianę”); pomóż uczniom, którzy utknęli, zacząć od ścian ułożonych w kwadrat; 2 minuty przed końcem poproś o postawienie tabliczki i dodanie szczegółu.</p><p><strong>👀 Gotowe, gdy:</strong> Każdy ma na swojej wyspie schronienie z 4 elementami i tabliczką.</p><p><strong>🛟 Różnicowanie:</strong> Dla uczniów, którzy utknęli — prosty budynek ze ścianami, drzwiami i pochodnią; dla szybszych — ścieżka do wody, drugie piętro lub schronienie pasujące do zawodu rzemieślnika.</p><p><strong>🐛 Trudności:</strong> Uczeń zbyt długo wybiera miejsce — „każde miejsce się nadaje, cała wyspa jest twoja, postaw pierwszą ścianę”; buduje w wiosce — skieruj go z powrotem na wyspę, bo to jego miejsce; używa nicku z gry.</p><p><strong>➡️ Przejście:</strong> „Wyspa ożyła — pokażmy, co odzyskaliśmy z szarości.”</p>`)
  },
  { title:`Ile świateł się zapaliło 🎉`, html:
    banner(C('5b25f081-c7c5-48b1-9882-4244236f18ff.png')) +
    `<h1>Parada ożywionych 🎉</h1>
     <blockquote><p>Godzinę temu wyspa była pusta, a ty byłeś szary. Teraz masz własny wygląd i swoje schronienie. Pokażmy sobie, co odzyskaliśmy spod wpływu Zakłócenia. Iskierka krąży dookoła: „Ależ zapaliło się świateł!”</p></blockquote>
     <h3>Gdy pokazujesz swoją pracę</h3>` +
    ol([`Włącz udostępnianie ekranu i stań przy swoim schronieniu w wybranym wyglądzie postaci.`, `Powiedz jedno zdanie: kim jest twój rzemieślnik i jakie schronienie zbudowałeś.`, `Zrób zrzut ekranu: 🪟 Windows — <strong>Win + Print Screen</strong> (plik znajdziesz w folderze „Obrazy → Zrzuty ekranu”); 🍎 Mac — <strong>Cmd + Shift + 4</strong> i zaznacz craftera (plik pojawi się na biurku).`, `Dołącz zrzut ekranu do zadania poniżej — niech twój pierwszy ogień zostanie w historii.`]) +
    `<blockquote><p><strong>Jestem twórcą...</strong></p><p><strong>Moje schronienie to...</strong></p></blockquote>` +
    essay(`Jestem twórcą… Moje schronienie to…`, `Jestem twórcą-budowniczym. Moje schronienie to domek nad wodą z widokiem na morze.`) +
    fileAnswer() +
    spoiler(`Błąd gry: nie mogę znaleźć zrzutu ekranu`, ol([`Powiedz nauczycielowi — pokaże ci, gdzie znajdują się zrzuty ekranu z gry.`, `Nie udało się teraz? Dołącz zrzut ekranu w domu — twoje schronienie nigdzie nie zniknie.`])) +
    `<h3>Gdy prezentuje ktoś inny</h3>` +
    media(C('13b9f804-e225-4cbe-9c0d-de93f0a00cdb.png'), ol([`Znajdź jeden szczegół, który wybrał autor.`, `Powiedz lub napisz: „Podobało mi się, że…” i nazwij ten szczegół.`])) +
    tnotes(`<p><strong>⏱ Czas:</strong> 5 minut.</p><p><strong>🎯 Cel:</strong> Krótka prezentacja, chwila dumy i pomocna, konkretna informacja zwrotna.</p><p><strong>🗣 Powiedz klasie:</strong> <em>„Zobaczcie, ile ognisk się zapaliło! Każdy z was przywrócił kawałek świata. Niech każdy pokaże swoje schronienie, a my znajdziemy coś, co nam się w nim podoba.”</em></p><p><strong>✅ Kroki:</strong> Poproś wszystkich, aby stanęli przy swoim schronieniu i nacisnęli F2 — to będzie kadr z lekcji; przed prezentacją poproś o wypełnienie pola „Jestem twórcą… Moje schronienie to…” — dzięki temu łatwiej będzie o nim opowiedzieć; następnie każdy pokazuje swój świat przez udostępnianie ekranu: 20–30 sekund i jedno zdanie; po prezentacji jeden uczeń mówi „Podobało mi się, że…” i wskazuje konkretny szczegół. Gdy prezentuje jedna osoba, pozostali dołączają zrzut ekranu do zadania.</p><p><strong>👀 Gotowe, gdy:</strong> Każdy uczeń dołączył zrzut ekranu ze schronieniem i wypełnił pole o sobie jako twórcy.</p><p><strong>🐛 Trudności:</strong> Zatrzymaj porównywanie „lepsze/gorsze” i doceniaj to, że schronienie jest własnym pomysłem ucznia; gdy brakuje czasu — pokaż kilka osób, które zgłoszą się na ochotnika, a pozostałych wesprzyj na czacie; gdy nie można znaleźć zrzutu ekranu — pozwól dołączyć go w domu, ponieważ prezentacja jest ważniejsza niż plik.</p><p><strong>Wymaga uzupełnienia:</strong> Dokładna ścieżka do folderu ze zrzutami ekranu z gry w launcherze Kodland — wpisz ją tutaj, aby nauczyciel mógł od razu ją pokazać.</p><p><strong>➡️ Przejście:</strong> „Świat znów ożył — podsumujmy.”</p>`)
  },
  { title:`Świat znów oddycha ✨`, html:
    banner(C('94f930d3-530e-401f-8fbb-d47d09c6294e.png')) +
    `<h1>Teraz jesteś twórcą ✨</h1>
     <blockquote><p>Masz własny wygląd oraz własną wyspę ze schronieniem. Świat przestał być pusty — bo pojawiłeś się w nim ty. Błąd gry ustąpił, a to dopiero początek.</p></blockquote>
     <h3>Teraz już umiesz:</h3>` +
    ul([`Tworzyć swój wygląd w <strong>Studio skórek</strong> („Skin Studio”).`, `Zakładać go przyciskiem <strong>Załóż</strong> („Wear”) przed wejściem do świata.`, `Wybierać swoje miejsce i budować na nim schronienie z tabliczką.`, `Pokazywać siebie i dostrzegać dobre rzeczy u innych.`]) +
    `<h3>💬 Zastanów się</h3>` +
    choice(`Co było dziś dla ciebie najważniejsze?`, [[`🎨 Mój wygląd`, `Który element swojej skórki lubisz najbardziej?`], [`🏠 Moje schronienie`, `Co najbardziej podoba ci się w twoim schronieniu?`], [`🧭 Ścieżka przez podziemia`, `Co na tej ścieżce zrobiło na tobie największe wrażenie: podziemia, ruiny chaosu czy most?`]]) +
    tnotes(`<p><strong>⏱ Czas:</strong> 2 minuty.</p><p><strong>🎯 Cel:</strong> Podsumować drogę przebytą na lekcji i usłyszeć jeden szczególnie ważny moment.</p><p><strong>🗣 Powiedz klasie:</strong> <em>„Dzisiaj odzyskaliście swój wygląd i urządziliście wyspę — świat znów oddycha dzięki wam. A przed wami cały świat, który czeka na twórcę!”</em></p><p><strong>✅ Kroki:</strong> Powiedz „Teraz już umiesz” (30 sekund), zbierz 3–4 odpowiedzi na pytanie, co zrobiło największe wrażenie. Następnie przejdź do zadania domowego.</p><p><strong>➡️ Przejście:</strong> „A teraz — zadanie domowe.”</p>`)
  },
  { title:`Zabierz iskierkę ze sobą ✨`, html:
    banner(C('ac19e14b-3950-40c7-aef0-6c95f72d183c.png')) +
    `<h1>Jeszcze jedna iskierka ✨</h1>
     <blockquote><p>Schronienie już stoi, a twoja skórka jest gotowa — ale prawdziwy twórca nie kończy pracy nad sobą w jeden dzień. W domu dodaj do swojej skórki jeszcze jedną iskierkę. Następnym razem wejdziesz do świata jeszcze bardziej po swojemu. Iskierka przygotowała już dla ciebie mały płomyk: „Weź go, dopracujmy go razem!”</p></blockquote>
     <h3>🎯 Co zrobić w domu</h3>` +
    ol([`Otwórz <strong>Studio skórek</strong> („Skin Studio”) tą samą drogą: <strong>Twórz</strong> („Create”) → <strong>Skiny</strong> („Skins”).`, `Dodaj swojej postaci jeden nowy element.`, `Kliknij zielony przycisk <strong>Załóż</strong> („Wear”), aby zaktualizować skórkę.`, `Zrób zdjęcie swojej postaci i dołącz je do zadania.`]) +
    note(`⏱ To zajmie chwilę`, `<p>Wystarczy 10–15 minut. Nie musisz rysować wszystkiego od nowa — dopracuj skórkę, którą już zrobiłeś.</p>`) +
    `<p>Szczegółowe kroki i pomysły znajdują się na następnej karcie. Możesz ją otworzyć w domu w dowolnym momencie.</p>` +
    tnotes(`<p><strong>⏱ Czas:</strong> 2 minuty.</p><p><strong>🎯 Cel:</strong> Wyjaśnić zadanie domowe, gdy wszyscy są jeszcze na spotkaniu, aby uczeń nie otwierał karty w domu bez przygotowania i wiedział, że ma dodać jeden nowy element, a nie tworzyć nową skórkę.</p><p><strong>🗣 Powiedz klasie:</strong> <em>„W domu dodajcie do swojej postaci jeszcze jedną iskierkę — jeden nowy element: czapkę, inny kolor butów albo znaczek. Nie rysujemy od nowa, tylko dopracowujemy skórkę. Koniecznie kliknijcie zielony przycisk </em><strong><em>Załóż</em></strong><em> („Wear”), inaczej skórka się nie zaktualizuje.”</em></p><p><strong>✅ Kroki:</strong> Pokaż na swoim ekranie ścieżkę <strong>Twórz</strong> („Create”) → <strong>Skiny</strong> („Skins”) i przypomnij o przycisku <strong>Załóż</strong> („Wear”). Podaj orientacyjny czas: 10–15 minut. Pokaż na karcie zadania, gdzie dołączyć zrzut ekranu skórki i gdzie napisać, co uczeń dodał. Poproś każdego, aby napisał na czacie, co doda do swojej skórki.</p><p><strong>👀 Gotowe, gdy:</strong> Każdy podał lub napisał na czacie swoją propozycję. Dzięki temu w domu nie będzie patrzeć na pusty ekran.</p><p><strong>🐛 Trudności:</strong> „Nie wiem, co dodać” — pomysły znajdziesz w spoilerze na karcie zadania. Możesz zaproponować zawód craftera: kowal, ogrodnik lub badacz. „Już wszystko narysowałem” — niech doda detal pasujący do wybranego zawodu. Rodzice potrzebują dostępu — używają tego samego szkolnego logowania do Kodland, bez samodzielnej rejestracji.</p><p><strong>➡️ Przejście:</strong> „Zadanie jest jasne — zabierzcie do domu kartę ze szczegółowymi krokami.”</p>`)
  },
  { title:`Dopracuj w domu ⚡`, html:
    banner(C('196595d3-94ac-4707-9519-78775d33a943.png')) +
    `<h1>Zadanie domowe ⚡</h1>
     <blockquote><p>W domu dodaj swojemu crafterowi jeszcze jeden detal, aby był bardziej Twój. W tej postaci wejdziesz do Lasu Świetlików na następnych zajęciach.</p></blockquote>
     <h3>Łatwiejsza wersja</h3>` +
    ol([`Otwórz <strong>Studio skórek</strong> („Skin Studio”): <strong>Twórz</strong> („Create”) → <strong>Skiny</strong> („Skins”) → <strong>Utwórz skin</strong> („Create a skin”).`, `Dodaj do skórki jeden detal: czapkę, inny kolor butów lub znaczek.`, `Kliknij ponownie <strong>Załóż</strong> („Wear”).`]) +
    `<h3>Trudniejsza wersja</h3>` +
    ol([`Wymyśl dla swojego craftera zawód: kowal, ogrodnik lub badacz.`, `Pokaż go na skórce: dodaj fartuch, pelerynę lub narzędzie przy pasie.`, `Wymyśl jedno zdanie o tym, kim jest Twój crafter.`]) +
    `<h3>Jak oddać zadanie</h3>` +
    ol([`Otwórz <strong>Studio skórek</strong> („Skin Studio”) — zobaczysz w nim całego swojego craftera.`, `Zrób zrzut ekranu: 🪟 Windows — <strong>Win + Print Screen</strong> (plik znajdziesz w folderze „Obrazy → Zrzuty ekranu”); 🍎 Mac — <strong>Cmd + Shift + 4</strong> i zaznacz craftera (plik pojawi się na biurku).`, `Dołącz zrzut ekranu do zadania.` + fileAnswer(), `Napisz, co dodałeś do swojego craftera.`]) +
    essay(`Co dodałeś do swojego craftera?`, `Na przykład: dodałem kowalski fartuch i limonkową czapkę, a potem kliknąłem Załóż („Wear”).`) +
    spoiler(`Co zrobić, gdy nie udaje się zrobić zrzutu ekranu?`, ol([`Poproś dorosłego o pomoc w zrobieniu zrzutu ekranu.`, `Jeśli zupełnie się nie udaje, sfotografuj ekran telefonem i dołącz zdjęcie.`])) +
    spoiler(`Błąd daje się we znaki: nie możesz wejść do Studia w domu`, ol([`Zaloguj się tymi samymi danymi do Kodland, których używasz na lekcji.`, `Jeśli się nie udaje, poproś rodziców o pomoc w zalogowaniu się.`]))
  }
];

/* =========================================================
   GUIDED TOUR STEPS
   Translate title, text and btn. Keep target / accept / read / side / wide / next / last as they are.
   ========================================================= */
CONTENT.guide = [
  { title:'Witaj w wirtualnej klasie', next:true,
    text:'W <b>nowym modelu edukacyjnym (EM)</b> wszystko, czego potrzebujesz do poprowadzenia lekcji, znajduje się <b>wewnątrz samej lekcji</b>, w Classroom. Nie ma wiki ani osobnego dokumentu: wskazówki do każdej lekcji są częścią kart lekcji.<br><br>Otwórzmy je.' },
  { title:'Otwórz materiały lekcji', target:'.tb-group', accept:['openTasks','toggleDropdown'],
    text:'Materiały lekcji znajdują się w <b>Assignments</b>. Kliknij <b>Assignments</b> — gdy najedziesz na nie myszką, zmieni kolor na niebieski.' },
  { title:'Wybierz pierwszą kartę', target:'#dd-0', accept:['pickActivity:0'],
    text:'To lista <b>zadań</b> lekcji, po kolei. To pierwsza lekcja kursu Minecraft.<br><br>Kliknij pierwsze z nich.' },
  { title:'Dwa widoki tej samej karty', next:true, wide:true,
    text:'Zanim pójdziesz dalej, ważne jest, by zrozumieć, <b>co widzisz Ty</b> i <b>co widzi Sofia</b>. Jesteście na tej samej karcie, ale nie na tym samym ekranie:' +
      `<div class="views">
        <div class="view"><div class="vh">👩‍🏫 Co widzisz <b>Ty</b></div>
          <div class="mock"><div class="m-tn">Teacher notes<small>tylko dla Ciebie</small></div><div class="mk-c">Treść karty</div></div></div>
        <div class="view"><div class="vh">👧 Co widzi <b>Sofia</b></div>
          <div class="mock"><div class="mk-c">Treść karty</div></div></div>
      </div>` +
      '<ul class="c-list"><li>Pole z <b>pomarańczową, przerywaną ramką</b> to <b>Teacher notes</b>. Są zapisane <b>wewnątrz karty</b>, razem z jej treścią.</li><li>Widzi je tylko tutor. Sofia <b>nigdy</b> nie widzi Teacher notes — tylko treść karty. Nie czytaj jej ich na głos.</li><li>Każda karta ma własne notatki, więc to pierwsza rzecz do sprawdzenia przed każdą kartą i w jej trakcie.</li></ul>' },
  { title:'Pierwsze Teacher notes', target:'#taskScroll', side:true, read:{ scope:'#tn-first' },
    text:'Notatki <b>pierwszej karty</b> są najbardziej szczegółowe w całej lekcji: przegląd i historia, cel i kluczowe efekty, Twoja <b>rola</b>, <b>plan czasowy</b> każdej karty, <b>możliwe trudności</b> i sposób <b>zakończenia</b> lekcji.<br><br>W pierwszej lekcji kursu zwykle jest też <b>wideo z wyjaśnieniem</b>: obejrzyj je podczas przygotowań.<br><br><b>Otwórz każdą sekcję</b> i <b>przewiń do końca notatek</b>, aby kontynuować.' },
  { title:'Co widzi Sofia', target:'#taskScroll', side:true, read:{},
    text:'Poniżej notatek jest karta w takiej postaci, w jakiej zobaczy ją <b>Sofia</b>: historia i przygotowanie do lekcji.<br><br>Przewiń <b>całą kartę</b>. Przycisk Dalej odblokuje się, gdy dojdziesz do końca.' },
  { title:'Lead the group', target:'#leadToggle', accept:['toggleLead'],
    text:'Teraz włącz <b>Lead the group</b>. Ten przełącznik masz tylko Ty — uczniowie go nie mają.' +
      `<div class="lead-demo">
        <div><span class="ld-sw"></span><b>OFF</b> — przechodzisz do innej karty albo przewijasz, a Sofia zostaje tam, gdzie była. Może patrzeć na coś innego.</div>
        <div><span class="ld-sw on"></span><b>ON</b> — każdą kartę, którą otwierasz, i każde przewinięcie Sofia widzi w tym samym czasie.</div>
      </div>` +
      'Kliknij przełącznik — gdy jest włączony, zmienia kolor na niebieski.' },
  { title:'Sofia podąża za Tobą', target:'.vt.student', next:true,
    text:'<b>Lead the group</b> jest włączone ✅ Spójrz na zdjęcie Sofii: teraz widnieje na nim napis <b>Podąża za tutorem</b>.<br><br>Od tej chwili:<ul class="c-list"><li>Sofia ma otwartą <b>tę samą kartę</b> co Ty i widzi to samo miejsce przewinięcia — bez Teacher notes.</li><li>Może kliknąć <b>Work independently</b>, aby eksplorować na własną rękę. Wtedy widzi baner z informacją, gdzie jesteś, z przyciskiem <b>Return</b>.</li></ul>' },
  { title:'Następna karta', target:'#btnNext', accept:['nextTask'],
    text:'Strzałka w prawo przenosi Cię do <b>następnej karty</b>. Ponieważ Lead the group jest włączone, Sofia idzie razem z Tobą. Kliknij ją.' },
  { title:'Notatki na każdej karcie', target:'#taskScroll', side:true, read:{},
    text:'Ta karta wita grupę i zawiera krótkie <b>pytanie</b>, na które Sofia odpowiada na własnej kopii. Oprócz treści dla niej ma na dole własne <b>Teacher notes</b>: są krótsze niż te pierwsze.<br><br>Zwykle podają <b>czas</b> karty, jej <b>cel</b>, <b>co powiedzieć</b> grupie, <b>kroki</b> i <b>przejście</b> do następnej karty.<br><br>Przeczytaj kartę do końca, razem z Teacher notes.' },
  { title:'Idziemy dalej', target:'#btnNext', accept:['nextTask'],
    text:'Kliknij <b>Następne zadanie</b>, aby przejść do kolejnej karty.' },
  { title:'Gotowe wskazówki na każdej karcie', side:true, target:'#taskScroll', read:{}, last:true, btn:'Zakończ ✓',
    text:'Ta karta sprawdza sprzęt przed wejściem do świata. Spójrz na jej Teacher notes: oprócz czasu i celu zawierają <b>kroki</b>, warunek <b>„Gotowe, gdy”</b> i <b>przejście</b> do następnej karty, dzięki czemu lekcja płynnie przechodzi z karty na kartę.<br><br>Przewiń do końca karty i przeczytaj Teacher notes.<br><br>To wszystko, co musisz wiedzieć o formacie lekcji EM!' }
];

/* =========================================================
   FINISH SCREEN (the completion code is added by the page)
   ========================================================= */
CONTENT.finish = {
  kicker: 'Przewodnik ukończony',
  title: '🎓 Tak wygląda lekcja EM w Classroom',
  intro: 'Wiesz już, jak wyglądają lekcje nowego modelu edukacyjnego w Classroom i jak prowadzić grupę:',
  steps: [
    'Lekcja to seria <b>kart</b> w <b>Assignments</b>: wszystkie wskazówki znajdują się wewnątrz lekcji.',
    '<b>Teacher notes</b> są wewnątrz każdej karty i widzisz je tylko <b>Ty</b>. Uczniowie nigdy ich nie widzą.',
    '<b>Pierwsza karta</b> ma najbardziej szczegółowe notatki: historię, cel, Twoją rolę, plan czasowy, możliwe trudności i zakończenie — a w pierwszej lekcji kursu zwykle także wideo z wyjaśnieniem.',
    'Każda kolejna karta ma krótsze notatki: czas, cel, co powiedzieć, kroki i przejście.',
    '<b>Lead the group</b> sprawia, że uczniowie podążają za kartą, którą otwierasz, i za miejscem, do którego przewijasz.'
  ],
  tip: '<b>Wskazówka:</b> przeczytaj Teacher notes całej lekcji <b>przed</b> jej poprowadzeniem.',
  codeLabel: '🔑 Twój kod ukończenia',
  codeHint: 'Skopiuj go do szkolenia, aby potwierdzić ukończenie przewodnika.',
  back: '← Wróć do szkolenia',
  closeTab: 'Zamknij tę kartę, aby wrócić do szkolenia, a następnie wpisz tam swój kod ukończenia.'
};
