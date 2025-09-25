import { tv } from 'tailwind-variants';

export const homeCardsSkeletonListStyles = tv({
  slots: {
    container: 'my-4 flex flex-col gap-4 px-3 sm:my-8 sm:gap-8',
    list: 'flex flex-col gap-4 sm:gap-8',
    listItem: 'transition-all duration-300',
    card: 'mx-auto max-w-[40rem] opacity-100',
  },
});
