import { Config } from 'tailwindcss'
import { createVariableColors, variableColorsPlugin } from './src'

const config: Config = {
  content: ['./src/**/*.tsx'],
  theme: {
    colors: createVariableColors(),
  },
  plugins: [variableColorsPlugin()],
}

export default config
