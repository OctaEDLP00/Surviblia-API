import mime from 'mime'

import { Response } from 'express'

const __dirname = import.meta.dirname
const __filename = import.meta.filename
const setHeaderOnStatic = (res: Response, path: string) => res.set('Content-Type', mime.getType(path)!)
const staticOptions = { setHeaders: setHeaderOnStatic }

export {
  __filename,
  __dirname,
  staticOptions
}
