import { array as zArray, object as zObject } from 'zod'
import { PropsSchema } from './Schemas.ts'

const SurviAPIItemsSchema = zObject(
  {
    shulkers: zArray(PropsSchema, {
      invalid_type_error: 'Shulkers must be an array of the objects',
      required_error: 'Shulkers is required',
    }),
    books: PropsSchema,
    maps: PropsSchema,
    elytras: zArray(PropsSchema, {
      invalid_type_error: 'Elytras must be an array of the objects',
      required_error: 'Elytras is required',
    }),
  },
  {
    invalid_type_error:
      'Items must be a object with the properties shulkers, books, maps and elytras',
    required_error: 'Items is required',
  }
)

export { SurviAPIItemsSchema }
