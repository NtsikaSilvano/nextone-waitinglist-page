/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF3B30',
        background: '#121212',
        surface: '#1E1E1E',
        'surface-2': '#2A2A2A',
        muted: '#B3B3B3',
        accent: '#00E0FF',
        success: '#00C853',
        border: '#2A2A2A',
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'sans-serif'],
      },
      letterSpacing: {
        'hero': '-0.025em',
        'eyebrow': '2.5px',
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle, rgba(255, 59, 48, 0.08) 0%, transparent 70%)',
      },
      borderRadius: {
        'input': '10px',
        'button': '12px',
        'card': '16px',
        'form': '24px',
      }
    },
  },
  plugins: [],
}
