module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'main-color': {
          dark: '#0f172a',
          light: '#FFFFFF',
        },
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        aclonica: ['Aclonica', 'sans-serif'],
      },
      height: {
        links: 'calc(100vh - 20rem)',
      },
    },
  },
  plugins: [require('tailwindcss-neumorphism')],
}
