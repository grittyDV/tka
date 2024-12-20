export type Language = 'hu' | 'en' | 'ro';

export interface TranslationKeys {
  nav: {
    home: string;
    services: string;
    contact: string;
  };
  companyName: string;
  hero: {
    title: string;
    highlight: string;
    description: string;
    bookAppointment: string;
  };
  services: {
    title: string;
    items: Array<{
      title: string;
      description: string;
    }>;
    learnMore: string;
  };
  contact: {
    title: string;
    form: {
      name: string;
      email: string;
      message: string;
      requiredFields: string;
      send: string;
    };
    info: {
      title: string;
      address: {
        title: string;
        value: string;
      };
      email: {
        title: string;
        value: string;
      };
      phone: {
        title: string;
        value: string;
      };
      mapAlt: string;
    };
  };
  footer: {
    copyright: string;
  };
}