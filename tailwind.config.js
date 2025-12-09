// tailwind.config.cjs - Add these to theme.extend
theme: {
  extend: {
    // Add modern animation utilities
    animation: {
      'float': 'float 6s ease-in-out infinite',
      'gradient': 'gradient 8s linear infinite',
      'blob': 'blob 7s infinite',
    },
    keyframes: {
      float: {
        '0%, 100%': { transform: 'translateY(0)' },
        '50%': { transform: 'translateY(-20px)' },
      },
      gradient: {
        '0%, 100%': { backgroundPosition: '0% 50%' },
        '50%': { backgroundPosition: '100% 50%' },
      },
      blob: {
        '0%': { transform: 'translate(0px, 0px) scale(1)' },
        '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
        '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
        '100%'; { transform: 'translate(0px, 0px) scale(1)' },
      }
    },
    // Add backdrop blur utilities
    backdropBlur: {
      xs: '2px',
    },
    // Add custom spacing if needed
    spacing: {
      '128': '32rem',
      '144': '36rem',
    }
  }
}