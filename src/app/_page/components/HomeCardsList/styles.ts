import { tv } from 'tailwind-variants';

export const homeCardsListStyles = tv({
  slots: {
    container:
      'mt-4 flex flex-col gap-4 px-3 pb-32 hide-scroll sm:my-8 sm:gap-8',
    listItem: 'transition-all duration-300',
    card: 'mx-auto max-w-[40rem] opacity-0',
  },
  variants: {
    hasAsked: {
      true: {
        listItem: 'opacity-0',
      },
      false: {
        listItem: 'opacity-100',
      },
    },
  },
});
