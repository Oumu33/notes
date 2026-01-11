# 启用Prometheus监控

> 分类: Ceph > Rook
> 更新时间: 2026-01-10T23:35:19.150992+08:00

---

> 参考文档：[https://rook.io/docs/rook/latest-release/Storage-Configuration/Monitoring/ceph-monitoring/](https://rook.io/docs/rook/latest-release/Storage-Configuration/Monitoring/ceph-monitoring/)
>

# 配置 prometheus
## 部署 prometheus 监控
参考文档：[https://www.cuiliangblog.cn/detail/section/15189202](https://www.cuiliangblog.cn/detail/section/15189202)

## 启用service-monitor
```bash
# git clone --single-branch --branch v1.15.5 https://github.com/rook/rook.git
# cd rook/deploy/examples/monitoring
kubectl create -f service-monitor.yaml
kubectl create -f exporter-service-monitor.yaml
```

## 查看验证
![](../../images/img_705.png)

# 配置 grafana
## 导入 dashboard
[https://grafana.com/dashboards/2842](https://grafana.com/dashboards/2842)

[https://grafana.com/dashboards/5336](https://grafana.com/dashboards/5336)

[https://grafana.com/dashboards/5342](https://grafana.com/dashboards/5342)

# 告警规则配置
参考文档：[https://samber.github.io/awesome-prometheus-alerts/rules#ceph](https://samber.github.io/awesome-prometheus-alerts/rules#ceph)



