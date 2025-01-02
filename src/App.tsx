import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Website from './pages/Website';
import PrivacyPolicy from './pages/Privacy';
import { TranslationProvider } from './context/TranslationContext';
import { ErrorBoundary } from './components/ErrorBoundary';
import { CookieConsentBanner } from './components/CookieConsent';
import { useAnalytics } from './hooks/useAnalytics';


function App() {
  // Get current path and determine language
  const pathname = window.location.pathname;
  const hostname = window.location.hostname;

  // Determine language with more explicit checks
  const getLang = () => {
    // Check URL path first
    if (pathname.startsWith('/ro')) return 'ro';
    if (pathname.startsWith('/en')) return 'en';
    if (pathname.startsWith('/hu')) return 'hu';

    // If no path language, check hostname
    if (hostname.includes('avocat')) return 'ro';

    // Default to Hungarian
    return 'hu';
  };

  const lang = getLang();
  
  const { trackEvent } = useAnalytics(); 
  trackEvent('visit', {
    pageName: 'home',
    language: getLang()
  });

  return (
    <ErrorBoundary>
      <TranslationProvider lang={lang}>
        <Router>
          <div className="App">
            <Routes>
              <Route path="/" element={<Website />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              {/* Language-specific routes */}
              <Route path="/hu/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/en/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/ro/privacy-policy" element={<PrivacyPolicy />} />
              {/* Main routes with language prefixes */}
              <Route path="/hu" element={<Website />} />
              <Route path="/en" element={<Website />} />
              <Route path="/ro" element={<Website />} />
            </Routes>
            <CookieConsentBanner />
          </div>
        </Router>
      </TranslationProvider>
    </ErrorBoundary>
  );
}

export default App;