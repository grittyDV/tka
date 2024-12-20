import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

const hu = {
  common: {
    firmName: "Kovács Timea Ügyvédi Iroda",
    navigation: {
      home: "Főoldal",
      services: "Szakterületek",
      contact: "Kapcsolat"
    }
  },
  hero: {
    title: "Személyes és szakértő jogi képviselet",
    description: "Személyre szabott jogi megoldások magánszemélyek és vállalkozások részére, 15 éves szakmai tapasztalattal. Célom az Ön jogainak hatékony védelme és érdekeinek képviselete.",
    ctaButton: "Időpontfoglalás"
  },
  services: {
    title: "Szakterületeink",
    learnMore: "További információ",
    items: [
      {
        title: "Ingatlan ügyek",
        description: "Adásvételi szerződések, bérleti jogviszonyok."
      },
      {
        title: "Családjog",
        description: "Házassági vagyonjog, öröklési ügyek."
      },
      {
        title: "Szerződések",
        description: "Szerződések készítése és véleményezése."
      },
      {
        title: "Kártérítési jog",
        description: "Személyi és vagyoni károk megtérítése."
      },
      {
        title: "Munkajog",
        description: "Munkaszerződések, munkajogi viták."
      },
      {
        title: "Társasági jog",
        description: "Cégalapítás, változásbejelentés."
      },
      {
        title: "Követeléskezelés",
        description: "Peres és peren kívüli ügyek."
      },
      {
        title: "Adatvédelem",
        description: "GDPR megfelelés, szabályzatok készítése."
      }
    ]
  },
  contact: {
    title: "Kapcsolatfelvétel",
    form: {
      name: {
        label: "Név",
        placeholder: "Az Ön neve"
      },
      email: {
        label: "Email",
        placeholder: "Az Ön email címe"
      },
      message: {
        label: "Üzenet",
        placeholder: "Az Ön üzenete"
      },
      required: "*Kötelező mezők",
      submit: "Üzenet Küldése"
    },
    info: {
      title: "Elérhetőségeink",
      address: {
        title: "Irodánk címe",
        content: "Strada Unirii 13\nZalău 457246\nRománia"
      },
      email: {
        title: "Email",
        content: "kovacstimea@gmail.com"
      },
      phone: {
        title: "Telefon",
        content: "+40 740 245 886"
      },
      mapAlt: "Iroda térképe"
    },
    footer: {
      copyright: "© {{year}} Kovács Timea Ügyvédi Iroda. Minden jog fenntartva."
    }
  }
};

const ro = {
  common: {
    firmName: "Cabinet de Avocat Timea Kovacs",
    navigation: {
      home: "Acasă",
      services: "Servicii",
      contact: "Contact"
    }
  },
  hero: {
    title: "Reprezentare juridică personală și expertă",
    description: "Soluții juridice personalizate pentru persoane fizice și companii, cu 15 ani de experiență profesională. Scopul meu este protejarea eficientă a drepturilor dvs. și reprezentarea intereselor dvs.",
    ctaButton: "Programare"
  },
  services: {
    title: "Domenii de Practică",
    learnMore: "Mai multe informații",
    items: [
      {
        title: "Drept Imobiliar",
        description: "Contracte de vânzare-cumpărare, relații de închiriere."
      },
      {
        title: "Dreptul Familiei",
        description: "Dreptul matrimonial, succesiuni."
      },
      {
        title: "Contracte",
        description: "Redactarea și analiza contractelor."
      },
      {
        title: "Daune",
        description: "Recuperarea daunelor materiale și morale."
      },
      {
        title: "Dreptul Muncii",
        description: "Contracte de muncă, litigii de muncă."
      },
      {
        title: "Drept Societar",
        description: "Înființare firme, modificări statutare."
      },
      {
        title: "Recuperare Creanțe",
        description: "Litigii și proceduri extrajudiciare."
      },
      {
        title: "Protecția Datelor",
        description: "Conformitate GDPR, elaborare regulamente."
      }
    ]
  },
  contact: {
    title: "Contact",
    form: {
      name: {
        label: "Nume",
        placeholder: "Numele dumneavoastră"
      },
      email: {
        label: "Email",
        placeholder: "Adresa dumneavoastră de email"
      },
      message: {
        label: "Mesaj",
        placeholder: "Mesajul dumneavoastră"
      },
      required: "*Câmpuri obligatorii",
      submit: "Trimite Mesajul"
    },
    info: {
      title: "Informații de Contact",
      address: {
        title: "Adresa biroului",
        content: "Strada Unirii 13\nZalău 457246\nRomânia"
      },
      email: {
        title: "Email",
        content: "kovacstimea@gmail.com"
      },
      phone: {
        title: "Telefon",
        content: "+40 740 245 886"
      },
      mapAlt: "Harta biroului"
    },
    footer: {
      copyright: "© {{year}} Cabinet de Avocat Timea Kovacs. Toate drepturile rezervate."
    }
  }
};

const en = {
  common: {
    firmName: "Timea Kovacs Law Office",
    navigation: {
      home: "Home",
      services: "Services",
      contact: "Contact"
    }
  },
  hero: {
    title: "Personal and Expert Legal Representation",
    description: "Customized legal solutions for individuals and businesses, with 15 years of professional experience. My goal is to effectively protect your rights and represent your interests.",
    ctaButton: "Book Appointment"
  },
  services: {
    title: "Practice Areas",
    learnMore: "Learn more",
    items: [
      {
        title: "Real Estate Law",
        description: "Purchase agreements, lease relationships."
      },
      {
        title: "Family Law",
        description: "Matrimonial property law, inheritance matters."
      },
      {
        title: "Contracts",
        description: "Contract drafting and review."
      },
      {
        title: "Damages",
        description: "Material and moral damages recovery."
      },
      {
        title: "Labor Law",
        description: "Employment contracts, labor disputes."
      },
      {
        title: "Corporate Law",
        description: "Company formation, statutory changes."
      },
      {
        title: "Debt Collection",
        description: "Litigation and out-of-court procedures."
      },
      {
        title: "Data Protection",
        description: "GDPR compliance, regulation development."
      }
    ]
  },
  contact: {
    title: "Contact Us",
    form: {
      name: {
        label: "Name",
        placeholder: "Your name"
      },
      email: {
        label: "Email",
        placeholder: "Your email address"
      },
      message: {
        label: "Message",
        placeholder: "Your message"
      },
      required: "*Required fields",
      submit: "Send Message"
    },
    info: {
      title: "Contact Information",
      address: {
        title: "Office Address",
        content: "13 Unirii Street\nZalău 457246\nRomania"
      },
      email: {
        title: "Email",
        content: "kovacstimea@gmail.com"
      },
      phone: {
        title: "Phone",
        content: "+40 740 245 886"
      },
      mapAlt: "Office map"
    },
    footer: {
      copyright: "© {{year}} Timea Kovacs Law Office. All rights reserved."
    }
  }
};

i18next
  .use(initReactI18next)
  .init({
    resources: {
      hu: hu,
      ro: ro,
      en: en
    },
    lng: 'hu',
    fallbackLng: 'hu',
    interpolation: {
      escapeValue: false
    }
  });

export default i18next;