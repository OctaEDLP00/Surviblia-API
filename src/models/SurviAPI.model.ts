import { readFile } from '@utils/readFile.ts'
import { sanitize, sanitizeMinecraft } from '@utils/sanitize.ts'
// import { readFileSync, writeFileSync } from 'node:fs'
// import { resolve } from 'node:path'
import type { Armors, Items, Mobs, SurviAPI, Tools, Weapons } from '../types/SurviAPI'
const API: SurviAPI = readFile('@data/SurviAPI.json')

interface Props {
  armors?: Armors
  items?: Items
  mobs?: Mobs
  tools?: Tools
  weapons?: Weapons
}
/*
interface ISurviAPIModel {
  getSurviAPI(): Promise<SurviAPI>
  getArmors(): Promise<Array<Armors>>
  getTools(): Promise<Tools>
  getWeapons(): Promise<Weapons>
  getItems(): Promise<Items>
  getMobs(): Promise<Mobs>
  getArmorMaterial({ material }: { material: string }): Promise<Array<Armors> | void>
  getArmorFromArmorMaterial(
    { material, armor }: { material: string, armor: string }
  ): Promise<Array<Armors> | void>
  getToolMaterial(
    { tool, material }: { tool: string, material: string }
  ): Promise<Array<Armors> | void>
  getWeaponMaterial(
    { weapon, material }: { weapon: string, material: string }
  ): Promise<Array<Armors> | void>
  getItem({ item }: { item: string }): Promise<Array<Armors> | void>
  create({ armors, items, mobs, tools, weapons }: Props): Promise<void>
  update({ armors, items, mobs, tools, weapons }: Props): Promise<void>
  delete({ armors, items, mobs, tools, weapons }: Props): Promise<void>
}
*/
export class SurviAPIModel {
  // private static filePath = resolve(import.meta.url, 'surviData.json')

  /*
  private static readFile = (): SurviAPI => {
    const rawData = readFileSync(this.filePath, 'utf-8')
    return JSON.parse(rawData)
  }
  */

  /* private static writeFile = (data: SurviAPI) => writeFileSync(this.filePath, JSON.stringify(data, null, 2), 'utf-8')  */

  static getSurviAPI = async (): Promise<SurviAPI> => API
  static getArmors = async (): Promise<Array<Armors>> => API.armors
  static getTools = async (): Promise<Tools> => API.tools
  static getWeapons = async (): Promise<Weapons> => API.weapons
  static getItems = async (): Promise<Items> => API.items
  static getMobs = async (): Promise<Mobs> => API.mobs

  static async getArmorMaterial({ material }: { material: string }): Promise<Array<Armors> | void> {
    const { armors } = API
    const armorMaterial = armors.filter((a) => {
      const [materialType, _itemType] = sanitize(a.material)
      return material === materialType
    })
    return armorMaterial
  }

  static async getArmorFromArmorMaterial(
    { material, armor }: { material: string, armor: string }
  ): Promise<Array<Armors> | void> {
    const { armors } = API
    const armorMaterial = armors.filter((a) => {
      const [materialType, armorType] = sanitize(a.material)
      return material === materialType && armor === armorType
    })
    return armorMaterial
    // return weaponArray.filter((a) => sanitizeMaterial(a.material) === material)
  }

  static async getToolMaterial(
    { tool, material }: { tool: string, material: string }
  ): Promise<Array<Armors> | void> {
    const { axe, hoes, pickaxe, shears, shield, shovel } = API.tools
    const toolArray = ({ axe, hoes, pickaxe, shears, shield, shovel } as { [key: string]: Array<Armors> })[tool]
    if (!toolArray) return
    const toolMaterial = toolArray.filter((a) => {
      if (a.material === 'minecraft:shears' || a.material === 'minecraft:shield') {
        const [toolType] = sanitize(a.material)
        return tool === toolType
      }
      const [materialType, toolType] = sanitize(a.material)
      return tool === toolType && material === materialType
    })
    return toolMaterial
  }

  static async getWeaponMaterial(
    { weapon, material }: { weapon: string, material: string }
  ): Promise<Array<Armors> | void> {
    const { bow, sword } = API.weapons
    const weaponArray = ({ sword, bow } as { [key: string]: Array<Armors> })[weapon]
    if (!weaponArray) return
    return weaponArray.filter((a) => {
      if (a.material !== 'minecraft:bow') { // es una sword
        const [materialType, weaponType] = sanitize(a.material)
        return weaponType === weapon && materialType === material
      }
      const [weaponType] = sanitize(a.material)
      return weaponType === weapon
    })
  }

  static async getItem({ item }: { item: string }): Promise<Array<Armors> | void> {
    const { books, elytras, maps, shulkers } = API.items
    const itemArray = ({ books, elytras, maps, shulkers } as { [key: string]: Array<Armors> })[item]
    if (!itemArray) return
    const itemItem = itemArray.filter((a) => sanitizeMinecraft(a.material))
    return itemItem
  }

  private static async createArmors(armor: Armors) {
    console.log('createArmors', { armor })
  }

  private static async updateArmors(armor: Armors) {
    console.log('updateArmors', { armor })
  }

  private static async deleteArmors(armor: Armors) {
    console.log('deleteArmors', { armor })
  }

  private static async createItems(item: Items) {
    console.log('createItems', { item })
  }

  private static async updateItems(item: Items) {
    console.log('updateItems', { item })
  }

  private static async deleteItems(item: Items) {
    console.log('deleteItems', { item })
  }

  private static async createWeapons(weapon: Weapons) {
    console.log('createWeapons', { weapon })
  }

  private static async updateWeapons(weapon: Weapons) {
    console.log('updateWeapons', { weapon })
  }

  private static async deleteWeapons(weapon: Weapons) {
    console.log('deleteWeapons', { weapon })
  }

  private static async createTools(tool: Tools) {
    console.log('createTools', { tool })
  }

  private static async updateTools(tool: Tools) {
    console.log('updateTools', { tool })
  }

  private static async deleteTools(tool: Tools) {
    console.log('deleteTools', { tool })
  }

  private static async createMobs(mob: Mobs) {
    console.log('createMobs', { mob })
  }

  private static async updateMobs(mob: Mobs) {
    console.log('updateMobs', { mob })
  }

  private static async deleteMobs(mob: Mobs) {
    console.log('deleteMobs', { mob })
  }

  static async create({ armors, items, mobs, tools, weapons }: Props): Promise<void> {
    console.log('console.log() desde create', { armors, items, mobs, tools, weapons })
    this.createArmors(armors!)
    this.createItems(items!)
    this.createMobs(mobs!)
    this.createTools(tools!)
    this.createWeapons(weapons!)
  }

  static async update({ armors, items, mobs, tools, weapons }: Props): Promise<void> {
    console.log('console.log() desde update', { armors, items, mobs, tools, weapons })
    this.updateArmors(armors!)
    this.updateItems(items!)
    this.updateMobs(mobs!)
    this.updateTools(tools!)
    this.updateWeapons(weapons!)
  }

  static async delete({ armors, items, mobs, tools, weapons }: Props): Promise<void> {
    console.log('console.log() desde delete', { armors, items, mobs, tools, weapons })
    this.deleteArmors(armors!)
    this.deleteItems(items!)
    this.deleteMobs(mobs!)
    this.deleteTools(tools!)
    this.deleteWeapons(weapons!)
  }
}
