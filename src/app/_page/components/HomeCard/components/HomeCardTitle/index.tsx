import { Icon } from '@/ui/Icon';
import { cn } from '@/utils/cn';

import { homeCardTitleStyles } from './styles';
import type { HomeCardTitleProps } from './types';

export function HomeCardTitle({
  title,
  className,
  ...homeCardTitleProps
}: HomeCardTitleProps) {
  const styles = homeCardTitleStyles();

  return (
    <div className={cn(styles.container(), className)} {...homeCardTitleProps}>
      <h2 className={styles.title()}>{title}</h2>
      <Icon.Caret
        direction="up"
        width={20}
        height={20}
        color="neutral-900"
        className={styles.icon()}
      />
    </div>
  );
}
