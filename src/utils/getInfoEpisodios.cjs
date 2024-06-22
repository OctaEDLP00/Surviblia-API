/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
const ypi = require('youtube-playlist-info')
const { writeFile } = require('node:fs/promises')
// @ts-ignore
const { parseInfoTitle } = require('./parseInfoTitle.cjs')
const { error } = console

// const { parseInfoPublishedAt } = require('./parseInfoPublishedAt.cjs')
// const ApiKey = process.argv[2].replace('--key=', '')
// const PlaylistId = process.argv[3].replace('--playlist=', '')

const API_KEY = 'AIzaSyBdy45lzrUVJIfvBEHJvPi9DONcvI1GuxE'
const PLAYLIST_ID = 'PL1395B327C926DACD'

ypi(API_KEY, PLAYLIST_ID).then(ytdle => {
  const data = []
  for (const { title, resourceId, thumbnails } of ytdle) {
    const { videoId } = resourceId
    const { version, episode_number, episode_title } = parseInfoTitle(title)
    // const published_at = parseInfoPublishedAt(publishedAt)
    data.push({
      episode_number,
      episode_title,
      thumbnails,
      version,
      video_id: videoId
    })
  }
  return JSON.stringify(data, null, 2)
}).then(
  async data => await writeFile(
    './src/data/SurviAPIEpisodes.json',
    data
  )
).catch(error)
