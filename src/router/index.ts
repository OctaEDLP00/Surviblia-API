import { Router } from 'express'
import {
  apiController,
  indexController,
  apiArmorMaterial,
  apiArmorscontroller,
  apiToolsController,
  apiToolsMaterialController,
  apiAddController,
  apiItemsControllers,
  apiMobsController,
  apiWeaponController,
  apiFontController
} from '@controllers/index'

export const router = Router()

router.get('/font', apiFontController)
router.get('/', indexController)
router.get('/api', apiController)
router.get('/api/armors', apiArmorscontroller)
router.get('/api/armors/:material', apiArmorMaterial)
router.get('/api/tools', apiToolsController)
router.get('/api/tools/:tool/:material', apiToolsMaterialController)
router.get('/api/weapons', apiWeaponController)
router.get('/api/items', apiItemsControllers)
router.get('/api/mobs', apiMobsController)
router.get('/api/add', apiAddController)

// Post
/*
router.post('/api/add', (_req, res) => {
  res.send()
})
router.post('/api', (_req, res) => {
  res.send()
})
router.post('/api/armors', (_req, res) => {
  res.send()
})
router.post('/api/tools', (_req, res) => {
  res.send()
})
router.post('/api/weapons', (_req, res) => {
  res.send()
})
router.post('/api/items', (_req, res) => {
  res.send()
})
router.post('/api/mobs', (_req, res) => {
  res.send()
})
*/
