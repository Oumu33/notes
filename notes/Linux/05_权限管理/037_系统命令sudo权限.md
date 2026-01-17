# 系统命令sudo权限
# 一、sudo权限
1. root把本来只能超级用户执行的命令赋予普通用户执行。
2. sudo的操作对象是系统命令

# 二、sudo使用
[root@localhost~]# visudo（实际修改的是/etc/sudoers文件）

root ALL=(ALL) ALL

#用户名 被管理主机的地址=（可使用的身份） 授权命令（绝对路径）

# %wheel ALL=(ALL) ALL

#%组名 被管理主机的地址=（可使用的身份） 授权命令（绝对路径）

# 三、授权sc用户可以重启服务器
[root@localhost~]#visudo



# 四、普通用户执行sudo赋予的命令
1. 查看可用的sudo命令

![img_992.png](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_992.png)

2. 普通用户执行sudo赋予的命令



 


