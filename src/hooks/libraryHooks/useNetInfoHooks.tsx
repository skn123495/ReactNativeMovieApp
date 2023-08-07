import {useState, useEffect} from 'react';
import NetInfo, {NetInfoState} from '@react-native-community/netinfo';

const useNetInfo = () => {
  const [netInfo, setNetInfo] = useState<boolean | null>(false);

  useEffect(() => {
    NetInfo.fetch().then((state: NetInfoState) => {
      setNetInfo(state.isConnected);
    });
    const unsubscribe = NetInfo.addEventListener((state: NetInfoState) => {
      setNetInfo(state.isConnected);
    });

    return () => unsubscribe();
  }, []);

  return {netInfo};
};

export default useNetInfo;
