# LAMP搭建

> 分类: Linux > 服务部署
> 更新时间: 2026-01-10T23:34:59.375822+08:00

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

![](../../images/img_3171.png)

### 实验准备
1.   设置环境为同一网段，连接公网，DHCP获取ip

2.   关闭所有主机防火墙

3.   测试网络连通性

4.   搭建网络YUM仓库

### 软件安装
1.   Httpd安装

①   卸载自带httpd程序

![](../../images/img_3172.png)

②   安装httpd的依赖库程序和安装环境、编译工具

2.   Php安装

![](../../images/img_3173.png)

3.   Php加速器安装

![](../../images/img_3174.png)

4.   Mariadb安装

![](../../images/img_3175.png)

5.   其他组件安装

![](../../images/img_3176.png)

### 环境测试
1.   Httpd测试

①   开启主机名

![](../../images/img_3177.png)

②   编写测试页

![](../../images/img_3178.png)

③   访问测试

![](../../images/img_3179.png)

2.   Php测试

①   查看php和httpd的勾连

![](../../images/img_3180.png)

②   修改httpd主配置文件，让索引页支持php

![](../../images/img_3181.png)

③   编写PHP测试页，验证php和httpd的勾连

![](../../images/img_3182.png)

![](../../images/img_3183.png)

④   浏览器验证

![](../../images/img_3184.png)

3.   Mariadb测试

①   修改主配置文件

![](../../images/img_3185.png)

②   启动mariadb服务

![](../../images/img_3186.png)

③   修改数据库账号密码

![](../../images/img_3187.png)

④   编写数据库测试页

![](../../images/img_3188.png)

![](../../images/img_3189.png)

⑤   访问验证

![](../../images/img_3190.png)

### 项目上线
1.   数据库设置

①   创建论坛数据表

![](../../images/img_3191.png)

②   创建论坛管理员用户

![](../../images/img_3192.png)

2.   Php设置

①   配置php主文件，使其支持短格式选项

![](../../images/img_3193.png)

![](../../images/img_3194.png)

 

3.   项目配置

①   论坛项目配置

![](../../images/img_3195.png)

![](../../images/img_3196.png)

②   部署phpmyadmin

![](../../images/img_3197.png)

l  修改cookie随机数

![](../../images/img_3198.png)

![](../../images/img_3199.png)

![](../../images/img_3200.png)

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

![](../../images/img_3201.png)

### 实验准备
1.   设置环境为同一网段，连接公网，DHCP获取ip

2.   关闭所有主机防火墙

3.   测试网络连通性

4.   搭建网络YUM仓库

### 软件安装
1.   Httpd安装

![](../../images/img_3202.png)

2.   Php安装

![](../../images/img_3203.png)

3.   Php加速器安装

![](../../images/img_3204.png)

4.   Mariadb安装

![](../../images/img_3205.png)

5.   其他组件安装

yum -y install mariadb-server mariadb php php-mysql mysql-devel php-mysql php-gd libjpeg* php-imap php-ldap php-odbc php-pear php-xml php-xmlrpc php-mbstring php-mcrypt php-bcmath php-mhash libmcrypt

![](../../images/img_3206.png)

### 环境测试
1.   Httpd测试

①   开启主机名

![](../../images/img_3207.png)

②   编写测试页

![](../../images/img_3208.png)

③   访问测试

![](../../images/img_3209.png)

2.   Php测试

①   查看php和httpd的勾连

![](../../images/img_3210.png)

②   修改httpd主配置文件，让索引页支持php

![](../../images/img_3211.png)

③   编写PHP测试页，验证php和httpd的勾连

![](../../images/img_3212.png)

![](../../images/img_3213.png)

④   浏览器验证

![](../../images/img_3214.png)

3.   Mariadb测试

①   修改主配置文件

![](../../images/img_3215.png)

②   启动mariadb服务

![](../../images/img_3216.png)

③   修改数据库账号密码

![](../../images/img_3217.png)

④   编写数据库测试页

![](../../images/img_3218.png)

![](../../images/img_3219.png)

⑤   访问验证

![](../../images/img_3220.png)

### 项目上线
1.   数据库设置

①   创建论坛数据表

![](../../images/img_3221.png)

②   创建论坛管理员用户

![](../../images/img_3222.png)

2.   Php设置

①   配置php主文件，使其支持短格式选项

![](../../images/img_3223.png)

![](../../images/img_3224.png)

 

3.   项目配置

①   论坛项目配置

![](../../images/img_3225.png)

![](../../images/img_3226.png)

②   部署phpmyadmin

![](../../images/img_3227.png)

l  修改cookie随机数

![](../../images/img_3228.png)

![](../../images/img_3229.png)

![](../../images/img_3230.png)

