import { create } from 'zustand';

import createAuthStore, { AuthenticationState } from './authStore';
import createSettingsStore, { SettingsState } from './settingsStore';

const useCombinedStore = create<AuthenticationState & SettingsState>()(
  (...params) => ({
    ...createAuthStore(...params),
    ...createSettingsStore(...params),
  }),
);

export default useCombinedStore;
