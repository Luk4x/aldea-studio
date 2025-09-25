import type { Metadata } from 'next';

import { getMetadata } from '@/utils/metadata';
import { sleep } from '@/utils/sleep';

import { AskNeroProvider, CardInFocus, HomeCardsList, NeroBar } from './_page';

export const metadata: Metadata = getMetadata('Home', 'Aldea Studio Home');

export default async function HomePage() {
  await sleep(2000);

  return (
    <AskNeroProvider>
      <HomeCardsList />
      <NeroBar />
      <CardInFocus />
    </AskNeroProvider>
  );
}
