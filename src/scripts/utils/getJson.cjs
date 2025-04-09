const { join } = require('node:path')

/**
 * @param {string} file
 * @return {string}
 */
function getJson(file) {
  return join('..', 'data', file)
}

module.exports = {
  getJson
}
