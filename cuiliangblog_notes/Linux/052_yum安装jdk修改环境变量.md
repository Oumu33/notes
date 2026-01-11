# yum安装jdk修改环境变量

> 来源: Linux
> 创建时间: 2021-02-16T09:26:21+08:00
> 更新时间: 2026-01-11T09:33:14.890714+08:00
> 阅读量: 699 | 点赞: 0

---

    1. 查看java命令文件路径
+ ![](https://via.placeholder.com/800x600?text=Image+4daecfc7024bed85)
    1. export       JAVA_HOME=/usr/lib/jvm/jre-1.6.0-openjdk
+ export  PATH=$PATH:$JAVA_HOME/bin
+ export CLASSPATH=.:$JAVA_HOME/lib/tools.jar:$JAVA_HOME/lib/dt.jar


