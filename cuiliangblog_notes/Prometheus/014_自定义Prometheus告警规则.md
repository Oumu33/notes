# 自定义Prometheus告警规则

> 来源: Prometheus
> 创建时间: 2020-12-10T21:52:52+08:00
> 更新时间: 2026-01-11T09:30:31.655378+08:00
> 阅读量: 1293 | 点赞: 0

---

# 一、修改配置文件
1. 修改Prometheus配置文件prometheus.yml,指定告警规则文件路径：

![](https://via.placeholder.com/800x600?text=Image+3aadf4a502a65683)

1. 创建告警文件node-disk.rules

![](https://via.placeholder.com/800x600?text=Image+ab74407c07ae7637)

+ 在告警规则文件的annotations中使用summary描述告警的概要信息，description用于描述告警的详细信息。同时Alertmanager的UI也会根据这两个标签值，显示告警信息。为了让告警信息具有更好的可读性，Prometheus支持模板化label和annotations的中标签的值。
+ 通过$labels.<labelname>变量可以访问当前告警实例中指定标签的值。$value则可以获取当前PromQL表达式计算的样本值。

# 二、查看验证告警规则
1. 通过Prometheus WEB界面中的Alerts菜单查看当前Prometheus下的所有告警规则，以及其当前所处的活动状态。

![](https://via.placeholder.com/800x600?text=Image+84023deceb27f089)

1. 模拟磁盘写入大量数据，触发报警

# dd if=/dev/zero of=/test bs=1G count=8

1. 查看磁盘使用情况

100 - (node_filesystem_free_bytes{mountpoint="/",fstype=~"ext4|xfs"} / node_filesystem_size_bytes{fstype=~"ext4|xfs"} * 100)

![](https://via.placeholder.com/800x600?text=Image+9641b2fff9253d48)

1. Prometheus首次检测到满足触发条件后，hostCpuUsageAlert显示由一条告警处于活动状态。由于告警规则中设置了1m的等待时间，当前告警状态为PENDING，如下图所示：

![](https://via.placeholder.com/800x600?text=Image+04b6e967aecf2ae9)

1. 如果1分钟后告警条件持续满足，则会实际触发告警并且告警状态为FIRING，如下图所示：

![](https://via.placeholder.com/800x600?text=Image+3ef3ce268acc03d8)

 

 

 


