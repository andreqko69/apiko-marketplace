import React, { useCallback, useState } from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useStyles } from 'react-native-unistyles';

import InputText from '@components/InputText/InputText';
import stylesheet from './SignInScreen.styles';
import ButtonPrimary from '@components/ButtonPrimary/ButtonPrimary';
import {
  ButtonSize,
  ButtonVariation,
} from '@components/ButtonPrimary/constants';
import ButtonLink from '@components/ButtonLink/ButtonLink';

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
      <View>
        <View style={styles.inputContainer}>
          <InputText
            placeholder="Email"
            value={inputState.email}
            onTextChange={handleEmailChange}
          />
          <InputText
            placeholder="Password"
            value={inputState.password}
            onTextChange={handlePasswordChange}
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
    </SafeAreaView>
  );
};

export default SignInScreen;
