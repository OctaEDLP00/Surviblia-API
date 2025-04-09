import type { Entities, Mob, Player } from '@/types/SurviAPIEntities'
import { readFile } from '@/utils/readFile'

const SAPIEntities: Entities = readFile('../data/SurviAPIEntities.json')

class SurviAPIEntitiesModel {
  static async getEntities(): Promise<Entities> {
    return SAPIEntities
  }

  static async getEntity({
    entity,
  }: { entity: string }): Promise<Array<Player | Mob>> {
    return SAPIEntities[entity as 'player' | 'zombies']
  }

  static async createEntity(entity: Entities) {}

  static async updateEntity(entity: Entities) {}

  static async deleteEntity(entity: Entities) {}
}

export { SurviAPIEntitiesModel }
export default SurviAPIEntitiesModel
