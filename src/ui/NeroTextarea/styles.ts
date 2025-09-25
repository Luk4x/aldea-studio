import { tv } from 'tailwind-variants';

const buttonIcon =
  'grid min-h-[2.5rem] min-w-[2.5rem] cursor-pointer place-items-center rounded-lg';

export const neroTextareaStyles = tv({
  slots: {
    container:
      'relative flex w-full flex-col items-center rounded-xl border border-highlight-500/[24%] bg-highlight-500/[2%] shadow-[0_2px_4px_0_rgba(22,124,241,0.12)] transition-all duration-300',
    textarea:
      'h-full w-full resize-none overflow-hidden border-none text-sm text-neutral-900 outline-none placeholder:text-neutral-900/[52%]',
    mainWrapper: 'flex w-full items-center justify-between',
    audio: `${buttonIcon} animate-fade-in bg-highlight-500 shadow-[inset_0_-3px_0_0_rgba(10,13,20,0.26)]`,
    arrow: `${buttonIcon} bg-highlight-500 shadow-[inset_0_-3px_0_0_rgba(10,13,20,0.26)]`,
    attachment: `${buttonIcon} border border-neutral-900/[8%] shadow-[inset_0_-3px_0_0_rgba(20,27,52,0.08)]`,
    attachmentIcon: 'opacity-[52%]',
    actionsWrapper:
      'flex w-full animate-fade-in items-center justify-between pt-4.5',
  },
  variants: {
    isEmpty: {
      true: {
        container: 'min-h-[3.75rem] p-2.5 pl-5',
        audio: 'opacity-100',
      },
      false: {
        container: 'min-h-[6.875rem] p-3 pt-[1.125rem]',
        audio: 'pointer-events-none absolute top-2.5 right-2.5 opacity-0',
      },
    },
  },
});
