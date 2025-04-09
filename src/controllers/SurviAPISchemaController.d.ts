import type { ISurviAPISchemaModel } from '@/models/SurviAPISchemaModel.d.ts'
import type { Request, Response } from 'express'

interface ISurviAPISchemaController {
  surviSchemaModel: ISurviAPISchemaModel
  /** @async */
  getSchemas: (req: Request, res: Response) => Promise<void>
  /** @async */
  getSchema: (req: Request, res: Response) => Promise<void>
}

export type { ISurviAPISchemaController }
