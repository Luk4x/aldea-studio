import { getColorValue } from '@/styles/theme';

import { iconStyles } from '../styles';
import type { IconProps } from '../types';

export function RoadLocation({
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
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...svgProps}
    >
      <path
        d="M6 1C4.89543 1 4 1.90446 4 3.02018C4 4.22386 5.08955 4.83083 5.7711 5.67729C5.8863 5.82044 6.11905 5.82408 6.23685 5.68303C6.9302 4.85272 8 4.20041 8 3.02018C8 1.90446 7.10455 1 6 1Z"
        stroke={getColorValue(color)}
        className={styles.container()}
        strokeWidth="0.75"
        strokeLinejoin="round"
      />
      <path
        d="M6 3H6.0045"
        stroke={getColorValue(color)}
        className={styles.container()}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.25 7.5H8.25M6.5 7.5H5.5M3.75 7.5H2.75"
        stroke={getColorValue(color)}
        className={styles.container()}
        strokeWidth="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 4H2C1.44771 4 1 4.44772 1 4.99999V9.99999C1 10.5523 1.44771 11 2 11H10C10.5523 11 11 10.5523 11 9.99999V4.99999C11 4.44772 10.5523 4 10 4H9.5"
        stroke={getColorValue(color)}
        className={styles.container()}
        strokeWidth="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
