import defaultTheme from 'tailwindcss/defaultTheme';
import fluidType from 'tailwindcss-fluid-type';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter Variable', ...defaultTheme.fontFamily.sans],
        display: ['Orbitron', ...defaultTheme.fontFamily.sans],
        mono: ['Fira Code', 'JetBrains Mono', ...defaultTheme.fontFamily.mono],
      },
      colors: {
        // Theme system using CSS variables
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        accent: {
          pink: 'var(--color-accent-pink)',
          green: 'var(--color-accent-green)',
          cyan: 'var(--color-accent-cyan)',
        },
      },
      textColor: {
        default: 'var(--color-text)',
        offset: 'var(--color-text-offset)',
        muted: 'var(--color-text-muted)',
      },
      backgroundColor: {
        default: 'var(--color-background)',
        offset: 'var(--color-background-offset)',
        elevated: 'var(--color-background-elevated)',
      },
      borderColor: {
        default: 'var(--color-border)',
        hover: 'var(--color-border-hover)',
      },
      // SwS specific extensions
      backgroundImage: {
        'neural-gradient': 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)',
        'singularity-gradient': 'radial-gradient(circle at center, var(--color-secondary) 0%, var(--color-primary) 50%, var(--color-background) 100%)',
        'data-stream': 'linear-gradient(180deg, transparent 0%, var(--color-secondary) 50%, transparent 100%)',
      },
      boxShadow: {
        'glow-primary': '0 0 20px rgba(102, 51, 153, 0.8)',
        'glow-secondary': '0 0 30px rgba(0, 212, 255, 0.9)',
        'glow-intense': '0 0 50px rgba(0, 212, 255, 0.5)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite alternate',
        'data-stream': 'data-stream 3s linear infinite',
        'quantum-flutter': 'quantum-flutter 4s ease-in-out infinite',
        'grid-flow': 'grid-flow 20s linear infinite',
        'particle-emergence': 'particle-emergence 1s ease-out forwards',
        'fade-in': 'fade-in 0.5s ease-out forwards',
        'fade-up': 'fade-up 0.5s ease-out forwards',
      },
      keyframes: {
        'float': {
          '0%, 100%': { transform: 'translateY(0) rotateX(0) rotateY(0)' },
          '33%': { transform: 'translateY(-10px) rotateX(5deg) rotateY(-5deg)' },
          '66%': { transform: 'translateY(5px) rotateX(-5deg) rotateY(5deg)' },
        },
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
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  corePlugins: {
    fontSize: false,
  },
  plugins: [fluidType],
}