// import {  } from './SurviAPIProjectsModel.d'
import { readFile } from '@utils/readFile.ts'

const SAPIP = readFile('../data/SurviAPIProjects.json')

export class SurviAPIProjectsModel {
  static async getAllProjects() {
    return SAPIP
  }
}
