/** @type {import('tailwindcss').Config} */
// tailwind.config.js
// Configuración de Tailwind CSS para FEPAST
// Personaliza colores, fuentes y breakpoints.
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fdf2f8',
          100: '#F0C9DB',
          200: '#e2adc7',
          300: '#CF6D9B',
          400: '#c24f8a',
          500: '#A43570',
          600: '#821C53',
          700: '#6e1845',
          800: '#5a1438',
          900: '#46102b',
        },
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        }
      },
      fontFamily: {
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}