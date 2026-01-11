# windows平台代码，linux运行异常问题

> 来源: Python
> 创建时间: 2021-02-19T15:22:53+08:00
> 更新时间: 2026-01-11T09:25:11.441834+08:00
> 阅读量: 769 | 点赞: 0

---

sed -i 's/\r$//' hosts-api.py

在windows下写的脚本，Windows下每一行结尾是\n\r，而Linux下则是\n


