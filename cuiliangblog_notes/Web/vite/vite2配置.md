# vite2配置

> 分类: Web > vite
> 更新时间: 2026-01-10T23:34:09.600863+08:00

---

## alias别名配置
1. 在根目录下vite.config.js文件中添加alias

```javascript
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
	alias: {
		'@': path.resolve(__dirname, 'src')
	},
	plugins: [vue()]
})

```

2. 使用方法：修改src/App.vue

```vue
<script setup>
// 原方式
// import HelloWorld from './components/HelloWorld.vue'
// 别名引用
import HelloWorld from '@/components/HelloWorld.vue'
</script>
```

3. 如果使用webstorm并不能自动识别别名。需要手动指定webstorm配置文件

![](../../images/img_4867.png)

+ <font style="color:#4D4D4D;">在项目的根目录新建一个新文件 webstorm.config.js</font>

```javascript
'use strict'
const path = require('path')

function resolve (dir) {
	return path.join(__dirname, '.', dir)
}

module.exports = {
	context: path.resolve(__dirname, './'),
	resolve: {
		extensions: ['.js', '.vue', '.json'],
		alias: {
			'@': resolve('src'),
		}
	}
}
```

+ 进入 WebStorm preferences -> Language & Framework -> JavaScript -> Webpack，选择这个文件即可

![](../../images/img_4868.png)

+ 实际开发过程中发现webstorm对script setup智能提示并不完全适配。预计2021.2版本解决这个问题。参考issue：[https://youtrack.jetbrains.com/issue/WEB-49000](https://youtrack.jetbrains.com/issue/WEB-49000)

