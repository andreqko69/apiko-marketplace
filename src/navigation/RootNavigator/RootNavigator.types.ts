import { ModalName } from '../modals';
import { ScreenName } from '../screens';

type MessageModalProps = {
  title: string;
  message: string;
  primaryButtonText: string;
  onPrimaryButtonPress: () => void;
  secondaryButtonText?: string;
  onSecondaryButtonPress?: () => void;
};

export type RootStackParamList = {
  [ModalName.MessageModal]: MessageModalProps;
  [ScreenName.AuthNavigator]: undefined;
  [ScreenName.AppNavigator]: undefined;
};
