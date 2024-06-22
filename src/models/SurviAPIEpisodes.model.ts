import { readFile } from '@utils/readFile.ts'
import { type SurviAPIEpisodes } from '../types/SurviAPIEpisodes'
const Episodes: Array<SurviAPIEpisodes> = readFile('@data/SurviAPIEpisodes.json')

export class SurviAPIEpisodesModel {
  static getAllEpisodes = async (): Promise<Array<SurviAPIEpisodes>> => Episodes
  static getEpisode = async (episode: SurviAPIEpisodes['episode_number']): Promise<SurviAPIEpisodes | void> => Episodes.find(({ episode_number: episodesNumber }) => episodesNumber === episode)
  static getVersions = async (version: SurviAPIEpisodes['version']): Promise<Array<SurviAPIEpisodes>> => Episodes.filter(({ version: v }) => v === version)
}
