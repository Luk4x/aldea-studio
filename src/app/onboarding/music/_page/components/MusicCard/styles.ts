import { tv } from 'tailwind-variants';

export const musicCardCardStyles = tv({
  slots: {
    card: 'mx-auto mt-[4.5rem] flex max-w-[30rem] animate-fade-in-slide-up flex-col',
    mainIcon:
      'mx-auto mt-5 grid h-14 w-14 place-items-center rounded-full bg-highlight-500/[8%]',
    subtitle:
      'mt-6 text-center text-lg font-semibold text-neutral-900 xs:leading-[0.9375rem]',
    description:
      'mt-4 h-[1.6875rem] animate-fade-in px-2 text-center text-xs text-neutral-900',
    connectionsList: 'mt-10 mb-[6.3125rem] flex flex-col gap-2',
    chipContainer: 'flex items-center justify-between',
    chipIcon: '-mr-[0.1875rem] opacity-[52%]',
    newIntegration:
      'flex cursor-pointer items-center gap-1.5 text-xs opacity-[52%]',
  },
});
