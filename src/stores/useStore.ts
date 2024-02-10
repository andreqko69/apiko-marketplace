import createSelectors from './createSelectors';
import useCombinedStore from './index';

const useStore = () => createSelectors(useCombinedStore);

export default useStore;
