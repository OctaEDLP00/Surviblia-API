import { Version } from "./enum"

export type Items =
  "diamond_boots" |
  "diamond_leggigns" |
  "diamond_chestplate" |
  "diamond_helmet" |
  "diamond_pickaxe" |
  "diamond_axe" |
  "diamond_shovel" |
  "diamond_sword" |
  "diamond_hoe" |
  "iron_boots" |
  "iron_leggings" |
  "iron_chestplate" |
  "iron_helmet" |
  "iron_pickaxe" |
  "iron_axe" |
  "iron_hoe" |
  "iron_sword" |
  "iron_shovel" |
  "gold_boots" |
  "gold_leggings" |
  "gold_chestplate" |
  "gold_helmet" |
  "gold_pickaxe" |
  "gold_axe" |
  "gold_hoe" |
  "gold_sword" |
  "gold_shovel" |
  "chainmail_boots" |
  "chainmail_leggings" |
  "chainmail_chestplate" |
  "chainmail_helmet" |
  "bow" |
  "shield" |
  "shulker_box" |
  "wodden_pickaxe" |
  Map |
  "empty_map" |
  "elytra" |
  "shears" |
  undefined

export type Map =
  "map" |
  "empty_map"

export type Sweeping =
  "sweeping" |
  "sweeping_edge"

export type EnchantName =
  "protection" |
  "unbreaking" |
  "mending" |
  "looting" |
  Sweeping |
  "respiration" |
  "feather_falling" |
  "depth_strider" |
  "efficiency" |
  "fortune" |
  "silk_touch" |
  "power" |
  "infinity" |
  "punch" |
  "flame" |
  "fire_aspect" |
  "aqua_affinity" |
  "bane_of_arthropds" |
  "blast_protection" |
  "fire_protection" |
  "frost_walker" |
  "knockback" |
  "luck_of_the_sea" |
  "lure" |
  "projectile_protection" |
  "sharpness" |
  "smite" |
  "thorns" |
  undefined

export type Piglin = "zombified_piglin" | "zombie_pigman"
export type Mob = "zombie" | "skeleton" | "wither_skeleton" | Piglin

export type Id = `minecraft:${Items | Mob | EnchantName}`

export interface ArmorAndTools {
  armors: Array<Armor>
  items: Items
  tools: Tools
  weapons: Weapons
}

export type Weights = "low" | "medium" | "high"
export const ArmorWeight: Record<string, Weights> = {
  chainmail: "low",
  leather: "low",
  gold: "medium",
  iron: "medium",
  diamond: "high",
  netherite: "high"
}

export interface Armor {
  apparition_episodes: string
  enchantments?: Array<Enchantment>
  material?: Id
  name_tool: string
  others?: Others
  use_of_tool?: string
  version: Version
}

export type LevelWithNumberRoman = "I" | "II" | "III" | "IV" | "V"
export type LevelWithNumber = "1" | "2" | "3" | "4" | "5"

export interface Enchantment {
  id: Id,
  lvl: LevelWithNumberRoman | LevelWithNumber
}

export type Comment = string | "" | undefined

export interface Others {
  other: Comment
}

// version Enum

type ItemsWithoutEnchantments = Omit<Armor, 'enchantments'>

export interface Items {
  shulkers: Array<ItemsWithoutEnchantments>
  book: Armor
  map: ItemsWithoutEnchantments
  elytra: Array<Armor>
}

type ArmorWhitout = Omit<Armor, 'material' | 'name_tool' | 'use_of_tool' | 'enchantments'>

export interface Mobs extends ArmorWhitout {
  name_mob: string
  state: string
  species: Id
  alias: string
  domestication: string
  last_seen: string
}

export interface Tools {
  shovels: Array<Armor>
  hoes: Array<Armor>
  axe: Array<Armor>
  pickaxe: Array<Armor>
  shears: Array<Armor>
}

export interface Weapons {
  bows: Array<Armor>
  swords: Array<Armor>
}

/* export type NBT =
  "CustomName" |
  "CustomNameVisible" |
  "" |
  "" |
  "" |
  "" |
  "" |
  ""
*/
