import { tv } from 'tailwind-variants';

export const homeCardActionsStyles = tv({
  slots: {
    container: 'w-full rounded-xl bg-neutral-900/[2%] p-3',
    list: 'flex flex-wrap gap-3',
    icon: 'opacity-[52%]',
    chip: '',
  },
  variants: {
    isFirst: {
      true: {
        chip: 'shadow-[0_2px_3px_0_rgba(20,27,52,0.06)]',
      },
      false: {},
    },
  },
});
