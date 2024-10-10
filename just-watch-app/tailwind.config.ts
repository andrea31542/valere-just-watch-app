import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        colors: {
          primary: 'var(--color-primary)',
          secondary: 'var(--color-secondary)',
          tertiary: 'var(--color-tertiary)',
          light: 'var(--color-light)',
        },
      },
      fontFamily: {
        lato: ['"Lato"', '"Lato-fallback"', 'Arial', 'sans-serif'],
        anton: ['Anton', 'Anton-Fallback', 'Impact'],
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      corePlugins: {
        scrollbar: false,
      },
    },
  },
  plugins: [],
};
export default config;
