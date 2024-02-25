import { NavigatorScreenParams } from '@react-navigation/native';

import { ScreenName } from '@screens/screens';

export type HomeStackParamList = {
  [ScreenName.Home]: NavigatorScreenParams<undefined>;
};
