var fetch = require('./')

var date = '1510'

fetch
  .get(date, true)
  .then(function (data) {
    console.log(data)
  })
  .catch(function (err) {
    console.error(err)
  })
