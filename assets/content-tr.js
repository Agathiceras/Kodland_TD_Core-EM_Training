/* ============================================================
   New Educational Model — Tutor training · TURKISH content
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
window.CONTENT = { lang: 'tr' };

/* ---------------- Interface strings ---------------- */
CONTENT.ui = {
  pageTitle: 'Yeni Eğitim Modeli Eğitimi',
  footer: 'kodland · Yeni Eğitim Modeli · Eğitmen eğitimi',
  devLink: '🛠 Geliştirici',

  // Navigation
  logoSub: 'Yeni Eğitim Modeli',
  navCore: 'Ana Konular {done}/{total}',
  navHome: '← Ana Sayfa',
  navModules: '← Tüm modüller',
  navBackModule: '← Modüle geri dön',

  // Home
  heroKicker: '🚀 Eğitmen eğitimi',
  heroTitle: '<span class="hl">Yeni</span> eğitim modeli',
  heroLead: 'Kodland bazı derslerinin işleyiş modelini değiştiriyor. Bu eğitim sizi yeni modelle ders anlatmaya hazırlar: sırasıyla {n} modül. Her modülün sonunda bir sonraki modülün kilidini açan kısa bir kontrol testi yer alır.',
  fact1: '<b>Kendi hızınızda ilerleyin.</b> İlerlemeniz bu tarayıcıya kaydedilir.',
  fact2: '<b>Uygulamalı pratikler dahildir.</b> İstediğiniz kadar tekrarlayabileceğiniz üç simülasyon — Backoffice, Classroom ve Kodland Sparks.',
  progAllDone: 'Modüller tamamlandı 🎉',
  progLabel: 'modül tamamlandı',
  moduleN: 'Modül {n}',
  badgeDone: '✓ Tamamlandı · %{score}',
  badgeLocked: '🔒 Modül {n}’i tamamlayın',
  badgeStart: 'Başla →',
  homeDoneTitle: 'Modüller tamamlandı!',
  homeDoneText: 'Son bir adım kaldı: LMS eğitim sayfasındaki DST testi.',
  homeDoneBtn: 'Sırada ne olduğunu görün →',

  // Module page and its check
  eyebrow: 'Modül {n} / {total}',
  ctaQuizTitle: 'Modül kontrolü',
  ctaQuizText: '{n} kısa soru. Geçmek için en az %70 puan alın.',
  ctaRiskTitle: 'Modül kontrolü: riskli stratejiyi tespit edin',
  ctaRiskText: '{n} gerçek durum. <b style="color:#E5484D">Diğer testlerden farklı olarak: her durumda derse ZARAR VERECEK stratejiyi seçmelisiniz</b> — iyi olanı değil. Geçmek için en az %70 puan alın.',
  lockOne: '🔒 Testin kilidini açmak için {what} uygulamasını tamamlayın ve kodunu yukarıya girin.',
  lockMany: '🔒 Testin kilidini açmak için {what} uygulamalarını tamamlayın ve kodlarını yukarıya girin.',
  listAnd: ' ve ',
  startCheck: 'Teste başla →',
  retake: '🔁 Testi tekrar çöz',

  // Simulations and completion codes
  launchSteps: ['Yeni bir sekmede açın.', 'Tamamlama ekranını ve kodunuzu görene kadar tüm adımları takip edin.', 'Bu sekmeye geri dönün ve kodu aşağıya girin.'],
  codeOk: '✅ <b>{sim} tamamlandı.</b> Kod kabul edildi.',
  codeLabel: '<b>🔑 Tamamlama kodu</b> — bu kodu {sim} simülasyonunun son ekranında bulabilirsiniz.',
  codePlaceholder: 'ör. XX-0000-00',
  codeUnlock: 'Kilidi Aç',
  codeWrong: 'Bu kod doğru değil. Simülasyonun son ekranından tekrar kontrol edin.',

  // Small interactive pieces
  tapFlip: 'Çevirmek için dokunun',
  mythReality: 'Gerçek ✓',
  loopAgain: '<b>Ve tekrar!</b> Öz değerlendirme bir sonraki hedefe dönüşür — bir adım daha derin.',
  ages: '{age} Yaş',
  aiBar: 'Yapay zekanın projeye katılım oranı',
  stageWas: 'Eski hali: <s>{was}</s> → yeni hali:',
  stageOf: '{i} / {n}',
  stageWatch: 'Gerçek bir derste “{t}” aşamasını izleyin',
  stageFirst: 'İlk aşamaya dön',
  next: 'İleri →',
  sortWrong: '✗ Tam olarak değil.',

  // Follow Mode demo (Module 2)
  fmNotes: '📒 Öğretmen notları — bunu sadece siz görürsünüz',
  fmFollowing: '🔗 Öğretmeni takip ediyor',
  fmStart: '👆 Sofia aynı derste ancak Lead the group anahtarı kapalı. Anahtarı açın.',
  fmOn: '✅ <b>Lead the group AÇIK.</b> Sofia sizin kartınıza atladı — ancak dikkat edin: kartı Öğretmen Notlarınız <b>olmadan</b> görüyor. Şimdi <b>Next card</b> butonunu deneyin.',
  fmOff: '⏸️ <b>Lead the group KAPALI.</b> Nereyi açarsanız açın, Sofia bulunduğu yerde kalır.',
  fmMoved: '➡️ {t}. karta geçtiniz — <b>Sofia da sizinle birlikte geçti</b>.',
  fmMovedAlone: '➡️ {t}. karta geçtiniz ancak <b>Sofia hâlâ {s}. kartta</b>. Başka bir şeye bakıyor olabilir. Lead the group anahtarını açın.',

  // Closing timeline (Module 3)
  tlOpening: '<b>Giriş.</b> Isınma ve selamlama, önceki dersle bağlantı, ödev kontrolü, ders hedefi.',
  tlCards: '<b>Kartlar.</b> Öğrenciler üretir, keşfeder, düzeltir ve sunar. Saate göz kulak olun — son {left} dakika…',
  tlClose: '<b>Bitişten {left} dakika önce: kapanış zamanı.</b> Kartların neresinde olursanız olun, kapanış rutinine şimdi başlayın.',
  tlRoutine: '<b>Kapanış rutini.</b> Öğrencilerden ders özeti → bir sonraki ders için merak uyandırma (teaser) → yeni ödev.',
  tlBye: '<b>Hoşça kalın!</b> Herkes ne öğrendiğini, sırada ne olduğunu ve evde ne yapacağını bilerek dersten ayrılır.',

  // Videos
  watchExample: 'Gerçek bir örnek izleyin',
  comingSoon: 'yakında',
  close: 'Kapat',
  videoDefault: 'Gerçek ders',
  soonTitle: 'Video yakında geliyor',
  soonText: 'Burada dersin bu bölümünü gerçek bir sınıfta izleyeceksiniz. Video hazırlanıyor ve çok yakında burada yayınlanacak.',
  zoomBadge: '🔍 Büyütmek için tıklayın',
  zoomAria: 'Videoyu daha büyük aç',
  zoomDefault: 'Video',
  zoomIn: 'Yakınlaştır',
  zoomOut: 'Uzaklaştır',
  zoomReset: 'Sıfırla',
  zoomHint: '+ / − tuşları, fare tekerleği veya çift tıklama ile yakınlaştırın · kaydırmak için sürükleyin · kapatmak için Esc veya ✕',

  // Checks (quiz engine)
  qmeta: '{e} Modül {n} kontrolü · {kind} {i} / {total}',
  qCase: 'Durum',
  qQuestion: 'Soru',
  riskQuestion: 'Hangisi dersin bu bölümüne <span class="hurt">ZARAR VERİR</span>?',
  riskBanner: '⚠️ Dikkat: Bu testte derse <b>ZARAR VERECEK</b> olan <b>YANLIŞ</b> stratejiyi seçmelisiniz. İyi olanı değil!',
  tfTrue: '✅ Doğru',
  tfFalse: '❌ Yanlış',
  openHint: '✍️ Kendi cevabınızı yazın — en az {min} karakter. Tek bir doğru ifade yoktur: cevabınızı karşılaştırmanız için örnek bir cevap göreceksiniz.',
  openPlaceholder: 'Cevabınızı buraya yazın…',
  openSubmit: 'Cevabımı gönder',
  openRecorded: '✅ <b>Cevap kaydedildi.</b> Örnek cevap — kendinizinkiyle karşılaştırın:',
  fbRight: '✅ <b>Doğru!</b> ',
  fbWrong: '❌ <b>Tam olarak değil.</b> ',
  fbRiskRight: '✅ <b>Doğru — derse zarar verecek strateji tam olarak buydu.</b> ',
  fbRiskWrong: '❌ <b>Bu aslında derse yardımcı olur.</b> Riskli olan yeşil renkle vurgulanmıştır. ',
  nextQuestion: 'Sonraki soru →',
  seeResult: 'Sonucumu gör →',

  // Result of a check
  passedTitle: 'Tebrikler, geçtiniz!',
  failTitle: 'Çok yaklaştınız',
  scoreLine: '<b>{n} sorudan {score} tanesini</b> doğru yanıtladınız.',
  failText: 'Geçmek için %70 veya daha yüksek bir puan almalısınız. Modülü gözden geçirin ve tekrar deneyin — dilediğiniz kadar tekrar çözebilirsiniz.',
  nextUnlocked: '<b>Modül {n} · {title}</b> modülünün kilidi açıldı.',
  goModule: 'Modül {n}’e git →',
  allDoneText: 'Tüm eğitimi başarıyla tamamladınız.',
  seeNext: 'Sırada ne olduğunu görün →',
  reviewModule: '📖 Modülü inceleyin',

  // Final page
  doneTitle: 'Modüller tamamlandı!',
  doneText: `<p>Neredeyse bitti! Bu eğitime eriştiğiniz LMS eğitim sayfasına geri dönün. DST testi eğitimin hemen altında mevcuttur.</p>
    <p>👉 <b>Eğitimin başarıyla tamamlanmış sayılması için DST testini tamamlamalı ve geçmelisiniz.</b> DST testini tamamlamazsanız eğitim eksik kalacak ve süresi dolabilecektir.</p>
    <p>Minimum geçme puanı <b>%80</b>’dir.</p>
    <p>Başarılar dileriz! ❤️</p>`,
  doneBadge: '✓ Tamamlandı',
  doneNexts: [
    ['📒', '<b>Her dersten önce:</b> Backoffice’teki Öğretmen Notlarını okuyun — ve güncellemeleri kontrol edin.'],
    ['🔑', '<b>Kodland Sparks:</b> giriş bilgileriniz Operasyon veya Eğitim departmanı tarafından sağlanır.'],
    ['🏁', '<b>Her derste:</b> düzgün bir giriş, akıl yürütme soruları ve 5–7 dakikalık bir kapanış.'],
    ['🤖', '<b>Öğrenciler yapay zeka kullandığında:</b> yapay zeka önerir, yazar karar verir.']
  ],
  doneBack: 'Modüllere geri dön',

  // Locked messages
  lockedTitle: 'Hâlâ kilitli',
  lockedModule: 'Önce Modül {n}’i tamamlayın.',
  lockedStep: 'Bunun kilidini açmak için önceki adımı tamamlayın.',
  ok: 'Tamam'
};

/* ============================================================
   MODULES — titles, descriptions, objectives and section names (keep id, n, e, color, check, needs keys)
   ============================================================ */
CONTENT.modules = [
  { id:'m1', n:1, e:'🧩', color:'#C4F046', title:'Yeni model metodolojisi', check:'quiz',
    desc:'Yeni modelin ne olduğu, arkasındaki pedagoji, geri bildirimin nasıl işlediği ve öğrencilere yapay zeka ile nasıl rehberlik edileceği.',
    obj:'Yeni eğitim modelinin ne olduğunu ve ne olmadığını, üzerine kurulduğu dört temel direği, geri bildirimin nasıl işlediğini ve öğrencilerin yapay zekayı doğru kullanmalarına nasıl yardımcı olunacağını anlayın.',
    offer:[['🌱','Yeni öğretim modelini anlayın'],['🏛️','Her dersi şekillendiren dört temel direği öğrenin.'],['💬','Geri bildirimin dört yönlü nasıl işlediğini görün.'],['🧭','Eğitmen olarak rolünüzün nasıl değiştiğini kavrayın.']],
    sections:[ ['what','🔍','Yeni model nedir?'], ['pillars','🏛️','Modelin dört temel direği'], ['people','💬','Dört yönden geri bildirim'] ] },
  { id:'m2', n:2, e:'🛠️', color:'#3E7BFA', title:'Teknik Hazırlık', check:'quiz',
    needs:[['boCode','BO simülasyonunu'],['classCode','Classroom rehberini'],['sparksCode','Kodland Sparks rehberini']],
    desc:'Backoffice ve Öğretmen Notları, Follow Mode ile Classroom ve Kodland Sparks — üç pratik simülasyonu ile birlikte.',
    obj:'Backoffice’te bir kursu ve Öğretmen Notlarını bulun, Classroom’da Follow Mode ile ders yürütün ve öğrencilerin Kodland Sparks’ta ne yaptıklarını öğrenin. Her bölüm size bir tamamlama kodu veren simülasyonla sona erer.',
    offer:[['🗂️','Tüm kurs materyallerini Backoffice’te bulun — wiki artık kullanılmıyor.'],['📒','Her dersten önce Öğretmen Notlarını ve güncellemeleri okuyun.'],['🎥','Follow Mode, etkinlik kartları ve ekran gösterimlerini anlayın.'],['⚡','Öğrencilerin projeler üretip yayınladığı Kodland Sparks’ı tanıyın.']],
    sections:[ ['bo','🗂️','Backoffice: kursun yer aldığı platform'], ['classroom','🎥','Derste: kartlar, Follow Mode ve gösterimler'], ['sparks','⚡','Kodland Sparks: öğrencilerin stüdyosu'] ] },
  { id:'m3', n:3, e:'⭐', color:'#F03D9E', title:'Ders Kalitesi', check:'risk',
    desc:'Bir dersin nasıl yapılandırıldığı — ve yapıyı koruyan üç alışkanlık: düzgün bir giriş, akıl yürütme soruları ve sabit bir kapanış.',
    obj:'Yeni modelde bir dersin nasıl yapılandırıldığını, kalite incelemelerinde nelere bakıldığını anlayın ve her derste bu yapıyı koruyan üç alışkanlık edinin: düzgün bir giriş, öğrencilere gerekçelerini açıklatan sorular ve sabit bir kapanış rutini.',
    offer:[['🧱','Yeni modelde bir dersin nasıl yapılandırıldığını anlayın.'],['🎬','Her dersi düzgün açın: ısınma, son dersle bağlantı, ödev, ders hedefi.'],['🧠','Belirli öğrencilere gerekçelerini açıklatan sorular sorun.'],['🏁','Her dersi 5–7 dakikalık sabit bir rutinle kapatın.']],
    sections:[ ['structure','🧱','Ders nasıl yapılandırılır?'], ['seeing','🔎','Kalite incelemelerinde nelere bakılır?'], ['opening','🎬','Düzgün bir giriş'], ['reasoning','🧠','Öğrencilere sesli düşündüren sorular'], ['closing','🏁','Sabit bir kapanış rutini'], ['metrics','📊','Hâlâ sorumlu olduğunuz metrikler'], ['qcheck','✅','Ders kalitesi kontrol listeniz'] ] },
  { id:'m4', n:4, e:'🤖', color:'#8B5CF6', title:'Eğitmenler için prompt yönetimine giriş', check:'quiz',
    desc:'Bu kurslardaki tek gerçekten yeni beceri. Yapay zekanın teknik yönü değil — nasıl prompt yazılacağı ve bir öğrencinin kendi prompt’unu yazmasına nasıl yardım edileceği.',
    obj:'Öğrencileriniz sınıfta kendi prompt’larını yazarken onlara rehberlik edecek kadar bilgi sahibi olun. Bu, teknik teoriden ziyade pratik beceriyle ilgilidir.',
    offer:[['✍️','Prompt’un ne olduğunu ve iyi bir prompt’un neleri içerdiğini anlayın.'],['💻','Kod üreten ve hata ayıklayan prompt’lar yazın.'],['🎨','Görsel ve video üreten prompt’lar yazın.'],['⚠️','En sık yapılan hatalardan kaçının.']],
    sections:[ ['why4','💡','Bu modül neden var?'], ['whatp','❓','Yapay zekayı öğrenmek: prompt nedir?'], ['goodp','🧩','İyi bir prompt neleri içermelidir?'], ['codep','💻','Kod üreten prompt’lar için ipuçları'], ['imgp','🎨','Görsel ve video üreten prompt’lar için ipuçları'], ['mistp','⚠️','Sık yapılan hatalar'] ] }
];

/* ============================================================
   Names of the three simulations
   ============================================================ */
CONTENT.sims = { boCode:'BO simülasyonu', classCode:'Classroom rehberi', sparksCode:'Kodland Sparks rehberi' };

/* ============================================================
   MODULE CHECKS — "a" is the number of the correct option (0 = first). Keep it as it is.
   ============================================================ */
CONTENT.quiz = {
  m1:[
    { ctx:'Bir meslektaşınız yeni eğitim modelini duydu ve endişeli: “Yani artık tüm kurslarımız değişiyor mu?”',
      q:'Doğru cevap nedir?',
      o:['Evet: bundan böyle tüm Kodland kursları yeni modeli takip edecek.',
         'Yalnızca daha az öğrencisi olan kurslar değişecek.',
         'Hayır, yalnızca yeni modele sahip gruplarınız değişecek. Aksi söylenmedikçe, eski kurslarla devam eden mevcut gruplarınız aynı kalacaktır.'],
      a:2, e:'Yeni model kademeli olarak uygulanır. Başka bir formatta eğitim alan mevcut gruplar bu formatı korur — gruplarınızdan biri değişirse size bildirilecektir.' },
    { ctx:'Bir dersin ilk dakikalarını planlıyorsunuz: yeni kavramı açıklamak, aracı göstermek, ardından öğrencilerin projeyi yapması için şablonu dağıtmak.',
      q:'Yeni modelde bu planın nesi yanlış?',
      o:['Hiçbir şey — öğrencilerin kavramları kullanabilmesi için önceden açıklanması gerekir.',
         'Tümdengelimseldir. Ders, çalışan bitmiş sonuçla açılmalı, birlikte keşfedilmeli ve açıklamanız öğrencilerin zaten fark ettiği şeylere yanıt vermelidir.',
         'Kavramı sizin yerinize yapay zekanın açıklamasına izin vermelisiniz.'],
      a:1, e:'Tümevarımsal öğrenme eski sırayı tersine çevirir: önce çalışan sonucu gösterin, birlikte parçalarına ayırın ve açıklamayı öğrenciler cevaba ihtiyaç duyduğunda yapın.' },
    { ctx:'Bir öğrenci on dakikadır aynı sorunu çözmeye çalışıyor. Hâlâ çalışmıyor ve şöyle diyor: “Bu konuda gerçekten kötüyüm.”',
      q:'Modelin gelişim odaklı zihniyetine (growth mindset) hangi cevap uygundur?',
      o:['“Üzülme, devam edebilmemiz için bunu senin yerine düzelteyim.”',
         '“Bu çok kolay — şimdiye kadar halletmiş olmalıydın.”',
         '“Henüz çalışmıyor — bu çok tipik bir sorun. Ne denediğini göster, bir sonraki stratejiyi birlikte bulalım.”'],
      a:2, e:'Hata, gelişimin normal bir aşamasıdır. Bunu normal olarak adlandırın ve bir sonraki adımı öğrenciye bırakın — onların yerine düzeltmek öğrenmeyi ortadan kaldırır.' },
    { ctx:'Bir öğrenci yapay zekadan oyununun tüm mantığını yazmasını istiyor ve hiçbir şeyi değiştirmeden projesine yapıştırıyor.',
      q:'Bu durum modelin hangi kuralını ihlal eder?',
      o:['“Yapay zeka önerir, yazar karar verir” — yapay zeka yardımcı olabilir ancak projenin ana mantığını asla öğrencinin yerine oluşturmamalıdır.',
         'Hiçbirini: proje çalıştığı sürece yapay zekanın her şeyi yapmasına izin verilir.',
         'Yapay zekanın yalnızca görseller için kullanılabileceği kuralını.'],
      a:0, e:'Her yaşta kural aynıdır: yapay zeka önerir, yazar karar verir. Ne kadar yapay zeka kullanılacağı yaşa bağlıdır ancak projenin ana sahibi her zaman öğrencidir.' }
  ],
  m2:[
    { q:'Backoffice’te, bu kurslardaki bir dersin etkinliklerine ve Öğretmen Notlarına nasıl ulaşırsınız?',
      o:['Gruplar → grubunuz → wiki bağlantısı.',
         'Kurslar → ilgili kurs → Assignments → dersi seçin → bir etkinliği açın.',
         'Profil → Program → ilgili ders.'],
      a:1, e:'Kurs içeriğine Gruplar üzerinden değil, Kurslar üzerinden ulaşılır. Assignments bölümünde dersin etkinlik kartlarını görürsünüz — Öğretmen Notları her kartın içindedir. Çalışma kılavuzları tablosu kasıtlı olarak boştur.' },
    { ctx:'Geçen ay başka bir grupla 3. Dersi işlediniz ve harika geçti.',
      q:'Dersi tekrar işlemeden önce ne yaparsınız?',
      o:['Hiçbir şey: dersi biliyorsunuz, bu yüzden bu sefer notları atlayabilirsiniz.',
         'Öğretmen Notlarını tekrar okuyun ve güncellemeleri kontrol edin — kurslar sürekli geliştirilmektedir, etkinlikler, süreler veya notlar değişebilir.',
         'Wiki’deki sunumu arayın.'],
      a:1, e:'Öğretmen Notlarını okumak, her seferinde her dersin hazırlığının bir parçasıdır. Anlattığınız önceki sürüm, anlatacağınız yeni sürümle aynı olmayabilir.' },
    { ctx:'Lead the group anahtarınız açık. Dersin ortasında bir öğrenci “Work independently” butonuna tıklıyor ve önceki bir karta geri dönüyor.',
      q:'O andan itibaren ne olur?',
      o:['Öğrenci dersten çıkarılır ve tekrar katılması gerekir.',
         'Öğrencinin ekranında nerede olduğunuzu gösteren ve Geri Dön butonu içeren bir başlık kalır; adının yanında bağımsız çalıştığını görürsünüz.',
         'Sizin kartınızdaki yanıtları size canlı olarak gönderilir.'],
      a:1, e:'Follow Mode öğrenciyi asla kısıtlamaz. Kendi başlarına çalışabilir, sizin nerede olduğunuzu görebilir ve tek tıkla geri dönebilirler.' },
    { q:'Scratch düzenleyicisi gibi bir araçtaki bir adımı göstermek istiyorsunuz. Bunu göstermenin doğru yolu nedir?',
      o:['Ders kartı açıkken ekranınızı paylaşın, böylece yönergeleri ve notlarınızı görürler.',
         'Yalnızca aracın sekmesini veya penceresini paylaşın — Öğretmen Notlarınızın göründüğü ders kartını asla paylaşmayın.',
         'Hiçbir şey göstermeyin: tüm açıklamayı kartlar yapar.'],
      a:1, e:'Follow Mode kartlar içindir: her öğrencinin kendi kopyası vardır ve notlarınızı asla görmezler. Ekran paylaşımı ise ekranınızda tam olarak ne varsa onu gösterir — bu yüzden ders kartını değil, aracı paylaşın.' },
    { ctx:'Öğrencileriniz bir çoktan seçmeli soruyu ve ardından projelerinin bağlantısını yapıştırmaları gereken bir etkinliği tamamladılar.',
      q:'Hangi ifade doğrudur?',
      o:['Her ikisi de otomatik olarak kaydedilir: öğrencilerin hiçbir şeye tıklamasına gerek yoktur.',
         'Çoktan seçmeli soru puanı otomatik olarak kaydeder; bağlantı etkinliği için öğrencilerin “Send” butonuna tıklaması gerekir.',
         'Her ikisi için de Submit butonuna basılması gerekir, aksi takdirde hiçbir şey kaydedilmez.'],
      a:1, e:'Çoktan seçmeli sorular, metin/formül alanları ve sürükle-bırak etkinlikleri puanı otomatik olarak kaydeder. Öğrencilerin metin, bağlantı veya dosya gönderdiği etkinliklerde “Send” butonuna basılması gerekir.' },
    { q:'Öğrenciler ve eğitmenler Kodland Sparks’a nasıl giriş yaparlar?',
      o:['Herkes Backoffice kullanıcı adını ve şifresini kullanır.',
         'Öğrenciler ana platformdan tek tıkla giriş yapar; eğitmenler Operasyon veya Eğitim departmanı tarafından verilen ayrı kullanıcı bilgilerini kullanır.',
         'Öğrenciler ve eğitmenler web sitesinden kendileri kayıt olurlar.'],
      a:1, e:'Öğrenciler platform üzerinden tekli oturum açma (SSO) kullanır. Eğitmenler Operasyon veya Eğitim departmanından ayrı giriş bilgileri alırlar — o zamana kadar rehberli tur ile inceleyebilirsiniz.' }
  ],
  // Module 3: in every case, the tutor must spot the strategy that would HARM that part of the lesson
  m3:[
    { part:'👋 Isınma', ctx:'Öğrenciler kameraları kapalı bir şekilde sessizce katılıyor. Kimse tek bir kelime bile söylemiyor.',
      o:['Her öğrenciyi ismiyle selamlayın ve haftaları hakkında kısa bir soru sorun.',
         'Zaman kazanmak için ısınmayı atlayın ve doğrudan projeye geçin.',
         'Onlar yerleşirken yoklamayı alın ve bir emoji ile tepki vermeye davet edin.'],
      a:1, e:'Isınmayı atlamak iki dakika kazandırır ama bağ kurmayı kaybettirir. Kısa ve samimi bir açılış, sessiz öğrencilerin konuşmasını ve dersin geri kalanına katılımını sağlar.' },
    { part:'📓 Ödev kontrolü', ctx:'Grubun yarısı ödevini yapmadı.',
      o:['Kimlerin takıldığını ve ne olduğunu sorun — belki teknik bir sorundu.',
         'Bir öğrenciden ödevini göstermesini isteyin ve iyi giden spesifik bir şeyi belirtin.',
         '“Tamam, size sıfır veriyorum” deyin ve nedenini sormadan devam edin.'],
      a:2, e:'Yapılmayan bir ödev sadece bir sıfır değil, bir sinyaldir. Takılıp takılmadıklarını öğrenmek, onlara yardımcı olmanın ve geride kalmalarını önlemenin yoludur.' },
    { part:'🧠 Kavrama', ctx:'Yeni bir fikri açıkladınız. “Anlaşıldı mı?” diye sorduğunuzda herkes evet diyor — ancak gerçekten anlamadıklarından şüpheleniyorsunuz.',
      o:['Belirli bir öğrenciden ismiyle hitap ederek neden çalıştığını açıklamasını isteyin.',
         'Evet cevabını kabul edin ve devam edin: anlaşıldı diyorlarsa anlaşıldı demektir.',
         'Bir şeyi değiştirirseniz ne olacağını tahmin etmelerini isteyin, ardından birlikte deneyin.'],
      a:1, e:'“Anlaşıldı mı?” sorusu neredeyse her zaman evet yanıtını alır. Kontrol etmeden devam etmek, öğrencilerin daha sonra takılmasına neden olur — bunun yerine birinden gerekçesini açıklamasını isteyin.' },
    { part:'📋 Özet', ctx:'Son 7 dakika kaldı ve grup son kartı bitirmedi.',
      o:['Kartı bitirebilmeleri için son ana kadar çalışmaya devam edin ve özeti atlayın.',
         'Kapanış rutinine şimdi başlayın: bitmeyen kart bir sonraki derste veya evde devam edebilir.',
         'İki veya üç öğrenciden bugün ne öğrendiklerini söylemelerini isteyin.'],
      a:0, e:'Son saniyeye kadar çalışmak, özetin, merak uyandırma adımının ve ödevin kaybolmasının tam nedenidir. Kapanışı zamanında başlatın — kart bekleyebilir, kapanış bekleyemez.' },
    { part:'🔮 Gelecek ders (Teaser) & ödev', ctx:'Dersin son dakikası ve öğrenciler ayrılmak üzere.',
      o:['Merak uyandırma adımını projeleriyle ilişkilendirin: bir sonraki sefer için merak uyandıran tek bir cümle.',
         'Ödevi bir veya iki cümleyle açıklayın ve nasıl teslim edeceklerini hatırlatın.',
         'Çıkarken merak uyandıran cümleyi hızlıca okuyun ve “ödev platformda” deyin.'],
      a:2, e:'Aceleye getirilmiş bir merak uyandırma adımı ve açıklanmayan bir ödev, öğrencilerin sırada ne olduğunu bilmeden ayrılması anlamına gelir. Motive edici tek bir cümle ve net bir açıklama iki dakikadan az sürer.' }
  ],
  m4:[
    { ctx:'Bir öğrencinin Scratch oyunu fikrini bir prompt’a dönüştürmesine yardımcı oluyorsunuz.',
      q:'İlk denemede kullanılabilir bir sonuç üretme olasılığı en yüksek olan prompt hangisidir?',
      o:['“İyi oyun tasarımı ilkelerini kullanarak endless runner oyunlarına benzer engelli bir kedi oyunu yap.”',
         '“Bir Scratch oyunu oluştur: bir kedi karakteri ok tuşlarıyla sola/sağa hareket eder, engeller yukarıdan artan hızla düşer, hayatta kalınan her saniye puan artar, 3 çarpmadan sonra oyun biter.”',
         '“8 yaşındaki bir çocuk için Flappy Bird’e benzeyen ama özgün, engelleri ve hayatta kalmayı öğreten eğlenceli ve ilgi çekici bir oyun yap.”',
         '“Scratch’te net kuralları, puanlama sistemi ve zamanla artan zorluk derecesi olan 2B bir oyun oluştur.”'],
      a:1, e:'Yalnızca bu seçenekte somut, net mekanikler vardır: hareket, oluşma davranışı, puanlama tetikleyicisi, bitiş koşulu. Diğerleri kulağa spesifik <i>gelir</i> ancak yapay zekanın kendi başına yorumlaması gereken öznel ifadelere dayanır — “iyi oyun tasarımı ilkeleri”, “eğlenceli ve ilgi çekici”, “net kurallar”.' },
    { ctx:'Bir öğrencinin ilk görsel prompt’u yanlış renk paletine sahip bir karakter üretti. Duruş, stil, arka plan gibi diğer her şey doğru çıktı.',
      q:'Bir sonraki en iyi adım nedir?',
      o:['Aynı hatayı iki kez yapmamak için tüm prompt’u genel olarak daha fazla detayla sıfırdan yeniden yazmak.',
         'Yapay zeka çıktısının rastgeleliği olduğundan ve ikinci bir deneme genellikle düzelttiğinden, aynı prompt’u tekrar çalıştırmak.',
         'Açıklamanın geri kalanını aynı tutarak yalnızca renk paletini değiştiren bir takip prompt’u göndermek.',
         'İstenen ruh halini tanımlayan birkaç ekstra sıfat eklemek, böylece yapay zeka daha fazla bağlama sahip olur.'],
      a:2, e:'Yanlış olan tek değişkeni izole etmek, sıfırdan başlamaktan, rastgeleliğe güvenmekten veya asıl sorunu çözmeyen ilgisiz detaylar eklemekten daha hızlı ve daha güvenilirdir.' },
    { ctx:'13+ yaşındaki bir öğrencinin yapay zeka kullanarak bir Python fonksiyonundaki hatayı ayıklamasına yardımcı oluyorsunuz.',
      q:'Hangi prompt en etkili sorun giderme yaklaşımını yansıtır?',
      o:['“Bu kod çalışmıyor, lütfen düzeltin: [kod]”',
         '“Bu fonksiyon bir listenin ortalamasını döndürmelidir ancak listede tek öge olduğunda None döndürüyor. İşte kod: [kod]. Bu spesifik durumun başarısız olmasına ne sebep oluyor?”',
         '“Bu kodu daha iyi uygulamalar kullanarak yeniden yazın ve çalıştığından emin olun: [kod]”',
         '“Bu koddaki yanlışın ne olduğunu açıklayın ve bana düzeltilmiş bir versiyonunu verin: [kod]”'],
      a:1, e:'Beklenen davranışı, gözlemlenen hatayı ve spesifik uç durumu tam olarak adlandırır — böylece yapay zeka kapsama alanı hakkında tahmin yürütmek veya gerekenden fazlasını yeniden yazmak yerine gerçek hatayı hedefleyebilir.' },
    { ctx:'İki eğitmen aynı video oluşturma görevi için prompt yazıyor. Eğitmen A; stili, konuyu ve arka planı tek seferde kapsayan uzun ve detaylı bir prompt yazıyor. Eğitmen B ise önce daha kısa bir prompt yazıyor, sonucu kontrol ediyor ve ardından ayarlama yapıyor.',
      q:'Hangi ifade en doğrudur?',
      o:['Eğitmen A’nın yaklaşımı her zaman daha iyidir, çünkü başlangıçta daha fazla detay gerekebilecek yineleme sayısını azaltır.',
         'Eğitmen B’nin yaklaşımı her zaman daha iyidir, çünkü daha kısa prompt’ların yapay zeka tarafından işlenmesi doğası gereği daha kolaydır.',
         'Her iki yaklaşım da çalışabilir ancak Eğitmen B’nin yinelemeli (iteratif) yaklaşımı, hangi özel detayın istenmeyen bir sonuca yol açtığını tespit etmeyi kolaylaştırır.',
         'Nihai çıktı kalitesi prompt’a değil yalnızca kullanılan yapay zeka modeline bağlı olduğundan, iki yaklaşım da fark etmez.'],
      a:2, e:'Bu modülün temel ilkesi yineleme ve değişkenleri izole etmektir. Detay tek başına başarıyı garanti etmez ve yineleme yapmak, her şeyi tek bir büyük prompt’ta yapmaktan çok daha net bir neden-sonuç ilişkisi sağlar.' },
    { open:true, min:180,
      ctx:'Grubunuzdaki bir öğrenci platform oyununa çift zıplama (double jump) eklemek istiyor. Yapay zekaya şöyle yazıyor: <i>“zıplamayı daha iyi yap”</i>.',
      q:'Bunu ilk denemede çalışması muhtemel bir prompt’a dönüştürün. Üretmelerine yardımcı olacağınız gerçek prompt metnini yazın, ardından sizinkinin neden daha iyi çalışacağını açıklayan bir satır ekleyin.',
      model:'Güçlü bir prompt şunların çoğunu yapar: <ul><li><b>Platformu adlandırır</b> — “Scratch’te…” — böylece yapay zeka ortamı tahmin etmek zorunda kalmaz.</li><li><b>Tam davranışı ve tetikleyicisini belirtir:</b> “kedi zaten havadayken boşluk tuşuna basıldığında ikinci kez zıplar”.</li><li><b>Bir sınır koyar:</b> “düşüş başına yalnızca bir kez” ve “mevcut hareket bloklarını değiştirme”.</li><li><b>Açıklama ister:</b> “hangi blokları nereye eklediğini bana söyle”.</li></ul><p style="margin-top:8px">Nedeni ise: <b>tek bir</b> mekaniği izole eder, beklenen davranışı kesin olarak belirtir ve nelerin değişebileceğini sınırlandırır — böylece yapay zekanın uyduracağı hiçbir şey kalmaz. “Zıplamayı daha iyi yap” ifadesi bu kararların her birini yapay zekaya bırakır.</p>' }
  ]
};

/* ============================================================
   STAGE CAROUSELS (Module 3) — keep e, c and v
   ============================================================ */
CONTENT.stagesets = {
  blocks:[
    { e:'👋', t:'Isınma — 2 ila 4 dakika', was:'Isınma', ph:'Açılış', c:'#BDE7FF', goal:'Hâlâ var ancak kısa: selamlama, kamera ve mikrofon kontrolü, bir tepki. Bazı derslerde duygu durumu kontrolü bulunur.',
      d:['Bağ kurmak için kullanın: kısa bir sohbet veya ilgi alanları ve nasıl hissettikleri hakkında bir soru.','Yoklamayı son dakikada değil, öğrenciler yerleşirken şimdi alın.'] },
    { e:'🔧', t:'Teknik bir kontrol noktası', was:'Önceki dersin tekrarı', ph:'Açılış', c:'#BDE7FF', goal:'Tekrar adımı bir kontrol noktasına dönüşür: önceki proje açılıyor ve çalışıyor mu? Kavramlar yeniden açıklanmaz — yalnızca başlangıç noktasının hazır olduğu kontrol edilir.',
      d:['Bazı derslerde tekrar ve ödev kontrolü platformda tek bir görevdir.','Bir proje açılmazsa yedek şablonu kullanın — kimse yarı yolda kalmaz.'] },
    { e:'🎬', t:'Hedef gösterilir, açıklanmaz', was:'Ders hedefi', ph:'Açılış', c:'#FFF1B8', goal:'Hedef, dersin ilk tetikleyicisi olarak bitmiş sonuçla — bir video, GIF veya çalışan bir proje ile — gösterilir.',
      d:['Önce sonucu gösterin, ardından ne fark ettiklerini sorun.','Açıklamanın daha sonra, bir yanıt olarak gelmesine izin verin.'] },
    { e:'🔀', t:'Teori ve pratik birleşmiştir', was:'Teori ve pratik', ph:'Ana bölüm', c:'#E4FFC2', goal:'Öğrenciler önce keşfeder ve zorlukla karşılaşır; açıklama tam da ihtiyaç duydukları anda gelir.',
      d:['Çözümü değil, her seferinde tek bir ipucu verin.','Hatalar başarısızlık değil, öğrenme materyalidir.'] },
    { e:'📋', t:'Özet — etkileşimli ve paylaşımlı', was:'Ders özeti', ph:'Kapanış', c:'#FFD9EC', goal:'Daha etkileşimli ve gruba dayalı: her öğrencinin platformda yanıtladığı küçük testler ve üzerinden geçmeniz için öğrenilenlerin kısa bir listesi.',
      d:['Ne öğrendiklerini öğrenciler söyler — özeti onlar yerine siz yapmazsınız.','Kapanış rutininizin ilk adımıdır (aşağıda).'] },
    { e:'🏠', t:'Ödev — sonraki sürüm', was:'Ödev görevi', ph:'Kapanış', c:'#FFD9EC', goal:'Ödev, aynı yayınlanmış projenin bir sonraki sürümüdür — veya az önce öğrendiklerinin üzerine inşa edilen bir görevdir. Ayrı bir alıştırma değildir.',
      d:['Ayrılmadan önce net bir şekilde açıklayın.','Yeni sürümü yayınlamalarını ve bağlantıyı göndermelerini hatırlatın.'] },
    { e:'🔮', t:'Gelecek ders — motive edici tek bir cümle', was:'Sonraki dersin önizlemesi', ph:'Kapanış', c:'#FFD9EC', goal:'Bu bir bölüm değil, tek bir cümledir — ama cümleyi öylece okuyup geçmeyin. Motive etmek için kullanın.',
      d:['Anlatmadan önce bir sonraki dersi okuyun, böylece gerçek bir merak uyandırabilirsiniz.','Az önce yaptıklarına bağlayın.'] }
  ],
  open:[
    { e:'👋', t:'Isınma ve selamlama', ph:'Açılış · 1', c:'#BDE7FF', v:'warmup', goal:'Ders anlatmadan önce bağ kurun: her öğrenciyi ismiyle selamlayın, kamera ve sesi kontrol edin ve gülümsemeleri için bir neden verin.',
      d:['Geldiklerinde her öğrenciyi ismiyle karşılayın.','Haftaları veya ilgi alanları hakkında 1 dakikalık bir soru.','Onlar yerleşirken yoklamayı alın.'],
      say:['“Selam Leo! Seni görmek harika. Başlamadan önce kısa bir soru: Bu hafta hangi oyunu oynadın?”'] },
    { e:'🔗', t:'Önceki dersle bağlantı', ph:'Açılış · 2', c:'#C9F2D6', v:'link', goal:'Öğrencilere projelerinin ne durumda olduğunu ve bugünkü dersin neden onu takip ettiğini hatırlatın — hikaye devam ediyor.',
      d:['Bir öğrenciden geçen sefer ne yaptıklarını gruba anlatmasını isteyin.','Bunu tek cümleyle bugünkü göreve bağlayın.','Kurs hikayesini canlı tutun: “Bugün görevimiz…”.'],
      say:['“Ana, bize hatırlat: Geçen dersin sonunda projen ne yapabiliyordu?”','“Geçen sefer oyununuza bir kahraman eklemiştiniz. Bugün kahraman bir hedef kazanıyor.”'] },
    { e:'📓', t:'Ödev kontrolü', ph:'Açılış · 3', c:'#FFF1B8', v:'homework', goal:'Evde üzerinde çalıştıkları bir sonraki sürümü kontrol edin — ve kimlerin takıldığını fark edin.',
      d:['Bir veya iki öğrenciden ödevlerini göstermelerini isteyin.','İyi giden özel bir şeyi belirtin.','Ödev yok mu? Sadece sıfır vermek yerine teknik olarak takılıp takılmadıklarını öğrenin.'],
      say:['“Mia, bize yeni versiyonunu göster. Bu renkleri seçmene ne sebep oldu?”'] },
    { e:'🎯', t:'Ders hedefi', ph:'Açılış · 4', c:'#E4FFC2', v:'goal', goal:'Bugünün dersinin neyi hedeflediğini belirleyin. Bu, bağımsız çalışma başlamadan önceki son aşamadır.',
      d:['Bugünün projesinin hedefini bir veya iki cümleyle açıklayın.','Öğrenciden planı kendi kelimeleriyle tekrarlamasını isteyin.'] }
  ],
  close:[
    { e:'📋', t:'Özet (Recap)', ph:'Son 5–7 dk · 1', c:'#FFD9EC', v:'recap', goal:'Siz değil, öğrenciler ne öğrendiklerini söyler. Karttaki özet testini veya listeyi kullanın ve cevaplamalarına izin verin.',
      d:['2–3 öğrenciye bugün ne öğrendiklerini sorun.','“Anlaşıldı mı?” yerine neden veya nasıl diye sorun.','Grubun başardığı özel bir şeyi tebrik edin.'],
      say:['“Tom, oyun başladığında ne oluyor — ve nedeni ne?”'] },
    { e:'🔮', t:'Bir sonraki ders için merak uyandırma (Teaser)', ph:'Last 5–7 min · 2', c:'#E9DDFF', v:'teaser', goal:'Tekrar gelmek istemelerini sağlayacak tek bir cümle. Yalnızca bir sonraki dersi okuduysanız işe yarar.',
      d:['Hazırlık yaparken bir sonraki dersi okuyun.','Teaser’ı onların projesine bağlayın.','Kısa ve heyecan verici tutun — özet değil, bir vaat.'],
      say:['“Gelecek sefer kahramanınızın yolunda tehlikeli bir şey belirecek… Başarabilecek mi?”'] },
    { e:'🏠', t:'Gelecek ödev', ph:'Last 5–7 min · 3', c:'#C9F2D6', v:'nexthw', goal:'Projenin bir sonraki sürümünü açıklayın, böylece herkes ne yapacağını — ve nasıl teslim edeceğini — tam olarak bilir.',
      d:['Ödevi bir veya iki cümleyle açıklayın.','Bağlantıyı teslim ederken “Send” butonuna tıklamalarını hatırlatın.','Olumlu bir notla vedalaşın.'],
      say:['“Gelecek sefere kadar: Oyununuza yeni bir detay ekleyin, yayınlayın ve bağlantısını bana gönderin.”'] }
  ]
};

/* ============================================================
   SMALL DATA LISTS — Learning Loop, AI per age, prompt and question examples
   ============================================================ */
CONTENT.loop = [
  ['🎯','Hedef','Ders, günün sonunda neyin çalışması gerektiğinden başlar — açıklanmaz, gösterilir.'],
  ['⚡','Hızlı prototip','Öğrenciler hızlıca çalışan bir şey elde eder: bir şablon, ilk sürüm, ilk sonuç.'],
  ['🐞','Zorluk','Bir şey henüz çalışmıyor. Bu beklenen bir durumdur — öğrenmenin gerçekleştiği yer burasıdır.'],
  ['🧭','Strateji / İpucu','Çözümü değil, her seferinde tek bir ipucu veya bir soru verirsiniz.'],
  ['📈','Geliştirme','Öğrenci sorunu çözer ve daha iyi hale getirir: kendi sürümü, kendi kararları.'],
  ['🎤','Sunum (Showcase)','Bunu gösterirler: size, gruba, Kodland Sparks’ta.'],
  ['💭','Öz değerlendirme','Hangi sorunu yaşadım? Hangi stratejiyi kullandım? Bir sonraki adımım ne?']
];
CONTENT.ages = {
  a:{ e:'🧒', age:'8–9', who:'En genç öğrenciler için kurslar', model:'Rehberli proje tabanlı öğrenme, yapay zeka destekli.',
      p:'Öğrencilerin zaten bildiklerine yakın araçlar, eğitmen ve AI Buddy tarafından yönlendirilen yapay zeka. <b>“Bunu ben yaptım” hissi korunması gereken en önemli değerdir.</b> Yapay zeka kursta daha sonra, eğlenceli ve sınırlandırılmış bir öge olarak görünebilir.',
      test:'Tersine test', tt:'Proje, yapay zeka <b>olmadan</b> %100 ulaşılabilir ve anlamlı kalmalıdır. Yapay zeka yalnızca rutin sürtünmeyi ortadan kaldırır — yaratıcı eylemi asla ortadan kaldırmaz.', ai:20 },
  b:{ e:'🧑', age:'10–12', who:'Ergenlik öncesi öğrenciler için kurslar', model:'Yönlendirmeli proje tabanlı öğrenme, hammadde olarak yapay zeka.',
      p:'Öğrenci yaratıcı çekirdeğe sahiptir ve onu yürütür; yapay zeka öğrencinin seçtiği, düzenlediği ve bir araya getirdiği ham materyalleri — karakterler, sesler, metinler — üretir. Yapay zeka bir “ikinci beyin/ortak” gibidir.',
      test:'Kaldıraç testi', tt:'Yapay zeka olmadan proje yine de mümkün olurdu ancak ders süresi içinde gözle görülür şekilde daha zayıf veya daha küçük kalırdı. Yapay zeka öğrencinin fikrinin sınırlarını yükseltir.', ai:55 },
  c:{ e:'🧑‍💻', age:'12–17', who:'Gençler için kurslar', model:'Yapay zeka ile entegre proje tabanlı öğrenme — kreatif direktör olarak öğrenci.',
      p:'Öğrenciler tüm süreç boyunca (kavram → varlıklar → mantık → yapım) yapay zekayı yönlendirir;sentetik medya hakkında açık bir okuryazarlıkla yapay zekayı kendi programları içinde bir bileşen olarak kullanırlar.',
      test:'Hırs testi', tt:'Planlanan kapsam ve kalite, verilen sürede yapay zeka olmadan elde edilemez. Yapay zekayı çıkardığınızda projenin planlanan yapısı çöker.', ai:85 }
};
CONTENT.prompts = {
  v:['“Bana bir oyun yap.”','“Daha güzel yap.”','“Kodumu düzelt.”'],
  s:['“Python’da: bir sayı tahmin oyunu yaz. Bilgisayar 1 ile 100 arasında bir sayı seçer, oyuncunun 7 hakkı vardır, her tahminden sonra program ‘çok yüksek’ veya ‘çok düşük’ yazdırır ve sonunda kaç deneme yaptığını söyler.”',
     '“Yalnızca renk paletini neon mavi ve pembe olarak değiştir. Duruşu, stili ve arka planı aynı tut.”',
     '“Python programım oyuncu sayıyı tahmin ettiğinde durmalı ama sormaya devam ediyor. İşte kodum. Buna ne sebep oluyor ve neyi kontrol etmeliyim?”']
};
CONTENT.qcmp = {
  v:['“Anlaşıldı mı?”','“Herkes bitirdi mi?”','“Sorusu olan var mı?”'],
  s:['“Mia, karakter neden sadece yön tuşuna bastığında hareket ediyor?”','“Leo, bu satırı en üste taşırsak ne olacağını düşünüyorsun? Deneyin ve bize söyleyin.”','“Ana, puanın çalıştığını nereden bildin?”']
};

/* ============================================================
   Notes under the vague / specific switches
   ============================================================ */
CONTENT.cmpnote = { prompts:{ v:'Yapay zeka her şeyi tahmin etmek zorundadır: platformu, kuralları, “daha güzel”in ne anlama geldiğini.', s:'Her biri platformu, tam davranışı ve nelerin değişebileceğini adlandırır — tahmin edecek hiçbir şey kalmaz.' },
                  questions:{ v:'“Evet” ile cevaplaması kolaydır — ve ne anladıkları hakkında hiçbir şey öğrenemezsiniz.', s:'Bir isim artı bir “neden” veya “nasıl”: öğrenci düşüncesini sesli olarak açıklamak zorundadır.' } };

/* Follow Mode demo cards (Module 2) */
CONTENT.fmCards = [['1. Kart · Bugünün görevine hazır olun! 🚀','Bugün ilk projenizi oluşturacaksınız…'],['2. Kart · Hoş geldiniz! 👋','Birbirinizi görüp duyabildiğinizden emin olalım…'],['3. Kart · Birbirimizi tanıyalım! 🎤','Her içerik üreticisinin kendine has bir tarzı vardır…']];

/* ============================================================
   SECTION BODIES — the text of every section, by module. Inside ${…} translate only the quoted text; keep function names (callout, flip, launch, codeBox, zclip, stc, videoBtn), CONFIG.… and file names.
   ============================================================ */
CONTENT.body = {
/* ---------------- Module 1 ---------------- */
what:() => `
  <p class="p">Kodland, hem yeni hem de mevcut kurslarda kademeli olarak uygulanacak <b>yeni bir eğitim modeli (EM)</b> oluşturdu. Bu sadece yeni teknik içeriklerden ibaret değildir — farklı bir <b>metodolojidir</b>: dersin nasıl aktığı, eğitmen olarak nasıl bir rol oynadığınız ve yapay zekanın kestirme bir yol olmak yerine öğrenmenin bir parçası haline nasıl geldiğiyle ilgilidir.</p>
  <div class="defn"><span class="de">🌱</span><p>Bu <b>yeni eğitim modelinde</b> öğrenciler çalışan bir sonuçtan başlar, üreterek ve hataları düzelterek öğrenir, projelerini <b>Kodland Sparks</b> üzerinde yayınlar ve yapay zekayı mantık süzgecinden geçirerek kullanırlar.</p></div>
  ${callout('good', '🧭', '<b>Önemli:</b> Bu, kademeli olarak uygulanacak yeni bir eğitim modelidir. Yeni kurslar bu öğretim yaklaşımını takip ederken, mevcut kurslar da yeni modele uyarlanacaktır. Ancak, farklı bir öğretim formatında ders alan gruplar mevcut formatlarına devam edeceklerdir. Şimdilik sadece bazı kurslar bu yeni modeli takip etmektedir.')}
  <p class="p" style="margin-top:18px">Neden yeni bir model? Çünkü günümüz öğrencileri birkaç yıl önceki öğrencilerden farklı şekilde öğreniyor. Araçlar değişti, çocukların ve gençlerin teknolojiyle kurdukları ilişki değişti ve yapay zeka zaten günlük hayatlarının bir parçası. Yeni metodoloji üç fikir etrafında inşa edilmiştir:</p>
  <div class="trio">
    <div class="ti"><span class="tie">🛠️</span><h3>Tanıdıkları araçlar</h3><p>Öğrenciler bugün gerçekten gördükleri ve kullandıkları araçlarla — ve ilk dakikadan itibaren gerçek bir “harika” etkisi yaratan projelerle çalışırlar.</p></div>
    <div class="ti"><span class="tie">🧠</span><h3>Bilinçli yapay zeka</h3><p>Öğrencilere yapay zekayı bilgece kullanmayı öğretiyoruz: ne ondan korkarak ne de ona körü körüne bağımlı olarak.</p></div>
    <div class="ti"><span class="tie">✨</span><h3>Katılmaya değer dersler</h3><p>Öğrenme deneyimi güncel kalır, böylece her ders katılmaya değer hale gelir.</p></div>
  </div>
  <p class="p" style="margin-top:18px">Devam etmeden önce, sıkça inanılan üç doğru bilinen yanlışı netleştirelim. Her birine dokunun:</p>
  <div class="myths">
    <button class="myth" data-myth><span class="mtag">Efsane</span><span class="mq">“Tüm Kodland kursları yeni modele geçiyor.”</span><span class="ma"><b>Tümü değil.</b> Yeni model, bu model için tasarlanmış yeni kurslarda ve bu modele uyarlanan seçili mevcut kurslarda kullanılır.</span><span class="mh">Gerçeği görmek için dokunun →</span></button>
    <button class="myth" data-myth><span class="mtag">Efsane</span><span class="mq">“Tüm gruplarım değişecek.”</span><span class="ma"><b>Hayır.</b> Yeni modelle yalnızca bu modeli takip eden bir kursun gruplarında ders anlatırsınız. Diğer tüm gruplarınızda hiçbir şey değişmez. Kurslarınızdan biri yeni modele geçtiğinde bilgilendirilirsiniz.</span><span class="mh">Gerçeği görmek için dokunun →</span></button>
    <button class="myth" data-myth><span class="mtag">Efsane</span><span class="mq">“Bu sadece öğrenilmesi gereken yeni bir içerik.”</span><span class="ma"><b>Bu, bir dersi düşünmenin yeni bir yoludur.</b> İçerik sizden çok az yeni bilgi ister — asıl değişim bir dersin nasıl aktığı ve içinde ne yaptığınızdır.</span><span class="mh">Gerçeği görmek için dokunun →</span></button>
  </div>`,

pillars:() => `
  <p class="p">Bu, modelin kalbidir. Yeni butonlar öğrenmekle ilgili değil — <b>bir dersi nasıl kurguladığınızı değiştirmekle</b> ilgilidir. Her şey dört temel direğe dayanır. Her kartı çevirin, ardından her birinin ne yaptığınızı nasıl değiştirdiğini okuyun.</p>
  <div class="grid4">
    ${flip('1. Direk', '🔄', 'Tümevarımsal öğrenme', '<b>Önce sonuç.</b><br>Ders zaten çalışan bitmiş sonuçla açılır. Öğrenciler sizinle birlikte onu parçalarına ayırır ve ancak o zaman parça parça inşa eder.')}
    ${flip('2. Direk', '🌱', 'Gelişim odaklı zihniyet', '<b>Hatalar bir aşamadır, başarısızlık değil.</b><br>Bir hata veya bozulan bir mekanik normaldir. Öğrenciler “henüz çalışmıyor — bir strateji bulalım” demeyi öğrenirler.')}
    ${flip('3. Direk', '🔁', 'Öğrenme Döngüsü (Learning Loop)', '<b>Bir çizgi değil, bir döngü.</b><br>Hedef → prototip → zorluk → ipucu → geliştirme → sunum → öz değerlendirme. Her tur biraz daha derine iner.')}
    ${flip('4. Direk', '🤖', 'Yapay zeka destekli öğrenme', '<b>Yapay zeka önerir, yazar karar verir.</b><br>Ne kadar yapay zeka kullanılacağı öğrencilerin yaşına bağlıdır — ve yapay zeka projenin temelini asla onlar yerine yapmaz.')}
  </div>

  <h3 class="subh">🔄 1. Direk · Önce göster, sonra açıkla</h3>
  <div class="ba"><div class="bef"><h4>Eski Hali</h4><p>Ders teoriyle başlar, ardından araç gösterilir ve öğrenciler sıfırdan inşa ederdi.</p></div><div class="arr">➜</div>
    <div class="aft"><h4>Yeni Hali</h4><p>Ders <b>zaten çalışan bitmiş sonuçla</b> başlar — “günün sonunda hangi oyun veya mekanik çalışıyor olmalı?”. Öğrenciler tüm projeyi görür, sizinle birlikte parçalarına ayırır ve ardından inşa ederler.</p></div></div>
  ${callout('tip', '💡', 'Bu durum bir eğitmen olarak ilk içgüdünüzü değiştirir: göstermeden önce açıklamak yerine, <b>önce gösterin ve açıklamayı öğrencilerin zaten fark ettiği şeylere bir yanıt olarak yapın</b>.')}

  <h3 class="subh">🌱 2. Direk · Sözleriniz onların zihniyetini şekillendirir</h3>
  <p class="p">Bir hata hakkında nasıl konuştuğunuz, öğrencilere o hata hakkında nasıl düşünmeleri gerektiğini öğretir. Model, her hataya normal bir adım muamelesi yapmanızı ve bir sonraki hamleyi öğrenciye devretmenizi ister.</p>
  <div class="twocol">
    <div class="yes"><h4>✅ Bunu söyleyin</h4><ul><li>“Harika — tipik bir sorun bulduk. Bunu çözelim.”</li><li>“Henüz çalışmıyor. Bir sonraki stratejimiz nedir?”</li><li>“Bundan önce ne denediğini bana göster.”</li></ul></div>
    <div class="no"><h4>🚫 Bundan kaçının</h4><ul><li>“Yine başaramadın.”</li><li>“Bu yanlış — senin yerine düzelteyim.”</li><li>“Bu çok kolay, bunu biliyor olmalıydın.”</li></ul></div>
  </div>

  <h3 class="subh">🔁 3. Direk · Kodland Öğrenme Döngüsü (Learning Loop)</h3>
  <p class="p">Eski sıra düz bir çizgiydi: <i>Açıklıyorum → uyguluyorlar → inceliyorum</i>. Öğrenme Döngüsü bunun yerine her dersin içinde ve dersler arasında tekrarlanan bir döngü koyar. Oynata basın veya herhangi bir adıma dokunun:</p>
  <div class="loop" id="loop">
    <div class="loop-row"><span class="lf"></span>${LOOP.map((s, i) => `<button class="lst" data-ls="${i}"><span class="lsi">${s[0]}</span><b>${s[1]}</b></button>`).join('')}</div>
    <div class="loop-out" id="loopOut"><span class="lo-e">▶️</span><span>Tam bir tur görmek için <b>Döngüyü oynat</b> butonuna basın.</span></div>
    <div class="btn-row" style="margin-top:12px;justify-content:center"><button class="btn-y" id="loopPlay">▶ Döngüyü oynat</button></div>
    <p class="spiral">🌀 Ders bir sarmal halinde ilerler: döngünün her dönüşü biraz daha derine iner.</p>
  </div>

  <h3 class="subh">🤖 4. Direk · Yapay zeka yaşa bağlıdır</h3>
  <p class="p">En çok dikkat etmeniz gereken yer burasıdır, çünkü yapay zekanın rolü <b>her kursta aynı değildir</b> — öğrencilerin kaç yaşında olduğuna bağlıdır. Yaş grupları arasında geçiş yapın:</p>
  <div class="agebox">
    <div class="seg" id="ageSeg"><button data-age="a" aria-pressed="true">🧒 8–9 Yaş</button><button data-age="b" aria-pressed="false">🧑 10–12 Yaş</button><button data-age="c" aria-pressed="false">🧑‍💻 12–17 Yaş</button></div>
    <div class="agebody" id="ageOut"></div>
  </div>
  <div class="quote"><b>“Yapay zeka önerir, yazar karar verir.”</b><small>Her kursta, her yaşta tekrarlanacak kural.</small></div>
  <div class="grid2">
    <div class="card"><div class="wh"><b>⚙️ Geleneksel (üretken) yapay zeka</b></div><p class="p" style="margin:0;font-size:15px">İstediğinizde kod, görsel veya fikir üretir.</p></div>
    <div class="card"><div class="wh"><b>🧭 AI Mentor / AI Buddy</b></div><p class="p" style="margin:0;font-size:15px">Çözümü üretmez: yönlendirici sorular sorar ve açıklar.</p>
      <p class="p" style="margin:10px 0 0;font-size:13.5px;color:var(--pink-d)"><b>👀 Bu eğitimin ilerleyen bölümlerinde</b> öğrencilerin bunu platformda nerede bulduklarını göreceksiniz.</p></div>
  </div>
  ${callout('bad', '🛑', '<b>Yapay zekanın projenin temel mantığını öğrencinin yerine oluşturmasına asla izin vermeyin.</b>')}`,

people:() => `
  <p class="p">Geri bildirim artık sadece <i>eğitmen → öğrenci</i> şeklinde değildir. Yeni modelde öğrenciler dört kaynaktan dönüş alırlar — ve her birinin bir rolü vardır:</p>
  <div class="q3">
    <div><span>🧑‍🏫</span><b>Eğitmen</b><small>Spesifik, proje ve bir sonraki adım hakkında.</small></div>
    <div><span>👥</span><b>Sınıf arkadaşı</b><small>Sunum sırasında basit ve spesifik — asla projeleri kıyaslamadan.</small></div>
    <div><span>🪞</span><b>Kendi kendilerine</b><small>Hangi sorunu yaşadım, hangi stratejiyi kullandım, bir sonraki adımım ne?</small></div>
    <div><span>🤖</span><b>Yapay Zeka</b><small>AI Buddy veya AI mentor: güçlü bir yön ve geliştirilecek bir fikir.</small></div>
  </div>
  ${callout('tip', '🪞', 'Öz değerlendirme “beğendin mi?” demek değildir. Sorunu, stratejiyi ve bir sonraki adımı adlandırmaktır. Akran geri bildirimi basit bir formülü takip eder: <b>“Beğendim… Şunu eklerdim…”</b>.')}
  <div class="defn" style="margin-top:18px"><span class="de">🧭</span><p><b>Kısacası rolünüz değişti.</b> Artık başlamadan önce her şeyi açıklayan kişi değilsiniz. Siz bir <b>rehbersiniz</b>: hedefi gösterir, yolculuğa sorular ve zamanında verilen ipuçlarıyla eşlik eder ve siz çözmeden önce öğrencilerin zorlukla karşılaşmasına izin verirsiniz. Her kursta yedek şablonlar mevcuttur, bu nedenle panik içinde bir projeyi “kurtarmak” zorunda kalmazsınız — her zaman garantili bir sonucu olan alternatif bir rota vardır.</p></div>`,

/* ---------------- Module 4 ---------------- */
why4:() => `
  <div class="defn"><span class="de">💡</span><p>Bu kurslar yeni konu bilgisi açısından sizden çok fazla şey istemez. Gerçekten yeni olan tek alan <b>yapay zekadır</b> — ve bazı eğitmenler bu konuda zaten rahatken, diğerleri onu çok az kullanır veya bir öğrenciye yardımcı olmayacak şekillerde kullanır. Bu modül ortak bir temel oluşturur.</p></div>`,

whatp:() => `
  <p class="p">Derslerimizde kullandığımız yapay zeka — AI Buddy ve Kodland Sparks içindeki araçlar — <b>prompt</b> adı verilen doğal dille yazılmış talimatlarla çalışır. Prompt ne kadar iyi olursa, öğrencinin elde edeceği sonuç da o kadar iyi olur.</p>
  <p class="p">Bir eğitmen olarak teknik bir yapay zeka uzmanı olmanıza gerek yoktur. Temel bilgileri anlamanız yeterlidir, böylece öğrencileriniz ders sırasında kendi prompt’larını yazarken onlara rehberlik edebilirsiniz.</p>
  <div class="defn"><span class="de">❓</span><p>Bir <b>prompt</b>, yapay zekaya bir sonuç — metin, kod, görsel, video — üretmesi için verdiğimiz talimattır. Projenizin bağlamı hakkında hiçbir şey bilmeyen birine talimat vermek gibidir: <b>talimatlar ne kadar net ve spesifik olursa, sonuç gerçekten istediğiniz şeye o kadar yakın olacaktır.</b></p></div>
  <div class="ba"><div class="bef"><h4>Kötü bir prompt</h4><p>Genel veya yanlış sonuçlar üretir. Öğrenci ya istemediği bir şeyi kabul etmek ya da sıfırdan yeniden başlamak zorunda kalır.</p></div><div class="arr">➜</div>
    <div class="aft"><h4>İyi bir prompt</h4><p><b>Ayarlanması kolay</b>, kullanışlı ve kesin sonuçlar üretir. En çok bu son kısım önemlidir — düzeltebileceğiniz bir sonuç, değiştirmek zorunda kalacağınız bir sonuçtan daha değerlidir.</p></div></div>`,

goodp:() => `
  <p class="p">Sağlam bir prompt genellikle şu dört soruyu yanıtlar:</p>
  <div class="q3">${[['🎬','Bağlam','Bu ne için? Bunu kim kullanacak?'],['🎯','Hedef','Tam olarak neye ulaşmak istiyorsunuz?'],['📐','Spesifik detaylar','Stil, format, ton, kısıtlamalar: “3 cümlede”, “Python kullanarak”, “çizgi film stilinde”.'],['🖼','Örnekler','Geçerli oldukları yerler — tek bir örnek yapay zekanın ne beklendiğini anlamasına yardımcı olur.']].map(q => `<div><span>${q[0]}</span><b>${q[1]}</b><small>${q[2]}</small></div>`).join('')}</div>
  <div class="twocol" style="margin-top:14px">
    <div class="yes"><h4>✅ Yeterince spesifik</h4><ul><li>“Görünür bir puanı ve 3 canı olan, bir kedinin düşen engellerden kaçtığı basit bir Scratch oyunu oluştur.”</li></ul></div>
    <div class="no"><h4>❌ Çok genel</h4><ul><li>“Bana bir oyun yap.”</li></ul></div>
  </div>
  <div class="card" style="margin-top:14px">
    <div class="wh"><b>Genel mi yoksa spesifik mi? Değiştirip karşılaştırın</b><span class="tag">Deneyin</span></div>
    <div class="seg" data-cmp="prompts"><button data-k="v" aria-pressed="true">😐 Genel</button><button data-k="s" aria-pressed="false">🎯 Spesifik</button></div>
    <div class="fbx" data-cmpout="prompts"></div>
  </div>`,

codep:() => `
  <div class="grid2">${[
    ['🏷','Dili veya platformu adlandırın','Python, HTML, Scratch, Roblox vb.'],
    ['👣','Beklenen davranışı adım adım açıklayın','Yalnızca nihai sonucu değil.'],
    ['💬','Kodun yorum satırlarıyla açıklanmasını isteyin','Böylece okunması ve derste açıklanması daha kolay olur.'],
    ['🔧','Tüm prompt’u yeniden yazmayın','Bir şey çalışmazsa, yapay zekadan spesifik hatayı düzeltmesini isteyin ve ne olduğunu söyleyin.'],
    ['🧪','Kodu test edin ve anlayın','Öğrencileri kodu sadece kopyalamaya değil, test etmeye ve anlamaya teşvik edin.']
  ].map(x => `<div class="card" style="padding:16px"><div class="wh" style="margin-bottom:6px"><span style="font-size:26px">${x[0]}</span><b>${x[1]}</b></div><p class="p" style="margin:0;font-size:14.5px">${x[2]}</p></div>`).join('')}</div>`,

imgp:() => `
  <div class="grid2">${[
    ['🖌','Konu, stil ve ortam','Ana konuyu, görsel stili (gerçekçi, çizgi film, piksel sanatı…) ve ortamı veya arka planı tanımlayın.'],
    ['🌈','Renkler, ışıklandırma veya ruh hali','Proje için önemli olduklarında bunlardan bahsedin.'],
    ['📏','Format konusunda spesifik olun','Dikey, yatay veya kare — projenin gerektirdiği şekilde.'],
    ['🔁','Her seferinde bir değişkeni ayarlayın','İlk sonuç beklediğiniz gibi değilse, yalnızca rengi veya yalnızca stili değiştirin, böylece sonucu neyin değiştirdiğini görebilirsiniz.']
  ].map(x => `<div class="card" style="padding:16px"><div class="wh" style="margin-bottom:6px"><span style="font-size:26px">${x[0]}</span><b>${x[1]}</b></div><p class="p" style="margin:0;font-size:14.5px">${x[2]}</p></div>`).join('')}</div>`,

mistp:() => `
  <div class="myths">${[
    ['🌫','Çok genel olmak.','“Daha güzel yap” ifadesi yapay zekaya çalışacak hiçbir şey vermez.'],
    ['📚','Tek seferde çok şey istemek.','Karmaşık bir projeyi birkaç küçük prompt’a bölün.'],
    ['🔍','Sonucu incelememek.','Yapay zeka hatalar yapar ve yanlış içerik üretebilir — kullanmadan önce her zaman inceleyin.'],
    ['🔂','Yineleme yapmamak.','İlk sonuç neredeyse hiçbir zaman nihai sonuç değildir. Ayarlamak ve tekrar sormak sürecin normal bir parçasıdır.'],
    ['🧭','Proje bağlamını unutmak.','Bağlamı olmayan bir prompt, öğrencinin inşa ettiği şeye uymayan genel sonuçlar üretir.']
  ].map(x => `<button class="myth" data-myth><span class="mtag">Hata</span><span class="mq">${x[0]} ${x[1]}</span><span class="ma">${x[2]}</span><span class="mh">Nedenini görmek için dokunun →</span></button>`).join('')}</div>
  ${callout('good', '🔁', 'Bunun bir eğitmen olarak zaten yaptıklarınızla ne kadar örtüştüğüne dikkat edin: her seferinde tek bir değişiklik, beklediğiniz davranışı tanımlayın, güvenmeden önce test edin ve sıfırdan başlamak yerine yineleme yapın. Prompt yazmak ayrı bir beceri değildir — farklı bir araca yönlendirilmiş aynı hata ayıklama alışkanlığıdır.')}`,

/* ---------------- Module 2 ---------------- */
bo:() => `
  <p class="p">Yeni modele sahip kurslarda <b>wiki kılavuzları ve sunumlar yoktur</b>. Her dersin kılavuzu Backoffice’te <b>dersin kendi içinde</b> yer alır: her etkinlik kartı kendi <b>Öğretmen Notlarını</b> taşır — kartın ne için olduğu, ne kadar sürdüğü, ne yapılacağı ve nelere dikkat edileceği. Bunları sadece siz görebilirsiniz.</p>
  ${callout('warn', '📒', '<b>Her dersten önce Öğretmen Notlarını okuyun</b> — ve güncellemeleri kontrol edin. Kurslar sürekli geliştirilmektedir, bu nedenle bir ders bir grupla diğeri arasında değişebilir. Her dersin ilk kartı en kapsamlı notlara ve genellikle kısa bir videoya sahiptir.')}
  <p class="p" style="margin-top:16px">Erişim yolu her kurs için aynıdır: bir kursun içeriğine Gruplar üzerinden değil, <b>Courses</b> (Kurslar) üzerinden ulaşırsınız.</p>
  <div class="grid3">
    <div class="ti"><span class="tie">📚</span><h3>Courses (Kurslar)</h3><p>Kurs kaydını açın: iş kolu, dil, ders ve modül sayısı.</p></div>
    <div class="ti"><span class="tie">🃏</span><h3>Assignments (Ödevler/Atamalar)</h3><p>Dersi seçtiğinizde etkinlik kartlarını görürsünüz. Bu kartlar ders içeriğinin <b>kendisidir</b>.</p></div>
    <div class="ti"><span class="tie">📒</span><h3>Öğretmen Notları</h3><p>Bir kart açın: turuncu kesikli kutu sizin notunuzdur. Hemen altında öğrencinin gördüğü şey yer alır.</p></div>
  </div>
  ${callout('tip', '🧭', 'Şimdi kendiniz görün. Simülasyon, yeni modeli takip eden kurslardan biriyle Backoffice’in birebir kopyasıdır: kursu açacak, ilk dersine gidecek, çalışma kılavuzunun neden boş olduğunu görecek ve ilk kartın Öğretmen Notlarını okuyacaksınız.')}
  ${launch('🗂️', 'Simülasyon 1 / 3', 'Backoffice simülasyonu', 'Backoffice’in tıklanabilir bir kopyası: kursu açın, dersin etkinliklerini bulun, neden wiki bağlantısı olmadığını görün ve içeriden bir Öğretmen Notu okuyun.', CONFIG.BO_SIM, '🗂️ BO simülasyonunu aç')}
  ${codeBox('boCode')}`,

classroom:() => `
  <p class="p">Dersi öğrendikten sonra, onu anlatma zamanı gelir. Classroom’da artık slayt sunmazsınız: Backoffice’te okuduğunuz <b>aynı etkinlik kartlarını</b> açar ve öğrencilerinizle birlikte bunların üzerinden geçersiniz. Bunu üç şey sağlar.</p>
  <h3 class="subh">👁️ 1. Follow Mode: öğrencileriniz siz nereye giderseniz oraya gelir</h3>
  <p class="p"><b>Follow Mode</b> ile öğrenciler otomatik olarak sizin açık tuttuğunuz kartı görürler. Bu <b>ekran paylaşımı değildir</b>: her öğrenci kartın gerçekten çalışabileceği kendi kopyasını alır — ve Öğretmen Notları yalnızca size görünür kalır. Bunu, açık bir kartın yanında görünen <b>Lead the group</b> anahtarıyla açarsınız. Deneyin:</p>
  <div class="card" id="fmDemo">
    <div class="fm-ctrl"><button class="lead-sw" id="fmSw"><i></i> Lead the group</button><button class="btn-g" id="fmNext">Next card →</button><span style="font-size:13px;color:var(--muted);font-weight:700" id="fmHint">Anahtarı açın, ardından sonraki karta geçin.</span></div>
    <div class="fm">
      <div class="screen"><div class="sc-h"><span>👩‍🏫 Ekranınız</span><span>Eğitmen</span></div><div class="sc-card" id="fmT"></div></div>
      <div class="screen"><div class="sc-h"><span>👧 Sofia’nın ekranı</span><span>Öğrenci</span></div><div class="sc-card" id="fmS"></div></div>
    </div>
    <div class="fm-out" id="fmOut"></div>
  </div>
  <div class="grid3" style="margin-top:14px">${[
    ['➡️','Kartı değiştirirsiniz','Sizi takip eden herkes için değişir.'],
    ['🖱️','Aşağı kaydırırsınız','Etkileşimli kartlarda, onların konumu sizinkine yetişir.'],
    ['🕐','Biri geç katılır','Doğrudan açık tuttuğunuz karta gelir.'],
    ['🚪','Uzaklaşırsınız','Öğrenciler bir “eğitmen uzaklaştı” bildirimi görür; geri döndüğünüzde takip devam eder.'],
    ['👥','Kim takip ediyor?','Her ismin yanındaki bir işaretçi kimin sizi takip ettiğini ve kimin yalnız çalıştığını gösterir.'],
    ['🔓','Kilitli değil','Bir öğrenci “Work independently” butonuna tıklayabilir ve “Return” ile geri dönebilir.']
  ].map(x => `<div class="card" style="padding:16px"><div class="wh" style="margin-bottom:6px"><span style="font-size:26px">${x[0]}</span><b>${x[1]}</b></div><p class="p" style="margin:0;font-size:14.5px">${x[2]}</p></div>`).join('')}</div>

  <h3 class="subh">🖥️ 2. Follow Mode mu yoksa ekran paylaşımı mı?</h3>
  <p class="p">Yine de bazen ekranınızı paylaşacaksınız — Scratch düzenleyicisi gibi bir araçtaki bir adımı <b>göstermek</b> veya bitmiş bir sonucu sergilemek için. Kural basittir:</p>
  <div class="okbad">
    <div class="ok"><h3>👁️ Kartlar için Follow Mode kullanın</h3><ul><li>Grubu ders boyunca ilerletmek için.</li><li>Her öğrenci kendi kopyasında çalışır.</li><li>Öğretmen Notlarınız gizli kalır.</li></ul></div>
    <div class="bad"><h3>🖥️ Gösterimler için ekranınızı paylaşın</h3><ul><li>Araçtaki bir adımı göstermek için (Scratch, Sparks…).</li><li>Yalnızca <b>aracın sekmesini veya penceresini</b> paylaşın.</li><li>Ders kartını asla paylaşmayın: notlarınız görünür olur.</li></ul></div>
  </div>

  <h3 class="subh">🧩 3. Etkileşimli Etkinlikler</h3>
  <p class="p">Birçok kart etkileşimlidir. Bazıları “Submit” butonuna basmanıza gerek kalmadan ilerlemenizi ve puanınızı kaydederken, bazıları basmanızı gerektirir.</p>
  <p class="p">Etkinliklerde — <b>Choice Questions (Çoktan Seçmeli Sorular)</b>, <b>Text and Formula Fields (Metin ve Formül Alanları)</b> ve <b>Drag-and-Drop (Sürükle-Bırak)</b> — işiniz bittiğinde puanınızın otomatik olarak kaydedildiğini göreceksiniz.</p>
  <div class="zoomtip"><span>🔍</span><div><b>İpucu:</b> Daha büyük bir pencerede açmak için aşağıdaki 3 videodan birine tıklayın. Buradan <b>yakınlaştırabilir</b> (+ / − butonları, fare tekerleği veya çift tıklama) ve her detayı görmek için sürükleyebilirsiniz.</div></div>
  <div class="vidpair">
    <figure class="card gifcard"><span class="gtag ok">✅ Otomatik kaydedildi</span>${zclip('images/result_good_EM.mp4', 'Otomatik kaydedildi')}<figcaption>Sonuç otomatik olarak sağ üst köşede görünür.</figcaption></figure>
    <figure class="card gifcard"><span class="gtag ko">🔁 Yanlış bir cevap</span>${zclip('images/result_bad_EM.mp4', 'Yanlış bir cevap')}<figcaption>Bir hata varsa, sağ üst köşedeki ‘Redo’ simgesine tıklayıp tekrar deneyebilirsiniz.</figcaption></figure>
  </div>
  <p class="p" style="margin-top:18px">Bu arada metin, bağlantı veya dosya göndermeyi içeren etkinliklerde öğrencilerinizin <b>“Send”</b> butonuna tıkladığından emin olun:</p>
  <figure class="card gifcard wide">${zclip('images/send_bottom.mp4', '“Send” butonu')}</figure>
  ${launch('🎥', 'Simülasyon 2 / 3', 'Classroom rehberi', 'Classroom’da yeni modelin gerçek bir dersinin rehberli turu: kartlar, yalnızca sizin görebildiğiniz Öğretmen Notları, ilk kartın tüm notları ve Lead the group.', CONFIG.CLASS_SIM, '🎥 Classroom rehberini aç')}
  ${codeBox('classCode')}`,

sparks:() => `
  <p class="p">Yapbozun son parçası öğrencilerin projelerinin yaşadığı yerdir: <b>Kodland Sparks</b>. Öğrencilerin projelerini <b>inşa ettikleri</b>, <b>yayınladıkları</b>, dersler arasında öğrenmeye devam ettikleri ve sınıf arkadaşlarından ve bir yapay zeka mentöründen geri bildirim aldıkları yeni platformdur. Aynı zamanda kurs boyunca oluşturdukları portfolyonun yer aldığı yerdir.</p>
  <div class="grid2">
    <div class="card"><div class="wh"><b>🔐 Öğrenciler nasıl giriş yapar?</b></div><p class="p" style="margin:0;font-size:15px">Öğrenciler <b>ana platformdan tek tıkla</b> giriş yaparlar (tekli oturum açma / SSO) — ayrıca kayıt olmazlar.</p></div>
    <div class="card"><div class="wh"><b>🔑 Siz nasıl giriş yaparsınız?</b></div><p class="p" style="margin:0;font-size:15px">Eğitmenler Backoffice’ten farklı <b>ayrı giriş bilgileri</b> kullanırlar. Bunlar <b>Operasyon veya Eğitim departmanı</b> tarafından verilir.</p></div>
  </div>
  ${callout('warn', '⏳', '<b>Henüz kendi başınıza deneyemezsiniz.</b> Giriş bilgilerinizi alana kadar Kodland Sparks’a giriş yapamayacaksınız. Bu yüzden aşağıda rehberli bir tur bulunmaktadır: size içeride ne olduğunu ve öğrencilerin orada ne yapabileceklerini gösterir.')}
  <h3 class="subh">🧭 Öğrenciler Sparks’ta ne yaparlar?</h3>
  <div class="grid3">${[
    ['📰','Akış (Feed)','Sınıf arkadaşlarının projelerini görür, tepki verir ve AI mentörünün geri bildirimlerini okurlar.'],
    ['📁','Projelerim (My projects)','Kaydettikleri veya yayınladıkları her şey tek bir yerdedir.'],
    ['🚀','Projeyi yayınla (Publish project)','Bitmiş bir projeyi paylaşırlar, kimlerin görebileceğini seçerler ve ödüller kazanabilirler.'],
    ['🎨','Stüdyo · Yaratıcı mod (Studio · Creative)','Sınıfta üretim yaptıkları yer: oyunlar ve web uygulamaları, Python, Scratch, piksel sanatı, animasyon, müzik, görünümler.'],
    ['🏆','Stüdyo · Görevler modu (Studio · Challenges)','Otomatik kontrollü yapılandırılmış görevler — ve ödül olarak kristaller.'],
    ['🤖','Yapay zeka yardımcısı & Yapay zeka eğitmeni','AI Buddy / AI mentörünün yaşadığı yer burasıdır: ipuçları, fikirler ve açıklamalar — yapay zeka önerir, yazar karar verir.']
  ].map(x => `<div class="ti" style="padding:18px"><span class="tie" style="font-size:46px">${x[0]}</span><h3>${x[1]}</h3><p>${x[2]}</p></div>`).join('')}</div>
  <h3 class="subh">💬 Sparks’ta Geri Bildirim</h3>
  <p class="p">Klasik beğeniler veya yorumlar yoktur. Bunun yerine öğrenciler <b>tepkiler</b> (emoji) bırakır, üç alanda <b>incelemeler</b> yazarlar — genel izlenim, güçlü yönler ve geliştirilecek noktalar — ve birbirlerini takip edebilirler. Oyunlaştırma <b>kristaller → sandıklar → ödüller</b> şeklinde işler. Bir eğitmenin incelemeleri vurgulanır, böylece öğrenciler resmi geri bildirimi tanırlar.</p>
  ${callout('tip', '🔗', '<b>Sparks’ta yayınlamak ve Kodland platformunda bağlantıyı göndermek iki farklı adımdır.</b> Birçok derste öğrenciler projelerini yayınlar ve ardından bağlantıyı bir karta yapıştırırlar — her ikisini de yapmalarını hatırlatın.')}
  ${callout('tip', '🧭', 'Şimdi turu atın. Kodland Sparks’ın bir kopyasıdır: Akış’ı ziyaret edecek, bir proje yayınlayacak, Stüdyo’yu açıp bir Python projesi, bir Scratch projesi ve bir çizim görecek, yapay zeka yardımcısı ve kristallerle bitireceksiniz.')}
  ${launch('⚡', 'Simülasyon 3 / 3', 'Kodland Sparks rehberi', 'Öğrencilerinizin kullandığı platformun rehberli turu: Akış, Projelerim, Projeyi yayınla, her proje türüyle Stüdyo, yapay zeka yardımcısı ve ödüller.', CONFIG.SPARKS_SIM, '⚡ Kodland Sparks rehberini aç')}
  ${codeBox('sparksCode')}`,

/* ---------------- Module 3 ---------------- */
structure:() => `
  <p class="p">Yeni modele sahip kurslarda ders artık büyük bloklar içeren bir sunum ve ne zaman “özetleyeceğinizi” veya “kapatacağınızı” söyleyen bir slayt değildir. Ders, platformdaki <b>etkinlik kartlarının</b> bir dizisidir ve her kart öğrenci için kendi içeriğini, sizin için kendi notlarını getirir. Bu büyük bir anlama gelir: <b>dersin ritmini siz yönetirsiniz — slayt değil.</b></p>
  <h3 class="subh">🏷️ Etiketler size ne tür bir an olduğunu söyler</h3>
  <p class="p">Birçok kart Öğretmen Notlarında <b>(CORE)</b> veya <b>(SUBMIT)</b> gibi bir etiket taşır. Bunlar size bir bakışta kartın ne tür bir öğretim anı olduğunu — ve öğrencinin özerkliğine ne kadar alan bırakacağınızı söyler. Her birine dokunun:</p>
  <div class="grid4">${[['CORE','🧱','Dersin temel yapım aşaması.'],['SELF-CHECK','🪞','Öğrenci kendi kavrayışını kontrol eder.'],['AI-CREATE','🤖','Yapay zekanın kullanıldığı tek an — net bir sınırla.'],['CHOICE/INTEREST','🎨','Kişisel bir seçim: kendi tarzları, kendi fikirleri.'],['SUBMIT','📤','Bir şey teslim edilmeli veya yayınlanmalıdır.'],['PEER-FEEDBACK','👥','Sınıf arkadaşları birbirlerinin çalışmaları hakkında yorum yapar.'],['REFLECT','💭','Ne öğrendikleri hakkında düşünme anı.'],['CHALLENGE','🏆','Ekstra, isteğe bağlı bir meydan okuma.'],['DEBUG','🐞','Bile bile bir hatayı bulun ve düzeltin.'],['SYSTEM-TEST','🧪','Tüm projeyi baştan sona test edin.']].map(t => `<button class="oq" data-oq><b>${t[1]} ${t[0]}</b><span>${t[2]}</span></button>`).join('')}</div>`,

seeing:() => `
  <p class="p">Size hatırlatacak bir slayt olmadığı için dersin yapısını korumak artık sizin elinizdedir. Kalite incelemeleri her derse bir bütün olarak bakar: <b>ısınınma</b>, <b>ders hedefi</b>, <b>uygulama</b>, sorduğunuz <b>sorular</b>, <b>özet</b>, <b>ödev</b> ve bir sonraki dersin <b>önizlemesi</b>.</p>
  <p class="p">Yeni modele sahip dersler genellikle canlı ve ilgi çekicidir. Zorluk, yol boyunca yapıyı kaybetmemektir — özellikle dersin başında ve sonunda:</p>
  <div class="okbad">
    <div class="ok"><h3>💚 Yapmaya devam edin</h3><ul><li>Birden fazla öğrenciyi sürece dahil etmek.</li><li>Öğrencilere isimleriyle hitap etmek.</li><li>Gerçek pratik süresi vermek.</li></ul></div>
    <div class="bad"><h3>💗 Güçlendirilecek noktalar</h3><ul><li>Isınma ve selamlama.</li><li>Ödev kontrolü.</li><li>Öğrencilere gerekçelerini açıklatan sorular.</li><li>Sondaki özet.</li><li>Bir sonraki ders için merak uyandırma (teaser).</li></ul></div>
  </div>
  <p class="p" style="margin-top:16px">Bunlar alışkanlıktır ve alışkanlıklar inşa edilebilir. Bu modülün geri kalanı size üç alışkanlık kazandırır: düzgün bir giriş, belirli öğrencilere yöneltilen akıl yürütme soruları ve sabit bir kapanış rutini.</p>`,

opening:() => `
  <p class="p">Düzgün bir giriş sadece birkaç dakika sürer ve ardından gelen her şeyi hazırlar: öğrenciler karşılandıklarını hisseder, projelerinin ne durumda olduğunu hatırlar, evde ne yaptıklarını gösterir ve bugünün dersinin neyi hedeflediğini bilirler. Dört bölümden oluşur. Kullanabileceğiniz gerçek cümleler ve gerçek bir dersin videosuyla her birinin üzerinden geçin:</p>
  ${stc('open')}
  ${callout('tip', '⏱️', 'Kısa tutun: dört bölüm toplamda <b>yaklaşık 5–7 dakika</b>. Bağ kurarak başlayan bir ders daha iyi işler — daha yavaş değil.')}`,

reasoning:() => `
  <p class="p">“Anlaşıldı mı?” sorusu neredeyse her zaman “evet” yanıtını alır — ve size hiçbir şey anlatmaz. İşe yarayan sorular, bir öğrenciye <b>gerekçesini açıklatan</b> sorulardır: bir şey neden oluyor, nereden biliyorlar, … değişseydi ne değişirdi. Ve en çok <b>belirli bir öğrenciye ismiyle hitap ettiğinizde</b> işe yararlar.</p>
  <div class="card">
    <div class="wh"><b>Kapalı mı yoksa akıl yürütme sorusu mu? Değiştirip karşılaştırın</b><span class="tag">Deneyin</span></div>
    <div class="seg" data-cmp="questions"><button data-k="v" aria-pressed="true">😐 Kapalı</button><button data-k="s" aria-pressed="false">🧠 Akıl yürütme</button></div>
    <div class="fbx" data-cmpout="questions"></div>
  </div>
  <h3 class="subh">🎯 Hangi sorular öğrencileri düşündürür? Her biri için karar verin</h3>
  <div class="sorter" id="sorter">${[
    ['🙋','“Leo, oyuncu dokunduğunda parayı nasıl kaybettirdin?”','yes','<b>Evet.</b> Bir isim artı bir “nasıl”: Leo mantığı kendi kelimeleriyle açıklamak zorundadır.'],
    ['🙂','“Herkes tamam mı? Devam edelim mi?”','no','<b>Hayır.</b> Gruba sorulan evet/hayır sorusu — cevap vermek için kimsenin düşünmesine gerek yoktur.'],
    ['🔍','“Ana, bu satırı kaldırırsak ne olacağını düşünüyorsun? Dene ve bize söyle.”','yes','<b>Evet.</b> Tahmin eder, test eder ve açıklar — tek bir soruda Öğrenme Döngüsü.'],
    ['✅','“Puanın nasıl çalıştığı anlaşıldı mı?”','no','<b>Hayır.</b> Anlaşılsa da anlaşılmasa da “evet” yanıtı alırsınız. Bunun yerine birinden bunu açıklamasını isteyin.']
  ].map(r => `<div class="srow" data-ans="${r[2]}"><span class="sei">${r[0]}</span><span class="stx">${r[1]}</span><span class="sbtns"><button data-pick="yes">🧠 Düşündürür</button><button data-pick="no">😐 Düşündürmez</button></span><span class="sfb">${r[3]}</span></div>`).join('')}</div>
  ${callout('good', '💡', 'Soruları yayın: farklı öğrenciler, farklı anlar — kontrol noktasında, üretim yaparlarken ve özette.')}`,

closing:() => `
  <p class="p">Dersin sonu genellikle kenara itilir — çünkü zaman tükenir veya etkinliği bitirmek kadar önemli görünmez. Ancak öğrencilerin öğrendiklerini kelimelere döktükleri, bir sonraki dersi merak ettikleri ve evde ne yapacaklarını bilerek ayrıldıkları an burasıdır. İyi bir zaman yönetimiyle bunu her derste gerçekleştirebilirsiniz: <b>son 5–7 dakikayı</b> <b>sabit bir kapanış rutinine</b> ayırın ve etkinlik bitmemiş olsa bile zamanında başlatın. Derslerinizin süresi ne olursa olsun aynı şekilde çalışır: birini seçin ve kaydırın:</p>
  <div class="tline" id="tline">
    <div class="seg" id="tlLen" style="margin-bottom:12px"><button data-len="60" aria-pressed="true">⏱️ 60 dakikalık ders</button><button data-len="90" aria-pressed="false">⏱️ 90 dakikalık ders</button></div>
    <div style="display:flex;align-items:center;gap:14px;flex-wrap:wrap"><span class="clock" id="tlClock">0′</span><input type="range" min="0" max="60" value="0" id="tlRange" style="flex:1;min-width:220px" aria-label="Minute of the lesson"></div>
    <div class="tl-bar"><div class="tl-open" id="tlOpen">Giriş</div><div class="tl-main" id="tlMain">Kartlar: üret, keşfet, düzelt, sun</div><div class="tl-close" id="tlClose">Kapanış</div><span class="tl-head" id="tlHead" style="left:0"></span></div>
    <div class="tl-scale" id="tlScale"></div>
    <div class="tl-out" id="tlOut"></div>
  </div>
  <p class="p" style="margin-top:18px">Rutinin üç adımı vardır. Üzerinden geçin — her biri gerçek bir dersin videosuyla:</p>
  ${stc('close')}
  ${callout('warn', '⏰', '<b>İşe yarayan bir ipucu:</b> Dersin <b>bitiminden 5–8 dakika öncesine</b> bir zamanlayıcı kurun. Çaldığında, nerede olursanız olun dersi kapatın. Bitmeyen bir kart bir sonraki derste veya ödevin bir parçası olarak devam edebilir.')}`,

metrics:() => `
  <div class="defn"><span class="de">📈</span><p><b>Slaytlar gitti — yapı gitmedi.</b> Ders yapısının <b>katılım</b>, <b>öğrenci elde tutma (retention)</b> ve <b>ödev teslimi</b> gibi önemli metriklerle yakından bağlantılı olduğunu unutmayın. Öğrencilere ödevi hatırlatmak, açıklamak ve incelemek, ısınma ve kapanış yapmak, ders hedeflerini açıklamak ve bir sonraki dersin önizlemesini yapmak öğrencinin derse bağlılığına, kalıcılığına ve katılımına katkıda bulunur.</p></div>
  <h3 class="subh">Üç metrik, üç somut alışkanlık</h3>
  <div class="trio">
    <div class="ti"><span class="tie">🗓</span><h3>Katılım / Yoklama</h3><p>Başlangıçta, ısınma sırasında, öğrenciler yerleşirken işaretleyin. Dersin sonuna, toparlandığınız ve unutma ihtimalinizin yüksek olduğu anlara bırakmayın.</p></div>
    <div class="ti"><span class="tie">📚</span><h3>Ödev</h3><p>Ödev artık “aynı projenin bir sonraki yinelemesi” olduğundan, bunu önceki dersin kontrol noktası içinde inceleyin. Bir öğrencinin ödevi yoksa bu sadece sıfır vermek için değil, teknik olarak takılıp takılmadığına bakmanız için bir sinyaldir.</p></div>
    <div class="ti"><span class="tie">💚</span><h3>Elde tutma (Retention)</h3><p>Sparks’ta paylaşım yapmayı veya çalışmalarını teslim etmeyi bırakan bir öğrenci, genellikle derse katılmayı bırakmadan önce kopuş yaşıyordur. Bu iki sinyal sizin en erken uyarınızdır.</p></div>
  </div>
  ${callout('warn', '⚠️', '<b>Unutmayın:</b> Öğrencilerin metin, bağlantı veya dosya gönderdiği etkinliklerde çalışmaları yalnızca <b>“Send”</b> butonuna tıkladıklarında kaydedilir. Harika geçen bir ders yine de sıfır sınıf çalışması tamamlaması olarak görünebilir. Bu hatırlatmayı kapanış rutininizin bir parçası yapın.')}`,

qcheck:() => `
  <p class="p">İşte bu modüldeki her şey tek bir kontrol listesi olarak. Bir alışkanlık haline gelene kadar ilk dersleriniz sırasında yanınızda bulundurun:</p>
  <div class="card"><div class="wh"><b>✅ Ders kalitesi kontrol listeniz</b><span class="tag">İşaretleyin</span></div>
    <div class="ckgroup">☑️ Dersten önce</div>
    <div class="cklist">${['Backoffice’te bu ders için öğretmen notlarını okudum.','Kapanışta merak uyandırabilmek (teaser) için <b>bir sonraki</b> dersi de okudum.','Başlangıçta göstereceğim bitmiş sonucu açtım (video, GIF veya çalışan proje).','Bu dersin izin verdiği tek yapay zeka adımını ve kapsam sınırını biliyorum.','Bir proje bozulursa yedek şablonun nerede olduğunu biliyorum.','Isınma sırasında yoklamayı almak için bir planım var.','Kapatmadan önce ihtiyaç duyan etkinliklerde öğrencilere <b>“Send”</b> butonuna tıklamalarını hatırlatacağım.'].map((t, i) => `<button class="ck" data-ck="b${i}"><span class="ckb"></span><span>${t}</span></button>`).join('')}</div>
    <div class="ckgroup">🎬 Giriş</div>
    <div class="cklist">${['Her öğrenciyi ismiyle selamlıyorum ve kısa bir ısınma yapıyorum.','Bugünün dersini bir önceki derse bağlıyorum.','Ödevi kontrol ediyorum ve iyi giden özel bir şeyi belirtiyorum.'].map((t, i) => `<button class="ck" data-ck="o${i}"><span class="ckb"></span><span>${t}</span></button>`).join('')}</div>
    <div class="ckgroup">🧠 Ders sırasında</div>
    <div class="cklist">${['Belirli öğrencilere, isimleriyle hitap ederek akıl yürütme soruları soruyorum.','Birden fazla öğrenciyi dahil etmeye devam ediyor ve gerçek pratik zamanı veriyorum.','Kapanışın zamanında başlaması için saate göz kulak oluyorum.'].map((t, i) => `<button class="ck" data-ck="d${i}"><span class="ckb"></span><span>${t}</span></button>`).join('')}</div>
    <div class="ckgroup">🏁 Kapanış — son 5–7 dakika</div>
    <div class="cklist">${['Özeti öğrenciler yapıyor: ne öğrendiklerini söylüyorlar.','Bir sonraki ders için motive edici bir teaser veriyorum.','Bir sonraki ödevi ve nasıl teslim edileceğini açıklıyorum.'].map((t, i) => `<button class="ck" data-ck="c${i}"><span class="ckb"></span><span>${t}</span></button>`).join('')}</div>
  </div>`
};