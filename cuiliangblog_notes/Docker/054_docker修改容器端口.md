# docker修改容器端口

> 来源: Docker
> 创建时间: 2021-01-08T11:38:48+08:00
> 更新时间: 2026-01-11T09:29:50.925619+08:00
> 阅读量: 741 | 点赞: 0

---

# 一、


[https://blog.csdn.net/m0_37886429/article/details/82757116](https://blog.csdn.net/m0_37886429/article/details/82757116)



容器的配置文件路径：

`/var/lib/docker/containers/[hash_of_the_container]/hostconfig.json`

    其中的hashofthecontainer是docker镜像的hash值，可以通过docker ps或者docker inspect containername查看。（CONTAINER ID就可以看出来）

![](https://via.placeholder.com/800x600?text=Image+554d76814478e401)

 

![](https://via.placeholder.com/800x600?text=Image+b1c75da5b7400ec5)

    如上图，文件中其中有一项是PortBindings，其中8080/tcp对应的是容器内部的8080端口，HostPort对应的是映射到宿主机的端口9190。8361/tcp对应的是容器内部的8361端口，HostPort对应的是映射到宿主机的端口9191。按需修改端口，然后重启docker服务，再启动容器服务就可以了。

1. `systemctl restart docker`

    优缺点：这个方法的优点是没有副作用，操作简单。缺点是需要重启整个docker服务，如果在同一个宿主机上运行着多个容器服务的话，就会影响其他容器服务。


