(function () {
  const languages = [
    { code: "en", label: "🇬🇧 English" },
    { code: "ru", label: "🇷🇺 Русский" },
    { code: "es", label: "🇪🇸 Español" },
    { code: "pl", label: "🇵🇱 Polski" },
    { code: "zh", label: "🇨🇳 中文" },
    { code: "fr", label: "🇫🇷 Français" },
    { code: "ar", label: "🇸🇦 العربية" },
    { code: "de", label: "🇩🇪 Deutsch" }
  ];

  const base = {
    navProducts: "Products",
    navApplications: "Applications",
    navFactory: "Factory",
    navFaq: "FAQ",
    navContact: "Contact",
    quote: "Get a Quote",
    megaTitle: "Thermostat Product Center",
    megaText: "Choose by product type, HVAC application, or OEM customization requirement.",
    megaInquiry: "Send project inquiry",
    megaCore: "Core Categories",
    roomThermostat: "Room Thermostat",
    underfloorController: "Underfloor Heating Controller",
    fanCoilThermostat: "Fan Coil Thermostat",
    electricActuator: "Electric Thermal Actuator",
    megaSolutions: "Popular Solutions",
    hotelHvac: "Hotel Room HVAC",
    bmsAutomation: "BMS / Building Automation",
    gasBoiler: "Gas Boiler Heating",
    smartHome: "Smart Home Control",
    oemOdm: "OEM / ODM",
    megaPrivate: "Private label thermostat programs",
    megaPrivateText: "Logo, color, packaging, manual, software and new product development support.",
    footerCompany: "Zhongshan Yatelee Electronic Technology Co., Ltd.",
    homeTitle: "YATELEE Homepage Preview",
    homeDescription: "YATELEE manufactures OEM/ODM temperature control panels, room thermostats, fan coil thermostats, and underfloor heating controllers for global HVAC projects.",
    homeHeroTitle: "Temperature Control Panel & HVAC Thermostat Manufacturer",
    homeHeroText: "YATELEE manufactures room thermostats, underfloor heating controllers, fan coil thermostats, and OEM/ODM HVAC control solutions for importers, distributors, contractors, and smart home brands.",
    viewProducts: "View Products",
    oemCustomization: "OEM/ODM Customization",
    globalDelivery: "Global Delivery Support",
    qualityControl: "Industrial Quality Control",
    productCategoriesTitle: "Product Categories Built for HVAC Buyers",
    productCategoriesText: "Clear product paths help buyers move from application needs to specifications, catalog downloads, and project inquiries.",
    requestDetails: "Request details",
    applicationsTitle: "Application Pages for SEO and Paid Traffic",
    applicationsText: "The homepage guides visitors into dedicated pages for hotel HVAC, fan coil units, underfloor heating, boiler heating, smart home control, and building automation projects.",
    factoryTitle: "Factory Strength Buyers Can Trust",
    factoryText: "Zhongshan Yatelee Electronic Technology Co., Ltd. presents itself as a source manufacturer with OEM/ODM customization, project support, and export-market experience across the Middle East, Africa, South America, Russia, Central Asia, and Europe.",
    certificatesTitle: "Certifications and OEM/ODM Support",
    certificatesText: "Use real certificate files only. Current planning materials list CE, RoHS, RED and EAC as trust points for product pages and buyer FAQs.",
    faqTitle: "Buyer Questions Answered Before Inquiry",
    faqText: "Structured FAQ content supports both conversion and AI/SEO visibility.",
    contactTitleMeta: "Contact YATELEE | HVAC Thermostat Manufacturer",
    contactDescriptionMeta: "Contact Zhongshan Yatelee Electronic Technology Co., Ltd. for HVAC thermostat, fan coil thermostat and OEM/ODM temperature control panel inquiries.",
    contactHero: "Contact YATELEE",
    contactHeroText: "Send your HVAC thermostat requirement, OEM/ODM customization request, project application and target market information. Our sales team will help confirm the suitable product configuration.",
    home: "Home",
    contactUs: "Contact Us",
    companyAddress: "Company Address",
    addressCompany: "Zhongshan Yatelee Electronic Technology Co., Ltd.",
    addressText: "2nd floor, building C, No.15 Gangbao road, Xiaolan town, Zhongshan city, Guangdong province",
    openOsm: "Open in OpenStreetMap",
    mapNote: "Marker location should be confirmed with an exact map pin before final launch.",
    inquiryTitle: "Send Your Project Requirement",
    inquiryText: "Tell us your country, product interest, quantity, application and customization needs. We will reply with suitable product information and next steps.",
    submitInquiryTitle: "Submit Your B2B Inquiry",
    submitInquiryText: "Share your product requirement, country, phone or WhatsApp number, and project details. Required fields are marked clearly so our sales team can follow up efficiently.",
    manufacturerCommunication: "Manufacturer communication",
    oemProjectSupport: "OEM/ODM project support",
    thermostatSelectionHelp: "HVAC thermostat selection help",
    name: "Name",
    nameRequired: "Name *",
    email: "Email",
    emailRequired: "Email *",
    phone: "Phone / WhatsApp",
    phoneRequired: "Phone / WhatsApp *",
    companyName: "Company Name",
    countryRegion: "Country / Region",
    productRequirement: "Product Requirement",
    message: "Message",
    submitInquiry: "Submit Inquiry",
    namePlaceholder: "Your full name",
    emailPlaceholder: "name@company.com",
    phonePlaceholder: "+86 180 0000 0000",
    companyPlaceholder: "Your company name",
    countryPlaceholder: "Country / Region",
    productPlaceholder: "Smart thermostat, fan coil thermostat, OEM/ODM...",
    messagePlaceholder: "Tell us your application, quantity, voltage, protocol, packaging or customization needs.",
    antiSpamNote: "Optional anti-spam: hidden honeypot is enabled. Add Turnstile/reCAPTCHA before launch.",
    requiredNotice: "Please complete the required fields before submitting.",
    successNotice: "Thank you. Your inquiry has been submitted successfully.",
    invalidEmail: "Please enter a valid business email.",
    invalidPhone: "Please enter a valid international phone number.",
    requiredName: "Please enter your name.",
    requiredEmail: "Please enter your email address.",
    requiredPhone: "Please enter your phone or WhatsApp number.",
    spamBlocked: "Submission blocked by anti-spam check.",
    submitting: "Submitting...",
    failedNotice: "Submission failed. Please email Kale.Yan@zhongshanyatelee.com directly.",
    backendPending: "The form is ready, but backend email or database integration is not connected yet.",
    productTitleMeta: "Smart Touch Screen HVAC Thermostat | YATELEE OEM/ODM Manufacturer",
    productDescriptionMeta: "Smart touch screen HVAC thermostat for fan coil units, hotel rooms, offices and commercial buildings. OEM/ODM thermostat manufacturing support from YATELEE.",
    productHero: "Smart Touch Screen HVAC Thermostat",
    productIntroTitle: "Product Introduction",
    keyFeatures: "Key Features",
    technicalParameters: "Technical Parameters",
    modelOptions: "Model Options",
    applicationScenarios: "Application Scenarios",
    wiringDiagram: "Wiring Diagram",
    packingList: "Packing List",
    download: "Download",
    relatedProducts: "Related Products"
  };

  const translations = {
    en: base,
    ru: Object.assign({}, base, {
      homeTitle: "YATELEE | Производитель HVAC термостатов", homeDescription: "YATELEE производит температурные панели, комнатные термостаты, фанкойл-термостаты и контроллеры теплого пола для международных HVAC проектов.", contactTitleMeta: "Связаться с YATELEE | Производитель HVAC термостатов", contactDescriptionMeta: "Свяжитесь с Zhongshan Yatelee Electronic Technology Co., Ltd. по вопросам HVAC термостатов, фанкойл-термостатов и OEM/ODM температурных панелей.", productTitleMeta: "Сенсорный HVAC термостат | Производитель YATELEE OEM/ODM", productDescriptionMeta: "Сенсорный HVAC термостат для фанкойлов, гостиничных номеров, офисов и коммерческих зданий с OEM/ODM поддержкой YATELEE.",
      navProducts: "Продукция", navApplications: "Применения", navFactory: "Завод", navFaq: "FAQ", navContact: "Контакты", quote: "Получить предложение",
      homeHeroTitle: "Производитель HVAC термостатов и панелей контроля температуры", viewProducts: "Смотреть продукцию", contactHero: "Связаться с YATELEE", contactUs: "Контакты",
      inquiryTitle: "Отправьте требования проекта", submitInquiryTitle: "Отправьте B2B запрос", submitInquiry: "Отправить запрос", name: "Имя", email: "Email", phone: "Телефон / WhatsApp", companyName: "Компания", countryRegion: "Страна / регион", productRequirement: "Требования к продукту", message: "Сообщение"
    }),
    es: Object.assign({}, base, {
      homeTitle: "YATELEE | Fabricante de termostatos HVAC", homeDescription: "YATELEE fabrica paneles de control de temperatura, termostatos de habitación, termostatos fan coil y controladores de suelo radiante para proyectos HVAC globales.", contactTitleMeta: "Contactar con YATELEE | Fabricante de termostatos HVAC", contactDescriptionMeta: "Contacte con Zhongshan Yatelee Electronic Technology Co., Ltd. para termostatos HVAC, fan coil y paneles de control OEM/ODM.", productTitleMeta: "Termostato HVAC táctil inteligente | Fabricante OEM/ODM YATELEE", productDescriptionMeta: "Termostato HVAC táctil para fan coil, habitaciones de hotel, oficinas y edificios comerciales con soporte OEM/ODM de YATELEE.",
      navProducts: "Productos", navApplications: "Aplicaciones", navFactory: "Fábrica", navFaq: "FAQ", navContact: "Contacto", quote: "Solicitar cotización",
      homeHeroTitle: "Fabricante de termostatos HVAC y paneles de control de temperatura", viewProducts: "Ver productos", contactHero: "Contactar con YATELEE", contactUs: "Contacto",
      inquiryTitle: "Envíe los requisitos de su proyecto", submitInquiryTitle: "Envíe su consulta B2B", submitInquiry: "Enviar consulta", name: "Nombre", email: "Correo", phone: "Teléfono / WhatsApp", companyName: "Empresa", countryRegion: "País / región", productRequirement: "Requisito del producto", message: "Mensaje"
    }),
    pl: Object.assign({}, base, {
      homeTitle: "YATELEE | Producent termostatów HVAC", homeDescription: "YATELEE produkuje panele kontroli temperatury, termostaty pokojowe, termostaty fan coil i sterowniki ogrzewania podłogowego dla globalnych projektów HVAC.", contactTitleMeta: "Kontakt z YATELEE | Producent termostatów HVAC", contactDescriptionMeta: "Skontaktuj się z Zhongshan Yatelee Electronic Technology Co., Ltd. w sprawie termostatów HVAC, fan coil oraz paneli OEM/ODM.", productTitleMeta: "Inteligentny dotykowy termostat HVAC | Producent OEM/ODM YATELEE", productDescriptionMeta: "Dotykowy termostat HVAC do fan coil, hoteli, biur i budynków komercyjnych ze wsparciem OEM/ODM YATELEE.",
      navProducts: "Produkty", navApplications: "Zastosowania", navFactory: "Fabryka", navFaq: "FAQ", navContact: "Kontakt", quote: "Zapytaj o ofertę",
      homeHeroTitle: "Producent termostatów HVAC i paneli kontroli temperatury", viewProducts: "Zobacz produkty", contactHero: "Kontakt z YATELEE", contactUs: "Kontakt",
      inquiryTitle: "Wyślij wymagania projektu", submitInquiryTitle: "Wyślij zapytanie B2B", submitInquiry: "Wyślij zapytanie", name: "Imię i nazwisko", email: "Email", phone: "Telefon / WhatsApp", companyName: "Firma", countryRegion: "Kraj / region", productRequirement: "Wymagania produktu", message: "Wiadomość"
    }),
    zh: Object.assign({}, base, {
      homeTitle: "YATELEE 亿特利 | HVAC 温控器制造商", homeDescription: "YATELEE 亿特利为全球 HVAC 项目制造温控面板、房间温控器、风机盘管温控器和地暖控制器。", contactTitleMeta: "联系 YATELEE 亿特利 | HVAC 温控器制造商", contactDescriptionMeta: "联系中山市亿特利电子科技有限公司，咨询 HVAC 温控器、风机盘管温控器和 OEM/ODM 温控面板。", productTitleMeta: "智能触摸屏 HVAC 温控器 | YATELEE OEM/ODM 制造商", productDescriptionMeta: "智能触摸屏 HVAC 温控器，适用于风机盘管、酒店客房、办公室和商业建筑，支持 OEM/ODM 项目。",
      navProducts: "产品", navApplications: "应用场景", navFactory: "工厂", navFaq: "常见问题", navContact: "联系我们", quote: "获取报价",
      megaTitle: "温控器产品中心", megaText: "按产品类型、暖通应用或 OEM 定制需求选择。", megaInquiry: "发送项目询盘", megaCore: "核心分类", roomThermostat: "房间温控器", underfloorController: "地暖控制器", fanCoilThermostat: "风机盘管温控器", electricActuator: "电热执行器", megaSolutions: "热门解决方案", hotelHvac: "酒店房间 HVAC", bmsAutomation: "BMS / 楼宇自控", gasBoiler: "燃气锅炉采暖", smartHome: "智能家居控制", megaPrivate: "私标温控器项目", megaPrivateText: "支持 Logo、颜色、包装、说明书、软件和新产品开发。",
      homeHeroTitle: "温度控制面板与 HVAC 温控器制造商", homeHeroText: "YATELEE 为进口商、经销商、工程商和智能家居品牌制造房间温控器、地暖控制器、风机盘管温控器及 OEM/ODM HVAC 控制方案。", viewProducts: "查看产品", contactHero: "联系 YATELEE", contactHeroText: "发送您的 HVAC 温控器需求、OEM/ODM 定制需求、项目应用和目标市场信息，我们的销售团队会协助确认合适配置。", contactUs: "联系我们", companyAddress: "公司地址", openOsm: "在 OpenStreetMap 打开",
      inquiryTitle: "发送您的项目需求", inquiryText: "请告诉我们国家、产品兴趣、数量、应用和定制需求，我们会回复合适的产品信息和下一步。", submitInquiryTitle: "提交 B2B 询盘", submitInquiryText: "请填写产品需求、国家、电话或 WhatsApp 以及项目详情。必填项已清晰标记，便于销售团队高效跟进。", submitInquiry: "提交询盘", name: "姓名", nameRequired: "姓名 *", email: "邮箱", emailRequired: "邮箱 *", phone: "电话 / WhatsApp", phoneRequired: "电话 / WhatsApp *", companyName: "公司名称", countryRegion: "国家/地区", productRequirement: "产品需求", message: "留言", requiredNotice: "请先完成必填项。", successNotice: "谢谢，您的询盘已成功提交。", invalidEmail: "请输入有效邮箱。", invalidPhone: "请输入有效国际电话号码。", requiredName: "请输入姓名。", requiredEmail: "请输入邮箱。", requiredPhone: "请输入电话或 WhatsApp。", spamBlocked: "反垃圾检测已拦截本次提交。", submitting: "提交中...", failedNotice: "提交失败，请直接发送邮件至 Kale.Yan@zhongshanyatelee.com。", backendPending: "表单结构已完成，后续可接入邮箱、数据库或 CRM。"
    }),
    fr: Object.assign({}, base, {
      homeTitle: "YATELEE | Fabricant de thermostats HVAC", homeDescription: "YATELEE fabrique des panneaux de contrôle de température, thermostats d'ambiance, thermostats fan coil et contrôleurs de chauffage au sol pour les projets HVAC internationaux.", contactTitleMeta: "Contacter YATELEE | Fabricant de thermostats HVAC", contactDescriptionMeta: "Contactez Zhongshan Yatelee Electronic Technology Co., Ltd. pour les thermostats HVAC, fan coil et panneaux OEM/ODM.", productTitleMeta: "Thermostat HVAC tactile intelligent | Fabricant OEM/ODM YATELEE", productDescriptionMeta: "Thermostat HVAC tactile pour fan coil, chambres d'hôtel, bureaux et bâtiments commerciaux avec support OEM/ODM YATELEE.",
      navProducts: "Produits", navApplications: "Applications", navFactory: "Usine", navFaq: "FAQ", navContact: "Contact", quote: "Demander un devis",
      homeHeroTitle: "Fabricant de thermostats HVAC et panneaux de contrôle de température", viewProducts: "Voir les produits", contactHero: "Contacter YATELEE", contactUs: "Contact",
      inquiryTitle: "Envoyez vos exigences de projet", submitInquiryTitle: "Envoyez votre demande B2B", submitInquiry: "Envoyer la demande", name: "Nom", email: "E-mail", phone: "Téléphone / WhatsApp", companyName: "Société", countryRegion: "Pays / région", productRequirement: "Besoin produit", message: "Message"
    }),
    ar: Object.assign({}, base, {
      homeTitle: "YATELEE | مصنع ترموستات HVAC", homeDescription: "تصنع YATELEE لوحات التحكم في الحرارة، ترموستات الغرف، ترموستات وحدات الفان كويل ووحدات تحكم التدفئة الأرضية لمشاريع HVAC العالمية.", contactTitleMeta: "اتصل بـ YATELEE | مصنع ترموستات HVAC", contactDescriptionMeta: "اتصل بشركة Zhongshan Yatelee Electronic Technology Co., Ltd. لاستفسارات ترموستات HVAC ولوحات التحكم OEM/ODM.", productTitleMeta: "ترموستات HVAC ذكي بشاشة لمس | مصنع YATELEE OEM/ODM", productDescriptionMeta: "ترموستات HVAC بشاشة لمس لوحدات الفان كويل وغرف الفنادق والمكاتب والمباني التجارية مع دعم OEM/ODM من YATELEE.",
      navProducts: "المنتجات", navApplications: "التطبيقات", navFactory: "المصنع", navFaq: "الأسئلة", navContact: "اتصل بنا", quote: "اطلب عرض سعر",
      homeHeroTitle: "مصنع ترموستات HVAC ولوحات التحكم في الحرارة", viewProducts: "عرض المنتجات", contactHero: "اتصل بـ YATELEE", contactUs: "اتصل بنا",
      inquiryTitle: "أرسل متطلبات مشروعك", submitInquiryTitle: "أرسل استفسارك التجاري", submitInquiry: "إرسال الاستفسار", name: "الاسم", email: "البريد الإلكتروني", phone: "الهاتف / واتساب", companyName: "اسم الشركة", countryRegion: "الدولة / المنطقة", productRequirement: "متطلبات المنتج", message: "الرسالة"
    }),
    de: Object.assign({}, base, {
      homeTitle: "YATELEE | Hersteller von HVAC-Thermostaten", homeDescription: "YATELEE fertigt Temperaturregelpanels, Raumthermostate, Fan-Coil-Thermostate und Fußbodenheizungsregler für globale HVAC-Projekte.", contactTitleMeta: "YATELEE kontaktieren | Hersteller von HVAC-Thermostaten", contactDescriptionMeta: "Kontaktieren Sie Zhongshan Yatelee Electronic Technology Co., Ltd. für HVAC-Thermostate, Fan-Coil-Thermostate und OEM/ODM Temperaturregelpanels.", productTitleMeta: "Smart Touch Screen HVAC-Thermostat | YATELEE OEM/ODM Hersteller", productDescriptionMeta: "Smart Touch Screen HVAC-Thermostat für Fan-Coil-Geräte, Hotelzimmer, Büros und Gewerbegebäude mit OEM/ODM Support von YATELEE.",
      navProducts: "Produkte", navApplications: "Anwendungen", navFactory: "Fabrik", navFaq: "FAQ", navContact: "Kontakt", quote: "Angebot anfragen",
      homeHeroTitle: "Hersteller von HVAC-Thermostaten und Temperaturregelpanelen", viewProducts: "Produkte ansehen", contactHero: "YATELEE kontaktieren", contactUs: "Kontakt",
      inquiryTitle: "Senden Sie Ihre Projektanforderung", submitInquiryTitle: "B2B-Anfrage senden", submitInquiry: "Anfrage senden", name: "Name", email: "E-Mail", phone: "Telefon / WhatsApp", companyName: "Firma", countryRegion: "Land / Region", productRequirement: "Produktanforderung", message: "Nachricht"
    })
  };

  const exactTextKeys = Object.fromEntries(Object.entries(base).map(([key, value]) => [value, key]));

  function t(lang, key) {
    return (translations[lang] && translations[lang][key]) || base[key] || key;
  }

  function pageKey() {
    const path = location.pathname;
    if (path.includes("contact-us")) return "contact";
    if (path.includes("inquiry")) return "inquiry";
    if (path.includes("smart-touch-screen-hvac-thermostat")) return "product";
    return "home";
  }

  function metaKeys(page) {
    if (page === "contact") return ["contactTitleMeta", "contactDescriptionMeta"];
    if (page === "inquiry") return ["submitInquiryTitle", "submitInquiryText"];
    if (page === "product") return ["productTitleMeta", "productDescriptionMeta"];
    return ["homeTitle", "homeDescription"];
  }

  function createLanguageSwitcher() {
    if (document.querySelector(".language-switcher")) return;
    const header = document.querySelector(".site-header");
    const cta = document.querySelector(".header-cta");
    if (!header || !cta) return;

    const wrap = document.createElement("div");
    wrap.className = "language-switcher";
    wrap.innerHTML = `
      <button type="button" class="language-current" aria-haspopup="listbox" aria-expanded="false"></button>
      <div class="language-menu" role="listbox">
        ${languages.map((item) => `<button type="button" data-lang="${item.code}" role="option">${item.label}</button>`).join("")}
      </div>
    `;
    header.insertBefore(wrap, cta);
  }

  function seedDataAttributes() {
    document.querySelectorAll("a, h1, h2, h3, p, span, strong, li, button, label > span").forEach((node) => {
      if (node.dataset.i18n) return;
      const text = node.textContent && node.textContent.trim().replace(/\s+/g, " ");
      if (text && exactTextKeys[text]) node.dataset.i18n = exactTextKeys[text];
    });

    document.querySelectorAll("input[placeholder], textarea[placeholder]").forEach((node) => {
      const value = node.getAttribute("placeholder");
      if (value && exactTextKeys[value]) node.dataset.i18nPlaceholder = exactTextKeys[value];
    });
  }

  function updateHreflang() {
    document.querySelectorAll('link[data-i18n-hreflang="true"]').forEach((node) => node.remove());
    languages.forEach((item) => {
      const link = document.createElement("link");
      link.rel = "alternate";
      link.hreflang = item.code;
      link.href = `${location.origin}${location.pathname}?lang=${item.code}`;
      link.dataset.i18nHreflang = "true";
      document.head.appendChild(link);
    });
  }

  function applyLanguage(lang) {
    if (!translations[lang]) lang = "en";
    localStorage.setItem("siteLanguage", lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

    document.querySelectorAll("[data-i18n]").forEach((node) => {
      node.textContent = t(lang, node.dataset.i18n);
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
      node.setAttribute("placeholder", t(lang, node.dataset.i18nPlaceholder));
    });

    const [titleKey, descKey] = metaKeys(pageKey());
    document.title = t(lang, titleKey);
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", t(lang, descKey));

    const current = languages.find((item) => item.code === lang) || languages[0];
    const currentButton = document.querySelector(".language-current");
    if (currentButton) currentButton.textContent = current.label;
    document.querySelectorAll(".language-menu [data-lang]").forEach((button) => {
      button.setAttribute("aria-selected", button.dataset.lang === lang ? "true" : "false");
    });
  }

  function bindSwitcher() {
    const switcher = document.querySelector(".language-switcher");
    const current = document.querySelector(".language-current");
    if (!switcher || !current) return;

    current.addEventListener("click", () => {
      const open = switcher.classList.toggle("open");
      current.setAttribute("aria-expanded", String(open));
    });
    document.querySelectorAll(".language-menu [data-lang]").forEach((button) => {
      button.addEventListener("click", () => {
        applyLanguage(button.dataset.lang);
        switcher.classList.remove("open");
        current.setAttribute("aria-expanded", "false");
      });
    });
    document.addEventListener("click", (event) => {
      if (!switcher.contains(event.target)) {
        switcher.classList.remove("open");
        current.setAttribute("aria-expanded", "false");
      }
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    createLanguageSwitcher();
    seedDataAttributes();
    updateHreflang();
    bindSwitcher();
    const queryLang = new URLSearchParams(location.search).get("lang");
    applyLanguage(queryLang || localStorage.getItem("siteLanguage") || "en");
  });

  window.YateleeI18n = { applyLanguage, translations, languages };
})();
