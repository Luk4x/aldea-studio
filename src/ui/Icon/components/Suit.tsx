import { getColorValue } from '@/styles/theme';

import { iconStyles } from '../styles';
import type { IconProps } from '../types';

export function Suit({
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
        d="M9.00028 2L10.5296 2.35838C10.7921 2.41989 10.9585 2.67841 10.9059 2.94282L9.66113 9.19525C9.56798 9.6631 9.15738 10 8.68038 10H8.50028M3.00028 2L1.47097 2.35838C1.20849 2.41989 1.04203 2.67842 1.09467 2.94282L2.33943 9.19525C2.43256 9.6631 2.84317 10 3.32018 10H3.50028"
        stroke={getColorValue(color)}
        className={styles.container()}
        strokeWidth="0.75"
        strokeLinecap="round"
      />
      <path
        d="M5 3.5L5.78555 4.75L4.5 9L5.99965 11L7.49965 9L6.214 4.75L7 3.5"
        stroke={getColorValue(color)}
        className={styles.container()}
        strokeWidth="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 2.5L4 1L3 2L4.5 4L6 2.5ZM6 2.5L8 1L9 2L7.5 4L6 2.5Z"
        stroke={getColorValue(color)}
        className={styles.container()}
        strokeWidth="0.75"
        strokeLinejoin="round"
      />
    </svg>
  );
}
