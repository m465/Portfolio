/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#221f1f",
          "200": "rgba(255, 255, 255, 0.5)",
        },
        white: "#ffffff",
        bg: "#7db2ba",
        grey: "#d9d9d9",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        body: "'Space Grotesk'",
        poppins: "Poppins",
      },
      borderRadius: {
        "30xl": "49px",
      },
    },
    fontSize: {
      "13xl": "2rem",
      lgi: "1.188rem",
      "7xl": "1.625rem",
      base: "1rem",
      "5xl": "1.5rem",
      "56xl": "4.688rem",
      "26xl": "2.813rem",
      "41xl": "3.75rem",
      lg: "1.125rem",
      "29xl": "3rem",
      "10xl": "1.813rem",
      "19xl": "2.375rem",
      "2xl": "1.313rem",
      "81xl": "6.25rem",
      "11xl": "1.875rem",
      "31xl": "3.125rem",
      "9xl": "1.75rem",
      "3xl": "1.375rem",
      "8xl": "1.688rem",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
