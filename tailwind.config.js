/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'], // Custom sans-serif font
        serif: ['Georgia', 'serif'], // Custom serif font
        mono: ['Menlo', 'Monaco', 'Courier New', 'monospace'], // Custom monospace font
        custom: ['Your Custom Font', 'sans-serif'], // Your custom font
      },
      keyframes: {
        'bounce-right': {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(5px)' },
        },
      },
      animation: {
        'bounce-right': 'bounce-right 1s infinite',
      },
      colors: {
        customBlue: '#1B91CF',  
      },
    },
  },
  plugins: [],
}