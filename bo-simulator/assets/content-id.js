/* ============================================================
   Backoffice simulation · INDONESIAN content
   Translate only the text inside quotes / backticks. Keep HTML tags, ${...} placeholders, keys, ids, file names and URLs unchanged.
   ============================================================ */
window.CONTENT = { lang: 'id' };

/* ---------- PAGE CHROME, BO SCREENS, TOASTS ---------- */
CONTENT.ui = {
  pageTitle:'Model Pendidikan Baru — Simulasi BO — Pelatihan Kodland',
  simBadge:'🧪 SIMULASI — Pelatihan Kodland (data fiktif)',
  tourBtn:'🚀 Mulai tur terpandu',
  tourMinimize:'Perkecil ▾', tourResume:'📍 Lanjutkan tur terpandu',
  stepOf:'Langkah {n} dari {total}', nextArrow:'Berikutnya →', finish:'Selesai ✓',
  groupsTitle:'Groups', tabExtra:'Extra Lessons', tabParallel:'Parallel Groups', tabRegular:'Regular Groups',
  emptyRegular:'Tidak ada grup yang ditampilkan dalam simulasi ini — buka <b>Courses</b> di menu samping.',
  colID:'ID', colTitle:'Title', colTutor:'Tutor', colType:'Type', colCurrentCourse:'Current course', colStart:'Start',
  colStudentsPaid:'Students/Paid', colPreviousLesson:'Previous lesson', colNextLesson:'Next lesson', colPremium:'Premium',
  containerType:'Group', no:'No', yes:'Yes',
  itemsPage100_1:'Items per page: 100 &nbsp;|&nbsp; 1-1 of 1', itemsPage10_4:'Items per page: 10 &nbsp;|&nbsp; 1-4 of 4',
  itemsPage100_19:'Items per page: 100 &nbsp;|&nbsp; 1-9 of 9',
  backToGroups:'Back to Groups', backToCourses:'Back to Courses', backToAssignments:'Back to Assignments',
  tutorLabel:'Tutor:', openConsoleTip:'Open console', colLessonTime:'Lesson time', colCourse:'Course', colNextTopic:'Next lesson topic',
  simOpenCourseFromDetail:'Dari sini Anda juga bisa membuka data kursus',
  teacherName:'Demo Teacher', teacherCountry:'🌎 LatAm',
  profileTitle:'Profile', teacherCoursesH:'Teacher courses', availabilityH:'Availability hours', notAssigned:'Not assigned',
  groupsTabLbl:'Groups', scheduleTabLbl:'Schedule', regularGroupsNote:'Daftar grup Anda.',
  currentWeek:'Current Week', available:'Available',
  days:['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
  coursesTitle:'Courses', colBusinessBranch:'Business branch', colActive:'Active', colNumberOfLessons:'Number of lessons',
  badgeActive:'Active', fieldBranch:'Business branch: ENG', fieldLanguage:'Language: English 🇬🇧', fieldCourseType:'Course type: Paid courses',
  fieldCourseGroup:'Course group: Code & Game lvl 1', fieldLessons:'Number of lessons: 40', fieldModules:'Number of modules: 10',
  fieldExcluded:'Excluded from overbooking: No', fieldCertificate:'Certificate: —',
  lessonsTab:'Lessons', assignmentsTab:'Assignments', moduleFirstSteps:'M1. Creator Lab: misi pertama', viewAssignments:'View assignments →',
  colNo:'Nº', colActions:'Actions',
  lessonSelectLbl:'Lesson', lessonOption:'L1. Dance Party: menghidupkan panggung',
  inClassH:'In-class assignments', homeworkH:'Homework assignments', studyGuidesH:'Study guides',
  colNumber:'Number', colAssignmentTitle:'Assignment title', colTheory:'Theory', colProject:'Project', colMaxScore:'Max score',
  interactive:'INTERACTIVE', noData:'No data available',
  noWikiNote:'Tidak ada tautan wiki di sini — dan itu memang disengaja. Di kursus dengan model pendidikan baru, panduan untuk tutor ada di dalam aktivitas itu sendiri, dalam bentuk Teacher Notes, bukan sebagai dokumen wiki terpisah.',
  modalGroups:'GROUPS', modalExit:'Exit', modalOpenConsole:'Open Console',
  toastConsoleDetail:'🔗 Tombol ini membuka tautan Classroom untuk grup ini.',
  toastConsoleModal:'🔗 Ini tautan Classroom yang sama, dibuka dari Schedule Anda.',
  toastSimClick:'🧪 Ini adalah simulasi — di BO yang asli, tombol ini akan menjalankan: “{label}”.',
  toastBlocked:'👉 Ikuti langkah yang disorot untuk melanjutkan — tur terpandu wajib diikuti saat pertama kali.',
  reflect:'🎉 <strong>Tur terpandu selesai!</strong> Sekarang Anda tahu cara membuka kursus model baru dari Courses, di mana pelajaran dan aktivitasnya berada, mengapa tidak ada tautan wiki, dan di mana menemukan Teacher Notes di dalam setiap aktivitas. Silakan lanjut menjelajahi replika ini sendiri.',
  /* Assignment titles in the "In-class assignments" table (same order as the rows) */
  inClass:['Mulai misi pertama Creator Lab! 💃','Selamat datang di Creator Lab! 👋','Ayo saling berkenalan! 🎤','Kesepakatan tim kreatif 🤝','Pastikan kamu sudah terhubung 📡','Apa itu Creator Lab? ✨','Unduh dan buka proyeknya 📥','Cek apa yang sudah berfungsi 🔎','Cari tahu cara kerja blok 🧩'],
  homework:[]
};

/* ---------- LESSON VIEWER (Teacher Note + student card) ---------- */
CONTENT.lesson = {
  lessonCrumb:'My courses &gt; Mulai misi pertama Creator Lab...', teacherNoteBadge:'👁 Teacher note — hanya tutor yang bisa melihat blok ini',
  lessonTitle:'Persiapan pelajaran · Dance Party: menghidupkan panggung',
  hOverview:'Gambaran umum pelajaran',
  pOverview:'Ini adalah pelajaran pertama program Code & Game lvl 1 (Creator Lab: Games and AI, usia 8–9). Siswa berkenalan dengan Creator Lab, menjelajahi prototipe siap pakai di Scratch, dan membuat pertunjukan Dance Party interaktif mereka sendiri di platform Kodland Sparks. Tujuan utamanya adalah memahami hubungan “peristiwa → aksi → hasil”, cepat mendapatkan proyek yang berfungsi, dan menggunakan AI secara aman sebagai asisten kreatif.',
  hMission:'Misi cerita pelajaran',
  pMission:'Siswa memasuki laboratorium kreatif rahasia, Creator Lab. Misi pertama mereka adalah “Hidupkan panggung digital”: menggunakan kode dan AI untuk membuat pertunjukan tari di mana tombol keyboard memicu gerakan, suara, pergantian kostum, dan efek visual.',
  hGoal:'Tujuan utama pelajaran',
  pGoal:'Bantu setiap siswa membuat pertunjukan interaktif versi mereka sendiri dan menjelaskan dengan kata-kata sederhana bagaimana sebuah peristiwa — menekan tombol — memicu aksi karakter dan memunculkan hasil yang terlihat.',
  hResult:'Hasil utama',
  resultItems:['Proyek Dance Party berjalan dan berfungsi di Scratch di dalam Kodland Sparks.','Pertunjukan berisi karakter dan musik pilihan siswa, ditambah latar belakang yang dibuat dengan bantuan AI.','Karakter merespons penekanan tombol dengan gerakan, pergantian kostum, suara, atau efek.','Siswa mempresentasikan proyeknya dan menjelaskan setidaknya satu hubungan “peristiwa → aksi → hasil”.'],
  calloutLbl:'Sebelum mengajar', callout:'Tonton video pelajaran di bawah ini dan baca catatan di setiap kartu — panduan untuk seluruh pelajaran ada di sini, bukan di wiki.',
  videoTag:'PELAJARAN 1', videoTitle:'Creator Lab: Dance Party — hal yang perlu difokuskan',
  videoDesc:'Pelajaran pertama dijelaskan untuk tutor: tujuannya, alur deduktifnya, dan momen-momen yang memerlukan perhatian Anda. ▶',
  hRole:'Peran tutor',
  pRole1:'Perkenalkan siswa pada cerita Creator Lab dan tunjukkan pertunjukan tari yang sudah jadi sebagai acuan hasil akhir. Bimbing mereka mulai dari menjelajahi prototipe hingga memilih karakter, musik, dan latar belakang buatan AI, serta membuat setidaknya dua reaksi untuk tombol yang berbeda.',
  pRole2:'Dukung siswa dengan pertanyaan klarifikasi, petunjuk singkat, dan apresiasi atas kreativitas, keputusan mandiri, serta kesalahan yang berhasil mereka perbaiki. Awasi penggunaan Sandbox Spark dan AI Buddy agar tetap aman, <b>tanpa membiarkan AI membangun mekaniknya menggantikan siswa.</b>',
  hFocus:'Pendekatan metodologis',
  pFocus1:'Mulailah dengan menunjukkan hasil akhir dan menjelajahi prototipe siap pakai. Kenalkan teorinya melalui pengamatan: siswa menekan tombol, melihat reaksi karakter, lalu merumuskan hubungan “peristiwa → aksi → hasil”.',
  pFocus2:'Jalankan Learning Loop: <b>tujuan → percobaan → kesulitan → dukungan → perbaikan → unjuk karya → refleksi.</b> Sampaikan bahwa kesalahan adalah bagian normal dari proses kreatif.',
  pFocus3:'Biarkan siswa memilih karakter, musik, gerakan, efek, kalimat permintaan untuk AI, dan latar belakang buatan AI. Keputusan akhir tentang proyek harus ada di tangan mereka.',
  hImportant:'Poin penting',
  importantItems:['Gunakan instruksi singkat, banyak dukungan visual, dan satu aktivitas per kartu.','Pastikan siswa sudah menambahkan setidaknya dua reaksi berbeda terhadap penekanan tombol dan sudah menguji masing-masing reaksi.','Jangan menambahkan skor, kondisi menang atau kalah, variabel, kondisi yang kompleks, list, clone, atau pesan antar-sprite.','Pastikan permintaan ke AI tidak memuat data pribadi dan hanya dibuat di dalam lingkungan Kodland Spark yang aman.'],
  hEnding:'Penutup pelajaran',
  pEnding:'Adakan sesi unjuk karya singkat. Minta siswa menjelaskan tombol mana yang memicu aksi pilihan mereka, dan memberi umpan balik dengan rumus: “Aku suka… Aku akan menambahkan…”. Akhiri dengan pengecekan mandiri atas proyek mereka.',
  hNext:'Pelajaran berikutnya',
  pNext:'Di pelajaran M01L02, “Portal Guardian: sang pahlawan dan kristal”, siswa akan mulai membuat mekanik game pertama mereka: menggerakkan karakter dan mengumpulkan objek.',
  studentTitle:'Mulai misi pertama Creator Lab! 💃',
  studentLead:'Kamu akan menghidupkan sebuah panggung digital dan membuat pertunjukan tarimu sendiri yang bereaksi saat kamu menekan tombol-tombol yang berbeda.',
  hEquip:'⌨️ Cek perlengkapanmu', equipItems:['Cek keyboard-mu: kamu akan menggunakannya untuk mengendalikan pertunjukan tari.'],
  hSpace:'✨ Siapkan tempat kerjamu', spaceItems:['Duduklah dengan posisi yang nyaman untuk mengerjakan proyek dan menggunakan keyboard.','Bersiaplah untuk memilih karakter, musik, gerakan, dan latar belakang panggungmu.'],
  tipLbl:'💡 Misi hari ini', tipBody:'Jelajahi pertunjukan tari yang sudah berfungsi, lalu ubah menjadi milikmu sendiri: karaktermu, musikmu, latar belakangmu, dan gerakanmu.'
};

/* ---------- GUIDED TOUR STEPS (same order as STEPS in the page) ---------- */
CONTENT.steps = [
  {title:'1 · Buka kursusnya',body:'Untuk melihat konten sebuah kursus, Anda masuk melalui <b>Courses</b>, bukan melalui Groups. Klik <b>[2063] Code &amp; Game. Level 1</b>.'},
  {title:'2 · Data kursus',body:'Cabang bisnis, bahasa, jumlah pelajaran dan modul — kolom yang sama seperti di kursus mana pun. Model baru tidak mengubah cara sebuah kursus didaftarkan di BO.'},
  {title:'3 · Buka Assignments',body:'Klik tab <b>Assignments</b>.'},
  {title:'4 · Aktivitas pelajaran',body:'Kartu-kartu interaktif inilah yang MENJADI konten pelajaran — instruksi, tips, gambar, dan video, semuanya ada di dalam setiap kartu. Tidak ada presentasi terpisah untuk mengajar.'},
  {title:'5 · Tidak ada tautan wiki — memang disengaja',body:'Tabel <b>Study guides</b> kosong. Itu bukan bug: dalam model baru, panduan untuk tutor ada di dalam aktivitas itu sendiri dalam bentuk Teacher Notes — bukan sebagai dokumen wiki terpisah.'},
  {title:'6 · Buka aktivitas pertama',body:'Klik <b>Mulai misi pertama Creator Lab!</b> untuk melihat seperti apa sebuah Teacher Note dari dalam.'},
  {title:'7 · Catatan tutor, langsung di dalam kartu',body:'Tidak ada tab “tutor” yang terpisah — ini adalah kartu yang sama, yang bisa digulir. Blok dengan bingkai oranye bergaris putus-putus ini adalah <b>Teacher Note</b>. Kartu pertama dalam sebuah pelajaran memiliki catatan paling lengkap: gambaran umum, misi cerita, tujuan, peran Anda, metode, poin penting, penutup, dan pelajaran berikutnya. Hanya tutor yang bisa melihat blok ini.'},
  {title:'8 · Gulir ke bawah: apa yang dilihat siswa',body:'Tepat di bawahnya, di kartu yang sama, ada tampilan yang benar-benar dilihat siswa: misi dan daftar periksa untuk bersiap. Tidak ada Teacher Note, tidak ada tombol pengalih — platform memang tidak pernah menampilkan blok tersebut ke akun siswa.'}
];

/* ---------- FINISH SCREEN (completion code overlay) ---------- */
CONTENT.done = {
  title:'Simulasi selesai!',
  body:'Anda sudah menyelesaikan tur BO: membuka kursus model baru, melihat assignments-nya, memahami mengapa tidak ada wiki, dan menemukan Teacher Notes di dalam setiap aktivitas.',
  codeLabel:'🔑 Kode penyelesaian Anda',
  codeHint:'Masukkan kode ini di pelatihan untuk menyelesaikan simulasi ini.',
  nextStep:'<b>Langkah berikutnya:</b> salin kodenya, tutup tab ini, dan kembali ke pelatihan.',
  stay:'Lanjut menjelajah',
  close:'Tutup dan kembali ke pelatihan',
  closedMsg:'<b>Anda bisa menutup tab ini sekarang</b> dan melanjutkan di tab pelatihan.'
};
