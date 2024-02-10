import { StateCreator } from 'zustand';

export interface AuthenticationState {
  isAuthenticated: boolean;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
}

const createAuthStore: StateCreator<AuthenticationState> = (set) => ({
  isAuthenticated: false,
  setIsAuthenticated: (isAuthenticated: boolean) => set({ isAuthenticated }),
});

export default createAuthStore;
