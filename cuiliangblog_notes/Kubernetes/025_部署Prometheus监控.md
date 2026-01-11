# 部署Prometheus监控

> 来源: Kubernetes
> 创建时间: 2020-10-29T23:55:46+08:00
> 更新时间: 2026-01-11T09:04:35.599880+08:00
> 阅读量: 3828 | 点赞: 0

---

> 如果已安装metrics-server需要先卸载，否则冲突
>

# 组件说明
1. MetricServer：是kubernetes集群资源使用情况的聚合器，收集数据给kubernetes集群内使用，如kubectl,hpa,scheduler等。
2. PrometheusOperator：是一个系统监测和警报工具箱，用来存储监控数据。
3. NodeExporter：用于各node的关键度量指标状态数据。
4. KubeStateMetrics：收集kubernetes集群内资源对象数据，制定告警规则。
5. Prometheus：采用pull方式收集apiserver，scheduler，controller-manager，kubelet组件数据，通过http协议传输。
6. Grafana：是可视化数据统计和监控平台。

# 安装部署
项目地址：[https://github.com/prometheus-operator/kube-prometheus](https://github.com/prometheus-operator/kube-prometheus)

## 版本选择
可参考官方文档[https://github.com/prometheus-operator/kube-prometheus?tab=readme-ov-file#compatibility](https://github.com/prometheus-operator/kube-prometheus?tab=readme-ov-file#compatibility)，例如 k8s 版本为 1.30，推荐的 kube-Prometheus 版本为release-0.14

## 克隆项目至本地
```bash
git clone -b release-0.14 https://github.com/prometheus-operator/kube-prometheus.git
```

## 创建资源对象
```bash
[root@master1 k8s-install]# kubectl create namespace monitoring 
[root@master1 k8s-install]# cd kube-prometheus/
[root@master1 kube-prometheus]# kubectl apply --server-side -f manifests/setup
[root@master1 kube-prometheus]# kubectl wait \
	--for condition=Established \
	--all CustomResourceDefinition \
	--namespace=monitoring
[root@master1 kube-prometheus]# kubectl apply -f manifests/
```

## 验证查看
+ 查看pod状态

```bash
[root@master1 kube-prometheus]# kubectl get pod -n monitoring 
NAME                                   READY   STATUS    RESTARTS   AGE
alertmanager-main-0                    2/2     Running   0          61s
alertmanager-main-1                    2/2     Running   0          61s
alertmanager-main-2                    2/2     Running   0          61s
blackbox-exporter-576df9484f-lr6xd     3/3     Running   0          107s
grafana-795ddfd4bd-jxlrw               1/1     Running   0          105s
kube-state-metrics-bdfdcd5cd-7dgwl     3/3     Running   0          104s
node-exporter-4qnrz                    2/2     Running   0          104s
node-exporter-8hjr7                    2/2     Running   0          104s
node-exporter-8s5hp                    2/2     Running   0          103s
node-exporter-kgb48                    2/2     Running   0          104s
node-exporter-p8b7q                    2/2     Running   0          103s
node-exporter-v4nz7                    2/2     Running   0          103s
prometheus-adapter-65b6bd474c-qvdb8    1/1     Running   0          102s
prometheus-adapter-65b6bd474c-vlxhn    1/1     Running   0          102s
prometheus-k8s-0                       1/2     Running   0          58s
prometheus-k8s-1                       2/2     Running   0          58s
prometheus-operator-6565b7b5f5-mgclf   2/2     Running   0          101s
```

+ 查看top信息

```bash
[root@master1 kube-prometheus]# kubectl top node
NAME      CPU(cores)   CPU%   MEMORY(bytes)   MEMORY%   
master1   579m         14%    2357Mi          66%       
master2   383m         9%     1697Mi          48%       
master3   482m         12%    2069Mi          58%       
work1     131m         3%     1327Mi          37%       
work2     132m         3%     1134Mi          32%       
work3     176m         4%     1100Mi          31%       
[root@master1 kube-prometheus]# kubectl top pod
NAME                     CPU(cores)   MEMORY(bytes)   
myapp-58bbc79c4f-cc9g5   0m           1Mi             
myapp-58bbc79c4f-txnp5   0m           1Mi             
myapp-58bbc79c4f-zvlcr   0m           1Mi
```

## 新增ingress资源
以ingress-nginx为例：

```yaml
[root@master1 manifests]# cat ingress.yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: alertmanager
  namespace: monitoring
  annotations:
    nginx.ingress.kubernetes.io/rewrite-target: /
spec:
  ingressClassName: nginx
  rules:
  - host: alertmanager.local.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: alertmanager-main
            port:
              number: 9093 
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: grafana
  namespace: monitoring
  annotations:
    nginx.ingress.kubernetes.io/rewrite-target: /
spec:
  ingressClassName: nginx
  rules:
  - host: grafana.local.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: grafana
            port:
              number: 3000
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: prometheus
  namespace: monitoring
  annotations:
    nginx.ingress.kubernetes.io/rewrite-target: /
spec:
  ingressClassName: nginx
  rules:
  - host: prometheus.local.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: prometheus-k8s
            port:
              number: 9090
```

以traefik为例：

```yaml
[root@master1 manifests]# cat ingress.yaml
apiVersion: traefik.io/v1alpha1
kind: IngressRoute
metadata:
  name: alertmanager
  namespace: monitoring
spec:
  entryPoints:
  - web
  routes:
  - match: Host(`alertmanager.local.com`)
    kind: Rule
    services:
      - name: alertmanager-main
        port: 9093 
---
apiVersion: traefik.io/v1alpha1
kind: IngressRoute
metadata:
  name: grafana
  namespace: monitoring
spec:
  entryPoints:
  - web
  routes:
  - match: Host(`grafana.local.com`)
    kind: Rule
    services:
      - name: grafana
        port: 3000
---
apiVersion: traefik.io/v1alpha1
kind: IngressRoute
metadata:
  name: prometheus
  namespace: monitoring
spec:
  entryPoints:
  - web
  routes:
  - match: Host(`prometheus.local.com`)
    kind: Rule
    services:
      - name: prometheus-k8s
        port: 9090
[root@master1 manifests]# kubectl apply -f ingress.yaml 
ingressroute.traefik.containo.us/alertmanager created
ingressroute.traefik.containo.us/grafana created
ingressroute.traefik.containo.us/prometheus created
```

## web访问验证
+ 新增hosts解析记录

```bash
192.168.10.10 alertmanager.local.com grafana.local.com prometheus.local.com
```

+ 访问[http://alertmanager.local.com/](http://alertmanager.local.com/)，查看当前激活的告警

![](https://via.placeholder.com/800x600?text=Image+4b17f550d5df8c4f)

+ 访问[http://prometheus.local.com/targets](http://prometheus.local.com/targets)，查看targets已全部up

![](https://via.placeholder.com/800x600?text=Image+e7d0cba5dcefcf5a)

+ 访问[http://grafana.local.com/login](http://grafana.local.com/login)，默认用户名和密码是admin/admin

![](https://via.placeholder.com/800x600?text=Image+348a53d540248f19)

+ 查看数据源，以为我们自动配置Prometheus数据源

![](https://via.placeholder.com/800x600?text=Image+bd552212cb7b2228)

## targets异常处理
> 查看targets可发现有两个监控任务没有对应的instance，这和serviceMonitor资源对象有关
>

![](https://via.placeholder.com/800x600?text=Image+9b6fe17b1d915fe3)



由于prometheus-serviceMonitorKubeScheduler文件中，selector匹配的是service的标签，但是namespace中并没有app.kubernetes.io/name的service

1. 新建prometheus-kubeSchedulerService.yaml并apply创建资源

```yaml
apiVersion: v1
kind: Service
metadata:
    namespace: kube-system
    name: kube-scheduler
    labels:
      app.kubernetes.io/name: kube-scheduler
spec:
    selector:
      component: kube-scheduler
    type: ClusterIP
    ports:
    - name: https-metrics
      port: 10259
      targetPort: 10259
      protocol: TCP
```

2. 新建prometheus-kubeControllerManagerService.yaml并apply创建资源

```yaml
apiVersion: v1
kind: Service
metadata:
    namespace: kube-system
    name: kube-controller-manager
    labels:
      app.kubernetes.io/name: kube-controller-manager
spec:
    selector:
      component: kube-controller-manager
    type: ClusterIP
    ports:
    - name: https-metrics
      port: 10257
      targetPort: 10257
      protocol: TCP
```

3. 再次查看targets信息

![](https://via.placeholder.com/800x600?text=Image+21951729f6d9a81c)

发现虽然加载了targets，但是无法访问该端口。

需要请修改master节点的/etc/kubernetes/manifests/kube-controller-manager.yaml 文件和 /etc/kubernetes/manifests/kube-scheduler.yaml 文件，将其中的 - --bind-address=127.0.0.1 修改为 - --bind-address=0.0.0.0

修改完保存文件，pod会自动重启。

5. 如果出现 metirics/sls 提示 403 权限不足，需要配置<font style="color:rgb(48, 49, 51);">prometheus-clusterRole.yaml 文件</font>修改 rbac 权限，具体可参考：[https://www.cuiliangblog.cn/detail/section/163023458](https://www.cuiliangblog.cn/detail/section/163023458)

# 部署pushgateway(可选)
## 创建资源清单
pushgateway目录下，创建这三个yaml文件。

+ prometheus-pushgatewayServiceMonitor.yaml

```yaml
apiVersion: monitoring.coreos.com/v1
kind: ServiceMonitor
metadata:
  labels:
    prometheus: k8s
  name: prometheus-pushgateway
  namespace: monitoring
spec:
  endpoints:
  - honorLabels: true
    port: http
  jobLabel: pushgateway
  selector:
    matchLabels:
      app: prometheus-pushgateway
```

+ prometheus-pushgatewayService.yaml

```yaml
apiVersion: v1
kind: Service
metadata:
  labels:
    app: prometheus-pushgateway
  name: prometheus-pushgateway
  namespace: monitoring
spec:
  type: NodePort
  ports:
  - name: http
    port: 9091
    nodePort: 30400
    targetPort: metrics
  selector:
    app: prometheus-pushgateway
#  type: ClusterIP
```

+ prometheus-pushgatewayDeployment.yaml

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  labels:
    app: prometheus-pushgateway
  name: prometheus-pushgateway
  namespace: monitoring
spec:
  replicas: 1
  selector:
    matchLabels:
      app: prometheus-pushgateway
  template:
    metadata:
      labels:
        app: prometheus-pushgateway
    spec:
      containers:
      - image: prom/pushgateway:v1.10.0
        livenessProbe:
          httpGet:
            path: /#/status
            port: 9091
          initialDelaySeconds: 10
          timeoutSeconds: 10
        name: prometheus-pushgateway
        ports:
        - containerPort: 9091
          name: metrics
        readinessProbe:
          httpGet:
            path: /#/status
            port: 9091
          initialDelaySeconds: 10
          timeoutSeconds: 10
        resources:
          limits:
            cpu: 50m
            memory: 100Mi
          requests:
            cpu: 50m
            memory: 100Mi
```

+ prometheus-ingress.yaml

```yaml
apiVersion: traefik.io/v1alpha1
kind: IngressRoute
metadata:
  name: prometheus-pushgateway
  namespace: monitoring
spec:
  entryPoints:
  - web
  routes:
  - match: Host(`prometheus-pushgateway.local.com`)
    kind: Rule
    services:
      - name: prometheus-pushgateway
        port: 9091
```

## 创建资源
```plain
kubectl apply -f .
```

## 查看验证
![](https://via.placeholder.com/800x600?text=Image+609bf79413e679ee)

# 高级配置
## Grafana配置修改
默认grafana使用UTC时区和sqllite数据库，可按需调整

```bash
# pwd
/opt/k8s/kube-prometheus/manifests
# cat grafana-config.yaml                
apiVersion: v1
kind: Secret
metadata:
  labels:
    app.kubernetes.io/component: grafana
    app.kubernetes.io/name: grafana
    app.kubernetes.io/part-of: kube-prometheus
    app.kubernetes.io/version: 11.2.1
  name: grafana-config
  namespace: monitoring
stringData:
  grafana.ini: |
    [date_formats] # 时区设置
    default_timezone = Asia/Shanghai
    [database] # 数据库设置
    type = mysql
    host = cluster-mysql-master.mysql.svc:3306
    name = grafana
    user = grafana
    password = password
type: Opaque
```

## 数据持久化存储
默认的的存储为`emptyDir`，生产环境建议更换为`persistentVolumeClaim`

创建grafana-pvc

```yaml
# cat grafana-pvc.yaml      
kind: PersistentVolumeClaim
apiVersion: v1
metadata:
  name: grafana-pvc
  namespace: monitoring
spec:
  storageClassName: nfs-client
  accessModes:
    - ReadWriteMany
  resources:
    requests:
      storage: 500Mi
# kubectl apply -f grafana-pvc.yaml   
persistentvolumeclaim/grafana-pvc created
```

修改grafana

```yaml
# cp /opt/k8s/kube-prometheus/manifests/grafana-deployment.yaml .
# vim grafana-deployment.yaml 
volumes:
- name: grafana-storage
  persistentVolumeClaim:
    claimName: grafana-pvc
# kubectl apply -f grafana-deployment.yaml 
deployment.apps/grafana configured
```

修改prometheus

```yaml
# cp /opt/k8s/kube-prometheus/manifests/prometheus-prometheus.yaml .
# vim prometheus-prometheus.yaml 
spec:
  image: quay.io/prometheus/prometheus:v2.54.1
  retention: 30d # 数据保留天数
  storage: # 持久化配置
    volumeClaimTemplate:
      spec:
        storageClassName: nfs-client
        accessModes: ["ReadWriteOnce"]
        resources:
          requests:
            storage: 500Gi
# kubectl apply -f prometheus-prometheus.yaml          
prometheus.monitoring.coreos.com/k8s configured
```

## node exporter新增ip标签
默认情况下node exporter指标只有主机名没有ip标签，可添加全局IP标签。

```yaml
# cp ../kube-prometheus/manifests/nodeExporter-serviceMonitor.yaml .
# vim nodeExporter-serviceMonitor.yaml 
apiVersion: monitoring.coreos.com/v1
kind: ServiceMonitor
metadata:
  labels:
    app.kubernetes.io/component: exporter
    app.kubernetes.io/name: node-exporter
    app.kubernetes.io/part-of: kube-prometheus
    app.kubernetes.io/version: 1.8.2
  name: node-exporter
  namespace: monitoring
spec:
  endpoints:
  - bearerTokenFile: /var/run/secrets/kubernetes.io/serviceaccount/token
    interval: 15s
    port: https
    relabelings:
    - action: replace
      regex: (.*)
      replacement: $1
      sourceLabels:
      - __meta_kubernetes_pod_node_name
      targetLabel: instance
    - action: replace
      sourceLabels: 
      - __meta_kubernetes_pod_host_ip
      targetLabel: ip
    scheme: https
    tlsConfig:
      insecureSkipVerify: true
  jobLabel: app.kubernetes.io/name
  selector:
    matchLabels:
      app.kubernetes.io/component: exporter
      app.kubernetes.io/name: node-exporter
      app.kubernetes.io/part-of: kube-prometheus
```

## 启用数据写入功能
在 kube-prometheus 中，Prometheus 默认不会开启 `remote-write-receiver` 功能，这是一个额外的 CLI 参数，需要手动启用。 这样可以让 Prometheus 实例能够 接收来自 Tempo（或其它系统）的 remote write 请求。

```yaml
# vim prometheus-prometheus.yaml
spec:
  enableFeatures:
    - remote-write-receiver  # 开启远程写入
  externalLabels:
    cluster: cluster-a # 自定义集群级别额外标签
# kubectl apply -f prometheus-prometheus.yaml
```

查看验证

```yaml
# kubectl get pod -n monitoring prometheus-k8s-0 -o yaml | grep remote-write-receiver
    - --enable-feature=remote-write-receiver
```


