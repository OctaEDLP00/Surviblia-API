import type { ISurviAPISchemaController } from '@/controllers/SurviAPISchemaController.d'
import type { SurviAPISchemaModel } from '@/models/SurviAPISchemaModel.d'
import type { KeySchemas } from '@/types/main.d'
import type { Request, Response } from 'express'

class SurviAPISchemaController implements ISurviAPISchemaController {
  surviSchemaModel: SurviAPISchemaModel

  constructor({
    surviSchemaModel,
  }: {
    surviSchemaModel: SurviAPISchemaModel
  }) {
    this.surviSchemaModel = surviSchemaModel
  }

  getSchemas = async (_req: Request, res: Response): Promise<void> => {
    const surviSchemas = await this.surviSchemaModel.getSchemas()
    if (!surviSchemas) {
      res.status(404).json({ error_message: 'Schemas no encontradas' })
    }
    res.json(surviSchemas)
  }

  getSchema = async (req: Request, res: Response): Promise<void> => {
    const { schema } = req.params as { schema: KeySchemas }
    const surviSchema = await this.surviSchemaModel.getSchema({
      nameSchema: schema,
    })
    if (!surviSchema) {
      res
        .status(404)
        .json({ error_message: 'Schema especificada no encontrada' })
    }
    res.json(surviSchema)
  }
}

export { SurviAPISchemaController }
export default SurviAPISchemaController
