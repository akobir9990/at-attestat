const searchBar = document.getElementById("search-bar");
const list = document.getElementById("list");

const icons = [
  {
    questionText: "Axborot bu - …",
    answerOptions: [
      {
        id: 1,
        answerText:
          "# Butun borliq, undagi roʼy beradigan hodisalar va jarayonlar xaqidagi xabar va maʼlumotlardir",
        isCorrect: true,
      },
      { id: 2, answerText: "Ma’lumotlar bazasi", isCorrect: false },
      { id: 3, answerText: "Ro’y beradigan hodisalar", isCorrect: false },
      { id: 4, answerText: "Jarayonlar haqidagi habar", isCorrect: false },
    ],
  },
  {
    questionText:
      "+Axborot- lotincha information so’zidan olingan bo’lib … degan ma’noni beradi.",
    answerOptions: [
      { id: 1, answerText: "# tushuntirish", isCorrect: true },
      { id: 2, answerText: "anglash", isCorrect: false },
      { id: 3, answerText: "ko’rsatish", isCorrect: false },
      { id: 4, answerText: "bilmaslik", isCorrect: false },
    ],
  },
  {
    questionText: "+Axborot asosan qanday turlarga bo’linadi?",
    answerOptions: [
      {
        id: 1,
        answerText:
          "#Matnli axborot,grafikli axborot, tovushli axborot, videolavhali axborot, belgili axborot, raqamli axborot.",
        isCorrect: true,
      },
      {
        id: 2,
        answerText:
          "Matnli axborot,grafikli axborot, tovushli axborot, videolavhali axborot.",
        isCorrect: false,
      },
      {
        id: 3,
        answerText:
          "Tovushli axborot, videolavhali axborot, belgili axborot, raqamli axborot.",
        isCorrect: false,
      },
      {
        id: 4,
        answerText:
          "Matnli axborot,grafikli axborot,belgili axborot, raqamli axborot.",
        isCorrect: false,
      },
    ],
  },
  {
    questionText:
      "+  Axborot kompyuter,planshet, mobil qurilma va boshqalarga qanday qabul qiladi va uzatadi?",
    answerOptions: [
      { id: 1, answerText: "#   ikkilik sanoq sistemasida", isCorrect: true },
      { id: 2, answerText: " o’nlik sanoq sistemasida", isCorrect: false },
      { id: 3, answerText: " o’n oltilik sanoq sistemasida", isCorrect: false },
      { id: 4, answerText: " beshlik sanoq sistemasida", isCorrect: false },
    ],
  },
  {
    questionText:
      "+Axborotlarni o’lchashda kompyuterda signalning borligi va yo’qligi qanday ifodalanadi?",
    answerOptions: [
      { id: 1, answerText: "#  1 va 0 orqali", isCorrect: true },
      { id: 2, answerText: " + va - orqali", isCorrect: false },
      { id: 3, answerText: " 1 va 2 orqali", isCorrect: false },
      { id: 4, answerText: " 2 va 3 orqali", isCorrect: false },
    ],
  },
  {
    questionText:
      "+Axborot katta hajmda bo’lganda uning sig’imini  ayni paytda qanday turlarda o’lchash mumkin,o’lchov birliklari?",
    answerOptions: [
      { id: 1, answerText: "#  Bit,Bayt, Kb,Mb,Gb,Tb,Pb", isCorrect: true },
      { id: 2, answerText: " Kb,Mb,Gb,Tb,Pb", isCorrect: false },
      { id: 3, answerText: " Bit,Bayt, Kb,Mb", isCorrect: false },
      { id: 4, answerText: " Bit,Bayt, Tb,Pb", isCorrect: false },
    ],
  },
  {
    questionText:
      "+Axborotni kompyuterga tashishga va saqlashga yordam beradigan vositalar - …",
    answerOptions: [
      {
        id: 1,
        answerText: "#  Kesh xotira,tezkor xotira,ichki xotira,tashqi xotira",
        isCorrect: true,
      },
      { id: 2, answerText: " Kesh xotira,tezkor xotira", isCorrect: false },
      { id: 3, answerText: " Ichki xotira,tashqi xotira", isCorrect: false },
      { id: 4, answerText: " Tezkor xotira,ichki xotira", isCorrect: false },
    ],
  },
  {
    questionText: "+Axborot texnologiyalari- ",
    answerOptions: [
      {
        id: 1,
        answerText:
          "#  Maʼlumotlarni boshqarish va qayta ishlash texnologiyalaridir",
        isCorrect: true,
      },
      {
        id: 2,
        answerText: " Qayta ishlash texnologiyalaridir",
        isCorrect: false,
      },
      { id: 3, answerText: " Uzatish texnologiyalaridir", isCorrect: false },
      { id: 4, answerText: " Anglash texnologiyalaridir", isCorrect: false },
    ],
  },
  {
    questionText:
      "+Kompyuter ishga tushgandan soʼng barcha dasturiy vositalarni ishlashini taʼminlab beruvchi xotira-bu…",
    answerOptions: [
      { id: 1, answerText: "#  Tezkor xotira", isCorrect: true },
      { id: 2, answerText: " Ichki xotira", isCorrect: false },
      { id: 3, answerText: " Tashqi xotira", isCorrect: false },
      { id: 4, answerText: " Kesh xotira", isCorrect: false },
    ],
  },
  {
    questionText:
      "+Foydalanuvchi tomonidan eng koʼp foydalanilgan axborot yoki dasturiy vositani oʼzida saqlab boruvchi xotira- bu …",
    answerOptions: [
      { id: 1, answerText: "#  Kesh xotira", isCorrect: true },
      { id: 2, answerText: " Tezkor xotira", isCorrect: false },
      { id: 3, answerText: " Ichki xotira", isCorrect: false },
      { id: 4, answerText: " Tashqi xotira", isCorrect: false },
    ],
  },
  {
    questionText:
      "+Axborot texnologiyalarining rivojlanishi qanday bosqichlarga bo’linadi?",
    answerOptions: [
      {
        id: 1,
        answerText:
          "#  Insonlar oʼrtasidagi ilk muloqot, muloqot o’rnatishda qurilmalardan foydalanish, mikro- sxemalarning paydo boʼlishi, hozirgi davr texnologiyalari",
        isCorrect: true,
      },
      { id: 2, answerText: " Premexanik,mexanik", isCorrect: false },
      { id: 3, answerText: " Elektromexanik,elektron", isCorrect: false },
      {
        id: 4,
        answerText:
          " Insonlar oʼrtasidagi ilk muloqot, muloqot o’rnatishda qurilmalardan foydalanish, mikro- sxemalarning paydo boʼlishi",
        isCorrect: false,
      },
    ],
  },
  {
    questionText:
      "+Telefon va telegraflardan axborot texnologiyalarning qaysi rivojlanish bosqichida foydalanilgan?",
    answerOptions: [
      { id: 1, answerText: "#  Elektromexanik", isCorrect: true },
      { id: 2, answerText: " Mexanik", isCorrect: false },
      { id: 3, answerText: " Elektron", isCorrect: false },
      { id: 4, answerText: " Peremexanik", isCorrect: false },
    ],
  },
  {
    questionText:
      "+Axborot texnologiyalarining qaysi rivojlanish bosqichida insonlar o’rtasida ilk muloqat  yuzaga kelgan?",
    answerOptions: [
      { id: 1, answerText: "#  Peremexanik", isCorrect: true },
      { id: 2, answerText: " Mexanik", isCorrect: false },
      { id: 3, answerText: " Elektromexanik", isCorrect: false },
      { id: 4, answerText: " Elektron", isCorrect: false },
    ],
  },
  {
    questionText:
      "+Axborot texnologiyalarining qaysi rivojlanish bosqichida  muloqot o’rnatishda qurilmalardan foydalanilgan?",
    answerOptions: [
      { id: 1, answerText: "#  Mexanik", isCorrect: true },
      { id: 2, answerText: " Peremexanik", isCorrect: false },
      { id: 3, answerText: " Elektromexanik", isCorrect: false },
      { id: 4, answerText: " Elektron", isCorrect: false },
    ],
  },
  {
    questionText:
      "+Axborot texnologiyalarining qaysi rivojlanish bosqichida  hozirgi davr texnologiyalaridan foydalanila boshlandi?",
    answerOptions: [
      { id: 1, answerText: "#  Elektron", isCorrect: true },
      { id: 2, answerText: " Mexanik", isCorrect: false },
      { id: 3, answerText: " Elektromexanik", isCorrect: false },
      { id: 4, answerText: " Peremexanik", isCorrect: false },
    ],
  },
  {
    questionText: "+Avtomatlashtirish- …",
    answerOptions: [
      {
        id: 1,
        answerText:
          "#  deganda inson ishtirokisiz biror bir mahsulotni ishlab chiqarish yoki xizmat kursatish tushuniladi",
        isCorrect: true,
      },
      { id: 2, answerText: " mahsulot ishlab chiqarish", isCorrect: false },
      { id: 3, answerText: " Yetkazib berish mahsulotni", isCorrect: false },
      { id: 4, answerText: " Xiamat ko’rsatish", isCorrect: false },
    ],
  },
  {
    questionText: "+  Ishlab chigarishni avtomatlashtirish-…",
    answerOptions: [
      {
        id: 1,
        answerText:
          "#  Mashinalashtirilgan ishlab chiqarishni nazorat qilish va boshqarish ishlarini avtomatik qurilmalar zimmasiga yuklash hisoblanadi",
        isCorrect: true,
      },
      {
        id: 2,
        answerText: " Ishlab chiqarishni insonlar bajaradi",
        isCorrect: false,
      },
      {
        id: 3,
        answerText: " Boshqarishni insonlar bajaradi",
        isCorrect: false,
      },
      {
        id: 4,
        answerText: " Ishlab chiqarish va boshqarishni inson bajaradi\t",
        isCorrect: false,
      },
    ],
  },
  {
    questionText: "+Ishlab chiqarishning …. bosqichlari bor.",
    answerOptions: [
      {
        id: 1,
        answerText: "#  Lokal,kompleks va to’la avtomatlashtirish",
        isCorrect: true,
      },
      { id: 2, answerText: " Qisman va yalpi", isCorrect: false },
      {
        id: 3,
        answerText: " Yalpi va to’la avtomatlashtirish",
        isCorrect: false,
      },
      {
        id: 4,
        answerText: " Lokal va to’la avtomatlashtirish",
        isCorrect: false,
      },
    ],
  },
  {
    questionText:
      "+Qo’llanish sohasiga qarab axborot tizimlarini qanday sinflarga ajratish mumkin:",
    answerOptions: [
      {
        id: 1,
        answerText:
          "#  Tashkiliy,Texnologik jaroyanlarni boshqarish,Loyihalashtirishni avtomatlashtirish,  Ilmiy tadqiqotlarni avtomatlashtirish va boshqarish",
        isCorrect: true,
      },
      {
        id: 2,
        answerText: " Tashkiliy,Texnologik jaroyanlarni boshqarish",
        isCorrect: false,
      },
      {
        id: 3,
        answerText: " Loyihalashtirishni avtomatlashtirish",
        isCorrect: false,
      },
      {
        id: 4,
        answerText:
          " Loyihalashtirishni avtomatlashtirish,  Ilmiy tadqiqotlarni avtomatlashtirish va boshqarish",
        isCorrect: false,
      },
    ],
  },
  {
    questionText:
      "+Аxborot-kommunikatsiya texnologiyalarini asosiy roli va ahamyatlaridan biri bu-",
    answerOptions: [
      {
        id: 1,
        answerText: "#  Aholini yaxshi yashash darajasini oshirish",
        isCorrect: true,
      },
      { id: 2, answerText: " Siyosatni rivojlantirish", isCorrect: false },
      { id: 3, answerText: " Dehqonchilikni rivojlantirish", isCorrect: false },
      {
        id: 4,
        answerText: " Aholini yaxshi yashash darajasini pasaytirish",
        isCorrect: false,
      },
    ],
  },
  {
    questionText:
      "+Аxborot-kommunikatsiya texnologiyalarini tatbiq etishdan maqsad-…",
    answerOptions: [
      {
        id: 1,
        answerText:
          "#  Iqtisodni rivojlantirish, Investitsiyalarni jalb qilish, Ish oʼrinlarini koʼpaytirish, Barqaror iqtisodiy oʼsish, Аholi yashash darajasini oshirish",
        isCorrect: true,
      },
      {
        id: 2,
        answerText: " Iqtisodni rivojlantirish, Investitsiyalarni jalb qilish",
        isCorrect: false,
      },
      {
        id: 3,
        answerText:
          " Investitsiyalarni jalb qilish, Ish oʼrinlarini koʼpaytirish",
        isCorrect: false,
      },
      {
        id: 4,
        answerText:
          " Barqaror iqtisodiy  oʼsish, Аholi yashash darajasini oshirish",
        isCorrect: false,
      },
    ],
  },
  {
    questionText:
      "+Axborot-kommunikatsiya texnologiyalarining asosi nimalardan tashkil topgan?",
    answerOptions: [
      { id: 1, answerText: "#  Sofrware,hardware,brainware", isCorrect: true },
      { id: 2, answerText: " Sofrware, brainware", isCorrect: false },
      { id: 3, answerText: " Hardware,brainware", isCorrect: false },
      { id: 4, answerText: " Sofrware,hardware", isCorrect: false },
    ],
  },
  {
    questionText:
      "+Kompyuter qaysi ta’minotsiz “quruq temir”ga aylanib qoladi?",
    answerOptions: [
      { id: 1, answerText: "#  software", isCorrect: true },
      { id: 2, answerText: " hardware", isCorrect: false },
      { id: 3, answerText: " brainware", isCorrect: false },
      { id: 4, answerText: " software, hardware", isCorrect: false },
    ],
  },
  {
    questionText: "+Software nechta guruhga bo’linadi?",
    answerOptions: [
      { id: 1, answerText: "#  Tizimli,amaliy va uskunaviy", isCorrect: true },
      { id: 2, answerText: " Tizimli va amaliy", isCorrect: false },
      { id: 3, answerText: " Amaliy va uskunaviy", isCorrect: false },
      { id: 4, answerText: " Tizimli va uskunaviy", isCorrect: false },
    ],
  },
  {
    questionText:
      "+Linux,ios,android,windows va boshqalar qanday dasturiy ta’minotga tegishli",
    answerOptions: [
      { id: 1, answerText: "#  Tizimli", isCorrect: true },
      { id: 2, answerText: " Amaliy", isCorrect: false },
      { id: 3, answerText: " Uskunaviy", isCorrect: false },
      { id: 4, answerText: "  Amaliy va tizimli", isCorrect: false },
    ],
  },
  {
    questionText:
      "+Foydalanuvchi  va qurilma o’rtasidagi muloqatni oʼrnatib beruvchi dasturiy mahsulotlar –bu …",
    answerOptions: [
      { id: 1, answerText: "#  Tizimli dasturiy ta’minot", isCorrect: true },
      { id: 2, answerText: " Amaliy  dasturiy ta’minot", isCorrect: false },
      { id: 3, answerText: " Uskunaviy dasturiy ta’minot", isCorrect: false },
      {
        id: 4,
        answerText: " Amaliy va tizimli dasturiy ta’minot",
        isCorrect: false,
      },
    ],
  },
  {
    questionText:
      "+Videoplayer, Office dasturlari paketi, grafik dasturlar, maʼlumotlar bazasi, antiviruslar, arxivatorlar  va boshqalar qanday dasturiy ta’minotga tegishli",
    answerOptions: [
      { id: 1, answerText: "#  Amaliy dasturiy ta’minot", isCorrect: true },
      { id: 2, answerText: " Tizimli dasturiy ta’minot", isCorrect: false },
      { id: 3, answerText: " Uskunaviy dasturiy ta’minot", isCorrect: false },
      { id: 4, answerText: " Tizimli va dasturiy ta’minot", isCorrect: false },
    ],
  },
  {
    questionText:
      "+JavaScript,Java,C++,Python,Delphi,visual studio va boshqa dasturlash tillari qanday dasturiy ta’minotga tegishli?",
    answerOptions: [
      { id: 1, answerText: "#  Uskunaviy", isCorrect: true },
      { id: 2, answerText: " Tizimli", isCorrect: false },
      { id: 3, answerText: " Amaliy", isCorrect: false },
      { id: 4, answerText: " Uskunaviy va amaliy", isCorrect: false },
    ],
  },
  {
    questionText:
      "+Muammoga yo’naltirilgan,sun’iy intellekt,kichik nashriyot ,umumiy maqsadli,multimediali va ofis  dasturiy ta’minot bilan qaysi dasturiy ta’minot tasniflanadi?",
    answerOptions: [
      { id: 1, answerText: "#  Amaliy", isCorrect: true },
      { id: 2, answerText: " Tizimli", isCorrect: false },
      { id: 3, answerText: " Uskunaviy", isCorrect: false },
      { id: 4, answerText: " Uskunaviy va amaliy", isCorrect: false },
    ],
  },
  {
    questionText: "+Muammoga yo’naltirilgan amaliy  dasturiy ta’minot-…",
    answerOptions: [
      {
        id: 1,
        answerText:
          "#  Buxgalteriya,shaxsiy va jarayonlarni boshqarish ,bank axborot tizimlarini va boshqalarni   elektron  ko’rinishda muammolari hal qilinadi",
        isCorrect: true,
      },
      {
        id: 2,
        answerText:
          " Faqat shaxsiy boshqarishni  elektron  ko’rinishda muammolari hal qilinadi",
        isCorrect: false,
      },
      {
        id: 3,
        answerText:
          " Faqat jarayonlar boshqarishni  elektron  ko’rinishda muammolari hal qilinadi",
        isCorrect: false,
      },
      {
        id: 4,
        answerText:
          " Faqat buxgalteriyani  elektron  ko’rinishda muammolari hal qilinadi",
        isCorrect: false,
      },
    ],
  },
  {
    questionText: "+Operatsion tizim -…",
    answerOptions: [
      {
        id: 1,
        answerText:
          "#  foydalanuvchi va qurilma oʼrtasidagi muloqotni taʼminlab beradigan vositadir",
        isCorrect: true,
      },
      {
        id: 2,
        answerText: " foydalanuvchiga muloqotni taʼminlab beradigan vositadir",
        isCorrect: false,
      },
      {
        id: 3,
        answerText: " qurilmaga muloqotni taʼminlab beradigan vositadir",
        isCorrect: false,
      },
      {
        id: 4,
        answerText: " robot bilan muloqotni taʼminlab beradigan vositadir",
        isCorrect: false,
      },
    ],
  },
  {
    questionText:
      "+Fayl tizimini boshqarish,dasturlar bajarilishini boshqarish, xotirani boshqarish va foydalanuvchi bilan muloqotni boshqarish nimaning asosiy vazifalari hisoblanadi?",
    answerOptions: [
      { id: 1, answerText: "#  operatsion tizim", isCorrect: true },
      { id: 2, answerText: " dasturlash tillari", isCorrect: false },
      { id: 3, answerText: "dasturlash tizimlari ", isCorrect: false },
      { id: 4, answerText: " axborot texnologiyalari", isCorrect: false },
    ],
  },
  {
    questionText: "+Operatsion tizimni qanday turkumlarga ajratish mumkin?",
    answerOptions: [
      {
        id: 1,
        answerText:
          "#  Kompyuter,mobil qurilmalar,robotlar va boshqa qurilmalar uchun",
        isCorrect: true,
      },
      {
        id: 2,
        answerText: " Faqat kompyuter qurilmalar uchun",
        isCorrect: false,
      },
      { id: 3, answerText: " Faqat mobil qurilmalar uchun", isCorrect: false },
      { id: 4, answerText: " Faqat robot qurilmalar uchun", isCorrect: false },
    ],
  },
  {
    questionText:
      "+Keltirilgan variantlarni qaysi birida operatsion tizim turlari keltriligan?",
    answerOptions: [
      { id: 1, answerText: "#  Windows,Linux,Android,IOS", isCorrect: true },
      { id: 2, answerText: " Windows,PowerPoint,Exsel", isCorrect: false },
      {
        id: 3,
        answerText: " Linux,Mac,Word,Outlook,OneNote",
        isCorrect: false,
      },
      { id: 4, answerText: " Android,IOS,Access,UNIX", isCorrect: false },
    ],
  },
  {
    questionText: "+Dasturlash tillari nechi xil ko’rinishga ega?",
    answerOptions: [
      {
        id: 1,
        answerText:
          "#  Web ,Kompyuter, Mobil qurilmalar , Qurilmalar uchun dasturlar",
        isCorrect: true,
      },
      {
        id: 2,
        answerText: " Mobil qurilmalar , Qurilmalar uchun dasturlar",
        isCorrect: false,
      },
      {
        id: 3,
        answerText: " Web ,Kompyuterlar uchun dasturlar",
        isCorrect: false,
      },
      {
        id: 4,
        answerText: " Kompyuter, Mobil qurilmalar uchun dasturlar",
        isCorrect: false,
      },
    ],
  },
  {
    questionText:
      "+Internetga ulanishda qaysi kabelning tezli yuqori hisoblanadi?",
    answerOptions: [
      { id: 1, answerText: "#  Optik tolali kabel", isCorrect: true },
      { id: 2, answerText: " Oddiy kabel", isCorrect: false },
      { id: 3, answerText: " Juft o’ramli kabel", isCorrect: false },
      { id: 4, answerText: " Juft o’ramli va oddiy kabel", isCorrect: false },
    ],
  },
  {
    questionText:
      "+…-yilda  ARPANETning AQSH ichidagi va rivojlangan davlatlardagi aloqa tarmoqlari bilan ulanishi boshlandi. Bu ulanish natijasida global komp’yter tarmog’i  INTERNET vujudga keldi",
    answerOptions: [
      { id: 1, answerText: "#  1977", isCorrect: true },
      { id: 2, answerText: " 1969", isCorrect: false },
      { id: 3, answerText: " 1972", isCorrect: false },
      { id: 4, answerText: " 1973", isCorrect: false },
    ],
  },
  {
    questionText:
      "+Asosiy dasturiy ta'minotga qo‘shimcha ravishda o‘rnatiladigan  dasturlar- bu …",
    answerOptions: [
      { id: 1, answerText: "#  Utilitalar", isCorrect: true },
      { id: 2, answerText: " amaliy dasturlar", isCorrect: false },
      { id: 3, answerText: " uskunaviy dasturlar", isCorrect: false },
      { id: 4, answerText: " tizimli dasturlar", isCorrect: false },
    ],
  },
  {
    questionText: "+Dasturlashni revolutsiyasi bo’lgan til –bu …",
    answerOptions: [
      { id: 1, answerText: "#  Simula tili", isCorrect: true },
      { id: 2, answerText: " C++", isCorrect: false },
      { id: 3, answerText: " Java tili", isCorrect: false },
      { id: 4, answerText: " SQL tili", isCorrect: false },
    ],
  },
  {
    questionText: "+Profissinallar tili-bu …",
    answerOptions: [
      { id: 1, answerText: "#  C/C++", isCorrect: true },
      { id: 2, answerText: " Java", isCorrect: false },
      { id: 3, answerText: " Basic", isCorrect: false },
      { id: 4, answerText: " Pascal", isCorrect: false },
    ],
  },
  {
    questionText: "+Internet kelajagi bo’lgan dasturlash tillari-bu…",
    answerOptions: [
      { id: 1, answerText: "#  Java,C#", isCorrect: true },
      { id: 2, answerText: " C++", isCorrect: false },
      { id: 3, answerText: " Pascal", isCorrect: false },
      { id: 4, answerText: " Delphi", isCorrect: false },
    ],
  },
  {
    questionText: "+Operatsion muhit o’z ichiga-… vositalar ta’minotini oladi.",
    answerOptions: [
      {
        id: 1,
        answerText:
          "#  Operatsion tizim, Dasturiy ta’minot, Amaliy dasturlar interfeyslari, Tarmoq xizmatlari, Ma’lumotlar  bazalari, Dasturlash tillari",
        isCorrect: true,
      },
      {
        id: 2,
        answerText:
          " Operatsion tizim, Dasturiy ta’minot, Amaliy dasturlar interfeyslari",
        isCorrect: false,
      },
      {
        id: 3,
        answerText:
          " Tarmoq xizmatlari, Ma’lumotlar  bazalari, Dasturlash tillari",
        isCorrect: false,
      },
      {
        id: 4,
        answerText:
          " Dasturiy ta’minot, Amaliy dasturlar interfeyslari, Tarmoq xizmatlari",
        isCorrect: false,
      },
    ],
  },
  {
    questionText: "+Algoritm- …",
    answerOptions: [
      {
        id: 1,
        answerText:
          "#  berilgan natijaga erishish uchun qilinishi kerak bo’lgan aniq ko’rsatmalar ketma-ketligi",
        isCorrect: true,
      },
      {
        id: 2,
        answerText: " bajariladigan ishning ketma ketligi",
        isCorrect: false,
      },
      {
        id: 3,
        answerText: " ketma ketlikda vazifani bajarish",
        isCorrect: false,
      },
      {
        id: 4,
        answerText: " jarayonni ketma ketlikda bajarish",
        isCorrect: false,
      },
    ],
  },
  {
    questionText: "+Algoritm so’zining kelib chiqish tarixi -…",
    answerOptions: [
      {
        id: 1,
        answerText: "#  Al-Xorazmiy ismining talaffusidan olingan",
        isCorrect: true,
      },
      {
        id: 2,
        answerText: " AbuAliibnSino  ismining talaffusidan olingan",
        isCorrect: false,
      },
      {
        id: 3,
        answerText: " Al-Farg’oniy ismining talaffusidan olingan",
        isCorrect: false,
      },
      {
        id: 4,
        answerText: " Abu Rayhon Beruniy ismining talaffusidan olingan",
        isCorrect: false,
      },
    ],
  },
  {
    questionText: "+Algoritm qanday xossalarga ega?",
    answerOptions: [
      {
        id: 1,
        answerText:
          "#  Aniqlilik,tushunarlilik,diskretlilik,natijaviylik,ommaviylik",
        isCorrect: true,
      },
      {
        id: 2,
        answerText: " Aniqlilik, diskretlilik,natijaviylik,ommaviylik",
        isCorrect: false,
      },
      {
        id: 3,
        answerText: " Aniqlilik,tushunarlilik,diskretlilik,natijaviylik",
        isCorrect: false,
      },
      {
        id: 4,
        answerText: " Tushunarlilik,diskretlilik,natijaviylik,ommaviylik",
        isCorrect: false,
      },
    ],
  },
  {
    questionText:
      "+Dasturchilar asosan algoritimni tasvirlash usullaridan qaysi biridan ko’proq foydalaniladi?",
    answerOptions: [
      { id: 1, answerText: "#  Grafik shaklidan", isCorrect: true },
      { id: 2, answerText: " Og’izdagi ifodalash", isCorrect: false },
      { id: 3, answerText: "  Formulalar bilan ifodalash", isCorrect: false },
      { id: 4, answerText: " Jadval ko’rinishida ifodalash", isCorrect: false },
    ],
  },
  {
    questionText:
      "+Matematiklar asosan algoritmni tasvirlash usullaridan qaysi biridan ko’proq foydalaniladi?",
    answerOptions: [
      {
        id: 1,
        answerText: "#  Formulalar va jadval ko’rinishida ifodalash",
        isCorrect: true,
      },
      { id: 2, answerText: " Og’izdagi ifodalash", isCorrect: false },
      { id: 3, answerText: " Grafik shaklidan", isCorrect: false },
      { id: 4, answerText: " Jadval ko’rinishida ifodalash", isCorrect: false },
    ],
  },
  {
    questionText: "+Algoritm turlari … mavjud.",
    answerOptions: [
      {
        id: 1,
        answerText: "#  Chizig’li,tarmoqlanuvchi va takrorlanuvchi",
        isCorrect: true,
      },
      { id: 2, answerText: " Chizig’li va tarmoqlanuvchi", isCorrect: false },
      {
        id: 3,
        answerText: " Tarmoqlanuvchi va takrorlanuvchi",
        isCorrect: false,
      },
      { id: 4, answerText: " Chizig’li va takrorlanuvchi", isCorrect: false },
    ],
  },
  {
    questionText: "+Chizig’li algoritm –bu…\t",
    answerOptions: [
      {
        id: 1,
        answerText:
          "#   Berilgan masalani hech qanday ikkilanishsiz masalani algoritmini tuzish",
        isCorrect: true,
      },
      { id: 2, answerText: "Berilgan masalani yechish", isCorrect: false },
      {
        id: 3,
        answerText: "Berilgan masalani ikkilanib yechish",
        isCorrect: false,
      },
      {
        id: 4,
        answerText: "Berilgan masalada jarayonlarni takrorlanib yechish",
        isCorrect: false,
      },
    ],
  },
  {
    questionText: "+Microsoft Excel dasturi  … uchun qo’llaniladi.",
    answerOptions: [
      {
        id: 1,
        answerText:
          "#   jadval shaklidagi masalalarni yechish va tahlil qilish",
        isCorrect: true,
      },
      {
        id: 2,
        answerText: "   matn ko’rinishida masalalarni tahrirlash",
        isCorrect: false,
      },
      {
        id: 3,
        answerText: "   taqdimot ko’rinishida tahlash",
        isCorrect: false,
      },
      { id: 4, answerText: "   berilganlarni tahrirlash", isCorrect: false },
    ],
  },
  {
    questionText: "+Microsoft Excel 2010 ning asosiy ish maydoni – bu ...",
    answerOptions: [
      { id: 1, answerText: "#   ish varag`idir", isCorrect: true },
      { id: 2, answerText: "yangi sahifadir", isCorrect: false },
      { id: 3, answerText: "yangi slayd", isCorrect: false },
      { id: 4, answerText: "ish maydonidir", isCorrect: false },
    ],
  },
  {
    questionText: "+Microsoft Excel da satr va ustun kesishmasi- … deyiladi.",
    answerOptions: [
      { id: 1, answerText: "#   yacheyka", isCorrect: true },
      { id: 2, answerText: "ustun", isCorrect: false },
      { id: 3, answerText: "satr", isCorrect: false },
      { id: 4, answerText: "qator", isCorrect: false },
    ],
  },
  {
    questionText:
      "+Microsoft Excel da kursor yacheykada necha xil ko’rinishga ega?",
    answerOptions: [
      { id: 1, answerText: "#   3 xil", isCorrect: true },
      { id: 2, answerText: "4 xil", isCorrect: false },
      { id: 3, answerText: "5 xil", isCorrect: false },
      { id: 4, answerText: "2 xil", isCorrect: false },
    ],
  },
  {
    questionText:
      "+Berilgan masalaning algoritmini tuzishda eng asosiy jarayon qaysi xossasida sodir bo’ladi?",
    answerOptions: [
      { id: 1, answerText: "#   Tushunarlilik va Aniqlilik", isCorrect: true },
      { id: 2, answerText: "Natijaviylik", isCorrect: false },
      { id: 3, answerText: "Ommaviylik", isCorrect: false },
      { id: 4, answerText: "Diskretlilik", isCorrect: false },
    ],
  },
  {
    questionText: "+Dasturlash tizimlariga quydagilar kiradi-…",
    answerOptions: [
      {
        id: 1,
        answerText:
          "#   Translyatorlar, Boshqaruvchi dasturlar, Redaktorlar, Jamlagichlar,Yuklovchilar, Otladchiklar",
        isCorrect: true,
      },
      {
        id: 2,
        answerText: "Boshqaruvchi dasturlar, Redaktorlar",
        isCorrect: false,
      },
      { id: 3, answerText: "Redaktorlar, Jamlagichlar", isCorrect: false },
      {
        id: 4,
        answerText: "Jamlagichlar,Yuklovchilar, Otladchiklar",
        isCorrect: false,
      },
    ],
  },
  {
    questionText: "+Dasturlarga xizmat ko’rsatuvchi tizimlar- bu …",
    answerOptions: [
      {
        id: 1,
        answerText:
          "#   maxsus servis dasturlar bo’lib, ular yordamida operatsion tizimni boshqarish mumkin",
        isCorrect: true,
      },
      {
        id: 2,
        answerText:
          "dasturlash tilidagi kiruvchi dastur matnini unga ekvivalent bo’lgan chiqishdagi natijaviy tilga o’giradi",
        isCorrect: false,
      },
      {
        id: 3,
        answerText:
          "dastur matnini unga ekvivalent bo’lgan mashina kodiga o’giradi",
        isCorrect: false,
      },
      {
        id: 4,
        answerText:
          "dastur matnini birdaniga qabul qiladi va bajaradi (natijaviy kodi bo’lmaydi)",
        isCorrect: false,
      },
    ],
  },
  {
    questionText: "+TRANSLYATOR-…",
    answerOptions: [
      {
        id: 1,
        answerText:
          "#   dasturlash tilidagi kiruvchi dastur matnini unga ekvivalent bo’lgan chiqishdagi natijaviy tilga o’giradi",
        isCorrect: true,
      },
      {
        id: 2,
        answerText:
          "maxsus servis dasturlar bo’lib, ular yordamida operatsion tizimni boshqarish mumkin",
        isCorrect: false,
      },
      {
        id: 3,
        answerText:
          "dastur matnini unga ekvivalent bo’lgan mashina kodiga o’giradi",
        isCorrect: false,
      },
      {
        id: 4,
        answerText:
          "dastur matnini birdaniga qabul qiladi va bajaradi (natijaviy kodi bo’lmaydi)",
        isCorrect: false,
      },
    ],
  },
  {
    questionText: "+KOMPILYATOR- …",
    answerOptions: [
      {
        id: 1,
        answerText:
          "#   dastur matnini unga ekvivalent bo’lgan mashina kodiga o’giradi",
        isCorrect: true,
      },
      {
        id: 2,
        answerText:
          "dastur matnini birdaniga qabul qiladi va bajaradi (natijaviy kodi bo’lmaydi)",
        isCorrect: false,
      },
      {
        id: 3,
        answerText:
          "maxsus servis dasturlar bo’lib, ular yordamida operatsion tizimni boshqarish mumkin",
        isCorrect: false,
      },
      {
        id: 4,
        answerText:
          "dasturlash tilidagi kiruvchi dastur matnini unga ekvivalent bo’lgan chiqishdagi natijaviy tilga o’giradi",
        isCorrect: false,
      },
    ],
  },
  {
    questionText: "+INTERPRETATOR-…",
    answerOptions: [
      {
        id: 1,
        answerText:
          "#   dastur matnini birdaniga qabul qiladi va bajaradi (natijaviy kodi bo’lmaydi)",
        isCorrect: true,
      },
      {
        id: 2,
        answerText:
          "dasturlash tilidagi kiruvchi dastur matnini unga ekvivalent bo’lgan chiqishdagi natijaviy tilga o’giradi",
        isCorrect: false,
      },
      {
        id: 3,
        answerText:
          "maxsus servis dasturlar bo’lib, ular yordamida operatsion tizimni boshqarish mumkin",
        isCorrect: false,
      },
      {
        id: 4,
        answerText:
          "dastur matnini unga ekvivalent bo’lgan mashina kodiga o’giradi",
        isCorrect: false,
      },
    ],
  },
  {
    questionText: "+Leksik tahlil-…",
    answerOptions: [
      {
        id: 1,
        answerText:
          "#   dastur literalarini oʼqiydi va ular orqali kiruvchi til leksemalarini koʼradi",
        isCorrect: true,
      },
      {
        id: 2,
        answerText: "tilning sintaksis konstruktsiyalarini ajratadi",
        isCorrect: false,
      },
      {
        id: 3,
        answerText:
          "kiruvchi til semantikasi nuqtai nazaridan dastur matnini tekshiradi",
        isCorrect: false,
      },
      {
        id: 4,
        answerText:
          "natijaviy dasturning sintezi bilan bogʼlik boʼlgan harakatlarga tayyorgarlik bajariladi",
        isCorrect: false,
      },
    ],
  },
  {
    questionText:
      "+natijaviy dasturning sintezi bilan bogʼlik boʼlgan harakatlarga tayyorgarlik bajariladi",
    answerOptions: [
      {
        id: 1,
        answerText:
          "#   tilning sintaksis konstruktsiyalarini ajratadi va kiruvchi til semantikasi nuqtai nazaridan dastur matnini tekshiradi",
        isCorrect: true,
      },
      {
        id: 2,
        answerText:
          "natijaviy dasturning sintezi bilan bogʼlik boʼlgan harakatlarga tayyorgarlik bajariladi",
        isCorrect: false,
      },
      {
        id: 3,
        answerText:
          "natijaviy kodni bevosita xosil etish – kodni optimizatsiyalashni o’z ichiga olgan asosiy faza",
        isCorrect: false,
      },
      {
        id: 4,
        answerText:
          "kiruvchi dastur elementlari haqidagi maʼlumotlarni saqlovchi berilganlar to’plami",
        isCorrect: false,
      },
    ],
  },
  {
    questionText: "+Kodni generatsiyalash-…",
    answerOptions: [
      {
        id: 1,
        answerText:
          "#   natijaviy kodni bevosita xosil etish – kodni optimizatsiyalashni o’z ichiga olgan asosiy faza",
        isCorrect: true,
      },
      {
        id: 2,
        answerText:
          "kiruvchi dastur elementlari haqidagi maʼlumotlarni saqlovchi berilganlar to’plami",
        isCorrect: false,
      },
      {
        id: 3,
        answerText:
          "kiruvchi til semantikasi nuqtai nazaridan dastur matnini tekshiradi",
        isCorrect: false,
      },
      {
        id: 4,
        answerText:
          "bu tashqi xotiradan berilganlarni oxirgi o’qish jarayoni, ularni qayta ishlash va tashqi xotiraga joylashtirish",
        isCorrect: false,
      },
    ],
  },
  {
    questionText: "+Assembler-…",
    answerOptions: [
      {
        id: 1,
        answerText:
          "#    biron bir mashinaga mo’ljallangan dasturlash tilida yozilgan dastur matnini obʼyekt kodiga aylantirish uchun mo’ljallangan",
        isCorrect: true,
      },
      {
        id: 2,
        answerText:
          "kiritiladigan matn simvollarini makroo’zgartirish qoidalari asosida o’zgartiruvchi dastur",
        isCorrect: false,
      },
      {
        id: 3,
        answerText:
          "aloqa redaktori chegarasida barcha adress yo’nalishlari yagona adreslar fazasiga joylashtiriladi",
        isCorrect: false,
      },
      {
        id: 4,
        answerText:
          "kiruvchi dastur elementlari haqidagi maʼlumotlarni saqlovchi berilganlar to’plami\t",
        isCorrect: false,
      },
    ],
  },
  {
    questionText: "+Aloqa redaktorlari-…",
    answerOptions: [
      {
        id: 1,
        answerText:
          "#   Аssembler yordamida alohida olingan obʼekt modullarini yagona modulga birlashtirishga mo’ljallangan",
        isCorrect: true,
      },
      {
        id: 2,
        answerText:
          "kiritiladigan matn simvollarini makroo’zgartirish qoidalari asosida o’zgartiruvchi dastur",
        isCorrect: false,
      },
      {
        id: 3,
        answerText: "bir tilda yozilgan matnni boshqa tilga o’giradilar",
        isCorrect: false,
      },
      {
        id: 4,
        answerText:
          "bir yuqori daraja dasturlash tilida yozilgan dastur matnini boshqa yuqori daraja dasturlash tiliga aylantirish uchun mo’ljallangan",
        isCorrect: false,
      },
    ],
  },
  {
    questionText: "+Makroprotssesorlar- …",
    answerOptions: [
      {
        id: 1,
        answerText:
          "#   kiritiladigan matn simvollarini makroo’zgartirish qoidalari asosida o’zgartiruvchi dastur",
        isCorrect: true,
      },
      {
        id: 2,
        answerText:
          "bir yuqori daraja dasturlash tilida yozilgan dastur matnini boshqa yuqori daraja dasturlash tiliga aylantirish uchun mo’ljallangan",
        isCorrect: false,
      },
      {
        id: 3,
        answerText:
          "bu mashina kodlaridagi dasturni assembler ko’rinishiga oʼzgartiradigan dastur",
        isCorrect: false,
      },
      {
        id: 4,
        answerText:
          "asosiy hisoblash muhitidan dasturlarni olib  komp’yterda mashina kodlarida ifodalash uchun qoʼllaniladi",
        isCorrect: false,
      },
    ],
  },
  {
    questionText: "+Translyator-…",
    answerOptions: [
      {
        id: 1,
        answerText: "#   bir tilda yozilgan matnni boshqa tilga o’giradilar",
        isCorrect: true,
      },
      {
        id: 2,
        answerText:
          "kiritiladigan matn simvollarini makroo’zgartirish qoidalari asosida o’zgartiruvchi dastur",
        isCorrect: false,
      },
      {
        id: 3,
        answerText:
          "asosiy hisoblash muhitidan dasturlarni olib  komp’yterda mashina kodlarida ifodalash uchun qoʼllaniladi",
        isCorrect: false,
      },
      {
        id: 4,
        answerText:
          "bu mashina kodlaridagi dasturni assembler ko’rinishiga oʼzgartiradigan dastur",
        isCorrect: false,
      },
    ],
  },
  {
    questionText: "+Translyatorni qanday turlarini ajratib ko’rsatish mumkin?",
    answerOptions: [
      {
        id: 1,
        answerText: "#   til konvertorlari,disassembler,kross tizim",
        isCorrect: true,
      },
      { id: 2, answerText: "assembler", isCorrect: false },
      { id: 3, answerText: "makroprotsessorlar", isCorrect: false },
      { id: 4, answerText: "aloqa redaktorlari", isCorrect: false },
    ],
  },
  {
    questionText:
      "+Gentee, Basic, Gbasic, Fortran va boshqalar qanday dasturlash tillari hisoblanadi?",
    answerOptions: [
      { id: 1, answerText: "#   yuqori darajadagi tillar", isCorrect: true },
      {
        id: 2,
        answerText: "ob’yektga yo’naltirilgan tillar",
        isCorrect: false,
      },
      { id: 3, answerText: "assembler tillar", isCorrect: false },
      { id: 4, answerText: "assembler tillar", isCorrect: false },
    ],
  },
  {
    questionText:
      "+Pascal, Delphi, C#, Java, C++, Visual Basic, ActionScript, Python, Ruby va boshqalar qanday  dasturlash tillari hisoblanadi?",
    answerOptions: [
      {
        id: 1,
        answerText: "#   ob’yektga yo’naltirilgan dasturlash tillari",
        isCorrect: true,
      },
      { id: 2, answerText: "yuqori darajadagi tillar", isCorrect: false },
      { id: 3, answerText: "assembler tillar", isCorrect: false },
      { id: 4, answerText: "oddiy dasturlash tillari", isCorrect: false },
    ],
  },
  {
    questionText: "+Quyi darajadagi tillar-…",
    answerOptions: [
      {
        id: 1,
        answerText:
          "#   bu asosan tizimlar uchun yoziladigan dasturlash tillari hisoblanadi",
        isCorrect: true,
      },
      {
        id: 2,
        answerText:
          "Class(sinf) tushunchasi bilan bogʼliq boʼlgan dasturlash usulidir",
        isCorrect: false,
      },
      {
        id: 3,
        answerText: "asosan ochiq kodli dasturlash tillariga aytiladi",
        isCorrect: false,
      },
      {
        id: 4,
        answerText:
          "maʼlum bir vazifani bajarish uchun komp’yuter tiliga oʼgiruvchi dasturlash tillaridur",
        isCorrect: false,
      },
    ],
  },
  {
    questionText: "+Dasturlash tillari deb-…",
    answerOptions: [
      {
        id: 1,
        answerText:
          "#   maʼlum bir vazifani bajarish uchun komp’yuter tiliga oʼgiruvchi dasturlash tillaridur",
        isCorrect: true,
      },
      {
        id: 2,
        answerText:
          "bu asosan tizimlar uchun yoziladigan dasturlash tillari hisoblanadi",
        isCorrect: false,
      },
      {
        id: 3,
        answerText:
          "Class(sinf) tushunchasi bilan bogʼliq boʼlgan dasturlash usulidir",
        isCorrect: false,
      },
      {
        id: 4,
        answerText: "asosan ochiq kodli dasturlash tillariga aytiladi",
        isCorrect: false,
      },
    ],
  },
  {
    questionText: "+Ob’yektga yo’naltirilgan tillar-…",
    answerOptions: [
      {
        id: 1,
        answerText:
          "#   Class(sinf) tushunchasi bilan bogʼliq boʼlgan dasturlash usulidir",
        isCorrect: true,
      },
      {
        id: 2,
        answerText:
          "maʼlum bir vazifani bajarish uchun komp’yuter tiliga oʼgiruvchi dasturlash tillaridur",
        isCorrect: false,
      },
      {
        id: 3,
        answerText:
          "bu asosan tizimlar uchun yoziladigan dasturlash tillari hisoblanadi",
        isCorrect: false,
      },
      {
        id: 4,
        answerText: "asosan ochiq kodli dasturlash tillariga aytiladi",
        isCorrect: false,
      },
    ],
  },
  {
    questionText: "+Yuqori darajadagi tillar-…",
    answerOptions: [
      {
        id: 1,
        answerText: "#   asosan ochiq kodli dasturlash tillariga aytiladi",
        isCorrect: true,
      },
      {
        id: 2,
        answerText:
          "Class(sinf) tushunchasi bilan bogʼliq boʼlgan dasturlash usulidir",
        isCorrect: false,
      },
      {
        id: 3,
        answerText:
          "maʼlum bir vazifani bajarish uchun komp’yuter tiliga oʼgiruvchi dasturlash tillaridur",
        isCorrect: false,
      },
      {
        id: 4,
        answerText:
          "bu asosan tizimlar uchun yoziladigan dasturlash tillari hisoblanadi",
        isCorrect: false,
      },
    ],
  },
  {
    questionText:
      "+PHP, ASP.NET, Perl, CMS, Framework va boshqa shu kabi dasturlar qanday dasturlash tillari hisoblanadi?",
    answerOptions: [
      { id: 1, answerText: "#   Web dasturlash tillari", isCorrect: true },
      {
        id: 2,
        answerText: "ob’yektga yo’naltirilgan dasturlash tillari",
        isCorrect: false,
      },
      { id: 3, answerText: "yuqori darajadagi tillar", isCorrect: false },
      { id: 4, answerText: "oddiy dasturlash tillari", isCorrect: false },
    ],
  },
  {
    questionText: "+Web dasturlash tillar-…",
    answerOptions: [
      {
        id: 1,
        answerText:
          "#   Internetda ishlaydigan veb-saytlar, portallar va boshqa ilovalarni yaratishga moʼljallangan dasturlash tillaridir",
        isCorrect: true,
      },
      {
        id: 2,
        answerText: "asosan ochiq kodli dasturlash tillariga aytiladi",
        isCorrect: false,
      },
      {
        id: 3,
        answerText:
          "Class(sinf) tushunchasi bilan bogʼliq boʼlgan dasturlash usulidir",
        isCorrect: false,
      },
      {
        id: 4,
        answerText:
          "maʼlum bir vazifani bajarish uchun komp’yuter tiliga oʼgiruvchi dasturlash tillaridur",
        isCorrect: false,
      },
    ],
  },
  {
    questionText: "+C++ dasturlash tili qaysi tilga asoslangan?",
    answerOptions: [
      { id: 1, answerText: "#   C tiliga", isCorrect: true },
      { id: 2, answerText: "Java tili", isCorrect: false },
      { id: 3, answerText: "Python tili", isCorrect: false },
      { id: 4, answerText: "Java Script tili", isCorrect: false },
    ],
  },
  {
    questionText: "+C++ tilida ma’lumotlarning elementlari bo’lib…",
    answerOptions: [
      {
        id: 1,
        answerText: "#   O’zgaruvchilar,o’zgarmaslar va izohlar",
        isCorrect: true,
      },
      { id: 2, answerText: "Xizmatchi so’z ", isCorrect: false },
      { id: 3, answerText: "Int,float,char ", isCorrect: false },
      { id: 4, answerText: "Izohlar ", isCorrect: false },
    ],
  },
  {
    questionText: "+C++ tilida o’zgaruvchilar-…",
    answerOptions: [
      {
        id: 1,
        answerText:
          "#    xotiraning nomlangan qismi boʼlib, oʼzida maʼlum bir toifadagi qiymatlarni saqlaydi",
        isCorrect: true,
      },
      {
        id: 2,
        answerText: "bir nechta belgilar ketma-ketligi tushuniladi",
        isCorrect: false,
      },
      {
        id: 3,
        answerText:
          "programmaning maʼlum qismini tavsiflash uchun ishlatiladi va bu qatorda hech qanday amal bajarilmaydi",
        isCorrect: false,
      },
      {
        id: 4,
        answerText:
          "hisoblash jarayonida qiymatini oʼzgartirmaydigan kataliklarga aytiladi",
        isCorrect: false,
      },
    ],
  },
  {
    questionText: "+C++ tilida o’zgarmaslar-…",
    answerOptions: [
      {
        id: 1,
        answerText:
          "#   hisoblash jarayonida qiymatini oʼzgartirmaydigan kataliklarga aytiladi",
        isCorrect: true,
      },
      {
        id: 2,
        answerText:
          "xotiraning nomlangan qismi boʼlib, oʼzida maʼlum bir toifadagi qiymatlarni saqlaydi",
        isCorrect: false,
      },
      {
        id: 3,
        answerText: "bir nechta belgilar ketma-ketligi tushuniladi",
        isCorrect: false,
      },
      {
        id: 4,
        answerText:
          "programmaning maʼlum qismini tavsiflash uchun ishlatiladi va bu qatorda hech qanday amal bajarilmaydi",
        isCorrect: false,
      },
    ],
  },
  {
    questionText: "+C++ tilida izohlar-…",
    answerOptions: [
      {
        id: 1,
        answerText:
          "#   programmaning maʼlum qismini tavsiflash uchun ishlatiladi va bu qatorda hech qanday amal bajarilmaydi\t",
        isCorrect: true,
      },
      {
        id: 2,
        answerText:
          "hisoblash jarayonida qiymatini oʼzgartirmaydigan kataliklarga aytiladi",
        isCorrect: false,
      },
      {
        id: 3,
        answerText:
          "xotiraning nomlangan qismi boʼlib, oʼzida maʼlum bir toifadagi qiymatlarni saqlaydi",
        isCorrect: false,
      },
      {
        id: 4,
        answerText: "bir nechta belgilar ketma-ketligi tushuniladi",
        isCorrect: false,
      },
    ],
  },
  {
    questionText: "+C/C++ tilida arifmetik operatorlar-…",
    answerOptions: [
      {
        id: 1,
        answerText:
          "#   bu oʼzgaruvchi yoki qiymatlarda arifmetik(matematik) amallarni bajarish uchun ishlatiladigan operatorlar",
        isCorrect: true,
      },
      {
        id: 2,
        answerText:
          "ikkita oʼzgaruvchi qiymatlarini taqqoslash uchun ishlatiladi",
        isCorrect: false,
      },
      {
        id: 3,
        answerText:
          "oʼzgaruvchilarda bit darajasidagi amallarni bajarish uchun ishlatiladi",
        isCorrect: false,
      },
      {
        id: 4,
        answerText:
          "ikki yoki undan koʼp shartlarni, cheklovlarni birlashtirish yoki koʼrib chiqilayotganda asl holatni baholashni toʼldirish uchun ishlatiladi",
        isCorrect: false,
      },
    ],
  },
  {
    questionText: "+C/C++ tilida relyatsion operatorlar-…",
    answerOptions: [
      {
        id: 1,
        answerText:
          "#   ikkita oʼzgaruvchi qiymatlarini taqqoslash uchun ishlatiladi",
        isCorrect: true,
      },
      {
        id: 2,
        answerText:
          "bu oʼzgaruvchi yoki qiymatlarda arifmetik(matematik) amallarni bajarish uchun ishlatiladigan operatorlar",
        isCorrect: false,
      },
      {
        id: 3,
        answerText:
          "oʼzgaruvchilarda bit darajasidagi amallarni bajarish uchun ishlatiladi",
        isCorrect: false,
      },
      {
        id: 4,
        answerText:
          "ikki yoki undan koʼp shartlarni, cheklovlarni birlashtirish yoki koʼrib chiqilayotganda asl holatni baholashni toʼldirish uchun ishlatiladi",
        isCorrect: false,
      },
    ],
  },
  {
    questionText: "+C/C++ tilida mantiqiy operatorlar-…",
    answerOptions: [
      {
        id: 1,
        answerText:
          "#   ikki yoki undan koʼp shartlarni, cheklovlarni birlashtirish yoki koʼrib chiqilayotganda asl holatni baholashni toʼldirish uchun ishlatiladi",
        isCorrect: true,
      },
      {
        id: 2,
        answerText:
          "ikkita oʼzgaruvchi qiymatlarini taqqoslash uchun ishlatiladi",
        isCorrect: false,
      },
      {
        id: 3,
        answerText:
          "bu oʼzgaruvchi yoki qiymatlarda arifmetik(matematik) amallarni bajarish uchun ishlatiladigan operatorlar",
        isCorrect: false,
      },
      {
        id: 4,
        answerText:
          "oʼzgaruvchilarda bit darajasidagi amallarni bajarish uchun ishlatiladi",
        isCorrect: false,
      },
    ],
  },
  {
    questionText: "+C/C++ tilida bitwise operatorlar-…",
    answerOptions: [
      {
        id: 1,
        answerText:
          "#   oʼzgaruvchilarda bit darajasidagi amallarni bajarish uchun ishlatiladi",
        isCorrect: true,
      },
      {
        id: 2,
        answerText:
          "ikki yoki undan koʼp shartlarni, cheklovlarni birlashtirish yoki koʼrib chiqilayotganda asl holatni baholashni toʼldirish uchun ishlatiladi",
        isCorrect: false,
      },
      {
        id: 3,
        answerText:
          "ikkita oʼzgaruvchi qiymatlarini taqqoslash uchun ishlatiladi",
        isCorrect: false,
      },
      {
        id: 4,
        answerText:
          "bu oʼzgaruvchi yoki qiymatlarda arifmetik(matematik) amallarni bajarish uchun ishlatiladigan operatorlar",
        isCorrect: false,
      },
    ],
  },
  {
    questionText: "+C/C++ tilida belgilish operatorlari-…",
    answerOptions: [
      {
        id: 1,
        answerText: "#   oʼzgaruvchiga qiymat berish uchun ishlatiladi",
        isCorrect: true,
      },
      {
        id: 2,
        answerText:
          "ikki yoki undan koʼp shartlarni, cheklovlarni birlashtirish yoki koʼrib chiqilayotganda asl holatni baholashni toʼldirish uchun ishlatiladi",
        isCorrect: false,
      },
      {
        id: 3,
        answerText:
          "ikkita oʼzgaruvchi qiymatlarini taqqoslash uchun ishlatiladi",
        isCorrect: false,
      },
      {
        id: 4,
        answerText:
          "bu oʼzgaruvchi yoki qiymatlarda arifmetik(matematik) amallarni bajarish uchun ishlatiladigan operatorlar",
        isCorrect: false,
      },
    ],
  },
  {
    questionText: "+C/C++ tilida qo’shimcha operatorlar-…",
    answerOptions: [
      {
        id: 1,
        answerText:
          "#   yuqoridagi operatorlardan tashqari baʼzi bir muayyan vazifani bajarish uchun ishlatiladigan C yoki C++ da baʼzi boshqa operatorlar mavjud",
        isCorrect: true,
      },
      {
        id: 2,
        answerText:
          "ikki yoki undan koʼp shartlarni, cheklovlarni birlashtirish yoki koʼrib chiqilayotganda asl holatni baholashni toʼldirish uchun ishlatiladi",
        isCorrect: false,
      },
      {
        id: 3,
        answerText:
          "ikkita oʼzgaruvchi qiymatlarini taqqoslash uchun ishlatiladi",
        isCorrect: false,
      },
      {
        id: 4,
        answerText:
          "bu oʼzgaruvchi yoki qiymatlarda arifmetik(matematik) amallarni bajarish uchun ishlatiladigan operatorlar",
        isCorrect: false,
      },
    ],
  },
  {
    questionText: "+C++ dasturlash tilida idenfikatorlar -…",
    answerOptions: [
      {
        id: 1,
        answerText:
          "#   bu dasturchi tomonidan kiritiladigan dastur elementlari (funktsiya, oʼzgaruvchilar, oʼzgarmaslar …) uchun ixtiyoriy nom",
        isCorrect: true,
      },
      {
        id: 2,
        answerText:
          "bu oʼzgaruvchi yoki qiymatlarda arifmetik(matematik) amallarni bajarish uchun ishlatiladigan operatorlar",
        isCorrect: false,
      },
      {
        id: 3,
        answerText:
          "oʼzgaruvchilarda bit darajasidagi amallarni bajarish uchun ishlatiladi",
        isCorrect: false,
      },
      {
        id: 4,
        answerText:
          "ikki yoki undan koʼp shartlarni, cheklovlarni birlashtirish yoki koʼrib chiqilayotganda asl holatni baholashni toʼldirish uchun ishlatiladi",
        isCorrect: false,
      },
    ],
  },
  {
    questionText: "+C++ dasturlash tilida direktivalarni chaqirish-…",
    answerOptions: [
      {
        id: 1,
        answerText: "#   funktsiyalar kutubxonasini chaqirish",
        isCorrect: true,
      },
      {
        id: 2,
        answerText:
          "bu dasturchi tomonidan kiritiladigan dastur elementlari (funktsiya, oʼzgaruvchilar, oʼzgarmaslar …) uchun ixtiyoriy nom",
        isCorrect: false,
      },
      {
        id: 3,
        answerText:
          "oʼzgaruvchilarda bit darajasidagi amallarni bajarish uchun ishlatiladi",
        isCorrect: false,
      },
      {
        id: 4,
        answerText:
          "ikki yoki undan koʼp shartlarni, cheklovlarni birlashtirish yoki koʼrib chiqilayotganda asl holatni baholashni toʼldirish uchun ishlatiladi",
        isCorrect: false,
      },
    ],
  },
  {
    questionText:
      "+C++ tilida to’g’ri chaqirilgan kutubxonani javobdan tanlang ",
    answerOptions: [
      { id: 1, answerText: "#   #include <iostream>", isCorrect: true },
      { id: 2, answerText: "include iostream", isCorrect: false },
      { id: 3, answerText: "include <iostream>", isCorrect: false },
      { id: 4, answerText: "#include iostream", isCorrect: true },
    ],
  },
  {
    questionText:
      "+C++ dasturlash tilida o’zgaruvchilarni katta harf va kichik harf bilan berganda kompilyator farqlaydimi?",
    answerOptions: [
      { id: 1, answerText: "#   farqlaydi", isCorrect: true },
      { id: 2, answerText: "bir xil ko’radi", isCorrect: false },
      { id: 3, answerText: "ahamyatsiz", isCorrect: false },
      {
        id: 4,
        answerText: "dastur ishlaganda bitta deb oladi",
        isCorrect: false,
      },
    ],
  },
  {
    questionText: "+C++ tilida console -…",
    answerOptions: [
      {
        id: 1,
        answerText:
          "#    foydalanuvchi dastur tuzuishda faqat dastur kodlari bilan ishlaydi",
        isCorrect: true,
      },
      {
        id: 2,
        answerText:
          " bu dasturchi tomonidan kiritiladigan dastur elementlari (funktsiya, oʼzgaruvchilar, oʼzgarmaslar …) uchun ixtiyoriy nom",
        isCorrect: false,
      },
      {
        id: 3,
        answerText:
          " oʼzgaruvchilarda bit darajasidagi amallarni bajarish uchun ishlatiladi",
        isCorrect: false,
      },
      {
        id: 4,
        answerText:
          " ikki yoki undan koʼp shartlarni, cheklovlarni birlashtirish yoki koʼrib chiqilayotganda asl holatni baholashni toʼldirish uchun ishlatiladi\t",
        isCorrect: false,
      },
    ],
  },
  {
    questionText: "+C++ tilida graphic interface-…",
    answerOptions: [
      {
        id: 1,
        answerText:
          "#    faqat tilning kodlari bilangina emas muhitning menyulari, komponentalari bilan ham ishlashi mumkin boʼladi",
        isCorrect: true,
      },
      {
        id: 2,
        answerText:
          " bu dasturchi tomonidan kiritiladigan dastur elementlari (funktsiya, oʼzgaruvchilar, oʼzgarmaslar …) uchun ixtiyoriy nom",
        isCorrect: false,
      },
      {
        id: 3,
        answerText:
          " oʼzgaruvchilarda bit darajasidagi amallarni bajarish uchun ishlatiladi",
        isCorrect: false,
      },
      {
        id: 4,
        answerText:
          " ikki yoki undan koʼp shartlarni, cheklovlarni birlashtirish yoki koʼrib chiqilayotganda asl holatni baholashni toʼldirish uchun ishlatiladi",
        isCorrect: false,
      },
    ],
  },
  {
    questionText: "+Ma’lumotlarni oqimga chiqarish operatori- …",
    answerOptions: [
      { id: 1, answerText: "#  cout", isCorrect: true },
      { id: 2, answerText: " Cin", isCorrect: false },
      { id: 3, answerText: " cin.getline()", isCorrect: false },
      { id: 4, answerText: " write()", isCorrect: false },
    ],
  },
  {
    questionText: "+Ma’lumotlarni oqimga olib kirish operatori-…",
    answerOptions: [
      { id: 1, answerText: "#    cin", isCorrect: true },
      { id: 2, answerText: " cout", isCorrect: false },
      { id: 3, answerText: " writeln()\t\t", isCorrect: false },
      { id: 4, answerText: " write()", isCorrect: false },
    ],
  },
  {
    questionText:
      "+“Hi, Where are you from?” so’zini qora ekranga chiqarish uchun-…",
    answerOptions: [
      {
        id: 1,
        answerText: "#    cout<<“Hi, Where are you from?”;",
        isCorrect: true,
      },
      {
        id: 2,
        answerText: " cout>>“Hi, Where are you from?”;",
        isCorrect: false,
      },
      {
        id: 3,
        answerText: " cin>>“Hi, Where are you from?”;",
        isCorrect: false,
      },
      {
        id: 4,
        answerText: " cin<<“Hi, Where are you from?”;",
        isCorrect: false,
      },
    ],
  },
  {
    questionText: "+a  o’zgaruvchiga qora ekrandan qiymat yuklash uchun-…",
    answerOptions: [
      { id: 1, answerText: "#    cin>>a;", isCorrect: true },
      { id: 2, answerText: "cin<<a;", isCorrect: false },
      { id: 3, answerText: "cout<<a;", isCorrect: false },
      { id: 4, answerText: " cout>>a;", isCorrect: false },
    ],
  },
  {
    questionText: "+a+b=c formulasi C++ tilida qanday yoziladi?",
    answerOptions: [
      { id: 1, answerText: "#    c=a+b;", isCorrect: true },
      { id: 2, answerText: " a+b=c;", isCorrect: false },
      { id: 3, answerText: " a+b;\t\t", isCorrect: false },
      { id: 4, answerText: " c=a;", isCorrect: false },
    ],
  },
  {
    questionText:
      "+c=a%b ko’rinishida berilgan ifodada qanday qiymat yuklanadi?",
    answerOptions: [
      {
        id: 1,
        answerText:
          "#    b ni a ga qoldiqli bo’ladi va qoldig’ini c ga yuklaydi",
        isCorrect: true,
      },
      {
        id: 2,
        answerText: " b ni a ga butun bo’ladi va butun qiymatini c ga yuklaydi",
        isCorrect: false,
      },
      { id: 3, answerText: " oddiy bo’lishni bajaradi", isCorrect: false },
      {
        id: 4,
        answerText: " hech qanday jarayonni ifodalamaydi",
        isCorrect: false,
      },
    ],
  },
  {
    questionText:
      "+c=a/b ko’rinishida berilgan ifodada qanday qiymat yuklanadi?",
    answerOptions: [
      {
        id: 1,
        answerText:
          "#    b ni a ga butun bo’ladi va butun qiymatini c ga yuklaydi",
        isCorrect: true,
      },
      {
        id: 2,
        answerText: " b ni a ga qoldiqli bo’ladi va qoldig’ini c ga yuklaydi",
        isCorrect: false,
      },
      { id: 3, answerText: " oddiy bo’lishni bajaradi", isCorrect: false },
      {
        id: 4,
        answerText: " hech qanday jarayonni ifodalamaydi",
        isCorrect: false,
      },
    ],
  },
  {
    questionText: "+Jarayonlarning modellari-…",
    answerOptions: [
      {
        id: 1,
        answerText:
          "#    Kuzatilayotgan obʼektlarni chuqur va har tomonlama oʼrganish maqsadida tabiatda va jamiyatda roʼy beradigan jarayonlardir",
        isCorrect: true,
      },
      {
        id: 2,
        answerText:
          " Jamiyatdagi va iqtisodiyotdagi obʼektlarni matematik modellar yordamida kuzatish mumkin",
        isCorrect: false,
      },
      {
        id: 3,
        answerText:
          " Ifodalangan model yordamida kuzatilayotgan obʼektni bilish modellashtirish deyiladi",
        isCorrect: false,
      },
      {
        id: 4,
        answerText: " iqtisodiy obʼektlarning soddalashtirilgan nusxasidir",
        isCorrect: false,
      },
    ],
  },
  {
    questionText: "+Modellashtirish-",
    answerOptions: [
      {
        id: 1,
        answerText:
          "#    Jamiyatdagi va iqtisodiyotdagi obʼektlarni matematik modellar yordamida kuzatish mumkin",
        isCorrect: true,
      },
      {
        id: 2,
        answerText:
          " Kuzatilayotgan obʼektlarni chuqur va har tomonlama oʼrganish maqsadida tabiatda va jamiyatda roʼy beradigan jarayonlardir",
        isCorrect: false,
      },
      {
        id: 3,
        answerText:
          " Ifodalangan model yordamida kuzatilayotgan obʼektni bilish modellashtirish deyiladi",
        isCorrect: false,
      },
      {
        id: 4,
        answerText: " iqtisodiy obʼektlarning soddalashtirilgan nusxasidir",
        isCorrect: false,
      },
    ],
  },
  {
    questionText: "+Vaqt bo‘yicha o‘zgarmas modelni ko‘rsating",
    answerOptions: [
      { id: 1, answerText: "#    statik model\t\t", isCorrect: true },
      { id: 2, answerText: "dinamik model\t ", isCorrect: false },
      {
        id: 3,
        answerText: " parametrlari fazoda taqsimlangan  model\t",
        isCorrect: false,
      },
      {
        id: 4,
        answerText: " parametrlari mujassamlashgan  model",
        isCorrect: false,
      },
    ],
  },
  {
    questionText: "+Vaqt bo‘yicha o‘zgaruvchi modelni ko‘rsating.",
    answerOptions: [
      { id: 1, answerText: "#  dinamik model", isCorrect: true },
      { id: 2, answerText: " statik model", isCorrect: false },
      {
        id: 3,
        answerText: " parametrlari fazoda taqsimlangan  model",
        isCorrect: false,
      },
      {
        id: 4,
        answerText: " parametrlari mujassamlashgan  model",
        isCorrect: false,
      },
    ],
  },
  {
    questionText:
      "+Chiziqli programmalashtirish masalasini grafik usulda yechganda noma’lumlar soni nechta?",
    answerOptions: [
      { id: 1, answerText: "#    2", isCorrect: true },
      { id: 2, answerText: " 3", isCorrect: false },
      { id: 3, answerText: " 4", isCorrect: false },
      { id: 4, answerText: " 6", isCorrect: false },
    ],
  },
  {
    questionText:
      "+Chiziqli programmalashtirish masalasini grafik  usul bilan yechganda koordinatani qaysi nuqtalar tengsizliklarni qanoatlantiradi?",
    answerOptions: [
      {
        id: 1,
        answerText: "#    ko’pburchak yechimlarini barcha nuqtalari",
        isCorrect: true,
      },
      {
        id: 2,
        answerText: " ko’pburchak yechimlarini  faqat chegaraviy nuqtalari",
        isCorrect: false,
      },
      {
        id: 3,
        answerText: " ko’pburchak yechimlarini tashqi nuqtalari",
        isCorrect: false,
      },
      {
        id: 4,
        answerText: " ko’pburchak yechimlarini tashqi nuqtalari",
        isCorrect: false,
      },
    ],
  },
  {
    questionText:
      "+Chiziqli programmalashtirish  masalasini grafik usulda yechganda optimal yechimlar qayerda joylashgan?",
    answerOptions: [
      { id: 1, answerText: "#    ko’pburchak ichida", isCorrect: true },
      { id: 2, answerText: " ko’pburchak chegarasida", isCorrect: false },
      { id: 3, answerText: " ko’pburchak tashqarisida", isCorrect: false },
      { id: 4, answerText: " ko’pburchak tashqarisida", isCorrect: false },
    ],
  },
  {
    questionText: "+ko’pburchak tashqarisida",
    answerOptions: [
      { id: 1, answerText: "#    I chorakda", isCorrect: true },
      { id: 2, answerText: " II chorakda", isCorrect: false },
      { id: 3, answerText: " III chorakda\t\t", isCorrect: false },
      { id: 4, answerText: " IV chorakda", isCorrect: false },
    ],
  },
  {
    questionText:
      "+Qaysi shartlar grafik usulda yechilgan Chiziqli programmalashtirish  masalasini yechimga ega emas?",
    answerOptions: [
      {
        id: 1,
        answerText:
          "#    Agarda yarimtekisliklar kesishmasi chegaralanmagan soxani hosil qilsa",
        isCorrect: true,
      },
      {
        id: 2,
        answerText: " Agarda yarimtekisliklar kesishmasi bo’sh bo’lsa",
        isCorrect: false,
      },
      {
        id: 3,
        answerText: " Agarda yarimtekisliklar  kesishmasi  bo’sh bo’lmasa\t",
        isCorrect: false,
      },
      {
        id: 4,
        answerText: " Agarda yarimtekisliklarbir nuqtada kesishsa\t",
        isCorrect: false,
      },
    ],
  },
  {
    questionText: "+Qaysi shartlarda CHPM yechimga ega bo’ladi?",
    answerOptions: [
      {
        id: 1,
        answerText: "#    Agarda yarimtekisliklar  kesishmasi  bo’sh bo’lmasa",
        isCorrect: true,
      },
      {
        id: 2,
        answerText: " Agarda yarimtekisliklar kesishmasi bo’sh bo’lsa",
        isCorrect: false,
      },
      {
        id: 3,
        answerText:
          " Agarda yarimtekisliklar kesishmasi chegaralanmagan soxani hosil qilsa",
        isCorrect: false,
      },
      {
        id: 4,
        answerText: "Agarda yarimtekisliklarbir nuqtada kesishsa",
        isCorrect: false,
      },
    ],
  },
  {
    questionText:
      "+Qaysi shartlarda grafik usulda yechilgan CHPM yakuniy yechimga ega bo’ladi?",
    answerOptions: [
      {
        id: 1,
        answerText:
          "#    Agar yarimtekisliklar kesishmasi chegaralangan ko’pburchak hosil qilsa",
        isCorrect: true,
      },
      {
        id: 2,
        answerText: " Agar yarimtekisliklar bo’sh bo’lsa",
        isCorrect: false,
      },
      {
        id: 3,
        answerText: " Agar yarimtekisliklar  ox2 o’qiga parallel bo’lsa",
        isCorrect: false,
      },
      {
        id: 4,
        answerText:
          " Agar yarimtekisliklar kesishmasi  chegaralanmagan soha hosil bo’lsa",
        isCorrect: false,
      },
    ],
  },
  {
    questionText:
      "+Qanday shartlarda CHMPni  grafik usulda yechimi сhegaralanmagan  qiymatlarini qabul qiladi?",
    answerOptions: [
      {
        id: 1,
        answerText:
          "#   Agarda yarimtekisliklar kesishmasi chegaralanmagan soha bo’lsa",
        isCorrect: true,
      },
      {
        id: 2,
        answerText: " Agar yarimtekisliklar bo’sh bo’lsa",
        isCorrect: false,
      },
      {
        id: 3,
        answerText: " Agar yarimtekisliklar  ox2 o’qiga parallel bo’lsa",
        isCorrect: false,
      },
      {
        id: 4,
        answerText:
          " Agar yarimtekisliklar kesishmasi chegaralangan ko’pburchak hosil qilsa",
        isCorrect: false,
      },
    ],
  },
  {
    questionText: "+Obyektni modelini qurish bizga -… ",
    answerOptions: [
      {
        id: 1,
        answerText: "#   vaqt,mablag’ va ko’plab xatolikni oldini oladi",
        isCorrect: true,
      },
      {
        id: 2,
        answerText: " farqi yo’q modelini ko’rmasam bo’ladi",
        isCorrect: false,
      },
      { id: 3, answerText: " vaqtni tejaydi", isCorrect: false },
      { id: 4, answerText: " xatoliklarni oldini oladi", isCorrect: false },
    ],
  },
  {
    questionText: "+Barcha modellarni-… turga bo’lish mumkin",
    answerOptions: [
      { id: 1, answerText: "#    moddiy va ideal", isCorrect: true },
      { id: 2, answerText: " ideal", isCorrect: false },
      { id: 3, answerText: " moddiy", isCorrect: false },
      { id: 4, answerText: " ma’naviy", isCorrect: false },
    ],
  },
  {
    questionText: "+Moddiy modellarni- … modellarga ajratish mumkin.",
    answerOptions: [
      { id: 1, answerText: "#    fizik va belgili", isCorrect: true },
      { id: 2, answerText: " ideal", isCorrect: false },
      { id: 3, answerText: " moddiy", isCorrect: false },
      { id: 4, answerText: " ideal va moddiy\t", isCorrect: false },
    ],
  },
  {
    questionText: "+Moddiy modellar-…",
    answerOptions: [
      {
        id: 1,
        answerText:
          "#    real obyektlarni tabiiy va sun’iy matreallar bilan aks ettiradi",
        isCorrect: true,
      },
      {
        id: 2,
        answerText: " odamni fikrlash jarayoni bilan chambarchas bog’liq",
        isCorrect: false,
      },
      {
        id: 3,
        answerText:
          " real obyektni fizik tabiatini aks ettiradi va asosan asosan fizik xossalarini ifodalaydi",
        isCorrect: false,
      },
      {
        id: 4,
        answerText: " har tillarda ifodalanishi mumkin",
        isCorrect: false,
      },
    ],
  },
  {
    questionText: "+Ideal  modellar -…",
    answerOptions: [
      {
        id: 1,
        answerText: "#    odamni fikrlash jarayoni bilan chambarchas bog’liq",
        isCorrect: true,
      },
      {
        id: 2,
        answerText:
          " real obyektlarni tabiiy va sun’iy matreallar bilan aks ettiradi",
        isCorrect: false,
      },
      {
        id: 3,
        answerText:
          " real obyektni fizik tabiatini aks ettiradi va asosan asosan fizik xossalarini ifodalaydi",
        isCorrect: false,
      },
      {
        id: 4,
        answerText: " har tillarda ifodalanishi mumkin",
        isCorrect: false,
      },
    ],
  },
  {
    questionText: "+Fizik modellar-…",
    answerOptions: [
      {
        id: 1,
        answerText:
          "#    real obyektni fizik tabiatini aks ettiradi va asosan asosan fizik xossalarini ifodalaydi",
        isCorrect: true,
      },
      {
        id: 2,
        answerText:
          " real obyektlarni tabiiy va sun’iy matreallar bilan aks ettiradi",
        isCorrect: false,
      },
      {
        id: 3,
        answerText: " odamni fikrlash jarayoni bilan chambarchas bog’liq",
        isCorrect: false,
      },
      {
        id: 4,
        answerText: " har tillarda ifodalanishi mumkin",
        isCorrect: false,
      },
    ],
  },
  {
    questionText: "+Belgili modellar- …",
    answerOptions: [
      {
        id: 1,
        answerText: "#    har tillarda ifodalanishi mumkin",
        isCorrect: true,
      },
      {
        id: 2,
        answerText:
          " real obyektlarni tabiiy va sun’iy matreallar bilan aks ettiradi",
        isCorrect: false,
      },
      {
        id: 3,
        answerText: " odamni fikrlash jarayoni bilan chambarchas bog’liq",
        isCorrect: false,
      },
      {
        id: 4,
        answerText:
          " real obyektni fizik tabiatini aks ettiradi va asosan asosan fizik xossalarini ifodalaydi",
        isCorrect: false,
      },
    ],
  },
  {
    questionText:
      "+real obyektni fizik tabiatini aks ettiradi va asosan asosan fizik xossalarini ifodalaydi",
    answerOptions: [
      {
        id: 1,
        answerText:
          "#    maqsad mezoni chiziqli ko’rinishda bo’ladi ,uning ekstremal qiymatlari orasidagi munosabat chiziqli tenglamalar va tengsizliklar orqali ifodalaniladi",
        isCorrect: true,
      },
      {
        id: 2,
        answerText:
          " iqtisodiy ko’rsatkichlarning vaqt davomida qanday o’zgarishi kuzatiladi ularga qaysi omillar ta’sir etishi o’rganiladi",
        isCorrect: false,
      },
      {
        id: 3,
        answerText:
          " iqtisodiy jarayonlar va ko’rsatkichlarning ma’lum vaqtdagi holati o’rganiladi",
        isCorrect: false,
      },
      {
        id: 4,
        answerText:
          " murakkabroq model bo’lib, tizimni ichki sutrukturasini ifodalab ichki aloqalrni aks ettiradi",
        isCorrect: false,
      },
    ],
  },
  {
    questionText: "+Dinamik modellar-…",
    answerOptions: [
      {
        id: 1,
        answerText:
          "#    iqtisodiy ko’rsatkichlarning vaqt davomida qanday o’zgarishi kuzatiladi ularga qaysi omillar ta’sir etishi o’rganiladi",
        isCorrect: true,
      },
      {
        id: 2,
        answerText:
          " maqsad mezoni chiziqli ko’rinishda bo’ladi ,uning ekstremal qiymatlari orasidagi munosabat chiziqli tenglamalar va tengsizliklar orqali ifodalaniladi",
        isCorrect: false,
      },
      {
        id: 3,
        answerText:
          " iqtisodiy jarayonlar va ko’rsatkichlarning ma’lum vaqtdagi holati o’rganiladi",
        isCorrect: false,
      },
      {
        id: 4,
        answerText:
          " murakkabroq model bo’lib, tizimni ichki sutrukturasini ifodalab ichki aloqalrni aks ettiradi",
        isCorrect: false,
      },
    ],
  },
  {
    questionText: "+Statik modellar-…",
    answerOptions: [
      {
        id: 1,
        answerText:
          "#     iqtisodiy jarayonlar va ko’rsatkichlarning ma’lum vaqtdagi holati o’rganiladi ",
        isCorrect: true,
      },
      {
        id: 2,
        answerText:
          " maqsad mezoni chiziqli ko’rinishda bo’ladi ,uning ekstremal qiymatlari orasidagi munosabat chiziqli tenglamalar va tengsizliklar orqali ifodalaniladi",
        isCorrect: false,
      },
      {
        id: 3,
        answerText:
          " iqtisodiy ko’rsatkichlarning vaqt davomida qanday o’zgarishi kuzatiladi ularga qaysi omillar ta’sir etishi o’rganiladi",
        isCorrect: false,
      },
      {
        id: 4,
        answerText:
          " murakkabroq model bo’lib, tizimni ichki sutrukturasini ifodalab ichki aloqalrni aks ettiradi",
        isCorrect: false,
      },
    ],
  },
  {
    questionText:
      "+murakkabroq model bo’lib, tizimni ichki sutrukturasini ifodalab ichki aloqalrni aks ettiradi",
    answerOptions: [
      {
        id: 1,
        answerText:
          "#    iqtisodiy muammoni qo’yilish,matematik modelni tuzish,madelni matematik tahlili,iqtisodiy ma’lumotlarni tayyorlash, algoritmni tuzish va yechimni ekspert sifatida tahlil qilib berish",
        isCorrect: true,
      },
      {
        id: 2,
        answerText:
          " matematik modelni tuzish,madelni matematik tahlili,iqtisodiy ma’lumotlarni tayyorlash, algoritmni tuzish va yechimni ekspert sifatida tahlil qilib berish",
        isCorrect: false,
      },
      {
        id: 3,
        answerText:
          " madelni matematik tahlili,iqtisodiy ma’lumotlarni tayyorlash, algoritmni tuzish va yechimni ekspert sifatida tahlil qilib berish",
        isCorrect: false,
      },
      {
        id: 4,
        answerText:
          " iqtisodiy ma’lumotlarni tayyorlash, algoritmni tuzish va yechimni ekspert sifatida tahlil qilib berish",
        isCorrect: false,
      },
    ],
  },
  {
    questionText: "+Makroiqtisodiy modellar -…",
    answerOptions: [
      {
        id: 1,
        answerText:
          "#    iqtisodiyotni bir butun deb qarab,umumlashtirilgan  moddiy va moliyaviy ko‘rsatkichlarni: yalpi milliy mahsulot, iste’mol, investitsiya, ish bilan bandlik, foiz stavkalari, pulning miqdori va boshqalarni o‘zaro bog‘lagan holda tasvirlaydi",
        isCorrect: true,
      },
      {
        id: 2,
        answerText:
          " iqtisodiyotnig tuzilmali va funksional tashkil etuvchilarining o‘zaro ta’sirini ifodalaydi",
        isCorrect: false,
      },
      {
        id: 3,
        answerText:
          " formal shart – sharoitlarda deduksiya xulosalari yordamida iqtisodiyotning umumiy xossalarini va unga xos bo’lgan elementlarni o‘rganishga imkon beradi",
        isCorrect: false,
      },
      {
        id: 4,
        answerText:
          " aniq iqtisodiy ob’yektning amal qiluvchi parametrlarini baholashga va amaliy qarorlar qabul qilish uchun tavsiyalarni ifodalashga imkon beradi",
        isCorrect: false,
      },
    ],
  },
  {
    questionText: "+Mikroiqtisodiy modellar-…",
    answerOptions: [
      {
        id: 1,
        answerText:
          "#    iqtisodiyotnig tuzilmali va funksional tashkil etuvchilarining o‘zaro ta’sirini ifodalaydi",
        isCorrect: true,
      },
      {
        id: 2,
        answerText:
          " iqtisodiyotni bir butun deb qarab,umumlashtirilgan  moddiy va moliyaviy ko‘rsatkichlarni: yalpi milliy mahsulot, iste’mol, investitsiya, ish bilan bandlik, foiz stavkalari, pulning miqdori va boshqalarni o‘zaro bog‘lagan holda tasvirlaydi",
        isCorrect: false,
      },
      {
        id: 3,
        answerText:
          " formal shart – sharoitlarda deduksiya xulosalari yordamida iqtisodiyotning umumiy xossalarini va unga xos bo’lgan elementlarni o‘rganishga imkon beradi",
        isCorrect: false,
      },
      {
        id: 4,
        answerText:
          " aniq iqtisodiy ob’yektning amal qiluvchi parametrlarini baholashga va amaliy qarorlar qabul qilish uchun tavsiyalarni ifodalashga imkon beradi",
        isCorrect: false,
      },
    ],
  },
  {
    questionText: "+ Nazariy modellar-…",
    answerOptions: [
      {
        id: 1,
        answerText:
          "#    formal shart – sharoitlarda deduksiya xulosalari yordamida iqtisodiyotning umumiy xossalarini va unga xos bo’lgan elementlarni o‘rganishga imkon beradi",
        isCorrect: true,
      },
      {
        id: 2,
        answerText:
          " formal shart – sharoitlarda deduksiya xulosalari yordamida iqtisodiyotning umumiy xossalarini va unga xos bo’lgan elementlarni o‘rganishga imkon beradi",
        isCorrect: false,
      },
      {
        id: 3,
        answerText:
          "iqtisodiyotnig tuzilmali va funksional tashkil etuvchilarining o‘zaro ta’sirini ifodalaydi",
        isCorrect: false,
      },
      {
        id: 4,
        answerText:
          "aniq iqtisodiy ob’yektning amal qiluvchi parametrlarini baholashga va amaliy qarorlar qabul qilish uchun tavsiyalarni ifodalashga imkon beradi",
        isCorrect: false,
      },
    ],
  },
  {
    questionText: "+ Amaliy modellar-…",
    answerOptions: [
      {
        id: 1,
        answerText:
          "#     aniq iqtisodiy ob’yektning amal qiluvchi parametrlarini baholashga va amaliy qarorlar qabul qilish uchun tavsiyalarni ifodalashga imkon beradi",
        isCorrect: true,
      },
      {
        id: 2,
        answerText:
          " iqtisodiyotni bir butun deb qarab,umumlashtirilgan  moddiy va moliyaviy ko‘rsatkichlarni: yalpi milliy mahsulot, iste’mol, investitsiya, ish bilan bandlik, foiz stavkalari, pulning miqdori va boshqalarni o‘zaro bog‘lagan holda tasvirlaydi",
        isCorrect: false,
      },
      {
        id: 3,
        answerText:
          " iqtisodiyotnig tuzilmali va funksional tashkil etuvchilarining o‘zaro ta’sirini ifodalaydi",
        isCorrect: false,
      },
      {
        id: 4,
        answerText:
          "formal shart – sharoitlarda deduksiya xulosalari yordamida iqtisodiyotning umumiy xossalarini va unga xos bo’lgan elementlarni o‘rganishga imkon beradi",
        isCorrect: false,
      },
    ],
  },
  {
    questionText:
      "+ Ishlab chiqarishda resurslardan foydalanish masalasining matematik modelini tuzishda -… ",
    answerOptions: [
      {
        id: 1,
        answerText:
          "#     m xil turdagi mahsulot va n xil ishlab chiqarish faktorlari zarur bo’ladi",
        isCorrect: true,
      },
      {
        id: 2,
        answerText: " 2 xil turdagi mahsulot va 4 xil resurs zarur bo’ladi",
        isCorrect: false,
      },
      {
        id: 3,
        answerText:
          " kishi organizmi uchun 1 sutkada n xil ozuqa miqdorini m xil turdagi mahsulotlar tarkibidan olsin",
        isCorrect: false,
      },
      {
        id: 4,
        answerText: "2 xil turdagi mahsulot va 6 xil resurs zarur bo’ladi",
        isCorrect: false,
      },
    ],
  },
  {
    questionText: "+ Iste’mol savati masalasi modelini tuzishda-…",
    answerOptions: [
      {
        id: 1,
        answerText:
          "#     kishi organizmi uchun 1 sutkada n xil ozuqa miqdorini m xil turdagi mahsulotlar tarkibidan olsin",
        isCorrect: true,
      },
      {
        id: 2,
        answerText: " 2 xil turdagi mahsulot va 4 xil resurs zarur bo’ladi",
        isCorrect: false,
      },
      {
        id: 3,
        answerText:
          " m xil turdagi mahsulot va n xil ishlab chiqarish faktorlari zarur  bo’ladi\t",
        isCorrect: false,
      },
      {
        id: 4,
        answerText: "2 xil turdagi mahsulot va 6 xil resurs zarur bo’ladi",
        isCorrect: false,
      },
    ],
  },
  {
    questionText:
      "+ Optimizatsiya masalalarini grafik usulda yechishda-… bo’ladi.",
    answerOptions: [
      { id: 1, answerText: "#  n-m=2", isCorrect: true },
      { id: 2, answerText: " n-m=3", isCorrect: false },
      { id: 3, answerText: " n-m=5", isCorrect: false },
      { id: 4, answerText: "n-m=9", isCorrect: false },
    ],
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
