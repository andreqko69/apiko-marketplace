import { AppState } from 'react-native';
import Config from 'react-native-config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';
import 'react-native-url-polyfill/auto';

import useCombinedStore from '@stores/index';
import type { Database } from './database.types';

const supabaseUrl = Config.SUPA_URL;
const supabaseAnonKey = Config.SUPA_ANON_KEY;

const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});

// Listen to auth state changes to set the user ID
supabase.auth.onAuthStateChange((event, session) => {
  const state = useCombinedStore.getState();

  switch (event) {
    case 'SIGNED_IN': {
      state.setUserId(session?.user?.id ?? null);
      break;
    }
    case 'SIGNED_OUT': {
      state.setUserId(null);
      break;
    }
    default: {
      break;
    }
  }
});

// Tells Supabase Auth to continuously refresh the session automatically if
// the app is in the foreground. When this is added, we will continue to receive
// `onAuthStateChange` events with the `TOKEN_REFRESHED` or `SIGNED_OUT` event
// if the user's session is terminated. This should only be registered once.
AppState.addEventListener('change', (state) => {
  if (state === 'active') {
    supabase.auth.startAutoRefresh();
  } else {
    supabase.auth.stopAutoRefresh();
  }
});

export default supabase;
