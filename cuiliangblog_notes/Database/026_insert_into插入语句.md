# insert into插入语句

> 来源: Database
> 创建时间: 2021-02-12T00:29:28+08:00
> 更新时间: 2026-01-11T09:13:24.698761+08:00
> 阅读量: 674 | 点赞: 0

---

    1. **INSERT INTO 语句**
+ INSERT INTO  语句用于向表格中插入新的行。
+ **语法**
    - INSERT       INTO 表名称 VALUES (值1, 值2,....)
+ 不指定列名需要在values中指定所有列对应的值，顺序不能错
+ 我们也可以指定所要插入数据的列：
    - INSERT       INTO table_name (列1, 列2,...)       VALUES (值1, 值2,....)
    - 一次插入多行，每行用逗号隔开，写法仅限于MYSQL数据库
+ Insert into 表名 values(列1对应值,列2对应值,....,列N对应值),(列1对应值,列2对应值,....,列N对应值),(列1对应值,列2对应值,....,列N对应值).....;
    1. **插入新的行**
+ **"Persons" 表：**

| **LastName** | **FirstName** | **Address** | **City** |
| --- | --- | --- | --- |
| Carter | Thomas | Changan Street | Beijing |


+ **SQL 语句：**
+ INSERT INTO Persons VALUES  ('Gates', 'Bill', 'Xuanwumen 10', 'Beijing')
+ **结果：**

| **LastName** | **FirstName** | **6** | **City** |
| --- | --- | --- | --- |
| Carter | Thomas |   | Beijing |
| Gates | Bill |   | Beijing |


    1. **在指定的列中插入数据**
+ **"Persons" 表：**

| **LastName** | **FirstName** | **Address** | **City** |
| --- | --- | --- | --- |
| Carter | Thomas | Changan Street | Beijing |
| Gates | Bill | Xuanwumen 10 | Beijing |


+ **SQL 语句：**
+ INSERT INTO Persons  (LastName, Address) VALUES ('Wilson', 'Champs-Elysees')
+ **结果：**

| **LastName** | **FirstName** | **Address** | **City** |
| --- | --- | --- | --- |
| Carter | Thomas | Changan Street | Beijing |
| Gates | Bill | Xuanwumen 10 | Beijing |
| Wilson |   | Champs-Elysees |   |



