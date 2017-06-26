/*!
 * bgm-fetch v1.0.0
 * (c) 2017-present EGOIST <0x142857@gmail.com>
 * Released under the MIT License.
 */
'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var fetch = _interopDefault(require('isomorphic-fetch'));

function getDate() {
  var date = new Date();
  var year = date.getFullYear().toString().substring(2);
  var month = date.getMonth() + 1;
  var season;
  for (var i = 0, list = [10, 7, 4, 1]; i < list.length; i += 1) {
    var m = list[i];

    if (m <= month) {
      season = m;
    }
  }
  return {
    year: year,
    season: season < 10 ? ("0" + season) : season
  }
}

function format(data) {
  var res = {};
  for (var i = 0, list = data; i < list.length; i += 1) {
    var item = list[i];

    var weekday = new Date(data.begin).getDay();
    res[weekday] = res[weekday] || [];
    res[weekday].push(item);
  }
  return res
}

function bgm(ref) {
  if ( ref === void 0 ) ref = {};
  var year = ref.year;
  var season = ref.season;
  var formatByWeekDay = ref.formatByWeekDay;
  var proxy = ref.proxy; if ( proxy === void 0 ) proxy = 'https://cdn.jsdelivr.net/gh/bangumi-data/bangumi-data@latest/data/items/{year}/{season}.json';

  return fetch(url(year, season, proxy))
    .then(function (data) { return data.json(); })
    .then(function (data) { return formatByWeekDay ? format(data) : data; })
}

function url(year, season, proxy) {
  var d = getDate();
  return proxy.replace(/{year}/, year || d.year)
    .replace(/{season}/, season || d.season)
}

module.exports = bgm;
