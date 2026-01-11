# 部署Ingress-nginx代理
# 使用yaml配置文件部署
## 参考地址
[https://github.com/kubernetes/ingress-nginx](https://github.com/kubernetes/ingress-nginx)

[ingress-nginx官网](https://kubernetes.github.io/ingress-nginx/)

## 下载文件
> 注意ingress版本要与k8s版本匹配，可在github仓库中查看ingress与k8s对于的版本关系列表。
>

![](../../images/img_2200.png)

本实验中k8s集群版本为1.30.13，因此部署1.13.1版本的ingress-nginx。

使用 helm 和 yaml 文件均可部署，此处一 yaml 文件为例：

```bash
wget https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.13.1/deploy/static/provider/cloud/deploy.yaml
```

## 修改资源清单配置
```yaml
# vim deploy.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  labels:
    app.kubernetes.io/component: controller
    app.kubernetes.io/instance: ingress-nginx
    app.kubernetes.io/name: ingress-nginx
    app.kubernetes.io/part-of: ingress-nginx
    app.kubernetes.io/version: 1.13.1
  name: ingress-nginx-controller
  namespace: ingress-nginx
spec:
  replicas: 1 # ingress节点数
  template:
    ……
    spec:
      dnsPolicy: ClusterFirstWithHostNet				# 配置DNS策略，实现pod可以访问集群内外的域名 
      hostNetwork: true                         # 新增。开启host网络，提高网络入口的网络性能
      nodeSelector:                             # 设置node筛选器，在特定label的节点上启动
        ingress: "true"                         # 修改。调度至IngressProxy: "true"的节点
        
# 修改service类型为nodeport
apiVersion: v1
kind: Service
metadata:
  labels:
    app.kubernetes.io/component: controller
    app.kubernetes.io/instance: ingress-nginx
    app.kubernetes.io/name: ingress-nginx
    app.kubernetes.io/part-of: ingress-nginx
    app.kubernetes.io/version: 1.13.1
  name: ingress-nginx-controller
  namespace: ingress-nginx
spec:
……
  type: NodePort
```

## 创建资源
给master节点设置标签，充当边缘节点

```yaml
[root@k8s-master k8s-install]# kubectl label nodes k8s-master ingress=true
[root@k8s-master k8s-install]# kubectl apply -f deploy.yaml
```

## 查看资源信息
```bash
[root@k8s-master k8s-install]# kubectl get pod -n ingress-nginx -o wide
NAME                                        READY   STATUS      RESTARTS   AGE   IP              NODE         NOMINATED NODE   READINESS GATES
ingress-nginx-admission-create-bspb8        0/1     Completed   0          4m1s  10.244.2.44     k8s-work2    <none>           <none>
ingress-nginx-admission-patch-7cprp         0/1     Completed   1          4m1s  10.244.2.45     k8s-work2    <none>           <none>
ingress-nginx-controller-5f889d7dcb-q5zzw   1/1     Running     0          3m12s 192.168.10.20   k8s-master   <none>           <none>
[root@k8s-master k8s-install]# kubectl get svc -n ingress-nginx
NAME                                 TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)                      AGE
ingress-nginx-controller             NodePort    10.101.104.16   <none>        80:32397/TCP,443:31686/TCP   5m3s
ingress-nginx-controller-admission   ClusterIP   10.96.142.4     <none>        443/TCP                      5m3s
```

# 使用helm部署
## 创建ingress名称空间
`# kubectl create namespace ingress` 

## 添加仓库
`# helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx` 

## 部署ingress
`# helm install my-release ingress-nginx/ingress-nginx --namespace ingress` 

## 查看验证
`# kubectl get pod -n ingress` 

`# kubectl get svc -n ingress` 

# 访问测试
## 创建资源
```yaml
[root@k8s-master k8s-install]# cat test.yaml 
apiVersion: apps/v1
kind: Deployment
metadata:
  name: myapp
spec:
  replicas: 1
  selector:
    matchLabels:
      app: myapp
  template:
    metadata:
      labels:
        app: myapp
    spec:
      containers:
      - name: myapp
        image: swr.cn-north-4.myhuaweicloud.com/ddn-k8s/docker.io/nginx:1.25.5
        ports:
        - containerPort: 80
          name: http
        resources:
          limits:
            cpu: "1"
            memory: 1Gi
          requests:
            cpu: 100m
            memory: 128Mi
---
apiVersion: v1
kind: Service
metadata:
  name: myapp-svc
spec:
  selector:
    app: myapp
  ports:
  - port: 80
    targetPort:  80
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: myapp-ingreess
  annotations:
    nginx.ingress.kubernetes.io/rewrite-target: /
spec:
  ingressClassName: nginx
  rules:
  - host: myapp.local.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: myapp-svc
            port:
              number: 80
```

## 修改hosts
`192.168.10.10 myapp.local.com`

## 访问测试
![](../../images/img_2201.png)

