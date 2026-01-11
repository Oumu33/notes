# ArgoCD快速体验
# gitlab仓库配置
创建一个名为Argo Demo的仓库，在manifests目录下仅包含应用的yaml文件，文件内容如下

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: myapp
spec:
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
        image: ikubernetes/myapp:v1
        resources:
          limits:
            memory: "128Mi"
            cpu: "500m"
        ports:
        - containerPort: 80
---
apiVersion: v1
kind: Service
metadata:
  name: myapp
spec:
  type: ClusterIP
  selector:
    app: myapp
  ports:
  - port: 80
    targetPort: 80
---
apiVersion: traefik.io/v1alpha1
kind: IngressRoute
metadata:
  name: myapp
spec:
  entryPoints:
  - web
  routes:
  - match: Host(`myapp.test.com`)
    kind: Rule
    services:
      - name: myapp 
        port: 80  
```

gitlab仓库内容如下：

![](https://via.placeholder.com/800x600?text=Image+e6d2ddcb94eee11e)

# argocd配置
## 添加仓库地址
<font style="color:rgb(18, 18, 18);">添加仓库地址，Settings → Repositories，点击 </font><font style="color:rgb(18, 18, 18);background-color:rgb(246, 246, 246);">CONNECT REPO</font><font style="color:rgb(18, 18, 18);"> 按钮添加仓库，填写以下信息</font>

![](https://via.placeholder.com/800x600?text=Image+2103ff9dc9f9a234)

如果集群连接失败，检查argocd-repo-server 日志，是否可以正常访问 git 仓库，账号密码是否正确，是否有权限访问仓库。

验证通过后显示如下，点击创建应用。

![](https://via.placeholder.com/800x600?text=Image+1415967e0391441f)

## 创建应用
填写以下内容

![](https://via.placeholder.com/800x600?text=Image+ba3bd8dd3c789af7)

![](https://via.placeholder.com/800x600?text=Image+e35c79d843d2874d)

创建完后如下所示：

![](https://via.placeholder.com/800x600?text=Image+1592f9f5b52e9143)

# 访问验证
## 验证应用部署状态
查看k8s创建的资源信息，发现已经成功创建了对应的资源

```bash
[root@tiaoban ~]# kubectl get pod 
NAME                                               READY   STATUS    RESTARTS         AGE
myapp-68c8648d6d-54brv                             1/1     Running   0                62s
[root@tiaoban ~]# kubectl get svc
NAME         TYPE           CLUSTER-IP      EXTERNAL-IP      PORT(S)    AGE
myapp        ClusterIP      10.97.189.71    <none>           80/TCP     70s
[root@tiaoban ~]# kubectl get ingressroute
NAME     AGE
myapp    78s
```

访问web页面验证

![](https://via.placeholder.com/800x600?text=Image+61ae3da4c45a147c)

## 版本更新
接下来模拟配置变更，将镜像版本从v1改为v2

![](https://via.placeholder.com/800x600?text=Image+ea61662df509a5c5)

Argo CD默认每180秒同步一次，查看argocd信息，发现已经自动同步了yaml文件，并且正在进行发布

![](https://via.placeholder.com/800x600?text=Image+f7e62874f652860f)

访问web页面状态，发现已经完成了发布工作。

![](https://via.placeholder.com/800x600?text=Image+0aec77624ef25fec)

此时整个应用关联关系如下

![](https://via.placeholder.com/800x600?text=Image+1fce78dccde51e89)

## 版本回退
点击history and rollback即可看到整个应用的所有发布记录，并且可以选择指定版本进行回退操作。

![](https://via.placeholder.com/800x600?text=Image+3556b35a2e00426b)

再次访问发现已经回退到v1版本

![](https://via.placeholder.com/800x600?text=Image+14e7a3f2f73c014b)

# 

