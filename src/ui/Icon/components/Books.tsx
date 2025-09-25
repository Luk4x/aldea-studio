import { getColorValue } from '@/styles/theme';

import { iconStyles } from '../styles';
import type { IconProps } from '../types';

export function Books({
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
        d="M2.75 2.25C3.25 2.5 3.5 3 3.5 3.5C3.5 4 3.25 4.5 2.75 4.75"
        stroke={getColorValue(color)}
        className={styles.container()}
        strokeWidth="0.75"
        strokeLinecap="round"
      />
      <path
        d="M2.75 7.25C3.25 7.5 3.5 8 3.5 8.5C3.5 9 3.25 9.5 2.75 9.75"
        stroke={getColorValue(color)}
        className={styles.container()}
        strokeWidth="0.75"
        strokeLinecap="round"
      />
      <path
        d="M9.25 4.75C8.75 5 8.5 5.5 8.5 6C8.5 6.5 8.75 7 9.25 7.25"
        stroke={getColorValue(color)}
        className={styles.container()}
        strokeWidth="0.75"
        strokeLinecap="round"
      />
      <path
        d="M2.5 2.25H9.75C10.1642 2.25 10.5 2.58579 10.5 3V3.99999C10.5 4.4142 10.1642 4.74999 9.75 4.74999H2.5"
        stroke={getColorValue(color)}
        className={styles.container()}
        strokeWidth="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 4.75H2.25C1.83579 4.75 1.5 5.0858 1.5 5.5V6.5C1.5 6.9142 1.83579 7.25 2.25 7.25H9.5"
        stroke={getColorValue(color)}
        className={styles.container()}
        strokeWidth="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 7.25H9.75C10.1642 7.25 10.5 7.5858 10.5 8V9C10.5 9.4142 10.1642 9.75 9.75 9.75H2.5"
        stroke={getColorValue(color)}
        className={styles.container()}
        strokeWidth="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
