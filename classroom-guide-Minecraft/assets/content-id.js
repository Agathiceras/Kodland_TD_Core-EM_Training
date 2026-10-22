/* ============================================================
   EM lesson guide (Classroom) · Minecraft course (Craftforge, ages 8–9) · INDONESIAN
   - Guide texts (CONTENT.ui, welcome, guide, finish): translated into Indonesian.
   - Lesson cards (CONTENT.activities): Indonesian, translated from the Italian lesson file.
   Other languages: copy this file as content-xx.js, set lang / media / dir, translate the guide
   texts and replace the cards with the lesson of that language.
   Keep HTML tags, ${...} code, keys, ids and file names unchanged.
   ============================================================ */
window.CONTENT = { lang: 'id' };
CONTENT.media = 'Media_Minecraft_ITA/';   // this language's screenshots (the shared illustrations are in Media_Minecraft_COMMON/)
CONTENT.video = '';                       // Google Drive /preview link of the first card's video ('' = placeholder)
CONTENT.dir = 'ltr';                      // 'rtl' for Arabic

/* =========================================================
   INTERFACE STRINGS (page title, replicated Classroom, guide card)
   ========================================================= */
CONTENT.ui = {
  title: 'Panduan Pelajaran EM · Minecraft',

  // Classroom header
  headerTitle: 'Craftforge · Pelajaran',
  online: '2 online',
  guideChip: 'Panduan pelajaran EM',
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
  tutorYou: 'Tutor (Anda)',
  following: 'Following the teacher',

  // Lesson platform header shown inside Assignments
  platformLang: 'ID ˅',
  platformUser: 'Tutor',

  // Shared pieces of the lesson cards (in the lesson's language)
  teacherNotes: 'Teacher notes',
  submit: '✔ Kirim',
  choose: 'Pilih…',
  uploadFile: 'Lampirkan file',
  videoSoon: 'Video pelajaran',

  // Guide card (coach)
  coachStep: (n, total) => `Panduan pelajaran EM · ${n}/${total}`,
  next: 'Berikutnya →',
  clickHint: '👆 Klik elemen yang disorot',
  openSections: (opened, total) => `Buka setiap bagian (${opened}/${total})`,
  scrollEndNotes: 'Gulir sampai akhir catatan',
  scrollEndCard: 'Gulir sampai akhir kartu'
};

/* =========================================================
   WELCOME PAGE
   ========================================================= */
CONTENT.welcome = {
  kicker: 'Model Pendidikan Baru · Pelatihan tutor',
  title: '<span>Panduan</span> pelajaran EM',
  lead: 'Panduan ini menunjukkan seperti apa pelajaran <b>model pendidikan baru (EM)</b> di Classroom. Panduan ini memakai kartu-kartu pertama dari pelajaran EM sungguhan di kursus Minecraft — <b>Craftforge, Pelajaran 1: Api Pertama</b> — dan seorang siswa, Sofia, yang sudah berada di kelas.',
  seeTitle: 'Yang akan Anda lihat',
  see: [
    'Bagaimana sebuah <b>pelajaran EM</b> disusun: serangkaian kartu, dengan semua panduan berada di dalam pelajaran itu sendiri.',
    'Apa yang <b>dilihat tutor</b> dan apa yang <b>dilihat Sofia</b>: <b>Teacher notes</b> ada di dalam setiap kartu, dan hanya tutor yang bisa melihatnya.',
    '<b>Teacher notes pertama</b>, yang paling lengkap dalam pelajaran: cerita, tujuan, peran Anda, rencana waktu, dan — di pelajaran pertama sebuah kursus — video penjelasan.',
    'Cara menggunakan <b>Lead the group</b>, agar siswa mengikuti kartu yang Anda buka.'
  ],
  howTitle: 'Cara menggunakannya',
  howText: 'Ini adalah panduan, bukan simulasi latihan: tidak ada keputusan yang harus diambil dan tidak ada yang bisa salah. Cukup ikuti langkah-langkah yang disorot dan klik di tempat yang ditunjukkan panduan. Anda bisa mengulanginya sebanyak yang Anda mau.',
  start: 'MULAI PANDUAN →'
};

/* =========================================================
   LESSON CONTENT (Craftforge, ages 8–9 — Lesson 1 "Api Pertama")
   Each card: title (shown in the Assignments list and above the card) + html, built with
   the page's helpers: tnotes = Teacher notes box, spoiler = collapsible section,
   media = picture + text, test = quiz, choice = choice cards, essay = answer box,
   fileAnswer = file upload, gallery = pictures side by side, note = titled example box,
   linkBtn = button, video = the first card's video.
   C('file.png') = an illustration shared by every language (Media_Minecraft_COMMON/): keep these as they are.
   M('file.png') and gallery([...]) = screenshots of this language's folder (CONTENT.media): use your lesson's file names.
   ========================================================= */
CONTENT.activities = ({ M, C, tnotes, spoiler, media, banner, ul, ol, test, essay, note, linkBtn, gallery, choice, fileAnswer, video }) => [
  { title:`Gambaran pelajaran: Api Pertama`, html:
    tnotes(`
      <h1>Persiapan pelajaran: Api Pertama</h1>
      <h2>Gambaran umum pelajaran</h2>
      <p>Ini adalah pelajaran pertama kursus untuk anak usia 8–9 tahun. Dunia menjadi gelap setelah <strong>Glitch Besar</strong>: warna-warna menghilang, wajah para penduduk dicuri, dan semuanya membeku dalam warna abu-abu. Siswa berperan sebagai <strong>crafter</strong> baru yang dipanggil ke dunia ini. Dalam 60 menit, siswa menghidupkan kembali bagian pertama dunia itu: <strong>membuat wajahnya sendiri</strong> (skin) dan <strong>menetap di pulau rahasia</strong> (membangun tempat berlindung), dengan dipandu oleh Spark, percikan api terakhir yang masih hidup dari Tungku Tempa.</p>
      <p>Alur pelajaran: kunci menuju dunia (memasang launcher) → membuat wajah di Skin Studio → memakainya → masuk ke dunia dengan penampilan baru: hutan bersalju di ujung dunia → dungeon → Reruntuhan Kekacauan → Jembatan Insinyur → desa para penyintas → Pulau Rahasia → membangun tempat berlindung sendiri di pulau → parade semua hal yang hidup kembali.</p>
      ${spoiler(`Misi cerita pelajaran`, `<p>Glitch Besar membuat dunia menjadi gelap dan mencuri wajah para penduduknya. Spark, percikan api terakhir yang masih hidup dari Tungku Tempa Agung, selamat dari Glitch Besar, menemukan seorang crafter baru, dan berbagi cahayanya dengannya. Tugas crafter adalah membuat wajahnya sendiri, menempuh jalan menuju dunia yang masih hidup, dan membangun tempat berlindung di pulau yang kosong: markas untuk tantangan-tantangan berikutnya. Setiap warna dan setiap blok membuat Glitch Besar mundur selangkah.</p>`)}
      ${spoiler(`Tujuan utama pelajaran`, `<p>Bimbing setiap siswa melalui siklus lengkap hasil pertamanya: menciptakan crafter, menggambar skin langsung di launcher, memakainya, menempuh jalan sampai ke pulau, membangun tempat berlindung sendiri, dan menunjukkan hasilnya kepada grup.</p>`)}
      ${spoiler(`Hasil utama`, ul([`Skin sudah berbeda dari Steve/Alex yang abu-abu dan sudah <strong>dipakai</strong> dengan tombol Wear: siswa masuk ke dunia dengan crafter miliknya sendiri.`, `Di pulau ada tempat berlindung di titik yang dipilih siswa: dinding, atap, pintu masuk, satu detail, dan papan tanda dengan nickname-nya.`, `Siswa sudah menunjukkan hasilnya dan menyebutkan apa yang “hidup kembali”.`]))}
      ${video()}
      <h2>Peran tutor</h2>
      <p>Anda adalah narator dan pemandu cerita, bukan salah satu tokohnya. Ciptakan suasana yang hangat dan penuh petualangan, dan ceritakan kisahnya dengan kata-kata Anda sendiri: dunia telah menjadi gelap, kedatangan crafter sudah ditunggu, dan setiap langkah menghidupkan dunia kembali. Spark, cahaya kecil yang hidup dan menemani siswa, adalah pahlawan cerita ini: ia hidup di dalam teks kartu-kartu dan berbicara kepada siswa dari sana. Anda tidak perlu memerankan suaranya; jika mau, bacakan kalimat-kalimatnya di kartu dengan nada yang hangat dan ceria. Mulailah dengan perkenalan, kesepakatan para crafter, pengecekan koneksi, dan pemasangan launcher. Segera mulai unduhan game, agar unduhannya terus berjalan di latar belakang. Buat wajah di Skin Studio dan klik <strong>Wear</strong>: dengan begitu siswa masuk ke dunia dengan penampilan barunya. Tunjukkan gambaran akhirnya kepada kelas: tokoh abu-abu dan pulau yang kosong, lalu bagaimana keduanya menjadi hidup. Pandu kelas di sepanjang rute (dungeon → Reruntuhan Kekacauan → jembatan → desa → pulau) sambil berbagi layar: rutenya sama untuk semua siswa. Jaga ritme dengan checkpoint seperti: “Sudah sampai? Tulis + di chat.”</p>
      ${spoiler(`Durasi tahapan pelajaran`, `<table>
        <tr><th>Bagian</th><th>Kartu</th><th>Durasi</th></tr>
        <tr><td>Pembukaan</td><td>Dunia memanggilmu 🔥</td><td>2 menit</td></tr>
        <tr><td></td><td>Glitch Besar suka kalau kamu menyerah 🤝</td><td>2 menit</td></tr>
        <tr><td></td><td>Sebelum berangkat 🎧</td><td>2 menit</td></tr>
        <tr><td></td><td>Kunci yang menunggumu 🗝️</td><td>6 menit</td></tr>
        <tr><td></td><td>Kumpulkan timmu 🛠️</td><td>3 menit</td></tr>
        <tr><td>Bagian inti</td><td>Di sinilah wajah dibuat 🎨</td><td>3 menit</td></tr>
        <tr><td></td><td>Kamu tidak abu-abu lagi 🧑‍🎨</td><td>7 menit</td></tr>
        <tr><td></td><td>Dunia akan mengenalimu ✨</td><td>4 menit</td></tr>
        <tr><td></td><td>Di ujung dunia 🧭</td><td>8 menit</td></tr>
        <tr><td></td><td>Tiga teka-teki untuk istirahat 🎲</td><td>4 menit</td></tr>
        <tr><td></td><td>Tak ada pemiliknya? Berarti milikmu 🏠</td><td>10 menit</td></tr>
        <tr><td>Penutup</td><td>Begitu banyak cahaya menyala 🎉</td><td>5 menit</td></tr>
        <tr><td></td><td>Dunia bernapas lagi ✨</td><td>2 menit</td></tr>
        <tr><td></td><td>Bawa pulang satu percikan ✨</td><td>2 menit</td></tr>
      </table>`)}
      ${spoiler(`Waktu: poin penting dan risiko`, ul([`<strong>Di mana waktu sering habis:</strong> “Buat wajahmu” (7), “Jalan melewati dungeon” (8), dan “Jadikan pulau milikmu” (10). Aturannya: skin harus bersifat pribadi, tidak harus sempurna; di sepanjang jalan, ikuti checkpoint tanpa menjelajah bebas; untuk tempat berlindung, 4 elemen sudah cukup.`, `<strong>Game diunduh di latar belakang:</strong> di kartu “Kunci menuju dunia”, yang penting semua siswa <em>sudah mulai</em> mengunduh, bukan sudah selesai. Unduhannya akan berlanjut sendiri selagi kalian berkenalan; bantu siswa yang tertinggal di kartu perjalanan menuju pulau.`, `<strong>Jebakan utama:</strong> siswa menggambar skin lalu mengira sudah selesai. Urutan dalam pelajaran: gambar → tombol hijau <strong>Wear</strong> (“Done!”) → baru masuk ke dunia. Siswa yang masuk tanpa menekan Wear harus keluar lalu masuk lagi.`, `<strong>Wajib ditunjukkan:</strong> di layar Anda, tunjukkan “sebelum/sesudah”: avatar abu-abu menjadi unik dan pulau yang kosong menjadi hidup.`, `<strong>Diferensiasi:</strong> untuk siswa yang lebih lambat: target minimum (mengganti warna pakaian + rumah kecil dengan dinding, pintu, dan obor); untuk siswa yang lebih cepat: profesi crafter di skin-nya dan satu detail tambahan di tempat berlindung.`]))}
      <h2>Penutup pelajaran</h2>
      <p>Parade dunia yang hidup kembali: secara bergiliran, setiap siswa berbagi layar dan menunjukkan crafter serta tempat berlindungnya di pulau; seorang siswa lain menanggapi: “Aku suka…”. Di akhir, tekankan bahwa dunia mulai hidup kembali berkat para siswa. Lalu jelaskan PR secara singkat: sampaikan secara lisan selagi semua masih terhubung, dan baru setelah itu akhiri pelajaran.</p>
      <h3>Selanjutnya, baca Teacher notes di setiap kartu pelajaran.</h3>`, 'tn-first') +
    `<h1>Api Pertama 🔥</h1>
     <blockquote><p>Dunia sudah menjadi gelap. Glitch Besar mencuri warna dan wajah semua orang: semuanya berubah menjadi sosok abu-abu yang sama. Tapi selama masih ada satu percikan yang menyala, dunia bisa dibuat lagi. Hari ini kamu adalah seorang crafter, dan kamu akan mulai dari dirimu sendiri.</p></blockquote>
     <h2>Cek perlengkapanmu</h2>` +
    ul([`Kamera dan mikrofonmu berfungsi.`, `Kamu bisa berbagi layar.`]) +
    `<h2>Siapkan tempat belajarmu</h2>` +
    ul([`Tutup tab yang tidak kamu perlukan.`, `Siapkan link launcher dari tutormu: kita akan memasangnya bersama.`, `Bayangkan seperti apa crafter-mu: warnanya, sifatnya, dan satu detail istimewa.`])
  },
  { title:`Dunia memanggilmu 🔥`, html:
    banner(C('e3e62541-c6c6-49a6-b354-6aee1cc44cd4.png')) +
    `<h1>Kamu dipanggil 🔥</h1>
     <blockquote><p>Jauh dari sini, ada sebuah dunia yang menjadi gelap dan butuh bantuan. Dunia itu memanggil kamu. Hari ini kamu akan masuk ke dunia itu dan menyalakan api pertama di sana. Di sampingmu, sepanjang perjalanan, ada Spark, cahaya kecilmu yang setia.</p></blockquote>
     <h3>Yang akan kamu lakukan hari ini</h3>` +
    ul([`Membuat lagi skin-mu yang dicuri Glitch Besar.`, `Dengan penampilan barumu, menyeberangi dungeon sampai ke dunia yang masih hidup, di ujung dunia.`, `Menemukan pulau rahasia, membangun tempat berlindungmu, dan menunjukkannya kepada tim.`]) +
    test(`Apa yang akan kamu punya di akhir pelajaran?`, [`Penampilanmu sendiri dan tempat berlindungmu di pulau`, `Hanya game baru di komputer`, `Tidak ada: hari ini kita cuma mendengarkan penjelasan`]) +
    tnotes(`<p><strong>⏱ Durasi:</strong> 2 menit.</p><p><strong>🎯 Tujuan:</strong> menciptakan suasana petualangan dan menjelaskan secara singkat tujuan kegiatan hari ini.</p><p><strong>🗣 Katakan kepada kelas:</strong> <em>“Hari ini kalian adalah crafter, dan dunia sedang menunggu kalian. Dunia itu hampir padam, tapi bersama-sama kita akan menghidupkannya kembali. Di akhir pelajaran, setiap orang akan punya wajahnya sendiri dan tempat berlindungnya sendiri di pulau.”</em></p><p><strong>✅ Langkah-langkah:</strong> bacakan tiga poin di layar, beri waktu 20 detik untuk tes singkat “Apa yang akan kamu punya di akhir pelajaran?”, konfirmasi jawaban yang benar secara lisan, lalu langsung lanjut ke perkenalan.</p><p><strong>👀 Semua siap jika:</strong> -</p><p><strong>🐛 Masalah:</strong> -</p><p><strong>➡️ Transisi:</strong> “Kita berkenalan dulu, lalu masuk ke dunia.”</p>`)
  },
  { title:`Glitch Besar suka kalau kamu menyerah 🤝`, html:
    banner(C('d598a2bc-fd9d-42dc-9171-0673ead262a4.png')) +
    `<h1>Kesepakatan para crafter 🤝</h1>
     <blockquote><p>Glitch Besar suka kalau kamu menyerah. Skin yang kurang detail atau rumah kecil yang terbakar: itu cara Glitch Besar mencoba menakut-nakutimu, tapi bukan berarti kamu “tidak bisa” mengalahkannya. Ayo kita sepakati bersama bagaimana para crafter saling mendukung.</p></blockquote>
     <h3>Kesepakatan kita</h3>` +
    ul([`Kalau sebuah tantangan belum berhasil, coba dengan cara lain. Jangan menyerah.`, `Kita saling membantu, bukan saling mengejek: setiap orang punya kecepatannya sendiri.`, `Kita mendengarkan dengan tenang saat crafter lain sedang berbicara.`]) +
    tnotes(`<p><strong>⏱ Durasi:</strong> 2 menit.</p><p><strong>🎯 Tujuan:</strong> menciptakan suasana yang tenang; sejak awal sampaikan bahwa kesalahan hanyalah “ulah jahil Glitch Besar”, bukan kegagalan.</p><p><strong>🗣 Katakan kepada kelas:</strong> <em>“Di bengkel tempa, tidak ada yang langsung jadi ahli. Kesalahan hanyalah serangan Glitch Besar. Kalau kamu menyadarinya, perbaiki saja: itulah rahasia sukses.”</em></p><p><strong>✅ Langkah-langkah:</strong> sampaikan aturannya dan minta semua siswa menulis “+” di chat jika mereka setuju.</p><p><strong>👀 Semua siap jika:</strong> -</p><p><strong>🐛 Masalah:</strong> -</p><p><strong>➡️ Transisi:</strong> “Sepakat! Ayo cek perlengkapan, lalu kita berangkat.”</p>`)
  },
  { title:`Sebelum berangkat 🎧`, html:
    banner(C('e39cfe9e-1b0d-4037-b159-fce82f7a3fbb.png')) +
    `<h1>Tes sebelum masuk 🎧</h1>
     <blockquote><p>Sebelum masuk ke dunia, cek perlengkapanmu sebentar, supaya tidak ada yang mengganggumu selama perjalanan.</p></blockquote>
     <h3>🎯 Cek semuanya dalam satu menit</h3>` +
    ol([`Ucapkan “halo” di mikrofon: apakah teman-temanmu bisa mendengarmu?`, `Bisakah kamu menyalakan kamera? Tunjukkan wajah pahlawanmu, supaya dunia tahu siapa kamu!`, `Bisakah kamu berbagi layar?`]) +
    spoiler(`Ada yang tidak berfungsi?`, ol([`Tulis di chat apa yang tidak berfungsi.`, `Sambil kami membantumu, bayangkan crafter-mu.`])) +
    tnotes(`<p><strong>⏱ Durasi:</strong> 2 menit.</p><p><strong>🎯 Tujuan:</strong> menyelesaikan masalah teknis sebelum praktik, supaya siswa tidak kehilangan waktu saat membuat skin.</p><p><strong>🗣 Katakan kepada kelas:</strong> -</p><p><strong>✅ Langkah-langkah:</strong> cek grup dengan cepat dan selesaikan masalah audio, video, dan berbagi layar.</p><p><strong>👀 Siap jika:</strong> semua siswa punya audio dan video, dan bisa berbagi layar.</p><p><strong>🐛 Masalah:</strong> -</p><p><strong>➡️ Transisi:</strong> “Koneksinya sudah oke: sekarang kita perlu mendapatkan kunci untuk masuk ke dunia.”</p>`)
  },
  { title:`Kunci yang menunggumu 🗝️`, html:
    banner(C('f0c256d5-6df0-458f-bcb0-80f17a403c7b.png')) +
    `<h1>Kunci menuju dunia 🗝️</h1>
     <blockquote><p>Kamu tidak bisa masuk ke dunia tanpa kunci. Spark sudah lama menyimpan kunci ini untukmu: <strong>Launcher Kodland untuk Minecraft</strong>. Ayo kita pasang bersama, dan jalan menuju Craftforge akan terbuka.</p></blockquote>
     <h3>🎯 Langkah 1. Unduh 📥</h3>
     <p>Buka link dan unduh file launcher.</p>` +
    spoiler(`🍎 macOS — file .dmg`, `<p>Kalau komputermu memakai prosesor Intel:</p>${linkBtn('[Intel] macOS Kodland Craftforge')}<p>Kalau komputermu memakai prosesor M:</p>${linkBtn('[M] macOS Kodland Craftforge')}`) +
    spoiler(`🪟 Windows — file .exe`, linkBtn('Windows Kodland Craftforge')) +
    `<h3>🎯 Langkah 2. Pasang 🧩</h3>
     <p>🍎 <strong>Mac:</strong> buka file yang sudah diunduh, lalu seret ikon launcher ke folder “Applications” (Aplikasi).</p>` +
    note(`💡 Jangan langsung membuka file di macOS. Ikuti langkah-langkah ini:`, `<p>Buka Terminal (Cmd+Space, lalu ketik “Terminal”) dan tempel baris ini:</p><blockquote><p>xattr -dr com.apple.quarantine "/Applications/Kodland Launcher.app"</p></blockquote><p>Tekan Return.<br>Tidak akan muncul pesan apa pun: itu normal dan artinya sudah berhasil.<br>Buka aplikasinya dari folder “Applications” (Aplikasi) dengan klik dua kali.</p>`) +
    `<p>🪟 <strong>Windows:</strong> jalankan file yang sudah diunduh, lalu klik “Next” (Lanjut).</p>` +
    note(`💡 Kalau Windows tidak mau membuka file:`, `<p>Komputer mungkin bertanya apakah kamu benar-benar ingin membuka file ini. Itu bukan error: itu hanya pengecekan keamanan biasa. Kamu boleh membuka dan memasang file-nya.</p>`) +
    `<h3>🎯 Langkah 3. Masuk 🔑</h3>` +
    ol([`Buka launcher dan klik <strong>“Accedi”</strong> (Masuk).`, `Sebuah jendela akan terbuka di browser: klik “Accedi con Kodland” (Masuk dengan Kodland).`]) +
    gallery(['f092408a-3034-412f-bee7-82ae37feb12a.png', '77384271-2bdd-412e-8a18-e81b82af7ae7.png']) +
    `<h3>🎯 Langkah 4. Tunggu sampai unduhan selesai ⏳</h3>` +
    ol([`Launcher akan mengunduh game secara otomatis. Perhatikan bar hijaunya.`, `Pertama kali, ini butuh waktu agak lama. Sambil bar hijaunya terisi, kita akan berkenalan dan membentuk tim.`]) +
    `<h3>✅ Kamu selesai jika</h3>` +
    ul([`Launcher sudah terpasang dan terbuka.`, `Kamu sudah masuk dengan akun sekolah Kodland-mu.`, `Bar hijaunya bergerak: game sedang diunduh.`]) +
    spoiler(`Ada masalah: kuncinya tidak berfungsi`, ol([`File tidak terunduh: buka lagi link di chat.`, `Komputer tidak mengizinkan pemasangan: minta bantuan orang dewasa atau tutormu.`, `Kamu tidak bisa masuk: pakai akun sekolah Kodland-mu. Kamu tidak perlu membuat akun baru.`, `Bar hijaunya bergerak pelan: itu normal untuk pertama kali. Unduhannya akan berlanjut sendiri.`])) +
    tnotes(`<p><strong>⏱ Durasi:</strong> 6 menit.</p><p><strong>🎯 Tujuan:</strong> setiap siswa sudah memasang dan membuka launcher, sudah masuk dengan akun sekolah Kodland, dan unduhan game sudah dimulai.</p><p><strong>🗣 Katakan kepada kelas:</strong> <em>“Untuk masuk ke dunia, kita butuh kunci: launcher kita. Unduh, pasang, lalu masuk dengan akun sekolah Kodland. Game-nya akan terunduh sendiri, dan sementara itu kita berkenalan.”</em></p><p><strong>✅ Langkah-langkah:</strong> kirim ulang link launcher di chat; tunjukkan di layar Anda keempat langkahnya (unduh → pasang → masuk → tunggu); tegaskan bahwa kata sandi hanya boleh dimasukkan di jendela login Kodland; pastikan bar hijau sudah muncul di layar semua siswa.</p><p><strong>👀 Semua siap jika:</strong> semua siswa sudah membuka launcher, sudah masuk, dan melihat proses unduhan berjalan.</p><p><strong>🐛 Masalah:</strong> jika siswa tidak bisa masuk, pastikan ia hanya memakai akun sekolah Kodland, tanpa membuat akun baru; jika unduhan belum selesai di akhir kartu ini, tidak apa-apa: unduhannya berlanjut di latar belakang. Bantu lagi siswa yang tertinggal di kartu “Di ujung dunia 🧭”.</p><p><strong>➡️ Transisi:</strong> “Kuncinya sudah didapat dan game-nya sedang diunduh: ayo kita kumpulkan tim.”</p>`)
  },
  { title:`Kumpulkan timmu 🛠️`, html:
    banner(C('e3e62541-c6c6-49a6-b354-6aee1cc44cd4.png')) +
    `<h1>Kamu crafter tipe apa? 🛠️</h1>
     <blockquote><p>Setiap crafter punya gayanya sendiri. Ceritakan gaya mana yang paling cocok denganmu: dengan begitu kita akan membentuk tim untuk Dunia Gelap.</p></blockquote>
     <h3>🎯 Perkenalkan dirimu</h3>` +
    ol([`Saat giliranmu, nyalakan mikrofon.`, `Sebutkan nickname crafter-mu.`, `Ceritakan kamu crafter tipe apa dan apa yang suka kamu lakukan di Minecraft.`, `Matikan mikrofon dan dengarkan teman-temanmu.`]) +
    choice(`Kamu crafter tipe apa?`, [[`🏗️ Pembangun`, `Aku suka membangun rumah, menara, dan jalan-jalan.`], [`🧭 Penjelajah`, `Aku suka menjelajahi dunia dan menemukan hal-hal baru.`], [`🎨 Dekorator`, `Aku suka menghias: warna, detail, dan tempat-tempat yang indah.`], [`Lainnya`, `Ceritakan saat giliranmu.`]]) +
    tnotes(`<p><strong>⏱ Durasi:</strong> 3 menit.</p><p><strong>🎯 Tujuan:</strong> memberi setiap siswa momen singkat dan aman untuk memperkenalkan diri dan menghubungkan gayanya dengan skin dan bangunan yang akan ia buat. Sementara itu, game terus terunduh untuk semua siswa.</p><p><strong>🗣 Katakan kepada kelas:</strong> <em>“Dunia Gelap menunggu crafter dari segala tipe. Kamu yang mana: pembangun, penjelajah, atau dekorator? Ini akan berguna sebentar lagi, saat kamu membuat penampilanmu.”</em></p><p><strong>✅ Langkah-langkah:</strong> jawab lebih dulu dengan rumus “nickname + aku crafter tipe apa + apa yang aku suka”; beri giliran berbicara satu per satu; tunjukkan minat yang sama di antara siswa.</p><p><strong>👀 Semua siap jika:</strong> semua siswa sudah ikut berpartisipasi, secara lisan, dengan nickname-nya, atau di chat.</p><p><strong>🐛 Masalah:</strong> -</p><p><strong>➡️ Transisi:</strong> “Timnya sudah siap: ayo kita buat wajah sambil menunggu game selesai diunduh.”</p>`)
  },
  { title:`Di sinilah wajah dibuat 🎨`, html:
    banner(C('5d9beb36-ad2a-4660-b818-fd69cee7a2db.png')) +
    `<h1>Buka Skin Studio 🎨</h1>
     <blockquote><p>Seorang crafter dikenali dari dua hal: wajahnya dan tempat tinggalnya. Kita mulai dari wajah: kamu bisa membuatnya langsung di launcher, di Skin Studio. Bukalah saat game sudah selesai diunduh.</p></blockquote>
     <h3>🎯 Buka Skin Studio</h3>` +
    ol([`Di launcher, buka tab <strong>Create</strong> (“Buat”), lalu kotak <strong>Skins</strong> (“Skin”).`]) +
    gallery(['1d751520-b959-4e61-b377-2dbb9a127bd2.png', 'e3feec19-76e9-48a9-ac8e-b56f6600256e.png']) +
    ul([`Di kanan atas, klik tombol hijau <strong>Create a skin</strong> (“Buat skin”).`]) +
    `<img class="center-img half" src="${M('781ff4fa-5207-4adf-b12a-803edb5e9c2d.png')}" alt="Botão do Skin Studio">` +
    ul([`<strong>Skin Studio</strong> akan terbuka: di sinilah kamu menggambar tokohmu.`]) +
    `<img class="center-img half" src="${M('ed7625c4-6537-44f7-9c36-eff87c0048d7.png')}" alt="Editor do Skin Studio">` +
    note(`💡 Apa saja yang ada di dalamnya`, `<p>Kuas, penghapus, alat isi warna (fill) dan pipet, palet warna, serta tampilan <strong>3D</strong> / <strong>2D map</strong>.</p>`) +
    tnotes(`<p><strong>⏱ Durasi:</strong> 3 menit.</p><p><strong>🎯 Tujuan:</strong> semua siswa sudah membuka Skin Studio dan siap menggambar.</p><p><strong>🗣 Katakan kepada kelas:</strong> <em>“Skin digambar langsung di launcher: Create → Skins → Create a skin.”</em></p><p><strong>✅ Langkah-langkah:</strong> tunjukkan di layar Anda alurnya: Create → Skins → Create a skin → Skin Studio; bacakan dengan jelas label tombol yang berbahasa Inggris.</p><p><strong>👀 Semua siap jika:</strong> -</p><p><strong>🐛 Masalah:</strong> siswa harus masuk lewat Kodland, tanpa membuat akun sendiri; jika Skin Studio tidak terbuka, bantu siswa masuk lagi.</p><p><strong>➡️ Transisi:</strong> “Sekarang kita buat wajahnya: gambar siapa pun yang kamu mau!”</p>`)
  },
  { title:`Kamu tidak abu-abu lagi 🧑‍🎨`, html:
    banner(C('a452569f-1736-4d58-8912-48420f2e7fc9.png')) +
    `<h1>Buat wajahmu 🧑‍🎨</h1>
     <blockquote><p>Glitch Besar membuatmu jadi abu-abu semua. Ayo kembali menjadi dirimu sendiri: gambar crafter yang kamu mau, dengan warna, pakaian, wajah, dan semua detail yang kamu suka. Spark berputar di sekelilingmu: “Pakai cahayaku dan menggambarlah dengan berani!”</p></blockquote>` +
    media(M('a47108ac-c3c8-4c4b-8112-ca9a12c61d23.png'), `<h3>🎯 Gambar crafter-mu</h3>` + ol([`Pilih warna dari palet (atau tambahkan warnamu sendiri).`, `Gambar di tubuh tokoh dengan <strong>kuas</strong>. Kalau salah, pakai <strong>penghapus</strong> atau “Undo” (Batalkan).`, `Putar tokohmu dalam tampilan <strong>3D</strong>, atau aktifkan <strong>2D Map</strong> untuk mewarnai seluruh tubuhnya.`, `Jadikan MILIKMU: gaya rambut, pakaian, wajah, dan detail lainnya, sesukamu.`])) +
    `<h3>✅ Cek hasil kerjamu</h3>` +
    ul([`Apakah skin-mu sudah tidak abu-abu lagi seperti skin bawaan?`, `Apakah idemu sudah terlihat dengan jelas?`]) +
    spoiler(`💡 Ide kalau kamu bingung mau menggambar apa`, ul([`Pahlawan dengan warna favoritmu dan jubah yang berkilau.`, `Crafter pandai besi: celemek dan ikat kepala.`, `Crafter penjelajah: tudung kepala dan ransel.`])) +
    tnotes(`<p><strong>⏱ Durasi:</strong> 7 menit.</p><p><strong>🎯 Tujuan:</strong> setiap siswa menggambar crafter-nya dengan bebas; kriterianya adalah skin tidak lagi abu-abu dan idenya bisa dikenali, bukan harus bagus.</p><p><strong>🗣 Katakan kepada kelas:</strong> <em>“Gambar siapa pun yang kalian mau: ini crafter kalian. Pakai kuas, warna, dan penghapus; putar dalam 3D dan pakai 2D Map untuk mewarnai semuanya. Yang penting, crafter itu milik kalian.”</em></p><p><strong>✅ Langkah-langkah:</strong> tunjukkan kuas, palet, dan tombol pengalih 3D / 2D Map; beri kebebasan memilih dan bantu siswa yang kesulitan; 1–2 menit sebelum waktu habis, beri tanda untuk menyelesaikan.</p><p><strong>👀 Semua siap jika:</strong> skin-nya bukan skin bawaan dan setiap siswa sudah membuat skin-nya sendiri.</p><p><strong>🛟 Diferensiasi:</strong> untuk siswa yang kesulitan, tawarkan salah satu ide dari spoiler, atau sarankan untuk menggambar pakaian tokoh dengan meniru pakaian yang sedang ia kenakan; siswa yang cepat selesai bisa menambahkan detail, motif, atau menyempurnakan wajah.</p><p><strong>🐛 Masalah:</strong> jika siswa terus menggambar ulang, ingatkan: “Yang penting milikmu, bukan sempurna”; jika siswa mewarnai bagian yang salah, 2D Map menunjukkan letak setiap bagian. Untuk detail dan nama, jangan gunakan data pribadi.</p><p><strong>➡️ Transisi:</strong> “Sudah siap? Ayo pakai wajah barumu.”</p>`)
  },
  { title:`Dunia akan mengenalimu ✨`, html:
    banner(C('ebf26035-3f2a-4858-ba30-54c8b41fe49c.png')) +
    `<h1>Pakai skin-mu ✨</h1>
     <blockquote><p>Skin-mu sudah jadi, tapi di dalam dunia kamu masih terlihat seperti sebelumnya. Pakai skin-mu, dan dunia akan mengenalimu sebagai pahlawan.</p></blockquote>
     <h3>🎯 Dapatkan kembali penampilanmu</h3>` +
    ol([`Di Skin Studio, klik tombol hijau <strong>Wear</strong> (“Pakai”).`, `Akan muncul pesan “Done! This skin is on your character now.” (Selesai! Skin ini sekarang dipakai tokohmu): sekarang kamu sudah siap.`, `Lihat tokohmu di launcher: ia langsung memakai skin-mu.`]) +
    gallery(['2a3951ce-f1ad-4867-b26a-6f6425ad7aad.png', 'e1d880bb-57f9-424e-8d59-2c92769ad60f.png']) +
    note(`💡 Penting`, `<p>Pakai wajah barumu <strong>sebelum</strong> masuk ke dunia: dengan begitu kamu memulai perjalanan dengan penampilanmu sendiri. Kalau kamu masuk tanpa menekan <strong>Wear</strong>, di dalam dunia kamu akan menjadi Steve yang abu-abu.</p>`) +
    spoiler(`Ada yang salah: aku masih abu-abu`, ol([`Apakah kamu sudah mengeklik tombol hijau <strong>Wear</strong>? Kamu seharusnya melihat pesan “Done!”.`, `Apakah kamu sudah masuk ke dunia? Keluar lalu masuk lagi: penampilanmu akan diperbarui saat kamu masuk lagi.`])) +
    test(`Apa yang harus kamu lakukan supaya wajahmu muncul di dalam dunia?`, [`Menekan tombol hijau “Wear” sebelum masuk ke dunia`, `Menggambar skin lalu menutup Skin Studio`, `Tidak perlu apa-apa: wajahmu akan muncul sendiri`]) +
    tnotes(`<p><strong>⏱ Durasi:</strong> 4 menit.</p><p><strong>🎯 Tujuan:</strong> semua siswa menekan Wear <strong>sebelum</strong> masuk ke dunia, sehingga grup memulai perjalanan dengan skin masing-masing.</p><p><strong>🗣 Katakan kepada kelas:</strong> <em>“Kalau kamu sudah puas dengan skin-mu, tekan tombol hijau ‘Wear’. Saat kamu melihat ‘Done!’, wajah itu sudah jadi milikmu. Ayo kita pakai sekarang, supaya kita masuk ke dunia dengan penampilan kita sendiri.”</em></p><p><strong>✅ Langkah-langkah:</strong> tunjukkan tombol Wear; pastikan pesan “Done!” muncul untuk semua siswa dan tokoh di launcher sudah berubah. Ini langkah yang sangat penting: jangan dilewati. Di akhir, berikan tes singkat untuk memperkuat aturannya: “Wear dulu, baru masuk ke dunia.”</p><p><strong>👀 Siap jika:</strong> semua siswa melihat “Done!” dan di launcher terlihat tokoh mereka sendiri, bukan Steve yang abu-abu.</p><p><strong>🐛 Masalah:</strong> siswa sudah membuat wajahnya dan bisa melihatnya, tapi belum mengeklik Wear: ini sangat sering terjadi. Cek setiap siswa secara langsung. Siswa yang sudah masuk ke dunia harus keluar lalu masuk lagi.</p><p><strong>➡️ Transisi:</strong> “Wajahnya sudah siap: sekarang kita masuk ke dunia.”</p>`)
  },
  { title:`Di ujung dunia 🧭`, html:
    banner(C('94f930d3-530e-401f-8fbb-d47d09c6294e.png')) +
    `<h1>Jalan melewati dungeon 🧭</h1>
     <blockquote><p>Wajah pahlawanmu sudah siap: saatnya masuk ke dunia. Buka matamu: ada hutan bersalju, sunyi, dan udaranya dingin sekali. Tepat di depanmu ada pintu masuk sebuah dungeon yang gelap. Tidak ada jalan lain: dunia yang masih hidup ada di seberang sana. Spark terbang di depanmu: “Jangan takut, aku akan menerangi jalanmu!”</p></blockquote>
     <h3>🎯 Tempuh seluruh jalannya</h3>` +
    ol([`Di tab “Gioca” (Main), masukkan kode pelajaran yang diberikan tutormu dan buka dunianya: kamu akan berada di hutan bersalju.<img class="center-img" src="${M('47b3c4f8-24f4-4dee-a24e-44e724699edb.png')}" alt="">`, `Lihat dirimu: di dalam dunia, kamu sudah memakai penampilan barumu.`, `Masuk ke dungeon dan telusuri sampai ujung.<img class="center-img" src="${C('59db903b-558c-40ef-b4e1-a70613787aa1.png')}" alt="">`, `Di dalamnya, kamu akan sampai di <strong>Reruntuhan Kekacauan</strong>. Glitch Besar yang meninggalkannya: lihat apa yang terjadi pada dunia tanpa crafter.`, `Setelah reruntuhan, temukan <strong>Jembatan Insinyur</strong>: para penyintas yang membangunnya. Seberangi jembatan itu.`, `Dari jembatan, kamu bisa melihat <strong>desa</strong>, dan di baliknya, tepat di ujung dunia, ada <strong>Pulau Rahasia</strong>. Pergilah ke sana: pulau ini tidak dimiliki siapa pun, jadi pulau ini milikmu.`]) +
    `<h3>Apa yang kamu perhatikan?</h3>
     <p>Ucapkan atau tulis: apa bedanya pulau dengan desa? Betul: di desa ada orang-orang yang tinggal, sedangkan di pulau untuk sekarang belum ada apa-apa: tidak ada rumah, tidak ada api unggun. Tapi pulau itu tidak dimiliki siapa pun. Jadi, pulau itu milikmu.</p>` +
    essay(`Apa bedanya pulau dengan desa? Apa lagi yang kamu perhatikan?`, `Contoh: di desa ada rumah dan penduduk, sedangkan pulaunya kosong`) +
    spoiler(`Aku tersesat di jalan`, ol([`Berhenti, lalu tulis di chat apa yang kamu lihat di dekatmu: es, reruntuhan, atau jembatan.`, `Tutormu akan memberi tahu ke mana kamu harus pergi dan menunjukkan tempatnya di layarnya. Spark akan menerangi jalannya.`])) +
    tnotes(`<h3>Kode dunia untuk siswa:</h3><blockquote><p>Welcome to CraftForge</p></blockquote><p><strong>⏱ Durasi:</strong> 8 menit.</p><p><strong>🎯 Tujuan:</strong> memandu semua siswa di sepanjang rute hutan bersalju → dungeon → Reruntuhan Kekacauan → Jembatan Insinyur → desa → Pulau Rahasia, supaya setiap siswa merasa sudah menyelesaikan perjalanan dan memahami bahwa pulau itu adalah tempatnya.</p><p><strong>🗣 Katakan kepada kelas:</strong> <em>“Wajah kalian sudah siap: ayo masuk. Kalian ada di ujung dunia, di hutan bersalju, dan di depan kalian ada dungeon. Ikuti aku di layar. Setelah dungeon ada Reruntuhan Kekacauan, lalu jembatan para penyintas, dan di ujung dunia ada sebuah pulau. Pulau itu tidak dimiliki siapa pun dan akan menjadi tempat berlindung kalian.”</em></p><p><strong>✅ Langkah-langkah:</strong> bagikan kode pelajaran. Pastikan setiap siswa sudah memakai skin-nya sendiri. Bagikan layar dan tempuh jalannya sendiri sambil menjelaskan setiap belokan. Buat dua checkpoint: di Reruntuhan Kekacauan dan di jembatan. Katakan: “Kalau sudah sampai, tulis + di chat.” Tunggu siswa yang tertinggal selama 20–30 detik. Tunjukkan rute dari desa ke pulau. Di pulau, beri waktu satu menit untuk menjelajah. Kumpulkan 2–3 jawaban untuk pertanyaan: “Apa bedanya pulau dengan desa?”. Siswa yang tidak ingin berbicara bisa menulis jawabannya di kolom pada kartu.</p><p><strong>👀 Semua siap jika:</strong> semua siswa sudah menandai kedua checkpoint di chat, sudah berada di pulaunya masing-masing, dan tahu bahwa mereka akan membangun di sana.</p><p><strong>🐛 Masalah:</strong> dungeon terasa menakutkan: ingatkan bahwa kalian ada di mode Kreatif dan tidak ada yang bisa terluka; seorang siswa tersesat: minta ia menjelaskan apa yang ada di sekitarnya (es / reruntuhan / jembatan) dan tunjukkan tempat itu di layar Anda; siswa yang sampai lebih dulu: minta ia menjelajahi pulau dan belum membangun apa pun sampai kegiatan berikutnya dimulai; seorang siswa masuk sebagai Steve abu-abu: Skin Studio → Wear → masuk lagi; jika game seseorang masih diunduh, pandu ia menempuh jalannya secara terpisah selagi siswa lain menjelajahi pulau.</p><p><strong>➡️ Transisi:</strong> “Kita sudah menemukan pulaunya: ayo istirahat sebentar, lalu kita bangun rumah kita.”</p>`)
  },
  { title:`Tiga teka-teki untuk istirahat 🎲`, html:
    banner(C('9eecc25b-0273-414e-bced-7f1c71320741.png')) +
    `<h1>Istirahat sejenak para crafter 🎲</h1>
     <blockquote><p>Kamu sudah menempuh jalannya dan menemukan pulau: sekarang istirahat sebentar sebelum mulai membangun. Kamu belum perlu membangun apa pun: tebak nama game dari emoji, lalu kirim jawabanmu di chat saat diminta.</p></blockquote>` +
    media(C('65d4af1a-bc18-4ee1-91ba-6903d3a04432.png'), `<h3>Tantangan: tebak game dari emoji</h3>` + ol([`Tutormu akan menunjukkan tiga emoji yang menyembunyikan nama sebuah game terkenal.`, `Tulis tebakanmu di chat, tapi jangan dikirim dulu sampai tutormu memberi tanda.`, `Saat kamu mendengar “Kirim!”, semua mengirim jawabannya pada saat yang sama.`]), 'narrow') +
    tnotes(`<p><strong>⏱ Durasi:</strong> 4 menit.</p><p><strong>🎯 Tujuan:</strong> jeda yang singkat dan jelas dari kegiatan belajar sebelum mulai membangun.</p><p><strong>🗣 Katakan kepada kelas:</strong> -</p><p><strong>✅ Langkah-langkah:</strong> kirim satu teka-teki ke chat setiap kali: “⛏️ + 🧱 + 🟩” — Minecraft; “🏎️ + 🍌 + 🏁” — Mario Kart; “🟡 + ⚪ + 👻” — Pac-Man; “🚀 + 👨‍🚀 + 🔴” — Among Us. Beri waktu 10–15 detik untuk setiap teka-teki, lalu katakan: “Kirim!” dan sampaikan jawabannya.</p><p><strong>👀 Semua siap jika:</strong> -</p><p><strong>🐛 Masalah:</strong> ini adalah jeda: tidak ada latihan fisik, kamera wajib, jawaban satu per satu, atau pengecekan pengetahuan. Siswa ikut serta lewat chat dan reaksi.</p><p><strong>➡️ Transisi:</strong> “Kita sudah istirahat: sekarang ayo jadikan pulau ini rumah kita.”</p>`)
  },
  { title:`Tak ada pemiliknya? Berarti milikmu 🏠`, html:
    banner(C('25146cd8-d3f2-49f1-a710-d8d26ba344b1.png')) +
    `<h1>Jadikan pulau milikmu 🏠</h1>
     <blockquote><p>Pulau ini kosong dan abu-abu: tidak ada rumah dan tidak ada api unggun. Dari sini kamu akan membantu dunia, jadi kamu butuh tempat berlindung. Bangun di mana saja kamu mau: di dekat air, di atas bukit, atau di antara pepohonan. Cukup dengan melihatnya, semua orang akan tahu bahwa di sini tinggal seorang crafter. Spark melayang di atas pulau: “Pilih tempatnya, dan ayo kita mulai!”</p></blockquote>` +
    media(C('a88a74b8-f3a3-497b-a263-6fa3f1f1acdd.png'), `<h3>🎯 Bangun tempat berlindungmu</h3>` + ol([`Jelajahi pulau dan pilih tempat yang kamu suka. Seluruh pulau ini milikmu.`, `Bangun <strong>dinding</strong>.`, `Tambahkan <strong>atap</strong>.`, `Sisakan <strong>pintu masuk</strong>: pintu atau celah.`, `Tambahkan satu <strong>detail</strong> unik: blok berwarna, obor, bendera, atau jendela.`, `Pasang <strong>papan tanda</strong> dengan nickname-mu, supaya penduduk tahu siapa yang tinggal di sana.`])) +
    `<h3>✅ Kamu selesai jika</h3>` +
    ul([`Tempat berlindungmu ada di pulau, di tempat yang kamu pilih sendiri.`, `Terlihat 4 elemen: dinding, atap, pintu masuk, dan satu detail khas.`, `Di dekatnya ada papan tanda dengan nickname-mu.`]) +
    spoiler(`Butuh ide mau membangun apa?`, ul([`Rumah kecil di dekat air, dengan jendela yang menghadap ke laut.`, `Tenda penjelajah di atas bukit, dengan obor di pintu masuk.`, `Bengkel seorang dekorator, dibangun dari blok-blok berwarna cerah.`])) +
    tnotes(`<p><strong>⏱ Durasi:</strong> 10 menit.</p><p><strong>🎯 Tujuan:</strong> setiap siswa menjadikan pulau miliknya dengan membangun tempat berlindung yang punya 4 elemen dan papan tanda; siswa memilih sendiri tempat untuk membangunnya.</p><p><strong>🗣 Katakan kepada kelas:</strong> <em>“Kalian sendiri yang memilih tempatnya: pulau ini milik kalian. Setiap dinding membuat Glitch Besar mundur selangkah. Tempat berlindungnya tidak harus besar: yang penting milik kalian, dengan dinding, atap, pintu masuk, dan satu detail yang mudah dikenali.”</em></p><p><strong>✅ Langkah-langkah:</strong> sampaikan 4 elemen dan papan tandanya; beri waktu 30 detik untuk memilih tempat (“Sudah memilih? Pasang dinding pertama”); bantu siswa yang kesulitan untuk memulai dengan dinding berbentuk persegi; 2 menit sebelum waktu habis, minta siswa menambahkan papan tanda dan satu detail.</p><p><strong>👀 Semua siap jika:</strong> setiap siswa punya tempat berlindung dengan 4 elemen dan papan tanda di pulaunya.</p><p><strong>🛟 Diferensiasi:</strong> untuk siswa yang kesulitan: bangunan berbentuk kotak dengan dinding, pintu, dan obor; untuk siswa yang cepat selesai: jalan setapak menuju air, lantai kedua, atau tempat berlindung yang terinspirasi dari profesi crafter-nya.</p><p><strong>🐛 Masalah:</strong> siswa terlalu lama memilih tempat: “Di mana saja boleh, seluruh pulau ini milikmu, pasang dinding pertama”; siswa membangun di desa: ajak ia kembali ke pulaunya, karena itu tempatnya; nickname yang dipakai adalah nickname di game.</p><p><strong>➡️ Transisi:</strong> “Pulaunya sudah hidup kembali: ayo tunjukkan apa yang sudah kita bawa kembali dari dunia yang abu-abu.”</p>`)
  },
  { title:`Begitu banyak cahaya menyala 🎉`, html:
    banner(C('5b25f081-c7c5-48b1-9882-4244236f18ff.png')) +
    `<h1>Presentasi 🎉</h1>
     <blockquote><p>Satu jam yang lalu, pulau ini masih kosong dan kamu masih Steve yang abu-abu. Sekarang kamu punya wajahmu sendiri dan tempat berlindungmu sendiri. Ayo saling menunjukkan apa yang sudah kita bawa kembali dari Glitch Besar. Spark berputar-putar: “Wah, lihat, sudah banyak sekali cahaya yang menyala!”</p></blockquote>
     <h3>Saat kamu presentasi</h3>` +
    ol([`Bagikan layarmu dan berdirilah di dekat tempat berlindungmu.`, `Ucapkan satu kalimat: siapa crafter-mu dan tempat berlindung seperti apa yang kamu bangun.`, `Ambil screenshot: 🪟 Windows — <strong>Win + Print Screen</strong> (file-nya akan muncul di folder “Pictures → Screenshots”); 🍎 Mac — <strong>Cmd + Shift + 4</strong>, lalu pilih crafter-mu (file-nya akan muncul di Desktop).`, `Lampirkan screenshot-nya ke tugas di bawah ini, supaya api pertamamu tercatat dalam sejarah.`]) +
    `<blockquote><p><strong>Aku seorang crafter...</strong></p><p><strong>Tempat berlindungku adalah...</strong></p></blockquote>` +
    essay(`Aku seorang crafter… Tempat berlindungku adalah…`, `Aku crafter pembangun. Tempat berlindungku adalah rumah kecil di atas air dengan jendela yang menghadap ke laut.`) +
    fileAnswer() +
    spoiler(`Ada yang salah: aku tidak menemukan screenshot-nya`, ol([`Beri tahu tutormu: tutormu akan menunjukkan di mana screenshot game disimpan.`, `Belum bisa sekarang? Lampirkan screenshot-nya dari rumah: tempat berlindungmu akan tetap menunggumu di sana.`])) +
    `<h3>Saat temanmu presentasi</h3>` +
    media(C('13b9f804-e225-4cbe-9c0d-de93f0a00cdb.png'), ol([`Perhatikan satu detail yang dipilih oleh pembuatnya.`, `Ucapkan dengan suara keras atau tulis di chat: “Aku suka…”, lalu sebutkan detail itu.`])) +
    tnotes(`<p><strong>⏱ Durasi:</strong> 5 menit.</p><p><strong>🎯 Tujuan:</strong> presentasi singkat, momen untuk merasa bangga, dan umpan balik yang berguna dan spesifik.</p><p><strong>🗣 Katakan kepada kelas:</strong> <em>“Lihat berapa banyak api yang sudah menyala! Setiap orang sudah menghidupkan kembali sebagian kecil dunia. Bergiliran, tunjukkan tempat berlindung kalian, dan ayo kita cari bersama hal-hal yang kita suka.”</em></p><p><strong>✅ Langkah-langkah:</strong> minta semua siswa berdiri di depan tempat berlindungnya dan menekan F2: itu akan menjadi screenshot pelajaran; sebelum presentasi, minta siswa mengisi kolom “Aku seorang crafter… Tempat berlindungku adalah…”: ini membantu mereka berbicara dengan lebih mudah; lalu setiap siswa menunjukkan dunianya dengan berbagi layar selama 20–30 detik dan mengucapkan satu kalimat; setelah setiap presentasi, seorang siswa lain mengatakan “Aku suka…” dan menyebutkan satu detail yang spesifik. Selagi satu siswa presentasi, siswa lain melampirkan screenshot-nya ke tugas.</p><p><strong>👀 Semua siap jika:</strong> setiap siswa sudah melampirkan screenshot tempat berlindungnya dan mengisi kolom tentang crafter-nya.</p><p><strong>Perlu diperjelas:</strong> jalur folder screenshot game yang tepat di launcher Kodland: tambahkan di sini, supaya tutor bisa langsung menunjukkannya.</p><p><strong>🐛 Masalah:</strong> hindari perbandingan “lebih bagus” dan “lebih jelek”, dan hargai bahwa setiap tempat berlindung bersifat pribadi; jika waktunya sedikit, minta beberapa sukarelawan untuk presentasi dan dorong yang lain untuk menanggapi di chat; jika siswa tidak menemukan screenshot-nya, izinkan mereka melampirkannya dari rumah: presentasinya lebih penting daripada file-nya.</p><p><strong>➡️ Transisi:</strong> “Dunia sudah hidup kembali: ayo kita simpulkan.”</p>`)
  },
  { title:`Dunia bernapas lagi ✨`, html:
    banner(C('94f930d3-530e-401f-8fbb-d47d09c6294e.png')) +
    `<h1>Sekarang kamu seorang crafter ✨</h1>
     <blockquote><p>Kamu punya penampilanmu sendiri dan sebuah pulau dengan tempat berlindungmu. Dunia tidak lagi kosong, karena ada kamu. Glitch Besar sudah mundur, dan ini baru permulaan.</p></blockquote>
     <h3>Sekarang kamu bisa</h3>` +
    ul([`membuat penampilanmu sendiri di editor skin;`, `memakainya dengan tombol “Wear” sebelum masuk ke dunia;`, `memilih tempat dan membangun tempat berlindung dengan papan tanda di sana;`, `menunjukkan kepada semua orang siapa dirimu dan menghargai hal-hal bagus yang dibuat orang lain.`]) +
    `<h3>💬 Pikirkan sebentar</h3>` +
    choice(`Apa hal paling penting hari ini?`, [[`🎨 Avatarku`, `Detail mana dari avatarmu yang paling kamu suka?`], [`🏠 Tempat berlindungku`, `Apa yang paling kamu suka dari tempat berlindungmu?`], [`🧭 Perjalanan ke pulau`, `Apa yang paling “wow” di sepanjang jalan: dungeon, Reruntuhan Kekacauan, atau jembatan?`]]) +
    tnotes(`<p><strong>⏱ Durasi:</strong> 2 menit.</p><p><strong>🎯 Tujuan:</strong> mengulas kembali perjalanan dalam pelajaran dan mendengarkan satu momen istimewa.</p><p><strong>🗣 Katakan kepada kelas:</strong> <em>“Hari ini kalian menemukan kembali wajah kalian dan menghidupkan pulau: berkat kalian, dunia bernapas lagi. Dan di depan kalian ada seluruh dunia yang menunggu seorang crafter.”</em></p><p><strong>✅ Langkah-langkah:</strong> sampaikan “Sekarang kamu bisa...” (30 detik), lalu kumpulkan 3–4 jawaban tentang apa yang paling berkesan. Setelah itu, lanjut ke PR.</p><p><strong>👀 Semua siap jika:</strong> -</p><p><strong>🐛 Masalah:</strong> -</p><p><strong>➡️ Transisi:</strong> “Dan sekarang, PR.”</p>`)
  },
  { title:`Bawa pulang satu percikan ✨`, html:
    banner(C('ac19e14b-3950-40c7-aef0-6c95f72d183c.png')) +
    `<h1>Satu percikan lagi ✨</h1>
     <blockquote><p>Tempat berlindungmu sudah jadi dan avatarmu sudah dibuat, tapi seorang crafter tidak pernah menyelesaikan misinya dalam satu hari. Di rumah, tambahkan satu detail berkilau lagi ke avatarmu. Lain kali, kamu akan masuk ke dunia dengan penampilan yang makin “kamu banget”. Spark membawa api penyemangat: “Ambil ini, dan ayo terus berkreasi bersama!”</p></blockquote>
     <h3>🎯 Yang harus dilakukan di rumah</h3>` +
    ol([`Buka Skin Studio dengan cara yang sama: <strong>Create</strong> → <strong>Skins</strong>.`, `Tambahkan satu detail baru ke crafter-mu.`, `Klik tombol hijau “<strong>Wear</strong>” untuk memperbarui avatarmu.`, `Ambil screenshot skin-mu yang sudah diperbarui dan lampirkan ke tugas.`]) +
    note(`⏱ Cuma sebentar`, `<p>Cukup 10–15 menit. Kamu tidak perlu menggambar semuanya dari awal: tambahkan saja satu detail ke avatar yang sudah kamu buat.</p>`) +
    `<p>Langkah-langkah lengkap dan beberapa ide ada di kartu berikutnya. Kamu bisa membukanya di rumah kapan saja.</p>` +
    tnotes(`<p><strong>⏱ Durasi:</strong> 2 menit.</p><p><strong>🎯 Tujuan:</strong> menjelaskan PR secara lisan selagi semua siswa masih terhubung, supaya di rumah mereka tidak membuka kartu tanpa tahu harus mulai dari mana, dan supaya mereka paham bahwa yang dibutuhkan hanya satu detail baru, bukan skin baru.</p><p><strong>🗣 Katakan kepada kelas:</strong> <em>“Di rumah, tambahkan satu percikan lagi ke crafter kalian: satu detail baru saja, misalnya topi, warna sepatu, atau lencana. Jangan menggambar ulang semuanya dari awal: cukup tambahkan satu detail. Lalu klik tombol hijau ‘Wear’, kalau tidak, avatar kalian tidak akan diperbarui.”</em></p><p><strong>✅ Langkah-langkah:</strong> tunjukkan di layar alurnya Create → Skins dan ingatkan tentang tombol Wear. Sebutkan waktunya: 10–15 menit. Tunjukkan di kartu tugas tempat melampirkan screenshot skin dan tempat menulis apa yang sudah ditambahkan. Minta semua siswa menulis di chat apa yang akan mereka tambahkan ke skin-nya.</p><p><strong>👀 Semua siap jika:</strong> setiap siswa sudah mengatakan atau menulis di chat detail apa yang akan ia tambahkan. Dengan begitu, di rumah ia tidak akan bingung menatap layar kosong.</p><p><strong>🐛 Masalah:</strong> “Aku tidak tahu mau menambahkan apa” — ide-idenya ada di spoiler pada kartu tugas; Anda bisa menyarankan profesi untuk crafter-nya: pandai besi, tukang kebun, atau penjelajah. “Aku sudah menggambar semuanya” — minta siswa menambahkan detail yang berhubungan dengan profesinya. Jika orang tua perlu masuk, mereka bisa memakai akun sekolah Kodland yang sama, tanpa membuat akun baru.</p><p><strong>➡️ Transisi:</strong> “Tugasnya sudah jelas: kartu dengan langkah-langkah lengkapnya ada di PR kalian.”</p>`)
  },
  { title:`Sempurnakan crafter-mu di rumah ⚡`, html:
    banner(C('196595d3-94ac-4707-9519-78775d33a943.png')) +
    `<h1>Pekerjaan rumah ⚡</h1>
     <blockquote><p>Tambahkan satu detail lagi ke crafter-mu, supaya ia makin “kamu banget”. Dengan penampilan ini, kamu akan masuk ke Hutan Kunang-Kunang di pelajaran berikutnya.</p></blockquote>
     <h3>Tugas yang lebih mudah</h3>` +
    ol([`Buka Skin Studio: <strong>Create</strong> → <strong>Skins</strong> → <strong>Create a skin</strong>.`, `Tambahkan satu detail ke skin-mu: topi, warna sepatu yang berbeda, atau gambar di bajumu.`, `Klik lagi “<strong>Wear</strong>”.`]) +
    `<h3>Tugas yang lebih sulit</h3>` +
    ol([`Pilih “profesi” untuk crafter-mu: pandai besi, tukang kebun, atau penjelajah.`, `Tunjukkan profesinya lewat skin: celemek, jubah, atau alat yang terselip di ikat pinggang.`, `Jawab pertanyaan di bagian bawah halaman.`]) +
    `<h3>Cara mengirim tugas</h3>` +
    ol([`Buka Skin Studio: di sini kamu bisa melihat crafter-mu secara utuh.`, `Ambil screenshot: 🪟 Windows — <strong>Win + Print Screen</strong> (file-nya akan muncul di folder “Pictures → Screenshots”); 🍎 Mac — <strong>Cmd + Shift + 4</strong>, lalu pilih crafter-mu (file-nya akan muncul di Desktop).`, `Lampirkan screenshot-nya ke latihan ini.` + fileAnswer(), `Tulis di bawah ini apa yang sudah kamu tambahkan ke crafter-mu.`]) +
    essay(`Apa yang sudah kamu tambahkan ke crafter-mu?`, `Contoh: aku menambahkan celemek pandai besi dan topi berwarna hijau limau.`) +
    spoiler(`Ada masalah dengan screenshot?`, ol([`Minta orang dewasa membantumu mengambil screenshot.`, `Kalau tetap tidak bisa, foto layarnya dengan HP dan lampirkan fotonya.`])) +
    spoiler(`Masalah teknis: tidak bisa membuka Skin Studio di rumah`, ol([`Masuk ke Kodland dengan akun yang sama yang kamu pakai saat pelajaran.`, `Kalau tidak bisa, minta orang tuamu membantumu masuk.`]))
  }
];

/* =========================================================
   GUIDED TOUR STEPS
   Translate title, text and btn. Keep target / accept / read / side / wide / next / last as they are.
   ========================================================= */
CONTENT.guide = [
  { title:'Selamat datang di kelas', next:true,
    text:'Dalam <b>Model Pendidikan Baru (EM)</b>, semua yang Anda perlukan untuk mengajar ada <b>di dalam pelajaran itu sendiri</b>, di Classroom. Tidak ada wiki dan tidak ada dokumen terpisah: panduan setiap pelajaran menyatu dengan kartu-kartu pelajarannya.<br><br>Ayo kita buka.' },
  { title:'Buka materi pelajaran', target:'.tb-group', accept:['openTasks','toggleDropdown'],
    text:'Materi pelajaran ada di <b>Assignments</b>. Klik <b>Assignments</b> — tombolnya berubah biru saat kursor mouse Anda berada di atasnya.' },
  { title:'Pilih kartu pertama', target:'#dd-0', accept:['pickActivity:0'],
    text:'Ini adalah daftar <b>assignments</b> pelajaran, sesuai urutannya. Ini pelajaran pertama kursus Minecraft.<br><br>Klik yang pertama.' },
  { title:'Dua tampilan dari kartu yang sama', next:true, wide:true,
    text:'Sebelum melanjutkan, penting untuk memahami <b>apa yang Anda lihat</b> dan <b>apa yang dilihat Sofia</b>. Anda berdua berada di kartu yang sama, tetapi tidak di layar yang sama:' +
      `<div class="views">
        <div class="view"><div class="vh">👩‍🏫 Yang <b>Anda</b> lihat</div>
          <div class="mock"><div class="m-tn">Teacher notes<small>hanya untuk Anda</small></div><div class="mk-c">Isi kartu</div></div></div>
        <div class="view"><div class="vh">👧 Yang dilihat <b>Sofia</b></div>
          <div class="mock"><div class="mk-c">Isi kartu</div></div></div>
      </div>` +
      '<ul class="c-list"><li>Kotak dengan <b>garis tepi oranye putus-putus</b> adalah <b>Teacher notes</b>. Catatan ini ditulis <b>di dalam kartu</b>, bersama dengan isinya.</li><li>Hanya tutor yang bisa melihatnya. Sofia <b>tidak pernah</b> melihat Teacher notes — hanya isi kartunya. Jangan bacakan catatan ini untuknya.</li><li>Setiap kartu punya catatannya sendiri, jadi catatan inilah yang pertama kali perlu Anda cek sebelum dan selama setiap kartu.</li></ul>' },
  { title:'Teacher notes pertama', target:'#taskScroll', side:true, read:{ scope:'#tn-first' },
    text:'Catatan di <b>kartu pertama</b> adalah yang paling lengkap dalam pelajaran: gambaran umum dan cerita, tujuan dan hasil utama, <b>peran</b> Anda, <b>rencana waktu</b> setiap kartu, <b>kemungkinan kesulitan</b>, dan cara <b>menutup</b> pelajaran.<br><br>Di pelajaran pertama sebuah kursus biasanya juga ada <b>video penjelasan</b>: tontonlah saat Anda bersiap.<br><br><b>Buka setiap bagian</b> dan <b>gulir sampai akhir catatan</b> untuk melanjutkan.' },
  { title:'Yang dilihat Sofia', target:'#taskScroll', side:true, read:{},
    text:'Di bawah catatan ada kartu seperti yang akan dilihat <b>Sofia</b>: cerita dan cara bersiap untuk pelajaran.<br><br>Gulir <b>seluruh kartu</b>. Tombol Berikutnya akan aktif saat Anda sampai di akhir.' },
  { title:'Aktifkan Lead the group', target:'#leadToggle', accept:['toggleLead'],
    text:'Sekarang aktifkan <b>Lead the group</b>. Hanya Anda yang punya sakelar ini — siswa tidak.' +
      `<div class="lead-demo">
        <div><span class="ld-sw"></span><b>OFF</b> — Anda pindah ke kartu lain atau menggulir, dan Sofia tetap di tempatnya. Bisa jadi ia sedang melihat hal lain.</div>
        <div><span class="ld-sw on"></span><b>ON</b> — setiap kartu yang Anda buka dan setiap guliran Anda, dilihat Sofia pada saat yang sama.</div>
      </div>` +
      'Klik sakelarnya — warnanya berubah biru saat aktif.' },
  { title:'Sofia mengikuti Anda', target:'.vt.student', next:true,
    text:'<b>Lead the group</b> sudah aktif ✅ Lihat gambar Sofia: sekarang tertulis <b>Following the teacher</b>.<br><br>Mulai sekarang:<ul class="c-list"><li>Sofia membuka <b>kartu yang sama</b> dengan Anda dan melihat posisi gulir yang sama — tanpa Teacher notes.</li><li>Ia bisa mengeklik <b>Work independently</b> untuk menjelajah sendiri. Setelah itu, ia melihat banner yang menunjukkan posisi Anda, dengan tombol <b>Return</b>.</li></ul>' },
  { title:'Kartu berikutnya', target:'#btnNext', accept:['nextTask'],
    text:'Panah yang menunjuk ke kanan membawa Anda ke <b>kartu berikutnya</b>. Karena Lead the group aktif, Sofia ikut pindah bersama Anda. Klik panahnya.' },
  { title:'Catatan di setiap kartu', target:'#taskScroll', side:true, read:{},
    text:'Kartu ini menyambut grup dan berisi sebuah <b>pertanyaan</b> singkat yang dijawab Sofia di salinannya sendiri. Selain isi untuk Sofia, kartu ini punya <b>Teacher notes</b> sendiri di bagian bawah: lebih singkat daripada catatan pertama.<br><br>Biasanya catatan ini memberi tahu Anda <b>durasi</b> kartu, <b>tujuannya</b>, <b>apa yang perlu dikatakan</b> kepada grup, <b>langkah-langkahnya</b>, dan <b>transisi</b> ke kartu berikutnya.<br><br>Baca kartu sampai akhir, termasuk Teacher notes-nya.' },
  { title:'Lanjutkan', target:'#btnNext', accept:['nextTask'],
    text:'Klik <b>Next task</b> untuk pindah ke kartu berikutnya.' },
  { title:'Kalimat yang bisa Anda gunakan', side:true, target:'#taskScroll', read:{}, last:true, btn:'Selesai ✓',
    text:'Kartu ini menetapkan kesepakatan grup. Lihat Teacher notes-nya: selain durasi dan tujuan, catatan ini memberi Anda <b>kalimat untuk diucapkan kepada grup</b> dan <b>langkah berikutnya</b>, sehingga pelajaran mengalir dari satu kartu ke kartu berikutnya.<br><br>Gulir sampai akhir kartu dan baca Teacher notes-nya.<br><br>Itu saja yang perlu Anda ketahui tentang format pelajaran EM!' }
];

/* =========================================================
   FINISH SCREEN (the completion code is added by the page)
   ========================================================= */
CONTENT.finish = {
  kicker: 'Panduan selesai',
  title: '🎓 Inilah pelajaran EM di Classroom',
  intro: 'Anda sudah melihat seperti apa pelajaran model pendidikan baru di Classroom dan cara memimpin grup:',
  steps: [
    'Pelajaran adalah serangkaian <b>kartu</b> di <b>Assignments</b>: semua panduan ada di dalam pelajaran.',
    '<b>Teacher notes</b> ada di dalam setiap kartu dan hanya <b>Anda</b> yang bisa melihatnya. Siswa tidak pernah melihatnya.',
    '<b>Kartu pertama</b> memiliki catatan paling lengkap: cerita, tujuan, peran Anda, rencana waktu, kemungkinan kesulitan, dan penutup — dan di pelajaran pertama sebuah kursus, biasanya juga ada video penjelasan.',
    'Setiap kartu berikutnya memiliki catatan yang lebih singkat: durasi, tujuan, apa yang perlu dikatakan, langkah-langkah, dan transisi.',
    '<b>Lead the group</b> membuat siswa mengikuti kartu yang Anda buka dan posisi gulir Anda.'
  ],
  tip: '<b>Tips:</b> baca Teacher notes seluruh pelajaran <b>sebelum</b> Anda mengajarkannya.',
  codeLabel: '🔑 Kode penyelesaian Anda',
  codeHint: 'Salin kode ini ke pelatihan untuk mengonfirmasi bahwa Anda sudah menyelesaikan panduan.',
  back: '← Kembali ke pelatihan',
  closeTab: 'Tutup tab ini untuk kembali ke pelatihan, lalu masukkan kode penyelesaian Anda di sana.'
};
