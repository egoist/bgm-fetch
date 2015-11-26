'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var fetch = require('isomorphic-fetch');

function formatByDay(data) {
  var days = new Array(7);
  var animes = [];
  for (var d in data) {
    animes.push(data[d]);
  }
  for (var i = 0; i < days.length; i++) {
    days[i] = animes.filter(function (anime) {
      return anime.weekDayCN == i;
    });
  }
  return days;
}

var BGM = (function () {
  function BGM() {
    _classCallCheck(this, BGM);
  }

  _createClass(BGM, [{
    key: 'url',

    // date format: YYMM, eg: 1510
    value: function url(date) {
      return 'https://raw.githubusercontent.com/wxt2005/bangumi-list/master/json/bangumi-' + date + '.json';
    }
  }, {
    key: 'get',
    value: function get(date, format) {
      var _this = this;

      return new Promise(function (resolve, reject) {
        fetch(_this.url(date)).then(function (res) {
          if (res.status !== 200) {
            return reject(new Error(res.status));
          }
          return res.json();
        }).then(function (json) {

          if ((typeof json === 'undefined' ? 'undefined' : _typeof(json)) !== 'object') {
            return;
          }

          if (format) {
            json = formatByDay(json);
          }

          resolve(json);
        }).catch(function (ex) {
          reject(new Error(ex));
        });
      });
    }
  }]);

  return BGM;
})();

exports.default = new BGM();
