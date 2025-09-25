import type { Metadata } from 'next';

import { getMetadata } from '@/utils/metadata';

import { DoneCard } from './_page';

export const metadata: Metadata = getMetadata('Onboarding - All set');

export default function OnboardingDonePage() {
  return <DoneCard />;
}
