import { z } from 'zod'
import { PropsSchema } from './Schemas.ts'

const SurviAPIWeaponsSchema = z.object(
  {
    bow: z.array(PropsSchema, {
      invalid_type_error: 'Bow must be an array of objects',
      required_error: 'Bow array is required',
    }),
    sword: z.array(PropsSchema, {
      invalid_type_error: 'Sword must be an array of objects',
      required_error: 'Sword is required',
    }),
  },
  {
    invalid_type_error:
      'Weapon must be a object with the properties bow and sword',
    required_error: 'Weapon is required',
  }
)

export { SurviAPIWeaponsSchema }
