import SurviAPITools from '@/data/SurviAPITools.json'

function containsTools(tool: string | RegExp): string | undefined {
  return Object.keys(SurviAPITools).find((t) => t.match(tool))
}

export { containsTools }
export default containsTools
