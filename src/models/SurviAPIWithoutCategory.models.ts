import type { WithoutCategory } from '@/types/SurviAPIWithoutCategory.d.ts'
import { readFile } from '@/utils/readFile.ts'
import { sanitizeMaterialItem } from '@/utils/sanitize'

const SAPIWithoutCategory: Array<WithoutCategory> = readFile(
  '../data/SurviAPIWithoutCategory.json'
)

class SurviAPIWithoutCategoryModel {
  static async getWithoutCategory(): Promise<Array<WithoutCategory>> {
    return SAPIWithoutCategory
  }

  static async getWithoutCategoryFrom({
    item,
  }: { item: string }): Promise<WithoutCategory | undefined> {
    return SAPIWithoutCategory.find(
      (w) => sanitizeMaterialItem(w.item) === item
    )
  }

  static async createWithoutCategory(
    withoutCategory: WithoutCategory
  ): Promise<void> {}

  static async updateWithoutCategory(
    withoutCategory: WithoutCategory
  ): Promise<void> {}

  static async deleteWithoutCategory(
    withoutCategory: WithoutCategory
  ): Promise<void> {}
}

export { SurviAPIWithoutCategoryModel }
export default SurviAPIWithoutCategoryModel
