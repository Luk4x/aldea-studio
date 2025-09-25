import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { appRoutePaths } from '@/config/routing';
import { LocalStorageKeysEnum } from '@/utils/local-storage-keys';

export function useBaseLayout() {
  const pathname = usePathname();
  const router = useRouter();

  const isOnboarding = pathname.includes(appRoutePaths.ONBOARDING());

  useEffect(() => {
    const shouldRedirectOnboarding = localStorage.getItem(
      LocalStorageKeysEnum.ONBOARDING_DONE,
    );

    if (!shouldRedirectOnboarding && !isOnboarding) {
      router.replace(appRoutePaths.ONBOARDING());
    }
  }, []);

  return { isOnboarding };
}
