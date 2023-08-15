import { type Enchantment } from '../types/main.d'

const capitalizeForWords = (str: string): string => str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ')

const parserEnchantNameId = (id: string): string => {
  const haveUnderscore = id.match('_')
  if (haveUnderscore) capitalizeForWords(id.replace('_', ' ').split('minecraft:')[1])
  return capitalizeForWords(id.split('minecraft:')[1])
}

export const parserEnchantments = (enchants: Array<Enchantment>): Array<string> => enchants.map(enchant => `${parserEnchantNameId(enchant.id)} ${enchant.lvl}`)
