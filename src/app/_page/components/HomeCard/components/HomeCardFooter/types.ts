import type { ComponentProps, ReactNode } from 'react';

export type HomeCardFooterProps = ComponentProps<'footer'> & {
  sideAction?: ReactNode;
};
