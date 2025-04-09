import type { SurviAPIProjects, Tiers } from '@/types/SurviAPIProjects'
import { readFile } from '@/utils/readFile.ts'

const SAPIP: SurviAPIProjects = readFile('../data/SurviAPIProjects.json')

class SurviAPIProjectsModel {
  static async getAllTiers() {
    return SAPIP
  }
  static async getTier({
    tier_name,
  }: { tier_name: keyof SurviAPIProjects }): Promise<Array<Tiers>> {
    return SAPIP[tier_name]
  }

  static async getProjectByTier({
    project_name,
    tier_name,
  }: {
    project_name: string
    tier_name: keyof SurviAPIProjects
  }): Promise<Tiers | undefined> {
    return SAPIP[tier_name].find(
      ({
        official_name_of_project: name_project,
        others_name_of_project: other_name_project,
      }) => project_name === name_project || project_name === other_name_project
    )
  }

  static async createProject(project: SurviAPIProjects): Promise<void> {}

  static async updateProject(project: SurviAPIProjects): Promise<void> {}

  static async deleteProject(project: SurviAPIProjects): Promise<void> {}
}

export { SurviAPIProjectsModel }
export default SurviAPIProjectsModel
