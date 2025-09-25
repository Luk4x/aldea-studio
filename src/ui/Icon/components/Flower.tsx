import { getColorValue } from '@/styles/theme';

import { iconStyles } from '../styles';
import type { IconProps } from '../types';

export function Flower({
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
        d="M7.24998 6.25C7.24998 6.94035 6.69038 7.5 5.99998 7.5C5.30963 7.5 4.75 6.94035 4.75 6.25C4.75 5.55965 5.30963 5 5.99998 5C6.69038 5 7.24998 5.55965 7.24998 6.25Z"
        stroke={getColorValue(color)}
        className={styles.container()}
        strokeWidth="0.75"
        strokeLinejoin="round"
      />
      <path
        d="M5.99998 1.5C7.10458 1.5 7.99903 2.4587 7.99903 3.56327C8.15913 3.52197 8.32698 3.5 8.49998 3.5C9.60458 3.5 10.5 4.39543 10.5 5.5C10.5 6.2982 10.0324 6.98725 9.35613 7.308C9.60358 7.6409 9.74998 8.05335 9.74998 8.5C9.74998 9.60455 8.85458 10.5 7.74998 10.5C6.99698 10.5 6.34118 10.0838 5.99998 9.469C5.65883 10.0838 5.00303 10.5 4.25 10.5C3.14543 10.5 2.25 9.60455 2.25 8.5C2.25 8.05335 2.39642 7.6409 2.64387 7.308C1.96762 6.98725 1.5 6.2982 1.5 5.5C1.5 4.39543 2.39543 3.5 3.5 3.5C3.673 3.5 3.84087 3.52197 4.00098 3.56326C4.00098 2.45869 4.89543 1.5 5.99998 1.5Z"
        stroke={getColorValue(color)}
        className={styles.container()}
        strokeWidth="0.75"
        strokeLinejoin="round"
      />
    </svg>
  );
}
