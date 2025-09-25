import { getColorValue } from '@/styles/theme';

import { iconStyles } from '../styles';
import type { IconProps } from '../types';

export function AudioWave({
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
        d="M2.5 11.6667V7.91667C2.5 7.22631 3.05964 6.66667 3.75 6.66667C4.44036 6.66667 5 7.22631 5 7.91667V13.75C5 14.4403 5.55964 15 6.25 15C6.94036 15 7.5 14.4403 7.5 13.75V3.75C7.5 3.05964 8.05964 2.5 8.75 2.5C9.44033 2.5 10 3.05964 10 3.75V16.25C10 16.9403 10.5597 17.5 11.25 17.5C11.9403 17.5 12.5 16.9403 12.5 16.25V7.08333C12.5 6.39297 13.0597 5.83333 13.75 5.83333C14.4403 5.83333 15 6.39297 15 7.08333V12.9167C15 13.607 15.5597 14.1667 16.25 14.1667C16.9403 14.1667 17.5 13.607 17.5 12.9167V10"
        stroke={getColorValue(color)}
        className={styles.container()}
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
