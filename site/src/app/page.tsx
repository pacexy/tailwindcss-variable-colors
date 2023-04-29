'use client'

import Link from 'next/link'

export default function Home() {
  return (
    <main className="container flex h-full flex-col items-center justify-center gap-6 mt-40">
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
          className="px-6 py-3 text-slate-700 bg-slate-100 hover:bg-slate-200 active:bg-slate-300 rounded"
        >
          Github
        </Link>
        <button
          rel="noreferrer"
          className="px-6 py-3 text-slate-700 bg-slate-100 hover:bg-slate-200 active:bg-slate-300 rounded"
          onClick={() => {
            const html = document.querySelector('html')
            html?.classList.toggle('dark')
          }}
        >
          Toggle Theme
        </button>
      </div>
    </main>
  )
}
