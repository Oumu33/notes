# 加入SASS

> 来源: Web
> 创建时间: 2021-02-28T15:50:24+08:00
> 更新时间: 2026-01-11T09:25:03.285074+08:00
> 阅读量: 584 | 点赞: 0

---

## 安装sass
```javascript
npm install sass -D
npm install sass-loader -D
npm install node-sass -D
```

## 安装normalize.css初始化样式
`npm install --save normalize.css` 

## 新建style目录保存各种样式
![](https://via.placeholder.com/800x600?text=Image+3aec89827ed10fac)

## index.scss中组织这些样式，并编写全局样式
```less
@import "./normalize.css";
@import "./element-ui.scss";
@import "./transition.scss";
@import "./variable.scss";
@import "./theme.scss";

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: $color-background-base;
}
```

## main.js中引入index.scss
```javascript
import {createApp} from 'vue'
import App from './App.vue'
import router from '@/router';
import store from '@/store';
import '@/assets/style/index.scss'

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
```

## vite.config.js添加全局scss变量文件
```javascript
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
	alias: {
		'@': path.resolve(__dirname, 'src')
	},
	plugins: [vue()],
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@import "@/assets/style/variable.scss";`
			}
		}
	}
})
```

## Home.vue使用全局变量
```vue
<template>
  <h1>这是首页</h1>
  <button @click="valueAdd">{{ value }}</button>
</template>

<script setup>
import store from '@/store/index'
import {computed} from "vue";

const value = computed(() => store.state.count)
const valueAdd = () => {
  store.commit('add')
}
</script>

<style scoped lang="scss">

h1 {
  color: $color-primary;
}
</style>
```


