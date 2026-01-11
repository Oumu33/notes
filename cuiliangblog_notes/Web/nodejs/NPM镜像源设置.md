# NPM镜像源设置

> 分类: Web > nodejs
> 更新时间: 2026-01-10T23:34:06.919945+08:00

---

# 一、淘宝镜像：
1. 临时使用：

```plain
npm --registry https://registry.npm.taobao.org install express
```

2. 持久使用：

```plain
npm config set registry https://registry.npm.taobao.org
```

# 二、使用cnpm：
```plain
npm install -g cnpm --registry https://registry.npm.taobao.org
```

# 三、使用nrm -- NPM registry 管理工具
+ 安装

```plain
npm install -g nrm
```

+ 使用

```plain
bogon:bilibili cuiliang$ nrm ls

  npm -------- https://registry.npmjs.org/
  yarn ------- https://registry.yarnpkg.com/
* cnpm ------- http://r.cnpmjs.org/
  taobao ----- https://registry.npm.taobao.org/
  nj --------- https://registry.nodejitsu.com/
  npmMirror -- https://skimdb.npmjs.com/registry/
  edunpm ----- http://registry.enpmjs.org/

bogon:bilibili cuiliang$ nrm use taobao
                        

   Registry has been set to: https://registry.npm.taobao.org/

bogon:bilibili cuiliang$ nrm ls

  npm -------- https://registry.npmjs.org/
  yarn ------- https://registry.yarnpkg.com/
  cnpm ------- http://r.cnpmjs.org/
* taobao ----- https://registry.npm.taobao.org/
  nj --------- https://registry.nodejitsu.com/
  npmMirror -- https://skimdb.npmjs.com/registry/
  edunpm ----- http://registry.enpmjs.org/
```

