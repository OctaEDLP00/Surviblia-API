import { SurviAPIEpisodesModel } from '@models/SurviAPIEpisodes.model.ts'
import { type Request, type Response } from 'express'

export class SurviAPIControllerEpisodes {

  static getAllEpisodes = async (_req: Request, res: Response) => {
    const surviAPIEpisodes = await SurviAPIEpisodesModel.getAllEpisodes()
    if (!surviAPIEpisodes) {
      res.status(404).json({ error_message: 'SurviAPIEpisode not found or not exist' })
      return
    }
    return res.json(surviAPIEpisodes)
  }

  static getEpisode = async ({ query }: Request, res: Response) => {
    const { episode } = query as { episode: string }
    const Episode = await SurviAPIEpisodesModel.getEpisode(episode)
    if (!Episode) {
      res.status(404).send({ error_message: 'Episode not found or not exist' })
      return
    }
    return res.json(Episode)
  }

  static getVersions = async ({ query }: Request, res: Response) => {
    const { version } = query as { version: string }
    const Version = await SurviAPIEpisodesModel.getVersions(version)
    if (!Version) {
      res.status(404).send({ error_message: 'Version not found or not exist' })
      return
    }
    return res.json(Version)
  }
}
