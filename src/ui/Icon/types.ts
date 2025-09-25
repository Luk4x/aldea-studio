import type { ComponentProps } from 'react';

import type { ColorGroupShade } from '@/styles/theme';

type IconProps = {
  color?: ColorGroupShade;
} & ComponentProps<'svg'>;

type IconWithDirectionProps = IconProps & {
  direction?: 'up' | 'left' | 'right' | 'down';
};

export type { IconProps, IconWithDirectionProps };
