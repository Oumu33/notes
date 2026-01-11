# DHCP中继服务配置

> 来源: Linux
> 创建时间: 2021-02-13T14:47:06+08:00
> 更新时间: 2026-01-11T09:36:35.259984+08:00
> 阅读量: 801 | 点赞: 0

---



<font style="color:#000000;"></font>

# 一、实验目的
1.  掌握跨网段DHCP服务器中继的基本配置

# 二、实验内容
1.  DHCP服务器对应主机IP为192.168.10.10

2.  网段1为192.168.10.0/24；

网段2为192.168.20.0/24

3.  每个用户默认租约为6000秒，最长为72000秒

4.  要分配的IP只有192.168.10.100到192.168.10.150；

以及192.168.10.100到192.168.10.150

5.  有一台windows电脑，设置其主机IP固定为192.168.10.111

# 三、实验环境与准备
1.  centos7主机一台作为DHCP服务器

2.  centos6主机一台作为DHCP中继服务器

3.  10网段客户机：1台windows7客户机、1台centos7客户机

4.  20网段客户机：1台windowsxp客户机、1台centos6客户机，

# 四、实验分析与设计思路
1.   网络拓扑图

![](https://via.placeholder.com/800x600?text=Image+9969f89f9fefba9f)

2.   实验思路

![](https://via.placeholder.com/800x600?text=Image+b2deda1a8c9b142e)

# 五、实验准备
1.  设置两个不同网段

![](https://via.placeholder.com/800x600?text=Image+c52a89675adfb0de)

2.  关闭所有主机防火墙

![](https://via.placeholder.com/800x600?text=Image+4fdc3ee33eaa94c8)

3.  指定DHCP服务器地址

![](https://via.placeholder.com/800x600?text=Image+d806b7ac703727f3)

4.  指定DHCP中继器地址

![](https://via.placeholder.com/800x600?text=Image+10878bb719083c37)

5.  开启中继模式

![](https://via.placeholder.com/800x600?text=Image+172c5f5b76d57292)

6.  测试网段连通

①  Ping同一网段

![](https://via.placeholder.com/800x600?text=Image+c620bd2d5f53056b)

②  Ping不同网段

![](https://via.placeholder.com/800x600?text=Image+49f85bd14552d605)

# 六、实验过程
1.  安装DHCP相关软件

![](https://via.placeholder.com/800x600?text=Image+dd677abe56df8444)

2.  配置DHCP文件

①  配置DHCP服务文件

![](https://via.placeholder.com/800x600?text=Image+443c77f635948a5b)

②  配置DHCP中继文件

![](https://via.placeholder.com/800x600?text=Image+ece550f99fd747ed)

3.  启动DHCP相关服务

①  启动DHCP服务

![](https://via.placeholder.com/800x600?text=Image+56b28ddfa5736477)

②  启动DHCP中继服务

![](https://via.placeholder.com/800x600?text=Image+2ea8043644c14023)

# 七、实验结果及分析
1.  查看服务器端口信息

![](https://via.placeholder.com/800x600?text=Image+caec0035dd016a74)

2.  查看服务器日志信息

![](https://via.placeholder.com/800x600?text=Image+9b562d55d9432fbd)

3.  查看客户机IP信息

①  10网段centos7

![](https://via.placeholder.com/800x600?text=Image+9de614e614fb5cee)

②  10网段windows7

![](https://via.placeholder.com/800x600?text=Image+fddb30f917ea450f)

③  20网段centos6

![](https://via.placeholder.com/800x600?text=Image+d35ca2684c90557c)

④  20网段windowsxp

 

![](https://via.placeholder.com/800x600?text=Image+310c57cd17561bc5)

# 八、总结
1.  本次实验的前提是不同网段通过中继可以通信，使用中继模式需要开启核心转发功能  echo "1" > /proc/sys/net/ipv4/ip_forward

2.  中继DHCP配置文件中， DHCRELAYARGS字段输入的是DHCP服务器的ip地址

3.  开启中继的命令为dhcrelay DHCP服务器的ip地址


