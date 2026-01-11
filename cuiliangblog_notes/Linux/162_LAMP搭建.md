# LAMP搭建

> 来源: Linux
> 创建时间: 2021-02-13T14:50:56+08:00
> 更新时间: 2026-01-11T09:39:45.681773+08:00
> 阅读量: 702 | 点赞: 0

---

## 源码部署
### 实验内容
1.  搭建一个Discuz论坛。

2.  搭建一个phpMyAdmin工具。

### 实验环境
1.  LAMP服务器centos6对应主机ip为10.10.64.203

2.  客户机win10对应主机ip为10.10.64.197

### 实验分析与设计思路
1.   实验思路

![](https://via.placeholder.com/800x600?text=Image+1c8e57981681c22c)

### 实验准备
1.   设置环境为同一网段，连接公网，DHCP获取ip

2.   关闭所有主机防火墙

3.   测试网络连通性

4.   搭建网络YUM仓库

### 软件安装
1.   Httpd安装

①   卸载自带httpd程序

![](https://via.placeholder.com/800x600?text=Image+322024875afab314)

②   安装httpd的依赖库程序和安装环境、编译工具

2.   Php安装

![](https://via.placeholder.com/800x600?text=Image+6e5775066c3970be)

3.   Php加速器安装

![](https://via.placeholder.com/800x600?text=Image+ee088a9d071f729c)

4.   Mariadb安装

![](https://via.placeholder.com/800x600?text=Image+c562c93935fb90fc)

5.   其他组件安装

![](https://via.placeholder.com/800x600?text=Image+9bb113ddbe223b80)

### 环境测试
1.   Httpd测试

①   开启主机名

![](https://via.placeholder.com/800x600?text=Image+448fc6d679fc2c50)

②   编写测试页

![](https://via.placeholder.com/800x600?text=Image+9f6062d0b9ee228d)

③   访问测试

![](https://via.placeholder.com/800x600?text=Image+e6d43bd64e7fb703)

2.   Php测试

①   查看php和httpd的勾连

![](https://via.placeholder.com/800x600?text=Image+d3a5d80e9f23e3f7)

②   修改httpd主配置文件，让索引页支持php

![](https://via.placeholder.com/800x600?text=Image+f3b3bf03fb942712)

③   编写PHP测试页，验证php和httpd的勾连

![](https://via.placeholder.com/800x600?text=Image+c719dcac80bd8cbc)

![](https://via.placeholder.com/800x600?text=Image+240d7df1448e9097)

④   浏览器验证

![](https://via.placeholder.com/800x600?text=Image+a34d8e760ba34358)

3.   Mariadb测试

①   修改主配置文件

![](https://via.placeholder.com/800x600?text=Image+2c2be870a00d2499)

②   启动mariadb服务

![](https://via.placeholder.com/800x600?text=Image+b1834510e4174195)

③   修改数据库账号密码

![](https://via.placeholder.com/800x600?text=Image+1c674fc635b59b07)

④   编写数据库测试页

![](https://via.placeholder.com/800x600?text=Image+8aa8d4494928780b)

![](https://via.placeholder.com/800x600?text=Image+b6e6cd7111047d4b)

⑤   访问验证

![](https://via.placeholder.com/800x600?text=Image+1c52891943932ece)

### 项目上线
1.   数据库设置

①   创建论坛数据表

![](https://via.placeholder.com/800x600?text=Image+378edeefd954b5eb)

②   创建论坛管理员用户

![](https://via.placeholder.com/800x600?text=Image+79ac0377904eabc0)

2.   Php设置

①   配置php主文件，使其支持短格式选项

![](https://via.placeholder.com/800x600?text=Image+d807990bc2422cb6)

![](https://via.placeholder.com/800x600?text=Image+adab47b4963bc961)

 

3.   项目配置

①   论坛项目配置

![](https://via.placeholder.com/800x600?text=Image+62cb14543ea5c85a)

![](https://via.placeholder.com/800x600?text=Image+0ec9485a0f29c9d4)

②   部署phpmyadmin

![](https://via.placeholder.com/800x600?text=Image+55aadf91fe763d62)

l  修改cookie随机数

![](https://via.placeholder.com/800x600?text=Image+368cf991f31044d4)

![](https://via.placeholder.com/800x600?text=Image+9d7cd8f8fee2a4a2)

![](https://via.placeholder.com/800x600?text=Image+bdff0dea74202be7)

## yum部署
<font style="color:#000000;"></font>

### 实验内容
1.  搭建一个Discuz论坛。

2.  搭建一个phpMyAdmin工具。

### 实验环境
1.  LAMP服务器centos7对应主机ip为10.10.64.203

2.  客户机win10对应主机ip为10.10.64.197

### 实验分析与设计思路
1.   实验思路

![](https://via.placeholder.com/800x600?text=Image+7d00dcb014b14be4)

### 实验准备
1.   设置环境为同一网段，连接公网，DHCP获取ip

2.   关闭所有主机防火墙

3.   测试网络连通性

4.   搭建网络YUM仓库

### 软件安装
1.   Httpd安装

![](https://via.placeholder.com/800x600?text=Image+73d9208c3e43a475)

2.   Php安装

![](https://via.placeholder.com/800x600?text=Image+68a80909d71ed297)

3.   Php加速器安装

![](https://via.placeholder.com/800x600?text=Image+e18fd58ea9c8e571)

4.   Mariadb安装

![](https://via.placeholder.com/800x600?text=Image+bde0340e841df306)

5.   其他组件安装

yum -y install mariadb-server mariadb php php-mysql mysql-devel php-mysql php-gd libjpeg* php-imap php-ldap php-odbc php-pear php-xml php-xmlrpc php-mbstring php-mcrypt php-bcmath php-mhash libmcrypt

![](https://via.placeholder.com/800x600?text=Image+2ceb00b540d4965b)

### 环境测试
1.   Httpd测试

①   开启主机名

![](https://via.placeholder.com/800x600?text=Image+4dc7860cf5d2df15)

②   编写测试页

![](https://via.placeholder.com/800x600?text=Image+405825243688d9cc)

③   访问测试

![](https://via.placeholder.com/800x600?text=Image+cffb485338468f1f)

2.   Php测试

①   查看php和httpd的勾连

![](https://via.placeholder.com/800x600?text=Image+7ad67e3bcfdae65b)

②   修改httpd主配置文件，让索引页支持php

![](https://via.placeholder.com/800x600?text=Image+6330dfda70df2bf7)

③   编写PHP测试页，验证php和httpd的勾连

![](https://via.placeholder.com/800x600?text=Image+49ce1af5f9afa4ed)

![](https://via.placeholder.com/800x600?text=Image+be313400380daae6)

④   浏览器验证

![](https://via.placeholder.com/800x600?text=Image+ce36991159b4ef49)

3.   Mariadb测试

①   修改主配置文件

![](https://via.placeholder.com/800x600?text=Image+d29b441e08e6758d)

②   启动mariadb服务

![](https://via.placeholder.com/800x600?text=Image+15dd701b83eb811f)

③   修改数据库账号密码

![](https://via.placeholder.com/800x600?text=Image+111fd455913e314a)

④   编写数据库测试页

![](https://via.placeholder.com/800x600?text=Image+b308d4fd393655c2)

![](https://via.placeholder.com/800x600?text=Image+cb1883fdc2595ab6)

⑤   访问验证

![](https://via.placeholder.com/800x600?text=Image+a1c0848252db94bd)

### 项目上线
1.   数据库设置

①   创建论坛数据表

![](https://via.placeholder.com/800x600?text=Image+5c36c843ac2b75f8)

②   创建论坛管理员用户

![](https://via.placeholder.com/800x600?text=Image+cac0b9d8a6a6958a)

2.   Php设置

①   配置php主文件，使其支持短格式选项

![](https://via.placeholder.com/800x600?text=Image+36d3e9075d95588a)

![](https://via.placeholder.com/800x600?text=Image+a609e151232f6bc7)

 

3.   项目配置

①   论坛项目配置

![](https://via.placeholder.com/800x600?text=Image+506aaa8f0b1a0fcd)

![](https://via.placeholder.com/800x600?text=Image+8c3785a7f4f94001)

②   部署phpmyadmin

![](https://via.placeholder.com/800x600?text=Image+3fc4269a573d4f3e)

l  修改cookie随机数

![](https://via.placeholder.com/800x600?text=Image+d888aa8bfe0e6885)

![](https://via.placeholder.com/800x600?text=Image+d8070791852dd81c)

![](https://via.placeholder.com/800x600?text=Image+5db2dd0b93697b2c)


