/* ============================================================
   EM lesson guide (Classroom) · Math Level 5 version
   The guide texts are in ENGLISH; the lesson cards are in TURKISH (as taught).
   Translate only the text inside quotes / backticks. Keep HTML tags, ${...} placeholders, keys, ids, file names and URLs unchanged.
   ============================================================ */
window.CONTENT = { lang: 'en' };

/* =========================================================
   INTERFACE STRINGS (page title, replicated Classroom, guide card)
   ========================================================= */
CONTENT.ui = {
  title: 'EM Lesson Guide · Math',

  // Classroom header
  headerTitle: 'Math · Level 5 · Lesson',
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
  student: 'Elif',                  // the student's name (also used in the guide texts below)
  tutorInitial: 'T',                // letter in the tutor's avatar
  tutorYou: 'Tutor (you)',
  following: 'Following the teacher',

  // Lesson platform header shown inside Assignments
  platformLang: 'TR ˅',
  platformUser: 'Tutor',

  // Shared pieces of the lesson cards
  teacherNotes: 'Teacher notes',
  submit: '✔ Gönder',
  choose: 'Seç…',

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
  lead: 'This guide shows you what a lesson of the <b>new educational model (EM)</b> looks like in Classroom. It uses the first cards of a real EM lesson — <b>Math · Level 5, Lesson 1: Geometrik çizimin temelleri</b> — and a student, Elif, who is already in the classroom.',
  seeTitle: 'What you’ll see',
  see: [
    'How an <b>EM lesson</b> is organised: a series of cards, with all the guidance inside the lesson.',
    'What the <b>tutor sees</b> and what <b>Elif sees</b>: the <b>Teacher notes</b> live inside each card, and only the tutor can see them.',
    'The <b>first Teacher notes</b>, the most detailed of the lesson: goals, your role, the time plan, an answer key for every card and, in the first lesson of a module, an explanatory video.',
    'How to <b>Lead the group</b>, so that the students follow the card you open.'
  ],
  howTitle: 'How to use it',
  howText: 'This is a guide, not a practice simulation: there are no decisions to make and nothing to lose. Just follow the highlighted steps and click where the guide tells you to. You can replay it as many times as you want.',
  start: 'START THE GUIDE →'
};

/* =========================================================
   LESSON CONTENT (Math · Level 5 — Module 1, Lesson 1, in Turkish)
   Each card: title (shown in the Assignments list and above the card) + html,
   built with the page's helpers: tnotes = Teacher notes box, spoiler = collapsible
   section, media = picture + text, box = text block without picture, test = quiz,
   testImg = quiz with pictures, group = matching pairs, essay = answer box,
   embed = interactive activity (Wordwall / web app). P.xxx are image paths and links.
   ========================================================= */
CONTENT.activities = ({ P, tnotes, spoiler, media, banner, ul, ol, test, group, essay, testImg, embed, box }) => [
  { title:`Öğretmen Rehber Kartı`, html:
    tnotes(`
      <p><strong>Amaç:</strong> Modül 1’i öğrenciye tanıtmak, sürecin yapısını netleştirmek ve motivasyon oluşturmak.</p>
      <p><strong>Tutor’un yapması gerekenler:</strong> Modülün Sofi ve Rafi ile başlayan</p>
      <h1>Derse Hazırlık: Mimari Çizimin Temelleri</h1>
      <p>Bu, mimarlık ofisi hikâyesinin 1. dersidir. Sofya ve Rafi, İstanbul’daki bir parkın planını tamamlamak için nokta, doğru parçası, ışın, doğru ve çemberi (merkez, yarıçap, çap, kiriş) öğrenir. Bu araçlar, sonraki derste (açı, dikme, paralel doğrular) kullanılacak temeldir.</p>
      ${spoiler(`Dersin sürükleyici hikâyesi`, `<p>Rafi’nin amcası bir mimarlık bürosunda çalışır ve bugün açık kapı günüdür. Öğrenci, büroya “stajyer mimar” olarak katılır. Park planında çeşme, köprü ve kavşak eksiktir — bunları doğru çizebilmek için önce “tasarımcı setindeki” temel araçları (nokta, doğru parçası, ışın, doğru, çember) tanımak gerekir.</p>`)}
      ${spoiler(`Dersin ana hedefi`, `<p>Öğrenci, nokta, doğru parçası, ışın ve doğruyu birbirinden ayırt etmeyi, bunların sembolle gösterimini okumayı, ve çemberin merkez/yarıçap/çap/kiriş bölümlerini tanımayı öğrenir.</p>`)}
      ${spoiler(`Anahtar sonuç`, ol([`Nokta, doğru parçası, ışın ve doğruyu tanımlarına göre birbirinden ayırt eder.`, `Doğru gösterimlerini okur ve yazar: nokta (A), [AB], [AB) / [BA), AB.`, `Çemberde merkez, yarıçap, çap ve kirişi tanır ve birbirinden ayırt eder.`, `Uygun aracı (çizgeç, cetvel, pergel) seçip nokta/doğru parçası/çember çizer.`]))}
      <div class="tn-video"><iframe src="${P.video}" allow="autoplay; fullscreen" allowfullscreen loading="lazy" title="Ders videosu"></iframe></div>
      <p><strong>Öğretmenin rolü:</strong> Her yeni kavramı vermeden önce günlük hayattan bir örnekle (iğne batığı, tren rayları, rogar kapağı gibi) sezgisel bir soru sorun, tanımı hemen söylemeyin. Park hikâyesini sık sık hatırlatın — bugün öğrenilen her araç, planı tamamlamak için kullanılacak. İnteraktif kartlarda (nokta işaretleme, cetvelle ölçüm, geometri atölyesi) öğrencinin işlemi kendi başına tamamlamasını bekleyin.</p>
      ${spoiler(`Ders süresi dağılımı (80 dk)`, `<table>
        <tr><th>Aşama adı</th><th>İçerik</th><th>Süre</th></tr>
        <tr><td>Giriş bölümü</td><td>Karşılama ; Sofya/Rafi ile tanışma ; Wordwall buzkıran ; kurallar ; classroom talimatı ; hikâyeye giriş</td><td>15 dk</td></tr>
        <tr><td>Ana bölüm 1 — Nokta ve doğru parçası</td><td>Nokta tanımı ve görevleri ; parkta noktaları işaretleme (interaktif) ; doğru parçası tanımı ; interaktif cetvelle doğru parçası çizme</td><td>18 dk</td></tr>
        <tr><td>Ana bölüm 2 — Işın, doğru ve pekiştirme</td><td>Işın/doğru teorisi ve 5 soruluk test ; geometri atölyesi (tüm şekilleri içeren çizim) ; Wordwall pekiştirme</td><td>17 dk</td></tr>
        <tr><td>Ana bölüm 3 — Ölçüm ve çember</td><td>Cetvelle doğru parçası ölçme ; mola (3 dk) ; merkez/yarıçap/çap/kiriş tanımı ; renkli lejant görevi ; doğru ifadeler testi</td><td>18 dk</td></tr>
        <tr><td>Kapanış bölümü</td><td>Bireysel çalışma ; sonuç tartışması ; (vakit kalırsa ek görev) ; özet sorular ; yansıma ; ev ödevi hatırlatması ; sıradaki derse bakış</td><td>12 dk</td></tr>
      </table><p><em>Toplam: 80 dk.</em></p>`)}
      ${spoiler(`Metodolojik odak`, `<p>Her kavram önce günlük hayattan bir örnekle sorulur (sezgi), ardından resmi tanım ve sembol gösterimi gelir, son olarak interaktif araçla (cetvel, nokta işaretleme, geometri atölyesi) pratik yapılır. Bu sırayı bozmayın; tanımı örnekten önce vermeyin.</p>`)}
      ${spoiler(`Nelere dikkat edilmeli`, ol([`Nokta, “küçük bir daire” değildir — boyutu olmayan ideal bir işarettir.`, `Işın gösteriminde harf sırası önemlidir: [AB ile [BA farklı ışınlardır.`, `Çap her zaman merkezden geçer; merkezden geçmeyen kiriş çap değildir.`, `Kart 8, 10, 17’deki interaktif görevlerin tam cevabı dış araca bağlıdır — dersten önce interaktifi kendiniz deneyin.`, `Kart 21’deki görsel geometriyle ilgisiz bir örnek olabilir — dersten önce kart içeriğini kontrol edin.`]))}
      ${spoiler(`Kartlara göre hızlı cevap anahtarı (tüm ders tek bakışta)`, `
        <h4>1. Karşılama slaydı</h4><p><strong>Görev:</strong> İsim, yaş, selamlaşma sohbeti. <strong>Cevap:</strong> Yok, ısınma turu.</p>
        <h4>2. Sofya ve Rafi ile tanışma</h4><p><strong>Görev:</strong> Karakterlerin ilgi alanlarının tanıtımı. <strong>Cevap:</strong> Yok.</p>
        <h4>3. Wordwall buzkıran</h4><p><strong>Görev:</strong> Tanışma oyunu. <strong>Cevap:</strong> Yok, katılım önemli.</p>
        <h4>4. Kurallar (bayrak oylaması)</h4><p><strong>Görev:</strong> Kırmızı/yeşil bayrakla ders kurallarına oy verme. <strong>Cevap:</strong> Yok.</p>
        <h4>5. Classroom talimatı</h4><p><strong>Görev:</strong> Sohbete renk yazma; kamera aç/kapa + duygu göster; mikrofon aç/kapa + “Hazırım!” de. <strong>Cevap:</strong> Yok, teknik kontrol amaçlı.</p>
        <h4>6. Hikâyeye giriş</h4><p><strong>Görev:</strong> Rafi’nin amcasının bürosu, eksik park planı (çeşme, köprü, kavşak yok) tanıtılır. <strong>Cevap:</strong> Yok, narratif.</p>
        <h4>7. Nokta</h4><p><strong>Görev:</strong> Metin girişi (gerçek hayatta nokta örnekleri), evet/hayır sorular, resim seçimi.</p>
        <p><strong>Hazır örnekler (sınıf sessiz kalırsa):</strong> iğne batığı, camdaki damla, uzaktaki yıldız, ekran pikseli, çivi deliği, sivrisinek ısırığı izi.</p>
        <p><strong>Evet/Hayır cevapları:</strong> Uzunluğu var mı? Hayır. Genişliği var mı? Hayır. Kalınlığı var mı? Hayır.</p>
        <p><strong>Resim seçimi doğru cevap:</strong> Noktanın kendisi (mümkün olan en küçük işaret) — içi dolu daire, çubuk ve çarpı işaretinin hepsinin ölçülebilir bir boyutu (alan/uzunluk) vardır, bu yüzden yanlıştır.</p>
        <h4>8. Parktaki noktaları işaretle (interaktif)</h4><p><strong>Görev:</strong> Giriş(A), çeşme(B), bank(C), ağaç(D) noktayla işaretlenir.</p>
        <p><strong>Cevap:</strong> Tam konum kullanılan interaktif araca bağlıdır, metinde sabit değildir — öğrencilerin ekran görüntüsüne göre kontrol edin. Kriter: nokta nesnenin tam üzerinde, büyük harfle etiketli olmalı.</p>
        <h4>9. Doğru parçası (teori — soru yok)</h4><p><strong>İçerik:</strong> Doğru parçası, bir doğrunun iki ucu olan bölümüdür. Gösterim: [AB] veya [BA], okunuşu “AB doğru parçası”.</p>
        <h4>10. Doğru parçaları çiz (interaktif cetvel)</h4><p><strong>Görev:</strong> Verilen noktalardan mümkün olduğunca çok doğru parçası çizilir.</p>
        <p><strong>Cevap:</strong> Sayı, interaktifteki nokta sayısına bağlıdır — n nokta için maksimum n·(n−1)/2 doğru parçası (her nokta çiftine bir tane). Dersten önce interaktifteki gerçek nokta sayısını kontrol edin.</p>
        <h4>11. Işın ve doğru + test (5 soru)</h4>
        <p><strong>1. Işın doğrudan nasıl farklıdır?</strong> B) Işının bir başlangıcı vardır, doğrunun ise ne başlangıcı ne de sonu vardır.</p>
        <p><strong>2. [AB gösterimi nasıl okunur?</strong> B) A noktasından başlayıp B noktasından geçen ışın.</p>
        <p><strong>3. [AB ve [BA ışınları nedir?</strong> B) Farklı yönlere yönlendirilmiş iki farklı ışın.</p>
        <p><strong>4. Sonsuza uzatılan AB doğrusunun kaç ucu vardır?</strong> C) Hiçbiri.</p>
        <p><strong>5. Işın modeline en uygun örnek?</strong> B) Karanlığa doğru tutulan bir fener ışığı.</p>
        <h4>12. Geometri atölyesi (interaktif inşa)</h4><p><strong>Görev:</strong> Tek bir çizimde 5 unsur: 2 noktayı birleştiren doğru parçası; 3 ışın çıkan bir nokta; 6 doğru parçalı kapalı şekil; kesişen 2 doğru + kesişim noktası; 2 nokta + aralarından geçen doğru + bir ışın.</p>
        <p><strong>Cevap:</strong> Tek doğru versiyon yok — kriter: 5 unsurun tamamı aynı çizimde, hiçbir şey silinmeden bulunmalı.</p>
        <h4>13. Wordwall pekiştirme</h4><p><strong>Görev:</strong> Başparmak yukarı/aşağı oyunu. <strong>Cevap:</strong> Oyun içi.</p>
        <h4>14. Doğru parçalarını ölç (sanal cetvel)</h4><p><strong>Görev:</strong> A, B, C, D, N noktalı çizimde 5 doğru parçası ölçülür.</p>
        <table><tr><th>Doğru parçası</th><th>Uzunluk</th></tr><tr><td>|BC|</td><td>6 cm</td></tr><tr><td>|BD|</td><td>3 cm</td></tr><tr><td>|NC|</td><td>8 cm</td></tr><tr><td>|DA|</td><td>10 cm</td></tr><tr><td>|BA|</td><td>5 cm</td></tr></table>
        <p><strong>Dikkat:</strong> Bu değerler kartın orijinal görselindeki eşleştirme çizgilerinden hesaplanmıştır — kendi tasarımınızla karşılaştırıp doğrulayın.</p>
        <h4>15. Mola (3 dakika)</h4><p>Ek not gerekmiyor.</p>
        <h4>16. Merkez, yarıçap, çap (teori — soru yok)</h4><p><strong>İçerik:</strong> Çember = sınır çizgisi; daire = çemberle birlikte içindeki alan. Yarıçap (R,r) = merkezden çember üzerindeki bir noktaya olan doğru parçası. Çap (D,d) = çember üzerindeki 2 noktayı birleştiren, merkezden geçen doğru parçası; d=2r. Kiriş = merkezden geçmesi zorunlu olmayan, çember üzerindeki 2 noktayı birleştiren doğru parçası.</p>
        <p><strong>Rogar kapağı sorusu (opsiyonel açıklama):</strong> Mühendisler neden yuvarlak seçer? Çünkü yuvarlak kapağın tüm çapları eşittir, hiçbir açıdan kendi deliğine düşmez; kare kapağın köşegeni kenarından uzun olduğu için diyagonal düşebilir.</p>
        <h4>17. Yarıçap/çap/kiriş — renk lejantlı görev (interaktif)</h4><p><strong>Görev:</strong> 🟠 turuncu=yarıçap, 🟢 yeşil=çap, ⚪ gri=kiriş lejantına göre görseldeki doğru parçaları adlandırılır.</p>
        <p><strong>Cevap:</strong> Hangi doğru parçalarının ne olduğu interaktif araçta belirlenir, metinde sabit değildir — dersten önce interaktifi kontrol edin.</p>
        <h4>18. Çemberle ilgili doğru ifadeler (çoklu seçim, 12 ifade)</h4>
        <p><strong>Doğru olanlar:</strong> 1) Tüm yarıçaplar eşittir. 2) Çap = 2×yarıçap. 4) Çap merkezden geçer. 7) Yarıçap merkezi çember üzerindeki noktayla birleştirir. 9) Çap iki yarıçaptan oluşur. 10) Merkezden birden fazla çap çizilebilir. 11) Yarıçap = çapın yarısı.</p>
        <p><strong>Yanlış olanlar:</strong> 3) Her iki noktayı birleştiren doğru parçası çap değildir (kiriş olabilir). 5) Bir çemberde farklı uzunlukta yarıçap olamaz. 6) Sonsuz sayıda yarıçap çizilebilir. 8) Farklı çemberlerin çapları farklı olabilir. 12) Çap her zaman yarıçaptan uzundur.</p>
        <h4>19. Bireysel çalışma</h4><p><strong>Dikkat:</strong> İçeriği bu ТЗ’de finalize edilmemiş olabilir — dersten önce BO’daki güncel kart içeriğini kontrol edin.</p>
        <h4>20. Bireysel çalışma sonuçlarını tartışma</h4><p><strong>Görev:</strong> En zor gelen konu ve sorular sorulur. <strong>Cevap:</strong> Yok, sözlü paylaşım.</p>
        <h4>21. Ek görevler (vakit kalırsa)</h4><p><strong>Dikkat:</strong> Kart içeriği geometriyle ilgisiz bir örnek olabilir — dersten önce hangi ek görevlerin (nokta/doğru parçası/ışın/doğru/çember konularıyla ilgili) burada yer alması gerektiğini teyit edin.</p>
        <h4>22. Özet sorular (3 soru)</h4>
        <p><strong>1) Işın doğrudan, doğru da doğru parçasından nasıl farklıdır?</strong> Işın: başlangıcı var, sonu yok. Doğru: ne başlangıcı ne sonu var. Doğru parçası: her ikisi de var.</p>
        <p><strong>2) [MN) ve [NM) neden farklı ama MN doğrusu ile NM aynı?</strong> Işında yön ve başlangıç önemlidir (ilk harf başlangıç); doğru sonsuzdur ve “başlangıcı” yoktur.</p>
        <p><strong>3) Merkezden çember üzerindeki bir noktaya çizilen doğru parçasına ne denir?</strong> Yarıçap.</p>
        <h4>23. Yansıma</h4><p><strong>Görev:</strong> Dersten sonra nasıl hissettiği sorulur. <strong>Cevap:</strong> Yok.</p>
        <h4>24. Ev ödevi hatırlatma</h4><p><strong>İçerik:</strong> Ödevin kendisi ayrı bir dosyada/kartta yer alır.</p>
        <h4>25. Sıradaki ders anonsu</h4><p><strong>İçerik:</strong> Sonraki derste açı, dikme ve paralel doğrular işlenecek. <strong>Cevap:</strong> Yok.</p>`)}
      <p><strong>Dersin kapanışı:</strong> Üç özet soruyla (ışın/doğru/doğru parçası farkı, yön neden önemli, radius tanımı) günü toparlayın, ardından kısa bir duygu değerlendirmesi yapın ve ev ödevini hatırlatın.</p>
      <p><strong>Sıradaki ders:</strong> Açı, dikme ve paralel doğrular işlenecek.</p>
      <h3>Sıradaki adım olarak, dersin her göreminde yer alan öğretmen notlarını incelemeniz gerekmektedir.</h3>`, 'tn-first') +
    banner(P.moduleBanner) +
    `<h1>Modül 1’e Hoş Geldin! 🏛️</h1>
     <blockquote><p>Sofi ve Rafi’nin amcasının mimarlık bürosuna tekrar hoş geldin! Bu modülde gerçek bir mimar gibi çalışmaya başlayacak, Kadıköy’deki yeni parkın haritasını adım adım tamamlayacaksın.</p></blockquote>
     <h3>Bu Modülde Seni Neler Bekliyor? 🧭</h3>
     <p>4 ders boyunca şunları öğreneceksin:</p>` +
    ol([`<strong>1. Ders — Geometrik çizimin temelleri.</strong> Nokta, doğru parçası, ışın ve doğru nedir, birbirlerinden nasıl ayrılır — bunları keşfedeceksin.`, `<strong>2. Ders — Nokta, doğru parçası ve doğruların özellikleri.</strong> Çemberi, paralel ve dik doğruları tanıyacak, aralarındaki farkları öğreneceksin.`, `<strong>3. Ders — Her dereceye kadar hassas ölçüm: açı ölçme.</strong> Açı türlerini tanıyacak ve bir açıölçer ile açı ölçmeyi öğreneceksin.`, `<strong>4. Ders — Modül tekrarı.</strong> Öğrendiğin her şeyi bir araya getirip mimar sertifikanı alacaksın!`]) +
    `<p>Hazır mısın? O zaman Tasarımcı Setini kuşan ve başlayalım! 🎨</p>`
  },
  { title:`Derse hoş geldiniz!`, html:
    banner(P.welcomeBanner) +
    `<h1>Derse hoş geldin! 👋</h1>
     <h4>Bugün bizi heyecan verici geometri maceraları bekliyor, ama önce tanışalım!</h4>` +
    media(P.welcomeImg, `<h3>🎯 Görevin:</h3>` + ol([`Mikrofonunu ve kameranı aç.`, `Adını ve kaç yaşında olduğunu söyle.`, `Mikrofonunu tekrar kapat.`])) +
    `<h3>✅ Kendi Kendini Kontrol Et:</h3>` +
    ul([`Eğitmenimi görüyorum;`, `Eğitmenimi duyuyorum;`, `Mikrofonum açılıp kapanıyor;`, `Kameram açık.`]) +
    spoiler(`Mikrofon veya kamera açma düğmesini bulamıyor musun?`, ol([`Ders penceresinin alt paneline bak.`, `Mikrofon simgesini 🎙️ ve kamera simgesini 🎥 bul.`, `Cihazı açmak veya kapatmak için ilgili simgeye tıkla.`])) +
    spoiler(`Eğitmenimi duyamıyorum. Ne yapmalıyım?`, ol([`Bilgisayarının ses seviyesini kontrol et.`, `Ayarlardan doğru hoparlörün seçildiğinden emin ol.`, `Eğitmenin sorunu fark etmesi için el kaldır ✋.`])) +
    spoiler(`Mikrofon açılmıyor mu?`, ol([`Mikrofon erişimine izin verilip verilmediğini kontrol et.`, `Mikrofon simgesinin yanındaki oka tıkla ve doğru cihazı seç.`, `El kaldır ✋ ve eğitmenin yardımcı olmasını bekle.`])) +
    spoiler(`Kamera açılmıyor mu?`, ol([`Kamera erişimine izin verilip verilmediğini kontrol et.`, `Kamerayı kullanıyor olabilecek diğer programları kapat.`, `Kamera yine de çalışmıyorsa derse sesli olarak katılmaya devam et.`])) +
    tnotes(`<p><strong>Kartın Amacı:</strong> Derse dostça bir başlangıç yapmak ve gözlemlenebilir eylemler aracılığıyla teknik hazırlığı kontrol etmek.</p><p><strong>Eğitmenin Yapması Gerekenler:</strong> Mikrofonu ve kamerayı ilk açan siz olun, selam verin ve işlem sırasını anlatın. Ardından her öğrencinin selamlamasını dinleyin.</p><p><strong>Dikkat Edilmesi Gerekenler:</strong> Ciddi teknik sorunları çözmek için teknik desteğe başvurun.</p>`)
  },
  { title:`Yakından tanıyalım!`, html:
    `<h1>Yakından tanıyalım! 🤝</h1>
     <h3>Hadi birbirimizi daha yakından tanıyalım!</h3>
     <p>Bunlar Rafi ve Sofi. Ders boyunca bize eşlik edecek, görevleri yapmamıza ve geometri dünyasını keşfetmemize yardımcı olacaklar. Zamanla onlar hakkında biraz daha fazla şey öğreneceğiz.</p>
     <img class="center-img" src="${P.friends}" alt="">
     <p>Şimdi sen de bize kendinden biraz bahset — çark üzerine tıkla ve sana çıkan soruyu cevapla!</p>` +
    embed(P.wordwall, 460)
  },
  { title:`Ders kuralları`, html:
    banner(P.rulesBanner) +
    `<h1>Derste Nasıl Çalışıyoruz 🤝</h1>
     <blockquote><p>Önce derste rahatça çalışmamıza ne tür davranışların yardımcı olduğunu belirleyelim. Ardından sohbeti (chat), kamerayı ve mikrofonu kontrol edeceğiz.</p></blockquote>
     <h2>Kırmızı Bayrak mı, Yeşil Bayrak mı? 🚩</h2>
     <p>Bizim dersimiz için hangi davranışın uygun olduğunu belirle.</p>` +
    [`Kameran kapalı ve öğretmen seni görmüyor.`, `El kaldırmadan cevabı bağırarak söylüyorsun.`, `Derse zamanında geliyorsun.`, `Konuşmadığın zaman mikrofonunu kapatıyorsun.`, `Yanında önemli notları yazabileceğin hiçbir şey yok.`, `Ödevini yapıp öğretmenine gönderiyorsun.`].map(q => test(q, [`Kırmızı Bayrak`, `Yeşil Bayrak`])).join('') +
    `<blockquote><p>Harika! Artık anlaşmalarımızı biliyoruz. Şimdi Classroom araçlarının çalışmaya hazır olup olmadığını kontrol edelim.</p></blockquote>
     <h2>Classroom’un Nasıl Çalıştığını Kontrol Et 🧰</h2>
     <p>Görevleri sırayla aç ve grupla birlikte tamamla.</p>` +
    spoiler(`Görev 1: Sohbet bölümüne en sevdiğin rengi yaz 💬`, `<h3>🎯 Görevin</h3>` + ol([`Sohbet alanını bul.`, `En sevdiğin rengin ne olduğunu yaz.`, `Mesajı gönder.`])) +
    spoiler(`Görev 2: Kameranı kapat ve aç 📷`, `<h3>🎯 Görevin:</h3>` + ol([`Kameranı kapat.`, `Tekrar aç.`, `Herhangi bir duyguyu göster.`]) + `<p>Neşe, şaşkınlık veya düşünceli olma ifadesi gösterebilirsin: 🙂 😄 😮 🤔</p>`) +
    spoiler(`Görev 3: Mikrofonunu kapat ve aç 🎙️`, `<h3>🎯 Görevin:</h3>` + ol([`Mikrofonunu kapat.`, `Tekrar aç.`, `“Ben hazırım!” de.`, `Cevap verdikten sonra mikrofonu tekrar kapat.`])) +
    `<h3>✅ Kendi Kendini Kontrol Et:</h3>` +
    ul([`Grubumuzun kurallarını biliyorum;`, `Sohbete bir mesaj gönderdim;`, `Kamerayı açıp kapatmayı biliyorum;`, `Mikrofonu açıp kapatmayı biliyorum;`, `“Hazırım!” dedim.`]) +
    `<img class="center-img" src="${P.teamReady}" alt="Süper! Takım derse hazır! 🚀">` +
    tnotes(`<p><strong>Kartın Amacı:</strong> Öğrencileri grup kurallarıyla tanıştırmak ve temel Classroom araçlarını kullanabildiklerinden emin olmak.</p><p><strong>Eğitmenin Yapması Gerekenler:</strong> Önce kırmızı ve yeşil bayraklı altı durumu sırayla ele alın. Ardından spoyleri/gizli bölümleri teker teker açın ve teknik adımları öğrencilerle birlikte uygulayın.</p><p><strong>Dikkat Edilmesi Gerekenler:</strong> Öğrenciler seçim yapmadan önce doğru bayrağı söylemeyin (ipucu vermeyin). Tüm spoyleri aynı anda açmayın. Bir sonraki göreve geçmeden önce tüm grubun mevcut görevi tamamladığından emin olun.</p><p><strong>Teknik Sorunlar:</strong> Sohbet, kamera veya mikrofon çalışmıyorsa öğrencinin ayarları kontrol etmesine yardımcı olun. Ciddi sorunlar için teknik desteğe başvurun.</p>`)
  },
  { title:`Mimarlık bürosu`, html:
    banner(P.officeBanner) +
    `<h1>Mimarlık Bürosuna Hoş Geldiniz! 🏛️</h1>
     <blockquote><p>Sofi ve Rafi’nin amcası bir mimarlık bürosunda çalışıyor! Bugün orada açık kapı günü — bu ilginç mesleği deneyimlemek için harika bir zaman!</p></blockquote>
     <h3>Parkın haritasına bak 🔍</h3>
     <p>Mimarlar yeni bir parkın haritasını çizmeye başladılar, ancak haritadaki bazı önemli yapılar henüz tamamlanmadı.</p>` +
    box(`<h3>Sofi’nin bir fikri var! 💡</h3><p>Hadi mimar rolüne bürünelim ve haritayı tamamlayalım!</p>`) +
    `<h3>Bir mimara ne lazım olur?</h3>` +
    test(`Sence haritanın tamamını restore etmek (tamamlamak) için ne gereklidir?`, [`Sadece cetvel`, `Sadece pergel`, `Sadece gönye`, `Birkaç farklı araç`]) +
    box(`<h3>🎯 Görevin:</h3><p>Bugün parkın haritasını restore etmeye yardımcı olacaksın:</p>` + ul([`Geometrik şekilleri tanıyacaksın;`, `Uygun araçları seçeceksin;`, `Gerekli çizimleri yapacaksın;`, `Seçimini açıklayacaksın.`])) +
    `<blockquote><p>Göreve başlamadan önce Tasarımcı Setini aç.</p></blockquote>` +
    spoiler(`Tasarımcı Setini Aç 🧰`, `<h3>Seti Kontrol Et</h3><p>Her aracı uygun işlemle eşleştir.</p>` +
      group([[`📏 Cetvel`, `Doğru çizmek (Düz çizgi çizmek)`], [`🧭 Pergel`, `Çember çizmek`], [`📐 Gönye`, `Dikme çizmek (Dik açı / Dik doğru oluşturmak)`]]) +
      `<h3>Set hazır! ✅</h3><p>Buluşma noktası, köprü, yol ve kavşakla başlayalım. Bunun için nokta, doğru parçası, ışın ve doğru arasındaki farkı anlamamız gerekiyor.</p>`) +
    tnotes(`<p><strong>Kartın Amacı:</strong> Öğrencileri mimarlık görevi hikayesine dahil etmek, dersin pratik hedefini göstermek ve geometrik çizim araçları hakkındaki bilgileri güncellemek.</p><p><strong>Eğitmenin Yapması Gerekenler:</strong> Sofi ve Rafi’nin görselini gösterin, giriş hikayesini okuyun ve öğrencilerden haritayı incelemelerini isteyin. Fiskiye, köprü ve kavşak için tamamlanmamış yerlere dikkat çekin.</p><p>Ardından öğrencilerin gerekli araçlarla ilgili soruyu kendilerinin cevaplamasını sağlayın. Seçim tamamlanana kadar ipucu vermeyin.</p><p>Cevap kontrol edildikten sonra göreve dikkat çekin ve öğrencilere “Tasarımcı Seti” spoylerini açmalarını söyleyin. Araçları ve işlemleri eşleştirmeleri için zaman tanıyın.</p><p><strong>Dikkat Edilmesi Gerekenler:</strong> Cetvel düz çizgiler için, pergel çemberler için, gönye ise dikmeler çizmek için kullanılır. Bu kartta araçların işlevlerini hatırlamak yeterlidir; geometrik kavramları henüz ayrıntılı olarak açıklamaya gerek yoktur.</p>`)
  },
  { title:`Nokta`, html:
    `<h1>Nokta Nedir? 📍</h1>
     <blockquote><p>Geometrik çizimin en küçük elemanıyla başlayalım. Kalem kâğıda bir kez dokunduğunda ne olduğuna bak.</p><img class="center-img" src="${P.pointGif}" alt=""></blockquote>
     <h3>A Noktası</h3>
     <h2>Bu tür izlerle nerelerde karşılaşırız? 🔍</h2>
     <p>Günlük hayatta buna benzer noktaları — dokunma izlerini — nerelerde gördün? Bir veya birkaç örnek yaz.</p>` +
    essay(``, `Kalem ucu izi...`) +
    spoiler(`İpucuna mı ihtiyacın var?`, `<p>Belirli bir yeri belirten çok küçük izleri veya nesneleri hatırla.</p>`) +
    `<h2>Noktanın boyutu var mıdır?</h2>
     <p>Üç soruyu cevapla:</p>` +
    [`Noktanın uzunluğu var mıdır?`, `Noktanın genişliği var mıdır?`, `Noktanın kalınlığı var mıdır?`].map(q => test(q, [`Evet`, `Hayır`])).join('') +
    `<div class="example"><div class="ex-t">🎓 Önemli Sonuç:</div><p><strong>Noktanın uzunluğu, genişliği veya derinliği yoktur.</strong></p><p>Kalemin kâğıda veya tahtaya bir kez dokunması, noktaya bir modellerdir (örnektir).</p><img src="${P.pointModelGif}" alt=""></div>
     <h2>Nokta Nasıl Gösterilir?</h2>` +
    media(P.pointA, `<p><strong>Geometrik çizim:</strong> A harfi olan bir nokta.</p><p><strong>Sembolle gösterimi:</strong> A</p><p><strong>Okunuşu:</strong> A noktası.</p>`, 'narrow') +
    `<img class="center-img" src="${P.sofiPlan}" alt="Sofi parkın büyütülmüş planını inceliyor">
     <h2>Gerçek Nokta Modelini Bul 👀</h2>
     <p>Hangi görsel gerçekten bir nokta modeli olabilir? Bir seçenek belirle.</p>` +
    testImg(`Hangi görsel bir nokta modeli olabilir?`, [P.opt1, P.opt2, P.opt3, P.opt4]) +
    `<blockquote><p>Açıklama: Küçük bir dairenin iç bölgesi vardır, bir çubuğun uzunluğu vardır, artı (çarpı) işareti ise kesişen çizgilerden oluşur. Bu yüzden bunlar geometrik bir nokta değildir.</p></blockquote>` +
    tnotes(`<p><strong>Kartın Amacı:</strong> Noktayı, belirli bir yeri belirten ve boyutları olmayan geometrik bir nesne olarak kavratmak.</p><p><strong>Eğitmenin Yapması Gerekenler:</strong> Önce kalem dokunma animasyonunu gösterin ve A harfinin belirmesine dikkat çekin. Ardından öğrencilere dokunma izlerine örnekler vermeleri ve noktanın özellikleriyle ilgili üç soruyu cevaplamaları için zaman tanıyın.</p><p><strong>Dokunma İzlerine Örnekler:</strong> İğne batması, camdaki bir damla, uzaktaki bir yıldız, ekrandaki bir piksel, çivi deliği, sivrisinek ısırığı yeri.</p><p><strong>Dikkat Edilmesi Gerekenler:</strong> Problemin bağlamında sadece konumları önemliyse, öğrenci büyük gerçek nesneleri de nokta modeli olarak adlandırabilir. Örneğin, haritadaki bir şehir veya plandaki bir ağaç bir noktayla gösterilebilir.</p><p>Bu kartta henüz harita üzerinde nokta çizimine geçmeyin; editördeki uygulamalı çalışma bir sonraki kartın konusudur.</p>`)
  },
  { title:`Harita üzerinde noktaları işaretle`, html:
    banner(P.parkBanner) +
    `<h1>Harita üzerinde noktaları işaretle 📍</h1>
     <h3>4 nesneyi bir noktayla işaretle ve harfle adlandır — Giriş (A), Fıskiye (B), Bank (C), Ağaç (D).</h3>
     <p>Elde ettiğin görselleri indir ve ders sohbetine gönder.</p>` +
    embed(P.dotsApp, 560)
  },
  { title:`Doğru parçası`, html:
    `<h1>İki Noktayı Birleştirelim 📏</h1>
     <blockquote><p>Parkın planında iki önemli yer işaretlenmiştir — A ve B noktaları. Aralarında giderek daha fazla nokta belirdiğinde ne olacağına bak.</p></blockquote>
     <img class="center-img" src="${P.segmentGif}" alt="Parkın planında A ve B noktaları arasında kademeli olarak kesintisiz bir doğru parçası beliriyor">
     <h3>Ne oldu?</h3>
     <p>İlk önce A ve B arasındaki noktalar seyrek yerleşmiştir. Ardından, kesintisiz bir çizgi halinde birleşene kadar sayıları giderek artar.</p>
     <div class="example"><div class="ex-t">🎓 Önemli Sonuç</div><p><strong>Doğru parçası, iki ucu olan bir doğrunun parçasıdır.</strong></p><p>Aralarında doğru parçası çizilen noktalara bu parçanın <strong>uç noktaları</strong> denir.</p><img src="${P.segmentEndsGif}" alt=""></div>
     <h2>Doğru Parçası Nasıl Gösterilir?</h2>` +
    media(P.segmentAB, `<p><strong>Geometrik çizim:</strong><br>bir çizgiyle birleştirilmiş iki nokta, A ve B.</p><p><strong>Sembolle gösterimi:</strong><br>[AB] veya [BA]</p><p><strong>Okunuşu:</strong><br>AB doğru parçası veya BA doğru parçası.</p>`, 'narrow') +
    `<blockquote><p>AB doğru parçası ile BA doğru parçasının uç noktaları aynıdır. Bu yüzden bu aynı doğru parçasıdır.</p></blockquote>` +
    tnotes(`<p><strong>Kartın Amacı:</strong> Doğru parçasını, iki noktayla sınırlandırılmış bir doğrunun parçası olarak kavratmak.</p><p><strong>Eğitmenin Yapması Gerekenler:</strong> Animasyonu gösterin ve öğrencilerden A ve B noktaları arasında ne olduğunu açıklamalarını isteyin. Çizginin bu noktaların ötesine uzamadığına dikkat çekin.</p><p>Gözlemden sonra doğru parçasının tanımını seslendirin ve A ile B noktalarının onun uç noktaları olduğunu gösterin.</p><p><strong>Gösterimin okunuşu:</strong> [AB] “AB doğru parçası” olarak, [BA] ise “BA doğru parçası” olarak okunur. Her iki gösterim de aynı doğru parçasına aittir.</p><p><strong>Dikkat Edilmesi Gerekenler:</strong> Doğru parçasına “doğru” demeyin. Doğrunun uçları yoktur, doğru parçasının ise tam olarak iki ucu vardır.</p><p>Bu kartta öğrenciler sadece kavramla tanışırlar. Sanal cetvel kullanarak kendi başlarına doğru parçası çizme işlemi bir sonraki kartta yapılacaktır.</p>`)
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
    text:'This is the list of <b>assignments</b> of the lesson, in order. This is the first lesson of Module 1 of Math · Level 5.<br><br>Click the first one: <b>“Öğretmen Rehber Kartı”</b> (Teacher guide card).' },
  { title:'Two views of the same card', next:true, wide:true,
    text:'Before you go on, it’s important to understand <b>what you see</b> and <b>what Elif sees</b>. You’re both on the same card, but not on the same screen:' +
      `<div class="views">
        <div class="view"><div class="vh">👩‍🏫 What <b>you</b> see</div>
          <div class="mock"><div class="m-tn">Teacher notes<small>only for you</small></div><div class="mk-c">Card content</div></div></div>
        <div class="view"><div class="vh">👧 What <b>Elif</b> sees</div>
          <div class="mock"><div class="mk-c">Card content</div></div></div>
      </div>` +
      '<ul class="c-list"><li>The box with the <b>orange dashed border</b> is the <b>Teacher notes</b>. They are written <b>inside the card</b>, together with the content.</li><li>Only the tutor sees them. Elif <b>never</b> sees the Teacher notes — only the card content. Don’t read them out to her.</li><li>Every card has its own notes, so they are the first thing to check before and during each card.</li></ul>' },
  { title:'The first Teacher notes', target:'#taskScroll', side:true, read:{ scope:'#tn-first' },
    text:'The notes of the <b>first card</b> are the most detailed of the lesson: the story, the goal and key result, your <b>role</b>, the <b>time plan</b> of the 80 minutes, <b>what to watch out for</b>, a <b>quick answer key for every card</b>, how to <b>close</b> the lesson and what comes next.<br><br>In the first lesson of a module there’s usually an <b>explanatory video</b> too: watch it when you prepare.<br><br><b>Open every section</b> and <b>scroll to the end of the notes</b> to continue.' },
  { title:'What Elif sees', target:'#taskScroll', side:true, read:{},
    text:'Below the notes is the card as <b>Elif</b> will see it: the banner, the title, the story and what she’ll learn in this module.<br><br>Scroll through the <b>whole card</b>. Next unlocks when you reach the end.' },
  { title:'Lead the group', target:'#leadToggle', accept:['toggleLead'],
    text:'Now turn on <b>Lead the group</b>. Only you have this switch — students don’t.' +
      `<div class="lead-demo">
        <div><span class="ld-sw"></span><b>OFF</b> — you move to another card or scroll, and Elif stays where she was. She may be looking at something else.</div>
        <div><span class="ld-sw on"></span><b>ON</b> — every card you open and every scroll you make, Elif sees at the same time.</div>
      </div>` +
      'Click the switch — it turns blue when it’s on.' },
  { title:'Elif is following you', target:'.vt.student', next:true,
    text:'<b>Lead the group</b> is on ✅ Look at Elif’s picture: it now says <b>Following the teacher</b>.<br><br>From now on:<ul class="c-list"><li>Elif has the <b>same card</b> open as you, and sees the same scroll position — without the Teacher notes.</li><li>She can click <b>Work independently</b> to explore on her own. She then sees a banner saying where you are, with a <b>Return</b> button.</li></ul>' },
  { title:'Next card', target:'#btnNext', accept:['nextTask'],
    text:'The arrow pointing right takes you to the <b>next card</b>. Because Lead the group is on, Elif moves with you. Click it.' },
  { title:'Notes in every card', target:'#taskScroll', side:true, read:{},
    text:'This card welcomes the group. Besides the content for Elif, it has its own <b>Teacher notes</b> at the bottom: they’re shorter than the first ones.<br><br>They usually tell you the card’s <b>objective</b>, <b>what you should do</b> and <b>what to pay attention to</b>.<br><br>Read the card to the end, including the Teacher notes.' },
  { title:'Keep going', target:'#btnNext', accept:['nextTask'],
    text:'Click <b>Next task</b> to go to the next card.' },
  { title:'Interactive activities', side:true, target:'#taskScroll', read:{},
    text:'Cards can include <b>interactive activities</b> that open right inside the card, like this <b>Wordwall</b> wheel. Elif uses it on her own copy of the card, while you lead the conversation.<br><br>Scroll to the end of the card.' },
  { title:'One more card', target:'#btnNext', accept:['nextTask'],
    text:'Click <b>Next task</b> once more.' },
  { title:'Questions in the cards', side:true, target:'#taskScroll', read:{}, last:true, btn:'Finish ✓',
    text:'Cards also include <b>questions</b> the student answers on her own copy, like the <b>red flag / green flag</b> questions here, and steps she opens one by one.<br><br>Scroll to the end of the card and read the Teacher notes: they follow the same structure as in the previous cards.<br><br>That’s all you need to know about the EM lesson format!' }
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
    'The <b>first card</b> has the most detailed notes: goals, your role, the time plan, an answer key for every card, closing and next lesson — and in a module’s first lesson, usually an explanatory video.',
    'Each next card has shorter notes: objective, what to do and what to watch out for.',
    '<b>Lead the group</b> makes the students follow the card you open and the place where you scroll.'
  ],
  tip: '<b>Tip:</b> read the Teacher notes of the whole lesson <b>before</b> you teach it.',
  codeLabel: '🔑 Your completion code',
  codeHint: 'Copy it into the training to confirm that you completed the guide.',
  back: '← Back to the training',
  closeTab: 'Close this tab to go back to the training, then enter your completion code there.'
};
