import mime from 'mime'
import { fileURLToPath } from 'node:url'
import { dirname as DN } from 'node:path'

const __fileName = fileURLToPath(import.meta.url)
const __dirname = DN(__fileName)
const setHeaderOnStatic = (res: any, path: string) => res.set('content-type', mime.getType(path))
const staticOptions = { setHeaders: setHeaderOnStatic }

export {
  __dirname,
  staticOptions
}
