var fetch = require('./')
console.log(fetch.toString())
var date = '1510'

fetch
  .get(date)
  .then(function (data) {
    console.log(data)
  })
