import { tv } from 'tailwind-variants';

export const cardInFocusStyles = tv({
  slots: {
    overlay:
      'fixed bottom-0 left-0 z-20 flex h-dvh w-dvw animate-fade-in-slide-up items-end bg-neutral-150 px-2 pb-[0.8125rem]',
    container:
      'flex h-[calc(100%-3.6875rem)] w-full flex-col justify-between rounded-[1.25rem] border border-neutral-900/[8%] bg-neutral-50 shadow-[0_2px_3px_0_rgba(20,27,52,0.06)]',
    header: 'flex items-center justify-between p-6',
    cancelButton: 'cursor-pointer',
    icon: 'opacity-[52%]',
    moreHorizontalIcon: 'opacity-[54%]',
    cardRoot: 'mx-auto max-w-[46.25rem] max-lg:px-[1.25rem]',
    cardFooter:
      'h-[5.75rem] px-0 max-lg:border-b max-lg:border-b-neutral-900/[8%] max-sm:h-[3.25rem] max-sm:items-end',
    cardActions: 'max-sm:hidden',
    shareChip: 'w-[5.625rem] rounded-full',
    divider:
      'mx-auto h-[0.0625rem] w-full max-w-[50rem] bg-neutral-900/[8%] max-lg:hidden',
    textarea: 'mx-auto mb-10 max-w-[46.25rem]',
    textareaContainer: 'max-lg:px-[1.25rem]',
  },
});
