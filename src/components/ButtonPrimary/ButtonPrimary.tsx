import React, { useState } from 'react';
import { ActivityIndicator, Text } from 'react-native';
import { useStyles } from 'react-native-unistyles';
import { TouchableOpacity } from 'react-native-gesture-handler';

import {
  ButtonSize,
  ButtonVariation,
} from '@components/ButtonPrimary/constants';
import stylesheet from '@components/ButtonPrimary/ButtonPrimary.styles';

interface ButtonProps {
  onPress: () => void | Promise<void>;
  text: string;
  variation?: ButtonVariation;
  size?: ButtonSize;
  disabled?: boolean;
}

const ButtonPrimary = ({
  onPress,
  variation = ButtonVariation.Primary,
  size = ButtonSize.Large,
  text,
  disabled,
}: ButtonProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const { styles } = useStyles(stylesheet, {
    styleVariation: variation,
    size,
    disabled: !!disabled,
  });

  const handlePress = async () => {
    try {
      setIsLoading(true);
      await onPress();
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  const buttonContent = isLoading ? (
    <ActivityIndicator color={styles.loader.color} size={'small'} />
  ) : (
    <Text style={styles.text}>{text}</Text>
  );

  return (
    <TouchableOpacity
      disabled={disabled}
      activeOpacity={0.8}
      style={styles.button}
      onPress={handlePress}>
      {buttonContent}
    </TouchableOpacity>
  );
};

export default ButtonPrimary;
