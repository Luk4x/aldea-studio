import { getColorValue } from '@/styles/theme';

import { iconStyles } from '../styles';
import type { IconProps } from '../types';

export function SoftwareLicense({
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
        d="M1.5 4.25H10.5"
        stroke={getColorValue(color)}
        className={styles.container()}
        strokeWidth="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.25 2.75H3.25448M5.2455 2.75H5.25"
        stroke={getColorValue(color)}
        className={styles.container()}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.74945 1.25049L2.24946 1.25455C1.69738 1.25484 1.25 1.70247 1.25 2.25454V9.74995C1.25 10.3022 1.69771 10.7499 2.25 10.7499H9.75C10.3023 10.7499 10.75 10.3022 10.75 9.74995V2.25049C10.75 1.69799 10.3019 1.25019 9.74945 1.25049Z"
        stroke={getColorValue(color)}
        className={styles.container()}
        strokeWidth="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.75 6.5L4.75 7.5L3.75 8.5"
        stroke={getColorValue(color)}
        className={styles.container()}
        strokeWidth="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.25 8.5H7.75"
        stroke={getColorValue(color)}
        className={styles.container()}
        strokeWidth="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
