/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'neon-pink': '#ff00ff',
        'neon-green': '#39ff14',
        'neon-blue': '#00ffff',
        'neon-yellow': '#faff00',
        'neon-purple': '#b026ff',
      },
    },
  },
  plugins: [],
};
