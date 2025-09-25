import { getColorValue } from '@/styles/theme';

import { iconStyles } from '../styles';
import type { IconProps } from '../types';

export function UserGroup({
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
        d="M7.75 5.5C7.75 4.5335 6.9665 3.75 6 3.75C5.0335 3.75 4.25 4.5335 4.25 5.5C4.25 6.4665 5.0335 7.25 6 7.25C6.9665 7.25 7.75 6.4665 7.75 5.5Z"
        stroke={getColorValue(color)}
        className={styles.container()}
        strokeWidth="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.74149 5.67495C7.90249 5.72375 8.07324 5.75 8.25014 5.75C9.21664 5.75 10.0001 4.9665 10.0001 4C10.0001 3.0335 9.21664 2.25 8.25014 2.25C7.34269 2.25 6.59654 2.9407 6.50879 3.82506"
        stroke={getColorValue(color)}
        className={styles.container()}
        strokeWidth="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.49135 3.82506C5.4036 2.9407 4.65746 2.25 3.75 2.25C2.7835 2.25 2 3.0335 2 4C2 4.9665 2.7835 5.75 3.75 5.75C3.92691 5.75 4.09768 5.72375 4.25864 5.67495"
        stroke={getColorValue(color)}
        className={styles.container()}
        strokeWidth="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 8.25C11 6.8693 9.7688 5.75 8.25 5.75"
        stroke={getColorValue(color)}
        className={styles.container()}
        strokeWidth="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.75 9.75C8.75 8.3693 7.5188 7.25 6 7.25C4.48122 7.25 3.25 8.3693 3.25 9.75"
        stroke={getColorValue(color)}
        className={styles.container()}
        strokeWidth="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.75 5.75C2.23122 5.75 1 6.8693 1 8.25"
        stroke={getColorValue(color)}
        className={styles.container()}
        strokeWidth="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
