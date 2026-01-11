# KVM磁盘配置

> 分类: Linux > kvm虚拟化
> 更新时间: 2026-01-10T23:35:00.438720+08:00

---

# 一、LVM作为storage pool
1. 宿主机添加磁盘

![](../../images/img_2636.png)

1. 给/dev/sdc分区

![](../../images/img_2637.png)

1. 创建pv

![](../../images/img_2638.png)

1. 创建vg

![](../../images/img_2639.png)

1. 创建lv

![](../../images/img_2640.png)

1. 创建了一个 Storage Pool 的定义文件

![](../../images/img_2641.png)

 

![](../../images/img_2642.png)

1. 加载定义文件

![](../../images/img_2643.png)

1. 启用vg1

![](../../images/img_2644.png)

1. 查看使用vg1

![](../../images/img_2645.png)

# 二、创建虚拟机镜像（虚拟机安装位置）
1. 创建虚拟机镜像文件

![](../../images/img_2646.png)

1. 查看虚拟机镜像文件

![](../../images/img_2647.png)

1. 使用虚拟机镜像文件

![](../../images/img_2648.png)

# 三、基础镜像、派生文件
1. 创建基础镜像文件

![](../../images/img_2649.png)

1. 指定后端文件
2. ![](../../images/img_2650.png)
+ -f：指定文件的格式
+ -o：选项中使用了backing_file这个选项来指定其后端镜像文件，那么这个创建的镜像文件new_1.qcow2只记录操作过程仅记录与基础镜像文件的差异部分

![](../../images/img_2651.png)

1. 创建new_base.qcow2镜像文件作为另一个基础镜像

![](../../images/img_2652.png)

1. 改变new_1基础镜像文件为new_base.qcow2

![](../../images/img_2653.png)

1. 查看new_1镜像文件信息

![](../../images/img_2654.png)

1. 使用新派生镜像

![](../../images/img_2655.png)

+ 派生镜像是在基础镜像的基础上，做个性化定制
1. 将基础镜像和派生镜像合并，生成新的基础镜像

![](../../images/img_2656.png)

1. 查看新基础镜像信息

![](../../images/img_2657.png)

# 四、转换镜像格式
1. 查看初始镜像信息

![](../../images/img_2658.png)

1. 将raw镜像转换为qcow2格式

![](../../images/img_2659.png)

+ qemu-img    convert    -f         源格式    -O 目标格式    源磁盘         目标磁盘
1. 查看转换后的磁盘镜像信息

![](../../images/img_2660.png)

1. 压缩镜像文件（只有qcow2和qcow格式的镜像文件才支持压缩）

![](../../images/img_2661.png)

# 五、改变磁盘大小
1. 查看初始镜像信息

![](../../images/img_2662.png)

1. 增加磁盘大小

![](../../images/img_2663.png)

1. 减少磁盘大小

![](../../images/img_2664.png)

+ qcow2格式文件不支持缩小镜像的操作。

# 六、磁盘快照
1. 创建磁盘快照

![](../../images/img_2665.png)

1. 查看磁盘快照

![](../../images/img_2666.png)

1. 使用磁盘快照

![](../../images/img_2667.png)

1. 删除磁盘快照

![](../../images/img_2668.png)

# 七、基本镜像和增量镜像实验
| 虚拟机类型 | 虚拟机名称 | 镜像名称 | 配置文件名称 |
| --- | --- | --- | --- |
| 基本镜像 | centos7.1 | centos7.0.qcow2 | Centos7.1.xml |
| 增量镜像 | centos7-add | centos7-add.img | centos7-add.xml |


1. 查看基本镜像

![](../../images/img_2669.png)

1. 创建增量镜像

![](../../images/img_2670.png)

1. 创建增量镜像虚拟机xml配置文件

![](../../images/img_2671.png)

![](../../images/img_2672.png)

1. 修改xml配置文件

![](../../images/img_2673.png)

![](../../images/img_2674.png)

![](../../images/img_2675.png)

1. 加载增量虚拟机配置文件

![](../../images/img_2676.png)

1. 查看虚拟机列表并启动增量虚拟机

![](../../images/img_2677.png)

1. 查看基础虚拟机和增量虚拟机的原始存储大小

![](../../images/img_2678.png)

1. 在增量虚拟机上创建1G大小文件

![](../../images/img_2679.png)

1. 查看基础虚拟机和增量虚拟机的当前存储大小

![](../../images/img_2680.png)

+ 基础镜像大小不变，增量镜像增加了1G

