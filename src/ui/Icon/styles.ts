import { tv } from 'tailwind-variants';

const iconStyles = tv({
  slots: {
    container: 'transition-all duration-300',
  },
});

const iconDirectionStyles = tv({
  slots: {
    container: '',
  },
  variants: {
    direction: {
      up: {
        container: '-rotate-90',
      },
      down: {
        container: 'rotate-90',
      },
      left: {
        container: 'rotate-180',
      },
      right: {
        container: '',
      },
    },
  },
});

export { iconDirectionStyles, iconStyles };
