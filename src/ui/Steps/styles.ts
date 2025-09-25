import { tv } from 'tailwind-variants';

export const stepsStyles = tv({
  slots: {
    container: 'relative h-[0.0625rem] w-full',
    overlay: 'absolute h-full w-full opacity-[8%]',
    progress: 'absolute h-full transition-all duration-300',
  },
});
