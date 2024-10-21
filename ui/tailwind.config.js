import { fontFamily } from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export const darkMode = ['class']
export const content = ['./src/**/*.{js,jsx,ts,tsx}']
export const theme = {
  container: {
    center: true,
    padding: '2rem',
    screens: {
      '2xl': '1400px',
    },
  },
  extend: {
    colors: {
      border: 'hsl(var(--border))',
      input: 'hsl(var(--input))',
      ring: 'hsl(var(--ring))',
      background: 'hsl(var(--background))',
      foreground: 'hsl(var(--foreground))',
      primary: {
        DEFAULT: 'hsl(var(--primary))',
        foreground: 'hsl(var(--primary-foreground))',
      },
      secondary: {
        DEFAULT: 'hsl(var(--secondary))',
        foreground: 'hsl(var(--secondary-foreground))',
      },
      destructive: {
        DEFAULT: 'hsl(var(--destructive))',
        foreground: 'hsl(var(--destructive-foreground))',
      },
      muted: {
        DEFAULT: 'hsl(var(--muted))',
        foreground: 'hsl(var(--muted-foreground))',
      },
      accent: {
        DEFAULT: 'hsl(var(--accent))',
        foreground: 'hsl(var(--accent-foreground))',
      },
      popover: {
        DEFAULT: 'hsl(var(--popover))',
        foreground: 'hsl(var(--popover-foreground))',
      },
      card: {
        DEFAULT: 'hsl(var(--card))',
        foreground: 'hsl(var(--card-foreground))',
      },
      'pk-primary': {
        DEFAULT: 'hsl(var(--pk-primary))',
      },
      'pk-type-bug': {
        DEFAULT: 'hsl(var(--pk-type-bug))',
      },
      'pk-type-dark': {
        DEFAULT: 'hsl(var(--pk-type-dark))',
      },
      'pk-type-dragon': {
        DEFAULT: 'hsl(var(--pk-type-dragon))',
      },
      'pk-type-electric': {
        DEFAULT: 'hsl(var(--pk-type-electric))',
      },
      'pk-type-fairy': {
        DEFAULT: 'hsl(var(--pk-type-fairy))',
      },
      'pk-type-fighting': {
        DEFAULT: 'hsl(var(--pk-type-fighting))',
      },
      'pk-type-fire': {
        DEFAULT: 'hsl(var(--pk-type-fire))',
      },
      'pk-type-flying': {
        DEFAULT: 'hsl(var(--pk-type-flying))',
      },
      'pk-type-ghost': {
        DEFAULT: 'hsl(var(--pk-type-ghost))',
      },
      'pk-type-normal': {
        DEFAULT: 'hsl(var(--pk-type-normal))',
      },
      'pk-type-grass': {
        DEFAULT: 'hsl(var(--pk-type-grass))',
      },
      'pk-type-ground': {
        DEFAULT: 'hsl(var(--pk-type-ground))',
      },
      'pk-type-ice': {
        DEFAULT: 'hsl(var(--pk-type-ice))',
      },
      'pk-type-poison': {
        DEFAULT: 'hsl(var(--pk-type-poison))',
      },
      'pk-type-psychic': {
        DEFAULT: 'hsl(var(--pk-type-psychic))',
      },
      'pk-type-rock': {
        DEFAULT: 'hsl(var(--pk-type-rock))',
      },
      'pk-type-steel': {
        DEFAULT: 'hsl(var(--pk-type-steel))',
      },
      'pk-type-water': {
        DEFAULT: 'hsl(var(--pk-type-water))',
      },
      'pk-gray-dark': {
        DEFAULT: 'hsl(var(--pk-gray-dark))',
      },
      'pk-gray-medium': {
        DEFAULT: 'hsl(var(--pk-gray-medium))',
      },
      'pk-gray-light': {
        DEFAULT: 'hsl(var(--pk-gray-light))',
      },
      'pk-gray-background': {
        DEFAULT: 'hsl(var(--pk-gray-background))',
      },
      'pk-gray-white': {
        DEFAULT: 'hsl(var(--pk-gray-white))',
      },
    },
    borderRadius: {
      lg: `var(--radius)`,
      md: `calc(var(--radius) - 2px)`,
      sm: 'calc(var(--radius) - 4px)',
    },
    fontFamily: {
      sans: ['var(--font-sans)', ...fontFamily.sans],
    },
    fontSize: {
      'pk-head': ['24px', '32px'],
      'pk-sub-1': ['14px', '16px'],
      'pk-sub-2': ['12px', '16px'],
      'pk-sub-3': ['10px', '16px'],
      'pk-body-1': ['14px', '16px'],
      'pk-body-2': ['12px', '16px'],
      'pk-body-3': ['10px', '16px'],
      'pk-caption': ['8px', '12px'],
    },
    keyframes: {
      'accordion-down': {
        from: { height: '0' },
        to: { height: 'var(--radix-accordion-content-height)' },
      },
      'accordion-up': {
        from: { height: 'var(--radix-accordion-content-height)' },
        to: { height: '0' },
      },
    },
    animation: {
      'accordion-down': 'accordion-down 0.2s ease-out',
      'accordion-up': 'accordion-up 0.2s ease-out',
    },
  },
}
export const plugins = [require('tailwindcss-animate')]
