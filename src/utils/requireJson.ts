import { createRequire } from 'node:module'
const require = createRequire(import.meta.url)
const requireJson = (path: string) => require(path)
export default requireJson
