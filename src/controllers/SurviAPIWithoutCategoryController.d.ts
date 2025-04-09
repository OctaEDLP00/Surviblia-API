import type { SurviAPIWithoutCategoryModel } from '@/models/SurviAPIWithoutCategoryModel'
import type { Request, Response } from 'express'

interface ISurviAPIWithoutCategoryController {
  surviWithoutCategoryModel: SurviAPIWithoutCategoryModel
  /** @async */
  getWithoutCategory: (req: Request, res: Response) => Promise<void>
  getWithoutCategoryFrom: (req: Request, res: Response) => Promise<void>
  /** @async */
  createWithoutCategory: (req: Request, res: Response) => Promise<void>
  /** @async */
  updateWithoutCategory: (req: Request, res: Response) => Promise<void>
  /** @async */
  deleteWithoutCategory: (req: Request, res: Response) => Promise<void>
}

export type { ISurviAPIWithoutCategoryController }
