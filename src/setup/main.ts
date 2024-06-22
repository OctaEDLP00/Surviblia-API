import { corsMiddleware } from '@middlewares/cors.ts'
import { createRouter } from '@router/SurviAPIRouter.ts'
import PORT from '@setup/port.ts'
import { log } from '@utils/logs.ts'
import { __dirname, staticOptions } from '@utils/setHeaderOnStatic.ts'
import express, { static as _static, json } from 'express'
import { join } from 'node:path'

export const publicPath = join(__dirname, '../../public/')

export function createAPP({ SurviAPIModel, SurviAPIEpisodesModel }: { SurviAPIModel: unknown, SurviAPIEpisodesModel: unknown }) {
  const app = express()
  const { router } = createRouter(SurviAPIModel, SurviAPIEpisodesModel)

  app.use(json())
  app.use(_static(publicPath, staticOptions))
  app.use(router)
  app.use(corsMiddleware())
  app.disable('x-powered-by')

  app.listen(PORT,
    () => log(`🚀 Server listening 👂🏼 on port: http://localhost:${PORT}`)
  )
}

