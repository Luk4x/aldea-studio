import type { ComponentProps, ReactElement } from 'react';

type ActionProps = {
  content: string | ReactElement;
  className?: string;
};

export type HomeCardActionsProps = ComponentProps<'div'> & {
  actions: Array<ActionProps>;
};
