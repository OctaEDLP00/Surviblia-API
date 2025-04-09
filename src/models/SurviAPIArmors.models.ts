import type { Armors } from '@/types/SurviAPIArmors.d.ts'
import { readFile } from '@/utils/readFile.ts'
import { sanitize } from '@/utils/sanitize.ts'

const SAPIArmors: Armors = readFile('../data/SurviAPIArmors.json')

class SurviAPIArmorsModel {
  static async getArmors(): Promise<Armors> {
    return SAPIArmors
  }

  static async getArmorFromArmorMaterial({
    material,
    armor,
  }: { material?: string; armor: string }): Promise<Armors> {
    const armorMaterial = SAPIArmors.filter((a) => {
      const [materialType, armorType] = sanitize(a.material)
      return material === materialType || armor === armorType
    })
    return armorMaterial
  }

  static async createArmor(armor: Armors): Promise<void> {}

  static async updateArmor(armor: Armors): Promise<void> {}

  static async deleteArmor(armor: Armors): Promise<void> {}
}

export { SurviAPIArmorsModel }
export default SurviAPIArmorsModel
