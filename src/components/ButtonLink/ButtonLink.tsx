import React, { useState } from 'react';
import { ActivityIndicator, Text } from 'react-native';
import { useStyles } from 'react-native-unistyles';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import stylesheet from 'components/ButtonLink/ButtonLink.styles';
import { ButtonVariation } from '../ButtonPrimary/constants';

interface ButtonProps {
  onPress: () => void | Promise<void>;
  text: string;
  variation?: ButtonVariation;
}

const ButtonLink = ({
  onPress,
  text,
  variation = ButtonVariation.Primary,
}: ButtonProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const { styles } = useStyles(stylesheet, { styleVariation: variation });

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
    <TouchableWithoutFeedback style={styles.button} onPress={handlePress}>
      {buttonContent}
    </TouchableWithoutFeedback>
  );
};

export default ButtonLink;
