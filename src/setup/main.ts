import { corsMiddleware } from '@/middlewares/cors.ts'
import { loggerMiddleware } from '@/middlewares/logger'
import { createRouter } from '@/router/SurviAPIRouter.ts'
import PORT from '@/setup/port.ts'
import type { ICreateRouterConfig } from '@/types/type.d'
import { formatedStringMsg } from '@/utils/formatedStringMsg.ts'
import { staticOptions } from '@/utils/setHeaderOnStatic.ts'
import express, { static as _static, json } from 'express'

const publicPath = 'public'

function createAPP(config: ICreateRouterConfig) {
  const app = express()
  const msg = formatedStringMsg(PORT ?? '')

  app.use(json())
  app.use(corsMiddleware())
  app.use(loggerMiddleware)
  app.use(_static(publicPath, staticOptions))
  app.disable('x-powered-by')
  app.use(
    createRouter({
      surviEpisodesModel: config.surviEpisodesModel,
      surviProjectModel: config.surviProjectModel,
      surviCALCModel: config.surviCALCModel,
      surviPetsModel: config.surviPetsModel,
      surviSVSGModel: config.surviSVSGModel,
      surviEndpointModel: config.surviEndpointModel,
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
    if (error) {
      throw error
    }

    console.clear()
    console.log(msg)
  })
}

export { createAPP, publicPath }
export default { createAPP, publicPath }
