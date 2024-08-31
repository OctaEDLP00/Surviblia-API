const ypi = require('youtube-playlist-info')
const { writeFile } = require('node:fs/promises')
const { parseInfoTitle } = require('./parseInfoTitle.cjs')
// const { parseInfoPublishedAt } = require('./parseInfoPublishedAt.cjs')
const { log, error } = console

/**
 * @param {string | null} apiKey
 * @param {string | null} playlistId
 * @returns {Error | undefined}
 */
function getInfoEpisodios(apiKey, playlistId) {
  if (apiKey == null || playlistId == null) return new Error('API_KEY or PLAYLIST_ID not provided!!')
  ypi(apiKey, playlistId)
    .then(ytdle => {
      const data = []
      for (const { title, resourceId: { videoId: video_id }, thumbnails } of ytdle) {
        const parsedInfo = parseInfoTitle(title)
        if (parsedInfo == null) throw new Error()
        // const published_at = parseInfoPublishedAt(publishedAt)
        const { episode_number, episode_title, version } = parsedInfo
        data.push({
          episode_number,
          episode_title,
          thumbnails,
          version,
          video_id
        })
        log(`Episodio ${episode_number} generado exitosamente\n`)
      }
      return JSON.stringify(data, null, 2)
    }).then(
      async data => {
        const newData = {
          $ref: '../schemas/json/SurviAPIEpisodesSchema.json',
          episodes_videos: data
        }
        await writeFile(
          './src/data/SurviAPIEpisodes.json',
          JSON.stringify(newData)
        )
        process.exit(0)
      }
    ).catch(() => {
      error('GENERATE ERR: error al generar el archivo')
      process.exit(-1)
    })
}

// const API_KEY = process.env.API_KEY
// const PLAYLIST_ID = 'PL1395B327C926DACD'
/*
if (!API_KEY) throw new Error('The API_KEY was not provided')

ypi(API_KEY, PLAYLIST_ID)
  .then(ytdle => {
    const data = []
    for (const { title, resourceId: { videoId: video_id }, thumbnails } of ytdle) {
      const parsedInfo = parseInfoTitle(title)
      if (parsedInfo == null) throw new Error()
      // const published_at = parseInfoPublishedAt(publishedAt)
      const { episode_number, episode_title, version } = parsedInfo
      data.push({
        episode_number,
        episode_title,
        thumbnails,
        version,
        video_id
      })
      log(`Episodio ${episode_number} generado exitosamente\n`)
    }
    return JSON.stringify(data, null, 2)
  }).then(
    async data => {
      await writeFile(
        './src/data/SurviAPIEpisodes.json',
        data
      )
      exit(0)
    }
  ).catch(() => {
    error('GENERATE ERR: error al generar el archivo')
    exit(-1)
  })
*/

module.exports = getInfoEpisodios
module.exports = {
  getInfoEpisodios
}
