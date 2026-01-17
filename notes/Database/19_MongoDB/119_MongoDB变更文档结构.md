# MongoDB变更文档结构
    - 传统关系型数据库使用DDL语句变更表结构，MongoDB使用update(updateOne()或updateMany())方法变更文档结构
    1. 为“sue”添加gender(性别)       field，值为“female”
+ >  db.users.find();
+ >  db.users.updateOne({name:"sue"},{$set:{gender:"female"}});
+ 
    1. 查找不包括“gender”field的文档：
+ >  db.users.find({gender:{$exists:false}})
+ ![img_464.png](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_464.png)
    1. 给不包含“gender”的文档添加字段，默认值为“”
+ >  db.users.updateMany({gender:{$exists:false}},{$set:{gender:""}})
+ >  db.users.find();
+ >  db.users.find({gender:{$eq:""}});
+ 
    1. 设置jack和tom的gender为“male”
+ >  db.users.updateMany({name:{$in:["jack","tom"]}},{$set:{gender:"male"}})
+ >  db.users.find({name:{$in:["jack","tom"]}})
+ 
    1. 去掉gender为空字符串的文档的gender列
+ >  db.users.updateMany({gender:{$eq:""}},{$unset:{gender:""}})
+ >  db.users.find();
+ ![img_4704.jpeg](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_4704.jpeg)
+  


