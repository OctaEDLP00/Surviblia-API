import {
  Armor,
  ArmorSchema,
  Items,
  ItemsSchema,
  Mobs,
  MobsSchema,
  SurviAPI,
  SurviAPISchema,
  Tools,
  ToolsSchema,
  Weapons,
  WeaponsSchema
} from '@schemas/SurviAPISchema.ts'

export function parseSurviAPISchema(input: SurviAPI) {
  return SurviAPISchema.parse(input)
}
export function parseArmorSchema(input: Armor) {
  return ArmorSchema.parse(input)
}
export function parseToolsSchema(input: Tools) {
  return ToolsSchema.parse(input)
}
export function parseWeaponsSchema(input: Weapons) {
  return WeaponsSchema.parse(input)
}
export function parseItemsSchema(input: Items) {
  return ItemsSchema.parse(input)
}
export function parseMobsSchema(input: Mobs) {
  return MobsSchema.parse(input)
}

export function safeParseSurviAPISchema(input: SurviAPI) {
  return SurviAPISchema.partial().safeParse(input)
}
export function safeParseArmorSchema(input: Armor) {
  return ArmorSchema.partial().safeParse(input)
}
export function safeParseToolsSchema(input: Tools) {
  return ToolsSchema.partial().safeParse(input)
}
export function safeParseWeaponsSchema(input: Weapons) {
  return WeaponsSchema.partial().safeParse(input)
}
export function safeParseItemsSchema(input: Items) {
  return ItemsSchema.partial().safeParse(input)
}
export function safeParseMobsSchema(input: Mobs) {
  return MobsSchema.partial().safeParse(input)
}
