import { useRouter } from 'next/navigation';

import { appRoutePaths } from '@/config/routing';
import { useLocalStorage } from '@/hooks/use-location-storage';
import { LocalStorageKeysEnum } from '@/utils/local-storage-keys';

export function useMusicCard() {
  const router = useRouter();

  const [connectionsDone, updateConnectionsDone] = useLocalStorage<
    Array<string>
  >(LocalStorageKeysEnum.ONBOARDING_MUSIC, []);

  const isConnected = (rawConnectionLabel: string) => {
    const connection = rawConnectionLabel.toLocaleLowerCase();
    return connectionsDone.includes(connection);
  };

  const onConnect = (rawConnectionLabel: string) => {
    const connection = rawConnectionLabel.toLocaleLowerCase();

    if (connectionsDone.includes(connection)) {
      const newConnectionsDone = connectionsDone.filter(
        connection => connection !== connection,
      );

      updateConnectionsDone(newConnectionsDone);
      return;
    }

    const newConnectionsDone = [...connectionsDone, connection];

    updateConnectionsDone(newConnectionsDone);
  };

  const onClickChipContinue = () => {
    router.push(appRoutePaths.ONBOARDING_TODO());
  };

  const isConnectionsDoneEmpty = connectionsDone.length === 0;

  return {
    onConnect,
    isConnected,
    isConnectionsDoneEmpty,
    onClickChipContinue,
  };
}
