import React, { useCallback, useState } from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useStyles } from 'react-native-unistyles';

import stylesheet from './SignUpScreen.styles';
import InputText from '@components/InputText/InputText';
import ButtonLink from '@components/ButtonLink/ButtonLink';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import type { AuthStackParamList } from '@navigation/AuthNavigator/AuthNavigator.types';
import { ScreenName } from '@navigation/screens';
import ButtonPrimary from '@components/ButtonPrimary/ButtonPrimary';
import {
  ButtonSize,
  ButtonVariation,
} from '@components/ButtonPrimary/constants';
import { ModalName } from '@navigation/modals';

type NavigationProps = StackNavigationProp<
  AuthStackParamList,
  ScreenName.SignUp
>;

const SignupScreen = () => {
  const { styles } = useStyles(stylesheet);
  const { navigate } = useNavigation<NavigationProps>();
  const [inputState, setInputState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    location: '',
  });

  const handleFirstNameChange = useCallback((text: string) => {
    setInputState((prevState) => ({ ...prevState, email: text }));
  }, []);

  const handleLastNameChange = useCallback((text: string) => {
    setInputState((prevState) => ({ ...prevState, password: text }));
  }, []);

  const handleEmailChange = useCallback((text: string) => {
    setInputState((prevState) => ({ ...prevState, email: text }));
  }, []);

  const handleLocationChange = useCallback((text: string) => {
    setInputState((prevState) => ({ ...prevState, password: text }));
  }, []);

  const handleSignInPress = () => {
    navigate(ScreenName.SignIn);
  };

  const handleSignUpPress = async () => {
    await new Promise((resolve) =>
      setTimeout(() => {
        navigate(ModalName.MessageModal, { text: 'test' });
        resolve(inputState);
      }, 1000)
    );
  };

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <View style={styles.inputContainer}>
        <InputText
          value={inputState.firstName}
          placeholder="First name"
          onTextChange={handleFirstNameChange}
        />
        <InputText
          value={inputState.lastName}
          placeholder="Last name"
          onTextChange={handleLastNameChange}
        />
        <InputText
          value={inputState.email}
          placeholder="Email"
          onTextChange={handleEmailChange}
        />
        <InputText
          value={inputState.location}
          placeholder="Location"
          onTextChange={handleLocationChange}
        />
      </View>
      <ButtonPrimary
        onPress={handleSignUpPress}
        text="Sign up"
        variation={ButtonVariation.Primary}
        size={ButtonSize.Large}
      />
      <View style={styles.signInContainer}>
        <Text style={styles.signInText}>Already got an account?</Text>
        <ButtonLink onPress={handleSignInPress} text="Sign in" />
      </View>
    </SafeAreaView>
  );
};

export default SignupScreen;
