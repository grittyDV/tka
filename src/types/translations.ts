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

export interface Translation {
  header: {
    title: string;
    navigation: {
      home: string;
      services: string;
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
  services: {
    title: string;
    items: ServiceItems;
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