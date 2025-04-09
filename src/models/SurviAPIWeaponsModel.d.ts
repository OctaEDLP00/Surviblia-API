import type { Weapons } from '@/types/SurviAPIWeapons.d.ts'
import type { Props } from '@/types/main'

interface SurviAPIWeaponsModel {
  /** @static @async */
  getWeapons(): Promise<Weapons>
  /** @static @async */
  getWeaponMaterial({
    weapon,
    material,
  }: { weapon: string; material?: string }): Promise<Array<Props> | undefined>
  /** @static @async */
  createWeapon(weapon: Weapons): Promise<void>
  /** @static @async */
  updateWeapon(weapon: Weapons): Promise<void>
  /** @static @async */
  deleteWeapon(weapon: Weapons): Promise<void>
}

export type { SurviAPIWeaponsModel }
