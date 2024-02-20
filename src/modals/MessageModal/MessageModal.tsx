import React from 'react';
import { Text, View } from 'react-native';
import Modal from '@components/Modal/Modal';
import { useStyles } from 'react-native-unistyles';
import stylesheet from './MessageModal.styles';

export interface MessageModalProps {
  title: string;
  message: string;
  primaryButtonText: string;
  onPrimaryButtonPress: () => void;
  secondaryButtonText?: string;
  onSecondaryButtonPress?: () => void;
}

const MessageModal = ({
  title,
  message,
  primaryButtonText,
  onPrimaryButtonPress,
  secondaryButtonText,
  onSecondaryButtonPress,
}: MessageModalProps) => {
  const { styles } = useStyles(stylesheet);

  return (
    <Modal>
      <Text style={styles.title}>{title}</Text>
      <Text>{message}</Text>
    </Modal>
  );
};

export default MessageModal;
