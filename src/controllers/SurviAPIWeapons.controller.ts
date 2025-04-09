import type { SurviAPIWeaponsModel } from '@/models/SurviAPIWeaponsModel.d'
import type { Request, Response } from 'express'
import type { ISurviAPIWeaponsController } from './SurviAPIWeaponsController.d'

class SurviAPIWeaponsController implements ISurviAPIWeaponsController {
  surviWeaponsModel: SurviAPIWeaponsModel

  constructor({
    surviWeaponsModel,
  }: { surviWeaponsModel: SurviAPIWeaponsModel }) {
    this.surviWeaponsModel = surviWeaponsModel
  }

  getWeapons = async (_req: Request, res: Response) => {
    const weapons = await this.surviWeaponsModel.getWeapons()
    if (!weapons) res.status(404).json({ error_message: 'Weapons not found' })
    res.json(weapons)
  }

  getWeaponMaterial = async (req: Request, res: Response) => {
    const { weapon, material } = req.params as {
      weapon: string
      material: string
    }
    const weaponModel = await this.surviWeaponsModel.getWeaponMaterial({
      weapon,
      material,
    })
    if (!weaponModel)
      res.status(404).json({ error_message: 'Weapon material not found' })
    res.json(weaponModel)
  }

  createWeapon = async (req: Request, res: Response) => {
    const weapons = req.body
    await this.surviWeaponsModel.createWeapon(weapons)
    res.json({ message: 'Weapons created' })
  }

  updateWeapon = async (req: Request, res: Response): Promise<void> => {
    const weapons = req.body
    await this.surviWeaponsModel.updateWeapon(weapons)
    res.json({ message: 'Weapons updated' })
  }

  deleteWeapon = async (req: Request, res: Response): Promise<void> => {
    const weapons = req.body
    await this.surviWeaponsModel.deleteWeapon(weapons)
    res.json({ message: 'Weapons deleted' })
  }
}

export { SurviAPIWeaponsController }
export default SurviAPIWeaponsController
