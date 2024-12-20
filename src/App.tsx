import React, { useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/config';
import Website from './components/Website';

const App = () => {
  useEffect(() => {
    // Initialize i18n
    if (!i18n.isInitialized) {
      i18n.init();
    }
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
      <Website />
    </I18nextProvider>
  );
};

export default App;