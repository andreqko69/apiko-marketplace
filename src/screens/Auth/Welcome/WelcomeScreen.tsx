import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useStyles } from 'react-native-unistyles';
import fontStyleSheet from 'styles/fonts.ts';

const WelcomeScreen = () => {
  const { styles } = useStyles(fontStyleSheet);

  return (
    <SafeAreaView>
      <Text style={styles.textXxsmRegular}>Welcome</Text>
      <Text style={styles.textXxsmExtrabold}>Welcome Boldie</Text>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
