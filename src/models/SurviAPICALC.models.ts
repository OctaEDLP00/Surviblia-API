import type {
  Animations,
  Cinematics,
  Clips,
  Lore,
  SurviAPICALC,
} from '@/types/SurviAPICALC.d'
import { readFile } from '@/utils/readFile.ts'

const SCALC: SurviAPICALC = readFile('../data/SurviAPICALC.json')

class SurviAPICALCModel {
  static async getAllCALC(): Promise<SurviAPICALC> {
    return SCALC
  }

  static async getAllLore(): Promise<Lore> {
    return SCALC.lore
  }

  static async getAllAnimations(): Promise<Animations> {
    return SCALC.animations
  }

  static async getAllCinematics(): Promise<Cinematics> {
    return SCALC.cinematics
  }

  static async getAllClips(): Promise<Clips> {
    return SCALC.clips
  }

  static async createCALC(calc: SurviAPICALC): Promise<void> {}

  static async updateCALC(calc: SurviAPICALC): Promise<void> {}

  static async deleteCALC(calc: SurviAPICALC): Promise<void> {}
}

export { SurviAPICALCModel }
export default SurviAPICALCModel
