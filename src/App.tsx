// App.tsx
import Website from './pages/Website';
import { TranslationProvider } from './context/TranslationContext';
import { ErrorBoundary } from './components/ErrorBoundary';
import { CookieConsent } from './components/Cookie';

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

  console.log('Current language:', lang); // Debug log

  return (
    <ErrorBoundary>
      <TranslationProvider lang={lang}>
        <div className="App">
          <Website />
          <CookieConsent/>
        </div>
      </TranslationProvider>
    </ErrorBoundary>
  );
}

export default App;