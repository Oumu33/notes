# 高可用集群keepalived
# Keepalived 简要介绍
Keepalived 是一种高性能的服务器高可用或热备解决方案， Keepalived 可以用来防止服务器单点故障的发生，通过配合 Nginx 可以实现 web 前端服务的高可用。

Keepalived 以 VRRP 协议为实现基础，用 VRRP 协议来实现高可用性(HA)。 VRRP(Virtual RouterRedundancy Protocol)协议是用于实现路由器冗余的协议， VRRP 协议将两台或多台路由器设备虚拟成一个设备，对外提供虚拟路由器 IP(一个或多个)，而在路由器组内部，如果实际拥有这个对外 IP 的路由器如果工作正常的话就是 MASTER，或者是通过算法选举产生， MASTER 实现针对虚拟路由器 IP 的各种网络功能，如 ARP 请求， ICMP，以及数据的转发等；其他设备不拥有该虚拟 IP，状态是 BACKUP，除了接收 MASTER 的VRRP 状态通告信息外，不执行对外的网络功能。当主机失效时， BACKUP 将接管原先 MASTER 的网络功能。VRRP 协议使用多播数据来传输 VRRP 数据， VRRP 数据使用特殊的虚拟源 MAC 地址发送数据而不是自身网卡的 MAC 地址， VRRP 运行时只有 MASTER 路由器定时发送 VRRP 通告信息，表示 MASTER 工作正常以及虚拟路由器 IP(组)， BACKUP 只接收 VRRP 数据，不发送数据，如果一定时间内没有接收到 MASTER 的通告信息，各 BACKUP 将宣告自己成为 MASTER，发送通告信息，重新进行 MASTER 选举状态。

# 实验准备
## 环境准备
1.   设置两个不同网段，关闭防火墙，设置路由

2.   调度器开启中继模式

![](https://via.placeholder.com/800x600?text=Image+83305cab403de914)

3.   Web服务器安装httpd，并编写测试页

![](https://via.placeholder.com/800x600?text=Image+ed2d5650c4d80c0f)

![](https://via.placeholder.com/800x600?text=Image+067f752b6e5af37b)

4.   外网客户机访问测试页

![](https://via.placeholder.com/800x600?text=Image+8d005f9a5cf73e78)

5.   安装ipvsadm软件包

![](https://via.placeholder.com/800x600?text=Image+b07b184599756adc)

6.   装载LVS模块

![](https://via.placeholder.com/800x600?text=Image+a1ae2b28aeac95ac)

## 时间同步
1.   安装软件包

![](https://via.placeholder.com/800x600?text=Image+be43315016b7d0a0)

2.   将网络时间同步到ntf服务器

![](https://via.placeholder.com/800x600?text=Image+6988ec57f990a397)

3.   将系统时间写入硬件时间

![](https://via.placeholder.com/800x600?text=Image+639ce66d722e014f)

4.   修改ntp服务主配置文件

![](https://via.placeholder.com/800x600?text=Image+6becab4a2aee4bc2)

![](https://via.placeholder.com/800x600?text=Image+cfb20b29597186f8)

5.   开启服务查看端口

![](https://via.placeholder.com/800x600?text=Image+7fcb8069e2ce3c9c)

6.   其他主机同步ntp服务器时间

![](https://via.placeholder.com/800x600?text=Image+850eccfba5732fd7)

# 漂移IP设置
![](https://via.placeholder.com/800x600?text=Image+64770bfe1ffae38d)

## 部署配置
1.   软件包安装

![](https://via.placeholder.com/800x600?text=Image+d02192bccbc9576c)

2.   修改主调度器配置文件

![](https://via.placeholder.com/800x600?text=Image+9b2cdb0f4306093e)

![](https://via.placeholder.com/800x600?text=Image+f13232a017de754e)

3.   修改备调度器配置文件

![](https://via.placeholder.com/800x600?text=Image+4d27a22670bea384)

![](https://via.placeholder.com/800x600?text=Image+e59c1456c84f7e7c)

4.   启动服务，查看结果

![](https://via.placeholder.com/800x600?text=Image+3f318d64855dad0e)

![](https://via.placeholder.com/800x600?text=Image+8d7904cdd1ab4b6a)

5.   停止主调度器，查看结果

![](https://via.placeholder.com/800x600?text=Image+873805391f223346)

![](https://via.placeholder.com/800x600?text=Image+765c33737661d39d)

![](https://via.placeholder.com/800x600?text=Image+a7feac1847e60f2c)

## 手动开启keepalived日志
1.   修改Keepalived日志配置文件

![](https://via.placeholder.com/800x600?text=Image+c9d745fef52f3b72)

![](https://via.placeholder.com/800x600?text=Image+9b4e591d8bf870b5)

-S 3定义日志facility ID号

2.   修改rsyslog配置文件

![](https://via.placeholder.com/800x600?text=Image+032f64f41ec1969b)

![](https://via.placeholder.com/800x600?text=Image+974b01ec7cca9d71)

3.   验证测试

![](https://via.placeholder.com/800x600?text=Image+48dad99fa2c7dcbd)

## 编写脚本，热切换主备节点
1.   在Keepalived主配置文件中定义切换脚本

![](https://via.placeholder.com/800x600?text=Image+0e45a82fcacd7ada)

2.   在主配置文件的vrrp实例中调用脚本

![](https://via.placeholder.com/800x600?text=Image+ab27ba6cf3bb2f8b)

3.   备节点同样配置

![](https://via.placeholder.com/800x600?text=Image+521c43c61d753967)

4.   创建文件验证结果

# 实现双主模型
1.   修改原主服务器配置文件，增加备实例

![](https://via.placeholder.com/800x600?text=Image+3446b13f7169565f)

2.   修改原从服务器配置文件，增加主实例

![](https://via.placeholder.com/800x600?text=Image+f750ee7cfeb69699)

3.   将切换脚本放到主实例中，进行调用

![](https://via.placeholder.com/800x600?text=Image+d26d47adb9a1dcaa)

4.   重启服务验证

![](https://via.placeholder.com/800x600?text=Image+b79c069c55161f93)

![](https://via.placeholder.com/800x600?text=Image+2af4080b698cba04)

![](https://via.placeholder.com/800x600?text=Image+4b7a543e51f86d1f)

①和备节点进行交叉，双方都属于一主一备，通过优先级进行控制（这样就形成了双主模型）。

         ②在新的instance中使用不同的漂移IP

        ③优先级定义准确

        ④ID号不要重合

# 实现双主模型（LVS-DR）
1.   两个后端web服务器运行自动配置网卡和内核脚本

![](https://via.placeholder.com/800x600?text=Image+cbe4445c763855fe)

2.   主备调度器安装ipvsadm

![](https://via.placeholder.com/800x600?text=Image+6241d5c74d9bc36f)

![](https://via.placeholder.com/800x600?text=Image+1880ba6822a32e9d)

3.   配置主备调度器

![](https://via.placeholder.com/800x600?text=Image+c15b008747c361cf)

4.   查看虚拟ip

![](https://via.placeholder.com/800x600?text=Image+2a54d8a589859c70)

5.   验证操作

![](https://via.placeholder.com/800x600?text=Image+ab09151391aeaa2d)

![](https://via.placeholder.com/800x600?text=Image+68eb849f4a2bb547)

# 配置nginx高可用集群
**参见如下链接**

[**https://blog.csdn.net/l1028386804/article/details/72801492**](https://blog.csdn.net/l1028386804/article/details/72801492)


