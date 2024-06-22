import { SurviAPIModel } from '@models/SurviAPI.model.ts'
import { SurviAPIEpisodesModel } from '@models/SurviAPIEpisodes.model.ts'
import { createAPP } from './setup/main.ts'

createAPP({ SurviAPIModel, SurviAPIEpisodesModel })
