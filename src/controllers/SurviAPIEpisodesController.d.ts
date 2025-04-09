import type { SurviAPIEpisodesModel } from '@/models/SurviAPIEpisodesModel.d'
import type { Request, Response } from 'express'

interface ISurviAPIEpisodesController {
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

export type { ISurviAPIEpisodesController }
