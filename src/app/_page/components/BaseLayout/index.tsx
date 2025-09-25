'use client';

import Image from 'next/image';
import type { PropsWithChildren } from 'react';

import { Icon } from '@/ui/Icon';

import { baseLayoutStyles } from './styles';
import { useBaseLayout } from './useBaseLayout';

export function BaseLayout({ children }: PropsWithChildren) {
  const { isOnboarding } = useBaseLayout();

  const styles = baseLayoutStyles();

  if (isOnboarding) {
    return children;
  }

  return (
    <>
      <header className={styles.header()}>
        <Image
          src="/images/face.svg"
          alt="Rosto de um homem"
          width={24}
          height={32}
        />
        <div className={styles.userContainer()}>
          <Icon.SlidersHorizontal width={24} height={24} color="neutral-900" />
          <div className={styles.userDropdown()}>
            <Image
              src="/images/profile.svg"
              width={24}
              height={24}
              className={styles.userProfilePic()}
              alt="User Profile Picture"
            />
            <Icon.Caret
              direction="down"
              color="neutral-900"
              width={12}
              height={12}
            />
          </div>
        </div>
      </header>
      <main>{children}</main>
    </>
  );
}
