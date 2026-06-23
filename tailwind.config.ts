import type { Config } from 'tailwindcss';  

export default {  
  content: [  
    "./app/**/*.{js,ts,jsx,tsx}",  
    "./components/**/*.{js,ts,jsx,tsx}",  
  ],  
  theme: {  
    extend: {  
      colors: {  
        primary: {  
          50: '#f5f3ff',  
          100: '#ede9fe',  
          200: '#ddd6fe',  
          300: '#c4b5fd',  
          400: '#a78bfa',  
          500: '#8b5cf6',  
          600: '#7c3aed',  
          700: '#6d28d9',  
          800: '#5b21b6',  
          900: '#4c1d95',  
          950: '#2e1065',  
        },  
        success: '#10b981',  
        warning: '#f59e0b',  
        error: '#ef4444',  
        info: '#3b82f6',  
      },  
      fontFamily: {  
        sans: ['Inter var', 'system-ui', 'sans-serif'],  
      },  
      borderRadius: {  
        lg: '0.5rem',  
        md: '0.375rem',  
        sm: '0.25rem',  
      },  
      spacing: {  
        '1': '0.25rem',  
        '2': '0.5rem',  
        '3': '0.75rem',  
        '4': '1rem',  
        '5': '1.25rem',  
        '6': '1.5rem',  
        '8': '2rem',  
        '10': '2.5rem',  
        '12': '3rem',  
        '16': '4rem',  
      },  
    },  
  },  
  plugins: [  
    require('@tailwindcss/forms'),  
    require('@tailwindcss/typography'),  
  ],  
} satisfies Config;  
