# jenkins构建触发器

> 来源: CI/CD
> 创建时间: 2023-07-12T19:58:09+08:00
> 更新时间: 2026-01-11T08:52:03.618252+08:00
> 阅读量: 1715 | 点赞: 0

---

# 触发器简介
之前的案例中我们都是在web页面点击立即构建，手动触发Build，通常在实际生产环境中，我们会使用触发器自动构建，Jenkins内置4种构建触发器：

+ 触发远程构建
+ 其他工程构建后触发（Build after other projects are build）
+ 定时构建（Build periodically）
+ 轮询SCM（Poll SCM）

# 触发远程构建
## 配置构建触发器
修改构建任务配置，在构建触发器选项中勾选触发远程构建，并指定token。

![](https://via.placeholder.com/800x600?text=Image+e542e5bc8253202c)

## 构建测试
请求url地址http://jenkins服务器ip:jenkins服务端口/job/任务名称/build?token=设置的令牌，此处请求的地址为[http://192.168.8.135:8080/job/pipeline_demo/build?token=123456](http://192.168.8.135:8080/job/pipeline_demo/build?token=123456)

查看构建信息，输出从远程构建内容。

![](https://via.placeholder.com/800x600?text=Image+78a14e8b1f15f569)

# 其他工程构建后触发
## 创建前置构建任务
此处以之前配置的自由风格构建任务gitee-demo为例

![](https://via.placeholder.com/800x600?text=Image+e2b8ce4ca61d16fc)

## 修改后置构建任务
修改pipeline_demo任务的构建触发器配置，勾选build after other projects are built，填写前置构建任务名称。

![](https://via.placeholder.com/800x600?text=Image+f058a2a4d09d0e81)

## 构建测试
进入gitee-demo前置任务，点击立即构建。

![](https://via.placeholder.com/800x600?text=Image+bfe2587b2bb6be2e)

点击查看后置任务pipeline_demo任务构建信息，显示由上游任务触发构建。

![](https://via.placeholder.com/800x600?text=Image+f003d69c84bac9a0)

# 定时构建
## 配置构建触发器
修改构建任务构建触发器配置，改为Build periodically，填写crontab表达式，此处以每分钟构建一次为例

![](https://via.placeholder.com/800x600?text=Image+6261f9cf738e9220)

## 构建测试
等待一分钟后，查看构建任务信息，触发了一次自动构建，查看构建信息，输出<font style="color:rgb(20, 20, 31);">Started by timer</font>

![](https://via.placeholder.com/800x600?text=Image+bf5cbdb79317a0f8)

# 轮询SCM构建
轮询SCM，是指定时扫描本地代码仓库的代码是否有变更，如果代码有变更就触发项目构建。需要注意的是，Jenkins会定时扫描本地整个项目的代码，增大系统的开销，不建议高频使用。

## 配置构建触发器
依旧配置每分钟查询一次SCM信息，判断是否需要触发构建。

![](https://via.placeholder.com/800x600?text=Image+16447b38b9629324)

## 构建测试
修改git仓库代码并提交

![](https://via.placeholder.com/800x600?text=Image+90690e5ad85d7250)

查看jenkins构建任务信息，触发SCM构建

![](https://via.placeholder.com/800x600?text=Image+c0e95efc99cca7d8)


