# MySQL GRANT授权语句
grant语句可以用来创建用户也可以修改用户的权限

1. grant语法：

grant 权限(colname) on <dbname>.<tabname> to username@host identified by ‘password’;

1. 示例，创建用户wang，可以select      test库的stu表的sno列：

grant select(sno) on test.stu to wang@localhost identified by 'wang';

1. 测试 (wang)

# mysql -uwang –p

mysql> show databases;

mysql>use test;

mysql>show tables;

mysql> select * from stu; --报错，只能看sno这列的内容

mysql> select sno from stu;

![](https://via.placeholder.com/800x600?text=Image+8d66959355cc6681)

1. 测试 (root)

mysql> select * from mysql.tables_priv where user='wang';

mysql> select * from mysql.columns_priv where user='wang';

![](https://via.placeholder.com/800x600?text=Image+dbd4b5ed1841a1a6)

 

![](https://via.placeholder.com/800x600?text=Image+3da712c751bd5bb1)

 


