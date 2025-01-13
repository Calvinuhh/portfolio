/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        noto: ["Noto Sans", "sans-serif"],
      },
      boxShadow: {
        custom: "10px 10px 10px #0000004d",
        "custom-hover": "15px 15px 15px #0000004d",
      },
    },
  },
  plugins: [],
};
