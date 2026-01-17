# ReplicaSet控制器
# 一、概述


1. 作用：用于确保由其管控的Pod对象副本数在任一时刻都能精确满足期望的数量。ReplicaSet控制器资源启动后会查找集群中匹配其标签选择器的Pod资源对象，当前活动对象的数量与期望的数量不吻合时，多则删除，少则通过Pod模板创建以补足。
2. 功能：
+ 确保Pod资源对象的数量：ReplicaSet需要确保由其控制运行的Pod副本数量精确吻合配置中定义的期望值，否则就会自动补足所缺或终止所余。
+ 确保Pod健康运行：探测到由其管控的Pod对象因其所在的工作节点故障而不可用时，自动请求由调度器于其他工作节点创建缺失的Pod副本。
+ 弹性伸缩：业务规模因各种原因时常存在明显波动，在波峰或波谷期间，可以通过ReplicaSet控制器动态调整相关Pod资源对象的数量。
+ 通过HPA（HroizontalPodAutoscaler）控制器实现Pod资源规模的自动伸缩。



# 二、创建ReplicaSet


1. 可以使用YAML或JSON格式的清单文件定义其配置它的spec字段一般嵌套使用以下几个属性字段。

| replicas | integer | 期望的Pod对象副本数 |
| --- | --- | --- |
| selector | Object | 当前控制器匹配Pod对象副本的标签选择器，支持matchLabels和matchExpressions两种匹配机制 |
| template | Object | 用于补足Pod副本数量时使用的Pod模板资源 |
| minReadySeconds | integer | 新建的Pod对象，在启动后的多长时间内如果其容器未发生崩溃等异常情况即被视为“就绪”；默认为0秒，表示一旦就绪性探测成功，即被视作可用 |




2. 示例：



+ 创建rs-example.yaml文件



+ 创建rs资源：  
`$ kubectl apply -f rs-example.yaml` 
+ 查看名称为"rs-demo"的pod资源  
`$ kubectl get pods -l app=rs-demo` 



+ 查看replicaset控制器资源状态

![img_992.png](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_992.png)



# 三、 ReplicaSet管控Pod对象


1. 缺少Pod副本

> 任何原因导致的相关Pod对象丢失，都会由ReplicaSet控制器自动补足。
>

+ 手动删除上面列出的一个Pod对象  
`$ kubectl delete pods rs-example-5ncrr` 
+ 再次列出相关Pod对象的信息，可以看到rs-example-5ncrr被删除，而新的Pod对象rs-example-jfp4k被rs-example控制器创建：



+ 强行修改隶属于控制器rs-example的Pod资源标签，会导致它不再被控制器作为副本计数，这也将触发控制器的Pod对象副本缺失补足机制。  
例如，将rs-example-26fnb的标签app的值改为rs：





2. 多出pod副本

> 一旦被标签选择器匹配到的Pod资源数量因任何原因超出期望值，多余的部分都将被控制器自动删除。
>



+ 例如，为pod-example手动为其添加“app: rs-demo”标签：  
`$ kubectl label pods rs-example-26fnb app=rs-demp --overwrite` 
+ 再次列出相关的Pod资源，可以看到rs-example控制器启动了删除多余Pod的操作，pod-example正处于终止过程中：  
![img_4624.png](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_4624.png)  
这就意味着，任何自主式的或本隶属于其他控制器的Pod资源其标签变动的结果一旦匹配到了其他的副本数足额的控制器，就会导致这类Pod资源被删除。



# 三、查看replicaset资源信息


1. 查看所有replicaset（子资源）信息

![img_3936.png](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_3936.png)

2. 查看所有replicaset（子资源）详细信息  
`$ kubectl describe replicasets`   
`$ kubectl describe replicasets/rs-example` 



# 四、更新ReplicaSet控制器


1. 更改Pod模板：升级应用  
ReplicaSet控制器的Pod模板可随时按需修改，但它仅影响这之后由其新建的Pod对象，对已有的副本不会产生作用。但在用户逐个手动关闭其旧版本的Pod资源后就能以新代旧，实现控制器下应用版本的滚动升级。



+ 修改原ReplicaSet.yaml文件镜像

 

+ apply文件，查看image信息  
`kubectl get pod -o custom-columns=pod_name:metadata.name,pod_image:spec.containers[0].image`   
  
rs-example管控的现存Pod对象使用的仍然是原来版本中定义的镜像
+ 删除pod后自动生成新版pod

![img_4048.jpeg](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_4048.jpeg)



2. 扩容与缩容  
改动ReplicaSet控制器对象配置中期望的Pod副本数量（replicas字段）会由控制器实时做出响应，从而实现应用规模的水平伸缩。  
kubectl还提供了一个专用的子命令scale用于实现应用规模的伸缩，它支持从资源清单文件中获取新的目标副本数量，也可以直接在命令行通过“--replicas”选项进行读取，
+ 将rs-example控制器的Pod副本数量提升至5个：  
`$ kubectl scale replicasets rs-example --replicas=5`   

+ 由下面显示的rs-example资源的状态可以看出，将其Pod资源副本数量扩展至5个的操作已经成功完成：  
![img_2048.png](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_2048.png)
+ 收缩规模的方式与扩展相同，只需要明确指定目标副本数量即可。



# 五、删除ReplicaSet控制器资源


1. 使用kubectl delete命令删除ReplicaSet对象时默认会一并删除其管控的各Pod对象。  
`$ kubectl delete replicasets rs-example` 



# 六、故障转移


1. 目前有3个副本分别运行在node1和node2上。



2. 现在模拟 k8s-node2 故障，关闭该节点。

![img_208.png](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_208.png)

3. 等待一段时间，Kubernetes 会检查到 k8s-node2 不可用，将 k8s-node2 上的 Pod 标记为 terminating 状态，并在 k8s-node1 上新创建两个 Pod，维持总副本数为 3。



4. 当 k8s-node2 恢复后，terminating的 Pod 会被删除，不过已经运行的 Pod不会重新调度回 k8s-node2。

![img_2352.png](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_2352.png)




