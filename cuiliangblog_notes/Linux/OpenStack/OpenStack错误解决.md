# OpenStack错误解决
# 一、创建实例时提示找不到有效主机
1. 错误提示

![](../../images/img_2513.png)

1. 查看 neutron 代理状态

![](../../images/img_2514.png)

1. 重启neutron相关服务

![](../../images/img_2515.png)

# 二、开机自动启动pxe装机
1. 错误提示

![](../../images/img_2516.png)

1. 编辑计算节点配置

Compute # vim /etc/nova/nova.conf

![](../../images/img_2517.png)

1. 重启服务

compute # systemctl restart libvirtd.service openstack-nova-compute.service

# 三、安装完成后界面无法打开
1. 错误提示

tail /etc/httpd/logs/error_log

![](../../images/img_2518.png)

1. 在配置文件中增加如下的一句解决问题

vim /etc/httpd/conf.d/openstack-dashboard.conf

WSGIApplicationGroup %{GLOBAL}

1. 重启服务

