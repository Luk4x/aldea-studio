import type { ComponentProps } from 'react';

export type ConnectionProps = ComponentProps<'div'> & {
  logo: string;
  label: string;
  connected: boolean;
  onConnect: VoidFunction;
};
