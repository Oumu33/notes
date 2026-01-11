# update修改语句

> 来源: Database
> 创建时间: 2021-02-12T00:29:13+08:00
> 更新时间: 2026-01-11T09:13:24.808242+08:00
> 阅读量: 682 | 点赞: 0

---

    1. **Update 语句**
+ Update  语句用于修改表中的数据。
+ **语法：**
+ UPDATE 表名称 SET 列1名称 = 列1新值, 列2名称 = 列2新值 WHERE 列名称 = 某值
    1. **Person:**

| **LastName** | **FirstName** | **Address** | **City** |
| --- | --- | --- | --- |
| Gates | Bill | Xuanwumen 10 | Beijing |
| Wilson |   | Champs-Elysees |   |


    1. **更新某一行中的一个列**
+ 我们为 lastname  是 "Wilson" 的人添加 firstname：
+ UPDATE Person SET FirstName =  'Fred' WHERE LastName = 'Wilson' 
+ **结果：**

| **LastName** | **FirstName** | **Address** | **City** |
| --- | --- | --- | --- |
| Gates | Bill | Xuanwumen 10 | Beijing |
| Wilson | Fred | Champs-Elysees |   |


    1. **更新某一行中的若干列**
+ 我们会修改地址（address），并添加城市名称（city）：
+ UPDATE Person SET Address =  'Zhongshan 23', City = 'Nanjing'  
  WHERE LastName = 'Wilson'
+ **结果：**

| **LastName** | **FirstName** | **Address** | **City** |
| --- | --- | --- | --- |
| Gates | Bill | Xuanwumen 10 | Beijing |
| Wilson | Fred | Zhongshan 23 | Nanjing |



