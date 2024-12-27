import React from 'react';
import { Award, Shield, Clock, Lock } from 'lucide-react';
import { useTranslations } from '../contexts/TranslationContext';

const valueIcons = {
  'Szakmai precizitás': Award,
  'Ügyfélközpontúság': Shield,
  'Folyamatos elérhetőség': Clock,
  'Diszkréció': Lock,
};

export const About = () => {
  const translations = useTranslations();

  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">{translations.about.title}</h2>
          <p className="text-lg text-gray-600 mb-12">{translations.about.description}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Expertise */}
          <div className="bg-slate-50 p-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-6">{translations.about.expertise.title}</h3>
            <ul className="space-y-4">
              {translations.about.expertise.points.map((point, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2 text-indigo-800">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Values */}
          <div className="bg-slate-50 p-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-6">{translations.about.values.title}</h3>
            <ul className="space-y-4">
              {translations.about.values.points.map((point, index) => {
                const Icon = valueIcons[point as keyof typeof valueIcons] || Award;
                return (
                  <li key={index} className="flex items-center">
                    <Icon className="w-5 h-5 mr-3 text-indigo-800" />
                    <span>{point}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};