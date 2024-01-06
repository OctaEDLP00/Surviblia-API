import {
  DICTIONARY,
  ENCHANTMENTS_SELECT,
  MATERIAL_SELECT,
  MOB_SPECIE_SELECT,
  VALUE_OPTIONS
} from './const.mjs'
import { $create, $id } from "./document.mjs"
import {
  $alias,
  $aliasLabel,
  $aparitionEpisodes,
  $aparitionEpisodesLabel,
  $containerAlias,
  $containerAparitionEpisodes,
  $containerDomestication,
  $containerEnchantments,
  $containerLastSeen,
  $containerMaterial,
  $containerNameMob,
  $containerNameTool,
  $containerOthers,
  $containerSpecies,
  $containerState,
  $containerUseOfTool,
  $containerVersion,
  $domestication,
  $domesticationLabel,
  $enchantmentsLabel,
  $enchantmentsSelect,
  $lastSeen,
  $lastSeenLabel,
  $materialLabel,
  $materialSelect,
  $nameMob,
  $nameMobLabel,
  $nameTool,
  $nameToolLabel,
  $others,
  $othersLabel,
  $species,
  $speciesLabel,
  $state,
  $stateLabel,
  $useOfTool,
  $useOfToolLabel,
  $version,
  $versionLabel
} from './variable.mjs'

const $form = $id('formAddData')
const $select = $id('optionsData')

const { inputTextArea, label, select } = DICTIONARY

// input
$aparitionEpisodes.type = 'text'
$aparitionEpisodes.id = 'aparitionEpisodes'
$aparitionEpisodes.name = 'aparitionEpisodes'
$aparitionEpisodes.className = inputTextArea.class
$aparitionEpisodes.placeholder = 'Aparition Episodes'
$aparitionEpisodes.autocomplete = 'off'
$aparitionEpisodes.required = true
// label
$aparitionEpisodesLabel.className = label.class
$aparitionEpisodesLabel.textContent = 'Aparition Episodes'
$aparitionEpisodesLabel.appendChild($aparitionEpisodes)

// input
$version.type = 'text'
$version.id = 'version'
$version.name = 'version'
$version.className = inputTextArea.class
$version.placeholder = 'Version'
$version.autocomplete = 'off'
$version.required = true
// label
$versionLabel.className = label.class
$versionLabel.textContent = 'Version'
$versionLabel.appendChild($version)

// input
$nameTool.type = 'text'
$nameTool.id = 'nameTool'
$nameTool.name = 'nameTool'
$nameTool.className = inputTextArea.class
$nameTool.placeholder = 'Name Tool'
$nameTool.autocomplete = 'off'
$nameTool.required = true
// label
$nameToolLabel.className = label.class
$nameToolLabel.textContent = 'Name Tool'
$nameToolLabel.appendChild($nameTool)

// select
$materialSelect.id = 'material'
$materialSelect.className = select.class
$materialSelect.required = true
const $newOptionMaterial = $create('option')
$newOptionMaterial.textContent = 'Select Material'
$newOptionMaterial.selected
$materialSelect.appendChild($newOptionMaterial)
for (const material of MATERIAL_SELECT) {
  const $optionMaterial = $create('option')
  $optionMaterial.value = material
  $optionMaterial.text = material
  $materialSelect.appendChild($optionMaterial)
}
// label
$materialLabel.className = label.class
$materialLabel.textContent = 'Material'
$materialLabel.appendChild($materialSelect)

// select
$enchantmentsSelect.id = 'enchantments'
$enchantmentsSelect.className = select.class
$enchantmentsSelect.multiple = true
$enchantmentsSelect.size = 4
const $newOptionEnchantment = $create('option')
$newOptionEnchantment.textContent = 'Select Enchantments'
$newOptionEnchantment.selected
$enchantmentsSelect.appendChild($newOptionEnchantment)
for (const enchantment of ENCHANTMENTS_SELECT) {
  const { maxLevel } = enchantment
  for (let level = 1; level <= maxLevel; level++) {
    const $optionEnchantments = $create('option')
    const { name } = enchantment
    const value = '' + name + ' ' + level
    $optionEnchantments.value = value
    $optionEnchantments.text = value
    $enchantmentsSelect.appendChild($optionEnchantments);
  }
}
// label
$enchantmentsLabel.className = label.class
$enchantmentsLabel.textContent = 'Enchantments'
$enchantmentsLabel.appendChild($enchantmentsSelect)

// textarea
$useOfTool.id = 'useOfTool'
$useOfTool.name = 'useOfTool'
$useOfTool.className = inputTextArea.class
$useOfTool.cols = ''
$useOfTool.rows = ''
$useOfTool.placeholder = 'Use Of Tool'
$useOfTool.autocomplete = 'off'
// label
$useOfToolLabel.className = label.class
$useOfToolLabel.textContent = 'Use of Tool'
$useOfToolLabel.appendChild($useOfTool)

// textarea
$others.id = 'others'
$others.name = 'others'
$others.className = inputTextArea.class
$others.cols = ''
$others.rows = ''
$others.placeholder = 'Others'
$others.autocomplete = 'off'
// label
$othersLabel.className = label.class
$othersLabel.textContent = 'Others'
$othersLabel.appendChild($others)

// input
$nameMob.type = 'text'
$nameMob.id = 'nameMob'
$nameMob.name = 'nameMob'
$nameMob.className = inputTextArea.class
$nameMob.placeholder = 'Mob Name'
$nameMob.autocomplete = 'off'
$nameMob.required = true
// label
$nameMobLabel.className = label.class
$nameMobLabel.textContent = 'Mob Name'
$nameMobLabel.appendChild($nameMob)

// input
$state.type = 'text'
$state.id = 'state'
$state.name = 'state'
$state.className = inputTextArea.class
$state.placeholder = 'State'
$state.autocomplete = 'off'
$state.required = true
// label
$stateLabel.className = label.class
$stateLabel.textContent = 'State'
$stateLabel.appendChild($state)

// select
$species.id = 'species'
$species.className = select.class
$species.required = true
const $newOptionSpecie = $create('option')
$newOptionSpecie.textContent = 'Select Mob'
$newOptionSpecie.selected
$species.appendChild($newOptionSpecie)
for (const mobSpecie of MOB_SPECIE_SELECT) {
  const $optionMob = $create('option')
  $optionMob.value = mobSpecie.name
  $optionMob.text = mobSpecie.name
  $species.appendChild($optionMob)
}
// label
$speciesLabel.className = label.class
$speciesLabel.textContent = 'Select Species'
$speciesLabel.appendChild($species)

// input
$alias.type = 'text'
$alias.id = 'alias'
$alias.name = 'alias'
$alias.className = inputTextArea.class
$alias.placeholder = 'Alias'
$alias.autocomplete = 'off'
$alias.required = true
// label
$aliasLabel.className = label.class
$aliasLabel.textContent = 'Alias'
$aliasLabel.appendChild($alias)

// input
$domestication.type = 'text'
$domestication.id = 'domestication'
$domestication.name = 'domestication'
$domestication.className = inputTextArea.class
$domestication.placeholder = 'Domestication'
$domestication.autocomplete = 'off'
$domestication.required = true
// label
$domesticationLabel.className = label.class
$domesticationLabel.textContent = 'Domestication'
$domesticationLabel.appendChild($domestication)

// textarea
$lastSeen.id = 'last_seen'
$lastSeen.name = 'last_seen'
$lastSeen.className = inputTextArea.class
$lastSeen.cols = ''
$lastSeen.rows = ''
$lastSeen.placeholder = 'Last Seen'
$lastSeen.autocomplete = 'off'
$lastSeen.required = true
// label
$lastSeenLabel.className = label.class
$lastSeenLabel.textContent = 'Last Seen'
$lastSeenLabel.appendChild($lastSeen)

// Template
$containerAparitionEpisodes.appendChild($aparitionEpisodesLabel)
$containerVersion.appendChild($versionLabel)
$containerMaterial.appendChild($materialLabel)
$containerOthers.appendChild($othersLabel)
$containerUseOfTool.appendChild($useOfToolLabel)
$containerEnchantments.appendChild($enchantmentsLabel)
$containerNameTool.appendChild($nameToolLabel)

// Template
$containerNameMob.appendChild($nameMobLabel)
$containerState.appendChild($stateLabel)
$containerSpecies.appendChild($speciesLabel)
$containerAlias.appendChild($aliasLabel)
$containerDomestication.appendChild($domesticationLabel)
$containerLastSeen.appendChild($lastSeenLabel)

$select.addEventListener('change', () => {
  const $container = $id('container')
  const $optionSelected = $select.options[$select.selectedIndex].value
  $form.action = `/api/add/${$optionSelected}`
  const {
    ARMORS, TOOLS, WEAPONS, ITEMS, MOBS, SELECT_ADD_DATA
  } = VALUE_OPTIONS
  if ($optionSelected === SELECT_ADD_DATA) return

  if (
    $optionSelected === ARMORS ||
    $optionSelected === TOOLS ||
    $optionSelected === WEAPONS ||
    $optionSelected === ITEMS
  ) {
    $container.innerHTML = ''
    $container.append(
      $containerAparitionEpisodes,
      $containerVersion,
      $containerNameTool,
      $containerMaterial,
      $containerEnchantments,
      $containerUseOfTool,
      $containerOthers
    )
  }

  if ($optionSelected === MOBS) {
    $container.innerHTML = ''
    $container.append(
      $containerAparitionEpisodes,
      $containerVersion,
      $containerNameMob,
      $containerState,
      $containerSpecies,
      $containerAlias,
      $containerDomestication,
      $containerLastSeen,
      $containerOthers
    )
  }
})
