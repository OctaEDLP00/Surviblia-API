import type { SurviAPIWithoutCategoryModel } from '@/models/SurviAPIWithoutCategoryModel.d'
import type { Request, Response } from 'express'
import type { ISurviAPIWithoutCategoryController } from './SurviAPIWithoutCategoryController.d'

class SurviAPIWithoutCategoryController
  implements ISurviAPIWithoutCategoryController
{
  surviWithoutCategoryModel: SurviAPIWithoutCategoryModel

  constructor({
    surviWithoutCategoryModel,
  }: {
    surviWithoutCategoryModel: SurviAPIWithoutCategoryModel
  }) {
    this.surviWithoutCategoryModel = surviWithoutCategoryModel
  }

  getWithoutCategory = async (_req: Request, res: Response): Promise<void> => {
    const withoutCategory =
      await this.surviWithoutCategoryModel.getWithoutCategory()
    if (!withoutCategory) res.status(404).json({ error_message: '' })
    res.json(withoutCategory)
  }

  getWithoutCategoryFrom = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    const { item } = req.params
    const withoutCategoryFrom =
      await this.surviWithoutCategoryModel.getWithoutCategoryFrom({ item })
    if (withoutCategoryFrom) {
      res.status(404).json({ error_message: '' })
    }
    res.json(withoutCategoryFrom)
  }

  createWithoutCategory = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    console.log({ req, res })
    throw new Error('Method not implemented.')
  }

  updateWithoutCategory = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    console.log({ req, res })
    throw new Error('Method not implemented.')
  }

  deleteWithoutCategory = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    console.log({ req, res })
    throw new Error('Method not implemented.')
  }
}

export { SurviAPIWithoutCategoryController }
export default SurviAPIWithoutCategoryController
