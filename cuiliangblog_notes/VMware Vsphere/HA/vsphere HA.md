# vsphere HA

> 分类: VMware Vsphere > HA
> 更新时间: 2026-01-10T23:34:40.981112+08:00

---

# 一、概述
1. 高可用级别

![](../../images/img_4210.png)

1. esxi主机故障

![](../../images/img_4211.png)

1. 虚拟机出现故障

![](../../images/img_4212.png)

# 二、HA体系结构
1. 代理通信

![](../../images/img_4213.png)

1. 网络检测信号

![](../../images/img_4214.png)

1. 数据存储信号检测

![](../../images/img_4215.png)

# 三、HA开启
1. 数据中心——创建集群

![](../../images/img_4216.png)

1. 勾选HA选项

![](../../images/img_4217.png)

# 四、HA故障模拟
1. 前提条件
+ 每个主机都能访问共享存储，虚拟机安装在共享存储上
+ 每个虚拟机安装vm tools

