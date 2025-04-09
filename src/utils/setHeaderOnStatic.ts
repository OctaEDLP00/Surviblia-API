import mime from 'mime'

import type { Response } from 'express'

const __dirname = import.meta.dirname
const __filename = import.meta.filename

const setHeaderOnStatic = (res: Response, path: string) =>
  res.set('Content-Type', mime.getType(path)!)

const staticOptions = { setHeaders: setHeaderOnStatic }

export { __dirname, __filename, staticOptions }

export default { __filename, __dirname, staticOptions }
