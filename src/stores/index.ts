import { create } from 'zustand';

import createAuthStore, { AuthenticationState } from './authStore/authStore';
import createSettingsStore, {
  SettingsState,
} from './settingsStore/settingsStore';

const useCombinedStore = create<AuthenticationState & SettingsState>()(
  (...params) => ({
    ...createAuthStore(...params),
    ...createSettingsStore(...params),
  })
);

export default useCombinedStore;
