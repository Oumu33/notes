# 启动流程-重置root密码

> 来源: Linux
> 创建时间: 2021-02-16T09:44:03+08:00
> 更新时间: 2026-01-11T09:33:47.758642+08:00
> 阅读量: 723 | 点赞: 0

---

    1. 首先，启动系统，进入开机界面，在界面中按“e”进入编辑界面。如图：
+ ![](https://via.placeholder.com/800x600?text=Image+3e5466beddc2bf39)
    1. 进入编辑界面，使用键盘上的上下键把光标往下移动，找到以“Linux16”开头内容所在的行，在行的最后面输入：init=/bin/sh。如图：
+ ![](https://via.placeholder.com/800x600?text=Image+547c55ae9210bf40)
    1. 接着，输入完成后，直接按快捷键：Ctrl+x 进入单用户模式。如图：
+ ![](https://via.placeholder.com/800x600?text=Image+fe685e735d6f9294)
    1. 在光标闪烁的位置中（最后一行的位置）输入：mount -o remount,rw / 。在新的一行最后面输入：passwd。接着，密码修改成功后，会显示passwd.....的样式，说明密码修改成功。如图：
+ ![](https://via.placeholder.com/800x600?text=Image+b6dc7112887f1807)
    1. 接着，输入：touch       /.autorelabel（注意：touch与 /后面有一个空格），完成后按键盘的回车键（Enter）。继续在光标闪烁的位置中，输入：exec       /sbin/init（注意：exec与 /后面有一个空格），完成后按键盘的回车键（Enter）。接着，等待系统自动修改密码，完成后，系统会自动重启。如图：
+ ![](https://via.placeholder.com/800x600?text=Image+3afcf38619aa1d1d)
    1. 重启后登陆即可
+ ![](https://via.placeholder.com/800x600?text=Image+bba44a24d870d8ff)
+  


