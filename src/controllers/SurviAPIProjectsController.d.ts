import type { ISurviAPIProjectsModel } from '@/models/SurviAPIProjectsModel'
import type { Request, Response } from 'express'

interface ISurviAPIProjectsController {
  surviProjectModel: ISurviAPIProjectsModel
  /** @async */
  getAllTiers: (req: Request, res: Response) => Promise<void>
  /** @async */
  getTier: (req: Request, res: Response) => Promise<void>
  /** @async */
  getProjectByTier: (req: Request, res: Response) => Promise<void>
  /** @async */
  createProject: (req: Request, res: Response) => Promise<void>
  /** @async */
  updateProject: (req: Request, res: Response) => Promise<void>
  /** @async */
  deleteProject: (req: Request, res: Response) => Promise<void>
}

export type { ISurviAPIProjectsController }
