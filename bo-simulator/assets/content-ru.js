/* ============================================================
   Backoffice simulation · RUSSIAN content
   Translate only the text inside quotes / backticks. Keep HTML tags, ${...} placeholders, keys, ids, file names and URLs unchanged.
   ============================================================ */
window.CONTENT = { lang: 'ru' };

/* ---------- PAGE CHROME, BO SCREENS, TOASTS ---------- */
CONTENT.ui = {
  pageTitle:'Новая образовательная модель — симуляция BO — обучение Kodland',
  simBadge:'🧪 СИМУЛЯЦИЯ — обучение Kodland (вымышленные данные)',
  tourBtn:'🚀 Начать пошаговую экскурсию',
  tourMinimize:'Свернуть ▾', tourResume:'📍 Продолжить экскурсию',
  stepOf:'Шаг {n} из {total}', nextArrow:'Далее →', finish:'Готово ✓',
  groupsTitle:'Groups', tabExtra:'Extra Lessons', tabParallel:'Parallel Groups', tabRegular:'Regular Groups',
  emptyRegular:'В этой симуляции нет групп для показа — откройте <b>Courses</b> в боковом меню.',
  colID:'ID', colTitle:'Title', colTutor:'Tutor', colType:'Type', colCurrentCourse:'Current course', colStart:'Start',
  colStudentsPaid:'Students/Paid', colPreviousLesson:'Previous lesson', colNextLesson:'Next lesson', colPremium:'Premium',
  containerType:'Group', no:'No', yes:'Yes',
  itemsPage100_1:'Items per page: 100 &nbsp;|&nbsp; 1-1 of 1', itemsPage10_4:'Items per page: 10 &nbsp;|&nbsp; 1-4 of 4',
  itemsPage100_19:'Items per page: 100 &nbsp;|&nbsp; 1-9 of 9',
  backToGroups:'Back to Groups', backToCourses:'Back to Courses', backToAssignments:'Back to Assignments',
  tutorLabel:'Tutor:', openConsoleTip:'Open console', colLessonTime:'Lesson time', colCourse:'Course', colNextTopic:'Next lesson topic',
  simOpenCourseFromDetail:'Отсюда тоже можно открыть страницу курса',
  teacherName:'Demo Teacher', teacherCountry:'🌎 LatAm',
  profileTitle:'Profile', teacherCoursesH:'Teacher courses', availabilityH:'Availability hours', notAssigned:'Not assigned',
  groupsTabLbl:'Groups', scheduleTabLbl:'Schedule', regularGroupsNote:'Список ваших групп.',
  currentWeek:'Current Week', available:'Available',
  days:['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
  coursesTitle:'Courses', colBusinessBranch:'Business branch', colActive:'Active', colNumberOfLessons:'Number of lessons',
  badgeActive:'Active', fieldBranch:'Business branch: ENG', fieldLanguage:'Language: English 🇬🇧', fieldCourseType:'Course type: Paid courses',
  fieldCourseGroup:'Course group: Code & Game lvl 1', fieldLessons:'Number of lessons: 40', fieldModules:'Number of modules: 10',
  fieldExcluded:'Excluded from overbooking: No', fieldCertificate:'Certificate: —',
  lessonsTab:'Lessons', assignmentsTab:'Assignments', moduleFirstSteps:'M1. Creator Lab: первые миссии', viewAssignments:'View assignments →',
  colNo:'Nº', colActions:'Actions',
  lessonSelectLbl:'Lesson', lessonOption:'L1. Dance Party: оживляем сцену',
  inClassH:'In-class assignments', homeworkH:'Homework assignments', studyGuidesH:'Study guides',
  colNumber:'Number', colAssignmentTitle:'Assignment title', colTheory:'Theory', colProject:'Project', colMaxScore:'Max score',
  interactive:'INTERACTIVE', noData:'No data available',
  noWikiNote:'Ссылок на вики здесь нет — так и задумано. В курсах новой образовательной модели руководство для преподавателя находится внутри самих активностей в виде Teacher Notes, а не в отдельном документе в вики.',
  modalGroups:'GROUPS', modalExit:'Exit', modalOpenConsole:'Open Console',
  toastConsoleDetail:'🔗 Эта кнопка открывает ссылку на Classroom для этой группы.',
  toastConsoleModal:'🔗 Это та же ссылка на Classroom, только открытая из вашего расписания (Schedule).',
  toastSimClick:'🧪 Это симуляция — в настоящем BO здесь выполнилось бы действие «{label}».',
  toastBlocked:'👉 Чтобы продолжить, выполните выделенный шаг — при первом прохождении экскурсию нужно пройти до конца.',
  reflect:'🎉 <strong>Экскурсия завершена!</strong> Теперь вы знаете, как открыть курс новой модели через Courses, где находятся его уроки и активности, почему нет ссылки на вики и где найти Teacher Notes внутри каждой активности. Можете и дальше самостоятельно изучать эту копию BO.',
  /* Assignment titles in the "In-class assignments" table (same order as the rows) */
  inClass:['Начни первую миссию Creator Lab! 💃','Добро пожаловать в Creator Lab! 👋','Давайте познакомимся! 🎤','Договор творческой команды 🤝','Проверь подключение 📡','Что такое Creator Lab? ✨','Скачай и открой проект 📥','Проверь, что уже работает 🔎','Узнай, как работают блоки 🧩'],
  homework:[]
};

/* ---------- LESSON VIEWER (Teacher Note + student card) ---------- */
CONTENT.lesson = {
  lessonCrumb:'My courses &gt; Начни первую миссию Creator La...', teacherNoteBadge:'👁 Teacher Note — этот блок видят только преподаватели',
  lessonTitle:'Подготовка к уроку · Dance Party: оживляем сцену',
  hOverview:'Обзор урока',
  pOverview:'Это первый урок программы Code & Game lvl 1 (Creator Lab: Games and AI, 8–9 лет). Ученики знакомятся с Creator Lab, изучают готовый прототип в Scratch и создают собственное интерактивное шоу Dance Party на платформе Kodland Sparks. Главная цель — понять связь «событие → действие → результат», быстро получить работающий проект и безопасно использовать ИИ как творческого помощника.',
  hMission:'Сюжетная миссия урока',
  pMission:'Ученики попадают в секретную творческую лабораторию Creator Lab. Их первая миссия — «Оживить цифровую сцену»: с помощью кода и ИИ создать танцевальное шоу, в котором клавиши запускают движения, звуки, смену костюмов и визуальные эффекты.',
  hGoal:'Главная цель урока',
  pGoal:'Помочь каждому ученику создать своё интерактивное шоу и простыми словами объяснить, как событие — нажатие клавиши — запускает действие персонажа и приводит к видимому результату.',
  hResult:'Ключевой результат',
  resultItems:['Проект Dance Party запускается и работает в Scratch внутри Kodland Sparks.','В шоу есть персонаж и музыка, которые выбрал ученик, а также фон, созданный с помощью ИИ.','Персонаж реагирует на нажатие клавиши движением, сменой костюма, звуком или эффектом.','Ученик представляет свой проект и объясняет хотя бы одну связь «событие → действие → результат».'],
  calloutLbl:'Перед уроком', callout:'Посмотрите видео к уроку ниже и прочитайте заметки к каждой карточке — руководство ко всему уроку находится здесь, а не в вики.',
  videoTag:'УРОК 1', videoTitle:'Creator Lab: Dance Party — на что обратить внимание',
  videoDesc:'Первый урок с пояснениями для преподавателя: цель, дедуктивная логика урока и моменты, которые требуют вашего внимания. ▶',
  hRole:'Роль преподавателя',
  pRole1:'Познакомьте учеников с сюжетом Creator Lab и покажите готовое танцевальное шоу как образец итогового результата. Проведите их от изучения прототипа к выбору персонажа, музыки и фона, созданного ИИ, и к созданию как минимум двух реакций на разные клавиши.',
  pRole2:'Поддерживайте учеников уточняющими вопросами, короткими подсказками и признанием творческого подхода, самостоятельных решений и исправленных ошибок. Следите за безопасным использованием Sandbox Spark и AI Buddy, <b>не позволяя ИИ создавать механику вместо ученика.</b>',
  hFocus:'Методический подход',
  pFocus1:'Начните с показа итогового результата и изучения готового прототипа. Вводите теорию через наблюдение: ученик нажимает клавишу, видит реакцию персонажа и сам формулирует связь «событие → действие → результат».',
  pFocus2:'Придерживайтесь цикла обучения (Learning Loop): <b>цель → попытка → трудность → поддержка → улучшение → показ → рефлексия.</b> Подавайте ошибки как нормальную часть творческого процесса.',
  pFocus3:'Дайте ученику самому выбрать персонажа, музыку, движения, эффекты, формулировку запроса к ИИ и фон, созданный ИИ. Окончательные решения по проекту должны оставаться за ним.',
  hImportant:'Важные моменты',
  importantItems:['Используйте короткие инструкции, много наглядной поддержки и одну активность на карточку.','Проверьте, что ученик добавил как минимум две разные реакции на нажатие клавиш и протестировал каждую.','Не добавляйте очки, условия победы или поражения, переменные, сложные условия, списки, клоны и сообщения между спрайтами.','Проверьте, что запросы к ИИ не содержат персональных данных и создаются только в безопасной среде Kodland Spark.'],
  hEnding:'Завершение урока',
  pEnding:'Проведите короткий показ проектов. Попросите учеников объяснить, какая клавиша запускает выбранное ими действие, и дать обратную связь по формуле: «Мне понравилось… Я бы добавил…». Завершите урок самопроверкой проекта.',
  hNext:'Следующий урок',
  pNext:'На уроке M01L02 «Portal Guardian: герой и кристаллы» ученики начнут работу над первой игровой механикой: перемещением персонажа и сбором предметов.',
  studentTitle:'Начни первую миссию Creator Lab! 💃',
  studentLead:'Ты оживишь цифровую сцену и создашь своё танцевальное шоу, которое реагирует на нажатие разных клавиш.',
  hEquip:'⌨️ Проверь оборудование', equipItems:['Проверь клавиатуру: с её помощью ты будешь управлять танцевальным шоу.'],
  hSpace:'✨ Подготовь рабочее место', spaceItems:['Сядь так, чтобы тебе было удобно работать над проектом и пользоваться клавиатурой.','Приготовься выбрать персонажа, музыку, движения и фон для своей сцены.'],
  tipLbl:'💡 Миссия на сегодня', tipBody:'Изучи танцевальное шоу, которое уже работает, а потом сделай его своим: твой персонаж, твоя музыка, твой фон и твои движения.'
};

/* ---------- GUIDED TOUR STEPS (same order as STEPS in the page) ---------- */
CONTENT.steps = [
  {title:'1 · Откройте курс',body:'Чтобы увидеть содержание курса, нужно зайти в раздел <b>Courses</b>, а не в Groups. Нажмите на <b>[2063] Code &amp; Game. Level 1</b>.'},
  {title:'2 · Страница курса',body:'Бизнес-направление, язык, количество уроков и модулей — те же поля, что и у любого другого курса. Новая модель не меняет то, как курс оформлен в BO.'},
  {title:'3 · Откройте Assignments',body:'Нажмите на вкладку <b>Assignments</b>.'},
  {title:'4 · Активности урока',body:'Эти интерактивные карточки И ЕСТЬ содержание урока — инструкции, советы, изображения и видео находятся внутри каждой карточки. Отдельной презентации для урока нет.'},
  {title:'5 · Ссылки на вики нет — так задумано',body:'Таблица <b>Study guides</b> пуста. Это не ошибка: в новой модели руководство для преподавателя находится внутри самих активностей в виде Teacher Notes, а не в отдельном документе в вики.'},
  {title:'6 · Откройте первую активность',body:'Нажмите на <b>Начни первую миссию Creator Lab!</b>, чтобы увидеть, как Teacher Note выглядит изнутри.'},
  {title:'7 · Заметка преподавателя прямо в карточке',body:'Отдельной вкладки «для преподавателя» нет — это та же карточка с прокруткой. Этот блок с оранжевой пунктирной рамкой — <b>Teacher Note</b>. В первой карточке урока она самая подробная: обзор, сюжетная миссия, цель, ваша роль, методика, важные моменты, завершение и следующий урок. Этот блок видят только преподаватели.'},
  {title:'8 · Прокрутите вниз: что видит ученик',body:'Сразу под заметкой, в той же карточке, — то, что на самом деле видит ученик: миссия и чек-лист для подготовки. Ни Teacher Note, ни переключателя — платформа просто никогда не показывает этот блок аккаунту ученика.'}
];

/* ---------- FINISH SCREEN (completion code overlay) ---------- */
CONTENT.done = {
  title:'Симуляция пройдена!',
  body:'Вы прошли экскурсию по BO: как открыть курс новой модели и его задания (Assignments), почему нет вики и где находятся Teacher Notes внутри каждой активности.',
  codeLabel:'🔑 Ваш код завершения',
  codeHint:'Введите его в обучении, чтобы засчитать эту симуляцию.',
  nextStep:'<b>Следующий шаг:</b> скопируйте код, закройте эту вкладку и вернитесь к обучению.',
  stay:'Продолжить изучение',
  close:'Закрыть и вернуться к обучению',
  closedMsg:'<b>Теперь эту вкладку можно закрыть</b> и продолжить во вкладке с обучением.'
};
