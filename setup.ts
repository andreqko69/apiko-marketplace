import { LogBox } from 'react-native';
import '@styles/unistyles';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);
