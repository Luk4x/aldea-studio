import { tv } from 'tailwind-variants';

export const homeCardTitleStyles = tv({
  slots: {
    container: 'flex items-center justify-between gap-4',
    title: 'text-lg font-medium tracking-[0rem] text-neutral-900 sm:text-xl',
    icon: 'opacity-[52%]',
  },
});
