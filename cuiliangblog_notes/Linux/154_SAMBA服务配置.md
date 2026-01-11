# SAMBA服务配置
****

# 一、实验目的
1.  掌握跨网段SAMBA服务器中继的基本配置

# 二、实验内容
1.  内部网段1为192.168.10.0/24；内部网段2为192.168.20.0/24

2.  网段一：SAMBA服务器对应win7主机ip为192.168.10.110，

SAMBA客户机对应centos6主机ip为192.168.10.10

3.  网段二：SAMBA服务器对应centos7主机ip为192.168.20.101，

SAMBA客户机对应windowsxp主机ip为192.168.20.102

4.  进行正常的共享传输操作

# 三、实验环境与准备
1.  网段一：win7主机作为SAMBA服务器，

centos6主机作为SAMBA客户机

2.  网段二：centos7主机作为SAMBA服务器，

windowsxp主机作为SAMBA客户机

3.  一台centos6中继服务器，连通两个网段

# 四、实验分析与设计思路
1.   网络拓扑图

![](https://via.placeholder.com/800x600?text=Image+0dbea91835f37aa1)

2.   实验思路

![](https://via.placeholder.com/800x600?text=Image+777aceadac5ef402)

# 五、实验准备
1.  设置两个不同网段

![](https://via.placeholder.com/800x600?text=Image+39c4d432434a4c3f)

2.  关闭所有主机防火墙

![](https://via.placeholder.com/800x600?text=Image+249617f3d5f6bf56)

3.  设置相关服务器IP地址

![](https://via.placeholder.com/800x600?text=Image+eb904a5fb1cfb672)

4.  指定中继器服务器地址

![](https://via.placeholder.com/800x600?text=Image+fe24e6fd5586447c)

5.  开启中继模式

![](https://via.placeholder.com/800x600?text=Image+dc0ef5b709ad578d)

6.  测试网段连通

①  Ping同一网段

![](https://via.placeholder.com/800x600?text=Image+f9d1fb36b16346fb)

②  Ping不同网段

![](https://via.placeholder.com/800x600?text=Image+20568e11ff091c5a)

# 六、实验过程及结果
1.    Linux作为客户端，windows作为服务端

①   安装文件传输系统

![](https://via.placeholder.com/800x600?text=Image+ee0083839f8d7acf)

②   安装samba客户端

![](https://via.placeholder.com/800x600?text=Image+b43171cc5698c797)

③   Windows新建用户设置密码

![](https://via.placeholder.com/800x600?text=Image+1f3fcd290e6d6e94)

④   Windwos设置文件共享

![](https://via.placeholder.com/800x600?text=Image+5a58c05ba3f32cbb)

⑤   Centos6客户机探测有哪些可以共享的目录

![](https://via.placeholder.com/800x600?text=Image+d134357710abedcb)

⑥   客户端通过命令行访问共享目录

![](https://via.placeholder.com/800x600?text=Image+ca13bcdd8660a956)

⑦   通过命令行上传下载文件

![](https://via.placeholder.com/800x600?text=Image+4a499c71167cb62a)

![](https://via.placeholder.com/800x600?text=Image+090254436d66c134)

⑧   挂载共享目录到当前centos7客户机

![](https://via.placeholder.com/800x600?text=Image+c1a551e3e7ba188d)

![](https://via.placeholder.com/800x600?text=Image+f3b5a8a6dbc710fe)

2.    Linux作为服务端，windows作为客户端

①    安装samba服务端

![](https://via.placeholder.com/800x600?text=Image+22caa755b448e17a)

②    创建共享用户

![](https://via.placeholder.com/800x600?text=Image+b78311316882d27c)

③    创建共享用户密码

![](https://via.placeholder.com/800x600?text=Image+6c106e71f6d6622a)

④    启动samba服务

![](https://via.placeholder.com/800x600?text=Image+0b2167f8b10c0711)

⑤    查看端口状态

![](https://via.placeholder.com/800x600?text=Image+4b6ce545dd38cbd1)

![](https://via.placeholder.com/800x600?text=Image+0c772e20413f9408)

⑥    Windows客户端访问共享目录

![](https://via.placeholder.com/800x600?text=Image+3131491627afd044)

⑦    添加一个共享目录

![](https://via.placeholder.com/800x600?text=Image+9d284223d890f239)

⑧    设置临时用户权限

![](https://via.placeholder.com/800x600?text=Image+050b16262c065f42)

# 七、总结
1.  本次实验的重点在于配置文件的设置，以及用户权限的设置。


