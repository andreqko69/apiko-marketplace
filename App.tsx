import React, { StrictMode } from 'react';

import RootNavigator from '@navigation/RootNavigator/RootNavigator';
import './setup';

function App(): React.JSX.Element {
  return (
    <StrictMode>
      <RootNavigator />
    </StrictMode>
  );
}

export default App;
