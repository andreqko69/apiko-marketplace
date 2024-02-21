import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import type { StackScreenProps } from '@react-navigation/stack';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useStyles } from 'react-native-unistyles';

import Modal from '@components/Modal/Modal';
import stylesheet from './MessageModal.styles';
import type { RootStackParamList } from '@navigation/RootNavigator/RootNavigator.types';
import type { ModalName } from '@navigation/modals';
import ButtonPrimary from '@components/ButtonPrimary/ButtonPrimary';
import ButtonLink from '@components/ButtonLink/ButtonLink';

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
  const navigation = useNavigation();
  const { styles } = useStyles(stylesheet);

  useEffect(() => {
    navigation.addListener('beforeRemove', (e) => {
      e.preventDefault();
    });
  }, [navigation]);

  return (
    <Modal>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.message}>{message}</Text>
      <View>
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
