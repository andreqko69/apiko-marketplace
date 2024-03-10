import { LogBox } from 'react-native';
import KeyboardManager from 'react-native-keyboard-manager';

import { isAndroid } from 'utils/reactNative';
import '@styles/unistyles';
import './i18n';

// ignore warnings
LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
  'i18next is already initialized. You should call init just once!',
]);

if (!isAndroid) {
  KeyboardManager.setEnable(true);
  KeyboardManager.setKeyboardDistanceFromTextField(25);
  KeyboardManager.setEnableAutoToolbar(false);
}
