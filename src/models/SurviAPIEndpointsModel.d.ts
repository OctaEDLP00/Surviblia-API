import type { Endpoints } from '@/types/SurviAPIEndpoints.d.ts'

interface SurviAPIEndpointsModel {
  /** @static @async */
  getEndpoints(): Promise<Endpoints>
}

export type { SurviAPIEndpointsModel }
