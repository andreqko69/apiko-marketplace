import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useStyles } from 'react-native-unistyles';

import fontStyleSheet from '@styles/fonts.ts';
import Icon from '@components/Icon/Icon';

const WelcomeScreen = () => {
  const { styles } = useStyles(fontStyleSheet);

  return (
    <SafeAreaView>
      <Text style={styles.textXxsmRegular}>Welcome</Text>
      <Icon name="power" />
      <Text style={styles.textXxsmExtrabold}>Welcome Boldie</Text>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
