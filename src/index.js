import fetch from 'isomorphic-fetch'
import { getSeason, formatByDay } from './utils'

class BGM {
  // date format: YYMM, eg: 1510
  url(date) {
    return `https://cdn.rawgit.com/wxt2005/bangumi-list/master/json/bangumi-${date || getSeason()}.json`
  }

  get(date, format) {
    return fetch(this.url(date))
      .then(data => {
        return data.json()
      })
      .then(data => {
        if (typeof data !== 'object') {
          return
        }
        if (format) {
          data = formatByDay(data)
        }
        return data
      })
  }
}

export default new BGM()
