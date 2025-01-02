import Website from './pages/Website';
import { TranslationProvider } from './context/TranslationContext';

function App() {

  const pathname = window.location.pathname;
  const hostname = window.location.hostname;

  const shouldDefaultToRomanian = hostname.includes('avocat') || pathname.startsWith('/ro');
  const lang = shouldDefaultToRomanian ? 'ro' : pathname.startsWith('/en') ? 'en' : 'hu';

  return (
    <TranslationProvider lang={lang}>
      <div className="App">
        <Website />
      </div>
    </TranslationProvider>
  );
}

export default App;