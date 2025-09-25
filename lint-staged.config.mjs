export default {
  '*.{js,ts,jsx,tsx,css,md}': [
    'pnpm dlx prettier --write --config .prettierrc',
  ],
  '*.{js,ts,jsx,tsx}': ['pnpm dlx eslint --fix'],
};
