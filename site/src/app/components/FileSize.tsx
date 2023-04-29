import { readFileSync, readdirSync } from 'fs'
import path from 'path'

const dirPath = path.join(
  __dirname,
  process.env.NODE_ENV === 'development'
    ? '../../static/css/app'
    : '../../static/css',
)

export function FileSize() {
  const dir = readdirSync(dirPath)

  const fileName = dir.find((file) => file.endsWith('.css'))

  if (!fileName) return null
  const cssFile = readFileSync(path.join(dirPath, fileName))

  return (
    <div>
      <span className="text-slate-600">CSS Size: </span>
      <span className="bg-green-200 rounded-sm px-1 text-slate-800">
        {formatFileSize(cssFile.byteLength)}
      </span>
    </div>
  )
}

function formatFileSize(filesize: number) {
  // https://stackoverflow.com/questions/10420352/converting-file-size-in-bytes-to-human-readable-string
  const i = Math.floor(Math.log(filesize) / Math.log(1024))
  return (
    (filesize / Math.pow(1024, i)).toFixed(1) +
    ' ' +
    ['B', 'KB', 'MB', 'GB', 'TB'][i]
  )
}
