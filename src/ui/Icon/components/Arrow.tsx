import { getColorValue } from '@/styles/theme';
import { cn } from '@/utils/cn';

import { iconDirectionStyles, iconStyles } from '../styles';
import type { IconWithDirectionProps } from '../types';

export function Arrow({
  width = 24,
  height = 24,
  color = 'primary-500',
  direction = 'right',
  className,
  ...svgProps
}: IconWithDirectionProps) {
  const directionStyles = iconDirectionStyles();
  const styles = iconStyles();

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(directionStyles.container({ direction }), className)}
      {...svgProps}
    >
      <path
        d="M10.0001 11.3334L13.3333 8.00008L10 4.66675"
        stroke={getColorValue(color)}
        className={styles.container()}
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.66675 8H13.3334"
        stroke={getColorValue(color)}
        className={styles.container()}
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
