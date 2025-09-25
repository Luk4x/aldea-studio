import { getColorValue } from '@/styles/theme';

import { iconStyles } from '../styles';
import type { IconProps } from '../types';

export function WorkoutGymnastics({
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
        d="M3.5 4.75C3.5 5.1642 3.16421 5.5 2.75 5.5C2.33579 5.5 2 5.1642 2 4.75C2 4.33579 2.33579 4 2.75 4C3.16421 4 3.5 4.33579 3.5 4.75Z"
        stroke={getColorValue(color)}
        className={styles.container()}
        strokeWidth="0.75"
      />
      <path
        d="M4.5 1.5L4.8233 3.76306C4.8502 3.95135 4.87297 4.11078 4.8902 4.25M4.8902 4.25C4.92914 4.5645 4.9398 4.77598 4.90592 4.98474C4.86399 5.2431 4.75601 5.48385 4.55112 5.89715M4.8902 4.25L8.07025 5.57145C8.2202 5.63375 8.35075 5.7307 8.4527 5.8522M3.5 8L4.44121 6.1176C4.48051 6.039 4.51725 5.9655 4.55112 5.89715M4.55112 5.89715L7.3125 7M10 10.5L8.64015 6.19375C8.60015 6.0672 8.536 5.9515 8.4527 5.8522M8.4527 5.8522L7.3125 7M7.3125 7L6 10.5"
        stroke={getColorValue(color)}
        className={styles.container()}
        strokeWidth="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
