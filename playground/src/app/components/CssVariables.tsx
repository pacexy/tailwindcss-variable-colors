'use client'

import { useEffect, useState } from 'react'

export const CssVariables: React.FC = ({}) => {
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
    <div className="flex flex-col items-center mt-10">
      <h2 className="text-slate-400 text-2xl mb-4">Loaded CSS Variables</h2>
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
  )
}
