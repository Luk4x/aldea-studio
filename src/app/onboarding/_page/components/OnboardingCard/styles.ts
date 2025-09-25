import { tv } from 'tailwind-variants';

export const onboardingCardStyles = tv({
  slots: {
    card: 'mx-auto mt-[4.5rem] flex h-[30.75rem] max-w-[30rem] animate-fade-in-slide-up flex-col',
    mainIcon:
      'mx-auto mt-5 grid h-14 w-14 place-items-center rounded-full bg-primary-500/[12%]',
    title:
      'mt-6 text-center text-3xl font-semibold text-black xs:leading-[1.4375rem]',
    subtitle:
      'mt-10 text-center text-lg font-semibold text-neutral-900 xs:leading-[0.9375rem]',
    description:
      'mt-4 text-center text-xs text-neutral-900 xs:leading-[0.5625rem]',
    featureList: 'mt-10 mb-[5.625rem] flex gap-2',
    featureItem:
      'flex h-[5.375rem] w-full flex-col items-center justify-center gap-[0.6875rem] rounded-xl bg-primary-500/[8%] p-3',
    featureIcon: 'min-h-[1.5rem]',
    featureLabel: 'text-center text-xs whitespace-pre-line text-neutral-900',
    chipContainer: 'flex justify-end',
    chipIcon: '-mr-[0.1875rem] opacity-[52%]',
  },
});
