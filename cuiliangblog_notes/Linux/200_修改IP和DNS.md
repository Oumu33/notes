# 修改IP和DNS

> 来源: Linux
> 创建时间: 2024-10-06T00:58:09+08:00
> 更新时间: 2026-01-11T09:43:20.667370+08:00
> 阅读量: 219 | 点赞: 0

---

# 修改IP
## 修改配置文件
```yaml
root@ubuntu20:~# vim /etc/netplan/50-cloud-init.yaml
network:
    ethernets:
        ens33:
          dhcp4: false # 动态ip
          addresses: [192.168.10.33/24]
          gateway4: 192.168.10.2
    version: 2
```

## 应用配置
```bash
netplan apply
```

# 修改DNS
## 修改配置
```bash

root@ubuntu20:~# mv /etc/resolv.conf /etc/resolv.conf.bak
root@ubuntu20:~# ln -s /run/systemd/resolve/resolv.conf /etc/
root@ubuntu20:~# vim /etc/systemd/resolved.conf
DNS=8.8.8.8 114.114.114.114
root@ubuntu20:~# systemctl restart systemd-resolved
root@ubuntu20:~# systemctl enable systemd-resolved
```

## 查看验证
```bash
root@ubuntu20:~# systemd-resolve --status | grep 'DNS Servers' -A2
```


