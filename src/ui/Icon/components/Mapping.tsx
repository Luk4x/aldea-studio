import { getColorValue } from '@/styles/theme';

import { iconStyles } from '../styles';
import type { IconProps } from '../types';

export function Mapping({
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
        d="M4 1.75V2.25M4 3.5V4M4 5.25V5.75M4 7V7.5M4 8.75V9"
        stroke={getColorValue(color)}
        className={styles.container()}
        strokeWidth="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 3V3.5M7.5 4.75V5.25M7.5 6.5V7M7.5 8.25V8.75M7.5 10V10.5"
        stroke={getColorValue(color)}
        className={styles.container()}
        strokeWidth="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 9.30616V3.30887C1 3.11949 1.107 2.94636 1.27639 2.86166L3.79258 1.60357C3.92413 1.53779 4.07797 1.53327 4.21315 1.59121L7.5 2.99986H10.5C10.7761 2.99986 11 3.22372 11 3.49986V9.99986C11 10.276 10.7761 10.4999 10.5 10.4999H7.5L4 8.99986L1.65812 9.78051C1.33435 9.88841 1 9.64741 1 9.30616Z"
        stroke={getColorValue(color)}
        className={styles.container()}
        strokeWidth="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
