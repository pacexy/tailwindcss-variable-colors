import { DefaultColors } from 'tailwindcss/types/generated/colors'

type T = {
  [key: string]: string
}

export type Colors =
  | DefaultColors
  | {
      [key: string]: string | T
    }
