import type { ISurviArmorsController } from '@/controllers/SurviAPIArmorsController.d'
import type { SurviAPIArmorsModel } from '@/models/SurviAPIArmorsModel.d'
import type { Request, Response } from 'express'

class SurviAPIArmorsController implements ISurviArmorsController {
  surviArmorsModel: SurviAPIArmorsModel

  constructor({
    surviArmorsModel,
  }: {
    surviArmorsModel: SurviAPIArmorsModel
  }) {
    this.surviArmorsModel = surviArmorsModel
  }

  getArmors = async (_req: Request, res: Response): Promise<void> => {
    const armors = await this.surviArmorsModel.getArmors()
    if (!armors) res.status(404).json({ error_message: 'Armor not found' })
    res.json(armors)
  }

  getArmorFromArmorMaterial = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    const { material, armor } = req.params as {
      material?: string
      armor: string
    }
    const armorMaterial = await this.surviArmorsModel.getArmorFromArmorMaterial(
      {
        material,
        armor,
      }
    )
    if (!armorMaterial)
      res.status(404).send({ error_message: 'Item not found' })
    res.json(armorMaterial)
  }

  createArmor = async (req: Request, res: Response): Promise<void> => {
    /*const { data, success, error } = safeParseSurviAPISchema(req.body)

    if (!success) {
      const { errors } = error
      res.json({ error_message: errors }).status(400)
    }

    await this.surviArmorsModel.createArmor(JSON.parse(data as string))
    res.json({ message: 'Data has been created', data }).status(201)
    */
  }

  updateArmor = async (req: Request, res: Response): Promise<void> => {
    /*const { data, error, success } = safeParseSurviAPISchema(req.body)

    if (!success) {
      const { errors } = error
      res.json({ error_message: errors }).status(400)
    }

    await this.surviArmorsModel.updateArmor(JSON.parse(data as string))
    res.json({ message: 'Data has been updated', data })
    */
  }

  deleteArmor = async (req: Request, res: Response): Promise<void> => {
    /*const { success, error, data } = safeParseSurviAPISchema(req.body)

    if (!success) {
      const { errors } = error
      res.json({ error_message: errors }).status(404)
    }

    await this.surviArmorsModel.deleteArmor(JSON.parse(data as string))
    res.json({ message: 'Data has been deleted', data })
    */
  }
}

export { SurviAPIArmorsController }
export default SurviAPIArmorsController
