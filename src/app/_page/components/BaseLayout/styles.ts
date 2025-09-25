import { tv } from 'tailwind-variants';

export const baseLayoutStyles = tv({
  slots: {
    header: 'sticky top-4 z-30 mt-4 flex h-8 items-center justify-between px-6',
    userContainer: 'flex items-center gap-4',
    userDropdown:
      'flex h-8 w-12 items-center gap-1 rounded-full bg-neutral-900/[8%] p-1',
    userProfilePic: 'rounded-full',
  },
});
