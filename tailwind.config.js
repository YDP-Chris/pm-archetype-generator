/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Poppins', 'system-ui', '-apple-system', 'sans-serif'],
        'sans': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        // PM Archetype Generator Brand Colors
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          500: '#0369a1',  // Corporate Blue - Primary
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        secondary: {
          500: '#7c3aed',  // Strategic Purple - Secondary
          600: '#6d28d9',
          700: '#5b21b6',
        },
        success: {
          500: '#059669',  // Success Green
          600: '#047857',
          700: '#065f46',
        },
        accent: {
          500: '#ea580c',  // Accent Orange
          600: '#dc2626',
        },
        // Keep legacy corporate colors for backward compatibility
        corporate: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          500: '#0369a1',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        }
      }
    },
  },
  plugins: [],
}