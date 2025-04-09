import { Logger } from '@/utils/logger.ts'
import type { NextFunction, Request, Response } from 'express'

const loggerMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const start = Date.now()
  const { info } = Logger.getInstance()
  const { url } = req
  const { statusCode } = res

  res.on('finish', () => {
    const duration = Date.now() - start
    info(`[${statusCode}] ${url} ${duration}ms`)
  })

  next()
}

export { loggerMiddleware }
export default loggerMiddleware
