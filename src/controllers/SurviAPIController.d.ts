/* eslint-disable @typescript-eslint/no-misused-new */
import type { Request, Response } from 'express'
import type { ISurviAPIModel } from '../types/SurviAPIModel'

export interface ISurviController {
  surviModel: ISurviAPIModel
  /** @async */
  getSurviAPI: (req: Request, res: Response) => Promise<void>
  /** @async */
  getArmors: (req: Request, res: Response) => Promise<void>
  /** @async */
  getArmorMaterial: (req: Request, res: Response) => Promise<void>
  /** @async */
  getArmorFromArmorMaterial: (req: Request, res: Response) => Promise<void>
  /** @async */
  getTools: (req: Request, res: Response) => Promise<void>
  /** @async */
  getToolMaterial: (req: Request, res: Response) => Promise<void>
  /** @async */
  getWeapons: (req: Request, res: Response) => Promise<void>
  /** @async */
  getWeaponMaterial: (req: Request, res: Response) => Promise<void>
  /** @async */
  getItems: (req: Request, res: Response) => Promise<void>
  /** @async */
  getItem: (req: Request, res: Response) => Promise<void>
  /** @async */
  getMobs: (req: Request, res: Response) => Promise<void>
  /** @async */
  create: (req: Request, res: Response) => Promise<void>
  /** @async */
  update: (req: Request, res: Response) => Promise<void>
  /** @async */
  delete: (req: Request, res: Response) => Promise<void>
}
