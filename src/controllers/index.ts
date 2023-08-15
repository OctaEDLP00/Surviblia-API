import { join } from 'node:path'
import { Request, Response } from 'express'
import { publicPath } from '@setup/expressMain'
import { html as indexHTML } from '@views/html'
import { html as indexHTMLADD } from '@views/htmlAdd'
import {
  getAllData,
  getArmors,
  getTools,
  getWeapons,
  getItems,
  getMobs
} from '@models/toolsAndArmorsModels'
import ToolsAndArmors from '@models/tools_and_armors.json'

// ROUTER GET
export const apiFontController = (_req: Request, res: Response) => {
  res.sendFile(join(publicPath, 'fonts/Minecraft-Regular.woff2'))
  res.sendFile(join(publicPath, 'fonts/SgaSmoothRegular.woff2'))
}
export const indexController = (_req: Request, res: Response) => res.send(indexHTML)
export const apiController = (_req: Request, res: Response) => res.send(getAllData)
export const apiArmorscontroller = (_req: Request, res: Response) => res.send(getArmors)
export const apiArmorMaterial = (req: Request, res: Response) => {
  const { material } = req.params
  const item = ToolsAndArmors.armors.find(a => a.material.toLowerCase() === material.toLowerCase())
  console.log(item, material)
  if (item) res.json(item)
  res.status(404).send({ message: 'Item not found' })
}
export const apiToolsController = (_req: Request, res: Response) => res.send(getTools)
export const apiToolsMaterialController = (_req: Request, _res: Response) => {
  // const { material, tool } = req.params

  console.log(Object.keys(ToolsAndArmors.tools))

  // const getKeys = (tool: any) => Object.keys(ToolsAndArmors.tools).find(t => t.match(tool))

  /*
  if (tool) {
    const {shears, } = getKeys(tool) // --> 'shears', 'pickaxe', 'axe', ...
  } else {
    res.status(404).json({ message: 'Can not find tool' })
  }
  */
}
export const apiWeaponController = (_req: Request, res: Response) => res.send(getWeapons)
export const apiItemsControllers = (_req: Request, res: Response) => res.send(getItems)
export const apiMobsController = (_req: Request, res: Response) => res.send(getMobs)
export const apiAddController = (_req: Request, res: Response) => res.send(indexHTMLADD)

// ROUTER POST

export const api = () => { }
