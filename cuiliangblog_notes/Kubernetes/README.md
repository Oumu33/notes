# Kubernetes

---

## 目录


### 基��知识

- [Kubernetes特性](./001_Kubernetes特性.md)
- [概念和术语](./002_概念和术语.md)
- [集群组件](./003_集群组件.md)
- [抽象对象](./004_抽象对象.md)
- [镜像文件下载](./005_镜像文件下载.md)

### kubeadm集群安装部署

- [安装概述](./006_安装概述.md)
- [环境准备(RHEL)](./007_环境准备(RHEL).md)
- [环境准备(Debian)](./008_环境准备(Debian).md)
- [安装容器运行时(Docker)](./009_安装容器运行时(Docker).md)
- [安装容器运行时(Containerd)](./010_安装容器运行时(Containerd).md)
- [Containerd进阶使用](./011_Containerd进阶使用.md)
- [安装Kubernets集群](./012_安装Kubernets集群.md)

### 周边组件安装部署

- [部署Harbor私有镜像仓库](./013_部署Harbor私有镜像仓库.md)
- [部署Helm包管理工具](./014_部署Helm包管理工具.md)
- [部署Ingress-nginx代理](./015_部署Ingress-nginx代理.md)
- [部署Traefik代理](./016_部署Traefik代理.md)
- [部署Calico网络组件](./017_部署Calico网络组件.md)
- [部署NodeLocalDNS解析](./018_部署NodeLocalDNS解析.md)
- [部署LocalPathProvisioner本地存储](./019_部署LocalPathProvisioner本地存储.md)
- [部署NFS共享文件存储](./020_部署NFS共享文件存储.md)
- [部署MinIO对象存储](./021_部署MinIO对象存储.md)
- [部署Ceph分布式存储](./022_部署Ceph分布式存储.md)
- [部署Dashboard管理面板](./023_部署Dashboard管理面板.md)
- [部署Metrics监控组件](./024_部署Metrics监控组件.md)
- [部署Prometheus监控](./025_部署Prometheus监控.md)
- [部署Thanos监控](./026_部署Thanos监控.md)
- [部署VictoriaMetrics监控](./027_部署VictoriaMetrics监控.md)
- [部署ELK日志收集](./028_部署ELK日志收集.md)
- [部署Loki日志收集](./029_部署Loki日志收集.md)
- [部署MySQL数据库](./030_部署MySQL数据库.md)
- [部署PostgreSQL数据库](./031_部署PostgreSQL数据库.md)
- [部署Redis数据库](./032_部署Redis数据库.md)
- [部署Kafka消息队列](./033_部署Kafka消息队列.md)
- [部署Rabbit MQ消息队列](./034_部署Rabbit_MQ消息队列.md)

### kubectl命令

- [命令格式](./035_命令格式.md)
- [node操作常用命令](./036_node操作常用命令.md)
- [pod常用命令](./037_pod常用命令.md)
- [控制器常用命令](./038_控制器常用命令.md)
- [service常用命令](./039_service常用命令.md)
- [存储常用命令](./040_存储常用命令.md)
- [日常命令总结](./041_日常命令总结.md)

### 资源对象

- [K8S中的资源对象](./042_K8S中的资源对象.md)
- [yuml文件](./043_yuml文件.md)
- [k8s yaml字段大全](./044_k8s_yaml字段大全.md)
- [管理Namespace资源](./045_管理Namespace资源.md)
- [标签与标签选择器](./046_标签与标签选择器.md)
- [Pod资源对象](./047_Pod资源对象.md)
- [Pod生命周期与探针](./048_Pod生命周期与探针.md)
- [资源需求与限制](./049_资源需求与限制.md)
- [Pod服务质量（优先级）](./050_Pod服务质量（优先级）.md)

### 资源控制器

- [Pod控制器](./051_Pod控制器.md)
- [ReplicaSet控制器](./052_ReplicaSet控制器.md)
- [Deployment控制器](./053_Deployment控制器.md)
- [DaemonSet控制器](./054_DaemonSet控制器.md)
- [Job控制器](./055_Job控制器.md)
- [CronJob控制器](./056_CronJob控制器.md)
- [StatefulSet控制器](./057_StatefulSet控制器.md)
- [PDB中断预算](./058_PDB中断预算.md)

### Service和Ingress

- [Service资源介绍](./059_Service资源介绍.md)
- [服务发现](./060_服务发现.md)
- [Service(ClusterIP)](./061_Service(ClusterIP).md)
- [Service(NodePort)](./062_Service(NodePort).md)
- [Service(LoadBalancer)](./063_Service(LoadBalancer).md)
- [Service(ExternalName)](./064_Service(ExternalName).md)
- [自定义Endpoints](./065_自定义Endpoints.md)
- [Headless Service](./066_Headless_Service.md)
- [Ingress资源](./067_Ingress资源.md)
- [nginx-Ingress案例](./068_nginx-Ingress案例.md)

### Traefik

- [知识点梳理](./069_知识点梳理.md)
- [简介](./070_简介.md)
- [部署与配置](./071_部署与配置.md)
- [路由(IngressRoute)](./072_路由(IngressRoute).md)
- [中间件(Middleware)](./073_中间件(Middleware).md)
- [服务(TraefikService)](./074_服务(TraefikService).md)
- [插件](./075_插件.md)
- [traefik hub](./076_traefik_hub.md)
- [配置发现(Consul)](./077_配置发现(Consul).md)

### 存储

- [配置集合ConfigMap](./078_配置集合ConfigMap.md)
- [敏感信息Secret](./079_敏感信息Secret.md)
- [临时存储emptyDir](./080_临时存储emptyDir.md)
- [节点存储hostPath](./081_节点存储hostPath.md)
- [持久存储卷pv/pvc](./082_持久存储卷pv_pvc.md)
- [downwardAPI元数据](./083_downwardAPI元数据.md)
- [本地持久化存储local pv](./084_本地持久化存储local_pv.md)

### 网络

- [网络概述](./085_网络概述.md)
- [网络类型](./086_网络类型.md)
- [flannel网络插件](./087_flannel网络插件.md)
- [网络策略](./088_网络策略.md)
- [网络与策略实例](./089_网络与策略实例.md)

### 安全

- [安全上下文](./090_安全上下文.md)
- [访问控制](./091_访问控制.md)
- [认证](./092_认证.md)
- [鉴权](./093_鉴权.md)
- [准入控制](./094_准入控制.md)
- [示例](./095_示例.md)

### pod调度

- [调度器概述](./096_调度器概述.md)
- [label标签调度](./097_label标签调度.md)
- [node亲和调度](./098_node亲和调度.md)
- [pod亲和调度](./099_pod亲和调度.md)
- [污点和容忍度](./100_污点和容忍度.md)
- [固定节点调度](./101_固定节点调度.md)

### 系统扩展

- [自定义资源类型（CRD）](./102_自定义资源类型（CRD）.md)
- [自定义控制器](./103_自定义控制器.md)

### 资源指标与HPA

- [监控组件安装与使用](./104_监控组件安装与使用.md)
- [自动弹性缩放(HPA)](./105_自动弹性缩放(HPA).md)
- [HPA操作实践(内置指标)](./106_HPA操作实践(内置指标).md)
- [HPA操作实践(自定义指标)](./107_HPA操作实践(自定义指标).md)
- [基于KEDA实现HPA](./108_基于KEDA实现HPA.md)

### helm

- [helm基础与部署](./109_helm基础与部署.md)
- [helm常用命令](./110_helm常用命令.md)
- [Helm Charts](./111_Helm_Charts.md)
- [自定义Charts](./112_自定义Charts.md)
- [helm导出yaml文件](./113_helm导出yaml文件.md)
- [helm上传到harbor chart](./114_helm上传到harbor_chart.md)

### k8s高可用部署

- [kubeadm高可用部署](./115_kubeadm高可用部署.md)
- [离线二进制部署k8s](./116_离线二进制部署k8s.md)
- [其他高可用部署方式](./117_其他高可用部署方式.md)

### 日常维护

- [修改节点pod个数上限](./118_修改节点pod个数上限.md)
- [修改数据目录](./119_修改数据目录.md)
- [集群证书过期更换](./120_集群证书过期更换.md)
- [更改证书有效期](./121_更改证书有效期.md)
- [节点维护](./122_节点维护.md)
- [k8s版本升级](./123_k8s版本升级.md)
- [添加work节点](./124_添加work节点.md)
- [master节点启用pod调度](./125_master节点启用pod调度.md)
- [集群以外节点控制k8s集群](./126_集群以外节点控制k8s集群.md)
- [集群节点重新加入](./127_集群节点重新加入.md)
- [日常错误排查](./128_日常错误排查.md)
- [ETCD节点故障修复](./129_ETCD节点故障修复.md)
- [集群hosts记录](./130_集群hosts记录.md)
- [ns处于Terminating状态删除](./131_ns处于Terminating状态删除.md)
- [Velero集群备份还原与迁移](./132_Velero集群备份还原与迁移.md)
- [kustomize多环境管理](./133_kustomize多环境管理.md)
- [kubectl多集群管理](./134_kubectl多集群管理.md)
- [管理GPU节点](./135_管理GPU节点.md)
- [apiserver 证书添加 certSANs IP](./136_apiserver_证书添加_certSANs_IP.md)

### OpenTelemetry可观测性

- [可观测性与链路追踪介绍](./137_可观测性与链路追踪介绍.md)
- [OpenTelemetry部署](./138_OpenTelemetry部署.md)
- [应用埋点(Instrumentation)](./139_应用埋点(Instrumentation).md)
- [数据收集(Collector)](./140_数据收集(Collector).md)
- [链路追踪数据收集与导出](./141_链路追踪数据收集与导出.md)
- [指标数据收集与导出](./142_指标数据收集与导出.md)
- [日志数据收集与导出](./143_日志数据收集与导出.md)
- [Grafana全家桶方案](./144_Grafana全家桶方案.md)
- [Elastic EDOT全家桶方案](./145_Elastic_EDOT全家桶方案.md)

### cka考题

- [准备工作](./146_准备工作.md)
- [故障排除](./147_故障排除.md)
- [工作负载和调度](./148_工作负载和调度.md)
- [服务和网络](./149_服务和网络.md)
- [存储](./150_存储.md)
- [集群架构、安装和配置](./151_集群架构、安装和配置.md)
