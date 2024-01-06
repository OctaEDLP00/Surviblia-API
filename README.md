<style>

</style>

<h1 align="center">
  Surviblia Rest API
</h1>

<div align="center">

[![Status](https://img.shields.io/badge/status-disabled-red.svg)]()
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center">

Una Simple REST API de *`"Surviblia | Wiki del survival de ElRichMC"`*<br/>

</p>

<br/>

<details>
  <summary>📝 Table of Contents</summary>
  <br>
  <ol>
    <li>
      <a
        href='#project_structure'
      >Project Structure</a>
    </li>
    <li>
      <a
        href='#usage'
      >Usage</a>
    </li>
    <li>
      <a
        href='#api_documentation'
        >Api Documentation</a>
    </li>
    <li>
      <a
        href='#endpoints'
      >Endpoints</a>
    </li>
    <li>
      <a
        href='#built_using'
      >Built Using</a>
    </li>
    <li>
      <a
        href='#authors'
      >Authors</a>
    </li>
    <li>
      <a
        disabled
        href='#acknowledgement'
      >Acknowledgments</a>
    </li>
  </ol>
  <ul>
    <li>
      <a
        href='./TODO.md'
      >TODO</a>
    </li>
    <li>
      <a
        href='./CONTRIBUTING.md'
      >CONTRIBUTING</a>
    </li>
    <li>
      <a
        href='./CHANGELOG.md'
      >CHANGELOG</a>
    </li>
  </ul>
</details>

<br/>

## Project Structure <a id='project_structure'></a>

```
|
|- .vscode
|    |- extensions.json
|    |- settings.json
|- public
|    |- fonts
|        |- Minecraft-Regular.woff2
|        |- SgaSmoothRegular.woff2
|- resClient
|    |- api.http
|- src
|   controllers
|    |- SrviAPIController.ts
|   data
|    |- SurviAPI.json
|   middlewares
|    |- cors.ts
|   models
|    |- SurviAPIModel.ts
|   router
|    |- SurviAPIRouter.ts
|   schemas
|    |- SurviAPISchema.ts (with zod*)
|    |- utils.ts (functions that have to do with zod*)
|   setup
|    |- acceptedOrigins.ts
|    |- containsTools.ts
|    |- errorschema.ts
|    |- main.ts
|    |- port.ts
|   types
|    |- enum.ts
|    |- main.d.ts
|    |- SurviAPI.d.ts
|   utils
|    |- createRequire.ts
|    |- Dom.ts
|    |- logs.ts
|    |- parserEnchantments.ts
|    |- readFile.ts
|    |- setHeadersOnStatic.ts
|   views
|    |- html.ts ('/' api, home page API)
|    |- htmlAdd.ts ('/api/add' api, add page API)
|    |- tailwind.config.js
|   index.js
|- .editorconfig
|- .env
|- .gitignore
|- CHANGELOG.md
|- LICENSE
|- package.json
|- README.md
|- tsconfig.json
|
```

<div align='center'>
  🔝 <a href='#top'>Back to top</a>
</div>

## 😏 Usage <a id='usage'></a>

Hacemos la llamada a la api usando [Fetch](hhtps://developer.mosilla.org/es/docs/Web/API/Fetch_API/Using_Fetch)
...También puede usar [Axios](https://axios-http.com/es/docs/intro)

### ESTRUCTURA DE TU PROYECTO

- con node
```
|
|- .vscode (achivos de config del workspace de vscode) (no requerido)
|    |- extensions.json
|    |- settings.json
|- public (con imagenes de los items que aparezcan el la API para pintarlos en la web)
|- src
|   consts
|    |- main.js
|   utils
|    |- FetchSurviAPI.js
|   index.js
|- package.json
|
```

- Archivo consts/main.js
```js
export const Endpoint = 'https://api.surviblia.com/api'
export const ArmorsEndpoint = 'https://api.surviblia.com/api/armors'
export const ToolsEndpoint = 'https://api.surviblia.com/api/tools'
export const WeaponsEndpoint = 'https://api.surviblia.com/api/weapons'
export const ItemsEndpoint = 'https://api.surviblia.com/api/items'
export const MobsEndpoint = 'https://api.surviblia.com/api/mobs'
```

- Archivo FetchSurviAPI.js

```mjs
// Archivo ubicado en lib/FetchSurviAPI.js
// creando un funcion asycrona esta puede estar en un archivo por separado
// el cual despues vas a tener que importar de la siguiente manera
// import {FetchSurviAPI} from '../lib/FetchSurviAPI.mjs'

// fetchSurviAPI.mjs
export const FetchSurviAPI = async (url) => await fetch(url)
```

<br>
<br>

En el caso de que estes haciendo una pagina con (html, css y javascript) tendras que hacerlo de esta manera o poniendo el tag script con el atributo type en __module__

<br>
<br>

```mjs
  <script type="module">
    // llamada a la api y pintado en el body del html
  </script>
```

<br>
<br>

1. Crear un archivo con extension `.mjs (Modulos JavaScript)` para poder usar el __Top Level Await__
  - dentro del archivo haras lo siguiente:

<br>
<br>

```mjs
  // Primera Forma solo usando fetch sin crear la funcion de fetchSurviAPI
  import { Endpoint } from './const/index.js'
  import FetchSurviAPI from './lib/FetchSurviAPI.js'

 // deberas manejas los errores usando try catch

  try {
    const response = await FetchSurviAPI(Endpoint)
    const data = await response.json()
    return data
  } catch (e) {
    console.error(`Ha ocurrido un Error ${e}`)
  }
```

```mjs
// Segunda Forma creando la funcion
import { Endpoint } from '../const/index.js'
import FetchSurviAPI from '../lib/FetchSurviAPI.js'

// si manejas la transformacion en json de la respuesta
// y los errores desde la funcion FetchSurviAPI solo tienes el response del fetch
// y desde ahi pintar en html la api con imagenes
const response = await FetchSurviAPI(Endpoint)

// ...
```

2. Si usas [Node.js](https://nodejs.org/) deberas seguir estos pasos

- Si no tienes instalado node puedes hacerlo desde la pagina oficial descargando el paquete o instalador segun el sistema operativo ***(Instalar la version LTS)*** y siguiendo las instrucciones o instalando fnm (Fast Node Manager) o nvm (Node Version Manager)

- usando fnm
<!-- con linux, mac o windows -->
```sh
# Con Linux, Mac o Windows
curl -fsSL https://fnm.vercel.app/install | bash
```

<!-- Installacion manual -->

<!-- Window, Mac o Linux -->
Con cualquier sistema operativo con [rust](hhtps://rustlang.org/) ejecutando
```sh
cargo install fnm
```
<!-- Mac o Linux -->
Con Mac o Linux teniendo el instalador de [brew](https://brewsh.com)
```sh
brew install fnm
```
<!-- Windows -->
Con Windows con cualquiera de los siguientes instaladores
- winget (ya instalado en window por defecto)
- [scoop](https://)
- [choco](https://)
```sh
winget install Schinz.fnm
# o
scoop install fnm
# o
choco install fnm
```

despues de installar deberas configurar la shell para que identifique el comando de fnm y poder instalar segun tu necesidades diferentes versiones de node
<!-- Shell Setup -->
<!-- .bashrc or .zshrc -->
```bash
# Shell Setup
# .bashrc or .zshrc (MAC, LINUX O WINDOWS CON WSL)
eval "$(fnm env --use-on-cd)"
```
<!-- fishShell profile file -->
```bash
# fishShell profile file (MAC, LINUX O WINDOWS CON WSL)
fnm env --use-on-cd | source
```
<!-- powershell profile file -->
```bash
# powershell profile file (only WINDOWS)
fnm env --use-on-cd | Out-String | Invoke-Expression
```
<!--
  Puede usar para la creacion del repo
  npm (viene instalado con node),
  pnpm o yarn (tenes que instalarlo)
  requerimientos: NODE.JS
-->

```bash
# con npm
npm init -y
npm install #<dependencies>

# con pnpm
pnpm init -y
pnpm add #<dependencies>
# o
pnpm install #<dependencies>

# con yarn
yarn init -y
yarn add #<dependencies>
# o
yarn install #<dependencies>
```

<br/>

<div align='center'>
  🔝 <a href='#top'>Back to top</a>
</div>

## 📜 API Documentation <a id="api_documentation"></a>

Obtener toda la API

```rest
GET https://api.surviblia.com/api
```

Lo que obtendras al hacer la llamada:

```json
{
  "armors": [
    {
      "apparition_episodes": "",
      "version": "1.x",
      "name_tool": "Almofár Eterno",
      "material": "minecraft:chainmail_helmet",
      "enchantments": [
        {
          "id": "minecraft:protection",
          "lvl": "4"
        },
        {
          "id": "minecraft:unbreaking",
          "lvl": "3"
        }
      ],
      "use_of_tool": "Armadura básica contra incendios"
    },
  ]
  //... todo el resto de la api
}
```

<br/>

<div align='center'>
  🔝 <a href='#top'>Back to top</a>
</div>

## 📍 Endpoints <a id="endpoints"></a>
  ### API
  - GET `/api`

  ### Font
  - GET `/font`

  ### Armors
  - GET `/api/armors`
  - GET `/api/armors/:material`

  ### Tools
  - GET `/api/tools`
  - GET `/api/tools/:tool/:material?`

  ### Weapons
  - GET `/api/weapons`
  - GET `/api/weapons/:weapon/:material?`

  ### Items
  - GET `/api/items`
  - GET `/api/items/:item/:material`

  ### Mobs
  - GET `/api/mobs`
  - GET `/api/mobs/:mob` (**aun no añanido**)

  ### Add
  - GET `/api/add`

<br/>

<div align='center'>
  🔝 <a href='#top'>Back to top</a>
</div>

## ⛏️ Built Using <a id="built_using"></a>

- [NodeJs](https://nodejs.org/en/) - Server Environment
- [Express](https://expressjs.com/) - Server Framework
- [Typescript](https://typescriptlang.org/) - Super Set of Java Script
- [Pnpm](https://pnpm.io/installation/) - Package Manager
- [ts-node-dev](https://github.com/whitecolor/ts-node-dev/) - Compiler TS and Executon Engine
- [ts-standrad](https://github.com/standard/ts-standard/) - Eslint of TS style Standard (whitout comma, use a single quote, etc)

<br/>

<div align='center'>
  🔝 <a href='#top'>Back to top</a>
</div>

## ✍️ Authors <a id="authors"></a>

- [@OctaEDLP00](https://github.com/OctaEDLP00) - Idea & Initial work

See also the list of [CONTRIBUTORS](https://github.com/OctaEDLP00/API_THEME/contributors) who participated in this project.

<br/>

<div align='center'>
  🔝 <a href='#top'>Back to top</a>
</div>

## 🎉 Acknowledgements <a id="acknowledgement"></a>

- Pagina Oficial de la [Wiki del Survival de ElRichMC](https://surviblia.com/)(Oficial)
- Rediseño de la pagina Oficial de la [Wiki del Survival de ElRichMC](https://)(NO OFICIAL)

<br/>

<div align='center'>
  🔝 <a href='#top'>Back to top</a>
</div>
