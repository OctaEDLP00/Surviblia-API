import type { Version } from '@/types/enum.ts'
import type { Comment, IdMob } from '@/types/main.d.ts'

type ArmorWhitout = Omit<
  Props,
  | 'material'
  | 'name_tool'
  | 'use_of_tool'
  | 'enchantments'
>

interface Mob extends ArmorWhitout {
  alias: string
  domestication: string
  entity: IdMob
  last_seen: string
  name_mob: string
  state: string
}

interface Player {
  apparition_episodes: string | Array<string>
  entity: 'minecraft:player'
  name_player: string
  others?: Comment | Array<Comment>
  use_of_tool?: string
  version: Version
}

interface Entities {
  player: Array<Player>
  zombies: Array<Mob>
}

export type { Entities, Mob, Player }
export default { Mob, Player, Entities }
