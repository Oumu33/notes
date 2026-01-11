# 输出到kafka

> 来源: ELK Stack
> 创建时间: 2021-02-04T18:51:56+08:00
> 更新时间: 2026-01-11T09:26:52.279089+08:00
> 阅读量: 982 | 点赞: 0

---

1. 新建一个filebeat的配置文件filebeat-kafka.yml

```yaml
filebeat.inputs:
- type: log
  paths:
  - /usr/local/tomcat/logs/catalina.*
output.kafka:
  enable: true
  hosts:  ["192.168.10.101:9092","192.168.10.102:9092","192.168.10.103:9092"] # kafka borker地址
  topic: "log_demo" # kafka生产主题
  compression: gzip # 使用压缩
  required_acks: -1 # borker要求的ACK可靠性级别。0=无响应，1=等待本地提交，-1=等待所有副本提交。默认值为 1。
  partition.round_robin:
    reachable_only: true # Filebeat提供多种输出至kafka分区的策略，包括random，round_robin，hash，默认是 hash。我们指定round_robin的策略，并指定reachable_only为true，这表示仅将日志发布到可用分区。
```

2. 启动filebeat

`filebeat -e -c filebeat-kafka.yml `

3. 查看kafka数据

![](https://via.placeholder.com/800x600?text=Image+75cc926825c06685)


