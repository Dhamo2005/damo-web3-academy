/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        primary_blue: "#1a73e8", 
        // brightRed: "hsl(12, 88%, 59%)",
        // brightRedLight: "hsl(12, 88%, 69%)",
        // brightRedSupLight: "hsl(12, 88%, 95%)",
        // darkBlue: "hsl(228, 39%, 23%)",
        // darkGrayishBlue: "darkorange",
        // vereyDarkBlue: "hsl(223, 12%, 13%)",
        // vereyPaleRed: "hsl(13, 100%, 96%)",
        // veryLightGray: "hsl(0, 0%, 98%)",
      },
      dropShadow: {
        'navbar': [
          '0 3px 4px 0 rgb(0 0 0 / 20%)', 
          '0 3px 3px -2px rgb(0 0 0 / 14%)', 
          '0 1px 8px 0 rgb(0 0 0 / 12%)',
        ]
        
      }
    },
  },
  plugins: [],
};
