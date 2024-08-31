import { Version } from './enum.ts'
import { ArrStr, Biome, str } from './main.d.ts'

export interface Coords { x: string; z: string }

export interface TiersObjVal {
  animations?: str
  blocks_used: ArrStr
  curiosity?: str
  coords: Coords
  episode_number: str | ArrStr
  mechanisms_carried_out: ArrStr
  official_name_of_project: str
  others?: str
  project_biome: Biome | Array<Biome>
  project_objetives: str
  record?: ArrStr
  version: Version | Array<Version>
}

interface SurviAPIProjects {
  tierSplus: Array<TiersObjVal>
  tierS: Array<TiersObjVal>
  tierA: Array<TiersObjVal>
  tierB: Array<TiersObjVal>
  tierC: Array<TiersObjVal>
  tierD: Array<TiersObjVal>
  tierUnranked: Array<TiersObjVal>
}
