import type SurviAPIArmorsModel from '@/models/SurviAPIArmorsModel.d.ts'
import type SurviAPICALCModel from '@/models/SurviAPICALCModel.d.ts'
import type SurviAPIEndpointsModel from '@/models/SurviAPIEndpointsModel.d.ts'
import type SurviAPIEntitiesModel from '@/models/SurviAPIEntitiesModel.d.ts'
import type SurviAPIEpisodesModel from '@/models/SurviAPIEpisodesModel.d.ts'
import type SurviAPIItemsModel from '@/models/SurviAPIItemsModel.d.ts'
import type SurviAPIPetsModel from '@/models/SurviAPIPetsModel.d.ts'
import type SurviAPIProjectsModel from '@/models/SurviAPIProjectsModel.d.ts'
import type SurviAPISVSGModel from '@/models/SurviAPISVSGModel.d.ts'
import type SurviAPIToolsModel from '@/models/SurviAPIToolsModel.d.ts'
import type SurviAPIWithoutCategoryModel from '@/models/SurviAPIWithoutCategoryModel.d.ts'

interface ICreateRouterConfig {
  surviEpisodesModel: SurviAPIEpisodesModel
  surviProjectModel: SurviAPIProjectsModel
  surviPetsModel: SurviAPIPetsModel
  surviCALCModel: SurviAPICALCModel
  surviSVSGModel: SurviAPISVSGModel
  surviEndpointModel: SurviAPIEndpointsModel
  surviSchemaModel: SurviAPISchemaModel
  surviArmorsModel: SurviAPIArmorsModel
  surviToolsModel: SurviAPIToolsModel
  surviWeaponsModel: SurviAPIWeaponsModel
  surviEntitiesModel: SurviAPIEntitiesModel
  surviItemsModel: SurviAPIItemsModel
  surviWithoutCategoryModel: SurviAPIWithoutCategoryModel
}

export type { ICreateRouterConfig }
export default ICreateRouterConfig
