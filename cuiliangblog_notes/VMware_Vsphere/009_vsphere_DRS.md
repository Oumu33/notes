# vsphere DRS

> 来源: VMware Vsphere
> 创建时间: 2021-02-16T17:08:41+08:00
> 更新时间: 2026-01-11T09:02:24.009533+08:00
> 阅读量: 869 | 点赞: 0

---

# 一、理论知识
1. DRS启用条件

![](https://via.placeholder.com/800x600?text=Image+7f67527adb084620)

1. 虚拟机关联性

![](https://via.placeholder.com/800x600?text=Image+ed40b65a3b3c123d)

1. HA与DRS关系

![](https://via.placeholder.com/800x600?text=Image+cd7432c858ea506c)

# 二、开启DRS
1. 集群——设置

![](https://via.placeholder.com/800x600?text=Image+2fa2c46ca827e0dd)

1. DRS——编辑

![](https://via.placeholder.com/800x600?text=Image+0cf2b097763d1672)

1. 打开DRS

![](https://via.placeholder.com/800x600?text=Image+5a51c79233725b9b)

# 三、配置DRS规则
1. 配置——虚拟机/主机规则

![](https://via.placeholder.com/800x600?text=Image+2dfe1a2da5eeb4e0)

+ 聚集，多个虚拟机绑定在一起，始终在一个主机运行
+ 分开，与聚集相反
+ 虚拟机到主机，虚拟机与主机进行绑定

![](https://via.placeholder.com/800x600?text=Image+42df14cdf50e8ba4)

1. 优先级配置

![](https://via.placeholder.com/800x600?text=Image+ed43d62fddb0f53f)

+ 必须在组中的主机运行：DRS>HA
+ 应在组中的主机运行：HA>DRS


