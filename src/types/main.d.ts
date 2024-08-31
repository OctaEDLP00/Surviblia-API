import {
  ARMOR_PART_TYPE,
  ARMOR_TYPE,
  BIOME_TYPE,
  ENCHANT_NAME_TYPE,
  GAMEMODE_TYPE,
  LEVEL_NUMBER,
  LEVEL_WITH_NUMBER_ROMAN,
  MOB_TYPE,
  OTHERS_ITEMS,
  TOOL_TYPE,
  WEIGHTS
} from './const'

export type str = string
export type ArrStr = Array<string>

// SurviAPI types
type Map = 'map' | 'empty_map'
type Armor = (typeof ARMOR_PART_TYPE)[keyof typeof ARMOR_PART_TYPE]
type Tool = (typeof TOOL_TYPE)[keyof typeof TOOL_TYPE]
type OtherItems = (typeof OTHERS_ITEMS)[keyof typeof OTHERS_ITEMS]
type ItemsType = Armor | Tool | Map | OtherItems
type EnchantName = (typeof ENCHANT_NAME_TYPE)[keyof typeof ENCHANT_NAME_TYPE]
type Mob = (typeof MOB_TYPE)[keyof typeof MOB_TYPE]
export type IdItemsType = `minecraft:${ItemsType}`
export type IdMob = `minecraft:${Mob}`
export type IdEnchantName = `minecraft:${EnchantName}`
export type LevelWithNumberRoman = (typeof LEVEL_WITH_NUMBER_ROMAN)[keyof typeof LEVEL_WITH_NUMBER_ROMAN]
export type LevelWithNumber = (typeof LEVEL_NUMBER)[keyof typeof LEVEL_NUMBER]
export type Comment = string | '' | null

type Weights = (typeof WEIGHTS)[keyof typeof WEIGHTS]
type ArmorType = (typeof ARMOR_TYPE)[keyof typeof ARMOR_TYPE]
export type Gamemode = (typeof GAMEMODE_TYPE)[keyof typeof GAMEMODE_TYPE]

export const ArmorWeight: Record<ArmorType, Weights> = {
  chainmail: 'low',
  leather: 'low',
  gold: 'medium',
  iron: 'medium',
  diamond: 'high',
  netherite: 'high'
}

// SurviAPIEpisodes types



// SurviAPIProjects types
export type Biome = (typeof BIOME_TYPE)[keyof typeof BIOME_TYPE]
export type IdBiome = `minecraft:${Biome}`
