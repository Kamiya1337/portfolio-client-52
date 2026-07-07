/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        academic: {
          sidebar: '#0F172A',
          'sidebar-border': '#1E293B',
          navy: '#172033',
          'hero-blue': '#1E3A8A',
          blue: '#2563EB',
          cyan: '#38BDF8',
          'blue-light': '#60A5FA',
          background: '#F8FAFC',
          card: '#FFFFFF',
          ink: '#0F172A',
          muted: '#64748B',
          border: '#E2E8F0',
          warning: '#F59E0B',
        }
      }
    },
  },
  plugins: [],
}
