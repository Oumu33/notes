# Alertmanager高可用

> 来源: Prometheus
> 创建时间: 2020-12-12T18:30:52+08:00
> 更新时间: 2026-01-11T09:31:13.108009+08:00
> 阅读量: 941 | 点赞: 0

---

# 一、Gossip
1. Alertmanager引入了Gossip机制。Gossip机制为多个Alertmanager之间提供了信息传递的机制。确保及时在多个Alertmanager分别接收到相同告警信息的情况下，也只有一个告警通知被发送给Receiver。

![](https://via.placeholder.com/800x600?text=Image+d24ac993794b3d6a)

 


