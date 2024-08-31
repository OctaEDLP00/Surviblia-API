interface Thumbnail {
  url: string
  width: number
  height: number
}

interface Thumbnails {
  default: Thumbnail
  medium: Thumbnail
  high: Thumbnail
  standard: Thumbnail
  maxres: Thumbnail
}

export interface SurviAPIEpisodes {
  episode_number: string
  episode_title: string
  thumbnails: Thumbnails,
  version: string
  videoId: string
}

export interface SurviAPIEpisodesVideos {
  episodes_videos: Array<SurviAPIEpisodes>
}
