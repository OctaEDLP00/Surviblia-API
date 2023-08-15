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

<div align='center'>
  🔝 <a href='#top'>Back to top</a>
</div>

## 😏 Usage <a id='usage'></a>
Hacemos la llamada a la api usando [Fetch](hhtps://developer.mosilla.org/es/docs/Web/API/Fetch_API/Using_Fetch)
...También puede usar [Axios](https://axios-http.com/es/docs/intro)

Archivo consts/index.js
```js
export const Endpoint = 'https://api.surviblia.com/api'
export const ArmorsEndpoint = 'https://api.surviblia.com/api/armors'
export const ToolsEndpoint = 'https://api.surviblia.com/api/tools'
export const WeaponsEndpoint = 'https://api.surviblia.com/api/weapons'
export const ItemsEndpoint = 'https://api.surviblia.com/api/items'
export const MobsEndpoint = 'https://api.surviblia.com/api/mobs'
```

Archivo FetchSurviAPI.js
```mjs
// Archivo ubicado en lib/FetchSurviAPI.js
// creando un funcion asycrona esta puede estar en un archivo por separado el cual despues vas a tener que importar de la siguiente manera
// fetchSurviAPI.mjs
export async function FetchSurviAPI(url) {
  return fetch(url)
    .then(response => response.json())
    .then(res => res)
    .catch(e => console.error(`Ha ocurrido un Error ${e}`))
}
```

En el caso de que estes usando javascript en una pagina tendras que hacerlo de esta manera
1. Crear un archivo con extension `.mjs (Modulos JavaScript)` para poder usar el `TLA (Top Level Await)`
  - dentro del archivo haras lo siguiente:
```mjs
  // Primera Forma
  import { Endpoint } from './const/index.js'
  import FetchSurviAPI from './lib/FetchSurviAPI.js'

  try {
    const response = await fetchSurviAPI(Endpoint)
    return response
  } catch (e) {
    console.error(`Ha ocurrido un Error ${e}`)
  }
```

```mjs
  // Segunda Forma
import { Endpoint } from './const/index.js'
  import FetchSurviAPI from './lib/FetchSurviAPI.js'

  const API = await fetchSurviAPI(Endpoint)

  // ...
```

2. Si usas [Node.js]() deberas seguir estos pasos

  1. si usas fetch solo crear a estructura de el repo
```
|
|- package.json
|- package-lock.json
|- src
|   lib
|    |- FetchSurviAPI.js
|   consts
|    |- index.js
|   index.js
|
```
<!--
Puede usar para la creacion del repo
npm(se instala con node cuando lo instalas),
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
  - GET `/api/tools/:tool/:material`

  ### Weapons
  - GET `/api/weapons`
  - GET `/api/weapons/:weapon/:material`

  ### Items
  - GET `/api/items`
  - GET `/api/items/:item/:material`

  ### Mobs
  - GET `/api/mobs`
  - GET `/api/mobs/:mob`
  - GET `/api/mobs/:mob?type=<TYPO>`

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

- Pagina Oficial de la [Wiki del Survival de ElRichMC]('https://surviblia.com/')

<br/>

<div align='center'>
  🔝 <a href='#top'>Back to top</a>
</div>
