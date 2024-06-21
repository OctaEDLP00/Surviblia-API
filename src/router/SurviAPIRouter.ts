import { SurviAPIController } from '@controllers/SurviAPIController.ts'
import { Router, type Request, type Response } from 'express'
import { join } from 'node:path'
import { __dirname } from '@utils/setHeaderOnStatic.ts'

export function createRouter(_SurviAPIModel: unknown) {
  const router = Router()

  /** router GET / return index.html */
  router.get('/', (_req: Request, res: Response) => res.sendFile(join(__dirname, '../views/index.html')))

  /** router GET /font return font.html */
  router.get('/font', (_req: Request, res: Response) => res.sendFile(join(__dirname, '../views/font.html')))

  /** router GET /api/add return add.html */
  router.get('/api/add', (_req: Request, res: Response) => res.sendFile(join(__dirname, '../views/add.html')))

  /** router GET /api/update return update.html */
  router.get('/api/update', (_req: Request, res: Response) => res.sendFile(join(__dirname, '../views/update.html')))

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

  router.post('/api/add/:add', SurviAPIController.create)
  router.patch('/api/update/:update', SurviAPIController.update)
  router.put('/api/update/:update', SurviAPIController.update)
  router.delete('/api/delete/:delete', SurviAPIController.delete)

  return router
}
