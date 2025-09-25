import { tv } from 'tailwind-variants';

export const connectionStyles = tv({
  slots: {
    container:
      'flex h-14 w-full items-center justify-between rounded-xl border border-neutral-900/[8%] px-3 transition-all',
    labelContainer: 'flex items-center gap-[0.6875rem] pl-[0.1875rem]',
    label: 'text-xs text-neutral-900',
    chip: 'w-[4.3125rem]',
    connectionSuccess:
      'grid h-8 w-9 animate-fade-in place-items-center rounded-lg bg-highlight-500/[8%]',
  },
  variants: {
    connected: {
      true: {
        container: 'border-highlight-500/[24%] bg-highlight-500/[4%]',
      },
      false: {},
    },
  },
});
