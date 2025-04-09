import type { ItemsWithoutEnchantments, Props } from '@/types/main.d'

interface Items {
  books: Array<Props>
  elytras: Array<Props>
  maps: Array<ItemsWithoutEnchantments>
  shulkers: Array<ItemsWithoutEnchantments>
}

export type { Items }
