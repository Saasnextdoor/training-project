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
        primary: {
          bg: '#0a0a0f',
          surface: '#12121a',
        },
        accent: {
          violet: '#8b5cf6',
          cyan: '#06b6d4',
        },
      },
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        gradient: 'linear-gradient(135deg, #8b5cf6, #06b6d4)',
      },
    },
  },
  plugins: [],
}
