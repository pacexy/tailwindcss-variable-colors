import { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'
import {
  createVariableColors,
  defineColorVariables,
} from 'tailwindcss-variable-colors'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: createVariableColors(colors),
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    container: {
      center: true,
      padding: '1rem',
    },
  },
  plugins: [defineColorVariables(colors)],
}

export default config
