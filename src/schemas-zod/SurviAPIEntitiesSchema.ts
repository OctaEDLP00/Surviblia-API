import { array as zArray, object as zObject, string as zString } from 'zod'
import { VersionSchema } from './Schemas.ts'

const ZombieSchema = zObject(
  {
    apparition_episodes: zString({
      invalid_type_error: 'Apparition episodes must be a string',
      required_error: 'Apparition_episodes is required',
    }),
    version: VersionSchema,
    name_mob: zString({
      invalid_type_error: 'Name mob must be a string',
      required_error: 'Name mob is required',
    }),
    state: zString({
      invalid_type_error: 'State must be a string',
      required_error: 'State is required',
    }),
    species: zString({
      invalid_type_error: 'Species must be a string',
      required_error: 'Scpecies is required',
    }),
    alias: zString({
      invalid_type_error: 'Alias must be a string',
      required_error: 'Alias is required',
    }),
    domestication: zString({
      invalid_type_error: 'Domestication must be a string',
      required_error: 'Domestication is required',
    }),
    last_seen: zString({
      invalid_type_error: 'Last seen must be a string',
      required_error: 'Last seen is required',
    }),
    others: zString({
      invalid_type_error: 'Others must be a string',
    }).optional(),
  },
  {
    invalid_type_error:
      'Zombie must be a object with the properties apparition_episodes, version, name_mob, state, species, alias, domestication, last_seen and others',
    required_error: 'Zombie is required',
  }
)

const SurviAPIEntitiesSchema = zObject(
  {
    zombies: zArray(ZombieSchema, {
      invalid_type_error: 'Zombie must be an array of objects',
      required_error: 'Zombies is required',
    }),
  },
  {
    invalid_type_error: 'Mobs must be a object with the propertie zombies',
    required_error: 'Mobs is required',
  }
)

export { SurviAPIEntitiesSchema, ZombieSchema }
