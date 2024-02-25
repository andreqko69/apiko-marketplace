import { ModalName } from '@modals/constants';
import { ScreenName } from '@screens/constants';

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
