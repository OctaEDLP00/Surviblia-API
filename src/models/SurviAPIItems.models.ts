import type { Items } from '@/types/SurviAPIItems'
import type { ItemsWithoutEnchantments, Props } from '@/types/main'
import { readFile } from '@/utils/readFile.ts'

const SAPIItems: Items = readFile('../data/SurviAPIItems.json')

class SurviAPIItemsModel {
  static async getItems(): Promise<Items> {
    return SAPIItems
  }

  static async getItem({
    item,
  }: { item: string }): Promise<Array<Props | ItemsWithoutEnchantments>> {
    const { books, elytras, maps, shulkers } = SAPIItems
    const itemArray = (
      { books, elytras, maps, shulkers } as {
        [key: string]: Array<Props | ItemsWithoutEnchantments>
      }
    )[item]

    return itemArray
  }

  static async createItem(item: Items): Promise<void> {}

  static async updateItem(item: Items): Promise<void> {}

  static async deleteItem(item: Items): Promise<void> {}
}

export { SurviAPIItemsModel }
export default SurviAPIItemsModel
