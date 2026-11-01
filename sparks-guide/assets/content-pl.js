/* ============================================================
   Kodland Sparks guide · POLISH content
   Translate only the text inside quotes / backticks. Keep HTML tags, ${...} placeholders, keys, ids, file names and URLs unchanged.
   ============================================================ */
window.CONTENT = { lang: 'pl' };

/* ============================================================
   INTERFACE: the replicated Kodland Sparks platform + guide layer
   ============================================================ */
CONTENT.ui = {
  title: 'Przewodnik po Kodland Sparks',

  /* ---------- top bar ---------- */
  logo: 'Kodland Sparks',
  nav: { feed:'Feed', my:'My projects', publish:'Publish project', studio:'Studio', ai:'AI helper' },

  /* ---------- Feed ---------- */
  feed: {
    bannerTitle: 'Spersonalizuj swój profil',
    bannerText: 'Ustaw awatar i wybierz pseudonim — wszyscy zobaczą go na Twoim profilu.',
    bannerBtn: 'Dostosuj profil',
    featured: 'Najnowsze wyróżnione projekty',
    feed: 'Feed',
    filter: 'Wszystkie projekty ˅',
    results: '(11,6 tys. wyników)',
    search: '🔍 Pseudonim lub tytuł projektu',
    feedbackWanted: 'Szukam opinii'
  },
  // text drawn inside some project thumbnails (fake game screens)
  thumbs: { coins:'🪙 79 monet', play:'▶ GRAJ', heroes:'BOHATEROWIE', armory:'ZBROJOWNIA', shop:'SKLEP', magicLab:'MAGICZNE LABORATORIUM', neonRacer:'NEON RACER' },

  /* ---------- a published project (Creeper) ---------- */
  project: {
    title: 'Creeper',
    download: 'Pobierz',
    authorName: 'Mia Torres',
    uploaded: 'Dodano 16 paź 2026',
    desc: 'Creeper w świątecznej czapce się zgubił!! Pomóżcie mi go znaleźć!!',
    showTr: 'Pokaż tłumaczenie',
    fbTitle: 'Opublikowana opinia',
    fbUpdated: 'Zaktualizowano 16 paź 2026',
    fbBody: '<p>Mia, stworzyłaś bardzo rozpoznawalną postać zaledwie z kilku pikseli, a świąteczna czapka nadaje Twojemu Creeperowi zabawny i oryginalny charakter.</p><p>Twój świąteczny Creeper jest pełen osobowości i kreatywności — widać, że lubisz wymyślać wyjątkowe postacie!</p>'
  },

  /* ---------- My projects ---------- */
  my: {
    name: 'Alex Tutor',
    friends: 'Znajomi',
    friendsTab: 'Znajomi (0)',
    subsTab: 'Subskrybenci (0)',
    noFriends: 'Nie masz jeszcze znajomych',
    privateTag: 'Projekt prywatny',
    cardTitle: 'Rysunek'
  },

  /* ---------- Publish project ---------- */
  publish: {
    title: 'Nowy <span>projekt</span>',
    sub: 'Wybierz typ projektu, uzupełnij szczegóły i zdecyduj, kto może go zobaczyć.',
    typeLabel: 'Typ projektu',
    // [icon, name, description] — keep the first item (icon name) unchanged
    types: [
      ['image', 'Obraz', 'Prześlij rysunek, obraz, GIF lub WebP.'],
      ['python', 'Python', 'Wklej swój kod w Pythonie — odwiedzający mogą uruchomić go w przeglądarce.'],
      ['game', 'Gra lub aplikacja internetowa', 'Plik .sb3 ze Scratcha lub .zip z Unity/Godot/HTML/Python.'],
      ['creeper', 'Skin do Minecrafta', 'Prześlij skin 64×64 i zobacz go na modelu 3D.'],
      ['book', 'Opowieść', 'Strona z tekstem, obrazami i osadzonymi treściami'],
      ['globe', 'Osadzenie', 'Wklej link do YouTube, Vimeo, Sketchfab, Tinkercad lub Canva.'],
      ['github', 'GitHub', 'Dodaj link do publicznego repozytorium GitHub.'],
      ['box', 'Inne', 'Jeśli żaden z powyższych typów nie pasuje — np. gra z Roblox lub aplikacja ze sklepu Play.']
    ],
    titleLabel: 'Tytuł',
    titleHint: 'Pozostało 30 znaków',
    descLabel: 'Opis',
    descHint: 'Pozostało 240 znaków',
    fileLabel: 'Rysunek',
    chooseFile: 'Wybierz plik',
    fileHint: 'PNG, JPG, WebP lub GIF do 5 MB',
    section: '📁 Sekcja',
    noSection: 'Bez sekcji',
    sectionHint: 'Sekcje pomagają grupować projekty na stronie Twojego profilu.',
    reactions: 'Reakcje',
    reactionsHint: 'Wybierz, jakie reakcje widzowie mogą zostawiać pod tym projektem.',
    heartAlways: '💖 Serce jest zawsze dostępne',
    appearance: 'Wygląd',
    appearanceHint: 'Wybierz kolor ramki, aby wyróżnić kartę swojego projektu w Feedzie.',
    frameSlots: 'Dostępne miejsca na ramki: 5 z 5',
    frameDefault: '⚫ Domyślna',
    common: 'Zwykłe',
    commonFrames: ['🔵 Niebo', '🟢 Szmaragd', '🟣 Fiolet', '🔴 Czerwień'],
    rare: 'Rzadkie',
    rareFrames: ['Lawenda', 'Róż', 'Szary'],
    visibility: 'Widoczność',
    // [name, description] — Public · Friends only · Only me
    vis: [
      ['Publiczny', 'Pojawia się w Feedzie i w Twoim publicznym portfolio.'],
      ['Tylko dla znajomych', 'Widoczny dla Twoich znajomych, nauczycieli i dla Ciebie.'],
      ['Tylko ja', 'Widoczny tylko dla Ciebie w Twoim portfolio.']
    ],
    // [label, description] — the three switches
    toggles: [
      ['Poproś o opinię', 'Inni autorzy będą mogli zostawić uporządkowaną opinię o Twoim projekcie. Dostępne tylko dla projektów publicznych.'],
      ['Zgadzam się, aby Kodland Sparks wykorzystywał ten projekt w promocji', 'Na przykład może pojawić się w naszych mediach społecznościowych, reklamach lub na stronie głównej, aby pokazać innym dzieciom, co można tu stworzyć. Możesz to zmienić w dowolnym momencie.'],
      ['Weź udział w wyborze na Discordzie', 'Raz dziennie publikujemy na naszym serwerze Discord najlepsze projekty dnia. Zostaw tę opcję włączoną, a Twój projekt też może zostać wybrany. Tylko projekty publiczne.']
    ],
    publish: 'Opublikuj'
  },

  /* ---------- Studio: modes and slots ---------- */
  studio: {
    modesTitle: 'Co chcesz stworzyć?',
    modesSub: 'Wybierz tryb, aby zacząć.',
    creative: 'Creative mode',
    creativeText: 'Twórz, co tylko chcesz — gry, strony, grafiki.',
    challenges: 'Challenges mode',
    challengesText: 'Wykonuj zadania i zdobywaj kryształy.',
    slotsTitle: 'Creative Studio',
    slotsSub: 'Wybierz projekt, aby kontynuować, lub zacznij coś nowego.',
    slot: n => `Slot ${n}`,
    startHere: 'Zacznij tutaj',
    comingSoon: 'Wkrótce',
    crumbBack: 'My projects'
  },

  /* ---------- Studio: "What will you build?" menu ---------- */
  build: {
    title: 'Co zbudujesz?',
    sub: 'Wybierz punkt startowy.',
    back: '‹ Wstecz',
    recommended: 'zalecane',
    progGroup: 'Programowanie &amp; development',
    mediaGroup: 'Media &amp; treści',
    // [name, description] of each starting card
    cards: {
      web: ['Gra lub aplikacja internetowa', 'HTML, CSS, JavaScript lub Python'],
      terminal: ['Python w terminalu', 'Program w terminalu'],
      scratch: ['Scratch', 'Buduj z bloków Scratcha'],
      pixel: ['Pixel Art', 'Rysuj piksel po pikselu'],
      anim: ['Animacja', 'Rysuj klatka po klatce'],
      music: ['Muzyka', 'Utwór na siatce'],
      skin: ['Edytor skinów', 'Skin do modelu 3D']
    },
    // [heading, description] of each group of templates
    groups: {
      webjs: ['Aplikacja internetowa JS', 'Strona internetowa zbudowana z HTML, CSS i JavaScriptu. Działa w podglądzie na żywo — zmiany pojawiają się natychmiast.'],
      webpy: ['Aplikacja internetowa Python', 'Strona internetowa zbudowana z HTML i CSS, z logiką napisaną w Pythonie. Działa w podglądzie na żywo — zmiany pojawiają się natychmiast.'],
      terminal: ['Python w terminalu', 'Program w jednym pliku Pythona. Uruchamia się w terminalu przyciskiem Play — komunikujesz się z nim za pomocą print() i input().'],
      pixel: ['Pixel Art', 'Rysuj sprite’y i animacje piksel po pikselu. Wybierz rozmiar płótna, aby zacząć, a potem opublikuj projekt jako obraz lub animację.'],
      anim: ['Animacja', 'Narysuj krótką kreskówkę klatka po klatce: rysuj każdą klatkę, podglądaj poprzednią dzięki onion skin i naciśnij play. Wybierz rozmiar płótna, aby zacząć.'],
      music: ['Muzyka', 'Zbuduj krótki utwór na siatce: namaluj melodię, dodaj perkusję i naciśnij play.'],
      skin: ['Edytor skinów', 'Maluj skin do Minecrafta na mapie 2D i patrz, jak owija się na modelu 3D. Symetria odbija Twoje pociągnięcia po obu stronach.']
    },
    // template buttons (keys are ids — do not change them)
    tpl: {
      webjs:'Pusty projekt', webjsb:'Projekt podstawowy', alien:'Alien Invaders', calcjs:'Kalkulator',
      webpy:'Pusty projekt', webpyb:'Projekt podstawowy', snake:'Gra Snake', calcpy:'Kalkulator',
      termempty:'Pusty projekt', guess:'Zgadnij liczbę',
      px16:'16 × 16', px32:'32 × 32', px64:'64 × 64', px128:'128 × 128',
      an640:'640 × 480', an960:'960 × 720', an1280:'1280 × 960',
      track:'Nowy utwór', retro:'Retro', tetris:'Tetris', kpop:'K-pop',
      steve:'Steve', alex:'Alex'
    },
    sizeHint: 'Rozmiar w pikselach. Możesz go zmienić później.'
  },

  /* ---------- Studio: editors ---------- */
  editor: {
    // project title shown in the editor bar ('' = empty placeholder)
    titles: { web:'', terminal:'Zgadnij liczbę', scratch:'', pixel:'', anim:'', music:'Retro', skin:'' },
    myProjects: 'My projects',
    projectTitle: 'Tytuł projektu',
    newProject: 'Nowy projekt',
    publish: 'Opublikuj',
    // AI tutor panel
    robby: 'Inimitable Robby',
    aiTutor: 'Tutor AI',
    chat: 'Czat',
    tasks: 'Zadania',
    greeting: 'Cześć! Jestem Twoim kumplem od kodowania. Co dziś budujesz? Zapytaj mnie, co dodać dalej albo jak ulepszyć swój kod — stwórzmy razem coś fajnego! 🚀',
    memory: 'Pamiętam tylko Twoje ostatnie 10 wiadomości — jeśli rozmawialiśmy o czymś dawno temu, krótko mi o tym przypomnij.',
    askTip: 'Poproś o wskazówkę...',
    // web app editor
    preview: 'Podgląd',
    htmlComment: '<!-- Tutaj wpisz swój kod HTML -->',
    // terminal Python editor
    terminal: 'Terminal',
    stop: '▢ Zatrzymaj',
    termOut: 'Wylosowałem liczbę od 1 do 100. Spróbuj ją zgadnąć!<br>Twój typ:',
    answer: 'Twoja odpowiedź',
    send: '➤ Wyślij',
    // Python code shown in the editor: translate only the comment and the text inside "double quotes"
    py: ['import random', '', '# Komputer losuje liczbę od 1 do 100', 'secret = random.randint(1, 100)', 'attempts = 0', '', 'print("Wylosowałem liczbę od 1 do 100. Spróbuj ją zgadnąć!")', '', 'while True:', '    guess = int(input("Twój typ: "))', '    attempts += 1', '', '    if guess < secret:', '        print("Za mało! Spróbuj jeszcze raz.")', '    elif guess > secret:', '        print("Za dużo! Spróbuj jeszcze raz.")', '    else:', '        print("Udało się! Liczba prób:", attempts)', '        break'],
    // Scratch editor
    scratch: {
      cats: ['Ruch', 'Wygląd', 'Dźwięk', 'Zdarzenia', 'Sterowanie', 'Czujniki', 'Operatory', 'Zmienne', 'Moje bloki'],
      code: '▤ Kod', costumes: '🖌 Kostiumy', sounds: '🔊 Dźwięki', find: 'Szukaj (Ctrl+F)',
      palette: 'Ruch',
      blocks: ['przesuń o <em>10</em> kroków', 'obróć ↻ o <em>15</em> stopni', 'obróć ↺ o <em>15</em> stopni', 'idź do <em class="ddv">losowa pozycja ▾</em>', 'idź do x: <em>0</em> y: <em>0</em>', 'leć <em>1</em> s do <em class="ddv">losowa pozycja ▾</em>', 'leć <em>1</em> s do x: <em>0</em> y: <em>0</em>', 'ustaw kierunek <em>90</em>'],
      sprite: 'Duszek', spriteName: 'Duszek1', size: 'Rozmiar', direction: 'Kierunek', stage: 'Scena'
    },
    // drawing editors (pixel art, animation, skin)
    draw: {
      draw: 'RYSUJ', brush: 'ROZMIAR PĘDZLA', shade: 'CIENIOWANIE &amp; DITHERING', canvas: 'PŁÓTNO', history: 'HISTORIA',
      dither: 'DITHERING', view: 'WIDOK', exportL: 'Eksportuj', map2d: 'Mapa 2D',
      speed: 'Szybkość', firstFrame: 'Narysuj pierwszą klatkę, a potem naciśnij +'
    },
    // music editor
    music: { track:'Retro ˅', addTrack:'+ Ścieżka', tempo:'Tempo', bpm:'180 BPM', drums:'Perkusja', electronic:'Elektroniczne', acoustic:'Akustyczne' }
  },

  /* ---------- AI helper ---------- */
  ai: {
    newChat: '+ Nowy czat',
    keep: 'Przechowuję Twoje ostatnie 5 czatów, ale ważne fakty z nich zapamiętuję.',
    memory: 'Co o Tobie pamiętam',
    credits: 'Pozostało 1000 z 1000 kredytów',
    pictures: '0 z 6 obrazów dzisiaj',
    resets: 'Reset o 00:00 UTC',
    name: 'Spark Aiko',
    role: 'AI helper',
    hello: 'Cześć! Jestem Aiko, Twoja pomocniczka AI. Zapytaj mnie o cokolwiek dotyczącego Twoich projektów,<br>kodu lub pomysłów — albo wybierz coś poniżej.',
    chips: ['Pomóż mi wymyślić pomysł na grę', 'Wyjaśnij błąd w moim kodzie', 'Utknąłem, co mam robić dalej?', 'Narysuj mi postać'],
    ask: 'Zapytaj o cokolwiek...'
  },

  /* ---------- Rewards drawer (crystals) ---------- */
  rewards: { title:'NAGRODY', rarity:'ZWYKŁA', hint:'Kliknij skrzynię, aby ją otworzyć' },

  /* ---------- Coach card (guide layer) ---------- */
  coach: {
    step: (n, total) => `Przewodnik po Sparks · ${n}/${total}`,
    hint: '👆 Kliknij podświetlony element',
    next: 'Dalej →',
    backToMenu: '<br><br>Naciśnij <b>Dalej</b>, aby wrócić do menu projektów.'
  },

  /* ---------- Finish modal ---------- */
  finish: {
    kicker: 'Przewodnik ukończony',
    title: '🎓 Znasz już Kodland Sparks',
    intro: 'Poznałeś platformę, z której korzystają Twoi uczniowie:',
    items: [
      '<b>Feed</b>: projekty kolegów i koleżanek z klasy, z reakcjami i opiniami od AI.',
      '<b>My projects</b>: wszystko, co zostało zapisane lub opublikowane, zarówno przez tutorów, jak i uczniów.',
      '<b>Publish project</b>: udostępnianie gotowego projektu, wybór, kto go zobaczy, i zdobywanie nagród.',
      '<b>Studio</b>: Creative mode do tworzenia kodu (aplikacje internetowe, Python, Scratch), rysunków, animacji, muzyki i skinów oraz Challenges mode do zdobywania kryształów.',
      '<b>AI helper</b> i <b>tutor AI</b>: prowadzą i dają wskazówki, ale <b>AI proponuje, a autor decyduje</b>.'
    ],
    codeLabel: '🔑 Twój kod ukończenia',
    codeHint: 'Skopiuj go do szkolenia, aby potwierdzić, że ukończyłeś przewodnik.',
    back: '← Wróć do szkolenia',
    closeMsg: 'Zamknij tę kartę, aby wrócić do szkolenia, a następnie wpisz tam swój kod ukończenia.'
  },

  /* ---------- Welcome screen ---------- */
  welcome: {
    kicker: 'New Educational Model · Szkolenie dla tutorów',
    title: 'Kodland Sparks <span>przewodnik</span>',
    lead: 'Ten przewodnik pokaże Ci <b>Kodland Sparks</b>, platformę, na której Twoi uczniowie publikują i tworzą swoje projekty. Będziesz samodzielnie poruszać się po platformie i klikać tam, gdzie wskaże Ci przewodnik.',
    seeTitle: 'Co zobaczysz',
    see: [
      '<b>Feed</b>: jak uczniowie widzą projekty innych i na nie reagują oraz jakie opinie od AI otrzymują.',
      '<b>My projects</b> i <b>Publish project</b>: gdzie znajdują się zapisane prace i jak publikuje się gotowy projekt.',
      '<b>Studio</b>: co uczniowie tworzą na zajęciach — kod (aplikacje internetowe, Python, Scratch), rysunki, animacje, muzykę i skiny — oraz tryb Challenges.',
      '<b>AI helper</b> i <b>kryształy</b>, które zdobywają uczniowie.'
    ],
    howTitle: 'Jak z tego korzystać',
    howText: 'To przewodnik, a nie symulacja do ćwiczeń: nie musisz podejmować żadnych decyzji i niczego nie możesz zepsuć. Na każdym ekranie kliknij podświetlony element albo naciśnij <b>Dalej</b>, gdy krok prosi Cię o przeczytanie tekstu.',
    start: 'ROZPOCZNIJ PRZEWODNIK →'
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
  /* 1 */ { title:'Poznaj Kodland Sparks',
    text:'<b>Kodland Sparks</b> to platforma, na której uczniowie <b>publikują swoje projekty</b>, uczą się dalej między lekcjami i dostają opinie od kolegów z klasy oraz od mentora AI.<br><br>Na górnym pasku znajdziesz wszystko: <b>Feed</b>, <b>My projects</b>, <b>Publish project</b>, <b>Studio</b>, <b>AI helper</b> i <b>kryształy</b>. Odwiedzimy każde z tych miejsc.' },
  /* 2 */ { title:'Feed',
    text:'<b>Feed</b> to strona główna: pokazuje projekty opublikowane przez uczniów. Każda karta pokazuje <b>typ projektu</b> (Web App, Scratch, PNG, Python…), otrzymane reakcje i autora.<br><br>Oznaczenie <b>Szukam opinii</b> znaczy, że autor poprosił o opinię. Pod wyróżnionymi projektami Feed wyświetla wszystkie projekty.' },
  /* 3 */ { title:'Otwórz projekt kolegi lub koleżanki',
    text:'Uczniowie mogą wchodzić w interakcję z projektami, które opublikowali ich koledzy i koleżanki z klasy. Kliknij projekt <b>Creeper</b>, aby go otworzyć.' },
  /* 4 */ { title:'Opublikowany projekt',
    text:'Ten projekt to <b>rysunek</b> (PNG). Inne typy otwierają się w ten sam sposób: projekty Scratch i aplikacje internetowe można uruchomić od razu tutaj, a kod w Pythonie działa w przeglądarce.' },
  /* 5 */ { title:'Szczegóły i reakcje',
    text:'Pod projektem możesz go <b>pobrać</b> oraz zobaczyć jego <b>autora</b>, datę dodania, liczbę wyświetleń i otrzymane <b>reakcje</b>: 💖 👍 😁 🔥 🦄.<br><br>Reakcje to najszybszy sposób, w jaki koledzy i koleżanki mogą docenić swoją pracę.' },
  /* 6 */ { title:'Opinia od AI',
    text:'Opublikowane projekty mogą też otrzymać <b>pisemną opinię od mentora AI</b> (tutaj to <b>Inimitable Robby</b>). Wskazuje on, co uczeń zrobił dobrze, i zachęca do dalszego tworzenia.<br><br>Jeśli tekst jest napisany w innym języku, przycisk <b>Pokaż tłumaczenie</b> go przetłumaczy.' },
  /* 7 */ { title:'My projects',
    text:'Teraz kliknij <b>My projects</b> na górnym pasku.' },
  /* 8 */ { title:'Wszystko, co stworzyłeś',
    text:'<b>My projects</b> wyświetla każdy projekt, który został zapisany lub opublikowany przez <b>Ciebie jako tutora albo przez ucznia</b>.<br><br>Każda karta pokazuje typ (tutaj <b>PNG</b>) i informację, czy projekt jest prywatny. To tu uczniowie wracają, aby znaleźć swoje prace.' },
  /* 9 */ { title:'Publish project',
    text:'Kliknij <b>Publish project</b> na górnym pasku.' },
  /* 10 */ { title:'Opublikuj gotowy projekt',
    text:'<b>Publish project</b> służy do projektów, które uczniowie <b>już stworzyli i zapisali na swoim komputerze</b>. Najpierw wybierają typ: Obraz, Python, Gra lub aplikacja internetowa (plik .sb3 ze Scratcha albo .zip), Skin do Minecrafta, Opowieść, Osadzenie, GitHub lub Inne.' },
  /* 11 */ { title:'Uzupełnij szczegóły',
    text:'Uczeń dodaje <b>tytuł</b> (30 znaków), <b>opis</b> (240 znaków) i <b>plik</b> (PNG, JPG, WebP lub GIF do 5 MB).<br><br>Może też pogrupować projekty w <b>sekcje</b> i wybrać, jakie <b>reakcje</b> mogą zostawiać widzowie.' },
  /* 12 */ { title:'Wybierz, kto to zobaczy',
    text:'<b>Wygląd</b> ustala kolor ramki karty w Feedzie; więcej kolorów odblokowuje się z czasem.<br><br><b>Widoczność</b>: <b>Publiczny</b>, <b>Tylko dla znajomych</b> lub <b>Tylko ja</b>.<br><br>Opcjonalne przełączniki: <b>Poproś o opinię</b>, zgoda na wykorzystanie projektu w promocji Kodland Sparks oraz codzienny <b>wybór na Discordzie</b>.' },
  /* 13 */ { title:'Opublikuj',
    text:'Naciśnięcie <b>Opublikuj</b> udostępnia projekt. Publikowanie może <b>przynieść nagrody</b> — na przycisku widać ikonę kryształu. Kryształy poznamy na końcu.' },
  /* 14 */ { title:'Studio',
    text:'Teraz część, z której uczniowie korzystają na zajęciach najczęściej. Kliknij <b>Studio</b>.' },
  /* 15 */ { title:'Dwa tryby',
    text:'<b>Studio</b> ma dwa tryby:<br><br>• <b>Creative mode</b>: twórz, co tylko chcesz — gry, strony, grafiki — od zera lub na gotowej bazie.<br>• <b>Challenges mode</b>: wykonuj zadania i <b>zdobywaj kryształy</b>.' },
  /* 16 */ { title:'Creative mode',
    text:'Kliknij <b>Creative mode</b>.' },
  /* 17 */ { title:'Sloty projektów',
    text:'<b>Creative Studio</b> przechowuje projekty, nad którymi uczniowie pracują, w <b>slotach</b>. Sloty od 1 do 3 są otwarte; sloty od 4 do 6 pojawią się wkrótce.<br><br>Kliknij <b>Slot 1</b>, aby zacząć nowy projekt.' },
  /* 18 */ { title:'Co zbudujesz?',
    text:'Uczniowie wybierają punkt startowy:<br>• <b>Programowanie &amp; development</b>: Gra lub aplikacja internetowa, Python w terminalu, Scratch.<br>• <b>Media &amp; treści</b>: Pixel Art, Animacja, Muzyka, Edytor skinów.<br><br>To, z czego korzystają, zależy od ich kursu. Kliknij <b>Gra lub aplikacja internetowa</b>.' },
  /* 19 */ { title:'Aplikacja internetowa: wybierz punkt startowy',
    text:'Aplikację internetową buduje się z <b>HTML, CSS i JavaScriptu</b> (Aplikacja internetowa JS) albo z HTML i CSS, a logikę pisze się w <b>Pythonie</b> (Aplikacja internetowa Python).<br><br>Uczniowie zaczynają od <b>Pustego projektu</b> lub od gotowej bazy, na przykład Alien Invaders albo gry Snake. Kliknij <b>Pusty projekt</b> w sekcji Aplikacja internetowa JS.' },
  /* 20 */ { title:'Edytor: podgląd i kod',
    text:'Na górze <b>Podgląd</b> pokazuje wynik na żywo: zmiany pojawiają się natychmiast. Poniżej znajdują się karty z kodem: <b>HTML</b>, <b>CSS</b> i <b>JS</b>.' },
  /* 21 */ { title:'Tutor AI',
    text:'Po prawej stronie <b>tutor AI</b> (Inimitable Robby) to kumpel od kodowania z kartami <b>Czat</b> i <b>Zadania</b>. Uczniowie mogą poprosić go o wskazówkę albo o radę, jak ulepszyć kod.<br><br>Pamiętaj: <b>AI proponuje, a autor decyduje</b>. Tutor AI pomaga, ale nie buduje projektu za ucznia.' },
  /* 22 */ { title:'Zapisz, nazwij i opublikuj',
    text:'Górny pasek pokazuje <b>slot</b>, przycisk zapisu i <b>tytuł projektu</b>. Po prawej stronie znajdziesz: <b>Nowy projekt</b>, przyciski otwierania, wgrywania i pobierania projektu oraz <b>Opublikuj</b>, który udostępnia projekt w Feedzie.' },
  /* 23 */ { title:'Zacznij kolejny projekt',
    text:'Zobaczmy inne rodzaje projektów. Kliknij <b>Nowy projekt</b>.' },
  /* 24 */ { title:'Python w terminalu',
    text:'<b>Python w terminalu</b> to program uruchamiany w terminalu. Kliknij go.' },
  /* 25 */ { title:'Zacznij od bazy',
    text:'Program w Pythonie mieści się w jednym pliku, uruchamia się przyciskiem <b>Play</b> i komunikuje się z użytkownikiem za pomocą <code>print()</code> i <code>input()</code>.<br><br>Kliknij <b>Zgadnij liczbę</b>.' },
  /* 26 */ { title:'Projekt w Pythonie',
    text:'Program działa w czarnym <b>terminalu</b>: wyświetla komunikaty i czeka na odpowiedź gracza w polu <b>Twoja odpowiedź</b>. Przyciski <b>Play</b> / <b>Zatrzymaj</b> uruchamiają i zatrzymują program, a <b>kod w Pythonie</b> jest tuż poniżej. Tutor AI jest po prawej, tak jak w każdym edytorze kodu.' + CONTENT.ui.coach.backToMenu },
  /* 27 */ { title:'Scratch',
    text:'<b>Scratch</b> pozwala uczniom budować projekty z bloków Scratcha. Kliknij go.' },
  /* 28 */ { title:'Projekt w Scratchu',
    text:'<b>Edytor Scratcha</b> w Kodland Sparks: po lewej <b>kategorie bloków i paleta</b>, na środku <b>obszar kodu</b>, a po prawej <b>scena</b> z duszkiem. Są też karty <b>Kostiumy</b> i <b>Dźwięki</b>. Tutor AI czeka w okrągłym przycisku po prawej stronie.' + CONTENT.ui.coach.backToMenu },
  /* 29 */ { title:'Pixel Art',
    text:'Do rysowania uczniowie mogą użyć <b>Pixel Art</b>: rysują piksel po pikselu. Kliknij go.' },
  /* 30 */ { title:'Wybierz rozmiar płótna',
    text:'Uczniowie wybierają <b>rozmiar płótna</b>; zalecany to <b>32 × 32</b>. Gotową pracę można opublikować jako obraz lub animację.<br><br>Kliknij <b>32 × 32</b>.' },
  /* 31 */ { title:'Projekt rysunkowy',
    text:'<b>Edytor pixel artu</b>: po lewej narzędzia do rysowania, rozmiary pędzla, cieniowanie, kolory i cofanie zmian, na środku <b>płótno</b>, a na dole <b>klatki</b>, dzięki którym rysunek można zamienić w animację.' + CONTENT.ui.coach.backToMenu },
  /* 32 */ { title:'Animacja',
    text:'<b>Animacja</b> pozwala uczniom narysować krótką kreskówkę klatka po klatce. Kliknij ją.' },
  /* 33 */ { title:'Wybierz rozmiar płótna',
    text:'Płótna do animacji są w trzech rozmiarach; zalecany to <b>960 × 720</b>. Kliknij go.' },
  /* 34 */ { title:'Projekt animacji',
    text:'Uczniowie rysują każdą <b>klatkę</b>, widzą poprzednią dzięki <b>onion skin</b> i naciskają play, aby obejrzeć animację. Mogą zmieniać szybkość i zapętlać odtwarzanie.' + CONTENT.ui.coach.backToMenu },
  /* 35 */ { title:'Muzyka',
    text:'<b>Muzyka</b> pozwala uczniom zbudować krótki utwór na siatce. Kliknij ją.' },
  /* 36 */ { title:'Zacznij utwór',
    text:'Mogą zacząć od <b>Nowego utworu</b> albo od bazy: Retro, Tetris lub K-pop. Kliknij <b>Retro</b>.' },
  /* 37 */ { title:'Projekt muzyczny',
    text:'Uczniowie <b>malują melodię</b> na siatce, dodają <b>ścieżki</b> i <b>perkusję</b>, zmieniają <b>tempo</b> i naciskają play.' + CONTENT.ui.coach.backToMenu },
  /* 38 */ { title:'Edytor skinów',
    text:'<b>Edytor skinów</b> jest przeznaczony do Minecrafta: uczniowie malują skin do modelu 3D. Kliknij go.' },
  /* 39 */ { title:'Wybierz postać',
    text:'Zaczynają od <b>Steve’a</b> lub <b>Alex</b>. Kliknij <b>Steve</b>.' },
  /* 40 */ { title:'Projekt skina',
    text:'Skin maluje się na <b>modelu 3D</b> lub na <b>mapie 2D</b>, a symetria odbija pociągnięcia po obu stronach. Gdy jest gotowy, można go <b>wyeksportować</b> jako PNG lub MCPACK.' },
  /* 41 */ { title:'AI helper',
    text:'Zielony przycisk <b>AI helper</b> na górnym pasku otwiera czat. Kliknij go.' },
  /* 42 */ { title:'Zapytaj Aiko',
    text:'<b>Aiko</b> to pomocniczka AI uczniów: mogą pytać o swoje projekty, kod lub pomysły albo wybrać podpowiedź, na przykład <i>Wyjaśnij błąd w moim kodzie</i> lub <i>Utknąłem, co mam robić dalej?</i><br><br>Aiko zapamiętuje ważne fakty z ostatnich czatów, a uczniowie mogą te notatki zobaczyć i usunąć.' },
  /* 43 */ { title:'Kryształy',
    text:'Fioletowy licznik pokazuje <b>kryształy</b>, które zdobył uczeń. Kliknij go.' },
  /* 44 */ { btn:'Zakończ ✓', title:'Nagrody',
    text:'To panel <b>Nagrody</b>. Uczniowie zdobywają kryształy, wykonując zadania w <b>Challenges mode</b> i publikując projekty, a następnie otwierają <b>skrzynię</b>, aby zobaczyć, co wygrali.<br><br>Na razie nie ma żadnych, więc licznik pokazuje 0.' }
];
