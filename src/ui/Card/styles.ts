import { tv } from 'tailwind-variants';

const baseCard = 'rounded-[1.25rem] border border-neutral-900/[8%]';

export const cardStyles = tv({
  slots: {
    container: 'relative',
    section: `${baseCard} z-10 bg-neutral-100 p-5 shadow-[0_0_2px_0_rgba(20,27,52,0.06)]`,
    secondExtraBg: `${baseCard} absolute -bottom-3 left-1/2 h-full w-[calc(100%-1.5rem)] -translate-x-1/2 bg-neutral-150`,
    firstExtraBg: `${baseCard} absolute -bottom-6 left-1/2 h-full w-[calc(100%-3rem)] -translate-x-1/2 bg-neutral-150`,
  },
});
