# HTTP服务配置
 

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

![](../../images/img_3073.jpeg)

# 五、实验准备
1.  设置环境为同一网段，连接公网，DHCP获取ip

2.  关闭所有主机防火墙

3.  测试网络连通性

# 六、httpd基本操作
1.   端口、主机名配置

①   端口可以有多个，但前后要保持一致

![](../../images/img_3074.png)

![](../../images/img_3075.png)

![](../../images/img_3076.png)

②   主机名只能有一个

![](../../images/img_3077.png)

2.   网站根路径配置

![](../../images/img_3078.png)

3.   主页面配置

![](../../images/img_3079.png)

4.   日志配置

![](../../images/img_3080.png)

5.   路径别名

![](../../images/img_3081.png)

# 七、httpd站点访问控制
1.   options选项

l  Indexes 是设定是否允许在目录下面没有index.html 的时候显示目录

l  FollowSymLinks 决定是否可以通过符号连接跨越DocumentRoot

![](../../images/img_3082.png)

l  Indexes效果对比

![](../../images/img_3083.png)

|   | Indexes |
| :---: | --- |
| 开启 | ![](../../images/img_3084.png) |
| 关闭 | ![](../../images/img_3085.png) |


l  FollowSymLinks效果对比

![](../../images/img_3086.png)

|   | FollowSymLinks |
| :---: | --- |
| 开启 | ![](../../images/img_3087.png) |
| 关闭 | ![](../../images/img_3088.png) |


2.   来源地址访问控制

l  所有人都不可以，除了……

Order allow,deny

Allow from 

l  所有人都可以，除了……

          Order deny,allow

       Deny from

![](../../images/img_3089.png)

3.   账号访问控制

![](../../images/img_3090.png)

![](../../images/img_3091.png)

# 八、Linux虚拟主机配置
1.   基于ip虚拟主机

![](../../images/img_3092.png)

2.   基于端口虚拟主机

3.   基于主机名虚拟主机

![](../../images/img_3093.png)

# 九、网站优化与测试
1.   mod_deflate模块压缩页面

![](../../images/img_3094.png)

2.   https配置

①   自建CA

![](../../images/img_3095.png)

![](../../images/img_3096.png)

![](../../images/img_3097.png)

![](../../images/img_3098.png)

②   进行CA签名，获得证书

![](../../images/img_3099.png)

![](../../images/img_3100.png)

![](../../images/img_3101.png)

![](../../images/img_3102.png)

![](../../images/img_3103.png)

![](../../images/img_3104.png)

![](../../images/img_3105.png)

③   配置ssl

![](../../images/img_3106.png)

![](../../images/img_3107.png)

![](../../images/img_3108.png)

![](../../images/img_3109.png)

![](../../images/img_3110.png)

![](../../images/img_3111.png)

![](../../images/img_3112.png)

![](../../images/img_3113.png)

![](../../images/img_3114.png)

![](../../images/img_3115.png)

④   抓包工具模拟颁发证书

![](../../images/img_3116.png)

![](../../images/img_3117.png)

3.   httpd的日志滚动（切割）工具

①   编译安装cronolog

![](../../images/img_3118.png)

②   虚拟主机配置日志文件

![](../../images/img_3119.png)

③   启动服务查看日志

![](../../images/img_3120.png)

④   更改日期，模拟第二天访问

![](../../images/img_3121.png)

4.   使用第三方的图形工具AWStats来进行日志分析

①   解压并查看相关配置文件信息

![](../../images/img_3122.png)

![](../../images/img_3123.png)

![](../../images/img_3124.png)

②   添加执行权限

![](../../images/img_3125.png)

③   执行预配置脚本

![](../../images/img_3126.png)

![](../../images/img_3127.png)

![](../../images/img_3128.png)

④   修改配置文件

http://localhost/awstats/awstats.pl?config=log.com

![](../../images/img_3129.png)

![](../../images/img_3130.png)

![](../../images/img_3131.png)

⑤   执行日志统计分析

![](../../images/img_3132.png)

⑥   浏览器访问分析工具

![](../../images/img_3133.png)

⑦   编写周期性计划任务，每5分钟读取刷新一次日志

![](../../images/img_3134.png)

![](../../images/img_3135.png)

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

![](../../images/img_3136.png)

②   测试自建服务器

![](../../images/img_3137.png)

6.   Status页面

①   status页面作用：便于分析httpd服务器的进程状况、负载状况，方便管理员进行web服务器的管理和监控。

②   status页面定义方式：使用location容器进行定义，可以在中心主机，也可以在虚拟主机中进行定义。

![](../../images/img_3138.png)

![](../../images/img_3139.png)

7.   页面缓存

①   查看expires模块是否开启

![](../../images/img_3140.png)

②   缓存定义在<IfModule></IfModule> 容器中（作用范围是全局）

![](../../images/img_3141.png)

③   访问站点，查看缓存信息

![](../../images/img_3142.png)

④   访问图片，查看缓存信息

![](../../images/img_3143.png)

⑤   加入gif图片，查看缓存信息

![](../../images/img_3144.png)

8.   配置防盗链

①   查看rewrite模块是否开启

![](../../images/img_3145.png)

②   编写规则

![](../../images/img_3146.png)

③   访问测试

![](../../images/img_3147.png)

![](../../images/img_3148.png)

9.   隐藏版本号

①   默认显示详细信息，存在安全隐患

![](../../images/img_3149.png)

②   配置文件，隐藏版本号

l  语法：ServerTokens Major| Minor| Minimal| ProductOnly| Full   （默认为Full）

l  放在最外面，是全局设置

![](../../images/img_3150.png)

![](../../images/img_3151.png)

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

![](../../images/img_3152.png)

l  相关程序路径

![](../../images/img_3153.png)

l  脚本启停文件需自己编写，可从httpd服务指令文件拷贝进行自定义修改即可

![](../../images/img_3154.png) 

![](../../images/img_3155.png)     

![](../../images/img_3156.png)

l  自定义环境变量，全局使用相关指令

![](../../images/img_3157.png)

![](../../images/img_3158.png)

![](../../images/img_3159.png)

l  查看主页

![](../../images/img_3160.png)

![](../../images/img_3161.png)

![](../../images/img_3162.png)

2.   基本操作

①   更改MPM模型

l  MPM是apache的多道处理模块，用于定义apache对客户端请求的处理方式.在linux中apache常用的三种MPM模型分别是prefork、worker和event。默认prefork

![](../../images/img_3163.png)

l  改为event后查看进程信息

![](../../images/img_3164.png)![](../../images/img_3165.png)

3.   访问控制

l  必须出现在Directory容器中

|   | 允许 | 拒绝 |
| --- | --- | --- |
| 所有 | Require all granted | Require all denied |
| 指定IP或网段 | Require ip xxx.xxx.xxx.xxx/xx | Require not ip xxx.xxx.xxx.xxx/xx |
| 特定主机 | Require host HOSTNAME | Require not host HOSTNAME |


 

![](../../images/img_3166.png)

4.   虚拟主机

l  虚拟主机不再需要控制主配置文件的NameVirtualHost开关，

l  但需要额外注意包含关系  ![](../../images/img_3167.png)

①   创建虚拟主机配置文件

![](../../images/img_3168.png)

②   编辑虚拟主机配置文件

![](../../images/img_3169.png)

![](../../images/img_3170.png)

 

