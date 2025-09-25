import { Chip } from '@/ui/Chip';
import { Icon } from '@/ui/Icon';
import { cn } from '@/utils/cn';

import { homeCardFooterStyles } from './styles';
import type { HomeCardFooterProps } from './types';

export function HomeCardFooter({
  className,
  sideAction,
  ...homeCardFooterProps
}: HomeCardFooterProps) {
  const styles = homeCardFooterStyles();

  return (
    <footer
      className={cn(styles.container(), className)}
      {...homeCardFooterProps}
    >
      <div className={styles.subContainer()}>
        <Icon.ThumbsUp
          width={20}
          height={20}
          color="neutral-900"
          className={styles.thumbIcon()}
        />
        <Icon.ThumbsDown
          width={20}
          height={20}
          color="neutral-900"
          className={styles.thumbIcon()}
        />
      </div>
      <div className={styles.subContainer()}>
        {sideAction ?? (
          <>
            <Chip className={styles.chip()}>Ask Nero</Chip>
            <Icon.MoreHorizontal
              width={20}
              height={20}
              color="neutral-900"
              className={styles.dotsIcon()}
            />
          </>
        )}
      </div>
    </footer>
  );
}
