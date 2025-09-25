import { getColorValue } from '@/styles/theme';

import { iconStyles } from '../styles';
import type { IconProps } from '../types';

export function Message({
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
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...svgProps}
    >
      <path
        d="M11.8089 16.9919C15.2947 16.7603 18.0714 13.9442 18.2999 10.4089C18.3446 9.71709 18.3446 9.00059 18.2999 8.30875C18.0714 4.77349 15.2947 1.95745 11.8089 1.72573C10.6197 1.64668 9.37808 1.64685 8.19125 1.72573C4.7054 1.95745 1.92875 4.77349 1.70028 8.30875C1.65557 9.00059 1.65557 9.71709 1.70028 10.4089C1.7835 11.6965 2.35294 12.8887 3.02334 13.8953C3.41259 14.6001 3.1557 15.4797 2.75025 16.248C2.45792 16.802 2.31175 17.079 2.42911 17.2791C2.54648 17.4792 2.80863 17.4856 3.33294 17.4983C4.3698 17.5236 5.06898 17.2296 5.62398 16.8203C5.93875 16.5883 6.09614 16.4722 6.20461 16.4588C6.31308 16.4455 6.52655 16.5334 6.95342 16.7093C7.33708 16.8673 7.78255 16.9648 8.19125 16.9919C9.37808 17.0708 10.6197 17.071 11.8089 16.9919Z"
        stroke={getColorValue(color)}
        className={styles.container()}
        strokeWidth="1.25"
        strokeLinejoin="round"
      />
      <path
        d="M9.99633 9.5835H10.0037M13.3259 9.5835H13.3334M6.66675 9.5835H6.67422"
        stroke={getColorValue(color)}
        className={styles.container()}
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
