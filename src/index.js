import fetch from 'isomorphic-fetch'
import { getSeason, formatByDay } from './utils'

class BGM {
  // date format: YYMM, eg: 1510
  constructor () {
    this.proxyURI = 'https://cdn.rawgit.com/wxt2005/bangumi-list/master/json/bangumi-__SEASON__.json'
  }
  proxy (url) {
    this.proxyURI = url
  }
  url(date) {
    return this.proxyURI.replace(/__SEASON__/, date || getSeason())
  }
  get(date, format) {
    return fetch(this.url(date))
      .then(data => data.json())
      .then(data => format ? formatByDay(data) : data)
  }
}

export default new BGM()
