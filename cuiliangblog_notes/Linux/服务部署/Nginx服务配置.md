# Nginx服务配置
# Nginx简介
## 为什么需要负载均衡
通常情况下早期业务都是单节点运行，但是随着业务的增长，访问量的增多，单纯的提高服务器配置已不能满足要求，经常因为机器性能瓶颈而导致系统宕机，影响业务。此时就面临两个问题：

+ 单节点无法满足日益增长的流量负载，需要有新的服务器均摊访问压力。
+ 当节点宕机后，整个系统无法访问，需要有集群提供服务，当某一节点故障后，服务仍能正常访问。

为了解决上述问题，负载均衡技术<font style="color:rgb(51, 51, 51);">应运而生。目前的负载均衡实现思路主要有两种：</font>

+ <font style="color:rgb(51, 51, 51);">硬件负载，例如F5、A10，性能高但成本高昂。</font>
+ <font style="color:rgb(51, 51, 51);">软件负载，例如nginx、haproxy。</font>

## Nginx特点
<font style="color:rgb(18, 18, 18);">Nginx是一款轻量级的Web服务器、反向代理服务器，由于它的内存占用少，启动极快，高并发能力强，在互联网项目中广泛应用。</font>

# Nginx部署
## yum方式部署
```bash
安装pepl源
# yum -y install epel-release
安装nginx
# yum -y install nginx
查看nginx版本
# nginx -v
nginx version: nginx/1.14.1
启动nginx
# systemctl start nginx
设置nginx开机自启动
# systemctl enable nginx
```



## 二进制方式部署
## 源码编译安装nginx
1. 安装相关依赖包

![](../../images/img_3302.png)

![](../../images/img_3303.png)

+ 安装基于perl的正则表达式，支持URL重写
+ 安装openssl软件库，用于https连接
2. 创建nginx程序用户

![](../../images/img_3304.png)

3. 额外准备编译所支持的路径目录

![](../../images/img_3305.png)

4. 编译安装

```yaml
./configure --prefix=/usr/local/nginx --conf-path=/etc/nginx/nginx.conf --group=nginx --error-log-path=/var/log/nginx/error.log --http-log-path=/var/log/nginx/access.log --pid-path=/var/run/nginx/nginx.pid --lock-path=/var/lock/nginx.lock --with-http_stub_status_module --with-http_ssl_module --with-http_gzip_static_module --with-http_flv_module --with-http_mp4_module --http-client-body-temp-path=/var/tmp/nginx/client --http-proxy-temp-path=/var/tmp/nginx/proxy --http-fastcgi-temp-path=/var/tmp/nginx/fastcgi --without-mail_pop3_module --without-mail_smtp_module
```

| --prefix=/usr/local/nginx | 默认安装的路径 |
| --- | --- |
| --conf-path=/etc/nginx/nginx.conf | 主配置文件目录 |
| --group=nginx | 属组 |
| --http-client-body-temp-path=/var/tmp/nginx/client | 客户端提交数据临时存放文件路径（若没有需要自行创建） |
| --http-proxy-temp-path | 作为代理服务器临时存放文件路径 |
| --http-fastcgi-temp-path=/var/tmp/nginx/fastcgi | 作为fastcgi的临时存放文件路径（若没有需要自行创建） |


5. 创建软连接<font style="color:white;">配置环境变量</font>

![](../../images/img_3306.png)

# Nginx基本配置
## 正常运行配置
![](../../images/img_3307.png)

1. 指定运行worker进程的用户和组

![](../../images/img_3308.png)

2. 指定nginx守护进程的PID文件

编译安装时已经指定pid文件路径，不用配置（--pid-path=/var/run/nginx/nginx.pid）

3. 指定一个worker进程所能够打开的最大文件句柄数

![](../../images/img_3309.png)

设置按照默认1024，依然能启动

ulimit -n也能设置

4. 设置主机名，编码格式

![](../../images/img_3310.png)

5. 编写测试主页

![](../../images/img_3311.png)

6. 检查配置文件语法

![](../../images/img_3312.png)

7. 启动服务验证

![](../../images/img_3313.png)

![](../../images/img_3314.png)

## 性能优化配置
1. worker_processes（worker进程的个数）

![](../../images/img_3315.png)

通常应略少于CPU物理核心数（可设置为auto）

可以设置为auto系统自动调节

进程切换  context switch会产生CPU不必要的消耗，进程数要少于CPU但能提升缓存命中率

2. worker_cpu_affinity [cpu mask]（将worker进程绑定在某CPU上）

![](../../images/img_3316.png)

可以设置为auto系统自动调节

cpumask由八位数的二进制表示，例如：00000001 00000010 00000100；

3. time_resolution计时器解析度

降低此值，可减少gettimeofday()系统调用的次数。（提升nginx性能）

4. worker_priority number（指明worker进程的优先(nice)值）

![](../../images/img_3317.png)

![](../../images/img_3318.png)

取值范围（-20-->100，19-->139）值越小，优先级越高

## 事件相关配置
1. accept_mutex {off|on};

master调度用户请求至各worker进程时使用的负载均衡锁，on表示能使多个worker进程轮流、序列化的响应新请求。

2. lock_file file

accept_mutex用到的锁文件路径（在编译安装时已配置）

3. use [epoll|select|poll|rtsig]

指明使用的事件模型，建议让nginx自动选择

4. worker_connections

设定单个worker进程能处理的最大并发连接数量

![](../../images/img_3319.png)

## 用于用户调试、定位问题
> 若使用调试功能，需在编译的时候--with-debug
>

1. daemon {on|off};

是否以守护进程方式运行nginx，调试时应该设置为on。

2. master_process {on|off};

是否以master/worker模型来运行nginx，调试时可以设为off。

3. error_log file

错误日志，包括日志位置和级别。（使用debug级别，需要编译时使用--with-debug选项）

# web服务器配置
## 虚拟主机配置
1. 设置端口、根路径、名称

![](../../images/img_3320.png)

![](../../images/img_3321.png)

2. 开启日志记录

![](../../images/img_3322.png)

3. 在全局配置中打开man格式

![](../../images/img_3323.png)

4. 开启404、500错误跳转页面

![](../../images/img_3324.png)

5. 创建相关文件

![](../../images/img_3325.png)

![](../../images/img_3326.png)

6. 验证结果

![](../../images/img_3327.png)

![](../../images/img_3328.png)

![](../../images/img_3329.png)

## Location 配置
1. 正则表达式模式匹配检查

![](../../images/img_3330.png)

2. 结果验证

![](../../images/img_3331.png)

3. 不带符号匹配

![](../../images/img_3332.png)

![](../../images/img_3333.png)

> 匹配遵循一定的优先等级
>

| = | 精确匹配 |
| --- | --- |
| ~ | 正则表达式模式匹配检查，区分字符大小写 |
| ~* | 正则表达式模块匹配检查，不区分字符大小写 |
| ^~ | URI的前半部分匹配，不支持正则表达式 |
|   | 最后就是不带任何符号匹配 |


正则表达式优先级高，默认在/web/html2下查找/images/a.txt故而找不到

4. 注释正则表达式，继续访问

![](../../images/img_3334.png)

![](../../images/img_3335.png)

5. 定义路径别名alias

![](../../images/img_3336.png)

6. 编写测试页

![](../../images/img_3337.png)

7. 访问验证

![](../../images/img_3338.png)

## Nginx访问控制
1. 基于IP的访问控制

修改nginx主配置文件

![](../../images/img_3339.png)

10.10.64网段测试

![](../../images/img_3340.png)

192.168.10网段测试

![](../../images/img_3341.png)

2. 基于用户的访问控制

安装htpasswd命令工具

![](../../images/img_3342.png)

创建存放密码文件的目录

![](../../images/img_3343.png)

创建密码文件

![](../../images/img_3344.png)

修改nginx主配置文件

![](../../images/img_3345.png)

访问验证

![](../../images/img_3346.png)

## https服务
1. CA服务器配置

![](../../images/img_3347.png)

2. 服务器生成CA请求文件

![](../../images/img_3348.png)

3. 签署证书

![](../../images/img_3349.png)

![](../../images/img_3350.png)

![](../../images/img_3351.png)

4. 编辑nginx主配置文件

![](../../images/img_3352.png)

5. 将证书移动到配置文件对应的路径中

![](../../images/img_3353.png)

6. 创建测试首页

![](../../images/img_3354.png)

7. 抓包工具模拟认证证书

![](../../images/img_3355.png)

![](../../images/img_3356.png)

## stub_status {on|off}  状态统计页面
1. 修改nginx主配置文件

![](../../images/img_3357.png)

2. 访问测试

![](../../images/img_3358.png)

| Active connections | 当前所有处于活动的连接 |
| --- | --- |
| server accepts | 接受的连接 |
| server handled | 处理过的连接 |
| server requests | 处理的请求 |
| Reading | 正在接受的请求 |
| Writing | 请求完成，处于发送响应报文状态 |
| Waiting | 处于活动状态的连接数 |


## URL重写（用户请求重定向）
1. 修改nginx主配置文件

![](../../images/img_3359.png)

2. 创建测试页面

![](../../images/img_3360.png)

![](../../images/img_3361.png)

3. 访问测试

![](../../images/img_3362.png)

![](../../images/img_3363.png)

## if上下文（通常定义在local或server上下文中）
| 变量名 | 变量值为空时，或者以“0”开始，即为false，其他的均为true |
| --- | --- |
| 以变量为基础的比较表达式 | > < = |
| 可以基于正则表达式模式匹配操作 | ~：区分大小写模式匹配<br/>~*：不区分大小写的模式匹配检查<br/>!~和!~*：对上面两种测试取反 |
| 测试文件是否存在 | -f  !-f |
| 测试指定目录是否存在 | -d  !-d |
| 测试文件是否存在 | -e  !-e |
| 检查文件是否有执行权 | -x  !-x |


1. 修改nginx主配置文件

![](../../images/img_3364.png)

2. 创建测试页面

![](../../images/img_3365.png)

3. 访问验证

![](../../images/img_3366.png)

## 防盗链
1. 默认情况下，其他网站能调用本网站的资源进行显示

![](../../images/img_3367.png)

2. 修改nginx主配置文件

![](../../images/img_3368.png)

3. 准备测试图片

![](../../images/img_3369.png)

4. 结果验证

![](../../images/img_3370.png)

![](../../images/img_3371.png)

## 访问日志格式
1. 修改nginx主配置文件

![](../../images/img_3372.png)

![](../../images/img_3373.png)

2. 根据配置文件创建目录

![](../../images/img_3374.png)

3. 访问验证

![](../../images/img_3375.png)    

## 网络连接相关的配置
| Keepalive_timeout # | 长连接能允许请求超时时长，默认75s |
| --- | --- |
| Keepalive_requests # | 一个长连接所能够允许请求的最大资源数 |
| Keepalive_disable [msie8 | safari | none] | 为指定类型的User Agent禁用长连接 |
| tcp_nodelay  on|off | 是否对长连接使用TCP_NODELAY选项 |
| client_header_timeout # | 读取http请求报文首部的超时时长 |
| client_body_timeout# | 读取http请求报文body部分的超时时长 |
| Send_timeout # | 发送相应报文的超时时长 |


# 反向代理配置
> Nginx与Apache动静分离配置
>

![](../../images/img_3376.jpeg)

## 搭建nginx服务器
1. 安装软件包

![](../../images/img_3377.png)

2. 安装nginx调用php的php-fpm模块

![](../../images/img_3378.png)

3. 修改nginx主配置文件

![](../../images/img_3379.png)

4. 访问测试

![](../../images/img_3380.png)

## 搭建Apache、php服务器
1. 安装软件包

```yaml
yum -y install httpd php  php-mysql php-cgi php-mbstring php-gd php-fpm autoconf libjpeg libjpeg-devel libpng libpng-devel freetype freetype-devel libxml2 libxml2-devel zlib zlib-devel glibc glibc-devel glib2 glib2-devel bzip2 bzip2-devel ncurses ncurses-devel curl curl-devel e2fsprogs e2fsprogs-devel krb5 krb5-devel libidn libidn-devel openssl openssl-devel openldap openldap-devel nss_ldap openldap-clients openldap-servers
```

![](../../images/img_3381.png)

## 搭建数据库服务器
1. 安装软件包

![](../../images/img_3382.png)

2. 数据库相关设置

![](../../images/img_3383.png)

![](../../images/img_3384.png)

## Apache服务器配置，支持php
1. 修改httpd主配置文件

![](../../images/img_3385.png)

![](../../images/img_3386.png)

2. 访问测试

![](../../images/img_3387.png)

## Nginx代理动态资源
1. 修改nginx主配置文件

![](../../images/img_3388.png)

2. 访问测试

![](../../images/img_3389.png)

## 编写数据库、php、nginx资源测试文件
![](../../images/img_3390.png)

![](../../images/img_3391.png)

## 项目上线
1. 解压移动项目文件

Nginx、Apache服务器都解压移动到对应web文件目录下

![](../../images/img_3392.png)

2. 为项目创建数据库

![](../../images/img_3393.png)

## 反向代理
网络拓扑图

![](../../images/img_3394.jpeg)

1.  单个服务器反向代理

修改nginx主配置文件

![](../../images/img_3395.png)

访问测试

![](../../images/img_3396.png)

2. 代理服务器部分目录

修改nginx配置文件

![](../../images/img_3397.png)

创建测试文件

![](../../images/img_3398.png)

访问测试

![](../../images/img_3399.png)

![](../../images/img_3400.png)

3. 代理服务器部分格式资源

修改nginx配置文件

> 不要接uri地址
>

![](../../images/img_3401.png)

编写测试文件

![](../../images/img_3402.png)

![](../../images/img_3403.png)

访问验证

![](../../images/img_3404.png)

4. 代理服务器日志设置

查看被代理的web服务器日志

![](../../images/img_3405.png)

> 默认不会记录源客户端的IP地址，无法完成用户日志的精准分析。
>

修改nginx主配置文件

![](../../images/img_3406.png)

> 使用proxy_set_head配置方法，来定义remote_addr。
>

修改web服务器httpd主配置文件

![](../../images/img_3407.png)

> 修改upsteam server日志的格式
>

访问验证

![](../../images/img_3408.png)

## 缓存加速
![](../../images/img_3409.jpeg)

1. 在nginx主配置文件中定义缓存

   ![](../../images/img_3410.png)

2. 在server或location中调用缓存

       ![](../../images/img_3411.png)

3. 创建缓存目录并更改属主属组

       ![](../../images/img_3412.png)

4. 访问验证，查看缓存

       ![](../../images/img_3413.png)

# 负载均衡
![](../../images/img_3414.jpeg)

## 负载均衡配置
| down | 表示单前的server暂时不参与负载 |
| --- | --- |
| Weight | 默认为1.weight越大，负载的权重就越大。 |
| max_fails | 允许请求失败的次数默认为1.当超过最大次数时，返回proxy_next_upstream 模块定义的错误 |
| fail_timeout | max_fails 次失败后，暂停的时间。 |
| Backup | 其它所有的非backup机器down或者忙的时候，请求backup机器。所以这台机器压力会最轻。 |


1. 定义模块

<font style="color:white;">            </font>       ![](../../images/img_3415.png)

2. 调用模块

           ![](../../images/img_3416.png)

3. 访问验证

           ![](../../images/img_3417.png)

## 模拟节点下线
1. 将节点1下线

       ![](../../images/img_3418.png)

2. 访问验证

       ![](../../images/img_3419.png)

3. 将节点1和2都下线，启动backup

       ![](../../images/img_3420.png)

## 超时自动下线
![](../../images/img_3421.png)

## 源地址hash绑定
1. 配置nginx主配置文件

       ![](../../images/img_3422.png)

2. 访问验证

      ![](../../images/img_3423.png)

## Cookie会话绑定
1. 安装sticky模块

```bash
./configure --prefix=/usr/local/nginx  --user=nginx --group=nginx --with-http_stub_status_module --with-http_ssl_module --add-module=/server/tools/nginx-sticky-module-ng
```

2. 配置nginx主配置文件

        ![](../../images/img_3424.png)

## Fastcgi缓存
1. Nginx主配置文件定义fastcgi缓存

![](../../images/img_3425.png)

2. 配置fastcgi缓存

![](../../images/img_3426.png)

# 性能优化
## 网页缓存
> 在http、server、location配置区域均可配置
>

1. 修改nginx主配置文件

![](../../images/img_3427.png)

2. 访问验证

![](../../images/img_3428.png)

## 网页压缩
1. 修改nginx主配置文件

![](../../images/img_3429.png)

2. 修改测试文件

![](../../images/img_3430.png)

3. 访问验证

![](../../images/img_3431.png)

## nginx日志切割
Nginx没有自带模块对其日志进行切割，我们可以通过编写脚本，以周期性计划任务方式对nginx日志切割

| kill -1 nginx// | 平滑重启 nginx (reload) |
| --- | --- |
| kill -s HUP nginx // | 平滑重启 nginx (reload) |
| kill -3 nginx // | 正常停止 nginx (stop) |
| kill -s QUIT nginx // | 正常停止 nginx (stop) |
| kill -s USR1 nginx // | 用于 nginx 的日志切换，也就是重新打开一个日志文件，例如每天要生成一个日志文件时，可以使用这个信号来控制 |
| kill -s USR2 nginx // | 用于平滑升级可执行程序 |
| nginx -s reload | 平滑加载reload |
| nginx -s stop | 停止nginx服务 |


1. 安装killall命令程序包

![](../../images/img_3432.png)

![](../../images/img_3433.png)

2. 执行日志切换脚本

![](../../images/img_3434.png)

3. 查看日志

![](../../images/img_3435.png)

4. 编写定时任务，每天执行

![](../../images/img_3436.png)

## 修改服务器信息
1. 默认显示服务器种类，版本，存在安全隐患

![](../../images/img_3437.png)

2. 修改版本号、服务器种类

![](../../images/img_3438.png)

![](../../images/img_3439.png)

3. 修改http头信息connection字段，防止回显示版本号

![](../../images/img_3440.png)

![](../../images/img_3441.png)

4. 隐藏/修改nginx的http错误码的返回值

![](../../images/img_3442.png)

![](../../images/img_3443.png)

5. 验证结果

![](../../images/img_3444.png)

![](../../images/img_3445.png)

### 
