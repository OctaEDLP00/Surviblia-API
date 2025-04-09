import type { SurviAPIEndpointsModel } from '@/models/SurviAPIEndpointsModel.d'
import type { Request, Response } from 'express'
import type { ISurviAPIEndpointsController } from './SurviAPIEndpointsController.d'

class SurviAPIEndpointController implements ISurviAPIEndpointsController {
  surviEndpointModel: SurviAPIEndpointsModel

  constructor({
    surviEndpointModel,
  }: {
    surviEndpointModel: SurviAPIEndpointsModel
  }) {
    this.surviEndpointModel = surviEndpointModel
  }

  getEndpoints = async (_req: Request, res: Response): Promise<void> => {
    const surviEndpoints = await this.surviEndpointModel.getEndpoints()
    if (!surviEndpoints) {
      res.status(404).json({ error_message: '' })
    }
    res.json(surviEndpoints)
  }
}

export { SurviAPIEndpointController }
export default SurviAPIEndpointController
