import React, { type ReactNode, useCallback, useEffect } from 'react';
import { BackHandler, View } from 'react-native';
import { useStyles } from 'react-native-unistyles';

import stylesheet from './Modal.styles';

const Modal = ({ children }: { children: ReactNode }) => {
  const { styles } = useStyles(stylesheet);

  const handleBackButtonPress = useCallback(() => true, []);
  // prevent modal being closed by pressing the back button
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonPress);

    return () =>
      BackHandler.removeEventListener(
        'hardwareBackPress',
        handleBackButtonPress
      );
  }, [handleBackButtonPress]);

  return (
    <View style={styles.container}>
      <View style={styles.content}>{children}</View>
    </View>
  );
};

export default Modal;
