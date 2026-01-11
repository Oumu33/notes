# MySQL设置用户密码

> 来源: Database
> 创建时间: 2021-02-12T22:45:34+08:00
> 更新时间: 2026-01-11T09:14:44.794292+08:00
> 阅读量: 624 | 点赞: 0

---

    1. 修改自己的密码
+ mysql>  set password=password('newpass');
+ password为口令函数，把口令加密存放在mysql数据库的user表的authentication_string列中
    1. 修改其他用户密码(要有相应权限)
+ mysql>  set password for 'username'@'host'= ('newpass');
    - 示例：
+ mysql>set  password for tom@192.168.2.1=password('newpass');
+ mysql>set password=password('root');


