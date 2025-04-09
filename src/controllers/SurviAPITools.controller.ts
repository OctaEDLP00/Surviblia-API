import type { SurviAPIToolsModel } from '@/models/SurviAPIToolsModel.d'
import type { Request, Response } from 'express'
import type { ISurviAPIToolsController } from './SurviAPIToolsController.d'
import {
  validatePartialToolSchema,
  validateToolSchema
} from '@/schemas-zod/SurviAPIToolsSchema.ts'

class SurviAPIToolsController implements ISurviAPIToolsController {
  surviToolsModel: SurviAPIToolsModel

  constructor({ surviToolsModel }: { surviToolsModel: SurviAPIToolsModel }) {
    this.surviToolsModel = surviToolsModel
  }

  getTools = async (_req: Request, res: Response): Promise<void> => {
    const tools = await this.surviToolsModel.getTools()
    if (!tools) res.status(404).json({ error_message: 'Tool not found' })
    res.json(tools)
  }

  getToolMaterial = async (req: Request, res: Response): Promise<void> => {
    const { tool, material } = req.params as { tool: string; material?: string }
    const toolMaterial = await this.surviToolsModel.getToolMaterial({
      tool,
      material,
    })
    if (!toolMaterial)
      res.status(404).json({ error_message: 'Tool material not found' })
    res.json(toolMaterial)
  }

  createTool = async (req: Request, res: Response): Promise<void> => {
    const { data, success, error } = validateToolsSchema(req.body)

    if (!success) {
      const { errors } = error
      res.json({ error_message: errors }).status(400)
    }

    await this.surviToolsModel.createTool(JSON.parse(data as string))

    res.json({ message: 'Data has been created', data }).status(201)
  }

  updateTool = async (req: Request, res: Response): Promise<void> => {
    const { data, error, success } = validatePartialToolsSchema(req.body)

    if (!success) {
      const { errors } = error
      res.json({ error_message: errors }).status(400)
    }

    await this.surviToolsModel.updateTool(JSON.parse(data as string))

    res.json({ message: 'Data has been updated', data })
  }

  deleteTool = async (req: Request, res: Response): Promise<void> => {
    const { name_tool } = req.params

    const data = await this.surviToolsModel.deleteTool(name_tool)

    if (result === false) {
      res.status(404).json({ error_message: 'Tool not found' })
    }

    res.json({ message: 'Data has been deleted', data }) */
  }
}

export { SurviAPIToolsController }
export default SurviAPIToolsController
