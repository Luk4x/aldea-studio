import { tv } from 'tailwind-variants';

export const onboardingHeaderStyles = tv({
  slots: {
    header: 'relative flex h-16 items-center justify-between px-6',
    arrowIcon: 'opacity-[52%]',
    backChip: 'pr-[0.625rem]',
    skipChip: 'px-[0.6875rem]',
    image: 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
  },
});
