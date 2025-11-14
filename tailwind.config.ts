import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        menarguez: {
          bg: "#0b1220",
          accent: "#38bdf8",
          border: "#1f2a44",
        },
      },
    },
  },
};
export default config;
