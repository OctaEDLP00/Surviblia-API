import type { SurviAPIEpisodes, SurviAPIEpisodesVideos } from '@/types/SurviAPIEpisodes.d'
import { readFile } from '@utils/readFile.ts'

const SAPIE: SurviAPIEpisodesVideos = readFile('../data/SurviAPIEpisodes.json')

/**
 * @implements {import('./SurviAPIEpisodesModel.d.ts').ISurviAPIEpisodesModel}
 */
export class SurviAPIEpisodesModel {

  static async getAllEpisodes(): Promise<SurviAPIEpisodesVideos['episodes_videos']> {
    return SAPIE.episodes_videos
  }

  static async getEpisode(episode: SurviAPIEpisodes['episode_number']): Promise<SurviAPIEpisodes | undefined> {
    return SAPIE.episodes_videos.find(({ episode_number: episodesNumber }) => episodesNumber === episode)
  }

  static async getVersions(version: SurviAPIEpisodes['version']): Promise<Array<SurviAPIEpisodes>> {
    return SAPIE.episodes_videos.filter(({ version: v }) => v === version)
  }

  static async getAllVersions(): Promise<Array<SurviAPIEpisodes['version']>> {
    return [
      ...new Set(
        SAPIE.episodes_videos.map(({ version }) => version)
      )
    ]
  }

  static async getAllEpisodesTitle(): Promise<Array<SurviAPIEpisodes['episode_title']>> {
    return [...SAPIE.episodes_videos.map(({ episode_title: episodeTitle }) => episodeTitle)]
  }
}
