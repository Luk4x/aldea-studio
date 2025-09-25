import { cn } from '@/utils/cn';

import { cardStyles } from './styles';
import type { CardProps } from './types';

export function Card({ children, className, ...cardProps }: CardProps) {
  const styles = cardStyles();

  return (
    <div className={cn(styles.container(), className)} {...cardProps}>
      <div className={styles.firstExtraBg()} />
      <div className={styles.secondExtraBg()} />
      <section className={styles.section()}>{children}</section>
    </div>
  );
}
