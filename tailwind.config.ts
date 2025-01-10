import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF6A1A",
        secondary: "#749B3F",
        black: "#212337",
        theme: {
          extend: {
            colors: {
              gray: {
                DEFAULT: "#4A4A52",
                light1: "#EBEBEB",
                light2: "#F4F6F6",
                light3: "#94949D",
              },
            },
          },
        },
      },
    },
  },

  plugins: [],
} satisfies Config;
