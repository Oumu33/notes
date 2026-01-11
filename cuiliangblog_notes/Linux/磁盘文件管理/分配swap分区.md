# 分配swap分区
# 一、新建swap分区
[root@localhost ~]# fdisk /dev/sdb

别忘记把分区ID改为82

# 二、格式化
[root@localhost ~]# mkswap /dev/sdb1

# 三、加入swap分区
[root@localhost ~]# swapon /dev/sdb1

#加入swap分区

[root@localhost ~]# swapoff /dev/sdb1

#取消swap分区

# 四、swap分区开机自动挂载
[root@localhost ~]# vi /etc/fstab

/dev/sdb1 swap swap defaults 0 0

# 五、free命令
1. 查看内存与swap分区使用状况

[root@localhost ~]# free

![](../../images/img_3808.png)

+ cached（缓存）：是指把读取出来的数据保存在内存当中，当再次读取时，不用读取硬盘而直接从内存当中读取，加速了数据的读取过程
+ buffer（缓冲）：是指在写入数据时，先把分散的写入操作保存到内存当中，当达到一定程度再集中写入硬盘，减少了磁盘碎片和硬盘的反复寻道，加速了数据的写入过程

 

