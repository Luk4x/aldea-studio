import { getColorValue } from '@/styles/theme';

import { iconStyles } from '../styles';
import type { IconProps } from '../types';

export function Satellite({
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
        d="M8.10049 3.89949C8.90119 4.70017 10.1993 4.70017 11 3.89949L8.10049 1C7.29984 1.80067 7.29984 3.09882 8.10049 3.89949Z"
        stroke={getColorValue(color)}
        className={styles.container()}
        strokeWidth="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 4L7.25 4.75"
        stroke={getColorValue(color)}
        className={styles.container()}
        strokeWidth="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.6465 5.56252L6.43755 4.35349C6.2423 4.15822 5.9257 4.15821 5.73045 4.35348L3.39684 6.68707C2.86772 7.21617 2.86772 8.07402 3.39684 8.60317C3.92595 9.13227 4.78382 9.13227 5.31295 8.60317L7.64645 6.26962C7.8417 6.07437 7.8417 5.75777 7.6465 5.56252Z"
        stroke={getColorValue(color)}
        className={styles.container()}
        strokeWidth="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.35348 2.64637L2.64637 1.35348C2.84164 1.15822 3.15822 1.15822 3.35348 1.35348L4.64637 2.64637C4.84163 2.84164 4.84163 3.15822 4.64637 3.35348L3.35348 4.64637C3.15822 4.84163 2.84164 4.84163 2.64637 4.64637L1.35348 3.35348C1.15822 3.15822 1.15822 2.84164 1.35348 2.64637Z"
        stroke={getColorValue(color)}
        className={styles.container()}
        strokeWidth="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.35347 8.64637L8.64637 7.35347C8.84162 7.15822 9.15822 7.15822 9.35347 7.35347L10.6464 8.64637C10.8416 8.84162 10.8416 9.15822 10.6464 9.35347L9.35347 10.6464C9.15822 10.8416 8.84162 10.8416 8.64637 10.6464L7.35347 9.35347C7.15822 9.15822 7.15822 8.84162 7.35347 8.64637Z"
        stroke={getColorValue(color)}
        className={styles.container()}
        strokeWidth="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 8L7 7M5 5L4 4"
        stroke={getColorValue(color)}
        className={styles.container()}
        strokeWidth="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
