import type { Items } from '@/types/SurviAPIItems'
import type { ItemsWithoutEnchantments, Props } from '@/types/main'

interface SurviAPIItemsModel {
  /** @static @async */
  getItems(): Promise<Items>
  /** @static @async */
  getItem({
    item,
  }: { item: string }): Promise<Array<Props | ItemsWithoutEnchantments>>
  /** @static @async */
  createItem(items: Items): Promise<void>
  /** @static @async */
  updateItem(items: Items): Promise<void>
  /** @static @async */
  deleteItem(items: Items): Promise<void>
}

export type { SurviAPIItemsModel }
