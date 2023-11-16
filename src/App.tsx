import React from 'react';

import { Coin } from '~modules/Coins/Coin';
import { QueryProvider } from '~services/api';
import { LocalizationProvider } from '~services/localization/AntLocalization';
import '~services/localization/i18n';
import { LanguageSwitcher } from '~components';

function App() {
  return (
    <QueryProvider>
      <LocalizationProvider>
        <LanguageSwitcher />
        <Coin />
      </LocalizationProvider>
    </QueryProvider>
  );
}

export default App;
