import fetch from 'isomorphic-fetch'
import {getSeason, formatByDay} from './utils'

export default function bgm(date, {
  format, proxy = 'https://cdn.rawgit.com/wxt2005/bangumi-list/master/json/bangumi-__SEASON__.json'
} = {}) {
  return fetch(url(date, proxy))
    .then(data => data.json())
    .then(data => format ? formatByDay(data) : data)
}

function url(date, proxy) {
  return proxy.replace(/__SEASON__/, date || getSeason())
}
