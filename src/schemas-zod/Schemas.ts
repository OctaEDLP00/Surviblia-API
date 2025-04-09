import {
  array as zArray,
  enum as zEnum,
  object as zObject,
  string as zString,
  union as zUnion,
} from 'zod'

const VersionSchema = zEnum(
  [
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
    '1.22',
  ],
  {
    invalid_type_error:
      'Version must be a string, the posibilities are 1.X, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.12, 1.13, 1.14, 1.15, 1.16, 1.17, 1.18, 1.19, 1.20, 1.21, 1.22',
    required_error: 'Version is required',
  }
)

const IdEnchSchema = zEnum(
  [
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
    'minecraft:sweeping_edge',
  ],
  {
    invalid_type_error: 'ID Enchantment must be a string',
    required_error: 'Enchantment ID is required',
  }
)

const lvlIntString = zEnum(['1', '2', '3', '4', '5'], {
  invalid_type_error:
    'lvlNumber must be a string, the posibilities are 1, 2, 3, 4, 5',
}).optional()

const lvlRomanString = zEnum(['I', 'II', 'III', 'IV', 'V'], {
  invalid_type_error:
    'lvlRoman must be a string, the posibilities are I, II, III, IV, V',
}).optional()

const LvlSchema = zUnion([lvlIntString, lvlRomanString], {
  invalid_type_error:
    'Level must be an string of the enum lvlRoman or lvlIntString',
  required_error: 'Level is required',
})

const EnchantmentSchema = zArray(
  zObject(
    {
      id: IdEnchSchema,
      lvl: LvlSchema,
    },
    {
      invalid_type_error: 'Enchantment must be a object of id and lvl',
      required_error: 'Enchantment is required',
    }
  ),
  {
    invalid_type_error: 'Enchantment must be an array of the object',
    required_error: 'Enchantments is required',
  }
)

const PropsSchema = zObject(
  {
    apparition_episodes: zString({
      invalid_type_error: 'Apparition episodes must be a string',
      required_error: 'Apparition episodes are required',
    }),
    version: VersionSchema,
    name_tool: zString({
      invalid_type_error: 'Name tool must be a string',
      required_error: 'name tool is required',
    }),
    material: zString({
      invalid_type_error: 'Material must be a string',
      required_error: 'Material is required',
    }).startsWith('minecraft:'),
    enchantments: EnchantmentSchema,
    use_of_tool: zString({
      invalid_type_error: 'Use of tool must be a string',
    }).optional(),
    others: zString({
      invalid_type_error: 'Others must be a string',
    }).optional(),
  },
  {
    invalid_type_error:
      'Armor must be a object with the properties apparition_episodes, version, name_tool, material, enchanments, use_of_tool and others',
    required_error: 'Armor is required',
  }
)

export {
  EnchantmentSchema,
  IdEnchSchema,
  lvlIntString,
  lvlRomanString,
  LvlSchema,
  PropsSchema,
  VersionSchema,
}
