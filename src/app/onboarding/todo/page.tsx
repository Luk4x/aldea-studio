import type { Metadata } from 'next';

import { getMetadata } from '@/utils/metadata';

import { TodoCard } from './_page';

export const metadata: Metadata = getMetadata('Onboarding - Todo');

export default function OnboardingTodoPage() {
  return <TodoCard />;
}
