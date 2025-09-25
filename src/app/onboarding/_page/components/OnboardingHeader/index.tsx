'use client';

import Image from 'next/image';

import { Chip } from '@/ui/Chip';
import { Icon } from '@/ui/Icon';
import { If } from '@/ui/If';

import { onboardingHeaderStyles } from './styles';
import { useOnboardingHeader } from './useOnboardingHeader';

export function OnboardingHeader() {
  const { hasBackChip, hasSkipChip, onBackChipClick, onSkipChipClick } =
    useOnboardingHeader();

  const styles = onboardingHeaderStyles();

  return (
    <header className={styles.header()}>
      <If condition={hasBackChip}>
        <Chip onClick={onBackChipClick} className={styles.backChip()}>
          <Icon.Arrow
            direction="left"
            width={16}
            height={16}
            className={styles.arrowIcon()}
            color="neutral-900"
          />
          Go Back
        </Chip>
      </If>
      <Image
        src="/images/face.svg"
        alt="Rosto de um homem"
        width={32}
        height={42}
        className={styles.image()}
      />
      <If condition={hasSkipChip}>
        <Chip onClick={onSkipChipClick} className={styles.skipChip()}>
          Skip Step
        </Chip>
      </If>
    </header>
  );
}
