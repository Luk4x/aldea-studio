'use client';

import { usePathname } from 'next/navigation';

import { Steps } from '@/ui/Steps';

import { MAX_STEPS, getCurrentStep } from './utils';

export function OnboardingSteps() {
  const pathname = usePathname();

  return (
    <Steps
      max={MAX_STEPS}
      current={getCurrentStep(pathname)}
      color="neutral-900"
    />
  );
}
