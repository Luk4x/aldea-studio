import { useRouter } from 'next/navigation';

import { appRoutePaths } from '@/config/routing';

export function useOnboardingCard() {
  const router = useRouter();

  const onContinueChipClick = () => {
    router.push(appRoutePaths.ONBOARDING_TOPICS());
  };

  return { onContinueChipClick };
}
