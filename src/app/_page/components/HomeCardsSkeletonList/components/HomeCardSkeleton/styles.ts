import { tv } from 'tailwind-variants';

export const homeCardSkeletonStyles = tv({
  slots: {
    root: 'w-full animate-fade-in-slide-up rounded-[1.25rem] border border-neutral-900/[8%] bg-neutral-100 shadow-[0_2px_3px_0_rgba(20,27,52,0.06)]',
    content:
      'w-full rounded-[1.25rem] border border-neutral-900/[8%] bg-neutral-50 p-5 sm:p-[1.875rem]',
    titleContainer: 'mb-4 flex items-center justify-between gap-4',
    titleSkeleton:
      'h-6 w-48 animate-pulse rounded bg-gradient-to-r from-neutral-100 to-neutral-300',
    iconSkeleton:
      'h-5 w-5 animate-pulse rounded bg-gradient-to-r from-neutral-100 to-neutral-300',
    contentLines: 'mb-6 space-y-3',
    line: 'h-4 animate-pulse rounded bg-gradient-to-r from-neutral-100 to-neutral-300',
    actionsContainer: 'flex flex-wrap gap-2',
    chipSkeleton:
      'h-8 w-20 animate-pulse rounded-full bg-gradient-to-r from-neutral-100 to-neutral-300',
    footer: 'flex items-center justify-between p-4',
    footerLeft: 'flex items-center gap-3',
    footerRight: 'flex items-center gap-3',
  },
  variants: {
    width: {
      full: 'w-full',
      '3/4': 'w-3/4',
      '1/2': 'w-1/2',
    },
    size: {
      small: 'h-4 w-4',
      medium: 'h-5 w-5',
    },
  },
});
