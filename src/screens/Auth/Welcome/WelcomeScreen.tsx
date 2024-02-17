import React from 'react';
import { ImageBackground, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useStyles } from 'react-native-unistyles';

import stylesheet from '@screens/Auth/Welcome/WelcomeScreen.styles';
import ButtonPrimary from '@components/ButtonPrimary/ButtonPrimary';
import {
  ButtonSize,
  ButtonVariation,
} from '@components/ButtonPrimary/constants.ts';
import WelcomeImage from '@assets/images/welcome.jpeg';
import ButtonLink from 'components/ButtonLink/ButtonLink.tsx';

const WelcomeScreen = () => {
  const { styles } = useStyles(stylesheet);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        imageStyle={{ resizeMode: 'cover' }}
        source={WelcomeImage}
        style={styles.imageBackground}>
        <LinearGradient
          colors={['#00000000', '#1c1717']}
          locations={[0, 0.75]}
          style={styles.linearGradient}>
          <View style={styles.contentWrapper}>
            <Text style={styles.title}>Hey! Welcome</Text>
            <Text style={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim
            </Text>
            <View style={styles.buttonContainer}>
              <ButtonPrimary
                onPress={() => {
                  console.log('Sign in!');
                }}
                variation={ButtonVariation.Secondary}
                size={ButtonSize.Large}
                text="Sign in"
              />
              <ButtonPrimary
                onPress={() => {
                  console.log('Create account!');
                }}
                variation={ButtonVariation.Primary}
                size={ButtonSize.Large}
                text="Create account"
              />
              <ButtonLink
                onPress={() => {
                  console.log('You are guest!');
                }}
                text="Continue as a guest"
              />
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
