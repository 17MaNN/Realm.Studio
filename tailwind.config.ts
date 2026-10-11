import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#E9EEF2',
        foreground: '#12202B',
        muted: {
          DEFAULT: '#DEE4E9',
          foreground: '#4A5B68',
        },
        primary: {
          DEFAULT: '#12202B',
          foreground: '#FFFFFF',
        },
        accent: {
          DEFAULT: '#1F4FFF',
          foreground: '#FFFFFF',
        },
        signal: '#FFD23F',
      },
      minHeight: {
        '50': '12.5rem',
      },
    },
  },
  plugins: [],
};

export default config;
