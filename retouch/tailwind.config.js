module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./js/*.js",
    "./components/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        primary: {
          DEFAULT: "#2D5A27", // deep forest green
          50: "#F0F7EF",
          100: "#D9EDD6",
          200: "#B8DCB2",
          300: "#8FC485",
          400: "#6BAD5E",
          500: "#4A9640",
          600: "#3A7F32",
          700: "#2D5A27", // primary
          800: "#234A20",
          900: "#1A3A18"
        },
        // Secondary Colors
        secondary: {
          DEFAULT: "#8B4513", // recycled cardboard brown
          50: "#FBF7F3",
          100: "#F5EDE3",
          200: "#E8D5C2",
          300: "#D4B896",
          400: "#BC9668",
          500: "#A67C47",
          600: "#8B4513", // secondary
          700: "#6D3610",
          800: "#52290C",
          900: "#3A1E09"
        },
        // Accent Colors
        accent: {
          DEFAULT: "#1E88E5", // ocean blue
          50: "#E3F2FD",
          100: "#BBDEFB",
          200: "#90CAF9",
          300: "#64B5F6",
          400: "#42A5F5",
          500: "#2196F3",
          600: "#1E88E5", // accent
          700: "#1976D2",
          800: "#1565C0",
          900: "#0D47A1"
        },
        // Background Colors
        background: "#FEFEFE", // warm white
        surface: "#F8F9F7", // subtle green-tinted neutral
        // Text Colors
        text: {
          primary: "#1A1A1A", // near-black
          secondary: "#4A5568" // medium gray
        },
        // Status Colors
        success: {
          DEFAULT: "#22C55E", // vibrant green
          50: "#F0FDF4",
          100: "#DCFCE7",
          200: "#BBF7D0",
          300: "#86EFAC",
          400: "#4ADE80",
          500: "#22C55E", // success
          600: "#16A34A",
          700: "#15803D",
          800: "#166534",
          900: "#14532D"
        },
        warning: {
          DEFAULT: "#F59E0B", // warm amber
          50: "#FFFBEB",
          100: "#FEF3C7",
          200: "#FDE68A",
          300: "#FCD34D",
          400: "#FBBF24",
          500: "#F59E0B", // warning
          600: "#D97706",
          700: "#B45309",
          800: "#92400E",
          900: "#78350F"
        },
        error: {
          DEFAULT: "#DC2626", // clear red
          50: "#FEF2F2",
          100: "#FEE2E2",
          200: "#FECACA",
          300: "#FCA5A5",
          400: "#F87171",
          500: "#EF4444",
          600: "#DC2626", // error
          700: "#B91C1C",
          800: "#991B1B",
          900: "#7F1D1D"
        },
        // Border Colors
        border: {
          DEFAULT: "#E5E7E3", // surface color variation
          light: "#F1F3EF",
          dark: "#D1D5CE"
        }
      },
      fontFamily: {
        sans: ['Source Sans Pro', 'sans-serif'],
        heading: ['Inter', 'sans-serif'],
        caption: ['Roboto', 'sans-serif'],
        data: ['JetBrains Mono', 'monospace']
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.6rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.3' }],
        '6xl': ['3.75rem', { lineHeight: '1.3' }]
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700'
      },
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        DEFAULT: '0.25rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
        'full': '9999px',
        'card': '0.5rem', // 8px for content cards
        'interactive': '0.5rem' // 8px for interactive elements
      },
      boxShadow: {
        'natural': '0 2px 8px rgba(45, 90, 39, 0.08)',
        'natural-lg': '0 4px 12px rgba(45, 90, 39, 0.12)',
        'accent': '0 2px 8px rgba(30, 136, 229, 0.08)',
        'accent-lg': '0 4px 12px rgba(30, 136, 229, 0.12)'
      },
      animation: {
        'pulse': 'pulse 2s ease-in-out infinite',
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'counter': 'counter 2s ease-out'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        counter: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '50%': { transform: 'scale(1.1)', opacity: '0.8' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        }
      },
      transitionDuration: {
        '150': '150ms',
        '200': '200ms',
        '300': '300ms',
        '600': '600ms'
      },
      transitionTimingFunction: {
        'ease-custom': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'ease-out-custom': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      },
      scale: {
        '102': '1.02'
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem'
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem'
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100'
      }
    }
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.text-balance': {
          'text-wrap': 'balance'
        },
        '.parallax': {
          'transform': 'translateZ(0)',
          'will-change': 'transform'
        },
        '.gpu-accelerated': {
          'transform': 'translate3d(0, 0, 0)',
          'backface-visibility': 'hidden',
          'perspective': '1000px'
        }
      }
      addUtilities(newUtilities)
    }
  ]
}