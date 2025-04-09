const { writeJson } = require('./utils/writeJson.cjs')

/**
 * @param {string} path
 * @param {string} data
 */
async function generateJsonEpisodesExtended(path, data) {
  /** @type {Array<{ episode_number: string; release_date: string }>} */
  const newData = []
  /** @type {Array<import('../types/SurviAPIEpisodes').SurviAPIEpisodes>} */
  const parsedJson = JSON.parse(data)
  for (let i = 0; i < parsedJson.length; i++) {
    newData.push({ episode_number: parsedJson[i].episode_number, release_date: "" })
  }

  await writeJson(path, JSON.stringify(newData), { encoding: 'utf-8', flag: 'w' })
}

module.exports = {
  generateJsonEpisodesExtended
}
