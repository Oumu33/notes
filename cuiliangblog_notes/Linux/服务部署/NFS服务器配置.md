# NFS服务器配置
<font style="color:#000000;"></font>

# 一、实验目的
1.  掌握缓存DNS服务配置

# 二、实验内容
1.  构建两台web服务器，搭建基于LAMP架构的Discuz论坛，客户随机访问两台web服务器内容完全一致

# 三、实验环境
1.  Web1服务器centos7对应主机ip为10.10.64.193

2.  Web2服务器centos7对应主机ip为10.10.64.192

3.  Nfs、数据库服务器centos7对应主机ip为10.10.64.190

# 四、实验分析与设计思路
1.   网络拓扑图

![](../../images/img_3262.jpeg)

2.   实验思路

![](../../images/img_3263.png)

# 五、实验准备
1.   设置环境为同一网段，连接公网，DHCP获取ip

2.   关闭所有主机防火墙

3.   测试网络连通性

# 六、软件安装
1.   Web1服务器安装httpd、php、其他组件

![](../../images/img_3264.png)

![](../../images/img_3265.png)

2.   Web2服务器安装httpd、php、其他组件

![](../../images/img_3264.png)

![](../../images/img_3265.png)

3.   nsf、数据库服务器安装mysql、nfs、其他组件

![](../../images/img_3266.png)

# 七、lamp架构搭建测试
1.   Httpd测试

①   开启主机名

![](../../images/img_3267.png)

 

②   编写测试页

![](../../images/img_3268.png)

③   访问测试

![](../../images/img_3269.png)

## 2.   Php测试
①   查看php和httpd的勾连

![](../../images/img_3270.png)

②   修改httpd主配置文件，让索引页支持php

![](../../images/img_3271.png)

③   编写PHP测试页，验证php和httpd的勾连

![](../../images/img_3272.png)

![](../../images/img_3273.png)

④   浏览器验证

![](../../images/img_3274.png)

## 3.   Mysql测试
①   修改主配置文件

![](../../images/img_3275.png)

②   启动mariadb服务

![](../../images/img_3276.png)

③   删除用户名为空的账号

![](../../images/img_3277.png)

④   修改数据库用户密码

![](../../images/img_3278.png)

⑤   授权远程登录用户

![](../../images/img_3279.png)

⑥   Web服务器连接测试

![](../../images/img_3280.png)

⑦   编写数据库测试页

![](../../images/img_3281.png)

![](../../images/img_3282.png)

⑧   访问验证

![](../../images/img_3283.png)

# 八、Nfs搭建配置
## 1.   Nfs部署
①   启动服务

![](../../images/img_3284.png)

②   编辑/etc/exports配置文件

![](../../images/img_3285.png)

l  ①rw    指定的主机可读、可写

l  ②ro    指定的主机仅可读

l  ③async  异步访问 （这个选项可以改进性能，如果没有完全关闭NFS守护进程重启NFS服务器，可能会造成数据丢失，可不加）

l  ④root_squash：挤压root用户权限（默认开启的选项）

l  ⑤all_squash：挤压所有用户权限

③   创建nfs目录

![](../../images/img_3286.png)

④   Web服务器端查询是否可以挂载

![](../../images/img_3287.png)

⑤   Web服务器挂载nfs目录

![](../../images/img_3288.png)

⑥   Web服务器验证

![](../../images/img_3289.png)

![](../../images/img_3290.png)

⑦   设置开机自动挂载

![](../../images/img_3291.png)

![](../../images/img_3292.png)

## 2.   修改web网站文件路径
![](../../images/img_3293.png)

![](../../images/img_3294.png)

# 九、项目上线
## 1.   数据库配置
①   创建论坛数据表

![](../../images/img_3295.png)

②   创建论坛管理员用户

![](../../images/img_3296.png)

## 2.   php配置
①   配置php配置文件，使其支持短格式选项

![](../../images/img_3297.png)

![](../../images/img_3298.png)

## 3.   论坛其他相关配置
![](../../images/img_3299.png)

## 4.   进行验证
![](../../images/img_3300.png)

![](../../images/img_3301.png)

