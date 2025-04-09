import type { Methods } from '@/types/enum.ts'

interface Paths {
  method?: Methods
  description: string
  name?: string
  endpoint: string
  parameters?: Array<Paths>
}

type Endpoints = Array<Paths>

export type { Endpoints, Parameter, Paths }
export default { Endpoints, Parameter, Paths }
