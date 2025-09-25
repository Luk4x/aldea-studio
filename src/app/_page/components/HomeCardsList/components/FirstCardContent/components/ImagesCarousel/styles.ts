import { tv } from 'tailwind-variants';

export const imagesCarouselStyles = tv({
  slots: {
    container: 'relative',
    list: 'flex gap-2.5',
    listItem:
      'group relative flex-1 transition-all duration-300 ease-out hover:flex-[2] max-sm:last:hidden',
    image: 'h-32 w-full rounded-md object-cover transition-all duration-300',
    button:
      'absolute top-1/2 -right-4 grid size-8 -translate-y-1/2 place-items-center rounded-full bg-neutral-50 shadow-[0_2px_3px_0_rgba(20,27,52,0.06)]',
    icon: 'opacity-[52%]',
  },
});
