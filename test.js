var fetch = require('./')
console.log(fetch.toString())
var date = '1502'

fetch
  .get(date)
  .then(function (data) {
    console.log(data)
  })
  .catch(function (err) {
    console.error(err)
  })
