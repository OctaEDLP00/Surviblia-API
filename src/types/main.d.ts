type Map = 'map' | 'empty_map'

type Armor =
  'diamond_boots'
  | 'diamond_leggigns'
  | 'diamond_chestplate'
  | 'diamond_helmet'
  | 'iron_boots'
  | 'iron_leggings'
  | 'iron_chestplate'
  | 'iron_helmet'
  | 'gold_boots'
  | 'gold_leggings'
  | 'gold_chestplate'
  | 'gold_helmet'
  | 'chainmail_boots'
  | 'chainmail_leggings'
  | 'chainmail_chestplate'
  | 'chainmail_helmet'

type Tool =
  'diamond_pickaxe'
  | 'diamond_axe'
  | 'diamond_shovel'
  | 'diamond_sword'
  | 'diamond_hoe'
  | 'iron_pickaxe'
  | 'iron_axe'
  | 'iron_hoe'
  | 'iron_sword'
  | 'iron_shovel'
  | 'gold_pickaxe'
  | 'gold_axe'
  | 'gold_hoe'
  | 'gold_sword'
  | 'gold_shovel'
  | 'wodden_pickaxe'

type ArmorsAndTools = Armor | Tool

type ItemsType =
  ArmorsAndTools
  | 'bow'
  | 'shield'
  | 'shulker_box'
  | Map
  | 'empty_map'
  | 'elytra'
  | 'shears'
  | 'book'

type Sweeping = 'sweeping' | 'sweeping_edge'

type EnchantName =
  'protection'
  | 'unbreaking'
  | 'mending'
  | 'looting'
  | Sweeping
  | 'respiration'
  | 'feather_falling'
  | 'depth_strider'
  | 'efficiency'
  | 'fortune'
  | 'silk_touch'
  | 'power'
  | 'infinity'
  | 'punch'
  | 'flame'
  | 'fire_aspect'
  | 'aqua_affinity'
  | 'bane_of_arthropds'
  | 'blast_protection'
  | 'fire_protection'
  | 'frost_walker'
  | 'knockback'
  | 'luck_of_the_sea'
  | 'lure'
  | 'projectile_protection'
  | 'sharpness'
  | 'smite'
  | 'thorns'

type Piglin = 'zombified_piglin' | 'zombie_pigman'

type Zombie = 'zombie' | 'zombie_villager'

type Mob =
  Zombie
  | 'skeleton'
  | 'wither_skeleton'
  | 'magma_cube'
  | 'horse'
  | 'wolf'
  | Piglin

export type IdItemsType = `minecraft:${ItemsType}`
export type IdMob = `minecraft:${Mob}`
export type IdEnchantName = `minecraft:${EnchantName}`

export type LevelWithNumberRoman = 'I' | 'II' | 'III' | 'IV' | 'V'
export type LevelWithNumber = '1' | '2' | '3' | '4' | '5'
export type Comment = string | '' | null

type Weights = 'low' | 'medium' | 'high'
type ArmorType = 'chainmail' | 'leather' | 'gold' | 'iron' | 'diamond' | 'netherite'

export const ArmorWeight: Record<ArmorType, Weights> = {
  chainmail: 'low',
  leather: 'low',
  gold: 'medium',
  iron: 'medium',
  diamond: 'high',
  netherite: 'high'
}
