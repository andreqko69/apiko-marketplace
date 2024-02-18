import React from 'react';
import BootSplash from 'react-native-bootsplash';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import AuthNavigator from '@navigation/AuthNavigator/AuthNavigator';
import AppNavigator from '@navigation/AppNavigator/AppNavigator';
import useStore from '@stores/useStore';
import { ScreenName } from '@navigation/screens';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Stack = createStackNavigator();

const RootNavigator = () => {
  const store = useStore();
  const isAuthenticated = store.use.isAuthenticated();

  return (
    <SafeAreaProvider>
      <NavigationContainer
        onReady={() => {
          setTimeout(() => {
            BootSplash.hide({ fade: true });
          }, 2000);
        }}>
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
    </SafeAreaProvider>
  );
};

export default RootNavigator;
