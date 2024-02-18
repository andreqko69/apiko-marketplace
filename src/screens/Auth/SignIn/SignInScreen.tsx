import React, { useCallback, useState } from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useStyles } from 'react-native-unistyles';

import {
  ButtonSize,
  ButtonVariation,
} from '@components/ButtonPrimary/constants';
import InputText from '@components/InputText/InputText';
import ButtonLink from '@components/ButtonLink/ButtonLink';
import { InputType } from '@components/InputText/constants';
import ButtonPrimary from '@components/ButtonPrimary/ButtonPrimary';
import CustomKeyboardAvoidingView from '@components/CustomKeyboardAvoidingView/CustomKeyboardAvoidingView';
import { IconName } from '@components/Icon/Icon';
import { useNavigation } from '@react-navigation/native';
import { ScreenName } from '@navigation/screens';
import type { StackNavigationProp } from '@react-navigation/stack';
import type { AuthStackParamList } from '@navigation/AuthNavigator/AuthNavigator.types';
import stylesheet from './SignInScreen.styles';

type NavigationProps = StackNavigationProp<
  AuthStackParamList,
  ScreenName.SignIn
>;

const SignInScreen = () => {
  const { navigate } = useNavigation<NavigationProps>();
  const { styles } = useStyles(stylesheet);
  const [passwordInputType, setPasswordInputType] = useState(
    InputType.Password
  );
  const [inputState, setInputState] = useState({
    email: '',
    password: '',
  });

  const handleEmailChange = useCallback((text: string) => {
    setInputState((prevState) => ({ ...prevState, email: text }));
  }, []);

  const handlePasswordChange = useCallback((text: string) => {
    setInputState((prevState) => ({ ...prevState, password: text }));
  }, []);

  const handlePasswordInputIconPress = useCallback(() => {
    setPasswordInputType((prevType) =>
      prevType === InputType.Password ? InputType.Text : InputType.Password
    );
  }, []);

  const handleSignIn = async () => {
    await new Promise((resolve) =>
      setTimeout(() => {
        console.log('Input state:', inputState);
        resolve(inputState);
      }, 1000)
    );
  };

  const handleForgotPasswordPress = () => {
    navigate(ScreenName.ResetPassword);
  };

  const handleRegisterNowPress = () => {
    navigate(ScreenName.SignUp);
  };

  const handleContinueAsGuest = () => {
    console.log('Continue as guest');
  };

  const passwordIconName =
    passwordInputType === InputType.Password ? IconName.Eye : IconName.EyeOff;

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <CustomKeyboardAvoidingView style={styles.contentContainer}>
        <View>
          <View style={styles.inputContainer}>
            <InputText
              placeholder="Email"
              value={inputState.email}
              onTextChange={handleEmailChange}
              type={InputType.Email}
            />
            <InputText
              placeholder="Password"
              value={inputState.password}
              onTextChange={handlePasswordChange}
              type={passwordInputType}
              iconName={passwordIconName}
              onIconPress={handlePasswordInputIconPress}
            />
          </View>
          <View style={styles.forgotPasswordContainer}>
            <ButtonLink
              onPress={handleForgotPasswordPress}
              text="Forgot password"
            />
          </View>
          <ButtonPrimary
            onPress={handleSignIn}
            text="Sign in"
            variation={ButtonVariation.Primary}
            size={ButtonSize.Large}
          />
          <View style={styles.registerNowContainer}>
            <Text style={styles.registerNowText}>Not a member? </Text>
            <ButtonLink onPress={handleRegisterNowPress} text="Register now" />
          </View>
        </View>
        <View style={styles.guestContainer}>
          <ButtonLink
            onPress={handleContinueAsGuest}
            text="Continue as a guest"
          />
        </View>
      </CustomKeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignInScreen;
