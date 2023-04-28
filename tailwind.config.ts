import { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'
import { createVariableColors } from './src'

const config: Config = {
  content: ['./src/**/*.tsx'],
  theme: {
    colors: createVariableColors(colors),
  },
}

export default config