'use client'

export const ToggleTheme: React.FC = () => {
  return (
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
  )
}
