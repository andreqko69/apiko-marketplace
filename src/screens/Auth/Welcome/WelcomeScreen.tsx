import React from 'react';
import { ImageBackground, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useStyles } from 'react-native-unistyles';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';

import stylesheet from '@screens/Auth/Welcome/WelcomeScreen.styles';
import ButtonPrimary from '@components/ButtonPrimary/ButtonPrimary';
import {
  ButtonSize,
  ButtonVariation,
} from '@components/ButtonPrimary/constants';
import WelcomeImage from '@assets/images/welcome.jpeg';
import ButtonLink from '@components/ButtonLink/ButtonLink';
import { ScreenName } from '@screens/constants';
import type { AuthStackParamList } from '@navigation/AuthNavigator/AuthNavigator.types';
import { useTranslation } from 'react-i18next';

type NavigationProps = StackNavigationProp<
  AuthStackParamList,
  ScreenName.Welcome
>;

const WelcomeScreen = () => {
  const { t } = useTranslation();
  const { styles } = useStyles(stylesheet);
  const { navigate } = useNavigation<NavigationProps>();

  const handleSignIn = () => {
    navigate(ScreenName.SignIn);
  };

  const handleCreateAccount = () => {
    navigate(ScreenName.SignUp);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={WelcomeImage} style={styles.imageBackground}>
        <LinearGradient
          colors={['#00000000', '#1c1717']}
          locations={[0, 0.75]}
          style={styles.linearGradient}>
          <View style={styles.contentWrapper}>
            <Text style={styles.title}>{t('welcome.title')}</Text>
            <Text style={styles.text}>{t('welcome.message')}</Text>
            <View style={styles.buttonContainer}>
              <ButtonPrimary
                onPress={handleSignIn}
                variation={ButtonVariation.Secondary}
                size={ButtonSize.Large}
                text={t('sign_in')}
              />
              <ButtonPrimary
                onPress={handleCreateAccount}
                variation={ButtonVariation.Primary}
                size={ButtonSize.Large}
                text={t('create_account')}
              />
            </View>
            <View style={styles.guestContainer}>
              <ButtonLink
                onPress={() => {
                  console.log('You are guest!');
                }}
                text={t('continue_as_guest')}
              />
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
