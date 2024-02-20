import React, { type ReactNode } from 'react';
import { View } from 'react-native';
import { useStyles } from 'react-native-unistyles';

import stylesheet from './Modal.styles';

const Modal = ({ children }: { children: ReactNode }) => {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.container}>
      <View style={styles.content}>{children}</View>
    </View>
  );
};

export default Modal;
