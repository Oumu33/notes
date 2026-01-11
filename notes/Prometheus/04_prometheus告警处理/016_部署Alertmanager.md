# 部署Alertmanager
# 一、下载安装Alertmanager
1. 获取并安装软件包AlertManager二进制包
+ 下载地址
2. 启动Alertmanager

Alermanager会将数据保存到本地中，默认的存储路径为data/。因此，在启动Alertmanager之前需要创建相应的目录：

./alertmanager

1. 查看运行状态

Alertmanager启动后可以通过9093端口访问

![](https://via.placeholder.com/800x600?text=Image+ea7348caffd3190b)

# 二、关联Prometheus与Alertmanager
1. 编辑Prometheus配置文件prometheus.yml,并添加以下内容

![](https://via.placeholder.com/800x600?text=Image+96c64124e6098c61)

1. 重启Prometheus服务，成功后，可以从[http://192.168.33.10:9090/config](http://192.168.33.10:9090/config)查看alerting配置是否生效。

![](https://via.placeholder.com/800x600?text=Image+f1777df568fc4211)

1. 模拟触发问题，等待Prometheus告警进行触发状态：

![](https://via.placeholder.com/800x600?text=Image+ec76480a5a48e7e6)

1. 查看Alertmanager      UI此时可以看到Alertmanager接收到的告警信息。

![](https://via.placeholder.com/800x600?text=Image+31fecf6dafaf35e7)

 


