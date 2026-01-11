# vite.config.js 配置

> 来源: Web
> 创建时间: 2021-02-28T11:43:03+08:00
> 更新时间: 2026-01-11T09:25:04.144477+08:00
> 阅读量: 583 | 点赞: 0

---

## 别名配置
```javascript
const {resolve} = require('path')
export default {
  alias: {
    '/@/': resolve(__dirname, 'src'),
    '/components/': resolve(__dirname, "src/components"),
    '/style/': resolve(__dirname, "src/assets/style"),
    '/images/': resolve(__dirname, "src/assets/images")
  }
}

//使用
import HelloWorld from '/components/HelloWorld.vue'
```




