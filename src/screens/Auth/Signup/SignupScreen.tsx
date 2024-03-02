import React, { useCallback, useMemo, useState } from 'react';
import { Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useStyles } from 'react-native-unistyles';
import {
  type CompositeScreenProps,
  useNavigation,
} from '@react-navigation/native';
import type { StackScreenProps } from '@react-navigation/stack';

import InputText from '@components/InputText/InputText';
import ButtonLink from '@components/ButtonLink/ButtonLink';
import type { AuthStackParamList } from '@navigation/AuthNavigator/AuthNavigator.types';
import { ScreenName } from '@screens/constants';
import ButtonPrimary from '@components/ButtonPrimary/ButtonPrimary';
import {
  ButtonSize,
  ButtonVariation,
} from '@components/ButtonPrimary/constants';
import { ModalName } from '@modals/constants';
import type { RootStackParamList } from '@navigation/RootNavigator/RootNavigator.types';
import inputValidator from '@services/InputValidator';
import { InputType } from '@components/InputText/constants';

import stylesheet from './SignUpScreen.styles';
import { TranslationContext } from '../../../../i18n/constants';

type NavigationProps = CompositeScreenProps<
  StackScreenProps<AuthStackParamList, ScreenName.SignUp>,
  StackScreenProps<RootStackParamList>
>;

type FormInputState = {
  value: string;
  errorMessage?: string;
};

const defaultFormValue: FormInputState = {
  value: '',
};

const SignupScreen = () => {
  const { t } = useTranslation();
  const { styles } = useStyles(stylesheet);
  const { navigate } = useNavigation<NavigationProps['navigation']>();
  const [formState, setFormState] = useState({
    firstName: defaultFormValue,
    lastName: defaultFormValue,
    email: defaultFormValue,
    location: defaultFormValue,
  });

  const validateFirstName = useCallback(
    (value: string) => {
      return inputValidator.validateName({
        fieldName: t('firstName'),
        value,
        isRequired: true,
      });
    },
    [t]
  );

  const validateLastName = useCallback(
    (value: string) => {
      return inputValidator.validateName({
        fieldName: t('lastName'),
        value,
        isRequired: true,
      });
    },
    [t]
  );

  const validateEmail = useCallback(
    (value: string) => {
      return inputValidator.validateEmail({
        fieldName: t('email'),
        value,
        isRequired: true,
      });
    },
    [t]
  );

  const validateLocation = useCallback(
    (value: string) => {
      return inputValidator.validateLocation({
        fieldName: t('location'),
        value,
        translationParams: {
          context: TranslationContext.Female,
        },
      });
    },
    [t]
  );

  const validateValues = useCallback((): boolean => {
    const { isValid: isFirstNameValid } = validateFirstName(
      formState.firstName.value
    );
    const { isValid: isLastNameValid } = validateLastName(
      formState.lastName.value
    );
    const { isValid: isEmailNameValid } = validateEmail(formState.email.value);
    const { isValid: isLocationValid } = validateLocation(
      formState.location.value
    );

    return (
      isFirstNameValid && isLastNameValid && isEmailNameValid && isLocationValid
    );
  }, [
    formState.email.value,
    formState.firstName.value,
    formState.lastName.value,
    formState.location.value,
    validateEmail,
    validateFirstName,
    validateLastName,
    validateLocation,
  ]);

  const isSubmitDisabled = useMemo(() => !validateValues(), [validateValues]);

  const handleFirstNameChange = useCallback(
    (newValue: string) => {
      const { errorMessage } = validateFirstName(newValue);

      setFormState((prevState) => ({
        ...prevState,
        firstName: { value: newValue, errorMessage },
      }));
    },
    [validateFirstName]
  );

  const handleLastNameChange = useCallback(
    (newValue: string) => {
      const { errorMessage } = validateLastName(newValue);

      setFormState((prevState) => ({
        ...prevState,
        lastName: { value: newValue, errorMessage },
      }));
    },
    [validateLastName]
  );

  const handleEmailChange = useCallback(
    (newValue: string) => {
      const { errorMessage } = validateEmail(newValue);

      setFormState((prevState) => ({
        ...prevState,
        email: { value: newValue, errorMessage },
      }));
    },
    [validateEmail]
  );

  const handleLocationChange = useCallback(
    (newValue: string) => {
      const { errorMessage } = validateLocation(newValue);

      setFormState((prevState) => ({
        ...prevState,
        location: { value: newValue, errorMessage },
      }));
    },
    [validateLocation]
  );

  const handleSignInPress = () => {
    navigate(ScreenName.SignIn);
  };

  const handleSignUpPress = async () => {
    await new Promise((resolve) =>
      setTimeout(() => {
        navigate(ModalName.MessageModal, {
          title: 'Success',
          message:
            'You have your account now.\n Check your email to confirm email address.',
          primaryButtonText: 'Ok',
          onPrimaryButtonPress: () => navigate(ScreenName.Welcome),
        });
        resolve(formState);
      }, 1000)
    );
  };

  const { firstName, lastName, email, location } = formState;

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <View style={styles.inputContainer}>
        <InputText
          placeholder={t('firstName')}
          value={firstName.value}
          errorMessage={firstName.errorMessage}
          onTextChange={handleFirstNameChange}
        />
        <InputText
          placeholder={t('lastName')}
          value={lastName.value}
          errorMessage={lastName.errorMessage}
          onTextChange={handleLastNameChange}
        />
        <InputText
          placeholder={t('email')}
          value={email.value}
          errorMessage={email.errorMessage}
          onTextChange={handleEmailChange}
          type={InputType.Email}
        />
        <InputText
          placeholder={t('chooseLocation')}
          value={location.value}
          errorMessage={location.errorMessage}
          onTextChange={handleLocationChange}
        />
      </View>
      <ButtonPrimary
        disabled={isSubmitDisabled}
        onPress={handleSignUpPress}
        text={t('signUp')}
        variation={ButtonVariation.Primary}
        size={ButtonSize.Large}
      />
      <View style={styles.signInContainer}>
        <Text style={styles.signInText}>{t('alreadyHaveAccount')}</Text>
        <ButtonLink onPress={handleSignInPress} text={t('signIn')} />
      </View>
    </SafeAreaView>
  );
};

export default SignupScreen;
