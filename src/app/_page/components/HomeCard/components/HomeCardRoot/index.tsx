import { cn } from '@/utils/cn';

import { HomeCardRootStyles } from './styles';
import type { HomeCardProps } from './types';

export function HomeCardRoot({
  children,
  className,
  ...homeCardProps
}: HomeCardProps) {
  const styles = HomeCardRootStyles();

  return (
    <section className={cn(styles, className)} {...homeCardProps}>
      {children}
    </section>
  );
}
