# vsphere DRS

> 来源: VMware Vsphere
> 创建时间: 2021-02-16T17:08:41+08:00
> 更新时间: 2026-01-12T14:34:05.348910+08:00
> 阅读量: 871 | 点赞: 0

---

# 一、理论知识
1. DRS启用条件

![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613466699593-5ecb6801-7a0f-4707-91a1-31145ccb991a.png)

1. 虚拟机关联性

![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613466709578-315a7380-72ff-40b8-ac11-6be8c0ea014c.png)

1. HA与DRS关系

![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613466705980-a4ffa45a-2cc4-48e5-8dbb-0a34456d5900.png)

# 二、开启DRS
1. 集群——设置

![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613466712282-4b850ba5-3b13-4859-8cc6-ea66c970e713.png)

1. DRS——编辑

![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613466712032-1419ccc9-1daa-4f5e-948d-d52e99ee40a6.png)

1. 打开DRS

![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613466697538-0e8ba565-ae7a-4b7f-b13f-04001ef17096.png)

# 三、配置DRS规则
1. 配置——虚拟机/主机规则

![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613466711727-6f36dfca-f03c-4770-b96c-6baec2d27c34.png)

+ 聚集，多个虚拟机绑定在一起，始终在一个主机运行
+ 分开，与聚集相反
+ 虚拟机到主机，虚拟机与主机进行绑定

![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613466699032-764aa884-8e95-4d7d-9f3c-3200bf414114.png)

1. 优先级配置

![](https://cdn.nlark.com/yuque/0/2021/png/2308212/1613466697036-0abf2e38-0bba-45d9-9a08-e21099f63926.png)

+ 必须在组中的主机运行：DRS>HA
+ 应在组中的主机运行：HA>DRS


