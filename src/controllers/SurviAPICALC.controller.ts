import type { SurviAPICALCModel } from '@/models/SurviAPICALCModel.d'
import type { Request, Response } from 'express'
import type { ISurviAPICALCController } from './SurviAPICALCController.d'

class SurviAPICALCController implements ISurviAPICALCController {
  surviCALCModel: SurviAPICALCModel

  constructor({
    surviCALCModel,
  }: {
    surviCALCModel: SurviAPICALCModel
  }) {
    this.surviCALCModel = surviCALCModel
  }

  getAllCALC = async (_req: Request, res: Response): Promise<void> => {
    const surviAPICALC = await this.surviCALCModel.getAllCALC()
    if (!surviAPICALC) res.status(404).json({ error_message: '' })
    res.json(surviAPICALC)
  }

  getAllLore = async (_req: Request, res: Response): Promise<void> => {
    const surviAPILore = this.surviCALCModel.getAllLore()
    if (!surviAPILore) res.status(404).json({ error_message: '' })
    res.json(surviAPILore)
  }

  getAllAnimations = async (_req: Request, res: Response): Promise<void> => {
    const surviAPIAnimations = this.surviCALCModel.getAllAnimations()
    if (!surviAPIAnimations) res.status(404).json({ error_message: '' })
    res.json(surviAPIAnimations)
  }

  getAllCinematics = async (_req: Request, res: Response): Promise<void> => {
    const surviAPICinematics = this.surviCALCModel.getAllCinematics()
    if (!surviAPICinematics) res.status(404).json({ error_message: '' })
    res.json(surviAPICinematics)
  }

  getAllClips = async (_req: Request, res: Response): Promise<void> => {
    const surviAPIClips = this.surviCALCModel.getAllClips()
    if (!surviAPIClips) res.status(404).json({ error_message: '' })
    res.json(surviAPIClips)
  }

  createCALC = async (req: Request, res: Response): Promise<void> => {}
  updateCALC = async (req: Request, res: Response): Promise<void> => {}
  deleteCALC = async (req: Request, res: Response): Promise<void> => {}
}

export { SurviAPICALCController }
export default SurviAPICALCController
