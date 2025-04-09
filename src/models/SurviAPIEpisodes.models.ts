import type { SurviAPIEpisodes } from '@/types/SurviAPIEpisodes.d'
import { readFile } from '@/utils/readFile.ts'

const SAPIE: Array<SurviAPIEpisodes> = readFile('../data/SurviAPIEpisodes.json')

class SurviAPIEpisodesModel {
  static async getAllEpisodes(): Promise<Array<SurviAPIEpisodes>> {
    return SAPIE
  }

  static async getEpisode(
    episode: SurviAPIEpisodes['episode_number']
  ): Promise<SurviAPIEpisodes | undefined> {
    return SAPIE.find(
      ({ episode_number: episodesNumber }) => episodesNumber === episode
    )
  }

  static async getVersions(
    version: SurviAPIEpisodes['version']
  ): Promise<Array<SurviAPIEpisodes>> {
    return SAPIE.filter(({ version: v }) => v === version)
  }

  static async getAllVersions(): Promise<Array<SurviAPIEpisodes['version']>> {
    return [...new Set<string>(SAPIE.map(({ version }) => version))]
  }

  static async getAllEpisodesTitle(): Promise<
    Array<SurviAPIEpisodes['episode_title']>
  > {
    return [...SAPIE.map(({ episode_title: episodeTitle }) => episodeTitle)]
  }
}

export { SurviAPIEpisodesModel }
export default SurviAPIEpisodesModel
