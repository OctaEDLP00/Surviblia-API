import type { ISurviAPIEpisodesModel } from '@/types/SurviAPIEpisodes.d'
import type { ISurviAPIModel } from '@/types/SurviAPIModel.d'

export interface ICreateAPP {
  surviModel: ISurviAPIModel,
  surviEpisodesModel: ISurviAPIEpisodesModel
}
