import React from 'react';
import { Text, View } from 'react-native';
import { useStyles } from 'react-native-unistyles';
import type { StackScreenProps } from '@react-navigation/stack';
import { useRoute } from '@react-navigation/native';

import Modal from '@components/Modal/Modal';
import ButtonPrimary from '@components/ButtonPrimary/ButtonPrimary';
import ButtonLink from '@components/ButtonLink/ButtonLink';
import type { ModalName } from '@modals/constants';
import type { RootStackParamList } from '@navigation/RootNavigator/RootNavigator.types';
import stylesheet from './MessageModal.styles';

type RouteProps = StackScreenProps<RootStackParamList, ModalName.MessageModal>;

const MessageModal = () => {
  const {
    params: {
      title,
      message,
      primaryButtonText,
      onPrimaryButtonPress,
      secondaryButtonText,
      onSecondaryButtonPress,
    },
  } = useRoute<RouteProps['route']>();
  const { styles } = useStyles(stylesheet);

  return (
    <Modal>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.message}>{message}</Text>
        <ButtonPrimary
          onPress={onPrimaryButtonPress}
          text={primaryButtonText}
        />
        {secondaryButtonText && onSecondaryButtonPress && (
          <ButtonLink
            onPress={onSecondaryButtonPress}
            text={secondaryButtonText}
          />
        )}
      </View>
    </Modal>
  );
};

export default MessageModal;
