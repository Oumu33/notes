# HTTP服务配置

> 来源: Linux
> 创建时间: 2021-02-13T14:52:08+08:00
> 更新时间: 2026-01-11T09:37:47.332605+08:00
> 阅读量: 721 | 点赞: 0

---

 

<font style="color:#000000;"></font>

# 一、实验目的
1.  掌握缓存DNS服务、主DNS服务器的搭建

# 二、实验内容
1.  搭建一台缓存DNS服务器。

2.  搭建一台主DNS服务器。

# 三、实验环境
1.  缓存DNS服务器centos6对应主机ip为10.10.64.226

2.  主DNS服务器centos7对应主机ip为10.10.64.225

# 四、实验分析与设计思路
1.   网络拓扑图

2.   实验思路

![](https://via.placeholder.com/800x600?text=Image+5f0c589a6d389cd8)

# 五、实验准备
1.  设置环境为同一网段，连接公网，DHCP获取ip

2.  关闭所有主机防火墙

3.  测试网络连通性

# 六、httpd基本操作
1.   端口、主机名配置

①   端口可以有多个，但前后要保持一致

![](https://via.placeholder.com/800x600?text=Image+480e253a66fbcab2)

![](https://via.placeholder.com/800x600?text=Image+4d09eaaea09f8372)

![](https://via.placeholder.com/800x600?text=Image+780ea0bcf757c36c)

②   主机名只能有一个

![](https://via.placeholder.com/800x600?text=Image+66aade4d4ef09c23)

2.   网站根路径配置

![](https://via.placeholder.com/800x600?text=Image+a9e60961c1ffc2e3)

3.   主页面配置

![](https://via.placeholder.com/800x600?text=Image+6a818c60a76f9cdd)

4.   日志配置

![](https://via.placeholder.com/800x600?text=Image+420e5277155db0a6)

5.   路径别名

![](https://via.placeholder.com/800x600?text=Image+e815575b7de06f3b)

# 七、httpd站点访问控制
1.   options选项

l  Indexes 是设定是否允许在目录下面没有index.html 的时候显示目录

l  FollowSymLinks 决定是否可以通过符号连接跨越DocumentRoot

![](https://via.placeholder.com/800x600?text=Image+e9c6c1a931c735b3)

l  Indexes效果对比

![](https://via.placeholder.com/800x600?text=Image+8c1697fa8a659b17)

|   | Indexes |
| :---: | --- |
| 开启 | ![](https://via.placeholder.com/800x600?text=Image+cdbd0874f45e7fca) |
| 关闭 | ![](https://via.placeholder.com/800x600?text=Image+0e15aab86394e157) |


l  FollowSymLinks效果对比

![](https://via.placeholder.com/800x600?text=Image+4b5c611b1f68a6c7)

|   | FollowSymLinks |
| :---: | --- |
| 开启 | ![](https://via.placeholder.com/800x600?text=Image+b4a7bc24cf694532) |
| 关闭 | ![](https://via.placeholder.com/800x600?text=Image+d189e1c9d092d44d) |


2.   来源地址访问控制

l  所有人都不可以，除了……

Order allow,deny

Allow from 

l  所有人都可以，除了……

          Order deny,allow

       Deny from

![](https://via.placeholder.com/800x600?text=Image+02336e6b8a3271c6)

3.   账号访问控制

![](https://via.placeholder.com/800x600?text=Image+ca561e0221f929e4)

![](https://via.placeholder.com/800x600?text=Image+2e8aaa1a8236314e)

# 八、Linux虚拟主机配置
1.   基于ip虚拟主机

![](https://via.placeholder.com/800x600?text=Image+cf6bbe7e50266f4f)

2.   基于端口虚拟主机

3.   基于主机名虚拟主机

![](https://via.placeholder.com/800x600?text=Image+28b4f38def1c95c7)

# 九、网站优化与测试
1.   mod_deflate模块压缩页面

![](https://via.placeholder.com/800x600?text=Image+3f131d41968cbc28)

2.   https配置

①   自建CA

![](https://via.placeholder.com/800x600?text=Image+e0417cf0b76cab17)

![](https://via.placeholder.com/800x600?text=Image+d2a507b6bdfb1e8b)

![](https://via.placeholder.com/800x600?text=Image+c24f19aea432bfb7)

![](https://via.placeholder.com/800x600?text=Image+f97b25232fd20f07)

②   进行CA签名，获得证书

![](https://via.placeholder.com/800x600?text=Image+36e52ee30401cd5e)

![](https://via.placeholder.com/800x600?text=Image+6a06d62341e2934d)

![](https://via.placeholder.com/800x600?text=Image+5362513377f7dedd)

![](https://via.placeholder.com/800x600?text=Image+3f6594ba91eed642)

![](https://via.placeholder.com/800x600?text=Image+98707f121e57aee8)

![](https://via.placeholder.com/800x600?text=Image+90973485683f1bbd)

![](https://via.placeholder.com/800x600?text=Image+b8026eff37fbbbd6)

③   配置ssl

![](https://via.placeholder.com/800x600?text=Image+c485bf2a6de30e93)

![](https://via.placeholder.com/800x600?text=Image+f2f4c58cce7cda78)

![](https://via.placeholder.com/800x600?text=Image+88966f9c5e27bd62)

![](https://via.placeholder.com/800x600?text=Image+c5d00542a8b2b3a1)

![](https://via.placeholder.com/800x600?text=Image+c012e5fc9c6b0c96)

![](https://via.placeholder.com/800x600?text=Image+0f4b6f6be92f5f93)

![](https://via.placeholder.com/800x600?text=Image+dbd4c4e83610665c)

![](https://via.placeholder.com/800x600?text=Image+af08761cbe2a0086)

![](https://via.placeholder.com/800x600?text=Image+08d75aaaef4e4c9a)

![](https://via.placeholder.com/800x600?text=Image+1550ed6e242b6051)

④   抓包工具模拟颁发证书

![](https://via.placeholder.com/800x600?text=Image+95d7fdc3227a7a80)

![](https://via.placeholder.com/800x600?text=Image+6cf0e5825a8d1445)

3.   httpd的日志滚动（切割）工具

①   编译安装cronolog

![](https://via.placeholder.com/800x600?text=Image+56d22560fb39e09c)

②   虚拟主机配置日志文件

![](https://via.placeholder.com/800x600?text=Image+bb04e7a0248a5ada)

③   启动服务查看日志

![](https://via.placeholder.com/800x600?text=Image+2dcedcf248cc635b)

④   更改日期，模拟第二天访问

![](https://via.placeholder.com/800x600?text=Image+223b556208be68a2)

4.   使用第三方的图形工具AWStats来进行日志分析

①   解压并查看相关配置文件信息

![](https://via.placeholder.com/800x600?text=Image+74ec263febfed023)

![](https://via.placeholder.com/800x600?text=Image+d64b02c176475910)

![](https://via.placeholder.com/800x600?text=Image+bdec19f60a54d118)

②   添加执行权限

![](https://via.placeholder.com/800x600?text=Image+9d7ec2adad116fc5)

③   执行预配置脚本

![](https://via.placeholder.com/800x600?text=Image+4f3f0b5495db7089)

![](https://via.placeholder.com/800x600?text=Image+d4f8a167b546531b)

![](https://via.placeholder.com/800x600?text=Image+67623b205c94a757)

④   修改配置文件

http://localhost/awstats/awstats.pl?config=log.com

![](https://via.placeholder.com/800x600?text=Image+0d462878805237ff)

![](https://via.placeholder.com/800x600?text=Image+83292c258d2c606a)

![](https://via.placeholder.com/800x600?text=Image+88e07efac616f689)

⑤   执行日志统计分析

![](https://via.placeholder.com/800x600?text=Image+13083115d71a079e)

⑥   浏览器访问分析工具

![](https://via.placeholder.com/800x600?text=Image+8cf3402b7007cae1)

⑦   编写周期性计划任务，每5分钟读取刷新一次日志

![](https://via.placeholder.com/800x600?text=Image+13da9b9235964bb3)

![](https://via.placeholder.com/800x600?text=Image+54f49cb16c50504e)

**<font style="color:#494949;">在</font>****<font style="color:#494949;">IE</font>****<font style="color:#494949;">中打开：</font>**[**<font style="color:#646953;">http://192.168.1.124/awstats/awstats.pl?config=jzyuan.cn</font>**](http://192.168.1.124/awstats/awstats.pl?config=jzyuan.cn)**<font style="color:#494949;"> </font>****<font style="color:#494949;">报</font>****<font style="color:#494949;">error</font>****<font style="color:#494949;">：</font>**

**<font style="color:#494949;">You don't have permission to access /awstats/awstats.pl on this server.</font>**

<font style="color:#494949;"><Directory "/usr/local/awstats/wwwroot"></font>

<font style="color:#494949;">    Options None</font>

<font style="color:#494949;">    AllowOverride None</font>

<font style="color:#494949;">    Order allow,deny</font>

<font style="color:#494949;">    Allow from all</font>

<font style="color:#494949;"></Directory></font>

 

5.   httpd的压力测试工具

①   命令格式ab [opithon] URL（-n：总请求数 -c：模拟并发数 -k：以持久连接模式测试）

![](https://via.placeholder.com/800x600?text=Image+e2ec40b6ecce8cba)

②   测试自建服务器

![](https://via.placeholder.com/800x600?text=Image+627781190997c4e2)

6.   Status页面

①   status页面作用：便于分析httpd服务器的进程状况、负载状况，方便管理员进行web服务器的管理和监控。

②   status页面定义方式：使用location容器进行定义，可以在中心主机，也可以在虚拟主机中进行定义。

![](https://via.placeholder.com/800x600?text=Image+ac327f5021f2cd28)

![](https://via.placeholder.com/800x600?text=Image+54743c1535349b70)

7.   页面缓存

①   查看expires模块是否开启

![](https://via.placeholder.com/800x600?text=Image+3f57b3f85ba01386)

②   缓存定义在<IfModule></IfModule> 容器中（作用范围是全局）

![](https://via.placeholder.com/800x600?text=Image+4959a6de0357afcf)

③   访问站点，查看缓存信息

![](https://via.placeholder.com/800x600?text=Image+03691d26878779b1)

④   访问图片，查看缓存信息

![](https://via.placeholder.com/800x600?text=Image+836605fff6f3dea2)

⑤   加入gif图片，查看缓存信息

![](https://via.placeholder.com/800x600?text=Image+f695c11bda6395be)

8.   配置防盗链

①   查看rewrite模块是否开启

![](https://via.placeholder.com/800x600?text=Image+418d0c3ca72493d2)

②   编写规则

![](https://via.placeholder.com/800x600?text=Image+5001c31fc8540f33)

③   访问测试

![](https://via.placeholder.com/800x600?text=Image+ecbd734388e751c9)

![](https://via.placeholder.com/800x600?text=Image+934392dc2b5bd438)

9.   隐藏版本号

①   默认显示详细信息，存在安全隐患

![](https://via.placeholder.com/800x600?text=Image+ae22b21b21c8b393)

②   配置文件，隐藏版本号

l  语法：ServerTokens Major| Minor| Minimal| ProductOnly| Full   （默认为Full）

l  放在最外面，是全局设置

![](https://via.placeholder.com/800x600?text=Image+0710a21aabe7cc6f)

![](https://via.placeholder.com/800x600?text=Image+30b9615e5bd99abc)

# 十、Httpd2.4新特性
1.   Httpd2.4安装

①   Centos7自带httpd2.4

②   Centso6需要源代码编译安装

l  安装httpd的依赖库程序和安装环境、编译工具

yum -y install pcre-devel openssl-devel perl gcc gcc-c++

l  编译1.4或以上版本的apr和apr-utils（编译到指定位置，防止和原版本的apr冲突）

./configure --prefix=/usr/local/apr && make && make install

./configure --prefix=/usr/local/apr-util --with-apr=/usr/local/apr/ && make && make install

./configure --prefix=/usr/local/apache --sysconf=/etc/httpd24 --enable-ssl --enable-cgi --enable-rewrite --with-zlib --with-pcre --with-apr=/usr/local/apr --with-apr-util=/usr/local/apr-util/ --enable-modules=most --enable-mpms-shared=all --with-mpm=prefork && make && make install

l  需要自行创建httpd的程序用户

useradd -r httpd      rm -rf /etc/httpd

l  相关配置文件路径

![](https://via.placeholder.com/800x600?text=Image+168a035d17c2a3aa)

l  相关程序路径

![](https://via.placeholder.com/800x600?text=Image+916615701f607338)

l  脚本启停文件需自己编写，可从httpd服务指令文件拷贝进行自定义修改即可

![](https://via.placeholder.com/800x600?text=Image+7b5f6d0e630dec48) 

![](https://via.placeholder.com/800x600?text=Image+dcacf0a4a1dce3d2)     

![](https://via.placeholder.com/800x600?text=Image+a2f42e0171e8c5b2)

l  自定义环境变量，全局使用相关指令

![](https://via.placeholder.com/800x600?text=Image+12f202bc6be82aa2)

![](https://via.placeholder.com/800x600?text=Image+5ede2950fa038234)

![](https://via.placeholder.com/800x600?text=Image+80dbf64492f37865)

l  查看主页

![](https://via.placeholder.com/800x600?text=Image+33faf4b304b388e7)

![](https://via.placeholder.com/800x600?text=Image+8dd5a65e3d001074)

![](https://via.placeholder.com/800x600?text=Image+0f704b16b136af27)

2.   基本操作

①   更改MPM模型

l  MPM是apache的多道处理模块，用于定义apache对客户端请求的处理方式.在linux中apache常用的三种MPM模型分别是prefork、worker和event。默认prefork

![](https://via.placeholder.com/800x600?text=Image+b233c371fdb5de9b)

l  改为event后查看进程信息

![](https://via.placeholder.com/800x600?text=Image+42906562f8cbffb8)![](https://via.placeholder.com/800x600?text=Image+82c2a877f0a95c75)

3.   访问控制

l  必须出现在Directory容器中

|   | 允许 | 拒绝 |
| --- | --- | --- |
| 所有 | Require all granted | Require all denied |
| 指定IP或网段 | Require ip xxx.xxx.xxx.xxx/xx | Require not ip xxx.xxx.xxx.xxx/xx |
| 特定主机 | Require host HOSTNAME | Require not host HOSTNAME |


 

![](https://via.placeholder.com/800x600?text=Image+4791170898ab6a5b)

4.   虚拟主机

l  虚拟主机不再需要控制主配置文件的NameVirtualHost开关，

l  但需要额外注意包含关系  ![](https://via.placeholder.com/800x600?text=Image+146770504d7ff30d)

①   创建虚拟主机配置文件

![](https://via.placeholder.com/800x600?text=Image+8147f3a230ad6ce9)

②   编辑虚拟主机配置文件

![](https://via.placeholder.com/800x600?text=Image+480a20cfffcf7375)

![](https://via.placeholder.com/800x600?text=Image+dc6d32db285caf68)

 


