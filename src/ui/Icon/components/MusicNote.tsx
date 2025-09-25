import { getColorValue } from '@/styles/theme';

import { iconStyles } from '../styles';
import type { IconProps } from '../types';

export function MusicNote({
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
        d="M4.5 8.5C4.5 9.60455 3.60457 10.5 2.5 10.5C1.39543 10.5 0.5 9.60455 0.5 8.5C0.5 7.3954 1.39543 6.5 2.5 6.5C3.60457 6.5 4.5 7.3954 4.5 8.5Z"
        stroke={getColorValue(color)}
        className={styles.container()}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.5 8.5001V2.10355C4.5 1.88082 4.78065 1.75756 4.9607 1.88866C6.1428 2.74939 8.1926 3.4358 9.5 3C9.5 4.29983 8.91845 5.49495 7.5 5.5C6.40445 5.5039 5.21795 4.46795 4.5 3.75"
        stroke={getColorValue(color)}
        className={styles.container()}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
