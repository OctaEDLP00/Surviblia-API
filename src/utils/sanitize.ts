import type { Armor, Tool } from '../types/main'
type ArmorAndTool = Armor | Tool
export const sanitizeMaterial = (arg: ArmorAndTool) => arg
  .replace(/minecraft:/gi, '')
  .replace(/_(helmet|chestplate|leggings|boots|sword|pickaxe|axe|shovel|hoe)/gi, '')

export const sanitizeItemShulker = (arg: string) => arg
  .replace(/minecraft:/gi, '')
  .replace(/_box/gi, '')

export const sanitizeArmor = (arg: Armor) => arg
  .replace(/minecraft:(diamond|gold|leather|iron|chainmail)_+/gi, '')

export const sanitize = (arg: string) => arg
  .replace(/minecraft:+/gi, '')
  .split('_')

export const sanitizeMinecraft = (arg: string) => arg
  .replace(/minecraft:+/gi, '')
  .replace(/_box/gi, '')

