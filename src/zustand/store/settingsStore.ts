import { StateCreator } from 'zustand';
import { Theme } from '../../constants/user-settings';

export interface SettingsState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const createSettingsStore: StateCreator<SettingsState> = () => ({
  theme: Theme.Light,
  setTheme: (theme: Theme) => ({ theme }),
});

export default createSettingsStore;
