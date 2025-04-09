import type {
  ALL_VERSIONS,
  ARMOR_PART_TYPE,
  ARMOR_TYPE,
  BIOME_TYPE,
  ENCHANT_NAME_TYPE,
  GAMEMODE_TYPE,
  LEVEL_NUMBER,
  LEVEL_WITH_NUMBER_ROMAN,
  MOB_TYPE,
  OTHERS_ITEMS,
  SCHEMAS_KEY,
  TOOL_TYPE,
  WEIGHTS,
} from './utils/const'

type Map = 'map' | 'empty_map'
type Armor = (typeof ARMOR_PART_TYPE)[keyof typeof ARMOR_PART_TYPE]
type Tool = (typeof TOOL_TYPE)[keyof typeof TOOL_TYPE]
type OtherItems = (typeof OTHERS_ITEMS)[keyof typeof OTHERS_ITEMS]
type ItemsType = Armor | Tool | Map | OtherItems
type EnchantName = (typeof ENCHANT_NAME_TYPE)[keyof typeof ENCHANT_NAME_TYPE]
type MobType = (typeof MOB_TYPE)[keyof typeof MOB_TYPE]
type LevelWithNumberRoman =
  (typeof LEVEL_WITH_NUMBER_ROMAN)[keyof typeof LEVEL_WITH_NUMBER_ROMAN]
type LevelWithNumber = (typeof LEVEL_NUMBER)[keyof typeof LEVEL_NUMBER]
type Weights = (typeof WEIGHTS)[keyof typeof WEIGHTS]
type ArmorType = (typeof ARMOR_TYPE)[keyof typeof ARMOR_TYPE]
type Gamemode = (typeof GAMEMODE_TYPE)[keyof typeof GAMEMODE_TYPE]
type AllVersions = (typeof ALL_VERSIONS)[keyof typeof ALL_VERSIONS]
type Biome = (typeof BIOME_TYPE)[keyof typeof BIOME_TYPE]
type CommentType = string | undefined | null
type KeySchemas = (typeof SCHEMAS_KEY)[keyof typeof SCHEMAS_KEY]
type IdItemsType = `minecraft:${ItemsType}`
type IdMob = `minecraft:${MobType}`
type IdEnchantName = `minecraft:${EnchantName}`
type IdBiome = `minecraft:${Biome}`
interface Enchantment {
  id: IdEnchantName
  lvl: LevelWithNumberRoman | LevelWithNumber
}
interface Props {
  apparition_episodes: string | Array<string>
  enchantments?: Array<Enchantment>
  material: IdItemsType
  name_tool: string
  others?: Comment | Array<Comment>
  use_of_tool?: string
  version: Version
}
type ItemsWithoutEnchantments = Omit<Props, 'enchantments'>

export type {
  AllVersions,
  Armor,
  ArmorType,
  Biome,
  CommentType,
  Enchantment,
  Gamemode,
  IdBiome,
  IdEnchantName,
  IdItemsType,
  IdMob,
  ItemsWithoutEnchantments,
  KeySchemas,
  LevelWithNumber,
  LevelWithNumberRoman,
  Props,
  Tool,
  Weights,
}

