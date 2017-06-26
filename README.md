# bgm-fetch

[![NPM version](https://img.shields.io/npm/v/bgm-fetch.svg)](https://www.npmjs.com/package/bgm-fetch)
[![NPM download](https://img.shields.io/npm/dm/bgm-fetch.svg)](https://www.npmjs.com/package/bgm-fetch)
[![Build Status: Linux](https://travis-ci.org/egoist/bgm-fetch.svg?branch=master)](https://travis-ci.org/egoist/bgm-fetch)

本库用于获取番组更新，返回一个 Promise 给米娜桑。

番组资源由 [番组放送](https://github.com/wxt2005/bangumi-list) 提供。

```javascript
import bgm from 'bgm-fetch'

// 获取当前放送中的新番
// 当 format 为 true 将会按星期几分类
bgm({ format: true })
  .then(data => console.log(data))
  .catch(error => console.error(error))

// 指定一季的新番
bgm({
  year: 2015,
  season: 7
})

// 默认 API 地址是 'https://cdn.rawgit.com/bangumi-data/bangumi-data/master/data/items/{year}/{season}.json'
// 为了提高速度你可以弄个镜像并重新设置 API 地址
bgm({ proxy: 'https://xxx.com/api.json' })
```

## License

MIT &copy; [EGOIST](https://github.com/egoist)
