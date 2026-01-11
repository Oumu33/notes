# MongoDB变更文档结构
    - 传统关系型数据库使用DDL语句变更表结构，MongoDB使用update(updateOne()或updateMany())方法变更文档结构
    1. 为“sue”添加gender(性别)       field，值为“female”
+ >  db.users.find();
+ >  db.users.updateOne({name:"sue"},{$set:{gender:"female"}});
+ ![](https://via.placeholder.com/800x600?text=Image+4a7fe523e0147a7d)
    1. 查找不包括“gender”field的文档：
+ >  db.users.find({gender:{$exists:false}})
+ ![](https://via.placeholder.com/800x600?text=Image+bc8b44b413dc2bba)
    1. 给不包含“gender”的文档添加字段，默认值为“”
+ >  db.users.updateMany({gender:{$exists:false}},{$set:{gender:""}})
+ >  db.users.find();
+ >  db.users.find({gender:{$eq:""}});
+ ![](https://via.placeholder.com/800x600?text=Image+7f144d687b3bfbdc)
    1. 设置jack和tom的gender为“male”
+ >  db.users.updateMany({name:{$in:["jack","tom"]}},{$set:{gender:"male"}})
+ >  db.users.find({name:{$in:["jack","tom"]}})
+ ![](https://via.placeholder.com/800x600?text=Image+e4f1629f62f69827)
    1. 去掉gender为空字符串的文档的gender列
+ >  db.users.updateMany({gender:{$eq:""}},{$unset:{gender:""}})
+ >  db.users.find();
+ ![](https://via.placeholder.com/800x600?text=Image+3238b2b4cb190130)
+  


