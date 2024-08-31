import {
  array,
  number,
  object,
  string,
  infer as zInfer
} from 'zod'

// SurviAPIEpisode Schema
export const ThumbnailsValuesSchema = object({
  url: string().url().endsWith('jpg'),
  width: number().positive().int(),
  height: number().positive().int()
})

export const ThumbnailsSchema = object({
  default: ThumbnailsValuesSchema,
  medium: ThumbnailsValuesSchema,
  high: ThumbnailsValuesSchema,
  standard: ThumbnailsValuesSchema,
  maxres: ThumbnailsValuesSchema
})

export const SurviAPIEpisodeSchema = array(object({
  episode_number: string(),
  episode_title: string(),
  thumbnails: ThumbnailsSchema,
  version: string(),
  video_id: string()
}))

// SurviAPIEpisodes type
export type SurviAPIEpisode = zInfer<typeof SurviAPIEpisodeSchema>
