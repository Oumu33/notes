# 输出到Redis
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

![](../../images/img_1885.png)

