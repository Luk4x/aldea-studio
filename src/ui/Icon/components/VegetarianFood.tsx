import { getColorValue } from '@/styles/theme';

import { iconStyles } from '../styles';
import type { IconProps } from '../types';

export function VegetarianFood({
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
        d="M8.5 6.6154C8.5 6.6154 8.04545 6.38465 7.5909 6.38465C6.9091 6.38465 6 7.3077 6 8.6923C6 10.0768 7.2448 11 8.5 11C9.7552 11 11 10.0768 11 8.6923C11 7.3077 10.0909 6.38465 9.4091 6.38465C8.95455 6.38465 8.5 6.6154 8.5 6.6154ZM8.5 6.6154C8.5 5.9231 8.95455 5 9.86365 5"
        stroke={getColorValue(color)}
        className={styles.container()}
        strokeWidth="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 2.5C3 2.5 2.44894 2.48496 2.36364 2.45732M2.36364 2.45732C2.04586 2.35436 1.81818 2.07656 1.81818 1.75C1.81818 1.33579 2.18449 1 2.63636 1H5.36365C5.8155 1 6.1818 1.33579 6.1818 1.75C6.1818 2.08114 5.9477 2.36215 5.62295 2.46156M2.36364 2.45732C1.55337 3.94281 1 5.18865 1 6.88855V10C1 10.5523 1.44771 11 2 11H5.25M5.62295 2.46156C5.54145 2.48649 5 2.5 5 2.5M5.62295 2.46156C6.11 3.35453 6.5091 4.1594 6.75 5.02865"
        stroke={getColorValue(color)}
        className={styles.container()}
        strokeWidth="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
