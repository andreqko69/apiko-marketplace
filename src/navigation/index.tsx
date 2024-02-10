import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import AuthNavigator from './AuthNavigator/AuthNavigator';
import AppNavigator from './AppNavigator/AppNavigator';
import useStore from '@stores/useStore.ts';
import { ScreenName } from './screens';

const Stack = createStackNavigator();

const RootNavigator = () => {
  const store = useStore();
  const isAuthenticated = store.use.isAuthenticated();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {isAuthenticated ? (
          <Stack.Screen
            name={ScreenName.AppNavigator}
            component={AppNavigator}
          />
        ) : (
          <Stack.Screen
            name={ScreenName.AuthNavigator}
            component={AuthNavigator}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
