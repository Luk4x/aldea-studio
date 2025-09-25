import { usePathname, useRouter } from 'next/navigation';

import { appRoutePaths } from '@/config/routing';

import { onboardingSteps } from '../../utils/onboarding-steps';

export function useOnboardingHeader() {
  const pathname = usePathname();
  const router = useRouter();

  const hasBackChip = pathname !== appRoutePaths.ONBOARDING();
  const hasSkipChip =
    hasBackChip && pathname !== appRoutePaths.ONBOARDING_DONE();

  const onBackChipClick = () => {
    const lastStepPathnameIndex = onboardingSteps.indexOf(pathname) - 1;
    const lastStepPathname = String(onboardingSteps[lastStepPathnameIndex]);

    router.push(lastStepPathname);
  };

  const onSkipChipClick = () => {
    const nextStepPathnameIndex = onboardingSteps.indexOf(pathname) + 1;
    const nextStepPathname = String(onboardingSteps[nextStepPathnameIndex]);

    router.push(nextStepPathname);
  };

  return { hasBackChip, hasSkipChip, onBackChipClick, onSkipChipClick };
}
