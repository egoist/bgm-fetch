# bgm-fetch

[![NPM version](https://img.shields.io/npm/v/bgm-fetch.svg)](https://www.npmjs.com/package/bgm-fetch)
[![NPM download](https://img.shields.io/npm/dm/bgm-fetch.svg)](https://www.npmjs.com/package/bgm-fetch)
[![Build Status: Linux](https://travis-ci.org/egoist/bgm-fetch.svg?branch=master)](https://travis-ci.org/egoist/bgm-fetch)

```javascript
import bgm from 'bgm-fetch'

// Retrieve the animes that are currently airing
// Format by weekday
bgm({ format: true })
  .then(data => console.log(data))
  .catch(error => console.error(error))

// Retrieve specific season
bgm({
  year: 2015,
  season: 7
})

// Use custom proxy, default one: 'https://cdn.rawgit.com/bangumi-data/bangumi-data/master/data/items/{year}/{season}.json'
bgm({ proxy: 'https://xxx.com/api.json' })
```

## Related

- [bgm](https://github.com/egoist/bgm) - CLI of this module.

## License

MIT &copy; [EGOIST](https://github.com/egoist)
