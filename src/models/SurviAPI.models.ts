import type {
  Armors,
  Entities,
  Items,
  SurviAPI,
  Tools, Weapons,
  WithoutCategory
} from '@/types/SurviAPI.d.ts'
import { readFile } from '@utils/readFile.ts'
import { sanitize, sanitizeMinecraft } from '@utils/sanitize.ts'
// import { writeFileSync } from 'node:fs'
// import { resolve } from 'node:path'
import { Props } from './SurviAPIModel.d'

// type API = Armors | Entities | Tools | Weapons | Items | WithoutCategory

const SAPI: SurviAPI = readFile('../data/SurviAPI.json')

export class SurviAPIModel {
  /*
  private writeFile(data: API): void {
    return writeFileSync(resolve('src', 'data', 'SurviAPI.json'), JSON.stringify(data, null, 2), { encoding: 'utf-8' })
  }
  */

  // #region methods API
  static async getSurviAPI(): Promise<Omit<SurviAPI, '$ref'>> {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { $ref, ...restSAPI } = SAPI
    return { ...restSAPI }
  }

  static async getArmors(): Promise<Array<Armors>> {
    return SAPI.armors
  }

  static async getTools(): Promise<Tools> {
    return SAPI.tools
  }

  static async getWeapons(): Promise<Weapons> {
    return SAPI.weapons
  }

  static async getItems(): Promise<Items> {
    return SAPI.items
  }

  static async getEntities(): Promise<Entities> {
    return SAPI.entities
  }

  static async getWithoutCategory(): Promise<Array<WithoutCategory>> {
    return SAPI.without_category
  }
  // #endregion

  // #region methods serch in the API
  static async getArmorMaterial({ material }: { material: string }): Promise<Array<Armors>> {
    const { armors } = SAPI
    const armorMaterial = armors.filter((a) => {
      const [materialType, _itemType] = sanitize(a.material)
      return material === materialType
    })
    return armorMaterial
  }

  static async getArmorFromArmorMaterial({ material, armor }: { material: string; armor: string }): Promise<Array<Armors>> {
    const { armors } = SAPI
    const armorMaterial = armors.filter((a) => {
      const [materialType, armorType] = sanitize(a.material)
      return material === materialType && armor === armorType
    })
    return armorMaterial
  }

  static async getToolMaterial({ tool, material }: { tool: string; material: string }): Promise<Array<Armors>> {
    const { axe, hoes, pickaxe, shears, shield, shovel } = SAPI.tools
    const toolArray = ({ axe, hoes, pickaxe, shears, shield, shovel } as { [key: string]: Array<Armors> })[tool]

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

  static async getWeaponMaterial({ weapon, material }: { weapon: string; material: string }): Promise<Array<Armors>> {
    const { bow, sword } = SAPI.weapons
    const weaponArray = ({ sword, bow } as { [key: string]: Array<Armors> })[weapon]
    return weaponArray.filter((a) => {
      if (a.material !== 'minecraft:bow') { // es una sword
        const [materialType, weaponType] = sanitize(a.material)
        return weaponType === weapon && materialType === material
      }
      const [weaponType] = sanitize(a.material)
      return weaponType === weapon
    })
  }

  static async getItem({ item }: { item: string }): Promise<Array<Armors>> {
    const { books, elytras, maps, shulkers } = SAPI.items
    const itemArray = ({ books, elytras, maps, shulkers } as { [key: string]: Array<Armors> })[item]
    const itemItem = itemArray.filter((a) => sanitizeMinecraft(a.material))
    return itemItem
  }

  static async getWithoutCategoryFrom({ material }: { material: string }): Promise<Array<WithoutCategory>> {
    return SAPI.without_category.filter(({ material: m }) => m === material)
  }
  // #endregion

  // #region method to create new components in API
  private createArmors(_newArmor: Armors) {
    throw new Error('Method not implemented.')
  }

  private createItems(_newItem: Items) {
    throw new Error('Method not implemented.')
  }

  private createTools(_newTool: Tools) {
    throw new Error('Method not implemented.')
  }

  private createWeapons(_newWeapon: Weapons) {
    throw new Error('Method not implemented.')
  }

  private createEntity(_newEntity: Entities) {
    throw new Error('Method not implemented.')
  }

  private createWithoutCategory(_newWithoutCategory: WithoutCategory) {
    throw new Error('Method not implemented.')
  }
  // #endregion

  // #region method to update new components in API
  private updateArmors(_updateArmor: Armors) {
    throw new Error('Method not implemented.')
  }

  private updateItems(_updateItem: Items) {
    throw new Error('Method not implemented.')
  }

  private updateWeapons(_updateWeapon: Weapons) {
    throw new Error('Method not implemented.')
  }

  private updateTools(_updateTool: Tools) {
    throw new Error('Method not implemented.')
  }

  private updateEntity(_updateEntity: Entities) {
    throw new Error('Method not implemented.')
  }

  private updateWithoutCategory(_updateWithoutCategory: WithoutCategory) {
    throw new Error('Method not implemented.')
  }
  // #endregion

  // #region method to delete new components in API
  private deleteArmors(_deleteArmor: Armors) {
    throw new Error('Method not implemented.')
  }

  private deleteItems(_deleteItem: Items) {
    throw new Error('Method not implemented.')
  }

  private deleteWeapons(_deleteWeapon: Weapons) {
    throw new Error('Method not implemented.')
  }

  private deleteTools(_deleteTool: Tools) {
    throw new Error('Method not implemented.')
  }

  private deleteEntity(_deleteEntity: Entities) {
    throw new Error('Method not implemented.')
  }

  private deleteWitoutCategory(_deleteWithoutCategory: WithoutCategory) {
    throw new Error('Method not implemented.')
  }
  // #endregion

  // #region method to create update and delete
  create(props: Props): void {
    const { armors, items, mobs, tools, weapons, without_category } = props
    if (armors != null) this.createArmors(armors)
    if (items != null) this.createItems(items)
    if (mobs != null) this.createEntity(mobs)
    if (tools != null) this.createTools(tools)
    if (weapons != null) this.createWeapons(weapons)
    if (without_category != null) this.createWithoutCategory(without_category)
  }

  update(props: Props): void {
    const { armors, items, mobs, tools, weapons, without_category } = props
    if (armors != null) this.updateArmors(armors)
    if (items != null) this.updateItems(items)
    if (mobs != null) this.updateEntity(mobs)
    if (tools != null) this.updateTools(tools)
    if (weapons != null) this.updateWeapons(weapons)
    if (without_category != null) this.updateWithoutCategory(without_category)
  }

  delete(props: Props): void {
    const { armors, items, mobs, tools, weapons, without_category } = props
    if (armors != null) this.deleteArmors(armors)
    if (items != null) this.deleteItems(items)
    if (mobs != null) this.deleteEntity(mobs)
    if (tools != null) this.deleteTools(tools)
    if (weapons != null) this.deleteWeapons(weapons)
    if (without_category != null) this.deleteWitoutCategory(without_category)
  }
  // #endregion
}
