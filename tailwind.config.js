/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#F9F9F7", // Newsprint Off-White
        cream: "#FFFDF5", // Warm cream accent background
        ink: "#111111", // Deep ink black
        editorial: {
          red: "#CC0000",
          violet: "#8B5CF6",
          pink: "#F472B6",
          yellow: "#FBBF24",
          green: "#34D399",
          grey: "#E5E5E0"
        }
      },
      fontFamily: {
        serif: ["'Playfair Display'", "Georgia", "serif"],
        body: ["Lora", "Georgia", "serif"],
        sans: ["Outfit", "Inter", "sans-serif"],
        mono: ["'JetBrains Mono'", "Courier New", "monospace"]
      },
      borderWidth: {
        '1': '1px',
        '4': '4px',
      },
      boxShadow: {
        'hard': '4px 4px 0px 0px #111111',
        'hard-lg': '8px 8px 0px 0px #111111',
        'hard-sm': '2px 2px 0px 0px #111111',
        'hard-violet': '4px 4px 0px 0px #8B5CF6',
        'hard-pink': '8px 8px 0px 0px #F472B6',
        'hard-yellow': '6px 6px 0px 0px #FBBF24',
      }
    },
  },
  plugins: [],
}
