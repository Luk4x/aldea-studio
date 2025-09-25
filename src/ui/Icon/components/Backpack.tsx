import { getColorValue } from '@/styles/theme';

import { iconStyles } from '../styles';
import type { IconProps } from '../types';

export function Backpack({
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
        d="M9.5 7.5H10.75V8.75C10.75 8.98235 10.75 9.0985 10.7308 9.1951C10.6519 9.5918 10.3418 9.9019 9.9451 9.9808C9.8485 10 9.73235 10 9.5 10"
        stroke={getColorValue(color)}
        className={styles.container()}
        strokeWidth="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 7.5H1.25V8.75C1.25 8.98235 1.25 9.0985 1.26921 9.1951C1.34812 9.5918 1.65822 9.9019 2.05491 9.9808C2.15151 10 2.26767 10 2.5 10"
        stroke={getColorValue(color)}
        className={styles.container()}
        strokeWidth="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.50085 4.5V3.50001C9.50085 2.94772 9.05315 2.50001 8.50085 2.50001L3.5 2.5C2.94771 2.5 2.5 2.94771 2.5 3.5V4.5C2.5 5.60455 3.39543 6.5 4.5 6.5H7.50085C8.6054 6.5 9.50085 5.60455 9.50085 4.5Z"
        stroke={getColorValue(color)}
        className={styles.container()}
        strokeWidth="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.5 6.5V7.5"
        stroke={getColorValue(color)}
        className={styles.container()}
        strokeWidth="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 6.5V7.5"
        stroke={getColorValue(color)}
        className={styles.container()}
        strokeWidth="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 4.5V10C9.5 10.5523 9.0523 11 8.5 11H3.5C2.94771 11 2.5 10.5523 2.5 10V4.5"
        stroke={getColorValue(color)}
        className={styles.container()}
        strokeWidth="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 2.5C7.5 1.67158 6.82845 1 6 1C5.17155 1 4.5 1.67158 4.5 2.5"
        stroke={getColorValue(color)}
        className={styles.container()}
        strokeWidth="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
