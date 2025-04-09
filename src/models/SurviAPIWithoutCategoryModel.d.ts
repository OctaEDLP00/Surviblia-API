import type { WithoutCategory } from '@/types/SurviAPIWithoutCategory'

interface SurviAPIWithoutCategoryModel {
  /** @static @async */
  getWithoutCategory(): Promise<Array<WithoutCategory>>
  /** @static @async */
  getWithoutCategoryFrom({
    item,
  }: { item: string }): Promise<WithoutCategory | undefined>
  /** @static @async */
  createWithoutCategory(withoutCategory: WithoutCategory): Promise<void>
  /** @static @async */
  updateWithoutCategory(withoutCategory: WithoutCategory): Promise<void>
  /** @static @async */
  deleteWithoutCategory(withoutCategory: WithoutCategory): Promise<void>
}

export type { SurviAPIWithoutCategoryModel }
