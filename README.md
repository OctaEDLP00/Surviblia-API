<h1 align="center">
  🎵 Music REST API
</h1>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center">
  A SIMPLE API REST OF MUSIC <br/>
  Where you can search songs, artist, bands and more... <br/>
</p>



## 📝 Table of Contents

<details>
  <summary>Summary</summary>
    <br>
    <ol>
      <li>
        <a href='#getting_started'>Getting Started</a>
      </li>
      <li>
        <a href='#usage'>Usage</a>
      </li>
      <li>
        <a href='#built_using'>Built Using</a>
      </li>
      <li>
        <a href='#authors'>Authors</a>
      </li>
      <li>
        <a href='#acknowledgement'>Acknowledgments</a>
      </li>
    </ol>
    <ul>
      <li>
        <a href='./TODO.md'>TODO</a>
      </li>
      <li>
        <a href='./CONTRIBUTING.md'>CONTRIBUTING</a>
      </li>
      <li>
        <a href='./CHANGELOG.md'>CHANGELOG</a>
      </li>
    </ul>
</details>

<br/>

## 😏 Usage <a id='usage'></a>
```js
// fetch.js
import { error } from './utils/log.js'

export async function musicFetch(link) {
  try {
    const response = await fetch(link)
    const json = await response.json()
  } catch (e) {
    return error(/* Here you error msg */)
  }
  return json
}
```

```js
// index.js
import { musicFetch } from './fetch.js'
import { log } from './utils/log.js'

const API_MUSIC_LINK = 'https://api.music.dev/'

const data = musicFetch(API_MUSIC_LINK)

console.log(data)
```

```js
// utils/log.js
const error = args => globalThis.console.error(...args)
const log = args => globalThis.console.log(...args)
```
<br/>

<div align='center'>
  🔝 <a href='#top'>Back to top</a>
</div>

## 📜 API Documentation

Get a single artist by name

```rest
GET https://api.music.com/artist/:id
```

You'll get as an answre

```json
{
  "data": {
    "Metallica": {
      "all_albums": 21,
      "social_networks": [
        // social networs links
      ],
      "all_songs": [
        // all songs from all albums
      ],
      "actually_members": [
        "james hetfield",
        "kirk hammett",
        "robert trujillo",
        "lars ulrich"
      ]
    },
    // more information
  }
}
```

<br/>

<div align='center'>
  🔝 <a href='#top'>Back to top</a>
</div>

## 📍 Endpoints

  - GET `/` All endpoints for the API.

  ### Artist

  - GET `/artists` All of the Artist.
  - GET `/artist/:id` Search a unique artist.

  ### Bands

  - GET `/bands` All of the bands.
  - GET `/band/:id` Search a unique band.

  ### Songs

  - GET `/songs` All of the songs.
  - GET `/song` Search for the song by various artist.
  - GET `/song/:id` Search a unique song.

<br/>

<div align='center'>
  🔝 <a href='#top'>Back to top</a>
</div>

## ⛏️ Built Using <a id="built_using" />

- [NodeJs](https://nodejs.org/en/) - Server Environment
- [Express](https://expressjs.com/) - Server Framework
- [Typescript](https://typescriptlang.org/) - Super Set of Java Script
- [Pnpm](https://pnpm.io/installation/) - Package Manager
- [ts-node-dev](https://github.com/whitecolor/ts-node-dev/) - Compiler TS and Executon Engine
- [ts-standrad](https://github.com/standard/ts-standard/) - Eslint of TS style Standard (whitout comma, single quote, etc)

<br/>

<div align='center'>
  🔝 <a href='#top'>Back to top</a>
</div>

## ✍️ Authors <a id="authors" />

- [@OctaEDLP00](https://github.com/OctaEDLP00) - Idea & Initial work

See also the list of [contributors](https://github.com/OctaEDLP00/API_THEME/contributors) who participated in this project.


<!--
<div align='center'>
  🔝 <a href='#top'>Back to top</a>
</div>

## 🎉 Acknowledgements <a id="acknowledgement" />

-
-
-
-->
