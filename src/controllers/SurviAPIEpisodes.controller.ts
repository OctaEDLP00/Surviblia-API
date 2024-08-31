import { ISurviAPIEpisodesController } from '@/controllers/SurviAPIEpisodesController'
import { ISurviAPIEpisodesModel } from '@/models/SurviAPIEpisodesModel'
import { type Request, type Response } from 'express'

export class SurviAPIControllerEpisodes implements ISurviAPIEpisodesController {
  surviEpisodesModel: ISurviAPIEpisodesModel

  constructor({ surviEpisodesModel }: { surviEpisodesModel: ISurviAPIEpisodesModel }) {
    this.surviEpisodesModel = surviEpisodesModel
  }

  getAllEpisodes = async (_req: Request, res: Response): Promise<void> => {
    const surviAPIEpisodes = await this.surviEpisodesModel.getAllEpisodes()
    if (!surviAPIEpisodes) res.status(404).json({ error_message: 'SurviAPIEpisodes not found or not exist' })
    res.json(surviAPIEpisodes)
  }

  getEpisode = async (req: Request, res: Response): Promise<void> => {
    const { episode } = req.query as { episode: string }
    const Episode = await this.surviEpisodesModel.getEpisode(episode)
    if (!Episode) res.status(404).send({ error_message: 'Episode not found or not exist' })
    res.json(Episode)
  }

  getVersions = async (req: Request, res: Response): Promise<void> => {
    const { version } = req.query as { version: string }
    const Version = await this.surviEpisodesModel.getVersions(version)
    if (!Version) res.status(404).send({ error_message: 'Version not found or not exist' })
    res.json(Version)
  }

  getAllVersions = async (_req: Request, res: Response): Promise<void> => {
    const versions = await this.surviEpisodesModel.getAllVersions()
    res.json(versions)
  }

  getAllEpisodesTitle = async (_req: Request, res: Response): Promise<void> => {
    const episodesTitle = await this.surviEpisodesModel.getAllEpisodesTitle()
    res.json(episodesTitle)
  }
}
