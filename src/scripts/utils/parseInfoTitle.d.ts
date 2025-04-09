export interface ParsedInfo { version: string, episode_number: string, episode_title: string }
export declare function parseInfoTitle(title: string): ParsedInfo | null
