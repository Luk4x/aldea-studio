'use client';

import Image from 'next/image';

import { Chip } from '@/ui/Chip';
import { Icon } from '@/ui/Icon';
import { If } from '@/ui/If';
import { cn } from '@/utils/cn';

import { connectionStyles } from './styles';
import type { ConnectionProps } from './types';

export function Connection({
  label,
  logo,
  onConnect,
  connected,
  className,
  ...connectionProps
}: ConnectionProps) {
  const styles = connectionStyles();

  return (
    <div
      className={cn(styles.container({ connected }), className)}
      {...connectionProps}
    >
      <div className={styles.labelContainer()}>
        <Image src={logo} alt={`${label} Logo`} width={24} height={24} />
        <p className={styles.label()}>{label}</p>
      </div>
      <If
        condition={connected}
        fallback={
          <Chip className={styles.chip()} onClick={onConnect}>
            Connect
          </Chip>
        }
      >
        <div className={styles.connectionSuccess()}>
          <Icon.CheckmarkCircle color="highlight-500" width={16} height={16} />
        </div>
      </If>
    </div>
  );
}
