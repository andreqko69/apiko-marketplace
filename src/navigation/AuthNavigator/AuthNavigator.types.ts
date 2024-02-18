import { ScreenName } from '../screens';

export type AuthStackParamList = {
  [ScreenName.Welcome]: undefined;
  [ScreenName.SignIn]: undefined;
  [ScreenName.SignUp]: undefined;
  [ScreenName.ResetPassword]: undefined;
  [ScreenName.CreateNewPassword]: undefined;
};
