/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Define your custom colors here.
        // Tailwind will automatically generate opacity variants (e.g., primaryColor-10, primaryColor-20)
        // IF they are flat color values or defined as objects with default/variants.
        // To use primaryColor/10 syntax, you need to ensure primaryColor is defined directly as a hex/rgb string here.
        primaryColor: "#007bff", // Define your actual hex color here
        secondaryColor: "#6c757d", // Define your actual hex color here
        "accent-purple": "#8A2BE2", // Keep for the accent gradient start
        "accent-pink": "#FF1493", // Keep for the accent gradient end
      },
      backgroundImage: {
        "accent-gradient": "linear-gradient(to right, #8A2BE2, #FF1493)", // Purple to Deep Pink
        // 'accent-gradient-start': '#8A2BE2', // This is no longer needed in backgroundImage once you use direct color names
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseSlow: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.7", transform: "scale(0.98)" },
        },
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
            borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
          },
          "25%": {
            transform: "translate(10px, -20px) scale(1.05)",
            borderRadius: "70% 30% 40% 60% / 50% 60% 30% 50%",
          },
          "50%": {
            transform: "translate(-15px, 15px) scale(1.1)",
            borderRadius: "40% 60% 70% 30% / 40% 70% 30% 60%",
          },
          "75%": {
            transform: "translate(20px, -10px) scale(0.95)",
            borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
            borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
          },
        },
      },
      animation: {
        fadeInUp: "fadeInUp 0.6s ease-out forwards",
        "pulse-slow": "pulseSlow 2s ease-in-out infinite",
        blob: "blob 12s infinite alternate cubic-bezier(0.68, -0.55, 0.265, 1.55)",
      },
      animationDelay: {
        100: "100ms",
        200: "200ms",
        300: "300ms",
        400: "400ms",
        500: "500ms",
        600: "600ms",
        700: "700ms",
        800: "800ms",
        900: "900ms",
        1000: "1000ms",
        1200: "1200ms",
        1400: "1400ms",
        1600: "1600ms",
        1800: "1800ms",
        2000: "2000ms",
      },
    },
  },
  plugins: [],
};
