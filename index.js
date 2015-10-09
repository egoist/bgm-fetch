var request = require('superagent')

// DATE format: YYMM, eg: 1510
function url (date) {
  return 'https://raw.githubusercontent.com/wxt2005/bangumi-list/master/json/bangumi-${DATE}.json'
    .replace('${DATE}', date)
}

function fetch () {
  // class function
}

fetch.prototype = {
  constructor: fetch,
  get (date) {
    return new Promise(function (resolve, reject) {
      request
        .get(url(date))
        .end(function (err, res) {
          if (err) {
            reject(new Error(res.status))
          }
          else {
            if (res.status != 200) {
              return reject(new Error(res.status))
            }
            resolve(res.text)
          }
        })
    })
  }
}

module.exports = new fetch()
