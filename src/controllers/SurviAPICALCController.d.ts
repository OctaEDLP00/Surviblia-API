import type { SurviAPICALCModel } from '@/models/SurviAPICALCModel'
import type { Request, Response } from 'express'

interface ISurviAPICALCController {
  surviCALCModel: SurviAPICALCModel
  getAllCALC: (req: Request, res: Response) => Promise<void>
  /** @async */
  getAllLore: (req: Request, res: Response) => Promise<void>
  /** @async */
  getAllAnimations: (req: Request, res: Response) => Promise<void>
  /** @async */
  getAllCinematics: (req: Request, res: Response) => Promise<void>
  /** @async */
  getAllClips: (req: Request, res: Response) => Promise<void>
  createCALC: (req: Request, res: Response) => Promise<void>
  /** @async */
  updateCALC: (req: Request, res: Response) => Promise<void>
  /** @async */
  deleteCALC: (req: Request, res: Response) => Promise<void>
}

export type { ISurviAPICALCController }
