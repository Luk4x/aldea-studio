import { getColorValue } from '@/styles/theme';

import { iconStyles } from '../styles';
import type { IconProps } from '../types';

export function Plant({
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
        d="M5.0315 4.5315C5.65615 3.90685 5.65615 2.89407 5.0315 2.26942C4.08897 1.32688 2.01539 1.51539 2.01539 1.51539C2.01539 1.51539 1.82688 3.58897 2.76942 4.5315C3.39407 5.15615 4.40685 5.15615 5.0315 4.5315Z"
        stroke={getColorValue(color)}
        className={styles.container()}
        strokeWidth="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.40155 5.59845C7.937 6.13385 8.8051 6.13385 9.3405 5.59845C10.1484 4.79055 9.9868 3.01319 9.9868 3.01319C9.9868 3.01319 8.20945 2.85161 7.40155 3.6595C6.86615 4.19493 6.86615 5.063 7.40155 5.59845Z"
        stroke={getColorValue(color)}
        className={styles.container()}
        strokeWidth="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.25 5.75C7.25 5.75 6 6.75 6 8.5C6 6.00035 5 4.75 5 4.75"
        stroke={getColorValue(color)}
        className={styles.container()}
        strokeWidth="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.5 10.5C9.4006 9.27355 7.79205 8.5 6 8.5C4.20796 8.5 2.59941 9.27355 1.5 10.5"
        stroke={getColorValue(color)}
        className={styles.container()}
        strokeWidth="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
