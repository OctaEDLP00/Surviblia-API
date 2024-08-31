import SurviAPIData from '@data/SurviAPI.json'

export function containsTools(tool: string | RegExp): string | undefined {
  return Object.keys(SurviAPIData.tools).find(t => t.match(tool))
}
