/* eslint-disable camelcase */

/**
 * @param {string} date
 * @returns {string | null}
 */
function parseInfoPublishedAt(date) {
  const pattern = /^(\d{4})-(\d{2})-(\d{2})/g
  const match = date.match(pattern)
  if (match) {
    const [published_at_without_format] = match
    const [year, month, day] = published_at_without_format.split('-')
    const published_at = `${day}/${month}/${year}`
    return published_at
  }
  return null
}

module.exports = {
  parseInfoPublishedAt
}
