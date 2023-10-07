import defaultColors from 'tailwindcss/colors'

import { Colors } from './type'

export { variableColorsPlugin } from './plugin'

type VariableColors = {
  [key in keyof Colors]: Colors[key] extends `#${string}`
    ? `rgb(var(--tw-color-${key}) / <alpha-value>)`
    : Colors[key] extends string
    ? // has no uppercase letter
      Colors[key] extends Lowercase<Colors[key]>
      ? key
      : Colors[key]
    : {
        [level in keyof Colors[key]]: level extends string | number
          ? `rgb(var(--tw-color-${key}-${level}) / <alpha-value>)`
          : never
      }
}

const deprecatedColors = [
  'lightBlue',
  'warmGray',
  'trueGray',
  'coolGray',
  'blueGray',
] as const

export function getDefaultColors() {
  if (deprecatedColors.some((color) => color in defaultColors)) {
    deprecatedColors.forEach((color) => {
      if (color in defaultColors) {
        delete defaultColors[color]
      }
    })
  }
  return defaultColors
}

export function createVariableColors<T extends Colors>(colors?: T) {
  const variableColors = {} as any

  for (const [key, value] of Object.entries(colors ?? getDefaultColors())) {
    if (typeof value === 'string') {
      if (!value.startsWith('#')) {
        // color keyword
        variableColors[key] = value
      } else {
        // key color
        variableColors[key] = `rgb(var(--tw-color-${key}) / <alpha-value>)`
      }
    } else {
      // tonal palette
      variableColors[key] = {}
      for (const [level] of Object.entries(value)) {
        variableColors[key][
          level
        ] = `rgb(var(--tw-color-${key}-${level}) / <alpha-value>)`
      }
    }
  }

  return variableColors as VariableColors
}
