import type { SurviAPIPetsModel } from '@/models/SurviAPIPetsModel.d'
import type { Request, Response } from 'express'

interface ISurviAPIPetsController {
  surviPetsModel: SurviAPIPetsModel
  /** @async */
  getAllPets: (req: Request, res: Response) => Promise<void>
  /** @async */
  getOfficialPets: (req: Request, res: Response) => Promise<void>
  /** @async */
  getOfficialPet: (req: Request, res: Response) => Promise<void>
  /** @async */
  getUnofficialPets: (req: Request, res: Response) => Promise<void>
  /** @async */
  getUnofficialPet: (req: Request, res: Response) => Promise<void>
  /** @async */
  createPet: (req: Request, res: Response) => Pormise<void>
  /** @async */
  updatePet: (req: Request, res: Response) => Pormise<void>
  /** @async */
  deletePet: (req: Request, res: Response) => Pormise<void>
}

export type { ISurviAPIPetsController }
