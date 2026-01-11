# graph面板常用操作

> 来源: Prometheus
> 创建时间: 2020-12-12T18:23:33+08:00
> 更新时间: 2026-01-11T09:30:56.814037+08:00
> 阅读量: 968 | 点赞: 0

---

1. 自定义每条线的图例名称

![](https://via.placeholder.com/800x600?text=Image+c10b1b1a77ca61fb)

2. Y轴按百分比显示数值

![](https://via.placeholder.com/800x600?text=Image+849185c345c36b80)

| 数据类型 | 使用场景 |
| --- | --- |
| percent(0-100) | CPU、内存使用率 |
| bytes | 总内存大小 |
| seconds（s） | 系统运行时间 |
| bytes/sec | 磁盘读取速率 |
| bits/sec | 下行带宽速率 |


3. 显示当前时间序列的最小 最大 平均值，并设置显示时保留1位小数

![](https://via.placeholder.com/800x600?text=Image+8f06b1b936b5cdbd)

4. 自定义规则，指定某主机以点的形式显示在图表中

![](https://via.placeholder.com/800x600?text=Image+3e473c24847d9ddb)

5. 定义一个Threshold规则，如果CPU超过50%的区域显示为warning状态

![](https://via.placeholder.com/800x600?text=Image+f78174cdccc4facd)

+ Graph面板则会在图表中显示一条阈值，并且将所有高于该阈值的区域显示为warining状态，通过可视化的方式直观的在图表中显示一些可能出现异常的区域。


