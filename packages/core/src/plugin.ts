import plugin from 'tailwindcss/plugin'
import {
  argbFromHex,
  redFromArgb,
  greenFromArgb,
  blueFromArgb,
} from '@material/material-color-utilities'
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
        colorVariables[`--tw-color-${key}`] = rgb(value)
        if (key === 'white') {
          darkColorVariables[`--tw-color-${key}`] = '0 0 0'
        } else if (key === 'black') {
          darkColorVariables[`--tw-color-${key}`] = '255 255 255'
        }
      }
    } else {
      // tonal palette
      for (const [level, hex] of Object.entries(value)) {
        const str = rgb(hex as string)
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

function rgb(hex: string) {
  const argb = argbFromHex(hex)
  const r = redFromArgb(argb)
  const g = greenFromArgb(argb)
  const b = blueFromArgb(argb)
  return `${r} ${g} ${b}`
}
