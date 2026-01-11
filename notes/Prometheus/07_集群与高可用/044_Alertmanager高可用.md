# Alertmanager高可用
# 一、Gossip
1. Alertmanager引入了Gossip机制。Gossip机制为多个Alertmanager之间提供了信息传递的机制。确保及时在多个Alertmanager分别接收到相同告警信息的情况下，也只有一个告警通知被发送给Receiver。

![](https://via.placeholder.com/800x600?text=Image+d24ac993794b3d6a)

 


