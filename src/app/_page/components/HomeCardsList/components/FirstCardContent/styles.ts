import { tv } from 'tailwind-variants';

export const firstCardContentStyles = tv({
  slots: {
    container: 'mt-4 mb-7 flex flex-col sm:mt-6',
    intro: 'mt-6 mb-3.5 text-sm',
    descriptionContainer: 'flex items-start gap-2.5 py-1.5',
    image: 'pt-1',
    description: 'text-sm',
    bold: 'font-semibold',
    highlight: 'text-highlight-500',
  },
});
