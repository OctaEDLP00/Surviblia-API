import type { SurviAPISVSGModel } from '@/models/SurviAPISVSGModel.d.ts'
import type { Request, Response } from 'express'

interface ISurviAPISVSGController {
  surviSVSGModel: SurviAPISVSGModel
  /** @async */
  getAllInfoSVSG: (req: Request, res: Response) => Promise<void>
  /** @async */
  getAllSolutions: (req: Request, res: Response) => Promise<void>
  /** @async */
  getSolution: (req: Request, res: Response) => Promise<void>
  /** @async */
  createSVSG: (req: Request, res: Response) => Promise<void>
  /** @async */
  updateSVSG: (req: Request, res: Response) => Promise<void>
  /** @async */
  deleteSVSG: (req: Request, res: Response) => Promise<void>
}

export type { ISurviAPISVSGController }
