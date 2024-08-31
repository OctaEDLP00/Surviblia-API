import { SurviAPIEpisodes, SurviAPIEpisodesVideos } from '@/types/SurviAPIEpisodes'

export interface ISurviAPIEpisodesModel {
  /** @static @async */
  getAllEpisodes(): Promise<SurviAPIEpisodesVideos['episodes_videos']>
  /** @static @async */
  getEpisode(episode: SurviAPIEpisodes['episode_number']): Promise<SurviAPIEpisodes | undefined>
  /** @static @async */
  getVersions(version: SurviAPIEpisodes['version']): Promise<Array<SurviAPIEpisodes>>
  /** @static @async */
  getAllVersions(): Promise<Array<SurviAPIEpisodes['version']>>
  /** @static @async */
  getAllEpisodesTitle(): Promise<Array<SurviAPIEpisodes['episode_title']>>
}
