import type { DefaultColors } from 'tailwindcss/types/generated/colors'
export { defineColorVariables } from './plugin'

type VariableColors = {
  [key in keyof DefaultColors]: DefaultColors[key] extends `#${string}`
    ? `rgb(var(--tw-color-${key}) / <alpha-value>)`
    : DefaultColors[key] extends string
    ? // has no uppercase letter
      DefaultColors[key] extends Lowercase<DefaultColors[key]>
      ? key
      : DefaultColors[key]
    : {
        [level in keyof DefaultColors[key]]: level extends string | number
          ? `rgb(var(--tw-color-${key}-${level}) / <alpha-value>)`
          : never
      }
}

export function createVariableColors(colors: DefaultColors) {
  const variableColors = {} as any

  for (const [key, value] of Object.entries(colors)) {
    if (typeof value === 'string') {
      if (!value.startsWith('#')) {
        // color keyword
        variableColors[key] = value
      } else {
        // key color
        variableColors[
          key
        ] = `rgb(var(--tw-color-${key}) / <alpha-value>)`
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
