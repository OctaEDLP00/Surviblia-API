import type { Armor, Tool } from '@/types/main.d'

/**
 * @param {Armor | Tool} arg
 */
const sanitizeMaterial = (arg: Armor | Tool) =>
  arg
    .replace(/minecraft:/gi, '')
    .replace(
      /_(helmet|chestplate|leggings|boots|sword|pickaxe|axe|shovel|hoe)/gi,
      ''
    )

/**
 * @param {string} arg
 */
const sanitizeMaterialItem = (arg: string) => arg.replace(/minecraft:/gi, '')

/**
 * @param {string} arg
 */
const sanitizeItemShulker = (arg: string) =>
  arg.replace(/minecraft:/gi, '').replace(/_box/gi, '')

/**
 * @param {string} arg
 */
const sanitizeArmor = (arg: Armor) =>
  arg.replace(/minecraft:(diamond|gold|leather|iron|chainmail)_+/gi, '')

/**
 * @param {string} arg
 */
const sanitize = (arg: string) => arg.replace(/minecraft:+/gi, '').split('_')

/**
 * @param {string} arg
 */
const sanitizeMinecraft = (arg: string) =>
  arg.replace(/minecraft:+/gi, '').replace(/_box/gi, '')

export {
  sanitize,
  sanitizeArmor,
  sanitizeItemShulker,
  sanitizeMaterial,
  sanitizeMaterialItem,
  sanitizeMinecraft,
}
export default {
  sanitizeMinecraft,
  sanitize,
  sanitizeArmor,
  sanitizeItemShulker,
  sanitizeMaterial,
  sanitizeMaterialItem,
}
