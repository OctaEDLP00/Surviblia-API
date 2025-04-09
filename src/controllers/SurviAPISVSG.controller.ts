import type { ISurviAPISVSGController } from '@/controllers/SurviAPISVSGController.d'
import type { SurviAPISVSGModel } from '@/models/SurviAPISVSGModel.d'
import type { Request, Response } from 'express'

class SurviAPISVSGController implements ISurviAPISVSGController {
  surviSVSGModel: SurviAPISVSGModel

  constructor({
    surviSVSGModel,
  }: {
    surviSVSGModel: SurviAPISVSGModel
  }) {
    this.surviSVSGModel = surviSVSGModel
  }

  getAllInfoSVSG = async (_req: Request, res: Response): Promise<void> => {
    const surviAllInfoSVSG = await this.surviSVSGModel.getAllInfoSVSG()
    res.json(surviAllInfoSVSG)
  }

  getAllSolutions = async (_req: Request, res: Response): Promise<void> => {
    const surviAllSolutions = await this.surviSVSGModel.getAllSolutions()
    res.json(surviAllSolutions)
  }

  getSolution = async (req: Request, res: Response): Promise<void> => {
    const { episode_number } = req.params as {
      episode_number: string
    }
    const surviSolution = await this.surviSVSGModel.getSolution({
      episode_number,
    })
    if (!surviSolution) {
      res.status(404).json({ error_massage: '' })
    }
    res.json(surviSolution)
  }

  createSVSG = async (req: Request, res: Response): Promise<void> => {}
  updateSVSG = async (req: Request, res: Response): Promise<void> => {}
  deleteSVSG = async (req: Request, res: Response): Promise<void> => {}
}

export { SurviAPISVSGController }
export default SurviAPISVSGController
