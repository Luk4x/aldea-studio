'use client';

import { cn } from '@/utils/cn';

import { homeCardSkeletonStyles } from './styles';

export function HomeCardSkeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const styles = homeCardSkeletonStyles();

  return (
    <section className={cn(styles.root(), className)} aria-busy {...props}>
      <div className={styles.content()}>
        {/* Title skeleton */}
        <div className={styles.titleContainer()}>
          <div className={styles.titleSkeleton()} />
          <div className={styles.iconSkeleton()} />
        </div>

        {/* Content skeleton - multiple lines */}
        <div className={styles.contentLines()}>
          <div className={styles.line({ width: 'full' })} />
          <div className={styles.line({ width: '3/4' })} />
          <div className={styles.line({ width: '1/2' })} />
        </div>

        {/* Actions skeleton */}
        <div className={styles.actionsContainer()}>
          <div className={styles.chipSkeleton()} />
          <div className={styles.chipSkeleton()} />
          <div className={styles.chipSkeleton()} />
        </div>
      </div>

      {/* Footer skeleton */}
      <footer className={styles.footer()}>
        <div className={styles.footerLeft()}>
          <div className={styles.iconSkeleton({ size: 'small' })} />
          <div className={styles.iconSkeleton({ size: 'small' })} />
        </div>
        <div className={styles.footerRight()}>
          <div className={styles.chipSkeleton({ size: 'small' })} />
          <div className={styles.iconSkeleton({ size: 'small' })} />
        </div>
      </footer>
    </section>
  );
}
