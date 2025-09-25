import { getColorValue } from '@/styles/theme';

import { iconStyles } from '../styles';
import type { IconProps } from '../types';

export function Stars({
  width = 25,
  height = 24,
  color = 'primary-500',
  ...svgProps
}: IconProps) {
  const styles = iconStyles();

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...svgProps}
    >
      <path
        d="M3.8335 12C8.3335 12 12.8335 7.5 12.8335 3C12.8335 7.5 17.3335 12 21.8335 12C17.3335 12 12.8335 16.5 12.8335 21C12.8335 16.5 8.3335 12 3.8335 12Z"
        stroke={getColorValue(color)}
        className={styles.container()}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M2.8335 19.5C3.66683 19.5 5.3335 17.8333 5.3335 17C5.3335 17.8333 7.00017 19.5 7.8335 19.5C7.00017 19.5 5.3335 21.1667 5.3335 22C5.3335 21.1667 3.66683 19.5 2.8335 19.5Z"
        stroke={getColorValue(color)}
        className={styles.container()}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M16.8335 5C17.8335 5 19.8335 3 19.8335 2C19.8335 3 21.8335 5 22.8335 5C21.8335 5 19.8335 7 19.8335 8C19.8335 7 17.8335 5 16.8335 5Z"
        stroke={getColorValue(color)}
        className={styles.container()}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}
