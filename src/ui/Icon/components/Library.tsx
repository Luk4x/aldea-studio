import { getColorValue } from '@/styles/theme';

import { iconStyles } from '../styles';
import type { IconProps } from '../types';

export function Library({
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
        d="M5.25005 10V2.5C5.25005 2.08579 4.91425 1.75 4.50003 1.75H2.00003C1.58582 1.75 1.25004 2.08579 1.25003 2.49999L1.25 10C1.25 10.4142 1.58579 10.75 2 10.75H4.50003C4.91425 10.75 5.25005 10.4142 5.25005 10Z"
        stroke={getColorValue(color)}
        className={styles.container()}
        strokeWidth="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.25 9H3.25449"
        stroke={getColorValue(color)}
        className={styles.container()}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.75 9H8.7545"
        stroke={getColorValue(color)}
        className={styles.container()}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.1249 10.3571C10.5265 10.2935 10.8026 9.90245 10.7416 9.4837L9.63656 1.90178C9.57551 1.48305 9.20045 1.19518 8.7989 1.25881L6.37511 1.64288C5.97351 1.70652 5.69741 2.09756 5.75846 2.51629L6.86346 10.0982C6.92446 10.517 7.29951 10.8048 7.70111 10.7412L10.1249 10.3571Z"
        stroke={getColorValue(color)}
        className={styles.container()}
        strokeWidth="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.75935 3.30884L6 4.00002"
        stroke={getColorValue(color)}
        className={styles.container()}
        strokeWidth="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.25 3.75H5.25"
        stroke={getColorValue(color)}
        className={styles.container()}
        strokeWidth="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
