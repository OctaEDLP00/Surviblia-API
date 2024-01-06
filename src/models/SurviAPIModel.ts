import { readFile } from '@utils/readFile.ts'
import { sanitize, sanitizeMinecraft } from '@utils/sanitize.ts'
// import { readFileSync, writeFileSync } from 'node:fs'
// import { resolve } from 'node:path'
import type { Armors, Items, Mobs, SurviAPI, Tools, Weapons } from '../types/SurviAPI.d.ts'
const API: SurviAPI = readFile('@data/SurviAPI.json')

interface Props {
  armors?: any
  items?: any
  mobs?: any
  tools?: any
  weapons?: any
}

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

  static async getArmorMaterial({ material }: any): Promise<Array<Armors> | void> {
    const { armors } = API
    const armorMaterial = armors.filter((a) => {
      const [materialType,] = sanitize(a.material)
      return material === materialType
    })
    return armorMaterial
  }

  static async getArmorFromArmorMaterial({ material, armor }: any): Promise<Array<Armors> | void> {
    const { armors } = API
    const armorMaterial = armors.filter((a) => {
      const [materialType, armorType] = sanitize(a.material)
      return material === materialType && armor === armorType
    })
    return armorMaterial
    // return weaponArray.filter((a) => sanitizeMaterial(a.material) === material)
  }

  static async getToolMaterial({ tool, material }: any): Promise<Array<Armors> | void> {
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

  static async getWeaponMaterial({ weapon, material }: any): Promise<Array<Armors> | void> {
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

  static async getItem({ item }: any): Promise<Array<Armors> | void> {
    const { books, elytras, maps, shulkers } = API.items
    const itemArray = ({ books, elytras, maps, shulkers } as { [key: string]: Array<Armors> })[item]
    if (!itemArray) return
    const itemItem = itemArray.filter((a) => sanitizeMinecraft(a.material))
    return itemItem
  }

  private static async createArmors(_armor: Armors) {
    console.log('createArmors', { _armor })
  }
  private static async updateArmors(_armor: Armors) {
    console.log('updateArmors', { _armor })
  }
  private static async deleteArmors(_armor: Armors) {
    console.log('deleteArmors', { _armor })
  }

  private static async createItems(_item: Items) {
    console.log('createItems', { _item })
  }
  private static async updateItems(_item: Items) {
    console.log('updateItems', { _item })
  }
  private static async deleteItems(_item: Items) {
    console.log('deleteItems', { _item })
  }

  private static async createWeapons(_weapon: Weapons) {
    console.log('createWeapons', { _weapon })
  }
  private static async updateWeapons(_weapon: Weapons) {
    console.log('updateWeapons', { _weapon })
  }
  private static async deleteWeapons(_weapon: Weapons) {
    console.log('deleteWeapons', { _weapon })
  }

  private static async createTools(_tool: Tools) {
    console.log('createTools', { _tool })
  }
  private static async updateTools(_tool: Tools) {
    console.log('updateTools', { _tool })
  }
  private static async deleteTools(_tool: Tools) {
    console.log('deleteTools', { _tool })
  }

  private static async createMobs(_mob: Mobs) {
    console.log('createMobs', { _mob })
  }
  private static async updateMobs(_mob: Mobs) {
    console.log('updateMobs', { _mob })
  }
  private static async deleteMobs(_mob: Mobs) {
    console.log('deleteMobs', { _mob })
  }

  static async create({ armors, items, mobs, tools, weapons }: Props): Promise<void> {
    console.log('console.log() desde create', { armors, items, mobs, tools, weapons })
    this.createArmors(armors)
    this.createItems(items)
    this.createMobs(mobs)
    this.createTools(tools)
    this.createWeapons(weapons)
  }

  static async update({ armors, items, mobs, tools, weapons }: Props): Promise<void> {
    console.log('console.log() desde update', { armors, items, mobs, tools, weapons })
    this.updateArmors(armors)
    this.updateItems(items)
    this.updateMobs(mobs)
    this.updateTools(tools)
    this.updateWeapons(weapons)
  }

  static async delete({ armors, items, mobs, tools, weapons }: Props): Promise<void> {
    console.log('console.log() desde delete', { armors, items, mobs, tools, weapons })
    this.deleteArmors(armors)
    this.deleteItems(items)
    this.deleteMobs(mobs)
    this.deleteTools(tools)
    this.deleteWeapons(weapons)
  }
}
