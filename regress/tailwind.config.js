/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#194DD3",
        "primary-100": "#EEF0FE",
        "primary-200": "#BFC6FC",
        "primary-300": "#8C9CFA",
        secondary: "#4219D3",
        "secondary-100": "#DCD9FD",
        "secondary-200": "#B3ACFB",
        "secondary-300": "#8C7FF8",
        tertiary: "#19AAD3",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
    },
    plugins: [
      plugin(({ addUtilities }) => {
        const scrollUtilities = {
          ".no-scrollbar": {
            "scrollbar-width": "none",
            "-ms-overflow-style": "none",
          },
          /* Hide scrollbar for Chrome, Safari and Opera */
          ".no-scrollbar::-webkit-scrollbar": {
            display: "none",
          },
        };
        addUtilities(scrollUtilities);
      }),
    ],
  },
};
