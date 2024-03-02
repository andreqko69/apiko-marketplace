import React, { useCallback, useState } from 'react';
import { Text, View } from 'react-native';
import { useStyles } from 'react-native-unistyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';

import InputText from '@components/InputText/InputText';
import ButtonPrimary from '@components/ButtonPrimary/ButtonPrimary';
import { InputType } from '@components/InputText/constants';
import type { AuthStackParamList } from '@navigation/AuthNavigator/AuthNavigator.types';
import { ScreenName } from '@screens/constants';
import stylesheet from './ResetPasswordScreen.styles';

type NavigationProps = StackNavigationProp<
  AuthStackParamList,
  ScreenName.ResetPassword
>;

const ResetPasswordScreen = () => {
  const { t } = useTranslation();
  const { styles } = useStyles(stylesheet);
  const { navigate } = useNavigation<NavigationProps>();
  const [email, setEmail] = useState('');

  const handleEmailChange = useCallback((text: string) => {
    setEmail(text);
  }, []);

  const handleSendEmailPress = async () => {
    await new Promise((resolve) =>
      setTimeout(() => {
        navigate(ScreenName.CreateNewPassword);
        resolve(email);
      }, 1000)
    );
  };

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <Text style={styles.text}>{t('resetPasswordMessage')}</Text>
      <View style={styles.inputContainer}>
        <InputText
          placeholder="Email"
          onTextChange={handleEmailChange}
          value={email}
          type={InputType.Email}
        />
      </View>
      <ButtonPrimary onPress={handleSendEmailPress} text={t('sendEmail')} />
    </SafeAreaView>
  );
};

export default ResetPasswordScreen;
