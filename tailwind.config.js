/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#F7F9F9',
        'background-dark': '#1a1a1a',
        text: '#3A3C3D',
        'text-dark': '#e4e4e4',
        accent: '#E4E4E4',
        'accent-dark': '#3a3c3d',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

