import {
  ArmorSchema,
  ItemsSchema,
  MobsSchema,
  SurviAPISchema,
  ToolsSchema,
  WeaponsSchema
} from '@schemas/zod/SurviAPISchema.ts'

// SurviAPI Schema
export function parseSurviAPISchema(input: any) {
  return SurviAPISchema.parse(input)
}
export function parseArmorSchema(input: any) {
  return ArmorSchema.parse(input)
}
export function parseToolsSchema(input: any) {
  return ToolsSchema.parse(input)
}
export function parseWeaponsSchema(input: any) {
  return WeaponsSchema.parse(input)
}
export function parseItemsSchema(input: any) {
  return ItemsSchema.parse(input)
}
export function parseMobsSchema(input: any) {
  return MobsSchema.parse(input)
}

export function safeParseSurviAPISchema(input: any) {
  return SurviAPISchema.partial().safeParse(input)
}
export function safeParseArmorSchema(input: any) {
  return ArmorSchema.partial().safeParse(input)
}
export function safeParseToolsSchema(input: any) {
  return ToolsSchema.partial().safeParse(input)
}
export function safeParseWeaponsSchema(input: any) {
  return WeaponsSchema.partial().safeParse(input)
}
export function safeParseItemsSchema(input: any) {
  return ItemsSchema.partial().safeParse(input)
}
export function safeParseMobsSchema(input: any) {
  return MobsSchema.partial().safeParse(input)
}
