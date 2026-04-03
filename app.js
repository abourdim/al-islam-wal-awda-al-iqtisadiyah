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
    traitsDesc: '١٥ مبدأً اقتصادياً إسلامياً من كتاب الشيخ محمد الغزالي — كل مبدأ بآية وحديث وتطبيق عملي',
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
      '١٥ مبدأً من كتاب الإسلام والأوضاع الاقتصادية',
      'مسابقة "من سيصبح عالماً" بالمكافآت',
      'نظام النقاط والشارات والمستويات',
      'وضع مستكشف صغير ووضع باحث شاب'
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
    traitsDesc: '15 Islamic economic principles from Sheikh al-Ghazali — each with a verse, hadith, and practical application',
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
      '15 Islamic economic principles from Islam & Economics',
      '"Who Wants to Be a Scholar?" quiz with rewards',
      'Points, badges, and level system',
      'Young Explorer and Teen Scholar modes'
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
    traitsDesc: '15 principes economiques islamiques du livre du Sheikh al-Ghazali — chacun avec un verset, un hadith et une application pratique',
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
      '15 principes economiques islamiques du livre L\'Islam et l\'Economie',
      'Quiz « Qui Veut Devenir Savant ? » avec recompenses',
      'Systeme de points, badges et niveaux',
      'Modes Jeune Explorateur et Jeune Chercheur'
    ],
  }
};

// ═══════════════ 15 ECONOMIC PRINCIPLES DATA ═══════════════
const TRAITS = [
  {
    id:1, emoji:'💰',
    ar:{title:'نظام الزكاة',desc:'الزكاة ركن من أركان الإسلام. هي حق الفقير في مال الغني. ليست صدقة تطوعية بل فريضة إلهية تطهّر المال وتبارك فيه. الزكاة تحارب الفقر وتوزع الثروة وتمنع تكدس الأموال في يد فئة قليلة.',verse:'خُذْ مِنْ أَمْوَالِهِمْ صَدَقَةً تُطَهِّرُهُمْ وَتُزَكِّيهِمْ بِهَا',verseRef:'التوبة ١٠٣',hadith:'ما من صاحب ذهب ولا فضة لا يؤدي منها حقها إلا جعلت له صفائح من نار — رواه مسلم',action:'احسب زكاة مالك أو ساعد أهلك في حسابها — وتعلم نصاب الزكاة ومقدارها',young:'الزكاة مثل مشاركة الحلوى مع أصدقائك! الله يريدنا أن نساعد الفقراء من أموالنا 💰'},
    en:{title:'The Zakat System',desc:'Zakat is a pillar of Islam. It is the right of the poor in the wealth of the rich. It is not voluntary charity but a divine obligation that purifies and blesses wealth. Zakat fights poverty, distributes wealth, and prevents the hoarding of money by a small group.',verse:'Take from their wealth a charity by which you purify them and cause them increase',verseRef:'At-Tawbah 103',hadith:'No owner of gold or silver who does not pay its due right except that plates of fire will be made for them — Muslim',action:'Calculate your zakat or help your family calculate it — learn the nisab and the amount required',young:'Zakat is like sharing your candy with friends! Allah wants us to help the poor from our money 💰'},
    fr:{title:'Le Systeme de la Zakat',desc:'La Zakat est un pilier de l\'Islam. C\'est le droit du pauvre dans la richesse du riche. Ce n\'est pas une charite volontaire mais une obligation divine qui purifie et benit la richesse. La Zakat combat la pauvrete, distribue la richesse et empeche l\'accumulation d\'argent par un petit groupe.',verse:'Prends de leurs biens une aumone par laquelle tu les purifies et les benis',verseRef:'At-Tawbah 103',hadith:'Aucun proprietaire d\'or ou d\'argent qui ne paie pas son du sauf que des plaques de feu seront faites pour lui — Muslim',action:'Calculez votre zakat ou aidez votre famille a la calculer — apprenez le nisab et le montant requis',young:'La Zakat c\'est comme partager tes bonbons avec tes amis ! Allah veut qu\'on aide les pauvres avec notre argent 💰'}
  },
  {
    id:2, emoji:'🚫',
    ar:{title:'تحريم الربا',desc:'الربا محرّم في الإسلام لأنه يستغل حاجة المحتاج ويثري الغني على حساب الفقير. الربا يدمّر الاقتصاد ويخلق فجوة طبقية هائلة. الإسلام يشجع التجارة الحلال والمشاركة في الربح والخسارة.',verse:'وَأَحَلَّ اللَّهُ الْبَيْعَ وَحَرَّمَ الرِّبَا',verseRef:'البقرة ٢٧٥',hadith:'لعن رسول الله ﷺ آكل الربا وموكله وكاتبه وشاهديه — رواه مسلم',action:'تعلم الفرق بين الربا والتجارة الحلال — وابحث عن بدائل إسلامية للبنوك الربوية',young:'الربا يعني أخذ أموال زيادة ظلماً! الإسلام يقول: تاجر بعدل وشارك الربح والخسارة مع الآخرين 🚫'},
    en:{title:'Prohibition of Riba (Usury)',desc:'Riba is prohibited in Islam because it exploits the needy and enriches the rich at the expense of the poor. Riba destroys economies and creates huge class gaps. Islam encourages lawful trade and sharing in both profit and loss.',verse:'Allah has permitted trade and forbidden riba (usury)',verseRef:'Al-Baqarah 275',hadith:'The Messenger of Allah cursed the one who consumes riba, the one who pays it, the one who records it, and the witnesses — Muslim',action:'Learn the difference between riba and lawful trade — research Islamic alternatives to interest-based banking',young:'Riba means taking extra money unfairly! Islam says: trade fairly and share profit and loss with others 🚫'},
    fr:{title:'L\'Interdiction du Riba (Usure)',desc:'Le Riba est interdit en Islam car il exploite le necessiteux et enrichit le riche aux depens du pauvre. Le Riba detruit les economies et cree d\'enormes ecarts de classe. L\'Islam encourage le commerce licite et le partage des profits et des pertes.',verse:'Allah a rendu licite le commerce et a interdit le riba (usure)',verseRef:'Al-Baqarah 275',hadith:'Le Messager d\'Allah a maudit celui qui consomme le riba, celui qui le paie, celui qui l\'enregistre et les temoins — Muslim',action:'Apprenez la difference entre le riba et le commerce licite — recherchez les alternatives islamiques aux banques a interet',young:'Le Riba c\'est prendre de l\'argent en plus injustement ! L\'Islam dit : commercez equitablement et partagez les profits et les pertes 🚫'}
  },
  {
    id:3, emoji:'⚖️',
    ar:{title:'العدالة الاجتماعية',desc:'الإسلام يرفض أن يكون المال دولة بين الأغنياء فقط. العدالة الاجتماعية تعني أن لكل فرد حقاً في حياة كريمة: طعام ومسكن وعلاج وتعليم. المجتمع المسلم مسؤول عن ضمان هذه الحقوق.',verse:'كَيْ لَا يَكُونَ دُولَةً بَيْنَ الْأَغْنِيَاءِ مِنْكُمْ',verseRef:'الحشر ٧',hadith:'ليس المؤمن الذي يشبع وجاره جائع — رواه البخاري في الأدب المفرد',action:'فكر اليوم في شخص محتاج حولك وقدم له مساعدة — ولو كلمة طيبة',young:'الإسلام يريد أن يكون الجميع سعداء! لا ينبغي أن يجوع أحد بينما غيره يملك الكثير ⚖️'},
    en:{title:'Social Justice',desc:'Islam rejects wealth being circulated only among the rich. Social justice means every individual has a right to a dignified life: food, shelter, healthcare, and education. The Muslim community is responsible for ensuring these rights.',verse:'So that it will not be a perpetual distribution among the rich from among you',verseRef:'Al-Hashr 7',hadith:'He is not a believer who eats his fill while his neighbor is hungry — Bukhari in Al-Adab Al-Mufrad',action:'Think today about someone in need around you and offer help — even a kind word',young:'Islam wants everyone to be happy! No one should go hungry while others have plenty ⚖️'},
    fr:{title:'La Justice Sociale',desc:'L\'Islam rejette que la richesse ne circule qu\'entre les riches. La justice sociale signifie que chaque individu a droit a une vie digne : nourriture, logement, soins et education. La communaute musulmane est responsable de garantir ces droits.',verse:'Afin que cela ne soit pas distribue perpetuellement entre les riches parmi vous',verseRef:'Al-Hashr 7',hadith:'N\'est pas croyant celui qui mange a sa faim tandis que son voisin a faim — Bukhari dans Al-Adab Al-Mufrad',action:'Pensez aujourd\'hui a quelqu\'un dans le besoin autour de vous et offrez de l\'aide — meme un bon mot',young:'L\'Islam veut que tout le monde soit heureux ! Personne ne devrait avoir faim pendant que d\'autres ont beaucoup ⚖️'}
  },
  {
    id:4, emoji:'🤝',
    ar:{title:'توزيع الثروة',desc:'الإسلام يحارب تركز الثروة ويسعى لتوزيعها العادل. الزكاة والصدقات والوقف والميراث كلها أدوات لضمان تداول المال بين جميع فئات المجتمع. الغنى ابتلاء كما أن الفقر ابتلاء.',verse:'وَفِي أَمْوَالِهِمْ حَقٌّ لِلسَّائِلِ وَالْمَحْرُومِ',verseRef:'الذاريات ١٩',hadith:'اليد العليا خير من اليد السفلى — متفق عليه',action:'شارك شيئاً مع من لا يملك اليوم — طعاماً أو ملابس أو وقتك',young:'شارك ما عندك! إذا كان عندك شيء زيادة، أعطه لمن يحتاجه — هكذا يعلمنا الإسلام 🤝'},
    en:{title:'Wealth Distribution',desc:'Islam fights the concentration of wealth and seeks its fair distribution. Zakat, charity, waqf, and inheritance are all tools to ensure money circulates among all segments of society. Wealth is a test just as poverty is a test.',verse:'And in their wealth is a known right for the one who asks and the deprived',verseRef:'Adh-Dhariyat 19',hadith:'The upper hand (giving) is better than the lower hand (receiving) — Agreed upon',action:'Share something with someone who has less today — food, clothing, or your time',young:'Share what you have! If you have something extra, give it to someone who needs it — that is what Islam teaches 🤝'},
    fr:{title:'La Distribution de la Richesse',desc:'L\'Islam combat la concentration de la richesse et cherche sa distribution equitable. La Zakat, la charite, le Waqf et l\'heritage sont tous des outils pour assurer la circulation de l\'argent entre tous les segments de la societe. La richesse est une epreuve tout comme la pauvrete.',verse:'Et dans leurs biens il y a un droit connu pour le mendiant et le prive',verseRef:'Adh-Dhariyat 19',hadith:'La main superieure (qui donne) est meilleure que la main inferieure (qui recoit) — Unanimement reconnu',action:'Partagez quelque chose avec quelqu\'un qui a moins aujourd\'hui — nourriture, vetements ou votre temps',young:'Partage ce que tu as ! Si tu as quelque chose en plus, donne-le a quelqu\'un qui en a besoin — c\'est ce que l\'Islam enseigne 🤝'}
  },
  {
    id:5, emoji:'🔨',
    ar:{title:'أخلاقيات العمل',desc:'العمل في الإسلام عبادة. المسلم يتقن عمله ويؤديه بأمانة. لا فرق بين عمل يدوي وعمل فكري. خير الكسب عمل الرجل بيده. الإسلام يحارب البطالة والكسل ويحث على الإنتاج.',verse:'وَقُلِ اعْمَلُوا فَسَيَرَى اللَّهُ عَمَلَكُمْ وَرَسُولُهُ وَالْمُؤْمِنُونَ',verseRef:'التوبة ١٠٥',hadith:'ما أكل أحد طعاماً قط خيراً من أن يأكل من عمل يده — رواه البخاري',action:'أتقن عملك اليوم — ادرس بجد أو اعمل بأمانة واعتبره عبادة لله',young:'العمل عبادة! ادرس بجد ورتب غرفتك وساعد أهلك — كل عمل جيد يحبه الله 🔨'},
    en:{title:'Work Ethics',desc:'Work in Islam is worship. A Muslim perfects their work and performs it with integrity. There is no difference between manual and intellectual work. The best earning comes from one\'s own hands. Islam fights unemployment and laziness and encourages productivity.',verse:'And say: Work, for Allah will see your work, and His Messenger, and the believers',verseRef:'At-Tawbah 105',hadith:'No one has ever eaten food better than what they earn from the work of their own hands — Bukhari',action:'Perfect your work today — study hard or work with integrity and consider it worship of Allah',young:'Work is worship! Study hard, tidy your room, and help your family — Allah loves every good deed you do 🔨'},
    fr:{title:'L\'Ethique du Travail',desc:'Le travail en Islam est une adoration. Le musulman perfectionne son travail et l\'accomplit avec integrite. Il n\'y a pas de difference entre travail manuel et intellectuel. Le meilleur gain vient de ses propres mains. L\'Islam combat le chomage et la paresse et encourage la productivite.',verse:'Et dis : Oeuvrez, car Allah verra votre oeuvre, ainsi que Son Messager et les croyants',verseRef:'At-Tawbah 105',hadith:'Personne n\'a jamais mange de nourriture meilleure que celle gagnee par le travail de ses propres mains — Bukhari',action:'Perfectionnez votre travail aujourd\'hui — etudiez dur ou travaillez avec integrite et considerez-le comme une adoration',young:'Le travail est une adoration ! Etudie bien, range ta chambre et aide ta famille — Allah aime chaque bonne action 🔨'}
  },
  {
    id:6, emoji:'🏠',
    ar:{title:'مكافحة الفقر',desc:'الفقر عدو يجب محاربته. الإسلام يرفض أن يبقى فقير في مجتمع فيه أغنياء. مكافحة الفقر مسؤولية جماعية تبدأ بالزكاة وتمتد إلى الصدقة والوقف وتوفير فرص العمل.',verse:'وَآتِ ذَا الْقُرْبَى حَقَّهُ وَالْمِسْكِينَ وَابْنَ السَّبِيلِ',verseRef:'الإسراء ٢٦',hadith:'من كان معه فضل ظهر فليعد به على من لا ظهر له — رواه مسلم',action:'ابحث اليوم عن طريقة لمساعدة شخص فقير — تبرع بملابس أو طعام أو وقت',young:'لنساعد الفقراء معاً! تبرع بلعبة قديمة أو ملابس لا تحتاجها لشخص يحتاجها 🏠'},
    en:{title:'Poverty Elimination',desc:'Poverty is an enemy that must be fought. Islam rejects having poor people in a society that has rich ones. Fighting poverty is a collective responsibility starting with zakat and extending to charity, waqf, and providing job opportunities.',verse:'And give the relative their right, and the needy, and the traveler',verseRef:'Al-Isra 26',hadith:'Whoever has extra provision should share it with those who have none — Muslim',action:'Look today for a way to help someone poor — donate clothes, food, or time',young:'Let us help the poor together! Donate an old toy or clothes you don\'t need to someone who needs them 🏠'},
    fr:{title:'L\'Elimination de la Pauvrete',desc:'La pauvrete est un ennemi a combattre. L\'Islam refuse qu\'il y ait des pauvres dans une societe qui a des riches. Combattre la pauvrete est une responsabilite collective commencant par la zakat et s\'etendant a la charite, au waqf et a l\'offre d\'emplois.',verse:'Et donne au proche parent son droit, ainsi qu\'au necessiteux et au voyageur',verseRef:'Al-Isra 26',hadith:'Quiconque a des provisions en surplus doit les partager avec ceux qui n\'en ont pas — Muslim',action:'Cherchez aujourd\'hui un moyen d\'aider une personne pauvre — donnez des vetements, de la nourriture ou du temps',young:'Aidons les pauvres ensemble ! Donne un vieux jouet ou des vetements dont tu n\'as plus besoin a quelqu\'un qui en a besoin 🏠'}
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
    fr:{label:'Dua de Confiance',text:'حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ',tr:'Allah me suffit ; il n\'y a de dieu que Lui. Je m\'en remets a Lui et Il est le Seigneur du Trone immense — At-Tawbah 129'} }
];

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
  renderHome(); renderTraits(); renderProgress(); renderAbout(); renderHelp(); renderDuas(); renderTicker();
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
    ar: { disclaimerTitle:'⚠️ تنبيه مهم', disclaimer:'لست عالماً ولا مفتياً. هذا جهد متواضع من مسلم يحب كتب الشيخ الغزالي. المحتوى مستمد من الكتاب ومصادر إسلامية موثوقة. ليست فتوى.', authorName:'الشيخ محمد الغزالي', authorDates:'١٩١٧ — ١٩٩٦', authorBio:'عالم ومفكر إسلامي مصري، لُقب بـ"أديب الدعوة". ألّف أكثر من ٩٤ كتاباً. درس في الأزهر، ودرّس في جامعة الأمير عبد القادر بقسنطينة (الجزائر). حاصل على جائزة الملك فيصل.', bookTitle:'عن الكتاب', bookDesc:'«الإسلام والأوضاع الاقتصادية» كتاب يعالج النظام الاقتصادي في الإسلام. يبيّن الشيخ الغزالي أن الإسلام له رؤية اقتصادية متكاملة تجمع بين العدالة والحرية وتحارب الفقر والاستغلال. يناقش الزكاة والربا والتجارة والملكية وحقوق العمال.', sourcesTitle:'المصادر', sources:['كتاب "الإسلام والأوضاع الاقتصادية" — الشيخ محمد الغزالي','القرآن الكريم','صحيح البخاري ومسلم','سنن الترمذي وأبي داود'], contact:'تواصل: abdelhak.bourdim@gmail.com' },
    en: { disclaimerTitle:'⚠️ Important Notice', disclaimer:'I am not a scholar or mufti. This is a humble effort by a Muslim who loves Sheikh al-Ghazali\'s books. Content is derived from the book and trusted Islamic sources. This is not a fatwa.', authorName:'Sheikh Mohammed al-Ghazali', authorDates:'1917 — 1996', authorBio:'Egyptian Islamic scholar and thinker, nicknamed "The Literary Preacher." Author of 94+ books. Studied at Al-Azhar, taught at the University of Emir Abdelkader in Constantine, Algeria. King Faisal Award winner.', bookTitle:'About the Book', bookDesc:'"Islam and Economic Conditions" addresses the economic system in Islam. Sheikh al-Ghazali shows that Islam has a comprehensive economic vision combining justice and freedom while fighting poverty and exploitation. It discusses zakat, riba, trade, property, and workers\' rights.', sourcesTitle:'Sources', sources:['"Islam and Economic Conditions" — Sheikh Mohammed al-Ghazali','The Holy Quran','Sahih al-Bukhari and Muslim','Sunan at-Tirmidhi and Abu Dawud'], contact:'Contact: abdelhak.bourdim@gmail.com' },
    fr: { disclaimerTitle:'⚠️ Avis Important', disclaimer:'Je ne suis ni savant ni mufti. C\'est un effort humble d\'un musulman qui aime les livres du Sheikh al-Ghazali. Le contenu est tire du livre et de sources islamiques fiables. Ce n\'est pas une fatwa.', authorName:'Sheikh Mohammed al-Ghazali', authorDates:'1917 — 1996', authorBio:'Savant et penseur islamique egyptien, surnomme "Le Litteraire de la Predication". Auteur de plus de 94 livres. Diplome d\'Al-Azhar, professeur a l\'Universite Emir Abdelkader de Constantine (Algerie). Laureat du Prix Roi Faysal.', bookTitle:'A Propos du Livre', bookDesc:'"L\'Islam et les Conditions Economiques" traite du systeme economique en Islam. Le Sheikh al-Ghazali montre que l\'Islam a une vision economique complete combinant justice et liberte tout en combattant la pauvrete et l\'exploitation. Il traite de la zakat, du riba, du commerce, de la propriete et des droits des travailleurs.', sourcesTitle:'Sources', sources:['"L\'Islam et les Conditions Economiques" — Sheikh Mohammed al-Ghazali','Le Saint Coran','Sahih al-Bukhari et Muslim','Sunan at-Tirmidhi et Abu Dawud'], contact:'Contact : abdelhak.bourdim@gmail.com' }
  };
  const a = about[lang];
  document.getElementById('aboutContainer').innerHTML = `<div class="about-disclaimer"><div class="about-disclaimer-title">${a.disclaimerTitle}</div><p>${a.disclaimer}</p></div>
    <div class="about-author"><span class="about-author-icon">📚</span><div class="about-author-info"><div class="about-author-name">${a.authorName}</div><div class="about-author-dates">${a.authorDates}</div><div class="about-author-bio">${a.authorBio}</div></div></div>
    <div class="about-section"><div class="about-section-title">${a.bookTitle}</div><p class="about-text">${a.bookDesc}</p></div>
    <div class="about-section"><div class="about-section-title">${a.sourcesTitle}</div>${a.sources.map(s => `<p class="about-text">&#8226; ${s}</p>`).join('')}</div>
    <div class="about-section"><p class="about-text">${a.contact}</p></div>`;
}

// ═══════════════ RENDER: HELP ═══════════════
function renderHelp() {
  const help = {
    ar: [{title:'⚠️ تنبيه',body:'لست عالماً. هذا جهد متواضع لنشر حكمة الشيخ الغزالي بطريقة تفاعلية.'},{title:'📚 المصادر',body:'كتاب "الإسلام والأوضاع الاقتصادية" للشيخ محمد الغزالي، القرآن الكريم، السنة النبوية.'},{title:'✨ المميزات',body:'ثلاث لغات (عربي/إنجليزي/فرنسي)، ٣ أنماط، ١٥ مبدأً، مسابقة تفاعلية، نظام نقاط وشارات، وضعان للأعمار.'},{title:'🌟 وضع مستكشف صغير',body:'للأطفال ٧-١٢ سنة — نصوص مبسطة بالإيموجي، خط أكبر.'},{title:'📖 وضع باحث شاب',body:'للشباب ١٣+ — نصوص كاملة مع آيات وأحاديث وتحليل.'},{title:'🤝 المساهمة',body:'GitHub: github.com/abourdim/al-islam-wal-iqtisad'}],
    en: [{title:'⚠️ Disclaimer',body:'I am not a scholar. This is a humble effort to share Sheikh al-Ghazali\'s wisdom interactively.'},{title:'📚 Sources',body:'"Islam and Economic Conditions" by Sheikh Mohammed al-Ghazali, the Holy Quran, Prophetic Sunnah.'},{title:'✨ Features',body:'Three languages (AR/EN/FR), 3 themes, 15 principles, interactive quiz, XP and badges system, 2 age modes.'},{title:'🌟 Young Explorer',body:'For kids 7-12 — simplified text with emojis, larger font.'},{title:'📖 Teen Scholar',body:'For teens 13+ — full text with verses, hadiths, and analysis.'},{title:'🤝 Contributing',body:'GitHub: github.com/abourdim/al-islam-wal-iqtisad'}],
    fr: [{title:'⚠️ Avertissement',body:'Je ne suis pas un savant. C\'est un effort humble pour partager la sagesse du Sheikh al-Ghazali.'},{title:'📚 Sources',body:'"L\'Islam et les Conditions Economiques" par Sheikh Mohammed al-Ghazali, le Saint Coran, la Sunnah.'},{title:'✨ Fonctionnalites',body:'Trois langues (AR/EN/FR), 3 themes, 15 principes, quiz interactif, systeme XP et badges, 2 modes d\'age.'},{title:'🌟 Jeune Explorateur',body:'Pour enfants 7-12 ans — texte simplifie avec emojis, police plus grande.'},{title:'📖 Jeune Chercheur',body:'Pour ados 13+ — texte complet avec versets, hadiths et analyse.'},{title:'🤝 Contribuer',body:'GitHub : github.com/abourdim/al-islam-wal-iqtisad'}]
  };
  document.getElementById('helpBody').innerHTML = help[lang].map(h => `<div class="help-item"><div class="help-item-title">${h.title}</div><div>${h.body}</div></div>`).join('');
}

// ═══════════════ RENDER: DUAS ═══════════════
function renderDuas() { document.getElementById('duaPanelContent').innerHTML = DUAS.map(d => { const dd = d[lang]; return `<div class="dua-item"><div class="dua-item-label">${dd.label}</div><div class="dua-item-ar">${dd.text}</div><div class="dua-item-tr">${dd.tr}</div></div>`; }).join(''); }

// ═══════════════ TICKER ═══════════════
function renderTicker() {
  const tips = { ar: ['📖 اكتشف مبدأً جديداً كل يوم','🏆 اجمع النقاط واربح الشارات','🌟 جرب وضع المستكشف الصغير','🤲 لا تنسَ الدعاء بالرزق الحلال','⭐ أكمل ١٥ مبدأً لتصبح خبيراً'], en: ['📖 Discover a new principle every day','🏆 Collect points and earn badges','🌟 Try Young Explorer mode','🤲 Don\'t forget to make dua for halal provision','⭐ Complete all 15 principles to become an Expert'], fr: ['📖 Decouvrez un nouveau principe chaque jour','🏆 Collectez des points et gagnez des badges','🌟 Essayez le mode Jeune Explorateur','🤲 N\'oubliez pas les duas pour la subsistance halal','⭐ Completez les 15 principes pour devenir Expert'] };
  const items = tips[lang]; const doubled = [...items, ...items]; const ticker = document.getElementById('tickerText');
  ticker.innerHTML = doubled.map(t => `<span class="tc">&nbsp;&nbsp;${t}&nbsp;&nbsp;•</span>`).join('');
  ticker.style.animation = `tickerMarquee ${items.length * 6}s linear infinite`;
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
