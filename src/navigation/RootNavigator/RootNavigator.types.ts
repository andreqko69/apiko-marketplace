import { ModalName } from '../modals';
import type { MessageModalProps } from '../../modals/MessageModal/MessageModal';
import { ScreenName } from '../screens';

export type RootStackParamList = {
  [ModalName.MessageModal]: MessageModalProps;
  [ScreenName.AuthNavigator]: undefined;
  [ScreenName.AppNavigator]: undefined;
};
