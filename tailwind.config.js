/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'toot-blue': '#00e6e4',
        'toot-orange': '#f5a506',
        'toot-yellow': '#f8e71c',
        'toot-red': '#e13453',
        'toot-pale-red': '#e05e75'
      },
      fontFamily: {
        sans: ['Noto Sans', 'sans-serif'],
        title: ['Multicolore']
      }
    }
  },
  plugins: []
};
