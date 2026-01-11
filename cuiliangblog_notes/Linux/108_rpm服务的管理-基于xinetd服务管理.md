# rpm服务的管理-基于xinetd服务管理

> 来源: Linux
> 创建时间: 2021-02-16T09:53:32+08:00
> 更新时间: 2026-01-11T09:35:00.055963+08:00
> 阅读量: 686 | 点赞: 0

---

# 一、安装xinetd与telnet
[root@localhost ~]# yum -y install xinetd

[root@localhost ~]# yum -y install telnet-server

# 二、xinetd服务的启动
[root@localhost ~]# vi /etc/xinetd.d/telnet

service telnet ß服务的名称为telnet

{

flags = REUSE ß标志为REUSE，设定TCP/IP socket可重用

socket_type = stream ß使用TCP协议数据包

wait = no ß允许多个连接同时连接

user = root ß启动服务的用户为root

server = /usr/sbin/in.telnetd ß服务的启动程序

log_on_failure += USERID ß登陆失败后，记录用户的ID

disable = no ß服务不启动

}

重启xinetd服务

[root@localhost ~]# service xinetd restart

# 三、xinetd服务的自启动
1. [root@localhost ~]#      chkconfig telnet on
2. ntsysv

 


