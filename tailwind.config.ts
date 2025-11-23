import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['var(--font-jetbrains-mono)'],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        accent: '#ff6b35',
      },
    },
  },
  plugins: [typography()],
} satisfies Config;
