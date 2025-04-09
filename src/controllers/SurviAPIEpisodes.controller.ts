import type { ISurviAPIEpisodesController } from '@/controllers/SurviAPIEpisodesController'
import type { SurviAPIEpisodesModel } from '@/models/SurviAPIEpisodesModel.d'
import type { Request, Response } from 'express'

class SurviAPIEpisodesController implements ISurviAPIEpisodesController {
  surviEpisodesModel: SurviAPIEpisodesModel

  constructor({
    surviEpisodesModel,
  }: {
    surviEpisodesModel: SurviAPIEpisodesModel
  }) {
    this.surviEpisodesModel = surviEpisodesModel
  }

  getAllEpisodes = async (_req: Request, res: Response): Promise<void> => {
    const surviAPIEpisodes = await this.surviEpisodesModel.getAllEpisodes()
    if (!surviAPIEpisodes) {
      res.status(404).json({
        error_message: 'SurviAPIEpisodes not found or not exist',
      })
    }
    res.json(surviAPIEpisodes)
  }

  getEpisode = async (req: Request, res: Response): Promise<void> => {
    const { episode } = req.params as { episode: string }
    const Episode = await this.surviEpisodesModel.getEpisode(episode)
    if (!Episode) {
      res.status(404).send({ error_message: 'Episode not found or not exist' })
    }
    res.json(Episode)
  }

  getVersions = async (req: Request, res: Response): Promise<void> => {
    const { version } = req.params as { version: string }
    const versions = await this.surviEpisodesModel.getVersions(version)
    if (!versions) {
      res.status(404).send({ error_message: 'Versions not found or not exist' })
    }
    res.json(versions)
  }

  getAllVersions = async (_req: Request, res: Response): Promise<void> => {
    const versions = await this.surviEpisodesModel.getAllVersions()
    if (!versions) {
      res.status(404).json({ error_message: 'Versions not found or not exist' })
    }
    res.json(versions)
  }

  getAllEpisodesTitle = async (_req: Request, res: Response): Promise<void> => {
    const episodesTitle = await this.surviEpisodesModel.getAllEpisodesTitle()
    res.json(episodesTitle)
  }
}

export { SurviAPIEpisodesController }
export default SurviAPIEpisodesController
