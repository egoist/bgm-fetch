import fetch from 'isomorphic-fetch'
import { getDate, formatByWeekDay, ensureSeason } from './utils'

export default function bgm({
  year,
  season,
  format,
  proxy = 'https://cdn.rawgit.com/bangumi-data/bangumi-data/master/data/items/{year}/{season}.json'
} = {}) {
  return fetch(url(year, season, proxy))
    .then(data => data.json())
    .then(data => format ? formatByWeekDay(data) : data)
}

function url(year, season, proxy) {
  const d = getDate()
  return proxy.replace(/{year}/, year || d.year)
    .replace(/{season}/, ensureSeason(season || d.season))
}
