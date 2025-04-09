import type { SurviAPIEntitiesModel } from '@/models/SurviAPIEntitiesModel.d'
import type { Request, Response } from 'express'
import type { ISurviAPIEntitiesController } from './SurviAPIEntitiesController.d'

class SurviAPIEntitiesController implements ISurviAPIEntitiesController {
  surviEntitiesModel: SurviAPIEntitiesModel

  constructor({
    surviEntitiesModel,
  }: { surviEntitiesModel: SurviAPIEntitiesModel }) {
    this.surviEntitiesModel = surviEntitiesModel
  }

  getEntities = async (_req: Request, res: Response): Promise<void> => {
    const entities = await this.surviEntitiesModel.getEntities()
    if (!entities) {
      res
        .status(404)
        .json({ error_massage: 'SurviAPIEntities not found or not exist' })
    }
    res.json(entities)
  }

  getEntity = async (req: Request, res: Response): Promise<void> => {
    const { entity } = req.params
    const entities = await this.surviEntitiesModel.getEntity({ entity })
    if (!entities) {
      res.status(404).json({ error_message: 'Entity not exist or not found' })
    }
    res.json(entities)
  }

  createEntity = async (req: Request, res: Response): Promise<void> => {}

  updateEntity = async (req: Request, res: Response): Promise<void> => {}

  deleteEntity = async (req: Request, res: Response): Promise<void> => {}
}

export { SurviAPIEntitiesController }
export default SurviAPIEntitiesController
