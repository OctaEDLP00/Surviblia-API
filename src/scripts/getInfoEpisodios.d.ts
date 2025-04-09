export interface Thumbnail {
  url: string
  width: number
  height: number
}

interface Thumbnails {
  default?: Thumbnail
  medium?: Thumbnail
  high?: Thumbnail
  standard?: Thumbnail
  maxres?: Thumbnail
}

interface PlaylistItem {
  episode_title: string
  episode_number: string
  version: string
  thumbnails?: Thumbnails
  video_id: string
}

export interface ParseArgsOptionConfig {
  type: 'string' | 'boolean'
  multiple?: boolean | undefined
  short?: string | undefined
  default?: string | boolean | Array<string> | Array<boolean> | undefined
}

export interface ParseArgsOptionsConfig {
  [longOption: string]: ParseArgsOptionConfig
}

export declare function getInfoEpisodios(
  apiKey: string,
  playlistId: string
): Error | unknown

export type { PlaylistItem, Thumbnail, Thumbnails }

