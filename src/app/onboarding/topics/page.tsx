import type { Metadata } from 'next';

import { getMetadata } from '@/utils/metadata';

import { TopicsCard } from './_page';

export const metadata: Metadata = getMetadata('Onboarding - Topics');

export default function OnboardingTopicsPage() {
  return <TopicsCard />;
}
