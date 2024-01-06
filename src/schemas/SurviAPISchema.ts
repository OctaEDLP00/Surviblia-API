import {
  array,
  object,
  string,
  union,
  enum as zEnum,
  infer as zInfer,
  null as zNull
} from 'zod'

export type SurviAPI = zInfer<typeof SurviAPISchema>
export type Armor = zInfer<typeof ArmorSchema>
export type Enchantment = zInfer<typeof EnchantmentSchema>
export type Items = zInfer<typeof ItemsSchema>
export type Mobs = zInfer<typeof MobsSchema>
export type Zombie = zInfer<typeof ZombieSchema>
export type Tools = zInfer<typeof ToolsSchema>
export type Weapons = zInfer<typeof WeaponsSchema>
export type Version = zInfer<typeof VersionSchema>

export const VersionSchema = zEnum([
  "1.12",
  "1.11",
  "1.9",
  "1.7",
  "1.5",
  "1.4",
  "1.x"
])

export const EnchantmentSchema = object({
  id: string(),
  lvl: string()
})

export const ArmorSchema = object({
  apparitionEpisodes: string(),
  version: VersionSchema,
  nameTool: string(),
  material: union([zNull(), string()]).optional(),
  enchantments: union([array(EnchantmentSchema), zNull()]).optional(),
  useOfTool: union([zNull(), string()]).optional(),
  others: union([zNull(), string()]).optional()
})

export const WeaponsSchema = object({
  bow: array(ArmorSchema),
  sword: array(ArmorSchema)
})

export const ToolsSchema = object({
  axe: array(ArmorSchema),
  hoes: array(ArmorSchema).optional(),
  pickaxe: array(ArmorSchema),
  shears: array(ArmorSchema),
  shield: array(ArmorSchema),
  shovel: array(ArmorSchema)
})

export const ZombieSchema = object({
  apparitionEpisodes: string(),
  version: VersionSchema,
  nameMob: string(),
  state: string(),
  species: string(),
  alias: string(),
  domestication: string(),
  lastSeen: string(),
  others: string()
})

export const MobsSchema = object({
  zombies: array(ZombieSchema)
})

export const ItemsSchema = object({
  shulkers: array(ArmorSchema),
  books: ArmorSchema,
  maps: ArmorSchema,
  elytras: array(ArmorSchema)
})

export const SurviAPISchema = object({
  armors: array(ArmorSchema),
  tools: ToolsSchema,
  weapons: WeaponsSchema,
  items: ItemsSchema,
  mobs: MobsSchema
})

