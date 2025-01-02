import { useTranslations } from '../context/TranslationContext';

const AboutSection = () => {
  const { t } = useTranslations();
  
  return (
    <section id="about" className="py-16 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">{t.about.title}</h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-600">
              {t.about.paragraphs.map((paragraph, index) => (
                <p key={index} className="mb-6 text-lg">
                  {paragraph}
                </p>
              ))}
              <p className="text-lg font-extrabold text-[#597F70]">
                {t.about.closing}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;