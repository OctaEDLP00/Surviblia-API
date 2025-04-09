import type { Entities, Mob, Player } from '@/types/SurviAPIEntities.d.ts'

interface SurviAPIEntitiesModel {
  /** @static @async */
  getEntities(): Promise<Entities>
  /** @static @async */
  getEntity({ entity }: { entity: string }): Promise<Array<Player | Mob>>
  /** @static @async */
  createEntity(entity: Entities): Promise<void>
  /** @static @async */
  updateEntity(entity: Entities): Promise<void>
  /** @static @async */
  deleteEntity(entity: Entities): Promise<void>
}

export type { SurviAPIEntitiesModel }
