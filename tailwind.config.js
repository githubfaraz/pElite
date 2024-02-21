
const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        burgundy: '#800020',
        cream: '#006400',
        beige: '#F5F5DC'
      },
      fontSize: {
        '7xl': '4.75rem',
        '9xl': '3.75rem',
        '8xl': '1.7rem'
      },
      lineHeight: {
        '7xl': '4.5rem',
        '9xl': '4rem',
        '8xl':'2.9rem'
      },
      fontFamily: {
        'playfair_display': ['Playfair Display', 'serif'],
      },
      margin:{
        '7xl': '36rem'
      }
    },
  },
  plugins: [],
};
export default config;
