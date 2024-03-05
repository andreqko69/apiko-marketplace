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
import type { RootStackParamList } from '@navigation/RootNavigator/RootNavigator.types';
import inputValidator from '@services/InputValidator';
import { InputType } from '@components/InputText/constants';

import stylesheet from './SignUpScreen.styles';
import { TranslationContext } from '../../../../i18n/constants';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';

type NavigationProps = CompositeScreenProps<
  StackScreenProps<AuthStackParamList, ScreenName.SignUp>,
  StackScreenProps<RootStackParamList>
>;

type FormInputState = {
  value: string;
  errorMessage?: string;
};

enum InputFieldName {
  FirstName = 'firstName',
  LastName = 'lastName',
  Email = 'email',
  Location = 'location',
  Password = 'password',
  ConfirmPassword = 'confirmPassword',
}

const defaultFormValue: FormInputState = {
  value: '',
};

const SignupScreen = () => {
  const { t } = useTranslation();
  const { styles } = useStyles(stylesheet);
  const { navigate } = useNavigation<NavigationProps['navigation']>();
  const [formState, setFormState] = useState({
    [InputFieldName.FirstName]: defaultFormValue,
    [InputFieldName.LastName]: defaultFormValue,
    [InputFieldName.Email]: defaultFormValue,
    [InputFieldName.Location]: defaultFormValue,
    [InputFieldName.Password]: defaultFormValue,
    [InputFieldName.ConfirmPassword]: defaultFormValue,
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
        translationParams: {
          context: TranslationContext.Male,
        },
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

  const validatePassword = useCallback(
    (value: string) => {
      return inputValidator.validatePassword({
        fieldName: t('password'),
        value,
        translationParams: {
          context: TranslationContext.Male,
        },
      });
    },
    [t]
  );

  const validateConfirmPassword = useCallback(
    (value: string) => {
      return inputValidator.validateLocation({
        fieldName: t('confirmPassword'),
        value,
        translationParams: {
          context: TranslationContext.Male,
        },
      });
    },
    [t]
  );

  const isSubmitDisabled = useMemo((): boolean => {
    const fieldNameToValidatorMap = {
      [InputFieldName.FirstName]: validateFirstName,
      [InputFieldName.LastName]: validateLastName,
      [InputFieldName.Email]: validateEmail,
      [InputFieldName.Location]: validateLocation,
      [InputFieldName.Password]: validatePassword,
      [InputFieldName.ConfirmPassword]: validateConfirmPassword,
    };

    return Object.entries(fieldNameToValidatorMap).some(
      ([fieldName, validator]) => {
        const value = formState[fieldName as InputFieldName].value;
        const { isValid } = validator(value);

        return !isValid;
      }
    );
  }, [
    formState,
    validateFirstName,
    validateLastName,
    validateEmail,
    validateLocation,
    validatePassword,
    validateConfirmPassword,
  ]);

  const handleFirstNameChange = useCallback(
    (newValue: string) => {
      const { errorMessage } = validateFirstName(newValue);

      setFormState((prevState) => ({
        ...prevState,
        [InputFieldName.FirstName]: { value: newValue, errorMessage },
      }));
    },
    [validateFirstName]
  );

  const handleLastNameChange = useCallback(
    (newValue: string) => {
      const { errorMessage } = validateLastName(newValue);

      setFormState((prevState) => ({
        ...prevState,
        [InputFieldName.LastName]: { value: newValue, errorMessage },
      }));
    },
    [validateLastName]
  );

  const handleEmailChange = useCallback(
    (newValue: string) => {
      const { errorMessage } = validateEmail(newValue);

      setFormState((prevState) => ({
        ...prevState,
        [InputFieldName.Email]: { value: newValue, errorMessage },
      }));
    },
    [validateEmail]
  );

  const handleLocationChange = useCallback(
    (newValue: string) => {
      const { errorMessage } = validateLocation(newValue);

      setFormState((prevState) => ({
        ...prevState,
        [InputFieldName.Location]: { value: newValue, errorMessage },
      }));
    },
    [validateLocation]
  );

  const handlePasswordChange = useCallback(
    (newValue: string) => {
      const { errorMessage } = validatePassword(newValue);

      setFormState((prevState) => ({
        ...prevState,
        [InputFieldName.Password]: { value: newValue, errorMessage },
      }));
    },
    [validatePassword]
  );

  const handleConfirmPasswordChange = useCallback(
    (newValue: string) => {
      const errorMessage =
        newValue !== formState.password.value
          ? t('errorMessages.passwordsDoNotMatch')
          : '';

      setFormState((prevState) => ({
        ...prevState,
        [InputFieldName.ConfirmPassword]: { value: newValue, errorMessage },
      }));
    },
    [formState.password.value, t]
  );

  const handleSignInPress = () => {
    navigate(ScreenName.SignIn);
  };

  const handleSignUpPress = async () => {};

  const { firstName, lastName, email, location, password, confirmPassword } =
    formState;

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <KeyboardAwareScrollView style={styles.scrollContainer}>
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
          <InputText
            placeholder={t('password')}
            value={password.value}
            errorMessage={password.errorMessage}
            onTextChange={handlePasswordChange}
            type={InputType.Password}
          />
          <InputText
            placeholder={t('confirmPassword')}
            value={confirmPassword.value}
            errorMessage={confirmPassword.errorMessage}
            onTextChange={handleConfirmPasswordChange}
            type={InputType.Password}
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
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default SignupScreen;
