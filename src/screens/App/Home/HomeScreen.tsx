import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import useStore from '@stores/useStore';
import ButtonPrimary from '@components/ButtonPrimary/ButtonPrimary';
import supabase from '@lib/supabase';

const HomeScreen = () => {
  const store = useStore();
  const userProfile = store.use.userProfile();
  const setUserId = store.use.setUserId();

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <SafeAreaView>
      <View>
        <Text>
          Здороу, {`${userProfile?.first_name} ${userProfile?.last_name}`}
        </Text>
        <ButtonPrimary onPress={handleLogout} text="Log out" />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
