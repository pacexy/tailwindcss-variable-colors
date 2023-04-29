import plugin from 'tailwindcss/plugin'
import { Colors } from './type'

interface Options {
  mode?: 'invert'
}
export function defineColorVariables<T extends Colors>(
  colors: T,
  options: Options = {},
) {
  return plugin(({ addBase }) => {
    addBase({
      ':root': createColorVariables(colors),
    })
  })
}

export function createColorVariables<T extends Colors>(colors: T) {
  const colorVariables = {} as any
  const darkColorVariables = {} as any

  for (const [key, value] of Object.entries(colors)) {
    if (typeof value === 'string') {
      if (!value.startsWith('#')) {
        // color keyword
        continue
      } else {
        // key color
        colorVariables[`--tw-color-${key}`] = hex2rgb(value)
        if (key === 'white') {
          darkColorVariables[`--tw-color-${key}`] = '0 0 0'
        } else if (key === 'black') {
          darkColorVariables[`--tw-color-${key}`] = '255 255 255'
        }
      }
    } else {
      // tonal palette
      for (const [level, hex] of Object.entries(value)) {
        const str = hex2rgb(hex as string)
        colorVariables[`--tw-color-${key}-${level}`] = str
        darkColorVariables[`--tw-color-${key}-${1000 - Number(level)}`] = str
      }
    }
  }

  return {
    ...colorVariables,
    '&.dark': darkColorVariables,
  }
}

function hex2rgb(hex: string) {
  // process hex shortcut #fff
  if (hex.length === 4) {
    hex += hex.slice(1)
  }
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `${r} ${g} ${b}`
}
