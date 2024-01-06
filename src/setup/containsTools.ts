import ToolsAndArmors from '../data/SurviAPI.json'

export const containsTools = (tool: any) => Object.keys(ToolsAndArmors.tools).find(t => t.match(tool))
