/**
 * @param {string} title
 * @returns {[import('./parseInfoTitle').ParsedInfo | null, Error | null]}
 */
function parseInfoTitle(title) {
  const match = title.match(/(\d+(?:\.\d+)?)|\\s*Ep(\d+)\s*(.*)\s*$/gi)
  const episode_title = title.split(', ')[1].trim()

  if (match != null) {
    return [
      {
        version: match[0],
        episode_number: match[1].toString(),
        episode_title,
      },
      null,
    ]
  }

  return [null, new Error('The pattern is not matches with the title')]
}

module.exports = {
  parseInfoTitle,
}
