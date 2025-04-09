import type { KeySchemas } from '@/types/main.d.ts'
import { readFile, readFiles } from '@/utils/readFile'

const SAPISchemas = await readFiles<KeySchemas>('public/schemas-json/*.json')

class SurviAPISchemaModel {
  static async getSchemas(): Promise<
    Array<{ [x: string]: string }> | undefined
  > {
    return SAPISchemas
  }

  static async getSchema({
    nameSchema,
  }: { nameSchema: KeySchemas }): Promise<
    { [key: string]: unknown } | undefined
  > {
    const schemaName = SAPISchemas?.find((schema) => schema[nameSchema])
    const requireSchema = readFile(`${schemaName?.[nameSchema]}`)
    return requireSchema
  }
}

export { SurviAPISchemaModel }
export default SurviAPISchemaModel
