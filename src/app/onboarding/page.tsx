import type { Metadata } from 'next';

import { getMetadata } from '@/utils/metadata';

import { OnboardingCard } from './_page';

export const metadata: Metadata = getMetadata('Onboarding');

export default function OnboardingPage() {
  return <OnboardingCard />;
}
