// components/CookieConsent.tsx
import { useState, useEffect } from 'react';
import { useTranslations } from '../context/TranslationContext';

export const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const { t } = useTranslations();

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 p-4 z-50">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-600">
          {t.page.footer.cookies.consentMessage}
          <a href="/privacy-policy" className="text-[#597F70] hover:underline ml-1">
            {t.page.footer.cookies.learnMore}
          </a>
        </div>
        <div className="flex gap-3">
          <button
            onClick={declineCookies}
            className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800"
          >
            {t.page.footer.cookies.decline}
          </button>
          <button
            onClick={acceptCookies}
            className="px-4 py-2 text-sm bg-[#597F70] text-white rounded-md hover:bg-[#436557]"
          >
            {t.page.footer.cookies.accept}
          </button>
        </div>
      </div>
    </div>
  );
};