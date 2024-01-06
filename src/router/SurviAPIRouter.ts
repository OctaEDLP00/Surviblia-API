import { SurviAPIController } from '@controllers/SurviAPIController.ts'
import { Router, type Request, type Response } from 'express'
import { html as _HTML } from '../views/html.ts'
import { html as _HTMLFONT } from '../views/htmlFont.ts'
/**
 * import { html as _HTMLADD } from '../views/html.ts'
 * import { html as _HTMLUPDATE } from '../views/html.ts'
 * import { html as _HTMLDELETE } from '../views/html.ts'
 * import { join } from 'node:path'
 * import { publicPath } from '../setup/main.ts'
 */
export function createRouter(_SurviAPIModel: any) {
  const router = Router()

  router.get('/', (_req: Request, res: Response) => res.send(_HTML))
  router.get('/font', (_req: Request, res: Response) => res.send(_HTMLFONT))
  /**
   * router.get('/api/add', (_req: Request, res: Response) => res.send(_HTMLADD))
   * router.get('/api/update', (_req: Request, res: Response) => res.send(_HTMLUPDATE))
   * router.get('/api/delete', (_req: Request, res: Response) => res.send(_HTMLDELETE))
   */
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

  /**
   * router.post('/api/add/:add', SurviAPIController.create)
   * router.patch('/api/update/:update', SurviAPIController.update)
   * router.put('/api/update/:update', SurviAPIController.update)
   * router.delete('/api/delete/:delete', SurviAPIController.delete)
   */

  return router
}
