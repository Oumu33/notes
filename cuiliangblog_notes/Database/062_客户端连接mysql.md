# 客户端连接mysql

> 来源: Database
> 创建时间: 2021-02-12T22:37:41+08:00
> 更新时间: 2026-01-11T09:14:19.546159+08:00
> 阅读量: 687 | 点赞: 0

---

    1. mysql程序在哪里
+ root>which  mysql
    1. MySQL服务程序在哪里
+ root>which  mysqld
    1. MySQL服务启动了吗？启动了才能用mysql客户端连接
+ root>service  mysql status
+ 或者
+ root>ps  -ef |grep -i mysqld |grep -v grep
    1. 连接mysql
+ root>mysql  –uroot –p 回车，录入mysql的root用户密码
+ -u代表mysql的用户名，可以不加空格之间填写连接用户-uroot
+ -p代表用户名对应的密码,可以直接在-p后面写密码，但是旁边有人能看到
+  mysql -uroot -poracle
+ -p后面可以不写密码，直接回车后会提醒录入密码，这样比较安全
    1. 退出连接
+ mysql>quit;  或者 exit;


