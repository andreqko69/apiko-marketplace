import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useStyles } from 'react-native-unistyles';

import fontStyleSheet from '@styles/fonts.ts';
import Icon from '@components/Icon/Icon';
import Config from 'react-native-config';
import { isAndroid } from 'utils/reactNative.ts';

const WelcomeScreen = () => {
  const { styles } = useStyles(fontStyleSheet);
  const isFrom = Config.APP_CONFIG ?? '';
  console.log('Config:', Config);
  console.log('isAndroid:', isAndroid);
  console.log('isFrom:', isFrom);
  return (
    <SafeAreaView>
      <Text style={styles.textXxsmRegular}>Welcome</Text>
      <Icon name="power" />
      <Text style={styles.textXxsmExtrabold}>Welcome Boldie</Text>
      <Text>Env: {isFrom}</Text>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
