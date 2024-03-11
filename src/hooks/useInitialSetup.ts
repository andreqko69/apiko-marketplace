import { useEffect } from 'react';

import useStore from '@stores/useStore';
import supabase from '@lib/supabase';

const useInitialSetup = () => {
  const store = useStore();
  const setUserId = store.use.setUserId();
  // seed user data
  useEffect(() => {
    const seedUserData = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) return;

      setUserId(user.id);
    };

    seedUserData();
  }, [setUserId]);
};

export default useInitialSetup;
