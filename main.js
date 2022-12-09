const searchBar = document.getElementById("search-bar");
const list = document.getElementById("list");

const icons = [
  {
    name: `Axborot bu - …
  `,
    rightAnswer: ` Butun borliq, undagi roʼy beradigan hodisalar va jarayonlar xaqidagi xabar va maʼlumotlardir
    `,
  },
  {
    name: ` Axborot- lotincha information so’zidan olingan bo’lib … degan ma’noni beradi.
  `,
    rightAnswer: `tushuntirish`,
  },
  {
    name: `Axborot asosan qanday turlarga bo’linadi?
  `,
    rightAnswer: `Matnli axborot,grafikli axborot, tovushli axborot, videolavhali axborot, belgili axborot, raqamli axborot.
  `,
  },
  {
    name: ` Axborot kompyuter,planshet, mobil qurilma va boshqalarga qanday qabul qiladi va uzatadi?`,
    rightAnswer: ` ikkilik sanoq sistemasida`,
  },
  {
    name: `Axborotlarni o’lchashda kompyuterda signalning borligi va yo’qligi qanday ifodalanadi?`,
    rightAnswer: `1 va 0 orqali`,
  },
  {
    name: `Axborot katta hajmda bo’lganda uning sig’imini  ayni paytda qanday turlarda o’lchash mumkin,o’lchov birliklari?`,
    rightAnswer: `Bit,Bayt, Kb,Mb,Gb,Tb,Pb `,
  },
  {
    name: `Axborotni kompyuterga tashishga va saqlashga yordam beradigan vositalar - …`,
    rightAnswer: `Kesh xotira,tezkor xotira,ichki xotira,tashqi xotira`,
  },
  {
    name: `Axborot texnologiyalari- `,
    rightAnswer: `Maʼlumotlarni boshqarish va qayta ishlash texnologiyalaridir`,
  },
  {
    name: ` Kompyuter ishga tushgandan soʼng barcha dasturiy vositalarni ishlashini taʼminlab beruvchi xotira-bu…`,
    rightAnswer: `Tezkor xotira`,
  },
  {
    name: `Foydalanuvchi tomonidan eng koʼp foydalanilgan axborot yoki dasturiy vositani oʼzida saqlab boruvchi xotira- bu …`,
    rightAnswer: `Kesh xotira`,
  },
  {
    name: ` Axborot texnologiyalarining rivojlanishi qanday bosqichlarga bo’linadi?`,
    rightAnswer: `Insonlar oʼrtasidagi ilk muloqot, muloqot o’rnatishda qurilmalardan foydalanish, mikro- sxemalarning paydo boʼlishi, hozirgi davr texnologiyalari`,
  },
  {
    name: `Telefon va telegraflardan axborot texnologiyalarning qaysi rivojlanish bosqichida foydalanilgan?`,
    rightAnswer: `Elektromexanik`,
  },
  {
    name: `Axborot texnologiyalarining qaysi rivojlanish bosqichida insonlar o’rtasida ilk muloqat  yuzaga kelgan?`,
    rightAnswer: `Peremexanik`,
  },
  {
    name: ` Axborot texnologiyalarining qaysi rivojlanish bosqichida  muloqot o’rnatishda qurilmalardan foydalanilgan?`,
    rightAnswer: `Mexanik`,
  },
  {
    name: `Axborot texnologiyalarining qaysi rivojlanish bosqichida  hozirgi davr texnologiyalaridan foydalanila boshlandi?`,
    rightAnswer: `Elektron`,
  },
  {
    name: `Avtomatlashtirish- …`,
    rightAnswer: ` deganda inson ishtirokisiz biror bir mahsulotni ishlab chiqarish yoki xizmat kursatish tushuniladi`,
  },
  {
    name: `  Ishlab chigarishni avtomatlashtirish-…`,
    rightAnswer: ` Mashinalashtirilgan ishlab chiqarishni nazorat qilish va boshqarish ishlarini avtomatik qurilmalar zimmasiga yuklash hisoblanadi`,
  },
  {
    name: ` Ishlab chiqarishning …. bosqichlari bor.`,
    rightAnswer: `Lokal,kompleks va to’la avtomatlashtirish`,
  },
  {
    name: `Qo’llanish sohasiga qarab axborot tizimlarini qanday sinflarga ajratish mumkin:`,
    rightAnswer: `Tashkiliy,Texnologik jaroyanlarni boshqarish,Loyihalashtirishni avtomatlashtirish,  Ilmiy tadqiqotlarni avtomatlashtirish va boshqarish`,
  },
  {
    name: ` Аxborot-kommunikatsiya texnologiyalarini asosiy roli va ahamyatlaridan biri bu-`,
    rightAnswer: `Aholini yaxshi yashash darajasini oshirish`,
  },
  {
    name: `Аxborot-kommunikatsiya texnologiyalarini tatbiq etishdan maqsad-…`,
    rightAnswer: `Iqtisodni rivojlantirish, Investitsiyalarni jalb qilish, Ish oʼrinlarini koʼpaytirish, Barqaror iqtisodiy
  oʼsish, Аholi yashash darajasini oshirish`,
  },
  {
    name: ` Axborot-kommunikatsiya texnologiyalarining asosi nimalardan tashkil topgan?`,
    rightAnswer: `Sofrware,hardware,brainware`,
  },
  {
    name: `Kompyuter qaysi ta’minotsiz “quruq temir”ga aylanib qoladi?`,
    rightAnswer: `software`,
  },
  {
    name: `Software nechta guruhga bo’linadi?`,
    rightAnswer: `Tizimli,amaliy va uskunaviy`,
  },
  {
    name: ` Linux,ios,android,windows va boshqalar qanday dasturiy ta’minotga tegishli`,
    rightAnswer: `Tizimli`,
  },
  {
    name: `Foydalanuvchi  va qurilma o’rtasidagi muloqatni oʼrnatib beruvchi dasturiy mahsulotlar –bu …`,
    rightAnswer: `Tizimli dasturiy ta’minot`,
  },
  {
    name: ` Videoplayer, Office dasturlari paketi, grafik dasturlar, maʼlumotlar bazasi, antiviruslar, arxivatorlar  va boshqalar qanday dasturiy ta’minotga tegishli`,
    rightAnswer: `Amaliy dasturiy ta’minot`,
  },
  {
    name: `JavaScript,Java,C++,Python,Delphi,visual studio va boshqa dasturlash tillari qanday dasturiy ta’minotga tegishli?`,
    rightAnswer: `Uskunaviy`,
  },
  {
    name: `Muammoga yo’naltirilgan,sun’iy intellekt,kichik nashriyot ,umumiy maqsadli,multimediali va ofis  dasturiy ta’minot bilan qaysi dasturiy ta’minot tasniflanadi?`,
    rightAnswer: `Amaliy `,
  },
  {
    name: `Muammoga yo’naltirilgan amaliy  dasturiy ta’minot-…`,
    rightAnswer: `Buxgalteriya,shaxsiy va jarayonlarni boshqarish ,bank axborot tizimlarini va boshqalarni   elektron  ko’rinishda muammolari hal qilinadi`,
  },
  {
    name: `Operatsion tizim -…`,
    rightAnswer: `foydalanuvchi va qurilma oʼrtasidagi muloqotni taʼminlab beradigan vositadir`,
  },
  {
    name: ` Fayl tizimini boshqarish,dasturlar bajarilishini boshqarish, xotirani boshqarish va foydalanuvchi bilan muloqotni boshqarish nimaning asosiy vazifalari hisoblanadi?`,
    rightAnswer: `operatsion tizim`,
  },
  {
    name: ` Operatsion tizimni qanday turkumlarga ajratish mumkin?`,
    rightAnswer: `Kompyuter,mobil qurilmalar,robotlar va boshqa qurilmalar uchun`,
  },
  {
    name: `Dasturlash tillari nechi xil ko’rinishga ega?`,
    rightAnswer: `Web ,Kompyuter, Mobil qurilmalar , Qurilmalar uchun dasturlar`,
  },
  {
    name: `Internetga ulanishda qaysi kabelning tezli yuqori hisoblanadi?`,
    rightAnswer: `Optik tolali kabel`,
  },
  {
    name: ` …-yilda  ARPANETning AQSH ichidagi va rivojlangan davlatlardagi aloqa tarmoqlari bilan ulanishi boshlandi. Bu ulanish natijasida global komp’yter tarmog’i  INTERNET vujudga keldi`,
    rightAnswer: `1977`,
  },
  {
    name: ` Asosiy dasturiy ta'minotga qo‘shimcha ravishda o‘rnatiladigan  dasturlar- bu …`,
    rightAnswer: `Utilitalar`,
  },
  {
    name: `Dasturlashni revolutsiyasi bo’lgan til –bu …`,
    rightAnswer: ` Simula tili`,
  },
  { name: `Profissinallar tili-bu …`, rightAnswer: `C/C++` },
  {
    name: `Internet kelajagi bo’lgan dasturlash tillari-bu…`,
    rightAnswer: `Java,C#`,
  },
  {
    name: ` Operatsion muhit o’z ichiga-… vositalar ta’minotini oladi.`,
    rightAnswer: ` Operatsion tizim, Dasturiy ta’minot, Amaliy dasturlar interfeyslari, Tarmoq xizmatlari, Ma’lumotlar  bazalari, Dasturlash tillari`,
  },
  {
    name: `Algoritm- …`,
    rightAnswer: ` berilgan natijaga erishish uchun qilinishi kerak bo’lgan aniq ko’rsatmalar ketma-ketligi`,
  },
  {
    name: `Algoritm so’zining kelib chiqish tarixi -…`,
    rightAnswer: `Al-Xorazmiy ismining talaffusidan olingan`,
  },
  {
    name: `Algoritm qanday xossalarga ega?`,
    rightAnswer: `Aniqlilik,tushunarlilik,diskretlilik,natijaviylik,ommaviylik`,
  },
  {
    name: `Dasturchilar asosan algoritimni tasvirlash usullaridan qaysi biridan ko’proq foydalaniladi?`,
    rightAnswer: `Grafik shaklidan`,
  },
  {
    name: ` Matematiklar asosan algoritmni tasvirlash usullaridan qaysi biridan ko’proq foydalaniladi?`,
    rightAnswer: ` Formulalar va jadval ko’rinishida ifodalash `,
  },
  {
    name: `Algoritm turlari … mavjud.`,
    rightAnswer: `Chizig’li,tarmoqlanuvchi va takrorlanuvchi`,
  },
  {
    name: `Chizig’li algoritm –bu…`,
    rightAnswer: `Berilgan masalani hech qanday ikkilanishsiz masalani algoritmini tuzish`,
  },
  {
    name: `Microsoft Excel dasturi  … uchun qo’llaniladi.`,
    rightAnswer: ` jadval shaklidagi masalalarni yechish va tahlil qilish`,
  },
  {
    name: `Microsoft Excel 2010 ning asosiy ish maydoni – bu ...`,
    rightAnswer: `ish varag'idir`,
  },
  {
    name: `Microsoft Excel da satr va ustun kesishmasi- … deyiladi.`,
    rightAnswer: ` yacheyka`,
  },
  {
    name: `Microsoft Excel da kursor yacheykada necha xil ko’rinishga ega?`,
    rightAnswer: `3 xil`,
  },
  {
    name: `Berilgan masalaning algoritmini tuzishda eng asosiy jarayon qaysi xossasida sodir bo’ladi?`,
    rightAnswer: `Tushunarlilik va Aniqlilik`,
  },
  {
    name: `Tarmoqlanuvchi algoritm - …`,
    rightAnswer: `masalaning asosiy qismiga kelganda mantiqiy shartni qo’yilishi va 2 ta natija hosil bo’lishi`,
  },
  {
    name: `Dasturlash tizimlariga quydagilar kiradi-…`,
    rightAnswer: ` Translyatorlar, Boshqaruvchi dasturlar, Redaktorlar, Jamlagichlar,Yuklovchilar, Otladchiklar`,
  },
  {
    name: `Dasturlarga xizmat ko’rsatuvchi tizimlar- bu …`,
    rightAnswer: ` maxsus servis dasturlar bo’lib, ular yordamida operatsion tizimni boshqarish mumkin`,
  },
  {
    name: `TRANSLYATOR-…`,
    rightAnswer: ` dasturlash tilidagi kiruvchi dastur matnini unga ekvivalent bo’lgan chiqishdagi natijaviy tilga o’giradi`,
  },
  {
    name: `KOMPILYATOR- …`,
    rightAnswer: ` dastur matnini unga ekvivalent bo’lgan mashina kodiga o’giradi`,
  },
  {
    name: `INTERPRETATOR-…`,
    rightAnswer: ` dastur matnini birdaniga qabul qiladi va bajaradi (natijaviy kodi bo’lmaydi)`,
  },
  {
    name: `Leksik tahlil-…`,
    rightAnswer: ` dastur literalarini oʼqiydi va ular orqali kiruvchi til leksemalarini koʼradi`,
  },
  {
    name: ` Sintaksis va Semantik tahlil-…`,
    rightAnswer: ` tilning sintaksis konstruktsiyalarini ajratadi va kiruvchi til semantikasi nuqtai nazaridan dastur matnini tekshiradi`,
  },
  {
    name: `Kodni generatsiyalash-…`,
    rightAnswer: ` natijaviy kodni bevosita xosil etish – kodni optimizatsiyalashni o’z ichiga olgan asosiy faza`,
  },
  {
    name: ` Assembler-…`,
    rightAnswer: ` biron bir mashinaga mo’ljallangan dasturlash tilida yozilgan dastur matnini obʼyekt kodiga aylantirish uchun mo’ljallangan`,
  },
  {
    name: ` Aloqa redaktorlari-…`,
    rightAnswer: ` Аssembler yordamida alohida olingan obʼekt modullarini yagona modulga birlashtirishga mo’ljallangan`,
  },
  {
    name: `Makroprotssesorlar- …`,
    rightAnswer: ` kiritiladigan matn simvollarini makroo’zgartirish qoidalari asosida o’zgartiruvchi dastur`,
  },
  {
    name: `Translyator-…`,
    rightAnswer: ` bir tilda yozilgan matnni boshqa tilga o’giradilar`,
  },
  {
    name: `Translyatorni qanday turlarini ajratib ko’rsatish mumkin?`,
    rightAnswer: `til konvertorlari,disassembler,kross tizim`,
  },
  {
    name: `Gentee, Basic, Gbasic, Fortran va boshqalar qanday dasturlash tillari hisoblanadi?`,
    rightAnswer: `yuqori darajadagi tillar`,
  },
  {
    name: ` Pascal, Delphi, C#, Java, C++, Visual Basic, ActionScript, Python, Ruby va boshqalar qanday  dasturlash tillari hisoblanadi?`,
    rightAnswer: `ob’yektga yo’naltirilgan dasturlash tillari`,
  },
  {
    name: `Quyi darajadagi tillar-…`,
    rightAnswer: ` bu asosan tizimlar uchun yoziladigan dasturlash tillari hisoblanadi`,
  },
  {
    name: `Dasturlash tillari deb-…`,
    rightAnswer: ` maʼlum bir vazifani bajarish uchun komp’yuter tiliga oʼgiruvchi dasturlash tillaridur`,
  },
  {
    name: `Ob’yektga yo’naltirilgan tillar-…`,
    rightAnswer: ` Class(sinf) tushunchasi bilan bogʼliq boʼlgan dasturlash usulidir`,
  },
  {
    name: `Yuqori darajadagi tillar-…`,
    rightAnswer: ` asosan ochiq kodli dasturlash tillariga aytiladi`,
  },
  {
    name: `PHP, ASP.NET, Perl, CMS, Framework va boshqa shu kabi dasturlar qanday dasturlash tillari hisoblanadi?`,
    rightAnswer: `Web dasturlash tillari`,
  },
  {
    name: `Web dasturlash tillar-…`,
    rightAnswer: ` Internetda ishlaydigan veb-saytlar, portallar va boshqa ilovalarni yaratishga moʼljallangan dasturlash tillaridir`,
  },
  {
    name: ` C++ dasturlash tili qaysi tilga asoslangan?`,
    rightAnswer: `C tiliga`,
  },
  {
    name: `C++ tilida ma’lumotlarning elementlari bo’lib…`,
    rightAnswer: `O’zgaruvchilar,o’zgarmaslar va izohlar`,
  },
  {
    name: `C++ tilida o’zgaruvchilar-…`,
    rightAnswer: ` xotiraning nomlangan qismi boʼlib, oʼzida maʼlum bir toifadagi qiymatlarni saqlaydi`,
  },
  {
    name: `C++ tilida o’zgarmaslar-…`,
    rightAnswer: ` hisoblash jarayonida qiymatini oʼzgartirmaydigan kataliklarga aytiladi`,
  },
  {
    name: ` C++ tilida izohlar-…`,
    rightAnswer: ` programmaning maʼlum qismini tavsiflash uchun ishlatiladi va bu qatorda hech qanday amal bajarilmaydi`,
  },
  {
    name: `C/C++ tilida arifmetik operatorlar-…`,
    rightAnswer: ` bu oʼzgaruvchi yoki qiymatlarda arifmetik(matematik) amallarni bajarish uchun ishlatiladigan operatorlar`,
  },
  {
    name: `C/C++ tilida arifmetik operatorlar-…`,
    rightAnswer: ` bu oʼzgaruvchi yoki qiymatlarda arifmetik(matematik) amallarni bajarish uchun ishlatiladigan operatorlar`,
  },
  {
    name: ` C/C++ tilida mantiqiy operatorlar-…`,
    rightAnswer: ` ikki yoki undan koʼp shartlarni, cheklovlarni birlashtirish yoki koʼrib chiqilayotganda asl holatni baholashni toʼldirish uchun ishlatiladi`,
  },
  {
    name: ` C/C++ tilida bitwise operatorlar-…`,
    rightAnswer: ` oʼzgaruvchilarda bit darajasidagi amallarni bajarish uchun ishlatiladi`,
  },
  {
    name: ` C/C++ tilida belgilish operatorlari-…`,
    rightAnswer: ` oʼzgaruvchiga qiymat berish uchun ishlatiladi`,
  },
  {
    name: `C/C++ tilida qo’shimcha operatorlar-…`,
    rightAnswer: ` yuqoridagi operatorlardan tashqari baʼzi bir muayyan vazifani bajarish uchun ishlatiladigan C yoki C++ da baʼzi boshqa operatorlar mavjud`,
  },
  {
    name: ` C++ dasturlash tilida direktivalarni chaqirish-…`,
    rightAnswer: ` funktsiyalar kutubxonasini chaqirish`,
  },
  {
    name: `C++ tilida to’g’ri chaqirilgan kutubxonani javobdan tanlang `,
    rightAnswer: `#include <iostream>`,
  },
  {
    name: `C++ dasturlash tilida o’zgaruvchilarni katta harf va kichik harf bilan berganda kompilyator farqlaydimi?`,
    rightAnswer: `farqlaydi`,
  },
  {
    name: `C++ tilida console -…`,
    rightAnswer: ` foydalanuvchi dastur tuzuishda faqat dastur kodlari bilan ishlaydi`,
  },
  {
    name: ` C++ tilida graphic interface-…`,
    rightAnswer: ` faqat tilning kodlari bilangina emas muhitning menyulari, komponentalari bilan ham ishlashi mumkin boʼladi`,
  },
  { name: `Ma’lumotlarni oqimga chiqarish operatori- …`, rightAnswer: `cout` },
  { name: ` Ma’lumotlarni oqimga olib kirish operatori-…`, rightAnswer: `cin` },
  {
    name: `“Hi, Where are you from?” so’zini qora ekranga chiqarish uchun-…`,
    rightAnswer: `cout<<“Hi, Where are you from?”;`,
  },
  {
    name: ` a  o’zgaruvchiga qora ekrandan qiymat yuklash uchun-…`,
    rightAnswer: `cin>>a;`,
  },
  {
    name: ` a+b=c formulasi C++ tilida qanday yoziladi? `,
    rightAnswer: `c=a+b;`,
  },
  {
    name: ` c=a%b ko’rinishida berilgan ifodada qanday qiymat yuklanadi?`,
    rightAnswer: `b ni a ga qoldiqli bo’ladi va qoldig’ini c ga yuklaydi`,
  },
  {
    name: `c=a/b ko’rinishida berilgan ifodada qanday qiymat yuklanadi?`,
    rightAnswer: ` b ni a ga butun bo’ladi va butun qiymatini c ga yuklaydi`,
  },
  {
    name: `Tarmoqlanuvchi jarayonlarini dasturlash uchun … foydalaniladi.`,
    rightAnswer: `shartli,shartsiz,tanlash operatorlaridan`,
  },
  {
    name: `Shartsiz o’tish operatori … umumiy ko’rinishi.`,
    rightAnswer: `Goto <operant>`,
  },
  {
    name: `Shartli o’tish operatori-…umimiy ko’rinishi.`,
    rightAnswer: `if(shart)<operant>| if(shart)<operant1> else <operant2>`,
  },
  {
    name: `… int n;
  n: cin>>n;
  if(n!=0) goto n; cout<<n;   …. ekranga qanday natija chiqadi?`,
    rightAnswer: `n=0 teng bo’lmaguncha qayta n qiymatini so’raydi va 0 bo’lgandagina ish yakuniga yetadi 0 ekranga chop qilinadi`,
  },
  {
    name: `… int n;
  n:cin>>n; s=n*n; if(n!=-1) goto n;  cout<<s;  … ekranga qanday natija chiqadi?`,
    rightAnswer: `n=1 degan natija chiqariladi qachonki n=-1 kiritilsa`,
  },
  {
    name: `Shartli o’tishda qanday amallardan foydalaniladi?`,
    rightAnswer: `>,<,>=,<=,!=,==`,
  },
  {
    name: `… int s1=10,s2=20;
  If(s1>s2) cout<<s1*s2;
  If(s1<s2) cout<<s1+s2; … ekranga qanday natija chiqadi?`,
    rightAnswer: `30`,
  },
  {
    name: `… int n=65;
  If(n<0) cout<<n*n;
  cout<<n; … ekranga qanday natija chiqadi?`,
    rightAnswer: `65`,
  },
  {
    name: `… int n=6;
  If(n<0) cout<<n*n;
  cout<<n; … ekranga qanday natija chiqadi?`,
    rightAnswer: `6`,
  },
  {
    name: `… int n=25;
  If(n<0) cout<<n*n;
  cout<<n; … ekranga qanday natija chiqadi?`,
    rightAnswer: `25`,
  },
  {
    name: `… int n=15;
  If(n<0) cout<<n*n;
  cout<<n; … ekranga qanday natija chiqadi?`,
    rightAnswer: `15`,
  },
  {
    name: `Takrorlanuvchi algoritmlar qanday ko’rinishi bor dasturlashda?`,
    rightAnswer: `For(),while(),dowhile()`,
  },
  {
    name: `… int naija=3; for (int i = 0; i < 20; i++)
  {
    Natija++;
  }  cout<<natija; ….  ekranga qanday natija chiqadi?`,
    rightAnswer: `22`,
  },
  {
    name: `… for (int i = 10; i < 20; i++)
  cout<<i; ….  ekranga qanday natija chiqadi?`,
    rightAnswer: `19`,
  },
  {
    name: `Break operatori-…`,
    rightAnswer: `Sikldan yoki jarayonni to’liq to’xtatish uchun qo’llaniladi`,
  },
  {
    name: `Continue operatori -…`,
    rightAnswer: `Sikldan yoki jarayonni keying qadamga o’tish uchun qo’llaniladi`,
  },
  {
    name: `Jarayonlarning modellari-…`,
    rightAnswer: ` Kuzatilayotgan obʼektlarni chuqur va har tomonlama oʼrganish maqsadida tabiatda va jamiyatda roʼy beradigan jarayonlardir`,
  },
  {
    name: `Jarayonlarning modellari-…`,
    rightAnswer: ` Kuzatilayotgan obʼektlarni chuqur va har tomonlama oʼrganish maqsadida tabiatda va jamiyatda roʼy beradigan jarayonlardir`,
  },
  {
    name: `Vaqt bo‘yicha o‘zgarmas modelni ko‘rsating`,
    rightAnswer: ` statik model`,
  },
  {
    name: ` Vaqt bo‘yicha o‘zgaruvchi modelni ko‘rsating.`,
    rightAnswer: `dinamik model`,
  },
  {
    name: `Chiziqli programmalashtirish masalasini grafik usulda yechganda noma’lumlar soni nechta?`,
    rightAnswer: `2`,
  },
  {
    name: `Chiziqli programmalashtirish masalasini simpleks usul bilan yechganda noma’lumlar soni nechta bo’ladi?`,
    rightAnswer: `3 va undan yuqori chekli son`,
  },
  {
    name: `Chiziqli programmalashtirish masalasini grafik  usul bilan yechganda koordinatani qaysi nuqtalar tengsizliklarni qanoatlantiradi?`,
    rightAnswer: ` ko’pburchak yechimlarini barcha nuqtalari`,
  },
  {
    name: `Chiziqli programmalashtirish  masalasini grafik usulda yechganda optimal yechimlar qayerda joylashgan?`,
    rightAnswer: ` ko’pburchak ichida`,
  },
  {
    name: `Chiziqli programmalashtirish  masalasini grafik usuli bilan yechishda yechimlar ko’pburchagi qayerda joylashgan?`,
    rightAnswer: `I chorakda`,
  },
  {
    name: `Qaysi shartlar grafik usulda yechilgan Chiziqli programmalashtirish  masalasini yechimga ega emas?`,
    rightAnswer: `Agarda yarimtekisliklar kesishmasi chegaralanmagan soxani hosil qilsa`,
  },
  {
    name: `Qaysi shartlarda CHPM yechimga ega bo’ladi?`,
    rightAnswer: `Agarda yarimtekisliklar  kesishmasi  bo’sh bo’lmasa `,
  },
  {
    name: `Agarda yarimtekisliklar kesishmasi bo’sh bo’lsa`,
    rightAnswer: `Agarda yarimtekisliklar kesishmasi chegaralanmagan soxani hosil qilsa`,
  },
  {
    name: `Qaysi shartlarda grafik usulda yechilgan CHPM yakuniy yechimga ega bo’ladi?`,
    rightAnswer: `Agar yarimtekisliklar kesishmasi chegaralangan ko’pburchak hosil qilsa`,
  },
  {
    name: `Qanday shartlarda CHMPni  grafik usulda yechimi сhegaralanmagan  qiymatlarini qabul qiladi?`,
    rightAnswer: `Agarda yarimtekisliklar kesishmasi chegaralanmagan soha bo’lsa `,
  },
  {
    name: `Obyektni modelini qurish bizga -… `,
    rightAnswer: `vaqt,mablag’ va ko’plab xatolikni oldini oladi`,
  },
  {
    name: `Barcha modellarni-… turga bo’lish mumkin`,
    rightAnswer: `moddiy va ideal`,
  },
  {
    name: `Moddiy modellarni- … modellarga ajratish mumkin.`,
    rightAnswer: `fizik va belgili`,
  },
  {
    name: `Moddiy modellar-…`,
    rightAnswer: `real obyektlarni tabiiy va sun’iy matreallar bilan aks ettiradi`,
  },
  {
    name: `Ideal  modellar -…`,
    rightAnswer: ` odamni fikrlash jarayoni bilan chambarchas bog’liq `,
  },
  {
    name: `Fizik modellar-…`,
    rightAnswer: ` real obyektni fizik tabiatini aks ettiradi va asosan asosan fizik xossalarini ifodalaydi `,
  },
  {
    name: `Belgili modellar- …`,
    rightAnswer: ` har tillarda ifodalanishi mumkin `,
  },
  {
    name: `Chiziqli modellar-…`,
    rightAnswer: `maqsad mezoni chiziqli ko’rinishda bo’ladi ,uning ekstremal qiymatlari orasidagi munosabat chiziqli tenglamalar va tengsizliklar orqali ifodalaniladi`,
  },
  {
    name: `Dinamik modellar-…`,
    rightAnswer: ` iqtisodiy ko’rsatkichlarning vaqt davomida qanday o’zgarishi kuzatiladi ularga qaysi omillar ta’sir etishi o’rganiladi `,
  },
  {
    name: `Statik modellar-…`,
    rightAnswer: ` iqtisodiy jarayonlar va ko’rsatkichlarning ma’lum vaqtdagi holati o’rganiladi `,
  },
  {
    name: `Modellashtirish bosqichlari-… iborat`,
    rightAnswer: `iqtisodiy muammoni qo’yilish,matematik modelni tuzish,madelni matematik tahlili,iqtisodiy ma’lumotlarni tayyorlash, algoritmni tuzish va yechimni ekspert sifatida tahlil qilib berish`,
  },
  {
    name: `Makroiqtisodiy modellar -…`,
    rightAnswer: ` iqtisodiyotni bir butun deb qarab,umumlashtirilgan  moddiy va moliyaviy ko‘rsatkichlarni: yalpi milliy mahsulot, iste’mol, investitsiya, ish bilan bandlik, foiz stavkalari, pulning miqdori va boshqalarni o‘zaro bog‘lagan holda tasvirlaydi`,
  },
  {
    name: `Mikroiqtisodiy modellar-…`,
    rightAnswer: ` iqtisodiyotnig tuzilmali va funksional tashkil etuvchilarining o‘zaro ta’sirini ifodalaydi `,
  },
  {
    name: `Nazariy modellar-…`,
    rightAnswer: ` formal shart – sharoitlarda deduksiya xulosalari yordamida iqtisodiyotning umumiy xossalarini va unga xos bo’lgan elementlarni o‘rganishga imkon beradi `,
  },
  {
    name: `Amaliy modellar-…`,
    rightAnswer: ` aniq iqtisodiy ob’yektning amal qiluvchi parametrlarini baholashga va amaliy qarorlar qabul qilish uchun tavsiyalarni ifodalashga imkon beradi `,
  },
  {
    name: `Ishlab chiqarishda resurslardan foydalanish masalasining matematik modelini tuzishda -… `,
    rightAnswer: `m xil turdagi mahsulot va n xil ishlab chiqarish faktorlari zarur bo’ladi`,
  },
  {
    name: `Iste’mol savati masalasi modelini tuzishda-…`,
    rightAnswer: ` kishi organizmi uchun 1 sutkada n xil ozuqa miqdorini m xil turdagi mahsulotlar tarkibidan olsin `,
  },
  {
    name: `Chiziqli programmalashtirish masalasining analitik ifodasi-…`,
    rightAnswer: ` Z=C1X1+C2X2+…+CnXn`,
  },
  {
    name: `Chiziqli programmalashtirish masalasining normal, simmetrik, yoki standart koʼrinishi`,
    rightAnswer: `C1X1+C2X2+…+CnXn (<=) -> мах `,
  },
  {
    name: `Chiziqli programmalashtirish masalasining kanonik ko'rinishi`,
    rightAnswer: `C1X1+C2X2+ ... +CnXn(=) -> max`,
  },
  {
    name: `Chiziqsiz programmalashtirish-…`,
    rightAnswer: ` Agar maqsad funktsiya yoki shartlardan biri chiziqsiz bo'lsa`,
  },
  {
    name: `Dinamik programmalashtirish-…`,
    rightAnswer: ` Masalani optimal yechimi bir necha qadamda topilsa `,
  },
  {
    name: `Butun sonli programmalshtirish-…`,
    rightAnswer: ` Ba'zi masalalarda o'zgaruvchilar butun sonlarni qabul qilishi `,
  },
  {
    name: `Stoxastik programmalshtirish-…`,
    rightAnswer: ` Tasodifiy miqdorlar ta'siridagi jarayonlarni matematik programmalashtirish `,
  },
  {
    name: `Optimizatsiya masalalarini grafik usulda yechishda-… bo’ladi.`,
    rightAnswer: `n-m=2`,
  },
  {
    name: `Optimizatsiya masalalarini simpleks usulda yechishda-… bo’ladi.`,
    rightAnswer: ` n-m=3`,
  },
  {
    name: `Transport masalasini qo’yilishida-…`,
    rightAnswer: `qaysidir bir turdagi tovarni taqsimlashda  m ta ta’minotchi va n tais’temolchilar bo’lsin`,
  },
  { name: `Transport masalasi nega yopiq model deyiladi?`, rightAnswer: `=` },
  {
    name: `Chiziqli  programmalashtirish  masalalsini yechishning  simpleks usulida tayanch  yechimini topish shartini aniqlang`,
    rightAnswer: ` ozod xadlar ustunining barcha elementlari musbat `,
  },
  {
    name: `Chiziqli programmalashtirish masalasini  simpleks usulda yechishning  qanday shartlarda tayanch yechim topilmagan hisoblanadi`,
    rightAnswer: ` ozod xadlar ustunining barcha elementlari orasida manfiy elementlar mavjud`,
  },
  {
    name: `Chiziqli programmalashtirish masalasini yechishning simpleks usulida optimallik shartini aniqlang?`,
    rightAnswer: ` z qatorining barcha elementlari musbat `,
  },
  {
    name: `Chiziqli programmalashtirish  masalasini usulida  optimal reja topilmagani holatni aniqlang`,
    rightAnswer: ` z qatorining barcha elementlari manfiy`,
  },
  {
    name: `Chiziqli programmalashtirish  masalasini yechishning simpleks usulida agar,  manfiy ozod xad elementi qatorida bironta manfiy element bo’lmasa, yechim.... ....`,
    rightAnswer: `mavjud emas`,
  },
  {
    name: `Chiziqli programmalashtirish masalasini yechishning simpleks usulida agar manfiy ozod xad elementli z qatorida bironta manfiy element yo’q bo’lsa, yechim.....`,
    rightAnswer: ` yuqoridan chegaralanmagan`,
  },
  {
    name: `Chiziqli programmalashtirish masalasini yechishning simpleks usulida agar z qatorining barcha ozod xadlari va elementlari musbat  bo’lsa, yechim..........`,
    rightAnswer: `faqat bitta va yakuniy`,
  },
  {
    name: `Chiziqli programmalashtirish masalasini yechishning simpleks usulida 1-ustun noma’lumlari .... ga teng bo’ladi:`,
    rightAnswer: `ozodlar xadlar`,
  },
  {
    name: `Chiziqli programmalashtirish masalasini yechishning simpleks usulida 1-qator  noma’lumlari .... ga teng bo’ladi:`,
    rightAnswer: `nol`,
  },
  {
    name: `Chiziqli programmalashtirish masalasini yechishning simpleks usulida qaysi usul qo’llaniladi `,
    rightAnswer: ` to'rtburchak  usuli`,
  },
  {
    name: `Transport masalasini yechishda qaysi usuldan foydalaniladi?`,
    rightAnswer: ` Potensiallar usuli`,
  },
  {
    name: `Transport masalasida ishlatiladigan punktni ko’rsating.`,
    rightAnswer: ` Qa’bul punkiti `,
  },
  {
    name: `Transport masalasida ishlatiladigan punktni ko’rsating.`,
    rightAnswer: ` Jo’natish punkiti`,
  },
  {
    name: `Transport masalasida ishlamaydigan punktni ko’rsating.`,
    rightAnswer: ` Dam olish punkiti `,
  },
  {
    name: `Transport masalasida  funksiya qanday nomlanadi?`,
    rightAnswer: ` Maqsad funksiyasi`,
  },
  {
    name: `Transport masalasida   funksiyasida  qanday nomlanadi?`,
    rightAnswer: ` Yuk tashish xarajatlari`,
  },
  {
    name: `Transport masalasida   funksiyasidagi  nimani anglatadi?`,
    rightAnswer: ` Tashiladigan yuklar hajmi`,
  },
  {
    name: `Ochiq masala qanday qilib yopiq masalaga keltiriladi?`,
    rightAnswer: ` Qo’shimcha punkt kiritish orqali`,
  },
  {
    name: `Transport masalasidagi tushunchalardan biri`,
    rightAnswer: `zanjir`,
  },
  {
    name: `Transport masalasidagi tushunchalardan birini toping`,
    rightAnswer: `sikl`,
  },
  {
    name: `Transport masalasidagi tushunchalardan birini toping`,
    rightAnswer: ` Plan`,
  },
  {
    name: `Transport masalasidagi sikl qanday ko’rinishda bo’ladi`,
    rightAnswer: ` Yopiq siniq chiziq`,
  },
  {
    name: `Transport masalasidagi zanjir qanday ko’rinishda bo’ladi`,
    rightAnswer: ` Ochiq siniq chiziq `,
  },
  {
    name: `Transport masalasida  boshlang’ich yechimni topish usullaridan biri`,
    rightAnswer: ` Shimoliy- g’arb usuli`,
  },
  {
    name: `Transport masalasidagi optimallik sharti`,
    rightAnswer: `Vj-Ui <= Cij`,
  },
  {
    name: `Transport masalasida belgilangan kataklar uchun qanday shart bajariladi`,
    rightAnswer: `Vj-Ui = Cij`,
  },
  {
    name: `Transport masalasida belgilangan kataklar uchun qanday shart bajariladi`,
    rightAnswer: `Vj - Ui = Cij`,
  },
  {
    name: `int a=20; if(a<0)cout<<a++; else cout<<a;  natija nechchi bo’ladi?`,
    rightAnswer: `20`,
  },
  {
    name: `int a=20; if(a>0)cout<<a++; else cout<<a;  natija nechchi bo’ladi?`,
    rightAnswer: `21`,
  },
  {
    name: `int a=-20; if(a<0)cout<<a++; else cout<<a;  natija nechchi bo’ladi?`,
    rightAnswer: `-21`,
  },
  {
    name: `int a=-20; if(a>0)cout<<a++; else cout<<a;  natija nechchi bo’ladi?`,
    rightAnswer: `-20`,
  },
  {
    name: `int i; for(i=2;i<=6;i=i+2) cout<<pow(i,2)<<endl; natijada ekranga …?`,
    rightAnswer: `4,16,36`,
  },
  {
    name: `int i; for(i=2;i<=6;i=i+2) cout<<i/2<<endl; natijada ekranga …?`,
    rightAnswer: `1,2,3`,
  },
  {
    name: `int a=-10; if(a<0)cout<<”musbat”; else cout<<a;  natija nechchi bo’ladi?`,
    rightAnswer: `musbat`,
  },
  {
    name: `int a=-9; if(a!=0)cout<<a++; else cout<<a;  natija nechchi bo’ladi?`,
    rightAnswer: `-10`,
  },
  {
    name: `int a=-12; if(a<0)cout<<pow(a,2); else cout<<a;  natija nechchi bo’ladi?`,
    rightAnswer: `144`,
  },
  {
    name: `int a=15; if(a>0)cout<< pow(a,2); else cout<<a;  natija nechchi bo’ladi?`,
    rightAnswer: `225`,
  },
  {
    name: `int i; for(i=1;i<=3;i++) cout<<i<<endl; natijada ekranga …?`,
    rightAnswer: `1,2,3`,
  },
  {
    name: `int i,a=10; for (i=1;i<=3;i++) cout<<a--<<endl; natijada ekranga …?`,
    rightAnswer: `10,9,8`,
  },
  {
    name: `int i,a=10; for(i=1;i<=3;i++) cout<<a++<<endl; natijada ekranga …?`,
    rightAnswer: `10,11,12`,
  },
  {
    name: `int i,a=10; for(i=1;i<=3;i++) cout<<a++<<endl; natijada ekranga …?`,
    rightAnswer: `10,11,12`,
  },
  {
    name: `int i,a=10; for(i=1;i<=3;i++) cout<<pow(a,2)<<endl; natijada ekranga …?`,
    rightAnswer: `100,81,64`,
  },
];

const filter = () => {
  list.innerHTML = "";

  const text = searchBar.value.toLowerCase();

  for (let icon of icons) {
    let name = icon.name.toLowerCase();

    if (name.indexOf(text) !== -1) {
      list.innerHTML += `	<div class="d-block mx-1 my-1">
														<div class="text-decoration-none px-3 py-2 d-flex align-items-center rounded">
                                                        <div class="quest"> 
                                                            <b>SAVOL: </b>${icon.name} 
                                                        </div>
                                                        <div class="asnwer">
                                                            <b>JAVOB: </b>${icon.rightAnswer} 
                                                        </div>
                                                        
                                                        
														</div>
													</div>`;
    }
  }

  if (list.innerHTML === "") {
    list.innerHTML += `<p> Icon not found. </p>`;
  }
};

filter();

searchBar.addEventListener("keyup", filter);
