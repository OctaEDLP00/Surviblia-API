import type { SurviAPIProjects, Tiers } from '@/types/SurviAPIProjects.d'

interface SurviAPIProjectsModel {
  /**
   * @static
   * @async
   */
  getAllTiers(): Promise<SurviAPIProjects>
  /**
   * @static
   * @async
   */
  getTier({
    tier_name,
  }: {
    tier_name: keyof SurviAPIProjects
  }): Promise<Array<Tiers>>
  /**
   * @static
   * @async
   */
  getProjectByTier({
    project_name,
    tier_name,
  }: {
    project_name: string
    tier_name: keyof SurviAPIProjects
  }): Promise<Tiers | undefined>
  /**
   * @static
   * @async
   */
  createProject(project: SurviAPIProjects): Promise<void>
  /**
   * @static
   * @async
   */
  updateProject(project: SurviAPIProjects): Promise<void>
  /**
   * @static
   * @async
   */
  deleteProject(project: SurviAPIProjects): Promise<void>
}

export type { SurviAPIProjectsModel }
