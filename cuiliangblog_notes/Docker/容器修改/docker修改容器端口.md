# docker修改容器端口
# 一、


[https://blog.csdn.net/m0_37886429/article/details/82757116](https://blog.csdn.net/m0_37886429/article/details/82757116)



容器的配置文件路径：

`/var/lib/docker/containers/[hash_of_the_container]/hostconfig.json`

    其中的hashofthecontainer是docker镜像的hash值，可以通过docker ps或者docker inspect containername查看。（CONTAINER ID就可以看出来）

![](../../images/img_1312.jpeg)

 

![](../../images/img_1313.png)

    如上图，文件中其中有一项是PortBindings，其中8080/tcp对应的是容器内部的8080端口，HostPort对应的是映射到宿主机的端口9190。8361/tcp对应的是容器内部的8361端口，HostPort对应的是映射到宿主机的端口9191。按需修改端口，然后重启docker服务，再启动容器服务就可以了。

1. `systemctl restart docker`

    优缺点：这个方法的优点是没有副作用，操作简单。缺点是需要重启整个docker服务，如果在同一个宿主机上运行着多个容器服务的话，就会影响其他容器服务。

