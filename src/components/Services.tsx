import React from 'react';
import { Home, Users, FileText, Scale, Briefcase, Building2, BadgeDollarSign, ShieldCheck, ChevronRight } from 'lucide-react';
import { useTranslations } from '../contexts/TranslationContext';
import type { ServiceItem } from '../types/translations';

type ServiceKey = 'realEstate' | 'familyLaw' | 'contracts' | 'compensation' | 'laborLaw' | 'corporateLaw' | 'debtCollection' | 'dataProtection';

const serviceIcons = {
  realEstate: Home,
  familyLaw: Users,
  contracts: FileText,
  compensation: Scale,
  laborLaw: Briefcase,
  corporateLaw: Building2,
  debtCollection: BadgeDollarSign,
  dataProtection: ShieldCheck,
} as const;

type ServiceEntry = [ServiceKey, ServiceItem];

function isServiceEntry(entry: [string, unknown]): entry is ServiceEntry {
  const [key] = entry;
  return key !== 'learnMore' && key in serviceIcons;
}

export const Services = () => {
  const translations = useTranslations();
  const serviceItems = Object.entries(translations.services.items).filter(isServiceEntry);

  return (
    <section id="services" className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">{translations.services.title}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {serviceItems.map(([key, service]) => {
            const Icon = serviceIcons[key];
            return (
              <div key={key} className="p-6 bg-slate-50 rounded-lg hover:shadow-lg transition-all group">
                <div className="flex flex-col items-start text-left">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-indigo-100 rounded-full group-hover:bg-indigo-200 transition-colors">
                      <Icon className="w-5 h-5 text-indigo-800" />
                    </div>
                    <h3 className="text-lg font-semibold">{service.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{service.description}</p>
                  <a
                    href={`#${key}`}
                    className="text-indigo-800 hover:text-indigo-900 text-sm font-medium flex items-center mt-auto"
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