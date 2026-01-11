# Nginx服务配置

> 来源: Linux
> 创建时间: 2021-02-13T14:55:28+08:00
> 更新时间: 2026-01-11T09:38:24.167383+08:00
> 阅读量: 1190 | 点赞: 1

---

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

![](https://via.placeholder.com/800x600?text=Image+0baa5ebffe436ecd)

![](https://via.placeholder.com/800x600?text=Image+b1978b8e8311649c)

+ 安装基于perl的正则表达式，支持URL重写
+ 安装openssl软件库，用于https连接
2. 创建nginx程序用户

![](https://via.placeholder.com/800x600?text=Image+44854cc784536abd)

3. 额外准备编译所支持的路径目录

![](https://via.placeholder.com/800x600?text=Image+7546c64b324eb615)

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

![](https://via.placeholder.com/800x600?text=Image+917d810dca776f39)

# Nginx基本配置
## 正常运行配置
![](https://via.placeholder.com/800x600?text=Image+c97c0345e9380942)

1. 指定运行worker进程的用户和组

![](https://via.placeholder.com/800x600?text=Image+2151919813243b8f)

2. 指定nginx守护进程的PID文件

编译安装时已经指定pid文件路径，不用配置（--pid-path=/var/run/nginx/nginx.pid）

3. 指定一个worker进程所能够打开的最大文件句柄数

![](https://via.placeholder.com/800x600?text=Image+c8e0d05db79bb303)

设置按照默认1024，依然能启动

ulimit -n也能设置

4. 设置主机名，编码格式

![](https://via.placeholder.com/800x600?text=Image+68c44cb812543627)

5. 编写测试主页

![](https://via.placeholder.com/800x600?text=Image+4fb822a23b82f93d)

6. 检查配置文件语法

![](https://via.placeholder.com/800x600?text=Image+b3e4a94ca9de26b2)

7. 启动服务验证

![](https://via.placeholder.com/800x600?text=Image+5ce88e8ac6373b10)

![](https://via.placeholder.com/800x600?text=Image+91cbf85812ef31f6)

## 性能优化配置
1. worker_processes（worker进程的个数）

![](https://via.placeholder.com/800x600?text=Image+6ad26eb79a150fdb)

通常应略少于CPU物理核心数（可设置为auto）

可以设置为auto系统自动调节

进程切换  context switch会产生CPU不必要的消耗，进程数要少于CPU但能提升缓存命中率

2. worker_cpu_affinity [cpu mask]（将worker进程绑定在某CPU上）

![](https://via.placeholder.com/800x600?text=Image+a366bf9e92ee4284)

可以设置为auto系统自动调节

cpumask由八位数的二进制表示，例如：00000001 00000010 00000100；

3. time_resolution计时器解析度

降低此值，可减少gettimeofday()系统调用的次数。（提升nginx性能）

4. worker_priority number（指明worker进程的优先(nice)值）

![](https://via.placeholder.com/800x600?text=Image+1168f0eb38ea8472)

![](https://via.placeholder.com/800x600?text=Image+e5519dd6b9e2baa9)

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

![](https://via.placeholder.com/800x600?text=Image+c4eb55dd62aefce4)

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

![](https://via.placeholder.com/800x600?text=Image+44782d1df51fa0fa)

![](https://via.placeholder.com/800x600?text=Image+01504d33b9d97536)

2. 开启日志记录

![](https://via.placeholder.com/800x600?text=Image+a1d4a2bf0c4d2c17)

3. 在全局配置中打开man格式

![](https://via.placeholder.com/800x600?text=Image+df5a72946c8d4b74)

4. 开启404、500错误跳转页面

![](https://via.placeholder.com/800x600?text=Image+7a631410c85af7d7)

5. 创建相关文件

![](https://via.placeholder.com/800x600?text=Image+ea21dd95332e32e2)

![](https://via.placeholder.com/800x600?text=Image+decf778d1bff9f2b)

6. 验证结果

![](https://via.placeholder.com/800x600?text=Image+e23adaa5003ac369)

![](https://via.placeholder.com/800x600?text=Image+e9d0b47b5bd6f407)

![](https://via.placeholder.com/800x600?text=Image+1701c3bb43e4c9ab)

## Location 配置
1. 正则表达式模式匹配检查

![](https://via.placeholder.com/800x600?text=Image+00791001775b8462)

2. 结果验证

![](https://via.placeholder.com/800x600?text=Image+39abf9ceb9801c0c)

3. 不带符号匹配

![](https://via.placeholder.com/800x600?text=Image+dd2f41f061b43d22)

![](https://via.placeholder.com/800x600?text=Image+140028ea4e7176cd)

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

![](https://via.placeholder.com/800x600?text=Image+8300dc322364673b)

![](https://via.placeholder.com/800x600?text=Image+2f253cd6abcea72e)

5. 定义路径别名alias

![](https://via.placeholder.com/800x600?text=Image+c3ecc13a4e1906fa)

6. 编写测试页

![](https://via.placeholder.com/800x600?text=Image+32cf7177b49fc768)

7. 访问验证

![](https://via.placeholder.com/800x600?text=Image+9adbcbcf552f6e6c)

## Nginx访问控制
1. 基于IP的访问控制

修改nginx主配置文件

![](https://via.placeholder.com/800x600?text=Image+3a30308b39ed1313)

10.10.64网段测试

![](https://via.placeholder.com/800x600?text=Image+c2dad9d30fe92289)

192.168.10网段测试

![](https://via.placeholder.com/800x600?text=Image+358629bbf6ab36cb)

2. 基于用户的访问控制

安装htpasswd命令工具

![](https://via.placeholder.com/800x600?text=Image+8d75e8e3b199af96)

创建存放密码文件的目录

![](https://via.placeholder.com/800x600?text=Image+ebcf0c71108ccbcb)

创建密码文件

![](https://via.placeholder.com/800x600?text=Image+d96807861f4bfaf5)

修改nginx主配置文件

![](https://via.placeholder.com/800x600?text=Image+aec598387471dc86)

访问验证

![](https://via.placeholder.com/800x600?text=Image+605888e6891957df)

## https服务
1. CA服务器配置

![](https://via.placeholder.com/800x600?text=Image+f07b173a9a8b09b8)

2. 服务器生成CA请求文件

![](https://via.placeholder.com/800x600?text=Image+ccbac30639b1c80b)

3. 签署证书

![](https://via.placeholder.com/800x600?text=Image+f533c64e98063423)

![](https://via.placeholder.com/800x600?text=Image+676a3af6c6a432c8)

![](https://via.placeholder.com/800x600?text=Image+ab654c79ab98a769)

4. 编辑nginx主配置文件

![](https://via.placeholder.com/800x600?text=Image+b89e73072365482f)

5. 将证书移动到配置文件对应的路径中

![](https://via.placeholder.com/800x600?text=Image+83b9b8ac3ae8a726)

6. 创建测试首页

![](https://via.placeholder.com/800x600?text=Image+0ef01c2e2956bd19)

7. 抓包工具模拟认证证书

![](https://via.placeholder.com/800x600?text=Image+ac46a7d7d970fe0a)

![](https://via.placeholder.com/800x600?text=Image+4b50af39e33473b6)

## stub_status {on|off}  状态统计页面
1. 修改nginx主配置文件

![](https://via.placeholder.com/800x600?text=Image+3e8005c1728aff7b)

2. 访问测试

![](https://via.placeholder.com/800x600?text=Image+841c3b8a75b45b9b)

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

![](https://via.placeholder.com/800x600?text=Image+d0b56f7b3eb443db)

2. 创建测试页面

![](https://via.placeholder.com/800x600?text=Image+3cc6d8756314b146)

![](https://via.placeholder.com/800x600?text=Image+8035f290d458cbb2)

3. 访问测试

![](https://via.placeholder.com/800x600?text=Image+9dde995434df4e74)

![](https://via.placeholder.com/800x600?text=Image+fc229fd616257fa4)

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

![](https://via.placeholder.com/800x600?text=Image+4bb5ff5693f0cbf3)

2. 创建测试页面

![](https://via.placeholder.com/800x600?text=Image+39dfd0023fb622f3)

3. 访问验证

![](https://via.placeholder.com/800x600?text=Image+77239fb38f78c13d)

## 防盗链
1. 默认情况下，其他网站能调用本网站的资源进行显示

![](https://via.placeholder.com/800x600?text=Image+ddfb93f9d2471ee5)

2. 修改nginx主配置文件

![](https://via.placeholder.com/800x600?text=Image+9ee9a78de45f4520)

3. 准备测试图片

![](https://via.placeholder.com/800x600?text=Image+9001a4b5f2283e6e)

4. 结果验证

![](https://via.placeholder.com/800x600?text=Image+1851ea451698a3fd)

![](https://via.placeholder.com/800x600?text=Image+2a22ad26dfab5e75)

## 访问日志格式
1. 修改nginx主配置文件

![](https://via.placeholder.com/800x600?text=Image+5aa5716f404516e2)

![](https://via.placeholder.com/800x600?text=Image+dc7f2e6c72bcab6e)

2. 根据配置文件创建目录

![](https://via.placeholder.com/800x600?text=Image+0c94ef1843d693d0)

3. 访问验证

![](https://via.placeholder.com/800x600?text=Image+dafb3bec44df923d)    

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

![](https://via.placeholder.com/800x600?text=Image+e8f6801e10f9402c)

## 搭建nginx服务器
1. 安装软件包

![](https://via.placeholder.com/800x600?text=Image+42dbaecc7e9b7328)

2. 安装nginx调用php的php-fpm模块

![](https://via.placeholder.com/800x600?text=Image+42d2cdadb5f64f3c)

3. 修改nginx主配置文件

![](https://via.placeholder.com/800x600?text=Image+9d55c0a111ab1d33)

4. 访问测试

![](https://via.placeholder.com/800x600?text=Image+019cfaf488f471e2)

## 搭建Apache、php服务器
1. 安装软件包

```yaml
yum -y install httpd php  php-mysql php-cgi php-mbstring php-gd php-fpm autoconf libjpeg libjpeg-devel libpng libpng-devel freetype freetype-devel libxml2 libxml2-devel zlib zlib-devel glibc glibc-devel glib2 glib2-devel bzip2 bzip2-devel ncurses ncurses-devel curl curl-devel e2fsprogs e2fsprogs-devel krb5 krb5-devel libidn libidn-devel openssl openssl-devel openldap openldap-devel nss_ldap openldap-clients openldap-servers
```

![](https://via.placeholder.com/800x600?text=Image+ad06aec1efe6bdd4)

## 搭建数据库服务器
1. 安装软件包

![](https://via.placeholder.com/800x600?text=Image+1221d6e84917aa84)

2. 数据库相关设置

![](https://via.placeholder.com/800x600?text=Image+a6d6bd71465a1376)

![](https://via.placeholder.com/800x600?text=Image+d61f7e9848ff6857)

## Apache服务器配置，支持php
1. 修改httpd主配置文件

![](https://via.placeholder.com/800x600?text=Image+69d8f44f36d558dc)

![](https://via.placeholder.com/800x600?text=Image+cae8edd2270fa28e)

2. 访问测试

![](https://via.placeholder.com/800x600?text=Image+700f89c737d8ce2d)

## Nginx代理动态资源
1. 修改nginx主配置文件

![](https://via.placeholder.com/800x600?text=Image+f621422b1232f8b4)

2. 访问测试

![](https://via.placeholder.com/800x600?text=Image+284cef15b4554305)

## 编写数据库、php、nginx资源测试文件
![](https://via.placeholder.com/800x600?text=Image+20fae23c74965696)

![](https://via.placeholder.com/800x600?text=Image+e2b90d5ff0a82bf2)

## 项目上线
1. 解压移动项目文件

Nginx、Apache服务器都解压移动到对应web文件目录下

![](https://via.placeholder.com/800x600?text=Image+43926964a57901f0)

2. 为项目创建数据库

![](https://via.placeholder.com/800x600?text=Image+85ad0c155e86ffaf)

## 反向代理
网络拓扑图

![](https://via.placeholder.com/800x600?text=Image+ec72d07d009c40e3)

1.  单个服务器反向代理

修改nginx主配置文件

![](https://via.placeholder.com/800x600?text=Image+8cba2910e5473b1e)

访问测试

![](https://via.placeholder.com/800x600?text=Image+12046ef0b257cd94)

2. 代理服务器部分目录

修改nginx配置文件

![](https://via.placeholder.com/800x600?text=Image+dbfa86aac8139925)

创建测试文件

![](https://via.placeholder.com/800x600?text=Image+f26f8713bbe2fe05)

访问测试

![](https://via.placeholder.com/800x600?text=Image+772b1e0b83e3d955)

![](https://via.placeholder.com/800x600?text=Image+37f78358ac43af63)

3. 代理服务器部分格式资源

修改nginx配置文件

> 不要接uri地址
>

![](https://via.placeholder.com/800x600?text=Image+6e4a51d83b69d370)

编写测试文件

![](https://via.placeholder.com/800x600?text=Image+8062998a90e243c1)

![](https://via.placeholder.com/800x600?text=Image+2f16e55a0ddebdf6)

访问验证

![](https://via.placeholder.com/800x600?text=Image+cf00522b00a643ac)

4. 代理服务器日志设置

查看被代理的web服务器日志

![](https://via.placeholder.com/800x600?text=Image+86face0369f30898)

> 默认不会记录源客户端的IP地址，无法完成用户日志的精准分析。
>

修改nginx主配置文件

![](https://via.placeholder.com/800x600?text=Image+0a6790edf135915a)

> 使用proxy_set_head配置方法，来定义remote_addr。
>

修改web服务器httpd主配置文件

![](https://via.placeholder.com/800x600?text=Image+3b84fe6ad02719f8)

> 修改upsteam server日志的格式
>

访问验证

![](https://via.placeholder.com/800x600?text=Image+40c84d70e28bf80b)

## 缓存加速
![](https://via.placeholder.com/800x600?text=Image+9b084d366223be63)

1. 在nginx主配置文件中定义缓存

   ![](https://via.placeholder.com/800x600?text=Image+aceb8e652002e60a)

2. 在server或location中调用缓存

       ![](https://via.placeholder.com/800x600?text=Image+6e7e2b69c7fbf39d)

3. 创建缓存目录并更改属主属组

       ![](https://via.placeholder.com/800x600?text=Image+3f25847984bca118)

4. 访问验证，查看缓存

       ![](https://via.placeholder.com/800x600?text=Image+fc430f17531e612b)

# 负载均衡
![](https://via.placeholder.com/800x600?text=Image+6fe7cf220ad625a6)

## 负载均衡配置
| down | 表示单前的server暂时不参与负载 |
| --- | --- |
| Weight | 默认为1.weight越大，负载的权重就越大。 |
| max_fails | 允许请求失败的次数默认为1.当超过最大次数时，返回proxy_next_upstream 模块定义的错误 |
| fail_timeout | max_fails 次失败后，暂停的时间。 |
| Backup | 其它所有的非backup机器down或者忙的时候，请求backup机器。所以这台机器压力会最轻。 |


1. 定义模块

<font style="color:white;">            </font>       ![](https://via.placeholder.com/800x600?text=Image+21a4ad3661955b05)

2. 调用模块

           ![](https://via.placeholder.com/800x600?text=Image+344adb037e6c58bf)

3. 访问验证

           ![](https://via.placeholder.com/800x600?text=Image+9cfb7b5005475b8f)

## 模拟节点下线
1. 将节点1下线

       ![](https://via.placeholder.com/800x600?text=Image+4ae00ec661bccf33)

2. 访问验证

       ![](https://via.placeholder.com/800x600?text=Image+8cef87c6431d0d02)

3. 将节点1和2都下线，启动backup

       ![](https://via.placeholder.com/800x600?text=Image+4e21e63f66716c6e)

## 超时自动下线
![](https://via.placeholder.com/800x600?text=Image+ff0e473f6e09bd26)

## 源地址hash绑定
1. 配置nginx主配置文件

       ![](https://via.placeholder.com/800x600?text=Image+6d35e02b1bf73dd0)

2. 访问验证

      ![](https://via.placeholder.com/800x600?text=Image+c5126f2d72295361)

## Cookie会话绑定
1. 安装sticky模块

```bash
./configure --prefix=/usr/local/nginx  --user=nginx --group=nginx --with-http_stub_status_module --with-http_ssl_module --add-module=/server/tools/nginx-sticky-module-ng
```

2. 配置nginx主配置文件

        ![](https://via.placeholder.com/800x600?text=Image+cfb9ea0e4fcf868e)

## Fastcgi缓存
1. Nginx主配置文件定义fastcgi缓存

![](https://via.placeholder.com/800x600?text=Image+f7a2f3f41515b378)

2. 配置fastcgi缓存

![](https://via.placeholder.com/800x600?text=Image+e4110071d123b419)

# 性能优化
## 网页缓存
> 在http、server、location配置区域均可配置
>

1. 修改nginx主配置文件

![](https://via.placeholder.com/800x600?text=Image+21acb3f301e6a5b0)

2. 访问验证

![](https://via.placeholder.com/800x600?text=Image+43713d836df95772)

## 网页压缩
1. 修改nginx主配置文件

![](https://via.placeholder.com/800x600?text=Image+23342164cef54a66)

2. 修改测试文件

![](https://via.placeholder.com/800x600?text=Image+3306fecc3098248c)

3. 访问验证

![](https://via.placeholder.com/800x600?text=Image+6dd02e370342d36a)

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

![](https://via.placeholder.com/800x600?text=Image+26aaedeba022c745)

![](https://via.placeholder.com/800x600?text=Image+60aee326e28af2f8)

2. 执行日志切换脚本

![](https://via.placeholder.com/800x600?text=Image+91b73c30f792bb8c)

3. 查看日志

![](https://via.placeholder.com/800x600?text=Image+6cfc2210e74de000)

4. 编写定时任务，每天执行

![](https://via.placeholder.com/800x600?text=Image+cd13c3f3ea75bafc)

## 修改服务器信息
1. 默认显示服务器种类，版本，存在安全隐患

![](https://via.placeholder.com/800x600?text=Image+07d818f56a2902eb)

2. 修改版本号、服务器种类

![](https://via.placeholder.com/800x600?text=Image+579a867f65eb9b3a)

![](https://via.placeholder.com/800x600?text=Image+cb0ba0bc03a10bb2)

3. 修改http头信息connection字段，防止回显示版本号

![](https://via.placeholder.com/800x600?text=Image+6302679e34325117)

![](https://via.placeholder.com/800x600?text=Image+aa96cfdc40a3451b)

4. 隐藏/修改nginx的http错误码的返回值

![](https://via.placeholder.com/800x600?text=Image+e50aefff8a7884aa)

![](https://via.placeholder.com/800x600?text=Image+47e3c3e6eddd103b)

5. 验证结果

![](https://via.placeholder.com/800x600?text=Image+6c6ef48c9a805c26)

![](https://via.placeholder.com/800x600?text=Image+645c44b4c1a2597e)

### 

