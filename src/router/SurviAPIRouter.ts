import { ICreateAPP } from '@/types/type.d'
import { SurviAPIController } from '@controllers/SurviAPI.controller'
import { SurviAPIControllerEpisodes } from '@controllers/SurviAPIEpisodes.controller'
import { __dirname } from '@utils/setHeaderOnStatic.ts'
import { Router, type Router as IRouter, type Request, type Response } from 'express'
import { join } from 'node:path'

export function createRouter({ surviModel, surviEpisodesModel }: ICreateAPP): IRouter {
  const router = Router()

  const SurviController = new SurviAPIController({ surviModel })
  const SurviEpisodeController = new SurviAPIControllerEpisodes({ surviEpisodesModel })

  /* router GET / return index.html */
  router.get('/', (_req: Request, res: Response) => res.sendFile(
    join(__dirname, '../views/index.html')
  ))

  /* router GET /font return font.html */
  router.get('/font', (_req: Request, res: Response) => res.sendFile(
    join(__dirname, '../views/font.html')
  ))

  /* router GET /api/add return add.html */
  router.get('/api/add', (_req: Request, res: Response) => res.sendFile(
    join(__dirname, '../views/add.html')
  ))

  /* router GET /api/put return update.html */
  router.get('/api/put', (_req: Request, res: Response) => res.sendFile(
    join(__dirname, '../views/put.html')
  ))

  /* router GET /api/patch return update.html */
  router.get('/api/patch', (_req: Request, res: Response) => res.sendFile(
    join(__dirname, '../views/patch.html')
  ))

  /* router GET /api/delete return delete.html */
  router.get('/api/delete', (_req: Request, res: Response) => res.sendFile(
    join(__dirname, '../views/delete.html')
  ))

  router.get('/api', SurviController.getSurviAPI)
  router.get('/api/armors', SurviController.getArmors)
  router.get('/api/armors/:material', SurviController.getArmorMaterial)
  router.get('/api/armors/:armor/:material', SurviController.getArmorFromArmorMaterial)
  router.get('/api/tools', SurviController.getTools)
  router.get('/api/tools/:tool', SurviController.getToolMaterial)
  router.get('/api/tools/:tool/:material?', SurviController.getToolMaterial)
  router.get('/api/weapons', SurviController.getWeapons)
  router.get('/api/weapons/:weapon', SurviController.getWeaponMaterial)
  router.get('/api/weapons/:weapon/:material?', SurviController.getWeaponMaterial)
  router.get('/api/items', SurviController.getItems)
  router.get('/api/items/:item', SurviController.getItem)
  router.get('/api/mobs', SurviController.getMobs)

  // episodios Survival
  router.get('/api/episodes', SurviEpisodeController.getAllEpisodes)
  router.get('/api/episodes/episode', SurviEpisodeController.getEpisode)
  router.get('/api/episodes/version', SurviEpisodeController.getVersions)
  router.get('/api/episodes/versions', SurviEpisodeController.getAllVersions)
  router.get('/api/episodes/titles', SurviEpisodeController.getAllEpisodesTitle)

  router.post('/api/add/:type', SurviController.create)
  router.patch('/api/patch/:type', SurviController.update)
  router.put('/api/put/:type', SurviController.update)
  router.delete('/api/delete/:type', SurviController.delete)

  return router
}
