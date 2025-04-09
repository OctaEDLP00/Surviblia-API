import type { Solutions, SurviAPISVSG } from '@/types/SurviAPISVSG.d.ts'

interface SurviAPISVSGModel {
  /**
   * @static
   * @async
   */
  getAllInfoSVSG(): Promise<SurviAPISVSG>
  /**
   * @static
   * @async
   */
  getAllSolutions(): Promise<Array<Solutions>>
  /**
   * @static
   * @async
   */
  getSolution({
    episode_number,
  }: { episode_number: string }): Promise<Solutions | undefined>
  /**
   * @static
   * @async
   */
  createSVSG(svsg: Solutions): Promise<void>
  /**
   * @static
   * @async
   */
  updateSVSG(svsg: Solutions): Promise<void>
  /**
   * @static
   * @async
   */
  deleteSVSG(svsg: Solutions): Promise<void>
}

export type { SurviAPISVSGModel }
