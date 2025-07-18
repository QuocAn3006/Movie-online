import type { Config } from 'tailwindcss';
import { content, plugin } from 'flowbite-react/tailwind';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    content(),
  ],
  theme: {
    extend: {
      colors: {
        primary: '#e4d804',
      },
      screens: {
        touch: { raw: 'hover: none' },
      },
    },
  },
  plugins: [plugin()],
};
export default config;
