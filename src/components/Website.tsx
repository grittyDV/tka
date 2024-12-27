import React, { useState } from 'react';
import { ChevronRight, Mail, Phone, MapPin, Facebook, Link, Home, Users, FileText, Scale, Briefcase, Building2, BadgeDollarSign, ShieldCheck } from 'lucide-react';

interface Props {
  translations: {
    header: {
      title: string;
      navigation: {
        [key: string]: string;
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
        [key: string]: {
          title: string;
          description: string;
        };
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
  };
}

const serviceIcons = {
  realEstate: Home,
  familyLaw: Users,
  contracts: FileText,
  compensation: Scale,
  laborLaw: Briefcase,
  corporateLaw: Building2,
  debtCollection: BadgeDollarSign,
  dataProtection: ShieldCheck,
};

const Website: React.FC<Props> = ({ translations }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="fixed w-full bg-white shadow-md z-50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-indigo-800">{translations.header.title}</div>
            
            {/* Desktop menu */}
            <div className="hidden md:flex space-x-8">
              {Object.entries(translations.header.navigation).map(([key, value]) => (
                <a key={key} href={`#${key}`} className="text-gray-700 hover:text-indigo-800">
                  {value}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-24 md:pt-32 bg-slate-50 text-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between pb-12 md:pb-24">
            <div className="md:w-1/2 text-left md:pr-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {translations.hero.title.split(translations.hero.highlight).map((part, i, arr) => (
                  <React.Fragment key={i}>
                    {part}
                    {i < arr.length - 1 && <span className="text-indigo-800">{translations.hero.highlight}</span>}
                  </React.Fragment>
                ))}
              </h1>
              <p className="text-lg mb-8 text-gray-600">{translations.hero.description}</p>
              <button
                onClick={scrollToContact}
                className="bg-indigo-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-900 transition-colors flex items-center"
              >
                {translations.hero.cta}
                <ChevronRight className="ml-2" />
              </button>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
              <div className="relative w-72 h-72 md:w-96 md:h-96 bg-white p-4 rounded-lg shadow-lg">
                <img
                  src="/api/placeholder/500/500"
                  alt={translations.hero.imageAlt}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">{translations.services.title}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {Object.entries(translations.services.items).map(([key, service]) => {
              if (key === 'learnMore') return null;
              const Icon = serviceIcons[key as keyof typeof serviceIcons];
              return (
                <div key={key} className="p-6 bg-slate-50 rounded-lg hover:shadow-lg transition-all group">
                  <div className="flex flex-col items-center text-center">
                    <div className="p-3 bg-indigo-100 rounded-full mb-4 group-hover:bg-indigo-200 transition-colors">
                      {Icon && <Icon className="w-6 h-6 text-indigo-800" />}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{service.description}</p>
                    <a
                      href={`#${key}`}
                      className="text-indigo-800 hover:text-indigo-900 text-sm font-medium flex items-center"
                    >
                      {translations.services.items.learnMore}
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8">{translations.contact.title}</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-700 mb-2">
                    {translations.contact.form.name.label}
                    {translations.contact.form.name.required && '*'}
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-800"
                    required={translations.contact.form.name.required}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">
                    {translations.contact.form.email.label}
                    {translations.contact.form.email.required && '*'}
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-800"
                    required={translations.contact.form.email.required}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">
                    {translations.contact.form.message.label}
                    {translations.contact.form.message.required && '*'}
                  </label>
                  <textarea
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-800 h-32"
                    required={translations.contact.form.message.required}
                  ></textarea>
                </div>
                <p className="text-sm text-gray-500">{translations.contact.form.requiredNote}</p>
                <button
                  type="submit"
                  className="bg-indigo-800 text-white px-6 py-3 rounded-lg hover:bg-indigo-900 transition-colors"
                >
                  {translations.contact.form.submit}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-8">{translations.contact.info.title}</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="mr-4 text-indigo-800" />
                  <div>
                    <h3 className="font-semibold mb-1">{translations.contact.info.address.title}</h3>
                    <p className="text-gray-600">
                      {translations.contact.info.address.street}<br />
                      {translations.contact.info.address.city} {translations.contact.info.address.postalCode}<br />
                      {translations.contact.info.address.country}
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="mr-4 text-indigo-800" />
                  <div>
                    <h3 className="font-semibold mb-1">{translations.contact.info.email.title}</h3>
                    <p className="text-gray-600">{translations.contact.info.email.value}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="mr-4 text-indigo-800" />
                  <div>
                    <h3 className="font-semibold mb-1">{translations.contact.info.phone.title}</h3>
                    <p className="text-gray-600">{translations.contact.info.phone.value}</p>
                  </div>
                </div>

                {/* Map placeholder */}
                <div className="mt-8">
                  <img
                    src="/api/placeholder/600/300"
                    alt={translations.contact.info.map.alt}
                    className="w-full rounded-lg"
                  />
                </div>

                {/* Social Media Links */}
                <div className="flex space-x-4 mt-8">
                  <a href="#" className="text-gray-600 hover:text-indigo-800">
                    <Facebook />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-indigo-800">
                    <Link />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>{translations.footer.copyright.replace('{{year}}', currentYear.toString())}</p>
        </div>
      </footer>
    </div>
  );
};

export default Website;