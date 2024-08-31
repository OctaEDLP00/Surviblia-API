/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable camelcase */

/**
 * @typedef {import('./parseInfoTitle').ParsedInfo} ParsedInfo
*/

/**
 * @param {string} title
 * @returns {ParsedInfo | null}
 */
function parseInfoTitle(title) {
  const patternVerAndEpisodeNum = /(\d+(?:\.\d+)?)|\\s*Ep(\d+)\s*(.*)\s*$/gi

  const match = title.match(patternVerAndEpisodeNum)
  const episode_title = title.split(', ')[1].trim()

  if (match) {
    return {
      version: match[0],
      episode_number: match[1].toString(),
      episode_title
    }
  }

  return null
}

module.exports = {
  parseInfoTitle
}
