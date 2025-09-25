import { tv } from 'tailwind-variants';

export const homeCardFooterStyles = tv({
  slots: {
    container:
      'flex h-16 w-full items-center justify-between gap-4 px-[1.875rem] py-[1.375rem]',
    subContainer: 'flex items-center gap-4',
    thumbIcon: 'opacity-[52%]',
    chip: 'w-[5.5625rem] rounded-full bg-neutral-100',
    dotsIcon: 'opacity-[64%]',
  },
});
