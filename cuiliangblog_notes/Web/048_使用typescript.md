# 使用typescript

> 来源: Web
> 创建时间: 2021-02-26T15:04:30+08:00
> 更新时间: 2026-01-11T09:25:04.033244+08:00
> 阅读量: 580 | 点赞: 0

---

## 安装typescript
`npm install typescript`

## 初始化ts配置文件
`tsc -init` 

然后将tsconfig.json中的"strict"改为false

## 修改 main.js文件类型
将 `main.js` 改为 `main.ts`

## 修改index.html引入
将 `index.html` 中引入的 `main.js` 改为 `main.ts`。

## 添加类型声明文件
> ts只认识以`.ts`结尾的文件，并不认识`.vue`结尾的文件，因此要在项目的`/src`文件下创建一个`.d.ts`文件来定义一下`.vue`文件：
>



```typescript
// src/main.d.ts
declare module '*.vue' {
    import {ComponentOptions} from 'vue';
    const componentOptions: ComponentOptions;
    export default componentOptions; 
}
```

## 编写ts测试代码
现在就可以 `app.vue` 中使用 TypeScript

```vue
<script lang="ts">
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  setup(){
    const msg:string = 'hello'
    alert(msg)
  }
}
</script>
```


