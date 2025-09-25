import { tv } from 'tailwind-variants';

export const todoCardCardStyles = tv({
  slots: {
    card: 'mx-auto mt-[4.5rem] flex max-w-[30rem] animate-fade-in-slide-up flex-col',
    mainIcon:
      'mx-auto mt-5 grid h-14 w-14 place-items-center rounded-full bg-danger-500/[8%]',
    subtitle:
      'mt-6 text-center text-lg font-semibold text-neutral-900 xs:leading-[0.9375rem]',
    description:
      'mt-4 h-[1.6875rem] animate-fade-in px-2 text-center text-xs text-neutral-900',
    todosList:
      'mt-10 flex max-h-[12.125rem] flex-col gap-2 overflow-y-scroll hide-scroll',
    chipContainer:
      'relative z-10 mt-2 flex h-[3.25rem] items-end justify-between border-t border-t-neutral-900/[8%] bg-neutral-100',
    chipIcon: '-mr-[0.1875rem] opacity-[52%]',
    newIntegration:
      'flex cursor-pointer items-center gap-1.5 text-xs opacity-[52%]',
  },
});
