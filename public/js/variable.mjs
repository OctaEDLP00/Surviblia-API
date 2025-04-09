/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore

import { $create, $id } from './document.mjs'

/** @type {HTMLFormElement | null} */
// @ts-expect-error
export const $form = $id('formAddData')

/** @type {HTMLSelectElement | null} */
// @ts-expect-error
export const $select = $id('optionsData')

/** @type {HTMLDivElement} */
export const $containerAparitionEpisodes = $create('div')

/** @type {HTMLDivElement} */
export const $containerVersion = $create('div')

/** @type {HTMLDivElement} */
export const $containerNameTool = $create('div')

/** @type {HTMLDivElement} */
export const $containerMaterial = $create('div')

/** @type {HTMLDivElement} */
export const $containerEnchantments = $create('div')

/** @type {HTMLDivElement} */
export const $containerUseOfTool = $create('div')

/** @type {HTMLDivElement} */
export const $containerOthers = $create('div')

/** @type {HTMLDivElement} */
export const $containerNameMob = $create('div')

/** @type {HTMLDivElement} */
export const $containerState = $create('div')

/** @type {HTMLDivElement} */
export const $containerSpecies = $create('div')

/** @type {HTMLDivElement} */
export const $containerAlias = $create('div')

/** @type {HTMLDivElement} */
export const $containerDomestication = $create('div')

/** @type {HTMLDivElement} */
export const $containerLastSeen = $create('div')

// Template Armors, Items, Weapons, Tools
/** @type {HTMLLabelElement} */
export const $aparitionEpisodesLabel = $create('label')

/** @type {HTMLInputElement} */
export const $aparitionEpisodes = $create('input')

/** @type {HTMLLabelElement} */
export const $versionLabel = $create('label')

/** @type {HTMLInputElement} */
export const $version = $create('input')

/** @type {HTMLLabelElement} */
export const $nameToolLabel = $create('label')

/** @type {HTMLInputElement} */
export const $nameTool = $create('input')

/** @type {HTMLLabelElement} */
export const $materialLabel = $create('label')

/** @type {HTMLSelectElement} */
export const $materialSelect = $create('select')

/** @type {HTMLLabelElement} */
export const $enchantmentsLabel = $create('label')

/** @type {HTMLSelectElement} */
export const $enchantmentsSelect = $create('select')

/** @type {HTMLLabelElement} */
export const $useOfToolLabel = $create('label')

/** @type {HTMLTextAreaElement} */
export const $useOfTool = $create('textarea')

/** @type {HTMLLabelElement} */
export const $othersLabel = $create('label')

/** @type {HTMLTextAreaElement} */
export const $others = $create('textarea')

// Template Mobs
/** @type {HTMLLabelElement} */
export const $nameMobLabel = $create('label')

/** @type {HTMLInputElement} */
export const $nameMob = $create('input')

/** @type {HTMLLabelElement} */
export const $stateLabel = $create('label')

/** @type {HTMLInputElement} */
export const $state = $create('input')

/** @type {HTMLLabelElement} */
export const $speciesLabel = $create('label')

/** @type {HTMLSelectElement} */
export const $species = $create('select')

/** @type {HTMLLabelElement} */
export const $aliasLabel = $create('label')

/** @type {HTMLInputElement} */
export const $alias = $create('input')

/** @type {HTMLLabelElement} */
export const $domesticationLabel = $create('label')

/** @type {HTMLInputElement} */
export const $domestication = $create('input')

/** @type {HTMLLabelElement} */
export const $lastSeenLabel = $create('label')

/** @type {HTMLTextAreaElement} */
export const $lastSeen = $create('textarea')
