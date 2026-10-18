/* ============================================================
   EM lesson guide (Classroom) · ENGLISH content
   Translate only the text inside quotes / backticks. Keep HTML tags, ${...} placeholders, keys, ids, file names and URLs unchanged.
   ============================================================ */
window.CONTENT = { lang: 'en' };

/* =========================================================
   INTERFACE STRINGS (page title, replicated Classroom, guide card)
   ========================================================= */
CONTENT.ui = {
  title: 'EM Lesson Guide',

  // Classroom header
  headerTitle: 'Creator Lab · Lesson',
  online: '2 online',
  guideChip: 'EM lesson guide',
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
  tutorYou: 'Tutor (you)',
  following: 'Following the teacher',

  // Lesson platform header shown inside Assignments
  platformLang: 'EN ˅',
  platformUser: 'Tutor',

  // Shared pieces of the lesson cards
  teacherNotes: 'Teacher notes',
  submit: '✔ Submit',
  choose: 'Choose…',

  // Guide card (coach)
  coachStep: (n, total) => `EM lesson guide · ${n}/${total}`,
  next: 'Next →',
  clickHint: '👆 Click the highlighted element',
  openSections: (opened, total) => `Open every section (${opened}/${total})`,
  scrollEndNotes: 'Scroll to the end of the notes',
  scrollEndCard: 'Scroll to the end of the card'
};

/* =========================================================
   WELCOME PAGE
   ========================================================= */
CONTENT.welcome = {
  kicker: 'New Educational Model · Tutor training',
  title: 'EM lesson <span>guide</span>',
  lead: 'This guide shows you what a lesson of the <b>new educational model (EM)</b> looks like in Classroom. It uses the first cards of a real EM lesson — <b>Creator Lab: Dance Party</b> — and a student, Sofia, who is already in the classroom.',
  seeTitle: 'What you’ll see',
  see: [
    'How an <b>EM lesson</b> is organised: a series of cards, with all the guidance inside the lesson.',
    'What the <b>tutor sees</b> and what <b>Sofia sees</b>: the <b>Teacher notes</b> live inside each card, and only the tutor can see them.',
    'The <b>first Teacher notes</b>, the most detailed of the lesson: goals, your role and, in the first lesson of a course, an explanatory video.',
    'How to <b>Lead the group</b>, so that the students follow the card you open.'
  ],
  howTitle: 'How to use it',
  howText: 'This is a guide, not a practice simulation: there are no decisions to make and nothing to lose. Just follow the highlighted steps and click where the guide tells you to. You can replay it as many times as you want.',
  start: 'START THE GUIDE →'
};

/* =========================================================
   LESSON CONTENT (Creator Lab: Games and AI, ages 8-9 — M01L01 "Dance Party")
   The lesson cards, as they appear in Classroom. Each card: title (shown in the
   Assignments list and above the card) + html (built with the page's helpers:
   tnotes = Teacher notes box, spoiler = collapsible section, test = quiz,
   group = matching pairs, sblock = Scratch block, example, essay = answer box,
   linkBtn = button). P.xxx are image paths: keep them as they are.
   ========================================================= */
CONTENT.activities = ({ P, tnotes, spoiler, media, banner, ul, ol, test, group, sblock, example, essay, linkBtn }) => [
  { title:'Start the first Creator Lab mission! 💃', html:
    tnotes(`
      <h1>Preparing for the lesson</h1>
      <h1>Dance Party: bringing the stage to life</h1>
      <h2>Lesson overview</h2>
      <p>This is the first lesson of the “Creator Lab: Games and AI, ages 8–9” programme. Students will get to know Creator Lab, explore a ready-made prototype in Scratch and create their own interactive Dance Party show on the Kodland Spark platform.</p>
      <p>The main goal of the lesson is to understand the “event → action → result” relationship, get a working project quickly and use AI safely as a creative assistant.</p>
      ${spoiler('Lesson story mission', '<p>The students enter the secret creative lab, Creator Lab. Their first mission is “Bring the digital stage to life”: use code and AI to create a dance show where keys trigger movements, sounds, costume changes and visual effects.</p>')}
      ${spoiler('Main lesson goal', '<p>Help each student create a personalised interactive show and explain in simple words how an event — pressing a key — triggers a character action and produces a visible result.</p>')}
      ${spoiler('Key result', ul(['The Dance Party project runs and works in Scratch inside Kodland Spark.','The show includes a character and music chosen by the student, plus a background created with the help of AI.','The character responds to a key press with a movement, a costume change, a sound or an effect.','The student presents their project and explains at least one “event → action → result” relationship.']))}
      <div class="tn-video"><iframe src="${P.video}" allow="autoplay; fullscreen" allowfullscreen loading="lazy" title="Lesson video"></iframe></div>
      <h2>The tutor’s role</h2>
      ${ul(['Introduce the students to the Creator Lab story and show the finished dance show as a reference for the final result.','Guide the students from exploring the prototype to choosing the character, the music and the AI-made background, and creating at least two reactions to different keys.','Support the students with clarifying questions, short hints and recognition for their creativity, their independent decisions and the mistakes they manage to fix.','Supervise the safe use of Sandbox Spark and AI Buddy, without letting the AI build the mechanics instead of the student.'])}
      ${spoiler('Methodological approach', '<p>Start by showing the final result and exploring the ready-made prototype. Introduce the theory through observation: the student presses a key, sees the character’s reaction and formulates the “event → action → result” relationship.</p><p>Keep the Learning Loop: goal → attempt → difficulty → support → improvement → showcase → reflection. Present mistakes as a normal part of the creative process.</p><p>Let the student choose the character, the music, the movements, the effects, the wording of the AI request and the AI-made background. The final decisions about the project must be theirs.</p>')}
      ${spoiler('Important points', ul(['Use short instructions, plenty of visual support and a single activity per card.','Check that the student has added at least two different reactions to key presses and has tested each one.','Do not add scores, win or lose conditions, variables, complex conditions, lists, clones or messages between sprites.','Check that the AI requests contain no personal data and are created only inside the safe Kodland Spark environment.','If the student cannot move forward after two or three attempts, show the block they need or suggest a simple template: “When I press a key, my character…”.']))}
      <h2>Lesson closing</h2>
      <p>Hold a short showcase of the projects. Ask the students to explain which key triggers the action they chose, and to give feedback using this formula: “I liked… I would add…”.</p>
      <p>End the lesson with a project self-check and reinforce the main idea: interactivity appears when an event triggers an action and produces a visible result.</p>
      <h2>Next lesson</h2>
      <p>In lesson M01L02, “Portal Guardian: the hero and the crystals”, the students will start creating their first game mechanic: moving the character and collecting objects. They will meet the concepts of “goal”, “rules” and “visible progress” within a game.</p>
      <h3>As a next step, review the teacher notes that appear in each activity of the lesson.</h3>`, 'tn-first') +
    banner(P.startBanner) +
    `<h1>Start the first Creator Lab mission! 💃</h1>
     <blockquote><p>You will bring a digital stage to life and create your own dance show that reacts when you press different keys.</p></blockquote>
     <h3>Check your equipment</h3>` +
    ul(['Check your keyboard: you’ll use it to control the dance show.']) +
    `<h3>Get your workspace ready</h3>` +
    ul(['Sit so that you can work comfortably on the project and use the keyboard.','Get ready to choose your character, your music, your moves and the background of your stage.'])
  },
  { title:'Welcome to Creator Lab! 👋', html:
    banner(P.welcomeBanner) +
    `<h1>Welcome to Creator Lab! 👋</h1>
     <blockquote><p>Creator Lab is the place where ideas become real projects. Today you’ll create your first interactive <strong>Dance Party</strong> show: you’ll bring a character to life, add music and choose the style of your stage.</p></blockquote>
     <hr>` +
    media(P.welcomeImg, '<h3>What will we do today?</h3><p>We’ll get to know each other, open the project base and turn it into your own dance show with moves, music and a background created with the help of AI.</p>') +
    `<hr>
     <h3>Do a quick check</h3>` +
    ul(['I can see and hear the tutor;','I’m ready to take part with my voice or in the chat;','the class tab is open and ready to use.']) +
    tnotes(`<p><strong>Time:</strong> 3 minutes.</p><p><strong>Card objective:</strong> give the group a warm welcome and get the students ready for the lesson and the Dance Party topic.</p><p><strong>What the tutor should do:</strong> introduce yourself briefly and explain the Dance Party mission.</p><p><strong>Pay attention to:</strong> avoid spending time on setting up Classroom or explaining the rules in detail. That will be covered in the next cards.</p>`)
  },
  { title:'Let’s get to know each other! 🎤', html:
    banner(P.meetBanner) +
    `<h1>Let’s get to know each other! 🎤</h1>
     <blockquote><p>Every creator has their own style: some love high-energy dances, others prefer space, music or magical effects. Let’s find out what ideas our team has!</p></blockquote>` +
    media(P.meetMission, '<h3>Your mission</h3>' + ol(['When the tutor says your name, turn on your microphone.','Introduce yourself.','Tell us what you like best: music, dancing, video games, drawing or stories.','Choose what kind of show you’d like to create today.','When you finish, mute your microphone and listen to everyone else’s ideas.'])) +
    `<h3>What kind of show would you like to create?</h3>
     <p><select class="pick"><option>Choose an answer</option><option>A fun dance party with high-energy music</option><option>A space concert with neon lights</option><option>A magic show with surprising effects</option><option>I have my own idea</option></select></p>` +
    media(P.meetListen, '<h3>While someone else is speaking</h3><p>Listen carefully and leave a reaction if you like their idea or if you chose a similar style.</p>', 'right narrow') +
    `<hr>` +
    tnotes(`<p><strong>Time:</strong> 3 minutes.</p><p><strong>Card objective:</strong> help the students get to know each other, create a trusting atmosphere and connect each student’s first answer to the Dance Party project.</p><p><strong>What the tutor should do:</strong> answer first with a short introduction: name, favourite creative activity and show style. Give the floor following a clear order and point out the similarities between the students’ answers.</p><p><strong>Pay attention to:</strong> don’t ask for long answers. The student can just say their name and choose an option in the selector. If the group is large, limit the answer to one short sentence.</p>`)
  },

  /* ---------- Rest of the lesson cards (lessons_rest.pdf, in order) ---------- */
  { title:'Creative team agreement 🤝', html:
    banner(P.rulesBanner) +
    `<h1>The rules of our creative team 🤝</h1>
     <blockquote><p>So that everyone can work and take part comfortably, we’ll follow four very simple rules.</p></blockquote>` +
    media(P.rulesGif, '<h3>Our rules</h3>' + ol(['We don’t interrupt others.','We don’t spam the chat.','We aren’t late for class.','We raise our hand if we want to answer or need help.'])) +
    `<img class="center-img" src="${P.rulesPoster}" alt="Poster with the Creator Lab team rules"><hr>
     <h3>Test yourself</h3>` +
    test('Which rules do we follow during the lesson?', ['Don’t interrupt others','Don’t spam the chat','Don’t be late','Raise your hand','Write as many messages as possible in the chat'], true) +
    tnotes(`<p><strong>Time:</strong> 2 minutes.</p><p><strong>Card objective:</strong> quickly reinforce the basic rules for getting along during the lesson.</p><p><strong>What the tutor should do:</strong> briefly read the four rules and ask the students to confirm that they’re ready to follow them, with a reaction or by raising their hand.</p><p><strong>Pay attention to:</strong> don’t spend too long explaining the rules or add new ones. It’s enough to check that the students understand when to raise their hand and how to use the chat.</p><p><strong>Readiness criterion:</strong> the students know the four rules and are ready to move on to the next part of the lesson.</p>`)
  },
  { title:'Check that you’re connected 📡', html:
    banner(P.signalsBanner) +
    `<h1>The team signals 📡</h1>
     <blockquote><p>During the lesson, it’s important to let the tutor know quickly if you’re ready to answer, want to ask a question or need help. Let’s practise the three main Classroom signals.</p></blockquote>
     <h3>Complete this mini activity</h3>` +
    group([['Camera','shows that you’re present in the lesson'],['Raised hand','lets you ask to speak or ask for help'],['Chat','lets you answer even if your microphone isn’t working']]) +
    media(P.camIcon, '<h3>Step 1. Check your camera</h3>' + ol(['Find the camera icon in the Classroom bar.','When the tutor tells you, turn it on.','Then turn it off again.']), 'narrow') +
    `<div class="media right narrow"><div class="media-img ui-mock"><div class="mock-tip">Raise hand</div><div class="mock-btns"><span class="on">✋</span><span>☺</span><span>💻</span></div></div><div class="media-c"><h3>Step 2. Raise your hand</h3>${ol(['Open the reactions menu.','Select the raised hand icon.','Remove the reaction when the tutor tells you.'])}</div></div>` +
    media(P.chatIcon, '<h3>Step 3. Send a message</h3>' + ol(['Open the lesson chat.','Write: <strong>Ready for the mission!</strong>','Check that the message appears in the chat.']), 'narrow') +
    spoiler('I can’t find the button I need', ol(['Move the cursor to the bottom of the lesson window.','Check whether the button is inside an extra menu.','Look at the tutor’s screen and compare where the icons are.','If you still can’t find the button, write it in the chat or ask an adult for help.'])) +
    `<h3>My signals work</h3>` + ul(['I know how to turn my camera on and off;','I can raise my hand if I want to answer or ask for help;','I’ve sent the message “Ready for the mission!” in the chat.']) +
    tnotes(`<p><strong>Time:</strong> 2 minutes.</p><p><strong>Card objective:</strong> check that the students know the main Classroom tools and can use them as signals during the lesson.</p><p><strong>What the tutor should do:</strong> first show the three actions on your screen, then do a quick check with the whole group: camera → raised hand → chat message.</p><p><strong>Pay attention to:</strong> don’t stop the whole lesson because of one student’s technical problem. Let them use another way to communicate for now, like the chat instead of the microphone or camera.</p>`)
  },
  { title:'What is Creator Lab? ✨', html:
    banner(P.labBanner) +
    `<h1>What is Creator Lab? ✨</h1>
     <blockquote><p>Creator Lab is a creative lab where you’ll make games, animations and interactive projects. Here we don’t start with long theory, but with an interesting idea and a project base that already works.</p></blockquote>` +
    media(P.labCat, '<h3>This is how we’ll work</h3>' + ol(['We get the project base and explore what already works.','We discover the character, the stage, the sounds and the instructions.','We add our own ideas and personalise the project.','We run it, check the result and keep improving it.'])) +
    `<h3>What you’ll experience during the course</h3>` +
    group([['Code','brings the characters to life and starts the actions'],['Design','helps you create the style of your project'],['AI','suggests ideas and helps create resources'],['Tests','show what works and what can be improved']]) +
    `<h3>The main rule of Creator Lab</h3>
     <blockquote><p>First we create a project that works. Then we discover how it’s made and turn it into a unique version.</p></blockquote>` +
    test('What does work in Creator Lab start with?', ['An interesting project and a ready-made base','A long list of Scratch rules','Memorising all the Scratch blocks']) +
    tnotes(`<p><strong>Time:</strong> 4 minutes.</p><p><strong>Card objective:</strong> explain the Creator Lab way of working in simple words: ready-made base → upload to the lab → exploration → own changes → check.</p><p><strong>What the tutor should do:</strong> briefly explain the project’s journey: first the students will download the ready-made Dance Party template, then upload it to Creator Lab and see which elements already work. After that, they’ll bring the scene to life, personalise the project and check the result.</p><p>You can give this example: “Today we won’t learn all the Scratch blocks at once. First we’ll download a ready-to-use base, open it in Creator Lab, make the scene come alive and then discover which blocks make the character dance.”</p><p><strong>Pay attention to:</strong> avoid explaining the educational model in too much detail. What matters is that the students understand this journey: download the template → open it in Creator Lab → change it → test it → get their own version of the project.</p>`)
  },
  { title:'Download and open the project 📥', html:
    banner(P.dlBanner) +
    `<h1>Download and open the project 📥</h1>
     <blockquote><p>We won’t start from an empty screen. The template already includes a character, music and several ready-made blocks. Download the project and open it in Creator Lab.</p></blockquote>` +
    media(P.dlFile, '<h3>Step 1. Download the template</h3>' + ol(['Click the download button.','Wait until the file appears in the <strong>Downloads</strong> folder.','Remember its name: <strong>Dance Party Starter.sb3</strong>.','Don’t open the file with a double click.'])) +
    linkBtn('Download Dance Party Starter') +
    `<div class="media right"><div class="media-img"><img src="${P.uploadImg}" alt=""></div><div class="media-c"><h3>Step 2. Open Creator Lab</h3>${ol(['Click the button to open Creator Lab - Kodland Sparks.','Wait for Creator Lab to open in a new tab.','Don’t close the tab with the lesson activities.'])}</div></div>` +
    linkBtn('Open Creator Lab') +
    `<h2>Step 3. Upload the project</h2>` +
    ol(['Click the <strong>Studio</strong> button.','Select <strong>Creative mode</strong>.','Open <strong>Slot 1</strong>.','Select the <strong>Scratch</strong> project type.','Wait for the Scratch editor to open.','Click the <strong>Upload .sb3</strong> button.','Select the downloaded file <strong>Dance Party Starter.sb3</strong>.','Wait for the project to appear in the editor.']) +
    `<div class="flow"><span>Studio</span><i>→</i><span>Creative mode</span><i>→</i><span>Slot 1</span><i>→</i><span>Scratch</span><i>→</i><span class="hi">Upload .sb3</span></div>
     <h2>How to work with two tabs</h2>
     <img class="center-img" src="${P.twoTabs}" alt="Two browser tabs: the learning platform and Kodland Sparks">
     <p>Match each tab with what you’ll find in it.</p>` +
    group([['1. Lesson','the activities and instructions are here'],['2. Kodland Sparks - Creator Lab','your project is here']]) +
    spoiler('I can’t find the downloaded file', ol(['Open the <strong>Downloads</strong> folder.','Check the most recently downloaded files.','Check that the file name ends in <strong>.sb3</strong>.','If it isn’t there, download the template again.','If you still have problems, raise your hand.'])) +
    spoiler('Creator Lab didn’t open', ol(['Check whether a new tab opened.','Allow the browser to open a new tab.','Click the button to open Creator Lab again.','If the page doesn’t appear, ask the tutor for help.'])) +
    `<h3>Do a quick check</h3>` + ul(['the Dance Party template is downloaded;','Creator Lab is open in a separate tab;','the project is uploaded and visible in the editor;','the lesson tab is still open.']) +
    tnotes(`<p><strong>Time:</strong> 8 minutes.</p><p><strong>Card objective:</strong> guide the students through the whole technical process: download the ready-made template, open Creator Lab and upload the project file.</p><p><strong>What the tutor should do:</strong> first show the whole process on your screen. Then go through it step by step with the group: download the file, open Creator Lab, select “Upload .sb3” and find the file in the “Downloads” folder.</p><p><strong>Pay attention to:</strong> don’t ask the students to open the file with a double click. The project must be uploaded from the Creator Lab interface. Don’t move on to the next activity until most of the group can see the project in the editor.</p><p><strong>If a student falls behind:</strong> let them raise their hand and help them while the rest of the group continues, without stopping the lesson for too long.</p>`)
  },
  { title:'Check what already works 🔎', html:
    banner(P.chkBanner) +
    `<h1>Check what already works 🔎</h1>
     <blockquote><p>Don’t rush to change the project. First do a little investigation: run Dance Party, check the music and the Space key, and then explore the character from the inside.</p></blockquote>
     <h3>Run the scene</h3>` +
    ol(['Find the <strong>green flag</strong> above the stage.','Click it once.','Listen to whether the music starts playing.','Watch what happens on the stage.']) +
    `<div class="scr-mock"><span class="tab on">Code</span><span class="tab">Costumes</span><span class="tab">Sounds</span><span class="flag">⚑</span><span class="pause">❚❚</span><span class="stop">⬣</span></div>
     <h3>Test the Space key</h3>` +
    ol(['Click on the stage.','Press the <strong>Space</strong> key.','Watch whether the character starts dancing.','Don’t change anything for now; just remember the result.']) +
    `<h3>What did you notice?</h3>
     <p><select class="pick"><option>Choose an answer</option><option>The music works, but the dance doesn’t start when you press Space yet</option><option>The project is empty and has no elements</option><option>The character already does a full dance</option></select></p>
     <h3>Explore the character</h3>` +
    ol(['Find the character below the stage and click it.','Open the <strong>Code</strong> tab.','Look at the coloured blocks that are already in the workspace.','Notice that the blocks already exist, but they’re still separate.','Don’t join them yet; first we’ll discover what each block does.']) +
    example('Investigation result', 'The project base already works: the character is on the stage and the music plays. However, the dance blocks aren’t connected in a single script yet, which is why the Space key doesn’t start the movement.') +
    spoiler('I can’t see the character’s blocks', ol(['Check that you selected the character and not the stage.','Open the <strong>Code</strong> tab.','Look at the workspace, to the right of the block list.','If the blocks still don’t appear, raise your hand and share your screen with the tutor.'])) +
    `<h3>Do a quick check</h3>` + ul(['I ran the project with the green flag;','I checked the music and the Space key;','I selected the character and opened the “Code” tab;','I found the ready-made blocks and haven’t moved them yet.']) +
    tnotes(`<p><strong>Time:</strong> 5 minutes.</p><p><strong>Card objective:</strong> explore the project base and help the students discover the problem they’ll solve later: the music works, but the dance doesn’t start because the ready-made blocks aren’t connected yet.</p><p><strong>What the tutor should do:</strong> guide the exploration with the group: green flag → music → Space key → character → “Code” tab. After testing the Space key, ask the students what they noticed, but don’t show the solution yet.</p><p><strong>Pay attention to:</strong> at this stage the students are only exploring the project. Don’t let them look for new blocks in the categories or build the script too early. All the blocks they need are already inside the sprite.</p>`)
  },
  { title:'Discover how the blocks work 🧩', html:
    banner(P.blocksBanner) +
    `<h1>Discover the secrets of the blocks 🧩</h1>
     <blockquote><p>In front of you are the ready-made instructions for the first dance. Don’t connect them yet. First discover what each block does.</p></blockquote>
     <h3>1. How does the dance start?</h3>` +
    sblock('when <em class="sdd">space ▾</em> key pressed', 'ev', true) +
    `<p>This yellow block waits for you to press the <strong>Space</strong> key. All the instructions connected below it will run when you press it.</p>` +
    test('Where should the Space key block go?', ['At the start of the script','In the middle of the dance','At the end of the script']) +
    `<h3>2. How does the character change pose?</h3>` + sblock('next costume', 'lk') +
    `<p>The <strong>next costume</strong> block changes the character’s appearance. If the sprite has several costumes, the character will take a new pose.</p>
     <p><select class="pick"><option>Choose an answer</option><option>The character changes pose</option><option>The character plays music</option><option>The character disappears from the stage</option></select></p>
     <h3>3. How do you add movement?</h3>` + sblock('turn ↻ <em>15</em> degrees', 'mo') +
    `<p>This block makes the character turn <strong>to the right</strong>.</p>` + sblock('turn ↺ <em>15</em> degrees', 'mo') +
    `<p>This block makes the character turn <strong>to the left</strong>.</p>
     <p>If you use both blocks, the character can turn to one side and then come back to its position.</p>
     <h3>4. What is a pause in the dance for?</h3>` + sblock('wait <em>0.5</em> seconds', 'ct') +
    `<p>The <strong>wait</strong> block makes a short pause between movements. Without that pause, the instructions can run so fast that the dance is hard to see.</p>` +
    test('What happens if you add a pause between the movements?', ['It’ll be easier to see the character’s movements','The project will stop immediately','The character will disappear from the stage']) +
    `<h3>5. How do you make the dance stand out more?</h3>` + sblock('change size by <em>10</em>', 'lk') +
    `<p>The <strong>change size</strong> block can make the character bigger or smaller. Later we’ll add an instruction to return it to its normal size and stop it from growing after every dance.</p>
     <h3>Find the blocks in the project 🔎</h3>` +
    ol(['Look at the separate blocks in the character’s workspace.','Find the yellow block that starts the dance.','Find the block that changes the costume.','Find the turn, pause and size-change blocks.','Don’t move or connect them for now.']) +
    `<h3>Do a quick check</h3>` + ul(['I found the block that starts the dance;','I understood which block changes the character’s pose;','I know what a short pause is for;','I found the movement and size-change blocks;','I haven’t connected the blocks yet.']) +
    tnotes(`<p><strong>Time:</strong> 4 minutes.</p><p><strong>Card objective:</strong> introduce what the ready-made blocks do before building the first dance.</p><p><strong>What the tutor should do:</strong> ask the students to find each block in their project at the same time as it appears in the card. To quickly check what a block does, you can click a single block and watch with the group how the character changes.</p><p><strong>Pay attention to:</strong> don’t turn this card into an explanation of all the Scratch categories. It’s enough for the students to understand one simple idea: the yellow block starts the script, and the instructions connected below it run from top to bottom.</p><p>In this card the students shouldn’t move or connect the blocks. Building the code, the right order of the blocks and the different ways of running it come in the next activity.</p>`)
  },
  { title:'Publish your game 🚀', html:
    banner(P.pubBanner) +
    `<h1>Publish your game 🚀</h1>
     <blockquote><p>Your own game comes to light: send the link.</p></blockquote>
     <h3>Publish</h3>` +
    ol(['In Sparks, click Publish or Share.','Finish publishing and copy the link.','Paste the link below and send your answer.']) +
    `<div class="pub-mock"><span>＋ New project</span><span>⭳</span><span>⭱</span><b>Publish</b></div><hr>
     <h3>Send the link</h3>` +
    essay('Send the link to your finished game “Portal Guardian”', 'Paste the link to your published project here...') +
    spoiler('The link doesn’t open', '<p>Check that publishing has finished and copy the link again. Show your screen to your tutor.</p>') +
    banner(P.doneStrip) +
    tnotes(`<p><strong>Time:</strong> 5 minutes.</p><p><strong>Card objective (SUBMIT):</strong> publish the final version and send the link.</p><p><strong>Tutor actions:</strong> guide step by step anyone who gets stuck on Publish/Share.</p><p><strong>Attention and support:</strong> only the link goes on the platform. Congratulate the students on their premiere.</p><p><strong>Success criterion:</strong> the link opens and leads to the game with WIN and the victory phrase.</p>`)
  },
  { title:'How your game works 🔄', html:
    banner(P.cycleBanner) +
    `<h1>How your game works 🔄</h1>
     <blockquote><p>SELF-CHECK: a short quiz to check that you understand your game’s cycle.</p></blockquote>
     <h3>Hint</h3><p>Goal → action → obstacle → progress → victory</p><hr>
     <h3>Match the pairs</h3>
     <p>On the left there’s a short word. On the right, what it means in your game. Match them correctly.</p>` +
    group([['Goal','Reach the Portal and win'],['Action','Move the Player and collect crystals'],['Obstacle','Dodge the Danger on the way'],['Route sequence','3 crystals → Key → Portal → WIN'],['Victory','The WIN screen with your phrase']]) +
    banner(P.doneStrip) +
    tnotes(`<p><strong>Time:</strong> 4 minutes.</p><p><strong>Card objective (SELF-CHECK):</strong> reinforce the understanding of the cycle through the pairs; it’s not an oral exam.</p><p><strong>Tutor actions:</strong> if there are mistakes, give a single hint using the “Goal → … → victory” line above.</p><p><strong>Attention and support:</strong> in the group exercise the options on the right are shuffled; don’t spend too long on it.</p><p><strong>Success criterion:</strong> the student matched the pairs with no hints or just one.</p>`)
  },
  { title:'Guardians’ Parade 🎉', html:
    banner(P.paradeBanner) +
    `<h1>Guardians’ Parade 🎉</h1>
     <blockquote><p>Show a unique detail of your game and get a kind comment.</p></blockquote>` +
    media(P.paradeImg, '<h3>When you present</h3>' + ol(['Open your published game.','Get to WIN: show the background and your phrase.','Say: “My unique detail is …” (background / phrase / costume / sound).'])) +
    `<hr><h3>When you watch</h3><blockquote><p>“I liked…”</p></blockquote>` +
    example('A kind comment', 'I really liked your AI background in WIN and your victory phrase.') +
    banner(P.doneStrip) +
    tnotes(`<p><strong>Time:</strong> 3 minutes.</p><p><strong>Card objective (PEER-FEEDBACK):</strong> a short presentation, plus the Iteration Award for the best unique detail.</p><p><strong>Tutor actions:</strong> ask for 1 or 2 volunteers; after each one, a comment following the formula.</p><p><strong>Attention and support:</strong> don’t compare projects in public. The Award is for the style or the unique detail.</p><p><strong>Success criterion:</strong> the game was shown and a specific comment was given.</p>`)
  },
  { title:'Mission accomplished 🏆', html:
    banner(P.missionBanner) +
    `<h1>Creator Lab mission accomplished 🏆</h1>
     <blockquote><p>Four lessons, one game of your own. You went all the way from Dance Party to your published “Portal Guardian”.</p></blockquote>
     <h3>Complete a sentence</h3>` +
    ul(['“The coolest thing about my game was…”','“I chose say or speak because…”','“If I keep working on the game, I’ll add…”']) +
    `<hr><h3>End of the module</h3>
     <p><select class="pick"><option>Choose an answer</option><option>I published my game with an AI background, a victory phrase and my unique detail</option><option>I got help, but my game works and is published</option><option>I want to improve WIN once more at home</option></select></p>` +
    banner(P.doneStrip) +
    tnotes(`<p><strong>Time:</strong> 4 minutes.</p><p><strong>Card objective (REFLECT):</strong> record the end of the module and the personal result.</p><p><strong>Tutor actions:</strong> ask 2 or 3 students for a short sentence; congratulate the group.</p><p><strong>Attention and support:</strong> any honest answer in the selector is valid.</p><p><strong>Success criterion:</strong> the student names one of their decisions (background, phrase or unique detail).</p>`)
  },
  { title:'Homework mission 🏠', html:
    banner(P.homeBanner) +
    `<h1>Homework mission 🏠</h1>
     <blockquote><p>Improve WIN and send the updated link.</p></blockquote>
     <h3>Choose an option</h3>` +
    ul(['a new victory phrase or a different voice in Text to Speech;','a simple effect in WIN (for example, change color effect);','try the other method for your phrase: if you used say in class, try speak at home (or the other way round).']) +
    `<blockquote><p>Don’t add a second level, enemies, lives or new mechanics. The way to WIN must work the same as in class.</p></blockquote><hr>
     <h3>Check and send</h3>` +
    ol(['Play until WIN with your phrase.','Publish the updated version.','Paste the link below.']) +
    essay('Send the link to the version you made at home', 'Paste the link to the updated project here...') +
    banner(P.doneStrip) +
    tnotes(`<p><strong>Time:</strong> 3 minutes.</p><p><strong>Card objective (CHALLENGE, SUBMIT):</strong> a simple improvement of WIN made at home.</p><p><strong>Tutor actions:</strong> explain the three options; remind them that they need to send a new link.</p><p><strong>Attention and support:</strong> don’t ask them to use AI again. The mechanics from L2-L3 stay the same.</p><p><strong>Success criterion:</strong> the link opens, WIN is improved and the game can be completed.</p>`)
  },
  { title:'A challenge! 🧩', html:
    banner(P.challengeBanner) +
    `<h1>Challenge: Guardian Creeper 🧩</h1>
     <p>🧩 Challenge</p>
     <blockquote><p>A little guardian Creeper slipped through a portal and got lost among the pixels. Help it by drawing it for the game!</p></blockquote>
     <h2>🏆 Complete the challenge!</h2>
     <p>Sign in to Sparks right here, in the window below, and complete the challenge.</p>
     <p>Make sure you open the challenge in full screen so you can see the instructions.</p>
     <div class="embed-box"><b>Kodland Sparks · Challenge</b><span>The challenge opens here, inside the card.</span></div>` +
    linkBtn('Open the challenge in a separate window') +
    spoiler('🚀 How do I complete the challenge?', ol(['Read the challenge description and look at the picture of the expected result.','Read the required criteria carefully. The AI tutor will accept your work only if you meet all 5 criteria.','Open Pixel Art Studio and draw a Creeper that meets all the criteria.'])) +
    spoiler('✅ How do I hand in my work?', ol(['Don’t forget to click the <strong>Check</strong> button so the AI tutor reviews the file.<div class="check-mock"><span>↺ Start over</span><b>4× 💎 Check</b></div>'])) +
    spoiler('🥳 Work checked successfully', `<p>Excellent! If you met all the criteria, you can collect your reward: click the purple button in the top-right corner 💎</p><img src="${P.rewardBtn}" alt="Button to collect the reward" style="width:60%;max-width:240px">`) +
    spoiler('🛠️ Not all the criteria are met', '<p>You won’t get the crystals until you meet all the criteria.</p><p>But don’t worry 🌿 You can upload your work again after making the corrections.</p><p>The AI tutor will always tell you what to correct and how 🤖❤️</p>') +
    tnotes(`<p><strong>Time:</strong> homework activity, optional (10-15 minutes).</p><p><strong>Card objective:</strong> offer the students who want it extra practice with shading and highlights in Pixel Art, without distracting the rest of the group from the main activity.</p><p><strong>What the tutor should do:</strong> remind them that the activity is optional; in the next lesson, quickly check who managed to complete it and congratulate them.</p>`)
  }
];

/* =========================================================
   GUIDED TOUR STEPS
   Translate title, text and btn. Keep target / accept / read / side / wide / next / last as they are.
   ========================================================= */
CONTENT.guide = [
  { title:'Welcome to the classroom', next:true,
    text:'In the <b>New Educational Model (EM)</b>, everything you need to teach a lesson lives <b>inside the lesson itself</b>, in Classroom. There’s no wiki and no separate document: the guidance for each lesson travels with the lesson cards.<br><br>Let’s open them.' },
  { title:'Open the lesson materials', target:'.tb-group', accept:['openTasks','toggleDropdown'],
    text:'The lesson materials are in <b>Assignments</b>. Click <b>Assignments</b> — it turns blue when your mouse is over it.' },
  { title:'Choose the first card', target:'#dd-0', accept:['pickActivity:0'],
    text:'This is the list of <b>assignments</b> of the lesson, in order. This is the first lesson of a Creator Lab course.<br><br>Click the first one: <b>“Start the first Creator Lab mission!”</b>' },
  { title:'Two views of the same card', next:true, wide:true,
    text:'Before you go on, it’s important to understand <b>what you see</b> and <b>what Sofia sees</b>. You’re both on the same card, but not on the same screen:' +
      `<div class="views">
        <div class="view"><div class="vh">👩‍🏫 What <b>you</b> see</div>
          <div class="mock"><div class="m-tn">Teacher notes<small>only for you</small></div><div class="mk-c">Card content</div></div></div>
        <div class="view"><div class="vh">👧 What <b>Sofia</b> sees</div>
          <div class="mock"><div class="mk-c">Card content</div></div></div>
      </div>` +
      '<ul class="c-list"><li>The box with the <b>orange dashed border</b> is the <b>Teacher notes</b>. They are written <b>inside the card</b>, together with the content.</li><li>Only the tutor sees them. Sofia <b>never</b> sees the Teacher notes — only the card content. Don’t read them out to her.</li><li>Every card has its own notes, so they are the first thing to check before and during each card.</li></ul>' },
  { title:'The first Teacher notes', target:'#taskScroll', side:true, read:{ scope:'#tn-first' },
    text:'The notes of the <b>first card</b> are the most detailed of the lesson: the overview, the goal and key result, your <b>role</b>, <b>important points</b>, how to <b>close</b> the lesson and what comes next.<br><br>In the first lesson of a course there’s usually an <b>explanatory video</b> too: watch it when you prepare.<br><br><b>Open every section</b> and <b>scroll to the end of the notes</b> to continue.' },
  { title:'What Sofia sees', target:'#taskScroll', side:true, read:{},
    text:'Below the notes is the card as <b>Sofia</b> will see it: the banner, the title, the story and the instructions for her.<br><br>Scroll through the <b>whole card</b>. Next unlocks when you reach the end.' },
  { title:'Lead the group', target:'#leadToggle', accept:['toggleLead'],
    text:'Now turn on <b>Lead the group</b>. Only you have this switch — students don’t.' +
      `<div class="lead-demo">
        <div><span class="ld-sw"></span><b>OFF</b> — you move to another card or scroll, and Sofia stays where she was. She may be looking at something else.</div>
        <div><span class="ld-sw on"></span><b>ON</b> — every card you open and every scroll you make, Sofia sees at the same time.</div>
      </div>` +
      'Click the switch — it turns blue when it’s on.' },
  { title:'Sofia is following you', target:'.vt.student', next:true,
    text:'<b>Lead the group</b> is on ✅ Look at Sofia’s picture: it now says <b>Following the teacher</b>.<br><br>From now on:<ul class="c-list"><li>Sofia has the <b>same card</b> open as you, and sees the same scroll position — without the Teacher notes.</li><li>She can click <b>Work independently</b> to explore on her own. She then sees a banner saying where you are, with a <b>Return</b> button.</li></ul>' },
  { title:'Next card', target:'#btnNext', accept:['nextTask'],
    text:'The arrow pointing right takes you to the <b>next card</b>. Because Lead the group is on, Sofia moves with you. Click it.' },
  { title:'Notes in every card', target:'#taskScroll', side:true, read:{},
    text:'This card welcomes the group. Besides the content for Sofia, it has its own <b>Teacher notes</b> at the bottom: they’re shorter than the first ones.<br><br>They usually tell you the <b>time</b> of the card, its <b>objective</b>, <b>what you should do</b> and <b>what to pay attention to</b>.<br><br>Read the card to the end, including the Teacher notes.' },
  { title:'Keep going', target:'#btnNext', accept:['nextTask'],
    text:'Click <b>Next task</b> to go to the next card.' },
  { title:'Interactive elements', side:true, target:'#taskScroll', read:{}, last:true, btn:'Finish ✓',
    text:'Cards can also include interactive elements for the student, like the <b>selector</b> in this card. Sofia answers it on her own copy of the card, while you keep the Teacher notes.<br><br>Scroll to the end of the card and read the Teacher notes: they follow the same structure as in the previous card.<br><br>That’s all you need to know about the EM lesson format!' }
];

/* =========================================================
   FINISH SCREEN (the completion code is added by the page)
   ========================================================= */
CONTENT.finish = {
  kicker: 'Guide complete',
  title: '🎓 This is an EM lesson in Classroom',
  intro: 'You’ve seen how the lessons of the new educational model look in Classroom and how to lead the group:',
  steps: [
    'The lesson is a series of <b>cards</b> in <b>Assignments</b>: all the guidance lives inside the lesson.',
    'The <b>Teacher notes</b> are inside each card and only <b>you</b> see them. Students never do.',
    'The <b>first card</b> has the most detailed notes: goals, your role, key points, closing and next lesson — and in a course’s first lesson, usually an explanatory video.',
    'Each next card has shorter notes: time, objective, what to do and what to watch out for.',
    '<b>Lead the group</b> makes the students follow the card you open and the place where you scroll.'
  ],
  tip: '<b>Tip:</b> read the Teacher notes of the whole lesson <b>before</b> you teach it.',
  codeLabel: '🔑 Your completion code',
  codeHint: 'Copy it into the training to confirm that you completed the guide.',
  back: '← Back to the training',
  closeTab: 'Close this tab to go back to the training, then enter your completion code there.'
};
