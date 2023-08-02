/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        app: {
          blue: '#3B7DED',
          darkGray: '#363B42',
        }
      },
      fontFamily: {
        roboto: ['var(--font-roboto)'],
        oxygen: ['var(--font-oxygen)'],
      }
    },
  },
  plugins: [],
}
