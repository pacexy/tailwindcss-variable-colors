import Link from 'next/link'
import { FileSize } from './components/FileSize'
import { ToggleTheme } from './components/ToggleTheme'
import { CssVariables } from './components/CssVariables'

export default function Home() {
  return (
    <main className="container flex flex-col items-center justify-center gap-6 h-full mt-40 mb-20">
      <h1 className="text-6xl/tight font-bold text-slate-800 max-w-xl text-center">
        TailwindCSS Variable Colors
      </h1>
      <p className="text-center text-slate-600 text-xl">
        Add dark mode supprot with just one class
      </p>
      <FileSize />
      <div className="flex flex-col gap-4 sm:flex-row">
        <Link
          href="https://github.com/pacexy/tailwindcss-variable-colors"
          target="_blank"
          rel="noreferrer"
          className="px-6 py-3 text-slate-700 bg-slate-100 hover:bg-blue-100 active:bg-blue-200 rounded"
        >
          Github
        </Link>
        <ToggleTheme />
      </div>
      <CssVariables />
    </main>
  )
}
