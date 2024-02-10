import { create } from 'zustand';

import createAuthStore, { AuthenticationState } from './authStore/authStore.ts';
import createSettingsStore, {
  SettingsState,
} from './settingsStore/settingsStore.ts';

const useCombinedStore = create<AuthenticationState & SettingsState>()(
  (...params) => ({
    ...createAuthStore(...params),
    ...createSettingsStore(...params),
  })
);

export default useCombinedStore;
