# vite.config.js 配置
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




