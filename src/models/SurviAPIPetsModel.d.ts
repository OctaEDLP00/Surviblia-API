import type { Official, SurviAPIPets, Unofficial } from '@/types/SurviAPIPets.d'

interface SurviAPIPetsModel {
  /** @static @async */
  getAllPets(): Promise<SurviAPIPets>
  /** @static @async */
  getAllOfficialPets(): Promise<Array<Official>>
  /** @static @async */
  getOfficialPet({ name }: { name: string }): Promise<Official | undefined>
  /** @static @async */
  getAllUnofficialPets(): Promise<Array<Unofficial>>
  /** @static @async */
  getUnofficialPet({ name }: { name: string }): Promise<Unofficial | undefined>
  createPet(pet: Unofficial | Official): Promise<void>
  updatePet(pet: Unofficial | Official): Promise<void>
  deletePet(pet: Unofficial | Official): Promise<void>
}

export type { SurviAPIPetsModel }
