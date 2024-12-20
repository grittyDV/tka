import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

i18next
  .use(initReactI18next)
  .init({
    fallbackLng: 'hu',
    resources: {
      hu: {
        common: require('./locales/hu/common.json'),
        hero: require('./locales/hu/hero.json'),
        services: require('./locales/hu/services.json'),
        testimonials: require('./locales/hu/testimonials.json'),
        contact: require('./locales/hu/contact.json'),
      },
      ro: {
        common: require('./locales/ro/common.json'),
        hero: require('./locales/ro/hero.json'),
        services: require('./locales/ro/services.json'),
        testimonials: require('./locales/ro/testimonials.json'),
        contact: require('./locales/ro/contact.json'),
      },
      en: {
        common: require('./locales/en/common.json'),
        hero: require('./locales/en/hero.json'),
        services: require('./locales/en/services.json'),
        testimonials: require('./locales/en/testimonials.json'),
        contact: require('./locales/en/contact.json'),
      },
    },
    ns: ['common', 'hero', 'services', 'testimonials', 'contact'],
    defaultNS: 'common',
  });

export default i18next;