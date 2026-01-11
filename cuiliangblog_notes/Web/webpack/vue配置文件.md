# vue配置文件

> 分类: Web > webpack
> 更新时间: 2026-01-10T23:34:07.557000+08:00

---

## 项目根目录下创建vue.config.js
## 配置别名
```javascript
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'images': '@/assets/images',
        'style': '@/assets/style'
      }
    }
  },
  publicPath: './'
}
```



