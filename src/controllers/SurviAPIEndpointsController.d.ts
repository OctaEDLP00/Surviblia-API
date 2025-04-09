import type { SurviAPIEndpointsModel } from '@/models/SurviAPIEndpointsModel'
import type { Request, Response } from 'express'

interface ISurviAPIEndpointsController {
  surviEndpointModel: SurviAPIEndpointsModel
  /** @async */
  getEndpoints: (req: Request, res: Response) => Promise<void>
}

export type { ISurviAPIEndpointsController }
