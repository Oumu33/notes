# centos6开机启动自定义脚本
# 一、脚本方式添加到rc.local
1. 新建执行脚本echo.sh
+ 脚本的位置在/root/python目录下

![](../../images/img_2946.png)

1. 使自启动程序拥有执行权限

![](../../images/img_2947.png)

1. 在/etc/rc.d/rc.local中加入执行脚本命令，并设置执行权限。
+ 在/etc/rc.d/rc.local文件末尾追加/root/python/echo.sh

![](../../images/img_2948.png)

+ 设置执行权限

![](../../images/img_2949.png)

1. 重启

# 二、服务方式chkconfig命令
1. 编写脚本

![](../../images/img_2950.png)

+ 脚本第二行 “#chkconfig: 2345 80 90”      表示在2/3/4/5运行级别启动，启动序号(S80)，关闭序号(K90)； 
1. 将写好的autostart.sh脚本移动到/etc/rc.d/init.d/目录下给脚本赋可执行权限

![](../../images/img_2951.png)

1. 添加脚本到开机自动启动项目中

![](../../images/img_2952.png)

1. 重启

