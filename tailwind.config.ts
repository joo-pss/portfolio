import { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        "noto-sans": ["Noto Sans", "sans-serif"],
      },
    },
  },
};

export default config;
