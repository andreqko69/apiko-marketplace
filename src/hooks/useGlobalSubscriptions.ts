import useStore from '@stores/useStore';
import useUserProfileSubscription from './useUserProfileSubscription';

const useGlobalSubscriptions = () => {
  const store = useStore();
  const userId = store.use.userId();

  useUserProfileSubscription(userId);
};

export default useGlobalSubscriptions;
