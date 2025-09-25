import { getColorValue } from '@/styles/theme';

import { iconStyles } from '../styles';
import type { IconProps } from '../types';

export function WorkoutSport({
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
        d="M8 2.25C8 2.66421 7.6642 3 7.25 3C6.8358 3 6.5 2.66421 6.5 2.25C6.5 1.83579 6.8358 1.5 7.25 1.5C7.6642 1.5 8 1.83579 8 2.25Z"
        stroke={getColorValue(color)}
        className={styles.container()}
        strokeWidth="0.75"
      />
      <path
        d="M2.5 5.99995L3.42417 4.41248C3.48514 4.30774 3.58208 4.22871 3.69696 4.1901L5.5374 3.57147C5.67265 3.52601 5.82085 3.5405 5.94475 3.61129L7.36855 4.42485C7.45425 4.47383 7.52355 4.54708 7.5677 4.63538L8.0775 5.65495C8.17915 5.85825 8.4051 5.9674 8.6275 5.9207L9.5 5.7374"
        stroke={getColorValue(color)}
        className={styles.container()}
        strokeWidth="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.75 3.75L4 7M4 7L4.9867 8.3814C5.13615 8.5906 5.10255 8.879 4.90909 9.0483L3.25 10.5M4 7H5.75M5.75 7H6.75C6.9074 7 7.05555 7.0741 7.15 7.2L8.5 9M5.75 7L7.48815 4.51691"
        stroke={getColorValue(color)}
        className={styles.container()}
        strokeWidth="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
