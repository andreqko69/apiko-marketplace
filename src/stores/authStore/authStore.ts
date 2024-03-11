import { StateCreator } from 'zustand';
import type { UserProfile } from '@lib/supabase/supabase.types';

export interface AuthenticationState {
  userId: string | null;
  setUserId: (userId: string | null) => void;
  userProfile: UserProfile | null;
  setUserProfile: (userProfile: UserProfile | null) => void;
}

const createAuthStore: StateCreator<AuthenticationState> = (set) => ({
  userId: null,
  setUserId: (userId: string | null) => set({ userId }),
  userProfile: null,
  setUserProfile: (userProfile: UserProfile | null) => set({ userProfile }),
});

export default createAuthStore;
