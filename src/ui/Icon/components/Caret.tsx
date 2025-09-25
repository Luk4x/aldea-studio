import { getColorValue } from '@/styles/theme';
import { cn } from '@/utils/cn';

import { iconDirectionStyles, iconStyles } from '../styles';
import type { IconWithDirectionProps } from '../types';

export function Caret({
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
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(directionStyles.container({ direction }), className)}
      {...svgProps}
    >
      <path
        d="M7.50004 5L12.5 10L7.5 15"
        stroke={getColorValue(color)}
        className={styles.container()}
        strokeWidth="1.25"
        strokeMiterlimit="16"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
