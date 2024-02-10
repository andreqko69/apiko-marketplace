import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { ScreenName } from '../screens';
import HomeNavigator from '../HomeNavigator/HomeNavigator';

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    initialRouteName={ScreenName.HomeNavigator}
    screenOptions={{
      headerShown: false,
    }}>
    <Tab.Screen name={ScreenName.HomeNavigator} component={HomeNavigator} />
  </Tab.Navigator>
);

export default TabNavigator;
