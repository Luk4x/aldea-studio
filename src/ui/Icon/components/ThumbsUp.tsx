import { getColorValue } from '@/styles/theme';

import { iconStyles } from '../styles';
import type { IconProps } from '../types';

export function ThumbsUp({
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
        d="M5.83341 17.0833H2.50008C2.03984 17.0833 1.66675 16.7102 1.66675 16.25V9.58333C1.66675 9.12308 2.03985 8.75 2.50008 8.75H5.83341"
        stroke={getColorValue(color)}
        className={styles.container()}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.9563 17.0832H5.83325V8.74986L11.5964 2.9165L11.6555 2.97634C12.8599 4.19542 13.1982 6.0394 12.5064 7.61485L12.0081 8.74986H16.6853C17.8196 8.74986 18.6142 9.88345 18.2394 10.9671L16.5105 15.9671C16.2793 16.6355 15.6561 17.0832 14.9563 17.0832Z"
        stroke={getColorValue(color)}
        className={styles.container()}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}
