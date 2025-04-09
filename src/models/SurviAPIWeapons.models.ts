import type { Weapons } from '@/types/SurviAPIWeapons.d.ts'
import type { Props } from '@/types/main'
import { readFile } from '@/utils/readFile.ts'
import { sanitize } from '@/utils/sanitize'
import { readFile as rFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'

const SAPIWeapons: Weapons = readFile('../data/SurviAPIWeapons.json')

class SurviAPIWeaponsModel {
  static async getWeapons(): Promise<Weapons> {
    return SAPIWeapons
  }

  static async getWeaponMaterial({
    weapon,
    material,
  }: {
    weapon: string
    material: string
  }): Promise<Array<Props> | undefined> {
    const { bow, fishing_rod, sword } = SAPIWeapons
    const weaponArray = (
      { bow, fishing_rod, sword } as {
        [key: string]: Array<Props>
      }
    )[weapon]
    const weaponMaterial = weaponArray.filter((w) => {
      const [materialType, toolType] = sanitize(w.material)
      return weapon === toolType || material === materialType
    })
    return weaponMaterial
  }

  static async createWeapon(weapons: Weapons): Promise<void> {
    try {
      const filePath = join(__dirname, '../data/SurviAPIWeapons.json')
      await writeFile(filePath, JSON.stringify(weapons, null, 2))
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Failed to create weapons: ${error.message}`)
      }
    }
  }

  static async updateWeapon(weapons: Weapons): Promise<void> {
    try {
      const filePath = join(__dirname, '../data/SurviAPIWeapons.json')
      await writeFile(filePath, JSON.stringify(weapons, null, 2))
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Failed to update weapons: ${error.message}`)
      }
    }
  }

  static async deleteWeapon(weapons: Weapons): Promise<void> {
    try {
      const filePath = join(__dirname, '../data/SurviAPIWeapons.json')
      const existingWeapons = await rFile(filePath, 'utf8')
      const parsedWeapons = JSON.parse(existingWeapons)

      // Remove specified weapons
      Object.keys(weapons).map((key) => {
        if (key in parsedWeapons) {
          delete parsedWeapons[key]
        }
      })

      await writeFile(filePath, JSON.stringify(parsedWeapons, null, 2))
    } catch (error) {
      if (error instanceof Error) {
        const { message, name, cause, stack } = error
        console.log({ message, name, cause, stack })
        if (error.stack === 'ENOENT') {
          throw new Error('Weapons data file not found')
        }
        throw new Error(`Failed to delete weapons: ${error.message}`)
      }
    }
  }
}

export { SurviAPIWeaponsModel }
export default SurviAPIWeaponsModel
