import { SurviAPIModel } from '@models/SurviAPIModel.ts'
import { type Request, type Response } from 'express'

export class SurviAPIController {
  // constructor({ SurviAPIModel }) { }

  static getSurviAPI = async (_req: Request, res: Response) => {
    const surviAPI = await SurviAPIModel.getSurviAPI()
    if (!surviAPI) {
      res.status(404).json({ error_message: 'SurviAPI not found' })
      return
    }
    return res.json(surviAPI)
  }

  static getArmors = async (_req: Request, res: Response) => {
    const armors = await SurviAPIModel.getArmors()
    if (!armors) {
      res.status(404).json({ error_message: 'Armor not found' })
      return
    }
    return res.json(armors)
  }

  static getArmorMaterial = async ({ params }: Request, res: Response) => {
    const { material } = params
    const armorMaterial = await SurviAPIModel.getArmorMaterial({ material })
    if (!armorMaterial) {
      res.status(404).send({ error_message: 'Item not found' })
      return
    }
    return res.json(armorMaterial)
  }

  static getArmorFromArmorMaterial = async ({ params }: Request, res: Response) => {
    const { material, armor } = params
    const armorMaterial = await SurviAPIModel.getArmorFromArmorMaterial({ material, armor })
    if (!armorMaterial) {
      res.status(404).send({ error_message: 'Item not found' })
      return
    }
    return res.json(armorMaterial)
  }

  static getTools = async (_req: Request, res: Response) => {
    const tool = await SurviAPIModel.getTools()
    if (!tool) {
      res.status(404).json({ error_message: 'Tool not found' })
      return
    }
    return res.json(tool)
  }

  static getToolMaterial = async ({ params }: Request, res: Response) => {
    const { tool, material } = params
    const toolMaterial = await SurviAPIModel.getToolMaterial({ tool, material })
    if (!toolMaterial) {
      res.status(404).json({ error_message: 'Tool material not found' })
      return
    }
    return res.json(toolMaterial)
  }

  static getWeapons = async (_req: Request, res: Response) => {
    const weapons = await SurviAPIModel.getWeapons()
    if (!weapons) {
      res.status(404).json({ error_message: 'Weapons not found' })
      return
    }
    return res.json(weapons)
  }

  static getWeaponMaterial = async ({ params }: Request, res: Response) => {
    const { weapon, material } = params
    const weaponModel = await SurviAPIModel.getWeaponMaterial({ weapon, material })
    if (!weaponModel) {
      res.status(404).json({ error_message: 'Weapon material not found' })
      return
    }
    return res.json(weaponModel)
  }

  static getItems = async (_req: Request, res: Response) => {
    const item = await SurviAPIModel.getItems()
    if (!item) {
      res.status(404).json({ error_message: 'Items not found' })
      return
    }
    return res.json(item)
  }

  static getItem = async ({ params }: Request, res: Response) => {
    const { item } = params
    const itemMaterial = await SurviAPIModel.getItem({ item })
    if (!itemMaterial) {
      res.status(404).json({ error_message: 'Item material not found' })
      return
    }
    return res.json(itemMaterial)
  }

  static getMobs = async (_req: Request, res: Response) => {
    const mob = await SurviAPIModel.getMobs()
    if (!mob) {
      res.status(404).json({ error_message: 'Mobs not found' })
      return
    }
    return res.json(mob)
  }

  static create = async ({ body }: Request, _res: Response) => {
    const result = body
    console.log(result)
    if (result === 'armors') SurviAPIModel.create({ armors: result })
    if (result === 'items') SurviAPIModel.create({ items: result })
    if (result === 'mobs') SurviAPIModel.create({ mobs: result })
    if (result === 'weapons') SurviAPIModel.create({ weapons: result })
    if (result === 'tools') SurviAPIModel.create({ tools: result })
  }

  static update = async ({ body }: Request, _res: Response) => {
    const result = body
    console.log(result)
    if (result === 'armors') SurviAPIModel.update({ armors: result })
    if (result === 'items') SurviAPIModel.update({ items: result })
    if (result === 'mobs') SurviAPIModel.update({ mobs: result })
    if (result === 'weapons') SurviAPIModel.update({ weapons: result })
    if (result === 'tools') SurviAPIModel.update({ tools: result })
  }

  static delete = async ({ body }: Request, _res: Response) => {
    const result = body
    console.log(result)
    if (result === 'armors') SurviAPIModel.delete({ armors: result })
    if (result === 'items') SurviAPIModel.delete({ items: result })
    if (result === 'mobs') SurviAPIModel.delete({ mobs: result })
    if (result === 'weapons') SurviAPIModel.delete({ weapons: result })
    if (result === 'tools') SurviAPIModel.delete({ tools: result })
  }
}
