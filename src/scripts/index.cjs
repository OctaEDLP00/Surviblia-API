const { getInfoEpisodios } = require('./getInfoEpisodios.cjs')

const API_KEY = process.env.API_KEY
const PLAYLIST_ID = process.env.PLAYLIST_ID

if (API_KEY === undefined || PLAYLIST_ID === undefined) throw new Error('The enviroment variables API_KEY or PLAYLIST_ID are not set in the .env file')

getInfoEpisodios(API_KEY, PLAYLIST_ID)
