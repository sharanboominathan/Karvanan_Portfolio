/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        base: {
          900: '#111417',
          800: '#15191D',
          700: '#1B2025',
          600: '#22282E',
          500: '#2B323A',
        },
        accent: {
          DEFAULT: '#19BFFF',
          soft: '#00AFFF',
          dim: '#0E7FB8',
          glow: 'rgba(25,191,255,0.35)',
        },
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['Manrope', 'sans-serif'],
      },
      boxShadow: {
        'neu-raised': '10px 10px 24px rgba(0,0,0,0.55), -10px -10px 24px rgba(255,255,255,0.02)',
        'neu-raised-sm': '6px 6px 14px rgba(0,0,0,0.5), -6px -6px 14px rgba(255,255,255,0.02)',
        'neu-pressed': 'inset 6px 6px 14px rgba(0,0,0,0.55), inset -6px -6px 14px rgba(255,255,255,0.02)',
        'neu-glow': '0 0 0 1px rgba(25,191,255,0.15), 0 8px 30px rgba(25,191,255,0.15), 10px 10px 24px rgba(0,0,0,0.5)',
        'glass': '0 8px 32px rgba(0,0,0,0.45)',
      },
      borderRadius: {
        'neu': '28px',
        'neu-lg': '36px',
      },
      backdropBlur: {
        xs: '2px',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(1deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: 1, boxShadow: '0 0 0 0 rgba(255,80,80,0.6)' },
          '50%': { opacity: 0.6, boxShadow: '0 0 0 8px rgba(255,80,80,0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        floatSlow: 'floatSlow 8s ease-in-out infinite',
        pulseGlow: 'pulseGlow 1.6s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
      },
    },
  },
  plugins: [],
}
