/* ============================================================
   Backoffice simulation · POLISH content
   Translate only the text inside quotes / backticks. Keep HTML tags, ${...} placeholders, keys, ids, file names and URLs unchanged.
   ============================================================ */
window.CONTENT = { lang: 'pl' };

/* ---------- PAGE CHROME, BO SCREENS, TOASTS ---------- */
CONTENT.ui = {
  pageTitle:'Nowy model edukacyjny — Symulacja BO — Szkolenie Kodland',
  simBadge:'🧪 SYMULACJA — Szkolenie Kodland (dane fikcyjne)',
  tourBtn:'🚀 Rozpocznij przewodnik krok po kroku',
  tourMinimize:'Zwiń ▾', tourResume:'📍 Wznów przewodnik krok po kroku',
  stepOf:'Krok {n} z {total}', nextArrow:'Dalej →', finish:'Zakończ ✓',
  groupsTitle:'Groups', tabExtra:'Extra Lessons', tabParallel:'Parallel Groups', tabRegular:'Regular Groups',
  emptyRegular:'W tej symulacji nie ma grup do wyświetlenia — otwórz <b>Courses</b> na pasku bocznym.',
  colID:'ID', colTitle:'Tytuł', colTutor:'Tutor', colType:'Typ', colCurrentCourse:'Bieżący kurs', colStart:'Start',
  colStudentsPaid:'Uczniowie/Opłacone', colPreviousLesson:'Poprzednia lekcja', colNextLesson:'Następna lekcja', colPremium:'Premium',
  containerType:'Grupa', no:'Nie', yes:'Tak',
  itemsPage100_1:'Pozycji na stronie: 100 &nbsp;|&nbsp; 1-1 z 1', itemsPage10_4:'Pozycji na stronie: 10 &nbsp;|&nbsp; 1-4 z 4',
  itemsPage100_19:'Pozycji na stronie: 100 &nbsp;|&nbsp; 1-9 z 9',
  backToGroups:'Wróć do Groups', backToCourses:'Wróć do Courses', backToAssignments:'Wróć do Assignments',
  tutorLabel:'Tutor:', openConsoleTip:'Otwórz konsolę', colLessonTime:'Godzina lekcji', colCourse:'Kurs', colNextTopic:'Temat następnej lekcji',
  simOpenCourseFromDetail:'Kartę kursu możesz otworzyć też stąd',
  teacherName:'Tutor demo', teacherCountry:'🌎 LatAm',
  profileTitle:'Profil', teacherCoursesH:'Kursy tutora', availabilityH:'Godziny dostępności', notAssigned:'Nie przypisano',
  groupsTabLbl:'Groups', scheduleTabLbl:'Schedule', regularGroupsNote:'Lista Twoich grup.',
  currentWeek:'Bieżący tydzień', available:'Dostępny',
  days:['Poniedziałek','Wtorek','Środa','Czwartek','Piątek','Sobota','Niedziela'],
  coursesTitle:'Courses', colBusinessBranch:'Oddział biznesowy', colActive:'Aktywny', colNumberOfLessons:'Liczba lekcji',
  badgeActive:'Aktywny', fieldBranch:'Oddział biznesowy: ENG', fieldLanguage:'Język: English 🇬🇧', fieldCourseType:'Typ kursu: Paid courses',
  fieldCourseGroup:'Grupa kursów: Code & Game lvl 1', fieldLessons:'Liczba lekcji: 40', fieldModules:'Liczba modułów: 10',
  fieldExcluded:'Wyłączony z overbookingu: Nie', fieldCertificate:'Certyfikat: —',
  lessonsTab:'Lessons', assignmentsTab:'Assignments', moduleFirstSteps:'M1. Creator Lab: first missions', viewAssignments:'Zobacz zadania →',
  colNo:'Nr', colActions:'Akcje',
  lessonSelectLbl:'Lekcja', lessonOption:'L1. Dance Party: bringing the stage to life',
  inClassH:'Zadania na lekcji', homeworkH:'Zadania domowe', studyGuidesH:'Przewodniki do nauki',
  colNumber:'Numer', colAssignmentTitle:'Tytuł zadania', colTheory:'Teoria', colProject:'Projekt', colMaxScore:'Maks. wynik',
  interactive:'INTERAKTYWNE', noData:'Brak danych',
  noWikiNote:'Nie ma tu linków do wiki — to celowe. W kursach nowego modelu edukacyjnego przewodnik dla tutora znajduje się wewnątrz samych aktywności, jako Teacher Notes, a nie jako osobny dokument w wiki.',
  modalGroups:'GROUPS', modalExit:'Wyjdź', modalOpenConsole:'Otwórz konsolę',
  toastConsoleDetail:'🔗 To otwiera link do Classroom dla tej grupy.',
  toastConsoleModal:'🔗 To ten sam link do Classroom, tylko otwarty z Twojego Schedule.',
  toastSimClick:'🧪 To jest symulacja — w prawdziwym BO ta akcja by: „{label}”.',
  toastBlocked:'👉 Wykonaj podświetlony krok, aby kontynuować — przy pierwszym podejściu przewodnik jest obowiązkowy.',
  reflect:'🎉 <strong>Przewodnik ukończony!</strong> Wiesz już, jak otworzyć kurs nowego modelu z Courses, gdzie są jego lekcje i aktywności, dlaczego nie ma linku do wiki i gdzie w każdej aktywności znaleźć Teacher Notes. Możesz dalej samodzielnie eksplorować tę replikę.',
  /* Assignment titles in the "In-class assignments" table (same order as the rows) */
  inClass:['Rozpocznij pierwszą misję w Creator Lab! 💃','Witaj w Creator Lab! 👋','Poznajmy się! 🎤','Umowa twórczego zespołu 🤝','Sprawdź, czy jesteś połączony 📡','Czym jest Creator Lab? ✨','Pobierz i otwórz projekt 📥','Sprawdź, co już działa 🔎','Odkryj, jak działają bloki 🧩'],
  homework:[]
};

/* ---------- LESSON VIEWER (Teacher Note + student card) ---------- */
CONTENT.lesson = {
  lessonCrumb:'Moje kursy &gt; Rozpocznij pierwszą misję w Creator Lab...', teacherNoteBadge:'👁 Teacher note — ten blok widzą tylko tutorzy',
  lessonTitle:'Przygotowanie do lekcji · Dance Party: ożywiamy scenę',
  hOverview:'Przegląd lekcji',
  pOverview:'To pierwsza lekcja programu Code & Game lvl 1 (Creator Lab: Games and AI, wiek 8–9 lat). Uczniowie poznają Creator Lab, badają gotowy prototyp w Scratch i tworzą własny interaktywny pokaz Dance Party na platformie Kodland Sparks. Głównym celem jest zrozumienie zależności „zdarzenie → akcja → rezultat”, szybkie uzyskanie działającego projektu i bezpieczne używanie AI jako twórczego asystenta.',
  hMission:'Misja fabularna lekcji',
  pMission:'Uczniowie wchodzą do tajnego laboratorium twórczego, Creator Lab. Ich pierwsza misja to „Ożyw cyfrową scenę”: za pomocą kodu i AI stworzyć pokaz taneczny, w którym klawisze uruchamiają ruchy, dźwięki, zmiany kostiumów i efekty wizualne.',
  hGoal:'Główny cel lekcji',
  pGoal:'Pomóż każdemu uczniowi stworzyć spersonalizowany, interaktywny pokaz i wyjaśnić prostymi słowami, jak zdarzenie — naciśnięcie klawisza — uruchamia akcję postaci i daje widoczny rezultat.',
  hResult:'Kluczowy rezultat',
  resultItems:['Projekt Dance Party uruchamia się i działa w Scratch wewnątrz Kodland Sparks.','Pokaz zawiera postać i muzykę wybrane przez ucznia oraz tło stworzone z pomocą AI.','Postać reaguje na naciśnięcie klawisza ruchem, zmianą kostiumu, dźwiękiem lub efektem.','Uczeń prezentuje swój projekt i wyjaśnia co najmniej jedną zależność „zdarzenie → akcja → rezultat”.'],
  calloutLbl:'Zanim zaczniesz lekcję', callout:'Obejrzyj poniższe wideo do lekcji i przeczytaj notatki na każdej karcie — przewodnik do całej lekcji znajduje się tutaj, a nie w wiki.',
  videoTag:'LEKCJA 1', videoTitle:'Creator Lab: Dance Party — na czym się skupić',
  videoDesc:'Pierwsza lekcja wyjaśniona tutorowi: cel, dedukcyjny przebieg i momenty, które wymagają Twojej uwagi. ▶',
  hRole:'Rola tutora',
  pRole1:'Przedstaw uczniom fabułę Creator Lab i pokaż gotowy pokaz taneczny jako punkt odniesienia dla końcowego wyniku. Poprowadź ich od eksplorowania prototypu do wyboru postaci, muzyki i tła stworzonego z pomocą AI oraz do stworzenia co najmniej dwóch reakcji na różne klawisze.',
  pRole2:'Wspieraj pytaniami doprecyzowującymi, krótkimi podpowiedziami i docenianiem kreatywności, samodzielnych decyzji i naprawionych błędów. Nadzoruj bezpieczne korzystanie z Sandbox Spark i AI Buddy, <b>nie pozwalając, by AI budowała mechanikę zamiast ucznia.</b>',
  hFocus:'Podejście metodyczne',
  pFocus1:'Zacznij od pokazania końcowego wyniku i eksplorowania gotowego prototypu. Wprowadzaj teorię przez obserwację: uczeń naciska klawisz, widzi reakcję postaci i formułuje zależność „zdarzenie → akcja → rezultat”.',
  pFocus2:'Utrzymuj Learning Loop: <b>cel → próba → trudność → wsparcie → ulepszenie → prezentacja → refleksja.</b> Przedstawiaj błędy jako normalną część procesu twórczego.',
  pFocus3:'Pozwól uczniowi wybrać postać, muzykę, ruchy, efekty, sformułowanie polecenia dla AI i tło stworzone z pomocą AI. Ostateczne decyzje dotyczące projektu muszą należeć do niego.',
  hImportant:'Ważne punkty',
  importantItems:['Używaj krótkich instrukcji, dużego wsparcia wizualnego i jednej aktywności na kartę.','Sprawdź, czy uczeń dodał co najmniej dwie różne reakcje na naciśnięcie klawiszy i przetestował każdą z nich.','Nie dodawaj punktacji, warunków wygranej lub przegranej, zmiennych, złożonych warunków, list, klonów ani komunikatów między sprite’ami.','Sprawdź, czy polecenia dla AI nie zawierają danych osobowych i są tworzone wyłącznie w bezpiecznym środowisku Kodland Spark.'],
  hEnding:'Zakończenie lekcji',
  pEnding:'Przeprowadź krótką prezentację projektów. Poproś uczniów, by wyjaśnili, który klawisz uruchamia wybraną przez nich akcję, i by udzielili feedbacku według formuły: „Podobało mi się… Dodałbym…”. Zakończ samooceną projektu.',
  hNext:'Następna lekcja',
  pNext:'Na lekcji M01L02, „Portal Guardian: bohater i kryształy”, uczniowie rozpoczną pierwszą mechanikę gry: poruszanie postacią i zbieranie obiektów.',
  studentTitle:'Rozpocznij pierwszą misję w Creator Lab! 💃',
  studentLead:'Ożywisz cyfrową scenę i stworzysz własny pokaz taneczny, który reaguje na naciskanie różnych klawiszy.',
  hEquip:'⌨️ Sprawdź swój sprzęt', equipItems:['Sprawdź klawiaturę: będziesz jej używać do sterowania pokazem tanecznym.'],
  hSpace:'✨ Przygotuj swoje miejsce pracy', spaceItems:['Usiądź tak, żeby wygodnie pracować nad projektem i korzystać z klawiatury.','Przygotuj się do wyboru postaci, muzyki, ruchów i tła swojej sceny.'],
  tipLbl:'💡 Dzisiejsza misja', tipBody:'Zbadaj pokaz taneczny, który już działa, a potem zmień go w swój własny: Twoja postać, Twoja muzyka, Twoje tło i Twoje ruchy.'
};

/* ---------- GUIDED TOUR STEPS (same order as STEPS in the page) ---------- */
CONTENT.steps = [
  {title:'1 · Otwórz kurs',body:'Aby zobaczyć treść kursu, wchodzisz przez <b>Courses</b>, a nie przez Groups. Kliknij <b>[2063] Code &amp; Game. Level 1</b>.'},
  {title:'2 · Karta kursu',body:'Oddział biznesowy, język, liczba lekcji i modułów — te same pola co w każdym kursie. Nowy model nie zmienia sposobu rejestrowania kursu w BO.'},
  {title:'3 · Otwórz Assignments',body:'Kliknij zakładkę <b>Assignments</b>.'},
  {title:'4 · Aktywności lekcji',body:'Te interaktywne karty SĄ treścią lekcji — instrukcje, wskazówki, obrazy i wideo, wszystko wewnątrz każdej karty. Nie ma osobnej prezentacji, z której się uczy.'},
  {title:'5 · Brak linku do wiki — celowo',body:'Tabela <b>Study guides</b> jest pusta. To nie błąd: w nowym modelu przewodnik dla tutora znajduje się wewnątrz samych aktywności jako Teacher Notes — a nie jako osobny dokument w wiki.'},
  {title:'6 · Otwórz pierwszą aktywność',body:'Kliknij <b>Rozpocznij pierwszą misję w Creator Lab!</b>, aby zobaczyć od środka, jak wygląda Teacher Note.'},
  {title:'7 · Notatka tutora, tuż w karcie',body:'Nie ma osobnej zakładki „tutor” — to ta sama przewijana karta. Ten blok z przerywaną, pomarańczową ramką to <b>Teacher Note</b>. Pierwsza karta lekcji ma najpełniejszą: przegląd, misję fabularną, cel, Twoją rolę, metodę, ważne punkty, zakończenie i następną lekcję. Ten blok widzą wyłącznie tutorzy.'},
  {title:'8 · Przewiń w dół: co widzi uczeń',body:'Tuż pod nią, w tej samej karcie, jest to, co uczeń faktycznie widzi: misja i lista kontrolna przygotowania. Bez Teacher Note, bez przełącznika — platforma po prostu nigdy nie pokazuje tego bloku na koncie ucznia.'}
];

/* ---------- FINISH SCREEN (completion code overlay) ---------- */
CONTENT.done = {
  title:'Symulacja ukończona!',
  body:'Ukończyłeś przewodnik po BO: otwieranie kursu nowego modelu, jego Assignments, dlaczego nie ma wiki i Teacher Notes wewnątrz każdej aktywności.',
  codeLabel:'🔑 Twój kod ukończenia',
  codeHint:'Wpisz go w szkoleniu, aby ukończyć tę symulację.',
  nextStep:'<b>Następny krok:</b> skopiuj kod, zamknij tę kartę i wróć do szkolenia.',
  stay:'Eksploruj dalej',
  close:'Zamknij i wróć do szkolenia',
  closedMsg:'<b>Możesz teraz zamknąć tę kartę</b> i kontynuować w karcie ze szkoleniem.'
};
