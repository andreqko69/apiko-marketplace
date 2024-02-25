import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeStackParamList } from './HomeNavigator.types';
import HomeScreen from '../../screens/App/Home/HomeScreen';
import { ScreenName } from '@screens/constants';

const Stack = createStackNavigator<HomeStackParamList>();

const HomeNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name={ScreenName.Home} component={HomeScreen} />
  </Stack.Navigator>
);

export default HomeNavigator;
