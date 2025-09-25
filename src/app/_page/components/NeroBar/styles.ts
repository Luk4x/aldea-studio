import { tv } from 'tailwind-variants';

export const neroBarStyles = tv({
  slots: {
    overlay:
      'pointer-events-none fixed bottom-0 flex h-[16.25rem] w-screen bg-gradient-to-b from-neutral-150/0 to-neutral-150/100',
    container:
      'fixed bottom-5 left-1/2 flex h-[3.75rem] w-[12.1875rem] -translate-x-1/2 cursor-pointer items-center justify-center gap-1.5 rounded-full border border-neutral-900/[8%] bg-neutral-150 shadow-[0_2px_3px_0_rgba(20,27,52,0.06)] transition-all duration-300 ease-in-out sm:bottom-[1.875rem]',
    audio:
      'flex h-[2.5rem] w-[8.0625rem] items-center justify-center gap-2 rounded-full bg-highlight-500 shadow-[inset_0_-3px_0_0_rgba(10,13,20,0.26)]',
    audioText: 'text-sm text-neutral-200',
    message:
      'grid size-10 place-items-center rounded-full border border-neutral-900/[8%] bg-neutral-900/[2%] shadow-[inset_0_-2px_0_0_rgba(10,13,20,0.08)]',
    messageIcon: 'opacity-[52%]',
  },
  variants: {
    hasAsked: {
      true: {
        container: 'translate-y-6 opacity-0',
      },
      false: {},
    },
  },
});
