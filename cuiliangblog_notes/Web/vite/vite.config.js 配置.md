# vite.config.js 配置

> 分类: Web > vite
> 更新时间: 2026-01-10T23:34:10.473795+08:00

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



