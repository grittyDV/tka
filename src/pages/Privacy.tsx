import { useEffect } from 'react';
import { useTranslations } from '../context/TranslationContext';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

export const PrivacyPolicy = () => {
  const { t, lang } = useTranslations();

  // Scroll to top on mount
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0; // For Safari
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Fixed header with close button */}
      <div className="fixed top-0 left-0 right-0 h-24 bg-gray-50 z-10">
        <div className="container mx-auto px-4 max-w-4xl relative h-full flex items-center justify-end">
          <Link 
            to={`/${lang}`} 
            className="bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-shadow"
            aria-label="Close"
          >
            <X className="w-6 h-6 text-gray-600" />
          </Link>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 max-w-4xl pt-24">
        <h1 className="text-3xl font-bold mb-8">{t.page.footer.privacy.title}</h1>
        <p className="text-gray-600 mb-8">{t.page.footer.privacy.lastUpdated}</p>
        
        <div className="space-y-8">
          {/* Data Collection */}
          <section className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-xl font-semibold mb-4">
              {t.page.footer.privacy.dataCollection.title}
            </h2>
            <p className="text-gray-600">
              {t.page.footer.privacy.dataCollection.content}
            </p>
          </section>

          {/* Cookie Usage */}
          <section className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-xl font-semibold mb-4">
              {t.page.footer.privacy.cookies.title}
            </h2>
            <p className="text-gray-600">
              {t.page.footer.privacy.cookies.content}
            </p>
          </section>

          {/* Data Usage */}
          <section className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-xl font-semibold mb-4">
              {t.page.footer.privacy.dataUsage.title}
            </h2>
            <p className="text-gray-600">
              {t.page.footer.privacy.dataUsage.content}
            </p>
          </section>

          {/* GDPR Rights */}
          <section className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-xl font-semibold mb-4">
              {t.page.footer.privacy.gdprRights.title}
            </h2>
            <p className="text-gray-600">
              {t.page.footer.privacy.gdprRights.content}
            </p>
          </section>

          {/* Data Security */}
          <section className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-xl font-semibold mb-4">
              {t.page.footer.privacy.dataSecurity.title}
            </h2>
            <p className="text-gray-600">
              {t.page.footer.privacy.dataSecurity.content}
            </p>
          </section>

          {/* Data Retention */}
          <section className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-xl font-semibold mb-4">
              {t.page.footer.privacy.retention.title}
            </h2>
            <p className="text-gray-600">
              {t.page.footer.privacy.retention.content}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;