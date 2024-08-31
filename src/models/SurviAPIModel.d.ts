import { Entities } from '@/types/SurviAPI'
import {
  Armors, Items,
  SurviAPI,
  Tools, Weapons,
  WithoutCategory
} from './SurviAPI'

export interface Props {
  armors?: Armors
  items?: Items
  mobs?: Entities
  tools?: Tools
  weapons?: Weapons
  without_category: WithoutCategory
}

export interface ISurviAPIModel {
  /** @private */
  writeFile(data: SurviAPI): void

  /** @static @async */
  getSurviAPI(): Promise<Omit<SurviAPI, '$ref'>>
  /** @static @async */
  getArmors(): Promise<Array<Armors>>
  /** @static @async */
  getTools(): Promise<Tools>
  /** @static @async */
  getWeapons(): Promise<Weapons>
  /** @static @async */
  getItems(): Promise<Items>
  /** @static @async */
  getMobs(): Promise<Entities>
  /** @static @async */
  getWithoutCategory(): Promise<WithoutCategory>

  /** @static @async */
  getArmorMaterial({ material }: { material: string }): Promise<Array<Armors>>
  /** @static @async */
  getArmorFromArmorMaterial({ material, armor }: { material: string, armor: string }): Promise<Array<Armors>>
  /** @static @async */
  getToolMaterial({ tool, material }: { tool: string, material: string }): Promise<Array<Armors>>
  /** @static @async */
  getWeaponMaterial({ weapon, material }: { weapon: string, material: string }): Promise<Array<Armors>>
  /** @static @async */
  getItem({ item }: { item: string }): Promise<Array<Armors>>
  /** @static @async */
  getWithoutCategoryFrom({ material }: { material: string }): Promise<Array<WithoutCategory>>

  /** @private */
  createArmors(_createArmor: Armors): Promise<void>
  /** @private */
  createItems(_createItem: Items): Promise<void>
  /** @private */
  createTools(_createTool: Tools): Promise<void>
  /** @private */
  createWeapons(_createWeapon: Weapons): Promise<void>
  /** @private */
  createEntity(_createEntity: Entities): Promise<void>
  /** @private */
  createWithoutCategory(_newWithoutCategory: WithoutCategory)
  /** @private */
  updateArmors(_updateArmor: Armors): Promise<void>
  /** @private */
  updateItems(_updateItem: Items): Promise<void>
  /** @private */
  updateWeapons(_updateWeapon: Weapons): Promise<void>
  /** @private */
  updateTools(_updateTool: Tools): Promise<void>
  /** @private */
  updateEntity(_updateEntity: Entities): Promise<void>
  /** @private */
  deleteArmors(_deleteArmor: Armors): Promise<void>
  /** @private */
  deleteItems(_deleteItem: Items): Promise<void>
  /** @private */
  deleteWeapons(_deleteWeapon: Weapons): Promise<void>
  /** @private */
  deleteTools(_deleteTool: Tools): Promise<void>
  /** @private */
  deleteEntity(_deleteEntity: Entities): Promise<void>

  /** */
  create(props: Props): Promise<void>
  /** */
  update(props: Props): Promise<void>
  /** */
  delete(props: Props): Promise<void>
}
