import SurviAPIArmorsController from '@/controllers/SurviAPIArmors.controller.ts'
import SurviAPICALCController from '@/controllers/SurviAPICALC.controller.ts'
import SurviAPIEndpointController from '@/controllers/SurviAPIEndpoints.controller.ts'
import SurviAPIEntitiesController from '@/controllers/SurviAPIEntities.controller.ts'
import SurviAPIEpisodesController from '@/controllers/SurviAPIEpisodes.controller.ts'
import SurviAPIItemsController from '@/controllers/SurviAPIItems.controller.ts'
import SurviAPIPetsController from '@/controllers/SurviAPIPets.controller.ts'
import SurviAPIProjectsController from '@/controllers/SurviAPIProjects.controller.ts'
import SurviAPISVSGController from '@/controllers/SurviAPISVSG.controller.ts'
import SurviAPISchemaController from '@/controllers/SurviAPISchema.controller.ts'
import SurviAPIToolsController from '@/controllers/SurviAPITools.controller.ts'
import SurviAPIWeaponsController from '@/controllers/SurviAPIWeapons.controller.ts'
import SurviAPIWithoutCategoryController from '@/controllers/SurviAPIWithoutCategory.controller.ts'
import type { ICreateRouterConfig } from '@/types/type.d.ts'
import type { Router as IRouter } from 'express'
import { Router } from 'express'

function createRouter(config: ICreateRouterConfig): IRouter {
  const router = Router()

  const SArmorCtrl = new SurviAPIArmorsController({
    surviArmorsModel: config.surviArmorsModel,
  })
  const SToolsCtrl = new SurviAPIToolsController({
    surviToolsModel: config.surviToolsModel,
  })
  const SWeaponsCtrl = new SurviAPIWeaponsController({
    surviWeaponsModel: config.surviWeaponsModel,
  })
  const SEntitiesCtrl = new SurviAPIEntitiesController({
    surviEntitiesModel: config.surviEntitiesModel,
  })
  const SItemsCtrl = new SurviAPIItemsController({
    surviItemsModel: config.surviItemsModel,
  })
  const SWithoutCategoryCtrl = new SurviAPIWithoutCategoryController({
    surviWithoutCategoryModel: config.surviWithoutCategoryModel,
  })
  const SEpiCtrl = new SurviAPIEpisodesController({
    surviEpisodesModel: config.surviEpisodesModel,
  })
  const SProjCtrl = new SurviAPIProjectsController({
    surviProjectModel: config.surviProjectModel,
  })
  const SCALCCtrl = new SurviAPICALCController({
    surviCALCModel: config.surviCALCModel,
  })
  const SPetsCtrl = new SurviAPIPetsController({
    surviPetsModel: config.surviPetsModel,
  })
  const SSVSGCtrl = new SurviAPISVSGController({
    surviSVSGModel: config.surviSVSGModel,
  })
  const SCtrlEndpoint = new SurviAPIEndpointController({
    surviEndpointModel: config.surviEndpointModel,
  })
  const SShemaCtrl = new SurviAPISchemaController({
    surviSchemaModel: config.surviSchemaModel,
  })

  router.get('/', SCtrlEndpoint.getEndpoints)
  router.get('/schemas', SShemaCtrl.getSchemas)
  router.get('/schemas/:schema', SShemaCtrl.getSchema)
  /** Armors routes */
  router.get('/armors', SArmorCtrl.getArmors)
  router.get('/armors/:armor/{:material}', SArmorCtrl.getArmorFromArmorMaterial)
  router.post('/post/:armor', SArmorCtrl.createArmor)
  router.patch('/patch/:armor', SArmorCtrl.updateArmor)
  router.put('/put/:armor', SArmorCtrl.updateArmor)
  router.delete('/delete/:armor', SArmorCtrl.deleteArmor)
  /** Tools routes */
  router.get('/tools', SToolsCtrl.getTools)
  router.get('/tools/:tool/{:material}', SToolsCtrl.getToolMaterial)
  router.post('/post/:tool', SToolsCtrl.createTool)
  router.patch('/patch/:tool', SToolsCtrl.updateTool)
  router.put('/put/:tool', SToolsCtrl.updateTool)
  router.delete('/delete/:tool', SToolsCtrl.deleteTool)
  /** Weapon routes */
  router.get('/weapons', SWeaponsCtrl.getWeapons)
  router.get('/weapons/:weapon/{:material}', SWeaponsCtrl.getWeaponMaterial)
  router.post('/post/:weapon', SWeaponsCtrl.createWeapon)
  router.patch('/patch/:weapon', SWeaponsCtrl.updateWeapon)
  router.put('/put/:weapon', SWeaponsCtrl.updateWeapon)
  router.delete('/delete/:weapon', SWeaponsCtrl.deleteWeapon)
  /** Items routes */
  router.get('/items', SItemsCtrl.getItems)
  router.get('/items/:item', SItemsCtrl.getItem)
  router.post('/post/:item', SItemsCtrl.createItem)
  router.patch('/patch/:item', SItemsCtrl.updateItem)
  router.put('/put/:item', SItemsCtrl.updateItem)
  router.delete('/delete/:item', SItemsCtrl.deleteItem)
  /** Entities routes */
  router.get('/entities', SEntitiesCtrl.getEntities)
  router.get('/entities/:entity', SEntitiesCtrl.getEntity)
  router.post('/post/:entity', SEntitiesCtrl.createEntity)
  router.patch('/patch/:entity', SEntitiesCtrl.updateEntity)
  router.put('/put/:entity', SEntitiesCtrl.updateEntity)
  router.delete('/delete/:entity', SEntitiesCtrl.deleteEntity)
  /** Episodes routes */
  router.get('/episodes', SEpiCtrl.getAllEpisodes)
  router.get('/episodes/episode/:episode', SEpiCtrl.getEpisode)
  router.get('/episodes/episode/:version', SEpiCtrl.getVersions)
  router.get('/episodes/versions', SEpiCtrl.getAllVersions)
  router.get('/episodes/titles', SEpiCtrl.getAllEpisodesTitle)
  /** Projects routes */
  router.get('/projects', SProjCtrl.getAllTiers)
  router.get('/projects/:tier_name', SProjCtrl.getTier)
  router.get('/projects/:tier_name/:project_name', SProjCtrl.getProjectByTier)
  router.post('/post/:project', SProjCtrl.createProject)
  router.patch('/patch/:project', SProjCtrl.updateProject)
  router.put('/put/:project', SProjCtrl.updateProject)
  router.delete('/delete/:projetc', SProjCtrl.deleteProject)
  /** Pets routes */
  router.get('/pets', SPetsCtrl.getAllPets)
  router.get('/pets/officials', SPetsCtrl.getOfficialPets)
  router.get('/pets/official/:name', SPetsCtrl.getOfficialPet)
  router.get('/pets/unofficials', SPetsCtrl.getUnofficialPets)
  router.get('/pets/unofficial/:name', SPetsCtrl.getUnofficialPet)
  router.post('/post/:pets', SPetsCtrl.createPet)
  router.patch('/patch/:pets', SPetsCtrl.updatePet)
  router.put('/put/:pets', SPetsCtrl.updatePet)
  router.delete('/delete/:pets', SPetsCtrl.deletePet)
  /** CALC routes */
  router.get('/calc', SCALCCtrl.getAllCALC)
  router.get('/animaciones', SCALCCtrl.getAllAnimations)
  router.get('/cinematicas', SCALCCtrl.getAllCinematics)
  router.get('/clips', SCALCCtrl.getAllClips)
  router.get('/lore', SCALCCtrl.getAllLore)
  router.post('/post/:calc', SCALCCtrl.createCALC)
  router.patch('/patch/:calc', SCALCCtrl.updateCALC)
  router.put('/put/:calc', SCALCCtrl.updateCALC)
  router.delete('/delete/:calc', SCALCCtrl.deleteCALC)
  /** SVSG routes */
  router.get('/svsg', SSVSGCtrl.getAllInfoSVSG)
  router.get('/svsg/solutions', SSVSGCtrl.getAllSolutions)
  router.get('/svsg/solutions/:episode_number', SSVSGCtrl.getSolution)
  router.post('/post/:svsg', SSVSGCtrl.createSVSG)
  router.patch('/patch/:svsg', SSVSGCtrl.updateSVSG)
  router.put('/put/:svsg', SSVSGCtrl.updateSVSG)
  router.delete('/delete/:svsg', SSVSGCtrl.deleteSVSG)
  /** WithoutCategory routes */
  router.get('/without-category', SWithoutCategoryCtrl.getWithoutCategory)
  router.get(
    '/without-category/:item',
    SWithoutCategoryCtrl.getWithoutCategoryFrom
  )
  router.post(
    '/post/:without-category',
    SWithoutCategoryCtrl.createWithoutCategory
  )
  router.patch(
    '/patch/:without-category',
    SWithoutCategoryCtrl.updateWithoutCategory
  )
  router.put(
    '/put/:without-category',
    SWithoutCategoryCtrl.updateWithoutCategory
  )
  router.delete(
    '/delete/:without-category',
    SWithoutCategoryCtrl.deleteWithoutCategory
  )

  return router
}

export { createRouter }
export default createRouter
