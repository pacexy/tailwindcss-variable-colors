import colors from 'tailwindcss/colors'

import { describe, expect, it } from 'vitest'
import { createVariableColors } from '../src'

describe('should', () => {
  const variableColors = createVariableColors(colors)
  it('generate color keyword', () => {
    expect(variableColors.inherit).toMatchInlineSnapshot('"inherit"')
  })
  it('generate color keyword (camelCase)', () => {
    expect(variableColors.current).toMatchInlineSnapshot('"currentColor"')
  })
  it('generate key color', () => {
    expect(variableColors.white).toMatchInlineSnapshot(
      '"rgb(var(--tw-color-white) / <alpha-value>)"',
    )
  })
  it('generate tonal palette', () => {
    expect(variableColors.slate['50']).toMatchInlineSnapshot(
      '"rgb(var(--tw-color-slate-50) / <alpha-value>)"',
    )
  })
  it('generate tonal palette (deprecated)', () => {
    expect(variableColors.lightBlue['50']).toMatchInlineSnapshot(
      '"rgb(var(--tw-color-lightBlue-50) / <alpha-value>)"',
    )
  })
  it('match snapshot', () => {
    expect(variableColors).toMatchInlineSnapshot(`
      {
        "amber": {
          "100": "rgb(var(--tw-color-amber-100) / <alpha-value>)",
          "200": "rgb(var(--tw-color-amber-200) / <alpha-value>)",
          "300": "rgb(var(--tw-color-amber-300) / <alpha-value>)",
          "400": "rgb(var(--tw-color-amber-400) / <alpha-value>)",
          "50": "rgb(var(--tw-color-amber-50) / <alpha-value>)",
          "500": "rgb(var(--tw-color-amber-500) / <alpha-value>)",
          "600": "rgb(var(--tw-color-amber-600) / <alpha-value>)",
          "700": "rgb(var(--tw-color-amber-700) / <alpha-value>)",
          "800": "rgb(var(--tw-color-amber-800) / <alpha-value>)",
          "900": "rgb(var(--tw-color-amber-900) / <alpha-value>)",
          "950": "rgb(var(--tw-color-amber-950) / <alpha-value>)",
        },
        "black": "rgb(var(--tw-color-black) / <alpha-value>)",
        "blue": {
          "100": "rgb(var(--tw-color-blue-100) / <alpha-value>)",
          "200": "rgb(var(--tw-color-blue-200) / <alpha-value>)",
          "300": "rgb(var(--tw-color-blue-300) / <alpha-value>)",
          "400": "rgb(var(--tw-color-blue-400) / <alpha-value>)",
          "50": "rgb(var(--tw-color-blue-50) / <alpha-value>)",
          "500": "rgb(var(--tw-color-blue-500) / <alpha-value>)",
          "600": "rgb(var(--tw-color-blue-600) / <alpha-value>)",
          "700": "rgb(var(--tw-color-blue-700) / <alpha-value>)",
          "800": "rgb(var(--tw-color-blue-800) / <alpha-value>)",
          "900": "rgb(var(--tw-color-blue-900) / <alpha-value>)",
          "950": "rgb(var(--tw-color-blue-950) / <alpha-value>)",
        },
        "blueGray": {
          "100": "rgb(var(--tw-color-blueGray-100) / <alpha-value>)",
          "200": "rgb(var(--tw-color-blueGray-200) / <alpha-value>)",
          "300": "rgb(var(--tw-color-blueGray-300) / <alpha-value>)",
          "400": "rgb(var(--tw-color-blueGray-400) / <alpha-value>)",
          "50": "rgb(var(--tw-color-blueGray-50) / <alpha-value>)",
          "500": "rgb(var(--tw-color-blueGray-500) / <alpha-value>)",
          "600": "rgb(var(--tw-color-blueGray-600) / <alpha-value>)",
          "700": "rgb(var(--tw-color-blueGray-700) / <alpha-value>)",
          "800": "rgb(var(--tw-color-blueGray-800) / <alpha-value>)",
          "900": "rgb(var(--tw-color-blueGray-900) / <alpha-value>)",
          "950": "rgb(var(--tw-color-blueGray-950) / <alpha-value>)",
        },
        "coolGray": {
          "100": "rgb(var(--tw-color-coolGray-100) / <alpha-value>)",
          "200": "rgb(var(--tw-color-coolGray-200) / <alpha-value>)",
          "300": "rgb(var(--tw-color-coolGray-300) / <alpha-value>)",
          "400": "rgb(var(--tw-color-coolGray-400) / <alpha-value>)",
          "50": "rgb(var(--tw-color-coolGray-50) / <alpha-value>)",
          "500": "rgb(var(--tw-color-coolGray-500) / <alpha-value>)",
          "600": "rgb(var(--tw-color-coolGray-600) / <alpha-value>)",
          "700": "rgb(var(--tw-color-coolGray-700) / <alpha-value>)",
          "800": "rgb(var(--tw-color-coolGray-800) / <alpha-value>)",
          "900": "rgb(var(--tw-color-coolGray-900) / <alpha-value>)",
          "950": "rgb(var(--tw-color-coolGray-950) / <alpha-value>)",
        },
        "current": "currentColor",
        "cyan": {
          "100": "rgb(var(--tw-color-cyan-100) / <alpha-value>)",
          "200": "rgb(var(--tw-color-cyan-200) / <alpha-value>)",
          "300": "rgb(var(--tw-color-cyan-300) / <alpha-value>)",
          "400": "rgb(var(--tw-color-cyan-400) / <alpha-value>)",
          "50": "rgb(var(--tw-color-cyan-50) / <alpha-value>)",
          "500": "rgb(var(--tw-color-cyan-500) / <alpha-value>)",
          "600": "rgb(var(--tw-color-cyan-600) / <alpha-value>)",
          "700": "rgb(var(--tw-color-cyan-700) / <alpha-value>)",
          "800": "rgb(var(--tw-color-cyan-800) / <alpha-value>)",
          "900": "rgb(var(--tw-color-cyan-900) / <alpha-value>)",
          "950": "rgb(var(--tw-color-cyan-950) / <alpha-value>)",
        },
        "emerald": {
          "100": "rgb(var(--tw-color-emerald-100) / <alpha-value>)",
          "200": "rgb(var(--tw-color-emerald-200) / <alpha-value>)",
          "300": "rgb(var(--tw-color-emerald-300) / <alpha-value>)",
          "400": "rgb(var(--tw-color-emerald-400) / <alpha-value>)",
          "50": "rgb(var(--tw-color-emerald-50) / <alpha-value>)",
          "500": "rgb(var(--tw-color-emerald-500) / <alpha-value>)",
          "600": "rgb(var(--tw-color-emerald-600) / <alpha-value>)",
          "700": "rgb(var(--tw-color-emerald-700) / <alpha-value>)",
          "800": "rgb(var(--tw-color-emerald-800) / <alpha-value>)",
          "900": "rgb(var(--tw-color-emerald-900) / <alpha-value>)",
          "950": "rgb(var(--tw-color-emerald-950) / <alpha-value>)",
        },
        "fuchsia": {
          "100": "rgb(var(--tw-color-fuchsia-100) / <alpha-value>)",
          "200": "rgb(var(--tw-color-fuchsia-200) / <alpha-value>)",
          "300": "rgb(var(--tw-color-fuchsia-300) / <alpha-value>)",
          "400": "rgb(var(--tw-color-fuchsia-400) / <alpha-value>)",
          "50": "rgb(var(--tw-color-fuchsia-50) / <alpha-value>)",
          "500": "rgb(var(--tw-color-fuchsia-500) / <alpha-value>)",
          "600": "rgb(var(--tw-color-fuchsia-600) / <alpha-value>)",
          "700": "rgb(var(--tw-color-fuchsia-700) / <alpha-value>)",
          "800": "rgb(var(--tw-color-fuchsia-800) / <alpha-value>)",
          "900": "rgb(var(--tw-color-fuchsia-900) / <alpha-value>)",
          "950": "rgb(var(--tw-color-fuchsia-950) / <alpha-value>)",
        },
        "gray": {
          "100": "rgb(var(--tw-color-gray-100) / <alpha-value>)",
          "200": "rgb(var(--tw-color-gray-200) / <alpha-value>)",
          "300": "rgb(var(--tw-color-gray-300) / <alpha-value>)",
          "400": "rgb(var(--tw-color-gray-400) / <alpha-value>)",
          "50": "rgb(var(--tw-color-gray-50) / <alpha-value>)",
          "500": "rgb(var(--tw-color-gray-500) / <alpha-value>)",
          "600": "rgb(var(--tw-color-gray-600) / <alpha-value>)",
          "700": "rgb(var(--tw-color-gray-700) / <alpha-value>)",
          "800": "rgb(var(--tw-color-gray-800) / <alpha-value>)",
          "900": "rgb(var(--tw-color-gray-900) / <alpha-value>)",
          "950": "rgb(var(--tw-color-gray-950) / <alpha-value>)",
        },
        "green": {
          "100": "rgb(var(--tw-color-green-100) / <alpha-value>)",
          "200": "rgb(var(--tw-color-green-200) / <alpha-value>)",
          "300": "rgb(var(--tw-color-green-300) / <alpha-value>)",
          "400": "rgb(var(--tw-color-green-400) / <alpha-value>)",
          "50": "rgb(var(--tw-color-green-50) / <alpha-value>)",
          "500": "rgb(var(--tw-color-green-500) / <alpha-value>)",
          "600": "rgb(var(--tw-color-green-600) / <alpha-value>)",
          "700": "rgb(var(--tw-color-green-700) / <alpha-value>)",
          "800": "rgb(var(--tw-color-green-800) / <alpha-value>)",
          "900": "rgb(var(--tw-color-green-900) / <alpha-value>)",
          "950": "rgb(var(--tw-color-green-950) / <alpha-value>)",
        },
        "indigo": {
          "100": "rgb(var(--tw-color-indigo-100) / <alpha-value>)",
          "200": "rgb(var(--tw-color-indigo-200) / <alpha-value>)",
          "300": "rgb(var(--tw-color-indigo-300) / <alpha-value>)",
          "400": "rgb(var(--tw-color-indigo-400) / <alpha-value>)",
          "50": "rgb(var(--tw-color-indigo-50) / <alpha-value>)",
          "500": "rgb(var(--tw-color-indigo-500) / <alpha-value>)",
          "600": "rgb(var(--tw-color-indigo-600) / <alpha-value>)",
          "700": "rgb(var(--tw-color-indigo-700) / <alpha-value>)",
          "800": "rgb(var(--tw-color-indigo-800) / <alpha-value>)",
          "900": "rgb(var(--tw-color-indigo-900) / <alpha-value>)",
          "950": "rgb(var(--tw-color-indigo-950) / <alpha-value>)",
        },
        "inherit": "inherit",
        "lightBlue": {
          "100": "rgb(var(--tw-color-lightBlue-100) / <alpha-value>)",
          "200": "rgb(var(--tw-color-lightBlue-200) / <alpha-value>)",
          "300": "rgb(var(--tw-color-lightBlue-300) / <alpha-value>)",
          "400": "rgb(var(--tw-color-lightBlue-400) / <alpha-value>)",
          "50": "rgb(var(--tw-color-lightBlue-50) / <alpha-value>)",
          "500": "rgb(var(--tw-color-lightBlue-500) / <alpha-value>)",
          "600": "rgb(var(--tw-color-lightBlue-600) / <alpha-value>)",
          "700": "rgb(var(--tw-color-lightBlue-700) / <alpha-value>)",
          "800": "rgb(var(--tw-color-lightBlue-800) / <alpha-value>)",
          "900": "rgb(var(--tw-color-lightBlue-900) / <alpha-value>)",
          "950": "rgb(var(--tw-color-lightBlue-950) / <alpha-value>)",
        },
        "lime": {
          "100": "rgb(var(--tw-color-lime-100) / <alpha-value>)",
          "200": "rgb(var(--tw-color-lime-200) / <alpha-value>)",
          "300": "rgb(var(--tw-color-lime-300) / <alpha-value>)",
          "400": "rgb(var(--tw-color-lime-400) / <alpha-value>)",
          "50": "rgb(var(--tw-color-lime-50) / <alpha-value>)",
          "500": "rgb(var(--tw-color-lime-500) / <alpha-value>)",
          "600": "rgb(var(--tw-color-lime-600) / <alpha-value>)",
          "700": "rgb(var(--tw-color-lime-700) / <alpha-value>)",
          "800": "rgb(var(--tw-color-lime-800) / <alpha-value>)",
          "900": "rgb(var(--tw-color-lime-900) / <alpha-value>)",
          "950": "rgb(var(--tw-color-lime-950) / <alpha-value>)",
        },
        "neutral": {
          "100": "rgb(var(--tw-color-neutral-100) / <alpha-value>)",
          "200": "rgb(var(--tw-color-neutral-200) / <alpha-value>)",
          "300": "rgb(var(--tw-color-neutral-300) / <alpha-value>)",
          "400": "rgb(var(--tw-color-neutral-400) / <alpha-value>)",
          "50": "rgb(var(--tw-color-neutral-50) / <alpha-value>)",
          "500": "rgb(var(--tw-color-neutral-500) / <alpha-value>)",
          "600": "rgb(var(--tw-color-neutral-600) / <alpha-value>)",
          "700": "rgb(var(--tw-color-neutral-700) / <alpha-value>)",
          "800": "rgb(var(--tw-color-neutral-800) / <alpha-value>)",
          "900": "rgb(var(--tw-color-neutral-900) / <alpha-value>)",
          "950": "rgb(var(--tw-color-neutral-950) / <alpha-value>)",
        },
        "orange": {
          "100": "rgb(var(--tw-color-orange-100) / <alpha-value>)",
          "200": "rgb(var(--tw-color-orange-200) / <alpha-value>)",
          "300": "rgb(var(--tw-color-orange-300) / <alpha-value>)",
          "400": "rgb(var(--tw-color-orange-400) / <alpha-value>)",
          "50": "rgb(var(--tw-color-orange-50) / <alpha-value>)",
          "500": "rgb(var(--tw-color-orange-500) / <alpha-value>)",
          "600": "rgb(var(--tw-color-orange-600) / <alpha-value>)",
          "700": "rgb(var(--tw-color-orange-700) / <alpha-value>)",
          "800": "rgb(var(--tw-color-orange-800) / <alpha-value>)",
          "900": "rgb(var(--tw-color-orange-900) / <alpha-value>)",
          "950": "rgb(var(--tw-color-orange-950) / <alpha-value>)",
        },
        "pink": {
          "100": "rgb(var(--tw-color-pink-100) / <alpha-value>)",
          "200": "rgb(var(--tw-color-pink-200) / <alpha-value>)",
          "300": "rgb(var(--tw-color-pink-300) / <alpha-value>)",
          "400": "rgb(var(--tw-color-pink-400) / <alpha-value>)",
          "50": "rgb(var(--tw-color-pink-50) / <alpha-value>)",
          "500": "rgb(var(--tw-color-pink-500) / <alpha-value>)",
          "600": "rgb(var(--tw-color-pink-600) / <alpha-value>)",
          "700": "rgb(var(--tw-color-pink-700) / <alpha-value>)",
          "800": "rgb(var(--tw-color-pink-800) / <alpha-value>)",
          "900": "rgb(var(--tw-color-pink-900) / <alpha-value>)",
          "950": "rgb(var(--tw-color-pink-950) / <alpha-value>)",
        },
        "purple": {
          "100": "rgb(var(--tw-color-purple-100) / <alpha-value>)",
          "200": "rgb(var(--tw-color-purple-200) / <alpha-value>)",
          "300": "rgb(var(--tw-color-purple-300) / <alpha-value>)",
          "400": "rgb(var(--tw-color-purple-400) / <alpha-value>)",
          "50": "rgb(var(--tw-color-purple-50) / <alpha-value>)",
          "500": "rgb(var(--tw-color-purple-500) / <alpha-value>)",
          "600": "rgb(var(--tw-color-purple-600) / <alpha-value>)",
          "700": "rgb(var(--tw-color-purple-700) / <alpha-value>)",
          "800": "rgb(var(--tw-color-purple-800) / <alpha-value>)",
          "900": "rgb(var(--tw-color-purple-900) / <alpha-value>)",
          "950": "rgb(var(--tw-color-purple-950) / <alpha-value>)",
        },
        "red": {
          "100": "rgb(var(--tw-color-red-100) / <alpha-value>)",
          "200": "rgb(var(--tw-color-red-200) / <alpha-value>)",
          "300": "rgb(var(--tw-color-red-300) / <alpha-value>)",
          "400": "rgb(var(--tw-color-red-400) / <alpha-value>)",
          "50": "rgb(var(--tw-color-red-50) / <alpha-value>)",
          "500": "rgb(var(--tw-color-red-500) / <alpha-value>)",
          "600": "rgb(var(--tw-color-red-600) / <alpha-value>)",
          "700": "rgb(var(--tw-color-red-700) / <alpha-value>)",
          "800": "rgb(var(--tw-color-red-800) / <alpha-value>)",
          "900": "rgb(var(--tw-color-red-900) / <alpha-value>)",
          "950": "rgb(var(--tw-color-red-950) / <alpha-value>)",
        },
        "rose": {
          "100": "rgb(var(--tw-color-rose-100) / <alpha-value>)",
          "200": "rgb(var(--tw-color-rose-200) / <alpha-value>)",
          "300": "rgb(var(--tw-color-rose-300) / <alpha-value>)",
          "400": "rgb(var(--tw-color-rose-400) / <alpha-value>)",
          "50": "rgb(var(--tw-color-rose-50) / <alpha-value>)",
          "500": "rgb(var(--tw-color-rose-500) / <alpha-value>)",
          "600": "rgb(var(--tw-color-rose-600) / <alpha-value>)",
          "700": "rgb(var(--tw-color-rose-700) / <alpha-value>)",
          "800": "rgb(var(--tw-color-rose-800) / <alpha-value>)",
          "900": "rgb(var(--tw-color-rose-900) / <alpha-value>)",
          "950": "rgb(var(--tw-color-rose-950) / <alpha-value>)",
        },
        "sky": {
          "100": "rgb(var(--tw-color-sky-100) / <alpha-value>)",
          "200": "rgb(var(--tw-color-sky-200) / <alpha-value>)",
          "300": "rgb(var(--tw-color-sky-300) / <alpha-value>)",
          "400": "rgb(var(--tw-color-sky-400) / <alpha-value>)",
          "50": "rgb(var(--tw-color-sky-50) / <alpha-value>)",
          "500": "rgb(var(--tw-color-sky-500) / <alpha-value>)",
          "600": "rgb(var(--tw-color-sky-600) / <alpha-value>)",
          "700": "rgb(var(--tw-color-sky-700) / <alpha-value>)",
          "800": "rgb(var(--tw-color-sky-800) / <alpha-value>)",
          "900": "rgb(var(--tw-color-sky-900) / <alpha-value>)",
          "950": "rgb(var(--tw-color-sky-950) / <alpha-value>)",
        },
        "slate": {
          "100": "rgb(var(--tw-color-slate-100) / <alpha-value>)",
          "200": "rgb(var(--tw-color-slate-200) / <alpha-value>)",
          "300": "rgb(var(--tw-color-slate-300) / <alpha-value>)",
          "400": "rgb(var(--tw-color-slate-400) / <alpha-value>)",
          "50": "rgb(var(--tw-color-slate-50) / <alpha-value>)",
          "500": "rgb(var(--tw-color-slate-500) / <alpha-value>)",
          "600": "rgb(var(--tw-color-slate-600) / <alpha-value>)",
          "700": "rgb(var(--tw-color-slate-700) / <alpha-value>)",
          "800": "rgb(var(--tw-color-slate-800) / <alpha-value>)",
          "900": "rgb(var(--tw-color-slate-900) / <alpha-value>)",
          "950": "rgb(var(--tw-color-slate-950) / <alpha-value>)",
        },
        "stone": {
          "100": "rgb(var(--tw-color-stone-100) / <alpha-value>)",
          "200": "rgb(var(--tw-color-stone-200) / <alpha-value>)",
          "300": "rgb(var(--tw-color-stone-300) / <alpha-value>)",
          "400": "rgb(var(--tw-color-stone-400) / <alpha-value>)",
          "50": "rgb(var(--tw-color-stone-50) / <alpha-value>)",
          "500": "rgb(var(--tw-color-stone-500) / <alpha-value>)",
          "600": "rgb(var(--tw-color-stone-600) / <alpha-value>)",
          "700": "rgb(var(--tw-color-stone-700) / <alpha-value>)",
          "800": "rgb(var(--tw-color-stone-800) / <alpha-value>)",
          "900": "rgb(var(--tw-color-stone-900) / <alpha-value>)",
          "950": "rgb(var(--tw-color-stone-950) / <alpha-value>)",
        },
        "teal": {
          "100": "rgb(var(--tw-color-teal-100) / <alpha-value>)",
          "200": "rgb(var(--tw-color-teal-200) / <alpha-value>)",
          "300": "rgb(var(--tw-color-teal-300) / <alpha-value>)",
          "400": "rgb(var(--tw-color-teal-400) / <alpha-value>)",
          "50": "rgb(var(--tw-color-teal-50) / <alpha-value>)",
          "500": "rgb(var(--tw-color-teal-500) / <alpha-value>)",
          "600": "rgb(var(--tw-color-teal-600) / <alpha-value>)",
          "700": "rgb(var(--tw-color-teal-700) / <alpha-value>)",
          "800": "rgb(var(--tw-color-teal-800) / <alpha-value>)",
          "900": "rgb(var(--tw-color-teal-900) / <alpha-value>)",
          "950": "rgb(var(--tw-color-teal-950) / <alpha-value>)",
        },
        "transparent": "transparent",
        "trueGray": {
          "100": "rgb(var(--tw-color-trueGray-100) / <alpha-value>)",
          "200": "rgb(var(--tw-color-trueGray-200) / <alpha-value>)",
          "300": "rgb(var(--tw-color-trueGray-300) / <alpha-value>)",
          "400": "rgb(var(--tw-color-trueGray-400) / <alpha-value>)",
          "50": "rgb(var(--tw-color-trueGray-50) / <alpha-value>)",
          "500": "rgb(var(--tw-color-trueGray-500) / <alpha-value>)",
          "600": "rgb(var(--tw-color-trueGray-600) / <alpha-value>)",
          "700": "rgb(var(--tw-color-trueGray-700) / <alpha-value>)",
          "800": "rgb(var(--tw-color-trueGray-800) / <alpha-value>)",
          "900": "rgb(var(--tw-color-trueGray-900) / <alpha-value>)",
          "950": "rgb(var(--tw-color-trueGray-950) / <alpha-value>)",
        },
        "violet": {
          "100": "rgb(var(--tw-color-violet-100) / <alpha-value>)",
          "200": "rgb(var(--tw-color-violet-200) / <alpha-value>)",
          "300": "rgb(var(--tw-color-violet-300) / <alpha-value>)",
          "400": "rgb(var(--tw-color-violet-400) / <alpha-value>)",
          "50": "rgb(var(--tw-color-violet-50) / <alpha-value>)",
          "500": "rgb(var(--tw-color-violet-500) / <alpha-value>)",
          "600": "rgb(var(--tw-color-violet-600) / <alpha-value>)",
          "700": "rgb(var(--tw-color-violet-700) / <alpha-value>)",
          "800": "rgb(var(--tw-color-violet-800) / <alpha-value>)",
          "900": "rgb(var(--tw-color-violet-900) / <alpha-value>)",
          "950": "rgb(var(--tw-color-violet-950) / <alpha-value>)",
        },
        "warmGray": {
          "100": "rgb(var(--tw-color-warmGray-100) / <alpha-value>)",
          "200": "rgb(var(--tw-color-warmGray-200) / <alpha-value>)",
          "300": "rgb(var(--tw-color-warmGray-300) / <alpha-value>)",
          "400": "rgb(var(--tw-color-warmGray-400) / <alpha-value>)",
          "50": "rgb(var(--tw-color-warmGray-50) / <alpha-value>)",
          "500": "rgb(var(--tw-color-warmGray-500) / <alpha-value>)",
          "600": "rgb(var(--tw-color-warmGray-600) / <alpha-value>)",
          "700": "rgb(var(--tw-color-warmGray-700) / <alpha-value>)",
          "800": "rgb(var(--tw-color-warmGray-800) / <alpha-value>)",
          "900": "rgb(var(--tw-color-warmGray-900) / <alpha-value>)",
          "950": "rgb(var(--tw-color-warmGray-950) / <alpha-value>)",
        },
        "white": "rgb(var(--tw-color-white) / <alpha-value>)",
        "yellow": {
          "100": "rgb(var(--tw-color-yellow-100) / <alpha-value>)",
          "200": "rgb(var(--tw-color-yellow-200) / <alpha-value>)",
          "300": "rgb(var(--tw-color-yellow-300) / <alpha-value>)",
          "400": "rgb(var(--tw-color-yellow-400) / <alpha-value>)",
          "50": "rgb(var(--tw-color-yellow-50) / <alpha-value>)",
          "500": "rgb(var(--tw-color-yellow-500) / <alpha-value>)",
          "600": "rgb(var(--tw-color-yellow-600) / <alpha-value>)",
          "700": "rgb(var(--tw-color-yellow-700) / <alpha-value>)",
          "800": "rgb(var(--tw-color-yellow-800) / <alpha-value>)",
          "900": "rgb(var(--tw-color-yellow-900) / <alpha-value>)",
          "950": "rgb(var(--tw-color-yellow-950) / <alpha-value>)",
        },
        "zinc": {
          "100": "rgb(var(--tw-color-zinc-100) / <alpha-value>)",
          "200": "rgb(var(--tw-color-zinc-200) / <alpha-value>)",
          "300": "rgb(var(--tw-color-zinc-300) / <alpha-value>)",
          "400": "rgb(var(--tw-color-zinc-400) / <alpha-value>)",
          "50": "rgb(var(--tw-color-zinc-50) / <alpha-value>)",
          "500": "rgb(var(--tw-color-zinc-500) / <alpha-value>)",
          "600": "rgb(var(--tw-color-zinc-600) / <alpha-value>)",
          "700": "rgb(var(--tw-color-zinc-700) / <alpha-value>)",
          "800": "rgb(var(--tw-color-zinc-800) / <alpha-value>)",
          "900": "rgb(var(--tw-color-zinc-900) / <alpha-value>)",
          "950": "rgb(var(--tw-color-zinc-950) / <alpha-value>)",
        },
      }
    `)
  })

  const defaultVariableColors = createVariableColors()
  it('should ignore deprecated colors by default', () => {
    expect(defaultVariableColors['amber']['100']).toMatchInlineSnapshot(
      '"rgb(var(--tw-color-amber-100) / <alpha-value>)"',
    )
    expect(defaultVariableColors['blueGray']).toBeUndefined()
  })
})
