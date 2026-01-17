# jenkins构建触发器
# 触发器简介
之前的案例中我们都是在web页面点击立即构建，手动触发Build，通常在实际生产环境中，我们会使用触发器自动构建，Jenkins内置4种构建触发器：

+ 触发远程构建
+ 其他工程构建后触发（Build after other projects are build）
+ 定时构建（Build periodically）
+ 轮询SCM（Poll SCM）

# 触发远程构建
## 配置构建触发器
修改构建任务配置，在构建触发器选项中勾选触发远程构建，并指定token。



## 构建测试
请求url地址http://jenkins服务器ip:jenkins服务端口/job/任务名称/build?token=设置的令牌，此处请求的地址为[http://192.168.8.135:8080/job/pipeline_demo/build?token=123456](http://192.168.8.135:8080/job/pipeline_demo/build?token=123456)

查看构建信息，输出从远程构建内容。

![img_1024.png](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_1024.png)

# 其他工程构建后触发
## 创建前置构建任务
此处以之前配置的自由风格构建任务gitee-demo为例



## 修改后置构建任务
修改pipeline_demo任务的构建触发器配置，勾选build after other projects are built，填写前置构建任务名称。

![img_2800.png](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_2800.png)

## 构建测试
进入gitee-demo前置任务，点击立即构建。

![img_2720.png](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_2720.png)

点击查看后置任务pipeline_demo任务构建信息，显示由上游任务触发构建。

![img_2256.png](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_2256.png)

# 定时构建
## 配置构建触发器
修改构建任务构建触发器配置，改为Build periodically，填写crontab表达式，此处以每分钟构建一次为例

![img_1696.png](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_1696.png)

## 构建测试
等待一分钟后，查看构建任务信息，触发了一次自动构建，查看构建信息，输出<font style="color:rgb(20, 20, 31);">Started by timer</font>



# 轮询SCM构建
轮询SCM，是指定时扫描本地代码仓库的代码是否有变更，如果代码有变更就触发项目构建。需要注意的是，Jenkins会定时扫描本地整个项目的代码，增大系统的开销，不建议高频使用。

## 配置构建触发器
依旧配置每分钟查询一次SCM信息，判断是否需要触发构建。



## 构建测试
修改git仓库代码并提交



查看jenkins构建任务信息，触发SCM构建

![img_2496.png](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_2496.png)


