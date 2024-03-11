import React, { StrictMode } from 'react';

import RootNavigator from '@navigation/RootNavigator/RootNavigator';
import useGlobalSubscriptions from 'hooks/useGlobalSubscriptions';
import useInitialSetup from 'hooks/useInitialSetup';

function App(): React.JSX.Element {
  useInitialSetup();
  useGlobalSubscriptions();

  return (
    <StrictMode>
      <RootNavigator />
    </StrictMode>
  );
}

export default App;
