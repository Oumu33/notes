# docker命令总结

> 来源: Docker
> 创建时间: 2021-01-08T13:07:13+08:00
> 更新时间: 2026-01-11T09:30:08.106131+08:00
> 阅读量: 691 | 点赞: 0

---

# 一、基本语法
1. Docker命令有两大类：客户端命令和服务端命令，前者是主要的操作接口，后者用来启动Docker服务。
+ 客户端命令：基本命令格式为docker [OPTIONS] COMMAND [arg...]；
+ 服务端命令：基本命令格式为dockerd [OPTIONS]。
2. 可以通过man docker或docker      help来查看这些命令，通过man docker-COMMAND或docker help COMMAND来查看这些命令的具体用法和支持的参数。

# 二、客户端命令
1. 命令选项

客户端命令负责操作接口，支持如下命令选项：

![](https://via.placeholder.com/800x600?text=Image+827bffd266abdcab)

2. 客户端管理命令

Docker客户端单独提供了一组管理命令，对某个资源集中进行管理，包括快照、配置、容器、镜像、网络、节点、插件、秘密、服务、服务栈、集群、系统、密钥和挂载卷等，如下表所示。

![](https://via.placeholder.com/800x600?text=Image+88875105c7bd7eb7)

3. 客户端常用命令

除了针对某个资源的管理命令外，Docker也兼容了之前版本的做法，为一些常见操作提供了快捷命令，如下表所示。

![](https://via.placeholder.com/800x600?text=Image+4fe6f222bdf7b2ff)

![](https://via.placeholder.com/800x600?text=Image+4c5705c7d03e0db7)

# 三、服务端命令选项
dockerd命令负责启动服务端主进程，支持的命令选项如下表所示。

![](https://via.placeholder.com/800x600?text=Image+ee7eb95a2cbe0184)

![](https://via.placeholder.com/800x600?text=Image+f528a500fc531b23)

![](https://via.placeholder.com/800x600?text=Image+2d4d9548e2230d8a)

![](https://via.placeholder.com/800x600?text=Image+2c767c291412aa9c)

# 四、一张图总结Docker命令
![](https://via.placeholder.com/800x600?text=Image+e8d4b9b17eb0de0b)

 

 


