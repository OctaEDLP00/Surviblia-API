import type { Armors } from '@/types/SurviAPIArmors.d.ts'

interface SurviAPIArmorsModel {
  /** @static @async */
  getArmors(): Promise<Armors>
  /** @static @async */
  getArmorFromArmorMaterial({
    material,
    armor,
  }: { material?: string; armor: string }): Promise<Armors>
  /** @static @async */
  createArmor(armor: Armors): Promise<void>
  /** @static @async */
  updateArmor(armor: Armors): Promise<void>
  /** @static @async */
  deleteArmor(armor: Armors): Promise<void>
}

export type { SurviAPIArmorsModel }
