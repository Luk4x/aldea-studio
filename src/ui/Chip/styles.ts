import { tv } from 'tailwind-variants';

export const chipStyles = tv({
  slots: {
    button:
      'flex h-8 w-fit cursor-pointer items-center justify-center gap-1.5 rounded-lg border border-neutral-900/[8%] bg-neutral-50 px-3 text-xs text-neutral-900 transition-all duration-300',
    buttonVariant: '',
  },
  variants: {
    iconPosition: {
      left: {
        button: 'flex-row',
      },
      right: {
        button: 'flex-row-reverse',
      },
    },
    disabled: {
      true: {
        button: 'cursor-not-allowed opacity-50',
      },
      false: {
        button: 'hover:opacity-80',
      },
    },
    isActive: {
      true: {},
      false: {},
    },
    variant: {
      'primary-500': {},
      'highlight-500': {},
    },
  },
  compoundVariants: [
    {
      isActive: true,
      variant: 'primary-500',
      className: {
        buttonVariant:
          'border-primary-500/[24%] bg-primary-500/[4%] text-primary-500',
      },
    },
    {
      isActive: true,
      variant: 'highlight-500',
      className: {
        buttonVariant:
          'border-highlight-500/[24%] bg-highlight-500/[4%] text-highlight-500',
      },
    },
  ],
});
