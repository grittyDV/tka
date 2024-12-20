import React from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/config';
import Website from './components/Website';

const App: React.FC = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <Website />
    </I18nextProvider>
  );
};

export default App;