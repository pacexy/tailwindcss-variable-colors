import colors from 'tailwindcss/colors'

import { describe, expect, it } from 'vitest'
import { createVariableColors } from '../src'

describe('should', () => {
  const variableColors = createVariableColors(colors)
  it('generate color keyword', () => {
    expect(variableColors.inherit).toBe(`inherit`)
  })
  it('generate color keyword (camelCase)', () => {
    expect(variableColors.current).toBe(`currentColor`)
  })
  it('generate key color', () => {
    expect(variableColors.white).toBe(
      `rgb(var(--tw-color-white)/var(--tw-text-opacity))`,
    )
  })
  it('generate tonal palette', () => {
    expect(variableColors.slate['50']).toBe(
      `rgb(var(--tw-color-slate-50)/var(--tw-text-opacity))`,
    )
  })
  it('generate tonal palette (deprecated)', () => {
    expect(variableColors.lightBlue['50']).toBe(
      `rgb(var(--tw-color-lightBlue-50)/var(--tw-text-opacity))`,
    )
  })
  it('match snapshot', () => {
    expect(variableColors).toMatchSnapshot()
  })
})
