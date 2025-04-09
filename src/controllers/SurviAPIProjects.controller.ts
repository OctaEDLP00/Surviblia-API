import type { ISurviAPIProjectsController } from '@/controllers/SurviAPIProjectsController.d'
import type { SurviAPIProjectsModel } from '@/models/SurviAPIProjectsModel.d'
import type { SurviAPIProjects } from '@/types/SurviAPIProjects'
import type { Request, Response } from 'express'

class SurviAPIProjectsController implements ISurviAPIProjectsController {
  surviProjectModel: SurviAPIProjectsModel

  constructor({
    surviProjectModel,
  }: { surviProjectModel: SurviAPIProjectsModel }) {
    this.surviProjectModel = surviProjectModel
  }

  getAllTiers = async (_req: Request, res: Response): Promise<void> => {
    const surviTiers = await this.surviProjectModel.getAllTiers()
    if (!surviTiers) res.status(404).json({ error_message: '' })
    res.json(surviTiers)
  }

  getTier = async (req: Request, res: Response): Promise<void> => {
    const { tier_name } = req.params as { tier_name: keyof SurviAPIProjects }
    const surviTier = await this.surviProjectModel.getTier({ tier_name })
    if (!surviTier) res.status(404).json({ error_message: '' })
    res.json(surviTier)
  }

  getProjectByTier = async (req: Request, res: Response): Promise<void> => {
    const { tier_name, project_name } = req.params as {
      tier_name: keyof SurviAPIProjects
      project_name: string
    }
    const surviProjectByTier = await this.surviProjectModel.getProjectByTier({
      tier_name,
      project_name,
    })
    if (!surviProjectByTier) res.status(404).json({ error_message: '' })
    res.json(surviProjectByTier)
  }

  createProject = async (req: Request, res: Response): Promise<void> => {}

  updateProject = async (req: Request, res: Response): Promise<void> => {}

  deleteProject = async (req: Request, res: Response): Promise<void> => {}
}

export { SurviAPIProjectsController }
export default SurviAPIProjectsController
