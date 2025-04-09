import type { SurviAPIToolsModel } from '@/models/SurviAPIToolsModel'
import type { Request, Response } from 'express'

interface ISurviAPIToolsController {
  surviToolsModel: SurviAPIToolsModel
  /** @async */
  getTools: (req: Request, res: Response) => Promise<void>
  /** @async */
  getToolMaterial: (req: Request, res: Response) => Promise<void>
  /** @async */
  createTool: (req: Request, res: Response) => Promise<void>
  /** @async */
  updateTool: (req: Request, res: Response) => Promise<void>
  /** @async */
  deleteTool: (req: Request, res: Response) => Promise<void>
}

export type { ISurviAPIToolsController }
