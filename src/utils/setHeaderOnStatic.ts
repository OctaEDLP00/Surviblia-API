import mime from 'mime'

import type { Response } from 'express'

import type { ServeStaticOptions } from 'serve-static'

const __dirname = import.meta.dirname
const __filename = import.meta.filename

const setHeaderOnStatic = (
  res: Response, 
  path: string, 
  _stats?: unknown
) => res.set('Content-Type', mime.getType(path)!)

const staticOptions: ServeStaticOptions<Response> = { 
  setHeaders: setHeaderOnStatic,
}

export { __dirname, __filename, staticOptions }

export default { __filename, __dirname, staticOptions }
