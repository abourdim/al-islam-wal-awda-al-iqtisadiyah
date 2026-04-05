/* الإسلام والأوضاع الاقتصادية — ISLAM & ECONOMICS — app.js v1.0 */
/* Based on "Al-Islam wal-Awda' al-Iqtisadiyah" by Sheikh Mohammed al-Ghazali (1917-1996) */

// ═══════════════ TRILINGUAL DATA ═══════════════
const T = {
  ar: {
    appTitle: 'الإسلام والأوضاع الاقتصادية',
    splashSub: 'الاقتصاد الإسلامي للنشء',
    splashHint: 'اضغط للتخطي',
    sacredRef: 'سورة الحشر ٥٩: ٧',
    tabHome: 'الرئيسية', tabTraits: 'المبادئ', tabQuiz: 'المسابقة',
    tabProgress: 'تقدمي', tabAbout: 'الكتاب',
    traitsTitle: 'مبادئ الاقتصاد الإسلامي',
    traitsDesc: '٢٠ مبدأً اقتصادياً إسلامياً من كتاب الشيخ محمد الغزالي — كل مبدأ بآية وحديث وتطبيق عملي',
    quizTitle: '🏆 من سيصبح عالِماً؟',
    quizDesc: 'اختبر معلوماتك عن الاقتصاد الإسلامي — ٤ خيارات لكل سؤال',
    progressTitle: 'رحلتي الاقتصادية',
    progressDesc: 'تقدمك وإنجازاتك في رحلة المبادئ',
    helpTitle: '❓ مساعدة',
    duaPanelTitle: '🤲 أدعية الرزق والبركة',
    dailyLabel: '✨ مبدأ اليوم',
    searchPlaceholder: 'ابحث في المبادئ...',
    share: 'مشاركة',
    verse: 'الآية',
    hadith: 'الحديث',
    apply: '💡 طبّق الآن',
    youngMode: '🌟 مستكشف صغير',
    teenMode: '📖 باحث شاب',
    xpLabel: 'نقاط الخبرة',
    levelLabel: 'المستوى',
    streakMsg: 'يوم متتالي!',
    readMore: 'اقرأ المزيد',
    nextQ: 'السؤال التالي',
    lifeline5050: '50/50',
    lifelineHint: '💡 تلميح',
    lifelineQuran: '📖 مرجع قرآني',
    correct: 'أحسنت! إجابة صحيحة! 🎉',
    wrong: 'حاول مرة أخرى 💪',
    quizComplete: 'انتهت المسابقة!',
    score: 'النتيجة',
    tryAgain: 'أعد المسابقة',
    badge_beginner: 'مبتدئ',
    badge_reader: 'قارئ',
    badge_scholar: 'عالم',
    badge_persistent: 'مثابر',
    badge_expert: 'خبير',
    splashFeatures: [
      '٢٠ مبدأً من كتاب الإسلام والأوضاع الاقتصادية',
      'مسابقة "من سيصبح عالماً" بـ ١٥ سؤالاً',
      'نظام النقاط والشارات والمستويات',
      'وضع مستكشف صغير ووضع باحث شاب',
      'قاموس مصطلحات الاقتصاد الإسلامي',
      'مقارنة الأنظمة الاقتصادية الثلاثة',
      '٨ أدعية للرزق والبركة'
    ],
  },
  en: {
    appTitle: 'Islam & Economics',
    splashSub: 'Islamic economics for young minds',
    splashHint: 'tap to skip',
    sacredRef: 'Surah Al-Hashr 59:7',
    tabHome: 'Home', tabTraits: 'Principles', tabQuiz: 'Quiz',
    tabProgress: 'Progress', tabAbout: 'Book',
    traitsTitle: 'Islamic Economic Principles',
    traitsDesc: '20 Islamic economic principles from Sheikh al-Ghazali — each with a verse, hadith, and practical application',
    quizTitle: '🏆 Who Wants to Be a Scholar?',
    quizDesc: 'Test your knowledge of Islamic economics — 4 choices per question',
    progressTitle: 'My Economic Journey',
    progressDesc: 'Your progress and achievements in the principles journey',
    helpTitle: '❓ Help',
    duaPanelTitle: '🤲 Duas for Provision & Blessing',
    dailyLabel: "✨ Today's Principle",
    searchPlaceholder: 'Search principles...',
    share: 'Share',
    verse: 'Verse',
    hadith: 'Hadith',
    apply: '💡 Apply Now',
    youngMode: '🌟 Young Explorer',
    teenMode: '📖 Teen Scholar',
    xpLabel: 'Experience Points',
    levelLabel: 'Level',
    streakMsg: 'day streak!',
    readMore: 'Read More',
    nextQ: 'Next Question',
    lifeline5050: '50/50',
    lifelineHint: '💡 Hint',
    lifelineQuran: '📖 Quran Ref',
    correct: 'Well done! Correct answer! 🎉',
    wrong: 'Try again next time 💪',
    quizComplete: 'Quiz Complete!',
    score: 'Score',
    tryAgain: 'Retry Quiz',
    badge_beginner: 'Beginner',
    badge_reader: 'Reader',
    badge_scholar: 'Scholar',
    badge_persistent: 'Persistent',
    badge_expert: 'Expert',
    splashFeatures: [
      '20 Islamic economic principles from Islam & Economics',
      '"Who Wants to Be a Scholar?" quiz with 15 questions',
      'Points, badges, and level system',
      'Young Explorer and Teen Scholar modes',
      'Islamic economic terms glossary',
      'Three economic systems comparison',
      '8 duas for provision and blessing'
    ],
  },
  fr: {
    appTitle: 'L\'Islam et l\'Economie',
    splashSub: 'L\'economie islamique pour les jeunes',
    splashHint: 'appuyez pour passer',
    sacredRef: 'Sourate Al-Hashr 59:7',
    tabHome: 'Accueil', tabTraits: 'Principes', tabQuiz: 'Quiz',
    tabProgress: 'Progres', tabAbout: 'Livre',
    traitsTitle: 'Principes Economiques Islamiques',
    traitsDesc: '20 principes economiques islamiques du livre du Sheikh al-Ghazali — chacun avec un verset, un hadith et une application pratique',
    quizTitle: '🏆 Qui Veut Devenir Savant ?',
    quizDesc: 'Testez vos connaissances en economie islamique — 4 choix par question',
    progressTitle: 'Mon Parcours Economique',
    progressDesc: 'Vos progres et realisations dans le parcours des principes',
    helpTitle: '❓ Aide',
    duaPanelTitle: '🤲 Duas pour la Subsistance et la Benediction',
    dailyLabel: '✨ Principe du Jour',
    searchPlaceholder: 'Rechercher les principes...',
    share: 'Partager',
    verse: 'Verset',
    hadith: 'Hadith',
    apply: '💡 Appliquez Maintenant',
    youngMode: '🌟 Jeune Explorateur',
    teenMode: '📖 Jeune Chercheur',
    xpLabel: "Points d'Experience",
    levelLabel: 'Niveau',
    streakMsg: 'jours consecutifs !',
    readMore: 'Lire Plus',
    nextQ: 'Question Suivante',
    lifeline5050: '50/50',
    lifelineHint: '💡 Indice',
    lifelineQuran: '📖 Ref. Coran',
    correct: 'Bravo ! Bonne reponse ! 🎉',
    wrong: 'Reessayez la prochaine fois 💪',
    quizComplete: 'Quiz Termine !',
    score: 'Score',
    tryAgain: 'Refaire le Quiz',
    badge_beginner: 'Debutant',
    badge_reader: 'Lecteur',
    badge_scholar: 'Savant',
    badge_persistent: 'Perseverant',
    badge_expert: 'Expert',
    splashFeatures: [
      '20 principes economiques islamiques du livre L\'Islam et l\'Economie',
      'Quiz « Qui Veut Devenir Savant ? » avec 15 questions',
      'Systeme de points, badges et niveaux',
      'Modes Jeune Explorateur et Jeune Chercheur',
      'Glossaire des termes economiques islamiques',
      'Comparaison des trois systemes economiques',
      '8 duas pour la subsistance et la benediction'
    ],
  }
};

// ═══════════════ 15 ECONOMIC PRINCIPLES DATA ═══════════════
const TRAITS = [
  {
    id:1, emoji:'💰',
    ar:{title:'الزكاة: نظام اقتصادي فريد',desc:'يؤكد الغزالي أن الزكاة ليست صدقة تطوعية بل فريضة اقتصادية. في كتابه هذا يبين أن الإسلام نظام اقتصادي متوازن يرفض الرأسمالية المتوحشة والشيوعية الملحدة معاً — الزكاة أداته الفريدة لتوزيع الثروة ومحاربة الفقر.',verse:'خُذْ مِنْ أَمْوَالِهِمْ صَدَقَةً تُطَهِّرُهُمْ وَتُزَكِّيهِمْ بِهَا',verseRef:'التوبة ١٠٣',hadith:'ما من صاحب ذهب ولا فضة لا يؤدي منها حقها إلا جعلت له صفائح من نار — رواه مسلم',action:'احسب زكاة مالك أو ساعد أهلك في حسابها — وتعلم نصاب الزكاة ومقدارها',young:'الزكاة مثل مشاركة الحلوى مع أصدقائك! الله يريدنا أن نساعد الفقراء من أموالنا 💰'},
    en:{title:'The Zakat System',desc:'Al-Ghazali sees: Zakat is a pillar of Islam. It is the right of the poor in the wealth of the rich. It is not voluntary charity but a divine obligation that purifies and blesses wealth. Zakat fights poverty, distributes wealth, and prevents the hoarding of money by a small group.',verse:'Take from their wealth a charity by which you purify them and cause them increase',verseRef:'At-Tawbah 103',hadith:'No owner of gold or silver who does not pay its due right except that plates of fire will be made for them — Muslim',action:'Calculate your zakat or help your family calculate it — learn the nisab and the amount required',young:'Zakat is like sharing your candy with friends! Allah wants us to help the poor from our money 💰'},
    fr:{title:'Le Systeme de la Zakat',desc:'Al-Ghazali voit: La Zakat est un pilier de l\'Islam. C\'est le droit du pauvre dans la richesse du riche. Ce n\'est pas une charite volontaire mais une obligation divine qui purifie et benit la richesse. La Zakat combat la pauvrete, distribue la richesse et empeche l\'accumulation d\'argent par un petit groupe.',verse:'Prends de leurs biens une aumone par laquelle tu les purifies et les benis',verseRef:'At-Tawbah 103',hadith:'Aucun proprietaire d\'or ou d\'argent qui ne paie pas son du sauf que des plaques de feu seront faites pour lui — Muslim',action:'Calculez votre zakat ou aidez votre famille a la calculer — apprenez le nisab et le montant requis',young:'La Zakat c\'est comme partager tes bonbons avec tes amis ! Allah veut qu\'on aide les pauvres avec notre argent 💰'}
  },
  {
    id:2, emoji:'🚫',
    ar:{title:'تحريم الربا',desc:'يرى الغزالي: الربا محرّم في الإسلام لأنه يستغل حاجة المحتاج ويثري الغني على حساب الفقير. الربا يدمّر الاقتصاد ويخلق فجوة طبقية هائلة. الإسلام يشجع التجارة الحلال والمشاركة في الربح والخسارة.',verse:'وَأَحَلَّ اللَّهُ الْبَيْعَ وَحَرَّمَ الرِّبَا',verseRef:'البقرة ٢٧٥',hadith:'لعن رسول الله ﷺ آكل الربا وموكله وكاتبه وشاهديه — رواه مسلم',action:'تعلم الفرق بين الربا والتجارة الحلال — وابحث عن بدائل إسلامية للبنوك الربوية',young:'الربا يعني أخذ أموال زيادة ظلماً! الإسلام يقول: تاجر بعدل وشارك الربح والخسارة مع الآخرين 🚫'},
    en:{title:'Prohibition of Riba (Usury)',desc:'Al-Ghazali sees: Riba is prohibited in Islam because it exploits the needy and enriches the rich at the expense of the poor. Riba destroys economies and creates huge class gaps. Islam encourages lawful trade and sharing in both profit and loss.',verse:'Allah has permitted trade and forbidden riba (usury)',verseRef:'Al-Baqarah 275',hadith:'The Messenger of Allah cursed the one who consumes riba, the one who pays it, the one who records it, and the witnesses — Muslim',action:'Learn the difference between riba and lawful trade — research Islamic alternatives to interest-based banking',young:'Riba means taking extra money unfairly! Islam says: trade fairly and share profit and loss with others 🚫'},
    fr:{title:'L\'Interdiction du Riba (Usure)',desc:'Al-Ghazali voit: Le Riba est interdit en Islam car il exploite le necessiteux et enrichit le riche aux depens du pauvre. Le Riba detruit les economies et cree d\'enormes ecarts de classe. L\'Islam encourage le commerce licite et le partage des profits et des pertes.',verse:'Allah a rendu licite le commerce et a interdit le riba (usure)',verseRef:'Al-Baqarah 275',hadith:'Le Messager d\'Allah a maudit celui qui consomme le riba, celui qui le paie, celui qui l\'enregistre et les temoins — Muslim',action:'Apprenez la difference entre le riba et le commerce licite — recherchez les alternatives islamiques aux banques a interet',young:'Le Riba c\'est prendre de l\'argent en plus injustement ! L\'Islam dit : commercez equitablement et partagez les profits et les pertes 🚫'}
  },
  {
    id:3, emoji:'⚖️',
    ar:{title:'العدالة الاجتماعية',desc:'يرى الغزالي: الإسلام يرفض أن يكون المال دولة بين الأغنياء فقط. العدالة الاجتماعية تعني أن لكل فرد حقاً في حياة كريمة: طعام ومسكن وعلاج وتعليم. المجتمع المسلم مسؤول عن ضمان هذه الحقوق.',verse:'كَيْ لَا يَكُونَ دُولَةً بَيْنَ الْأَغْنِيَاءِ مِنْكُمْ',verseRef:'الحشر ٧',hadith:'ليس المؤمن الذي يشبع وجاره جائع — رواه البخاري في الأدب المفرد',action:'فكر اليوم في شخص محتاج حولك وقدم له مساعدة — ولو كلمة طيبة',young:'الإسلام يريد أن يكون الجميع سعداء! لا ينبغي أن يجوع أحد بينما غيره يملك الكثير ⚖️'},
    en:{title:'Social Justice',desc:'Al-Ghazali sees: Islam rejects wealth being circulated only among the rich. Social justice means every individual has a right to a dignified life: food, shelter, healthcare, and education. The Muslim community is responsible for ensuring these rights.',verse:'So that it will not be a perpetual distribution among the rich from among you',verseRef:'Al-Hashr 7',hadith:'He is not a believer who eats his fill while his neighbor is hungry — Bukhari in Al-Adab Al-Mufrad',action:'Think today about someone in need around you and offer help — even a kind word',young:'Islam wants everyone to be happy! No one should go hungry while others have plenty ⚖️'},
    fr:{title:'La Justice Sociale',desc:'Al-Ghazali voit: L\'Islam rejette que la richesse ne circule qu\'entre les riches. La justice sociale signifie que chaque individu a droit a une vie digne : nourriture, logement, soins et education. La communaute musulmane est responsable de garantir ces droits.',verse:'Afin que cela ne soit pas distribue perpetuellement entre les riches parmi vous',verseRef:'Al-Hashr 7',hadith:'N\'est pas croyant celui qui mange a sa faim tandis que son voisin a faim — Bukhari dans Al-Adab Al-Mufrad',action:'Pensez aujourd\'hui a quelqu\'un dans le besoin autour de vous et offrez de l\'aide — meme un bon mot',young:'L\'Islam veut que tout le monde soit heureux ! Personne ne devrait avoir faim pendant que d\'autres ont beaucoup ⚖️'}
  },
  {
    id:4, emoji:'🤝',
    ar:{title:'توزيع الثروة',desc:'يرى الغزالي: الإسلام يحارب تركز الثروة ويسعى لتوزيعها العادل. الزكاة والصدقات والوقف والميراث كلها أدوات لضمان تداول المال بين جميع فئات المجتمع. الغنى ابتلاء كما أن الفقر ابتلاء.',verse:'وَفِي أَمْوَالِهِمْ حَقٌّ لِلسَّائِلِ وَالْمَحْرُومِ',verseRef:'الذاريات ١٩',hadith:'اليد العليا خير من اليد السفلى — متفق عليه',action:'شارك شيئاً مع من لا يملك اليوم — طعاماً أو ملابس أو وقتك',young:'شارك ما عندك! إذا كان عندك شيء زيادة، أعطه لمن يحتاجه — هكذا يعلمنا الإسلام 🤝'},
    en:{title:'Wealth Distribution',desc:'Al-Ghazali sees: Islam fights the concentration of wealth and seeks its fair distribution. Zakat, charity, waqf, and inheritance are all tools to ensure money circulates among all segments of society. Wealth is a test just as poverty is a test.',verse:'And in their wealth is a known right for the one who asks and the deprived',verseRef:'Adh-Dhariyat 19',hadith:'The upper hand (giving) is better than the lower hand (receiving) — Agreed upon',action:'Share something with someone who has less today — food, clothing, or your time',young:'Share what you have! If you have something extra, give it to someone who needs it — that is what Islam teaches 🤝'},
    fr:{title:'La Distribution de la Richesse',desc:'Al-Ghazali voit: L\'Islam combat la concentration de la richesse et cherche sa distribution equitable. La Zakat, la charite, le Waqf et l\'heritage sont tous des outils pour assurer la circulation de l\'argent entre tous les segments de la societe. La richesse est une epreuve tout comme la pauvrete.',verse:'Et dans leurs biens il y a un droit connu pour le mendiant et le prive',verseRef:'Adh-Dhariyat 19',hadith:'La main superieure (qui donne) est meilleure que la main inferieure (qui recoit) — Unanimement reconnu',action:'Partagez quelque chose avec quelqu\'un qui a moins aujourd\'hui — nourriture, vetements ou votre temps',young:'Partage ce que tu as ! Si tu as quelque chose en plus, donne-le a quelqu\'un qui en a besoin — c\'est ce que l\'Islam enseigne 🤝'}
  },
  {
    id:5, emoji:'🔨',
    ar:{title:'أخلاقيات العمل',desc:'يرى الغزالي: العمل في الإسلام عبادة. المسلم يتقن عمله ويؤديه بأمانة. لا فرق بين عمل يدوي وعمل فكري. خير الكسب عمل الرجل بيده. الإسلام يحارب البطالة والكسل ويحث على الإنتاج.',verse:'وَقُلِ اعْمَلُوا فَسَيَرَى اللَّهُ عَمَلَكُمْ وَرَسُولُهُ وَالْمُؤْمِنُونَ',verseRef:'التوبة ١٠٥',hadith:'ما أكل أحد طعاماً قط خيراً من أن يأكل من عمل يده — رواه البخاري',action:'أتقن عملك اليوم — ادرس بجد أو اعمل بأمانة واعتبره عبادة لله',young:'العمل عبادة! ادرس بجد ورتب غرفتك وساعد أهلك — كل عمل جيد يحبه الله 🔨'},
    en:{title:'Work Ethics',desc:'Al-Ghazali sees: Work in Islam is worship. A Muslim perfects their work and performs it with integrity. There is no difference between manual and intellectual work. The best earning comes from one\'s own hands. Islam fights unemployment and laziness and encourages productivity.',verse:'And say: Work, for Allah will see your work, and His Messenger, and the believers',verseRef:'At-Tawbah 105',hadith:'No one has ever eaten food better than what they earn from the work of their own hands — Bukhari',action:'Perfect your work today — study hard or work with integrity and consider it worship of Allah',young:'Work is worship! Study hard, tidy your room, and help your family — Allah loves every good deed you do 🔨'},
    fr:{title:'L\'Ethique du Travail',desc:'Al-Ghazali voit: Le travail en Islam est une adoration. Le musulman perfectionne son travail et l\'accomplit avec integrite. Il n\'y a pas de difference entre travail manuel et intellectuel. Le meilleur gain vient de ses propres mains. L\'Islam combat le chomage et la paresse et encourage la productivite.',verse:'Et dis : Oeuvrez, car Allah verra votre oeuvre, ainsi que Son Messager et les croyants',verseRef:'At-Tawbah 105',hadith:'Personne n\'a jamais mange de nourriture meilleure que celle gagnee par le travail de ses propres mains — Bukhari',action:'Perfectionnez votre travail aujourd\'hui — etudiez dur ou travaillez avec integrite et considerez-le comme une adoration',young:'Le travail est une adoration ! Etudie bien, range ta chambre et aide ta famille — Allah aime chaque bonne action 🔨'}
  },
  {
    id:6, emoji:'🏠',
    ar:{title:'مكافحة الفقر',desc:'يرى الغزالي: الفقر عدو يجب محاربته. الإسلام يرفض أن يبقى فقير في مجتمع فيه أغنياء. مكافحة الفقر مسؤولية جماعية تبدأ بالزكاة وتمتد إلى الصدقة والوقف وتوفير فرص العمل.',verse:'وَآتِ ذَا الْقُرْبَى حَقَّهُ وَالْمِسْكِينَ وَابْنَ السَّبِيلِ',verseRef:'الإسراء ٢٦',hadith:'من كان معه فضل ظهر فليعد به على من لا ظهر له — رواه مسلم',action:'ابحث اليوم عن طريقة لمساعدة شخص فقير — تبرع بملابس أو طعام أو وقت',young:'لنساعد الفقراء معاً! تبرع بلعبة قديمة أو ملابس لا تحتاجها لشخص يحتاجها 🏠'},
    en:{title:'Poverty Elimination',desc:'Al-Ghazali sees: Poverty is an enemy that must be fought. Islam rejects having poor people in a society that has rich ones. Fighting poverty is a collective responsibility starting with zakat and extending to charity, waqf, and providing job opportunities.',verse:'And give the relative their right, and the needy, and the traveler',verseRef:'Al-Isra 26',hadith:'Whoever has extra provision should share it with those who have none — Muslim',action:'Look today for a way to help someone poor — donate clothes, food, or time',young:'Let us help the poor together! Donate an old toy or clothes you don\'t need to someone who needs them 🏠'},
    fr:{title:'L\'Elimination de la Pauvrete',desc:'Al-Ghazali voit: La pauvrete est un ennemi a combattre. L\'Islam refuse qu\'il y ait des pauvres dans une societe qui a des riches. Combattre la pauvrete est une responsabilite collective commencant par la zakat et s\'etendant a la charite, au waqf et a l\'offre d\'emplois.',verse:'Et donne au proche parent son droit, ainsi qu\'au necessiteux et au voyageur',verseRef:'Al-Isra 26',hadith:'Quiconque a des provisions en surplus doit les partager avec ceux qui n\'en ont pas — Muslim',action:'Cherchez aujourd\'hui un moyen d\'aider une personne pauvre — donnez des vetements, de la nourriture ou du temps',young:'Aidons les pauvres ensemble ! Donne un vieux jouet ou des vetements dont tu n\'as plus besoin a quelqu\'un qui en a besoin 🏠'}
  },
  {
    id:7, emoji:'🏛️',
    ar:{title:'نظام الوقف',desc:'الوقف تجميد أصل مالي وتخصيص عوائده للخير. المسلمون أسسوا أوقافاً للمساجد والمدارس والمستشفيات والآبار. الوقف صدقة جارية تستمر حتى بعد وفاة صاحبها.',verse:'لَنْ تَنَالُوا الْبِرَّ حَتَّى تُنْفِقُوا مِمَّا تُحِبُّونَ',verseRef:'آل عمران ٩٢',hadith:'إذا مات ابن آدم انقطع عمله إلا من ثلاث: صدقة جارية — رواه مسلم',action:'فكر في مشروع وقفي يمكنك المساهمة فيه — حتى لو كان بمبلغ بسيط',young:'الوقف مثل زراعة شجرة تعطي ثماراً للأبد! ازرع شجرة أو ساهم في بناء شيء مفيد للناس 🏛️'},
    en:{title:'The Waqf System',desc:'Waqf is freezing an asset and dedicating its returns to charitable causes. Muslims established waqf for mosques, schools, hospitals, and wells. Waqf is an ongoing charity that continues even after the death of its founder.',verse:'You will never attain righteousness until you spend from what you love',verseRef:'Al Imran 92',hadith:'When a person dies, their deeds stop except for three: ongoing charity — Muslim',action:'Think of a waqf project you can contribute to — even with a small amount',young:'Waqf is like planting a tree that gives fruit forever! Plant a tree or help build something useful for people 🏛️'},
    fr:{title:'Le Systeme du Waqf',desc:'Le Waqf consiste a geler un actif et dedier ses revenus a des causes charitables. Les musulmans ont etabli des waqf pour les mosquees, les ecoles, les hopitaux et les puits. Le Waqf est une charite continue meme apres la mort de son fondateur.',verse:'Vous n\'atteindrez la piete que si vous depensez de ce que vous aimez',verseRef:'Al Imran 92',hadith:'Quand une personne meurt, ses actions s\'arretent sauf trois : une charite continue — Muslim',action:'Pensez a un projet de waqf auquel vous pouvez contribuer — meme avec un petit montant',young:'Le Waqf c\'est comme planter un arbre qui donne des fruits pour toujours ! Plante un arbre ou aide a construire quelque chose d\'utile pour les gens 🏛️'}
  },
  {
    id:8, emoji:'📋',
    ar:{title:'قانون الميراث',desc:'نظام الميراث في الإسلام يوزع التركة على أفراد العائلة بنسب عادلة حددها القرآن. هذا النظام يمنع تكدس الثروة في يد شخص واحد ويضمن حقوق النساء والأطفال واليتامى والأقارب.',verse:'يُوصِيكُمُ اللَّهُ فِي أَوْلَادِكُمْ لِلذَّكَرِ مِثْلُ حَظِّ الْأُنْثَيَيْنِ',verseRef:'النساء ١١',hadith:'تعلموا الفرائض وعلموها الناس — رواه ابن ماجه',action:'تعلم أساسيات الميراث الإسلامي — اسأل والديك أو معلمك عن هذا الموضوع المهم',young:'الميراث يعني توزيع ما يتركه الإنسان بعد وفاته بعدل على عائلته — مثل تقسيم كعكة بين الجميع! 📋'},
    en:{title:'Inheritance Law',desc:'The Islamic inheritance system distributes estate among family members in fair proportions defined by the Quran. This system prevents wealth accumulation by one person and guarantees the rights of women, children, orphans, and relatives.',verse:'Allah instructs you concerning your children: for the male, what is equal to the share of two females',verseRef:'An-Nisa 11',hadith:'Learn the laws of inheritance and teach them to people — Ibn Majah',action:'Learn the basics of Islamic inheritance — ask your parents or teacher about this important topic',young:'Inheritance means fairly distributing what someone leaves behind to their family — like sharing a cake with everyone! 📋'},
    fr:{title:'Le Droit de l\'Heritage',desc:'Le systeme d\'heritage islamique distribue la succession entre les membres de la famille en proportions equitables definies par le Coran. Ce systeme empeche l\'accumulation de richesse par une seule personne et garantit les droits des femmes, des enfants, des orphelins et des proches.',verse:'Allah vous recommande au sujet de vos enfants : au garcon, une part egale a celle de deux filles',verseRef:'An-Nisa 11',hadith:'Apprenez les lois de l\'heritage et enseignez-les aux gens — Ibn Majah',action:'Apprenez les bases de l\'heritage islamique — demandez a vos parents ou a votre professeur sur ce sujet important',young:'L\'heritage c\'est distribuer equitablement ce que quelqu\'un laisse derriere lui a sa famille — comme partager un gateau avec tout le monde ! 📋'}
  },
  {
    id:9, emoji:'🏪',
    ar:{title:'أخلاقيات التجارة',desc:'التاجر المسلم صادق أمين لا يغش ولا يخدع. الإسلام يحرّم الغش والتدليس والكذب في البيع والشراء. التاجر الصدوق الأمين مع النبيين والصديقين والشهداء يوم القيامة.',verse:'وَيْلٌ لِلْمُطَفِّفِينَ',verseRef:'المطففين ١',hadith:'التاجر الصدوق الأمين مع النبيين والصديقين والشهداء — رواه الترمذي',action:'كن صادقاً في كل تعامل تجاري اليوم — لا تغش ولا تخدع ولا تبالغ في الأسعار',young:'التاجر الصادق يحبه الله والناس! لا تغش ولا تكذب عندما تبيع أو تشتري شيئاً 🏪'},
    en:{title:'Trade Ethics',desc:'A Muslim trader is honest and trustworthy, never cheating or deceiving. Islam prohibits fraud, deception, and lying in buying and selling. The honest and trustworthy merchant will be with the prophets and the righteous on the Day of Judgment.',verse:'Woe to those who give less than due',verseRef:'Al-Mutaffifin 1',hadith:'The honest and trustworthy merchant will be with the prophets and the truthful and the martyrs — Tirmidhi',action:'Be honest in every business dealing today — don\'t cheat, deceive, or overcharge',young:'Allah and people love the honest trader! Never cheat or lie when you buy or sell something 🏪'},
    fr:{title:'L\'Ethique du Commerce',desc:'Le commercant musulman est honnete et digne de confiance, ne trichant ni ne trompant jamais. L\'Islam interdit la fraude, la tromperie et le mensonge dans l\'achat et la vente. Le commercant honnete et digne de confiance sera avec les prophetes et les justes le Jour du Jugement.',verse:'Malheur aux fraudeurs',verseRef:'Al-Mutaffifin 1',hadith:'Le commercant honnete et digne de confiance sera avec les prophetes, les veridiques et les martyrs — Tirmidhi',action:'Soyez honnete dans chaque transaction commerciale aujourd\'hui — ne trichez pas, ne trompez pas et ne surchargez pas',young:'Allah et les gens aiment le commercant honnete ! Ne triche jamais et ne mens pas quand tu achetes ou vends quelque chose 🏪'}
  },
  {
    id:10, emoji:'🚷',
    ar:{title:'تحريم الاحتكار',desc:'الاحتكار حرام في الإسلام لأنه يضر بالناس ويرفع الأسعار ظلماً. من احتكر سلعة يحتاجها الناس فقد أخطأ وأثم. الإسلام يدعو لحرية التجارة مع منع الممارسات الضارة.',verse:'وَلَا تَأْكُلُوا أَمْوَالَكُمْ بَيْنَكُمْ بِالْبَاطِلِ',verseRef:'البقرة ١٨٨',hadith:'من احتكر فهو خاطئ — رواه مسلم',action:'لا تحتكر شيئاً يحتاجه الناس — شارك واجعل الخير يصل للجميع',young:'الاحتكار يعني إخفاء الأشياء لبيعها بأسعار عالية — وهذا ظلم! شارك كل شيء بعدل 🚷'},
    en:{title:'Monopoly Ban',desc:'Monopoly is forbidden in Islam because it harms people and raises prices unfairly. Whoever hoards goods that people need has sinned. Islam calls for free trade while preventing harmful practices.',verse:'And do not consume one another\'s wealth unjustly',verseRef:'Al-Baqarah 188',hadith:'Whoever hoards is a sinner — Muslim',action:'Don\'t hoard something people need — share and let goodness reach everyone',young:'Monopoly means hiding things to sell them at high prices — that is unfair! Share everything fairly 🚷'},
    fr:{title:'L\'Interdiction du Monopole',desc:'Le monopole est interdit en Islam car il nuit aux gens et augmente les prix injustement. Quiconque stocke des biens dont les gens ont besoin a peche. L\'Islam appelle au libre commerce tout en empechant les pratiques nuisibles.',verse:'Et ne mangez pas vos biens entre vous injustement',verseRef:'Al-Baqarah 188',hadith:'Quiconque stocke est un pecheur — Muslim',action:'Ne stockez pas quelque chose dont les gens ont besoin — partagez et laissez le bien atteindre tout le monde',young:'Le monopole c\'est cacher des choses pour les vendre a des prix eleves — c\'est injuste ! Partage tout equitablement 🚷'}
  },
  {
    id:11, emoji:'🏦',
    ar:{title:'بيت المال العام',desc:'بيت المال مؤسسة إسلامية تجمع إيرادات الدولة وتنفقها على مصالح المسلمين. أمواله ليست ملكاً للحاكم بل أمانة للشعب. يُنفق منه على الفقراء والجيش والتعليم والبنية التحتية.',verse:'إِنَّ اللَّهَ يَأْمُرُكُمْ أَنْ تُؤَدُّوا الْأَمَانَاتِ إِلَى أَهْلِهَا',verseRef:'النساء ٥٨',hadith:'من استعملناه على عمل فرزقناه رزقاً فما أخذ بعد ذلك فهو غلول — رواه أبو داود',action:'فكر في كيف يمكن للمال العام أن يخدم الجميع — واحرص على المال العام في مدرستك وحيك',young:'بيت المال مثل حصالة كبيرة للبلد كلها! الأموال فيها للجميع — للمدارس والمستشفيات والطرق 🏦'},
    en:{title:'The Public Treasury',desc:'Bayt al-Mal is an Islamic institution that collects state revenues and spends them on the welfare of Muslims. Its funds are not the ruler\'s property but a trust for the people. It is spent on the poor, the military, education, and infrastructure.',verse:'Indeed, Allah commands you to render trusts to whom they are due',verseRef:'An-Nisa 58',hadith:'Whoever we appoint to a job and provide a salary, whatever they take beyond that is theft — Abu Dawud',action:'Think about how public funds can serve everyone — and protect public property in your school and neighborhood',young:'The public treasury is like a big piggy bank for the whole country! The money in it is for everyone — for schools, hospitals, and roads 🏦'},
    fr:{title:'Le Tresor Public',desc:'Bayt al-Mal est une institution islamique qui collecte les revenus de l\'Etat et les depense pour le bien-etre des musulmans. Ses fonds ne sont pas la propriete du dirigeant mais un depot pour le peuple. Il est depense pour les pauvres, l\'armee, l\'education et les infrastructures.',verse:'Certes, Allah vous commande de rendre les depots a leurs ayants droit',verseRef:'An-Nisa 58',hadith:'Quiconque nous nommons a un poste et lui fournissons un salaire, tout ce qu\'il prend au-dela est du vol — Abu Dawud',action:'Pensez a comment les fonds publics peuvent servir tout le monde — et protegez les biens publics dans votre ecole et quartier',young:'Le tresor public c\'est comme une grande tirelire pour tout le pays ! L\'argent est pour tout le monde — pour les ecoles, les hopitaux et les routes 🏦'}
  },
  {
    id:12, emoji:'🌾',
    ar:{title:'حقوق الأرض',desc:'الأرض نعمة من الله يجب استثمارها وعدم تعطيلها. من أحيا أرضاً ميتة فهي له. الإسلام يحارب احتكار الأراضي وتعطيلها. الزراعة من أشرف الأعمال والمزارع مأجور على كل ما يُؤكل من زرعه.',verse:'هُوَ أَنْشَأَكُمْ مِنَ الْأَرْضِ وَاسْتَعْمَرَكُمْ فِيهَا',verseRef:'هود ٦١',hadith:'من أحيا أرضاً ميتة فهي له — رواه الترمذي',action:'ازرع نبتة اليوم — أو اعتنِ بحديقة — واعلم أن إعمار الأرض عبادة',young:'ازرع شيئاً اليوم! كل شجرة أو نبتة تزرعها تكون لك صدقة عند الله 🌾'},
    en:{title:'Land Rights',desc:'Land is a blessing from Allah that must be utilized, not left idle. Whoever revives barren land, it belongs to them. Islam fights land hoarding and idling. Farming is among the noblest deeds and a farmer is rewarded for everything eaten from their crops.',verse:'He produced you from the earth and settled you in it',verseRef:'Hud 61',hadith:'Whoever revives dead land, it is theirs — Tirmidhi',action:'Plant something today — or take care of a garden — and know that cultivating the earth is worship',young:'Plant something today! Every tree or plant you grow is charity in the eyes of Allah 🌾'},
    fr:{title:'Les Droits Fonciers',desc:'La terre est une benediction d\'Allah qui doit etre utilisee, pas laissee en friche. Quiconque revitalise une terre sterile, elle lui appartient. L\'Islam combat l\'accaparement des terres et leur mise en jachere. L\'agriculture est parmi les actes les plus nobles et le fermier est recompense pour tout ce qui est mange de ses cultures.',verse:'C\'est Lui qui vous a produits de la terre et vous y a installes',verseRef:'Hud 61',hadith:'Quiconque revitalise une terre morte, elle est a lui — Tirmidhi',action:'Plantez quelque chose aujourd\'hui — ou prenez soin d\'un jardin — et sachez que cultiver la terre est une adoration',young:'Plante quelque chose aujourd\'hui ! Chaque arbre ou plante que tu fais pousser est une charite aux yeux d\'Allah 🌾'}
  },
  {
    id:13, emoji:'💝',
    ar:{title:'الإنفاق في سبيل الله',desc:'الإنفاق في سبيل الله ليس خسارة بل استثمار يضاعفه الله. المسلم ينفق من ماله طوعاً بعد أداء الزكاة. الصدقة لا تنقص المال بل تزيده بركة. وكل معروف صدقة.',verse:'مَثَلُ الَّذِينَ يُنْفِقُونَ أَمْوَالَهُمْ فِي سَبِيلِ اللَّهِ كَمَثَلِ حَبَّةٍ أَنْبَتَتْ سَبْعَ سَنَابِلَ',verseRef:'البقرة ٢٦١',hadith:'ما نقصت صدقة من مال — رواه مسلم',action:'تصدق اليوم بشيء — حتى لو بابتسامة أو كلمة طيبة — فكل معروف صدقة',young:'الصدقة مثل البذرة — تزرعها صغيرة فتصبح شجرة كبيرة عند الله! تصدق كل يوم 💝'},
    en:{title:'Spending in God\'s Way',desc:'Spending in Allah\'s way is not a loss but an investment that Allah multiplies. A Muslim spends voluntarily from their wealth after paying zakat. Charity does not decrease wealth but increases its blessing. Every good deed is charity.',verse:'The example of those who spend their wealth in the way of Allah is like a seed that grows seven spears',verseRef:'Al-Baqarah 261',hadith:'Charity does not decrease wealth — Muslim',action:'Give charity today — even with a smile or a kind word — for every good deed is charity',young:'Charity is like a seed — you plant it small and it becomes a big tree with Allah! Give charity every day 💝'},
    fr:{title:'Depenser dans le Chemin de Dieu',desc:'Depenser dans le chemin d\'Allah n\'est pas une perte mais un investissement qu\'Allah multiplie. Le musulman depense volontairement de sa richesse apres avoir paye la zakat. La charite ne diminue pas la richesse mais augmente sa benediction. Chaque bonne action est une charite.',verse:'L\'exemple de ceux qui depensent leurs biens dans le chemin d\'Allah est comme une graine qui produit sept epis',verseRef:'Al-Baqarah 261',hadith:'La charite ne diminue pas la richesse — Muslim',action:'Donnez la charite aujourd\'hui — meme avec un sourire ou un bon mot — car chaque bonne action est une charite',young:'La charite c\'est comme une graine — tu la plantes petite et elle devient un grand arbre aupres d\'Allah ! Donne la charite chaque jour 💝'}
  },
  {
    id:14, emoji:'⚡',
    ar:{title:'التوازن الاقتصادي',desc:'الإسلام يدعو للتوازن بين الإنفاق والادخار. لا إسراف ولا تقتير. الاقتصاد الإسلامي يجمع بين حرية الفرد ومسؤولية المجتمع. لا رأسمالية مطلقة ولا اشتراكية قاهرة بل طريق وسط عادل.',verse:'وَلَا تَجْعَلْ يَدَكَ مَغْلُولَةً إِلَى عُنُقِكَ وَلَا تَبْسُطْهَا كُلَّ الْبَسْطِ',verseRef:'الإسراء ٢٩',hadith:'ما عال من اقتصد — رواه أحمد',action:'راجع مصاريفك اليوم: هل تنفق بتوازن؟ ادخر شيئاً وأنفق شيئاً وتصدق بشيء',young:'لا تنفق كل مالك دفعة واحدة ولا تبخل به! كن ذكياً — ادخر قليلاً وأنفق قليلاً وتصدق قليلاً ⚡'},
    en:{title:'Economic Balance',desc:'Islam calls for balance between spending and saving. No extravagance and no stinginess. Islamic economics combines individual freedom with social responsibility. Neither absolute capitalism nor oppressive socialism but a fair middle path.',verse:'And do not make your hand chained to your neck nor extend it completely',verseRef:'Al-Isra 29',hadith:'No one who is moderate will become poor — Ahmad',action:'Review your spending today: are you balanced? Save some, spend some, and give some in charity',young:'Don\'t spend all your money at once and don\'t be stingy! Be smart — save some, spend some, and give some in charity ⚡'},
    fr:{title:'L\'Equilibre Economique',desc:'L\'Islam appelle a l\'equilibre entre les depenses et l\'epargne. Ni extravagance ni avarice. L\'economie islamique combine la liberte individuelle avec la responsabilite sociale. Ni capitalisme absolu ni socialisme oppressif mais une voie du milieu equitable.',verse:'Et ne porte pas ta main enchainee a ton cou et ne l\'etends pas dans toute son extension',verseRef:'Al-Isra 29',hadith:'Personne qui est modere ne deviendra pauvre — Ahmad',action:'Revisez vos depenses aujourd\'hui : etes-vous equilibre ? Epargnez un peu, depensez un peu et donnez un peu en charite',young:'Ne depense pas tout ton argent d\'un coup et ne sois pas avare ! Sois malin — epargne un peu, depense un peu et donne un peu en charite ⚡'}
  },
  {
    id:15, emoji:'🌍',
    ar:{title:'الاستدامة والحفاظ على الموارد',desc:'الإسلام يدعو للحفاظ على الموارد وعدم الإسراف. حتى في الوضوء نُهينا عن الإسراف في الماء. الأرض أمانة في أعناقنا يجب أن نحافظ عليها للأجيال القادمة. الإفساد في الأرض من أعظم الذنوب.',verse:'وَلَا تُفْسِدُوا فِي الْأَرْضِ بَعْدَ إِصْلَاحِهَا',verseRef:'الأعراف ٥٦',hadith:'إن قامت الساعة وبيد أحدكم فسيلة فإن استطاع أن لا يقوم حتى يغرسها فليفعل — رواه أحمد',action:'وفّر الماء والكهرباء اليوم — وأعد تدوير شيء — واحمِ البيئة لأجل الأجيال القادمة',young:'لا تضيّع الماء والطعام! الأرض أمانة — حافظ عليها للأطفال الذين سيأتون بعدك 🌍'},
    en:{title:'Sustainability and Resource Conservation',desc:'Islam calls for conserving resources and avoiding waste. Even in ablution, we are told not to waste water. The earth is a trust on our shoulders that we must preserve for future generations. Corruption on earth is one of the greatest sins.',verse:'And do not cause corruption on the earth after it has been set in order',verseRef:'Al-Araf 56',hadith:'If the Hour comes while one of you has a seedling in hand, if they can plant it before standing, let them do so — Ahmad',action:'Save water and electricity today — recycle something — and protect the environment for future generations',young:'Don\'t waste water and food! The earth is a trust — protect it for the children who will come after you 🌍'},
    fr:{title:'La Durabilite et la Conservation des Ressources',desc:'L\'Islam appelle a la conservation des ressources et a eviter le gaspillage. Meme dans les ablutions, on nous dit de ne pas gaspiller l\'eau. La terre est un depot sur nos epaules que nous devons preserver pour les generations futures. La corruption sur terre est l\'un des plus grands peches.',verse:'Et ne semez pas la corruption sur terre apres qu\'elle a ete reformee',verseRef:'Al-Araf 56',hadith:'Si l\'Heure vient alors que l\'un d\'entre vous a un plant dans la main, s\'il peut le planter avant de se lever, qu\'il le fasse — Ahmad',action:'Economisez l\'eau et l\'electricite aujourd\'hui — recyclez quelque chose — et protegez l\'environnement pour les generations futures',young:'Ne gaspille pas l\'eau et la nourriture ! La terre est un depot — protege-la pour les enfants qui viendront apres toi 🌍'}
  },
  {
    id:16, emoji:'🏧',
    ar:{title:'المصرفية الإسلامية',desc:'البنوك الإسلامية تقوم على مبدأ المشاركة في الربح والخسارة بدلاً من الربا. تستخدم عقوداً شرعية مثل المرابحة والمضاربة والمشاركة والإجارة. هذا النظام يربط المال بالاقتصاد الحقيقي ويمنع المضاربات الوهمية التي تدمر الاقتصادات. المصرفية الإسلامية نمت بشكل كبير في العقود الأخيرة وأثبتت صلابتها أمام الأزمات المالية العالمية.',verse:'يَا أَيُّهَا الَّذِينَ آمَنُوا اتَّقُوا اللَّهَ وَذَرُوا مَا بَقِيَ مِنَ الرِّبَا',verseRef:'البقرة ٢٧٨',hadith:'الذهب بالذهب والفضة بالفضة مثلاً بمثل يداً بيد — رواه مسلم',action:'ابحث عن بنك إسلامي في بلدك وتعرف على منتجاته — قارن بين عقد المرابحة والقرض الربوي',young:'البنوك الإسلامية تعمل بطريقة عادلة! بدلاً من أخذ فوائد ظالمة، يتشارك الناس في الربح والخسارة معاً 🏧'},
    en:{title:'Islamic Banking',desc:'Islamic banks operate on the principle of profit and loss sharing instead of interest. They use Shariah-compliant contracts such as Murabaha, Mudarabah, Musharakah, and Ijarah. This system ties money to the real economy and prevents speculative bubbles that destroy economies. Islamic banking has grown significantly in recent decades and proved its resilience against global financial crises.',verse:'O you who believe, fear Allah and give up what remains of interest',verseRef:'Al-Baqarah 278',hadith:'Gold for gold and silver for silver, like for like, hand to hand — Muslim',action:'Research an Islamic bank in your country and learn about its products — compare a Murabaha contract with an interest-based loan',young:'Islamic banks work fairly! Instead of unfair interest, people share in both profit and loss together 🏧'},
    fr:{title:'La Banque Islamique',desc:'Les banques islamiques fonctionnent sur le principe du partage des profits et pertes au lieu de l\'interet. Elles utilisent des contrats conformes a la Charia comme la Murabaha, la Mudarabah, la Musharakah et l\'Ijarah. Ce systeme lie l\'argent a l\'economie reelle et previent les bulles speculatives qui detruisent les economies. La banque islamique a connu une croissance significative ces dernieres decennies et prouve sa resilience face aux crises financieres mondiales.',verse:'O vous qui croyez, craignez Allah et renoncez au reste de l\'interet',verseRef:'Al-Baqarah 278',hadith:'Or contre or et argent contre argent, semblable pour semblable, main a main — Muslim',action:'Recherchez une banque islamique dans votre pays et decouvrez ses produits — comparez un contrat Murabaha avec un pret a interet',young:'Les banques islamiques fonctionnent equitablement ! Au lieu d\'interets injustes, les gens partagent profits et pertes ensemble 🏧'}
  },
  {
    id:17, emoji:'🤲',
    ar:{title:'التمويل الأصغر الإسلامي',desc:'التمويل الأصغر الإسلامي يقدم قروضاً حسنة وتمويلاً صغيراً للفقراء والمحتاجين لمساعدتهم على بدء مشاريع صغيرة. يعتمد على القرض الحسن والمضاربة والمشاركة المتناقصة. هذا النظام يمكّن الفقراء من الاعتماد على أنفسهم بدلاً من الاتكال الدائم على الصدقات. الإسلام يشجع تحويل الفقير إلى منتج فاعل في المجتمع من خلال توفير أدوات العمل والتدريب.',verse:'مَنْ ذَا الَّذِي يُقْرِضُ اللَّهَ قَرْضًا حَسَنًا فَيُضَاعِفَهُ لَهُ أَضْعَافًا كَثِيرَةً',verseRef:'البقرة ٢٤٥',hadith:'ما من مسلم يقرض مسلماً قرضاً مرتين إلا كان كصدقة مرة — رواه ابن ماجه',action:'ابحث عن مؤسسة تمويل أصغر إسلامية وتعلم كيف تساعد الفقراء على بدء مشاريعهم',young:'القرض الحسن مثل مساعدة صديقك ليشتري أدوات لمشروعه الصغير — بلا فوائد ظالمة! 🤲'},
    en:{title:'Islamic Microfinance',desc:'Islamic microfinance provides interest-free loans and small financing to the poor and needy to help them start small businesses. It relies on Qard Hasan (benevolent loans), Mudarabah, and diminishing Musharakah. This system empowers the poor to become self-reliant instead of depending permanently on charity. Islam encourages transforming the poor into productive members of society by providing tools and training.',verse:'Who is it that would loan Allah a goodly loan so He may multiply it for them many times over',verseRef:'Al-Baqarah 245',hadith:'No Muslim lends another Muslim a loan twice except that it counts as charity once — Ibn Majah',action:'Research an Islamic microfinance institution and learn how it helps the poor start their businesses',young:'A benevolent loan is like helping your friend buy tools for their small project — with no unfair interest! 🤲'},
    fr:{title:'La Microfinance Islamique',desc:'La microfinance islamique fournit des prets sans interet et de petits financements aux pauvres et necessiteux pour les aider a demarrer de petites entreprises. Elle repose sur le Qard Hasan (pret bienveillant), la Mudarabah et la Musharakah degressive. Ce systeme permet aux pauvres de devenir autonomes au lieu de dependre en permanence de la charite. L\'Islam encourage la transformation des pauvres en membres productifs de la societe en fournissant outils et formation.',verse:'Qui est celui qui prete a Allah un beau pret, afin qu\'Il le lui multiplie',verseRef:'Al-Baqarah 245',hadith:'Aucun musulman ne prete a un autre musulman deux fois sans que cela ne compte comme une charite — Ibn Majah',action:'Recherchez une institution de microfinance islamique et decouvrez comment elle aide les pauvres',young:'Un pret bienveillant c\'est comme aider ton ami a acheter des outils pour son petit projet — sans interet injuste ! 🤲'}
  },
  {
    id:18, emoji:'📊',
    ar:{title:'الاستثمار الأخلاقي',desc:'الاستثمار في الإسلام يخضع لمعايير أخلاقية صارمة. يُحرَّم الاستثمار في الخمور والقمار والأسلحة المحرمة والتبغ وكل ما يضر بالإنسان والبيئة. يجب أن يكون الاستثمار في مشاريع نافعة تخدم المجتمع وتحقق التنمية المستدامة. المستثمر المسلم يبحث عن الربح الحلال ويتجنب الشبهات ويحرص على أن يكون ماله مصدر خير لا شر.',verse:'وَتَعَاوَنُوا عَلَى الْبِرِّ وَالتَّقْوَى وَلَا تَعَاوَنُوا عَلَى الْإِثْمِ وَالْعُدْوَانِ',verseRef:'المائدة ٢',hadith:'إن الله طيب لا يقبل إلا طيباً — رواه مسلم',action:'راجع استثماراتك أو مشترياتك: هل هي حلال ومفيدة للمجتمع؟ اختر المنتجات الأخلاقية',young:'استثمر أموالك في أشياء جيدة تساعد الناس! لا تضع مالك في أشياء ضارة مثل الدخان أو القمار 📊'},
    en:{title:'Ethical Investment',desc:'Investment in Islam is subject to strict ethical standards. It is forbidden to invest in alcohol, gambling, prohibited weapons, tobacco, and anything that harms people or the environment. Investment must be in beneficial projects that serve society and achieve sustainable development. The Muslim investor seeks halal profit, avoids doubtful matters, and ensures their wealth is a source of good, not harm.',verse:'And cooperate in righteousness and piety and do not cooperate in sin and aggression',verseRef:'Al-Ma\'idah 2',hadith:'Allah is pure and only accepts what is pure — Muslim',action:'Review your investments or purchases: are they halal and beneficial to society? Choose ethical products',young:'Invest your money in good things that help people! Don\'t put your money in harmful things like tobacco or gambling 📊'},
    fr:{title:'L\'Investissement Ethique',desc:'L\'investissement en Islam est soumis a des normes ethiques strictes. Il est interdit d\'investir dans l\'alcool, les jeux de hasard, les armes interdites, le tabac et tout ce qui nuit aux gens ou a l\'environnement. L\'investissement doit etre dans des projets benefiques qui servent la societe et realisent un developpement durable. L\'investisseur musulman cherche le profit halal, evite les doutes et s\'assure que sa richesse est source de bien.',verse:'Entraidez-vous dans la bienfaisance et la piete et ne vous entraidez pas dans le peche et l\'agression',verseRef:'Al-Ma\'idah 2',hadith:'Allah est pur et n\'accepte que ce qui est pur — Muslim',action:'Revisez vos investissements ou achats : sont-ils halal et benefiques pour la societe ? Choisissez des produits ethiques',young:'Investis ton argent dans de bonnes choses qui aident les gens ! Ne mets pas ton argent dans des choses nocives 📊'}
  },
  {
    id:19, emoji:'📜',
    ar:{title:'صكوك السندات الإسلامية',desc:'الصكوك هي البديل الإسلامي للسندات التقليدية. بدلاً من إقراض المال بفائدة، يشتري المستثمر حصة في أصل حقيقي ويشارك في عوائده. الصكوك مرتبطة بأصول ملموسة مثل العقارات أو المشاريع التجارية مما يجعلها أكثر أماناً واستقراراً. سوق الصكوك نمت لتصبح صناعة عالمية تقدر بمئات المليارات وتجذب مستثمرين من مختلف الخلفيات.',verse:'يَا أَيُّهَا الَّذِينَ آمَنُوا لَا تَأْكُلُوا أَمْوَالَكُمْ بَيْنَكُمْ بِالْبَاطِلِ إِلَّا أَنْ تَكُونَ تِجَارَةً عَنْ تَرَاضٍ مِنْكُمْ',verseRef:'النساء ٢٩',hadith:'البيعان بالخيار ما لم يتفرقا فإن صدقا وبيّنا بورك لهما — متفق عليه',action:'تعلم عن الصكوك الإسلامية وكيف تختلف عن السندات الربوية — وابحث عن صناديق استثمارية إسلامية',young:'الصكوك مثل شراء جزء من مشروع حقيقي! بدلاً من إقراض المال بفائدة، تملك جزءاً من المشروع وتشارك في أرباحه 📜'},
    en:{title:'Islamic Sukuk Bonds',desc:'Sukuk are the Islamic alternative to conventional bonds. Instead of lending money at interest, the investor buys a share in a real asset and participates in its returns. Sukuk are tied to tangible assets such as real estate or commercial projects, making them safer and more stable. The sukuk market has grown into a global industry worth hundreds of billions, attracting investors from diverse backgrounds.',verse:'O you who believe, do not consume one another\'s wealth unjustly but only through lawful trade by mutual consent',verseRef:'An-Nisa 29',hadith:'The two parties in a transaction have the option to cancel as long as they have not parted; if they are honest and transparent, their transaction is blessed — Agreed upon',action:'Learn about Islamic sukuk and how they differ from interest-based bonds — research Islamic investment funds',young:'Sukuk are like buying a piece of a real project! Instead of lending money for interest, you own part of the project and share its profits 📜'},
    fr:{title:'Les Sukuk Islamiques',desc:'Les sukuk sont l\'alternative islamique aux obligations conventionnelles. Au lieu de preter de l\'argent a interet, l\'investisseur achete une part dans un actif reel et participe a ses rendements. Les sukuk sont lies a des actifs tangibles comme l\'immobilier ou les projets commerciaux, ce qui les rend plus surs et stables. Le marche des sukuk est devenu une industrie mondiale de centaines de milliards, attirant des investisseurs de divers horizons.',verse:'O croyants, ne mangez pas vos biens entre vous injustement, sauf s\'il s\'agit d\'un commerce consenti',verseRef:'An-Nisa 29',hadith:'Les deux parties d\'une transaction ont le choix tant qu\'elles ne se sont pas separees ; si elles sont honnetes, la transaction est benie — Unanimement reconnu',action:'Decouvrez les sukuk islamiques et comment ils different des obligations a interet — recherchez des fonds d\'investissement islamiques',young:'Les sukuk c\'est comme acheter un morceau d\'un vrai projet ! Au lieu de preter a interet, tu possedes une part du projet et partages ses profits 📜'}
  },
  {
    id:20, emoji:'🛡️',
    ar:{title:'الوقاية من الأزمات الاقتصادية',desc:'الاقتصاد الإسلامي يحتوي على آليات ذاتية للوقاية من الأزمات المالية. تحريم الربا يمنع فقاعات الديون، وتحريم الغرر يمنع المضاربات الخطرة، والزكاة تضمن تدفق المال للفقراء. الأزمات المالية العالمية مثل أزمة ٢٠٠٨ كانت بسبب الربا والمضاربات الوهمية وغياب الرقابة الأخلاقية — وهي أمور يحاربها الإسلام منذ ١٤٠٠ سنة. النظام الإسلامي يربط المال بالإنتاج الحقيقي ويمنع خلق أموال من لا شيء.',verse:'وَمَا آتَيْتُمْ مِنْ رِبًا لِيَرْبُوَ فِي أَمْوَالِ النَّاسِ فَلَا يَرْبُو عِنْدَ اللَّهِ',verseRef:'الروم ٣٩',hadith:'من غشنا فليس منا — رواه مسلم',action:'ابحث عن أسباب الأزمة المالية العالمية ٢٠٠٨ وقارنها بمبادئ الاقتصاد الإسلامي — ستفاجأ بالنتائج',young:'الاقتصاد الإسلامي يحمي الناس من الأزمات المالية! القواعد الإسلامية تمنع الغش والظلم في المال 🛡️'},
    en:{title:'Economic Crisis Prevention',desc:'The Islamic economy contains built-in mechanisms for preventing financial crises. Prohibiting riba prevents debt bubbles, forbidding gharar (excessive uncertainty) prevents dangerous speculation, and zakat ensures money flows to the poor. Global financial crises like 2008 were caused by usury, speculative bubbles, and the absence of ethical oversight — all things Islam has fought against for 1400 years. The Islamic system ties money to real production and prevents creating money from nothing.',verse:'And whatever you give for interest to increase within the wealth of people, it will not increase with Allah',verseRef:'Ar-Rum 39',hadith:'Whoever cheats us is not one of us — Muslim',action:'Research the causes of the 2008 global financial crisis and compare them with Islamic economic principles — the results will surprise you',young:'The Islamic economy protects people from financial crises! Islamic rules prevent cheating and injustice in money matters 🛡️'},
    fr:{title:'La Prevention des Crises Economiques',desc:'L\'economie islamique contient des mecanismes integres de prevention des crises financieres. L\'interdiction du riba empeche les bulles de dette, l\'interdiction du gharar (incertitude excessive) empeche la speculation dangereuse, et la zakat assure la circulation de l\'argent vers les pauvres. Les crises financieres mondiales comme celle de 2008 etaient causees par l\'usure, la speculation et l\'absence de surveillance ethique — toutes des choses que l\'Islam combat depuis 1400 ans. Le systeme islamique lie l\'argent a la production reelle et empeche la creation d\'argent a partir de rien.',verse:'Et ce que vous donnez en interet pour accroitre la richesse des gens ne croit pas aupres d\'Allah',verseRef:'Ar-Rum 39',hadith:'Celui qui nous trompe n\'est pas des notres — Muslim',action:'Recherchez les causes de la crise financiere mondiale de 2008 et comparez-les avec les principes economiques islamiques — les resultats vous surprendront',young:'L\'economie islamique protege les gens des crises financieres ! Les regles islamiques empechent la fraude et l\'injustice 🛡️'}
  }
];

// ═══════════════ QUIZ DATA (Who Wants to Be a Scholar?) ═══════════════
const QUIZ = [
  {
    ar:{q:'ما الركن الإسلامي الذي يحارب الفقر ويطهّر المال؟',opts:['الصيام','الحج','الزكاة','الصلاة'],correct:2,hint:'هذا الركن يُخرج من أموال الأغنياء للفقراء',quran:'التوبة ١٠٣'},
    en:{q:'Which Islamic pillar fights poverty and purifies wealth?',opts:['Fasting','Hajj','Zakat','Prayer'],correct:2,hint:'This pillar takes from the wealth of the rich for the poor',quran:'At-Tawbah 103'},
    fr:{q:'Quel pilier islamique combat la pauvrete et purifie la richesse ?',opts:['Le Jeune','Le Hajj','La Zakat','La Priere'],correct:2,hint:'Ce pilier prend de la richesse des riches pour les pauvres',quran:'At-Tawbah 103'}
  },
  {
    ar:{q:'أكمل الآية: "وَأَحَلَّ اللَّهُ الْبَيْعَ وَحَرَّمَ ..."',opts:['الكذب','الربا','السرقة','الغش'],correct:1,hint:'هذا التحريم يمنع استغلال المحتاجين',quran:'البقرة ٢٧٥'},
    en:{q:'Complete the verse: "Allah has permitted trade and forbidden..."',opts:['Lying','Riba (usury)','Theft','Fraud'],correct:1,hint:'This prohibition prevents exploiting the needy',quran:'Al-Baqarah 275'},
    fr:{q:'Completez le verset : « Allah a rendu licite le commerce et a interdit... »',opts:['Le Mensonge','Le Riba (usure)','Le Vol','La Fraude'],correct:1,hint:'Cette interdiction empeche l\'exploitation des necessiteux',quran:'Al-Baqarah 275'}
  },
  {
    ar:{q:'ما الحديث الذي يصف من يأكل وجاره جائع؟',opts:['ليس كريماً','ليس مؤمناً','ليس صادقاً','ليس عادلاً'],correct:1,hint:'يتعلق بحقوق الجار في الإسلام',quran:'الحشر ٧'},
    en:{q:'What does the hadith say about someone who eats while their neighbor is hungry?',opts:['Not generous','Not a believer','Not honest','Not just'],correct:1,hint:'It relates to neighbors\' rights in Islam',quran:'Al-Hashr 7'},
    fr:{q:'Que dit le hadith sur quelqu\'un qui mange tandis que son voisin a faim ?',opts:['Pas genereux','Pas croyant','Pas honnete','Pas juste'],correct:1,hint:'Cela concerne les droits du voisin en Islam',quran:'Al-Hashr 7'}
  },
  {
    ar:{q:'ما معنى "من احتكر فهو خاطئ"؟',opts:['من ادّخر المال','من حبس السلع لرفع سعرها','من باع بثمن قليل','من اشترى كثيراً'],correct:1,hint:'هذا الحديث يحرّم ممارسة تضرّ بالمستهلكين',quran:'البقرة ١٨٨'},
    en:{q:'What does "Whoever hoards is a sinner" mean?',opts:['Who saves money','Who withholds goods to raise prices','Who sells cheaply','Who buys a lot'],correct:1,hint:'This hadith prohibits a practice that harms consumers',quran:'Al-Baqarah 188'},
    fr:{q:'Que signifie « Quiconque stocke est un pecheur » ?',opts:['Qui epargne de l\'argent','Qui retient les biens pour augmenter les prix','Qui vend a bas prix','Qui achete beaucoup'],correct:1,hint:'Ce hadith interdit une pratique qui nuit aux consommateurs',quran:'Al-Baqarah 188'}
  },
  {
    ar:{q:'ما هو الوقف في الإسلام؟',opts:['ضريبة حكومية','تجميد أصل وتخصيص عوائده للخير','قرض بفائدة','ميراث عائلي'],correct:1,hint:'هذا النظام يستمر حتى بعد وفاة صاحبه',quran:'آل عمران ٩٢'},
    en:{q:'What is Waqf in Islam?',opts:['Government tax','Freezing an asset and dedicating its returns to charity','Interest-bearing loan','Family inheritance'],correct:1,hint:'This system continues even after the founder\'s death',quran:'Al Imran 92'},
    fr:{q:'Qu\'est-ce que le Waqf en Islam ?',opts:['Un impot gouvernemental','Geler un actif et dedier ses revenus a la charite','Un pret a interet','Un heritage familial'],correct:1,hint:'Ce systeme continue meme apres la mort du fondateur',quran:'Al Imran 92'}
  },
  {
    ar:{q:'أكمل الحديث: "ما أكل أحد طعاماً خيراً من أن يأكل من ..."',opts:['صدقة الناس','عمل يده','مال أبيه','تجارته'],correct:1,hint:'يتعلق بقيمة الكسب الذاتي',quran:'التوبة ١٠٥'},
    en:{q:'Complete the hadith: "No food is better than what one earns from..."',opts:['People\'s charity','The work of their own hands','Their father\'s wealth','Their trade'],correct:1,hint:'It relates to the value of self-earned income',quran:'At-Tawbah 105'},
    fr:{q:'Completez le hadith : « Aucune nourriture n\'est meilleure que celle gagnee par... »',opts:['La charite des gens','Le travail de ses propres mains','La richesse de son pere','Son commerce'],correct:1,hint:'Cela concerne la valeur du revenu gagne par soi-meme',quran:'At-Tawbah 105'}
  },
  {
    ar:{q:'ما الآية التي تنهى عن تداول المال بين الأغنياء فقط؟',opts:['آية الكرسي','آية الدَّين','كي لا يكون دولة بين الأغنياء','آية المواريث'],correct:2,hint:'هذه الآية في سورة الحشر',quran:'الحشر ٧'},
    en:{q:'Which verse forbids wealth from circulating only among the rich?',opts:['Ayat al-Kursi','The verse of debt','So that it not be a distribution among the rich','The inheritance verse'],correct:2,hint:'This verse is in Surah Al-Hashr',quran:'Al-Hashr 7'},
    fr:{q:'Quel verset interdit que la richesse ne circule qu\'entre les riches ?',opts:['Ayat al-Kursi','Le verset de la dette','Pour que cela ne soit pas distribue entre les riches','Le verset de l\'heritage'],correct:2,hint:'Ce verset est dans la Sourate Al-Hashr',quran:'Al-Hashr 7'}
  },
  {
    ar:{q:'ماذا قال النبي ﷺ عن التاجر الصدوق؟',opts:['سيكون غنياً','مع النبيين والصديقين','له جنة خاصة','سيحكم الناس'],correct:1,hint:'مكانة عظيمة يوم القيامة',quran:'المطففين ١'},
    en:{q:'What did the Prophet (PBUH) say about the honest merchant?',opts:['Will be wealthy','With the prophets and the truthful','Has a special paradise','Will rule people'],correct:1,hint:'A great status on the Day of Judgment',quran:'Al-Mutaffifin 1'},
    fr:{q:'Qu\'a dit le Prophete (PSL) sur le commercant honnete ?',opts:['Sera riche','Avec les prophetes et les veridiques','A un paradis special','Gouvernera les gens'],correct:1,hint:'Un grand statut le Jour du Jugement',quran:'Al-Mutaffifin 1'}
  },
  {
    ar:{q:'أكمل الآية: "مَثَلُ الَّذِينَ يُنْفِقُونَ أَمْوَالَهُمْ كَمَثَلِ حَبَّةٍ أَنْبَتَتْ ..."',opts:['ثلاث سنابل','خمس سنابل','سبع سنابل','عشر سنابل'],correct:2,hint:'رقم مبارك في القرآن',quran:'البقرة ٢٦١'},
    en:{q:'Complete the verse: "The example of those who spend is like a seed that grew..."',opts:['Three spears','Five spears','Seven spears','Ten spears'],correct:2,hint:'A blessed number in the Quran',quran:'Al-Baqarah 261'},
    fr:{q:'Completez le verset : « L\'exemple de ceux qui depensent est comme une graine qui a produit... »',opts:['Trois epis','Cinq epis','Sept epis','Dix epis'],correct:2,hint:'Un nombre beni dans le Coran',quran:'Al-Baqarah 261'}
  },
  {
    ar:{q:'ما الحديث المتعلق بالاستدامة حتى لو قامت القيامة؟',opts:['صلِّ ركعتين','اغرس فسيلة','اقرأ القرآن','تصدق بمالك'],correct:1,hint:'يتعلق بالزراعة وحب الأرض',quran:'الأعراف ٥٦'},
    en:{q:'Which hadith about sustainability says "even if the Hour comes"?',opts:['Pray two rakaat','Plant a seedling','Recite Quran','Give your wealth'],correct:1,hint:'It relates to farming and love of the land',quran:'Al-Araf 56'},
    fr:{q:'Quel hadith sur la durabilite dit « meme si l\'Heure arrive » ?',opts:['Priez deux rakaat','Plantez un semis','Recitez le Coran','Donnez votre richesse'],correct:1,hint:'Cela concerne l\'agriculture et l\'amour de la terre',quran:'Al-Araf 56'}
  },
  {
    ar:{q:'ما البديل الإسلامي للسندات التقليدية؟',opts:['الأسهم العادية','الصكوك الإسلامية','الودائع البنكية','التأمين التجاري'],correct:1,hint:'هذا المنتج المالي مرتبط بأصول حقيقية',quran:'النساء ٢٩'},
    en:{q:'What is the Islamic alternative to conventional bonds?',opts:['Regular stocks','Islamic Sukuk','Bank deposits','Commercial insurance'],correct:1,hint:'This financial product is tied to real assets',quran:'An-Nisa 29'},
    fr:{q:'Quelle est l\'alternative islamique aux obligations conventionnelles ?',opts:['Actions ordinaires','Sukuk islamiques','Depots bancaires','Assurance commerciale'],correct:1,hint:'Ce produit financier est lie a des actifs reels',quran:'An-Nisa 29'}
  },
  {
    ar:{q:'ما نوع العقد الإسلامي الذي يشتري فيه البنك السلعة ثم يبيعها بربح معلوم؟',opts:['المضاربة','المرابحة','الإجارة','السَّلَم'],correct:1,hint:'هذا أكثر عقود البنوك الإسلامية شيوعاً',quran:'البقرة ٢٧٨'},
    en:{q:'What type of Islamic contract involves the bank buying goods then selling at a known profit margin?',opts:['Mudarabah','Murabaha','Ijarah','Salam'],correct:1,hint:'This is the most common Islamic banking contract',quran:'Al-Baqarah 278'},
    fr:{q:'Quel type de contrat islamique implique que la banque achete puis revend avec une marge de profit connue ?',opts:['Mudarabah','Murabaha','Ijarah','Salam'],correct:1,hint:'C\'est le contrat bancaire islamique le plus courant',quran:'Al-Baqarah 278'}
  },
  {
    ar:{q:'ما الآية التي تأمر بالتعاون على البر والتقوى؟',opts:['آية الكرسي','وتعاونوا على البر والتقوى','ولا تأكلوا أموالكم بينكم بالباطل','كي لا يكون دولة بين الأغنياء'],correct:1,hint:'هي في سورة المائدة وتأمر بالتعاون الإيجابي',quran:'المائدة ٢'},
    en:{q:'Which verse commands cooperation in righteousness and piety?',opts:['Ayat al-Kursi','Cooperate in righteousness and piety','Do not consume wealth unjustly','So wealth does not circulate among the rich'],correct:1,hint:'It is in Surah Al-Ma\'idah and commands positive cooperation',quran:'Al-Ma\'idah 2'},
    fr:{q:'Quel verset ordonne la cooperation dans la bienfaisance et la piete ?',opts:['Ayat al-Kursi','Entraidez-vous dans la bienfaisance et la piete','Ne mangez pas vos biens injustement','Pour que la richesse ne circule pas entre les riches'],correct:1,hint:'Il est dans la sourate Al-Ma\'idah et ordonne la cooperation positive',quran:'Al-Ma\'idah 2'}
  },
  {
    ar:{q:'ما القرض الحسن في الإسلام؟',opts:['قرض بفائدة منخفضة','قرض بضمان عقاري','قرض بلا فائدة لوجه الله','قرض من البنك المركزي'],correct:2,hint:'هذا النوع من القروض ثوابه عظيم عند الله',quran:'البقرة ٢٤٥'},
    en:{q:'What is Qard Hasan in Islam?',opts:['A low-interest loan','A mortgage-backed loan','An interest-free loan for Allah\'s sake','A central bank loan'],correct:2,hint:'This type of loan has great reward with Allah',quran:'Al-Baqarah 245'},
    fr:{q:'Qu\'est-ce que le Qard Hasan en Islam ?',opts:['Un pret a faible interet','Un pret hypothecaire','Un pret sans interet pour l\'amour d\'Allah','Un pret de la banque centrale'],correct:2,hint:'Ce type de pret a une grande recompense aupres d\'Allah',quran:'Al-Baqarah 245'}
  },
  {
    ar:{q:'ما السبب الرئيسي لتحريم الغرر في المعاملات المالية؟',opts:['لتقليل الأرباح','لمنع الخداع والمخاطرة المفرطة','لصالح الحكومة','لتقييد التجارة'],correct:1,hint:'الغرر يعني الجهالة والمخاطرة المفرطة في العقود',quran:'النساء ٢٩'},
    en:{q:'What is the main reason for prohibiting Gharar in financial transactions?',opts:['To reduce profits','To prevent deception and excessive risk','For the government\'s benefit','To restrict trade'],correct:1,hint:'Gharar means excessive uncertainty and risk in contracts',quran:'An-Nisa 29'},
    fr:{q:'Quelle est la raison principale de l\'interdiction du Gharar dans les transactions financieres ?',opts:['Reduire les profits','Empecher la tromperie et le risque excessif','Au benefice du gouvernement','Restreindre le commerce'],correct:1,hint:'Le Gharar signifie l\'incertitude et le risque excessif dans les contrats',quran:'An-Nisa 29'}
  }
];

// ═══════════════ DUAS DATA ═══════════════
const DUAS = [
  { ar:{label:'دعاء الرزق',text:'اللَّهُمَّ اكْفِنِي بِحَلالِكَ عَنْ حَرَامِكَ وَأَغْنِنِي بِفَضْلِكَ عَمَّنْ سِوَاكَ',tr:'رواه الترمذي'},
    en:{label:'Dua for Provision',text:'اللَّهُمَّ اكْفِنِي بِحَلالِكَ عَنْ حَرَامِكَ وَأَغْنِنِي بِفَضْلِكَ عَمَّنْ سِوَاكَ',tr:'O Allah, suffice me with what You have made lawful over what You have made unlawful, and enrich me by Your favor over all besides You — Tirmidhi'},
    fr:{label:'Dua pour la Subsistance',text:'اللَّهُمَّ اكْفِنِي بِحَلالِكَ عَنْ حَرَامِكَ وَأَغْنِنِي بِفَضْلِكَ عَمَّنْ سِوَاكَ',tr:'O Allah, comble-moi par ce que Tu as rendu licite plutot que par ce que Tu as interdit, et enrichis-moi par Ta grace au-dela de tout autre — Tirmidhi'} },
  { ar:{label:'دعاء البركة',text:'اللَّهُمَّ بَارِكْ لَنَا فِيمَا رَزَقْتَنَا وَقِنَا عَذَابَ النَّارِ',tr:'دعاء مأثور'},
    en:{label:'Dua for Blessing',text:'اللَّهُمَّ بَارِكْ لَنَا فِيمَا رَزَقْتَنَا وَقِنَا عَذَابَ النَّارِ',tr:'O Allah, bless us in what You have provided us and protect us from the punishment of the Fire'},
    fr:{label:'Dua pour la Benediction',text:'اللَّهُمَّ بَارِكْ لَنَا فِيمَا رَزَقْتَنَا وَقِنَا عَذَابَ النَّارِ',tr:'O Allah, benis-nous dans ce que Tu nous as fourni et protege-nous du chatiment du Feu'} },
  { ar:{label:'دعاء سداد الدين',text:'اللَّهُمَّ اقْضِ عَنَّا الدَّيْنَ وَأَغْنِنَا مِنَ الْفَقْرِ',tr:'دعاء مأثور'},
    en:{label:'Dua for Debt Relief',text:'اللَّهُمَّ اقْضِ عَنَّا الدَّيْنَ وَأَغْنِنَا مِنَ الْفَقْرِ',tr:'O Allah, relieve us of debt and enrich us from poverty'},
    fr:{label:'Dua pour le Remboursement de la Dette',text:'اللَّهُمَّ اقْضِ عَنَّا الدَّيْنَ وَأَغْنِنَا مِنَ الْفَقْرِ',tr:'O Allah, acquitte-nous de nos dettes et enrichis-nous de la pauvrete'} },
  { ar:{label:'دعاء الشكر',text:'رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ',tr:'النمل ١٩'},
    en:{label:'Dua of Gratitude',text:'رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ',tr:'My Lord, enable me to be grateful for Your favor which You have bestowed upon me — An-Naml 19'},
    fr:{label:'Dua de Gratitude',text:'رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ',tr:'Mon Seigneur, permets-moi de Te remercier pour Tes bienfaits — An-Naml 19'} },
  { ar:{label:'دعاء القناعة',text:'اللَّهُمَّ قَنِّعْنِي بِمَا رَزَقْتَنِي وَبَارِكْ لِي فِيهِ',tr:'دعاء مأثور'},
    en:{label:'Dua for Contentment',text:'اللَّهُمَّ قَنِّعْنِي بِمَا رَزَقْتَنِي وَبَارِكْ لِي فِيهِ',tr:'O Allah, make me content with what You have provided me and bless me in it'},
    fr:{label:'Dua pour le Contentement',text:'اللَّهُمَّ قَنِّعْنِي بِمَا رَزَقْتَنِي وَبَارِكْ لِي فِيهِ',tr:'O Allah, rends-moi satisfait de ce que Tu m\'as fourni et benis-moi en cela'} },
  { ar:{label:'دعاء التوكل',text:'حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ',tr:'التوبة ١٢٩'},
    en:{label:'Dua of Trust',text:'حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ',tr:'Allah is sufficient for me; there is no god but Him. I rely on Him and He is Lord of the Great Throne — At-Tawbah 129'},
    fr:{label:'Dua de Confiance',text:'حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ',tr:'Allah me suffit ; il n\'y a de dieu que Lui. Je m\'en remets a Lui et Il est le Seigneur du Trone immense — At-Tawbah 129'} },
  { ar:{label:'دعاء سعة الرزق',text:'اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا وَرِزْقًا طَيِّبًا وَعَمَلًا مُتَقَبَّلًا',tr:'رواه ابن ماجه'},
    en:{label:'Dua for Abundant Provision',text:'اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا وَرِزْقًا طَيِّبًا وَعَمَلًا مُتَقَبَّلًا',tr:'O Allah, I ask You for beneficial knowledge, good provision, and accepted deeds — Ibn Majah'},
    fr:{label:'Dua pour une Subsistance Abondante',text:'اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا وَرِزْقًا طَيِّبًا وَعَمَلًا مُتَقَبَّلًا',tr:'O Allah, je Te demande un savoir benefique, une bonne subsistance et des actions acceptees — Ibn Majah'} },
  { ar:{label:'دعاء الكفاية والعفاف',text:'اللَّهُمَّ إِنِّي أَسْأَلُكَ الْهُدَى وَالتُّقَى وَالْعَفَافَ وَالْغِنَى',tr:'رواه مسلم'},
    en:{label:'Dua for Sufficiency and Chastity',text:'اللَّهُمَّ إِنِّي أَسْأَلُكَ الْهُدَى وَالتُّقَى وَالْعَفَافَ وَالْغِنَى',tr:'O Allah, I ask You for guidance, piety, chastity, and sufficiency — Muslim'},
    fr:{label:'Dua pour la Suffisance et la Chastete',text:'اللَّهُمَّ إِنِّي أَسْأَلُكَ الْهُدَى وَالتُّقَى وَالْعَفَافَ وَالْغِنَى',tr:'O Allah, je Te demande la guidance, la piete, la chastete et la suffisance — Muslim'} }
];

// ═══════════════ GLOSSARY DATA ═══════════════
const GLOSSARY = [
  {
    ar:{term:'الزكاة',def:'فريضة مالية على كل مسلم بالغ عاقل يملك النصاب. تُؤخذ من الأغنياء وتُعطى للفقراء والمساكين وغيرهم من الأصناف الثمانية المذكورة في سورة التوبة. نسبتها ٢.٥٪ من المال الذي بلغ النصاب وحال عليه الحول.'},
    en:{term:'Zakat',def:'A financial obligation on every adult, sane Muslim who owns the nisab (minimum threshold). It is taken from the wealthy and given to the poor, needy, and other eight categories mentioned in Surah At-Tawbah. Its rate is 2.5% of wealth that has reached nisab and been held for one lunar year.'},
    fr:{term:'Zakat',def:'Obligation financiere sur tout musulman adulte et sain d\'esprit qui possede le nisab (seuil minimum). Elle est prelevee sur les riches et distribuee aux pauvres et necessiteux et aux huit categories mentionnees dans la sourate At-Tawbah. Son taux est de 2,5% de la richesse ayant atteint le nisab et detenue pendant un an lunaire.'}
  },
  {
    ar:{term:'الربا',def:'الزيادة المشروطة في القرض على رأس المال. محرّم في الإسلام لأنه يستغل المحتاج ويولّد المال من المال بلا إنتاج حقيقي. يشمل ربا الفضل (التفاوت في البدل) وربا النسيئة (التأخير مقابل زيادة).'},
    en:{term:'Riba (Usury)',def:'The conditional increase on a loan above the principal. Prohibited in Islam because it exploits the needy and generates money from money without real production. It includes Riba al-Fadl (inequality in exchange) and Riba an-Nasi\'ah (delay for an increase).'},
    fr:{term:'Riba (Usure)',def:'L\'augmentation conditionnelle d\'un pret au-dessus du principal. Interdit en Islam car il exploite le necessiteux et genere de l\'argent a partir d\'argent sans production reelle. Il comprend le Riba al-Fadl (inegalite d\'echange) et le Riba an-Nasi\'ah (delai contre augmentation).'}
  },
  {
    ar:{term:'المرابحة',def:'عقد بيع يشتري فيه البنك الإسلامي السلعة ثم يبيعها للعميل بربح معلوم ومتفق عليه مسبقاً. يختلف عن الربا لأن البنك يتحمل مخاطر ملكية السلعة ولو للحظة. أكثر عقود التمويل الإسلامي شيوعاً.'},
    en:{term:'Murabaha',def:'A sale contract where the Islamic bank buys the commodity then sells it to the client at a known, pre-agreed profit margin. It differs from interest because the bank bears the risk of owning the commodity even if briefly. The most common Islamic financing contract.'},
    fr:{term:'Murabaha',def:'Un contrat de vente ou la banque islamique achete la marchandise puis la revend au client avec une marge de profit connue et convenue a l\'avance. Il differe de l\'interet car la banque supporte le risque de propriete de la marchandise. Le contrat de financement islamique le plus courant.'}
  },
  {
    ar:{term:'المضاربة',def:'عقد شراكة يقدم فيه طرف المال (رب المال) ويقدم الآخر العمل والخبرة (المضارب). يتم تقسيم الربح بنسبة متفق عليها، أما الخسارة فيتحملها صاحب المال ما لم يكن هناك تقصير أو تعدّ من المضارب.'},
    en:{term:'Mudarabah',def:'A partnership contract where one party provides capital (rabb al-mal) and the other provides labor and expertise (mudarib). Profit is shared at an agreed ratio, while losses are borne by the capital provider unless due to negligence or misconduct by the mudarib.'},
    fr:{term:'Mudarabah',def:'Un contrat de partenariat ou une partie fournit le capital (rabb al-mal) et l\'autre fournit le travail et l\'expertise (mudarib). Le profit est partage selon un ratio convenu, tandis que les pertes sont supportees par le fournisseur de capital sauf negligence du mudarib.'}
  },
  {
    ar:{term:'المشاركة',def:'عقد شراكة يساهم فيه طرفان أو أكثر برأس المال والعمل معاً. يتقاسمون الربح حسب الاتفاق والخسارة حسب نسبة رأس المال. المشاركة المتناقصة تسمح لطرف بشراء حصة الآخر تدريجياً.'},
    en:{term:'Musharakah',def:'A partnership contract where two or more parties contribute both capital and labor. They share profit according to agreement and loss according to capital ratio. Diminishing Musharakah allows one party to gradually buy out the other\'s share.'},
    fr:{term:'Musharakah',def:'Un contrat de partenariat ou deux parties ou plus contribuent en capital et travail. Ils partagent le profit selon l\'accord et la perte selon le ratio de capital. La Musharakah degressive permet a une partie de racheter progressivement la part de l\'autre.'}
  },
  {
    ar:{term:'الإجارة',def:'عقد إيجار إسلامي يمتلك فيه البنك الأصل (عقار أو معدات) ويؤجره للعميل مقابل أقساط إيجارية. يمكن أن ينتهي بالتمليك. البنك يتحمل مخاطر الملكية والصيانة الأساسية.'},
    en:{term:'Ijarah',def:'An Islamic leasing contract where the bank owns the asset (property or equipment) and rents it to the client for lease payments. It can end with ownership transfer. The bank bears ownership risks and basic maintenance.'},
    fr:{term:'Ijarah',def:'Un contrat de location islamique ou la banque possede l\'actif (propriete ou equipement) et le loue au client contre des paiements. Il peut se terminer par un transfert de propriete. La banque supporte les risques de propriete et l\'entretien de base.'}
  },
  {
    ar:{term:'الصكوك',def:'شهادات استثمارية إسلامية تمثل حصة ملكية في أصول حقيقية أو مشاريع أو خدمات. البديل الإسلامي للسندات الربوية. المستثمر يشارك في العوائد والمخاطر بدلاً من الحصول على فائدة ثابتة.'},
    en:{term:'Sukuk',def:'Islamic investment certificates that represent ownership shares in real assets, projects, or services. The Islamic alternative to interest-based bonds. The investor shares in returns and risks instead of receiving fixed interest.'},
    fr:{term:'Sukuk',def:'Certificats d\'investissement islamiques representant des parts de propriete dans des actifs reels, projets ou services. L\'alternative islamique aux obligations a interet. L\'investisseur partage les rendements et les risques au lieu de recevoir un interet fixe.'}
  },
  {
    ar:{term:'الغرر',def:'الجهالة والمخاطرة المفرطة في العقود. محرّم في الإسلام لأنه يؤدي إلى النزاع والظلم. يشمل بيع المعدوم وبيع المجهول والمقامرة. الشريعة تشترط الشفافية والوضوح في كل معاملة.'},
    en:{term:'Gharar',def:'Excessive uncertainty and risk in contracts. Prohibited in Islam because it leads to disputes and injustice. It includes selling what does not exist, selling the unknown, and gambling. Shariah requires transparency and clarity in every transaction.'},
    fr:{term:'Gharar',def:'Incertitude et risque excessifs dans les contrats. Interdit en Islam car il mene aux litiges et a l\'injustice. Il comprend la vente de ce qui n\'existe pas, la vente de l\'inconnu et les jeux de hasard. La Charia exige transparence et clarte dans chaque transaction.'}
  },
  {
    ar:{term:'الوقف',def:'حبس أصل مالي (عقار أو أرض أو مال) وتخصيص عوائده بشكل دائم لجهة خيرية. صدقة جارية لا تنقطع بموت صاحبها. ساهمت الأوقاف تاريخياً في بناء المساجد والمدارس والمستشفيات والمكتبات.'},
    en:{term:'Waqf',def:'Endowing a financial asset (property, land, or money) and permanently dedicating its returns to a charitable cause. An ongoing charity that continues after the founder\'s death. Waqf historically contributed to building mosques, schools, hospitals, and libraries.'},
    fr:{term:'Waqf',def:'Immobiliser un actif financier (propriete, terre ou argent) et dedier de facon permanente ses revenus a une cause charitable. Une charite continue meme apres la mort du fondateur. Le Waqf a historiquement contribue a construire mosquees, ecoles, hopitaux et bibliotheques.'}
  },
  {
    ar:{term:'النصاب',def:'الحد الأدنى من المال الذي تجب فيه الزكاة. يعادل ٨٥ غراماً من الذهب أو ٥٩٥ غراماً من الفضة. من ملك النصاب وحال عليه الحول الهجري وجبت عليه الزكاة بنسبة ٢.٥٪.'},
    en:{term:'Nisab',def:'The minimum amount of wealth on which zakat is due. It equals 85 grams of gold or 595 grams of silver. Whoever owns the nisab and a lunar year has passed must pay zakat at the rate of 2.5%.'},
    fr:{term:'Nisab',def:'Le montant minimum de richesse sur lequel la zakat est due. Il equivaut a 85 grammes d\'or ou 595 grammes d\'argent. Quiconque possede le nisab et qu\'une annee lunaire s\'est ecoulee doit payer la zakat au taux de 2,5%.'}
  },
  {
    ar:{term:'بيت المال',def:'خزينة الدولة الإسلامية التي تجمع إيراداتها من الزكاة والجزية والخراج والفيء وغيرها. تُنفق على مصالح المسلمين: الفقراء والجيش والتعليم والبنية التحتية. أمواله أمانة وليست ملكاً للحاكم.'},
    en:{term:'Bayt al-Mal',def:'The public treasury of the Islamic state that collects revenues from zakat, jizya, kharaj, fay, and others. Spent on Muslim welfare: the poor, military, education, and infrastructure. Its funds are a trust, not the ruler\'s property.'},
    fr:{term:'Bayt al-Mal',def:'Le tresor public de l\'Etat islamique qui collecte les revenus de la zakat, la jizya, le kharaj, le fay et autres. Depense pour le bien-etre : les pauvres, l\'armee, l\'education et les infrastructures. Ses fonds sont un depot, pas la propriete du dirigeant.'}
  },
  {
    ar:{term:'القرض الحسن',def:'قرض بلا فائدة يُقدَّم لوجه الله تعالى. المقترض يرد رأس المال فقط دون أي زيادة. من أعظم أبواب البر والإحسان. ثوابه عند الله أعظم من ثواب الصدقة لأنه يحفظ كرامة المحتاج.'},
    en:{term:'Qard Hasan',def:'An interest-free loan given for the sake of Allah. The borrower returns only the principal without any increase. One of the greatest doors of righteousness and kindness. Its reward with Allah is greater than charity because it preserves the dignity of the needy.'},
    fr:{term:'Qard Hasan',def:'Un pret sans interet accorde pour l\'amour d\'Allah. L\'emprunteur ne rembourse que le principal sans aucune augmentation. L\'une des plus grandes portes de bienfaisance. Sa recompense aupres d\'Allah est superieure a l\'aumone car il preserve la dignite du necessiteux.'}
  }
];

// ═══════════════ RENDER: GLOSSARY ═══════════════
function renderGlossary() {
  const glossaryTitle = {
    ar: '📘 قاموس المصطلحات الاقتصادية الإسلامية',
    en: '📘 Islamic Economic Terms Glossary',
    fr: '📘 Glossaire des Termes Economiques Islamiques'
  };
  const glossaryDesc = {
    ar: 'تعريفات مبسطة لأهم المصطلحات الاقتصادية الإسلامية',
    en: 'Simplified definitions of key Islamic economic terms',
    fr: 'Definitions simplifiees des principaux termes economiques islamiques'
  };
  const container = document.getElementById('glossaryContainer');
  if (!container) return;
  container.innerHTML = `
    <div class="glossary-header">
      <h3 class="glossary-title">${glossaryTitle[lang]}</h3>
      <p class="glossary-desc">${glossaryDesc[lang]}</p>
    </div>
    <div class="glossary-grid">
      ${GLOSSARY.map(g => {
        const d = g[lang];
        return `<div class="glossary-item scroll-reveal">
          <div class="glossary-term">${d.term}</div>
          <div class="glossary-def">${d.def}</div>
        </div>`;
      }).join('')}
    </div>`;
}

// ═══════════════ KEY FIGURES IN ISLAMIC ECONOMICS ═══════════════
const KEY_FIGURES = [
  {
    ar:{name:'أبو يوسف (١١٣-١٨٢هـ)',bio:'قاضي القضاة في عهد هارون الرشيد. ألّف كتاب "الخراج" الذي يُعد أول كتاب متخصص في المالية العامة الإسلامية. ناقش فيه الضرائب وإدارة أموال الدولة وحقوق الرعية.'},
    en:{name:'Abu Yusuf (731-798 CE)',bio:'Chief Justice under Harun ar-Rashid. Authored "Kitab al-Kharaj" (Book of Taxation), considered the first specialized book on Islamic public finance. It discussed taxes, state financial management, and citizens\' rights.'},
    fr:{name:'Abu Yusuf (731-798)',bio:'Grand Juge sous Harun ar-Rashid. Auteur de "Kitab al-Kharaj" (Livre de la Taxation), considere le premier livre specialise en finance publique islamique. Il traite des impots et de la gestion financiere de l\'Etat.'}
  },
  {
    ar:{name:'ابن خلدون (١٣٣٢-١٤٠٦م)',bio:'مؤسس علم الاجتماع والاقتصاد. قدّم في "المقدمة" نظريات اقتصادية سبقت آدم سميث بقرون. ناقش العرض والطلب وتقسيم العمل ودورة الحضارة الاقتصادية. يُعد أبا الاقتصاد الحديث.'},
    en:{name:'Ibn Khaldun (1332-1406 CE)',bio:'Founder of sociology and economics. In his "Muqaddimah" he presented economic theories centuries before Adam Smith. He discussed supply and demand, division of labor, and the economic cycle of civilization. Considered the father of modern economics.'},
    fr:{name:'Ibn Khaldun (1332-1406)',bio:'Fondateur de la sociologie et de l\'economie. Dans sa "Muqaddimah", il a presente des theories economiques des siecles avant Adam Smith. Il a discute l\'offre et la demande, la division du travail et le cycle economique de la civilisation.'}
  },
  {
    ar:{name:'الإمام الغزالي (١٠٥٨-١١١١م)',bio:'عالم موسوعي ناقش في "إحياء علوم الدين" أخلاقيات المال والتجارة والكسب. وضع أسساً لفقه المعاملات المالية وربط الاقتصاد بالأخلاق والقيم الإسلامية. تأثيره كبير في الفكر الاقتصادي الإسلامي.'},
    en:{name:'Imam al-Ghazali (1058-1111 CE)',bio:'Encyclopedic scholar who discussed the ethics of money, trade, and earning in "Ihya Ulum ad-Din." He established foundations for financial transaction jurisprudence and linked economics with Islamic ethics and values. His influence on Islamic economic thought is immense.'},
    fr:{name:'Imam al-Ghazali (1058-1111)',bio:'Savant encyclopedique qui a discute l\'ethique de l\'argent, du commerce et du gain dans "Ihya Ulum ad-Din." Il a etabli les fondements de la jurisprudence des transactions financieres et lie l\'economie a l\'ethique islamique.'}
  },
  {
    ar:{name:'الشيخ محمد الغزالي (١٩١٧-١٩٩٦م)',bio:'صاحب كتاب "الإسلام والأوضاع الاقتصادية" الذي استُلهم منه هذا التطبيق. عالم ومفكر مصري لُقب بأديب الدعوة. قدّم الاقتصاد الإسلامي بأسلوب أدبي سهل يجمع بين العمق والبساطة.'},
    en:{name:'Sheikh M. al-Ghazali (1917-1996)',bio:'Author of "Islam and Economic Conditions" which inspired this app. Egyptian scholar and thinker nicknamed "The Literary Preacher." He presented Islamic economics in an accessible literary style combining depth and simplicity.'},
    fr:{name:'Sheikh M. al-Ghazali (1917-1996)',bio:'Auteur de "L\'Islam et les Conditions Economiques" qui a inspire cette application. Savant et penseur egyptien surnomme "Le Litteraire de la Predication." Il a presente l\'economie islamique dans un style litteraire accessible.'}
  }
];

function renderKeyFigures() {
  const figTitle = {
    ar: '🏛️ رواد الاقتصاد الإسلامي',
    en: '🏛️ Pioneers of Islamic Economics',
    fr: '🏛️ Pionniers de l\'Economie Islamique'
  };
  const container = document.getElementById('keyFiguresContainer');
  if (!container) return;
  container.innerHTML = `
    <h3 class="figures-title">${figTitle[lang]}</h3>
    <div class="figures-grid">
      ${KEY_FIGURES.map(f => {
        const d = f[lang];
        return `<div class="figure-card scroll-reveal">
          <div class="figure-name">${d.name}</div>
          <div class="figure-bio">${d.bio}</div>
        </div>`;
      }).join('')}
    </div>`;
}

// ═══════════════ ECONOMIC COMPARISON DATA ═══════════════
const COMPARISONS = [
  {
    ar:{topic:'الملكية',islamic:'حق مشروع مع مسؤولية اجتماعية — المال أمانة من الله',capitalist:'حق مطلق للفرد بلا قيود',socialist:'ملكية الدولة لوسائل الإنتاج'},
    en:{topic:'Ownership',islamic:'Legitimate right with social responsibility — wealth is a trust from Allah',capitalist:'Absolute individual right without limits',socialist:'State ownership of means of production'},
    fr:{topic:'Propriete',islamic:'Droit legitime avec responsabilite sociale — la richesse est un depot d\'Allah',capitalist:'Droit individuel absolu sans limites',socialist:'Propriete etatique des moyens de production'}
  },
  {
    ar:{topic:'الربح',islamic:'مشروع بالمشاركة في المخاطر — لا ربح بلا تحمل خسارة',capitalist:'تعظيم الربح هو الهدف الأساسي',socialist:'الربح ملك للدولة وتوزعه حسب رؤيتها'},
    en:{topic:'Profit',islamic:'Legitimate through risk-sharing — no profit without bearing loss',capitalist:'Maximizing profit is the primary goal',socialist:'Profit belongs to the state and is distributed as it sees fit'},
    fr:{topic:'Profit',islamic:'Legitime par le partage des risques — pas de profit sans risque de perte',capitalist:'Maximiser le profit est l\'objectif principal',socialist:'Le profit appartient a l\'Etat qui le distribue selon sa vision'}
  },
  {
    ar:{topic:'الفقر',islamic:'مسؤولية جماعية — الزكاة فريضة والتكافل واجب',capitalist:'مسؤولية فردية — السوق يحدد',socialist:'مسؤولية الدولة حصرياً'},
    en:{topic:'Poverty',islamic:'Collective responsibility — zakat is obligatory, solidarity is duty',capitalist:'Individual responsibility — the market decides',socialist:'Exclusively state responsibility'},
    fr:{topic:'Pauvrete',islamic:'Responsabilite collective — la zakat est obligatoire, la solidarite un devoir',capitalist:'Responsabilite individuelle — le marche decide',socialist:'Responsabilite exclusivement etatique'}
  },
  {
    ar:{topic:'الفائدة البنكية',islamic:'محرّمة — البديل: المشاركة والمرابحة والإجارة',capitalist:'أساس النظام المالي والبنكي',socialist:'تحددها الدولة وفق خططها'},
    en:{topic:'Bank Interest',islamic:'Prohibited — alternatives: partnership, Murabaha, Ijarah',capitalist:'Foundation of the financial and banking system',socialist:'Determined by the state according to its plans'},
    fr:{topic:'Interet Bancaire',islamic:'Interdit — alternatives : partenariat, Murabaha, Ijarah',capitalist:'Fondement du systeme financier et bancaire',socialist:'Determine par l\'Etat selon ses plans'}
  },
  {
    ar:{topic:'التوزيع',islamic:'عادل ومتوازن — لكل فرد حق في حياة كريمة',capitalist:'حسب قوى السوق — الأقوى يأخذ أكثر',socialist:'متساوٍ نظرياً — لكن يولّد كسلاً وظلماً'},
    en:{topic:'Distribution',islamic:'Fair and balanced — every individual has a right to dignified life',capitalist:'According to market forces — the strongest takes more',socialist:'Equal in theory — but generates laziness and injustice'},
    fr:{topic:'Distribution',islamic:'Juste et equilibree — chaque individu a droit a une vie digne',capitalist:'Selon les forces du marche — le plus fort prend plus',socialist:'Egale en theorie — mais genere paresse et injustice'}
  }
];

function renderComparisons() {
  const compTitle = {
    ar: '⚖️ مقارنة الأنظمة الاقتصادية',
    en: '⚖️ Economic Systems Comparison',
    fr: '⚖️ Comparaison des Systemes Economiques'
  };
  const headers = {
    ar: {topic:'الموضوع',islamic:'الإسلامي',capitalist:'الرأسمالي',socialist:'الاشتراكي'},
    en: {topic:'Topic',islamic:'Islamic',capitalist:'Capitalist',socialist:'Socialist'},
    fr: {topic:'Sujet',islamic:'Islamique',capitalist:'Capitaliste',socialist:'Socialiste'}
  };
  const container = document.getElementById('comparisonsContainer');
  if (!container) return;
  const h = headers[lang];
  container.innerHTML = `
    <h3 class="comp-title">${compTitle[lang]}</h3>
    <div class="comp-table-wrap">
      <table class="comp-table">
        <thead>
          <tr>
            <th>${h.topic}</th>
            <th class="comp-islamic">${h.islamic}</th>
            <th>${h.capitalist}</th>
            <th>${h.socialist}</th>
          </tr>
        </thead>
        <tbody>
          ${COMPARISONS.map(c => {
            const d = c[lang];
            return `<tr>
              <td class="comp-topic">${d.topic}</td>
              <td class="comp-islamic-cell">${d.islamic}</td>
              <td>${d.capitalist}</td>
              <td>${d.socialist}</td>
            </tr>`;
          }).join('')}
        </tbody>
      </table>
    </div>`;
}

// ═══════════════ XP / BADGE SYSTEM ═══════════════
const XP_KEY = 'iqtisad-xp';
const BADGES_KEY = 'iqtisad-badges';
const READ_KEY = 'iqtisad-read';
const STREAK_KEY = 'iqtisad-streak';
const MODE_KEY = 'iqtisad-mode';
const QUIZ_BEST_KEY = 'iqtisad-quiz-best';

const BADGE_DEFS = [
  { id:'beginner', emoji:'🌱', xp:0, ar:'مبتدئ', en:'Beginner', fr:'Debutant' },
  { id:'reader', emoji:'📖', xp:100, ar:'قارئ', en:'Reader', fr:'Lecteur' },
  { id:'scholar', emoji:'🎓', xp:300, ar:'عالم', en:'Scholar', fr:'Savant' },
  { id:'persistent', emoji:'🔥', xp:500, ar:'مثابر', en:'Persistent', fr:'Perseverant' },
  { id:'expert', emoji:'🏆', xp:1000, ar:'خبير', en:'Expert', fr:'Expert' }
];

function getXP() { return parseInt(localStorage.getItem(XP_KEY) || '0'); }
function addXP(pts) { const xp = getXP() + pts; localStorage.setItem(XP_KEY, xp); checkBadges(xp); updateXPDisplay(); return xp; }
function getLevel(xp) { if (xp >= 1000) return 5; if (xp >= 500) return 4; if (xp >= 300) return 3; if (xp >= 100) return 2; return 1; }
function getEarnedBadges() { return JSON.parse(localStorage.getItem(BADGES_KEY) || '[]'); }
function checkBadges(xp) { const earned = getEarnedBadges(); BADGE_DEFS.forEach(b => { if (xp >= b.xp && !earned.includes(b.id)) { earned.push(b.id); localStorage.setItem(BADGES_KEY, JSON.stringify(earned)); showToast(`${b.emoji} ${b[lang]}!`); playSound('success'); } }); }
function getReadTraits() { return JSON.parse(localStorage.getItem(READ_KEY) || '[]'); }
function markTraitRead(id) { const read = getReadTraits(); if (!read.includes(id)) { read.push(id); localStorage.setItem(READ_KEY, JSON.stringify(read)); addXP(10); } }

// ═══════════════ STREAK ═══════════════
function getStreak() { return JSON.parse(localStorage.getItem(STREAK_KEY) || '{"count":0,"lastDate":""}'); }
function updateStreak() { const today = new Date().toDateString(); const s = getStreak(); if (s.lastDate === today) return s.count; const yesterday = new Date(); yesterday.setDate(yesterday.getDate()-1); if (s.lastDate === yesterday.toDateString()) { s.count++; } else if (s.lastDate !== today) { s.count = 1; } s.lastDate = today; localStorage.setItem(STREAK_KEY, JSON.stringify(s)); return s.count; }

// ═══════════════ AGE MODE ═══════════════
let ageMode = localStorage.getItem(MODE_KEY) || 'teen';
function toggleAgeMode() { ageMode = ageMode === 'young' ? 'teen' : 'young'; localStorage.setItem(MODE_KEY, ageMode); document.body.classList.toggle('young-mode', ageMode === 'young'); renderAll(); showToast(ageMode === 'young' ? T[lang].youngMode : T[lang].teenMode); playSound('theme'); }

// ═══════════════ LANGUAGE & THEME ═══════════════
let lang = document.documentElement.lang || 'ar';
let currentTheme = document.documentElement.dataset.theme || 'nature';
const THEMES = ['nature','night','ocean'];
const THEME_ICONS = { nature:'🌿', night:'🌙', ocean:'🌊' };
let currentPrincipleIdx = -1;

function setLang(l) { lang = l; document.documentElement.lang = l; document.documentElement.dir = l === 'ar' ? 'rtl' : 'ltr'; document.querySelectorAll('.lang-opt').forEach(b => b.classList.toggle('active', b.dataset.lang === l)); renderAll(); }
function cycleTheme() { const idx = (THEMES.indexOf(currentTheme) + 1) % THEMES.length; currentTheme = THEMES[idx]; document.documentElement.dataset.theme = currentTheme; document.getElementById('themeIcon').textContent = THEME_ICONS[currentTheme]; playSound('theme'); }

// ═══════════════ RENDER ALL ═══════════════
function renderAll() {
  const t = T[lang];
  document.getElementById('appTitle').textContent = t.appTitle;
  document.getElementById('splashSub').textContent = t.splashSub;
  document.getElementById('splashHint').textContent = t.splashHint;
  document.getElementById('tabHome').textContent = t.tabHome;
  document.getElementById('tabTraits').textContent = t.tabTraits;
  document.getElementById('tabQuiz').textContent = t.tabQuiz;
  document.getElementById('tabProgress').textContent = t.tabProgress;
  document.getElementById('tabAbout').textContent = t.tabAbout;
  document.getElementById('traitsTitle').textContent = t.traitsTitle;
  document.getElementById('traitsDesc').textContent = t.traitsDesc;
  document.getElementById('quizTitle').textContent = t.quizTitle;
  document.getElementById('quizDesc').textContent = t.quizDesc;
  document.getElementById('progressTitle').textContent = t.progressTitle;
  document.getElementById('progressDesc').textContent = t.progressDesc;
  document.getElementById('helpTitle').textContent = t.helpTitle;
  document.getElementById('duaPanelTitle').textContent = t.duaPanelTitle;
  document.getElementById('ageModeBtn').textContent = ageMode === 'young' ? t.youngMode : t.teenMode;
  renderHome(); renderTraits(); renderProgress(); renderAbout(); renderHelp(); renderDuas(); renderTicker(); renderGlossary(); renderKeyFigures(); renderComparisons(); renderFactOfDay();
}

// ═══════════════ RENDER: HOME ═══════════════
function renderHome() {
  const t = T[lang]; const dayIdx = new Date().getDate() % TRAITS.length; const trait = TRAITS[dayIdx]; const d = trait[lang];
  document.getElementById('dailyCard').innerHTML = `<div class="daily-label">${t.dailyLabel}</div><div class="daily-title">${trait.emoji} ${d.title}</div><div class="daily-body">${ageMode === 'young' ? d.young : d.desc}</div><div class="daily-action" onclick="switchTab('traits');toggleCard('trait-${trait.id}')">${t.readMore} &#8594;</div>`;
  document.getElementById('homeGrid').innerHTML = TRAITS.map(tr => { const dd = tr[lang]; return `<div class="home-card" onclick="switchTab('traits');toggleCard('trait-${tr.id}')"><span class="hc-icon">${tr.emoji}</span><div class="hc-title">${dd.title}</div></div>`; }).join('');
}

// ═══════════════ RENDER: TRAITS ═══════════════
function renderTraits() {
  const t = T[lang]; const readTraits = getReadTraits(); const container = document.getElementById('traitsContainer');
  const searchHTML = `<div class="search-bar"><span class="search-icon">🔍</span><input class="search-input" id="traitsSearch" placeholder="${t.searchPlaceholder}" oninput="filterTraits(this.value)"></div>`;
  container.innerHTML = searchHTML + TRAITS.map(tr => { const d = tr[lang]; const isRead = readTraits.includes(tr.id); return `
    <div class="trait-card scroll-reveal ${isRead ? 'read' : ''}" id="trait-${tr.id}">
      <div class="trait-head" onclick="toggleCard('trait-${tr.id}');markTraitRead(${tr.id})">
        <span class="trait-num">${tr.id}</span><span class="trait-emoji">${tr.emoji}</span><span class="trait-title">${d.title}</span>
        ${isRead ? '<span class="trait-read-badge">&#10003;</span>' : ''}<span class="trait-chev">&#9660;</span>
      </div>
      <div class="trait-body"><div class="trait-inner">
          <div class="trait-desc">${ageMode === 'young' ? d.young : d.desc}</div>
          <div class="verse-box"><div class="verse-arabic">${d.verse}</div><div class="verse-ref">${d.verseRef}</div></div>
          <div class="hadith-box"><span class="hadith-label">📜 ${t.hadith}</span><div class="hadith-text">${d.hadith}</div></div>
          <div class="action-box"><span class="action-icon">💡</span><span>${d.action}</span></div>
          <button class="share-btn" onclick="shareTrait(${tr.id})"><span class="share-icon">📤</span> ${t.share}</button>
      </div></div>
    </div>`; }).join('');
}

function filterTraits(query) { const cards = document.querySelectorAll('.trait-card'); const q = query.toLowerCase(); cards.forEach(card => { const title = card.querySelector('.trait-title').textContent.toLowerCase(); const desc = card.querySelector('.trait-desc') ? card.querySelector('.trait-desc').textContent.toLowerCase() : ''; card.style.display = (!q || title.includes(q) || desc.includes(q)) ? '' : 'none'; }); }

function shareTrait(id) { const trait = TRAITS.find(t => t.id === id); if (!trait) return; const d = trait[lang]; const text = `${trait.emoji} ${d.title}\n${d.desc}\n\n${d.verse} — ${d.verseRef}`; if (navigator.share) { navigator.share({ title: d.title, text }); } else { navigator.clipboard.writeText(text).then(() => showToast(lang==='ar'?'تم النسخ':'Copied!')); } }

// ═══════════════ RENDER: QUIZ ═══════════════
let quizState = { current: 0, score: 0, answers: [], lifelines: { fifty: true, hint: true, quran: true }, active: false };

function renderQuiz() { quizState = { current: 0, score: 0, answers: [], lifelines: { fifty: true, hint: true, quran: true }, active: true }; showQuizQuestion(); }

function showQuizQuestion() {
  const t = T[lang]; const container = document.getElementById('quizContainer'); const result = document.getElementById('quizResult'); result.classList.add('hidden');
  if (quizState.current >= QUIZ.length) { showQuizResult(); return; }
  const q = QUIZ[quizState.current][lang]; const total = QUIZ.length; const num = quizState.current + 1;
  container.innerHTML = `<div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:${num/total*100}%"></div></div><div class="quiz-counter">${num} / ${total}</div>
    <div class="quiz-question-card scroll-reveal"><div class="quiz-q-text">${q.q}</div><div class="quiz-options" id="quizOpts">
        ${q.opts.map((opt, i) => `<button class="quiz-opt" id="qopt-${i}" onclick="answerQuiz(${i})">${opt}</button>`).join('')}</div>
      <div class="quiz-lifelines">
        <button class="lifeline-btn ${quizState.lifelines.fifty?'':'used'}" onclick="useFiftyFifty()" ${quizState.lifelines.fifty?'':'disabled'}>${t.lifeline5050}</button>
        <button class="lifeline-btn ${quizState.lifelines.hint?'':'used'}" onclick="useHint()" ${quizState.lifelines.hint?'':'disabled'}>${t.lifelineHint}</button>
        <button class="lifeline-btn ${quizState.lifelines.quran?'':'used'}" onclick="useQuranRef()" ${quizState.lifelines.quran?'':'disabled'}>${t.lifelineQuran}</button>
      </div><div id="quizFeedback" class="quiz-feedback hidden"></div></div>`;
}

function answerQuiz(idx) { if (!quizState.active) return; const q = QUIZ[quizState.current][lang]; const correct = q.correct; const opts = document.querySelectorAll('.quiz-opt'); opts.forEach((o, i) => { o.disabled = true; if (i === correct) o.classList.add('correct'); if (i === idx && i !== correct) o.classList.add('wrong'); }); const feedback = document.getElementById('quizFeedback'); feedback.classList.remove('hidden'); if (idx === correct) { quizState.score++; addXP(5); feedback.innerHTML = `<span class="fb-correct">${T[lang].correct}</span>`; playSound('success'); } else { feedback.innerHTML = `<span class="fb-wrong">${T[lang].wrong}</span>`; playSound('click'); } quizState.answers.push(idx); quizState.current++; setTimeout(() => showQuizQuestion(), 1800); }

function useFiftyFifty() { if (!quizState.lifelines.fifty) return; quizState.lifelines.fifty = false; const q = QUIZ[quizState.current][lang]; const correct = q.correct; const wrongIdxs = [0,1,2,3].filter(i => i !== correct); const toHide = wrongIdxs.sort(() => Math.random() - 0.5).slice(0, 2); toHide.forEach(i => { const el = document.getElementById('qopt-'+i); if(el) { el.style.visibility='hidden'; el.disabled=true; }}); document.querySelector('.lifeline-btn').classList.add('used'); playSound('click'); }
function useHint() { if (!quizState.lifelines.hint) return; quizState.lifelines.hint = false; const q = QUIZ[quizState.current][lang]; const feedback = document.getElementById('quizFeedback'); feedback.classList.remove('hidden'); feedback.innerHTML = `<span class="fb-hint">💡 ${q.hint}</span>`; playSound('click'); }
function useQuranRef() { if (!quizState.lifelines.quran) return; quizState.lifelines.quran = false; const q = QUIZ[quizState.current][lang]; const feedback = document.getElementById('quizFeedback'); feedback.classList.remove('hidden'); feedback.innerHTML = `<span class="fb-quran">📖 ${q.quran}</span>`; playSound('click'); }

function showQuizResult() {
  const t = T[lang]; const total = QUIZ.length; const pct = Math.round(quizState.score / total * 100);
  const best = parseInt(localStorage.getItem(QUIZ_BEST_KEY) || '0'); if (pct > best) localStorage.setItem(QUIZ_BEST_KEY, pct); addXP(20);
  let emoji, title; if (pct >= 80) { emoji = '🏆'; title = lang==='ar'?'عالم حقيقي!':lang==='fr'?'Un vrai savant !':'A True Scholar!'; } else if (pct >= 50) { emoji = '📖'; title = lang==='ar'?'جيد جداً!':lang==='fr'?'Tres bien !':'Very Good!'; } else { emoji = '🌱'; title = lang==='ar'?'واصل التعلم!':lang==='fr'?'Continue d\'apprendre !':'Keep Learning!'; }
  document.getElementById('quizContainer').innerHTML = ''; const result = document.getElementById('quizResult'); result.classList.remove('hidden');
  result.innerHTML = `<div class="qr-emoji">${emoji}</div><div class="qr-score">${quizState.score}/${total}</div><div class="qr-title">${title}</div><div class="qr-desc">${pct}%</div><button class="quiz-submit" onclick="renderQuiz()">${t.tryAgain}</button>`;
  result.scrollIntoView({ behavior: 'smooth' }); if (pct >= 80) launchConfetti(); quizState.active = false;
}

// ═══════════════ RENDER: PROGRESS ═══════════════
function renderProgress() {
  const t = T[lang]; const xp = getXP(); const level = getLevel(xp); const streak = getStreak().count; const readTraits = getReadTraits(); const earned = getEarnedBadges(); const bestQuiz = parseInt(localStorage.getItem(QUIZ_BEST_KEY) || '0'); const nextBadge = BADGE_DEFS.find(b => !earned.includes(b.id)); const nextXP = nextBadge ? nextBadge.xp : 1000; const progressPct = Math.min(100, (xp / nextXP) * 100);
  document.getElementById('progressContainer').innerHTML = `
    <div class="progress-xp-card"><div class="xp-header"><span class="xp-icon">⭐</span><span class="xp-amount">${xp} ${t.xpLabel}</span></div>
      <div class="xp-bar-wrap"><div class="xp-bar"><div class="xp-bar-fill" style="width:${progressPct}%"></div></div><span class="xp-level">${t.levelLabel} ${level}</span></div>
      ${nextBadge ? `<div class="xp-next">${lang==='ar'?'التالي:':lang==='fr'?'Suivant:':'Next:'} ${nextBadge.emoji} ${nextBadge[lang]} (${nextBadge.xp} XP)</div>` : ''}</div>
    ${streak > 0 ? `<div class="streak-badge">🔥 ${streak} ${t.streakMsg}</div>` : ''}
    <div class="progress-stats">
      <div class="stat-card"><span class="stat-num">${readTraits.length}</span><span class="stat-label">${lang==='ar'?'مبدأ مقروء':lang==='fr'?'Principes lus':'Principles Read'}</span><span class="stat-total">/ ${TRAITS.length}</span></div>
      <div class="stat-card"><span class="stat-num">${bestQuiz}%</span><span class="stat-label">${lang==='ar'?'أفضل نتيجة':lang==='fr'?'Meilleur score':'Best Quiz'}</span></div>
      <div class="stat-card"><span class="stat-num">${earned.length}</span><span class="stat-label">${lang==='ar'?'شارات':lang==='fr'?'Badges':'Badges'}</span><span class="stat-total">/ ${BADGE_DEFS.length}</span></div>
    </div>
    <div class="badges-section"><h3 class="badges-title">${lang==='ar'?'🏅 الشارات':lang==='fr'?'🏅 Badges':'🏅 Badges'}</h3>
      <div class="badges-grid">${BADGE_DEFS.map(b => `<div class="badge-item ${earned.includes(b.id)?'earned':'locked'}"><span class="badge-emoji">${b.emoji}</span><span class="badge-name">${b[lang]}</span><span class="badge-xp">${b.xp} XP</span></div>`).join('')}</div></div>`;
}

function updateXPDisplay() { const panel = document.getElementById('panel-progress'); if (panel && panel.classList.contains('active')) renderProgress(); }

// ═══════════════ RENDER: ABOUT ═══════════════
function renderAbout() {
  const about = {
    ar: {
      disclaimerTitle:'⚠️ تنبيه مهم',
      disclaimer:'هذا التطبيق مستوحى من كتاب الشيخ محمد الغزالي رحمه الله، وليس بديلاً عن قراءة الكتاب الأصلي. المحتوى ملخصات تعليمية مبسطة وليست نقلاً حرفياً. قد تحتوي على تبسيط لأفكار المؤلف. يُرجى الرجوع للكتاب الأصلي وللعلماء المتخصصين. أرجو مراجعة أهل العلم في أي مسألة فقهية.',
      authorName:'الشيخ محمد الغزالي',
      authorDates:'١٩١٧ — ١٩٩٦',
      authorBio:'عالم ومفكر إسلامي مصري، لُقب بـ"أديب الدعوة". ألّف أكثر من ٩٤ كتاباً. درس في الأزهر الشريف، ودرّس في جامعة الأمير عبد القادر بقسنطينة (الجزائر). حاصل على جائزة الملك فيصل العالمية. تلقى العلم على يد كبار العلماء ومنهم الإمام حسن البنا. عُرف بجمعه بين العمق الفكري والأسلوب الأدبي الراقي. من أبرز مؤلفاته: فقه السيرة، وعقيدة المسلم، وجدد حياتك. دُفن في المدينة المنورة بعد أن أصيب بنوبة قلبية أثناء مؤتمر علمي بالرياض.',
      bookTitle:'عن الكتاب',
      bookDesc:'«الإسلام والأوضاع الاقتصادية» كتاب يعالج النظام الاقتصادي في الإسلام بعمق وشمول. يبيّن الشيخ الغزالي أن الإسلام له رؤية اقتصادية متكاملة تجمع بين العدالة والحرية وتحارب الفقر والاستغلال. يناقش الكتاب الزكاة وأثرها في مكافحة الفقر، وتحريم الربا وبدائله الإسلامية، وأخلاقيات التجارة والملكية، وحقوق العمال والفقراء. كما يتناول نظام الوقف وبيت المال ودور الدولة في تحقيق التكافل الاجتماعي. يُعد الكتاب مرجعاً مهماً لمن يريد فهم الرؤية الإسلامية للاقتصاد.',
      structureTitle:'📋 هيكل الكتاب',
      structureDesc:'<strong>القسم الأول:</strong> فلسفة المال في الإسلام — الملكية الفردية وحدودها — المال أمانة.<br><strong>القسم الثاني:</strong> أدوات التوزيع: الزكاة — الصدقات — الوقف — الميراث — بيت المال.<br><strong>القسم الثالث:</strong> أخلاقيات الكسب: التجارة — العمل — تحريم الربا والاحتكار.<br><strong>القسم الرابع:</strong> العدالة الاجتماعية — مكافحة الفقر — التوازن الاقتصادي.',
      sourcesTitle:'المصادر',
      sources:[
        'كتاب "الإسلام والأوضاع الاقتصادية" — الشيخ محمد الغزالي',
        'القرآن الكريم',
        'صحيح البخاري ومسلم',
        'سنن الترمذي وأبي داود وابن ماجه',
        'كتاب "الحلال والحرام" — الشيخ يوسف القرضاوي',
        'كتاب "فقه الزكاة" — الشيخ يوسف القرضاوي'
      ],
      contact:'تواصل: abdelhak.bourdim@gmail.com'
    },
    en: {
      disclaimerTitle:'⚠️ Important Notice',
      disclaimer:'I am not a scholar or mufti. This is a humble effort by a Muslim who loves Sheikh al-Ghazali\'s books. Content is derived from the book and trusted Islamic sources. This is not a fatwa. Please consult qualified scholars for any fiqh-related questions.',
      authorName:'Sheikh Mohammed al-Ghazali',
      authorDates:'1917 — 1996',
      authorBio:'Egyptian Islamic scholar and thinker, nicknamed "The Literary Preacher." Author of 94+ books. Studied at Al-Azhar, taught at the University of Emir Abdelkader in Constantine, Algeria. King Faisal International Prize winner. Studied under great scholars including Imam Hasan al-Banna. Known for combining intellectual depth with elegant literary style. Notable works include: Fiqh as-Sirah, The Muslim\'s Creed, and Renew Your Life. He passed away in Madinah after a heart attack during a conference in Riyadh.',
      bookTitle:'About the Book',
      bookDesc:'"Islam and Economic Conditions" addresses the economic system in Islam with depth and comprehensiveness. Sheikh al-Ghazali shows that Islam has a comprehensive economic vision combining justice and freedom while fighting poverty and exploitation. The book discusses zakat and its role in fighting poverty, the prohibition of riba and its Islamic alternatives, trade ethics and property rights, and the rights of workers and the poor. It also covers the waqf system, the public treasury, and the state\'s role in achieving social solidarity. The book is an important reference for understanding the Islamic vision of economics.',
      structureTitle:'📋 Book Structure',
      structureDesc:'<strong>Section 1:</strong> Philosophy of wealth in Islam — Individual ownership and its limits — Wealth as trust.<br><strong>Section 2:</strong> Distribution tools: Zakat — Charity — Waqf — Inheritance — Public Treasury.<br><strong>Section 3:</strong> Ethics of earning: Trade — Work — Prohibition of riba and monopoly.<br><strong>Section 4:</strong> Social justice — Fighting poverty — Economic balance.',
      sourcesTitle:'Sources',
      sources:[
        '"Islam and Economic Conditions" — Sheikh Mohammed al-Ghazali',
        'The Holy Quran',
        'Sahih al-Bukhari and Muslim',
        'Sunan at-Tirmidhi, Abu Dawud, and Ibn Majah',
        '"The Lawful and the Prohibited" — Sheikh Yusuf al-Qaradawi',
        '"Fiqh of Zakat" — Sheikh Yusuf al-Qaradawi'
      ],
      contact:'Contact: abdelhak.bourdim@gmail.com'
    },
    fr: {
      disclaimerTitle:'⚠️ Avis Important',
      disclaimer:'Je ne suis ni savant ni mufti. C\'est un effort humble d\'un musulman qui aime les livres du Sheikh al-Ghazali. Le contenu est tire du livre et de sources islamiques fiables. Ce n\'est pas une fatwa. Veuillez consulter les savants qualifies pour toute question de fiqh.',
      authorName:'Sheikh Mohammed al-Ghazali',
      authorDates:'1917 — 1996',
      authorBio:'Savant et penseur islamique egyptien, surnomme "Le Litteraire de la Predication". Auteur de plus de 94 livres. Diplome d\'Al-Azhar, professeur a l\'Universite Emir Abdelkader de Constantine (Algerie). Laureat du Prix Roi Faysal International. A etudie sous de grands savants dont l\'Imam Hasan al-Banna. Connu pour allier profondeur intellectuelle et style litteraire elegant. Ouvrages majeurs : Fiqh as-Sirah, la Croyance du Musulman et Renouvelle ta Vie. Decede a Medine apres une crise cardiaque lors d\'une conference a Riyad.',
      bookTitle:'A Propos du Livre',
      bookDesc:'"L\'Islam et les Conditions Economiques" traite du systeme economique en Islam avec profondeur et exhaustivite. Le Sheikh al-Ghazali montre que l\'Islam a une vision economique complete combinant justice et liberte tout en combattant la pauvrete et l\'exploitation. Le livre traite de la zakat et son role dans la lutte contre la pauvrete, l\'interdiction du riba et ses alternatives islamiques, l\'ethique du commerce et les droits de propriete, et les droits des travailleurs et des pauvres. Il couvre egalement le systeme de waqf, le tresor public et le role de l\'Etat dans la solidarite sociale.',
      structureTitle:'📋 Structure du Livre',
      structureDesc:'<strong>Section 1 :</strong> Philosophie de la richesse en Islam — Propriete individuelle et ses limites — Richesse comme depot.<br><strong>Section 2 :</strong> Outils de distribution : Zakat — Charite — Waqf — Heritage — Tresor Public.<br><strong>Section 3 :</strong> Ethique du gain : Commerce — Travail — Interdiction du riba et du monopole.<br><strong>Section 4 :</strong> Justice sociale — Lutte contre la pauvrete — Equilibre economique.',
      sourcesTitle:'Sources',
      sources:[
        '"L\'Islam et les Conditions Economiques" — Sheikh Mohammed al-Ghazali',
        'Le Saint Coran',
        'Sahih al-Bukhari et Muslim',
        'Sunan at-Tirmidhi, Abu Dawud et Ibn Majah',
        '"Le Licite et l\'Illicite" — Sheikh Yusuf al-Qaradawi',
        '"Fiqh de la Zakat" — Sheikh Yusuf al-Qaradawi'
      ],
      contact:'Contact : abdelhak.bourdim@gmail.com'
    }
  };
  const a = about[lang];
  document.getElementById('aboutContainer').innerHTML = `<div class="about-disclaimer"><div class="about-disclaimer-title">${a.disclaimerTitle}</div><p>${a.disclaimer}</p></div>
    <div class="about-author"><span class="about-author-icon">📚</span><div class="about-author-info"><div class="about-author-name">${a.authorName}</div><div class="about-author-dates">${a.authorDates}</div><div class="about-author-bio">${a.authorBio}</div></div></div>
    <div class="about-section"><div class="about-section-title">${a.bookTitle}</div><p class="about-text">${a.bookDesc}</p></div>
    <div class="about-section"><div class="about-section-title">${a.structureTitle}</div><p class="about-text">${a.structureDesc}</p></div>
    <div class="about-section"><div class="about-section-title">${a.sourcesTitle}</div>${a.sources.map(s => `<p class="about-text">&#8226; ${s}</p>`).join('')}</div>
    <div class="about-section"><p class="about-text">${a.contact}</p></div>`;
}

// ═══════════════ RENDER: HELP ═══════════════
function renderHelp() {
  const help = {
    ar: [
      {title:'⚠️ تنبيه مهم',body:'أنا لست عالماً ولا شيخاً ولا طالب علم شرعي. هذا مجرد جهد بسيط من أب مسلم بحث في الإنترنت عن محتوى تعليمي إسلامي تفاعلي يناسبه ولم يجد ما يرضيه، فقرر أن يصنعه بنفسه. المحتوى مستخلص من كتاب الشيخ محمد الغزالي ومن مصادر إسلامية موثوقة، لكنه ليس فتوى ولا مرجعاً شرعياً. أرجو مراجعة أهل العلم في أي مسألة فقهية.'},
      {title:'📚 المصادر والمراجع',body:'كتاب "الإسلام والأوضاع الاقتصادية" للشيخ محمد الغزالي — القرآن الكريم — صحيح البخاري — صحيح مسلم — سنن الترمذي وأبي داود وابن ماجه — كتاب "الحلال والحرام" للشيخ القرضاوي — كتاب "فقه الزكاة" للشيخ القرضاوي.'},
      {title:'✨ المميزات',body:'ثلاث لغات (عربي/إنجليزي/فرنسي) — ٣ أنماط ألوان — ٢٠ مبدأً اقتصادياً إسلامياً — مسابقة "من سيصبح عالماً" بـ ١٥ سؤالاً — نظام نقاط وشارات ومستويات — وضعان للأعمار — ٨ أدعية للرزق والبركة — مشاركة المبادئ مع الأصدقاء.'},
      {title:'🌟 وضع مستكشف صغير',body:'مصمم للأطفال من ٧ إلى ١٢ سنة. نصوص مبسطة بالإيموجي مع خط أكبر. كل مبدأ مشروح بلغة يفهمها الأطفال مع أمثلة من حياتهم اليومية.'},
      {title:'📖 وضع باحث شاب',body:'مصمم للشباب من ١٣ سنة فأكثر وللآباء والأمهات. نصوص كاملة مع آيات قرآنية وأحاديث نبوية وتحليل اقتصادي وتطبيقات عملية.'},
      {title:'🏧 الاقتصاد الإسلامي المعاصر',body:'يتضمن التطبيق مبادئ حول المصرفية الإسلامية والتمويل الأصغر والاستثمار الأخلاقي والصكوك والوقاية من الأزمات — مواضيع معاصرة مستلهمة من روح الكتاب.'},
      {title:'🤝 المشاركة والمساهمة',body:'هذا مشروع مفتوح. البريد الإلكتروني: abdelhak.bourdim@gmail.com — أي ملاحظة أو خطأ تقني أو خطأ شرعي أو اقتراح — أرسله ولا تتردد.'}
    ],
    en: [
      {title:'⚠️ Important Disclaimer',body:'I am not a scholar, not a sheikh, not even a student of Islamic sciences. This is simply a humble effort from a Muslim parent who searched the internet for interactive Islamic educational content and couldn\'t find what he was looking for — so he decided to build it himself. The content is derived from Sheikh al-Ghazali\'s book and trusted Islamic sources, but it is not a fatwa. Please consult qualified scholars for any fiqh-related questions.'},
      {title:'📚 Sources & References',body:'"Islam and Economic Conditions" by Sheikh Mohammed al-Ghazali — The Holy Quran — Sahih al-Bukhari — Sahih Muslim — Sunan at-Tirmidhi, Abu Dawud, and Ibn Majah — "The Lawful and the Prohibited" by Sheikh al-Qaradawi — "Fiqh of Zakat" by Sheikh al-Qaradawi.'},
      {title:'✨ Features',body:'Three languages (AR/EN/FR) — 3 color themes — 20 Islamic economic principles — "Who Wants to Be a Scholar?" quiz with 15 questions — Points, badges, and level system — 2 age modes — 8 duas for provision and blessing — Share principles with friends.'},
      {title:'🌟 Young Explorer Mode',body:'Designed for children aged 7 to 12. Simplified text with emojis and larger font. Each principle is explained in language children understand with examples from daily life.'},
      {title:'📖 Teen Scholar Mode',body:'Designed for youth aged 13+ and for parents. Full text with Quranic verses, prophetic hadiths, economic analysis, and practical applications.'},
      {title:'🏧 Contemporary Islamic Economics',body:'The app includes principles on Islamic banking, microfinance, ethical investment, sukuk, and crisis prevention — contemporary topics inspired by the spirit of the book.'},
      {title:'🤝 Contributing',body:'This is an open project. Email: abdelhak.bourdim@gmail.com — Any feedback, technical bug, religious correction, or suggestion — don\'t hesitate.'}
    ],
    fr: [
      {title:'⚠️ Avertissement Important',body:'Je ne suis ni savant, ni cheikh, ni etudiant en sciences islamiques. C\'est simplement un modeste effort d\'un parent musulman qui a cherche du contenu educatif islamique interactif et n\'a pas trouve ce qui lui convenait — alors il a decide de le creer. Le contenu est tire du livre du Sheikh al-Ghazali et de sources islamiques fiables. Ce n\'est pas une fatwa.'},
      {title:'📚 Sources et References',body:'"L\'Islam et les Conditions Economiques" par Sheikh Mohammed al-Ghazali — Le Saint Coran — Sahih al-Bukhari — Sahih Muslim — Sunan at-Tirmidhi, Abu Dawud et Ibn Majah — "Le Licite et l\'Illicite" par Sheikh al-Qaradawi — "Fiqh de la Zakat" par Sheikh al-Qaradawi.'},
      {title:'✨ Fonctionnalites',body:'Trois langues (AR/EN/FR) — 3 themes de couleurs — 20 principes economiques islamiques — Quiz "Qui Veut Devenir Savant" avec 15 questions — Systeme de points, badges et niveaux — 2 modes d\'age — 8 duas pour la subsistance et la benediction — Partage des principes.'},
      {title:'🌟 Mode Jeune Explorateur',body:'Concu pour les enfants de 7 a 12 ans. Texte simplifie avec emojis et police plus grande. Chaque principe est explique dans un langage accessible avec des exemples de la vie quotidienne.'},
      {title:'📖 Mode Jeune Chercheur',body:'Concu pour les jeunes de 13 ans et plus et pour les parents. Texte complet avec versets coraniques, hadiths prophetiques, analyse economique et applications pratiques.'},
      {title:'🏧 Economie Islamique Contemporaine',body:'L\'application comprend des principes sur la banque islamique, la microfinance, l\'investissement ethique, les sukuk et la prevention des crises — sujets contemporains inspires de l\'esprit du livre.'},
      {title:'🤝 Contribuer',body:'C\'est un projet ouvert. Email : abdelhak.bourdim@gmail.com — Tout retour, bug technique, correction religieuse ou suggestion — n\'hesitez pas.'}
    ]
  };
  document.getElementById('helpBody').innerHTML = help[lang].map(h => `<div class="help-item"><div class="help-item-title">${h.title}</div><div>${h.body}</div></div>`).join('');
}

// ═══════════════ RENDER: DUAS ═══════════════
function renderDuas() { document.getElementById('duaPanelContent').innerHTML = DUAS.map(d => { const dd = d[lang]; return `<div class="dua-item"><div class="dua-item-label">${dd.label}</div><div class="dua-item-ar">${dd.text}</div><div class="dua-item-tr">${dd.tr}</div></div>`; }).join(''); }

// ═══════════════ TICKER ═══════════════
function renderTicker() {
  const tips = {
    ar: [
      '📖 اكتشف مبدأً جديداً كل يوم',
      '🏆 اجمع النقاط واربح الشارات',
      '🌟 جرب وضع المستكشف الصغير',
      '🤲 لا تنسَ الدعاء بالرزق الحلال',
      '⭐ أكمل ٢٠ مبدأً لتصبح خبيراً',
      '💰 الزكاة تطهّر المال وتبارك فيه',
      '🏧 تعرف على المصرفية الإسلامية',
      '📊 الاستثمار الحلال خير من الربا',
      '🤝 شارك المبادئ مع أصدقائك',
      '🌍 الإسلام يحمي البيئة والموارد'
    ],
    en: [
      '📖 Discover a new principle every day',
      '🏆 Collect points and earn badges',
      '🌟 Try Young Explorer mode',
      '🤲 Don\'t forget to make dua for halal provision',
      '⭐ Complete all 20 principles to become an Expert',
      '💰 Zakat purifies and blesses wealth',
      '🏧 Learn about Islamic banking',
      '📊 Halal investment is better than riba',
      '🤝 Share principles with your friends',
      '🌍 Islam protects the environment and resources'
    ],
    fr: [
      '📖 Decouvrez un nouveau principe chaque jour',
      '🏆 Collectez des points et gagnez des badges',
      '🌟 Essayez le mode Jeune Explorateur',
      '🤲 N\'oubliez pas les duas pour la subsistance halal',
      '⭐ Completez les 20 principes pour devenir Expert',
      '💰 La Zakat purifie et benit la richesse',
      '🏧 Decouvrez la banque islamique',
      '📊 L\'investissement halal vaut mieux que le riba',
      '🤝 Partagez les principes avec vos amis',
      '🌍 L\'Islam protege l\'environnement et les ressources'
    ]
  };
  const items = tips[lang]; const doubled = [...items, ...items]; const ticker = document.getElementById('tickerText');
  ticker.innerHTML = doubled.map(t => `<span class="tc">&nbsp;&nbsp;${t}&nbsp;&nbsp;•</span>`).join('');
  ticker.style.animation = `tickerMarquee ${items.length * 6}s linear infinite`;
}

// ═══════════════ FUN FACTS & STATS ═══════════════
const FUN_FACTS = {
  ar: [
    'هل تعلم أن صناعة التمويل الإسلامي تبلغ قيمتها أكثر من ٤ تريليون دولار عالمياً؟',
    'هل تعلم أن الخليفة عمر بن عبد العزيز قضى على الفقر في عهده حتى لم يجد من يأخذ الزكاة؟',
    'هل تعلم أن نظام الوقف الإسلامي سبق المؤسسات الخيرية الغربية بقرون؟',
    'هل تعلم أن ابن خلدون سبق آدم سميث بـ ٤٠٠ سنة في نظرية العرض والطلب؟',
    'هل تعلم أن أول عملة إسلامية سكّها الخليفة عبد الملك بن مروان سنة ٧٧ هجرية؟',
    'هل تعلم أن الإسلام أول نظام يفرض ضريبة إلزامية لصالح الفقراء (الزكاة)؟',
    'هل تعلم أن المصارف الإسلامية أثبتت صلابة أكبر أمام أزمة ٢٠٠٨ المالية؟',
    'هل تعلم أن كلمة "شيك" مشتقة من كلمة "صكّ" العربية التي استخدمها التجار المسلمون؟',
    'هل تعلم أن بيمارستان (المستشفى) كان يموّل بالكامل من أموال الوقف الإسلامي؟',
    'هل تعلم أن الخليفة عمر بن الخطاب أسس أول ديوان (سجل مالي) في الإسلام؟'
  ],
  en: [
    'Did you know the Islamic finance industry is worth over $4 trillion globally?',
    'Did you know Caliph Umar ibn Abd al-Aziz eliminated poverty in his era — no one was left to receive zakat?',
    'Did you know the Islamic Waqf system preceded Western charitable foundations by centuries?',
    'Did you know Ibn Khaldun preceded Adam Smith by 400 years in supply and demand theory?',
    'Did you know the first Islamic currency was minted by Caliph Abd al-Malik ibn Marwan in 77 AH?',
    'Did you know Islam was the first system to impose a mandatory tax for the poor (Zakat)?',
    'Did you know Islamic banks showed greater resilience during the 2008 financial crisis?',
    'Did you know the word "check" is derived from the Arabic word "sakk" used by Muslim traders?',
    'Did you know Bimaristan (hospital) was fully funded by Islamic Waqf endowments?',
    'Did you know Caliph Umar ibn al-Khattab established the first diwan (financial register) in Islam?'
  ],
  fr: [
    'Saviez-vous que l\'industrie de la finance islamique vaut plus de 4 000 milliards de dollars ?',
    'Saviez-vous que le Calife Umar ibn Abd al-Aziz a elimine la pauvrete — personne ne pouvait recevoir la zakat ?',
    'Saviez-vous que le systeme Waqf islamique a precede les fondations caritatives occidentales de siecles ?',
    'Saviez-vous qu\'Ibn Khaldun a precede Adam Smith de 400 ans en theorie de l\'offre et la demande ?',
    'Saviez-vous que la premiere monnaie islamique a ete frappee par le Calife Abd al-Malik en 77 AH ?',
    'Saviez-vous que l\'Islam fut le premier systeme a imposer un impot obligatoire pour les pauvres (Zakat) ?',
    'Saviez-vous que les banques islamiques ont montre plus de resilience lors de la crise de 2008 ?',
    'Saviez-vous que le mot "cheque" derive de l\'arabe "sakk" utilise par les commercants musulmans ?',
    'Saviez-vous que le Bimaristan (hopital) etait entierement finance par les Waqf islamiques ?',
    'Saviez-vous que le Calife Umar ibn al-Khattab a cree le premier diwan (registre financier) de l\'Islam ?'
  ]
};

function getRandomFact() {
  const facts = FUN_FACTS[lang];
  return facts[Math.floor(Math.random() * facts.length)];
}

function renderFactOfDay() {
  const factContainer = document.getElementById('factOfDay');
  if (!factContainer) return;
  const factTitle = { ar: '💡 هل تعلم؟', en: '💡 Did You Know?', fr: '💡 Le Saviez-Vous ?' };
  factContainer.innerHTML = `
    <div class="fact-card scroll-reveal">
      <div class="fact-title">${factTitle[lang]}</div>
      <div class="fact-text">${getRandomFact()}</div>
      <button class="fact-btn" onclick="this.previousElementSibling.textContent=getRandomFact();playSound('click')">
        ${lang === 'ar' ? '🔄 حقيقة أخرى' : lang === 'fr' ? '🔄 Autre fait' : '🔄 Another fact'}
      </button>
    </div>`;
}

// ═══════════════ SPLASH SCREEN ═══════════════
let splashTimer;
function initSplash() { const features = document.getElementById('splashFeatures'); if (features) { features.innerHTML = T[lang].splashFeatures.map((f, i) => `<div class="splash-feature" style="animation-delay:${0.3+i*0.3}s">${f}</div>`).join(''); } let count = 5; const counter = document.getElementById('splashCount'); splashTimer = setInterval(() => { count--; if (counter) counter.textContent = count; if (count <= 0) dismissSplash(); }, 1000); }
function dismissSplash() { clearInterval(splashTimer); const splash = document.getElementById('splash'); if (splash) { splash.classList.add('hidden'); setTimeout(() => splash.remove(), 600); } }

// ═══════════════ TAB SWITCHING ═══════════════
function initTabs() { document.querySelectorAll('.tab').forEach(tab => { tab.addEventListener('click', () => { switchTab(tab.dataset.tab); }); }); }
function switchTab(name) { document.querySelectorAll('.panel').forEach(p => p.classList.remove('active')); document.querySelectorAll('.tab').forEach(t => t.classList.remove('active')); const panel = document.getElementById('panel-' + name); const tabBtn = document.querySelector(`.tab[data-tab="${name}"]`); if (panel) panel.classList.add('active'); if (tabBtn) tabBtn.classList.add('active'); window.scrollTo({ top: 0, behavior: 'smooth' }); playSound('click'); setTimeout(() => { document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => { if (window._scrollObserver) window._scrollObserver.observe(el); }); initTypewriter(); }, 100); }

// ═══════════════ SCROLL REVEAL ═══════════════
function initScrollReveal() { if (!('IntersectionObserver' in window)) return; window._scrollObserver = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('revealed'); window._scrollObserver.unobserve(entry.target); } }); }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }); document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => window._scrollObserver.observe(el)); }

// ═══════════════ KEYBOARD NAVIGATION ═══════════════
function initKeyboardNav() { document.addEventListener('keydown', (e) => { if (e.key === 'Escape') { const hp = document.getElementById('helpPanel'); if (!hp.classList.contains('hidden')) { toggleHelp(); return; } const dp = document.getElementById('duaPanel'); if (!dp.classList.contains('hidden')) { toggleDuaPanel(); return; } document.querySelectorAll('.trait-card.open').forEach(c => c.classList.remove('open')); } if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') { const panel = document.getElementById('panel-traits'); if (!panel || !panel.classList.contains('active')) return; if (document.activeElement && document.activeElement.id === 'traitsSearch') return; e.preventDefault(); const cards = Array.from(document.querySelectorAll('.trait-card')).filter(c => c.style.display !== 'none'); if (!cards.length) return; if (currentPrincipleIdx >= 0 && currentPrincipleIdx < cards.length) cards[currentPrincipleIdx].classList.remove('open'); const dir = document.documentElement.dir === 'rtl' ? (e.key==='ArrowRight'?-1:1) : (e.key==='ArrowRight'?1:-1); currentPrincipleIdx = Math.max(0, Math.min(cards.length-1, currentPrincipleIdx+dir)); cards[currentPrincipleIdx].classList.add('open'); cards[currentPrincipleIdx].scrollIntoView({ behavior:'smooth', block:'center' }); playSound('click'); } }); }

// ═══════════════ UTILITIES ═══════════════
function toggleCard(id) { const card = document.getElementById(id); if (card) { card.classList.toggle('open'); playSound('click'); } }
function toggleHelp() { document.getElementById('helpPanel').classList.toggle('hidden'); playSound('click'); }
function toggleDuaPanel() { document.getElementById('duaPanel').classList.toggle('hidden'); playSound('click'); }
function showToast(msg) { const t = document.getElementById('toast'); const m = document.getElementById('toastMsg'); if (t && m) { m.textContent = msg; t.style.display = 'block'; setTimeout(() => t.style.display = 'none', 2500); } }
function initScrollTop() { const btn = document.getElementById('scrollTop'); window.addEventListener('scroll', () => { if (btn) btn.classList.toggle('visible', window.scrollY > 300); }); }

// ═══════════════ SOUND EFFECTS ═══════════════
const AudioCtx = window.AudioContext || window.webkitAudioContext; let audioCtx;
function playSound(type) { try { if (!audioCtx) audioCtx = new AudioCtx(); const osc = audioCtx.createOscillator(); const gain = audioCtx.createGain(); osc.connect(gain); gain.connect(audioCtx.destination); gain.gain.value = 0.06; if (type==='click') { osc.frequency.value=800; osc.type='sine'; gain.gain.value=0.04; } else if (type==='success') { osc.frequency.value=523; osc.type='sine'; gain.gain.value=0.06; } else if (type==='theme') { osc.frequency.value=440; osc.type='triangle'; gain.gain.value=0.05; } osc.start(); osc.stop(audioCtx.currentTime + 0.1); } catch(e) {} }

// ═══════════════ CONFETTI ═══════════════
function launchConfetti() { const canvas = document.getElementById('confettiCanvas'); if (!canvas) return; canvas.style.display = 'block'; const ctx = canvas.getContext('2d'); canvas.width = window.innerWidth; canvas.height = window.innerHeight; const particles = []; const colors = ['#2E7D32','#4CAF50','#81C784','#A5D6A7','#FFD54F','#FF8A65','#4FC3F7']; for (let i = 0; i < 120; i++) { particles.push({ x:Math.random()*canvas.width, y:Math.random()*canvas.height-canvas.height, w:Math.random()*10+5, h:Math.random()*6+3, color:colors[Math.floor(Math.random()*colors.length)], vx:(Math.random()-0.5)*4, vy:Math.random()*3+2, rot:Math.random()*360, rotSpeed:(Math.random()-0.5)*10 }); } let frame = 0; function draw() { ctx.clearRect(0,0,canvas.width,canvas.height); particles.forEach(p => { p.x+=p.vx; p.y+=p.vy; p.rot+=p.rotSpeed; ctx.save(); ctx.translate(p.x,p.y); ctx.rotate(p.rot*Math.PI/180); ctx.fillStyle=p.color; ctx.fillRect(-p.w/2,-p.h/2,p.w,p.h); ctx.restore(); }); frame++; if (frame < 120) requestAnimationFrame(draw); else { ctx.clearRect(0,0,canvas.width,canvas.height); canvas.style.display='none'; } } draw(); }

// ═══════════════ TYPEWRITER ═══════════════
function initTypewriter() { const dailyTitle = document.querySelector('.daily-card .daily-title'); if (!dailyTitle || dailyTitle.dataset.twDone) return; const fullText = dailyTitle.textContent; dailyTitle.textContent = ''; dailyTitle.classList.add('typewriter-text'); dailyTitle.dataset.twDone = '1'; let i = 0; const speed = Math.max(30, 2000 / fullText.length); function typeChar() { if (i < fullText.length) { dailyTitle.textContent += fullText.charAt(i); i++; setTimeout(typeChar, speed); } else { setTimeout(() => dailyTitle.classList.add('tw-done'), 1500); } } setTimeout(typeChar, 500); }

// ═══════════════ SWIPE GESTURES ═══════════════
function initSwipeGestures() { let touchStartX = 0, touchStartY = 0; const tabOrder = ['home','traits','quiz','progress','about']; document.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].screenX; touchStartY = e.changedTouches[0].screenY; }, { passive: true }); document.addEventListener('touchend', e => { const dx = e.changedTouches[0].screenX - touchStartX; const dy = e.changedTouches[0].screenY - touchStartY; if (Math.abs(dx) < 80 || Math.abs(dy) > Math.abs(dx) * 0.5) return; const current = tabOrder.findIndex(t => { const p = document.getElementById('panel-'+t); return p && p.classList.contains('active'); }); if (current < 0) return; const isRTL = document.documentElement.dir === 'rtl'; let next; if ((dx > 0 && !isRTL) || (dx < 0 && isRTL)) next = current - 1; else next = current + 1; if (next >= 0 && next < tabOrder.length) switchTab(tabOrder[next]); }, { passive: true }); }

// ═══════════════ INIT ═══════════════
document.addEventListener('DOMContentLoaded', () => { document.body.classList.toggle('young-mode', ageMode === 'young'); updateStreak(); initSplash(); renderAll(); initTabs(); initScrollReveal(); initScrollTop(); initKeyboardNav(); initSwipeGestures(); initTypewriter(); });
