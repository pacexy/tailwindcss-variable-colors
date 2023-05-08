# Tailwindcss Variable Colors

Add dark mode support with just one class

## Demo

<https://tailwindcss-variable-colors.vercel.app/>

## Installation

```sh
pnpm i -D tailwindcss-variable-colors
```

## Usage

```ts
// tailwind.config.ts
import { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'
import { createVariableColors, variableColorsPlugin } from 'tailwindcss-variable-colors'

const config: Config = {
  content: ['./src/**/*.tsx'],
  theme: {
    colors: createVariableColors(colors),
  },
  plugins: [variableColorsPlugin(colors)],
}

export default config
```

```tsx
// Button.tsx
const Button = () => (
  <button className="text-slate-700 bg-slate-100 hover:bg-blue-100 active:bg-blue-200 ...">
    Button
  </button>
)
```

That's it!

## Production

To reduce the css bundle size, you can use [`postcss-prune-var`](https://github.com/tomasklaen/postcss-prune-var) to prune unused css variables.

First, install it as a dev dependency

```sh
pnpm i -D postcss-prune-var
```

Then add it to postcss config

```js
//postcss.config.js
module.exports = {
  plugins: {
    // ...
    'postcss-prune-var': {},
  },
}
```

## Inspired by

<https://innei.ren/posts/programming/tailwind-built-in-colors-dark-mode>

## License

MIT
