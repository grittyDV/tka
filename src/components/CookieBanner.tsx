// components/CookieConsent.tsx
import { useState, useEffect } from 'react';
import { useTranslations } from '../context/TranslationContext';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { CookieManager } from '../utils/CookieManager';

export interface CookieConsent {
  essential: boolean;    // Always true
  analytics: boolean;    // Google Analytics
  preferences: boolean;  // UI preferences
  timestamp: number;     // When consent was given/updated
  version: string;       // Consent policy version
}

export const CookieConsentBanner = () => {
  const { t, lang } = useTranslations();
  const [showBanner, setShowBanner] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState<CookieConsent>({
    essential: true, // Always true
    analytics: true,
    preferences: true,
    timestamp: Date.now(),
    version: '1.0'
  });

  useEffect(() => {
    // Check if we need to show the banner
    const existingConsent = CookieManager.getConsent();
    const needsRenewal = CookieManager.needsRenewal();
    
    if (!existingConsent || needsRenewal) {
      setShowBanner(true);
    }
    
    if (existingConsent) {
      setPreferences(existingConsent);
    }
  }, []);

  const handleAcceptAll = () => {
    const newConsent: CookieConsent = {
      ...preferences,
      analytics: true,
      preferences: true,
      timestamp: Date.now()
    };
    CookieManager.setConsent(newConsent);
    setShowBanner(false);
  };

  const handleSavePreferences = () => {
    CookieManager.setConsent(preferences);
    setShowBanner(false);
  };

  const handleDeclineAll = () => {
    const newConsent: CookieConsent = {
      ...preferences,
      analytics: false,
      preferences: false,
      timestamp: Date.now()
    };
    CookieManager.setConsent(newConsent);
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 p-4 z-50">
      <div className="container mx-auto max-w-6xl">
        {/* Main Banner Content */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-2">{t.page.footer.cookies.title}</h3>
            <p className="text-sm text-gray-600 mb-2">
              {t.page.footer.cookies.consentMessage}{' '}
              <Link 
                to={`/${lang}/privacy-policy`} 
                className="text-[#597F70] hover:underline"
              >
                {t.page.footer.cookies.learnMore}
              </Link>
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="flex items-center px-4 py-2 text-sm text-gray-600 hover:text-gray-800"
            >
              {t.page.footer.cookies.settings}
              {showDetails ? <ChevronUp className="ml-1 w-4 h-4" /> : <ChevronDown className="ml-1 w-4 h-4" />}
            </button>
            <button
              onClick={handleDeclineAll}
              className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800"
            >
              {t.page.footer.cookies.decline}
            </button>
            <button
              onClick={handleAcceptAll}
              className="px-4 py-2 text-sm bg-[#597F70] text-white rounded-md hover:bg-[#436557]"
            >
              {t.page.footer.cookies.accept}
            </button>
          </div>
        </div>

        {/* Detailed Preferences */}
        {showDetails && (
          <div className="mt-4 border-t pt-4">
            <div className="space-y-4">
              {/* Essential Cookies */}
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-semibold">{t.page.footer.cookies.essential.title}</h4>
                  <p className="text-sm text-gray-600">{t.page.footer.cookies.essential.description}</p>
                </div>
                <input
                  type="checkbox"
                  checked={true}
                  disabled
                  className="h-4 w-4 text-[#597F70] border-gray-300 rounded"
                />
              </div>

              {/* Analytics Cookies */}
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-semibold">{t.page.footer.cookies.analytics.title}</h4>
                  <p className="text-sm text-gray-600">{t.page.footer.cookies.analytics.description}</p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                  className="h-4 w-4 text-[#597F70] border-gray-300 rounded"
                />
              </div>

              {/* Preferences Cookies */}
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-semibold">{t.page.footer.cookies.preferences.title}</h4>
                  <p className="text-sm text-gray-600">{t.page.footer.cookies.preferences.description}</p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.preferences}
                  onChange={(e) => setPreferences({ ...preferences, preferences: e.target.checked })}
                  className="h-4 w-4 text-[#597F70] border-gray-300 rounded"
                />
              </div>

              <div className="flex justify-end mt-4">
                <button
                  onClick={handleSavePreferences}
                  className="px-4 py-2 text-sm bg-[#597F70] text-white rounded-md hover:bg-[#436557]"
                >
                  {t.page.footer.cookies.save}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CookieConsentBanner;