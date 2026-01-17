# 启动流程-重置root密码
    1. 首先，启动系统，进入开机界面，在界面中按“e”进入编辑界面。如图：
+ ![img_4400.png](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_4400.png)
    1. 进入编辑界面，使用键盘上的上下键把光标往下移动，找到以“Linux16”开头内容所在的行，在行的最后面输入：init=/bin/sh。如图：
+ 
    1. 接着，输入完成后，直接按快捷键：Ctrl+x 进入单用户模式。如图：
+ 
    1. 在光标闪烁的位置中（最后一行的位置）输入：mount -o remount,rw / 。在新的一行最后面输入：passwd。接着，密码修改成功后，会显示passwd.....的样式，说明密码修改成功。如图：
+ 
    1. 接着，输入：touch       /.autorelabel（注意：touch与 /后面有一个空格），完成后按键盘的回车键（Enter）。继续在光标闪烁的位置中，输入：exec       /sbin/init（注意：exec与 /后面有一个空格），完成后按键盘的回车键（Enter）。接着，等待系统自动修改密码，完成后，系统会自动重启。如图：
+ ![img_2032.png](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_2032.png)
    1. 重启后登陆即可
+ ![img_3680.png](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_3680.png)
+  


