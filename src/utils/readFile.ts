import { glob } from 'node:fs/promises'
import { require } from './createRequire'

const readFile = (file: string) => require(file)

const extractSchemaName = (file: string): string | undefined => {
  const regexp = /\/schemas-json\/([^/]+)\.[^/]+$/
  const match = file.match(regexp)
  if (!match) return undefined
  return match[1]
}

type Files<T extends string> = Record<T, string>

async function readFiles<T extends string>(
  pattern: string
): Promise<Array<Files<T>> | undefined> {
  try {
    const filesIterator = glob(pattern)

    const files: Array<Files<T>> = []

    for await (const file of filesIterator) {
      const formattedPath = file.replaceAll('\\', '/')
      const fileName = extractSchemaName(formattedPath)

      if (fileName) {
        files.push({
          [fileName]: formattedPath,
        } as Files<T>)
      }
    }

    return files
  } catch (error) {
    console.error(error)
    return undefined
  }
}

export { readFile, readFiles }
export default { readFile, readFiles }
