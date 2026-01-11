# CASE运算符

> 分类: Database > SQL函数
> 更新时间: 2026-01-10T23:34:15.262817+08:00

---

# 一、CASE运算符为SQL语句增加了多重条件判断比if函数更加灵活
1. case when expr1 then v1      [when expr2  v2 then] …… else vn end
2. 如果考分700以上，优秀，600以上，良好，520以上，中等，否则，较差，按照这个原则列出学生表中的学生，显示姓名，考分，和评判等级

mysql> select sname,score,(case when score>=700 then '优秀' when score>=600 then '良好' when score>=520 then '中等' else '较差' end) 等级 from stu;

![](../../images/img_1142.png)

 

![](../../images/img_1143.png)

