import React from 'react';

import { Coin } from '~modules/Coins/Coin';
import { QueryProvider } from '~services/api';

function App() {
  return (
    <QueryProvider>
      <Coin />
    </QueryProvider>
  );
}

export default App;
