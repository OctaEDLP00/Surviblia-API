import { SurviAPIController } from '@controllers/SurviAPI.controller'
import { SurviAPIControllerEpisodes } from '@controllers/SurviAPIEpisodes.controller.ts'
import { Router, type Request, type Response } from 'express'
import { join } from 'node:path'
import { __dirname } from '@utils/setHeaderOnStatic.ts'

export function createRouter(_SurviAPIModel: unknown, _SurviAPIEpisodesModel: unknown) {
  const router = Router()

  /** router GET / return index.html */
  router.get('/', (_req: Request, res: Response) => res.sendFile(join(__dirname, '../views/index.html')))

  /** router GET /font return font.html */
  router.get('/font', (_req: Request, res: Response) => res.sendFile(join(__dirname, '../views/font.html')))

  /** router GET /api/add return add.html */
  router.get('/api/add', (_req: Request, res: Response) => res.sendFile(join(__dirname, '../views/add.html')))

  /** router GET /api/put return update.html */
  router.get('/api/put', (_req: Request, res: Response) => res.sendFile(join(__dirname, '../views/put.html')))

  /** router GET /api/patch return update.html */
  router.get('/api/patch', (_req: Request, res: Response) => res.sendFile(join(__dirname, '../views/patch.html')))

  /** router GET /api/delete return delete.html */
  router.get('/api/delete', (_req: Request, res: Response) => res.sendFile(join(__dirname, '../views/delete.html')))

  router.get('/api', SurviAPIController.getSurviAPI)
  router.get('/api/armors', SurviAPIController.getArmors)
  router.get('/api/armors/:material', SurviAPIController.getArmorMaterial)
  router.get('/api/armors/:armor/:material', SurviAPIController.getArmorFromArmorMaterial)
  router.get('/api/tools', SurviAPIController.getTools)
  router.get('/api/tools/:tool', SurviAPIController.getToolMaterial)
  router.get('/api/tools/:tool/:material?', SurviAPIController.getToolMaterial)
  router.get('/api/weapons', SurviAPIController.getWeapons)
  router.get('/api/weapons/:weapon', SurviAPIController.getWeaponMaterial)
  router.get('/api/weapons/:weapon/:material?', SurviAPIController.getWeaponMaterial)
  router.get('/api/items', SurviAPIController.getItems)
  router.get('/api/items/:item', SurviAPIController.getItem)
  router.get('/api/mobs', SurviAPIController.getMobs)

  // episodios Survival
  router.get('/api/episodes', SurviAPIControllerEpisodes.getAllEpisodes)
  router.get('/api/episodes/episode', SurviAPIControllerEpisodes.getEpisode)
  router.get('/api/episodes/version', SurviAPIControllerEpisodes.getVersions)

  router.post('/add', SurviAPIController.create)
  router.patch('/patch/:type', SurviAPIController.update)
  router.put('/put/:type', SurviAPIController.update)
  router.delete('/delete/:type', SurviAPIController.delete)

  return { router }
}
