import SurviAPIArmorsModel from '@/models/SurviAPIArmors.models.ts'
import SurviAPICALCModel from '@/models/SurviAPICALC.models.ts'
import SurviAPIEndpointsModel from '@/models/SurviAPIEndpoints.models.ts'
import SurviAPIEntitiesModel from '@/models/SurviAPIEntities.models.ts'
import SurviAPIEpisodesModel from '@/models/SurviAPIEpisodes.models.ts'
import SurviAPIItemsModel from '@/models/SurviAPIItems.models.ts'
import SurviAPIPetsModel from '@/models/SurviAPIPets.models.ts'
import SurviAPIProjectsModel from '@/models/SurviAPIProjects.models.ts'
import SurviAPISVSGModel from '@/models/SurviAPISVSG.models.ts'
import SurviAPISchemaModel from '@/models/SurviAPISchema.models.ts'
import SurviAPIToolsModel from '@/models/SurviAPITools.models.ts'
import SurviAPIWeaponsModel from '@/models/SurviAPIWeapons.models.ts'
import SurviAPIWithoutCategoryModel from '@/models/SurviAPIWithoutCategory.models.ts'
import { createAPP } from './setup/main.ts'

const config = {
  surviEpisodesModel: SurviAPIEpisodesModel,
  surviProjectModel: SurviAPIProjectsModel,
  surviCALCModel: SurviAPICALCModel,
  surviPetsModel: SurviAPIPetsModel,
  surviSVSGModel: SurviAPISVSGModel,
  surviEndpointModel: SurviAPIEndpointsModel,
  surviSchemaModel: SurviAPISchemaModel,
  surviArmorsModel: SurviAPIArmorsModel,
  surviEntitiesModel: SurviAPIEntitiesModel,
  surviItemsModel: SurviAPIItemsModel,
  surviToolsModel: SurviAPIToolsModel,
  surviWeaponsModel: SurviAPIWeaponsModel,
  surviWithoutCategoryModel: SurviAPIWithoutCategoryModel,
}

createAPP(config)
