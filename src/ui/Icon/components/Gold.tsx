import { getColorValue } from '@/styles/theme';

import { iconStyles } from '../styles';
import type { IconProps } from '../types';

export function Gold({
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
        d="M4.31063 4.75746L3.90531 6.37875C3.82642 6.6943 4.0651 7 4.39039 7H7.6096C7.9349 7 8.1736 6.6943 8.0947 6.37875L7.68935 4.75746C7.57805 4.31229 7.1781 4 6.7192 4H5.2808C4.82191 4 4.42192 4.31229 4.31063 4.75746Z"
        stroke={getColorValue(color)}
        className={styles.container()}
        strokeWidth="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.56063 8.75745L1.15531 10.3787C1.07642 10.6943 1.3151 11 1.64039 11H4.85961C5.1849 11 5.4236 10.6943 5.3447 10.3787L4.93936 8.75745C4.82807 8.3123 4.42809 8 3.96922 8H2.53077C2.07191 8 1.67192 8.3123 1.56063 8.75745Z"
        stroke={getColorValue(color)}
        className={styles.container()}
        strokeWidth="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.06066 8.75745L6.65531 10.3787C6.57641 10.6943 6.81511 11 7.14041 11H10.3596C10.6849 11 10.9236 10.6943 10.8447 10.3787L10.4394 8.75745C10.3281 8.3123 9.92811 8 9.46921 8H8.03081C7.57191 8 7.17196 8.3123 7.06066 8.75745Z"
        stroke={getColorValue(color)}
        className={styles.container()}
        strokeWidth="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 1V2M3.75 1.75L4.5 2.5M8.25 1.75L7.5 2.5"
        stroke={getColorValue(color)}
        className={styles.container()}
        strokeWidth="0.75"
        strokeLinecap="round"
      />
    </svg>
  );
}
