import React, { useCallback, useState } from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useStyles } from 'react-native-unistyles';
import {
  type CompositeScreenProps,
  useNavigation,
} from '@react-navigation/native';
import type { StackScreenProps } from '@react-navigation/stack';

import stylesheet from './SignUpScreen.styles';
import InputText from '@components/InputText/InputText';
import ButtonLink from '@components/ButtonLink/ButtonLink';
import type { AuthStackParamList } from '@navigation/AuthNavigator/AuthNavigator.types';
import { ScreenName } from '@navigation/screens';
import ButtonPrimary from '@components/ButtonPrimary/ButtonPrimary';
import {
  ButtonSize,
  ButtonVariation,
} from '@components/ButtonPrimary/constants';
import { ModalName } from '@navigation/modals';
import type { RootStackParamList } from '@navigation/RootNavigator/RootNavigator.types';

type NavigationProps = CompositeScreenProps<
  StackScreenProps<AuthStackParamList, ScreenName.SignUp>,
  StackScreenProps<RootStackParamList>
>;

const SignupScreen = () => {
  const { styles } = useStyles(stylesheet);
  const { navigate, goBack } = useNavigation<NavigationProps['navigation']>();
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
        navigate(ModalName.MessageModal, {
          title: 'Success',
          message:
            'You have your account now. Check your email to confirm email address.',
          primaryButtonText: 'Ok',
          onPrimaryButtonPress: () => {
            // navigate(ScreenName.SignIn);
            goBack();
          },
        });
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
