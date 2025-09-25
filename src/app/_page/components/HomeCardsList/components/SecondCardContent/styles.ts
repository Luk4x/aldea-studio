import { tv } from 'tailwind-variants';

export const secondCardContentStyles = tv({
  slots: {
    description: 'mt-3 mb-3 text-sm sm:mt-4',
    listContainer: 'mb-3',
    listItem: 'flex items-start gap-2.5 p-2.5 text-sm',
  },
});
