import { corsMiddleware } from '@/middlewares/cors.ts'
import { loggerMiddleware } from '@/middlewares/logger'
import { createRouter } from '@/router/SurviAPIRouter.ts'
import PORT from '@/setup/port.ts'
import type { ICreateRouterConfig } from '@/types/type.d'
import { formatedStringMsg } from '@/utils/formatedStringMsg.ts'
import { staticOptions } from '@/utils/setHeaderOnStatic.ts'
import express, {
  type Request, 
  type Response, 
  static as _static, 
  json 
} from 'express'
import { join } from 'node:path'

const publicPath = 'public'

function createAPP(config: ICreateRouterConfig) {
  const app = express()
  const msg = formatedStringMsg(PORT ?? '')

  app.use(json())
  app.use(corsMiddleware())
  app.use(loggerMiddleware)
  app.use('/favicon.png', (_req: Request, res: Response) => {
    res.set('Content-Type', 'image/png')
    res.sendFile(join(import.meta.dirname, 'favicon.png'));
  });
  app.use(_static(publicPath, staticOptions))
  app.disable('x-powered-by')
  app.use(
    createRouter({
      surviEpisodesModel: config.surviEpisodesModel,
      surviProjectModel: config.surviProjectModel,
      surviCALCModel: config.surviCALCModel,
      surviPetsModel: config.surviPetsModel,
      surviSVSGModel: config.surviSVSGModel,
      surviSchemaModel: config.surviSchemaModel,
      surviArmorsModel: config.surviArmorsModel,
      surviEntitiesModel: config.surviEntitiesModel,
      surviItemsModel: config.surviItemsModel,
      surviToolsModel: config.surviToolsModel,
      surviWeaponsModel: config.surviWeaponsModel,
      surviWithoutCategoryModel: config.surviWithoutCategoryModel,
    })
  )

  app.listen(PORT, (error) => {
    if (error) throw error
    console.clear()
    console.log(msg)
  })
}

export { createAPP, publicPath }
export default { createAPP, publicPath }
