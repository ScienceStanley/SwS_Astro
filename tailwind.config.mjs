/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Using CSS variables for dynamic theming
        'primary': 'var(--color-primary)',
        'primary-hover': 'var(--color-primary-hover)',
        'secondary': 'var(--color-secondary)',
        'secondary-hover': 'var(--color-secondary-hover)',
        'accent-pink': 'var(--color-accent-pink)',
        'accent-green': 'var(--color-accent-green)',
        'accent-cyan': 'var(--color-accent-cyan)',
        'background': 'var(--color-background)',
        'surface': 'var(--color-surface)',
        'surface-elevated': 'var(--color-surface-elevated)',
        'border': 'var(--color-border)',
        'border-hover': 'var(--color-border-hover)',
        'text': {
          DEFAULT: 'var(--color-text)',
          'secondary': 'var(--color-text-secondary)',
          'tertiary': 'var(--color-text-tertiary)',
        },
        // Legacy mappings
        'void-black': 'var(--color-background)',
        'royal-purple': 'var(--color-primary)',
        'warp-core-blue': 'var(--color-secondary)',
        'cyber-pink': 'var(--color-accent-pink)',
        'plasma-green': 'var(--color-accent-green)',
        'hologram-cyan': 'var(--color-accent-cyan)',
      },
      fontFamily: {
        'display': ['Montserrat', '-apple-system', 'system-ui', 'sans-serif'],
        'body': ['Montserrat', '-apple-system', 'system-ui', 'sans-serif'],
        'mono': ['Fira Code', 'JetBrains Mono', 'monospace'],
        'accent': ['Montserrat', '-apple-system', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'neural-gradient': 'linear-gradient(135deg, #663399 0%, #00D4FF 100%)',
        'singularity-gradient': 'radial-gradient(circle at center, #00D4FF 0%, #663399 50%, #000000 100%)',
        'data-stream': 'linear-gradient(180deg, transparent 0%, #00D4FF 50%, transparent 100%)',
      },
      boxShadow: {
        'glow-purple': '0 0 20px rgba(102, 51, 153, 0.8)',
        'glow-blue': '0 0 30px rgba(0, 212, 255, 0.9)',
        'glow-intense': '0 0 50px rgba(0, 212, 255, 0.5)',
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite alternate',
        'data-stream': 'data-stream 3s linear infinite',
        'quantum-flutter': 'quantum-flutter 4s ease-in-out infinite',
        'grid-flow': 'grid-flow 20s linear infinite',
        'particle-emergence': 'particle-emergence 1s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'radar-sweep': 'radar-sweep 4s linear infinite',
        'warp-core-pulse': 'warp-core-pulse 2s ease-in-out infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%': { filter: 'brightness(1) drop-shadow(0 0 10px currentColor)' },
          '100%': { filter: 'brightness(1.2) drop-shadow(0 0 30px currentColor)' },
        },
        'data-stream': {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { transform: 'translateY(100%)', opacity: '0' },
        },
        'quantum-flutter': {
          '0%, 100%': { transform: 'translateX(0) rotateZ(0deg)' },
          '25%': { transform: 'translateX(-2px) rotateZ(-0.5deg)' },
          '75%': { transform: 'translateX(2px) rotateZ(0.5deg)' },
        },
        'grid-flow': {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(50px, 50px)' },
        },
        'particle-emergence': {
          '0%': {
            opacity: '0',
            transform: 'scale(0) translateY(20px)',
            filter: 'blur(10px)',
          },
          '50%': { filter: 'blur(5px)' },
          '100%': {
            opacity: '1',
            transform: 'scale(1) translateY(0)',
            filter: 'blur(0)',
          },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0) rotateX(0) rotateY(0)' },
          '33%': { transform: 'translateY(-10px) rotateX(5deg) rotateY(-5deg)' },
          '66%': { transform: 'translateY(5px) rotateX(-5deg) rotateY(5deg)' },
        },
        'radar-sweep': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'warp-core-pulse': {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.8' },
          '50%': { transform: 'scale(1.1)', opacity: '1' },
        },
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
}