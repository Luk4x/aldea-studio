import type { ComponentProps } from 'react';

import type { ColorGroupShade } from '@/styles/theme';

export type StepsProps = ComponentProps<'div'> & {
  current: number;
  max: number;
  color?: ColorGroupShade;
};
