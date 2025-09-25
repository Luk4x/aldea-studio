import { getColorValue } from '@/styles/theme';

import { iconStyles } from '../styles';
import type { IconProps } from '../types';

export function AddCircle({
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
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...svgProps}
    >
      <path
        d="M8.00016 0.833252C11.9582 0.833252 15.1668 4.04188 15.1668 7.99992C15.1668 11.958 11.9582 15.1666 8.00016 15.1666C4.04212 15.1666 0.833496 11.958 0.833496 7.99992C0.833496 4.04188 4.04212 0.833252 8.00016 0.833252ZM8.00016 4.66658C7.63196 4.66658 7.3335 4.96507 7.3335 5.33325V7.33325H5.3335C4.96531 7.33325 4.66683 7.63172 4.66683 7.99992C4.66683 8.36812 4.96531 8.66658 5.3335 8.66658H7.3335V10.6666C7.3335 11.0348 7.63196 11.3333 8.00016 11.3333C8.36836 11.3333 8.66683 11.0348 8.66683 10.6666V8.66658H10.6668C11.035 8.66658 11.3335 8.36812 11.3335 7.99992C11.3335 7.63172 11.035 7.33325 10.6668 7.33325H8.66683V5.33325C8.66683 4.96507 8.36836 4.66658 8.00016 4.66658Z"
        fill={getColorValue(color)}
        className={styles.container()}
      />
    </svg>
  );
}
