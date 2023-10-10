/** @type {import('tailwindcss').Config} */
function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !==undefined) {
      return `hsla(var(${variableName}), ${opacityValue})`
    }
    return `hsl(var(${variableName}))`
  }
}
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        'walure-green': withOpacity('--color-walure-green'),
        'walure-lime-green': withOpacity('--color-walure-lime-green'),
        'walure-dark-green': withOpacity('--color-walure-dark-green'),
        'walure-purple': withOpacity('--color-walure-purple'),
        'walure-pink-100': withOpacity('--color-walure-pink-100'),
        'walure-pink-200': withOpacity('--color-walure-pink-200'),
        'walure-pink-300': withOpacity('--color-walure-pink-300'),
        'walure-pink-400': withOpacity('--color-walure-pink-400'),
        'walure-pink-500': withOpacity('--color-walure-pink-500'),
        'walure-yellow-100': withOpacity('--color-walure-yellow-100'),
        'walure-yellow-200': withOpacity('--color-walure-yellow-200'),
        'walure-blue-100': withOpacity('--color-walure-blue-100'),
        'walure-blue-200': withOpacity('--color-walure-blue-200'),
        'walure-blue-700': withOpacity('--color-walure-blue-700'),
        'walure-red': withOpacity('--color-walure-red'),
        'walure-shade-100': withOpacity('--color-walure-shade-100'),
        'walure-shade-200': withOpacity('--color-walure-shade-200'),
        'walure-shade-300': withOpacity('--color-walure-shade-300'),
        'walure-shade-400': withOpacity('--color-walure-shade-400'),
        'walure-shade-500': withOpacity('--color-walure-shade-500'),
        'walure-shade-600': withOpacity('--color-walure-shade-600'),
        'walure-shade-700': withOpacity('--color-walure-shade-700'),
        'walure-shade-800': withOpacity('--color-walure-shade-800'),
        'walure-shade-900': withOpacity('--color-walure-shade-900'),
        'walure-dark-green': withOpacity('--color-walure-dark-green'),
        'walure-job-blue': withOpacity('--color-walure-job-blue'),
        'walure-job-purple': withOpacity('--color-walure-job-purple'),
        'walure-black-100': withOpacity('--color-walure-black-100'),
        'walure-gray-500': withOpacity('--color-walure-gray-500'),
      },
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif'],
        Inter: ['Inter', 'sans-serif'],
        Jakarta: ['Plus Jakarta Sans', 'sans-serif'],
      },
      keyframes: {
        hover: {
          '0%': { transform: 'translateY(0)'},
          '30%': { transform: 'translateY(-20px)'},
          '60%': { transform: 'translateY(0)'},
          '90%': { transform: 'translateY(20px)'},
        },
        hoverIcon: {
          '0%': { transform: 'translateY(0)'},
          '30%': { transform: 'translateY(-2px)'},
          '60%': { transform: 'translateY(0)'},
          '90%': { transform: 'translateY(2px)'},
        },
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
        flyIn: {
          '0%': { transform: 'translateY(40px)' },
          '50%': { transform: 'translateY(0)' },
        },
        flyOut: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      animation: {
        hover: 'hover 1.5s linear infinite',
        hoverIcon: 'hoverIcon 1s linear infinite',
        wave: 'wave 2s linear infinite',
        flyIn: 'flyIn 0.1s linear',
        flyOut: 'flyOut 0.1s linear',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

