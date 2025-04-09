import type { MONTHS_TYPE, YEARS_CUSTOM_TYPE } from '@/types/utils/const.ts'

interface GeneralLore {
  description: string
  episode_number: string
  references?: string
  related_pets?: string
  related_places: Array<string> | string
}

interface Lore {
  general_lore: Array<GeneralLore>
}

/* Cinematics */
interface Cinematics {}

/* Clips */
type Keys = (typeof YEARS_CUSTOM_TYPE)[keyof typeof YEARS_CUSTOM_TYPE]
type Months = (typeof MONTHS_TYPE)[keyof typeof MONTHS_TYPE]

interface Mecenas {
  [key in Keys]: {
    [key in Months]: Array<string> | string
  }
}

interface Clips {
  mecenas: Mecenas
}

/* Animations */
interface PartyicleHypeAnimations {
  description: string
  episode_number: string
  place: Array<string> | string
  related_pets?: string
}

interface IntermediateAnimations {
  apparition_episodes: Array<string> | string
  description: string
  first_apparition: string
  related_pets?: Array<string> | string
}

interface AnounncementsPatreonAnimations {
  credits: Array<string> | string
  descriptive_title: string
  episode_number: string
  references: string
}

interface IntroAnimations {
  apparition_episodes: Array<string> | string
  description: Array<string> | string
  first_apparition: string
}

interface Animations {
  anounncements_patreon: Array<AnounncementsPatreonAnimations>
  intermediate: Array<IntermediateAnimations>
  intro: Array<IntroAnimations>
  particle_hype: Array<PartyicleHypeAnimations>
}

interface SurviAPICALC {
  animations: Animations
  cinematics: Cinematics
  clips: Clips
  lore: Lore
}

export type { Animations, Cinematics, Clips, Lore, SurviAPICALC }
export default {
  SurviAPICALC,
  Clips,
  Cinematics,
  Animations,
  Lore,
}
