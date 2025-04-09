import type { SurviAPIEpisodes } from '@/types/SurviAPIEpisodes'

interface SurviAPIEpisodesModel {
  /** @static @async */
  getAllEpisodes(): Promise<Array<SurviAPIEpisodes>>
  /** @static @async */
  getEpisode(
    episode: SurviAPIEpisodes['episode_number']
  ): Promise<SurviAPIEpisodes | undefined>
  /** @static @async */
  getVersions(
    version: SurviAPIEpisodes['version']
  ): Promise<Array<SurviAPIEpisodes>>
  /** @static @async */
  getAllVersions(): Promise<Array<SurviAPIEpisodes['version']>>
  /** @static @async */
  getAllEpisodesTitle(): Promise<Array<SurviAPIEpisodes['episode_title']>>
}

export type { SurviAPIEpisodesModel }
