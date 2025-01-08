/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        light: '#f4f4f4',
        dark: '#181517',
        red: {
          DEFAULT: '#ff0000',
          light: '#ff3333',
          dark: '#cc0000'
        }
      },
      fontFamily: {
        'konstant': ['NeueKonstantGrotesk', 'sans-serif'],
        'sans': ['NeueKonstantGrotesk', 'sans-serif'],
      },
      backdropFilter: {
        'chrome': 'blur(10px) saturate(180%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: .5 },
        }
      },
    },
  },
  plugins: [],
};
