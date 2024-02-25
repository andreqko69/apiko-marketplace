import React from 'react';
import { useStyles } from 'react-native-unistyles';
import { createStackNavigator } from '@react-navigation/stack';

import SignInScreen from '@screens/Auth/SignIn/SignInScreen';
import SignupScreen from '@screens/Auth/Signup/SignupScreen';
import WelcomeScreen from '@screens/Auth/Welcome/WelcomeScreen';
import HeaderLeft from '@components/HeaderLeft/HeaderLeft';
import stylesheet from './AuthNavigator.styles';
import { ScreenName } from '@screens/constants';
import { AuthStackParamList } from './AuthNavigator.types';
import ResetPasswordScreen from '@screens/Auth/ResetPassword/ResetPasswordScreen';
import CreateNewPasswordScreen from '@screens/Auth/CreateNewPassword/CreateNewPasswordScreen';

const Stack = createStackNavigator<AuthStackParamList>();

const AuthNavigator = () => {
  const { styles } = useStyles(stylesheet);

  return (
    <Stack.Navigator
      initialRouteName={ScreenName.Welcome}
      screenOptions={{
        headerTitleStyle: styles.title,
        headerStyle: styles.header,
        headerTitleAlign: 'center',
        headerLeftContainerStyle: styles.headerLeft,
        headerRightContainerStyle: styles.headerRight,
        headerLeft: HeaderLeft,
      }}>
      <Stack.Screen
        options={{ headerShown: false }}
        name={ScreenName.Welcome}
        component={WelcomeScreen}
      />
      <Stack.Screen
        options={{
          headerShown: true,
        }}
        name={ScreenName.SignIn}
        component={SignInScreen}
      />
      <Stack.Screen name={ScreenName.SignUp} component={SignupScreen} />
      <Stack.Screen
        name={ScreenName.ResetPassword}
        component={ResetPasswordScreen}
      />
      <Stack.Screen
        name={ScreenName.CreateNewPassword}
        component={CreateNewPasswordScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
