export default {
  content: ["./index.html","./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0d0d0f",
        foreground: "#f5f5f7",
        primary: "#06b6d4",
        accent: "#8b5cf6",
        border: "#1f1f22",
      },
      backgroundImage: {
        "section-bg": "linear-gradient(to bottom right,#0f0f12,#16161a)",
      },
    },
  },
  plugins: [],
};
