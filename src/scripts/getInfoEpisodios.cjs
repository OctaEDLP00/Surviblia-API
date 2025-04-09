const ypi = require('youtube-playlist-info')
const { readFileSync } = require('node:fs')
const { writeFile } = require('node:fs/promises')
const { parseInfoTitle } = require('./utils/parseInfoTitle.cjs')
const { log } = console
const { exit } = process

/**
 * @type {import('./getInfoEpisodios').getInfoEpisodios}
 */
function getInfoEpisodios(apiKey, playlistId) {
  ypi(apiKey, playlistId)
    .then((ytdle) => {
      const data = []
      for (const {
        title,
        resourceId: { videoId: video_id },
        thumbnails,
      } of ytdle) {
        const [parsedInfo, error] = parseInfoTitle(title)
        if (error == null && parsedInfo != null) {
          const {
            episode_number: parsedEpNumber,
            episode_title,
            version,
          } = parsedInfo

          /** @type {Array<{ episode_number: string; release_date: `${string}/${string}/${string}` }>} */
          const extendedEpisodes = JSON.parse(
            readFileSync('src/data/SurviAPIEpisodesExtended.json', {
              encoding: 'utf8',
              flag: 'r',
            })
          )

          for (const {
            episode_number: epNumber,
            release_date,
          } of extendedEpisodes) {
            if (epNumber === parsedEpNumber) {
              data.push({
                episode_number: parsedEpNumber,
                episode_title,
                thumbnails,
                version,
                video_id,
                release_date,
              })
            }
          }
          log(`Episodio ${parsedEpNumber} generado exitosamente\n`)
        } else {
          console.error(error)
        }
      }
      return JSON.stringify(data, null, 2)
    })
    .then(async (data) => {
      await writeFile('./src/data/SurviAPIEpisodes.json', data)
      exit(0)
    })
    .catch((e) => {
      if (e instanceof Error) {
        const { cause, message, stack, name } = e
        throw (
          new Error(`[${stack}]: Error al generar el archivo ${message}`, {
            cause,
          }) && exit(-1)
        )
      }
    })
}

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
