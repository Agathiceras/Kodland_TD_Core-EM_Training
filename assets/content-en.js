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
window.CONTENT = { lang: 'en' };

/* ---------------- Interface strings ---------------- */
CONTENT.ui = {
  pageTitle: 'New Educational Model Training',
  footer: 'kodland · New Educational Model · Tutor training',
  devLink: '🛠 Developer',

  // Navigation
  logoSub: 'New Educational Model',
  navCore: 'Core {done}/{total}',
  navHome: '← Home',
  navModules: '← All modules',
  navBackModule: '← Back to the module',

  // Home
  heroKicker: '🚀 Tutor training',
  heroTitle: 'The <span class="hl">new</span> educational model',
  heroLead: 'Kodland is changing how some of its courses are taught. This training gets you ready to teach with the new model: {n} modules, in order. Each one ends with a short check that unlocks the next one.',
  fact1: '<b>At your own pace.</b> Your progress is saved in this browser.',
  fact2: '<b>Practice included.</b> Three simulations — Backoffice, Classroom and Kodland Sparks — that you can repeat as many times as you like.',
  progAllDone: 'Modules completed 🎉',
  progLabel: 'modules complete',
  moduleN: 'Module {n}',
  badgeDone: '✓ Completed · {score}%',
  badgeLocked: '🔒 Complete Module {n}',
  badgeStart: 'Start →',
  homeDoneTitle: 'Modules completed!',
  homeDoneText: 'One last step: the DST test on the LMS training page.',
  homeDoneBtn: 'See what to do next →',

  // Module page and its check
  eyebrow: 'Module {n} of {total}',
  ctaQuizTitle: 'Module check',
  ctaQuizText: '{n} short questions. Score 70% or more to pass.',
  ctaRiskTitle: 'Module check: spot the risky strategy',
  ctaRiskText: '{n} real situations. <b style="color:#E5484D">Different from the other checks: in each case you pick the strategy that would HURT the lesson</b> — not the good one. Score 70% or more to pass.',
  lockOne: '🔒 Complete {what} and enter its code above to unlock the check.',
  lockMany: '🔒 Complete {what} and enter their codes above to unlock the check.',
  listAnd: ' and ',
  startCheck: 'Start the check →',
  retake: '🔁 Retake the check',

  // Simulations and completion codes
  launchSteps: ['Open it in a new tab.', 'Follow every step until you see the completion screen and your code.', 'Come back to this tab and enter the code below.'],
  codeOk: '✅ <b>{sim} completed.</b> Code accepted.',
  codeLabel: '<b>🔑 Completion code</b> — you’ll find it on the last screen of the {sim}.',
  codePlaceholder: 'e.g. XX-0000-00',
  codeUnlock: 'Unlock',
  codeWrong: 'That code isn’t right. Check it on the last screen of the simulation.',

  // Small interactive pieces
  tapFlip: 'Tap to flip',
  mythReality: 'Reality ✓',
  loopAgain: '<b>And again!</b> The reflection becomes the next goal — one turn deeper.',
  ages: 'Ages {age}',
  aiBar: 'How much AI is part of the project',
  stageWas: 'Was: <s>{was}</s> → now:',
  stageOf: '{i} of {n}',
  stageWatch: 'Watch “{t}” in a real lesson',
  stageFirst: 'Back to the first',
  next: 'Next →',
  sortWrong: '✗ Not quite.',

  // Follow Mode demo (Module 2)
  fmNotes: '📒 Teacher notes — only you see this',
  fmFollowing: '🔗 Following the teacher',
  fmStart: '👆 Sofia is on the same lesson, but Lead the group is off. Turn the switch on.',
  fmOn: '✅ <b>Lead the group is ON.</b> Sofia jumped to your card — but notice: she sees the card <b>without</b> your Teacher Notes. Now try <b>Next card</b>.',
  fmOff: '⏸️ <b>Lead the group is OFF.</b> Sofia stays where she is, whatever you open.',
  fmMoved: '➡️ You moved to card {t} — <b>Sofia moved with you</b>.',
  fmMovedAlone: '➡️ You moved to card {t}, but <b>Sofia is still on card {s}</b>. She may be looking at something else. Turn on Lead the group.',

  // Closing timeline (Module 3)
  tlOpening: '<b>Opening.</b> Warm-up and greeting, link to the previous lesson, homework check, lesson goal.',
  tlCards: '<b>The cards.</b> Students build, explore, fix and show. Keep an eye on the clock — {left} minutes left…',
  tlClose: '<b>{left} minutes before the end: time to close.</b> Wherever you are in the cards, start the closing routine now.',
  tlRoutine: '<b>Closing routine.</b> Recap by the students → teaser for the next lesson → next homework.',
  tlBye: '<b>Goodbye!</b> Everyone leaves knowing what they learned, what comes next and what to do at home.',

  // Videos
  watchExample: 'Watch a real example',
  comingSoon: 'coming soon',
  close: 'Close',
  videoDefault: 'Real lesson',
  soonTitle: 'Video coming soon',
  soonText: 'Here you’ll watch this part of the lesson in a real class. The video is being prepared and will appear here soon.',
  zoomBadge: '🔍 Click to enlarge',
  zoomAria: 'Open the video bigger',
  zoomDefault: 'Video',
  zoomIn: 'Zoom in',
  zoomOut: 'Zoom out',
  zoomReset: 'Reset',
  zoomHint: 'Zoom with + / −, the mouse wheel or a double-click · drag to move around · Esc or ✕ to close',

  // Checks (quiz engine)
  qmeta: '{e} Module {n} check · {kind} {i} of {total}',
  qCase: 'Case',
  qQuestion: 'Question',
  riskQuestion: 'Which one would <span class="hurt">HURT</span> this part of the lesson?',
  riskBanner: '⚠️ Careful: in this check you choose the <b>WRONG</b> strategy — the one that would <b>HURT</b> the lesson. Not the good one!',
  tfTrue: '✅ True',
  tfFalse: '❌ False',
  openHint: '✍️ Write your own answer — at least {min} characters. There’s no single right wording: you’ll see a model answer to compare with yours.',
  openPlaceholder: 'Type your answer here…',
  openSubmit: 'Submit my answer',
  openRecorded: '✅ <b>Answer recorded.</b> Model answer — compare it with yours:',
  fbRight: '✅ <b>Correct!</b> ',
  fbWrong: '❌ <b>Not quite.</b> ',
  fbRiskRight: '✅ <b>Correct — that’s the strategy that would hurt the lesson.</b> ',
  fbRiskWrong: '❌ <b>That one actually helps the lesson.</b> The risky one is highlighted in green. ',
  nextQuestion: 'Next question →',
  seeResult: 'See my result →',

  // Result of a check
  passedTitle: 'You passed!',
  failTitle: 'Almost there',
  scoreLine: 'You answered <b>{score} of {n}</b> correctly.',
  failText: 'You need 70% or more. Review the module and try again — you can retake it as many times as you need.',
  nextUnlocked: '<b>Module {n} · {title}</b> is now unlocked.',
  goModule: 'Go to Module {n} →',
  allDoneText: 'You’ve completed the whole training.',
  seeNext: 'See what’s next →',
  reviewModule: '📖 Review the module',

  // Final page
  doneTitle: 'Modules completed!',
  doneText: `<p>You’re almost done! Return to the LMS training page where you accessed this training. The DST test is available right below the training.</p>
    <p>👉 <b>You must complete and pass the DST test for the training to be considered successfully completed.</b> If you do not complete the DST test, the training will remain incomplete and may expire.</p>
    <p>The minimum passing score is <b>80%</b>.</p>
    <p>Good luck! ❤️</p>`,
  doneBadge: '✓ Done',
  doneNexts: [
    ['📒', '<b>Before every lesson:</b> read the Teacher Notes in Backoffice — and check for updates.'],
    ['🔑', '<b>Kodland Sparks:</b> your credentials come from the Operations or Teaching department.'],
    ['🏁', '<b>Every lesson:</b> a proper opening, reasoning questions and a 5–7 minute closing.'],
    ['🤖', '<b>When students use AI:</b> the AI proposes, the author decides.']
  ],
  doneBack: 'Back to the modules',

  // Locked messages
  lockedTitle: 'Still locked',
  lockedModule: 'Complete Module {n} first.',
  lockedStep: 'Complete the previous step to unlock this one.',
  ok: 'OK'
};

/* ============================================================
   MODULES — titles, descriptions, objectives and section names (keep id, n, e, color, check, needs keys)
   ============================================================ */
CONTENT.modules = [
  { id:'m1', n:1, e:'🧩', color:'#C4F046', title:'The new model methodology', check:'quiz',
    desc:'What the new model is, the pedagogy behind it, how feedback works and how to guide students with AI.',
    obj:'Understand what the new educational model is and isn’t, the four pillars it’s built on, how feedback works, and how to help students use AI well.',
    offer:[['🌱','Understand the new teaching model'],['🏛️','Know the four pillars that shape every lesson.'],['💬','See how feedback works in four directions.'],['🧭','Understand how your role as a tutor changes.']],
    sections:[ ['what','🔍','What the new model is'], ['pillars','🏛️','The four pillars of the model'], ['people','💬','Feedback from four directions'] ] },
  { id:'m2', n:2, e:'🛠️', color:'#3E7BFA', title:'Technical Preparation', check:'quiz',
    needs:[['boCode','the BO simulation'],['classCode','the Classroom guide'],['sparksCode','the Kodland Sparks guide']],
    desc:'Backoffice and Teacher Notes, Classroom with Follow Mode, and Kodland Sparks — with three practice simulations.',
    obj:'Find a course and its Teacher Notes in Backoffice, run a lesson in Classroom with Follow Mode, and know what students do in Kodland Sparks. Each part ends with a simulation that gives you a completion code.',
    offer:[['🗂️','Find every course material in Backoffice — the wiki is no longer used.'],['📒','Read the Teacher Notes and updates before every lesson.'],['🎥','Understand Follow Mode, the activity cards and screen demonstrations.'],['⚡','Get to know Kodland Sparks, where students build and publish.']],
    sections:[ ['bo','🗂️','Backoffice: where the course lives'], ['classroom','🎥','In the lesson: cards, Follow Mode and demos'], ['sparks','⚡','Kodland Sparks: the students’ studio'] ] },
  { id:'m3', n:3, e:'⭐', color:'#F03D9E', title:'Lesson Quality', check:'risk',
    desc:'How a lesson is structured — and three habits that keep the structure: a proper opening, reasoning questions and a fixed closing.',
    obj:'Understand how a lesson is structured in the new model, what quality reviews look at, and build three habits that keep the structure in every lesson: a proper opening, questions that make students explain their reasoning, and a fixed closing routine.',
    offer:[['🧱','Understand how a lesson is structured in the new model.'],['🎬','Open every lesson properly: warm-up, link to last lesson, homework, lesson goal.'],['🧠','Ask questions that make specific students explain.'],['🏁','Close every lesson with a fixed 5–7 minute routine.']],
    sections:[ ['structure','🧱','How a lesson is structured'], ['seeing','🔎','What quality reviews look at'], ['opening','🎬','A proper opening'], ['reasoning','🧠','Questions that make students think out loud'], ['closing','🏁','A fixed closing routine'], ['metrics','📊','What you still own: the metrics'], ['qcheck','✅','Your lesson-quality checklist'] ] },
  { id:'m4', n:4, e:'🤖', color:'#8B5CF6', title:'Introduction to prompts for tutors', check:'quiz',
    desc:'The one genuinely new skill in these courses. Not the technical side of AI — how to write a prompt, and how to help a student write theirs.',
    obj:'Know enough about prompts to guide your students while they write their own in class. This is about practical skill, not technical theory.',
    offer:[['✍️','Understand what a prompt is and what a good one includes.'],['💻','Write prompts that generate and debug code.'],['🎨','Write prompts for images and video.'],['⚠️','Avoid the most common mistakes.']],
    sections:[ ['why4','💡','Why this module exists'], ['whatp','❓','Learning about AI: what is a prompt?'], ['goodp','🧩','What should a good prompt include?'], ['codep','💻','Tips for prompts that generate code'], ['imgp','🎨','Tips for prompts that generate images and video'], ['mistp','⚠️','Common mistakes'] ] }
];

/* ============================================================
   Names of the three simulations
   ============================================================ */
CONTENT.sims = { boCode:'BO simulation', classCode:'Classroom guide', sparksCode:'Kodland Sparks guide' };

/* ============================================================
   MODULE CHECKS — "a" is the number of the correct option (0 = first). Keep it as it is.
   ============================================================ */
CONTENT.quiz = {
  m1:[
    { ctx:'A colleague heard about the new educational model and is worried: “So all our courses are changing now?”',
      q:'What’s the right answer?',
      o:['Yes: from now on every Kodland course follows the new model.',
         'Only the courses that have fewer students will change.',
         'No, only the groups you have with the new model. The groups you already have with the old courses will remain the same, unless you’re told otherwise.'],
      a:2, e:'The new model is introduced gradually. Groups that already study under another format keep it — you’ll be told if one of your groups changes.' },
    { ctx:'You plan the first minutes of a lesson: explain the new concept, show the tool, then hand out the template so students build the project.',
      q:'What’s wrong with this plan in the new model?',
      o:['Nothing — concepts must be explained before students can use them.',
         'It’s inductive. Open with the finished result already working, explore it together, and let your explanation answer what students already noticed.',
         'You should let the AI explain the concept instead of you.'],
      a:1, e:'Deductive learning flips the old order: show the working result first, take it apart together, and explain when students already need the answer.' },
    { ctx:'A student has been trying to fix the same problem for ten minutes. It still doesn’t work and they say: “I’m just bad at this.”',
      q:'Which answer fits the growth mindset of the model?',
      o:['“Don’t worry, let me fix it for you so we can move on.”',
         '“This one is easy — you should have it by now.”',
         '“It doesn’t work yet — that’s a typical problem. Show me what you tried, and let’s find the next strategy.”'],
      a:2, e:'An error is a normal stage of development. Name it as normal and hand the next step back to the student — fixing it for them removes the learning.' },
    { ctx:'A student asks the AI to write the whole logic of their game and pastes it into their project without changing anything.',
      q:'Which rule of the model does this break?',
      o:['“AI proposes, the author decides” — the AI can help, but it must never build the core of the project in place of the student.',
         'None: AI is allowed to do anything as long as the project works.',
         'The rule that AI can only be used for images.'],
      a:0, e:'At every age the rule is the same: the AI proposes, the author decides. How much AI is used depends on the age, but the student always owns the core of the project.' }
  ],
  m2:[
    { q:'In Backoffice, how do you reach the activities and Teacher Notes of a lesson in these courses?',
      o:['Groups → your group → the wiki link.',
         'Courses → the course → Assignments → choose the lesson → open an activity.',
         'Profile → Schedule → the lesson.'],
      a:1, e:'Course content is reached through Courses, not Groups. In Assignments you see the lesson’s activity cards — and the Teacher Notes are inside each card. The Study guides table is empty on purpose.' },
    { ctx:'You taught Lesson 3 last month with another group, and it went really well.',
      q:'What do you do before teaching it again?',
      o:['Nothing: you know the lesson, so you can skip the notes this time.',
         'Read the Teacher Notes again and check for updates — the courses keep being improved, and activities, timings or notes can change.',
         'Look for the presentation in the wiki.'],
      a:1, e:'Reading the Teacher Notes is part of preparing every lesson, every time. The version you taught may not be the version you’ll teach.' },
    { ctx:'You have Lead the group switched on. Halfway through, a student clicks “Work independently” and goes back to an earlier card.',
      q:'What happens from that moment?',
      o:['The student is removed from the lesson and has to rejoin.',
         'The student keeps a banner showing where you are, with a Return button; you see next to their name that they’re working independently.',
         'Their answers in your card are sent to you live.'],
      a:1, e:'Follow Mode never locks a student in. They can work on their own, see where you are and return in one click.' },
    { q:'You want to demonstrate a step in a tool, like the Scratch editor. What’s the right way to show it?',
      o:['Share your screen while the lesson card is open, so they see the instructions and your notes.',
         'Share only the tool’s tab or window — never the lesson card, where your Teacher Notes are visible.',
         'Don’t demonstrate anything: the cards do all the explaining.'],
      a:1, e:'Follow Mode is for cards: each student has their own copy and never sees your notes. Screen sharing shows exactly what’s on your screen — so share the tool, not the lesson card.' },
    { ctx:'Your students finished a choice question and, later, an activity where they had to paste the link to their project.',
      q:'Which statement is right?',
      o:['Both are saved automatically: students never need to click anything.',
         'The choice question records the score automatically; for the link activity, students must click “Send”.',
         'Both need the Submit button, or nothing is recorded.'],
      a:1, e:'Choice questions, text and formula fields and drag-and-drop record the score automatically. Activities where students send text, links or files need the “Send” button.' },
    { q:'How do students and tutors get into Kodland Sparks?',
      o:['Everyone uses their Backoffice login.',
         'Students enter with one button from the main platform; tutors use separate credentials given by the Operations or Teaching department.',
         'Students and tutors register themselves on the website.'],
      a:1, e:'Students use single sign-on from the platform. Tutors receive separate credentials from Operations or Teaching — until then, the guided tour is how you explore it.' }
  ],
  // Module 3: in every case, the tutor must spot the strategy that would HARM that part of the lesson
  m3:[
    { part:'👋 Warm-up', ctx:'Students join quietly, with their cameras off. Nobody says a word.',
      o:['Greet each student by name and ask a quick question about their week.',
         'Skip the warm-up and jump straight into the project to save time.',
         'Mark attendance while they settle in, and invite them to react with an emoji.'],
      a:1, e:'Skipping the warm-up saves two minutes and costs the connection. A short, warm opening is what gets quiet students talking — and engaged for the rest of the lesson.' },
    { part:'📓 Homework check', ctx:'Half of the group didn’t do the homework.',
      o:['Ask who got stuck and what happened — maybe it was a technical problem.',
         'Ask one student to show their homework and name one specific thing that went well.',
         'Say “OK, zero for you” and move on without asking why.'],
      a:2, e:'A missing homework is a signal, not just a zero. Finding out whether they got stuck is how you help them — and how you keep them from falling behind.' },
    { part:'🧠 Comprehension', ctx:'You explained a new idea. When you ask “Is it clear?”, everyone says yes — but you suspect they didn’t really understand.',
      o:['Ask a specific student, by name, to explain why it works.',
         'Accept the yes and move on: if they say it’s clear, it’s clear.',
         'Ask them to predict what will happen if you change something, then try it together.'],
      a:1, e:'“Is it clear?” almost always gets a yes. Moving on without checking means students get stuck later — ask someone to explain their reasoning instead.' },
    { part:'📋 Recap', ctx:'There are 7 minutes left and the group hasn’t finished the last card.',
      o:['Keep working until the very end so they can finish the card, and skip the recap.',
         'Start the closing routine now: the unfinished card can continue next lesson or at home.',
         'Ask two or three students to say what they learned today.'],
      a:0, e:'Working until the last second is exactly how the recap, the teaser and the homework get lost. Start the closing on time — the card can wait, the closing can’t.' },
    { part:'🔮 Teaser & homework', ctx:'It’s the last minute of the lesson and students are about to leave.',
      o:['Connect the teaser to their project: one sentence that makes them curious about next time.',
         'Explain the homework in one or two sentences and remind them how to hand it in.',
         'Read the teaser line quickly as they leave and say “the homework is on the platform”.'],
      a:2, e:'A rushed teaser and an unexplained homework mean students leave without knowing what comes next. One motivating sentence and a clear explanation take less than two minutes.' }
  ],
  m4:[
    { ctx:'You are helping a student turn their Scratch game idea into a prompt.',
      q:'Which prompt is most likely to produce a usable result on the first try?',
      o:['“Build a cat game with obstacles, similar to endless runner games, using good game design principles.”',
         '“Create a Scratch game: a cat sprite moves left/right with arrow keys, obstacles fall from the top at increasing speed, score increases every second survived, game ends after 3 collisions.”',
         '“Make a fun and engaging game for an 8-year-old that teaches them about obstacles and survival, similar to Flappy Bird but original.”',
         '“Create a 2D game in Scratch with clear rules, a scoring system, and increasing difficulty over time.”'],
      a:1, e:'Only that one has concrete, unambiguous mechanics: movement, spawn behaviour, scoring trigger, end condition. The others <i>sound</i> specific but lean on subjective terms — “good game design principles”, “fun and engaging”, “clear rules” — that the AI has to interpret on its own.' },
    { ctx:'A student’s first image prompt produced a character with the wrong colour palette. Everything else — pose, style, background — came out correct.',
      q:'What is the best next step?',
      o:['Rewrite the entire prompt from scratch with more detail overall, to avoid making the same mistake twice.',
         'Re-run the exact same prompt again, since AI output has randomness and a second try often fixes it.',
         'Send a follow-up prompt that changes only the colour palette, keeping the rest of the description the same.',
         'Add several extra adjectives describing the desired mood, so the AI has more context to work with.'],
      a:2, e:'Isolating the one variable that was wrong is faster and more reliable than starting over, relying on randomness, or adding unrelated detail that does not address the actual problem.' },
    { ctx:'You are helping a 13+ student debug a Python function using AI.',
      q:'Which prompt reflects the most effective troubleshooting approach?',
      o:['“This code doesn’t work, please fix it: [code]”',
         '“This function should return the average of a list but returns None when the list has one item. Here’s the code: [code]. What’s causing this specific case to fail?”',
         '“Rewrite this code using better practices and make sure it works: [code]”',
         '“Explain what’s wrong with this code and give me a corrected version: [code]”'],
      a:1, e:'It names the exact expected behaviour, the exact observed failure, and the specific edge case — so the AI can target the real bug instead of guessing at scope or rewriting more than necessary.' },
    { ctx:'Two tutors write prompts for the same video generation task. Tutor A writes one long, detailed prompt covering style, subject and background all at once. Tutor B writes a shorter prompt first, checks the result, then adjusts.',
      q:'Which statement is most accurate?',
      o:['Tutor A’s approach is always better, because more detail up front reduces the number of iterations needed.',
         'Tutor B’s approach is always better, because shorter prompts are inherently easier for AI to process.',
         'Either can work, but Tutor B’s iterative approach makes it easier to identify which specific detail caused an unwanted result.',
         'Neither approach matters, since final output quality depends only on the AI model being used, not the prompt.'],
      a:2, e:'The core principle of this module is iteration and isolating variables. Detail alone does not guarantee success, and iterating makes cause and effect much clearer than doing everything in one large prompt.' },
    { open:true, min:180,
      ctx:'A student in your group wants to add a double jump to their platform game. They type into the AI: <i>“make the jump better”</i>.',
      q:'Rewrite that into a prompt likely to work on the first try. Write the actual prompt text you would help them produce, then add one line saying why yours will work better.',
      model:'A strong prompt does most of these: <ul><li><b>Names the platform</b> — “In Scratch…” — so the AI does not guess the environment.</li><li><b>States the exact behaviour and its trigger:</b> “when the space key is pressed while the cat is already in the air, it jumps a second time”.</li><li><b>Sets a limit:</b> “only once per fall”, and “do not change the existing movement blocks”.</li><li><b>Asks for an explanation:</b> “tell me which blocks you added and where”.</li></ul><p style="margin-top:8px">And the reason: it isolates <b>one</b> mechanic, states the expected behaviour precisely, and constrains what may change — so there is nothing left for the AI to invent. “Make the jump better” leaves every one of those decisions to the AI.</p>' }
  ]
};

/* ============================================================
   STAGE CAROUSELS (Module 3) — keep e, c and v
   ============================================================ */
CONTENT.stagesets = {
  blocks:[
    { e:'👋', t:'Warm-up — 2 to 4 minutes', was:'Warm-Up', ph:'Opening', c:'#BDE7FF', goal:'It still exists, but it’s short: greeting, camera and microphone, a reaction. In some lessons there’s a mood check.',
      d:['Use it to connect: a short chat, or a question about their interests and how they feel.','Mark attendance now, while students settle in — not at the end.'] },
    { e:'🔧', t:'A technical checkpoint', was:'Review of the previous lesson', ph:'Opening', c:'#BDE7FF', goal:'The review becomes a checkpoint: does the previous project open and work? Concepts are not re-explained — you only check that the starting point is ready.',
      d:['In some lessons the review and the homework check are one single task on the platform.','If a project doesn’t open, use the backup template — nobody gets stranded.'] },
    { e:'🎬', t:'The objective is shown, not explained', was:'Lesson objective', ph:'Opening', c:'#FFF1B8', goal:'The objective is shown with the finished result — a video, a GIF or a working project — as the first trigger of the lesson.',
      d:['Show the result first, then ask what they notice.','Let the explanation come later, as an answer.'] },
    { e:'🔀', t:'Theory and practice are fused', was:'Theory and practice', ph:'Main part', c:'#E4FFC2', goal:'Students explore and meet the challenge first; the explanation arrives exactly when they need it.',
      d:['Give a hint at a time — not the solution.','Mistakes are learning material, not failures.'] },
    { e:'📋', t:'Summary — interactive and shared', was:'Lesson summary', ph:'Closing', c:'#FFD9EC', goal:'More interactive and group-based: small quizzes each student answers on the platform, plus a short list of what was learned for you to walk through.',
      d:['Students say what they learned — you don’t recap for them.','It’s the first step of your closing routine (below).'] },
    { e:'🏠', t:'Homework — the next version', was:'Homework assignment', ph:'Closing', c:'#FFD9EC', goal:'Homework is the next version of the same published project — or a mission that builds on what they just learned. Not a separate exercise.',
      d:['Explain it clearly before they leave.','Remind them to publish the new version and send the link.'] },
    { e:'🔮', t:'Preview — one motivating sentence', was:'Preview of the next lesson', ph:'Closing', c:'#FFD9EC', goal:'It’s a sentence, not a segment — but don’t just read the line. Use it to motivate.',
      d:['Read the next lesson before teaching, so you can build real anticipation.','Connect it to what they just built.'] }
  ],
  open:[
    { e:'👋', t:'Warm-up and greeting', ph:'Opening · 1', c:'#BDE7FF', v:'warmup', goal:'Connect before you teach: greet each student by name, check camera and sound, and give them a reason to smile.',
      d:['Greet every student by name as they arrive.','A 1-minute question about their week or interests.','Mark attendance while they settle in.'],
      say:['“Hi Leo! Great to see you. Quick one before we start: what game did you play this week?”'] },
    { e:'🔗', t:'Link to the previous lesson', ph:'Opening · 2', c:'#C9F2D6', v:'link', goal:'Remind students where their project stands and why today’s lesson follows from it — the story continues.',
      d:['Ask a student to tell the group what they built last time.','Connect it to today’s mission in one sentence.','Keep the course story alive: “Today, our mission is…”.'],
      say:['“Ana, remind us: what could your project do at the end of last lesson?”','“Last time your game got a hero. Today, the hero gets a goal.”'] },
    { e:'📓', t:'Homework check', ph:'Opening · 3', c:'#FFF1B8', v:'homework', goal:'Check the next version they worked on at home — and notice who got stuck.',
      d:['Ask one or two students to show their homework.','Name one specific thing that went well.','No homework? Find out if they got stuck technically — not just a zero.'],
      say:['“Mia, show us your new version. What made you choose those colours?”'] },
    { e:'🎯', t:'Lesson goal', ph:'Opening · 4', c:'#E4FFC2', v:'goal', goal:'Set what today’s lesson is aiming for. This is the last stage before independent work begins.',
      d:['Explain the goal of today’s project in one or two sentences.','Ask the student to repeat the plan in their own words.'] }
  ],
  close:[
    { e:'📋', t:'Summary (recap)', ph:'Last 5–7 min · 1', c:'#FFD9EC', v:'recap', goal:'Students say what they learned — not you. Use the summary quiz or list in the card and let them answer.',
      d:['Ask 2–3 students what they learned today.','Ask why or how — not “Is it clear?”.','Celebrate one specific thing the group achieved.'],
      say:['“Tom, what happens when the game starts — and why?”'] },
    { e:'🔮', t:'Teaser for the next lesson', ph:'Last 5–7 min · 2', c:'#E9DDFF', v:'teaser', goal:'One sentence that makes them want to come back. It only works if you’ve read the next lesson.',
      d:['Read the next lesson while you prepare.','Connect the teaser to their project.','Keep it short and exciting — a promise, not a summary.'],
      say:['“Next time, something dangerous appears on your hero’s path… will they make it?”'] },
    { e:'🏠', t:'Next homework', ph:'Last 5–7 min · 3', c:'#C9F2D6', v:'nexthw', goal:'Explain the next version of the project, so everyone knows exactly what to do — and to submit it.',
      d:['Explain the homework in one or two sentences.','Remind them to click “Send” when they hand in the link.','Say goodbye on a positive note.'],
      say:['“For next time: add one new detail to your game, publish it and send me the link.”'] }
  ]
};

/* ============================================================
   SMALL DATA LISTS — Learning Loop, AI per age, prompt and question examples
   ============================================================ */
CONTENT.loop = [
  ['🎯','Goal','The lesson starts from what must work by the end of today — shown, not explained.'],
  ['⚡','Fast prototype','Students get something working quickly: a template, a first version, a first result.'],
  ['🐞','Difficulty','Something doesn’t work yet. That’s expected — it’s where the learning happens.'],
  ['🧭','Strategy / hint','You give one hint at a time, or a question — not the solution.'],
  ['📈','Improvement','The student fixes it and makes it better: their own version, their own decisions.'],
  ['🎤','Showcase','They show it: to you, to the group, on Kodland Sparks.'],
  ['💭','Reflection','What problem did I have? What strategy did I use? What’s my next step?']
];
CONTENT.ages = {
  a:{ e:'🧒', age:'8–9', who:'Courses for the youngest students', model:'Guided project-based learning, AI assisted.',
      p:'Tools close to the ones students already know, with AI mediated by the tutor and the AI Buddy. <b>The feeling of “I made this” is the asset to protect.</b> AI may appear later in the course, as a playful, bounded element.',
      test:'Inverse test', tt:'The project must stay 100% achievable and meaningful <b>without</b> AI. AI only removes routine friction — never the creative act.', ai:20 },
  b:{ e:'🧑', age:'10–12', who:'Courses for pre-teens', model:'Directed project-based learning, AI as material.',
      p:'The student owns and executes the creative core; AI generates raw material — sprites, sounds, texts — that the student curates, edits and assembles. AI is a “sparring partner”.',
      test:'Leverage test', tt:'Without AI the project would still be possible, but visibly poorer or smaller within class time. AI raises the ceiling of the student’s idea.', ai:55 },
  c:{ e:'🧑‍💻', age:'12–17', who:'Courses for teenagers', model:'Project-based learning integrated with AI — the student as creative director.',
      p:'Students orchestrate AI across the whole process (concept → assets → logic → build), including AI as a component inside their own program, with explicit literacy about synthetic media.',
      test:'Ambition test', tt:'The intended scope and quality isn’t achievable without AI in the time given. Remove AI and the planned shape of the project collapses.', ai:85 }
};
CONTENT.prompts = {
  v:['“Make me a game.”','“Make it prettier.”','“Fix my code.”'],
  s:['“In Python: write a guess-the-number game. The computer picks a number from 1 to 100, the player has 7 tries, after each guess the program prints ‘too high’ or ‘too low’, and at the end it says how many tries it took.”',
     '“Change only the colour palette to neon blue and pink. Keep the pose, the style and the background.”',
     '“My Python program should stop when the player guesses the number, but it keeps asking. Here’s my code. What is causing it, and what should I check?”']
};
CONTENT.qcmp = {
  v:['“Is it clear?”','“Did everyone finish?”','“Any questions?”'],
  s:['“Mia, why does the character move only when you press the arrow key?”','“Leo, what would happen if we moved this line to the top? Try it and tell us.”','“Ana, how did you know the score was working?”']
};

/* ============================================================
   Notes under the vague / specific switches
   ============================================================ */
CONTENT.cmpnote = { prompts:{ v:'The AI has to guess everything: the platform, the rules, what “prettier” means.', s:'Each one names the platform, the exact behaviour and what may change — nothing is left to guess.' },
                  questions:{ v:'Easy to answer with a “yes” — and you learn nothing about what they understood.', s:'A name plus a “why” or “how”: the student has to explain their thinking out loud.' } };

/* Follow Mode demo cards (Module 2) */
CONTENT.fmCards = [['Card 1 · Get ready for today’s mission! 🚀','Today you will build your first project…'],['Card 2 · Welcome! 👋','Let’s check that you can see and hear each other…'],['Card 3 · Let’s get to know each other! 🎤','Every creator has their own style…']];

/* ============================================================
   SECTION BODIES — the text of every section, by module. Inside ${…} translate only the quoted text; keep function names (callout, flip, launch, codeBox, zclip, stc, videoBtn), CONFIG.… and file names.
   ============================================================ */
CONTENT.body = {
/* ---------------- Module 1 ---------------- */
what:() => `
  <p class="p">Kodland has created a <b>new educational model (EM)</b> that will be gradually implemented in both new and existing courses. It isn’t just new technical content — it’s a different <b>methodology</b>: how a lesson flows, what role you play as the tutor, and how artificial intelligence becomes part of learning instead of a shortcut.</p>
  <div class="defn"><span class="de">🌱</span><p>In this <b>new educational model</b> students start from a working result, learn by building and fixing, publish their projects on <b>Kodland Sparks</b>, and use AI with judgement.</p></div>
  ${callout('good', '🧭', '<b>Important:</b> This is a new educational model that will be introduced gradually. New courses will follow this teaching approach, while existing courses will be adapted to the new model. However, groups that are already taking courses under a different teaching format will continue with their current format. For now, only some courses follow this new model.')}
  <p class="p" style="margin-top:18px">Why a new model? Because today’s students learn differently than students did a few years ago. The tools changed, the way children and teenagers relate to technology changed, and AI is already part of their everyday life. The new methodology is built around three ideas:</p>
  <div class="trio">
    <div class="ti"><span class="tie">🛠️</span><h3>Tools they recognise</h3><p>Students work with the tools they actually see and use today — and projects with a real “wow” effect from the first minute.</p></div>
    <div class="ti"><span class="tie">🧠</span><h3>AI with judgement</h3><p>We teach students to use AI wisely: neither fearing it nor depending on it blindly.</p></div>
    <div class="ti"><span class="tie">✨</span><h3>Lessons worth showing up for</h3><p>The learning experience stays relevant, so every class is worth it.</p></div>
  </div>
  <p class="p" style="margin-top:18px">Before we go on, let’s clear up three common beliefs. Tap each one:</p>
  <div class="myths">
    <button class="myth" data-myth><span class="mtag">Myth</span><span class="mq">“All Kodland courses are changing to the new model.”</span><span class="ma"><b>Not all of them.</b> The new model is used in new courses designed for it and in selected existing courses that are being adapted to it.</span><span class="mh">Tap to see the reality →</span></button>
    <button class="myth" data-myth><span class="mtag">Myth</span><span class="mq">“All my groups will change.”</span><span class="ma"><b>No.</b> You teach with the new model only in groups of a course that follows it. In all your other groups, nothing changes. You’ll be informed when one of your courses moves to the new model.</span><span class="mh">Tap to see the reality →</span></button>
    <button class="myth" data-myth><span class="mtag">Myth</span><span class="mq">“It’s just new content to learn.”</span><span class="ma"><b>It’s a new way of thinking a lesson.</b> The content asks little new knowledge from you — the real change is how a lesson flows and what you do in it.</span><span class="mh">Tap to see the reality →</span></button>
  </div>`,

pillars:() => `
  <p class="p">This is the heart of the model. It isn’t about learning new buttons — it’s about <b>changing how you think a lesson</b>. Everything rests on four pillars. Flip each card, then read how each one changes what you do.</p>
  <div class="grid4">
    ${flip('Pillar 1', '🔄', 'Deductive learning', '<b>Result first.</b><br>The lesson opens with the finished result already working. Students take it apart with you, and only then build it piece by piece.')}
    ${flip('Pillar 2', '🌱', 'Growth mindset', '<b>Errors are a stage, not a failure.</b><br>A bug or a broken mechanic is normal. Students learn to say “it doesn’t work <i>yet</i> — let’s find a strategy”.')}
    ${flip('Pillar 3', '🔁', 'The Learning Loop', '<b>A cycle, not a line.</b><br>Goal → prototype → difficulty → hint → improvement → showcase → reflection. Each turn goes a little deeper.')}
    ${flip('Pillar 4', '🤖', 'AI-assisted learning', '<b>AI proposes, the author decides.</b><br>How much AI is used depends on the students’ age — and AI never builds the core of the project for them.')}
  </div>

  <h3 class="subh">🔄 Pillar 1 · Show first, explain after</h3>
  <div class="ba"><div class="bef"><h4>Before</h4><p>The lesson started with theory, then the tool, and then students built from zero.</p></div><div class="arr">➜</div>
    <div class="aft"><h4>Now</h4><p>The lesson starts with the <b>finished result already working</b> — “what game or mechanic must work by the end of today?”. Students see the whole project, take it apart with you, and then build it.</p></div></div>
  ${callout('tip', '💡', 'This changes your first instinct as a tutor: instead of explaining before showing, <b>show first and explain as an answer</b> to what students already noticed.')}

  <h3 class="subh">🌱 Pillar 2 · Your words shape their mindset</h3>
  <p class="p">How you talk about a mistake teaches students how to think about it. The model asks you to treat every error as a normal step and to hand the next move back to the student.</p>
  <div class="twocol">
    <div class="yes"><h4>✅ Say this</h4><ul><li>“Perfect — we found a typical problem. Let’s solve it.”</li><li>“It doesn’t work yet. What’s our next strategy?”</li><li>“Show me what you tried before this.”</li></ul></div>
    <div class="no"><h4>🚫 Avoid this</h4><ul><li>“It didn’t work out for you again.”</li><li>“That’s wrong — let me fix it.”</li><li>“This is easy, you should know it.”</li></ul></div>
  </div>

  <h3 class="subh">🔁 Pillar 3 · The Kodland Learning Loop</h3>
  <p class="p">The old sequence was a straight line: <i>I explain → they practise → I review</i>. The Learning Loop replaces it with a cycle that repeats inside every lesson and between lessons. Press play, or tap any step:</p>
  <div class="loop" id="loop">
    <div class="loop-row"><span class="lf"></span>${LOOP.map((s, i) => `<button class="lst" data-ls="${i}"><span class="lsi">${s[0]}</span><b>${s[1]}</b></button>`).join('')}</div>
    <div class="loop-out" id="loopOut"><span class="lo-e">▶️</span><span>Press <b>Play the loop</b> to see one full turn.</span></div>
    <div class="btn-row" style="margin-top:12px;justify-content:center"><button class="btn-y" id="loopPlay">▶ Play the loop</button></div>
    <p class="spiral">🌀 The lesson moves in a spiral: every turn of the loop goes a little deeper.</p>
  </div>

  <h3 class="subh">🤖 Pillar 4 · AI depends on the age</h3>
  <p class="p">This is where you need the most care, because the role of AI is <b>not the same in every course</b> — it depends on how old the students are. Switch between the age groups:</p>
  <div class="agebox">
    <div class="seg" id="ageSeg"><button data-age="a" aria-pressed="true">🧒 Ages 8–9</button><button data-age="b" aria-pressed="false">🧑 Ages 10–12</button><button data-age="c" aria-pressed="false">🧑‍💻 Ages 12–17</button></div>
    <div class="agebody" id="ageOut"></div>
  </div>
  <div class="quote"><b>“AI proposes, the author decides.”</b><small>The rule to repeat in every course, at every age.</small></div>
  <div class="grid2">
    <div class="card"><div class="wh"><b>⚙️ Conventional (generative) AI</b></div><p class="p" style="margin:0;font-size:15px">Creates code, images or ideas when you ask it to.</p></div>
    <div class="card"><div class="wh"><b>🧭 AI Mentor / AI Buddy</b></div><p class="p" style="margin:0;font-size:15px">Doesn’t generate the solution: it asks guiding questions and explains.</p>
      <p class="p" style="margin:10px 0 0;font-size:13.5px;color:var(--pink-d)"><b>👀 Later in this training</b> you’ll see where students find it on the platform.</p></div>
  </div>
  ${callout('bad', '🛑', '<b>Never let AI build the central logic of the project in place of the student.</b>')}`,

people:() => `
  <p class="p">Feedback is no longer only <i>tutor → student</i>. In the new model, students hear from four sources — and each one has a role:</p>
  <div class="q3">
    <div><span>🧑‍🏫</span><b>The tutor</b><small>Specific, about the project and the next step.</small></div>
    <div><span>👥</span><b>A classmate</b><small>Simple and specific during the showcase — never comparing projects.</small></div>
    <div><span>🪞</span><b>Themselves</b><small>What problem did I have, what strategy did I use, what’s my next step?</small></div>
    <div><span>🤖</span><b>The AI</b><small>The AI Buddy or AI mentor: a strength and an idea to improve.</small></div>
  </div>
  ${callout('tip', '🪞', 'Self-assessment isn’t “did you like it?”. It’s naming the problem, the strategy and the next step. Peer feedback follows a simple formula: <b>“I liked… I would add…”</b>.')}
  <div class="defn" style="margin-top:18px"><span class="de">🧭</span><p><b>In short, your role changed.</b> You’re no longer the one who explains everything before starting. You’re a <b>navigator</b>: you show the destination, accompany the journey with questions and timely hints, and let students meet the difficulty before you solve it. Backup templates exist in every course, so you never have to “rescue” a project in a panic — there’s always an alternative route with a guaranteed result.</p></div>`,

/* ---------------- Module 4 ---------------- */
why4:() => `
  <div class="defn"><span class="de">💡</span><p>These courses do not ask much of you in terms of new subject knowledge. The one genuinely new area is <b>AI</b> — and while some tutors are already comfortable with it, others use it very little, or use it in ways that will not help a student. This module is the shared baseline.</p></div>`,

whatp:() => `
  <p class="p">The artificial intelligence we use in our classes — AI Buddy, and the tools inside Kodland Sparks — works from instructions written in ordinary language, called <b>prompts</b>. The better the prompt, the better the result the student gets.</p>
  <p class="p">As a tutor you do not need to be a technical AI expert. You do need to understand the basics, so you can guide your students while they write their own prompts during class.</p>
  <div class="defn"><span class="de">❓</span><p>A <b>prompt</b> is the instruction we give an AI so that it generates a result — text, code, an image, a video. It is like giving instructions to someone who knows nothing about the context of your project: <b>the clearer and more specific the instructions, the closer the result will be to what you actually wanted.</b></p></div>
  <div class="ba"><div class="bef"><h4>A bad prompt</h4><p>Produces generic or incorrect results. The student ends up either accepting something they did not want, or starting over from scratch.</p></div><div class="arr">➜</div>
    <div class="aft"><h4>A good prompt</h4><p>Produces useful, precise results that are <b>easy to adjust</b>. That last part matters most — a result you can nudge is worth more than one you have to replace.</p></div></div>`,

goodp:() => `
  <p class="p">A solid prompt generally answers these four questions:</p>
  <div class="q3">${[['🎬','Context','What is this for? Who will use it?'],['🎯','Goal','What exactly do you want to achieve?'],['📐','Specific details','Style, format, tone, constraints: “in 3 sentences”, “using Python”, “cartoon style”.'],['🖼','Examples','Where they apply — one example helps the AI understand what is expected.']].map(q => `<div><span>${q[0]}</span><b>${q[1]}</b><small>${q[2]}</small></div>`).join('')}</div>
  <div class="twocol" style="margin-top:14px">
    <div class="yes"><h4>✅ Specific enough</h4><ul><li>“Create a simple Scratch game where a cat dodges falling obstacles, with a visible score and 3 lives.”</li></ul></div>
    <div class="no"><h4>❌ Too vague</h4><ul><li>“Make me a game.”</li></ul></div>
  </div>
  <div class="card" style="margin-top:14px">
    <div class="wh"><b>Vague or specific? Switch and compare</b><span class="tag">Try it</span></div>
    <div class="seg" data-cmp="prompts"><button data-k="v" aria-pressed="true">😐 Vague</button><button data-k="s" aria-pressed="false">🎯 Specific</button></div>
    <div class="fbx" data-cmpout="prompts"></div>
  </div>`,

codep:() => `
  <div class="grid2">${[
    ['🏷','Name the language or platform','Python, HTML, Scratch, Roblox, and so on.'],
    ['👣','Describe the expected behaviour step by step','Not just the final result.'],
    ['💬','Ask for the code to be commented','So it is easier to read and to explain in class.'],
    ['🔧','Don’t rewrite the whole prompt','If something does not work, ask the AI to fix the specific error, and say what happened.'],
    ['🧪','Test and understand the code','Encourage students to test and understand the code, not just copy it.']
  ].map(x => `<div class="card" style="padding:16px"><div class="wh" style="margin-bottom:6px"><span style="font-size:26px">${x[0]}</span><b>${x[1]}</b></div><p class="p" style="margin:0;font-size:14.5px">${x[2]}</p></div>`).join('')}</div>`,

imgp:() => `
  <div class="grid2">${[
    ['🖌','Subject, style and setting','Describe the main subject, the visual style (realistic, cartoon, pixel art…) and the setting or background.'],
    ['🌈','Colours, lighting or mood','Mention them when they matter for the project.'],
    ['📏','Be specific about the format','Vertical, horizontal or square — if the project requires it.'],
    ['🔁','Adjust one variable at a time','If the first result is not what you expected, change only the colour, or only the style, so you can see what actually changed the outcome.']
  ].map(x => `<div class="card" style="padding:16px"><div class="wh" style="margin-bottom:6px"><span style="font-size:26px">${x[0]}</span><b>${x[1]}</b></div><p class="p" style="margin:0;font-size:14.5px">${x[2]}</p></div>`).join('')}</div>`,

mistp:() => `
  <div class="myths">${[
    ['🌫','Being too vague.','“Make it prettier” gives the AI nothing to work with.'],
    ['📚','Asking for too much at once.','Break a complex project into several smaller prompts.'],
    ['🔍','Not reviewing the result.','AI makes mistakes and can generate incorrect content — always review before using it.'],
    ['🔂','Not iterating.','The first result is almost never the final one. Adjusting and asking again is a normal part of the process.'],
    ['🧭','Forgetting the project context.','A prompt without context produces generic results that do not fit what the student is building.']
  ].map(x => `<button class="myth" data-myth><span class="mtag">Mistake</span><span class="mq">${x[0]} ${x[1]}</span><span class="ma">${x[2]}</span><span class="mh">Tap to see why →</span></button>`).join('')}</div>
  ${callout('good', '🔁', 'Notice how much of this overlaps with what you already do as a tutor: one change at a time, describe the behaviour you expect, test before you trust it, and iterate rather than restart. Prompting is not a separate skill — it is the same debugging habit, pointed at a different tool.')}`,

/* ---------------- Module 2 ---------------- */
bo:() => `
  <p class="p">Courses with the new model have <b>no wiki manuals and no presentations</b>. The guide for each lesson lives <b>inside the lesson itself</b>, in Backoffice: every activity card carries its own <b>Teacher Notes</b> — what the card is for, how long it takes, what to do and what to watch out for. Only you can see them.</p>
  ${callout('warn', '📒', '<b>Read the Teacher Notes before every lesson</b> — and check for updates. The courses keep being improved, so a lesson can change between one group and the next. The first card of each lesson has the fullest notes, and usually a short video.')}
  <p class="p" style="margin-top:16px">The way in is the same for every course: you don’t reach a course’s content through your Groups, but through <b>Courses</b>.</p>
  <div class="grid3">
    <div class="ti"><span class="tie">📚</span><h3>Courses</h3><p>Open the course record: business branch, language, number of lessons and modules.</p></div>
    <div class="ti"><span class="tie">🃏</span><h3>Assignments</h3><p>Choose the lesson and you’ll see its activity cards. These cards <b>are</b> the lesson content.</p></div>
    <div class="ti"><span class="tie">📒</span><h3>Teacher Notes</h3><p>Open a card: the dashed orange box is your note. Right below it, what the student sees.</p></div>
  </div>
  ${callout('tip', '🧭', 'Now see it for yourself. The simulation is a replica of Backoffice with one of the courses that follow the new model: you’ll open the course, go to its first lesson, see why the study guide is empty and read the Teacher Notes of the first card.')}
  ${launch('🗂️', 'Simulation 1 of 3', 'Backoffice simulation', 'A click-through replica of Backoffice: open the course, find the lesson’s activities, see why there’s no wiki link, and read a Teacher Note from the inside.', CONFIG.BO_SIM, '🗂️ Open the BO simulation')}
  ${codeBox('boCode')}`,

classroom:() => `
  <p class="p">Once you know the lesson, it’s time to teach it. In Classroom you no longer present slides: you open the <b>same activity cards</b> you read in Backoffice, and you move through them together with your students. Three things make this work.</p>
  <h3 class="subh">👁️ 1. Follow Mode: your students go where you go</h3>
  <p class="p">With <b>Follow Mode</b>, students automatically see the same card you have open. It’s <b>not screen sharing</b>: each student gets their own copy of the card, which they can actually work in — and the Teacher Notes stay visible only to you. You turn it on with the <b>Lead the group</b> switch, which appears next to an open card. Try it:</p>
  <div class="card" id="fmDemo">
    <div class="fm-ctrl"><button class="lead-sw" id="fmSw"><i></i> Lead the group</button><button class="btn-g" id="fmNext">Next card →</button><span style="font-size:13px;color:var(--muted);font-weight:700" id="fmHint">Turn the switch on, then go to the next card.</span></div>
    <div class="fm">
      <div class="screen"><div class="sc-h"><span>👩‍🏫 Your screen</span><span>Tutor</span></div><div class="sc-card" id="fmT"></div></div>
      <div class="screen"><div class="sc-h"><span>👧 Sofia’s screen</span><span>Student</span></div><div class="sc-card" id="fmS"></div></div>
    </div>
    <div class="fm-out" id="fmOut"></div>
  </div>
  <div class="grid3" style="margin-top:14px">${[
    ['➡️','You change card','It changes for everyone following you.'],
    ['🖱️','You scroll','Inside interactive cards, their position catches up with yours.'],
    ['🕐','Someone joins late','They land directly on the card you have open.'],
    ['🚪','You step away','Students see a “tutor stepped away” notice; following resumes when you’re back.'],
    ['👥','Who’s following?','A marker next to each name shows who follows you and who works alone.'],
    ['🔓','Not locked in','A student can click “Work independently” and come back with “Return”.']
  ].map(x => `<div class="card" style="padding:16px"><div class="wh" style="margin-bottom:6px"><span style="font-size:26px">${x[0]}</span><b>${x[1]}</b></div><p class="p" style="margin:0;font-size:14.5px">${x[2]}</p></div>`).join('')}</div>

  <h3 class="subh">🖥️ 2. Follow Mode or screen sharing?</h3>
  <p class="p">You’ll still share your screen sometimes — to <b>demonstrate</b> a step in a tool, like the Scratch editor, or to show a finished result. The rule is simple:</p>
  <div class="okbad">
    <div class="ok"><h3>👁️ Use Follow Mode for the cards</h3><ul><li>To move the group through the lesson.</li><li>Each student works in their own copy.</li><li>Your Teacher Notes stay private.</li></ul></div>
    <div class="bad"><h3>🖥️ Share your screen for demos</h3><ul><li>To show a step in the tool (Scratch, Sparks…).</li><li>Share <b>only the tool’s tab or window</b>.</li><li>Never share the lesson card: your notes would be visible.</li></ul></div>
  </div>

  <h3 class="subh">🧩 3. Interactive Activities</h3>
  <p class="p">Many cards are interactive. Some of them save your progress and score without requiring you to click the “Submit” button, while others do.</p>
  <p class="p">In the activities — <b>Choice Questions</b>, <b>Text and Formula Fields</b>, and <b>Drag-and-Drop</b> — you’ll see that your score is automatically recorded once you’re done.</p>
  <div class="zoomtip"><span>🔍</span><div><b>Tip:</b> click any of the 3 videos below to open it in a bigger window. There you can <b>zoom in</b> (+ / − buttons, mouse wheel or double-click) and drag to see every detail.</div></div>
  <div class="vidpair">
    <figure class="card gifcard"><span class="gtag ok">✅ Saved automatically</span>${zclip('images/result_good_EM.mp4', 'Saved automatically')}<figcaption>The result appears automatically in the upper-right corner.</figcaption></figure>
    <figure class="card gifcard"><span class="gtag ko">🔁 A wrong answer</span>${zclip('images/result_bad_EM.mp4', 'A wrong answer')}<figcaption>If there is an error, you can click the ‘Redo’ icon in the upper right corner and try again.</figcaption></figure>
  </div>
  <p class="p" style="margin-top:18px">Meanwhile, for activities that involve sending text, links, or files, make sure your students click the <b>“Send”</b> button:</p>
  <figure class="card gifcard wide">${zclip('images/send_bottom.mp4', 'The “Send” button')}</figure>
  ${launch('🎥', 'Simulation 2 of 3', 'Classroom guide', 'A guided tour of a real lesson of the new model in Classroom: the cards, the Teacher Notes only you can see, the first card’s full notes, and Lead the group.', CONFIG.CLASS_SIM, '🎥 Open the Classroom guide')}
  ${codeBox('classCode')}`,

sparks:() => `
  <p class="p">The last piece of the puzzle is where students’ projects live: <b>Kodland Sparks</b>. It’s the new platform where students <b>build</b> their projects, <b>publish</b> them, keep learning between lessons and get feedback from classmates and from an AI mentor. It’s also where the portfolio they build across the course lives.</p>
  <div class="grid2">
    <div class="card"><div class="wh"><b>🔐 How students get in</b></div><p class="p" style="margin:0;font-size:15px">Students enter with <b>one button from the main platform</b> (single sign-on) — they don’t register separately.</p></div>
    <div class="card"><div class="wh"><b>🔑 How you get in</b></div><p class="p" style="margin:0;font-size:15px">Tutors use <b>separate credentials</b>, different from Backoffice. They’re given by the <b>Operations or Teaching department</b>.</p></div>
  </div>
  ${callout('warn', '⏳', '<b>You can’t try it on your own yet.</b> Until you receive your credentials, you won’t be able to log in to Kodland Sparks. That’s why there’s a guided tour below: it shows you what’s inside and what students can do there.')}
  <h3 class="subh">🧭 What students do in Sparks</h3>
  <div class="grid3">${[
    ['📰','Feed','They see and react to classmates’ projects, and read the AI mentor’s feedback.'],
    ['📁','My projects','Everything they saved or published, in one place.'],
    ['🚀','Publish project','They share a finished project, choose who can see it and can earn rewards.'],
    ['🎨','Studio · Creative mode','Where they build in class: games and web apps, Python, Scratch, pixel art, animation, music, skins.'],
    ['🏆','Studio · Challenges mode','Structured tasks with automatic checking — and crystals as a reward.'],
    ['🤖','AI helper & AI tutor','This is where the AI Buddy / AI mentor lives: tips, ideas and explanations — the AI proposes, the author decides.']
  ].map(x => `<div class="ti" style="padding:18px"><span class="tie" style="font-size:46px">${x[0]}</span><h3>${x[1]}</h3><p>${x[2]}</p></div>`).join('')}</div>
  <h3 class="subh">💬 Feedback in Sparks</h3>
  <p class="p">There are no classic likes or comments. Instead, students leave <b>reactions</b> (emoji), write <b>reviews</b> in three fields — overall impression, strengths and what to improve — and can follow each other. Gamification runs on <b>crystals → chests → rewards</b>. Reviews from a tutor are highlighted, so students recognise official feedback.</p>
  ${callout('tip', '🔗', '<b>Publishing on Sparks and sending the link on the Kodland platform are two different steps.</b> In many lessons, students publish their project and then paste the link in a card — remind them to do both.')}
  ${callout('tip', '🧭', 'Now take the tour. It’s a replica of Kodland Sparks: you’ll visit the Feed, publish a project, open the Studio and see a Python project, a Scratch project and a drawing, and finish with the AI helper and crystals.')}
  ${launch('⚡', 'Simulation 3 of 3', 'Kodland Sparks guide', 'A guided tour of the platform your students use: Feed, My projects, Publish project, Studio with every project type, AI helper and rewards.', CONFIG.SPARKS_SIM, '⚡ Open the Kodland Sparks guide')}
  ${codeBox('sparksCode')}`,

/* ---------------- Module 3 ---------------- */
structure:() => `
  <p class="p">In courses with the new model, a lesson is no longer a presentation with big blocks and a slide that tells you when to “summarise” or “close”. A lesson is a sequence of <b>activity cards</b> on the platform, and each card brings its own content for the student and its own notes for you. That means one big thing: <b>you manage the rhythm of the lesson — not a slide.</b></p>
  <h3 class="subh">🏷️ Labels tell you what kind of moment it is</h3>
  <p class="p">Many cards carry a label in their Teacher Notes, like <b>(CORE)</b> or <b>(SUBMIT)</b>. They tell you at a glance what kind of teaching moment the card is — and how much room to give the student’s autonomy. Tap each one:</p>
  <div class="grid4">${[['CORE','🧱','The central build of the lesson.'],['SELF-CHECK','🪞','The student checks their own understanding.'],['AI-CREATE','🤖','The one moment AI is used — with a clear limit.'],['CHOICE/INTEREST','🎨','A personal choice: their style, their idea.'],['SUBMIT','📤','Something must be handed in or published.'],['PEER-FEEDBACK','👥','Classmates comment on each other’s work.'],['REFLECT','💭','A moment to think about what they learned.'],['CHALLENGE','🏆','An extra, optional challenge.'],['DEBUG','🐞','Find and fix a bug on purpose.'],['SYSTEM-TEST','🧪','Test the whole project from start to finish.']].map(t => `<button class="oq" data-oq><b>${t[1]} ${t[0]}</b><span>${t[2]}</span></button>`).join('')}</div>`,

seeing:() => `
  <p class="p">Because there’s no slide to remind you, keeping the structure of the lesson is now in your hands. Quality reviews look at each lesson as a whole: the <b>warm-up</b>, the <b>lesson goal</b>, the <b>practice</b>, the <b>questions</b> you ask, the <b>recap</b>, the <b>homework</b> and the <b>preview</b> of the next lesson.</p>
  <p class="p">Lessons with the new model are usually lively and engaging. The challenge is not to lose the structure along the way — especially at the start and at the end of the lesson:</p>
  <div class="okbad">
    <div class="ok"><h3>💚 Keep doing</h3><ul><li>Involving several students.</li><li>Calling students by name.</li><li>Giving real practice time.</li></ul></div>
    <div class="bad"><h3>💗 What to reinforce</h3><ul><li>The warm-up and greeting.</li><li>The homework check.</li><li>Questions that make students explain their reasoning.</li><li>The recap at the end.</li><li>The teaser for the next lesson.</li></ul></div>
  </div>
  <p class="p" style="margin-top:16px">These are habits, and habits can be built. The rest of this module gives you three: a proper opening, reasoning questions addressed to specific students, and a fixed closing routine.</p>`,

opening:() => `
  <p class="p">A proper opening takes only a few minutes, and it sets up everything that follows: students feel welcome, remember where their project stands and show what they did at home, and know what today’s lesson is aiming for. It has four parts. Go through each one — with real phrases you can use, and a video of a real lesson:</p>
  ${stc('open')}
  ${callout('tip', '⏱️', 'Keep it short: <b>about 5–7 minutes</b> for the four parts together. A lesson that starts with a connection runs better — not slower.')}`,

reasoning:() => `
  <p class="p">“Is it clear?” almost always gets a “yes” — and tells you nothing. The questions that work are the ones that make a student <b>explain their reasoning</b>: why something happens, how they know, what would change if… And they work best when you <b>address them to a specific student, by name</b>.</p>
  <div class="card">
    <div class="wh"><b>Closed or reasoning? Switch and compare</b><span class="tag">Try it</span></div>
    <div class="seg" data-cmp="questions"><button data-k="v" aria-pressed="true">😐 Closed</button><button data-k="s" aria-pressed="false">🧠 Reasoning</button></div>
    <div class="fbx" data-cmpout="questions"></div>
  </div>
  <h3 class="subh">🎯 Which questions make students think? Decide for each one</h3>
  <div class="sorter" id="sorter">${[
    ['🙋','“Leo, how did you make the coin disappear when the player touches it?”','yes','<b>Yes.</b> A name plus a “how”: Leo has to explain the logic in his own words.'],
    ['🙂','“Everybody OK? Shall we continue?”','no','<b>No.</b> A group yes/no question — nobody needs to think to answer.'],
    ['🔍','“Ana, what do you think will happen if we remove this line? Try it and tell us.”','yes','<b>Yes.</b> She predicts, tests and explains — the Learning Loop in one question.'],
    ['✅','“Is it clear how the score works?”','no','<b>No.</b> You’ll get a “yes” whether it’s clear or not. Ask someone to explain it instead.']
  ].map(r => `<div class="srow" data-ans="${r[2]}"><span class="sei">${r[0]}</span><span class="stx">${r[1]}</span><span class="sbtns"><button data-pick="yes">🧠 Makes them think</button><button data-pick="no">😐 Doesn’t</button></span><span class="sfb">${r[3]}</span></div>`).join('')}</div>
  ${callout('good', '💡', 'Spread the questions around: different students, different moments — during the checkpoint, while they build, and in the recap.')}`,

closing:() => `
  <p class="p">The end of the lesson is often set aside — because time runs out, or because it doesn’t seem as important as finishing the activity. But it’s the moment students put into words what they learned, get curious about the next lesson and leave knowing what to do at home. With good time management, you can make it happen in every lesson: reserve the <b>last 5–7 minutes</b> for a <b>fixed closing routine</b>, and start it on time even if the activity isn’t finished. It works the same whatever the length of your lessons: choose one and drag through it:</p>
  <div class="tline" id="tline">
    <div class="seg" id="tlLen" style="margin-bottom:12px"><button data-len="60" aria-pressed="true">⏱️ 60-minute lesson</button><button data-len="90" aria-pressed="false">⏱️ 90-minute lesson</button></div>
    <div style="display:flex;align-items:center;gap:14px;flex-wrap:wrap"><span class="clock" id="tlClock">0′</span><input type="range" min="0" max="60" value="0" id="tlRange" style="flex:1;min-width:220px" aria-label="Minute of the lesson"></div>
    <div class="tl-bar"><div class="tl-open" id="tlOpen">Opening</div><div class="tl-main" id="tlMain">Cards: build, explore, fix, show</div><div class="tl-close" id="tlClose">Closing</div><span class="tl-head" id="tlHead" style="left:0"></span></div>
    <div class="tl-scale" id="tlScale"></div>
    <div class="tl-out" id="tlOut"></div>
  </div>
  <p class="p" style="margin-top:18px">The routine has three steps. Go through them — each one with a video of a real lesson:</p>
  ${stc('close')}
  ${callout('warn', '⏰', '<b>A trick that works:</b> set a timer for <b>5–8 minutes before the end</b> of the lesson. When it rings, you close — wherever you are. An unfinished card can continue next lesson or as part of the homework.')}`,

metrics:() => `
  <div class="defn"><span class="de">📈</span><p><b>The slides are gone — the structure is not.</b> Remember that lesson structure is closely connected to important metrics like <b>attendance</b>, <b>retention</b> and <b>homework submission</b>. Reminding students about homework, explaining and reviewing it, doing a warm-up and a wrap-up, explaining the lesson objectives, and previewing the next lesson all contribute to student engagement, retention and attendance.</p></div>
  <h3 class="subh">Three metrics, three concrete habits</h3>
  <div class="trio">
    <div class="ti"><span class="tie">🗓</span><h3>Attendance</h3><p>Mark it at the start, during the warm-up, while students are settling in. Do not leave it for the end of the class, when you are wrapping up and likely to forget.</p></div>
    <div class="ti"><span class="tie">📚</span><h3>Homework</h3><p>Since homework is now “the next iteration of the same project”, check it inside the previous-lesson checkpoint. If a student has nothing, that is your signal to look at whether they got stuck technically, not just to record a zero.</p></div>
    <div class="ti"><span class="tie">💚</span><h3>Retention</h3><p>A student who stops publishing to Sparks, or stops handing in their work, is usually disengaging before they stop attending. Those two signals are your earliest warning.</p></div>
  </div>
  ${callout('warn', '⚠️', '<b>Remember:</b> in activities where students send text, links or files, their work is only recorded when they click <b>“Send”</b>. A class that felt great can still show up as zero classwork completion. Make this reminder part of your closing routine.')}`,

qcheck:() => `
  <p class="p">Here’s everything from this module as one checklist. Keep it next to you during your first lessons, until it becomes a habit:</p>
  <div class="card"><div class="wh"><b>✅ My lesson-quality checklist</b><span class="tag">Tick them off</span></div>
    <div class="ckgroup">☑️ Before your lesson</div>
    <div class="cklist">${['I read the teacher notes for this lesson in Back Office.','I read <b>the next</b> lesson too, so I can build anticipation at the close.','I opened the finished result I will show at the start (video, GIF or working project).','I know which single AI step this lesson allows, and its scope limit.','I know where the backup template is, in case a project breaks.','I have a plan for marking attendance during the warm-up.','I will remind students to click <b>“Send”</b> in the activities that need it before we close.'].map((t, i) => `<button class="ck" data-ck="b${i}"><span class="ckb"></span><span>${t}</span></button>`).join('')}</div>
    <div class="ckgroup">🎬 Opening</div>
    <div class="cklist">${['I greet every student by name and do a short warm-up.','I link today’s lesson to the previous one.','I check the homework and name one specific thing that went well.'].map((t, i) => `<button class="ck" data-ck="o${i}"><span class="ckb"></span><span>${t}</span></button>`).join('')}</div>
    <div class="ckgroup">🧠 During the lesson</div>
    <div class="cklist">${['I ask reasoning questions to specific students, by name.','I keep involving several students and give real practice time.','I keep an eye on the time so the closing starts on time.'].map((t, i) => `<button class="ck" data-ck="d${i}"><span class="ckb"></span><span>${t}</span></button>`).join('')}</div>
    <div class="ckgroup">🏁 Closing — last 5–7 minutes</div>
    <div class="cklist">${['Students do the recap: they say what they learned.','I give a motivating teaser for the next lesson.','I explain the next homework and how to hand it in.'].map((t, i) => `<button class="ck" data-ck="c${i}"><span class="ckb"></span><span>${t}</span></button>`).join('')}</div>
  </div>`
};
