const { getInfoEpisodios } = require('./getInfoEpisodios.cjs')
// const { generateJsonEpisodesExtended } = require('./generateJsonEpisodesExtended.cjs')

function init() {
  const { exit } = process
  const { API_KEY, PLAYLIST_ID } = process.env

  if (API_KEY == null) {
    throw (
      new Error('The enviroment variable API_KEY are not set in the .env file') &&
      exit(-1)
    )
  }

  if (PLAYLIST_ID == null) {
    throw (
      new Error(
        'The enviroment variable PLAYLIST_ID are not set in the .env file'
      ) && exit(-1)
    )
  }
  getInfoEpisodios(API_KEY, PLAYLIST_ID) && exit(0)

  /*
  try {
    const readFile = require('node:fs').readFileSync
    const EPISODES = readFile('src/data/SurviAPIEpisodes.json', { encoding: 'utf-8' })
    generateJsonEpisodesExtended('src/data/SurviAPIEpisodesExtended.json', EPISODES)
  } catch (error) {
    console.error(error)
  }
  */
}

init()
