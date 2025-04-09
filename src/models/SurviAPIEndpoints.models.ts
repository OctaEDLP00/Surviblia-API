import type { Endpoints } from '@/types/SurviAPIEndpoints.d'
import { readFile } from '@/utils/readFile'

const SEndpoints: Endpoints = readFile('src/data/SurviAPIEndpoints.json')

class SurviAPIEndpointsModel {
  static async getEndpoints(): Promise<Endpoints> {
    return SEndpoints
  }
}

export { SurviAPIEndpointsModel }
export default SurviAPIEndpointsModel
