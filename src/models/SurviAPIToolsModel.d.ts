interface SurviAPIToolsModel {
  /** @static @async */
  getTools(): Promise<Tools>
  /** @static @async */
  getToolMaterial({
    tool,
    material,
  }: { tool: string; material?: string }): Promise<Array<Armors>>
  /** @static @async */
  createTool(props: Props): Promise<void>
  /** @static @async */
  updateTool(props: Props): Promise<void>
  /** @static @async */
  deleteTool(props: Props): Promise<void>
}

export type { SurviAPIToolsModel }
