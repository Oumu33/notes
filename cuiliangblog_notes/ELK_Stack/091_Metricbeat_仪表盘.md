# Metricbeat 仪表盘

> 来源: ELK Stack
> 创建时间: 2021-02-04T20:28:23+08:00
> 更新时间: 2026-01-11T09:26:55.481641+08:00
> 阅读量: 921 | 点赞: 0

---

1. 修改metricbeat配置

```yaml
setup.kibana:
	host:  "192.168.10.50:5601"
```

2. 停止metricbeat服务

systemctl stop metricbeat

3. 安装仪表盘到Kibana

metricbeat setup --dashboards

![](https://via.placeholder.com/800x600?text=Image+767340786a9a4735)

4. 配置kibana仪表盘

![](https://via.placeholder.com/800x600?text=Image+119b692a71f3533b)

4. 查看仪表盘信息

    ![](https://via.placeholder.com/800x600?text=Image+6698f1b307d4a60c) 


