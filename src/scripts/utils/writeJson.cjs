const { writeFile } = require('node:fs/promises')

/**
 * @type {import('./writeJson.d.ts').writeJson}
 */
async function writeJson(path, data, options) {
  await writeFile(path, data, options)
}

module.exports = {
  writeJson
}
