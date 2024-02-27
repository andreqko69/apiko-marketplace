import { LogBox } from 'react-native';

import '@styles/unistyles';
import './i18n';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
  'i18next is already initialized. You should call init just once!',
]);
