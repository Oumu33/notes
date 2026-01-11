# OpenStack错误解决

> 来源: Linux
> 创建时间: 2021-02-16T16:40:17+08:00
> 更新时间: 2026-01-11T09:42:12.827648+08:00
> 阅读量: 704 | 点赞: 0

---

# 一、创建实例时提示找不到有效主机
1. 错误提示

![](https://via.placeholder.com/800x600?text=Image+ae7b4df285f058d6)

1. 查看 neutron 代理状态

![](https://via.placeholder.com/800x600?text=Image+cfcdf0938acacfe8)

1. 重启neutron相关服务

![](https://via.placeholder.com/800x600?text=Image+9306af0d9c3b2314)

# 二、开机自动启动pxe装机
1. 错误提示

![](https://via.placeholder.com/800x600?text=Image+86a30a53d1681419)

1. 编辑计算节点配置

Compute # vim /etc/nova/nova.conf

![](https://via.placeholder.com/800x600?text=Image+b1a62b4e757fea66)

1. 重启服务

compute # systemctl restart libvirtd.service openstack-nova-compute.service

# 三、安装完成后界面无法打开
1. 错误提示

tail /etc/httpd/logs/error_log

![](https://via.placeholder.com/800x600?text=Image+0bf51f711c16c578)

1. 在配置文件中增加如下的一句解决问题

vim /etc/httpd/conf.d/openstack-dashboard.conf

WSGIApplicationGroup %{GLOBAL}

1. 重启服务


