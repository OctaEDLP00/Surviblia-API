import type { SurviAPIItemsModel } from '@/models/SurviAPIItemsModel.d'
import type { Request, Response } from 'express'
import type { ISurviAPIItemsController } from './SurviAPIItemsController.d.ts'

class SurviAPIItemsController implements ISurviAPIItemsController {
  surviItemsModel: SurviAPIItemsModel

  constructor({ surviItemsModel }: { surviItemsModel: SurviAPIItemsModel }) {
    this.surviItemsModel = surviItemsModel
  }

  getItems = async (_req: Request, res: Response): Promise<void> => {
    const items = await this.surviItemsModel.getItems()
    if (!items) res.status(404).json({ error_message: 'Items notfound' })
    res.json(items)
  }

  getItem = async (req: Request, res: Response): Promise<void> => {
    const { item } = req.params
    const surviItem = await this.surviItemsModel.getItem({ item })
    if (!surviItem) {
      res.status(404).json({ error_message: '' })
    }
    res.json(surviItem)
  }

  createItem = async (req: Request, res: Response) => {}

  updateItem = async (req: Request, res: Response) => {}

  deleteItem = async (req: Request, res: Response) => {}
}

export { SurviAPIItemsController }
export default SurviAPIItemsController
