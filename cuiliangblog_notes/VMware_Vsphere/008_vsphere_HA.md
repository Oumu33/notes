# vsphere HA

> 来源: VMware Vsphere
> 创建时间: 2021-02-16T17:12:08+08:00
> 更新时间: 2026-01-12T14:33:59.580971+08:00
> 阅读量: 906 | 点赞: 0

---

# 一、概述
1. 高可用级别

![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613467146993-29cf048a-fc50-4eeb-a201-987d62517b5e.png)

1. esxi主机故障

![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613467141487-d79f343e-f3a4-4ddb-9bdd-a2bb6e7a7fe5.png)

1. 虚拟机出现故障

![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613467142904-1ed5f790-cc48-4196-84ea-96726ec9aa1f.png)

# 二、HA体系结构
1. 代理通信

![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613467146874-1a21461d-33ae-4a4c-8ce7-c55bed3965e6.png)

1. 网络检测信号

![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613467143419-672d3ba6-a358-4c04-8810-3f57c6966b68.png)

1. 数据存储信号检测

![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613467141865-77e7f22c-f86c-4ff3-bbbc-59c108537a2c.png)

# 三、HA开启
1. 数据中心——创建集群

![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613467147212-86b31286-853a-4e94-8668-4620cec545cb.png)

1. 勾选HA选项

![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613467127435-f02e322f-56ec-48cb-9204-5ef2ce922875.png)

# 四、HA故障模拟
1. 前提条件
+ 每个主机都能访问共享存储，虚拟机安装在共享存储上
+ 每个虚拟机安装vm tools


