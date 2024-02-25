import React from 'react';
import BootSplash from 'react-native-bootsplash';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import useStore from '@stores/useStore';
import AuthNavigator from '../AuthNavigator/AuthNavigator';
import AppNavigator from '../AppNavigator/AppNavigator';
import { ScreenName } from '@screens/constants';
import { ModalName } from '@modals/constants';
import MessageModal from '@modals/MessageModal/MessageModal';
import type { RootStackParamList } from './RootNavigator.types';

const Stack = createStackNavigator<RootStackParamList>();

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
            gestureEnabled: false,
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
          <Stack.Group screenOptions={{ presentation: 'transparentModal' }}>
            <Stack.Screen
              name={ModalName.MessageModal}
              component={MessageModal}
            />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default RootNavigator;
