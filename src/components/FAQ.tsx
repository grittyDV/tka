import { ChevronRight } from "lucide-react";
import { useState } from "react";

interface FAQ {
    question: string;
    answer: string;
  }

  const faqs: FAQ[] = [
    {
      question: "Mennyibe kerül egy első konzultáció?",
      answer: "Az első konzultáció díjmentes, amely során megismerhetem az Ön ügyét és átfogó jogi tanácsot adhatok a további lépésekről és várható költségekről."
    },
    {
      question: "Milyen nyelveken beszél?",
      answer: "Folyékonyan beszélek magyarul és románul, így mindkét nyelven teljes körű jogi szolgáltatást tudok nyújtani."
    },
    {
      question: "Vállal-e ügyeket más megyében is?",
      answer: "Igen, Szilágy megye teljes területén, valamint szükség esetén a környező megyékben is vállalok jogi képviseletet."
    },
    {
        "question": "Hogyan léphetek kapcsolatba Önnel jogi tanácsadásért?",
        "answer": "Időpontot egyeztethet telefonon vagy e-mailben. Az elérhetőségeimet megtalálja a kapcsolati oldalon."
    },
    {
        "question": "Mennyibe kerül a jogi tanácsadás?",
        "answer": "A díjszabás az ügy bonyolultságától és a szükséges időtől függ. Egy előzetes konzultáció során pontosabb árajánlatot tudok adni."
    },
    {
        "question": "Milyen dokumentumokat kell magammal hoznom az első konzultációra?",
        "answer": "Az ügyéhez kapcsolódó minden releváns dokumentumot, például szerződéseket, levelezéseket, hatósági értesítéseket vagy egyéb bizonyítékokat."
      },
      {
        "question": "Képvisel bírósági ügyekben is?",
        "answer": "Igen, jogi képviseletet biztosítok mind polgári, mind büntető, valamint közigazgatási ügyekben."
      },
      {
        "question": "Segít szerződések készítésében és ellenőrzésében?",
        "answer": "Igen, vállalom szerződések megszerkesztését, módosítását és ellenőrzését az Ön érdekeinek védelme érdekében."
      },
      {
        "question": "Vállal cégek számára jogi szolgáltatásokat is?",
        "answer": "Igen, vállalok cégek számára kereskedelmi szerződések készítését, jogi képviseletet és követelésbehajtást is."
      }
  ];
  
  const FAQItem: React.FC<{ faq: FAQ }> = ({ faq }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div className="bg-white rounded-xl shadow-sm mb-4 overflow-hidden hover:shadow-md transition-shadow">
        <button
          className="w-full px-6 py-5 flex justify-between items-center focus:outline-none group"
          onClick={() => setIsOpen(!isOpen)}
        >
          <h3 className="text-lg font-medium text-gray-900 text-left group-hover:text-indigo-800 transition-colors">
            {faq.question}
          </h3>
          <span 
            className={`ml-6 flex-shrink-0 transform transition-transform duration-300 ease-in-out ${
              isOpen ? 'rotate-90' : ''
            }`}
          >
            <ChevronRight className="w-6 h-6 text-indigo-600" />
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
    return (
      <section id='kérdések' className="py-16 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">Gyakran Ismételt Kérdések</h2>
            <p className="text-gray-600 text-center mb-12">
              Az alábbi kérdések és válaszok segíthetnek eligazodni a jogi szolgáltatásaimmal kapcsolatban
            </p>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <FAQItem key={index} faq={faq} />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default FAQSection;