import { getColorValue } from '@/styles/theme';

import { iconStyles } from '../styles';
import type { IconProps } from '../types';

export function Share({
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
        d="M7.8298 3.75H6.96175C4.50652 3.75 3.2789 3.75 2.51616 4.48223C1.75342 5.21447 1.75342 6.39297 1.75342 8.75V12.0833C1.75342 14.4403 1.75342 15.6188 2.51616 16.3511C3.2789 17.0833 4.50652 17.0833 6.96175 17.0833H10.4673C12.9225 17.0833 14.1501 17.0833 14.9129 16.3511C15.407 15.8767 15.581 15.2149 15.6423 14.1667"
        stroke={getColorValue(color)}
        className={styles.container()}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.4723 5.83317V3.21113C13.4723 3.04841 13.6097 2.9165 13.7792 2.9165C13.8605 2.9165 13.9386 2.94755 13.9962 3.0028L17.9396 6.78855C18.1362 6.97719 18.2465 7.23305 18.2465 7.49984C18.2465 7.76662 18.1362 8.02249 17.9396 8.21113L13.9962 11.9968C13.9386 12.0522 13.8605 12.0832 13.7792 12.0832C13.6097 12.0832 13.4723 11.9513 13.4723 11.7885V9.1665H10.9298C7.39583 9.1665 6.09375 12.0832 6.09375 12.0832V9.99984C6.09375 7.69865 8.03696 5.83317 10.434 5.83317H13.4723Z"
        stroke={getColorValue(color)}
        className={styles.container()}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
