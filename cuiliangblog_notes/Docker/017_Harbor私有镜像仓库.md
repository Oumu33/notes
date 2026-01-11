# Harbor私有镜像仓库

> 来源: Docker
> 创建时间: 2020-12-25T20:28:46+08:00
> 更新时间: 2026-01-11T09:29:25.431423+08:00
> 阅读量: 1000 | 点赞: 0

---

# 一、Harbor私有镜像仓库
1. 安装docker
2. 安装docker-compose
3. 下载harbor离线安装包

[参考链接](https://github.com/goharbor/harbor/releases)

`[root@harbor ~] wget https://github.com/vmware/harbor/releases/download/v1.8.6/harbor-offline-installer-v1.8.6.tgz`

`[root@harbor ~]# tar -xvf harbor-offline-installer-v1.8.6.tgz` 

4. 修改harbor.yml配置文件

![](https://via.placeholder.com/800x600?text=Image+81f2e92cecc958db)

+ 注释https相关配置

![](https://via.placeholder.com/800x600?text=Image+831a09ab5684dca8)

5. 运行install.sh脚本

`[root@harbor harbor]# ./install.sh` 

![](https://via.placeholder.com/800x600?text=Image+feebf7b62313e496)

6. 访问Harbor并登陆。

![](https://via.placeholder.com/800x600?text=Image+cd8c74db6d8dfe7b)

+ 初始用户名admin
+ 初始密码Harbor12345
7. 创建systemd服务管理脚本

```bash
[Unit]
Description=Harbor
After=docker.service systemd-networkd.service systemd-resolved.service
Requires=docker.service
Documentation=http://github.com/vmware/harbor
 
[Service]
Type=simple
Restart=on-failure
RestartSec=5
ExecStart=/usr/local/bin/docker-compose -f /opt/harbor/docker-compose.yml up
ExecReload=/usr/local/bin/docker-compose -f /opt/harbor/docker-compose.yml restart
ExecStop=/usr/local/bin/docker-compose -f /opt/harbor/docker-compose.yml down
 
[Install]
WantedBy=multi-user.target
```



# 二、docker授权访问harbor仓库
1. docker配置文件私有仓库设置

`[root@master ~]# vim /etc/docker/daemon.json` 

![](https://via.placeholder.com/800x600?text=Image+38eab66780d2ab1f)

2. 重启docker

`systemctl daemon-reload` 

`systemctl restart docker` 

3. master节点登陆测试

![](https://via.placeholder.com/800x600?text=Image+48ecc56fdc6e525e)

4. 推送镜像测试

![](https://via.placeholder.com/800x600?text=Image+6693a91dce1e5a0d)

`[root@master ~]# docker tag hello-world 192.168.10.103/library/hello-world:v1` 

`[root@master ~]# docker push 192.168.10.103/library/hello` 


