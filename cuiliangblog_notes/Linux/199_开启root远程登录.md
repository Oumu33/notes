# 开启root远程登录

> 来源: Linux
> 创建时间: 2024-10-06T00:50:26+08:00
> 更新时间: 2026-01-11T09:43:20.562698+08:00
> 阅读量: 232 | 点赞: 0

---

# 设置root用户密码
```bash
sudo passwd root
```

按照提示输入两次密码

# 修改sshd配置
```bash
sudo vim /etc/ssh/sshd_config
# 按i进入编辑模式，找到#PermitRootLogin prohibit-password，默认是注释掉的。直接在下面添加一行：
PermitRootLogin yes
```

然后按esc，输入:wq保存并退出。

# 重启ssh服务
```bash
sudo systemctl restart ssh
```


