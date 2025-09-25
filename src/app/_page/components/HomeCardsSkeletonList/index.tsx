'use client';

import { List } from '@/ui/List';
import { cn } from '@/utils/cn';

import { HomeCardSkeleton } from './components/HomeCardSkeleton';
import { homeCardsSkeletonListStyles } from './styles';
import type { HomeCardsSkeletonListProps } from './types';

export function HomeCardsSkeletonList({
  count = 3,
  className,
}: HomeCardsSkeletonListProps) {
  const styles = homeCardsSkeletonListStyles();
  const skeletonItems = Array.from({ length: count }, (_, index) => ({
    id: index,
  }));

  return (
    <div className={cn(styles.container(), className)}>
      <List items={skeletonItems} className={styles.list()}>
        {({ id }) => (
          <List.Item key={id} className={styles.listItem()}>
            <HomeCardSkeleton className={styles.card()} />
          </List.Item>
        )}
      </List>
    </div>
  );
}
