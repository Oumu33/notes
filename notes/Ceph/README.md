# Ceph

## 目录


### 基础知识

- [存储基础](./001_存储基础.md)
- [分布式存储](./002_分布式存储.md)
- [存储类型](./003_存储类型.md)
- [Ceph架构](./004_Ceph架构.md)
- [存储原理](./005_存储原理.md)

### Ceph集群部署与k8s使用

- [Cephadm集群部署](./006_Cephadm集群部署.md)
- [k8s使用ceph-资源部署](./007_k8s使用ceph-资源部署.md)
- [k8s使用ceph-RBD](./008_k8s使用ceph-RBD.md)
- [k8s使用ceph-cephfs](./009_k8s使用ceph-cephfs.md)

### 认证授权与用户管理

- [认证管理](./010_认证管理.md)
- [用户权限管理](./011_用户权限管理.md)
- [密钥环管理](./012_密钥环管理.md)

### 集群管理与操作

- [集群管理](./013_集群管理.md)
- [POOL管理](./014_POOL管理.md)
- [PG管理](./015_PG管理.md)
- [OSD管理](./016_OSD管理.md)
- [MON管理](./017_MON管理.md)
- [集群扩容](./018_集群扩容.md)
- [更换故障盘](./019_更换故障盘.md)
- [集群缩减](./020_集群缩减.md)
- [集群维护](./021_集群维护.md)

### Ceph块存储

- [客户端使用RBD](./022_客户端使用RBD.md)
- [RBD存储空间回收](./023_RBD存储空间回收.md)
- [RBD镜像空间动态伸缩](./024_RBD镜像空间动态伸缩.md)
- [RBD快照](./025_RBD快照.md)

### Ceph文件系统

- [使用CephFS(内核空间)](./026_使用CephFS(内核空间).md)
- [使用CephFS(用户空间)](./027_使用CephFS(用户空间).md)
- [使用CephFS(NFS)](./028_使用CephFS(NFS).md)
- [管理CephFS](./029_管理CephFS.md)
- [MDS多活配置](./030_MDS多活配置.md)

### Ceph对象存储

- [RadosGW介绍](./031_RadosGW介绍.md)
- [RadosGW部署](./032_RadosGW部署.md)
- [使用RGW(S3 API)](./033_使用RGW(S3_API).md)
- [使用RGW(Swift API)](./034_使用RGW(Swift_API).md)

### 常见故障处理

- [backfill toofull(集群空间满)](./035_backfill_toofull(集群空间满).md)
- [slow OSD heartbeats(节点通信延迟)](./036_slow_OSD_heartbeats(节点通信延迟).md)
- [clock skew detected(节点时钟偏移)](./037_clock_skew_detected(节点时钟偏移).md)
- [mon low disk space(SSTS file占空间)](./038_mon_low_disk_space(SSTS_file占空间).md)
- [pg inconsistent(PG副本不一致)](./039_pg_inconsistent(PG副本不一致).md)
- [MON故障处理](./040_MON故障处理.md)
- [OSD故障处理](./041_OSD故障处理.md)
- [PG故障处理](./042_PG故障处理.md)
- [Ceph节点故障处理](./043_Ceph节点故障处理.md)

### ceph进阶

- [特定OSD上创建存储池](./044_特定OSD上创建存储池.md)
- [Ceph性能测试](./045_Ceph性能测试.md)

### Rook

- [Rook介绍](./046_Rook介绍.md)
- [Rook快速使用](./047_Rook快速使用.md)
- [定制Rook集群](./048_定制Rook集群.md)
- [启用Prometheus监控](./049_启用Prometheus监控.md)
- [RBD块存储服务](./050_RBD块存储服务.md)
- [CephFS共享文件存储](./051_CephFS共享文件存储.md)
- [RGW对象存储服务](./052_RGW对象存储服务.md)
- [集群扩缩容](./053_集群扩缩容.md)
- [存储扩容](./054_存储扩容.md)
- [卷快照与克隆](./055_卷快照与克隆.md)
- [卷组快照与克隆](./056_卷组快照与克隆.md)
- [CRD资源配置](./057_CRD资源配置.md)
- [Ceph高级配置](./058_Ceph高级配置.md)
- [常见问题](./059_常见问题.md)
