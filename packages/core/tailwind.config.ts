import { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'
import { createVariableColors, defineColorVariables } from './src'

const config: Config = {
  content: ['./src/**/*.tsx'],
  theme: {
    colors: createVariableColors(colors),
  },
  plugins: [defineColorVariables(colors)],
}

export default config
