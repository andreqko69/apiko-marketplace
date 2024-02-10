import { UnistylesRegistry } from 'react-native-unistyles';

import { Theme } from '../constants/user-settings';
import darkTheme from './darkTheme.ts';
import lightTheme from './lightTheme.ts';

type AppThemes = {
  [Theme.Light]: typeof lightTheme;
  [Theme.Dark]: typeof darkTheme;
};

declare module 'react-native-unistyles' {
  export interface UnistylesThemes extends AppThemes {}
}

UnistylesRegistry.addThemes({
  light: lightTheme,
  dark: darkTheme,
}).addConfig({
  adaptiveThemes: true,
  initialTheme: Theme.Dark,
});
