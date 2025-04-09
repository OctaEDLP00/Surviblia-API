import type { SurviAPIWeaponsModel } from '@/models/SurviAPIWeapons.models'
import type { Request, Response } from 'express'

interface ISurviAPIWeaponsController {
  surviWeaponsModel: SurviAPIWeaponsModel
  /** @async */
  getWeapons: (req: Request, res: Response) => Promise<void>
  /** @async */
  getWeaponMaterial: (req: Request, res: Response) => Promise<void>
  /** @async */
  createWeapon: (req: Request, res: Response) => Promise<void>
  /** @async */
  updateWeapon: (req: Request, res: Response) => Promise<void>
  /** @async */
  deleteWeapon: (req: Request, res: Response) => Promise<void>
}

export type { ISurviAPIWeaponsController }
