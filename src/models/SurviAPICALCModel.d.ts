import type {
  Animations,
  Cinematics,
  Clips,
  Lore,
  SurviAPICALC,
} from '@/types/SurviAPICALC.d'

interface SurviAPICALCModel {
  getAllCALC(): Promise<SurviAPICALC>
  getAllLore(): Promise<Lore>
  getAllAnimations(): Promise<Animations>
  getAllCinematics(): Promise<Cinematics>
  getAllClips(): Promise<Clips>
  createCALC(calc: SurviAPICALC): Promise<void>
  updateCALC(calc: SurviAPICALC): Promise<void>
  deleteCALC(calc: SurviAPICALC): Promise<void>
}

export type { SurviAPICALCModel }
