import { getColorValue } from '@/styles/theme';

import { iconStyles } from '../styles';
import type { IconProps } from '../types';

export function Apple({
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
        d="M4 2.5C2.61929 2.5 1.5 4.00695 1.5 5.5139C1.5 7.272 1.75 8.5278 2.75 10.0347C3.51022 11.0531 4.52513 11.3084 5.60695 10.5951L6 10.3586L6.39305 10.5951C7.47485 11.3084 8.4898 11.0531 9.25 10.0347C10.25 8.5278 10.5 7.272 10.5 5.5139C10.5 4.00695 9.3807 2.5 8 2.5C7.2873 2.5 6.4554 3.07618 6 3.5C5.5446 3.07618 4.71271 2.5 4 2.5Z"
        stroke={getColorValue(color)}
        className={styles.container()}
        strokeWidth="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 6C3 5.18325 3.41136 4.36649 4 4"
        stroke={getColorValue(color)}
        className={styles.container()}
        strokeWidth="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 3C6 2.33333 6.3 1 7.5 1"
        stroke={getColorValue(color)}
        className={styles.container()}
        strokeWidth="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
