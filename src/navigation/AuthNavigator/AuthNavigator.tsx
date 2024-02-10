import { createStackNavigator } from '@react-navigation/stack';

import { ScreenName } from '../screens';
import LoginScreen from '../../screens/Auth/Login/LoginScreen';
import SignupScreen from '../../screens/Auth/Signup/SignupScreen';
import WelcomeScreen from '../../screens/Auth/Welcome/WelcomeScreen';
import { AuthStackParamList } from './AuthNavigator.types';

const Stack = createStackNavigator<AuthStackParamList>();

const AuthNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
    initialRouteName={ScreenName.Welcome}
  >
    <Stack.Screen name={ScreenName.Welcome} component={WelcomeScreen} />
    <Stack.Screen name={ScreenName.Login} component={LoginScreen} />
    <Stack.Screen name={ScreenName.Signup} component={SignupScreen} />
  </Stack.Navigator>
);

export default AuthNavigator;
