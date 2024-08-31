import { SurviAPIEpisodesModel } from '@/models/SurviAPIEpisodes.models'
import type { Request, Response } from 'express'

export interface ISurviAPIEpisodesController {
  surviEpisodesModel: SurviAPIEpisodesModel
  /** @async */
  getAllEpisodes: (req: Request, res: Response) => Promise<void>
  /** @async */
  getEpisode: (req: Request, res: Response) => Promise<void>
  /** @async */
  getVersions: (req: Request, res: Response) => Promise<void>
  /** @async */
  getAllVersions: (req: Request, res: Response) => Promise<void>
  /** @async */
  getAllEpisodesTitle: (req: Request, res: Response) => Promise<void>
}
