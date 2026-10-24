/* ============================================================
   New Educational Model — Tutor training · INDONESIAN content
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
window.CONTENT = { lang: 'id' };

/* ---------------- Interface strings ---------------- */
CONTENT.ui = {
  pageTitle: 'Pelatihan Model Pendidikan Baru',
  footer: 'kodland · Model Pendidikan Baru · Pelatihan tutor',
  devLink: '🛠 Pengembang',

  // Navigation
  logoSub: 'Model Pendidikan Baru',
  navCore: 'Modul {done}/{total}',
  navHome: '← Beranda',
  navModules: '← Semua modul',
  navBackModule: '← Kembali ke modul',

  // Home
  heroKicker: '🚀 Pelatihan tutor',
  heroTitle: 'Model pendidikan <span class="hl">baru</span>',
  heroLead: 'Kodland sedang mengubah cara mengajar di beberapa kursusnya. Pelatihan ini menyiapkan Anda untuk mengajar dengan model baru: {n} modul yang dikerjakan secara berurutan. Setiap modul diakhiri dengan evaluasi singkat yang membuka modul berikutnya.',
  fact1: '<b>Sesuai kecepatan Anda.</b> Progres Anda tersimpan di browser ini.',
  fact2: '<b>Dilengkapi latihan.</b> Tiga simulasi — Backoffice, Classroom, dan Kodland Sparks — yang bisa Anda ulangi sesering yang Anda mau.',
  progAllDone: 'Semua modul selesai 🎉',
  progLabel: 'modul selesai',
  moduleN: 'Modul {n}',
  badgeDone: '✓ Selesai · {score}%',
  badgeLocked: '🔒 Selesaikan Modul {n}',
  badgeStart: 'Mulai →',
  homeDoneTitle: 'Semua modul selesai!',
  homeDoneText: 'Satu langkah terakhir: tes DST di halaman pelatihan LMS.',
  homeDoneBtn: 'Lihat langkah selanjutnya →',

  // Module page and its check
  eyebrow: 'Modul {n} dari {total}',
  ctaQuizTitle: 'Evaluasi modul',
  ctaQuizText: '{n} pertanyaan singkat. Raih skor 70% atau lebih untuk lulus.',
  ctaRiskTitle: 'Evaluasi modul: temukan strategi yang berisiko',
  ctaRiskText: '{n} situasi nyata. <b style="color:#E5484D">Berbeda dari evaluasi lainnya: di setiap kasus, Anda memilih strategi yang justru akan MERUSAK pelajaran</b> — bukan yang baik. Raih skor 70% atau lebih untuk lulus.',
  lockOne: '🔒 Selesaikan {what} dan masukkan kodenya di atas untuk membuka evaluasi.',
  lockMany: '🔒 Selesaikan {what} dan masukkan kode-kodenya di atas untuk membuka evaluasi.',
  listAnd: ' dan ',
  startCheck: 'Mulai evaluasi →',
  retake: '🔁 Ulangi evaluasi',

  // Simulations and completion codes
  launchSteps: ['Buka di tab baru.', 'Ikuti setiap langkah sampai Anda melihat layar penyelesaian dan kode Anda.', 'Kembali ke tab ini dan masukkan kodenya di bawah.'],
  codeOk: '✅ <b>{sim} selesai.</b> Kode diterima.',
  codeLabel: '<b>🔑 Kode penyelesaian</b> — Anda akan menemukannya di layar terakhir {sim}.',
  codePlaceholder: 'contoh: XX-0000-00',
  codeUnlock: 'Buka kunci',
  codeWrong: 'Kode tersebut tidak tepat. Periksa lagi di layar terakhir simulasi.',

  // Small interactive pieces
  tapFlip: 'Ketuk untuk membalik',
  mythReality: 'Faktanya ✓',
  loopAgain: '<b>Lalu ulangi lagi!</b> Refleksi menjadi tujuan berikutnya — satu putaran lebih dalam.',
  ages: 'Usia {age}',
  aiBar: 'Seberapa besar peran AI dalam proyek',
  stageWas: 'Dulu: <s>{was}</s> → sekarang:',
  stageOf: '{i} dari {n}',
  stageWatch: 'Tonton “{t}” di pelajaran sungguhan',
  stageFirst: 'Kembali ke awal',
  next: 'Berikutnya →',
  sortWrong: '✗ Belum tepat.',

  // Follow Mode demo (Module 2)
  fmNotes: '📒 Teacher Notes — hanya Anda yang bisa melihat ini',
  fmFollowing: '🔗 Mengikuti tutor',
  fmStart: '👆 Sofia sedang membuka pelajaran yang sama, tetapi Lead the group belum aktif. Nyalakan sakelarnya.',
  fmOn: '✅ <b>Lead the group AKTIF.</b> Sofia langsung pindah ke kartu Anda — tapi perhatikan: ia melihat kartu itu <b>tanpa</b> Teacher Notes Anda. Sekarang coba tekan <b>Kartu berikutnya</b>.',
  fmOff: '⏸️ <b>Lead the group NONAKTIF.</b> Sofia tetap di posisinya, apa pun yang Anda buka.',
  fmMoved: '➡️ Anda pindah ke kartu {t} — <b>Sofia ikut pindah bersama Anda</b>.',
  fmMovedAlone: '➡️ Anda pindah ke kartu {t}, tetapi <b>Sofia masih di kartu {s}</b>. Bisa jadi ia sedang melihat hal lain. Nyalakan Lead the group.',

  // Closing timeline (Module 3)
  tlOpening: '<b>Pembukaan.</b> Pemanasan dan sapaan, kaitan dengan pelajaran sebelumnya, pengecekan PR, tujuan pelajaran.',
  tlCards: '<b>Kartu-kartu.</b> Siswa membangun, mengeksplorasi, memperbaiki, dan menunjukkan hasilnya. Pantau waktu — tersisa {left} menit…',
  tlClose: '<b>{left} menit sebelum selesai: saatnya menutup.</b> Di kartu mana pun Anda berada, mulailah rutinitas penutup sekarang.',
  tlRoutine: '<b>Rutinitas penutup.</b> Rekap oleh siswa → teaser pelajaran berikutnya → PR berikutnya.',
  tlBye: '<b>Sampai jumpa!</b> Semua siswa meninggalkan kelas dengan mengetahui apa yang sudah mereka pelajari, apa yang akan datang, dan apa yang harus dikerjakan di rumah.',

  // Videos
  watchExample: 'Tonton contoh nyata',
  comingSoon: 'segera hadir',
  close: 'Tutup',
  videoDefault: 'Pelajaran sungguhan',
  soonTitle: 'Video segera hadir',
  soonText: 'Di sini Anda akan menonton bagian pelajaran ini di kelas sungguhan. Videonya sedang disiapkan dan akan segera muncul di sini.',
  zoomBadge: '🔍 Klik untuk memperbesar',
  zoomAria: 'Buka video dalam ukuran lebih besar',
  zoomDefault: 'Video',
  zoomIn: 'Perbesar',
  zoomOut: 'Perkecil',
  zoomReset: 'Atur ulang',
  zoomHint: 'Perbesar dengan + / −, roda mouse, atau klik dua kali · seret untuk menggeser · Esc atau ✕ untuk menutup',

  // Checks (quiz engine)
  qmeta: '{e} Evaluasi Modul {n} · {kind} {i} dari {total}',
  qCase: 'Kasus',
  qQuestion: 'Pertanyaan',
  riskQuestion: 'Mana yang akan <span class="hurt">MERUSAK</span> bagian pelajaran ini?',
  riskBanner: '⚠️ Hati-hati: di evaluasi ini Anda memilih strategi yang <b>SALAH</b> — yang akan <b>MERUSAK</b> pelajaran. Bukan yang baik!',
  tfTrue: '✅ Benar',
  tfFalse: '❌ Salah',
  openHint: '✍️ Tulis jawaban Anda sendiri — minimal {min} karakter. Tidak ada satu rumusan yang paling benar: Anda akan melihat contoh jawaban untuk dibandingkan dengan jawaban Anda.',
  openPlaceholder: 'Ketik jawaban Anda di sini…',
  openSubmit: 'Kirim jawaban saya',
  openRecorded: '✅ <b>Jawaban tersimpan.</b> Contoh jawaban — bandingkan dengan jawaban Anda:',
  fbRight: '✅ <b>Benar!</b> ',
  fbWrong: '❌ <b>Belum tepat.</b> ',
  fbRiskRight: '✅ <b>Benar — itulah strategi yang akan merusak pelajaran.</b> ',
  fbRiskWrong: '❌ <b>Pilihan itu justru membantu pelajaran.</b> Strategi yang berisiko ditandai dengan warna hijau. ',
  nextQuestion: 'Pertanyaan berikutnya →',
  seeResult: 'Lihat hasil saya →',

  // Result of a check
  passedTitle: 'Anda lulus!',
  failTitle: 'Sedikit lagi',
  scoreLine: 'Anda menjawab <b>{score} dari {n}</b> pertanyaan dengan benar.',
  failText: 'Anda memerlukan skor 70% atau lebih. Pelajari lagi modulnya, lalu coba kembali — Anda bisa mengulanginya sebanyak yang diperlukan.',
  nextUnlocked: '<b>Modul {n} · {title}</b> sekarang sudah terbuka.',
  goModule: 'Ke Modul {n} →',
  allDoneText: 'Anda sudah menyelesaikan seluruh pelatihan.',
  seeNext: 'Lihat langkah selanjutnya →',
  reviewModule: '📖 Pelajari lagi modulnya',

  // Final page
  doneTitle: 'Semua modul selesai!',
  doneText: `<p>Anda hampir selesai! Kembalilah ke halaman pelatihan LMS tempat Anda membuka pelatihan ini. Tes DST tersedia tepat di bawah pelatihan.</p>
    <p>👉 <b>Anda wajib mengerjakan dan lulus tes DST agar pelatihan dianggap selesai dengan sukses.</b> Jika Anda tidak mengerjakan tes DST, pelatihan akan tetap berstatus belum selesai dan bisa kedaluwarsa.</p>
    <p>Nilai minimum kelulusan adalah <b>80%</b>.</p>
    <p>Semoga sukses! ❤️</p>`,
  doneBadge: '✓ Selesai',
  doneNexts: [
    ['📒', '<b>Sebelum setiap pelajaran:</b> baca Teacher Notes di Backoffice — dan cek apakah ada pembaruan.'],
    ['🔑', '<b>Kodland Sparks:</b> kredensial Anda diberikan oleh departemen Operasional atau Pengajaran.'],
    ['🏁', '<b>Di setiap pelajaran:</b> pembukaan yang baik, pertanyaan penalaran, dan penutupan 5–7 menit.'],
    ['🤖', '<b>Saat siswa menggunakan AI:</b> AI mengusulkan, kreator yang memutuskan.']
  ],
  doneBack: 'Kembali ke modul',

  // Locked messages
  lockedTitle: 'Masih terkunci',
  lockedModule: 'Selesaikan Modul {n} terlebih dahulu.',
  lockedStep: 'Selesaikan langkah sebelumnya untuk membuka langkah ini.',
  ok: 'OK'
};

/* ============================================================
   MODULES — titles, descriptions, objectives and section names (keep id, n, e, color, check, needs keys)
   ============================================================ */
CONTENT.modules = [
  { id:'m1', n:1, e:'🧩', color:'#C4F046', title:'Metodologi model baru', check:'quiz',
    desc:'Apa itu model baru, pedagogi di baliknya, cara kerja umpan balik, dan cara membimbing siswa menggunakan AI.',
    obj:'Memahami apa itu model pendidikan baru dan apa yang bukan, empat pilar yang menjadi dasarnya, cara kerja umpan balik, dan cara membantu siswa menggunakan AI dengan baik.',
    offer:[['🌱','Memahami model pengajaran yang baru'],['🏛️','Mengenal empat pilar yang membentuk setiap pelajaran.'],['💬','Melihat cara kerja umpan balik dari empat arah.'],['🧭','Memahami bagaimana peran Anda sebagai tutor berubah.']],
    sections:[ ['what','🔍','Apa itu model baru'], ['pillars','🏛️','Empat pilar model'], ['people','💬','Umpan balik dari empat arah'] ] },
  { id:'m2', n:2, e:'🛠️', color:'#3E7BFA', title:'Persiapan Teknis', check:'quiz',
    needs:[['boCode','simulasi BO'],['classCode','panduan Classroom'],['sparksCode','panduan Kodland Sparks']],
    desc:'Backoffice dan Teacher Notes, Classroom dengan Follow Mode, serta Kodland Sparks — dilengkapi tiga simulasi latihan.',
    obj:'Menemukan kursus dan Teacher Notes-nya di Backoffice, menjalankan pelajaran di Classroom dengan Follow Mode, dan mengetahui apa yang dilakukan siswa di Kodland Sparks. Setiap bagian diakhiri dengan simulasi yang memberi Anda kode penyelesaian.',
    offer:[['🗂️','Menemukan semua materi kursus di Backoffice — wiki tidak dipakai lagi.'],['📒','Membaca Teacher Notes dan pembaruannya sebelum setiap pelajaran.'],['🎥','Memahami Follow Mode, kartu aktivitas, dan demonstrasi lewat layar.'],['⚡','Mengenal Kodland Sparks, tempat siswa membuat dan memublikasikan proyek.']],
    sections:[ ['bo','🗂️','Backoffice: rumah bagi kursus'], ['classroom','🎥','Saat pelajaran: kartu, Follow Mode, dan demo'], ['sparks','⚡','Kodland Sparks: studio para siswa'] ] },
  { id:'m3', n:3, e:'⭐', color:'#F03D9E', title:'Kualitas Pelajaran', check:'risk',
    desc:'Bagaimana sebuah pelajaran disusun — dan tiga kebiasaan yang menjaga strukturnya: pembukaan yang baik, pertanyaan penalaran, dan penutupan yang konsisten.',
    obj:'Memahami struktur pelajaran dalam model baru, apa yang dilihat dalam penilaian kualitas, dan membangun tiga kebiasaan yang menjaga struktur itu di setiap pelajaran: pembukaan yang baik, pertanyaan yang membuat siswa menjelaskan penalarannya, dan rutinitas penutup yang konsisten.',
    offer:[['🧱','Memahami struktur pelajaran dalam model baru.'],['🎬','Membuka setiap pelajaran dengan baik: pemanasan, kaitan dengan pelajaran sebelumnya, PR, tujuan pelajaran.'],['🧠','Mengajukan pertanyaan yang membuat siswa tertentu menjelaskan pemikirannya.'],['🏁','Menutup setiap pelajaran dengan rutinitas tetap selama 5–7 menit.']],
    sections:[ ['structure','🧱','Struktur sebuah pelajaran'], ['seeing','🔎','Yang dilihat dalam penilaian kualitas'], ['opening','🎬','Pembukaan yang baik'], ['reasoning','🧠','Pertanyaan yang membuat siswa menyuarakan pikirannya'], ['closing','🏁','Rutinitas penutup yang konsisten'], ['metrics','📊','Yang tetap menjadi tanggung jawab Anda: metrik'], ['qcheck','✅','Daftar periksa kualitas pelajaran Anda'] ] },
  { id:'m4', n:4, e:'🤖', color:'#8B5CF6', title:'Pengenalan prompt untuk tutor', check:'quiz',
    desc:'Satu-satunya keterampilan yang benar-benar baru di kursus-kursus ini. Bukan sisi teknis AI — melainkan cara menulis prompt, dan cara membantu siswa menulis prompt mereka sendiri.',
    obj:'Cukup memahami prompt untuk membimbing siswa saat mereka menulis prompt sendiri di kelas. Fokusnya adalah keterampilan praktis, bukan teori teknis.',
    offer:[['✍️','Memahami apa itu prompt dan apa saja isi prompt yang baik.'],['💻','Menulis prompt untuk membuat dan men-debug kode.'],['🎨','Menulis prompt untuk gambar dan video.'],['⚠️','Menghindari kesalahan yang paling umum.']],
    sections:[ ['why4','💡','Mengapa modul ini ada'], ['whatp','❓','Belajar tentang AI: apa itu prompt?'], ['goodp','🧩','Apa saja isi prompt yang baik?'], ['codep','💻','Tips prompt untuk membuat kode'], ['imgp','🎨','Tips prompt untuk membuat gambar dan video'], ['mistp','⚠️','Kesalahan umum'] ] }
];

/* ============================================================
   Names of the three simulations
   ============================================================ */
CONTENT.sims = { boCode:'Simulasi BO', classCode:'Panduan Classroom', sparksCode:'Panduan Kodland Sparks' };

/* ============================================================
   MODULE CHECKS — "a" is the number of the correct option (0 = first). Keep it as it is.
   ============================================================ */
CONTENT.quiz = {
  m1:[
    { ctx:'Seorang rekan mendengar tentang model pendidikan baru dan merasa khawatir: “Jadi, sekarang semua kursus kita berubah?”',
      q:'Apa jawaban yang tepat?',
      o:['Ya: mulai sekarang semua kursus Kodland mengikuti model baru.',
         'Hanya kursus dengan jumlah siswa lebih sedikit yang akan berubah.',
         'Tidak. Perubahan hanya berlaku untuk grup Anda yang menggunakan model baru. Grup yang sudah Anda ajar dengan kursus lama akan tetap sama, kecuali ada pemberitahuan lain.'],
      a:2, e:'Model baru diperkenalkan secara bertahap. Grup yang sudah belajar dengan format lain tetap menggunakan format tersebut — Anda akan diberi tahu jika salah satu grup Anda berubah.' },
    { ctx:'Anda merencanakan menit-menit pertama pelajaran: menjelaskan konsep baru, menunjukkan tool-nya, lalu membagikan template agar siswa membangun proyeknya.',
      q:'Apa yang salah dengan rencana ini dalam model baru?',
      o:['Tidak ada — konsep harus dijelaskan dulu sebelum siswa bisa menggunakannya.',
         'Rencana ini bersifat induktif. Bukalah dengan hasil akhir yang sudah berfungsi, jelajahi bersama, dan biarkan penjelasan Anda menjawab apa yang sudah diperhatikan siswa.',
         'Sebaiknya AI yang menjelaskan konsepnya, bukan Anda.'],
      a:1, e:'Pembelajaran deduktif membalik urutan lama: tunjukkan hasil yang sudah berfungsi lebih dulu, bedah bersama, lalu jelaskan saat siswa memang sudah membutuhkan jawabannya.' },
    { ctx:'Seorang siswa sudah sepuluh menit mencoba memperbaiki masalah yang sama. Masih belum berhasil, lalu ia berkata: “Aku memang payah soal ini.”',
      q:'Jawaban mana yang sesuai dengan growth mindset dalam model ini?',
      o:['“Tenang, sini saya perbaiki supaya kita bisa lanjut.”',
         '“Yang ini gampang — harusnya kamu sudah bisa.”',
         '“Belum berhasil — itu masalah yang umum, kok. Tunjukkan apa yang sudah kamu coba, lalu kita cari strategi berikutnya.”'],
      a:2, e:'Kesalahan adalah tahap perkembangan yang normal. Sampaikan bahwa itu wajar, lalu kembalikan langkah berikutnya kepada siswa — memperbaikinya untuk mereka justru menghilangkan proses belajarnya.' },
    { ctx:'Seorang siswa meminta AI menulis seluruh logika game-nya, lalu menempelkannya ke proyek tanpa mengubah apa pun.',
      q:'Aturan model mana yang dilanggar?',
      o:['“AI mengusulkan, kreator yang memutuskan” — AI boleh membantu, tetapi tidak boleh membangun inti proyek menggantikan siswa.',
         'Tidak ada: AI boleh melakukan apa saja selama proyeknya berfungsi.',
         'Aturan bahwa AI hanya boleh dipakai untuk gambar.'],
      a:0, e:'Di semua usia, aturannya sama: AI mengusulkan, kreator yang memutuskan. Seberapa banyak AI digunakan bergantung pada usia, tetapi inti proyek selalu milik siswa.' }
  ],
  m2:[
    { q:'Di Backoffice, bagaimana cara membuka aktivitas dan Teacher Notes sebuah pelajaran di kursus-kursus ini?',
      o:['Groups → grup Anda → tautan wiki.',
         'Courses → kursusnya → Assignments → pilih pelajaran → buka sebuah aktivitas.',
         'Profile → Schedule → pelajarannya.'],
      a:1, e:'Konten kursus dibuka melalui Courses, bukan Groups. Di Assignments Anda melihat kartu-kartu aktivitas pelajaran — dan Teacher Notes ada di dalam setiap kartu. Tabel Study guides memang sengaja dikosongkan.' },
    { ctx:'Bulan lalu Anda mengajar Pelajaran 3 di grup lain, dan pelajarannya berjalan sangat baik.',
      q:'Apa yang Anda lakukan sebelum mengajarkannya lagi?',
      o:['Tidak ada: Anda sudah menguasai pelajarannya, jadi kali ini catatannya bisa dilewati.',
         'Membaca Teacher Notes lagi dan mengecek pembaruan — kursus terus diperbaiki, dan aktivitas, durasi, atau catatannya bisa berubah.',
         'Mencari presentasinya di wiki.'],
      a:1, e:'Membaca Teacher Notes adalah bagian dari persiapan setiap pelajaran, setiap kali. Versi yang pernah Anda ajarkan belum tentu sama dengan versi yang akan Anda ajarkan.' },
    { ctx:'Lead the group sedang aktif. Di tengah pelajaran, seorang siswa mengeklik “Work independently” dan kembali ke kartu sebelumnya.',
      q:'Apa yang terjadi sejak saat itu?',
      o:['Siswa tersebut dikeluarkan dari pelajaran dan harus bergabung lagi.',
         'Siswa tetap melihat banner yang menunjukkan posisi Anda, dengan tombol Return; di samping namanya, Anda bisa melihat bahwa ia sedang bekerja mandiri.',
         'Jawaban-jawabannya di kartu Anda langsung terkirim kepada Anda secara real-time.'],
      a:1, e:'Follow Mode tidak pernah mengunci siswa. Mereka bisa bekerja sendiri, melihat posisi Anda, dan kembali dengan satu klik.' },
    { q:'Anda ingin mendemonstrasikan sebuah langkah di sebuah tool, seperti editor Scratch. Bagaimana cara yang tepat untuk menunjukkannya?',
      o:['Bagikan layar Anda saat kartu pelajaran sedang terbuka, agar siswa melihat instruksi dan catatan Anda.',
         'Bagikan hanya tab atau jendela tool tersebut — jangan pernah membagikan kartu pelajaran, karena Teacher Notes Anda terlihat di sana.',
         'Tidak perlu mendemonstrasikan apa pun: kartu sudah menjelaskan semuanya.'],
      a:1, e:'Follow Mode digunakan untuk kartu: setiap siswa memiliki salinannya sendiri dan tidak pernah melihat catatan Anda. Berbagi layar menampilkan persis apa yang ada di layar Anda — jadi bagikan tool-nya, bukan kartu pelajaran.' },
    { ctx:'Siswa Anda menyelesaikan soal pilihan dan, setelah itu, sebuah aktivitas yang meminta mereka menempelkan tautan proyeknya.',
      q:'Pernyataan mana yang benar?',
      o:['Keduanya tersimpan otomatis: siswa tidak perlu mengeklik apa pun.',
         'Soal pilihan mencatat skor secara otomatis; untuk aktivitas tautan, siswa harus mengeklik “Send”.',
         'Keduanya memerlukan tombol Submit; jika tidak, tidak ada yang tercatat.'],
      a:1, e:'Soal pilihan, isian teks dan rumus, serta drag-and-drop mencatat skor secara otomatis. Aktivitas yang meminta siswa mengirim teks, tautan, atau file memerlukan tombol “Send”.' },
    { q:'Bagaimana siswa dan tutor masuk ke Kodland Sparks?',
      o:['Semua orang memakai login Backoffice mereka.',
         'Siswa masuk dengan satu tombol dari platform utama; tutor menggunakan kredensial terpisah yang diberikan oleh departemen Operasional atau Pengajaran.',
         'Siswa dan tutor mendaftar sendiri di situs web.'],
      a:1, e:'Siswa menggunakan single sign-on dari platform. Tutor menerima kredensial terpisah dari departemen Operasional atau Pengajaran — sebelum kredensial itu diterima, tur terpandu adalah cara Anda menjelajahinya.' }
  ],
  // Module 3: in every case, the tutor must spot the strategy that would HARM that part of the lesson
  m3:[
    { part:'👋 Pemanasan', ctx:'Siswa bergabung tanpa suara, dengan kamera mati. Tidak ada yang berbicara sepatah kata pun.',
      o:['Sapa setiap siswa dengan namanya dan ajukan pertanyaan singkat tentang minggu mereka.',
         'Lewati pemanasan dan langsung masuk ke proyek supaya hemat waktu.',
         'Catat kehadiran selagi mereka bersiap, dan ajak mereka bereaksi dengan emoji.'],
      a:1, e:'Melewatkan pemanasan menghemat dua menit, tetapi mengorbankan kedekatan. Pembukaan yang singkat dan hangat adalah yang membuat siswa pendiam mulai berbicara — dan tetap terlibat sepanjang pelajaran.' },
    { part:'📓 Pengecekan PR', ctx:'Separuh grup tidak mengerjakan PR.',
      o:['Tanyakan siapa yang mengalami kendala dan apa yang terjadi — mungkin ada masalah teknis.',
         'Minta satu siswa menunjukkan PR-nya dan sebutkan satu hal spesifik yang sudah bagus.',
         'Bilang “Oke, nilaimu nol” lalu lanjut tanpa menanyakan alasannya.'],
      a:2, e:'PR yang tidak dikerjakan adalah sinyal, bukan sekadar nilai nol. Mencari tahu apakah mereka mengalami kendala adalah cara Anda membantu mereka — dan cara menjaga agar mereka tidak tertinggal.' },
    { part:'🧠 Pemahaman', ctx:'Anda baru saja menjelaskan sebuah ide baru. Saat Anda bertanya “Sudah jelas?”, semua menjawab ya — tapi Anda curiga mereka belum benar-benar paham.',
      o:['Minta seorang siswa tertentu, dengan menyebut namanya, untuk menjelaskan mengapa hal itu berhasil.',
         'Terima jawaban “ya” dan lanjutkan: kalau mereka bilang jelas, berarti sudah jelas.',
         'Minta mereka menebak apa yang akan terjadi jika Anda mengubah sesuatu, lalu coba bersama-sama.'],
      a:1, e:'“Sudah jelas?” hampir selalu dijawab “ya”. Melanjutkan tanpa mengecek berarti siswa akan kesulitan nanti — lebih baik minta seseorang menjelaskan penalarannya.' },
    { part:'📋 Rekap', ctx:'Waktu tersisa 7 menit dan grup belum menyelesaikan kartu terakhir.',
      o:['Terus bekerja sampai akhir agar mereka bisa menyelesaikan kartunya, dan lewati rekap.',
         'Mulai rutinitas penutup sekarang: kartu yang belum selesai bisa dilanjutkan di pelajaran berikutnya atau di rumah.',
         'Minta dua atau tiga siswa menyebutkan apa yang mereka pelajari hari ini.'],
      a:0, e:'Bekerja sampai detik terakhir adalah penyebab rekap, teaser, dan PR jadi terlewat. Mulailah penutupan tepat waktu — kartu bisa menunggu, penutupan tidak.' },
    { part:'🔮 Teaser & PR', ctx:'Ini menit terakhir pelajaran dan siswa sudah bersiap keluar.',
      o:['Kaitkan teaser dengan proyek mereka: satu kalimat yang membuat mereka penasaran dengan pelajaran berikutnya.',
         'Jelaskan PR dalam satu atau dua kalimat dan ingatkan cara mengumpulkannya.',
         'Bacakan kalimat teaser dengan cepat saat mereka keluar dan bilang “PR-nya ada di platform”.'],
      a:2, e:'Teaser yang terburu-buru dan PR yang tidak dijelaskan membuat siswa pergi tanpa tahu apa yang akan datang. Satu kalimat yang memotivasi dan penjelasan yang jelas butuh waktu kurang dari dua menit.' }
  ],
  m4:[
    { ctx:'Anda sedang membantu seorang siswa mengubah ide game Scratch-nya menjadi sebuah prompt.',
      q:'Prompt mana yang paling mungkin menghasilkan hasil yang bisa langsung dipakai pada percobaan pertama?',
      o:['“Buat game kucing dengan rintangan, mirip game endless runner, menggunakan prinsip desain game yang baik.”',
         '“Buat game Scratch: sprite kucing bergerak ke kiri/kanan dengan tombol panah, rintangan jatuh dari atas dengan kecepatan yang terus bertambah, skor bertambah setiap detik bertahan hidup, game berakhir setelah 3 kali tabrakan.”',
         '“Buat game yang seru dan menarik untuk anak 8 tahun yang mengajarkan tentang rintangan dan bertahan hidup, mirip Flappy Bird tetapi orisinal.”',
         '“Buat game 2D di Scratch dengan aturan yang jelas, sistem skor, dan tingkat kesulitan yang meningkat seiring waktu.”'],
      a:1, e:'Hanya prompt itu yang memiliki mekanik yang konkret dan tidak ambigu: gerakan, cara rintangan muncul, pemicu skor, kondisi akhir. Yang lain <i>terdengar</i> spesifik, tetapi bergantung pada istilah subjektif — “prinsip desain game yang baik”, “seru dan menarik”, “aturan yang jelas” — yang harus ditafsirkan sendiri oleh AI.' },
    { ctx:'Prompt gambar pertama seorang siswa menghasilkan karakter dengan palet warna yang salah. Selebihnya — pose, gaya, latar belakang — sudah sesuai.',
      q:'Apa langkah terbaik berikutnya?',
      o:['Tulis ulang seluruh prompt dari awal dengan lebih banyak detail secara keseluruhan, agar kesalahan yang sama tidak terulang.',
         'Jalankan lagi prompt yang persis sama, karena hasil AI mengandung unsur acak dan percobaan kedua sering kali memperbaikinya.',
         'Kirim prompt lanjutan yang hanya mengubah palet warna, sementara deskripsi lainnya tetap sama.',
         'Tambahkan beberapa kata sifat yang menggambarkan suasana yang diinginkan, agar AI punya lebih banyak konteks.'],
      a:2, e:'Mengisolasi satu variabel yang salah lebih cepat dan lebih andal dibandingkan memulai dari awal, mengandalkan keacakan, atau menambahkan detail lain yang tidak menyentuh masalah sebenarnya.' },
    { ctx:'Anda sedang membantu siswa usia 13+ men-debug sebuah fungsi Python dengan bantuan AI.',
      q:'Prompt mana yang mencerminkan cara troubleshooting paling efektif?',
      o:['“Kode ini tidak berfungsi, tolong perbaiki: [kode]”',
         '“Fungsi ini seharusnya mengembalikan rata-rata dari sebuah list, tetapi mengembalikan None saat list hanya berisi satu item. Ini kodenya: [kode]. Apa yang menyebabkan kasus khusus ini gagal?”',
         '“Tulis ulang kode ini dengan praktik yang lebih baik dan pastikan kodenya berfungsi: [kode]”',
         '“Jelaskan apa yang salah dengan kode ini dan berikan versi yang sudah diperbaiki: [kode]”'],
      a:1, e:'Prompt itu menyebutkan dengan tepat perilaku yang diharapkan, kegagalan yang terjadi, dan kasus khususnya — sehingga AI bisa menyasar bug yang sebenarnya, alih-alih menebak-nebak cakupannya atau menulis ulang lebih banyak dari yang diperlukan.' },
    { ctx:'Dua tutor menulis prompt untuk tugas pembuatan video yang sama. Tutor A menulis satu prompt panjang dan detail yang mencakup gaya, subjek, dan latar belakang sekaligus. Tutor B menulis prompt yang lebih pendek terlebih dahulu, mengecek hasilnya, lalu menyesuaikannya.',
      q:'Pernyataan mana yang paling akurat?',
      o:['Pendekatan Tutor A selalu lebih baik, karena detail yang lebih banyak di awal mengurangi jumlah iterasi yang dibutuhkan.',
         'Pendekatan Tutor B selalu lebih baik, karena prompt yang lebih pendek pada dasarnya lebih mudah diproses oleh AI.',
         'Keduanya bisa berhasil, tetapi pendekatan iteratif Tutor B memudahkan untuk mengetahui detail mana yang menyebabkan hasil yang tidak diinginkan.',
         'Pendekatan mana pun tidak berpengaruh, karena kualitas hasil akhir hanya bergantung pada model AI yang digunakan, bukan pada prompt-nya.'],
      a:2, e:'Prinsip utama modul ini adalah iterasi dan mengisolasi variabel. Detail saja tidak menjamin keberhasilan, dan iterasi membuat sebab-akibat jauh lebih jelas daripada mengerjakan semuanya dalam satu prompt besar.' },
    { open:true, min:180,
      ctx:'Seorang siswa di grup Anda ingin menambahkan lompatan ganda (double jump) ke game platformer-nya. Ia mengetik ke AI: <i>“bikin lompatannya lebih bagus”</i>.',
      q:'Tulis ulang menjadi prompt yang kemungkinan besar berhasil pada percobaan pertama. Tulis teks prompt yang akan Anda bantu siswa buat, lalu tambahkan satu kalimat yang menjelaskan mengapa prompt Anda akan bekerja lebih baik.',
      model:'Prompt yang kuat memenuhi sebagian besar hal berikut: <ul><li><b>Menyebutkan platformnya</b> — “Di Scratch…” — agar AI tidak menebak-nebak lingkungannya.</li><li><b>Menyatakan perilaku yang tepat beserta pemicunya:</b> “saat tombol spasi ditekan ketika kucing sudah berada di udara, kucing melompat untuk kedua kalinya”.</li><li><b>Menetapkan batasan:</b> “hanya sekali setiap kali jatuh”, dan “jangan ubah blok gerakan yang sudah ada”.</li><li><b>Meminta penjelasan:</b> “beri tahu aku blok mana yang kamu tambahkan dan di mana”.</li></ul><p style="margin-top:8px">Dan alasannya: prompt ini mengisolasi <b>satu</b> mekanik, menyatakan perilaku yang diharapkan secara tepat, dan membatasi apa yang boleh diubah — sehingga tidak ada lagi yang perlu dikarang sendiri oleh AI. “Bikin lompatannya lebih bagus” menyerahkan semua keputusan itu kepada AI.</p>' }
  ]
};

/* ============================================================
   STAGE CAROUSELS (Module 3) — keep e, c and v
   ============================================================ */
CONTENT.stagesets = {
  blocks:[
    { e:'👋', t:'Pemanasan — 2 sampai 4 menit', was:'Pemanasan', ph:'Pembukaan', c:'#BDE7FF', goal:'Tahap ini tetap ada, tetapi singkat: sapaan, kamera dan mikrofon, sebuah reaksi. Di beberapa pelajaran ada pengecekan suasana hati (mood check).',
      d:['Gunakan untuk membangun kedekatan: obrolan singkat, atau pertanyaan tentang minat mereka dan perasaan mereka hari ini.','Catat kehadiran sekarang, selagi siswa bersiap — bukan di akhir.'] },
    { e:'🔧', t:'Checkpoint teknis', was:'Ulasan pelajaran sebelumnya', ph:'Pembukaan', c:'#BDE7FF', goal:'Ulasan berubah menjadi checkpoint: apakah proyek sebelumnya bisa dibuka dan berfungsi? Konsep tidak dijelaskan ulang — Anda hanya memastikan titik awalnya sudah siap.',
      d:['Di beberapa pelajaran, ulasan dan pengecekan PR digabung menjadi satu tugas di platform.','Jika sebuah proyek tidak bisa dibuka, gunakan template cadangan — tidak ada yang tertinggal.'] },
    { e:'🎬', t:'Tujuan ditunjukkan, bukan dijelaskan', was:'Tujuan pelajaran', ph:'Pembukaan', c:'#FFF1B8', goal:'Tujuan ditunjukkan lewat hasil akhirnya — sebuah video, GIF, atau proyek yang sudah berfungsi — sebagai pemantik pertama dalam pelajaran.',
      d:['Tunjukkan hasilnya dulu, lalu tanyakan apa yang mereka perhatikan.','Biarkan penjelasan datang belakangan, sebagai jawaban.'] },
    { e:'🔀', t:'Teori dan praktik menyatu', was:'Teori dan praktik', ph:'Bagian inti', c:'#E4FFC2', goal:'Siswa mengeksplorasi dan menghadapi tantangannya lebih dulu; penjelasan datang tepat saat mereka membutuhkannya.',
      d:['Berikan petunjuk sedikit demi sedikit — bukan solusinya.','Kesalahan adalah bahan belajar, bukan kegagalan.'] },
    { e:'📋', t:'Rangkuman — interaktif dan bersama', was:'Rangkuman pelajaran', ph:'Penutup', c:'#FFD9EC', goal:'Lebih interaktif dan berbasis kelompok: kuis-kuis kecil yang dijawab setiap siswa di platform, ditambah daftar singkat hal yang sudah dipelajari untuk Anda bahas bersama.',
      d:['Siswa yang menyebutkan apa yang mereka pelajari — bukan Anda yang merangkumkan untuk mereka.','Ini adalah langkah pertama dari rutinitas penutup Anda (lihat di bawah).'] },
    { e:'🏠', t:'PR — versi berikutnya', was:'Pemberian PR', ph:'Penutup', c:'#FFD9EC', goal:'PR adalah versi berikutnya dari proyek yang sama yang sudah dipublikasikan — atau sebuah misi yang melanjutkan apa yang baru saja mereka pelajari. Bukan latihan terpisah.',
      d:['Jelaskan PR dengan gamblang sebelum mereka keluar.','Ingatkan mereka untuk memublikasikan versi baru dan mengirimkan tautannya.'] },
    { e:'🔮', t:'Pratinjau — satu kalimat yang memotivasi', was:'Pratinjau pelajaran berikutnya', ph:'Penutup', c:'#FFD9EC', goal:'Ini hanya satu kalimat, bukan satu segmen — tapi jangan sekadar membacakannya. Gunakan untuk memotivasi.',
      d:['Baca pelajaran berikutnya sebelum mengajar, agar Anda bisa membangun rasa penasaran yang nyata.','Kaitkan dengan apa yang baru saja mereka buat.'] }
  ],
  open:[
    { e:'👋', t:'Pemanasan dan sapaan', ph:'Pembukaan · 1', c:'#BDE7FF', v:'warmup', goal:'Bangun kedekatan sebelum mengajar: sapa setiap siswa dengan namanya, cek kamera dan suara, dan beri mereka alasan untuk tersenyum.',
      d:['Sapa setiap siswa dengan namanya saat mereka bergabung.','Satu pertanyaan 1 menit tentang minggu atau minat mereka.','Catat kehadiran selagi mereka bersiap.'],
      say:['“Hai Leo! Senang ketemu kamu. Satu pertanyaan cepat sebelum kita mulai: minggu ini kamu main game apa?”'] },
    { e:'🔗', t:'Kaitan dengan pelajaran sebelumnya', ph:'Pembukaan · 2', c:'#C9F2D6', v:'link', goal:'Ingatkan siswa sampai mana proyek mereka dan mengapa pelajaran hari ini merupakan kelanjutannya — ceritanya terus berlanjut.',
      d:['Minta seorang siswa menceritakan kepada grup apa yang mereka buat di pertemuan sebelumnya.','Kaitkan dengan misi hari ini dalam satu kalimat.','Jaga agar cerita kursus tetap hidup: “Hari ini, misi kita adalah…”.'],
      say:['“Ana, coba ingatkan kami: di akhir pelajaran lalu, proyekmu sudah bisa apa saja?”','“Pertemuan lalu game kalian mendapat tokoh utama. Hari ini, tokoh itu mendapat tujuan.”'] },
    { e:'📓', t:'Pengecekan PR', ph:'Pembukaan · 3', c:'#FFF1B8', v:'homework', goal:'Cek versi baru yang mereka kerjakan di rumah — dan perhatikan siapa yang mengalami kendala.',
      d:['Minta satu atau dua siswa menunjukkan PR-nya.','Sebutkan satu hal spesifik yang sudah bagus.','Tidak ada PR? Cari tahu apakah mereka terkendala masalah teknis — jangan sekadar memberi nilai nol.'],
      say:['“Mia, tunjukkan versi barumu ke kami. Kenapa kamu memilih warna-warna itu?”'] },
    { e:'🎯', t:'Tujuan pelajaran', ph:'Pembukaan · 4', c:'#E4FFC2', v:'goal', goal:'Tetapkan apa yang ingin dicapai di pelajaran hari ini. Ini adalah tahap terakhir sebelum kerja mandiri dimulai.',
      d:['Jelaskan tujuan proyek hari ini dalam satu atau dua kalimat.','Minta siswa mengulang rencananya dengan kata-kata mereka sendiri.'] }
  ],
  close:[
    { e:'📋', t:'Rangkuman (rekap)', ph:'5–7 menit terakhir · 1', c:'#FFD9EC', v:'recap', goal:'Siswa yang menyebutkan apa yang mereka pelajari — bukan Anda. Gunakan kuis atau daftar rangkuman di kartu dan biarkan mereka menjawab.',
      d:['Tanyakan kepada 2–3 siswa apa yang mereka pelajari hari ini.','Tanyakan mengapa atau bagaimana — bukan “Sudah jelas?”.','Rayakan satu hal spesifik yang berhasil dicapai grup.'],
      say:['“Tom, apa yang terjadi saat game dimulai — dan kenapa?”'] },
    { e:'🔮', t:'Teaser pelajaran berikutnya', ph:'5–7 menit terakhir · 2', c:'#E9DDFF', v:'teaser', goal:'Satu kalimat yang membuat mereka ingin kembali. Ini hanya berhasil jika Anda sudah membaca pelajaran berikutnya.',
      d:['Baca pelajaran berikutnya saat Anda bersiap.','Kaitkan teaser dengan proyek mereka.','Buat singkat dan seru — sebuah janji, bukan rangkuman.'],
      say:['“Pertemuan berikutnya, sesuatu yang berbahaya muncul di jalan tokohmu… apakah ia bisa selamat?”'] },
    { e:'🏠', t:'PR berikutnya', ph:'5–7 menit terakhir · 3', c:'#C9F2D6', v:'nexthw', goal:'Jelaskan versi proyek berikutnya, agar semua siswa tahu persis apa yang harus dikerjakan — dan tidak lupa mengumpulkannya.',
      d:['Jelaskan PR dalam satu atau dua kalimat.','Ingatkan mereka untuk mengeklik “Send” saat mengirim tautannya.','Ucapkan salam perpisahan dengan nada positif.'],
      say:['“Untuk pertemuan berikutnya: tambahkan satu detail baru ke game kalian, publikasikan, lalu kirim tautannya ke saya.”'] }
  ]
};

/* ============================================================
   SMALL DATA LISTS — Learning Loop, AI per age, prompt and question examples
   ============================================================ */
CONTENT.loop = [
  ['🎯','Tujuan','Pelajaran dimulai dari apa yang harus berfungsi di akhir pelajaran hari ini — ditunjukkan, bukan dijelaskan.'],
  ['⚡','Prototipe cepat','Siswa segera mendapatkan sesuatu yang berfungsi: sebuah template, versi pertama, hasil pertama.'],
  ['🐞','Kesulitan','Ada yang belum berfungsi. Itu wajar — justru di situlah proses belajar terjadi.'],
  ['🧭','Strategi / petunjuk','Anda memberi satu petunjuk setiap kali, atau sebuah pertanyaan — bukan solusinya.'],
  ['📈','Perbaikan','Siswa memperbaikinya dan membuatnya lebih baik: versinya sendiri, keputusannya sendiri.'],
  ['🎤','Unjuk karya','Mereka menunjukkan hasilnya: kepada Anda, kepada grup, di Kodland Sparks.'],
  ['💭','Refleksi','Masalah apa yang aku hadapi? Strategi apa yang aku gunakan? Apa langkahku berikutnya?']
];
CONTENT.ages = {
  a:{ e:'🧒', age:'8–9', who:'Kursus untuk siswa termuda', model:'Pembelajaran berbasis proyek yang terpandu, dibantu AI.',
      p:'Tool yang mirip dengan yang sudah dikenal siswa, dengan AI yang dimediasi oleh tutor dan AI Buddy. <b>Perasaan “aku yang membuat ini” adalah aset yang harus dijaga.</b> AI bisa muncul di tahap selanjutnya dalam kursus, sebagai elemen yang menyenangkan dan terbatas.',
      test:'Uji terbalik', tt:'Proyek harus tetap 100% bisa diselesaikan dan bermakna <b>tanpa</b> AI. AI hanya menghilangkan hambatan rutin — tidak pernah mengambil alih tindakan kreatifnya.', ai:20 },
  b:{ e:'🧑', age:'10–12', who:'Kursus untuk praremaja', model:'Pembelajaran berbasis proyek yang diarahkan, AI sebagai bahan.',
      p:'Siswa memiliki dan mengerjakan sendiri inti kreatifnya; AI menghasilkan bahan mentah — sprite, suara, teks — yang dikurasi, disunting, dan dirangkai oleh siswa. AI adalah “teman sparring”.',
      test:'Uji daya ungkit', tt:'Tanpa AI, proyek tetap mungkin dibuat, tetapi jelas lebih sederhana atau lebih kecil dalam waktu kelas yang tersedia. AI menaikkan batas atas ide siswa.', ai:55 },
  c:{ e:'🧑‍💻', age:'12–17', who:'Kursus untuk remaja', model:'Pembelajaran berbasis proyek yang terintegrasi dengan AI — siswa sebagai direktur kreatif.',
      p:'Siswa mengorkestrasi AI di seluruh proses (konsep → aset → logika → pembuatan), termasuk AI sebagai komponen di dalam program mereka sendiri, dengan literasi yang eksplisit tentang media sintetis.',
      test:'Uji ambisi', tt:'Cakupan dan kualitas yang ditargetkan tidak bisa dicapai tanpa AI dalam waktu yang tersedia. Jika AI dihilangkan, bentuk proyek yang direncanakan akan runtuh.', ai:85 }
};
CONTENT.prompts = {
  v:['“Buatkan aku game.”','“Bikin lebih bagus.”','“Perbaiki kodeku.”'],
  s:['“Dalam Python: tulis game tebak angka. Komputer memilih angka dari 1 sampai 100, pemain punya 7 kesempatan, setelah setiap tebakan program menampilkan ‘terlalu besar’ atau ‘terlalu kecil’, dan di akhir program memberi tahu berapa kali percobaan yang dibutuhkan.”',
     '“Ubah hanya palet warnanya menjadi biru dan merah muda neon. Pertahankan pose, gaya, dan latar belakangnya.”',
     '“Program Python-ku seharusnya berhenti saat pemain berhasil menebak angkanya, tapi program terus bertanya. Ini kodeku. Apa penyebabnya, dan apa yang harus aku cek?”']
};
CONTENT.qcmp = {
  v:['“Sudah jelas?”','“Semua sudah selesai?”','“Ada pertanyaan?”'],
  s:['“Mia, kenapa karakternya hanya bergerak saat kamu menekan tombol panah?”','“Leo, apa yang akan terjadi kalau baris ini kita pindahkan ke paling atas? Coba, lalu ceritakan ke kami.”','“Ana, bagaimana kamu tahu skornya sudah berfungsi?”']
};

/* ============================================================
   Notes under the vague / specific switches
   ============================================================ */
CONTENT.cmpnote = { prompts:{ v:'AI harus menebak semuanya: platformnya, aturannya, apa maksud “lebih bagus”.', s:'Setiap prompt menyebutkan platformnya, perilaku yang tepat, dan apa yang boleh diubah — tidak ada yang dibiarkan untuk ditebak.' },
                  questions:{ v:'Mudah dijawab dengan “ya” — dan Anda tidak tahu apa pun tentang apa yang sebenarnya mereka pahami.', s:'Nama ditambah “kenapa” atau “bagaimana”: siswa harus menyuarakan pemikirannya.' } };

/* Follow Mode demo cards (Module 2) */
CONTENT.fmCards = [['Kartu 1 · Bersiap untuk misi hari ini! 🚀','Hari ini kamu akan membuat proyek pertamamu…'],['Kartu 2 · Selamat datang! 👋','Yuk, pastikan kalian bisa saling melihat dan mendengar…'],['Kartu 3 · Ayo saling berkenalan! 🎤','Setiap kreator punya gayanya sendiri…']];

/* ============================================================
   SECTION BODIES — the text of every section, by module. Inside ${…} translate only the quoted text; keep function names (callout, flip, launch, codeBox, zclip, stc, videoBtn), CONFIG.… and file names.
   ============================================================ */
CONTENT.body = {
/* ---------------- Module 1 ---------------- */
what:() => `
  <p class="p">Kodland telah membuat <b>model pendidikan baru (EM)</b> yang akan diterapkan secara bertahap, baik di kursus baru maupun di kursus yang sudah ada. Ini bukan sekadar konten teknis baru — ini adalah <b>metodologi</b> yang berbeda: bagaimana alur sebuah pelajaran, peran apa yang Anda jalankan sebagai tutor, dan bagaimana kecerdasan buatan menjadi bagian dari pembelajaran, bukan jalan pintas.</p>
  <div class="defn"><span class="de">🌱</span><p>Dalam <b>model pendidikan baru</b> ini, siswa memulai dari hasil yang sudah berfungsi, belajar dengan membangun dan memperbaiki, memublikasikan proyek mereka di <b>Kodland Sparks</b>, dan menggunakan AI dengan bijak.</p></div>
  ${callout('good', '🧭', '<b>Penting:</b> Ini adalah model pendidikan baru yang akan diperkenalkan secara bertahap. Kursus baru akan mengikuti pendekatan pengajaran ini, sementara kursus yang sudah ada akan disesuaikan dengan model baru. Namun, grup yang sudah mengikuti kursus dengan format pengajaran yang berbeda akan tetap melanjutkan format mereka saat ini. Untuk saat ini, baru sebagian kursus yang mengikuti model baru ini.')}
  <p class="p" style="margin-top:18px">Mengapa ada model baru? Karena siswa zaman sekarang belajar dengan cara yang berbeda dibandingkan siswa beberapa tahun lalu. Tool-nya berubah, cara anak-anak dan remaja berinteraksi dengan teknologi berubah, dan AI sudah menjadi bagian dari kehidupan sehari-hari mereka. Metodologi baru ini dibangun di atas tiga gagasan:</p>
  <div class="trio">
    <div class="ti"><span class="tie">🛠️</span><h3>Tool yang mereka kenal</h3><p>Siswa bekerja dengan tool yang benar-benar mereka lihat dan gunakan saat ini — dan membuat proyek dengan efek “wow” yang nyata sejak menit pertama.</p></div>
    <div class="ti"><span class="tie">🧠</span><h3>AI dengan bijak</h3><p>Kami mengajari siswa menggunakan AI secara bijak: tidak takut terhadapnya, tetapi juga tidak bergantung padanya secara membabi buta.</p></div>
    <div class="ti"><span class="tie">✨</span><h3>Pelajaran yang layak dihadiri</h3><p>Pengalaman belajar tetap relevan, sehingga setiap kelas terasa berharga.</p></div>
  </div>
  <p class="p" style="margin-top:18px">Sebelum melanjutkan, mari luruskan tiga anggapan yang sering muncul. Ketuk masing-masing:</p>
  <div class="myths">
    <button class="myth" data-myth><span class="mtag">Mitos</span><span class="mq">“Semua kursus Kodland berubah ke model baru.”</span><span class="ma"><b>Tidak semuanya.</b> Model baru digunakan di kursus-kursus baru yang dirancang untuk model ini dan di beberapa kursus lama terpilih yang sedang disesuaikan dengannya.</span><span class="mh">Ketuk untuk melihat faktanya →</span></button>
    <button class="myth" data-myth><span class="mtag">Mitos</span><span class="mq">“Semua grup saya akan berubah.”</span><span class="ma"><b>Tidak.</b> Anda mengajar dengan model baru hanya di grup dari kursus yang mengikuti model ini. Di semua grup Anda yang lain, tidak ada yang berubah. Anda akan diberi tahu jika salah satu kursus Anda beralih ke model baru.</span><span class="mh">Ketuk untuk melihat faktanya →</span></button>
    <button class="myth" data-myth><span class="mtag">Mitos</span><span class="mq">“Ini cuma konten baru yang perlu dipelajari.”</span><span class="ma"><b>Ini cara baru dalam memandang sebuah pelajaran.</b> Kontennya hanya menuntut sedikit pengetahuan baru dari Anda — perubahan sebenarnya ada pada alur pelajaran dan apa yang Anda lakukan di dalamnya.</span><span class="mh">Ketuk untuk melihat faktanya →</span></button>
  </div>`,

pillars:() => `
  <p class="p">Inilah jantung dari model ini. Ini bukan tentang mempelajari tombol-tombol baru — ini tentang <b>mengubah cara Anda memandang sebuah pelajaran</b>. Semuanya bertumpu pada empat pilar. Balik setiap kartu, lalu baca bagaimana masing-masing pilar mengubah apa yang Anda lakukan.</p>
  <div class="grid4">
    ${flip('Pilar 1', '🔄', 'Pembelajaran deduktif', '<b>Hasil lebih dulu.</b><br>Pelajaran dibuka dengan hasil akhir yang sudah berfungsi. Siswa membedahnya bersama Anda, dan baru kemudian membangunnya sedikit demi sedikit.')}
    ${flip('Pilar 2', '🌱', 'Growth mindset', '<b>Kesalahan adalah tahapan, bukan kegagalan.</b><br>Bug atau mekanik yang rusak itu wajar. Siswa belajar untuk berkata “ini <i>belum</i> berhasil — ayo cari strateginya”.')}
    ${flip('Pilar 3', '🔁', 'Learning Loop', '<b>Sebuah siklus, bukan garis lurus.</b><br>Tujuan → prototipe → kesulitan → petunjuk → perbaikan → unjuk karya → refleksi. Setiap putaran masuk sedikit lebih dalam.')}
    ${flip('Pilar 4', '🤖', 'Pembelajaran berbantuan AI', '<b>AI mengusulkan, kreator yang memutuskan.</b><br>Seberapa banyak AI digunakan bergantung pada usia siswa — dan AI tidak pernah membangun inti proyek untuk mereka.')}
  </div>

  <h3 class="subh">🔄 Pilar 1 · Tunjukkan dulu, jelaskan kemudian</h3>
  <div class="ba"><div class="bef"><h4>Sebelumnya</h4><p>Pelajaran dimulai dengan teori, lalu tool-nya, kemudian siswa membangun dari nol.</p></div><div class="arr">➜</div>
    <div class="aft"><h4>Sekarang</h4><p>Pelajaran dimulai dengan <b>hasil akhir yang sudah berfungsi</b> — “game atau mekanik apa yang harus berfungsi di akhir pelajaran hari ini?”. Siswa melihat keseluruhan proyek, membedahnya bersama Anda, lalu membangunnya.</p></div></div>
  ${callout('tip', '💡', 'Ini mengubah naluri pertama Anda sebagai tutor: alih-alih menjelaskan sebelum menunjukkan, <b>tunjukkan dulu, lalu jelaskan sebagai jawaban</b> atas apa yang sudah diperhatikan siswa.')}

  <h3 class="subh">🌱 Pilar 2 · Kata-kata Anda membentuk pola pikir mereka</h3>
  <p class="p">Cara Anda membicarakan sebuah kesalahan mengajarkan siswa cara memandang kesalahan itu. Model ini meminta Anda memperlakukan setiap kesalahan sebagai langkah yang wajar dan mengembalikan langkah berikutnya kepada siswa.</p>
  <div class="twocol">
    <div class="yes"><h4>✅ Ucapkan ini</h4><ul><li>“Bagus — kita menemukan masalah yang umum. Ayo kita pecahkan.”</li><li>“Ini belum berhasil. Apa strategi kita berikutnya?”</li><li>“Tunjukkan apa yang sudah kamu coba sebelumnya.”</li></ul></div>
    <div class="no"><h4>🚫 Hindari ini</h4><ul><li>“Lagi-lagi kamu gagal.”</li><li>“Itu salah — sini saya perbaiki.”</li><li>“Ini gampang, harusnya kamu sudah tahu.”</li></ul></div>
  </div>

  <h3 class="subh">🔁 Pilar 3 · Kodland Learning Loop</h3>
  <p class="p">Urutan lama berupa garis lurus: <i>saya menjelaskan → mereka berlatih → saya memeriksa</i>. Learning Loop menggantinya dengan sebuah siklus yang berulang di dalam setiap pelajaran dan antarpelajaran. Tekan tombol putar, atau ketuk salah satu langkah:</p>
  <div class="loop" id="loop">
    <div class="loop-row"><span class="lf"></span>${LOOP.map((s, i) => `<button class="lst" data-ls="${i}"><span class="lsi">${s[0]}</span><b>${s[1]}</b></button>`).join('')}</div>
    <div class="loop-out" id="loopOut"><span class="lo-e">▶️</span><span>Tekan <b>Putar loop</b> untuk melihat satu putaran penuh.</span></div>
    <div class="btn-row" style="margin-top:12px;justify-content:center"><button class="btn-y" id="loopPlay">▶ Putar loop</button></div>
    <p class="spiral">🌀 Pelajaran bergerak seperti spiral: setiap putaran loop masuk sedikit lebih dalam.</p>
  </div>

  <h3 class="subh">🤖 Pilar 4 · Peran AI bergantung pada usia</h3>
  <p class="p">Di bagian inilah Anda perlu paling berhati-hati, karena peran AI <b>tidak sama di setiap kursus</b> — semuanya bergantung pada usia siswa. Beralihlah antarkelompok usia:</p>
  <div class="agebox">
    <div class="seg" id="ageSeg"><button data-age="a" aria-pressed="true">🧒 Usia 8–9</button><button data-age="b" aria-pressed="false">🧑 Usia 10–12</button><button data-age="c" aria-pressed="false">🧑‍💻 Usia 12–17</button></div>
    <div class="agebody" id="ageOut"></div>
  </div>
  <div class="quote"><b>“AI mengusulkan, kreator yang memutuskan.”</b><small>Aturan yang perlu diulang di setiap kursus, di semua usia.</small></div>
  <div class="grid2">
    <div class="card"><div class="wh"><b>⚙️ AI konvensional (generatif)</b></div><p class="p" style="margin:0;font-size:15px">Membuat kode, gambar, atau ide saat Anda memintanya.</p></div>
    <div class="card"><div class="wh"><b>🧭 AI Mentor / AI Buddy</b></div><p class="p" style="margin:0;font-size:15px">Tidak menghasilkan solusinya: AI ini mengajukan pertanyaan pemandu dan memberi penjelasan.</p>
      <p class="p" style="margin:10px 0 0;font-size:13.5px;color:var(--pink-d)"><b>👀 Nanti di pelatihan ini</b> Anda akan melihat di mana siswa menemukannya di platform.</p></div>
  </div>
  ${callout('bad', '🛑', '<b>Jangan pernah biarkan AI membangun logika inti proyek menggantikan siswa.</b>')}`,

people:() => `
  <p class="p">Umpan balik tidak lagi hanya <i>tutor → siswa</i>. Dalam model baru, siswa mendapat umpan balik dari empat sumber — dan masing-masing punya perannya:</p>
  <div class="q3">
    <div><span>🧑‍🏫</span><b>Tutor</b><small>Spesifik, tentang proyek dan langkah berikutnya.</small></div>
    <div><span>👥</span><b>Teman sekelas</b><small>Sederhana dan spesifik saat unjuk karya — tanpa pernah membandingkan proyek.</small></div>
    <div><span>🪞</span><b>Diri sendiri</b><small>Masalah apa yang aku hadapi, strategi apa yang aku gunakan, apa langkahku berikutnya?</small></div>
    <div><span>🤖</span><b>AI</b><small>AI Buddy atau mentor AI: satu kelebihan dan satu ide perbaikan.</small></div>
  </div>
  ${callout('tip', '🪞', 'Penilaian diri bukan “kamu suka atau tidak?”. Penilaian diri berarti menyebutkan masalahnya, strateginya, dan langkah berikutnya. Umpan balik dari teman mengikuti rumus sederhana: <b>“Aku suka… Aku akan menambahkan…”</b>.')}
  <div class="defn" style="margin-top:18px"><span class="de">🧭</span><p><b>Singkatnya, peran Anda berubah.</b> Anda bukan lagi orang yang menjelaskan semuanya sebelum memulai. Anda adalah seorang <b>navigator</b>: Anda menunjukkan tujuannya, mendampingi perjalanan dengan pertanyaan dan petunjuk yang tepat waktu, serta membiarkan siswa menghadapi kesulitan sebelum Anda menyelesaikannya. Template cadangan tersedia di setiap kursus, jadi Anda tidak perlu panik “menyelamatkan” sebuah proyek — selalu ada rute alternatif dengan hasil yang terjamin.</p></div>`,

/* ---------------- Module 4 ---------------- */
why4:() => `
  <div class="defn"><span class="de">💡</span><p>Kursus-kursus ini tidak banyak menuntut pengetahuan materi baru dari Anda. Satu-satunya area yang benar-benar baru adalah <b>AI</b> — dan meskipun sebagian tutor sudah terbiasa menggunakannya, sebagian lainnya jarang memakainya, atau memakainya dengan cara yang tidak akan membantu siswa. Modul ini menjadi dasar bersama untuk semua tutor.</p></div>`,

whatp:() => `
  <p class="p">Kecerdasan buatan yang kita gunakan di kelas — AI Buddy, dan tool di dalam Kodland Sparks — bekerja berdasarkan instruksi yang ditulis dalam bahasa sehari-hari, yang disebut <b>prompt</b>. Semakin baik prompt-nya, semakin baik hasil yang didapat siswa.</p>
  <p class="p">Sebagai tutor, Anda tidak perlu menjadi ahli teknis AI. Namun, Anda perlu memahami dasar-dasarnya, agar bisa membimbing siswa saat mereka menulis prompt sendiri di kelas.</p>
  <div class="defn"><span class="de">❓</span><p><b>Prompt</b> adalah instruksi yang kita berikan kepada AI agar AI menghasilkan sesuatu — teks, kode, gambar, video. Ini seperti memberi instruksi kepada seseorang yang sama sekali tidak tahu konteks proyek Anda: <b>semakin jelas dan spesifik instruksinya, semakin dekat hasilnya dengan apa yang sebenarnya Anda inginkan.</b></p></div>
  <div class="ba"><div class="bef"><h4>Prompt yang buruk</h4><p>Menghasilkan sesuatu yang terlalu umum atau keliru. Akhirnya siswa terpaksa menerima sesuatu yang tidak mereka inginkan, atau mengulang dari awal.</p></div><div class="arr">➜</div>
    <div class="aft"><h4>Prompt yang baik</h4><p>Menghasilkan sesuatu yang berguna, tepat, dan <b>mudah disesuaikan</b>. Bagian terakhir inilah yang paling penting — hasil yang bisa sedikit diubah lebih berharga daripada hasil yang harus diganti total.</p></div></div>`,

goodp:() => `
  <p class="p">Prompt yang solid umumnya menjawab empat pertanyaan ini:</p>
  <div class="q3">${[['🎬','Konteks','Untuk apa ini? Siapa yang akan menggunakannya?'],['🎯','Tujuan','Apa tepatnya yang ingin Anda capai?'],['📐','Detail spesifik','Gaya, format, nada, batasan: “dalam 3 kalimat”, “menggunakan Python”, “gaya kartun”.'],['🖼','Contoh','Jika relevan — satu contoh membantu AI memahami apa yang diharapkan.']].map(q => `<div><span>${q[0]}</span><b>${q[1]}</b><small>${q[2]}</small></div>`).join('')}</div>
  <div class="twocol" style="margin-top:14px">
    <div class="yes"><h4>✅ Cukup spesifik</h4><ul><li>“Buat game Scratch sederhana di mana seekor kucing menghindari rintangan yang berjatuhan, dengan skor yang terlihat dan 3 nyawa.”</li></ul></div>
    <div class="no"><h4>❌ Terlalu samar</h4><ul><li>“Buatkan aku game.”</li></ul></div>
  </div>
  <div class="card" style="margin-top:14px">
    <div class="wh"><b>Samar atau spesifik? Ganti dan bandingkan</b><span class="tag">Coba</span></div>
    <div class="seg" data-cmp="prompts"><button data-k="v" aria-pressed="true">😐 Samar</button><button data-k="s" aria-pressed="false">🎯 Spesifik</button></div>
    <div class="fbx" data-cmpout="prompts"></div>
  </div>`,

codep:() => `
  <div class="grid2">${[
    ['🏷','Sebutkan bahasa atau platformnya','Python, HTML, Scratch, Roblox, dan sebagainya.'],
    ['👣','Jelaskan perilaku yang diharapkan langkah demi langkah','Bukan hanya hasil akhirnya.'],
    ['💬','Minta agar kodenya diberi komentar','Supaya lebih mudah dibaca dan dijelaskan di kelas.'],
    ['🔧','Jangan menulis ulang seluruh prompt','Jika ada yang tidak berfungsi, minta AI memperbaiki error tertentu, dan jelaskan apa yang terjadi.'],
    ['🧪','Uji dan pahami kodenya','Dorong siswa untuk menguji dan memahami kodenya, bukan sekadar menyalinnya.']
  ].map(x => `<div class="card" style="padding:16px"><div class="wh" style="margin-bottom:6px"><span style="font-size:26px">${x[0]}</span><b>${x[1]}</b></div><p class="p" style="margin:0;font-size:14.5px">${x[2]}</p></div>`).join('')}</div>`,

imgp:() => `
  <div class="grid2">${[
    ['🖌','Subjek, gaya, dan latar','Jelaskan subjek utamanya, gaya visualnya (realistis, kartun, pixel art…), dan latar atau latar belakangnya.'],
    ['🌈','Warna, pencahayaan, atau suasana','Sebutkan jika hal itu penting untuk proyek.'],
    ['📏','Spesifik soal format','Vertikal, horizontal, atau persegi — jika proyek membutuhkannya.'],
    ['🔁','Ubah satu variabel setiap kali','Jika hasil pertama tidak sesuai harapan, ubah hanya warnanya, atau hanya gayanya, agar Anda bisa melihat apa yang sebenarnya mengubah hasilnya.']
  ].map(x => `<div class="card" style="padding:16px"><div class="wh" style="margin-bottom:6px"><span style="font-size:26px">${x[0]}</span><b>${x[1]}</b></div><p class="p" style="margin:0;font-size:14.5px">${x[2]}</p></div>`).join('')}</div>`,

mistp:() => `
  <div class="myths">${[
    ['🌫','Terlalu samar.','“Bikin lebih bagus” tidak memberi AI petunjuk apa pun untuk dikerjakan.'],
    ['📚','Meminta terlalu banyak sekaligus.','Pecah proyek yang kompleks menjadi beberapa prompt yang lebih kecil.'],
    ['🔍','Tidak memeriksa hasilnya.','AI bisa keliru dan menghasilkan konten yang salah — selalu periksa sebelum menggunakannya.'],
    ['🔂','Tidak melakukan iterasi.','Hasil pertama hampir tidak pernah menjadi hasil akhir. Menyesuaikan dan meminta lagi adalah bagian normal dari prosesnya.'],
    ['🧭','Melupakan konteks proyek.','Prompt tanpa konteks menghasilkan sesuatu yang terlalu umum dan tidak cocok dengan apa yang sedang dibuat siswa.']
  ].map(x => `<button class="myth" data-myth><span class="mtag">Kesalahan</span><span class="mq">${x[0]} ${x[1]}</span><span class="ma">${x[2]}</span><span class="mh">Ketuk untuk melihat alasannya →</span></button>`).join('')}</div>
  ${callout('good', '🔁', 'Perhatikan betapa banyak hal ini yang sama dengan apa yang sudah Anda lakukan sebagai tutor: satu perubahan setiap kali, jelaskan perilaku yang Anda harapkan, uji sebelum memercayainya, dan lakukan iterasi alih-alih mengulang dari awal. Menulis prompt bukanlah keterampilan yang terpisah — ini kebiasaan debugging yang sama, hanya diarahkan ke tool yang berbeda.')}`,

/* ---------------- Module 2 ---------------- */
bo:() => `
  <p class="p">Kursus dengan model baru <b>tidak memiliki manual wiki maupun presentasi</b>. Panduan setiap pelajaran ada <b>di dalam pelajaran itu sendiri</b>, di Backoffice: setiap kartu aktivitas memiliki <b>Teacher Notes</b>-nya sendiri — untuk apa kartu itu, berapa lama waktunya, apa yang harus dilakukan, dan apa yang perlu diwaspadai. Hanya Anda yang bisa melihatnya.</p>
  ${callout('warn', '📒', '<b>Baca Teacher Notes sebelum setiap pelajaran</b> — dan cek apakah ada pembaruan. Kursus terus diperbaiki, jadi sebuah pelajaran bisa berubah dari satu grup ke grup berikutnya. Kartu pertama di setiap pelajaran memiliki catatan paling lengkap, dan biasanya juga sebuah video singkat.')}
  <p class="p" style="margin-top:16px">Jalan masuknya sama untuk semua kursus: Anda tidak membuka konten kursus melalui Groups, tetapi melalui <b>Courses</b>.</p>
  <div class="grid3">
    <div class="ti"><span class="tie">📚</span><h3>Courses</h3><p>Buka data kursus: cabang bisnis, bahasa, jumlah pelajaran dan modul.</p></div>
    <div class="ti"><span class="tie">🃏</span><h3>Assignments</h3><p>Pilih pelajarannya, dan Anda akan melihat kartu-kartu aktivitasnya. Kartu-kartu inilah <b>yang menjadi</b> konten pelajaran.</p></div>
    <div class="ti"><span class="tie">📒</span><h3>Teacher Notes</h3><p>Buka sebuah kartu: kotak oranye bergaris putus-putus adalah catatan Anda. Tepat di bawahnya, apa yang dilihat siswa.</p></div>
  </div>
  ${callout('tip', '🧭', 'Sekarang lihat sendiri. Simulasi ini adalah replika Backoffice dengan salah satu kursus yang mengikuti model baru: Anda akan membuka kursusnya, masuk ke pelajaran pertamanya, melihat mengapa study guide-nya kosong, dan membaca Teacher Notes di kartu pertama.')}
  ${launch('🗂️', 'Simulasi 1 dari 3', 'Simulasi Backoffice', 'Replika Backoffice yang bisa Anda klik: buka kursusnya, temukan aktivitas pelajaran, lihat mengapa tidak ada tautan wiki, dan baca sebuah Teacher Note dari dalam.', CONFIG.BO_SIM, '🗂️ Buka simulasi BO')}
  ${codeBox('boCode')}`,

classroom:() => `
  <p class="p">Setelah memahami pelajarannya, saatnya mengajarkannya. Di Classroom, Anda tidak lagi menampilkan slide: Anda membuka <b>kartu aktivitas yang sama</b> dengan yang Anda baca di Backoffice, lalu menelusurinya bersama siswa. Ada tiga hal yang membuat ini berjalan.</p>
  <h3 class="subh">👁️ 1. Follow Mode: siswa mengikuti ke mana pun Anda pergi</h3>
  <p class="p">Dengan <b>Follow Mode</b>, siswa secara otomatis melihat kartu yang sama dengan yang Anda buka. Ini <b>bukan berbagi layar</b>: setiap siswa mendapatkan salinan kartunya sendiri, yang benar-benar bisa mereka kerjakan — dan Teacher Notes tetap hanya terlihat oleh Anda. Anda mengaktifkannya dengan sakelar <b>Lead the group</b>, yang muncul di samping kartu yang sedang terbuka. Coba sekarang:</p>
  <div class="card" id="fmDemo">
    <div class="fm-ctrl"><button class="lead-sw" id="fmSw"><i></i> Lead the group</button><button class="btn-g" id="fmNext">Kartu berikutnya →</button><span style="font-size:13px;color:var(--muted);font-weight:700" id="fmHint">Nyalakan sakelarnya, lalu pindah ke kartu berikutnya.</span></div>
    <div class="fm">
      <div class="screen"><div class="sc-h"><span>👩‍🏫 Layar Anda</span><span>Tutor</span></div><div class="sc-card" id="fmT"></div></div>
      <div class="screen"><div class="sc-h"><span>👧 Layar Sofia</span><span>Siswa</span></div><div class="sc-card" id="fmS"></div></div>
    </div>
    <div class="fm-out" id="fmOut"></div>
  </div>
  <div class="grid3" style="margin-top:14px">${[
    ['➡️','Anda berganti kartu','Kartu juga berganti untuk semua yang mengikuti Anda.'],
    ['🖱️','Anda menggulir','Di dalam kartu interaktif, posisi mereka menyusul posisi Anda.'],
    ['🕐','Ada yang terlambat bergabung','Ia langsung masuk ke kartu yang sedang Anda buka.'],
    ['🚪','Anda pergi sebentar','Siswa melihat pemberitahuan bahwa tutor sedang tidak di tempat; mode mengikuti berlanjut saat Anda kembali.'],
    ['👥','Siapa yang mengikuti?','Penanda di samping setiap nama menunjukkan siapa yang mengikuti Anda dan siapa yang bekerja sendiri.'],
    ['🔓','Tidak terkunci','Siswa bisa mengeklik “Work independently” dan kembali dengan “Return”.']
  ].map(x => `<div class="card" style="padding:16px"><div class="wh" style="margin-bottom:6px"><span style="font-size:26px">${x[0]}</span><b>${x[1]}</b></div><p class="p" style="margin:0;font-size:14.5px">${x[2]}</p></div>`).join('')}</div>

  <h3 class="subh">🖥️ 2. Follow Mode atau berbagi layar?</h3>
  <p class="p">Anda tetap akan berbagi layar sesekali — untuk <b>mendemonstrasikan</b> sebuah langkah di tool, seperti editor Scratch, atau untuk menunjukkan hasil akhir. Aturannya sederhana:</p>
  <div class="okbad">
    <div class="ok"><h3>👁️ Gunakan Follow Mode untuk kartu</h3><ul><li>Untuk memandu grup menelusuri pelajaran.</li><li>Setiap siswa bekerja di salinannya sendiri.</li><li>Teacher Notes Anda tetap privat.</li></ul></div>
    <div class="bad"><h3>🖥️ Bagikan layar untuk demo</h3><ul><li>Untuk menunjukkan sebuah langkah di tool (Scratch, Sparks…).</li><li>Bagikan <b>hanya tab atau jendela tool tersebut</b>.</li><li>Jangan pernah membagikan kartu pelajaran: catatan Anda akan terlihat.</li></ul></div>
  </div>

  <h3 class="subh">🧩 3. Aktivitas interaktif</h3>
  <p class="p">Banyak kartu yang bersifat interaktif. Sebagian menyimpan progres dan skor tanpa perlu mengeklik tombol “Submit”, sementara sebagian lainnya memerlukannya.</p>
  <p class="p">Pada aktivitas <b>Soal pilihan</b>, <b>Isian teks dan rumus</b>, serta <b>Drag-and-drop</b>, Anda akan melihat bahwa skor tercatat secara otomatis begitu aktivitasnya selesai dikerjakan.</p>
  <div class="zoomtip"><span>🔍</span><div><b>Tips:</b> klik salah satu dari 3 video di bawah untuk membukanya di jendela yang lebih besar. Di sana Anda bisa <b>memperbesar</b> tampilan (tombol + / −, roda mouse, atau klik dua kali) dan menyeret untuk melihat setiap detail.</div></div>
  <div class="vidpair">
    <figure class="card gifcard"><span class="gtag ok">✅ Tersimpan otomatis</span>${zclip('images/result_good_EM.mp4', 'Tersimpan otomatis')}<figcaption>Hasilnya muncul otomatis di pojok kanan atas.</figcaption></figure>
    <figure class="card gifcard"><span class="gtag ko">🔁 Jawaban salah</span>${zclip('images/result_bad_EM.mp4', 'Jawaban salah')}<figcaption>Jika ada kesalahan, Anda bisa mengeklik ikon ‘Redo’ di pojok kanan atas dan mencoba lagi.</figcaption></figure>
  </div>
  <p class="p" style="margin-top:18px">Sementara itu, untuk aktivitas yang melibatkan pengiriman teks, tautan, atau file, pastikan siswa Anda mengeklik tombol <b>“Send”</b>:</p>
  <figure class="card gifcard wide">${zclip('images/send_bottom.mp4', 'Tombol “Send”')}</figure>
  ${launch('🎥', 'Simulasi 2 dari 3', 'Panduan Classroom', 'Tur terpandu sebuah pelajaran nyata dengan model baru di Classroom: kartu-kartunya, Teacher Notes yang hanya bisa Anda lihat, catatan lengkap di kartu pertama, dan Lead the group.', CONFIG.CLASS_SIM, '🎥 Buka panduan Classroom')}
  ${codeBox('classCode')}`,

sparks:() => `
  <p class="p">Bagian terakhir dari teka-teki ini adalah tempat proyek siswa berada: <b>Kodland Sparks</b>. Ini adalah platform baru tempat siswa <b>membangun</b> proyek mereka, <b>memublikasikannya</b>, terus belajar di antara pelajaran, dan mendapatkan umpan balik dari teman sekelas serta dari mentor AI. Di sini jugalah portofolio yang mereka bangun sepanjang kursus disimpan.</p>
  <div class="grid2">
    <div class="card"><div class="wh"><b>🔐 Cara siswa masuk</b></div><p class="p" style="margin:0;font-size:15px">Siswa masuk dengan <b>satu tombol dari platform utama</b> (single sign-on) — mereka tidak perlu mendaftar secara terpisah.</p></div>
    <div class="card"><div class="wh"><b>🔑 Cara Anda masuk</b></div><p class="p" style="margin:0;font-size:15px">Tutor menggunakan <b>kredensial terpisah</b>, berbeda dari Backoffice. Kredensial ini diberikan oleh <b>departemen Operasional atau Pengajaran</b>.</p></div>
  </div>
  ${callout('warn', '⏳', '<b>Anda belum bisa mencobanya sendiri.</b> Sebelum menerima kredensial, Anda tidak akan bisa login ke Kodland Sparks. Karena itulah ada tur terpandu di bawah ini: tur ini menunjukkan isinya dan apa saja yang bisa dilakukan siswa di sana.')}
  <h3 class="subh">🧭 Apa yang dilakukan siswa di Sparks</h3>
  <div class="grid3">${[
    ['📰','Feed','Mereka melihat dan memberi reaksi pada proyek teman sekelas, serta membaca umpan balik dari mentor AI.'],
    ['📁','My projects','Semua yang mereka simpan atau publikasikan, di satu tempat.'],
    ['🚀','Publish project','Mereka membagikan proyek yang sudah jadi, memilih siapa yang bisa melihatnya, dan bisa mendapatkan hadiah.'],
    ['🎨','Studio · Creative mode','Tempat mereka berkarya di kelas: game dan aplikasi web, Python, Scratch, pixel art, animasi, musik, skin.'],
    ['🏆','Studio · Challenges mode','Tugas terstruktur dengan pengecekan otomatis — dan kristal sebagai hadiahnya.'],
    ['🤖','AI helper & AI tutor','Di sinilah AI Buddy / mentor AI berada: tips, ide, dan penjelasan — AI mengusulkan, kreator yang memutuskan.']
  ].map(x => `<div class="ti" style="padding:18px"><span class="tie" style="font-size:46px">${x[0]}</span><h3>${x[1]}</h3><p>${x[2]}</p></div>`).join('')}</div>
  <h3 class="subh">💬 Umpan balik di Sparks</h3>
  <p class="p">Tidak ada fitur like atau komentar konvensional. Sebagai gantinya, siswa memberikan <b>reaksi</b> (emoji), menulis <b>ulasan</b> dalam tiga kolom — kesan keseluruhan, kelebihan, dan hal yang perlu diperbaiki — dan bisa saling mengikuti. Gamifikasinya berjalan dengan alur <b>kristal → peti → hadiah</b>. Ulasan dari tutor ditandai khusus, agar siswa mengenali umpan balik resmi.</p>
  ${callout('tip', '🔗', '<b>Memublikasikan di Sparks dan mengirim tautan di platform Kodland adalah dua langkah yang berbeda.</b> Di banyak pelajaran, siswa memublikasikan proyeknya lalu menempelkan tautannya di sebuah kartu — ingatkan mereka untuk melakukan keduanya.')}
  ${callout('tip', '🧭', 'Sekarang ikuti turnya. Ini adalah replika Kodland Sparks: Anda akan mengunjungi Feed, memublikasikan sebuah proyek, membuka Studio dan melihat proyek Python, proyek Scratch, dan sebuah gambar, lalu diakhiri dengan AI helper dan kristal.')}
  ${launch('⚡', 'Simulasi 3 dari 3', 'Panduan Kodland Sparks', 'Tur terpandu platform yang digunakan siswa Anda: Feed, My projects, Publish project, Studio dengan semua jenis proyek, AI helper, dan hadiah.', CONFIG.SPARKS_SIM, '⚡ Buka panduan Kodland Sparks')}
  ${codeBox('sparksCode')}`,

/* ---------------- Module 3 ---------------- */
structure:() => `
  <p class="p">Di kursus dengan model baru, pelajaran bukan lagi presentasi dengan blok-blok besar dan slide yang memberi tahu Anda kapan harus “merangkum” atau “menutup”. Sebuah pelajaran adalah rangkaian <b>kartu aktivitas</b> di platform, dan setiap kartu membawa kontennya sendiri untuk siswa dan catatannya sendiri untuk Anda. Artinya, ada satu hal besar: <b>Anda yang mengatur ritme pelajaran — bukan slide.</b></p>
  <h3 class="subh">🏷️ Label menunjukkan jenis momen yang sedang berlangsung</h3>
  <p class="p">Banyak kartu memiliki label di Teacher Notes-nya, seperti <b>(CORE)</b> atau <b>(SUBMIT)</b>. Label ini memberi tahu Anda secara sekilas momen pengajaran seperti apa kartu tersebut — dan seberapa besar ruang yang perlu diberikan untuk kemandirian siswa. Ketuk masing-masing:</p>
  <div class="grid4">${[['CORE','🧱','Inti pembuatan proyek dalam pelajaran.'],['SELF-CHECK','🪞','Siswa mengecek pemahamannya sendiri.'],['AI-CREATE','🤖','Satu-satunya momen AI digunakan — dengan batasan yang jelas.'],['CHOICE/INTEREST','🎨','Pilihan pribadi: gaya mereka, ide mereka.'],['SUBMIT','📤','Ada sesuatu yang harus dikumpulkan atau dipublikasikan.'],['PEER-FEEDBACK','👥','Teman sekelas saling mengomentari karya.'],['REFLECT','💭','Momen untuk merenungkan apa yang telah dipelajari.'],['CHALLENGE','🏆','Tantangan tambahan yang opsional.'],['DEBUG','🐞','Menemukan dan memperbaiki bug yang sengaja disisipkan.'],['SYSTEM-TEST','🧪','Menguji seluruh proyek dari awal sampai akhir.']].map(t => `<button class="oq" data-oq><b>${t[1]} ${t[0]}</b><span>${t[2]}</span></button>`).join('')}</div>`,

seeing:() => `
  <p class="p">Karena tidak ada slide yang mengingatkan Anda, menjaga struktur pelajaran kini ada di tangan Anda. Penilaian kualitas melihat setiap pelajaran secara utuh: <b>pemanasan</b>, <b>tujuan pelajaran</b>, <b>praktik</b>, <b>pertanyaan</b> yang Anda ajukan, <b>rekap</b>, <b>PR</b>, dan <b>pratinjau</b> pelajaran berikutnya.</p>
  <p class="p">Pelajaran dengan model baru biasanya hidup dan menarik. Tantangannya adalah menjaga agar struktur tidak hilang di tengah jalan — terutama di awal dan di akhir pelajaran:</p>
  <div class="okbad">
    <div class="ok"><h3>💚 Pertahankan</h3><ul><li>Melibatkan beberapa siswa.</li><li>Memanggil siswa dengan namanya.</li><li>Memberi waktu praktik yang nyata.</li></ul></div>
    <div class="bad"><h3>💗 Yang perlu diperkuat</h3><ul><li>Pemanasan dan sapaan.</li><li>Pengecekan PR.</li><li>Pertanyaan yang membuat siswa menjelaskan penalarannya.</li><li>Rekap di akhir.</li><li>Teaser untuk pelajaran berikutnya.</li></ul></div>
  </div>
  <p class="p" style="margin-top:16px">Semua ini adalah kebiasaan, dan kebiasaan bisa dibangun. Bagian selanjutnya dari modul ini memberi Anda tiga kebiasaan: pembukaan yang baik, pertanyaan penalaran yang ditujukan kepada siswa tertentu, dan rutinitas penutup yang konsisten.</p>`,

opening:() => `
  <p class="p">Pembukaan yang baik hanya butuh beberapa menit, tetapi menentukan semua yang terjadi setelahnya: siswa merasa disambut, ingat sampai mana proyek mereka, menunjukkan apa yang mereka kerjakan di rumah, dan tahu apa yang ingin dicapai di pelajaran hari ini. Pembukaan terdiri dari empat bagian. Telusuri satu per satu — lengkap dengan kalimat nyata yang bisa Anda gunakan dan video dari pelajaran sungguhan:</p>
  ${stc('open')}
  ${callout('tip', '⏱️', 'Buat tetap singkat: <b>sekitar 5–7 menit</b> untuk keempat bagian sekaligus. Pelajaran yang dimulai dengan kedekatan berjalan lebih baik — bukan lebih lambat.')}`,

reasoning:() => `
  <p class="p">“Sudah jelas?” hampir selalu dijawab “ya” — dan tidak memberi tahu Anda apa-apa. Pertanyaan yang efektif adalah pertanyaan yang membuat siswa <b>menjelaskan penalarannya</b>: mengapa sesuatu terjadi, bagaimana mereka tahu, apa yang akan berubah jika… Dan pertanyaan ini paling efektif saat Anda <b>menujukannya kepada siswa tertentu, dengan menyebut namanya</b>.</p>
  <div class="card">
    <div class="wh"><b>Tertutup atau penalaran? Ganti dan bandingkan</b><span class="tag">Coba</span></div>
    <div class="seg" data-cmp="questions"><button data-k="v" aria-pressed="true">😐 Tertutup</button><button data-k="s" aria-pressed="false">🧠 Penalaran</button></div>
    <div class="fbx" data-cmpout="questions"></div>
  </div>
  <h3 class="subh">🎯 Pertanyaan mana yang membuat siswa berpikir? Tentukan untuk masing-masing</h3>
  <div class="sorter" id="sorter">${[
    ['🙋','“Leo, bagaimana caramu membuat koinnya menghilang saat pemain menyentuhnya?”','yes','<b>Ya.</b> Nama ditambah “bagaimana”: Leo harus menjelaskan logikanya dengan kata-katanya sendiri.'],
    ['🙂','“Semua oke? Kita lanjut?”','no','<b>Tidak.</b> Pertanyaan ya/tidak untuk seluruh grup — tidak ada yang perlu berpikir untuk menjawabnya.'],
    ['🔍','“Ana, menurutmu apa yang akan terjadi kalau baris ini kita hapus? Coba, lalu ceritakan ke kami.”','yes','<b>Ya.</b> Ia memprediksi, menguji, dan menjelaskan — Learning Loop dalam satu pertanyaan.'],
    ['✅','“Sudah jelas cara kerja skornya?”','no','<b>Tidak.</b> Anda akan mendapat jawaban “ya”, entah sudah jelas atau belum. Lebih baik minta seseorang menjelaskannya.']
  ].map(r => `<div class="srow" data-ans="${r[2]}"><span class="sei">${r[0]}</span><span class="stx">${r[1]}</span><span class="sbtns"><button data-pick="yes">🧠 Membuat berpikir</button><button data-pick="no">😐 Tidak</button></span><span class="sfb">${r[3]}</span></div>`).join('')}</div>
  ${callout('good', '💡', 'Sebarkan pertanyaannya: ke siswa yang berbeda, di momen yang berbeda — saat checkpoint, saat mereka membangun proyek, dan saat rekap.')}`,

closing:() => `
  <p class="p">Akhir pelajaran sering kali terabaikan — karena waktunya habis, atau karena terasa tidak sepenting menyelesaikan aktivitas. Padahal, inilah momen siswa mengungkapkan apa yang mereka pelajari, menjadi penasaran dengan pelajaran berikutnya, dan meninggalkan kelas dengan mengetahui apa yang harus dikerjakan di rumah. Dengan manajemen waktu yang baik, Anda bisa mewujudkannya di setiap pelajaran: sisihkan <b>5–7 menit terakhir</b> untuk <b>rutinitas penutup yang konsisten</b>, dan mulailah tepat waktu meskipun aktivitasnya belum selesai. Cara ini berlaku sama, berapa pun durasi pelajaran Anda: pilih salah satu, lalu geser untuk menelusurinya:</p>
  <div class="tline" id="tline">
    <div class="seg" id="tlLen" style="margin-bottom:12px"><button data-len="60" aria-pressed="true">⏱️ Pelajaran 60 menit</button><button data-len="90" aria-pressed="false">⏱️ Pelajaran 90 menit</button></div>
    <div style="display:flex;align-items:center;gap:14px;flex-wrap:wrap"><span class="clock" id="tlClock">0′</span><input type="range" min="0" max="60" value="0" id="tlRange" style="flex:1;min-width:220px" aria-label="Minute of the lesson"></div>
    <div class="tl-bar"><div class="tl-open" id="tlOpen">Pembukaan</div><div class="tl-main" id="tlMain">Kartu: membangun, mengeksplorasi, memperbaiki, menunjukkan</div><div class="tl-close" id="tlClose">Penutup</div><span class="tl-head" id="tlHead" style="left:0"></span></div>
    <div class="tl-scale" id="tlScale"></div>
    <div class="tl-out" id="tlOut"></div>
  </div>
  <p class="p" style="margin-top:18px">Rutinitas ini terdiri dari tiga langkah. Telusuri satu per satu — masing-masing dengan video dari pelajaran sungguhan:</p>
  ${stc('close')}
  ${callout('warn', '⏰', '<b>Trik yang ampuh:</b> pasang timer <b>5–8 menit sebelum pelajaran berakhir</b>. Saat timer berbunyi, Anda mulai menutup — di mana pun posisi Anda. Kartu yang belum selesai bisa dilanjutkan di pelajaran berikutnya atau menjadi bagian dari PR.')}`,

metrics:() => `
  <div class="defn"><span class="de">📈</span><p><b>Slide-nya sudah tidak ada — tetapi strukturnya tetap ada.</b> Ingat, struktur pelajaran sangat berkaitan dengan metrik penting seperti <b>kehadiran</b>, <b>retensi</b>, dan <b>pengumpulan PR</b>. Mengingatkan siswa tentang PR, menjelaskan dan membahasnya, melakukan pemanasan dan penutupan, menjelaskan tujuan pelajaran, serta memberi pratinjau pelajaran berikutnya — semuanya berkontribusi pada keterlibatan, retensi, dan kehadiran siswa.</p></div>
  <h3 class="subh">Tiga metrik, tiga kebiasaan konkret</h3>
  <div class="trio">
    <div class="ti"><span class="tie">🗓</span><h3>Kehadiran</h3><p>Catat di awal, saat pemanasan, selagi siswa bersiap. Jangan menundanya sampai akhir kelas, saat Anda sedang menutup pelajaran dan mudah lupa.</p></div>
    <div class="ti"><span class="tie">📚</span><h3>PR</h3><p>Karena PR sekarang adalah “iterasi berikutnya dari proyek yang sama”, cek PR di dalam checkpoint pelajaran sebelumnya. Jika seorang siswa tidak punya apa pun untuk ditunjukkan, itu sinyal bagi Anda untuk mencari tahu apakah ia terkendala masalah teknis, bukan sekadar mencatat nilai nol.</p></div>
    <div class="ti"><span class="tie">💚</span><h3>Retensi</h3><p>Siswa yang berhenti memublikasikan karya di Sparks, atau berhenti mengumpulkan tugasnya, biasanya mulai kehilangan minat sebelum berhenti hadir. Kedua sinyal itu adalah peringatan paling dini bagi Anda.</p></div>
  </div>
  ${callout('warn', '⚠️', '<b>Ingat:</b> pada aktivitas di mana siswa mengirim teks, tautan, atau file, tugas mereka hanya tercatat setelah mereka mengeklik <b>“Send”</b>. Kelas yang terasa sangat seru tetap bisa tercatat dengan penyelesaian classwork 0%. Jadikan pengingat ini bagian dari rutinitas penutup Anda.')}`,

qcheck:() => `
  <p class="p">Berikut seluruh isi modul ini dalam satu daftar periksa. Simpan di dekat Anda selama pelajaran-pelajaran pertama, sampai semuanya menjadi kebiasaan:</p>
  <div class="card"><div class="wh"><b>✅ Daftar periksa kualitas pelajaran saya</b><span class="tag">Centang satu per satu</span></div>
    <div class="ckgroup">☑️ Sebelum pelajaran</div>
    <div class="cklist">${['Saya sudah membaca Teacher Notes pelajaran ini di Backoffice.','Saya juga sudah membaca pelajaran <b>berikutnya</b>, agar bisa membangun rasa penasaran saat penutupan.','Saya sudah membuka hasil akhir yang akan saya tunjukkan di awal (video, GIF, atau proyek yang berfungsi).','Saya tahu satu langkah AI yang diizinkan di pelajaran ini, beserta batas cakupannya.','Saya tahu di mana template cadangan berada, untuk berjaga-jaga jika ada proyek yang rusak.','Saya punya rencana untuk mencatat kehadiran saat pemanasan.','Saya akan mengingatkan siswa untuk mengeklik <b>“Send”</b> pada aktivitas yang memerlukannya sebelum pelajaran ditutup.'].map((t, i) => `<button class="ck" data-ck="b${i}"><span class="ckb"></span><span>${t}</span></button>`).join('')}</div>
    <div class="ckgroup">🎬 Pembukaan</div>
    <div class="cklist">${['Saya menyapa setiap siswa dengan namanya dan melakukan pemanasan singkat.','Saya mengaitkan pelajaran hari ini dengan pelajaran sebelumnya.','Saya mengecek PR dan menyebutkan satu hal spesifik yang sudah bagus.'].map((t, i) => `<button class="ck" data-ck="o${i}"><span class="ckb"></span><span>${t}</span></button>`).join('')}</div>
    <div class="ckgroup">🧠 Selama pelajaran</div>
    <div class="cklist">${['Saya mengajukan pertanyaan penalaran kepada siswa tertentu, dengan menyebut namanya.','Saya terus melibatkan beberapa siswa dan memberi waktu praktik yang nyata.','Saya memantau waktu agar penutupan dimulai tepat waktu.'].map((t, i) => `<button class="ck" data-ck="d${i}"><span class="ckb"></span><span>${t}</span></button>`).join('')}</div>
    <div class="ckgroup">🏁 Penutup — 5–7 menit terakhir</div>
    <div class="cklist">${['Siswa melakukan rekap: mereka menyebutkan apa yang mereka pelajari.','Saya memberikan teaser yang memotivasi untuk pelajaran berikutnya.','Saya menjelaskan PR berikutnya dan cara mengumpulkannya.'].map((t, i) => `<button class="ck" data-ck="c${i}"><span class="ckb"></span><span>${t}</span></button>`).join('')}</div>
  </div>`
};
