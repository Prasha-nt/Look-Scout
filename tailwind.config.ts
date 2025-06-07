import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        basewhite: "rgba(255, 255, 255, 1)",
        "gray-25": "rgba(145, 155, 167, 1)",
        "gray-300": "rgba(46, 53, 69, 1)",
        "gray-50": "rgba(95, 109, 126, 1)",
        "gray-600": "rgba(44, 52, 68, 1)",
        "gray-700": "rgba(39, 45, 55, 1)",
        "gray-900": "rgba(28, 37, 52, 1)",
        "gray-950": "rgba(21, 27, 40, 1)",
        "neutral-100": "rgba(248, 249, 251, 1)",
        "neutral-200": "rgba(249, 249, 249, 1)",
        "neutral-50": "rgba(250, 251, 252, 1)",
        "neutral-700": "rgba(218, 224, 230, 1)",
        "neutral-800": "rgba(165, 172, 186, 1)",
        "primary-200": "rgba(177, 204, 251, 1)",
        "primary-300": "rgba(174, 201, 254, 1)",
        "primary-400": "rgba(100, 142, 247, 1)",
        "primary-600": "rgba(67, 126, 247, 1)",
        "primary-700": "rgba(57, 113, 231, 1)",
        "primary-900": "rgba(43, 99, 217, 1)",
        primarybluebase: "rgba(78, 116, 250, 1)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: { 
        "shadow-XSM": "0px 1px 2px 0px rgba(16, 24, 40, 0.04)",
        "glow": "0 0 20px rgba(67, 126, 247, 0.3)",
        "glow-lg": "0 0 40px rgba(67, 126, 247, 0.4)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(67, 126, 247, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(67, 126, 247, 0.6)" },
        },
        "slide-in-left": {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "slide-in-right": {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "fade-in-up": {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "scale-in": {
          "0%": { transform: "scale(0.8)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float": "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "slide-in-left": "slide-in-left 0.6s ease-out",
        "slide-in-right": "slide-in-right 0.6s ease-out",
        "fade-in-up": "fade-in-up 0.6s ease-out",
        "scale-in": "scale-in 0.5s ease-out",
      },
    },
    container: { 
      center: true, 
      padding: "2rem", 
      screens: { "2xl": "1400px" } 
    },
  },
  plugins: [],
  darkMode: ["class"],
}

export default config