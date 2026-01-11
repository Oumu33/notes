# Fleet部署与使用

> 来源: ELK Stack
> 创建时间: 2023-07-23T13:02:36+08:00
> 更新时间: 2026-01-11T09:27:07.002741+08:00
> 阅读量: 1395 | 点赞: 0

---

es为我们内置了大多数场景下日志的采集与可视化分析配置，大部分操作在kibanaUI中点击操作便可完成复杂的采集流程。我们只需要添加fleet服务器并配置代理策略即可。

# 安装Fleet Server
## 配置Fleet Server
进入fleet菜单，点击添加fleet服务器。

![](https://via.placeholder.com/800x600?text=Image+71dc538c89df261d)

填写要部署fleet服务器的地址，格式为https://fleet服务器ip:8220，本实验填写地址为[https://192.168.10.132:8220](https://192.168.10.132:8220)

![](https://via.placeholder.com/800x600?text=Image+95fec5713daa8ee5)

生成fleet Server部署命令

![](https://via.placeholder.com/800x600?text=Image+0a1fca349a9194d5)

## 部署Fleet Server
本实验中在cold节点部署Fleet Server，根据kibana提示，在cold节点执行命令

```bash
[root@es-master ~]# curl -L -O https://artifacts.elastic.co/downloads/beats/elastic-agent/elastic-agent-8.8.2-linux-x86_64.tar.gz
[root@es-master ~]# tar -zxf elastic-agent-8.8.2-linux-x86_64.tar.gz
[root@es-master ~]# cd elastic-agent-8.8.2-linux-x86_64
[root@es-master elastic-agent-8.8.2-linux-x86_64]# ./elastic-agent install \
  --fleet-server-es=https://192.168.8.5:9200 \
  --fleet-server-service-token=AAEAAWVsYXN0aWMvZmxlZXQtc2VydmVyL3Rva2VuLTE2ODk1ODQyMDczMjc6Y2F4SXp0djdSdWFob3FiRGFXMngxQQ \
  --fleet-server-policy=fleet-server-policy \
  --fleet-server-es-ca-trusted-fingerprint=63324d05618f9250edd4cf4a87e03ee6a35bc3b1041691e88a7d52f9fc2459d4 \
  --fleet-server-port=8220
Elastic Agent will be installed at /opt/Elastic/Agent and will run as a service. Do you want to continue? [Y/n]:y
{"log.level":"info","@timestamp":"2023-07-17T17:28:06.353+0800","log.origin":{"file.name":"cmd/enroll_cmd.go","file.line":410},"message":"Generating self-signed certificate for Fleet Server","ecs.version":"1.6.0"}
{"log.level":"info","@timestamp":"2023-07-17T17:28:10.468+0800","log.origin":{"file.name":"cmd/enroll_cmd.go","file.line":773},"message":"Waiting for Elastic Agent to start Fleet Server","ecs.version":"1.6.0"}
{"log.level":"info","@timestamp":"2023-07-17T17:28:14.472+0800","log.origin":{"file.name":"cmd/enroll_cmd.go","file.line":787},"message":"Fleet Server - Running on policy with Fleet Server integration: fleet-server-policy; missing config fleet.agent.id (expected during bootstrap process)","ecs.version":"1.6.0"}
{"log.level":"info","@timestamp":"2023-07-17T17:28:14.907+0800","log.origin":{"file.name":"cmd/enroll_cmd.go","file.line":478},"message":"Starting enrollment to URL: https://es-cold:8220/","ecs.version":"1.6.0"}
{"log.level":"info","@timestamp":"2023-07-17T17:28:16.899+0800","log.origin":{"file.name":"cmd/enroll_cmd.go","file.line":276},"message":"Successfully triggered restart on running Elastic Agent.","ecs.version":"1.6.0"}
Successfully enrolled the Elastic Agent.
Elastic Agent has been successfully installed.

# 安装完成后，Fleet Server服务文件路径在/opt/Elastic/Agent
```

## Fleet Server部署完成
fleet server部署完成后，kibana界面即可显示fleet server相关信息。

![](https://via.placeholder.com/800x600?text=Image+44666ecc6231ad52)

# 安装Elastic Agent
以Linux审计日志采集为例，配置并安装Elastic agent

## 配置Elastic Agent
打开kibana集成菜单

![](https://via.placeholder.com/800x600?text=Image+3b8235552a89eebf)

添加Linux登录审计日志

![](https://via.placeholder.com/800x600?text=Image+4f8743e5b77ca4cb)

配置Agent相关设置

![](https://via.placeholder.com/800x600?text=Image+1155f7109ed5b4d6)

点击保存并继续，提示已添加auditd logs集成

![](https://via.placeholder.com/800x600?text=Image+811b0aa11405f865)

在添加代理页面，选择在fleet中注册，页面自动生成注册命令

![](https://via.placeholder.com/800x600?text=Image+d9d0f3d41a54e491)

## 部署Elastic Agent
在所有需要采集Linux登录审计日志的机器执行

```bash
[root@es-hot1 ~]# curl -L -O https://artifacts.elastic.co/downloads/beats/elastic-agent/elastic-agent-8.8.2-linux-x86_64.tar.gz
[root@es-hot1 ~]# tar -zxf elastic-agent-8.8.2-linux-x86_64.tar.gz 
[root@es-hot1 ~]# cd elastic-agent-8.8.2-linux-x86_64
[root@es-hot1 elastic-agent-8.8.2-linux-x86_64]# ./elastic-agent install --insecure --url=https://192.168.10.132:8220 --enrollment-token=bkxNVGVJa0J2SHUxWXJaMC1IVjc6S0RHMVVpc2lUa09mblJDWlpkdEN5QQ==
Elastic Agent will be installed at /opt/Elastic/Agent and will run as a service. Do you want to continue? [Y/n]:y
{"log.level":"warn","@timestamp":"2023-07-21T18:57:06.341+0800","log.logger":"tls","log.origin":{"file.name":"tlscommon/tls_config.go","file.line":104},"message":"SSL/TLS verifications disabled.","ecs.version":"1.6.0"}
{"log.level":"info","@timestamp":"2023-07-21T18:57:06.878+0800","log.origin":{"file.name":"cmd/enroll_cmd.go","file.line":478},"message":"Starting enrollment to URL: https://192.168.10.132:8220/","ecs.version":"1.6.0"}
{"log.level":"warn","@timestamp":"2023-07-21T18:57:07.130+0800","log.logger":"tls","log.origin":{"file.name":"tlscommon/tls_config.go","file.line":104},"message":"SSL/TLS verifications disabled.","ecs.version":"1.6.0"}
{"log.level":"info","@timestamp":"2023-07-21T18:57:08.932+0800","log.origin":{"file.name":"cmd/enroll_cmd.go","file.line":276},"message":"Successfully triggered restart on running Elastic Agent.","ecs.version":"1.6.0"}
Successfully enrolled the Elastic Agent.
Elastic Agent has been successfully installed.
```

记得添加<font style="color:rgb(31, 35, 40);">--insecure参数，否则会报x509证书错误，实测指定证书也不行。参考链接：</font>[<font style="color:rgb(31, 35, 40);">https://github.com/elastic/elastic-agent/issues/2042</font>](https://github.com/elastic/elastic-agent/issues/2042)

## <font style="color:rgb(31, 35, 40);">Elastic Agent部署完成</font>
执行完命令后，查看kibana页面，已成功注册代理

![](https://via.placeholder.com/800x600?text=Image+7c458ca9204ff74c)

点击fleet可以看到已成功采集es-master节点信息。

![](https://via.placeholder.com/800x600?text=Image+9b4f1a06088c6995)

其他节点也依次执行上述步骤，执行完成后，fleet页面信息如下所示

![](https://via.placeholder.com/800x600?text=Image+35afa54e4917b598)

## 添加其他集成
以添加Elasticsearch为例，在集成菜单中找到Elasticsearch并添加

![](https://via.placeholder.com/800x600?text=Image+936d082fb47c9b8b)

由于先前已经在所有Linux服务器上配置了Linux Auditd Agent policy，es策略与之相同，因此选用该策略即可

![](https://via.placeholder.com/800x600?text=Image+2027ef6eb84c0743)

修改logs的默认值，指定日志路径

![](https://via.placeholder.com/800x600?text=Image+65b5b2ddfeace3f3)

修改metrics的默认值，修改为https，填写账号密码与ca证书路径

```bash
certificate_authorities: ["/etc/elasticsearch/certs/http_ca.crt"]
```

![](https://via.placeholder.com/800x600?text=Image+1c70e36afdb9f016)

添加完成后查看已经集成的代理，显示Elasticsearch信息。

![](https://via.placeholder.com/800x600?text=Image+8343a66d95adbb45)

# 查看数据
## 查看dashboard
当我们添加Elastic代理集成后，会自动为我们创建相关的dashboard，接下来以Elasticsearch为例

![](https://via.placeholder.com/800x600?text=Image+ce4deafd4ad0d075)

点击资产标签，既可查看默认的dashboard信息，点击其中一个查看详情

![](https://via.placeholder.com/800x600?text=Image+fb5a437beee48281)

dashboard内容如下所示

![](https://via.placeholder.com/800x600?text=Image+d029dbbb5c4a19e5)

## 查看数据流内容
如果我们想查看日志的详细内容，可以通过添加discover查看，以auditd.log为例。可知审计日志数据集名称为auditd.log

![](https://via.placeholder.com/800x600?text=Image+a713fb45189b13da)

接下来创建kibana discover，选择菜单——>Stack Management——>kibana discover

![](https://via.placeholder.com/800x600?text=Image+676e0761efd2aa0b)

接下来创建数据视图，填写内容如下：

![](https://via.placeholder.com/800x600?text=Image+62d5ca43a99d9adb)

打开discover菜单，选择auditd.log，既可查看详细的日志审计内容。

![](https://via.placeholder.com/800x600?text=Image+d0d60f476e4f9477)

# 参考文档
Elastic Agent介绍：[https://www.elastic.co/guide/en/fleet/current/beats-agent-comparison.html#supported-outputs-beats-and-agent](https://www.elastic.co/guide/en/fleet/current/beats-agent-comparison.html#supported-outputs-beats-and-agent)

Fleet Server介绍：[https://www.elastic.co/guide/en/fleet/8.8/fleet-server.html](https://www.elastic.co/guide/en/fleet/8.8/fleet-server.html)


