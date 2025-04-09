import type { SurviAPIEntitiesModel } from '@/models/SurviAPIEntitiesModel.d.ts'
import type { Request, Response } from 'express'

interface ISurviAPIEntitiesController {
  surviEntitiesModel: SurviAPIEntitiesModel
  getEntities: (req: Request, res: Response) => Promise<void>
  /** @async */
  getEntity: (req: Request, res: Response) => Promise<void>
  /** @async */
  createEntity: (req: Request, res: Response) => Promise<void>
  /** @async */
  updateEntity: (req: Request, res: Response) => Promise<void>
  /** @async */
  deleteEntity: (req: Request, res: Response) => Promise<void>
}

export type { ISurviAPIEntitiesController }
