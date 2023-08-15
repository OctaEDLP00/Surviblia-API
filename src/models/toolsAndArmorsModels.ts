/*
import {
  type ArmorAndTools,
  type Armor,
  type Tools,
  type Weapons,
  type Items,
  type Mob
} from '../../main'
import { readFile } from 'node:fs/promises'
const ToolsAndArmorsFile = readFile('./tools_and_armors.json', { encoding: 'utf-8' }).then(res => res).catch(e => e.message)
const ToolsAndArmors = Object.create(ToolsAndArmorsFile)
*/
import ToolsAndArmors from './tools_and_armors.json'

// Getters
export const getAllData = () => ToolsAndArmors
export const getArmors = () => ToolsAndArmors.armors
export const getTools = () => ToolsAndArmors.tools
export const getWeapons = () => ToolsAndArmors.weapons
export const getItems = () => ToolsAndArmors.items
export const getMobs = () => ToolsAndArmors.mobs

// Adds
export const addData = () => null
