import { useEffect, useState } from 'react';
import type { RealtimeChannel } from '@supabase/supabase-js';

import useStore from '@stores/useStore';
import supabase from '@lib/supabase';
import type { UserProfile } from '@lib/supabase/supabase.types';

const useUserProfileSubscription = (userId: string | null) => {
  const [channel, setChannel] = useState<RealtimeChannel | null>(null);
  const store = useStore();
  const setUserProfile = store.use.setUserProfile();

  useEffect(() => {
    const getInitialUserProfile = async () => {
      const { data } = await supabase
        .from('user_profile')
        .select('*')
        .filter('user_id', 'eq', userId);

      setUserProfile(data?.[0] ?? null);
    };

    const subscribeForUserProfileChanges = async () => {
      const subscription = supabase
        .channel('public:user_profiles')
        .on(
          'postgres_changes',
          {
            event: '*',
            schema: 'public',
            table: 'user_profiles',
            filter: `user_id=eq.${userId}`,
          },
          (payload) => {
            setUserProfile(payload.new as UserProfile);
          }
        )
        .subscribe();

      // drop the old channel if it exists
      if (channel) {
        await channel.unsubscribe();
      }

      setChannel(subscription);
    };

    getInitialUserProfile();
    subscribeForUserProfileChanges();
    // we don't want to use a channel dependency here
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId, setUserProfile]);
};

export default useUserProfileSubscription;
