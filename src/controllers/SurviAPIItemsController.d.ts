import type { SurviAPIItemsModel } from '@/models/SurviAPIItemsModel'
import type { Request, Response } from 'express'

interface ISurviAPIItemsController {
  surviItemsModel: SurviAPIItemsModel
  /** @async */
  getItems: (req: Request, res: Response) => Promise<void>
  /** @async */
  getItem: (req: Request, res: Response) => Promise<void>
  /** @async */
  createItem: (req: Request, res: Response) => Pormise<void>
  /** @async */
  updateItem: (req: Request, res: Response) => Pormise<void>
  /** @async */
  deleteItem: (req: Request, res: Response) => Pormise<void>
}

export type { ISurviAPIItemsController }
