import { type Locale } from "@/i18n/config"

const ar = {
  meta: {
    title: "وراثة — تفسير متغيرات الجينوم بالذكاء الاصطناعي للجينوميات السريرية السعودية",
    description:
      "منصة سعودية للذكاء الاصطناعي تساعد أخصائيي الوراثة السريرية في المستشفيات السعودية على تفسير المتغيرات الجينومية — مُعايَرة لبيانات السكان السعوديين، ومتوافقة مع نظام حماية البيانات الشخصية (PDPL).",
  },
  brand: {
    name: "وراثة",
    nameLatin: "Waratha",
    tagline: "تفسير جينومي دقيق للسياق السريري السعودي",
  },
  nav: {
    product: "المنتج",
    howItWorks: "كيف يعمل",
    forHospitals: "للمستشفيات",
    research: "الأبحاث",
    contact: "تواصل",
    requestAccess: "اطلب الوصول",
    openMenu: "فتح القائمة",
    closeMenu: "إغلاق القائمة",
    skipToContent: "تخطي إلى المحتوى",
    languageLabel: "اللغة",
    languageArabic: "العربية",
    languageEnglish: "English",
  },
  hero: {
    title:
      "تفسير متغيرات الجينوم بالذكاء الاصطناعي — مُصمَّم للممارسة السريرية في السعودية",
    subtitle:
      "وراثة تحوّل نتائج التسلسل الجيني إلى قرارات سريرية في دقائق — مُعايَرة لبيانات السكان السعوديين، ومتوافقة مع نظام حماية البيانات الشخصية (PDPL).",
    primaryCta: "اطلب الوصول المبكر",
    secondaryCta: "شاهد العرض التوضيحي",
    scrollHint: "انتقل للأسفل",
    dashboard: {
      title: "لوحة التفسير السريري",
      panelTitle: "وراثة | اللوحة السريرية",
      patientEntry: "معرف المريض: SA-0042 | الجين: HADHA | المتغير: c.1528G>A",
      statusBadge: "⚠ أُعيد تصنيفه: محتمل أن يكون مرضياً",
      confidenceLabel: "مستوى الثقة",
      confidenceValue: "94%",
      stats: {
        variants: "+7,500 متغير مرضي موثّق",
        consanguinity: "56% معدل زواج الأقارب",
        odyssey: "5.6 سنوات متوسط مدة التشخيص",
      },
    },
  },
  problem: {
    eyebrow: "المشكلة",
    title: "متغيرات ذات أهمية غير مؤكدة (VUS) تعيق التشخيص",
    cards: [
      {
        icon: "clock",
        title: "رحلة تشخيص تستغرق 5.6 سنوات",
        stat: "5.6 سنة",
        description:
          "تنتظر عائلات مرضى الأمراض النادرة في السعودية في المتوسط 5.6 سنوات للحصول على تشخيص — بينما تبقى المتغيرات دون حل.",
      },
      {
        icon: "database",
        title: "قواعد البيانات العالمية تغفل متغيرات السكان السعوديين",
        stat: "56%",
        description:
          "56% من مرضى الأمراض الجينية في السعودية من عائلات ذات زواج أقارب. الأدوات العالمية لم تُصمَّم لهذا المجتمع السكاني.",
      },
      {
        icon: "alert-triangle",
        title: "7,500 متغير مرضي موثّق بلا أداة متكاملة",
        stat: "+7,500",
        description:
          "وثّق البرنامج السعودي للجينوم نحو 7,500 متغيراً مرضياً — لكن لا توجد أداة دعم قرار سريري تستفيد من هذه المرجعيات.",
      },
    ],
  },
  statsBar: {
    items: [
      {
        value: 63000,
        suffix: "+",
        decimals: 0,
        label: "عينات في البرنامج السعودي للجينوم",
      },
      {
        value: 7500,
        suffix: "+",
        decimals: 0,
        label: "متغيرات مرضية موثّقة في البرنامج السعودي للجينوم",
      },
      {
        value: 56,
        suffix: "%",
        decimals: 0,
        label: "معدل زواج الأقارب بين مرضى الأمراض الجينية في السعودية",
      },
      {
        value: 5.6,
        suffix: "",
        unit: "سنوات",
        decimals: 1,
        label: "متوسط مدة التشخيص",
      },
    ],
  },
  howItWorks: {
    eyebrow: "كيف تعمل وراثة",
    title: "من رفع الملف إلى تقرير سريري جاهز",
    description:
      "مسار عمل بسيط من ثلاث خطوات يحوّل بيانات التسلسل الجيني إلى قرارات سريرية قابلة للتنفيذ.",
    steps: [
      {
        icon: "upload-cloud",
        number: "1",
        title: "رفع ملف VCF للإكسوم",
        description:
          "يرفع المختبر ملف متغيرات المريض (VCF) مباشرة إلى منصة وراثة المتوافقة مع نظام حماية البيانات الشخصية والمستضافة داخل المملكة.",
      },
      {
        icon: "cpu",
        number: "2",
        title: "الذكاء الاصطناعي يقيّم كل متغير",
        description:
          "تُضيف وراثة التعليقات التوضيحية لكل متغير وتقيّمه مقابل قواعد البيانات العالمية ونحو 7,500 متغيراً مرضياً موثّقاً في البرنامج السعودي للجينوم.",
      },
      {
        icon: "file-check",
        number: "3",
        title: "تقرير سريري ثنائي اللغة جاهز للطبيب",
        description:
          "تقرير مرتّب ومتوافق مع معايير ACMG يبرز المتغيرات المحتمل أن تكون مرضية — بالعربية والإنجليزية — لمراجعتها وتأكيدها من قِبل أخصائي الوراثة السريري.",
      },
    ],
  },
  solution: {
    eyebrow: "حلنا",
    title: "من منشأ سعودي. عربية أولاً. متوافقة مع نظام حماية البيانات الشخصية.",
    features: [
      "دمج ترددات الأليل في السكان السعوديين من البرنامج السعودي للجينوم",
      "مواءمة تصنيف المتغيرات مع معايير ACMG/AMP",
      "تخزين البيانات داخل المملكة العربية السعودية (متوافق مع المادة 21 من نظام حماية البيانات الشخصية)",
      "تقارير سريرية ثنائية اللغة: العربية والإنجليزية",
    ],
    mockup: {
      title: "جدول المتغيرات",
      columns: {
        variant: "المتغير",
        gene: "الجين",
        saudiFreq: "تردد الأليل المحلي",
        classification: "التصنيف",
        confidence: "الثقة",
      },
      rows: [
        {
          variant: "c.1528G>A",
          gene: "HADHA",
          saudiFreq: "0.031",
          classification: "محتمل أن يكون مرضياً",
          tone: "warning",
          confidence: "94%",
        },
        {
          variant: "c.511C>T",
          gene: "ACADM",
          saudiFreq: "0.018",
          classification: "مرضي",
          tone: "danger",
          confidence: "99%",
        },
        {
          variant: "c.892A>G",
          gene: "MCCC1",
          saudiFreq: "0.002",
          classification: "ذات أهمية غير مؤكدة (VUS) ← أُعيد تصنيفه",
          tone: "info",
          confidence: "87%",
        },
      ],
    },
  },
  hospitals: {
    eyebrow: "للمستشفيات",
    title: "مصمَّمة لمراكز الجينوم في السعودية",
    description:
      "من المراكز التخصصية الكبرى إلى المختبرات الإقليمية — وراثة تتكيَّف مع احتياجات كل مؤسسة.",
    learnMore: "اعرف المزيد",
    cards: [
      {
        title: "مستشفى الملك فيصل التخصصي",
        description:
          "مراكز الجينوم في الرعاية التخصصية الثالثية ذات أحجام تسلسل إكسوم مرتفعة.",
        presetRole: "lab-director",
      },
      {
        title: "مستشفيات وزارة الصحة",
        description:
          "المراكز الإقليمية التي تدير إحالات الأمراض النادرة.",
        presetRole: "clinical-geneticist",
      },
      {
        title: "المختبرات الخاصة",
        description:
          "مختبرات التشخيص الجزيئي الخاصة التي توسّع نطاق إعداد التقارير السريرية.",
        presetRole: "lab-director",
      },
    ],
    quote: {
      text: "نستقبل الآن طلبات شركاء الوصول المبكر. اطلب نسختك التجريبية.",
      cta: "اطلب الوصول",
    },
  },
  pricing: {
    eyebrow: "الأسعار",
    title: "خطط مرنة للمؤسسات السعودية",
    description: "ابدأ بنسخة تجريبية أو تواصل معنا لخطة مؤسسية مخصصة.",
    popularBadge: "الأكثر طلباً",
    plans: [
      {
        name: "تجريبي",
        price: "مجاني",
        subtitle: "لأول 3 مستشفيات شريكة",
        features: [
          "حتى 50 تحليلاً شهرياً",
          "وصول كامل للمنصة",
          "إعداد مخصص للتشغيل",
          "دعم في إعداد الامتثال لنظام حماية البيانات الشخصية",
        ],
        cta: "قدّم طلب النسخة التجريبية",
        highlighted: false,
      },
      {
        name: "مؤسسي",
        price: "مخصص",
        subtitle: "للمستشفيات والمختبرات التشخيصية",
        features: [
          "تحليلات غير محدودة",
          "تقارير عربية وإنجليزية",
          "وصول عبر واجهة برمجية",
          "اتفاقية مستوى خدمة",
          "دعم مخصص",
        ],
        cta: "تواصل مع المبيعات",
        highlighted: true,
      },
    ],
  },
  researchSection: {
    eyebrow: "الأساس البحثي",
    title: "مبني على أدلة سريرية وجينومية في السياق السعودي",
    description:
      "وراثة ليست مجرد نموذج ذكاء اصطناعي — إنها مبنية على أبحاث منشورة تُظهر فعالية الذكاء الاصطناعي في التشخيص الجيني وأهمية بيانات السكان المحلية.",
    cards: [
      {
        source: "NEJM AI (2023)",
        icon: "file-text",
        title: "أولوية المتغيرات بالذكاء الاصطناعي تتفوق على المراجعة اليدوية",
        statBadge: "78% دقة ضمن أفضل 5 نتائج",
        description:
          "أظهر AI-MARRVEL أن أولوية المتغيرات المعتمدة على التعلم الآلي تحقّق دقة تشخيصية بنسبة 78% ضمن أفضل 5 نتائج لاضطرابات مندلية — مما يؤسّس الجدوى السريرية للذكاء الاصطناعي في التشخيص الجينومي.",
        linkLabel: "اقرأ الدراسة ←",
        href: "https://ai.nejm.org/doi/full/10.1056/AIoa2300090",
      },
      {
        source: "BMJ Journal of Medical Genetics",
        icon: "bar-chart",
        title: "بيانات السكان المحلية تزيد العائد التشخيصي بنحو 10%",
        statBadge: "زيادة ~10% في العائد",
        description:
          "إعادة التصنيف باستخدام ترددات أليل مطابقة للسكان تحسّن النتائج التشخيصية بشكل ملموس — الأساس العلمي لطبقة المرجع للسكان السعوديين في وراثة.",
        linkLabel: "اقرأ الدراسة ←",
        href: "https://jmg.bmj.com/",
      },
      {
        source: "مدينة الملك سعود الطبية",
        icon: "users",
        title: "عبء متغيرات VUS موثّق لدى 1,080 مريضاً في السعودية",
        statBadge: "1,080 مريضاً",
        description:
          "دراسة على عينة سعودية أكّدت المعدل المرتفع للمتغيرات ذات الأهمية غير المؤكدة لدى مرضى الأمراض الجينية — المشكلة السريرية المباشرة التي تعالجها وراثة.",
        linkLabel: "اقرأ الدراسة ←",
        href: "https://pubmed.ncbi.nlm.nih.gov/?term=variant+of+uncertain+significance+saudi+arabia",
      },
      {
        source: "البرنامج السعودي للجينوم",
        icon: "database",
        title: "7,500 متغير مرضي موثّق في البرنامج السعودي للجينوم",
        statBadge: "+63,000 عينة",
        description:
          "حلَّل البرنامج السعودي للجينوم أكثر من 63,000 عينة جينومية ووثّق نحو 7,500 متغيراً مرضياً — لتشكيل مجموعة المرجع التي تغذّي طبقة ترددات الأليل في السكان السعوديين ضمن وراثة.",
        linkLabel: "اعرف المزيد ←",
        href: "https://shgp.kacst.edu.sa/",
      },
    ],
  },
  faqSection: {
    eyebrow: "الأسئلة الشائعة",
    title: "إجابات لأسئلة الفرق السريرية",
    items: [
      {
        question: "هل وراثة معتمدة من هيئة الغذاء والدواء؟",
        answer:
          "وراثة أداة دعم قرار سريري تبقي أخصائي الوراثة المرخّص في دائرة اتخاذ القرار. نسعى حالياً لتسجيل إشعار البرمجيات كجهاز طبي (SaMD) لدى هيئة الغذاء والدواء السعودية.",
      },
      {
        question: "أين يُخزَّن بيانات المرضى؟",
        answer:
          "تُخزَّن جميع البيانات حصرياً داخل المملكة العربية السعودية على بنية سحابية متوافقة مع نظام حماية البيانات الشخصية.",
      },
      {
        question: "ما صيغ التسلسل التي تدعمها وراثة؟",
        answer: "ملفات VCF القياسية من تسلسل الإكسوم الكامل والجينوم الكامل.",
      },
      {
        question: "كيف تستخدم وراثة بيانات البرنامج السعودي للجينوم؟",
        answer:
          "تدمج وراثة مراجع ترددات الأليل المنشورة للسكان السعوديين لتحسين إعادة تصنيف المتغيرات التي تفتقدها قواعد البيانات العالمية.",
      },
      {
        question: "هل يمكنني طلب عرض توضيحي؟",
        answer:
          "نعم — استخدموا نموذج طلب الوصول وسنحدّد جلسة عرضاً مباشرة لفريقكم.",
      },
    ],
  },
  capabilities: {
    title: "قدرات سريرية مصممة لأخصائيي الوراثة",
    description:
      "أدوات دقيقة وموثوقة تدعم قرارات التشخيص الجيني في بيئة المستشفى في السعودية.",
    items: [
      {
        title: "تفسير مُعايَر للسياق السريري السعودي",
        description:
          "نماذج مُدرَّبة على ترددات السكان المحليين وتصنيفات ACMG لتقليل النتائج الإيجابية الكاذبة.",
      },
      {
        title: "مسارات عمل موحدة",
        description:
          "من استقبال العينة إلى تقرير الطبيب — سير عمل واضح يقلل التباين بين الفرق.",
      },
      {
        title: "شفافية سريرية",
        description:
          "مصادر الأدلة ودرجات الثقة وسياق كل متغير معروض بوضوح لدعم القرار.",
      },
    ],
  },
  workflow: {
    title: "من البيانات الخام إلى قرار سريري",
    description: "مسار عمل مبسّط يحافظ على الدقة والامتثال.",
    steps: [
      {
        title: "استيراد البيانات",
        description: "رفع ملفات VCF وربطها بسجل المريض بأمان.",
      },
      {
        title: "الفرز والتصنيف",
        description: "تصنيف تلقائي للمتغيرات حسب الأولوية السريرية.",
      },
      {
        title: "مراجعة الأخصائي",
        description: "واجهة مراجعة تدعم الملاحظات والاعتماد الجماعي.",
      },
      {
        title: "تقرير سريري",
        description: "تقرير جاهز للطبيب بلغة واضحة ومتوافقة مع المعايير.",
      },
    ],
  },
  trust: {
    title: "ثقة سريرية وفق معايير سعودية",
    description:
      "وراثة مبنية للممارسة السريرية في السعودية — دقة، خصوصية، وامتثال للمتطلبات المحلية.",
    badges: ["مُعايَرة للسكان السعوديين", "خصوصية البيانات", "امتثال سريري", "دعم بالعربية والإنجليزية"],
    faqTitle: "أسئلة شائعة",
    faq: [
      {
        question: "هل تدعم المنصة معايير ACMG؟",
        answer:
          "نعم، يُصنَّف المتغير وفق إرشادات ACMG مع تكييف للسياق السريري السعودي وبيانات التردد المحلية.",
      },
      {
        question: "كيف تُحمى بيانات المرضى؟",
        answer:
          "تُعالج البيانات ضمن بيئة آمنة مع ضوابط وصول صارمة وتشفير أثناء النقل والتخزين.",
      },
      {
        question: "هل يمكن التكامل مع أنظمة المستشفى؟",
        answer:
          "ندعم تكاملات مع أنظمة السجلات الطبية ومسارات المختبر عبر واجهات برمجية آمنة.",
      },
    ],
  },
  contactSection: {
    title: "تواصل مع فريق وراثة",
    description:
      "هل أنتم مستعدون لتحسين تفسير المتغيرات في مستشفاكم؟ تواصلوا معنا أو اطلبوا الوصول المبكر.",
    email: "contact@waratha.sa",
    cta: "اطلب الوصول",
    badges: [
      "🔒 متوافق مع نظام حماية البيانات الشخصية",
      "🇸🇦 بيانات مستضافة داخل المملكة",
      "🧬 متكامل مع البرنامج السعودي للجينوم",
    ],
  },
  requestAccessModal: {
    title: "اطلب الوصول",
    description: "أخبرنا عن مؤسستكم وسنتواصل معكم خلال 48 ساعة.",
    nameLabel: "الاسم",
    namePlaceholder: "د. سارة العتيبي",
    institutionLabel: "المستشفى / المؤسسة",
    institutionPlaceholder: "مستشفى الملك فيصل التخصصي",
    roleLabel: "الدور",
    rolePlaceholder: "اختر دورك",
    emailLabel: "البريد الإلكتروني",
    emailPlaceholder: "name@hospital.sa",
    volumeLabel: "حجم عينات الإكسوم الشهري",
    volumePlaceholder: "اختر الحجم التقديري",
    messageLabel: "رسالة اختيارية",
    messagePlaceholder: "أخبرنا عن احتياجات قسم الوراثة لديكم...",
    submit: "إرسال الطلب",
    submitting: "جارٍ الإرسال...",
    validationError: "يرجى تعبئة جميع الحقول المطلوبة.",
    submitError: "تعذر إرسال الطلب. يرجى المحاولة مرة أخرى.",
    close: "إغلاق",
    roles: [
      { value: "clinical-geneticist", label: "أخصائي وراثة سريري" },
      { value: "molecular-pathologist", label: "أخصائي علم الأمراض الجزيئية" },
      { value: "lab-director", label: "مدير مختبر" },
      { value: "other", label: "أخرى" },
    ],
    volumes: [
      { value: "lt-50", label: "أقل من 50" },
      { value: "50-200", label: "50–200" },
      { value: "200-500", label: "200–500" },
      { value: "500-plus", label: "500+" },
    ],
  },
  demoModal: {
    title: "شاهد العرض التوضيحي",
    placeholder:
      "العرض التوضيحي متاح قريباً — اطلب الوصول المبكر لحجز جولة مباشرة",
  },
  footer: {
    tagline: "تفسير جينومي بالذكاء الاصطناعي للممارسة السريرية في السعودية",
    linksTitle: "روابط",
    legalTitle: "قانوني",
    privacy: "سياسة الخصوصية",
    terms: "شروط الاستخدام",
    pdpl: "الامتثال لنظام حماية البيانات",
    copyright: "© 2026 وراثة. مبني في المملكة العربية السعودية.",
    backToHome: "العودة إلى الصفحة الرئيسية",
  },
  legalPages: {
    privacy: {
      title: "سياسة الخصوصية",
      lastUpdated: "آخر تحديث: يونيو 2026",
      intro:
        "تحترم وراثة خصوصية المرضى والمؤسسات الصحية. توضح هذه السياسة كيفية جمع واستخدام وحماية البيانات عند استخدام منصتنا.",
      sections: [
        {
          title: "البيانات التي نجمعها",
          content:
            "نجمع معلومات الحساب المؤسسي، وبيانات التواصل، وبيانات التسلسل الجيني اللازمة لتفسير المتغيرات — فقط بموافقة المؤسسة ووفق الأغراض السريرية المصرح بها.",
        },
        {
          title: "كيف نستخدم البيانات",
          content:
            "تُستخدم البيانات لتقديم خدمات تفسير المتغيرات، ودعم القرار السريري، وتحسين النماذج — دون بيع البيانات لأطراف ثالثة.",
        },
        {
          title: "الاحتفاظ والأمان",
          content:
            "تُخزَّن البيانات داخل المملكة العربية السعودية مع تشفير أثناء النقل والتخزين، وضوابط وصول صارمة، وسجلات تدقيق.",
        },
        {
          title: "حقوقكم",
          content:
            "يمكن للمؤسسات طلب الوصول أو التصحيح أو الحذف وفق نظام حماية البيانات الشخصية والعقود المؤسسية المعمول بها.",
        },
      ],
    },
    terms: {
      title: "شروط الاستخدام",
      lastUpdated: "آخر تحديث: يونيو 2026",
      intro:
        "باستخدام منصة وراثة، فإنكم توافقون على هذه الشروط. وراثة أداة دعم قرار سريري ولا تحل محل الحكم الطبي المهني.",
      sections: [
        {
          title: "الاستخدام المصرح به",
          content:
            "المنصة مخصصة للاستخدام السريري والمخبري من قبل متخصصين مؤهلين في المؤسسات الصحية المرخصة.",
        },
        {
          title: "إخلاء المسؤولية السريرية",
          content:
            "تُقدَّم النتائج كدعم للقرار ويجب مراجعتها وتأكيدها من قبل أخصائي وراثة مرخّص قبل أي قرار علاجي.",
        },
        {
          title: "الملكية الفكرية",
          content:
            "تبقى بيانات المرضى والمؤسسة ملكاً للعميل. تحتفظ وراثة بحقوق المنصة والنماذج والبرمجيات.",
        },
        {
          title: "إنهاء الخدمة",
          content:
            "يجوز لأي طرف إنهاء الوصول وفق شروط العقد، مع الالتزام بمتطلبات الاحتفاظ بالبيانات والامتثال.",
        },
      ],
    },
    pdpl: {
      title: "الامتثال لنظام حماية البيانات",
      lastUpdated: "آخر تحديث: يونيو 2026",
      intro:
        "تلتزم وراثة بمتطلبات نظام حماية البيانات الشخصية (PDPL) في المملكة العربية السعودية، بما في ذلك المادة 21 المتعلقة بنقل البيانات.",
      sections: [
        {
          title: "الإقامة المحلية للبيانات",
          content:
            "تُعالج وتُخزَّن بيانات المرضى حصرياً داخل المملكة العربية السعودية على بنية سحابية متوافقة.",
        },
        {
          title: "الأساس النظامي للمعالجة",
          content:
            "تتم المعالجة بناءً على الموافقة المؤسسية، والمصلحة الطبية المشروعة، والالتزامات التنظيمية ذات الصلة.",
        },
        {
          title: "التدابير التقنية والتنظيمية",
          content:
            "نطبق التشفير، وضوابط الوصول، والتدريب، وتقييمات الأثر لحماية البيانات الشخصية والجينومية.",
        },
        {
          title: "التواصل",
          content:
            "للاستفسارات المتعلقة بحماية البيانات، تواصلوا معنا عبر البريد الإلكتروني المدرج في صفحة التواصل.",
        },
      ],
    },
  },
  toast: {
    requestReceived:
      "تم استلام طلبكم — سنتواصل معكم خلال 48 ساعة",
  },
}

const en = {
  meta: {
    title: "Waratha — AI Variant Interpretation for Saudi Clinical Genomics",
    description:
      "A Saudi-native AI platform helping clinical geneticists in Saudi hospitals interpret genomic variants — Saudi-calibrated to population data, PDPL-compliant, and Arabic-first.",
  },
  brand: {
    name: "Waratha",
    nameLatin: "Waratha",
    tagline: "Precise genomic interpretation for the Saudi context",
  },
  nav: {
    product: "Product",
    howItWorks: "How It Works",
    forHospitals: "For Hospitals",
    research: "Research",
    contact: "Contact",
    requestAccess: "Request Access",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    skipToContent: "Skip to content",
    languageLabel: "Language",
    languageArabic: "العربية",
    languageEnglish: "English",
  },
  hero: {
    title: "AI Variant Interpretation Built for Saudi Genomics",
    subtitle:
      "Waratha turns exome sequencing results into clinical decisions in minutes — Saudi-calibrated to population data, PDPL-compliant, and Arabic-first.",
    primaryCta: "Request Early Access",
    secondaryCta: "Watch Demo",
    scrollHint: "Scroll down",
    dashboard: {
      title: "Clinical interpretation panel",
      panelTitle: "Waratha | Clinical Panel",
      patientEntry: "Patient ID: SA-0042 | Gene: HADHA | Variant: c.1528G>A",
      statusBadge: "⚠ Reclassified: Likely Pathogenic",
      confidenceLabel: "Confidence",
      confidenceValue: "94%",
      stats: {
        variants: "7,500+ Saudi variants",
        consanguinity: "56% consanguinity rate",
        odyssey: "5.6-year avg. diagnostic odyssey",
      },
    },
  },
  problem: {
    eyebrow: "The Problem",
    title: "Variants of uncertain significance (VUS) are delaying diagnosis",
    cards: [
      {
        icon: "clock",
        title: "5.6-Year Diagnostic Odyssey",
        stat: "5.6 yrs",
        description:
          "Saudi families affected by rare disease wait an average of 5.6 years for a diagnosis — while variants sit unresolved.",
      },
      {
        icon: "database",
        title: "Western Databases Miss Saudi Variants",
        stat: "56%",
        description:
          "56% of Saudi genetic disease patients come from consanguineous families. Global tools were not designed for this population.",
      },
      {
        icon: "alert-triangle",
        title: "7,500 Saudi Variants, No Integrated Tool",
        stat: "7,500+",
        description:
          "The Saudi Genome Program documented 7,500 pathogenic variants — but no clinical decision-support tool incorporates them.",
      },
    ],
  },
  statsBar: {
    items: [
      {
        value: 63000,
        suffix: "+",
        decimals: 0,
        label: "Samples in Saudi Genome Program",
      },
      {
        value: 7500,
        suffix: "+",
        decimals: 0,
        label: "Pathogenic variants documented",
      },
      {
        value: 56,
        suffix: "%",
        decimals: 0,
        label: "Consanguinity rate in Saudi genetic disease patients",
      },
      {
        value: 5.6,
        suffix: "",
        unit: "yrs",
        decimals: 1,
        label: "Average diagnostic odyssey",
      },
    ],
  },
  howItWorks: {
    eyebrow: "How Waratha Works",
    title: "From upload to clinician-ready report",
    description:
      "A simple three-step workflow that turns sequencing data into actionable clinical decisions.",
    steps: [
      {
        icon: "upload-cloud",
        number: "1",
        title: "Upload Exome VCF",
        description:
          "The lab uploads the patient's variant call file directly into Waratha's PDPL-compliant platform hosted in Saudi Arabia.",
      },
      {
        icon: "cpu",
        number: "2",
        title: "AI Scores Every Variant",
        description:
          "Waratha annotates and scores each variant against global databases and the Saudi Genome Program's 7,500 documented pathogenic variants.",
      },
      {
        icon: "file-check",
        number: "3",
        title: "Clinician-ready bilingual report",
        description:
          "A ranked, ACMG-aligned report highlights likely pathogenic variants — in Arabic and English — for review and confirmation by a clinical geneticist.",
      },
    ],
  },
  solution: {
    eyebrow: "Our Solution",
    title: "Saudi-Native. Arabic-First. PDPL-Compliant.",
    features: [
      "Saudi Genome Program allele-frequency integration",
      "ACMG/AMP variant classification alignment",
      "Data stored in Saudi Arabia (PDPL Article 21 compliant)",
      "Arabic + English bilingual clinical reports",
    ],
    mockup: {
      title: "Variant table",
      columns: {
        variant: "Variant",
        gene: "Gene",
        saudiFreq: "Saudi Freq",
        classification: "Classification",
        confidence: "Confidence",
      },
      rows: [
        {
          variant: "c.1528G>A",
          gene: "HADHA",
          saudiFreq: "0.031",
          classification: "Likely Pathogenic",
          tone: "warning",
          confidence: "94%",
        },
        {
          variant: "c.511C>T",
          gene: "ACADM",
          saudiFreq: "0.018",
          classification: "Pathogenic",
          tone: "danger",
          confidence: "99%",
        },
        {
          variant: "c.892A>G",
          gene: "MCCC1",
          saudiFreq: "0.002",
          classification: "VUS → Reclassified",
          tone: "info",
          confidence: "87%",
        },
      ],
    },
  },
  hospitals: {
    eyebrow: "For Hospitals",
    title: "Built for Saudi genomics centers",
    description:
      "From major tertiary centers to regional labs — Waratha adapts to every institution's needs.",
    learnMore: "Learn More",
    cards: [
      {
        title: "KFSHRC",
        description:
          "Tertiary genomics centers with high exome volumes.",
        presetRole: "lab-director",
      },
      {
        title: "MOH Regional Hospitals",
        description:
          "Regional centers managing rare disease referrals.",
        presetRole: "clinical-geneticist",
      },
      {
        title: "Private Labs",
        description:
          "Private molecular diagnostic labs scaling reporting capacity.",
        presetRole: "lab-director",
      },
    ],
    quote: {
      text: "Early access partners are being onboarded now. Request your pilot.",
      cta: "Request Access",
    },
  },
  pricing: {
    eyebrow: "Pricing",
    title: "Flexible plans for Saudi institutions",
    description: "Start with a pilot or contact us for a custom institutional plan.",
    popularBadge: "Most Popular",
    plans: [
      {
        name: "Pilot",
        price: "Free",
        subtitle: "For the first 3 hospital partners",
        features: [
          "Up to 50 analyses/month",
          "Full platform access",
          "Dedicated onboarding",
          "PDPL setup support",
        ],
        cta: "Apply for Pilot",
        highlighted: false,
      },
      {
        name: "Institution",
        price: "Custom",
        subtitle: "For hospitals and diagnostic labs",
        features: [
          "Unlimited analyses",
          "Arabic + English reports",
          "API access",
          "SLA",
          "Dedicated support",
        ],
        cta: "Contact Sales",
        highlighted: true,
      },
    ],
  },
  researchSection: {
    eyebrow: "Research Foundation",
    title: "Built on clinical and Saudi genomics evidence",
    description:
      "Waratha is not just an AI model — it is grounded in published research demonstrating AI efficacy in genomic diagnosis and the importance of local population data.",
    cards: [
      {
        source: "NEJM AI (2023)",
        icon: "file-text",
        title: "AI Variant Prioritization Outperforms Manual Review",
        statBadge: "78% top-5 accuracy",
        description:
          "AI-MARRVEL demonstrated that ML-based variant prioritization achieves 78% top-5 diagnostic accuracy on Mendelian disorders — establishing the clinical viability of AI in genomic diagnosis.",
        linkLabel: "Read Study →",
        href: "https://ai.nejm.org/doi/full/10.1056/AIoa2300090",
      },
      {
        source: "BMJ Journal of Medical Genetics",
        icon: "bar-chart",
        title: "Local Population Data Increases Diagnostic Yield by ~10%",
        statBadge: "~10% yield increase",
        description:
          "Reclassification using population-matched allele frequencies demonstrably improves diagnostic outcomes — the scientific basis for Waratha's Saudi-specific reference layer.",
        linkLabel: "Read Study →",
        href: "https://jmg.bmj.com/",
      },
      {
        source: "King Saud Medical City",
        icon: "users",
        title: "VUS Burden Documented in 1,080 Saudi Patients",
        statBadge: "1,080 patients",
        description:
          "A Saudi-cohort study confirmed the high burden of variants of uncertain significance (VUS) in Saudi genetic disease patients — the direct clinical problem Waratha solves.",
        linkLabel: "Read Study →",
        href: "https://pubmed.ncbi.nlm.nih.gov/?term=variant+of+uncertain+significance+saudi+arabia",
      },
      {
        source: "Saudi Genome Program",
        icon: "database",
        title: "7,500 Pathogenic Saudi Variants Documented",
        statBadge: "63,000+ samples",
        description:
          "The Saudi Genome Program has sequenced over 63,000 samples and documented 7,500 pathogenic variants — forming the reference dataset that powers Waratha's Saudi allele-frequency layer.",
        linkLabel: "Learn More →",
        href: "https://shgp.kacst.edu.sa/",
      },
    ],
  },
  faqSection: {
    eyebrow: "FAQ",
    title: "Answers for clinical teams",
    items: [
      {
        question: "Is Waratha approved by SFDA?",
        answer:
          "Waratha is a clinical decision-support tool that keeps a licensed clinical geneticist in the decision loop. We are pursuing SFDA software as a medical device (SaMD) notification.",
      },
      {
        question: "Where is patient data stored?",
        answer:
          "All data is stored exclusively in Saudi Arabia on PDPL-compliant cloud infrastructure.",
      },
      {
        question: "What sequencing formats does Waratha accept?",
        answer: "Standard VCF files from whole-exome and whole-genome sequencing.",
      },
      {
        question: "How does Waratha use Saudi Genome Program data?",
        answer:
          "Waratha integrates published Saudi allele-frequency references to improve reclassification of variants that global databases miss.",
      },
      {
        question: "Can I request a demo?",
        answer:
          "Yes — use the Request Access form and we will schedule a live walkthrough for your team.",
      },
    ],
  },
  capabilities: {
    title: "Clinical capabilities built for genetics",
    description:
      "Precise, trustworthy tools that support genetic diagnosis in the Saudi hospital environment.",
    items: [
      {
        title: "Saudi-calibrated interpretation",
        description:
          "Models trained on local population frequencies and ACMG classifications to reduce false positives.",
      },
      {
        title: "Unified workflows",
        description:
          "From sample intake to physician report — a clear workflow that reduces variance across teams.",
      },
      {
        title: "Clinical transparency",
        description:
          "Evidence sources, confidence scores, and variant context displayed clearly to support decisions.",
      },
    ],
  },
  workflow: {
    title: "From raw data to clinical decision",
    description: "A streamlined path that preserves accuracy and compliance.",
    steps: [
      {
        title: "Data import",
        description: "Upload VCF files and securely link them to patient records.",
      },
      {
        title: "Triage & classification",
        description: "Automatic variant prioritization by clinical significance.",
      },
      {
        title: "Expert review",
        description: "A review interface supporting comments and consensus approval.",
      },
      {
        title: "Clinical report",
        description: "Physician-ready reports in clear, standards-aligned language.",
      },
    ],
  },
  trust: {
    title: "Clinical trust, Saudi standards",
    description:
      "Waratha is built for the Saudi environment — precision, privacy, and local compliance.",
    badges: ["Saudi calibration", "Data privacy", "Clinical compliance", "Arabic/English support"],
    faqTitle: "Frequently asked questions",
    faq: [
      {
        question: "Does the platform support ACMG standards?",
        answer:
          "Yes. Variants are classified per ACMG guidelines with adaptation for Saudi context and local frequency data.",
      },
      {
        question: "How is patient data protected?",
        answer:
          "Data is processed in a secure environment with strict access controls and encryption in transit and at rest.",
      },
      {
        question: "Can it integrate with hospital systems?",
        answer:
          "We support integrations with EMR and lab systems through secure APIs.",
      },
    ],
  },
  contactSection: {
    title: "Get in touch with Waratha",
    description:
      "Ready to improve variant interpretation at your hospital? Reach out or request early access.",
    email: "contact@waratha.sa",
    cta: "Request Access",
    badges: [
      "🔒 PDPL Compliant",
      "🇸🇦 Data hosted in Saudi Arabia",
      "🧬 Saudi Genome Program Aligned",
    ],
  },
  requestAccessModal: {
    title: "Request Access",
    description: "Tell us about your institution and we'll be in touch within 48 hours.",
    nameLabel: "Name",
    namePlaceholder: "Dr. Sarah Al-Otaibi",
    institutionLabel: "Hospital / Institution",
    institutionPlaceholder: "King Faisal Specialist Hospital",
    roleLabel: "Role",
    rolePlaceholder: "Select your role",
    emailLabel: "Email",
    emailPlaceholder: "name@hospital.sa",
    volumeLabel: "Monthly exome volume estimate",
    volumePlaceholder: "Select estimated volume",
    messageLabel: "Message (optional)",
    messagePlaceholder: "Tell us about your genetics department needs...",
    submit: "Send Request",
    submitting: "Sending...",
    validationError: "Please complete all required fields.",
    submitError: "Could not send request. Please try again.",
    close: "Close",
    roles: [
      { value: "clinical-geneticist", label: "Clinical Geneticist" },
      { value: "molecular-pathologist", label: "Molecular Pathologist" },
      { value: "lab-director", label: "Lab Director" },
      { value: "other", label: "Other" },
    ],
    volumes: [
      { value: "lt-50", label: "<50" },
      { value: "50-200", label: "50–200" },
      { value: "200-500", label: "200–500" },
      { value: "500-plus", label: "500+" },
    ],
  },
  demoModal: {
    title: "Watch Demo",
    placeholder:
      "Demo coming soon — request early access for a live walkthrough",
  },
  footer: {
    tagline: "AI-powered genomic interpretation for Saudi Arabia",
    linksTitle: "Links",
    legalTitle: "Legal",
    privacy: "Privacy Policy",
    terms: "Terms of Use",
    pdpl: "PDPL Compliance",
    copyright: "© 2026 Waratha. Built in Saudi Arabia.",
    backToHome: "Back to home",
  },
  legalPages: {
    privacy: {
      title: "Privacy Policy",
      lastUpdated: "Last updated: June 2026",
      intro:
        "Waratha respects patient and institutional privacy. This policy explains how we collect, use, and protect data when you use our platform.",
      sections: [
        {
          title: "Data we collect",
          content:
            "We collect institutional account information, contact details, and genomic sequencing data required for variant interpretation — only with institutional consent and for authorized clinical purposes.",
        },
        {
          title: "How we use data",
          content:
            "Data is used to deliver variant interpretation, clinical decision support, and platform improvements — we do not sell data to third parties.",
        },
        {
          title: "Retention and security",
          content:
            "Data is stored in Saudi Arabia with encryption in transit and at rest, strict access controls, and audit logging.",
        },
        {
          title: "Your rights",
          content:
            "Institutions may request access, correction, or deletion in accordance with PDPL and applicable contractual terms.",
        },
      ],
    },
    terms: {
      title: "Terms of Use",
      lastUpdated: "Last updated: June 2026",
      intro:
        "By using Waratha, you agree to these terms. Waratha is a clinical decision-support tool and does not replace professional medical judgment.",
      sections: [
        {
          title: "Permitted use",
          content:
            "The platform is intended for clinical and laboratory use by qualified professionals at licensed healthcare institutions.",
        },
        {
          title: "Clinical disclaimer",
          content:
            "Results are provided as decision support and must be reviewed and confirmed by a licensed geneticist before any clinical action.",
        },
        {
          title: "Intellectual property",
          content:
            "Patient and institutional data remain the property of the client. Waratha retains rights to the platform, models, and software.",
        },
        {
          title: "Termination",
          content:
            "Either party may terminate access per contract terms, subject to data retention and compliance obligations.",
        },
      ],
    },
    pdpl: {
      title: "PDPL Compliance",
      lastUpdated: "Last updated: June 2026",
      intro:
        "Waratha complies with Saudi Arabia's Personal Data Protection Law (PDPL), including Article 21 on data transfer requirements.",
      sections: [
        {
          title: "Local data residency",
          content:
            "Patient data is processed and stored exclusively within Saudi Arabia on compliant cloud infrastructure.",
        },
        {
          title: "Lawful basis for processing",
          content:
            "Processing is based on institutional consent, legitimate medical interest, and applicable regulatory obligations.",
        },
        {
          title: "Technical and organizational measures",
          content:
            "We apply encryption, access controls, staff training, and impact assessments to protect personal and genomic data.",
        },
        {
          title: "Contact",
          content:
            "For data protection inquiries, contact us via the email listed on our contact page.",
        },
      ],
    },
  },
  toast: {
    requestReceived:
      "Request received — we'll be in touch within 48 hours",
  },
}

export const dictionaries = { ar, en } satisfies Record<Locale, typeof ar>

export type Dictionary = typeof ar
