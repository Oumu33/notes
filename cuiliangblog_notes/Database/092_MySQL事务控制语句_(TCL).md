# MySQL事务控制语句 (TCL)
| **语句** | **说明** |
| --- | --- |
| START TRANSACTION（或BEGIN） | 显式开始一个新事务，直到通过COMMIT 或ROLLBACK 显式结束 |
| SAVEPOINT spname | 事务中可以回滚到的位置的唯一标识符 |
| COMMIT | <font style="color:black;">永久记录当前事务所做的更改，</font><font style="color:red;">事务显示结束</font> |
| ROLLBACK | <font style="color:black;">取消当前事务所做的更改，</font><font style="color:red;">事务显示结束</font> |
| ROLLBACK TO spname | 取消在savepoint 之后执行的更改，事务未结束 |
| RELEASE SAVEPOINT | 删除savepoint 标识符，不会删除任何事务语句 |
| SET AUTOCOMMIT | 为当前连接禁用或启用默认autocommit 模式 |


# 一、示例1
1. 修改提示符，查看表内容

![](https://via.placeholder.com/800x600?text=Image+1afc38f5538e16e9)

1. 查看当前事务数

没有事务，表information_schema.innodb_trx表记录数为0

![](https://via.placeholder.com/800x600?text=Image+01cf136380df0228)

1. 开始一个事务：

start transaction;

class表插入一条记录；DML产生事务

查看information_schema.innodb_trx表记录数

![](https://via.placeholder.com/800x600?text=Image+86fbaab3a4381d5f)

![](https://via.placeholder.com/800x600?text=Image+9ef04438cb06b031)

1. 把class表teacher列置空；

查询class表

删除班号4和5的班级

查询class表

查看information_schema.innodb_trx表记录数

1. 开启会话2

查看class表

class表没有变化，事务具有隔离性；未完成的事务对于其他会话不可见

![](https://via.placeholder.com/800x600?text=Image+c971fd0f2d734e35)

1. 会话1中用rollback命令结束事务：

s1> rollback;

s1> select * from class;

s1> select count(*) from information_schema.innodb_trx;

class表恢复原状

之前对该表的一组变更全部取消

事务结束

innodb_trx表记录数为0

![](https://via.placeholder.com/800x600?text=Image+1f7f6ccb442a2b36)


