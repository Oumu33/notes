# MySQL重命名用户

> 来源: Database
> 创建时间: 2021-02-12T22:44:54+08:00
> 更新时间: 2026-01-11T09:14:44.900111+08:00
> 阅读量: 614 | 点赞: 0

---

    1. 使用rename       user命令可以给用户名和客户端主机改名
+ 示例：把tom@192.168.2.1  改名为 tim@localhost
+ mysql> rename user tom@192.168.2.1 to tim@localhost;
+ ![](https://via.placeholder.com/800x600?text=Image+f3ee8e70447f6d1d)
+ ![](https://via.placeholder.com/800x600?text=Image+32707d05d9523717)
+  


