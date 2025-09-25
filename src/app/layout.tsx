'use client';

import '@/styles/globals.css';

import type { PropsWithChildren } from 'react';

import { fontClassNames, fontVariables } from '@/styles/fonts';

import { BaseLayout } from './_page';

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className={fontClassNames}>
      <body className={fontVariables}>
        <BaseLayout>{children}</BaseLayout>
      </body>
    </html>
  );
}
