import React from 'react';
import { Home, Users, FileText, Scale, Briefcase, Building2, BadgeDollarSign, ShieldCheck, ChevronRight } from 'lucide-react';
import { useTranslations } from '../contexts/TranslationContext';

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

export const Services = () => {
  const translations = useTranslations();

  return (
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
  );
};