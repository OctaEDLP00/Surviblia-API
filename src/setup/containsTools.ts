import ToolsAndArmors from '../data/SurviAPI.json'

export const containsTools = (tool: string | RegExp) => Object.keys(ToolsAndArmors.tools).find(t => t.match(tool))
