# MySQL 查看进程状态
MySQL数据库用show processlist查看服务器进程个用户连接线程的状态

1. SHOW PROCESSLIST 将生成以下列：

Id:      用户连接标识符

User:    发出语句的 MySQL 用户

Host:    发出语句的客户机的主机名

db:      用户选择的数据库，未选为 NULL

Command: 线程正在执行的命令类型

Time:    线程处于当前状态的时间（秒）

State:   指示线程正在执行的内容的操作、事件或状态

Info:    线程正在执行的语句；否则为 NULL

![](https://via.placeholder.com/800x600?text=Image+5523368e5e667761)

1. 查看当前用户连接标识符(id)

mysql> select connection_id();

![](https://via.placeholder.com/800x600?text=Image+23b3a16bae34ca07)

1. 可以用kill命令杀掉用户连接

mysql> kill 3; --当前连接被杀掉会自动重连  

mysql> show processlist;

1. 授予普通用户wang查看当前所有连接用户线程的状态（普通用户仅能看到自己的连接线程状态）

mysql> grant process on *.* to wang@localhost;

mysql> show grants for wang@localhost;

mysql> revoke process on *.* from wang@localhost;

 


