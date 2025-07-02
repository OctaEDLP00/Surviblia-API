import { Logger } from '@/utils/logger.ts'
import type { NextFunction, Request, Response } from 'express'

const loggerMiddleware = (
  req: Request, 
  res: Response, 
  next: NextFunction
) => {
  const start = Date.now()
  const { info, error, log } = Logger.getInstance()
  const { url } = req
  const { statusCode } = res

  res.on('finish', () => {
    const duration = Date.now() - start
    switch (statusCode) {
      case 200:
        info(`[${statusCode}] ${url} ${duration}ms`)
        break
      case 404:
        error(`[${statusCode}] ${url} ${duration}ms`)
        break
      case 500:
        error(`[${statusCode}] ${url} ${duration}ms`)
        break
      default:
        log(`[${statusCode}] ${url} ${duration}ms`)
    }
  })
  next()
}

export { loggerMiddleware }
export default loggerMiddleware
