# vue配置文件
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



