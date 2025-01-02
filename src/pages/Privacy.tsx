// pages/PrivacyPolicy.tsx
import { useTranslations } from '../context/TranslationContext';

export const PrivacyPolicy = () => {
  const { t } = useTranslations();

  return (
    <div className="min-h-screen bg-gray-50 py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8">{t.page.footer.privacy.title}</h1>
        
        <section className="bg-white rounded-lg shadow-sm p-8 space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-4">{t.page.footer.privacy.dataCollection.title}</h2>
            <p className="text-gray-600">{t.page.footer.privacy.dataCollection.content}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">{t.page.footer.privacy.cookies.title}</h2>
            <p className="text-gray-600">{t.page.footer.privacy.cookies.content}</p>
          </div>

          {/* Add more sections as needed */}
        </section>
      </div>
    </div>
  );
};