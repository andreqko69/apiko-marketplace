import React, { useCallback, useState } from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useStyles } from 'react-native-unistyles';
import { useTranslation } from 'react-i18next';
import {
  type CompositeScreenProps,
  useNavigation,
} from '@react-navigation/native';
import type { StackScreenProps } from '@react-navigation/stack';

import {
  ButtonSize,
  ButtonVariation,
} from '@components/ButtonPrimary/constants';
import InputText from '@components/InputText/InputText';
import ButtonLink from '@components/ButtonLink/ButtonLink';
import { InputType } from '@components/InputText/constants';
import ButtonPrimary from '@components/ButtonPrimary/ButtonPrimary';
import { IconName } from '@components/Icon/Icon';
import { ScreenName } from '@screens/constants';
import type { AuthStackParamList } from '@navigation/AuthNavigator/AuthNavigator.types';
import CustomKeyboardAvoidingView from '@components/CustomKeyboardAvoidingView/CustomKeyboardAvoidingView';
import stylesheet from './SignInScreen.styles';
import supabase from '@lib/supabase';
import { ModalName } from '@modals/constants';
import { getTranslatedSupabaseErrorMessage } from '@lib/supabase/helpers';
import type { RootStackParamList } from '@navigation/RootNavigator/RootNavigator.types';

type NavigationProps = CompositeScreenProps<
  StackScreenProps<AuthStackParamList, ScreenName.SignIn>,
  StackScreenProps<RootStackParamList>
>;

const SignInScreen = () => {
  const { t } = useTranslation();
  const { styles } = useStyles(stylesheet);
  const { navigate } = useNavigation<NavigationProps['navigation']>();

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
    const { error } = await supabase.auth.signInWithPassword({
      email: inputState.email,
      password: inputState.password,
    });

    if (error) {
      navigate(ModalName.MessageModal, {
        title: t('errorMessages.oops'),
        message: getTranslatedSupabaseErrorMessage(error.message),
        primaryButtonText: t('ok'),
        onPrimaryButtonPress: () => {
          navigate(ScreenName.SignIn);
        },
      });
    }
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
      <CustomKeyboardAvoidingView style={styles.content}>
        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <InputText
              placeholder={t('email')}
              value={inputState.email}
              onTextChange={handleEmailChange}
              type={InputType.Email}
            />
            <InputText
              placeholder={t('password')}
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
              text={t('forgotPassword')}
            />
          </View>
          <ButtonPrimary
            onPress={handleSignIn}
            text={t('signIn')}
            variation={ButtonVariation.Primary}
            size={ButtonSize.Large}
          />
          <View style={styles.registerNowContainer}>
            <Text style={styles.registerNowText}>{t('notMember')} </Text>
            <ButtonLink
              onPress={handleRegisterNowPress}
              text={t('registerNow')}
            />
          </View>
        </View>
        <View style={styles.guestContainer}>
          <ButtonLink
            onPress={handleContinueAsGuest}
            text={t('continueAsGuest')}
          />
        </View>
      </CustomKeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignInScreen;
