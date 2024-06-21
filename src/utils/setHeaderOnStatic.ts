import mime from 'mime'
import { fileURLToPath } from 'node:url'
import { dirname as DN } from 'node:path'
import { Response } from 'express'

const URL_WITH_ESM = import.meta.url
const __fileName = fileURLToPath(URL_WITH_ESM)
const __dirname = DN(__fileName)
const setHeaderOnStatic = (res: Response, path: string) => res.set('Content-Type', mime.getType(path)!)
const staticOptions = { setHeaders: setHeaderOnStatic }

export {
  __dirname,
  staticOptions
}
