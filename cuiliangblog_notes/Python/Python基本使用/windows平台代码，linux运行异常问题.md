# windows平台代码，linux运行异常问题

> 分类: Python > Python基本使用
> 更新时间: 2026-01-10T23:34:28.154163+08:00

---

sed -i 's/\r$//' hosts-api.py

在windows下写的脚本，Windows下每一行结尾是\n\r，而Linux下则是\n

