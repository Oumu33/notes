# 安装Redis
# 一、centos rpm安装redis
1. 关闭selinux关闭防火墙
2. 安装Redis rpm软件包

上传redis-4.0.11-1.el7.remi.x86_64.rpm

yum install redis-4.0.11-1.el7.remi.x86_64.rpm

1. 初始化配置(rpm包安装)
+ 配置文件位置：

/etc/redis.conf

+ 数据文件位置：

/var/lib/redis

+ 默认日志文件位置：

/var/log/redis/redis.log

1. 启动关闭redis

关闭服务：

systemctl stop redis

启动服务：

systemctl start redis

1. 允许远程连接

vim /etc/redis.conf

![](https://via.placeholder.com/800x600?text=Image+4a43991f582945d3)

systemctl restart redis

1. 使用redis-cli连接redis-server

本地连接：

redis-cli

1. 远程连接：

redis-cli -h [ip] -p [port]

1. 退出redis-cli客户端：

>quit

或 

>exit

# 二、源码编译安装redis
1. 下载源码并编译

$ wget [http://download.redis.io/releases/redis-5.0.6.tar.gz](http://download.redis.io/releases/redis-5.0.6.tar.gz)

$ tar xzf redis-5.0.6.tar.gz

$ cd redis-5.0.6

$ make test

$ make install

+ make时可能存在如下报错

![](https://via.placeholder.com/800x600?text=Image+c98f0a42d69ea2f2)

[https://sourceforge.net/projects/tcl/](https://sourceforge.net/projects/tcl/)之后，点击download直接下载源代码

tar -zxvf tcl8.6.8-src.tar.gz

cd tcl.8.6.8/unix

 ./configure

make

make install

1. 启动redis服务

$ usr/local/bin/redis-server

1. 连接redis服务

$ src/redis-cli

redis> set foo bar

OK

redis> get foo

"bar"

# 三、docker运行redis
1. 拉取官方镜像

docker pull redis

1. 启动镜像

docker run --name redis -p 6379:6379 -v $PWD/data:/data  -d redis redis-server --appendonly yes

+ 命令说明：

-p 6379:6379 : 将容器的6379端口映射到主机的6379端口

-v $PWD/data:/data : 将主机中当前目录下的data挂载到容器的/data

redis-server --appendonly yes : 在容器执行redis-server启动命令，并打开redis持久化配置

1. 本地连接redis

docker exec -it redis redis-cli


