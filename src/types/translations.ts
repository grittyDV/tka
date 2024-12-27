export interface ServiceItem {
  title: string;
  description: string;
}

type ServiceItems = {
  realEstate: ServiceItem;
  familyLaw: ServiceItem;
  contracts: ServiceItem;
  compensation: ServiceItem;
  laborLaw: ServiceItem;
  corporateLaw: ServiceItem;
  debtCollection: ServiceItem;
  dataProtection: ServiceItem;
  learnMore: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

export interface Translation {
  header: {
    title: string;
    navigation: {
      home: string;
      about: string;
      services: string;
      faq: string;
      contact: string;
    };
  };
  hero: {
    title: string;
    highlight: string;
    description: string;
    cta: string;
    imageAlt: string;
  };
  about: {
    title: string;
    description: string;
    expertise: {
      title: string;
      points: string[];
    };
    values: {
      title: string;
      points: string[];
    };
  };
  services: {
    title: string;
    items: ServiceItems;
  };
  faq: {
    title: string;
    description: string;
    items: FAQItem[];
  };
  contact: {
    title: string;
    form: {
      name: {
        label: string;
        required: boolean;
      };
      email: {
        label: string;
        required: boolean;
      };
      message: {
        label: string;
        required: boolean;
      };
      requiredNote: string;
      submit: string;
    };
    info: {
      title: string;
      address: {
        title: string;
        street: string;
        city: string;
        postalCode: string;
        country: string;
      };
      email: {
        title: string;
        value: string;
      };
      phone: {
        title: string;
        value: string;
      };
      map: {
        alt: string;
      };
    };
  };
  footer: {
    copyright: string;
  };
}