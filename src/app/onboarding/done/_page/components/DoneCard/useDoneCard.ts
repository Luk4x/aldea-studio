import { useRouter } from 'next/navigation';

import { appRoutePaths } from '@/config/routing';
import { useLocalStorage } from '@/hooks/use-location-storage';
import { LocalStorageKeysEnum } from '@/utils/local-storage-keys';

export function useDoneCard() {
  const router = useRouter();
  useLocalStorage<boolean>(LocalStorageKeysEnum.ONBOARDING_DONE, true);

  const onDashboardChipClick = () => {
    router.push(appRoutePaths.HOME());
  };

  return { onDashboardChipClick };
}
