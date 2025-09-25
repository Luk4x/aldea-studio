import { cn } from '@/utils/cn';

import { homeCardContentStyles } from './styles';
import type { HomeCardContentProps } from './types';

export function HomeCardContent({
  children,
  className,
  ...homeCardContentProps
}: HomeCardContentProps) {
  const styles = homeCardContentStyles();

  return (
    <div className={cn(styles, className)} {...homeCardContentProps}>
      {children}
    </div>
  );
}
