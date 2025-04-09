import type { SurviAPIPetsModel } from '@/models/SurviAPIPetsModel.d'
import type { Request, Response } from 'express'
import type { ISurviAPIPetsController } from './SurviAPIPetsController.d.ts'

class SurviAPIPetsController implements ISurviAPIPetsController {
  surviPetsModel: SurviAPIPetsModel

  constructor({
    surviPetsModel,
  }: {
    surviPetsModel: SurviAPIPetsModel
  }) {
    this.surviPetsModel = surviPetsModel
  }

  getAllPets = async (_req: Request, res: Response): Promise<void> => {
    const surviAPIPets = await this.surviPetsModel.getAllPets()
    if (!surviAPIPets) {
      res.status(404).json({
        error_message: 'SurviAPIPets not found or not exist',
      })
    }
    res.json(surviAPIPets)
  }

  getOfficialPets = async (_req: Request, res: Response): Promise<void> => {
    const officialPets = await this.surviPetsModel.getAllOfficialPets()
    if (!officialPets) {
      res.status(404).json({ error_message: '' })
    }
    res.json(officialPets)
  }

  getOfficialPet = async (req: Request, res: Response): Promise<void> => {
    const { name } = req.params as { name: string }
    const officialPet = await this.surviPetsModel.getOfficialPet({ name })
    if (!officialPet) {
      res.status(404).json({ error_message: '' })
    }
    res.json(officialPet)
  }

  getUnofficialPets = async (_req: Request, res: Response): Promise<void> => {
    const unofficialPets = await this.surviPetsModel.getAllUnofficialPets()
    if (!unofficialPets) {
      res.status(404).json({ error_message: '' })
    }
    res.json(unofficialPets)
  }

  getUnofficialPet = async (req: Request, res: Response): Promise<void> => {
    const { name } = req.params as { name: string }
    const unofficialPet = await this.surviPetsModel.getUnofficialPet({ name })
    if (!unofficialPet) {
      res.status(404).json({ error_message: '' })
    }
    res.json(unofficialPet)
  }

  createPet = async (req: Request, res: Response) => {}

  updatePet = async (req: Request, res: Response) => {}

  deletePet = async (req: Request, res: Response) => {}
}

export { SurviAPIPetsController }
export default SurviAPIPetsController
