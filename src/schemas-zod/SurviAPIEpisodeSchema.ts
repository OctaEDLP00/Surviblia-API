import {
  array as zArray,
  type infer as zInfer,
  number as zNumber,
  object as zObject,
  string as zString,
} from 'zod'

const ThumbnailsValuesSchema = zObject({
  url: zString().url().endsWith('jpg'),
  width: zNumber().positive().int(),
  height: zNumber().positive().int(),
})

const ThumbnailsSchema = zObject({
  default: ThumbnailsValuesSchema,
  medium: ThumbnailsValuesSchema,
  high: ThumbnailsValuesSchema,
  standard: ThumbnailsValuesSchema,
  maxres: ThumbnailsValuesSchema,
})

const SurviAPIEpisodeSchema = zArray(
  zObject({
    episode_number: zString(),
    episode_title: zString(),
    thumbnails: ThumbnailsSchema,
    version: zString(),
    video_id: zString(),
  })
)

// SurviAPIEpisodes type
type SurviAPIEpisode = zInfer<typeof SurviAPIEpisodeSchema>

export type {
  SurviAPIEpisode,
  SurviAPIEpisodeSchema,
  ThumbnailsSchema,
  ThumbnailsValuesSchema,
}
