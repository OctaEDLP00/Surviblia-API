import type { Tools } from '@/types/SurviAPITools.d.ts'
import type { Props } from '@/types/main'
import { readFile } from '@/utils/readFile'
import { sanitize } from '@/utils/sanitize'

const SAPITools: Tools = readFile('../data/SurviAPITools.json')

class SurviAPIToolsModel {
  static async getTools(): Promise<Tools> {
    return SAPITools
  }

  static async getToolMaterial({
    tool,
    material,
  }: { tool: string; material?: string }): Promise<Array<Props>> {
    const { axe, hoes, pickaxe, shears, shield, shovel } = SAPITools
    const toolArray = (
      { axe, hoes, pickaxe, shears, shield, shovel } as {
        [key: string]: Array<Props>
      }
    )[tool]

    const toolMaterial = toolArray.filter((a) => {
      if (
        a.material === 'minecraft:shears' ||
        a.material === 'minecraft:shield'
      ) {
        const [toolType] = sanitize(a.material)
        return tool === toolType
      }
      const [materialType, toolType] = sanitize(a.material)
      return tool === toolType || material === materialType
    })

    return toolMaterial
  }

  static async createTool(tools: Tools): Promise<void> {}

  static async updateTool(tools: Tools): Promise<void> {}

  static async deleteTool(tools: Tools): Promise<void> {}
}

export { SurviAPIToolsModel }
export default SurviAPIToolsModel
