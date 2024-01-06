import { Version } from './enum.ts'
import {
  Comment,
  IdEnchantName,
  IdItemsType,
  IdMob,
  LevelWithNumber,
  LevelWithNumberRoman
} from './main.d.ts'


export interface SurviAPI {
  armors: Array<Armors>
  items: Items
  mobs: Mobs
  tools: Tools
  weapons: Weapons
}

export type ItemsWithoutEnchantments = Omit<Armors, 'enchantments'>
export type ArmorWhitout = Omit<Armors, 'material' | 'name_tool' | 'use_of_tool' | 'enchantments'>

export interface Armors {
  apparitionEpisodes: string
  enchantments?: Array<Enchantment>
  material: IdItemsType
  nameTool: string
  others?: Comment
  useOfTool?: string
  version: Version
}

export interface Enchantment {
  id: IdEnchantName
  lvl: LevelWithNumberRoman | LevelWithNumber
}

// ENUM VERSION

export interface Items {
  books: Array<Armors>
  elytras: Array<Armors>
  maps: Array<ItemsWithoutEnchantments>
  shulkers: Array<ItemsWithoutEnchantments>
}

export interface Mobs {
  zombies: Array<Mob>
}

export interface Mob extends ArmorWhitout {
  alias: string
  domestication: string
  lastSeen: string
  nameMob: string
  species: IdMob
  state: string
}

export interface Tools {
  axe: Array<Armors>
  hoes?: Array<Armors>
  pickaxe: Array<Armors>
  shears: Array<Armors>
  shield: Array<Armors>
  shovel: Array<Armors>
}

export interface Weapons {
  bow: Array<Armors>
  sword: Array<Armors>
}
