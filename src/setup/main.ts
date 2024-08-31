import type { ICreateAPP } from '@/types/type.d'
import { corsMiddleware } from '@middlewares/cors.ts'
import { createRouter } from '@router/SurviAPIRouter.ts'
import PORT from '@setup/port.ts'
import { formatedStringMsg } from '@utils/formatedStringMsg.ts'
import { clear, log } from '@utils/logs.ts'
import { staticOptions } from '@utils/setHeaderOnStatic.ts'
import express, { static as _static, json } from 'express'

export const publicPath = 'public'

export function createAPP({ surviModel, surviEpisodesModel }: ICreateAPP) {
  const app = express()
  const msg = formatedStringMsg(PORT)

  app.use(json())
  app.use(corsMiddleware())
  app.use(_static(publicPath, staticOptions))
  app.disable('x-powered-by')

  app.use(createRouter({ surviModel, surviEpisodesModel }))

  app.listen(PORT, () => {
    clear()
    log(msg)
  })
}

