import { ChevronUp } from "lucide-react";
import { useState } from "react";
import { useTranslations } from '../context/TranslationContext';

interface FAQ {
  question: string;
  answer: string;
}

const FAQItem: React.FC<{ faq: FAQ }> = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-sm mb-4 overflow-hidden hover:shadow-md transition-shadow">
      <button
        className="w-full px-6 py-5 flex justify-between items-center focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-medium text-gray-900 text-left group-hover:text-[#597F70] transition-colors">
          {faq.question}
        </h3>
        <span 
          className={`ml-6 flex-shrink-0 transform transition-transform duration-300 ease-in-out ${
            isOpen ? 'rotate-90' : ''
          }`}
        >
          <ChevronUp className="w-6 h-6 text-[#597F70]" />
        </span>
      </button>
      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className={`px-6 pb-5 text-gray-600 ${isOpen ? 'animate-fadeIn' : ''}`}>
          {faq.answer}
        </div>
      </div>
    </div>
  );
};

const FAQSection: React.FC = () => {
  const { t } = useTranslations();

  return (
    <section id='faq' className="py-16 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">{t.faq.title}</h2>
          <p className="text-gray-600 text-center mb-12">
            {t.faq.description}
          </p>
          <div className="space-y-4">
            {t.faq.items.map((faq, index) => (
              <FAQItem key={index} faq={faq} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;