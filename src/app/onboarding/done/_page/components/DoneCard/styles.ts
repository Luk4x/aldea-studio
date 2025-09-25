import { tv } from 'tailwind-variants';

export const doneCardStyles = tv({
  slots: {
    card: 'mx-auto mt-[4.5rem] flex h-[30.75rem] max-w-[30rem] animate-fade-in-slide-up flex-col',
    mainIcon:
      'mx-auto mt-5 grid h-14 w-14 place-items-center rounded-full bg-primary-500/[12%]',
    title:
      'mt-6 text-center text-3xl font-semibold text-black xs:leading-[1.4375rem]',
    subtitle:
      'mt-[4.5rem] text-center text-lg font-semibold text-neutral-900 xs:leading-[0.9375rem]',
    description:
      'mt-4 h-[1.6875rem] text-center text-xs text-neutral-900 sm:px-14',
    chipContainer: 'mt-[10.375rem] flex justify-end',
    chipIcon: '-mr-[0.1875rem] opacity-[52%]',
  },
});
