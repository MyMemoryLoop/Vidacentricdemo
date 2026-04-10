import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'vc-blue': '#4169E1',
        'vc-dark-navy': '#1A1F36',
        'vc-light-grey': '#F0F2F5',
        'vc-success': '#22C55E',
        'vc-warning': '#F59E0B',
        'vc-danger': '#EF4444',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
