# label标签调度

> 来源: Kubernetes
> 创建时间: 2021-03-08T16:30:21+08:00
> 更新时间: 2026-01-11T09:10:19.802558+08:00
> 阅读量: 1153 | 点赞: 0

---

# 前言
默认情况下，scheduler 会将 pod 调度到所有可用的 Node，不过有些情况我们希望将 Pod 部署到指定的 Node，比如将有大量磁盘 I/O 的 Pod 部署到配置了 SSD 的 Node；或者 Pod 需要 GPU，需要运行在配置了 GPU 的节点上。

kubernetes 通过 label 来实现这个功能

label 是 key-value 对，各种资源都可以设置 label，灵活添加各种**自定义属性**。比如执行如下命令标注 k8s-node1 是配置了 SSD 的节点

# 操作实践
## 节点添加标签
首先我们给 k8s-node1 节点打上一个 ssd 的标签

```bash
kubectl label node k8s-node1 disktype=ssd
```

查看节点标签

```bash
kubectl get node --show-labels
```

![](https://via.placeholder.com/800x600?text=Image+91982f577538829f)

`disktype=ssd` 已经成功添加到 k8s-node1，除了 `disktype`，Node 还有几个 Kubernetes 自己维护的 label。

## 资源清单指定标签
有了自定义的 disktype=ssd 这个标签，只需要在配置文件中定义 nodeselector 为这个自定义标签，就可以指定 pod 在 k8s-node1 中运行

![](https://via.placeholder.com/800x600?text=Image+e9e8960f71190242)

部署 deployment 验证

![](https://via.placeholder.com/800x600?text=Image+2f98bd92adb476ca)

全部 6 个副本都运行在 k8s-node1 上，符合我们的预期。

要删除 label `disktype`，执行如下命令：

kubectl label node k8s-node1 disktype-

node/k8s-node1 labeled

不过删除标签 并不会重新部署，所以 pod 依旧是在 k8s-node1 上。

![](https://via.placeholder.com/800x600?text=Image+0200914fe48c6c54)

要想让 k8s-node2 也参与到工作负载，则必须删掉当前的 deployment，并删除或注释掉配置文件中的 nodeSelector 配置。

![](https://via.placeholder.com/800x600?text=Image+b6b8fecb2a1cb83a)

![](https://via.placeholder.com/800x600?text=Image+4dbeba022a68f27d)

我们看到之前的 pod 会被全部删除掉，并重新调度到不同的 k8s 节点上。


