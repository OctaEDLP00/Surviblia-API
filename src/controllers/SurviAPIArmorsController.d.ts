import type { SurviAPIArmorsModel } from '@/models/SurviAPIArmorsModel'
import type { Request, Response } from 'express'

interface ISurviArmorsController {
  surviArmorsModel: SurviAPIArmorsModel
  /** @async */
  getArmors: (req: Request, res: Response) => Promise<void>
  /** @async */
  getArmorFromArmorMaterial: (req: Request, res: Res) => Promise<void>
  /** @async */
  createArmor: (req: Request, res: Res) => Promise<void>
  /** @async */
  updateArmor: (req: Request, res: Res) => Promise<void>
  /** @async */
  deleteArmor: (req: Request, res: Res) => Promise<void>
}

export type { ISurviArmorsController }
