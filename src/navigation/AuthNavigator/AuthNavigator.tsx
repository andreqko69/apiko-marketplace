import React from 'react';
import { useTranslation } from 'react-i18next';
import { useStyles } from 'react-native-unistyles';
import { createStackNavigator } from '@react-navigation/stack';

import SignInScreen from '@screens/Auth/SignIn/SignInScreen';
import SignupScreen from '@screens/Auth/Signup/SignupScreen';
import WelcomeScreen from '@screens/Auth/Welcome/WelcomeScreen';
import HeaderLeft from '@components/HeaderLeft/HeaderLeft';
import ResetPasswordScreen from '@screens/Auth/ResetPassword/ResetPasswordScreen';
import CreateNewPasswordScreen from '@screens/Auth/CreateNewPassword/CreateNewPasswordScreen';
import { ScreenName } from '@screens/constants';

import { AuthStackParamList } from './AuthNavigator.types';
import stylesheet from './AuthNavigator.styles';

const Stack = createStackNavigator<AuthStackParamList>();

const AuthNavigator = () => {
  const { t } = useTranslation();
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
          title: t('signIn'),
        }}
        name={ScreenName.SignIn}
        component={SignInScreen}
      />
      <Stack.Screen
        options={{
          title: t('createAccount'),
        }}
        name={ScreenName.SignUp}
        component={SignupScreen}
      />
      <Stack.Screen
        options={{
          title: t('resetPassword'),
        }}
        name={ScreenName.ResetPassword}
        component={ResetPasswordScreen}
      />
      <Stack.Screen
        options={{
          title: t('createNewPassword'),
        }}
        name={ScreenName.CreateNewPassword}
        component={CreateNewPasswordScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
