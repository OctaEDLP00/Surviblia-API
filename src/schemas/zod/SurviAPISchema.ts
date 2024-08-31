import {
  array,
  object,
  string,
  union,
  enum as zEnum,
  infer as zInfer
} from 'zod'

export const VersionSchema = zEnum([
  '1.X',
  '1.4',
  '1.5',
  '1.6',
  '1.7',
  '1.8',
  '1.9',
  '1.10',
  '1.11',
  '1.12',
  '1.13',
  '1.14',
  '1.15',
  '1.16',
  '1.17',
  '1.18',
  '1.19',
  '1.20',
  '1.21',
  '1.22'
], {
  invalid_type_error: 'Version must be a string, the posibilities are 1.X, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.12, 1.13, 1.14, 1.15, 1.16, 1.17, 1.18, 1.19, 1.20, 1.21, 1.22',
  required_error: 'Version is required'
})

const IdEnchSchema = zEnum([
  'minecraft:protection',
  'minecraft:unbreaking',
  'minecraft:mending',
  'minecraft:looting',
  'minecraft:respiration',
  'minecraft:feather_falling',
  'minecraft:depth_strider',
  'minecraft:efficiency',
  'minecraft:fortune',
  'minecraft:silk_touch',
  'minecraft:power',
  'minecraft:infinity',
  'minecraft:punch',
  'minecraft:flame',
  'minecraft:fire_aspect',
  'minecraft:aqua_affinity',
  'minecraft:bane_of_arthropds',
  'minecraft:blast_protection',
  'minecraft:fire_protection',
  'minecraft:frost_walker',
  'minecraft:knockback',
  'minecraft:luck_of_the_sea',
  'minecraft:lure',
  'minecraft:projectile_protection',
  'minecraft:sharpness',
  'minecraft:smite',
  'minecraft:thorns',
  'minecraft:sweeping',
  'minecraft:sweeping_edge'
], {
  invalid_type_error: 'ID Enchantment must be a string',
  required_error: 'Enchantment ID is required'
})

const lvlIntString = zEnum(['1', '2', '3', '4', '5'], {
  invalid_type_error: 'lvlNumber must be a string, the posibilities are 1, 2, 3, 4, 5'
}).optional()

const lvlRomanString = zEnum(['I', 'II', 'III', 'IV', 'V'], {
  invalid_type_error: 'lvlRoman must be a string, the posibilities are I, II, III, IV, V'
}).optional()

const LvlSchema = union([lvlIntString, lvlRomanString], {
  invalid_type_error: 'Level must be an string of the enum lvlRoman or lvlIntString',
  required_error: 'Level is required'
})

export const EnchantmentSchema = array(object({
  id: IdEnchSchema,
  lvl: LvlSchema
}, {
  invalid_type_error: 'Enchantment must be a object of id and lvl',
  required_error: 'Enchantment is required'
}), {
  invalid_type_error: 'Enchantment must be an array of the object',
  required_error: 'Enchantments is required'
})

export const ArmorSchema = object({
  apparition_episodes: string({
    invalid_type_error: 'Apparition episodes must be a string',
    required_error: 'Apparition episodes are required'
  }),
  version: VersionSchema,
  name_tool: string({
    invalid_type_error: 'Name tool must be a string',
    required_error: 'name tool is required'
  }),
  material: string({
    invalid_type_error: 'Material must be a string',
    required_error: 'Material is required'
  }).startsWith('minecraft:'),
  enchantments: EnchantmentSchema,
  use_of_tool: string({
    invalid_type_error: 'Use of tool must be a string'
  }).optional(),
  others: string({
    invalid_type_error: 'Others must be a string'
  }).optional()
}, {
  invalid_type_error: 'Armor must be a object with the properties apparition_episodes, version, name_tool, material, enchanments, use_of_tool and others',
  required_error: 'Armor is required'
})

export const WeaponsSchema = object({
  bow: array(ArmorSchema, {
    invalid_type_error: 'Bow must be an array of objects',
    required_error: 'Bow array is required'
  }),
  sword: array(ArmorSchema, {
    invalid_type_error: 'Sword must be an array of objects',
    required_error: 'Sword is required'
  })
}, {
  invalid_type_error: 'Weapon must be a object with the properties bow and sword',
  required_error: 'Weapon is required'
})

export const ToolsSchema = object({
  axe: array(ArmorSchema, {
    invalid_type_error: 'Axe must be an array of the objects',
    required_error: 'Axe is required'
  }),
  hoes: array(ArmorSchema, {
    invalid_type_error: 'Hoes must be an array of the objects'
  }).optional(),
  pickaxe: array(ArmorSchema, {
    invalid_type_error: 'Pickaxes must be an array of the objects',
    required_error: 'Pickaxe is required'
  }),
  shears: array(ArmorSchema, {
    invalid_type_error: 'Shears must be an array of the objects',
    required_error: 'Shears is required'
  }),
  shield: array(ArmorSchema, {
    invalid_type_error: 'Shield must be an array of the objects',
    required_error: 'Shield is required'
  }),
  shovel: array(ArmorSchema, {
    invalid_type_error: 'Shovel must be an array of the objects',
    required_error: 'Shovel is required'
  })
}, {
  invalid_type_error: 'Tool mus be a object with the properties axe, hoes, pickaxe, shears, shield and shovels',
  required_error: 'Tool is required'
})

export const ZombieSchema = object({
  apparition_episodes: string({
    invalid_type_error: 'Apparition episodes must be a string',
    required_error: 'Apparition_episodes is required'
  }),
  version: VersionSchema,
  name_mob: string({
    invalid_type_error: 'Name mob must be a string',
    required_error: 'Name mob is required'
  }),
  state: string({
    invalid_type_error: 'State must be a string',
    required_error: 'State is required'
  }),
  species: string({
    invalid_type_error: 'Species must be a string',
    required_error: 'Scpecies is required'
  }),
  alias: string({
    invalid_type_error: 'Alias must be a string',
    required_error: 'Alias is required'
  }),
  domestication: string({
    invalid_type_error: 'Domestication must be a string',
    required_error: 'Domestication is required'
  }),
  last_seen: string({
    invalid_type_error: 'Last seen must be a string',
    required_error: 'Last seen is required'
  }),
  others: string({
    invalid_type_error: 'Others must be a string'
  }).optional()
}, {
  invalid_type_error: 'Zombie must be a object with the properties apparition_episodes, version, name_mob, state, species, alias, domestication, last_seen and others',
  required_error: 'Zombie is required'
})

export const MobsSchema = object({
  zombies: array(ZombieSchema, {
    invalid_type_error: 'Zombie must be an array of objects',
    required_error: 'Zombies is required'
  })
}, {
  invalid_type_error: 'Mobs must be a object with the propertie zombies',
  required_error: 'Mobs is required'
})

export const ItemsSchema = object({
  shulkers: array(ArmorSchema, {
    invalid_type_error: 'Shulkers must be an array of the objects',
    required_error: 'Shulkers is required'
  }),
  books: ArmorSchema,
  maps: ArmorSchema,
  elytras: array(ArmorSchema, {
    invalid_type_error: 'Elytras must be an array of the objects',
    required_error: 'Elytras is required'
  })
}, {
  invalid_type_error: 'Items must be a object with the properties shulkers, books, maps and elytras',
  required_error: 'Items is required'
})

export const SurviAPISchema = object({
  armors: array(ArmorSchema, {
    invalid_type_error: 'Armors must be an array of objects',
    required_error: 'Armors is required'
  }),
  tools: ToolsSchema,
  weapons: WeaponsSchema,
  items: ItemsSchema,
  mobs: MobsSchema
}, {
  invalid_type_error: 'SurviAPI must be a object with the properties armors, tools, weapons, items and mobs',
  required_error: 'SurviAPI is required'
})

// SurviAPI types
export type SurviAPI = zInfer<typeof SurviAPISchema>
export type Armor = zInfer<typeof ArmorSchema>
export type Tools = zInfer<typeof ToolsSchema>
export type Weapons = zInfer<typeof WeaponsSchema>
export type Items = zInfer<typeof ItemsSchema>
export type Mobs = zInfer<typeof MobsSchema>

// hacen falta?? 👇
// export type Enchantment = zInfer<typeof EnchantmentSchema>
// export type Zombie = zInfer<typeof ZombieSchema>
// export type Version = zInfer<typeof VersionSchema>
