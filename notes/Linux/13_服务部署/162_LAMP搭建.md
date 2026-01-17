# LAMP搭建
## 源码部署
### 实验内容
1.  搭建一个Discuz论坛。

2.  搭建一个phpMyAdmin工具。

### 实验环境
1.  LAMP服务器centos6对应主机ip为10.10.64.203

2.  客户机win10对应主机ip为10.10.64.197

### 实验分析与设计思路
1.   实验思路

![img_3424.png](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_3424.png)

### 实验准备
1.   设置环境为同一网段，连接公网，DHCP获取ip

2.   关闭所有主机防火墙

3.   测试网络连通性

4.   搭建网络YUM仓库

### 软件安装
1.   Httpd安装

①   卸载自带httpd程序

![img_2208.png](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_2208.png)

②   安装httpd的依赖库程序和安装环境、编译工具

2.   Php安装



3.   Php加速器安装

![img_3376.jpeg](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_3376.jpeg)

4.   Mariadb安装



5.   其他组件安装



### 环境测试
1.   Httpd测试

①   开启主机名

![img_3920.png](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_3920.png)

②   编写测试页



③   访问测试



2.   Php测试

①   查看php和httpd的勾连

![img_2944.png](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_2944.png)

②   修改httpd主配置文件，让索引页支持php

![img_3760.png](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_3760.png)

③   编写PHP测试页，验证php和httpd的勾连





④   浏览器验证



3.   Mariadb测试

①   修改主配置文件

![img_4320.png](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_4320.png)

②   启动mariadb服务

![img_2848.png](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_2848.png)

③   修改数据库账号密码



④   编写数据库测试页



![img_1344.png](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_1344.png)

⑤   访问验证

![img_3008.png](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_3008.png)

### 项目上线
1.   数据库设置

①   创建论坛数据表



②   创建论坛管理员用户



2.   Php设置

①   配置php主文件，使其支持短格式选项



![img_704.png](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_704.png)

 

3.   项目配置

①   论坛项目配置

![img_1312.jpeg](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_1312.jpeg)



②   部署phpmyadmin



l  修改cookie随机数

![img_4000.jpeg](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_4000.jpeg)

![img_3328.png](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_3328.png)



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

![img_464.png](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_464.png)

### 实验准备
1.   设置环境为同一网段，连接公网，DHCP获取ip

2.   关闭所有主机防火墙

3.   测试网络连通性

4.   搭建网络YUM仓库

### 软件安装
1.   Httpd安装



2.   Php安装

![img_2992.png](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_2992.png)

3.   Php加速器安装



4.   Mariadb安装



5.   其他组件安装

yum -y install mariadb-server mariadb php php-mysql mysql-devel php-mysql php-gd libjpeg* php-imap php-ldap php-odbc php-pear php-xml php-xmlrpc php-mbstring php-mcrypt php-bcmath php-mhash libmcrypt



### 环境测试
1.   Httpd测试

①   开启主机名



②   编写测试页

![img_3856.png](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_3856.png)

③   访问测试

![img_1328.png](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_1328.png)

2.   Php测试

①   查看php和httpd的勾连



②   修改httpd主配置文件，让索引页支持php



③   编写PHP测试页，验证php和httpd的勾连

![img_1728.png](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_1728.png)

![img_3408.png](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_3408.png)

④   浏览器验证

![img_4144.png](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_4144.png)

3.   Mariadb测试

①   修改主配置文件



②   启动mariadb服务



③   修改数据库账号密码



④   编写数据库测试页

![img_2976.png](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_2976.png)



⑤   访问验证

![img_1568.png](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_1568.png)

### 项目上线
1.   数据库设置

①   创建论坛数据表



②   创建论坛管理员用户



2.   Php设置

①   配置php主文件，使其支持短格式选项



![img_3232.png](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_3232.png)

 

3.   项目配置

①   论坛项目配置





②   部署phpmyadmin

![img_3584.png](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_3584.png)

l  修改cookie随机数








