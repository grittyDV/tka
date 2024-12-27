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
    items: {
      realEstate: {
        title: string;
        description: string;
      };
      familyLaw: {
        title: string;
        description: string;
      };
      contracts: {
        title: string;
        description: string;
      };
      compensation: {
        title: string;
        description: string;
      };
      laborLaw: {
        title: string;
        description: string;
      };
      corporateLaw: {
        title: string;
        description: string;
      };
      debtCollection: {
        title: string;
        description: string;
      };
      dataProtection: {
        title: string;
        description: string;
      };
      learnMore: string;
    };
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