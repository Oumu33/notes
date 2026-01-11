# 输出到Redis

> 来源: ELK Stack
> 创建时间: 2023-02-28T21:19:51+08:00
> 更新时间: 2026-01-11T09:26:52.559941+08:00
> 阅读量: 787 | 点赞: 0

---

新建Filebeat配置文件

```yaml
filebeat.inputs:
- type: log
    enabled: true
    paths:
    - /project/log/*.log
output.redis:
  hosts: ["XXX.XX.XX.XXX:6379"]
  key: log
  password: XXXXX
  db: 6
```

启动Filebeat

```yaml
filebeat -e -c filebeat.yml
```

redis查看数据

![](https://via.placeholder.com/800x600?text=Image+e367ce460d7f4172)


