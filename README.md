# Tailwindcss Variable Colors

Add dark mode support with just one class

## Demo

<https://tailwindcss-variable-colors.vercel.app/>

## Install

```sh
pnpm i -D tailwindcss-variable-colors
```

## Usage

```ts
// tailwind.config.ts
import { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'
import { createVariableColors, variableColorsPlugin } from './src'

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

## License

MIT
