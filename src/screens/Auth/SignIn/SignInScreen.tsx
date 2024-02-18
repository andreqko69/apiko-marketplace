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
import stylesheet from './SignInScreen.styles';

const SignInScreen = () => {
  const { styles } = useStyles(stylesheet);
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

  const handleSignIn = async () => {
    await new Promise((resolve) =>
      setTimeout(() => {
        console.log('Input state:', inputState);
        resolve(inputState);
      }, 1000)
    );
  };

  const handleForgotPassword = () => {
    console.log('Forgot password');
  };

  const handleRegisterNow = () => {
    console.log('Forgot password');
  };

  const handleContinueAsGuest = () => {
    console.log('Continue as guest');
  };

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
              type={InputType.Password}
              errorMessage="Password is incorrect"
            />
          </View>
          <View style={styles.forgotPasswordContainer}>
            <ButtonLink onPress={handleForgotPassword} text="Forgot password" />
          </View>
          <ButtonPrimary
            onPress={handleSignIn}
            text="Sign in"
            variation={ButtonVariation.Primary}
            size={ButtonSize.Large}
          />
          <View style={styles.registerNowContainer}>
            <Text style={styles.registerNowText}>Not a member? </Text>
            <ButtonLink onPress={handleRegisterNow} text="Register now" />
          </View>
        </View>
        <View style={styles.guestContainer}>
          <ButtonLink
            onPress={handleContinueAsGuest}
            text="Continue as a guest"
            variation={ButtonVariation.Secondary}
          />
        </View>
      </CustomKeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignInScreen;
