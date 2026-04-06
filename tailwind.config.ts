import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';

export default {
  content: ['./theme/**/*.ftl'],
  experimental: {
    optimizeUniversalDefaults: true,
  },
  plugins: [require('@tailwindcss/forms')],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff4f0',
          100: '#fde8de',
          200: '#fccbb8',
          300: '#f7a887',
          400: '#ef8960',
          500: '#e97a50',
          600: '#e5673e',
          700: '#c4521e',
          800: '#9e4119',
          900: '#7a3215',
          950: '#4e1e0a',
        },
        secondary: colors.slate,

        provider: {
          apple: '#000000',
          bitbucket: '#0052CC',
          discord: '#5865F2',
          facebook: '#1877F2',
          github: '#181717',
          gitlab: '#FC6D26',
          google: '#4285F4',
          instagram: '#E4405F',
          linkedin: '#0A66C2',
          microsoft: '#5E5E5E',
          oidc: '#F78C40',
          openshift: '#EE0000',
          paypal: '#00457C',
          slack: '#4A154B',
          stackoverflow: '#F58025',
          twitter: '#1DA1F2',
        },
      },
    },
  },
} satisfies Config;
