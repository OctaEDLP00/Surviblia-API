import {
  DICTIONARY,
  ENCHANTMENTS_SELECT,
  MATERIAL_SELECT,
  MOB_SPECIE_SELECT,
  VALUE_OPTIONS
} from './const.mjs'
import { $create, $id } from './document.mjs'
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
  $form,
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
  $select,
  $species,
  $speciesLabel,
  $state,
  $stateLabel,
  $useOfTool,
  $useOfToolLabel,
  $version,
  $versionLabel,
} from './variable.mjs'

const {
  inputTextArea: { class: classInputTextArea },
  select: { class: classSelect },
  label: { class: classLabel },
} = DICTIONARY

// input
$aparitionEpisodes.type = 'text'
$aparitionEpisodes.id = 'aparitionEpisodes'
$aparitionEpisodes.name = 'aparitionEpisodes'
$aparitionEpisodes.className = classInputTextArea
$aparitionEpisodes.placeholder = 'Aparition Episodes'
$aparitionEpisodes.autocomplete = 'off'
$aparitionEpisodes.required = true

// label
$aparitionEpisodesLabel.className = classLabel
$aparitionEpisodesLabel.textContent = 'Aparition Episodes'
$aparitionEpisodesLabel.appendChild($aparitionEpisodes)

// input
$version.type = 'text'
$version.id = 'version'
$version.name = 'version'
$version.className = classInputTextArea
$version.placeholder = 'Version'
$version.autocomplete = 'off'
$version.required = true


// label
$versionLabel.className = classLabel
$versionLabel.textContent = 'Version'
$versionLabel.appendChild($version)

// input
$nameTool.type = 'text'
$nameTool.id = 'nameTool'
$nameTool.name = 'nameTool'
$nameTool.className = classInputTextArea
$nameTool.placeholder = 'Name Tool'
$nameTool.autocomplete = 'off'
$nameTool.required = true

// label
$nameToolLabel.className = classLabel
$nameToolLabel.textContent = 'Name Tool'
$nameToolLabel.appendChild($nameTool)


// select
$materialSelect.id = 'material'
$materialSelect.className = classSelect
$materialSelect.required = true

/** @type {HTMLOptionElement} */
const $newOptionMaterial = $create('option')
$newOptionMaterial.textContent = 'Select Material'
$newOptionMaterial.selected = true
$newOptionMaterial.disabled = true
$materialSelect.appendChild($newOptionMaterial)

for (const material of MATERIAL_SELECT) {
  /** @type {HTMLOptionElement} */
  const $optionMaterial = $create('option')
  $optionMaterial.value = material
  $optionMaterial.text = material
  $materialSelect.appendChild($optionMaterial)
}

// label
$materialLabel.className = classLabel
$materialLabel.textContent = 'Material'
$materialLabel.appendChild($materialSelect)

// select
$enchantmentsSelect.id = 'enchantments'
$enchantmentsSelect.className = classSelect
$enchantmentsSelect.multiple = true
$enchantmentsSelect.size = 4

/** @type {HTMLOptionElement} */
const $newOptionEnchantment = $create('option')
$newOptionEnchantment.textContent = 'Select Enchantments'
$newOptionEnchantment.selected = true
$newOptionEnchantment.disabled = true
$enchantmentsSelect.appendChild($newOptionEnchantment)

for (const enchantment of ENCHANTMENTS_SELECT) {
  const { maxLevel } = enchantment
  if (typeof maxLevel === 'number') {
    for (let level = 1; level <= maxLevel; level++) {
      /** @type {HTMLOptionElement} */
      const $optionEnchantments = $create('option')
      const { name } = enchantment
      const value = `${name} ${level}`
      $optionEnchantments.value = value
      $optionEnchantments.text = value
      $enchantmentsSelect.appendChild($optionEnchantments)
    }
  }
  for (let level = 1; level <= Number(maxLevel); level++) {
    /** @type {HTMLOptionElement} */
    const $optionEnchantments = $create('option')
    const { name } = enchantment
    const value = `${name} ${level}`
    $optionEnchantments.value = value
    $optionEnchantments.text = value
    $enchantmentsSelect.appendChild($optionEnchantments)
  }
}

// label
$enchantmentsLabel.className = classLabel
$enchantmentsLabel.textContent = 'Enchantments'
$enchantmentsLabel.appendChild($enchantmentsSelect)

// textarea
$useOfTool.id = 'useOfTool'
$useOfTool.name = 'useOfTool'
$useOfTool.className = classInputTextArea
$useOfTool.cols = 0
$useOfTool.rows = 0
$useOfTool.placeholder = 'Use Of Tool'
$useOfTool.autocomplete = 'off'

// label
$useOfToolLabel.className = classLabel
$useOfToolLabel.textContent = 'Use of Tool'
$useOfToolLabel.appendChild($useOfTool)

// textarea
$others.id = 'others'
$others.name = 'others'
$others.className = classInputTextArea
$others.cols = 0
$others.rows = 0
$others.placeholder = 'Others'
$others.autocomplete = 'off'

// label
$othersLabel.className = classLabel
$othersLabel.textContent = 'Others'
$othersLabel.appendChild($others)

// input
$nameMob.type = 'text'
$nameMob.id = 'nameMob'
$nameMob.name = 'nameMob'
$nameMob.className = classInputTextArea
$nameMob.placeholder = 'Mob Name'
$nameMob.autocomplete = 'off'
$nameMob.required = true

// label
$nameMobLabel.className = classLabel
$nameMobLabel.textContent = 'Mob Name'
$nameMobLabel.appendChild($nameMob)

// input
$state.type = 'text'
$state.id = 'state'
$state.name = 'state'
$state.className = classInputTextArea
$state.placeholder = 'State'
$state.autocomplete = 'off'
$state.required = true

// label
$stateLabel.className = classLabel
$stateLabel.textContent = 'State'
$stateLabel.appendChild($state)

// select

$species.id = 'species'
$species.className = classSelect
$species.required = true

/** @type {HTMLOptionElement} */
const $newOptionSpecie = $create('option')
$newOptionSpecie.textContent = 'Select Mob'
$newOptionSpecie.selected = true
$newOptionSpecie.disabled = true
$species.appendChild($newOptionSpecie)

for (const mobSpecie of MOB_SPECIE_SELECT) {
  /** @type {HTMLOptionElement} */
  const $optionMob = $create('option')
  $optionMob.value = mobSpecie.name
  $optionMob.text = mobSpecie.name
  $species.appendChild($optionMob)
}

// label
$speciesLabel.className = classLabel
$speciesLabel.textContent = 'Select Species'
$speciesLabel.appendChild($species)


// input

$alias.type = 'text'
$alias.id = 'alias'
$alias.name = 'alias'
$alias.className = classInputTextArea
$alias.placeholder = 'Alias'
$alias.autocomplete = 'off'
$alias.required = true

// label
$aliasLabel.className = classLabel
$aliasLabel.textContent = 'Alias'
$aliasLabel.appendChild($alias)

// input

$domestication.type = 'text'
$domestication.id = 'domestication'
$domestication.name = 'domestication'
$domestication.className = classInputTextArea
$domestication.placeholder = 'Domestication'
$domestication.autocomplete = 'off'
$domestication.required = true


// label
$domesticationLabel.className = classLabel
$domesticationLabel.textContent = 'Domestication'
$domesticationLabel.appendChild($domestication)

// textarea
$lastSeen.id = 'last_seen'
$lastSeen.name = 'last_seen'
$lastSeen.className = classInputTextArea
$lastSeen.cols = 0
$lastSeen.rows = 0
$lastSeen.placeholder = 'Last Seen'
$lastSeen.autocomplete = 'off'
$lastSeen.required = true

// label
$lastSeenLabel.className = classLabel
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
$containerNameMob.appendChild($nameMobLabel)
$containerState.appendChild($stateLabel)
$containerSpecies.appendChild($speciesLabel)
$containerAlias.appendChild($aliasLabel)
$containerDomestication.appendChild($domesticationLabel)
$containerLastSeen.appendChild($lastSeenLabel)

if ($select != null) {
  $select.addEventListener('change', () => {
    const $container = $id('container')
    if ($select != null && $form != null) {
      const index = $select.selectedIndex
      const $optionSelected = $select.options[index].value
      $form.action = `/api/add/${$optionSelected}`
      const {
        ARMORS, TOOLS, WEAPONS, ITEMS, MOBS, SELECT_ADD_DATA
      } = VALUE_OPTIONS
      if ($optionSelected === SELECT_ADD_DATA) return

      if (
        $container && (
          $optionSelected === ARMORS ||
          $optionSelected === TOOLS ||
          $optionSelected === WEAPONS ||
          $optionSelected === ITEMS
        )
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

      if ($container && $optionSelected === MOBS) {
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
    }
  })
}
