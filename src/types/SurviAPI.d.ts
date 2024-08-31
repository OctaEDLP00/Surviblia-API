import { Version } from './enum.ts'
import {
  Comment,
  IdEnchantName,
  IdItemsType,
  IdMob,
  LevelWithNumber,
  LevelWithNumberRoman
} from './main.d.ts'

export interface Enchantment {
  id: IdEnchantName
  lvl: LevelWithNumberRoman | LevelWithNumber
}

// ENUM VERSION

export interface Armors {
  apparitionEpisodes: string | Array<string>
  enchantments?: Array<Enchantment>
  material: IdItemsType
  nameTool: string
  others?: Comment | Array<Comment>
  useOfTool?: string
  version: Version
}

export type ItemsWithoutEnchantments = Omit<Armors, 'enchantments'>
export type ArmorWhitout = Omit<Armors, 'material' | 'name_tool' | 'use_of_tool' | 'enchantments'>

export interface Items {
  books: Array<Armors>
  elytras: Array<Armors>
  maps: Array<ItemsWithoutEnchantments>
  shulkers: Array<ItemsWithoutEnchantments>
}

export interface Mob extends ArmorWhitout {
  alias: string
  domestication: string
  entity: IdMob
  lastSeen: string
  nameMob: string
  state: string
}

interface Player {
  apparitionEpisodes: string | Array<string>
  entity: 'minecraft:player'
  namePlayer: string
  others?: Comment | Array<Comment>
  useOfTool?: string
  version: Version
}

export interface Entities {
  player: Array<Player>
  zombies: Array<Mob>
}

export interface Tools {
  axe: Array<Armors>
  hoes: Array<Armors>
  pickaxe: Array<Armors>
  shears: Array<Armors>
  shield: Array<Armors>
  shovel: Array<Armors>
}

export interface Weapons {
  bow: Array<Armors>
  sword: Array<Armors>
  fishingRod: Array<Armors>
}

export interface WithoutCategory {
  apparitionEpisodes: string
  material: IdItemsType
  nameTool: string
  version: Version
}

export interface SurviAPI {
  armors: Array<Armors>
  items: Items
  entities: Entities
  tools: Tools
  weapons: Weapons
  without_category: Array<WithoutCategory>
}
