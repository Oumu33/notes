# MySQL REVOKE撤销授权语句

> 来源: Database
> 创建时间: 2021-02-12T22:43:18+08:00
> 更新时间: 2026-01-11T09:14:53.091977+08:00
> 阅读量: 604 | 点赞: 0

---

revoke语句可以用来创建用户也可以修改用户的权限

1. grant语法：

revoke 权限(colname) on <dbname>.<tabname> from username@host;

1. 示例(root)，收回用户wang的select      test库的stu表的sno列权限：

mysql> revoke select(sno) on test.stu from wang@localhost;

mysql> show grants for wang@localhost;

![](https://via.placeholder.com/800x600?text=Image+5dd372be3c3e2fcc)

 

![](https://via.placeholder.com/800x600?text=Image+29f388b9c630433e)

 


