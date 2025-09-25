import type { PropsWithChildren } from 'react';

import { OnboardingHeader, OnboardingSteps } from './_page';

export default function OnboardingLayout({ children }: PropsWithChildren) {
  return (
    <>
      <OnboardingHeader />
      <OnboardingSteps />
      <main>{children}</main>
    </>
  );
}
