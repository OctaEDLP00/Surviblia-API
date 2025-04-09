import type { Official, SurviAPIPets, Unofficial } from '@/types/SurviAPIPets.d'
import { readFile } from '@/utils/readFile.ts'

const SAPIP: SurviAPIPets = readFile('../data/SurviAPIPets.json')

class SurviAPIPetsModel {
  static async getAllPets(): Promise<SurviAPIPets> {
    return SAPIP
  }

  static async getAllOfficialPets(): Promise<Array<Official>> {
    return SAPIP.officials
  }

  static async getOfficialPet({
    name,
  }: { name: string }): Promise<Official | undefined> {
    return SAPIP.officials.find(
      (p) =>
        p.alias?.replaceAll(' ', '_').toLowerCase() === name.toLowerCase() ||
        p.name_pet.toLowerCase() === name.toLowerCase()
    )
  }

  static async getAllUnofficialPets(): Promise<Array<Unofficial>> {
    return SAPIP.unofficials
  }

  static async getUnofficialPet({
    name,
  }: { name: string }): Promise<Unofficial | undefined> {
    return SAPIP.unofficials.find(
      (p) =>
        p.alias?.replaceAll(' ', '_').toLowerCase() === name.toLowerCase() ||
        p.name_pet.toLowerCase() === name.toLowerCase()
    )
  }

  static async createPet(pet: Unofficial | Official): Promise<void> {}

  static async updatePet(pet: Unofficial | Official): Promise<void> {}

  static async deletePet(pet: Unofficial | Official): Promise<void> {}
}

export { SurviAPIPetsModel }
export default SurviAPIPetsModel
