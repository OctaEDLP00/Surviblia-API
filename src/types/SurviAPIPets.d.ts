import type { AllVersions } from './main.d.ts'

interface Official {
  alias?: string
  apparition_pet: Array<string> | string
  curiosities?: Array<string> | string
  domestication: string
  episode_number: string
  last_see: Array<string> | string
  name_pet: string
  others?: Array<string> | string
  records?: Array<string> | string
  specie: string
  state: string
  version: AllVersions | Array<AllVersions>
}

interface Unofficial {
  alias?: string
  apparition_pet: string
  domestication?: string
  episode_number: string
  last_see?: Array<string> | string
  name_pet: string
  others?: Array<string> | string
  specie: string
  state: string
  version: AllVersions | Array<AllVersions>
}

interface SurviAPIPets {
  officials: Array<Official>
  unofficials: Array<Unofficial>
}

export type { Official, SurviAPIPets, Unofficial }
export default { SurviAPIPets, Official, Unofficial }
