export interface Translations {
  common: {
    firmName: string;
    navigation: {
      home: string;
      services: string;
      testimonials: string;
      contact: string;
    };
  };
  hero: {
    title: string;
    description: string;
    ctaButton: string;
  };
  services: {
    title: string;
    items: Array<{
      title: string;
      description: string;
      learnMore: string;
    }>;
  };
  testimonials: {
    title: string;
    items: Array<{
      name: string;
      role: string;
      text: string;
    }>;
  };
  contact: {
    title: string;
    form: {
      name: string;
      email: string;
      message: string;
      required: string;
      submit: string;
    };
    info: {
      address: {
        title: string;
        content: string;
      };
      email: {
        title: string;
        content: string;
      };
      phone: {
        title: string;
        content: string;
      };
    };
  };
}