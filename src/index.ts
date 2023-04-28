import type { DefaultColors } from 'tailwindcss/types/generated/colors'

type VariableColors = {
  [key in keyof DefaultColors]: DefaultColors[key] extends `#${string}`
    ? `rgb(var(--tw-color-${key})/var(--tw-text-opacity))`
    : DefaultColors[key] extends string
    ? // has no uppercase letter
      DefaultColors[key] extends Lowercase<DefaultColors[key]>
      ? key
      : DefaultColors[key]
    : {
        [level in keyof DefaultColors[key]]: level extends string | number
          ? `rgb(var(--tw-color-${key}-${level})/var(--tw-text-opacity))`
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
        ] = `rgb(var(--tw-color-${key})/var(--tw-text-opacity))`
      }
    } else {
      // tonal palette
      variableColors[key] = {}
      for (const [level] of Object.entries(value)) {
        variableColors[key][
          level
        ] = `rgb(var(--tw-color-${key}-${level})/var(--tw-text-opacity))`
      }
    }
  }

  return variableColors as VariableColors
}
