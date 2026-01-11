# 主DNS及DNS缓存服务配置

> 来源: Linux
> 创建时间: 2021-02-13T14:45:38+08:00
> 更新时间: 2026-01-11T09:36:53.631443+08:00
> 阅读量: 706 | 点赞: 0

---



 

****

# 一、实验目的
1.  掌握缓存DNS服务、主DNS服务器的搭建

# 二、实验内容
1.  搭建一台缓存DNS服务器。

2.  搭建一台主DNS服务器。

# 三、实验环境
1.  缓存DNS服务器centos6对应主机ip为10.10.64.226

2.  主DNS服务器centos7对应主机ip为10.10.64.225

3.  客户机win7对应主机ip为10.10.64.227

# 四、实验分析与设计思路
1.   网络拓扑图

![](https://via.placeholder.com/800x600?text=Image+2c33dc1e7df32463)

2.   实验思路

![](https://via.placeholder.com/800x600?text=Image+44b40e22ec62c5e3)

# 五、实验准备
1.   设置环境为同一网段，连接公网，DHCP获取ip

2.   关闭所有主机防火墙

3.   测试网络连通性

# 六、实验过程
1.   安装相关软件包

![](https://via.placeholder.com/800x600?text=Image+7aeb0148d7d43ffa)

2.   配置centos6缓存DNS主配置文件

![](https://via.placeholder.com/800x600?text=Image+517226a29b9e60a6)

![](https://via.placeholder.com/800x600?text=Image+9bcce71894d3a44b)

3.   配置centos7主DNS主配置文件

![](https://via.placeholder.com/800x600?text=Image+92b77f895bf9fc47)

![](https://via.placeholder.com/800x600?text=Image+9bcce71894d3a44b)

4.   配置centos7子配置文件

![](https://via.placeholder.com/800x600?text=Image+e349c20d958e06d6)

![](https://via.placeholder.com/800x600?text=Image+0df3b3a4b44349ab)

5.   配置centos7区域配置文件

![](https://via.placeholder.com/800x600?text=Image+124ade423a262d8a)

![](https://via.placeholder.com/800x600?text=Image+8c7160967ed7b3b9)

6.   开启服务

①   开启缓存dns服务

![](https://via.placeholder.com/800x600?text=Image+008c66533e80067c) 

# 七、实验结果
1.   查看端口状态

①   查看缓存dns服务器状态

![](https://via.placeholder.com/800x600?text=Image+dcc1547f482949ff)

②    

2.   验证缓存DNS服务

①   设置win7主机dns服务器

![](https://via.placeholder.com/800x600?text=Image+c22376d76cada86a)

②   使用命令验证

![](https://via.placeholder.com/800x600?text=Image+6cf1ec1184a76716)

③   设置centos7dns服务器

![](https://via.placeholder.com/800x600?text=Image+3eb7baa3a4e8693e)

④  使用dig 命令

![](https://via.placeholder.com/800x600?text=Image+77e451306f204da9)

⑤  使用nslookup命令

![](https://via.placeholder.com/800x600?text=Image+34f36045a4c0c4e7)

3.   验证主DNS服务

![](https://via.placeholder.com/800x600?text=Image+041dcb9080257bf4)

# 八、实验总结
1.   主配置文件（/etc/named.conf）

![](https://via.placeholder.com/800x600?text=Image+f8e3cf451c3d016e)

![](https://via.placeholder.com/800x600?text=Image+e90055949b2247c8)

![](https://via.placeholder.com/800x600?text=Image+5d4f74f1f178255b)

## 2.   子配置文件（/etc/named.rfc1912.zones）
![](https://via.placeholder.com/800x600?text=Image+b7fc7b04354ccfe4)

## 3.   区域配置文件（/var/named/named.localhost）
![](https://via.placeholder.com/800x600?text=Image+2bf63d1771642747)

①  TTL：缓存的默认生存周期

②  @：当前域（/etc/named.rfc1912.zones文件中定义的域）

③  IN：互联网

④  SOA：一个区域解析库的授权记录，必须要为解析库第一条记录

⑤  rname.invalid：管理员邮箱

⑥  NS：表明当前区域的DNS服务器

⑦  A记录：ipv4正向解析（FQDN ----> IP）

⑧  AAAA：ipv6正向解析（FQDN ----> IPV6）

⑨  PTR：IP ----> FQDN

⑩  CNAME：别名记录

⑪  MX：邮件交换器

## 4.   复制配置文件时用cp-p命令复制属性
![](https://via.placeholder.com/800x600?text=Image+4e8fe4796fd5ba6a)

 


