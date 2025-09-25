import { tv } from 'tailwind-variants';

export const topicsCardStyles = tv({
  slots: {
    card: 'mx-auto mt-[4.5rem] flex max-w-[30rem] animate-fade-in-slide-up flex-col',
    mainIcon:
      'mx-auto mt-5 grid h-14 w-14 place-items-center rounded-full bg-primary-500/[12%]',
    subtitle:
      'mt-6 text-center text-lg font-semibold text-neutral-900 xs:leading-[0.9375rem]',
    description:
      'mt-4 h-[1.6875rem] animate-fade-in px-2 text-center text-xs text-neutral-900',
    topicList: 'mt-10 mb-5 flex flex-wrap gap-2.5',
    topicChip: 'rounded-xl bg-neutral-100',
    topicIcon: 'opacity-[52%]',
    topicLabel: 'text-center text-xs whitespace-pre-line text-neutral-900',
    chipContainer: 'flex justify-end',
    chipIcon: '-mr-[0.1875rem] opacity-[52%]',
  },
});
