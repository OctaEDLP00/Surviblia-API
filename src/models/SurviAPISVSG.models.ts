import type { Solutions, SurviAPISVSG } from '@/types/SurviAPISVSG.d'
import { readFile } from '@/utils/readFile'

const SVSG: SurviAPISVSG = readFile('../data/SurviAPISVSG.json')

class SurviAPISVSGModel {
  static async getAllInfoSVSG(): Promise<SurviAPISVSG> {
    return SVSG
  }

  static async getAllSolutions(): Promise<Array<Solutions>> {
    return SVSG.solutions
  }

  static async getSolution({
    episode_number,
  }: { episode_number: string }): Promise<Solutions | undefined> {
    return SVSG.solutions.find((svsg) => svsg.episode_number === episode_number)
  }

  static async createSVSG(svsg: Solutions): Promise<void> {}

  static async updateSVSG(svsg: Solutions): Promise<void> {}

  static async deleteSVSG(svsg: Solutions): Promise<void> {}
}

export { SurviAPISVSGModel }
export default SurviAPISVSGModel
