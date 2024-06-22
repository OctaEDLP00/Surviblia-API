
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

/**
 * @param {string} title
 * @returns {{version: string, episode_number: number, episode_title: string} | null}
 */
function parseInfoTitle(title) {
  const pattern = /(\d+(?:\.\d+)?)|\\s*Ep(\d+)\s*(.*)\s*$/gi
  const match = title.match(pattern)
  const getTitle = title.split(', ')
  if (match) {
    return {
      version: match[0],
      episode_number: match[1],
      episode_title: getTitle[1]
    }
  }

  return null
}

module.exports = {
  parseInfoTitle
}
