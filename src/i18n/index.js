import React, { createContext, useContext, useState, useMemo } from "react";

const dictionaries = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      products: "Products",
      news: "News",
      resources: "Resources",
    },
    home: {
      heroTitle: "Promoting Afghanistan's Exports",
      heroSubtitle:
        "High-quality saffron, dry fruits, handmade carpets and precious stones — connecting Afghan suppliers with the world.",
      exploreProducts: "Explore Products",
      findExporters: "Find Exporters",
      featured: "Featured Products",
    },
    products: {
      title: "Products & Categories",
      subtitle: "Explore Afghanistan's key export commodities.",
      searchPlaceholder: "Search products or categories",
      empty: "No products match your search.",
    },
    about: {
      hero: "Afghanistan’s Export Ecosystem",
      heroLead:
        "A bridge between traditional excellence and modern global markets — enabling producers of saffron, dried fruits, carpets and precious stones to reach buyers worldwide through transparency, quality assurance and collaboration.",
      snapshot: "Snapshot",
      strategic: "Strategic Position",
      strategicBody:
        "Positioned at the crossroads of Central and South Asia, Afghanistan connects regional trade corridors. Its high-altitude climate yields premium saffron and nutrient-rich fruits, while artisanal heritage underpins globally recognized carpet weaving and gemstone processing.",
      trade: "Trade & Partnerships",
      tradeBody:
        "Emerging logistics corridors, regional agreements and air cargo initiatives improve market access. Continued modernization of quality labs, cold chain facilities and digital traceability will further elevate competitiveness.",
      headlines: "Recent Headlines",
      focus: "Platform Focus",
      stats: {
        exportValue: "Export Value (2024 est.)",
        categories: "Key Product Categories",
        jobs: "Jobs Supported",
        destinations: "Destination Markets",
      },
      values: {
        quality: {
          title: "Quality",
          body: "Supporting international standards, organic cultivation and ethical sourcing across supply chains.",
        },
        heritage: {
          title: "Heritage",
          body: "Showcasing centuries‑old craftsmanship in carpets, gemstones and artisanal goods.",
        },
        opportunity: {
          title: "Opportunity",
          body: "Connecting rural producers and SMEs with global buyers, logistics providers and investors.",
        },
        sustainability: {
          title: "Sustainability",
          body: "Encouraging water‑smart agriculture, traceability and fair value distribution.",
        },
      },
    },
  },
  fa: {
    nav: {
      home: "خانه",
      about: "درباره",
      products: "محصولات",
      news: "اخبار",
      resources: "منابع",
    },
    home: {
      heroTitle: "ترویج صادرات افغانستان",
      heroSubtitle:
        "زعفران با کیفیت، میوه های خشک، قالین های دستباف و سنگهای قیمتی — اتصال عرضه کنندگان افغان با جهان.",
      exploreProducts: "مشاهده محصولات",
      findExporters: "جستجوی صادر کنندگان",
      featured: "محصولات ویژه",
    },
    products: {
      title: "محصولات و دسته‌بندی‌ها",
      subtitle: "محصولات عمده صادراتی افغانستان را بررسی کنید.",
      searchPlaceholder: "جستجو در محصولات یا دسته‌ها",
      empty: "هیچ محصولی مطابق جستجوی شما نیست.",
    },
    about: {
      hero: "اکوسیستم صادرات افغانستان",
      heroLead:
        "پل بین برتری سنتی و بازارهای جهانی مدرن — توانمندسازی تولیدکنندگان زعفران، میوه‌های خشک، قالین و سنگ‌های قیمتی برای دسترسی به خریداران جهانی از طریق شفافیت، تضمین کیفیت و همکاری.",
      snapshot: "نمای کلی",
      strategic: "موقعیت استراتژیک",
      strategicBody:
        "افغانستان در چهارراه آسیای مرکزی و جنوبی قرار دارد و دالان‌های تجاری منطقه‌ای را متصل می‌کند. اقلیم ارتفاع بلند آن زعفران ممتاز و میوه‌های مغذی تولید می‌کند و میراث هنری از قالین‌بافی و تراش سنگ‌های قیمتی پشتیبانی می‌کند.",
      trade: "تجارت و مشارکت‌ها",
      tradeBody:
        "دالان‌های نوظهور لوژستیکی، توافقات منطقه‌ای و ابتکارات کارگو هوایی دسترسی به بازار را بهبود می‌بخشند. نوسازی آزمایشگاه‌های کیفیت، تأسیسات زنجیره سرد و رهگیری دیجیتال رقابت‌پذیری را بیشتر ارتقا خواهد داد.",
      headlines: "سرخط‌های اخیر",
      focus: "تمرکز پلتفرم",
      stats: {
        exportValue: "ارزش صادرات (برآورد ۲۰۲۴)",
        categories: "دسته‌های اصلی محصول",
        jobs: "اشتغال حمایت شده",
        destinations: "بازارهای مقصد",
      },
      values: {
        quality: {
          title: "کیفیت",
          body: "پشتیبانی از معیارهای بین‌المللی، کشت ارگانیک و تأمین اخلاقی در زنجیره‌ها.",
        },
        heritage: {
          title: "میراث",
          body: "نمایش صنایع دستی چند صد ساله در قالین، سنگ‌های قیمتی و محصولات هنری.",
        },
        opportunity: {
          title: "فرصت",
          body: "اتصال تولیدکنندگان روستایی و شرکت‌های کوچک با خریداران جهانی، ارائه‌دهندگان لوژستیک و سرمایه‌گذاران.",
        },
        sustainability: {
          title: "پایداری",
          body: "تشویق زراعت هوشمند آبی، رهگیری و توزیع عادلانه ارزش.",
        },
      },
    },
  },
  ps: {
    nav: {
      home: "کور",
      about: "په اړه",
      products: "محصولات",
      news: "خبرونه",
      resources: "سرچينې",
    },
    home: {
      heroTitle: "د افغانستان صادراتو ته وده",
      heroSubtitle:
        "د لوړ کیفیت زعفران، وچه مېوه، لاسي غالۍ او قیمتي ډبرې — افغان عرضه کوونکي له نړۍ سره نښلوي.",
      exploreProducts: "محصولات وګورئ",
      findExporters: "صادروونکي ومومئ",
      featured: "ځانګړي محصولات",
    },
    products: {
      title: "محصولات او کټګورۍ",
      subtitle: "د افغانستان مهمې صادراتي توکي وپلټئ.",
      searchPlaceholder: "د محصولاتو يا کټګوریو لټون",
      empty: "ستاسې لټون سره هیڅ محصول برابر نه شو.",
    },
    about: {
      hero: "د افغانستان صادراتي نظام",
      heroLead:
        "د دودیز مهارت او عصري نړیوالو بازارونو تر منځ پُل — زعفران، وچه مېوه، غالۍ او قیمتي ډبرو تولیدوونکي له نړیوالو خریدارانو سره د شفافیت، کیفیت تضمین او همکارۍ له لارې نښلوي.",
      snapshot: "لنډه کتنه",
      strategic: "ستراتېژيک موقعیت",
      strategicBody:
        "افغانستان د منځنۍ او جنوبي آسیا په څلور لاره کې پروت دی او سیمه ییز تجارتي دهلېزونه نښلوي. لوړ ارتفاع اقلیم یې د لوړ کیفیت زعفران او مغذي وچه مېوه برابروي او لاسي میراث یې د غالۍ او قیمتي ډبرو پېژندل شوی صنعت پیاوړی کوي.",
      trade: "سوداګري او شراکتونه",
      tradeBody:
        "راټوکېدونکي لوژستیک دهلېزونه، سیمه ییز تړونونه او هوايي کارګو نوښتونه د بازار لاسرسی ښه کوي. د کیفیت لابراتوارونو، یخ زنځیر اسانتیاوو او ډیجیټل تعقیب نوره پیاوړتیا سیالۍ لوړه وي.",
      headlines: "تازه سرليكونه",
      focus: "د پلیټفارم تمرکز",
      stats: {
        exportValue: "د صادراتو ارزښت (اټکل 2024)",
        categories: "مهمې د محصول کټګورۍ",
        jobs: "ملاتړ شوي دندې",
        destinations: "هدف بازارونه",
      },
      values: {
        quality: {
          title: "کیفیت",
          body: "د نړیوالو معیارونو، عضوي کرنې او اخلاقي تأمین ملاتړ.",
        },
        heritage: {
          title: "میراث",
          body: "د څو پېړیو لاسي هنر، غالۍ او قیمتي ډبرو صنایع نندارې ته ایښودل.",
        },
        opportunity: {
          title: "فرصت",
          body: "کلیوالي تولیدوونکي او کوچني شرکتونه له نړیوالو خریدارانو، لوژستیک خدماتو او پانګه اچوونکو سره نښلول.",
        },
        sustainability: {
          title: "دوامدارۍ",
          body: "د اوبو هوښیار کرنه، تعقیب او عادلانه ارزښت وېش هڅول.",
        },
      },
    },
  },
};

export const supportedLangs = [
  { code: "en", label: "EN" },
  { code: "fa", label: "فارسی" },
  { code: "ps", label: "پښتو" },
];
export const rtlLangs = ["fa", "ps"];

const I18nContext = createContext();

export function I18nProvider({ children }) {
  const [lang, setLang] = useState("en");
  const t = useMemo(() => {
    const dict = dictionaries[lang] || dictionaries.en;
    return (path) => {
      const parts = path.split(".");
      let cur = dict;
      for (const p of parts) {
        if (cur && Object.prototype.hasOwnProperty.call(cur, p)) cur = cur[p];
        else return path; // fallback: key
      }
      return cur;
    };
  }, [lang]);
  const value = useMemo(() => ({ lang, setLang, t }), [lang, t]);
  return React.createElement(I18nContext.Provider, { value }, children);
}

export function useI18n() {
  return useContext(I18nContext);
}
