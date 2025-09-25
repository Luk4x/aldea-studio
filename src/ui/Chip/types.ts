import type { ComponentProps, ComponentType } from 'react';

import type { ColorGroupShade } from '@/styles/theme';

import type { IconProps } from '../Icon';

type IconPosition = 'left' | 'right';

export type ChipProps = ComponentProps<'button'> & {
  isActive?: boolean;
  Icon?: ComponentType<IconProps>;
  iconConfig?: IconProps;
  iconPosition?: IconPosition;
  variant?: Extract<ColorGroupShade, 'primary-500' | 'highlight-500'>;
};
