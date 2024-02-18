import React, { useCallback, useState } from 'react';
import { Text, View } from 'react-native';
import { useStyles } from 'react-native-unistyles';
import { SafeAreaView } from 'react-native-safe-area-context';

import InputText from '@components/InputText/InputText';
import ButtonPrimary from '@components/ButtonPrimary/ButtonPrimary';
import { InputType } from '@components/InputText/constants';
import { IconName } from '@components/Icon/Icon';
import stylesheet from './CreateNewPasswordScreen.styles';

const CreateNewPasswordScreen = () => {
  const { styles } = useStyles(stylesheet);
  const [passwordInputTypes, setPasswordInputType] = useState({
    passwordType: InputType.Password,
    confirmPasswordType: InputType.Password,
  });
  const [inputState, setInputState] = useState({
    password: '',
    confirmPassword: '',
  });

  const handlePasswordChange = useCallback((text: string) => {
    setInputState((prevState) => ({ ...prevState, password: text }));
  }, []);

  const handleConfirmPasswordChange = useCallback((text: string) => {
    setInputState((prevState) => ({ ...prevState, confirmPassword: text }));
  }, []);

  const handlePasswordInputIconPress = useCallback(() => {
    setPasswordInputType((prevState) => ({
      ...prevState,
      passwordType:
        prevState.passwordType === InputType.Password
          ? InputType.Text
          : InputType.Password,
    }));
  }, []);

  const handleConfirmPasswordInputIconPress = useCallback(() => {
    setPasswordInputType((prevState) => ({
      ...prevState,
      confirmPasswordType:
        prevState.confirmPasswordType === InputType.Password
          ? InputType.Text
          : InputType.Password,
    }));
  }, []);

  const handleConfirmNewPassword = async () => {
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve('');
      }, 1000)
    );
  };

  const passwordIconName =
    passwordInputTypes.passwordType === InputType.Password
      ? IconName.Eye
      : IconName.EyeOff;
  const confirmPasswordIconName =
    passwordInputTypes.confirmPasswordType === InputType.Password
      ? IconName.Eye
      : IconName.EyeOff;

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <Text style={styles.text}>
        Your new password should include 8-20 characters long and include a
        number and no spaces.
      </Text>
      <View style={styles.inputContainer}>
        <InputText
          placeholder="Password"
          value={inputState.password}
          onTextChange={handlePasswordChange}
          type={passwordInputTypes.passwordType}
          iconName={passwordIconName}
          onIconPress={handlePasswordInputIconPress}
        />
        <InputText
          placeholder="Confirm password"
          value={inputState.confirmPassword}
          onTextChange={handleConfirmPasswordChange}
          type={passwordInputTypes.confirmPasswordType}
          iconName={confirmPasswordIconName}
          onIconPress={handleConfirmPasswordInputIconPress}
        />
      </View>
      <ButtonPrimary
        onPress={handleConfirmNewPassword}
        text="Confirm new password"
      />
    </SafeAreaView>
  );
};

export default CreateNewPasswordScreen;
