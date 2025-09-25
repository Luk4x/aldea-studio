import type { Metadata } from 'next';

import { getMetadata } from '@/utils/metadata';

import { MusicCard } from './_page';

export const metadata: Metadata = getMetadata('Onboarding - Music');

export default function OnboardingMusicPage() {
  return <MusicCard />;
}
