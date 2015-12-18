import fetch from 'isomorphic-fetch'
import { getSeason, formatByDay } from './utils'

class BGM {
  // date format: YYMM, eg: 1510
  url(date) {
    return `https://cdn.rawgit.com/wxt2005/bangumi-list/master/json/bangumi-${date || getSeason()}.json`
  }

  get(date, format) {
    return fetch(this.url(date))
      .then(res => {
        if (res.status !== 200) {
          return reject(new Error(res.status))
        }
        return res.json()
      })
      .then(json => {
        if (typeof json !== 'object') {
          return
        }
        if (format) {
          json = formatByDay(json)
        }
        return json
      })
  }
}

export default new BGM()
