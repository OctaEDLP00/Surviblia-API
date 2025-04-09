import type { KeySchemas } from '@/types/SurviAPISchemas.d'

interface SurviAPISchemaModel {
  /**
   * @static
   * @async
   */
  getSchemas(): Promise<Array<string>>
  /**
   * @static
   * @async
   */
  getSchema({ nameSchema }: { nameSchema: KeySchemas }): Promise<string>
}

export type { SurviAPISchemaModel }
