import { getColorValue } from '@/styles/theme';

import { iconStyles } from '../styles';
import type { IconProps } from '../types';

export function Droplet({
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
        d="M5.4673 1.21045C4.51745 1.94019 1.5 4.44667 1.5 6.83883C1.5 8.89003 3.10939 10.9998 5.75 10.9998C8.3906 10.9998 10 8.89003 10 6.83883C10 4.44667 6.98255 1.94019 6.0327 1.21045C5.8649 1.08154 5.6351 1.08154 5.4673 1.21045Z"
        stroke={getColorValue(color)}
        className={styles.container()}
        strokeWidth="0.75"
        strokeLinejoin="round"
      />
      <path
        d="M7.75 7C7.75 8.10455 6.85455 9 5.75 9"
        stroke={getColorValue(color)}
        className={styles.container()}
        strokeWidth="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
