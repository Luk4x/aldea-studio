import { Inter } from 'next/font/google';

const fontInterSans = Inter({
  variable: '--font-inter-sans-next',
  subsets: ['latin'],
  style: ['normal', 'italic'],
  display: 'swap',
  preload: true,
});

const fontVariables = `${fontInterSans.variable}`;
const fontClassNames = `${fontInterSans.className}`;

export { fontClassNames, fontInterSans, fontVariables };
