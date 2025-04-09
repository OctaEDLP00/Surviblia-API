import { array as zArray, object as zObject } from 'zod'
import { PropsSchema } from './Schemas.ts'

const SurviAPIToolsSchema = zObject(
  {
    axe: zArray(PropsSchema, {
      invalid_type_error: 'Axe must be an array of the objects',
      required_error: 'Axe is required',
    }),
    hoes: zArray(PropsSchema, {
      invalid_type_error: 'Hoes must be an array of the objects',
      required_error: 'Hoe is required',
    }),
    pickaxe: zArray(PropsSchema, {
      invalid_type_error: 'Pickaxes must be an array of the objects',
      required_error: 'Pickaxe is required',
    }),
    shears: zArray(PropsSchema, {
      invalid_type_error: 'Shears must be an array of the objects',
      required_error: 'Shears is required',
    }),
    shield: zArray(PropsSchema, {
      invalid_type_error: 'Shield must be an array of the objects',
      required_error: 'Shield is required',
    }),
    shovel: zArray(PropsSchema, {
      invalid_type_error: 'Shovel must be an array of the objects',
      required_error: 'Shovel is required',
    }),
  },
  {
    invalid_type_error:
      'Tool mus be a object with the properties axe, hoes, pickaxe, shears, shield and shovels',
    required_error: 'Tool is required',
  }
)

function validateToolSchema(tool: typeof SurviAPIToolsSchema) {
  return SurviAPIToolsSchema.safeParse(tool)
}

function validatePartialToolSchema(tool: typeof SurviAPIToolsSchema) {
  return SurviAPIToolsSchema.partial().safeParse(tool)
}

export {
  validateToolSchema,
  validatePartialToolSchema
}
