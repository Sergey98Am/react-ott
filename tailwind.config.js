/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: { sans: ["Manrope", "sans-serif"] },
    fontSize: {
      xs: "0.75rem", // 12px
      sm: "0.875rem", // 14px
      base: "1rem", // 16px
      lg: "1.125rem", // 18px
      xl: "1.25rem", // 20px
      "2xl": "1.375rem", // 22px
      "3xl": "1.5rem", // 24px
      "4xl": "1.75rem", // 28px
      "5xl": "2.375rem", // 38px
      "6xl": "3rem", // 48px
      "7xl": "3.625rem", // 58px
    },
    extend: {
      colors: {
        absolute: {
          white: "var(--absolute-white)",
          black: "var(--absolute-black)",
        },
        primary: {
          "red-45": "var(--red-45)",
          "red-50": "var(--red-50)",
          "red-55": "var(--red-55)",
          "red-60": "var(--red-60)",
          "red-80": "var(--red-80)",
          "red-90": "var(--red-90)",
          "red-95": "var(--red-95)",
          "red-99": "var(--red-99)",
        },
        dark: {
          "black-06": "var(--black-06)",
          "black-08": "var(--black-08)",
          "black-10": "var(--black-10)",
          "black-12": "var(--black-12)",
          "black-15": "var(--black-15)",
          "black-20": "var(--black-20)",
          "black-25": "var(--black-25)",
          "black-30": "var(--black-30)",
        },
        grey: {
          "grey-60": "var(--grey-60)",
          "grey-65": "var(--grey-65)",
          "grey-70": "var(--grey-70)",
          "grey-75": "var(--grey-75)",
          "grey-90": "var(--grey-90)",
          "grey-95": "var(--grey-95)",
          "grey-97": "var(--grey-97)",
          "grey-99": "var(--grey-99)",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },

  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
