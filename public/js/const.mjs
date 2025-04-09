/**
 * @typedef {{ [key: string]: { class: string } }} DICT
 * @type {DICT} DICTIONARY
 */
export const DICTIONARY = {
  inputTextArea: {
    class:
      'text-sm border rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-[.6rem] dark:placeholder-neutral-500 dark:focus:ring-cyan-500 dark:focus:border-cyan-500 text-[#222]',
  },
  label: {
    class: 'block mb-2 text-sm font-medium',
  },
  select: {
    class:
      'border border-neutral-300 text-sm rounded-lg focus:ring-cyan-700 focus:border-cyan-500 block w-full p-2.5 dark:border-neutral-700 dark:placeholder-neutral-500 dark:focus:ring-cyan-500 dark:focus:border-cyan-500 text-[#222]',
  },
}

/**
 * @typedef {`minecraft:${string}`} Minecraft
 */

/**
 * @typedef {Array<{ name: Minecraft }>} MobSpecieSelect
 * @type {MobSpecieSelect} MOB_SPECIE_SLECT
 */
export const MOB_SPECIE_SELECT = [
  { name: 'minecraft:zombified_piglin' },
  { name: 'minecraft:wither_skeleton' },
  { name: 'minecraft:zombie_villager' },
  { name: 'minecraft:zombie_pigman' },
  { name: 'minecraft:magma_cube' },
  { name: 'minecraft:skeleton' },
  { name: 'minecraft:zombie' },
]

/**
 * @typedef {Array<{ name: Minecraft, maxLevel: '5' | '4' | '3' | '2' | '1' }>} EnchantmentSelect
 * @type {EnchantmentSelect} MOB_SPECIE_SLECT
 */
export const ENCHANTMENTS_SELECT = [
  { name: 'minecraft:projectile_protection', maxLevel: '4' },
  { name: 'minecraft:bane_of_arthropds', maxLevel: '5' },
  { name: 'minecraft:blast_protection', maxLevel: '4' },
  { name: 'minecraft:feather_falling', maxLevel: '4' },
  { name: 'minecraft:fire_protection', maxLevel: '4' },
  { name: 'minecraft:luck_of_the_sea', maxLevel: '3' },
  { name: 'minecraft:depth_strider', maxLevel: '3' },
  { name: 'minecraft:sweeping_edge', maxLevel: '3' },
  { name: 'minecraft:aqua_affinity', maxLevel: '1' },
  { name: 'minecraft:frost_walker', maxLevel: '2' },
  { name: 'minecraft:fire_aspect', maxLevel: '2' },
  { name: 'minecraft:respiration', maxLevel: '3' },
  { name: 'minecraft:unbreaking', maxLevel: '3' },
  { name: 'minecraft:efficiency', maxLevel: '5' },
  { name: 'minecraft:protection', maxLevel: '4' },
  { name: 'minecraft:silk_touch', maxLevel: '1' },
  { name: 'minecraft:sharpness', maxLevel: '5' },
  { name: 'minecraft:knockback', maxLevel: '2' },
  { name: 'minecraft:sweeping', maxLevel: '3' },
  { name: 'minecraft:infinity', maxLevel: '1' },
  { name: 'minecraft:fortune', maxLevel: '3' },
  { name: 'minecraft:looting', maxLevel: '3' },
  { name: 'minecraft:mending', maxLevel: '1' },
  { name: 'minecraft:thorns', maxLevel: '3' },
  { name: 'minecraft:power', maxLevel: '5' },
  { name: 'minecraft:smite', maxLevel: '5' },
  { name: 'minecraft:punch', maxLevel: '2' },
  { name: 'minecraft:flame', maxLevel: '1' },
  { name: 'minecraft:lure', maxLevel: '3' },
]

/**
 * @typedef {Array<Minecraft>}
 */
export const MATERIAL_SELECT = [
  'minecraft:chainmail_helmet',
  'minecraft:chainmail_chestplate',
  'minecraft:chainmail_leggings',
  'minecraft:chainmail_boots',
  'minecraft:iron_helmet',
  'minecraft:iron_chestplate',
  'minecraft:iron_leggings',
  'minecraft:iron_boots',
  'minecraft:diamond_helmet',
  'minecraft:diamond_chestplate',
  'minecraft:diamond_leggigns',
  'minecraft:diamond_boots',
  'minecraft:gold_helmet',
  'minecraft:gold_chestplate',
  'minecraft:gold_leggings',
  'minecraft:gold_boots',
  'minecraft:iron_sword',
  'minecraft:iron_pickaxe',
  'minecraft:iron_shovel',
  'minecraft:iron_axe',
  'minecraft:iron_hoe',
  'minecraft:diamond_sword',
  'minecraft:diamond_pickaxe',
  'minecraft:diamond_shovel',
  'minecraft:diamond_axe',
  'minecraft:diamond_hoe',
  'minecraft:gold_sword',
  'minecraft:gold_pickaxe',
  'minecraft:gold_shovel',
  'minecraft:gold_axe',
  'minecraft:gold_hoe',
  'minecraft:bow',
  'minecraft:elytra',
  'minecraft:empty_map',
  'minecraft:map',
  'minecraft:shears',
  'minecraft:shield',
  'minecraft:shulker_box',
  'minecraft:wodden_pickaxe',
]

/**
 * @typedef {{ [key: string]: string }}
 */
export const VALUE_OPTIONS = {
  SELECT_ADD_DATA: 'default',
  ARMORS: 'armors',
  TOOLS: 'tools',
  WEAPONS: 'weapons',
  ITEMS: 'items',
  MOBS: 'mobs',
}
