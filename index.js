'use strict'

const fetch = require('isomorphic-fetch')

function formatByDay(data) {
  var days = new Array(7)
  var animes = []
  for (var d in data) {
    animes.push(data[d])
  }
  for (var i = 0; i < days.length; i++) {
    days[i] = {
      weekday: i,
      animes: animes.filter(function(anime) {
        return anime.weekDayCN == i
      })
    }
  }
  return days
}

class BGM {
  // date format: YYMM, eg: 1510
  url(date) {
    return `https://raw.githubusercontent.com/wxt2005/bangumi-list/master/json/bangumi-${date}.json`
  }

  get(date, format) {
    return new Promise((resolve, reject) => {
      fetch(this.url(date))
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

          resolve(json)

        })
        .catch(ex => {
          reject(new Error(ex))
        })
    })
  }
}

module.exports = new BGM()
