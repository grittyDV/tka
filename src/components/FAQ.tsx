import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useTranslations } from '../contexts/TranslationContext';

export const FAQ = () => {
  const translations = useTranslations();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">{translations.faq.title}</h2>
          <p className="text-lg text-gray-600 text-center mb-12">{translations.faq.description}</p>

          <div className="space-y-4">
            {translations.faq.items.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full flex justify-between items-center p-6 text-left"
                >
                  <span className="font-semibold text-lg">{item.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-indigo-800" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-indigo-800" />
                  )}
                </button>
                <div
                  className={`px-6 transition-all duration-200 ${
                    openIndex === index ? 'pb-6 max-h-40' : 'max-h-0 overflow-hidden'
                  }`}
                >
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};