import { SurviAPIModel } from '@models/SurviAPI.models.ts'
import { SurviAPIEpisodesModel } from '@models/SurviAPIEpisodes.models.ts'
import { createAPP } from './setup/main.ts'

createAPP({
  surviModel: SurviAPIModel,
  surviEpisodesModel: SurviAPIEpisodesModel
})
