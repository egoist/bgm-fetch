# bgm-fetch

本库用于获取番组更新，返回一个 Promise 给米娜桑。

番组资源由 [番组放送](https://github.com/wxt2005/bangumi-list) 提供。

```javascript
import fetch from 'bgm-fetch'

fetch
  .get('1510', true) // 15 年 10 月新番, 当 true 将会按星期几分类
  .then(data => console.log(data))
  .catch(error => console.error(error))
```

## License

MIT.
