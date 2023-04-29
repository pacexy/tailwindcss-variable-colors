'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Home() {
  const [cssVariables, setCssVariables] = useState<string[]>()
  useEffect(() => {
    // https://stackoverflow.com/questions/48760274/get-all-css-root-variables-in-array-using-javascript-and-change-the-values
    const cv = Array.from(document.styleSheets)
      .filter((sheet) => sheet.href?.startsWith(window.location.origin))
      .reduce((acc: string[], sheet) => {
        return (acc = [
          ...acc,
          ...Array.from(sheet.cssRules).reduce((def: string[], rule) => {
            return (def =
              rule.selectorText === ':root'
                ? [
                    ...def,
                    ...Array.from(rule.style).filter((name) =>
                      name.startsWith('--'),
                    ),
                  ]
                : def)
          }, []),
        ])
      }, [])

    setCssVariables(cv)
  }, [])

  return (
    <main className="container flex flex-col items-center justify-center gap-6 h-full mt-40 mb-20">
      <h1 className="text-6xl/tight font-bold text-slate-800 max-w-xl text-center">
        TailwindCSS Variable Colors
      </h1>
      <p className="text-center text-slate-600 text-xl">
        Add dark mode supprot with just one class
      </p>
      <div className="flex flex-col gap-4 sm:flex-row">
        <Link
          href="https://github.com/pacexy/tailwindcss-variable-colors"
          target="_blank"
          rel="noreferrer"
          className="px-6 py-3 text-slate-700 bg-slate-100 hover:bg-blue-100 active:bg-blue-200 rounded"
        >
          Github
        </Link>
        <button
          rel="noreferrer"
          className="px-6 py-3 text-slate-700 bg-slate-100 hover:bg-blue-100 active:bg-blue-200 rounded"
          onClick={() => {
            const html = document.querySelector('html')
            html?.classList.toggle('dark')
          }}
        >
          Toggle Theme
        </button>
      </div>
      <div className="flex flex-col items-center">
        <h2 className="text-slate-400 text-2xl mt-10 mb-6">
          Loaded CSS Variables
        </h2>
        <pre className="text-slate-600">
          <ul className="space-y-1 ">
            {cssVariables?.map((variable) => (
              <li key={variable} className="flex items-center">
                <div
                  className="w-5 h-5 inline-block mr-2 rounded-sm"
                  style={{
                    backgroundColor: `rgb(var(${variable}))`,
                  }}
                ></div>
                {variable}
              </li>
            ))}
          </ul>
        </pre>
      </div>
    </main>
  )
}
