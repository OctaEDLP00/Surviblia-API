<h1 align="center">Surviblia Rest API</h1>

<div align="center" id=description>
  <strong>API REST</strong> de
  <strong>"Surviblia | Wiki del survival de ElRichMC"</strong>
  <br>
  donde encontraras la mayor informacion de la serie de Survival
  <br>
  del ElRichMC de habla hispana en enseñar sobre tecnico
</div>

[![STATUS](https://img.shields.io/badge/status-enabled-green.svg)]()
[![LICENCE](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

<details open>
  <summary>📝 Tabla de Contenido</summary>
  <br>
  <ol>
    <li>
      <a href='#project_structure'
      >Estructura del Proyecto</a>
    </li>
    <li>
      <a href='#usage'
      >Uso</a>
    </li>
    <li>
      <a href='#api_documentation'
      >Documentacion de la API</a>
    </li>
    <li>
      <a href='#endpoints'
      >Endpoints</a>
    </li>
    <li>
      <a href='#built_using'
      >Construido usando</a>
    </li>
    <li>
      <a href='#authors'
      >Author/es</a>
    </li>
    <li>
      <a href='#acknowledgement'
      >Acknowledgments</a>
    </li>
  </ol>
</details>

<br/>

## Project Structure <a id='project_structure'></a>

```
/
├─ .vscode/
| └─ extension.json
| └─ settings.json
├─ public/
| └─ assets/
| | └─ fonts/
| | | └─ MinecraftRegular.otf
| | | └─ MinecraftRegular.ttf
| | | └─ MinecraftRegular.woff2
| | | └─ MinecraftRegular.zip (all Minecraft fonts)
| | | └─ SgaSmoothRegular.woff2
| | └─ image/
| | | └─ Logo-Surviblia-1-12-(11235x3000).png
| | | └─ Logo-Surviblia-1-12-(256x256).ico
| | | └─ Logo-Surviblia-1-12-(3000x3000).png
| | └─ js/
| |   └─ add.mjs
| |   └─ const.mjs
| |   └─ document.mjs
| |   └─ variable.mjs
| └─ favicon.webp
├─ src/
| ├─ controllers/
| | └─ SurviAPI.controller.ts
| | | └─ SurviAPIController.d.ts
| | └─ SurviAPICALC.controller.ts
| | | └─ SurviAPICALCController.d.ts
| | └─ SurviAPIEpisodes.controller.ts
| | | └─ SurviAPIEpisodesController.d.ts
| | └─ SurviAPIPets.controller.ts
| | | └─ SurviAPIPetsController.d.ts
| | └─ SurviAPIProjects.controller.ts
| | | └─ SurviAPIProjectsController.d.ts
| | └─ SurviAPISVSG.controller.ts
| |   └─ SurviAPISVSGController.d.ts
| ├─ data/
| | └─ SurviAPI.json
| | └─ SurviAPIEpisodes.json
| | └─ SurviAPIPets.json
| | └─ SurviAPIProjects.json
| | └─ SurviAPICALC.json
| | └─ SurviAPISVSG.json
| ├─ middlewares/
| | └─ cors.ts
| ├─ models/
| | └─ SurviAPI.model.ts
| | | └─ SurviAPIModel.d.ts
| | └─ SurviAPICALC.model.ts
| | | └─ SurviAPICALCModel.d.ts
| | └─ SurviAPIEpisodes.model.ts
| | | └─ SurviAPIEpisodesModel.d.ts
| | └─ SurviAPIPets.model.ts
| | | └─ SurviAPIPetsModel.d.ts
| | └─ SurviAPIProjects.model.ts
| | | └─ SurviAPIProjectsModel.d.ts
| | └─ SurviAPISVSG.model.ts
| |   └─ SurviAPISVSGModel.d.ts
| ├─ router/
| | └─ SurviAPIRouter.ts
| └─ schemas/
| | └─ json/
| | | └─ SurviAPISchema.json
| | | └─ SurviAPICALCSchema.json
| | | └─ SurviAPIEpisodesSchema.json
| | | └─ SurviAPIPetsSchema.json
| | | └─ SurviAPIProjectsSchema.json
| | | └─ SurviAPISVSGSchema.json
| | └─ zod/
| |   └─ SurviAPIEpisodesSchema.ts
| |   └─ SurviAPISchema.ts
| |   └─ utils.ts
| └─ scripts/
| | └─ geInfoEpisodios.cjs
| | └─ geInfoEpisodios.d.ts
| | └─ index.cjs
| | └─ parseInfoPublishedAt.cjs
| | └─ parseInfoPublishedAt.d.ts
| | └─ parseInfoTitle.cjs
| | └─ parseInfoTitle.d.ts
| └─ setup/
| | └─ acceptedOrigins.ts
| | └─ containsTools.ts
| | └─ errorSchema.ts
| | └─ main.ts
| | └─ port.ts
| └─ types/
| | └─ const.ts
| | └─ enum.ts
| | └─ main.d.ts
| | └─ SurviAPI.d.ts
| | └─ SurviAPIEpisodes.d.ts
| | └─ SurviAPIPets.d.ts
| | └─ SurviAPIProjects.d.ts
| | └─ SurviAPICALC.d.ts
| | └─ SurviAPISVSG.d.ts
| └─ utils/
| | └─ createRequire.ts
| | └─ Dom.ts
| | └─ formatedStringMsg.ts
| | └─ logs.ts
| | └─ readFile.ts
| | └─ sanitize.ts
| | └─ setHeaderOnStatic.ts
| └─ views/
| | └─ add.html
| | └─ delete.html
| | └─ font.html
| | └─ index.html
| | └─ patch.html
| | └─ put.html
| | └─ tailwind.config.js
| | └─ update.html
| └── index.ts
└─ .env
| └─ .env.test
└─ .gitignore
| └─ .editorconfig
└─ biome.jsonc
└─ LICENSE
└─ package.json
└─ README.md/
| └─ CONTRIBUTING.md
| └─ INFO_FALTANTE.md
└─ tsconfig.json
```

<div align='right'>
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
// import {FetchSurviAPI} from '../lib/FetchSurviAPI.js'

// fetchSurviAPI.js usando async/await
export const fetchSurviAPI = async (url) => await fetch(url)
// fetchSurviAPI.js sin usar async/await
// (manejo de la promesa con .then() y .catch())
export const fetchSurviAPI = (url) => fetch(url)
```

<br>
<br>

En el caso de que estes haciendo una pagina con (HTML, CSS y JavaScript) tendras que hacerlo de esta manera o poniendo la tag &lt;script&gt;&lt;/script&gt; (o desde archivo externo) con el atributo type en __module__

<br>
<br>

```html
<!-- desde HTML -->
<!DOCTYPE html>
<html>
  <head>
    <script type="module">
      // llamada a la api y pintado en el body del html
    </script>
  </head>
  <body>
    <!-- tu estructura HTML -->
  </body>
</html>
```
<br> desde archivo externo que deberas de linkear en tu archivo html usando la tag &lt;script&gt;&lt;/script&gt;

```html
<!-- desde HTML -->
<!DOCTYPE html>
<html>
  <head>
    <!-- linkeo de tu archivo js -->
    <script
      type="module"
      src="./scripts/archivo.js"
    ></script>
  </head>
  <body>
    <!-- tu estructura HTML -->
  </body>
</html>
```
```js
// archivo externo
import { Endpoint } from './const/index.js'
import FetchSurviAPI from './lib/FetchSurviAPI.js'

// tu codigo aqui...
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

// deberas manejas los errores usando try catch

try {
  const response = await fetch(Endpoint)
  if (!response.ok) {

  }
  const data = await response.json()
  return data
} catch (e) {
  if (e instanceof Error) {
    console.error(`Ha ocurrido un Error ${e.message}`)
  } else {
    console.error(`Ha ocurrido un Error ${e}`)
  }
}

// o puedes usar los then para manejar los datos y catch para los errores

fetch(Endpoint)
  .then(res => {
    if (res.ok) {
      /* transformamos la respuesta a json*/
      res.json();
    } else {
      // si la respuesta no es ok
    }
  })
  .then(data => {
    // aca ya no viene la data de la api y ya la podremos usar para imprimir en el HTML
  })
  .catch(err => {
    if (err instanceof Error) {
      console.error(err.message);
    } else {
      console.error(err)
    }
  });
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

1. Si usas [Node.js](https://nodejs.org/) deberas seguir estos pasos

- Si no tienes instalado node puedes hacerlo desde la pagina oficial descargando el paquete o instalador segun el sistema operativo ***(Instalar la version LTS)*** y siguiendo las instrucciones o instalando [fnm]() (Fast Node Manager) o usando comandos de [nvm]() (Node Version Manager) ya preinstalado con node

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
- [scoop](https://scoop.com/)
- [choco](https://chocolatey.com)
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

<div align='right'>
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

<div align='right'>
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
  - GET `/api/entities`
  - GET `/api/entities/:entity` (**aun no añanido**)

  ### Episodes
  - GET `/api/episodes`
  - GET `/api/episodes/episode`
  - GET `/api/episodes/version`
  - GET `/api/episodes/versions`
  - GET `/api/episodes/titles`

  ### Tiers
  - GET `/api/tiers`
  - GET `/api/tiers/:tier`
  - GET `/api/tiers/:tier/:project`

  ### POST
  - POST `/api/post/:type`
  ### PATCH
  - PATCH `/api/patch/:type`
  ### PUT
  - PUT `/api/put/:type`
  ### DELETE
  - DELETE `/api/delete/:type`

<br/>

<div align='right'>
  🔝 <a href='#top'>Back to top</a>
</div>

## ⛏️ Built Using <a id="built_using"></a>

- [NodeJS](https://nodejs.org/en/) - Server Environment
- [Express](https://expressjs.com/) - Server Framework
- [Typescript](https://typescriptlang.org/) - Super Set of Java Script
- [PNPM](https://pnpm.io/installation/) - Package Manager
- [Tsx](https://tsx.com/) - Compiler TS and Executon Engine
- [BiomeJS](https://biomejs.com/) - Formatter and Lint

<br/>

<div align='right'>
  🔝 <a href='#top'>Back to top</a>
</div>

## ✍️ Authors <a id="authors"></a>

- [@OctaEDLP00](https://github.com/OctaEDLP00) - Idea & Initial work

See also the list of [CONTRIBUTORS](https://github.com/OctaEDLP00/SurviAPI/contributors) who participated in this project.

<br/>

<div align='right'>
  🔝 <a href='#top'>Back to top</a>
</div>

## 🎉 Acknowledgements <a id="acknowledgement"></a>

- Pagina Oficial de la [Wiki del Survival de ElRichMC](https://surviblia.com/)(Oficial)

<br/>

<div align='right'>
  🔝 <a href='#top'>Back to top</a>
</div>
