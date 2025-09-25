import { getColorValue } from '@/styles/theme';

import { iconStyles } from '../styles';
import type { IconProps } from '../types';

export function CheckmarkSquare({
  width = 24,
  height = 24,
  color = 'primary-500',
  ...svgProps
}: IconProps) {
  const styles = iconStyles();

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...svgProps}
    >
      <path
        d="M21 10V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H15"
        stroke={getColorValue(color)}
        className={styles.container()}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 10L12 13L21 3"
        stroke={getColorValue(color)}
        className={styles.container()}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
