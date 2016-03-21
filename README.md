# bgm-fetch

[![NPM version](https://img.shields.io/npm/v/bgm-fetch.svg)](https://www.npmjs.com/package/bgm-fetch)
[![NPM download](https://img.shields.io/npm/dm/bgm-fetch.svg)](https://www.npmjs.com/package/bgm-fetch)
[![Build Status: Linux](https://travis-ci.org/egoist/bgm-fetch.svg?branch=master)](https://travis-ci.org/egoist/bgm-fetch)

本库用于获取番组更新，返回一个 Promise 给米娜桑。

番组资源由 [番组放送](https://github.com/wxt2005/bangumi-list) 提供。

```javascript
import bgm from 'bgm-fetch'

// 15 年 10 月新番,
// 当 format 为 true 将会按星期几分类
bgm('1510', {format: true})
  .then(data => console.log(data))
  .catch(error => console.error(error))

// 如果不提供日期会自动判断当前处于哪一季
bgm(null)

// 默认 API 地址是 'https://cdn.rawgit.com/wxt2005/bangumi-list/master/json/bangumi-__SEASON__.json'
// 为了提高速度你可以弄个镜像并重新设置 API 地址
bgm(null, {proxy: 'http://your-mirror.xxx/bangumi-__SEASON__.json'})
```

## License

MIT.
