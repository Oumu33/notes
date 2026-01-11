# Bash变量-环境变量

> 来源: Linux
> 创建时间: 2021-02-16T10:01:04+08:00
> 更新时间: 2026-01-11T09:35:23.487372+08:00
> 阅读量: 692 | 点赞: 0

---

# 一、环境变量是什么
1. 用户自定义变量只在当前的Shell中生效，而环境变量会在当前Shell和这个Shell的所有子Shell当中生效。如果把环境变量写入相应的配置文件，那么这个环境变量就会在所有的Shell中生效

# 二、设置环境变量
1. 申明变量（export 变量名=变量值）

![](https://via.placeholder.com/800x600?text=Image+55a5063a3c3f88b0)

1. 查询变量

![](https://via.placeholder.com/800x600?text=Image+3c0e1f87c468374c)

1. 删除变量

![](https://via.placeholder.com/800x600?text=Image+d2963006c5f1a0e3)

# 三、系统常见环境变量
1. PATH：系统查找命令的路径 [root@localhost ~]# echo $PATH      /usr/lib/qt-3.3/bin:/usr/local/sbin:/usr/local/bin:/sbin:/bin:/usr/sbin:/usr/bin:/root/bin
2.  PATH="$PATH":/root/sh #PATH变量叠加
3. PS1：定义系统提示符的变量

| \d： | 显示日期，格式为“星期 月 日” |
| --- | --- |
| \h： | 显示简写主机名。如默认主机名“localhost”  |
| \t： | 显示24小时制时间，格式为“HH:MM:SS”    |
| \T： | 显示12小时制时间，格式为“HH:MM:SS”    |
| \A： | 显示24小时制时间，格式为“HH:MM”    |
| \u： | 显示当前用户名  |
| \w： | 显示当前所在目录的完整名称  |
| \W： | 显示当前所在目录的最后一个目录  |
| \#： | 执行的第几个命令  |
| \$： | 提示符。如果是root用户会显示提示符为“#”，如果是普通用户会显示提示符为“$” |


1. 举例：
+ [root@localhost ~]#      PS1='[\u@\t \w]\$ '
+ [root@04:50:08      /usr/local/src]#PS1='[\u@\@ \h \# \W]\$‘
+ [root@04:53 上午 localhost 31      src]#PS1='[\u@\h \W]\$ '

 


