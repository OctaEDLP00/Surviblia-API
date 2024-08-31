import type { ISurviController } from '@/controllers/SurviAPIController'
import { safeParseSurviAPISchema } from '@/schemas/zod/utils'
import type { ISurviAPIModel } from '@models/SurviAPIModel.d'
import type { Request, Response } from 'express'

export class SurviAPIController implements ISurviController {
  surviModel: ISurviAPIModel

  constructor({ surviModel }: { surviModel: ISurviAPIModel }) {
    this.surviModel = surviModel
  }

  getSurviAPI = async (_req: Request, res: Response) => {
    const surviAPI = await this.surviModel.getSurviAPI()
    if (!surviAPI) res.status(404).json({ error_message: 'SurviAPI not found' })
    res.json(surviAPI)
  }

  getArmors = async (_req: Request, res: Response): Promise<void> => {
    const armors = await this.surviModel.getArmors()
    if (!armors) res.status(404).json({ error_message: 'Armor not found' })
    res.json(armors)
  }

  getArmorMaterial = async (req: Request, res: Response): Promise<void> => {
    const { material } = req.params
    const armorMaterial = await this.surviModel.getArmorMaterial({ material })
    if (!armorMaterial) res.status(404).send({ error_message: 'Item not found' })
    res.json(armorMaterial)
  }

  getArmorFromArmorMaterial = async (req: Request, res: Response): Promise<void> => {
    const { material, armor } = req.params
    const armorMaterial = await this.surviModel.getArmorFromArmorMaterial({ material, armor })
    if (!armorMaterial) res.status(404).send({ error_message: 'Item not found' })
    res.json(armorMaterial)
  }

  getTools = async (_req: Request, res: Response): Promise<void> => {
    const tool = await this.surviModel.getTools()
    if (!tool) res.status(404).json({ error_message: 'Tool not found' })
    res.json(tool)
  }

  getToolMaterial = async (req: Request, res: Response): Promise<void> => {
    const { tool, material } = req.params
    const toolMaterial = await this.surviModel.getToolMaterial({ tool, material })
    if (!toolMaterial) res.status(404).json({ error_message: 'Tool material not found' })
    res.json(toolMaterial)
  }

  getWeapons = async (_req: Request, res: Response): Promise<void> => {
    const weapons = await this.surviModel.getWeapons()
    if (!weapons) res.status(404).json({ error_message: 'Weapons not found' })
    res.json(weapons)
  }

  getWeaponMaterial = async (req: Request, res: Response): Promise<void> => {
    const { weapon, material } = req.params
    const weaponModel = await this.surviModel.getWeaponMaterial({ weapon, material })
    if (!weaponModel) res.status(404).json({ error_message: 'Weapon material not found' })
    res.json(weaponModel)
  }

  getItems = async (_req: Request, res: Response): Promise<void> => {
    const item = await this.surviModel.getItems()
    if (!item) res.status(404).json({ error_message: 'Items not found' })
    res.json(item)
  }

  getItem = async (req: Request, res: Response): Promise<void> => {
    const { item } = req.params
    const itemMaterial = await this.surviModel.getItem({ item })
    if (!itemMaterial) res.status(404).json({ error_message: 'Item material not found' })
    res.json(itemMaterial)
  }

  getMobs = async (_req: Request, res: Response): Promise<void> => {
    const mob = await this.surviModel.getMobs()
    if (!mob) {
      res.status(404).json({ error_message: 'Mobs not found' })
    }
    res.json(mob)
  }

  create = async (req: Request, res: Response): Promise<void> => {
    const { data, success, error } = safeParseSurviAPISchema(req.body)

    if (!success) {
      const { errors } = error
      res.json({ error_message: errors }).status(400)
    }

    await this.surviModel.create(JSON.parse(data as any))
    res.json({ message: 'Data has been created', data }).status(201)
  }

  update = async (req: Request, res: Response): Promise<void> => {
    const { data, error, success } = safeParseSurviAPISchema(req.body)

    if (!success) {
      const { errors } = error
      res.json({ error_message: errors }).status(400)
    }

    await this.surviModel.update(JSON.parse(data as any))
    res.json({ message: 'Data has been updated', data })
  }

  delete = async (req: Request, res: Response): Promise<void> => {
    const { success, error, data } = safeParseSurviAPISchema(req.body)

    if (!success) {
      const { errors } = error
      res.json({ error_message: errors }).status(404)
    }

    await this.surviModel.delete(JSON.parse(data as any))
    res.json({ message: 'Data has been deleted', data })
  }
}
