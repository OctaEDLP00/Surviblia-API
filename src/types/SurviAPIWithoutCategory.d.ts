import type { Version } from '@/types/enum.ts'
import type { IdItemsType } from '@/types/main.d.ts'

interface WithoutCategory {
  apparition_episodes: string
  item: IdItemsType
  name_tool: string
  version: Version
}

export type { WithoutCategory }
export default WithoutCategory
